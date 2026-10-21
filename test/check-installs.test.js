import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// Offline tests for scripts/check-installs.mjs using a fake skills CLI and a fixture catalogue.
const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const SCRIPT = path.join(ROOT, 'scripts', 'check-installs.mjs');
const FAKE = path.join(ROOT, 'test', 'fixtures', 'fake-skills-cli.mjs');

let tmp, skillsDir, catalog, repo, log;

const stub = (name, yaml) => {
  fs.mkdirSync(path.join(skillsDir, name), { recursive: true });
  fs.writeFileSync(path.join(skillsDir, name, 'stub.yaml'), yaml);
  fs.writeFileSync(path.join(skillsDir, name, 'SKILL.md'), `---\nname: ${name}\n---\n`);
};
// `https://example.invalid/repo.git` is rewritten to the local fixture repository, so manual routes clone offline
const run = (...args) => spawnSync(process.execPath, [SCRIPT, ...args], {
  encoding: 'utf8', timeout: 60000,
  env: {
    ...process.env, DAS_SKILLS_DIR: skillsDir, SKILLS_BIN: FAKE, FAKE_SKILLS_CATALOG: catalog, FAKE_SKILLS_LOG: log,
    GIT_CONFIG_COUNT: '1', GIT_CONFIG_KEY_0: `url.file://${repo}.insteadOf`, GIT_CONFIG_VALUE_0: 'https://example.invalid/repo.git',
  },
});
const logged = () => (fs.existsSync(log) ? fs.readFileSync(log, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l)) : []);
const MANUAL = 'type: package\nupstream: https://github.com/o/pkg\ninstall_mode: manual\nmanual_reason: x\n';
const CLONE = '  - git clone --depth=1 https://example.invalid/repo.git /tmp/das-fixture-clone\n';

