/**
 * Offline lint rules for the install side of every stub. Used by test/pointers.test.js and by
 * scripts/lint-stubs.mjs (so a contributor can check one stub without running the whole suite).
 * No network: anything that needs a real install lives in scripts/check-installs.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { SKILLS_DIR, installMode, parseNpx, repoOf } from './stub.mjs';
import { applyBlock, claimedDirs, installedDirs, renderInstallBlock } from './pointer.mjs';

const MODES = new Set(['npx', 'manual', 'builtin']);
const BANNED = [
  [/claude skills add/, '`claude skills add` is not a Claude Code command'],
  [/claude plugin add\b/, '`claude plugin add` is not a Claude Code command (use `claude plugin marketplace add` then `claude plugin install`)'],
  [/\.design-agent-skills/, 'legacy ~/.design-agent-skills path (installs live in ~/.agents/skills or .agents/skills)'],
  [/--skill\s+<[^>]*>/, '`--skill <placeholder>` is not an installable command'],
];
// "31 skills", "31 design skills", "71 brand design systems": a number, up to two words, then the noun
const COUNT_CLAIM = /\b\d{2,}\+?\s+(?:[A-Za-z-]+\s+){0,2}?(?:skills|agents|commands|specialists|recipes|plugins|workflows|systems)\b/i;

/**
 * Values a real YAML parser reads differently from our line reader: a plain scalar containing ': ' is a
 * mapping (or an error), and one containing ' #' loses the rest as a comment. Quote them.
 */
