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
  // 60s, not 15s: install.sh spawns one subprocess per skill in several loops
  // (doctor alone forks ~130 awks). That is ~8s standalone on macOS and longer
  // when node:test runs these concurrently — 15s produced spurious timeouts.
  return spawnSync('bash', [INSTALL, ...args], { encoding: 'utf8', env, timeout: 60000 });
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

describe('install.sh — status command', () => {
  it('status exits 0 with no agents (prints no-agents message)', () => {
    // Empty HOME has no agent dirs → "No supported agents found." + exit 0
    const empty = fs.mkdtempSync(path.join(os.tmpdir(), 'das-empty-'));
    try {
      const r = run(['status'], { home: empty });
      assert.equal(r.status, 0, `status must exit 0, stderr: ${r.stderr}`);
    } finally {
      fs.rmSync(empty, { recursive: true, force: true });
    }
  });

  it('status exits 0 with claude agent dir present', () => {
    const tmp = makeTempHome();
    try {
      const r = run(['status'], { home: tmp });
      assert.equal(r.status, 0, `status must exit 0, stderr: ${r.stderr}`);
    } finally {
      cleanup(tmp);
    }
  });

  it('status output contains skill column header', () => {
    const tmp = makeTempHome();
    try {
      const r = run(['status'], { home: tmp });
      assert.ok(r.stdout.includes('skill'), 'status must print "skill" column header');
    } finally {
      cleanup(tmp);
    }
  });

  it('status output contains tier column header', () => {
    const tmp = makeTempHome();
    try {
      const r = run(['status'], { home: tmp });
      assert.ok(r.stdout.includes('tier'), 'status must print "tier" column header');
    } finally {
      cleanup(tmp);
    }
  });
});

