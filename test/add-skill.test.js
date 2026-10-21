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

  it('uses the shared pointer generator for the install section', () => {
    assert.ok(src.includes('renderInstallBlock'), 'install section must be generated from stub.yaml (scripts/lib/pointer.mjs)');
    assert.ok(src.includes('installed_as'), 'wizard must write installed_as');
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

  it('--type package lists several installed skills and installs them with one --skill list', () => {
    const pkgFlags = FULL_FLAGS.map(f =>
      f === 'skill' && FULL_FLAGS[FULL_FLAGS.indexOf(f) - 1] === '--type' ? 'package' : f
    );
    const r = run([...pkgFlags, '--installed-as', 'alpha,beta', '--dry-run']);
    assert.equal(r.status, 0, r.stderr);
    assert.ok(r.stdout.includes('installed_as:\n  - alpha\n  - beta'), 'package must write a installed_as list');
    assert.ok(r.stdout.includes('npx skills add example/test-skill --skill alpha beta'), 'one targeted command for all skills');
    assert.ok(r.stdout.includes('installs 2 skills'), 'generated pointer must describe the package');
  });

  it('records the upstream skill name in installed_as, separate from the directory name', () => {
    const r = run([...FULL_FLAGS, '--installed-as', 'upstream-name', '--dry-run']);
    assert.equal(r.status, 0, r.stderr);
    assert.ok(r.stdout.includes('installed_as: upstream-name'));
    assert.ok(r.stdout.includes('--skill upstream-name'), 'install command must use the upstream name, not the directory name');
    assert.ok(r.stdout.includes('installs next to this pointer'), 'pointer must say the skill lands under a different name');
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

describe('scripts/add-skill.mjs — refuses what it must not do', () => {
  const withTmp = fn => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-add-'));
    try { return fn(tmp); } finally { fs.rmSync(tmp, { recursive: true, force: true }); }
  };

  // Regression: `--type router` crashed with "Cannot read properties of null" (no upstream to build a command from).
  it('--type router is rejected with a message, not a stack trace', () => withTmp(tmp => {
    const r = run(FULL_FLAGS.map(f => (f === 'skill' ? 'router' : f)).concat(['--skills-dir', tmp]));
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /routers are a fixed set/);
    assert.ok(!/TypeError|at .*\.mjs/.test(r.stderr), `unexpected stack trace: ${r.stderr}`);
    assert.deepEqual(fs.readdirSync(tmp), []);
  }));

  // Regression: the "already exists" guard only ran when --name was not given, so `--name hallmark --yes`
  // overwrote an existing stub and dropped its conflicts_with, requires, license and note.
  it('--name of an existing stub does not overwrite it', () => withTmp(tmp => {
    fs.mkdirSync(path.join(tmp, 'test-skill-dry'));
    fs.writeFileSync(path.join(tmp, 'test-skill-dry', 'stub.yaml'), 'type: skill\nlicense: MIT\n');
    const r = run([...FULL_FLAGS, '--installed-as', 'x', '--skills-dir', tmp]);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /already exists/);
    assert.equal(fs.readFileSync(path.join(tmp, 'test-skill-dry', 'stub.yaml'), 'utf8'), 'type: skill\nlicense: MIT\n');
  }));

  it('--name cannot point outside the skills directory', () => withTmp(tmp => {
    const flags = FULL_FLAGS.map(f => (f === 'test-skill-dry' ? '../escape' : f));
    const r = run([...flags, '--installed-as', 'x', '--skills-dir', path.join(tmp, 'skills')]);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /lowercase letters, numbers and hyphens/);
    assert.ok(!fs.existsSync(path.join(tmp, 'escape')));
  }));
});

describe('scripts/add-skill.mjs — generated stubs pass the install lint', () => {
  it('writes a stub + pointer that lintStub accepts without manual edits', async () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-add-'));
    try {
      const r = run([...FULL_FLAGS, '--installed-as', 'real-name', '--skills-dir', tmp]);
      assert.equal(r.status, 0, r.stderr);
      const { readStub } = await import('../scripts/lib/stub.mjs');
      const { lintStub } = await import('../scripts/lib/lint.mjs');
      const stub = readStub('test-skill-dry', tmp);
      const md = fs.readFileSync(path.join(tmp, 'test-skill-dry', 'SKILL.md'), 'utf8');
      const v = lintStub(stub, new Map([[stub.name, stub]]), md);
      assert.deepEqual(v, [], `wizard output must be lint-clean: ${v.join('; ')}`);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it('platform stubs need a manual reason and steps, and come out manual-mode and lint-clean', async () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-add-'));
    try {
      const flags = FULL_FLAGS.map(f => (f === 'skill' && FULL_FLAGS[FULL_FLAGS.indexOf(f) - 1] === '--type' ? 'platform' : f));
      const r = run([...flags, '--manual-reason', 'Built into the app.', '--install-step', 'Download the app', '--skills-dir', tmp]);
      assert.equal(r.status, 0, r.stderr);
      const { readStub } = await import('../scripts/lib/stub.mjs');
      const { lintStub } = await import('../scripts/lib/lint.mjs');
      const stub = readStub('test-skill-dry', tmp);
      assert.equal(stub.install_mode, 'manual');
      const md = fs.readFileSync(path.join(tmp, 'test-skill-dry', 'SKILL.md'), 'utf8');
      assert.deepEqual(lintStub(stub, new Map([[stub.name, stub]]), md), []);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
});
