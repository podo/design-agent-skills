#!/usr/bin/env node
/**
 * Regenerates the install section of every pointer SKILL.md from its stub.yaml.
 *
 *   node scripts/generate-pointers.mjs                  # rewrite drifted pointers
 *   node scripts/generate-pointers.mjs --check          # exit 1 if any pointer is out of date
 *   node scripts/generate-pointers.mjs --only a,b       # only these skill dirs
 *
 * Needs `installed_as` (and an install route) in stub.yaml; stubs without them are reported, not guessed.
 */
import fs from 'node:fs';
import { allStubs } from './lib/stub.mjs';
import { applyBlock, renderInstallBlock } from './lib/pointer.mjs';

const CHECK = process.argv.includes('--check');
const onlyArg = process.argv.find(a => a.startsWith('--only='))?.slice(7)
  ?? (process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : undefined);
const ONLY = onlyArg ? new Set(onlyArg.split(',').map(s => s.trim()).filter(Boolean)) : null;

const stubs = allStubs().filter(s => s.type !== 'router');
const byName = new Map(stubs.map(s => [s.name, s]));
const drifted = [];
const skipped = [];

for (const stub of stubs) {
  if (ONLY && !ONLY.has(stub.name)) continue;
  if (!stub.installed_as?.length && (stub.install_mode || 'npx') !== 'builtin') { skipped.push(stub.name); continue; }
  const md = fs.readFileSync(stub.mdPath, 'utf8');
  const next = applyBlock(md, renderInstallBlock(stub, byName));
  if (next === md) continue;
  drifted.push(stub.name);
  if (!CHECK) fs.writeFileSync(stub.mdPath, next, 'utf8');
}

if (skipped.length) console.warn(`⚠ no installed_as, skipped: ${skipped.join(', ')}`);
if (CHECK) {
  if (drifted.length) {
    console.error(`✖ ${drifted.length} pointer(s) out of date with stub.yaml: ${drifted.join(', ')}\n  Run: npm run generate`);
    process.exit(1);
  }
  console.log(`OK — ${stubs.length - skipped.length} pointer(s) match stub.yaml.`);
} else {
  console.log(drifted.length ? `Rewrote ${drifted.length} pointer(s): ${drifted.join(', ')}` : 'All pointers already up to date.');
}
