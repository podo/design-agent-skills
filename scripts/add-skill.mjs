#!/usr/bin/env node
/**
 * Interactive wizard for adding a new skill stub to the catalogue.
 * All fields accept CLI flags for non-interactive / scripted use.
 *
 * Usage:
 *   node scripts/add-skill.mjs
 *   node scripts/add-skill.mjs --name remotion --upstream https://github.com/remotion-dev/remotion --category motion-animation --tier official --rank 1 --type skill --yes
 *   node scripts/add-skill.mjs --name remotion ... --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');

const VALID_TYPES      = ['skill', 'package', 'platform', 'router'];
const VALID_TIERS      = ['official', 'community', 'experimental'];
const VALID_RANKS      = ['1', '2', '3'];
const VALID_CATEGORIES = [
  'design-systems', 'creative-3d', 'interaction-polish', 'visual-components',
  'accessibility-quality', 'design-review', 'figma-code', 'official-suites',
  'diagrams', 'data-visualization', 'presentations', 'product-pm',
  'content-design', 'email-design', 'tui-terminal', 'meta',
  'motion-animation', 'design-engineering', 'design-research',
];

// ── flag parsing ──────────────────────────────────────────────────────────────

const argv = process.argv.slice(2);
const flag = (f) => { const i = argv.indexOf(f); return i !== -1 ? argv[i + 1] ?? null : null; };
const bool = (f) => argv.includes(f);

const flagName         = flag('--name');
const flagUpstream     = flag('--upstream');
const flagCategory     = flag('--category');
const flagTier         = flag('--tier');
const flagRank         = flag('--rank');
const flagType         = flag('--type');
const flagUpstreamPath = flag('--upstream-path');
const flagDescription  = flag('--description');
const flagTrigger      = flag('--trigger');
const flagDryRun       = bool('--dry-run');
const flagYes          = bool('--yes') || bool('-y');

// ── readline prompt helper ────────────────────────────────────────────────────

let rl;

function prompt(question) {
  if (!rl) {
    rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  }
  return new Promise(resolve => rl.question(question, resolve));
}

function closeRl() { if (rl) { rl.close(); rl = null; } }

async function ask(label, defaultVal, validate) {
  if (flagYes && defaultVal != null) return defaultVal;
  while (true) {
    const hint = defaultVal != null ? ` [${defaultVal}]` : '';
    const raw  = (await prompt(`${label}${hint}: `)).trim();
    const val  = raw === '' ? (defaultVal ?? '') : raw;
    if (validate) {
      const err = validate(val);
      if (err) { console.error(`  Error: ${err}`); continue; }
    }
    return val;
  }
}

async function choose(label, options, defaultVal) {
  if (flagYes && defaultVal != null) return defaultVal;
  console.log(`\n${label}`);
  options.forEach((o, i) => console.log(`  ${i + 1}. ${o}`));
  while (true) {
    const defIdx = defaultVal != null ? options.indexOf(defaultVal) + 1 : null;
    const raw = (await prompt(`Choice${defIdx ? ` [${defIdx}]` : ''}: `)).trim();
    if (raw === '' && defIdx) return options[defIdx - 1];
    const n = Number(raw);
    if (n >= 1 && n <= options.length) return options[n - 1];
    console.error(`  Please enter 1–${options.length}`);
  }
}

// ── template generators ───────────────────────────────────────────────────────

function ownerRepo(upstreamUrl) {
  return upstreamUrl.replace('https://github.com/', '');
}

function stubYaml({ type, tier, rank, category, upstream, upstreamPath }) {
  const lines = [
    `type: ${type}`,
    `tier: ${tier}`,
  ];
  if (type !== 'router') {
    lines.push(`rank: ${rank}`);
    lines.push(`category: ${category}`);
  }
  if (upstream && type !== 'router') {
    lines.push(`upstream: ${upstream}`);
    if (upstreamPath && upstreamPath !== 'SKILL.md') {
      lines.push(`upstream_path: ${upstreamPath}`);
    }
  }
  lines.push('version: latest');
  return lines.join('\n') + '\n';
}

function skillMd({ name, type, description, trigger, category, upstream, upstreamPath }) {
  const repo = upstream ? ownerRepo(upstream) : 'owner/repo';

  const frontmatter = [
    '---',
    `name: ${name}`,
    'description: |',
    `  ${description}`,
    'triggers:',
    `  - "${trigger}"`,
    'das:',
    `  type: ${type}`,
    `  category: ${category}`,
  ];
  if (upstream) {
    frontmatter.push(`  upstream: "${upstream}"`);
  }
  frontmatter.push('  version: latest', '---');

  const header = [
    '',
    `# ${name}`,
    '',
    upstream
      ? `> Catalogue stub — full skill: [${repo}](${upstream})`
      : `> Catalogue stub`,
    '',
  ];

  let body;
  if (type === 'skill') {
    body = [
      '## Decision tree',
      '',
      '1. **Is the full skill already installed?**',
      `   - Global: \`grep -q "^das:" ~/.agents/skills/${name}/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"\``,
      `   - Project: \`grep -q "^das:" .agents/skills/${name}/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"\``,
      '   - No `das:` block → full skill installed, invoke and proceed',
      '   - `das:` block present → go to step 2',
      '',
      '2. **Detect scope, then install:**',
      '',
      '   ```bash',
      `   [ -e ~/.agents/skills/${name} ] && echo "global" || echo "project"`,
      '   ```',
      '',
      '   **Global:**',
      '   ```bash',
      `   npx skills add ${repo} --skill ${name} -g -y`,
      '   ```',
      '',
      '   **Project:**',
      '   ```bash',
      `   npx skills add ${repo} --skill ${name} -y`,
      '   ```',
    ];
  } else {
    body = [
      '## Install the full skill',
      '',
      'Via skills CLI:',
      '```bash',
      upstream ? `npx skills add ${repo} [-g]` : 'npx skills add owner/repo [-g]',
      '```',
    ];
  }

  const footer = [
    '',
    '## What it does',
    '',
    `${description}`,
    '',
    '## When NOT to use',
    '',
    '- <!-- describe alternatives or exclusions -->',
    '',
  ];

  return [...frontmatter, ...header, ...body, ...footer].join('\n');
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\ndesign-agent-skills — add skill wizard\n');

  // Collect fields — use flags first, then prompt for missing ones

  const name = flagName ?? await ask('Skill name (directory name)', null, val => {
    if (!val) return 'Name is required';
    if (!/^[a-z0-9-]+$/.test(val)) return 'Use lowercase letters, numbers, and hyphens only';
    if (fs.existsSync(path.join(SKILLS_DIR, val))) return `skills/${val} already exists`;
  });

  if (!flagName && fs.existsSync(path.join(SKILLS_DIR, name))) {
    console.error(`Error: skills/${name} already exists. Remove it first or use a different name.`);
    process.exit(1);
  }

  const type = flagType && VALID_TYPES.includes(flagType)
    ? flagType
    : await choose('Type', VALID_TIERS.length > 0 ? VALID_TYPES.filter(t => t !== 'router') : VALID_TYPES, 'skill');

  const tier = flagTier && VALID_TIERS.includes(flagTier)
    ? flagTier
    : await choose('Tier', VALID_TIERS, 'community');

  const rank = type !== 'router'
    ? (flagRank && VALID_RANKS.includes(flagRank)
        ? flagRank
        : await choose('Rank (1=picks, 2=essentials, 3=extended)', VALID_RANKS, '3'))
    : null;

  const category = type !== 'router'
    ? (flagCategory && VALID_CATEGORIES.includes(flagCategory)
        ? flagCategory
        : await choose('Category', VALID_CATEGORIES, null))
    : null;

  const upstream = type === 'skill' || type === 'package'
    ? (flagUpstream ?? await ask(
        'Upstream GitHub URL (https://github.com/owner/repo)',
        null,
        val => {
          if (type === 'skill' && !val) return 'Upstream is required for type:skill';
          if (val && !val.startsWith('https://github.com/')) return 'Must be a https://github.com/ URL';
        }
      ))
    : null;

  const upstreamPath = upstream && type === 'skill'
    ? (flagUpstreamPath ?? (flagYes ? 'SKILL.md' : await ask('Upstream path', 'SKILL.md')))
    : null;

  const description = flagDescription
    ?? await ask(`One-line description of ${name}`, `${name} skill`);

  const defaultTrigger = name.replace(/-/g, ' ');
  const trigger = flagTrigger
    ?? await ask('Trigger phrase (natural language)', defaultTrigger);

  closeRl();

  // ── summary ────────────────────────────────────────────────────────────────

  console.log('\n── Summary ──────────────────────────────────────────────');
  console.log(`  name:          ${name}`);
  console.log(`  type:          ${type}`);
  console.log(`  tier:          ${tier}`);
  if (rank)         console.log(`  rank:          ${rank}`);
  if (category)     console.log(`  category:      ${category}`);
  if (upstream)     console.log(`  upstream:      ${upstream}`);
  if (upstreamPath) console.log(`  upstream_path: ${upstreamPath}`);
  console.log(`  description:   ${description}`);
  console.log(`  trigger:       "${trigger}"`);
  console.log('─────────────────────────────────────────────────────────\n');

  const stub = stubYaml({ type, tier, rank, category, upstream, upstreamPath });
  const md   = skillMd({ name, type, description, trigger, category, upstream, upstreamPath });

  const stubPath = path.join(SKILLS_DIR, name, 'stub.yaml');
  const mdPath   = path.join(SKILLS_DIR, name, 'SKILL.md');

  if (flagDryRun) {
    console.log(`── skills/${name}/stub.yaml ──`);
    console.log(stub);
    console.log(`── skills/${name}/SKILL.md ──`);
    console.log(md);
    console.log('\n(dry run — no files written)\n');
    return;
  }

  fs.mkdirSync(path.join(SKILLS_DIR, name), { recursive: true });
  fs.writeFileSync(stubPath, stub, 'utf8');
  fs.writeFileSync(mdPath, md, 'utf8');

  console.log(`Created skills/${name}/stub.yaml`);
  console.log(`Created skills/${name}/SKILL.md`);

  console.log(`
Next steps:
  1. Edit skills/${name}/SKILL.md — fill in description, triggers, what it does
  2. Update skills/design-catalogue/SKILL.md — add to catalogue index + routing guide
  3. Update the relevant domain catalogue SKILL.md
  4. Update README.md — add row to skills table
  5. Run: npm test
  6. Commit all changes together
`);
}

main().catch(err => {
  closeRl();
  console.error(err.message);
  process.exit(1);
});
