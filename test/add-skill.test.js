import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT   = path.resolve(fileURLToPath(import.meta.url), '../../');
const SCRIPT = path.join(ROOT, 'scripts', 'add-skill.mjs');

const src = fs.readFileSync(SCRIPT, 'utf8');

// Helper: run add-skill.mjs with given args (non-interactive; --yes required)
function run(args = []) {
  return spawnSync(process.execPath, [SCRIPT, ...args], {
    encoding: 'utf8',
    timeout: 10000,
    cwd: ROOT,
  });
}

// Fully-specified flags that satisfy all required fields for type:skill
const FULL_FLAGS = [
  '--name',        'test-skill-dry',
  '--upstream',    'https://github.com/example/test-skill',
  '--category',    'motion-animation',
  '--tier',        'community',
  '--rank',        '3',
  '--type',        'skill',
  '--description', 'A test skill for unit testing.',
  '--trigger',     'test skill dry run',
  '--yes',
];

describe('scripts/add-skill.mjs — file checks', () => {
  it('exists', () => {
    assert.ok(fs.existsSync(SCRIPT), 'scripts/add-skill.mjs not found');
  });

  it('is executable', () => {
    const mode = fs.statSync(SCRIPT).mode;
    assert.ok(mode & 0o111, 'scripts/add-skill.mjs is not executable');
  });
});

describe('scripts/add-skill.mjs — source patterns', () => {
  it('defines VALID_CATEGORIES', () => {
    assert.ok(src.includes('VALID_CATEGORIES'), 'must define VALID_CATEGORIES');
  });

  it('defines VALID_TYPES including skill, package, platform', () => {
    assert.ok(src.includes("'skill'") && src.includes("'package'") && src.includes("'platform'"),
      'must define valid types');
  });

  it('defines VALID_TIERS', () => {
    assert.ok(src.includes('VALID_TIERS'), 'must define VALID_TIERS');
  });

  it('supports --name flag', () => {
    assert.ok(src.includes("'--name'") || src.includes('"--name"'), 'must support --name flag');
  });

  it('supports --upstream flag', () => {
    assert.ok(src.includes("'--upstream'"), 'must support --upstream flag');
  });

  it('supports --category flag', () => {
    assert.ok(src.includes("'--category'"), 'must support --category flag');
  });

  it('supports --dry-run flag', () => {
    assert.ok(src.includes("'--dry-run'"), 'must support --dry-run flag');
  });

  it('supports --yes / -y flag', () => {
    assert.ok(src.includes("'--yes'") || src.includes("'-y'"), 'must support --yes/-y flag');
  });

  it('generates stub.yaml content', () => {
    assert.ok(src.includes('stubYaml'), 'must include stubYaml generator');
  });

  it('generates SKILL.md content', () => {
    assert.ok(src.includes('skillMd'), 'must include skillMd generator');
  });

  it('generates decision tree for type:skill', () => {
    assert.ok(src.includes('Decision tree'), 'must generate Decision tree section for type:skill');
  });

  it('uses correct npx skills add format in generated SKILL.md', () => {
    assert.ok(src.includes('npx skills add'), 'generated SKILL.md must use npx skills add');
    assert.ok(src.includes('--skill'), 'generated SKILL.md must include --skill flag');
  });

  it('does not use curl in generated SKILL.md', () => {
    const bodySection = src.slice(src.indexOf('function skillMd'));
    assert.ok(!bodySection.includes('curl '), 'generated SKILL.md must not use curl');
  });
});

describe('scripts/add-skill.mjs — integration: --dry-run', () => {
  it('dry-run with all flags exits 0', () => {
    const r = run([...FULL_FLAGS, '--dry-run']);
    assert.equal(r.status, 0, `must exit 0, stderr: ${r.stderr}`);
  });

  it('dry-run does not create skill directory', () => {
    const skillDir = path.join(ROOT, 'skills', 'test-skill-dry');
    const existed = fs.existsSync(skillDir);
    run([...FULL_FLAGS, '--dry-run']);
    const existsAfter = fs.existsSync(skillDir);
    assert.equal(existsAfter, existed, 'dry-run must not create skills/test-skill-dry/');
  });

  it('dry-run output contains stub.yaml content', () => {
    const r = run([...FULL_FLAGS, '--dry-run']);
    assert.ok(r.stdout.includes('type: skill'), 'dry-run must print stub.yaml type field');
    assert.ok(r.stdout.includes('category: motion-animation'), 'dry-run must print category');
  });

  it('dry-run output contains SKILL.md content', () => {
    const r = run([...FULL_FLAGS, '--dry-run']);
    assert.ok(r.stdout.includes('test-skill-dry'), 'dry-run must print skill name in SKILL.md');
    assert.ok(r.stdout.includes('Decision tree'), 'dry-run must include Decision tree section');
  });

  it('dry-run output contains npx skills add install commands', () => {
    const r = run([...FULL_FLAGS, '--dry-run']);
    assert.ok(r.stdout.includes('npx skills add'), 'dry-run must include install command');
    assert.ok(r.stdout.includes('--skill test-skill-dry'), 'dry-run must include --skill flag with name');
  });

  it('--type package generates package-style SKILL.md without decision tree', () => {
    const pkgFlags = FULL_FLAGS.map(f =>
      f === 'skill' && FULL_FLAGS[FULL_FLAGS.indexOf(f) - 1] === '--type' ? 'package' : f
    );
    const r = run([...pkgFlags, '--dry-run']);
    assert.equal(r.status, 0);
    assert.ok(!r.stdout.includes('Decision tree'), 'package type must not generate Decision tree');
    assert.ok(r.stdout.includes('Install the full skill'), 'package type must generate Install section');
  });
});

describe('scripts/add-skill.mjs — integration: validation errors', () => {
  it('missing --name with --yes exits non-zero or hangs (non-interactive check)', () => {
    // With --yes but no --name provided and stdin closed, should fail or exit
    const r = spawnSync(process.execPath, [SCRIPT, '--yes', '--dry-run'], {
      encoding: 'utf8',
      timeout: 3000,
      input: '',
      cwd: ROOT,
    });
    // Either exits non-zero (validation) or times out — both are acceptable
    // The key is it does NOT produce a valid stub without a name
    assert.ok(
      r.status !== 0 || r.stdout === '' || !r.stdout.includes('type:'),
      'should not produce valid output without a skill name'
    );
  });
});
