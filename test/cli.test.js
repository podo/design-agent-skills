import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const CLI  = path.join(ROOT, 'bin', 'cli.mjs');

const src = fs.readFileSync(CLI, 'utf8');

describe('bin/cli.js', () => {
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

  it('rejects unknown categories with process.exit', () => {
    assert.ok(src.includes('VALID_CATEGORIES') && src.includes('process.exit'),
      'must validate category flag against VALID_CATEGORIES and exit on unknown');
  });

  it('filters by maxRank for profile-based selection', () => {
    assert.ok(src.includes('maxRank'),
      'must use maxRank to apply rank-based profile filtering');
  });

  it('excludes routers from filtered results', () => {
    assert.ok(src.includes("s.type === 'router'") || src.includes('type !== \'router\''),
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
});
