import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseNpx, parseStubText } from '../scripts/lib/stub.mjs';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_TYPES  = new Set(['router', 'skill', 'package', 'platform']);
const VALID_TIERS  = new Set(['official', 'community', 'experimental']);
const VALID_RANKS  = new Set([1, 2, 3]);

// ── helpers ──────────────────────────────────────────────────────────────────

/** The `npx skills add …` commands of a pointer's generated install block, parsed. */
const pointerCommands = md => {
  const block = md.slice(md.indexOf('das:install:start'), md.indexOf('das:install:end'));
  return [...block.matchAll(/^\s*(npx skills add .*)$/gm)].map(m => parseNpx(m[1])).filter(Boolean);
};
const sameSet = (a, b) => a.length === b.length && [...a].sort().join('\0') === [...b].sort().join('\0');

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

    // `--skill` matches the upstream SKILL.md `name`, not our directory name (see installed_as). The pointer's
    // parsed install commands must install exactly the --skill names of stub.yaml's install_default (a substring
    // check would pass for a wrong name that merely contains the right one, e.g. ux-writing in ux-writing-skill).
    // Raw-URL / subpath / manual installs have no --skill and are covered by test/pointers.test.js.
    it(`${name}: the pointer installs exactly the --skill names of stub.yaml`, () => {
      const fields = parseStubText(stub);
      const want = parseNpx(fields.install_default ?? '')?.skills ?? [];
      if (!want.length) return;
      const cmds = pointerCommands(skill);
      assert.ok(cmds.some(c => sameSet(c.skills, want)), `no command in the pointer installs exactly: ${want.join(', ')}`);
      for (const c of cmds) {
        for (const n of c.skills) {
          assert.ok((fields.installed_as ?? []).includes(n), `the pointer installs "${n}", which installed_as does not list`);
        }
      }
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
  // Keep in sync with documented fields in CLAUDE.md stub.yaml → Fields section
  const KNOWN_FIELDS = new Set([
    'type', 'tier', 'rank', 'category', 'upstream', 'upstream_path', 'version',
    'install_default', 'installed_as', 'note', 'install_claude',
    'install_extra', 'install_mode', 'install_steps', 'install_check', 'manual_reason',
    'requires', 'license', 'size_mb', 'conflicts_with',
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
  // Regression: the npx route was a bare install of every skill in the repo, which wrote generic names
  // (code-review, retro, sql-queries, draft-nda, …) over users' own skills and needed a hand-copied 69-name list
  // that broke whenever upstream added a skill. It is a targeted list now; the full set stays on the plugin route.
  it('phuryn-pm-skills: npx route is a targeted --skill list without generic-named skills; plugin route kept', () => {
    const s = skills.find(x => x.name === 'phuryn-pm-skills');
    assert.ok(s && s.stub, 'phuryn-pm-skills stub missing');
    const f = parseStubText(s.stub);
    const p = parseNpx(f.install_default);
    assert.equal(p.target, 'phuryn/pm-skills');
    assert.ok(p.skills.length > 0 && sameSet(p.skills, f.installed_as), 'a --skill list that equals installed_as, not a bare install');
    for (const generic of ['code-review', 'retro', 'sql-queries', 'draft-nda', 'grammar-check']) {
      assert.ok(!f.installed_as.includes(generic), `${generic} would overwrite a user skill of the same name`);
    }
    assert.ok(f.install_claude.some(c => /marketplace add phuryn\/pm-skills/.test(c)), 'the plugin route is still documented');
  });

  // Regression: product-on-purpose/pm-skills shrank from 63 → 55 skills upstream.
  // The stale "63" count must not reappear in the pointer.
  it('pm-skills: no stale "63" skill count', () => {
    const s = skills.find(x => x.name === 'pm-skills');
    assert.ok(s && s.skill, 'pm-skills SKILL.md missing');
    assert.ok(!/\b63\b/.test(s.skill),
      'pm-skills must not reference the stale 63-skill count (upstream is 55)');
  });

  // Regression: design-with-claude advertised "38 design commands", then "47".
  // Upstream ships 48. Any hardcoded specialist count in a pointer goes stale on
  // the next upstream release, so the pointer must not carry a count at all.
  it('design-with-claude: no hardcoded specialist count', () => {
    const s = skills.find(x => x.name === 'design-with-claude');
    assert.ok(s && s.skill, 'design-with-claude SKILL.md missing');
    assert.ok(!/\b\d+\s+(design\s+)?(specialists?|slash commands?|design commands?)/i.test(s.skill),
      'design-with-claude must not hardcode a specialist/command count (it goes stale upstream)');
  });
});

describe('install command validity (regression)', () => {
  // Regression: `npx skills add owner/repo --skill X` resolves X against the upstream
  // SKILL.md frontmatter `name`, NOT our directory name. ~25 stubs used their directory
  // name and every upgrade failed with "No matching skills found". Each entry below was
  // proven by a real `npx skills add` install (2026-10-21). Keep in sync with upstream.
  const UPSTREAM_SKILL_NAMES = {
    'ai-graphic-design-skill': 'ai-graphic-design',
    'animate-skill': 'animate',
    'claude-wireframe-skill': 'wireframe',
    'cloudflare-web-perf': 'web-perf',
    'composio-artifacts': 'artifacts-builder',
    'copywriting-skill': 'copywriting',
    'css-animation-skill': 'css-animation',
    'd3js-skill': 'd3-viz',
    'data-analysis-skill': 'data-analysis-pro',
    'design-tokens-skill': 'design-tokens',
    'digidai-pm': 'product-manager-skills',
    'extract-design-md': 'stitch::extract-design-md',
    'guizang-ppt': 'guizang-ppt-skill',
    'make-interfaces-better': 'make-interfaces-feel-better',
    'mobile-app-design': 'Mobile App Design Standards',
    'neo-user-journey': 'ux-journey-architect',
    'p5js-hermes': 'p5js',
    'taste-design-stitch': 'taste-design',
    'taste-skill': 'design-taste-frontend',
    'ux-designer-skill': 'ux-designer',
    'ux-writing-skill': 'ux-writing',
    'wiggle-claude-skill': 'wiggle',
    'wireframe-skill': 'wireframe',
  };

  for (const [dir, real] of Object.entries(UPSTREAM_SKILL_NAMES)) {
    it(`${dir}: installs upstream skill "${real}", not the directory name`, () => {
      const s = skills.find(x => x.name === dir);
      assert.ok(s && s.stub && s.skill, `${dir} files missing`);
      const fields = parseStubText(s.stub);
      assert.deepEqual(fields.installed_as, [real], `stub.yaml installed_as must be the upstream skill name "${real}"`);
      // manual routes (a local-path `npx skills add`, no --skill) take the name from the skill's own frontmatter
      if (!fields.install_default) return;
      assert.deepEqual(parseNpx(fields.install_default).skills, [real], 'install_default must install exactly that skill');
      const cmds = pointerCommands(s.skill);
      assert.ok(cmds.length > 0 && cmds.every(c => sameSet(c.skills, [real])),
        `every install command in the pointer must use --skill ${real}`);
      assert.ok(real === dir || cmds.every(c => !c.skills.includes(dir)),
        `the pointer must not use the directory name as --skill (${dir} is not an upstream skill)`);
    });
  }

  // Regression: 54 package stubs still told agents to look for an installed skill under
  // ~/.design-agent-skills/skills/. The install layout is ~/.agents/skills (global) or
  // .agents/skills (project), so "already installed?" was always false. The test above only
  // covered type:skill; this covers every pointer.
  for (const { name, skill } of skills) {
    if (!skill) continue;
    it(`${name}: no legacy ~/.design-agent-skills/ path`, () => {
      assert.ok(!skill.includes('.design-agent-skills'),
        'use ~/.agents/skills/<name> or .agents/skills/<name>, not the legacy ~/.design-agent-skills/ path');
    });
  }
});

describe('README counts', () => {
  // Regression: the skill count and tier counts in the README went stale by hand on every release.
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const all = skills.filter(s => s.stub);
  const real = all.filter(s => yamlGet(s.stub, 'type') !== 'router');
  const rank = n => real.filter(s => Number(yamlGet(s.stub, 'rank')) === n).length;

  it('--picks, --essentials and --all counts match the stubs', () => {
    const row = flag => readme.match(new RegExp('\\|[^|]*\\|\\s*`--' + flag + '`\\s*\\|\\s*~?(\\d+)\\s*\\|'))?.[1];
    assert.equal(Number(row('picks')), rank(1), '--picks count');
    assert.equal(Number(row('essentials')), rank(1) + rank(2), '--essentials count');
    assert.equal(Number(row('all')), real.length, '--all count');
  });

  it('tier counts in the supply chain section match the stubs (routers included)', () => {
    const m = readme.match(/`official` \((\d+)\), `community` \((\d+)\), `experimental` \((\d+)\)/);
    assert.ok(m, 'supply chain tier line not found');
    const tier = t => all.filter(s => yamlGet(s.stub, 'tier') === t).length;
    assert.deepEqual(m.slice(1).map(Number), [tier('official'), tier('community'), tier('experimental')]);
  });
});
