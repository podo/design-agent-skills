#!/usr/bin/env node
/**
 * Offline install lint for stubs (the same rules test/pointers.test.js enforces).
 *
 *   node scripts/lint-stubs.mjs                 # every stub + cross-stub rules
 *   node scripts/lint-stubs.mjs --only a,b      # just these stubs (cross-stub rules skipped)
 */
import fs from 'node:fs';
import { allStubs, onlyFilter } from './lib/stub.mjs';
import { lintCatalogue, lintStub } from './lib/lint.mjs';

const ONLY = onlyFilter();

const stubs = allStubs();
const byName = new Map(stubs.map(s => [s.name, s]));
let bad = 0;
const report = (name, msgs) => { if (msgs.length) { bad += msgs.length; console.error(`✖ ${name}\n   - ${msgs.join('\n   - ')}`); } };

for (const s of stubs) {
  if (s.type === 'router' || (ONLY && !ONLY.has(s.name))) continue;
  report(s.name, lintStub(s, byName, fs.readFileSync(s.mdPath, 'utf8')));
}
if (!ONLY) {
  const grouped = {};
  for (const v of lintCatalogue(stubs)) (grouped[v.stub ?? '(catalogue)'] ??= []).push(v.msg);
  for (const [n, m] of Object.entries(grouped)) report(n, m);
}
if (bad) { console.error(`\nFAILED — ${bad} violation(s).`); process.exit(1); }
console.log('OK — no violations.');
