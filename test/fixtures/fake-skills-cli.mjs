#!/usr/bin/env node
/**
 * A stand-in for the `skills` CLI so scripts/check-installs.mjs can be tested offline.
 * Catalogue: JSON in $FAKE_SKILLS_CATALOG mapping install target -> [upstream skill names].
 *   skills add <target> --list               -> prints the CLI's "Found N skills" listing
 *   skills add <target> [--skill a b] -y     -> writes .agents/skills/<sanitised name>/SKILL.md in cwd
 * Unknown targets fail the way a failed clone does. A name ending in "!" is listed but has no frontmatter.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const catalog = JSON.parse(fs.readFileSync(process.env.FAKE_SKILLS_CATALOG, 'utf8'));
const sanitize = n => n.toLowerCase().replace(/[^a-z0-9._]+/g, '-').replace(/^[.-]+|[.-]+$/g, '');

if (args[0] !== 'add') process.exit(2);
const rest = args.slice(1);
const target = rest.find(a => !a.startsWith('-'));
// $FAKE_SKILLS_LOG: one JSON line per call, so tests can assert which flags and env the checker passed on
if (process.env.FAKE_SKILLS_LOG) {
  fs.appendFileSync(process.env.FAKE_SKILLS_LOG, JSON.stringify({ args, cloneTimeout: process.env.SKILLS_CLONE_TIMEOUT_MS ?? null }) + '\n');
}
// a local directory (a clone made by a manual route) offers the skills listed under "@local"
const isLocalDir = target && fs.existsSync(target) && fs.statSync(target).isDirectory();
const names = catalog[target] ?? (isLocalDir ? catalog['@local'] : undefined);
if (!names) { console.error('■ Failed to clone repository'); process.exit(1); }

if (rest.includes('--list')) {
  console.log(`◇  Found ${names.length} skills`);
  for (const n of names) console.log(`│    ${n}`);
  process.exit(0);
}

const wanted = [];
for (let i = 0; i < rest.length; i++) {
  if (rest[i] === '--skill' || rest[i] === '-s') while (rest[i + 1] && !rest[i + 1].startsWith('-')) wanted.push(rest[++i]);
}
const install = wanted.length ? wanted : names;
for (const n of install) {
  if (!names.includes(n)) { console.error(`■ No matching skills found for: ${n}`); process.exit(1); }
  const dir = path.join(process.cwd(), '.agents', 'skills', sanitize(n));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'SKILL.md'), `---\nname: ${n}\ndescription: fake ${n}\n---\n# ${n}\n`);
}
console.log(`◇ Installed ${install.length} skill${install.length === 1 ? '' : 's'}`);
