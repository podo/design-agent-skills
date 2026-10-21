import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { allStubs, parseGitClone, parseNpx, parseStubText, repoOf, sanitize, tokenize } from '../scripts/lib/stub.mjs';
import { applyBlock, END, installedDirs, renderInstallBlock, START } from '../scripts/lib/pointer.mjs';
import { lintCatalogue, lintStub } from '../scripts/lib/lint.mjs';

// ── helpers ──────────────────────────────────────────────────────────────────

const stubOf = (name, raw) => ({ name, mdPath: '', raw, ...parseStubText(raw) });
const npxStub = (extra = '') => stubOf('my-skill', [
  'type: skill', 'tier: community', 'rank: 3', 'category: design-systems',
  'upstream: https://github.com/owner/repo', 'version: latest',
  'install_default: npx skills add owner/repo --skill real-name', 'installed_as: real-name', extra,
].join('\n'));
const MD = `---\nname: my-skill\ndescription: |\n  A skill.\ntriggers:\n  - "x"\ndas:\n  type: skill\n---\n\n# my-skill\n\n> stub\n\n## Invoke after install\n\n- Skill name: \`real-name\`\n\n## What it does\n\nThings.\n`;
const synced = stub => applyBlock(MD, renderInstallBlock(stub, new Map([[stub.name, stub]])));
const violations = (stub, md) => lintStub(stub, new Map([[stub.name, stub]]), md ?? synced(stub));

// ── parsing ──────────────────────────────────────────────────────────────────

describe('stub.yaml parsing', () => {
  it('reads scalars, quoted strings with colons, and block lists', () => {
    const s = parseStubText('type: package\nnote: "a: b \\"q\\""\ninstalled_as:\n  - one\n  - "two:x"\nrank: 2\n');
    assert.equal(s.type, 'package');
    assert.equal(s.note, 'a: b "q"');
    assert.deepEqual(s.installed_as, ['one', 'two:x']);
  });
  it('wraps a scalar into a list for list-valued keys', () => {
    assert.deepEqual(parseStubText('installed_as: solo\n').installed_as, ['solo']);
    assert.deepEqual(parseStubText('install_claude: /plugin install a@b\n').install_claude, ['/plugin install a@b']);
  });
  it('sanitises names the way the skills CLI names install dirs', () => {
    assert.equal(sanitize('stitch::extract-design-md'), 'stitch-extract-design-md');
    assert.equal(sanitize('Mobile App Design Standards'), 'mobile-app-design-standards');
    assert.equal(sanitize('--Weird..'), 'weird');
  });
  it('parses npx commands incl. quoted and multiple --skill names', () => {
    const p = parseNpx('npx skills add owner/repo --skill a "B c" d -y');
    assert.deepEqual([p.target, p.skills, p.flags], ['owner/repo', ['a', 'B c', 'd'], ['-y']]);
    assert.equal(parseNpx('npx skills add https://raw.githubusercontent.com/o/r/main/x/SKILL.md').skills.length, 0);
    assert.equal(parseNpx('git clone x'), null);
  });
  it('resolves repos from URLs, raw URLs and shorthand', () => {
    assert.equal(repoOf('https://github.com/Owner/Repo.git'), 'owner/repo');
    assert.equal(repoOf('https://raw.githubusercontent.com/O/R/main/a/SKILL.md'), 'o/r');
    assert.equal(repoOf('Owner/repo/sub/dir'), 'owner/repo');
    assert.equal(repoOf('impeccable'), null);
  });
  it('tokenizes quotes', () => assert.deepEqual(tokenize('a "b c" \'d e\' f'), ['a', 'b c', 'd e', 'f']));

  // Regression: the checker dropped the value of `--depth 1`, replayed `--depth <url>`, and failed every clone.
  it('parses git clone flags together with their values, and finds url and destination', () => {
    const a = parseGitClone(['--single-branch', '--depth', '1', 'https://x.test/o/r.git', '~/dest']);
    assert.equal(a.url, 'https://x.test/o/r.git');
    assert.equal(a.dest, '~/dest');
    assert.deepEqual(a.flags, ['--single-branch', '--depth', '1']);
    const b = parseGitClone(['--depth=1', '--filter=blob:none', '--sparse', 'https://x.test/o/r.git']);
    assert.deepEqual(b.flags, ['--depth=1', '--filter=blob:none', '--sparse']);
    assert.equal(b.dest, undefined);
    assert.deepEqual(parseGitClone(['-b', 'main', 'https://x.test/o/r.git', 'd']).flags, ['-b', 'main']);
  });
});

// ── generator ────────────────────────────────────────────────────────────────

