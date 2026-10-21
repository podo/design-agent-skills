#!/usr/bin/env node
/**
 * Install check: does the documented install command really produce the skills a stub claims?
 *
 * `check-upstreams.mjs` proves an upstream repo is alive; it cannot prove `npx skills add …` works.
 * `--skill` matches the upstream SKILL.md frontmatter `name` (not our directory name), the CLI
 * silently skips SKILL.md files whose YAML does not parse, and big repos exceed its clone timeout.
 * All of that fails silently for users, so this runs the real CLI.
 *
 *   node scripts/check-installs.mjs                 # --list mode: every target resolves and lists the --skill names
 *   node scripts/check-installs.mjs --real          # real install per stub into a scratch dir; the directories that
 *                                                   #   land must EXACTLY equal the stub's installed_as
 *   node scripts/check-installs.mjs --only a,b      # only these skill dirs (PR-scoped gate)
 *
 * Env: SKILLS_BIN=/path/to/skills (default: `npx --yes skills`), CONCURRENCY (default 3).
 *
 * Clone timeout: the skills CLI gives up cloning after 300 s. Stubs with size_mb >= 100 get a longer limit
 * (and a warning in their pointer); every other stub runs with the CLI's own default, so a repo that is
 * too big to install for users, but not marked heavy, fails here instead of passing on a generous limit.
 *
 * manual-mode stubs: only their `git clone`, `git -C <clone> sparse-checkout` and `npx skills add <clone>`
 * steps are replayed (into the scratch dir, never with -g), then the landed directories must equal
 * installed_as and a project-relative install_check / upstream_path must exist. Nothing from a downloaded
 * repo is ever executed.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { HEAVY_MB, allStubs, installMode, onlyFilter, parseGitClone, parseNpx, pool, tokenize } from './lib/stub.mjs';
import { installedDirs } from './lib/pointer.mjs';

const REAL = process.argv.includes('--real');
const ONLY = onlyFilter();
const CONCURRENCY = Number(process.env.CONCURRENCY) || 3;
const BIN = process.env.SKILLS_BIN ? [process.env.SKILLS_BIN] : ['npx', '--yes', 'skills'];
const TIMEOUT_MS = REAL ? 1_000_000 : 180_000;
const LONG_CLONE = { SKILLS_CLONE_TIMEOUT_MS: '900000' };

/**
 * Run a command with stdin closed; kill the whole process group on timeout. Resolves { code, out }.
 * `env` is merged over the parent's; the parent's SKILLS_CLONE_TIMEOUT_MS is dropped unless `env` sets it,
 * so the CLI's real default applies.
 */
function run(argv, cwd, env = {}) {
  return new Promise(resolve => {
    const base = { ...process.env };
    delete base.SKILLS_CLONE_TIMEOUT_MS;
    const p = spawn(argv[0], argv.slice(1), {
      cwd, detached: true, stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...base, GIT_TERMINAL_PROMPT: '0', NO_COLOR: '1', CI: '1', ...env },
    });
    let out = '';
    p.stdout.on('data', d => (out += d));
    p.stderr.on('data', d => (out += d));
    const timer = setTimeout(() => { try { process.kill(-p.pid, 'SIGKILL'); } catch {} out += '\nTIMEOUT'; }, TIMEOUT_MS);
    p.on('close', code => { clearTimeout(timer); resolve({ code: code ?? 1, out: out.replace(/\r/g, '\n').replace(/\x1b\[[0-9;?]*[a-zA-Z]/g, '') }); });
    p.on('error', e => { clearTimeout(timer); resolve({ code: 1, out: String(e) }); });
  });
}

const scratch = () => fs.mkdtempSync(path.join(os.tmpdir(), 'das-installs-'));
const rm = d => fs.rmSync(d, { recursive: true, force: true });

/** `skills add <target> --list` -> names the CLI can see (4-space-indented lines after the bar). */
async function listNames(target) {
  const cwd = scratch();
  try {
    let r;
    for (let i = 0; i < 3; i++) {
      r = await run([...BIN, 'add', target, '--list'], cwd, LONG_CLONE);   // list mode checks resolution, not clone time
      if (/Found \d+ skills?/.test(r.out) || !/clone|TIMEOUT/i.test(r.out)) break;   // retry transient clone failures only
    }
    const names = [...r.out.matchAll(/^│ {4}(\S.*?)\s*$/gm)].map(m => m[1]);
    const ok = /Found \d+ skills?/.test(r.out) && names.length > 0;
    return { ok, names, why: ok ? '' : (r.out.match(/(Failed to clone[^\n]*|No skills found|Authentication failed[^\n]*|TIMEOUT)/)?.[1] ?? 'no skills listed') };
  } finally { rm(cwd); }
}

