#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE   = 'podo/design-agent-skills';
const ROOT      = path.resolve(fileURLToPath(import.meta.url), '../../');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_CATEGORIES = new Set([
  'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
  'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
  'diagrams', 'data-visualization', 'presentations', 'product-pm',
  'content-design', 'email-design', 'tui-terminal', 'meta',
]);

// ── stub.yaml reader ──────────────────────────────────────────────────────────

function readStubs() {
  return fs.readdirSync(SKILLS_DIR)
    .filter(n => fs.statSync(path.join(SKILLS_DIR, n)).isDirectory())
    .map(name => {
      const p = path.join(SKILLS_DIR, name, 'stub.yaml');
      if (!fs.existsSync(p)) return null;
      const raw = fs.readFileSync(p, 'utf8');
      const get = key => { const m = raw.match(new RegExp(`^${key}:\\s*(.+)$`, 'm')); return m ? m[1].trim() : null; };
      return { name, type: get('type'), rank: Number(get('rank')), category: get('category') };
    })
    .filter(Boolean);
}

function filterStubs(stubs, { maxRank, category }) {
  return stubs.filter(s => {
    if (s.type === 'router') return false;
    if (maxRank && s.rank > maxRank) return false;
    if (category && s.category !== category) return false;
    return true;
  });
}

// ── install helpers ───────────────────────────────────────────────────────────

function runDirect(command, extraArgs = []) {
  const result = spawnSync('npx', ['skills', command, ...extraArgs], { stdio: 'inherit', shell: false });
  if (result.error) { console.error(result.error.message); process.exit(1); }
  process.exit(result.status || 0);
}

function installSkills(names, scope) {
  const scopeFlag = scope === 'global' ? ['-g'] : [];
  console.log(`\nInstalling ${names.length} skills...\n`);
  let failed = 0;
  for (const name of names) {
    process.stdout.write(`  → ${name} `);
    const result = spawnSync(
      'npx', ['skills', 'add', PACKAGE, '--skill', name, ...scopeFlag, '-y'],
      { stdio: ['ignore', 'ignore', 'pipe'], shell: false }
    );
    if (result.status === 0) {
      process.stdout.write('✓\n');
    } else {
      process.stdout.write('✗\n');
      failed++;
    }
  }
  if (failed > 0) {
    console.error(`\n${failed} skill(s) failed to install.`);
    process.exit(1);
  }
  console.log(`\nDone. ${names.length} skills installed.`);
  process.exit(0);
}

// ── prompt helpers ────────────────────────────────────────────────────────────

function ask(prompt) {
  return new Promise(resolve => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    process.stdout.write(prompt);
    rl.once('line', answer => { rl.close(); resolve(answer.trim()); });
  });
}

async function askScope() {
  const answer = await ask(
    '\nInstall scope:\n' +
    '  1) User    — ~/.agents/skills/  (all projects, all agents)\n' +
    '  2) Project — .agents/skills/    (this project only)\n' +
    '\nChoice [1]: '
  );
  return answer === '2' ? 'project' : 'global';
}

async function askProfile() {
  const stubs = readStubs();
  const r1 = stubs.filter(s => s.type !== 'router' && s.rank === 1).length;
  const r12 = stubs.filter(s => s.type !== 'router' && s.rank <= 2).length;
  const all = stubs.filter(s => s.type !== 'router').length;

  const answer = await ask(
    '\nInstall profile:\n' +
    `  1) Picks      — ${r1} skills  (best in class, one per category)\n` +
    `  2) Essentials — ${r12} skills  (full coverage, no redundancy)\n` +
    `  3) All        — ${all} skills  (everything including niche)\n` +
    '  4) Category   — pick a specific domain\n' +
    '\nChoice [3]: '
  );
  return answer.trim() || '3';
}

async function askCategory() {
  const cats = [...VALID_CATEGORIES].filter(c => c !== 'meta').sort();
  const lines = cats.map((c, i) => `  ${i + 1}) ${c}`).join('\n');
  const answer = await ask(`\nCategory:\n${lines}\n\nName or number: `);
  const n = Number(answer);
  if (n >= 1 && n <= cats.length) return cats[n - 1];
  if (VALID_CATEGORIES.has(answer)) return answer;
  console.error(`Unknown category "${answer}"`);
  process.exit(1);
}

// ── arg parsing ───────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const cmd  = args[0] || '';

const flagPicks      = args.includes('--picks');
const flagEssentials = args.includes('--essentials');
const flagAll        = args.includes('--all');
const flagGlobal     = args.some(a => a === '-g' || a === '--global');
const flagProject    = args.some(a => a === '-p' || a === '--project');
const catIdx         = args.indexOf('--category');
const flagCategory   = catIdx !== -1 ? args[catIdx + 1] : null;

const isInstall = cmd === '' || cmd === 'install';
const scopeSet  = flagGlobal || flagProject;
const profileSet = flagPicks || flagEssentials || flagAll || flagCategory;

// ── main ──────────────────────────────────────────────────────────────────────

if (!isInstall) {
  // Pass-through for any non-install command (e.g. `design-agent-skills update`)
  const result = spawnSync('npx', ['skills', cmd, ...args.slice(1)], { stdio: 'inherit', shell: false });
  if (result.error) { console.error(result.error.message); process.exit(1); }
  process.exit(result.status || 0);
}

// Validate category flag
if (flagCategory && !VALID_CATEGORIES.has(flagCategory)) {
  console.error(`Unknown category "${flagCategory}". Valid categories:\n  ${[...VALID_CATEGORIES].sort().join(', ')}`);
  process.exit(1);
}

async function main() {
  // Determine scope
  const scope = scopeSet
    ? (flagGlobal ? 'global' : 'project')
    : (process.stdin.isTTY ? await askScope() : 'global');

  const scopeFlag = scope === 'global' ? ['-g'] : [];

  // No profile/category flags and not TTY → install all (backward compat)
  if (!profileSet && !process.stdin.isTTY) {
    runDirect('add', [PACKAGE, ...scopeFlag]);
    return;
  }

  // Determine profile interactively if needed
  let maxRank = null;
  let category = flagCategory || null;

  if (profileSet) {
    if (flagPicks)      maxRank = 1;
    else if (flagEssentials) maxRank = 2;
    else if (flagAll)   maxRank = null; // all ranks
    // category already set above
  } else if (process.stdin.isTTY) {
    const choice = await askProfile();
    if (choice === '1') maxRank = 1;
    else if (choice === '2') maxRank = 2;
    else if (choice === '4') { category = await askCategory(); }
    // choice === '3' → maxRank stays null = install all
  }

  // Install all (no filter) → use fast batch install
  if (maxRank === null && !category) {
    runDirect('add', [PACKAGE, ...scopeFlag]);
    return;
  }

  // Install filtered subset
  const stubs = readStubs();
  const filtered = filterStubs(stubs, { maxRank, category });

  if (filtered.length === 0) {
    console.error('No skills match the selected profile/category.');
    process.exit(1);
  }

  await installSkills(filtered.map(s => s.name), scope);
}

main().catch(err => { console.error(err.message); process.exit(1); });