describe('pointer generator', () => {
  it('renders a das:-marker check against the installed dir, plus -g and project commands', () => {
    const b = renderInstallBlock(npxStub(), new Map());
    assert.ok(b.startsWith(START) && b.endsWith(END));
    assert.match(b, /f=~\/\.agents\/skills\/real-name\/SKILL\.md; \[ -f "\$f" \] && ! grep -q "\^das:" "\$f"/);
    assert.match(b, /npx skills add owner\/repo --skill real-name -g -y/);
    assert.match(b, /npx skills add owner\/repo --skill real-name -y\n/);
    assert.match(b, /installs next to this pointer/, 'a name that differs from the dir must say so');
  });
  it('does not claim "next to this pointer" when the skill replaces the pointer in place', () => {
    const s = stubOf('same', 'type: skill\nupstream: https://github.com/o/r\ninstall_default: npx skills add o/r --skill same\ninstalled_as: same\n');
    assert.doesNotMatch(renderInstallBlock(s, new Map()), /next to this pointer/);
  });
  it('lists every installed dir of a package and checks the first', () => {
    const s = stubOf('pkg', 'type: package\nupstream: https://github.com/o/r\ninstall_default: npx skills add o/r --skill a b\ninstalled_as:\n  - a\n  - b\n');
    assert.match(renderInstallBlock(s, new Map()), /installs 2 skills \(`a`, `b`\); checking the first/);
    assert.deepEqual(installedDirs(s), ['a', 'b']);
  });
  it('renders manual installs with steps, reason, plugin route, and heads-up', () => {
    const s = stubOf('man', 'type: package\ninstall_mode: manual\nmanual_reason: CLI cannot see it.\ninstall_steps:\n  - git clone https://x/y.git ~/y\ninstall_check: ~/y/SKILL.md\ninstalled_as: y\nrequires:\n  - Bun\nlicense: MIT\nsize_mb: 150\ninstall_claude:\n  - /plugin marketplace add o/r\n  - /plugin install p@m\n');
    const b = renderInstallBlock(s, new Map());
    assert.match(b, /git clone https:\/\/x\/y\.git ~\/y/);
    assert.match(b, /CLI cannot see it\./);
    assert.match(b, /\/plugin install p@m/);
    assert.match(b, /Requires:\*\* Bun/);
    assert.match(b, /Large download \(~150 MB\).*SKILLS_CLONE_TIMEOUT_MS/);
    assert.match(b, /Check: `~\/y\/SKILL\.md` exists/);
  });
  it('applyBlock is idempotent and replaces only the marked region', () => {
    const s = npxStub();
    const once = synced(s);
    assert.equal(applyBlock(once, renderInstallBlock(s, new Map([[s.name, s]]))), once);
    assert.match(once, /## Invoke after install/);
    assert.match(once, /## What it does/);
  });
  it('adopts a legacy hand-written install section', () => {
    const legacy = MD.replace('## Invoke after install', '## Decision tree\n\nold\n\n## Install command\n\nold2\n\n## Invoke after install');
    const out = applyBlock(legacy, renderInstallBlock(npxStub(), new Map()));
    assert.doesNotMatch(out, /old2/);
    assert.equal((out.match(/das:install:start/g) || []).length, 1);
    assert.match(out, /## Invoke after install/);
  });
});

// ── lint rules fire (each rule proven with a violating stub) ─────────────────

describe('lint rules', () => {
  it('a clean stub has no violations', () => assert.deepEqual(violations(npxStub()), []));
  const bad = (label, mutate, expect) => it(label, () => {
    const s = mutate(npxStub());
    const v = lintStub(s, new Map([[s.name, s]]), synced(s));
    assert.ok(v.some(m => expect.test(m)), `expected /${expect}/ in ${JSON.stringify(v)}`);
  });
  bad('requires installed_as', s => { delete s.installed_as; return s; }, /installed_as is required/);
  bad('rejects -g/-y in stub.yaml', s => ({ ...s, install_default: s.install_default + ' -g' }), /do not put -g/);
  bad('rejects --all', s => ({ ...s, install_default: 'npx skills add owner/repo --all' }), /--all/);
  bad('rejects a target that is not owner/repo', s => ({ ...s, install_default: 'npx skills add impeccable' }), /not an owner\/repo/);
  bad('rejects a foreign repo', s => ({ ...s, install_default: 'npx skills add other/repo --skill real-name' }), /not the upstream repo/);
  bad('rejects <placeholders>', s => ({ ...s, install_default: 'npx skills add owner/repo --skill <name>' }), /placeholder/);
  bad('rejects a --skill missing from installed_as', s => ({ ...s, install_default: 'npx skills add owner/repo --skill nope' }), /not listed in installed_as/);
  bad('rejects an installed_as name nothing installs', s => ({ ...s, installed_as: ['real-name', 'ghost'] }), /never installed/);
  bad('rejects a marketplace add without install', s => ({ ...s, install_claude: ['/plugin marketplace add o/r'] }), /never installs a plugin/);
  // Regression: a plugin install whose *marketplace name* contains the word "marketplace" was mistaken for a marketplace add.
  it('accepts a complete plugin route even when the marketplace name contains "marketplace"', () => {
    const s = { ...npxStub(), install_claude: ['/plugin marketplace add o/r', '/plugin install tui-design@tui-design-marketplace'] };
    assert.deepEqual(violations(s), []);
    const t = { ...npxStub(), install_claude: ['claude plugin marketplace add o/r', 'claude plugin install p@m'] };
    assert.deepEqual(violations(t), []);
  });
  bad('rejects claude skills add', s => ({ ...s, install_extra: ['claude skills add o/r'] }), /not a Claude Code command|must be an/);
  bad('requires manual_reason for manual stubs', s => ({ ...s, install_mode: 'manual', install_steps: ['git clone x'] }), /manual_reason/);
  it('flags a "Skill name" that is not installed', () => {
    const s = npxStub();
    const md = synced(s).replace('- Skill name: `real-name`', '- Skill name: `my-skill`');
    assert.ok(lintStub(s, new Map([[s.name, s]]), md).some(m => /Skill name: my-skill/.test(m)));
  });
  it('flags hardcoded counts in the description', () => {
    const s = npxStub();
    const md = synced(s).replace('A skill.', 'Ships 55 skills for everything.');
    assert.ok(lintStub(s, new Map([[s.name, s]]), md).some(m => /hardcodes a skill\/agent\/command count/.test(m)));
  });
  it('flags legacy paths in the pointer', () => {
    const s = npxStub();
    const md = synced(s).replace('Things.', 'Check ~/.design-agent-skills/skills/x');
    assert.ok(lintStub(s, new Map([[s.name, s]]), md).some(m => /legacy/.test(m)));
  });
  it('flags a pointer whose install section drifted from stub.yaml', () => {
    const s = npxStub();
    const md = synced(s).replace('--skill real-name -y', '--skill other -y');
    assert.ok(lintStub(s, new Map([[s.name, s]]), md).some(m => /out of date with stub\.yaml/.test(m)));
  });
  it('requires conflicts_with to be mutual and real', () => {
    const a = npxStub('conflicts_with: b');
    const b = stubOf('b', 'type: skill\nupstream: https://github.com/x/y\ninstall_default: npx skills add x/y --skill real-name\ninstalled_as: real-name\n');
    const all = new Map([[a.name, a], [b.name, b]]);
    assert.ok(lintStub(a, all, synced(a)).some(m => /must be listed back/.test(m)));
  });
});

describe('catalogue rules', () => {
  const mk = (n, repo, as, extra = '') => stubOf(n, `type: skill\nupstream: https://github.com/${repo}\ninstall_default: npx skills add ${repo} --skill ${as}\ninstalled_as: ${as}\n${extra}`);
  it('flags two different upstreams writing the same dir', () => {
    const v = lintCatalogue([mk('a', 'o/one', 'same'), mk('b', 'o/two', 'same')]);
    assert.ok(v.some(x => /is also written by/.test(x.msg)));
  });
  it('allows the same upstream to be listed twice, and declared conflicts', () => {
    assert.ok(!lintCatalogue([mk('a', 'o/one', 'same'), mk('b', 'o/one', 'same')]).some(x => /is also written by/.test(x.msg)));
    const a = mk('a', 'o/one', 'same', 'conflicts_with: b\n'), b = mk('b', 'o/two', 'same', 'conflicts_with: a\n');
    assert.ok(!lintCatalogue([a, b]).some(x => /is also written by/.test(x.msg)));
  });
  // Regression: wondelai-skills installs a `design-sprint` skill, which is also the pointer directory of the
  // `design-sprint` stub (that one installs `create-issue`), so installing wondelai silently replaced the pointer.
  it("flags a stub whose install lands in another stub's pointer directory", () => {
    const victim = mk('victim', 'o/one', 'elsewhere'), other = mk('other', 'o/two', 'victim');
    assert.ok(lintCatalogue([victim, other]).some(x => /"victim" is also written by/.test(x.msg)));
    const a = mk('victim', 'o/one', 'elsewhere', 'conflicts_with: other\n'), b = mk('other', 'o/two', 'victim', 'conflicts_with: victim\n');
    assert.ok(!lintCatalogue([a, b]).some(x => /is also written by/.test(x.msg)));
  });
  it('does not flag a stub that upgrades its own pointer in place', () => {
    assert.ok(!lintCatalogue([mk('same', 'o/one', 'same')]).some(x => /is also written by/.test(x.msg)));
  });
});

// ── the real catalogue ───────────────────────────────────────────────────────

describe('catalogue install schema (every stub)', () => {
  const stubs = allStubs();
  const byName = new Map(stubs.map(s => [s.name, s]));
  for (const s of stubs) {
    if (s.type === 'router') continue;
    it(`${s.name}: install fields are valid and the pointer is in sync`, () => {
      const v = lintStub(s, byName, fs.readFileSync(s.mdPath, 'utf8'));
      assert.deepEqual(v, [], `\n  - ${v.join('\n  - ')}`);
    });
  }
  it('has no install-directory collisions or orphan stubs', () => {
    const v = lintCatalogue(stubs).map(x => `${x.stub}: ${x.msg}`);
    assert.deepEqual(v, [], `\n  - ${v.join('\n  - ')}`);
  });
});
