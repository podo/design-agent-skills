#!/usr/bin/env node
/**
 * Recategorize a skill — updates stub.yaml and SKILL.md atomically.
 *
 * Usage:
 *   node scripts/recategorize.mjs <skill-name> <new-category> [--dry-run]
 *
 * Example:
 *   node scripts/recategorize.mjs remotion motion-animation --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_CATEGORIES = new Set([
  'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
  'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
  'diagrams', 'data-visualization', 'presentations', 'product-pm',
  'content-design', 'email-design', 'tui-terminal', 'meta',
  'motion-animation', 'design-engineering', 'design-research',
]);

const argv    = process.argv.slice(2);
const skill   = argv[0];
const newCat  = argv[1];
const dryRun  = argv.includes('--dry-run');

function die(msg) { console.error(`Error: ${msg}`); process.exit(1); }

if (!skill || !newCat) {
  console.error('Usage: node scripts/recategorize.mjs <skill-name> <new-category> [--dry-run]');
  console.error(`\nValid categories:\n  ${[...VALID_CATEGORIES].sort().join('\n  ')}`);
  process.exit(1);
}

if (!VALID_CATEGORIES.has(newCat)) {
  die(`"${newCat}" is not a valid category.\n\nValid categories:\n  ${[...VALID_CATEGORIES].sort().join('\n  ')}`);
}

const skillDir = path.join(SKILLS_DIR, skill);
if (!fs.existsSync(skillDir) || !fs.statSync(skillDir).isDirectory()) {
  die(`Skill directory not found: skills/${skill}`);
}

const stubPath = path.join(skillDir, 'stub.yaml');
const skillMdPath = path.join(skillDir, 'SKILL.md');

if (!fs.existsSync(stubPath))    die(`Missing stub.yaml in skills/${skill}`);
if (!fs.existsSync(skillMdPath)) die(`Missing SKILL.md in skills/${skill}`);

const stubRaw   = fs.readFileSync(stubPath, 'utf8');
const skillMdRaw = fs.readFileSync(skillMdPath, 'utf8');

const oldCatM = stubRaw.match(/^category:\s*(.+)$/m);
const oldCat  = oldCatM ? oldCatM[1].trim() : null;

if (!oldCat) die(`No category: field found in skills/${skill}/stub.yaml`);

if (oldCat === newCat) {
  console.log(`skills/${skill} is already categorised as "${newCat}" — nothing to do.`);
  process.exit(0);
}

const newStub    = stubRaw.replace(/^category:\s*.+$/m, `category: ${newCat}`);
const newSkillMd = skillMdRaw.replace(
  /^(\s+category:\s*).+$/m,
  `$1${newCat}`
);

console.log(`\nRecategorising: skills/${skill}`);
console.log(`  stub.yaml   category: ${oldCat} → ${newCat}`);

if (newSkillMd !== skillMdRaw) {
  console.log(`  SKILL.md    das.category: ${oldCat} → ${newCat}`);
} else {
  console.log(`  SKILL.md    no das.category line found (skipped)`);
}

if (dryRun) {
  console.log('\n--dry-run: no files written.');
  process.exit(0);
}

fs.writeFileSync(stubPath, newStub);
fs.writeFileSync(skillMdPath, newSkillMd);

console.log('\nDone. Run npm test to verify.');
