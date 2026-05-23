import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT    = path.resolve(fileURLToPath(import.meta.url), '../../');
const INSTALL = path.join(ROOT, 'install.sh');

// Run install.sh with a temp HOME so no real agent dirs are touched.
function run(args = [], { home = null } = {}) {
  const env = { ...process.env, HOME: home ?? os.tmpdir() };
  return spawnSync('bash', [INSTALL, ...args], { encoding: 'utf8', env, timeout: 15000 });
}

// Create a minimal temp HOME with claude config dir present.
function makeTempHome() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-test-'));
  fs.mkdirSync(path.join(tmp, '.claude'), { recursive: true });
  return tmp;
}

function cleanup(tmp) {
  fs.rmSync(tmp, { recursive: true, force: true });
}

describe('install.sh — file checks', () => {
  it('exists', () => {
    assert.ok(fs.existsSync(INSTALL), 'install.sh not found');
  });

  it('is executable', () => {
    const mode = fs.statSync(INSTALL).mode;
    assert.ok(mode & 0o111, 'install.sh is not executable');
  });
});

describe('install.sh — help', () => {
  it('help command exits 0', () => {
    const r = run(['help']);
    assert.equal(r.status, 0, `exit ${r.status}: ${r.stderr}`);
  });

  it('help output contains Usage', () => {
    const r = run(['help']);
    assert.ok(r.stdout.includes('Usage'), 'help must contain Usage');
  });

  it('help output lists commands', () => {
    const r = run(['help']);
    assert.ok(r.stdout.includes('install'), 'help must list install command');
    assert.ok(r.stdout.includes('status'),  'help must list status command');
    assert.ok(r.stdout.includes('update'),  'help must list update command');
    assert.ok(r.stdout.includes('doctor'),  'help must list doctor command');
  });

  it('help shows --picks and --essentials flags', () => {
    const r = run(['help']);
    assert.ok(r.stdout.includes('--picks'),      'help must show --picks flag');
    assert.ok(r.stdout.includes('--essentials'),  'help must show --essentials flag');
  });

  it('help shows computed tier counts (non-zero integers)', () => {
    const r = run(['help']);
    const m = r.stdout.match(/Skill tiers:\s+official \((\d+)\)\s+community \((\d+)\)\s+experimental \((\d+)\)/);
    assert.ok(m, 'help must include "Skill tiers: official (N) community (N) experimental (N)"');
    assert.ok(Number(m[1]) > 0, 'official count must be > 0');
    assert.ok(Number(m[2]) > 0, 'community count must be > 0');
  });

  it('-h flag is accepted', () => {
    const r = run(['-h']);
    assert.equal(r.status, 0, '-h must exit 0');
    assert.ok(r.stdout.includes('Usage'), '-h must print Usage');
  });
});

describe('install.sh — unknown command', () => {
  it('unknown command exits 1', () => {
    const r = run(['not-a-real-command']);
    assert.equal(r.status, 1, 'unknown command must exit 1');
  });
});

describe('install.sh — install command', () => {
  let tmp;
  before(() => { tmp = makeTempHome(); });
  after(() => { cleanup(tmp); });

  it('install exits 0 when claude config dir exists', () => {
    const r = run(['install'], { home: tmp });
    assert.equal(r.status, 0, `install must exit 0, stderr: ${r.stderr}`);
  });

  it('install creates .claude/skills directory', () => {
    const r = run(['install'], { home: tmp });
    assert.equal(r.status, 0);
    assert.ok(
      fs.existsSync(path.join(tmp, '.claude', 'skills')),
      '.claude/skills must be created'
    );
  });

  it('install creates symlinks for type:skill stubs', () => {
    const skillsDir = path.join(tmp, '.claude', 'skills');
    assert.ok(fs.existsSync(skillsDir), '.claude/skills must exist after install');
    const links = fs.readdirSync(skillsDir);
    assert.ok(links.length > 0, 'at least one skill must be linked');
    const first = path.join(skillsDir, links[0]);
    assert.ok(fs.lstatSync(first).isSymbolicLink(), 'linked entry must be a symlink');
  });

  it('install output reports linked count', () => {
    const r = run(['install'], { home: tmp });
    assert.ok(r.stdout.includes('linked'), 'output must report linked count');
  });
});

describe('install.sh — --picks rank profile', () => {
  let tmp;
  before(() => { tmp = makeTempHome(); });
  after(() => { cleanup(tmp); });

  it('--picks exits 0', () => {
    const r = run(['--picks', 'install'], { home: tmp });
    assert.equal(r.status, 0, `--picks must exit 0, stderr: ${r.stderr}`);
  });

  it('--picks installs fewer skills than unrestricted', () => {
    const tmpAll   = makeTempHome();
    const tmpPicks = makeTempHome();
    try {
      run(['install'], { home: tmpAll });
      run(['--picks', 'install'], { home: tmpPicks });
      const allCount   = fs.readdirSync(path.join(tmpAll,   '.claude', 'skills')).length;
      const picksCount = fs.readdirSync(path.join(tmpPicks, '.claude', 'skills')).length;
      assert.ok(picksCount < allCount,
        `--picks (${picksCount}) must install fewer skills than unrestricted (${allCount})`);
    } finally {
      cleanup(tmpAll);
      cleanup(tmpPicks);
    }
  });
});

describe('install.sh — --essentials rank profile', () => {
  let tmp;
  before(() => { tmp = makeTempHome(); });
  after(() => { cleanup(tmp); });

  it('--essentials exits 0', () => {
    const r = run(['--essentials', 'install'], { home: tmp });
    assert.equal(r.status, 0, `--essentials must exit 0, stderr: ${r.stderr}`);
  });

  it('--essentials installs more skills than --picks', () => {
    const tmpPicks = makeTempHome();
    const tmpEss   = makeTempHome();
    try {
      run(['--picks',      'install'], { home: tmpPicks });
      run(['--essentials', 'install'], { home: tmpEss });
      const picksCount = fs.readdirSync(path.join(tmpPicks, '.claude', 'skills')).length;
      const essCount   = fs.readdirSync(path.join(tmpEss,   '.claude', 'skills')).length;
      assert.ok(essCount >= picksCount,
        `--essentials (${essCount}) must install >= skills as --picks (${picksCount})`);
    } finally {
      cleanup(tmpPicks);
      cleanup(tmpEss);
    }
  });
});

describe('install.sh — doctor command', () => {
  it('doctor exits 0 or 1 (clean or issues found)', () => {
    const r = run(['doctor']);
    assert.ok(r.status === 0 || r.status === 1, 'doctor must exit 0 (clean) or 1 (issues)');
  });

  it('doctor output mentions trigger', () => {
    const r = run(['doctor']);
    assert.ok(r.stdout.includes('trigger'), 'doctor must report trigger check');
  });
});