function frontmatter(file) {
  const t = fs.readFileSync(file, 'utf8');
  const fm = t.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return { ok: false, why: 'no YAML frontmatter' };
  const name = fm[1].match(/^name:\s*(.+)$/m)?.[1];
  const hasDesc = /^description:/m.test(fm[1]);
  return { ok: !!name && hasDesc, why: !name ? 'frontmatter has no name' : !hasDesc ? 'frontmatter has no description' : '' };
}

/** Real install of every command of an npx stub; compare landed dirs with installed_as. */
async function realNpx(stub) {
  const problems = [];
  const cwd = scratch();
  const env = Number(stub.size_mb) >= HEAVY_MB ? LONG_CLONE : {};
  try {
    const cmds = [stub.install_default, ...(stub.install_extra ?? [])].filter(Boolean);
    for (const cmd of cmds) {
      const t = tokenize(cmd);
      let r;
      for (let attempt = 0; attempt < 3; attempt++) {   // clone failures under load are usually transient
        r = await run([...BIN, 'add', ...t.slice(t.indexOf('add') + 1), '-y'], cwd, env);
        if (r.code === 0 || !/clone|TIMEOUT|ECONN|ETIMEDOUT|network/i.test(r.out)) break;
      }
      if (r.code !== 0) problems.push(`\`${cmd}\` exited ${r.code}: ${r.out.trim().split('\n').slice(-2).join(' | ')}`);
    }
    const base = path.join(cwd, '.agents', 'skills');
    const landed = fs.existsSync(base) ? fs.readdirSync(base).filter(d => fs.existsSync(path.join(base, d, 'SKILL.md'))) : [];
    const expected = installedDirs(stub);
    for (const e of expected) if (!landed.includes(e)) problems.push(`expected "${e}" to be installed, but it was not (landed: ${landed.join(', ') || 'nothing'})`);
    for (const l of landed) if (!expected.includes(l)) problems.push(`unexpected "${l}" landed (add it to installed_as or narrow the command with --skill)`);
    for (const l of landed) {
      const f = frontmatter(path.join(base, l, 'SKILL.md'));
      if (!f.ok) problems.push(`landed "${l}": ${f.why}`);
    }
    return problems;
  } finally { rm(cwd); }
}

/**
 * manual stubs: replay only the *safe* steps in a scratch dir: `git clone` (flags such as --filter and
 * --sparse are kept), `git -C <clone> sparse-checkout …`, and `npx skills add <clone path>` (always as a
 * project install: -g / --global are dropped so the developer's real skills directory is never touched).
 * Anything else (./setup, cp, curl, pip, …) is never executed. Then the directories that landed must equal
 * installed_as, and upstream_path (in the clone) and a project-relative install_check (in the scratch
 * project) must exist.
 */