// A fixture catalogue next to a copy of install.sh, so status logic is tested without depending on real stubs.
describe('install.sh — status from installed_as (fixture catalogue)', () => {
  const FX = [
    ['pkg-two', 'type: package\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstalled_as:\n  - a\n  - "Weird::Name"\n'],
    ['single', 'type: skill\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstalled_as: real-name\n'],
    ['manual', 'type: package\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstall_mode: manual\ninstalled_as: m\ninstall_check: ~/.claude/skills/m/SKILL.md\n'],
    ['dir-check', 'type: package\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstall_mode: manual\ninstalled_as: d\ninstall_check: ~/.claude/plugins/dir-plugin\n'],
    ['rel-check', 'type: package\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstall_mode: manual\ninstalled_as: r\ninstall_check: .claude/rel/MARK.md\n'],
    ['own-dir', 'type: package\ntier: community\nrank: 3\nupstream: https://github.com/o/r\ninstall_mode: manual\ninstalled_as: own-dir\ninstall_check: .claude/skills/own-dir/SKILL.md\n'],
  ];
  const POINTER = '---\nname: x\ndescription: d\ntriggers:\n  - "t"\ndas:\n  type: skill\n---\n# x\n';
  const FULL = '---\nname: real\ndescription: full skill\n---\n# real\n';

  function fixture() {
    const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'das-fx-'));
    fs.copyFileSync(INSTALL, path.join(repo, 'install.sh'));
    for (const [name, yaml] of FX) {
      fs.mkdirSync(path.join(repo, 'skills', name), { recursive: true });
      fs.writeFileSync(path.join(repo, 'skills', name, 'stub.yaml'), yaml);
      fs.writeFileSync(path.join(repo, 'skills', name, 'SKILL.md'), POINTER.replace('name: x', `name: ${name}`));
    }
    const home = makeTempHome();
    fs.mkdirSync(path.join(home, '.claude', 'skills'), { recursive: true });
    const put = (rel, body = FULL) => {
      fs.mkdirSync(path.dirname(path.join(home, '.claude', 'skills', rel)), { recursive: true });
      fs.writeFileSync(path.join(home, '.claude', 'skills', rel), body);
    };
    const status = () => {
      const r = spawnSync('bash', [path.join(repo, 'install.sh'), 'status'], { encoding: 'utf8', env: { ...process.env, HOME: home }, timeout: 60000 });
      const row = n => r.stdout.split('\n').find(l => l.includes(n) && !/^\s*skill\b/.test(l)) ?? '';
      return { out: r.stdout, row };
    };
    return { repo, home, put, status, done: () => { cleanup(repo); cleanup(home); } };
  }

  it('reports package as not installed, partial (1/2), then installed, using sanitised installed_as dirs', () => {
    const f = fixture();
    try {
      assert.match(f.status().row('pkg-two'), /\bpackage\b/);
      f.put('a/SKILL.md');
      assert.match(f.status().row('pkg-two'), /\b1\/2\b/);
      f.put('weird-name/SKILL.md');                       // "Weird::Name" is installed as weird-name
      assert.match(f.status().row('pkg-two'), /\binstalled\b/);
    } finally { f.done(); }
  });

  it('a skill installed beside its pointer under installed_as reads as upgraded; a pointer copy does not', () => {
    const f = fixture();
    try {
      f.put('real-name/SKILL.md', POINTER);               // still the pointer (carries das:) -> not installed
      assert.doesNotMatch(f.status().row('single'), /\bupgraded\b/);
      f.put('real-name/SKILL.md', FULL);
      assert.match(f.status().row('single'), /\bupgraded\b/);
    } finally { f.done(); }
  });

  it('manual stubs use install_check', () => {
    const f = fixture();
    try {
      assert.match(f.status().row('manual'), /\bpackage\b/);
      f.put('m/SKILL.md');
      assert.match(f.status().row('manual'), /\binstalled\b/);
    } finally { f.done(); }
  });

  // Regression: install_check was tested with [ -f ], so a directory (design-with-claude's plugin cache dir)
  // never counted and `status` always said "package".
  it('install_check may be a directory', () => {
    const f = fixture();
    try {
      assert.match(f.status().row('dir-check'), /\bpackage\b/);
      fs.mkdirSync(path.join(f.home, '.claude', 'plugins', 'dir-plugin'), { recursive: true });
      assert.match(f.status().row('dir-check'), /\binstalled\b/);
    } finally { f.done(); }
  });

  // Regression: a project-relative install_check (".agents/skills/…") was looked up under the caller's cwd, so
  // a correct install was never detected when `status` ran from anywhere else (for example the repo clone).
  it('a relative install_check resolves under HOME for user scope and under the current directory for project scope', () => {
    const f = fixture();
    const proj = fs.mkdtempSync(path.join(os.tmpdir(), 'das-proj-'));
    try {
      assert.match(f.status().row('rel-check'), /\bpackage\b/);
      fs.mkdirSync(path.join(f.home, '.claude', 'rel'), { recursive: true });
      fs.writeFileSync(path.join(f.home, '.claude', 'rel', 'MARK.md'), 'x');
      assert.match(f.status().row('rel-check'), /\binstalled\b/, 'user scope: $HOME/.claude/rel/MARK.md');

      // project scope looks under the cwd instead (HOME has the file, the project does not)
      const inProject = () => spawnSync('bash', [path.join(f.repo, 'install.sh'), '--scope=project', 'status'], { encoding: 'utf8', cwd: proj, env: { ...process.env, HOME: f.home }, timeout: 60000 })
        .stdout.split('\n').find(l => l.includes('rel-check')) ?? '';
      fs.mkdirSync(path.join(proj, '.claude'), { recursive: true });
      assert.match(inProject(), /\bpackage\b/, 'project scope must not use the HOME copy');
      fs.mkdirSync(path.join(proj, '.claude', 'rel'), { recursive: true });
      fs.writeFileSync(path.join(proj, '.claude', 'rel', 'MARK.md'), 'x');
      assert.match(inProject(), /\binstalled\b/, 'project scope: <cwd>/.claude/rel/MARK.md');
    } finally { f.done(); cleanup(proj); }
  });

  // Regression: software-ux-research installs into its own pointer directory and its check was that directory's
  // SKILL.md, so the pointer itself read as "installed".
  it("the pointer's own SKILL.md (das: marker) never counts as the installed skill", () => {
    const f = fixture();
    try {
      f.put('own-dir/SKILL.md', POINTER);
      assert.match(f.status().row('own-dir'), /\bpackage\b/);
      f.put('own-dir/SKILL.md', FULL);
      assert.match(f.status().row('own-dir'), /\binstalled\b/);
    } finally { f.done(); }
  });

  // Regression: the installed_as shortcut ran before the dangling-symlink check, so a broken pointer link read as
  // "upgraded" whenever the upstream-named skill was installed, and the user was never told to run `fix`.
  it('a dangling pointer symlink is BROKEN even when the upstream-named skill is installed', () => {
    const f = fixture();
    try {
      f.put('real-name/SKILL.md', FULL);
      fs.symlinkSync(path.join(f.home, 'does-not-exist'), path.join(f.home, '.claude', 'skills', 'single'));
      assert.match(f.status().row('single'), /\bBROKEN\b/);
    } finally { f.done(); }
  });
});

// ── the shell reader must read stub.yaml the way the JS reader does ──────────────────────────────

function shellFunction(name) {
  const m = fs.readFileSync(INSTALL, 'utf8').match(new RegExp(`^${name}\\(\\) \\{\\n[\\s\\S]*?\\n\\}\\n`, 'm'));
  assert.ok(m, `${name} not found in install.sh`);
  return m[0];
}

