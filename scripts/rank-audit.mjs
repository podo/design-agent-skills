#!/usr/bin/env node
/**
 * Q3 rank audit: show rank distribution by category.
 *
 *   node scripts/rank-audit.mjs
 *   node scripts/rank-audit.mjs --category figma-code
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const filterCat  = process.argv.find((a, i) => process.argv[i - 1] === '--category');

// Load stubs
const stubs = [];
for (const name of fs.readdirSync(SKILLS_DIR)) {
  const dir  = path.join(SKILLS_DIR, name);
  if (!fs.statSync(dir).isDirectory()) continue;
  const stubPath = path.join(dir, 'stub.yaml');
  const mdPath   = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(stubPath)) continue;

  const raw  = fs.readFileSync(stubPath, 'utf8');
  const get  = k => (raw.match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) || [])[1]?.trim();
  const type = get('type');
  if (type === 'router') continue;

  let category = get('category');
  if (!category && fs.existsSync(mdPath)) {
    const md = fs.readFileSync(mdPath, 'utf8');
    category = (md.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m) || [])[1]?.trim();
  }

  stubs.push({ name, type, rank: Number(get('rank')), tier: get('tier'), category: category || '(none)' });
}

// Group by category
const byCategory = {};
for (const s of stubs) {
  if (filterCat && s.category !== filterCat) continue;
  (byCategory[s.category] ??= []).push(s);
}

const cats = Object.keys(byCategory).sort();
let r1Total = 0, r2Total = 0, r3Total = 0;

console.log(`\nRank distribution — ${stubs.length} non-router skills\n`);
console.log(`${'Category'.padEnd(30)} ${'R1'.padStart(3)} ${'R2'.padStart(3)} ${'R3'.padStart(3)}  ${'Total'.padStart(5)}`);
console.log('─'.repeat(52));

for (const cat of cats) {
  const skills = byCategory[cat];
  const r1 = skills.filter(s => s.rank === 1).length;
  const r2 = skills.filter(s => s.rank === 2).length;
  const r3 = skills.filter(s => s.rank === 3).length;
  r1Total += r1; r2Total += r2; r3Total += r3;
  const flag = r1 === 0 ? ' ← no rank-1' : '';
  console.log(`${cat.padEnd(30)} ${String(r1).padStart(3)} ${String(r2).padStart(3)} ${String(r3).padStart(3)}  ${String(skills.length).padStart(5)}${flag}`);
}

console.log('─'.repeat(52));
console.log(`${'Total'.padEnd(30)} ${String(r1Total).padStart(3)} ${String(r2Total).padStart(3)} ${String(r3Total).padStart(3)}  ${String(r1Total + r2Total + r3Total).padStart(5)}`);
console.log();

if (filterCat) {
  console.log(`Skills in ${filterCat}:`);
  for (const s of byCategory[filterCat] ?? []) {
    console.log(`  [${s.rank}] ${s.tier.padEnd(12)} ${s.name}`);
  }
  console.log();
}
