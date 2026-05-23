import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

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

  it('reads category from SKILL.md das block when stub.yaml lacks it', () => {
    assert.ok(
      src.includes('SKILL.md') && src.includes('das:') && src.includes('category'),
      'readStubs() must fall back to SKILL.md das.category when stub.yaml has no category field'
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
});
