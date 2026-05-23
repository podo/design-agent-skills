#!/usr/bin/env node
/**
 * Q2 migration: write das.category from SKILL.md into each stub.yaml.
 *
 * Run once when stub.yaml files lack a category field:
 *   node scripts/sync-categories.mjs
 *   node scripts/sync-categories.mjs --dry-run   # preview only
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const dryRun     = process.argv.includes('--dry-run');

let updated = 0, skipped = 0, missing = 0;

for (const name of fs.readdirSync(SKILLS_DIR)) {
  const dir      = path.join(SKILLS_DIR, name);
  if (!fs.statSync(dir).isDirectory()) continue;

  const stubPath = path.join(dir, 'stub.yaml');
  const mdPath   = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(stubPath) || !fs.existsSync(mdPath)) continue;

  const stub = fs.readFileSync(stubPath, 'utf8');

  // Skip routers — they have no category
  if (/^type:\s*router/m.test(stub)) continue;

  // Skip if category already present in stub.yaml
  if (/^category:/m.test(stub)) { skipped++; continue; }

  // Extract category from SKILL.md das: block
  const md  = fs.readFileSync(mdPath, 'utf8');
  const cat = (md.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m) || [])[1]?.trim();

  if (!cat) {
    console.warn(`  WARN  ${name}: no das.category in SKILL.md — skipping`);
    missing++;
    continue;
  }

  // Insert category after the tier: line
  const patched = stub.replace(
    /^(tier:\s*.+)$/m,
    `$1\ncategory: ${cat}`
  );

  if (dryRun) {
    console.log(`  DRY   ${name}: would add category: ${cat}`);
  } else {
    fs.writeFileSync(stubPath, patched, 'utf8');
    console.log(`  OK    ${name}: category: ${cat}`);
  }
  updated++;
}

console.log(`\n${dryRun ? 'Dry run — ' : ''}updated ${updated}, already set ${skipped}, missing category ${missing}`);