async function realManual(stub) {
  const steps = (stub.install_steps ?? []).flatMap(s => s.split('&&').map(x => x.trim()));
  if (!steps.some(s => /^git clone\b/.test(s))) return { skipped: true, problems: [] };
  const problems = [];
  const cwd = scratch();
  const home = os.homedir();
  const mapped = new Map();                       // documented clone dir -> scratch clone dir
  const toScratch = p => {
    for (const [from, to] of mapped) if (p === from || p.startsWith(from + '/')) return to + p.slice(from.length);
    return p;
  };
  const lastLine = out => out.trim().split('\n').slice(-1)[0];
  try {
    let cloned = null;
    let installed = false;
    for (const step of steps) {
      const t = tokenize(step);
      if (t[0] === 'git' && t[1] === 'clone') {
        const { url, dest: after, flags } = parseGitClone(t.slice(2));
        if (!url) { problems.push(`cannot replay "${step}": only \`git clone <https url> [dir]\` is supported`); return { skipped: false, problems }; }
        const documented = after ?? path.basename(url, '.git');
        const dest = path.join(cwd, path.basename(documented));
        const r = await run(['git', 'clone', ...flags, url, dest], cwd);
        if (r.code !== 0) { problems.push(`git clone ${url} failed: ${lastLine(r.out)}`); return { skipped: false, problems }; }
        for (const k of new Set([documented, documented.replace(/^~/, home), path.resolve(documented.replace(/^~/, home))])) mapped.set(k, dest);
        cloned = dest;
      } else if (t[0] === 'git' && t[1] === '-C' && t[3] === 'sparse-checkout') {
        const r = await run(['git', '-C', toScratch(t[2].replace(/^~/, home)), ...t.slice(3)], cwd);
        if (r.code !== 0) problems.push(`${step} failed: ${lastLine(r.out)}`);
      } else if (t[0] === 'npx' && t[1] === 'skills' && t[2] === 'add') {
        const args = t.slice(3).filter(x => x !== '-g' && x !== '--global').map(x => toScratch(x.replace(/^~/, home)));
        const r = await run([...BIN, 'add', ...args, '-y'], cwd);
        if (r.code !== 0) problems.push(`${step} exited ${r.code}: ${lastLine(r.out)}`);
        installed = true;
      }
    }
    if (installed) {
      const base = path.join(cwd, '.agents', 'skills');
      const landed = fs.existsSync(base) ? fs.readdirSync(base).filter(d => fs.existsSync(path.join(base, d, 'SKILL.md'))) : [];
      const expected = installedDirs(stub);
      for (const e of expected) if (!landed.includes(e)) problems.push(`expected "${e}" to be installed, but it was not (landed: ${landed.join(', ') || 'nothing'})`);
      for (const l of landed) if (!expected.includes(l)) problems.push(`unexpected "${l}" landed (add it to installed_as or narrow the install)`);
      const check = stub.install_check;
      if (check && !/^[/~]/.test(check) && !fs.existsSync(path.join(cwd, check))) {
        problems.push(`install_check "${check}" does not exist after the install, so the pointer would never detect it`);
      }
    }
    if (cloned && stub.upstream_path) {
      const f = path.join(cloned, stub.upstream_path);
      if (!fs.existsSync(f)) problems.push(`upstream_path "${stub.upstream_path}" not found in the clone`);
      else { const fm = frontmatter(f); if (!fm.ok) problems.push(`upstream_path SKILL.md: ${fm.why}`); }
    }
    return { skipped: false, problems };
  } finally { rm(cwd); }
}

const stubs = allStubs().filter(s => s.type !== 'router' && (!ONLY || ONLY.has(s.name)));
const failures = [];
const note = (stub, msgs) => msgs.forEach(m => failures.push(`${stub.name}: ${m}`));

if (REAL) {
  const heavy = stubs.filter(s => Number(s.size_mb) >= HEAVY_MB);
  const light = stubs.filter(s => !heavy.includes(s));
  let manualSkipped = 0;
  const one = async stub => {
    const mode = installMode(stub);
    if (mode === 'builtin') return;
    try {
      if (mode === 'manual') { const r = await realManual(stub); if (r.skipped) manualSkipped++; note(stub, r.problems); }
      else note(stub, await realNpx(stub));
    } catch (e) {
      note(stub, [`the checker itself failed: ${e.message}`]);   // one bad stub must not abort the whole run
    }
    process.stdout.write('.');
  };
  await pool(light, one, CONCURRENCY);
  await pool(heavy, one, 1);                    // big clones one at a time so they cannot starve each other
  process.stdout.write('\n');
  if (manualSkipped) console.log(`(${manualSkipped} manual stub(s) have no git clone step to run; skipped)`);
} else {
  const targets = new Map();                    // target -> { users, wanted }
  for (const s of stubs) {
    if (installMode(s) !== 'npx') continue;
    for (const cmd of [s.install_default, ...(s.install_extra ?? [])].filter(Boolean)) {
      const p = parseNpx(cmd);
      if (!p?.target) { failures.push(`${s.name}: cannot parse install command "${cmd}"`); continue; }
      const t = targets.get(p.target) ?? { users: new Set(), wanted: new Set() };
      t.users.add(s.name); p.skills.forEach(x => t.wanted.add(x)); targets.set(p.target, t);
    }
  }
  await pool([...targets.keys()], async target => {
    const { users, wanted } = targets.get(target);
    const r = await listNames(target);
    const who = [...users].join(', ');
    if (!r.ok) { failures.push(`${who}: ${target}: ${r.why}`); return; }
    const have = new Set(r.names.map(n => n.toLowerCase()));
    for (const s of wanted) if (!have.has(s.toLowerCase())) failures.push(`${who}: ${target}: --skill ${s} is not a skill there (CLI lists: ${r.names.slice(0, 8).join(', ')}${r.names.length > 8 ? ', …' : ''})`);
  }, CONCURRENCY);
}

if (failures.length) {
  console.error(`\n✖ ${failures.length} install problem(s):\n  ${failures.sort().join('\n  ')}`);
  console.error('\nFAILED — fix stub.yaml (installed_as / install_default), then `npm run generate`.');
  process.exit(1);
}
console.log(`OK — ${stubs.length} stub(s) ${REAL ? 'really installed' : 'targets verified'}.`);
