#!/usr/bin/env node
/**
 * Upstream freshness check.
 *
 * Verifies that every non-router skill still points at a live, non-stale upstream:
 *   - DELETED  (HTTP 404) or BLOCKED (HTTP 451) repo  → hard failure (exit 1)
 *   - ARCHIVED repo                                    → stale warning (exit 1 only with --strict)
 *   - Missing `upstream_path` file (with --paths)      → warning (exit 1 only with --strict)
 *
 * The upgrade target of a `type:skill`/`type:package` pointer is its upstream repo.
 * If that repo is gone, the pointer is dead and must be fixed or removed.
 *
 * Usage:
 *   node scripts/check-upstreams.mjs                  # whole catalogue; archived = warning
 *   node scripts/check-upstreams.mjs --strict         # archived / missing path also fail
 *   node scripts/check-upstreams.mjs --paths          # also verify upstream_path exists
 *   node scripts/check-upstreams.mjs --only a,b,c     # only these skill dirs (PR-scoped gate)
 *
 * Scoping: the scheduled job checks the whole catalogue; PR CI passes --only with the
 * skill dirs changed in the PR, so a PR is gated on what it touches — not held hostage
 * by pre-existing rot elsewhere in the catalogue.
 *
 * Auth: set GITHUB_TOKEN or GH_TOKEN to raise the API rate limit from 60 to 5000/hr.
 * Without a token the script still runs but may be rate-limited on large catalogues.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const STRICT     = process.argv.includes('--strict');
const CHECK_PATHS = process.argv.includes('--paths');

const onlyArg = process.argv.find(a => a.startsWith('--only='))?.slice('--only='.length)
  ?? (process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : undefined);
const ONLY = onlyArg ? new Set(onlyArg.split(',').map(s => s.trim()).filter(Boolean)) : null;

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const HEADERS = {
  'User-Agent': 'design-agent-skills-ci',
  Accept: 'application/vnd.github+json',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

if (!token) {
  console.warn('⚠ No GITHUB_TOKEN/GH_TOKEN set — unauthenticated API calls are limited to 60/hr.');
}

const field = (raw, key) => (raw.match(new RegExp(`^${key}:\\s*(.+)$`, 'm')) || [])[1]?.trim();

/** GET with retry on transient errors (network failure, 5xx, secondary rate limit). */
async function getJSON(url, attempt = 1) {
  try {
    const r = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(10000) });
    if ((r.status >= 500 || r.status === 429) && attempt < 3) {
      await new Promise(res => setTimeout(res, 500 * attempt));
      return getJSON(url, attempt + 1);
    }
    return r;
  } catch (e) {
    if (attempt < 3) {
      await new Promise(res => setTimeout(res, 500 * attempt));
      return getJSON(url, attempt + 1);
    }
    throw e;
  }
}

const dead = [];   // hard failures: deleted / blocked
const stale = [];  // soft: archived / missing path
let checked = 0;

const dirs = fs.readdirSync(SKILLS_DIR).filter(n => {
  try { return fs.statSync(path.join(SKILLS_DIR, n)).isDirectory(); } catch { return false; }
});

await Promise.all(dirs.map(async name => {
  if (ONLY && !ONLY.has(name)) return;            // PR-scoped: only the changed skills
  const stubPath = path.join(SKILLS_DIR, name, 'stub.yaml');
  if (!fs.existsSync(stubPath)) return;
  const raw = fs.readFileSync(stubPath, 'utf8');

  const type = field(raw, 'type');
  if (!type || type === 'router') return;        // routers have no upstream

  const upstream = field(raw, 'upstream');
  if (!upstream) return;                          // platform stubs may omit it

  const repoMatch = upstream.match(/^https?:\/\/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  if (!repoMatch) return;                         // non-GitHub upstream — skip
  const repo = repoMatch[1];
  checked++;

  let data;
  try {
    const r = await getJSON(`https://api.github.com/repos/${repo}`);
    if (r.status === 404) { dead.push(`${name}: ${upstream} → 404 (deleted or renamed)`); return; }
    if (r.status === 451) { dead.push(`${name}: ${upstream} → 451 (DMCA / blocked)`); return; }
    if (r.status === 403) { stale.push(`${name}: ${upstream} → 403 (rate-limited; could not verify)`); return; }
    if (!r.ok)            { stale.push(`${name}: ${upstream} → HTTP ${r.status} (unverified)`); return; }
    data = await r.json();
  } catch (e) {
    stale.push(`${name}: ${upstream} → ${e.message} (network error after retries)`);
    return;
  }

  if (data.archived) stale.push(`${name}: ${upstream} → archived (stale upstream)`);

  if (CHECK_PATHS) {
    const upPath = field(raw, 'upstream_path');
    if (upPath) {
      const branch = data.default_branch || 'HEAD';
      const r = await getJSON(`https://api.github.com/repos/${repo}/contents/${encodeURI(upPath)}?ref=${branch}`);
      if (r.status === 404) stale.push(`${name}: upstream_path "${upPath}" not found in ${repo}@${branch}`);
    }
  }
}));

if (stale.length) {
  console.warn(`\n⚠ ${stale.length} stale/unverified upstream(s):\n  ${stale.join('\n  ')}`);
}
if (dead.length) {
  console.error(`\n✖ ${dead.length} dead upstream(s) — pointers have no upgrade target:\n  ${dead.join('\n  ')}`);
}

const fail = dead.length > 0 || (STRICT && stale.length > 0);
if (fail) {
  console.error(`\nFAILED — fix or remove the dead${STRICT ? '/stale' : ''} upstream(s) above.`);
  process.exit(1);
}
console.log(`\nOK — ${checked} upstream(s) checked, ${dead.length} dead, ${stale.length} stale${STRICT ? '' : ' (warnings only)'}.`);
