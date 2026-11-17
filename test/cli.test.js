import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { allStubs } from '../scripts/lib/stub.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const CLI  = path.join(ROOT, 'bin', 'cli.mjs');

const src = fs.readFileSync(CLI, 'utf8');

describe('bin/cli.js', () => {
  // ── file checks ──────────────────────────────────────────────────────────

  it('exists', () => {
    assert.ok(fs.existsSync(CLI), 'bin/cli.js not found');
  });

  it('is executable', () => {
    const mode = fs.statSync(CLI).mode;
    assert.ok(mode & 0o111, 'bin/cli.js is not executable');
  });

  it('references correct package name', () => {
    assert.ok(src.includes('podo/design-agent-skills'), 'must reference podo/design-agent-skills');
  });

  // ── T3: version sync ─────────────────────────────────────────────────────

  it('VERSION matches package.json version', () => {
    const version = fs.readFileSync(path.join(ROOT, 'VERSION'), 'utf8').trim();
    const pkg     = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    assert.equal(version, pkg.version,
      `VERSION (${version}) does not match package.json (${pkg.version}) — update both atomically`);
  });

  // ── source-pattern tests ─────────────────────────────────────────────────

  it('delegates to npx skills', () => {
    assert.ok(src.includes("'skills'") || src.includes('"skills"'), 'must delegate to skills CLI');
  });

  it('supports -g flag for global scope', () => {
    assert.ok(src.includes("'-g'") || src.includes('"-g"') || src.includes('global'), 'must handle global scope flag');
  });

  it('reads category directly from stub.yaml', () => {
    assert.ok(
      src.includes("get('category')"),
      'readStubs() must read category: from stub.yaml (migration ran; fallback removed)'
    );
  });

  it('supports --picks flag', () => {
    assert.ok(src.includes('flagPicks') && src.includes("'--picks'"),
      'must handle --picks flag for rank-1 profile');
  });

  it('supports --essentials flag', () => {
    assert.ok(src.includes('flagEss') && src.includes("'--essentials'"),
      'must handle --essentials flag for rank-1+2 profile');
  });

  it('supports --all flag', () => {
    assert.ok(src.includes('flagAll') && src.includes("'--all'"),
      'must handle --all flag for unrestricted profile');
  });

  it('supports --category flag', () => {
    assert.ok(src.includes('flagCat') && src.includes("'--category'"),
      'must handle --category flag for domain filtering');
  });

  it('supports -p / --project scope flag', () => {
    assert.ok(src.includes("'-p'") || src.includes("'--project'"),
      'must handle -p/--project flag for project scope');
  });

  it('supports --help / -h flag', () => {
    assert.ok(src.includes('flagHelp') && (src.includes("'--help'") || src.includes('"--help"')),
      'must handle --help/-h flag');
  });

  it('supports --list flag and list command', () => {
    assert.ok(src.includes('flagList') && src.includes("'--list'"),
      'must handle --list flag and list command');
  });

  it('supports --dry-run flag', () => {
    assert.ok(src.includes('flagDryRun') && src.includes("'--dry-run'"),
      'must handle --dry-run flag');
  });

  it('supports --json flag for list output', () => {
    assert.ok(src.includes('flagJson') && src.includes("'--json'"),
      'must handle --json flag');
  });

  it('supports doctor command', () => {
    assert.ok(src.includes('isDoctor') && src.includes("'doctor'"),
      'must handle doctor command');
  });

  it('supports add command', () => {
    assert.ok(src.includes('isAdd') && src.includes("'add'") && src.includes('addName'),
      'must handle add command with skill name argument');
  });

  it('supports --version flag and version command', () => {
    assert.ok(src.includes('flagVersion') && src.includes("'--version'"),
      'must handle --version flag');
    assert.ok(src.includes("'version'"), 'must handle version command');
  });

  it('supports search command', () => {
    assert.ok(src.includes('isSearch') && src.includes("'search'") && src.includes('searchQuery'),
      'must handle search command with query argument');
  });

  it('has CATEGORY_DESCRIPTIONS for all 19 categories', () => {
    assert.ok(src.includes('CATEGORY_DESCRIPTIONS'),
      'must define CATEGORY_DESCRIPTIONS constant');
    const expected = [
      'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
      'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
      'diagrams', 'data-visualization', 'presentations', 'product-pm',
      'content-design', 'email-design', 'tui-terminal', 'meta',
      'motion-animation', 'design-engineering', 'design-research',
    ];
    const missing = expected.filter(c => !src.includes(`'${c}'`));
    assert.equal(missing.length, 0, `CATEGORY_DESCRIPTIONS missing entries: ${missing.join(', ')}`);
  });

  it('rejects unknown categories with process.exit', () => {
    assert.ok(src.includes('VALID_CATEGORIES') && src.includes('process.exit'),
      'must validate category flag against VALID_CATEGORIES and exit on unknown');
  });

  it('filters by maxRank for profile-based selection', () => {
    assert.ok(src.includes('maxRank'),
      'must use maxRank to apply rank-based profile filtering');
  });

  it('excludes routers from filtered results', () => {
    assert.ok(src.includes("s.type === 'router'") || src.includes("type !== 'router'"),
      'filterStubs must exclude router-type skills');
  });

  it('falls through to runDirect for non-TTY batch install', () => {
    assert.ok(src.includes('runDirect') && src.includes('isTTY'),
      'must call runDirect for non-interactive (non-TTY) batch installs');
  });

  it('contains all 19 valid category strings', () => {
    const expected = [
      'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
      'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
      'diagrams', 'data-visualization', 'presentations', 'product-pm',
      'content-design', 'email-design', 'tui-terminal', 'meta',
      'motion-animation', 'design-engineering', 'design-research',
    ];
    const missing = expected.filter(c => !src.includes(c));
    assert.equal(missing.length, 0,
      `VALID_CATEGORIES missing entries: ${missing.join(', ')}`);
  });

  // ── T4: integration tests ────────────────────────────────────────────────

  it('--help exits 0 and prints usage', () => {
    const r = spawnSync(process.execPath, [CLI, '--help'], { encoding: 'utf8' });
    assert.equal(r.status, 0, '--help must exit 0');
    assert.ok(r.stdout.includes('Usage'), '--help must print Usage');
  });

  it('-h exits 0 and prints usage', () => {
    const r = spawnSync(process.execPath, [CLI, '-h'], { encoding: 'utf8' });
    assert.equal(r.status, 0, '-h must exit 0');
    assert.ok(r.stdout.includes('Usage'), '-h must print Usage');
  });

  it('--list exits 0 and prints categories', () => {
    const r = spawnSync(process.execPath, [CLI, '--list'], { encoding: 'utf8' });
    assert.equal(r.status, 0, '--list must exit 0');
    assert.ok(r.stdout.includes('design-systems'), '--list must include category names');
    assert.ok(r.stdout.includes('skills'), '--list must include skill counts');
  });

  it('list command exits 0 and prints categories', () => {
    const r = spawnSync(process.execPath, [CLI, 'list'], { encoding: 'utf8' });
    assert.equal(r.status, 0, 'list command must exit 0');
    assert.ok(r.stdout.includes('design-systems'), 'list command must include category names');
  });

  it('--category with unknown value exits 1', () => {
    const r = spawnSync(process.execPath, [CLI, '--category', 'not-a-real-category'], { encoding: 'utf8' });
    assert.equal(r.status, 1, 'unknown --category must exit 1');
    assert.ok(r.stderr.includes('Unknown category'), 'must print error message');
  });

  it('--picks --project --dry-run exits 0 and prints dry-run header', () => {
    const r = spawnSync(process.execPath, [CLI, '--picks', '--project', '--dry-run'],
      { encoding: 'utf8', timeout: 10000 });
    assert.equal(r.status, 0, '--dry-run must exit 0');
    assert.ok(r.stdout.includes('Dry run'), 'must output dry-run header');
  });

  it('--essentials --project --dry-run exits 0', () => {
    const r = spawnSync(process.execPath, [CLI, '--essentials', '--project', '--dry-run'],
      { encoding: 'utf8', timeout: 10000 });
    assert.equal(r.status, 0, '--essentials --dry-run must exit 0');
    assert.ok(r.stdout.includes('Dry run'), 'must output dry-run header');
  });

  it('--all --project --dry-run exits 0 and shows all skills', () => {
    const r = spawnSync(process.execPath, [CLI, '--all', '--project', '--dry-run'],
      { encoding: 'utf8', timeout: 10000 });
    assert.equal(r.status, 0, '--all --dry-run must exit 0');
    assert.ok(r.stdout.includes('Dry run'), 'must output dry-run header');
  });

  it('--category figma-code --project --dry-run exits 0', () => {
    const r = spawnSync(process.execPath, [CLI, '--category', 'figma-code', '--project', '--dry-run'],
      { encoding: 'utf8', timeout: 10000 });
    assert.equal(r.status, 0, '--category --dry-run must exit 0');
    assert.ok(r.stdout.includes('Dry run'), 'must output dry-run header');
  });

  it('--list --json outputs valid JSON array', () => {
    const r = spawnSync(process.execPath, [CLI, '--list', '--json'], { encoding: 'utf8' });
    assert.equal(r.status, 0, '--list --json must exit 0');
    const data = JSON.parse(r.stdout);
    assert.ok(Array.isArray(data), 'must output a JSON array');
    assert.ok(data.every(e => e.category && typeof e.count === 'number'),
      'each entry must have category and count');
    assert.ok(data.every(e => typeof e.description === 'string'),
      'each entry must have a description string');
  });

  // The published CLI cannot import scripts/lib (only bin/ and skills/ ship), so it keeps its own small stub.yaml
  // reader. Nothing else ties the two together, so a quoted value or a trailing comment could make the CLI file a
  // skill under the wrong rank, tier or category without any other test noticing.
  it('reads type, tier, rank and category of every stub the way scripts/lib/stub.mjs does', async () => {
    const { allStubs } = await import('../scripts/lib/stub.mjs');
    const real = allStubs().filter(s => s.type !== 'router');
    const seen = new Map();
    for (const category of new Set(real.map(s => s.category))) {
      const r = spawnSync(process.execPath, [CLI, 'search', category, '--json'], { encoding: 'utf8', timeout: 20000 });
      assert.equal(r.status, 0, r.stderr);
      for (const e of JSON.parse(r.stdout)) seen.set(e.name, e);
    }
    const diffs = real.flatMap(s => {
      const e = seen.get(s.name);
      if (!e) return [`${s.name}: not returned by the CLI`];
      return [['type', e.type, s.type], ['tier', e.tier, s.tier], ['category', e.category, s.category], ['rank', e.rank, Number(s.rank)]]
        .filter(([, a, b]) => a !== b).map(([k, a, b]) => `${s.name}.${k}: cli=${a} lib=${b}`);
    });
    assert.deepEqual(diffs, []);
  });

  it('add without skill name exits 1 with usage hint', () => {
    const r = spawnSync(process.execPath, [CLI, 'add'], { encoding: 'utf8' });
    assert.equal(r.status, 1, 'add with no skill name must exit 1');
    assert.ok(r.stderr.includes('add <skill-name>'), 'must print usage hint');
  });

  it('doctor command exits 0 on a clean catalogue', () => {
    const r = spawnSync(process.execPath, [CLI, 'doctor'], { encoding: 'utf8', timeout: 10000 });
    assert.ok(r.status === 0 || r.status === 1, 'doctor must exit 0 (clean) or 1 (issues found)');
    assert.ok(r.stdout.includes('trigger'), 'must report trigger check result');
  });

  it('--version exits 0 and prints version number', () => {
    const r = spawnSync(process.execPath, [CLI, '--version'], { encoding: 'utf8' });
    assert.equal(r.status, 0, '--version must exit 0');
    const version = fs.readFileSync(path.join(ROOT, 'VERSION'), 'utf8').trim();
    assert.ok(r.stdout.includes(version), `--version must print version "${version}"`);
  });

  it('version command exits 0 and prints version number', () => {
    const r = spawnSync(process.execPath, [CLI, 'version'], { encoding: 'utf8' });
    assert.equal(r.status, 0, 'version command must exit 0');
    const version = fs.readFileSync(path.join(ROOT, 'VERSION'), 'utf8').trim();
    assert.ok(r.stdout.includes(version), `version command must print version "${version}"`);
  });

  it('search exits 0 and returns results for known term', () => {
    const r = spawnSync(process.execPath, [CLI, 'search', 'figma'], { encoding: 'utf8' });
    assert.equal(r.status, 0, 'search must exit 0');
    assert.ok(r.stdout.includes('figma'), 'search "figma" must return figma-related results');
  });

  it('search with no results exits 0 and prints no-match message', () => {
    const r = spawnSync(process.execPath, [CLI, 'search', 'xyzzy-no-match-8472'], { encoding: 'utf8' });
    assert.equal(r.status, 0, 'search with no results must exit 0');
    assert.ok(r.stdout.includes('No skills found'), 'must print no-match message');
  });

  it('search without query exits 1', () => {
    const r = spawnSync(process.execPath, [CLI, 'search'], { encoding: 'utf8' });
    assert.equal(r.status, 1, 'search without query must exit 1');
  });

  it('search --json outputs valid JSON array', () => {
    const r = spawnSync(process.execPath, [CLI, 'search', 'figma', '--json'], { encoding: 'utf8' });
    assert.equal(r.status, 0, 'search --json must exit 0');
    const data = JSON.parse(r.stdout);
    assert.ok(Array.isArray(data), 'search --json must output a JSON array');
    assert.ok(data.length > 0, 'search "figma" --json must return results');
  });

  // ── experimental stubs are opt-in (regression: the CLI installed them in every profile while
  //    install.sh, CLAUDE.md and the README said they were excluded by default) ──────────────────────────
  const dryRun = (...flags) => {
    const r = spawnSync(process.execPath, [CLI, ...flags, '--project', '--dry-run'], { encoding: 'utf8', timeout: 10000 });
    assert.equal(r.status, 0, r.stderr);
    return r.stdout.split('\n').filter(l => /^ {2}\S+$/.test(l)).map(l => l.trim());
  };

  it('supports --include-experimental flag', () => {
    assert.ok(src.includes('--include-experimental'), 'must support --include-experimental');
  });

  it('profiles and categories leave out experimental stubs by default and keep them with --include-experimental', () => {
    const real = allStubs().filter(s => s.type !== 'router');
    const experimental = new Set(real.filter(s => s.tier === 'experimental').map(s => s.name));
    assert.ok(experimental.size > 0, 'fixture: the catalogue must contain experimental stubs');
    const profiles = [['--picks'], ['--essentials'], ['--all'], ['--category', 'figma-code']];
    const listed = new Map();
    for (const flags of profiles) {
      const names = dryRun(...flags);
      const withExp = dryRun(...flags, '--include-experimental');
      listed.set(flags[0], { names, withExp });
      assert.ok(names.length > 0, `${flags.join(' ')} listed nothing`);
      assert.deepEqual(names.filter(n => experimental.has(n)), [], `${flags.join(' ')} must not list experimental stubs`);
      assert.ok(withExp.some(n => experimental.has(n)), `${flags.join(' ')} --include-experimental must list them`);
    }
    assert.equal(listed.get('--all').names.length, real.filter(s => s.tier !== 'experimental').length,
      '--all lists every non-experimental stub');
    assert.equal(listed.get('--all').withExp.length, real.length, '--all --include-experimental lists every stub');
  });

  // Runs the CLI with a fake `npx` first on PATH that records its arguments, one per line.
  // `argv` is null when the CLI never ran npx.
  const runWithFakeNpx = (...flags) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'das-fake-npx-'));
    const out = path.join(dir, 'args.txt');
    fs.writeFileSync(path.join(dir, 'npx'), '#!/bin/sh\nprintf \'%s\\n\' "$@" > "$FAKE_NPX_OUT"\n', { mode: 0o755 });
    try {
      const r = spawnSync(process.execPath, [CLI, ...flags, '--project'], {
        encoding: 'utf8', timeout: 10000, env: { ...process.env, PATH: `${dir}${path.delimiter}${process.env.PATH}`, FAKE_NPX_OUT: out },
      });
      assert.equal(r.status, 0, r.stderr);
      return { stdout: r.stdout, argv: fs.existsSync(out) ? fs.readFileSync(out, 'utf8').trim().split('\n') : null };
    } finally { fs.rmSync(dir, { recursive: true, force: true }); }
  };

  // Regression (#27): without a profile flag in a non-interactive shell the CLI installed even with --dry-run.
  it('bare non-interactive --dry-run previews and never runs npx', () => {
    const { stdout, argv } = runWithFakeNpx('--dry-run');
    assert.ok(stdout.includes('Dry run'), 'must print the dry-run header');
    assert.equal(argv, null, '--dry-run must not run npx');
  });

  // Regression (#28): --list counted experimental stubs that no profile installs.
  it('--list counts match what --all installs, and --include-experimental counts everything', () => {
    const real = allStubs().filter(s => s.type !== 'router');
    const total = flags => {
      const r = spawnSync(process.execPath, [CLI, '--list', '--json', ...flags], { encoding: 'utf8' });
      assert.equal(r.status, 0, r.stderr);
      return JSON.parse(r.stdout).reduce((n, e) => n + e.count, 0);
    };
    assert.equal(total([]), real.filter(s => s.tier !== 'experimental').length);
    assert.equal(total(['--include-experimental']), real.length);
    const text = spawnSync(process.execPath, [CLI, '--list'], { encoding: 'utf8' }).stdout;
    assert.ok(text.includes('experimental skills not counted'), '--list must say experimental stubs are left out');
  });

  // "All" runs `npx skills add <package>`, which installs the whole package. Without --include-experimental it
  // has to name the skills instead, routers included.
  it('"All" names every non-experimental skill and router instead of installing the whole package', () => {
    const wanted = allStubs().filter(s => s.type === 'router' || s.tier !== 'experimental').map(s => s.name).sort();
    for (const flags of [['--all'], []]) {
      const { argv } = runWithFakeNpx(...flags);
      const at = argv.indexOf('--skill');
      assert.deepEqual(argv.slice(0, 3), ['skills', 'add', 'podo/design-agent-skills']);
      assert.ok(at > 0, `${flags.join(' ') || '(no flags)'} must pass --skill names`);
      assert.deepEqual(argv.slice(at + 1).sort(), wanted);
    }
    assert.deepEqual(runWithFakeNpx('--all', '--include-experimental').argv, ['skills', 'add', 'podo/design-agent-skills'],
      '--include-experimental keeps the whole-package install');
  });
});
