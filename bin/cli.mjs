#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE    = 'podo/design-agent-skills';
const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../../');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_CATEGORIES = new Set([
  'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
  'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
  'diagrams', 'data-visualization', 'presentations', 'product-pm',
  'content-design', 'email-design', 'tui-terminal', 'meta',
]);

// ── stub reader ───────────────────────────────────────────────────────────────

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
    if (maxRank != null && s.rank > maxRank) return false;
    if (category && s.category !== category) return false;
    return true;
  });
}

// ── ANSI / TUI ────────────────────────────────────────────────────────────────

const TTY = process.stdin.isTTY && process.stdout.isTTY;

const A = {
  reset:      '\x1b[0m',
  dim:        '\x1b[2m',
  white:      '\x1b[97m',
  green:      '\x1b[32m',
  yellow:     '\x1b[33m',
  cyan:       '\x1b[36m',
  red:        '\x1b[31m',
  hideCursor: '\x1b[?25l',
  showCursor: '\x1b[?25h',
};

const S = {
  pending:   `${A.cyan}◇${A.reset}`,
  confirmed: `${A.green}◆${A.reset}`,
  dot_sel:   `${A.cyan}●${A.reset}`,
  dot:       `${A.dim}○${A.reset}`,
  bar:       `${A.dim}│${A.reset}`,
  end:       `${A.dim}└${A.reset}`,
  check:     `${A.green}✓${A.reset}`,
  cross:     `${A.red}✗${A.reset}`,
};

const w = t => process.stdout.write(t);

// Arrow-key selection list. Returns a Promise<number> (selected index).
function selectArrow(question, options) {
  if (!TTY) return Promise.resolve(0);

  return new Promise(resolve => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    w(A.hideCursor);

    const maxLabel = Math.max(...options.map(o => o.label.length));
    let cur = 0, drawn = 0;

    function paint(redraw) {
      if (redraw) w(`\x1b[${drawn}A`);
      drawn = 0;
      const line = t => { w(`\x1b[2K${t}\n`); drawn++; };
      line(`${S.pending}  ${A.white}${question}${A.reset}`);
      options.forEach((o, i) => {
        const sel = cur === i;
        const dot   = sel ? S.dot_sel : S.dot;
        const label = `${sel ? A.white : A.dim}${o.label.padEnd(maxLabel)}${A.reset}`;
        const desc  = o.desc ? `  ${A.dim}${o.desc}${A.reset}` : '';
        line(`${S.bar}  ${dot} ${label}${desc}`);
      });
      line(S.end);
    }

    paint(false);

    function finish(idx) {
      process.stdin.removeListener('data', onKey);
      process.stdin.setRawMode(false);
      process.stdin.pause();
      w(`\x1b[${drawn}A\x1b[J`);
      w(A.showCursor);
      resolve(idx);
    }

    function onKey(key) {
      if      (key === '\x1b[A') { cur = (cur - 1 + options.length) % options.length; paint(true); }
      else if (key === '\x1b[B') { cur = (cur + 1) % options.length; paint(true); }
      else if (key === '\r')     { finish(cur); }
      else if (key === '\x03' || key === 'q' || key === 'Q') {
        w(`\x1b[${drawn}A\x1b[J`);
        w(A.showCursor + '\n');
        process.exit(0);
      }
    }

    process.stdin.on('data', onKey);
  });
}

// Print a confirmed ◆ line followed by a │ continuation bar.
function clack(label) {
  w(`${S.confirmed}  ${A.white}${label}${A.reset}\n${S.bar}\n`);
}

// ── install helpers ───────────────────────────────────────────────────────────

function runDirect(command, extraArgs = []) {
  const result = spawnSync('npx', ['skills', command, ...extraArgs], { stdio: 'inherit', shell: false });
  if (result.error) { console.error(result.error.message); process.exit(1); }
  process.exit(result.status || 0);
}

function installSkills(names, scope) {
  const scopeFlag = scope === 'global' ? ['-g'] : [];
  const t0 = Date.now();

  w(`${S.confirmed}  ${A.white}Installing ${names.length} skills…${A.reset}\n${S.bar}\n`);

  let failed = 0;
  for (const name of names) {
    const r = spawnSync(
      'npx', ['skills', 'add', PACKAGE, '--skill', name, ...scopeFlag, '-y'],
      { stdio: ['ignore', 'ignore', 'pipe'], shell: false }
    );
    if (r.status === 0) { w(`${S.bar}  ${S.check} ${A.dim}${name}${A.reset}\n`); }
    else                { w(`${S.bar}  ${S.cross} ${A.red}${name}${A.reset}\n`); failed++; }
  }

  w(`${S.bar}\n`);
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  if (failed > 0) {
    w(`${S.confirmed}  ${A.red}${failed} skill(s) failed to install${A.reset}\n\n`);
    process.exit(1);
  }
  w(`${S.confirmed}  ${A.green}Done${A.reset}${A.dim} — ${names.length} skills in ${elapsed}s${A.reset}\n\n`);
  process.exit(0);
}