describe('install.sh — stub.yaml reader agrees with scripts/lib/stub.mjs', () => {
  // Regression: the rewritten reader removed every `"`, so `update` printed
  // `--skill "Slidev Mastery" "Presentation Design"` as `--skill Slidev Mastery Presentation Design`.
  it('keeps the inner quotes of a command and strips only a wrapping pair', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-yaml-'));
    try {
      fs.writeFileSync(path.join(tmp, 's.yaml'), [
        'install_default: npx skills add o/r --skill "Two Words" other',
        'note: "wrapped: ok"',
        "alt: 'single quoted'",
        'plain: just text',
        'escaped: "say \\"hi\\""',
        '',
      ].join('\n'));
      fs.writeFileSync(path.join(tmp, 'run.sh'), `${shellFunction('stub_yaml_value')}\nfor k in install_default note alt plain escaped; do stub_yaml_value "$k" "${tmp}/s.yaml"; done\n`);
      const r = spawnSync('bash', [path.join(tmp, 'run.sh')], { encoding: 'utf8' });
      assert.equal(r.status, 0, r.stderr);
      assert.deepEqual(r.stdout.trimEnd().split('\n'), [
        'npx skills add o/r --skill "Two Words" other', 'wrapped: ok', 'single quoted', 'just text', 'say "hi"',
      ]);
    } finally { cleanup(tmp); }
  });

  it('returns what the JS reader returns for every scalar key of every stub', async () => {
    const { allStubs } = await import('../scripts/lib/stub.mjs');
    const META = new Set(['name', 'dir', 'stubPath', 'mdPath', 'raw']);
    const rows = [];
    for (const s of allStubs()) {
      for (const [k, v] of Object.entries(s)) if (typeof v === 'string' && v !== '' && !META.has(k)) rows.push([s.stubPath, k, v]);
    }
    assert.ok(rows.length > 500, `expected many scalar fields, got ${rows.length}`);
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-yaml-'));
    try {
      const calls = rows.map(([f, k]) => `printf '%s\\0' "$(stub_yaml_value ${k} '${f}')"`).join('\n');
      fs.writeFileSync(path.join(tmp, 'run.sh'), `${shellFunction('stub_yaml_value')}\n${calls}\n`);
      const r = spawnSync('bash', [path.join(tmp, 'run.sh')], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, timeout: 120000 });
      assert.equal(r.status, 0, r.stderr);
      const got = r.stdout.split('\0').slice(0, -1);
      assert.equal(got.length, rows.length);
      const diffs = rows.flatMap(([f, k, v], i) => (got[i] === v ? [] : [`${f.split('/').slice(-2)[0]}.${k}: shell=${JSON.stringify(got[i]).slice(0, 80)} js=${JSON.stringify(v).slice(0, 80)}`]));
      assert.deepEqual(diffs, []);
    } finally { cleanup(tmp); }
  });
});

describe('install.sh — remove command', () => {
  it('remove without args exits 1 and prints usage', () => {
    const r = run(['remove']);
    assert.equal(r.status, 1, 'remove without args must exit 1');
    assert.ok(r.stdout.includes('Usage'), 'remove without args must print usage');
  });

  it('remove unknown skill exits 1', () => {
    const tmp = makeTempHome();
    try {
      const r = run(['remove', 'not-a-real-skill-xyz'], { home: tmp });
      assert.equal(r.status, 1, 'remove unknown skill must exit 1');
      assert.ok(r.stdout.includes('Unknown skill'), 'must print "Unknown skill" message');
    } finally {
      cleanup(tmp);
    }
  });

  it('remove <skill> after install removes the symlink', () => {
    const tmp = makeTempHome();
    try {
      // Install first
      run(['install'], { home: tmp });
      const skillsDir = path.join(tmp, '.claude', 'skills');
      const links = fs.readdirSync(skillsDir);
      assert.ok(links.length > 0, 'need at least one skill installed to test remove');

      const skillName = links[0];
      const linkPath  = path.join(skillsDir, skillName);
      assert.ok(fs.lstatSync(linkPath).isSymbolicLink(), `${skillName} must be a symlink`);

      const r = run(['remove', skillName], { home: tmp });
      assert.equal(r.status, 0, `remove ${skillName} must exit 0, stderr: ${r.stderr}`);
      assert.ok(!fs.existsSync(linkPath), `symlink for ${skillName} must be gone after remove`);
    } finally {
      cleanup(tmp);
    }
  });

  it('remove --all after install removes all symlinks', () => {
    const tmp = makeTempHome();
    try {
      run(['install'], { home: tmp });
      const skillsDir = path.join(tmp, '.claude', 'skills');
      const before = fs.readdirSync(skillsDir).length;
      assert.ok(before > 0, 'need skills installed before testing remove --all');

      const r = run(['remove', '--all'], { home: tmp });
      assert.equal(r.status, 0, `remove --all must exit 0, stderr: ${r.stderr}`);

      const after = fs.readdirSync(skillsDir).filter(n =>
        fs.lstatSync(path.join(skillsDir, n)).isSymbolicLink()
      ).length;
      assert.equal(after, 0, 'remove --all must remove all symlinks');
    } finally {
      cleanup(tmp);
    }
  });

  it('remove reports count of links removed', () => {
    const tmp = makeTempHome();
    try {
      run(['install'], { home: tmp });
      const skillsDir = path.join(tmp, '.claude', 'skills');
      const skillName = fs.readdirSync(skillsDir)[0];

      const r = run(['remove', skillName], { home: tmp });
      assert.ok(r.stdout.includes('removed'), 'remove must report removed count or path');
    } finally {
      cleanup(tmp);
    }
  });
});