function rawYamlProblems(raw) {
  const out = [];
  for (const [i, line] of raw.replace(/\r\n?/g, '\n').split('\n').entries()) {
    const m = line.match(/^(?:[a-z_]+:\s+|\s+-\s+)(.+?)\s*$/);
    if (!m) continue;
    const at = `stub.yaml line ${i + 1}`;
    const quoted = m[1].match(/^"(?:[^"\\]|\\.)*"(.*)$/) || m[1].match(/^'[^']*'(.*)$/);
    if (quoted) {
      // the shell reader in install.sh keeps whatever follows the closing quote, so there must be nothing
      if (quoted[1].trim()) out.push(`${at}: text after the closing quote (a comment or a stray character); remove it`);
      continue;
    }
    if (/^["'|>\[{]/.test(m[1])) continue;                  // block scalars, flow collections, unterminated quotes: not ours to judge
    if (/: /.test(m[1]) || /:$/.test(m[1])) out.push(`${at}: unquoted value contains ": " (a real YAML parser reads it as a mapping); wrap it in double quotes`);
    else if (/\s#/.test(m[1])) out.push(`${at}: unquoted value contains " #" (a real YAML parser drops the rest as a comment); wrap it in double quotes`);
  }
  return out;
}

function checkNpx(label, cmd, upstreamRepo, out) {
  const p = parseNpx(cmd);
  if (!p) { out.push(`${label}: must be an \`npx skills add …\` command (got "${cmd}")`); return null; }
  if (!p.target) { out.push(`${label}: no install target`); return null; }
  if (/[<>…]/.test(cmd)) out.push(`${label}: contains a <placeholder>`);
  for (const f of p.flags) {
    if (['-g', '--global', '-y', '--yes', '--all'].includes(f)) {
      out.push(`${label}: do not put ${f} in stub.yaml (the pointer adds -g/-y itself; --all installs every skill in the repo)`);
    }
  }
  const repo = repoOf(p.target);
  if (!repo) out.push(`${label}: "${p.target}" is not an owner/repo (or GitHub URL) install target`);
  else if (upstreamRepo && repo !== upstreamRepo) out.push(`${label}: target ${repo} is not the upstream repo ${upstreamRepo}`);
  return p;
}

/** Violations for one stub. `md` defaults to its SKILL.md; `all` is Map(name -> stub). */
export function lintStub(stub, all, md = fs.existsSync(stub.mdPath) ? fs.readFileSync(stub.mdPath, 'utf8') : '') {
  const out = [];
  if (stub.type === 'router') return out;
  const mode = installMode(stub);
  const upstreamRepo = /github\.com/.test(stub.upstream ?? '') ? repoOf(stub.upstream) : null;

  if (stub.raw) out.push(...rawYamlProblems(stub.raw));
  if (!MODES.has(mode)) out.push(`install_mode "${mode}" must be one of ${[...MODES].join(', ')}`);

  if (mode !== 'builtin') {
    if (!stub.installed_as?.length) out.push('installed_as is required (the upstream skill names this stub installs)');
    if (new Set(stub.installed_as ?? []).size !== (stub.installed_as ?? []).length) out.push('installed_as has duplicates');
  }

  if (mode === 'npx') {
    if (!stub.install_default) out.push('install_default is required (the primary `npx skills add …` command)');
    const wanted = new Set();
    let allTargeted = true;
    for (const [label, cmd] of [['install_default', stub.install_default], ...(stub.install_extra ?? []).map((c, i) => [`install_extra[${i}]`, c])]) {
      if (!cmd) continue;
      const p = checkNpx(label, cmd, upstreamRepo, out);
      if (!p) continue;
      if (!p.skills.length) allTargeted = false;
      for (const s of p.skills) {
        wanted.add(s);
        if (!(stub.installed_as ?? []).includes(s)) out.push(`${label}: --skill "${s}" is not listed in installed_as`);
      }
    }
    if (allTargeted && wanted.size) {
      for (const n of stub.installed_as ?? []) if (!wanted.has(n)) out.push(`installed_as "${n}" is never installed by an install command`);
    }
  } else if (mode === 'manual') {
    if (!stub.install_steps?.length) out.push('install_mode: manual needs install_steps');
    if (!stub.manual_reason) out.push('install_mode: manual needs manual_reason (why the skills CLI cannot install it)');
    for (const step of stub.install_steps ?? []) {
      const p = parseNpx(step);
      const bad = p?.flags.filter(f => ['-g', '--global', '-y', '--yes', '--all'].includes(f));
      if (bad?.length) out.push(`install_steps "${step}": do not put ${bad.join(' ')} in a step (global vs project scope is the user's choice; --all installs every skill in the repo)`);
      if (p && /npx skills add[^&;|]*[&;|]/.test(step)) out.push(`install_steps "${step}": keep \`npx skills add\` the last command of its step (the pointer appends -g/-y to it)`);
    }
  } else if (mode === 'builtin') {
    if (!stub.manual_reason) out.push('install_mode: builtin needs manual_reason');
  }

  if (stub.type === 'skill' && mode === 'npx' && !/npx skills add/.test(stub.install_default ?? '')) {
    out.push('type:skill needs an npx skills add install_default');
  }

  const plugin = stub.install_claude ?? [];
  for (const c of plugin) {
    if (!/^(\/plugin |claude plugin )/.test(c)) out.push(`install_claude "${c}" must start with /plugin or claude plugin`);
  }
  // an install step is `/plugin install x@y` or `claude plugin install x@y` (the marketplace *name* may contain "marketplace")
  const isInstall = c => /^(?:\/plugin|claude plugin) install\b/.test(c);
  const isMarketplaceAdd = c => /^(?:\/plugin|claude plugin) marketplace add\b/.test(c);
  if (plugin.some(isMarketplaceAdd) && !plugin.some(isInstall)) {
    out.push('install_claude adds a marketplace but never installs a plugin from it (add the `/plugin install name@marketplace` step)');
  }

  const installFields = [stub.install_default, ...(stub.install_extra ?? []), ...plugin, ...(stub.install_steps ?? [])].filter(Boolean).join('\n');
  for (const [re, why] of BANNED) {
    if (re.test(installFields)) out.push(`stub.yaml install field: ${why}`);
    if (re.test(md)) out.push(`SKILL.md: ${why}`);
  }

  if (stub.size_mb != null && !(Number(stub.size_mb) >= 0)) out.push('size_mb must be a number');
  for (const other of stub.conflicts_with ?? []) {
    const o = all?.get(other);
    if (!o) { out.push(`conflicts_with "${other}" is not a stub`); continue; }
    if (!(o.conflicts_with ?? []).includes(stub.name)) out.push(`conflicts_with "${other}" must be listed back in ${other}/stub.yaml`);
    if (!claimedDirs(stub).some(d => claimedDirs(o).includes(d))) out.push(`conflicts_with "${other}": they share no install directory`);
  }

  const fmEnd = md.indexOf('\n---', 4);
  const desc = md.slice(0, fmEnd > 0 ? fmEnd : 0);
  const prose = md.replace(/<!-- das:install:start[\s\S]*?das:install:end -->/, '');
  if (COUNT_CLAIM.test(desc)) out.push(`description hardcodes a skill/agent/command count (goes stale): "${desc.match(COUNT_CLAIM)[0]}"`);
  else if (COUNT_CLAIM.test(prose)) out.push(`pointer hardcodes a skill/agent/command count (goes stale): "${prose.match(COUNT_CLAIM)[0]}"`);

  const names = new Set([...(stub.installed_as ?? []), ...installedDirs(stub)]);
  for (const m of prose.matchAll(/Skill names?:\s*([^\n]*)/g)) {
    for (const [, n] of m[1].matchAll(/`([^`]+)`/g)) {
      if (!names.has(n)) out.push(`"Skill name: ${n}" is not one of the installed skills (${[...names].slice(0, 5).join(', ')}…)`);
    }
  }

  if (stub.installed_as?.length || mode === 'builtin') {
    const fresh = applyBlock(md, renderInstallBlock(stub, all));
    if (fresh !== md) out.push('SKILL.md install section is out of date with stub.yaml (run `npm run generate`)');
  }
  return out;
}

/** Cross-stub rules. Returns [{ stub?, msg }]. */
export function lintCatalogue(stubs) {
  const out = [];
  const real = stubs.filter(s => s.type !== 'router');
  const owners = new Map();
  for (const s of real) {
    for (const d of claimedDirs(s)) {
      if (!owners.has(d)) owners.set(d, []);
      owners.get(d).push(s);
    }
  }
  for (const [dir, list] of owners) {
    if (list.length < 2) continue;
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i], b = list[j];
        const sameRepo = a.upstream && b.upstream && repoOf(a.upstream) === repoOf(b.upstream);
        const declared = (a.conflicts_with ?? []).includes(b.name) && (b.conflicts_with ?? []).includes(a.name);
        if (!sameRepo && !declared) {
          out.push({ stub: a.name, msg: `"${dir}" is also written by ${b.name} (its install or its pointer directory; different upstreams): declare conflicts_with on both or change what is installed` });
        }
      }
    }
  }
  const router = fs.readFileSync(path.join(SKILLS_DIR, 'design-catalogue', 'SKILL.md'), 'utf8');
  for (const s of real) {
    if (!router.includes(`../${s.name}/SKILL.md`)) out.push({ stub: s.name, msg: 'is not listed in skills/design-catalogue/SKILL.md' });
  }
  return out;
}