// ── arg parsing ───────────────────────────────────────────────────────────────

const args        = process.argv.slice(2);
const cmd         = args[0] || '';
const flagPicks   = args.includes('--picks');
const flagEss     = args.includes('--essentials');
const flagAll     = args.includes('--all');
const flagGlobal  = args.some(a => a === '-g' || a === '--global');
const flagProject = args.some(a => a === '-p' || a === '--project');
const catArgIdx   = args.indexOf('--category');
const flagCat     = catArgIdx !== -1 ? args[catArgIdx + 1] : null;
const isInstall   = cmd === '' || cmd === 'install';
const profileSet  = flagPicks || flagEss || flagAll || Boolean(flagCat);

if (!isInstall) {
  const r = spawnSync('npx', ['skills', cmd, ...args.slice(1)], { stdio: 'inherit', shell: false });
  if (r.error) { console.error(r.error.message); process.exit(1); }
  process.exit(r.status || 0);
}

if (flagCat && !VALID_CATEGORIES.has(flagCat)) {
  console.error(`Unknown category "${flagCat}". Valid:\n  ${[...VALID_CATEGORIES].sort().join(', ')}`);
  process.exit(1);
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  const stubs = readStubs();
  const r1  = stubs.filter(s => s.type !== 'router' && s.rank === 1).length;
  const r12 = stubs.filter(s => s.type !== 'router' && s.rank <= 2).length;
  const all = stubs.filter(s => s.type !== 'router').length;

  // ── scope ──────────────────────────────────────────────────────────────────
  let scope;
  if (flagGlobal || flagProject) {
    scope = flagGlobal ? 'global' : 'project';
  } else if (!TTY) {
    scope = 'global';
  } else {
    const idx = await selectArrow('Where should skills install?', [
      { label: 'User scope',    desc: '~/.agents/skills/   all projects' },
      { label: 'Project scope', desc: '.agents/skills/     this project' },
    ]);
    scope = idx === 0 ? 'global' : 'project';
    clack(idx === 0 ? 'User scope' : 'Project scope');
  }

  const scopeFlag = scope === 'global' ? ['-g'] : [];

  // ── profile ────────────────────────────────────────────────────────────────

  // Non-TTY with no profile flags → batch install all (backward compat)
  if (!profileSet && !TTY) {
    runDirect('add', [PACKAGE, ...scopeFlag]);
    return;
  }

  let maxRank  = null;
  let category = flagCat || null;

  if (profileSet) {
    if (flagPicks)    maxRank = 1;
    else if (flagEss) maxRank = 2;
    // flagAll → maxRank stays null; flagCat → category already set
  } else {
    const star = `${A.yellow}★${A.reset}`;
    const idx = await selectArrow('Which profile?', [
      { label: 'Picks',       desc: `${String(r1).padStart(3)} skills  ${star} best in class` },
      { label: 'Essentials',  desc: `${String(r12).padStart(3)} skills    full coverage`      },
      { label: 'All',         desc: `${String(all).padStart(3)} skills    everything`          },
      { label: 'Category →',  desc: 'pick a domain'                                           },
    ]);

    if (idx === 0) {
      maxRank = 1;
      clack(`Picks — ${r1} skills`);
    } else if (idx === 1) {
      maxRank = 2;
      clack(`Essentials — ${r12} skills`);
    } else if (idx === 2) {
      maxRank = null;
      clack(`All — ${all} skills`);
    } else {
      // Category sub-selection
      clack('Profile: Category');
      const cats = [...VALID_CATEGORIES].filter(c => c !== 'meta').sort();
      const catOpts = cats.map(c => ({
        label: c,
        desc: `${stubs.filter(s => s.type !== 'router' && s.category === c).length} skills`,
      }));
      const catI = await selectArrow('Pick a category:', catOpts);
      category = cats[catI];
      clack(`Category: ${category}`);
    }
  }

  // ── all skills: fast batch path ────────────────────────────────────────────
  if (maxRank === null && !category) {
    runDirect('add', [PACKAGE, ...scopeFlag]);
    return;
  }

  // ── filtered install ───────────────────────────────────────────────────────
  const filtered = filterStubs(stubs, { maxRank, category });
  if (filtered.length === 0) {
    console.error('No skills match the selected profile/category.');
    process.exit(1);
  }

  installSkills(filtered.map(s => s.name), scope);
}

main().catch(err => { console.error(err.message); process.exit(1); });
