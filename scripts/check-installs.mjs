#!/usr/bin/env node
/**
 * Install-command check.
 *
 * `check-upstreams.mjs` proves an upstream repo is alive; it cannot prove that the
 * `npx skills add …` command a pointer documents actually works. This does, using the
 * skills CLI's own discovery (`npx skills add <target> --list`):
 *   - the target must resolve and list at least one skill, and
 *   - every `--skill <name>` must be one of the names the CLI lists.
 *
 * `--skill` matches the upstream SKILL.md frontmatter `name`, not our directory name, and the
 * CLI cannot see skills whose frontmatter is missing or unparseable — both fail silently for
 * users, which is exactly what this catches.
 *
 * Usage:
 *   node scripts/check-installs.mjs                # whole catalogue (needs network + npx)
 *   node scripts/check-installs.mjs --only a,b,c   # only these skill dirs (PR-scoped gate)
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const CONCURRENCY = 4;

const onlyArg = process.argv.find(a => a.startsWith('--only='))?.slice('--only='.length)
  ?? (process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : undefined);
const ONLY = onlyArg ? new Set(onlyArg.split(',').map(s => s.trim()).filter(Boolean)) : null;

/** Every `npx skills add <target> [--skill X]…` in the text → [{ target, skills }]. */
function commandsIn(text) {
  const out = [];
  for (const m of text.matchAll(/npx skills add\s+([^\s"'`]+)([^\n`]*)/g)) {
    const target = m[1];
    if (!/^(?:https:\/\/github\.com\/)?[\w.-]+\/[\w.-]+/.test(target) || /[<>…]/.test(target)) continue;
    const skills = [...m[2].matchAll(/--skill\s+(?:"([^"]+)"|([^\s"'`]+))/g)].map(s => s[1] ?? s[2]);
    out.push({ target, skills });
  }
  return out;
}

/** Run `skills add <target> --list`; resolve to { ok, names, why }. */
function listSkills(target) {
  return new Promise(resolve => {
    const cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'das-installs-'));
    const p = spawn('npx', ['--yes', 'skills', 'add', target, '--list'],
      { cwd, env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } });
    let buf = '';
    p.stdout.on('data', d => (buf += d));
    p.stderr.on('data', d => (buf += d));
    const timer = setTimeout(() => p.kill(), 180000);
    p.on('close', () => {
      clearTimeout(timer);
      fs.rmSync(cwd, { recursive: true, force: true });
      const text = buf.replace(/\r/g, '\n').replace(/\x1b\[[0-9;?]*[a-zA-Z]/g, '');
      // skill names are indented exactly 4 spaces after the box-drawing bar; descriptions use 6
      const names = [...text.matchAll(/^│ {4}(\S.*?)\s*$/gm)].map(m => m[1]);
      const found = /Found \d+ skills?/.test(text);
      const why = !found ? (text.match(/(Failed to clone[^\n]*|No skills found|Authentication failed[^\n]*)/)?.[1] ?? 'no skills listed') : '';
      resolve({ ok: found && names.length > 0, names, why });
    });
  });
}

// target → { users: Set<skill dir>, wanted: Set<--skill names> }
const targets = new Map();
for (const name of fs.readdirSync(SKILLS_DIR)) {
  if (ONLY && !ONLY.has(name)) continue;
  const dir = path.join(SKILLS_DIR, name);
  const stubPath = path.join(dir, 'stub.yaml');
  if (!fs.existsSync(stubPath) || /^type:\s*router/m.test(fs.readFileSync(stubPath, 'utf8'))) continue;
  const texts = [stubPath, path.join(dir, 'SKILL.md')].filter(fs.existsSync).map(f => fs.readFileSync(f, 'utf8'));
  for (const { target, skills } of texts.flatMap(commandsIn)) {
    const t = targets.get(target) ?? { users: new Set(), wanted: new Set() };
    t.users.add(name);
    skills.forEach(s => t.wanted.add(s));
    targets.set(target, t);
  }
}

const queue = [...targets.keys()];
const failures = [];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const target = queue.shift();
    const { users, wanted } = targets.get(target);
    let r = await listSkills(target);
    // a clone that fails under concurrent load is usually transient; "No skills found" is not
    for (let retry = 0; !r.ok && /clone|no skills listed/i.test(r.why) && retry < 2; retry++) r = await listSkills(target);
    const who = [...users].join(', ');
    if (!r.ok) { failures.push(`${target} (${who}): ${r.why}`); continue; }
    const have = new Set(r.names.map(n => n.toLowerCase()));
    for (const s of wanted) {
      if (!have.has(s.toLowerCase())) failures.push(`${target} (${who}): --skill ${s} is not a skill there (CLI lists: ${r.names.slice(0, 8).join(', ')}${r.names.length > 8 ? ', …' : ''})`);
    }
  }
}));

if (failures.length) {
  console.error(`\n✖ ${failures.length} broken install command(s):\n  ${failures.sort().join('\n  ')}`);
  console.error('\nFAILED — fix the command (use the upstream skill name from `npx skills add <repo> --list`), or document a manual install.');
  process.exit(1);
}
console.log(`OK — ${targets.size} install target(s) verified.`);
