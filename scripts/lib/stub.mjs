/**
 * Shared stub.yaml reader. The repo deliberately avoids a YAML dependency: stub.yaml is flat
 * `key: value` lines plus block lists (`key:` followed by `  - item` lines).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(fileURLToPath(import.meta.url), '../../..');
/** DAS_SKILLS_DIR lets tests point every script at a fixture catalogue. */
export const SKILLS_DIR = process.env.DAS_SKILLS_DIR ? path.resolve(process.env.DAS_SKILLS_DIR) : path.join(ROOT, 'skills');

/** Keys whose value is a list (a bare scalar is accepted and wrapped). */
export const LIST_KEYS = new Set([
  'installed_as', 'install_extra', 'install_claude', 'install_steps', 'requires', 'conflicts_with',
]);

function unquote(s) {
  s = s.trim();
  if (s.length >= 2 && s.startsWith('"') && s.endsWith('"')) {
    return s.slice(1, -1).replace(/\\(["\\])/g, '$1');
  }
  if (s.length >= 2 && s.startsWith("'") && s.endsWith("'")) return s.slice(1, -1);
  return s;
}

/** Parse stub.yaml text into { key: string | string[] }. List keys are always arrays. */
export function parseStubText(raw) {
  const out = {};
  const lines = raw.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([a-z_]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rest] = m;
    if (rest === '') {
      const items = [];
      while (i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
        i++;
        items.push(unquote(lines[i].replace(/^\s+-\s+/, '')));
      }
      out[key] = items;
    } else {
      out[key] = LIST_KEYS.has(key) ? [unquote(rest)] : unquote(rest);
    }
  }
  return out;
}

export function readStub(name, skillsDir = SKILLS_DIR) {
  const dir = path.join(skillsDir, name);
  const stubPath = path.join(dir, 'stub.yaml');
  const mdPath = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(stubPath)) return null;
  const raw = fs.readFileSync(stubPath, 'utf8');
  return { name, dir, stubPath, mdPath, raw, ...parseStubText(raw) };
}

export function allStubs(skillsDir = SKILLS_DIR) {
  return fs.readdirSync(skillsDir)
    .filter(n => fs.statSync(path.join(skillsDir, n)).isDirectory())
    .map(n => readStub(n, skillsDir))
    .filter(Boolean);
}

/** The directory the skills CLI installs a skill into: lowercase, runs of [^a-z0-9._] -> '-', trimmed. */
export function sanitize(name) {
  return name.toLowerCase().replace(/[^a-z0-9._]+/g, '-').replace(/^[.-]+|[.-]+$/g, '');
}

/** 'https://github.com/Owner/Repo(.git)(/…)' | 'Owner/Repo(/sub)' -> 'owner/repo' (lowercase), else null. */
export function repoOf(ref) {
  const m = String(ref ?? '').match(/^(?:https?:\/\/(?:github\.com|raw\.githubusercontent\.com)\/)?([\w.-]+)\/([\w.-]+)/i);
  return m ? `${m[1]}/${m[2]}`.toLowerCase().replace(/\.git$/, '') : null;
}

/** Split a shell-ish command into tokens, honouring double and single quotes. */
export function tokenize(cmd) {
  const out = [];
  const re = /"((?:[^"\\]|\\.)*)"|'([^']*)'|(\S+)/g;
  let m;
  while ((m = re.exec(cmd))) out.push(m[1] ?? m[2] ?? m[3]);
  return out;
}

/** Parse `npx skills add <target> [--skill a b c] [flags]` -> { target, skills, flags } or null. */
export function parseNpx(cmd) {
  const t = tokenize(cmd);
  const i = t.findIndex((x, k) => x === 'npx' && t[k + 1] === 'skills' && t[k + 2] === 'add');
  if (i < 0) return null;
  const rest = t.slice(i + 3);
  const target = rest.find(x => !x.startsWith('-'));
  const skills = [];
  const flags = [];
  for (let k = 0; k < rest.length; k++) {
    if (rest[k] === '--skill' || rest[k] === '-s') {
      while (k + 1 < rest.length && !rest[k + 1].startsWith('-')) skills.push(rest[++k]);
    } else if (rest[k].startsWith('-')) {
      flags.push(rest[k]);
    }
  }
  return { target, skills, flags };
}

/** Flags of `git clone` that take a separate value (`--depth 1`); `--depth=1` style needs no help. */
const CLONE_VALUE_FLAGS = new Set(['--depth', '--branch', '-b', '--filter', '--origin', '-o', '--jobs', '-j', '--config', '-c', '--reference', '--template']);

/** Parse the tokens after `git clone` -> { url, dest, flags } (flags keep their values). */
export function parseGitClone(rest) {
  const flags = [];
  const positional = [];
  for (let i = 0; i < rest.length; i++) {
    const x = rest[i];
    if (x.startsWith('-')) {
      flags.push(x);
      if (CLONE_VALUE_FLAGS.has(x) && i + 1 < rest.length) flags.push(rest[++i]);
    } else positional.push(x);
  }
  const url = positional.find(x => /^https?:\/\//.test(x));
  const dest = url ? positional[positional.indexOf(url) + 1] : undefined;
  return { url, dest, flags };
}

export function installMode(stub) {
  return stub.install_mode || 'npx';
}
