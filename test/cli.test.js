import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../');
const CLI  = path.join(ROOT, 'bin', 'cli.mjs');

describe('bin/cli.js', () => {
  it('exists', () => {
    assert.ok(fs.existsSync(CLI), 'bin/cli.js not found');
  });

  it('is executable', () => {
    const mode = fs.statSync(CLI).mode;
    assert.ok(mode & 0o111, 'bin/cli.js is not executable');
  });

  it('references correct package name', () => {
    const src = fs.readFileSync(CLI, 'utf8');
    assert.ok(src.includes('podo/design-agent-skills'), 'must reference podo/design-agent-skills');
  });

  it('delegates to npx skills', () => {
    const src = fs.readFileSync(CLI, 'utf8');
    assert.ok(src.includes("'skills'") || src.includes('"skills"'), 'must delegate to skills CLI');
  });

  it('supports -g flag for global scope', () => {
    const src = fs.readFileSync(CLI, 'utf8');
    assert.ok(src.includes("'-g'") || src.includes('"-g"') || src.includes('global'), 'must handle global scope flag');
  });
});
