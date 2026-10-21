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

let tmp, skillsDir, catalog;

const stub = (name, yaml) => {
  fs.mkdirSync(path.join(skillsDir, name), { recursive: true });
  fs.writeFileSync(path.join(skillsDir, name, 'stub.yaml'), yaml);
  fs.writeFileSync(path.join(skillsDir, name, 'SKILL.md'), `---\nname: ${name}\n---\n`);
};
const run = (...args) => spawnSync(process.execPath, [SCRIPT, ...args], {
  encoding: 'utf8', timeout: 60000,
  env: { ...process.env, DAS_SKILLS_DIR: skillsDir, SKILLS_BIN: FAKE, FAKE_SKILLS_CATALOG: catalog },
});

describe('scripts/check-installs.mjs (fake CLI, fixture catalogue)', () => {
  before(() => {
    fs.chmodSync(FAKE, 0o755);
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'das-ci-'));
    skillsDir = path.join(tmp, 'skills');
    catalog = path.join(tmp, 'catalog.json');
    fs.writeFileSync(catalog, JSON.stringify({
      'o/pkg': ['alpha', 'beta', 'Gamma::Delta', 'extra'],
      'o/one': ['real-name'],
    }));
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
});
