import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_TYPES  = new Set(['router', 'skill', 'package', 'platform']);
const VALID_TIERS  = new Set(['official', 'community', 'experimental']);
const VALID_RANKS  = new Set([1, 2, 3]);

// ── helpers ──────────────────────────────────────────────────────────────────

function skillDirs() {
  return fs.readdirSync(SKILLS_DIR).filter(n =>
    fs.statSync(path.join(SKILLS_DIR, n)).isDirectory()
  );
}

function readFile(skillName, filename) {
  return fs.readFileSync(path.join(SKILLS_DIR, skillName, filename), 'utf8');
}

function hasFile(skillName, filename) {
  return fs.existsSync(path.join(SKILLS_DIR, skillName, filename));
}

/** Extract YAML frontmatter from a SKILL.md (between first pair of ---) */
function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  return m[1];
}

/** Pull a scalar value from raw YAML text */
function yamlGet(yaml, key) {
  const m = yaml.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

/** Check if a key exists anywhere in raw YAML */
function yamlHas(yaml, key) {
  return new RegExp(`^${key}:`, 'm').test(yaml);
}

/** Pull triggers list from frontmatter */
function parseTriggers(frontmatter) {
  const m = frontmatter.match(/^triggers:\n((?:  - .+\n?)+)/m);
  if (!m) return [];
  return m[1].trim().split('\n').map(l => l.replace(/^\s*-\s*/, '').replace(/^["']|["']$/g, '').trim());
}

// ── load all skills once ──────────────────────────────────────────────────────

const skills = skillDirs().map(name => {
  const stubPath = path.join(SKILLS_DIR, name, 'stub.yaml');
  const skillPath = path.join(SKILLS_DIR, name, 'SKILL.md');
  const stub  = fs.existsSync(stubPath)  ? fs.readFileSync(stubPath,  'utf8') : null;
  const skill = fs.existsSync(skillPath) ? fs.readFileSync(skillPath, 'utf8') : null;
  const fm = skill ? parseFrontmatter(skill) : null;
  return { name, stub, skill, fm };
});

// ── tests ─────────────────────────────────────────────────────────────────────

describe('file presence', () => {
  for (const { name } of skills) {
    it(`${name} has stub.yaml`, () => {
      assert.ok(hasFile(name, 'stub.yaml'), `missing stub.yaml`);
    });
    it(`${name} has SKILL.md`, () => {
      assert.ok(hasFile(name, 'SKILL.md'), `missing SKILL.md`);
    });
  }
});

describe('stub.yaml validity', () => {
  for (const { name, stub } of skills) {
    if (!stub) continue;

    it(`${name}: type is valid`, () => {
      const type = yamlGet(stub, 'type');
      assert.ok(type, 'missing type field');
      assert.ok(VALID_TYPES.has(type), `invalid type "${type}" — must be one of: ${[...VALID_TYPES].join(', ')}`);
    });

    it(`${name}: tier is valid`, () => {
      const tier = yamlGet(stub, 'tier');
      assert.ok(tier, 'missing tier field');
      assert.ok(VALID_TIERS.has(tier), `invalid tier "${tier}" — must be one of: ${[...VALID_TIERS].join(', ')}`);
    });

    it(`${name}: router type has no upstream`, () => {
      const type = yamlGet(stub, 'type');
      if (type !== 'router') return;
      assert.ok(!yamlHas(stub, 'upstream'), 'router skills must not have an upstream field');
    });

    it(`${name}: skill type has upstream`, () => {
      const type = yamlGet(stub, 'type');
      if (type !== 'skill') return;
      assert.ok(yamlHas(stub, 'upstream'), 'type:skill must have an upstream field');
    });

    it(`${name}: non-router has rank`, () => {
      const type = yamlGet(stub, 'type');
      if (type === 'router') return;
      assert.ok(yamlHas(stub, 'rank'), 'non-router stubs must have a rank field');
    });

    it(`${name}: rank is valid`, () => {
      const type = yamlGet(stub, 'type');
      if (type === 'router') return;
      const rank = Number(yamlGet(stub, 'rank'));
      assert.ok(VALID_RANKS.has(rank), `invalid rank "${rank}" — must be 1, 2, or 3`);
    });
  }
});

describe('SKILL.md frontmatter', () => {
  for (const { name, fm } of skills) {
    if (!fm) continue;

    it(`${name}: has name field`, () => {
      assert.ok(yamlGet(fm, 'name'), 'missing name in frontmatter');
    });

    it(`${name}: name matches directory`, () => {
      const skillName = yamlGet(fm, 'name');
      assert.equal(skillName, name, `name "${skillName}" does not match directory "${name}"`);
    });

    it(`${name}: has description`, () => {
      // description can be multiline — just check the key exists
      assert.ok(/^description:/m.test(fm), 'missing description in frontmatter');
    });

    it(`${name}: has at least one trigger`, () => {
      const triggers = parseTriggers(fm);
      assert.ok(triggers.length > 0, 'must have at least one trigger phrase');
    });

    it(`${name}: triggers are non-empty strings`, () => {
      const triggers = parseTriggers(fm);
      for (const t of triggers) {
        assert.ok(t.length > 0, `empty trigger found`);
      }
    });
  }
});

describe('type:skill upgrade commands', () => {
  for (const { name, stub, skill } of skills) {
    if (!stub || !skill) continue;
    const type = yamlGet(stub, 'type');
    if (type !== 'skill') continue;

    it(`${name}: uses skills add (not curl) for upgrade`, () => {
      assert.ok(
        skill.includes('npx skills add'),
        'type:skill must use "npx skills add" for upgrade, not curl'
      );
      assert.ok(
        !skill.includes('~/.design-agent-skills/'),
        'must not reference legacy ~/.design-agent-skills/ path'
      );
    });

    it(`${name}: upgrade command includes skill name`, () => {
      assert.ok(
        skill.includes(`--skill ${name}`),
        `upgrade command must include "--skill ${name}"`
      );
    });
  }
});

describe('CLI data integrity', () => {
  // Keep in sync with VALID_CATEGORIES in bin/cli.mjs — update both together
  const VALID_CATEGORIES = new Set([
    'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
    'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
    'diagrams', 'data-visualization', 'presentations', 'product-pm',
    'content-design', 'email-design', 'tui-terminal', 'meta',
    'motion-animation', 'design-engineering', 'design-research',
  ]);

  for (const { name, stub, fm } of skills) {
    if (!stub || !fm) continue;
    const type = yamlGet(stub, 'type');
    if (type === 'router') continue;

    it(`${name}: SKILL.md has das.category`, () => {
      const m = fm.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m);
      assert.ok(m, 'SKILL.md must have das.category so the CLI category filter works');
      assert.ok(m[1].trim().length > 0, 'das.category must not be empty');
    });

    it(`${name}: das.category is a known category`, () => {
      const m = fm.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m);
      if (!m) return; // caught by previous test
      assert.ok(
        VALID_CATEGORIES.has(m[1].trim()),
        `das.category "${m[1].trim()}" is not in VALID_CATEGORIES — add it to both SKILL.md and bin/cli.mjs`
      );
    });
  }

  it('every non-router skill has a resolvable category', () => {
    const missing = skills.filter(({ stub, fm }) => {
      if (!stub || !fm) return false;
      if (yamlGet(stub, 'type') === 'router') return false;
      const m = fm.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m);
      return !m || !m[1].trim();
    }).map(s => s.name);
    assert.equal(missing.length, 0,
      `skills with no resolvable category (CLI filter returns 0): ${missing.join(', ')}`);
  });
});

describe('stub.yaml field validation', () => {
  // Keep in sync with documented fields in CLAUDE.md stub.yaml section
  // Keep in sync with documented fields in CLAUDE.md stub.yaml → Fields section
  const KNOWN_FIELDS = new Set([
    'type', 'tier', 'rank', 'category', 'upstream', 'upstream_path', 'version',
    'install_default', 'installed_as', 'note', 'install_claude', 'install_npm',
  ]);

  for (const { name, stub } of skills) {
    if (!stub) continue;
    it(`${name}: no unknown stub.yaml fields`, () => {
      const unknowns = stub
        .split('\n')
        .filter(l => /^[a-z_]+:/.test(l))
        .map(l => l.match(/^([a-z_]+):/)[1])
        .filter(k => !KNOWN_FIELDS.has(k));
      assert.equal(unknowns.length, 0,
        `unknown stub.yaml field(s): ${unknowns.join(', ')} — add to CLAUDE.md or KNOWN_FIELDS`);
    });
  }
});

describe('catalogue-level invariants', () => {
  it('has exactly 6 router skills', () => {
    const routers = skills.filter(s => s.stub && yamlGet(s.stub, 'type') === 'router');
    assert.equal(routers.length, 6, `expected 6 router skills, got ${routers.length}: ${routers.map(s => s.name).join(', ')}`);
  });

  it('no duplicate trigger phrases across all skills', () => {
    const seen = new Map(); // trigger → first skill name
    const dupes = [];
    for (const { name, fm } of skills) {
      if (!fm) continue;
      for (const t of parseTriggers(fm)) {
        if (seen.has(t)) {
          dupes.push(`"${t}" on both ${seen.get(t)} and ${name}`);
        } else {
          seen.set(t, name);
        }
      }
    }
    assert.equal(dupes.length, 0, `duplicate triggers found:\n  ${dupes.join('\n  ')}`);
  });

  it('all skill directories have both stub.yaml and SKILL.md', () => {
    const missing = skills.filter(s => !s.stub || !s.skill).map(s => s.name);
    assert.equal(missing.length, 0, `skills missing files: ${missing.join(', ')}`);
  });
});

describe('metadata regression guards', () => {
  // Regression: product-on-purpose/pm-skills shrank from 63 → 55 skills upstream.
  // The stale "63" count must not reappear in the pointer.
  it('pm-skills: no stale "63" skill count', () => {
    const s = skills.find(x => x.name === 'pm-skills');
    assert.ok(s && s.skill, 'pm-skills SKILL.md missing');
    assert.ok(!/\b63\b/.test(s.skill),
      'pm-skills must not reference the stale 63-skill count (upstream is 55)');
  });

  // Regression: phuryn/pm-skills moved from a single `npx skills add` bundle to a
  // Claude plugin marketplace (8 plugins). The old install path no longer works,
  // so neither the stub nor the pointer may advertise it.
  it('phuryn-pm-skills: uses plugin marketplace install, not stale npx skills add', () => {
    const s = skills.find(x => x.name === 'phuryn-pm-skills');
    assert.ok(s && s.skill && s.stub, 'phuryn-pm-skills files missing');
    assert.ok(!/npx skills add phuryn\/pm-skills/.test(s.skill),
      'phuryn-pm-skills SKILL.md must not use the stale "npx skills add phuryn/pm-skills" path');
    assert.ok(!/npx skills add phuryn\/pm-skills/.test(s.stub),
      'phuryn-pm-skills stub.yaml install_default must not use the stale npx path');
    assert.ok(/plugin marketplace add phuryn\/pm-skills/.test(s.skill),
      'phuryn-pm-skills must document the "plugin marketplace add" install');
  });
});