describe('scripts/check-installs.mjs (fake CLI, fixture catalogue)', () => {
  before(() => {
    fs.chmodSync(FAKE, 0o755);
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-ci-'));
    skillsDir = path.join(tmp, 'skills');
    catalog = path.join(tmp, 'catalog.json');
    log = path.join(tmp, 'calls.log');
    repo = path.join(tmp, 'repo');
    fs.mkdirSync(repo);
    fs.writeFileSync(path.join(repo, 'SKILL.md'), '---\nname: real-name\ndescription: fixture\n---\n');
    for (const a of [['init', '-q'], ['add', '.'], ['-c', 'user.email=t@t', '-c', 'user.name=t', 'commit', '-qm', 'x']]) {
      assert.equal(spawnSync('git', a, { cwd: repo }).status, 0, `fixture repo: git ${a.join(' ')}`);
    }
    fs.writeFileSync(catalog, JSON.stringify({
      'o/pkg': ['alpha', 'beta', 'Gamma::Delta', 'extra'],
      'o/one': ['real-name'],
      '@local': ['real-name', 'extra-name'],            // what a manual route's local clone offers
    }));
    stub('manual-good', `${MANUAL}install_steps:\n${CLONE}  - npx skills add /tmp/das-fixture-clone --skill real-name\ninstalled_as: real-name\ninstall_check: .agents/skills/real-name/SKILL.md\nupstream_path: SKILL.md\n`);
    stub('manual-global', `${MANUAL}install_steps:\n${CLONE}  - npx skills add /tmp/das-fixture-clone --skill real-name -g\ninstalled_as: real-name\n`);
    stub('manual-extra', `${MANUAL}install_steps:\n${CLONE}  - npx skills add /tmp/das-fixture-clone\ninstalled_as: real-name\n`);
    stub('manual-no-check-file', `${MANUAL}install_steps:\n${CLONE}  - npx skills add /tmp/das-fixture-clone --skill real-name\ninstalled_as: real-name\ninstall_check: .agents/skills/real-name/NOPE.md\n`);
    stub('manual-bad-url', `${MANUAL}install_steps:\n  - git clone git@example.com:o/r.git /tmp/das-fixture-clone\n  - npx skills add /tmp/das-fixture-clone\ninstalled_as: real-name\n`);
    stub('heavy-one', 'type: skill\nupstream: https://github.com/o/one\nsize_mb: 150\ninstall_default: npx skills add o/one --skill real-name\ninstalled_as: real-name\n');
    stub('good-pkg', 'type: package\nupstream: https://github.com/o/pkg\ninstall_default: npx skills add o/pkg --skill alpha beta "Gamma::Delta"\ninstalled_as:\n  - alpha\n  - beta\n  - "Gamma::Delta"\n');
    stub('good-one', 'type: skill\nupstream: https://github.com/o/one\ninstall_default: npx skills add o/one --skill real-name\ninstalled_as: real-name\n');
    stub('lands-extra', 'type: package\nupstream: https://github.com/o/pkg\ninstall_default: npx skills add o/pkg --skill alpha beta\ninstalled_as: alpha\n');
    stub('lands-missing', 'type: package\nupstream: https://github.com/o/pkg\ninstall_default: npx skills add o/pkg --skill alpha\ninstalled_as:\n  - alpha\n  - beta\n');
    stub('bad-skill-name', 'type: skill\nupstream: https://github.com/o/one\ninstall_default: npx skills add o/one --skill dir-name-not-upstream\ninstalled_as: dir-name-not-upstream\n');
    stub('dead-repo', 'type: skill\nupstream: https://github.com/o/gone\ninstall_default: npx skills add o/gone --skill x\ninstalled_as: x\n');
  });
  after(() => fs.rmSync(tmp, { recursive: true, force: true }));

  it('--real passes when the landed directories exactly equal installed_as (incl. sanitised names)', () => {
    const r = run('--real', '--only', 'good-pkg,good-one');
    assert.equal(r.status, 0, r.stdout + r.stderr);
    assert.match(r.stdout, /2 stub\(s\) really installed/);
  });

  it('--real fails on an unexpected extra skill landing', () => {
    const r = run('--real', '--only', 'lands-extra');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /unexpected "beta" landed/);
  });

  it('--real fails when a declared skill does not land', () => {
    const r = run('--real', '--only', 'lands-missing');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /expected "beta" to be installed/);
  });

  it('--real fails when the install command is rejected (dir name used as --skill)', () => {
    const r = run('--real', '--only', 'bad-skill-name');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /No matching skills found/);
  });

  it('--real fails on an unresolvable repo', () => {
    const r = run('--real', '--only', 'dead-repo');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /exited 1/);
  });

  it('list mode verifies --skill names against what the CLI lists', () => {
    assert.equal(run('--only', 'good-pkg,good-one').status, 0);
    const r = run('--only', 'bad-skill-name');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /--skill dir-name-not-upstream is not a skill there/);
  });

  it('list mode reports a repo that cannot be cloned', () => {
    const r = run('--only', 'dead-repo');
    assert.equal(r.status, 1);
    assert.match(r.stderr, /Failed to clone/);
  });

  // Regression: only the CLI's 300 s default tells a user whether a clone will finish. Every stub ran with a
  // blanket 900 s limit, so a big repo that was not marked heavy passed here and timed out for users.
  it('real installs use the CLI default clone timeout, and only size_mb >= 100 stubs get the long one', () => {
    fs.writeFileSync(log, '');
    const r = run('--real', '--only', 'good-one,heavy-one');
    assert.equal(r.status, 0, r.stdout + r.stderr);
    const calls = logged();
    assert.equal(calls.length, 2);
    const timeouts = calls.map(c => c.cloneTimeout).sort();
    assert.deepEqual(timeouts, ['900000', null], 'one call with the long limit (heavy-one) and one with the default (good-one)');
  });

  describe('manual routes', () => {
    it('replays git clone + npx skills add and requires installed_as and install_check to match', () => {
      const r = run('--real', '--only', 'manual-good');
      assert.equal(r.status, 0, r.stdout + r.stderr);
    });

    // Regression: a manual step with -g was replayed verbatim, installing into the developer's real ~/.agents/skills.
    it('never passes -g/--global to the CLI', () => {
      fs.writeFileSync(log, '');
      const r = run('--real', '--only', 'manual-global');
      assert.equal(r.status, 0, r.stdout + r.stderr);
      const calls = logged();
      assert.ok(calls.length >= 1, 'the CLI was called');
      for (const c of calls) assert.ok(!c.args.includes('-g') && !c.args.includes('--global'), `-g reached the CLI: ${c.args.join(' ')}`);
    });

    // Regression: after a manual npx step only *missing* directories were checked, so an extra skill landing passed.
    it('fails when a skill lands that installed_as does not list', () => {
      const r = run('--real', '--only', 'manual-extra');
      assert.equal(r.status, 1);
      assert.match(r.stderr, /unexpected "extra-name" landed/);
    });

    it('fails when install_check points at a file the install does not create', () => {
      const r = run('--real', '--only', 'manual-no-check-file');
      assert.equal(r.status, 1);
      assert.match(r.stderr, /install_check ".agents\/skills\/real-name\/NOPE.md" does not exist/);
    });

    // Regression: a clone URL parseGitClone could not read made `git clone undefined` throw inside the promise
    // executor, which killed the whole run with a stack trace and no per-stub results.
    it('reports an unreadable clone URL for that stub and keeps checking the others', () => {
      const r = run('--real', '--only', 'manual-bad-url,good-one');
      assert.equal(r.status, 1);
      assert.match(r.stderr, /manual-bad-url: cannot replay "git clone git@example.com:o\/r.git/);
      assert.ok(!/TypeError|at .*\.mjs:\d+/.test(r.stderr), `unexpected stack trace:\n${r.stderr}`);
      assert.ok(!/good-one:/.test(r.stderr), 'good-one must not be reported as a failure');
    });
  });
});
