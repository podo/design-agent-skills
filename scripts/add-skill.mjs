#!/usr/bin/env node
/**
 * Interactive wizard for adding a new skill stub to the catalogue.
 * All fields accept CLI flags for non-interactive / scripted use.
 *
 * The stub is written in the current schema: stub.yaml carries `installed_as` + `install_default`
 * and the install section of SKILL.md is generated from it (see scripts/generate-pointers.mjs).
 * VERIFY the install before committing:
 *   SKILLS_BIN=… node scripts/check-installs.mjs --real --only <name>
 *
 * Usage:
 *   node scripts/add-skill.mjs
 *   node scripts/add-skill.mjs --name remotion --upstream https://github.com/remotion-dev/skills --category motion-animation --tier official --rank 1 --type skill --installed-as remotion --yes
 *   node scripts/add-skill.mjs --name remotion ... --dry-run
 *   node scripts/add-skill.mjs --name x ... --skills-dir /tmp/skills      # write elsewhere (tests)
 *
 * Flags: --installed-as a,b  (upstream skill names; default: the skill name)
 *        --install-default "npx skills add owner/repo --skill a b"  (default derived from the above)
 *        platform type only: --manual-reason "…" --install-step "…" (repeatable)
 */
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { SKILLS_DIR as DEFAULT_SKILLS_DIR, parseStubText } from './lib/stub.mjs';
import { applyBlock, renderInstallBlock } from './lib/pointer.mjs';

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
const flagAll = (f) => argv.flatMap((a, i) => (a === f && argv[i + 1] ? [argv[i + 1]] : []));
const bool = (f) => argv.includes(f);

const flagName           = flag('--name');
const flagUpstream       = flag('--upstream');
const flagCategory       = flag('--category');
const flagTier           = flag('--tier');
const flagRank           = flag('--rank');
const flagType           = flag('--type');
const flagUpstreamPath   = flag('--upstream-path');
const flagDescription    = flag('--description');
const flagTrigger        = flag('--trigger');
const flagInstalledAs    = flag('--installed-as');
const flagInstallDefault = flag('--install-default');
const flagManualReason   = flag('--manual-reason');
const flagInstallSteps   = flagAll('--install-step');
const flagSkillsDir      = flag('--skills-dir');
const flagDryRun         = bool('--dry-run');
const flagYes            = bool('--yes') || bool('-y');
const SKILLS_DIR         = flagSkillsDir ? path.resolve(flagSkillsDir) : DEFAULT_SKILLS_DIR;

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

const quoteIfNeeded = s => (/[:#"']|^\s|\s$/.test(s) ? `"${s.replace(/(["\\])/g, '\\$1')}"` : s);

function stubYaml({ type, tier, rank, category, upstream, upstreamPath, installedAs, installDefault, manualReason, installSteps }) {
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
  if (type === 'platform') {
    lines.push('install_mode: manual', `manual_reason: ${quoteIfNeeded(manualReason)}`, 'install_steps:');
    installSteps.forEach(s => lines.push(`  - ${quoteIfNeeded(s)}`));
  } else if (type !== 'router') {
    lines.push(`install_default: ${installDefault}`);
  }
  if (type !== 'router') {
    if (installedAs.length === 1) lines.push(`installed_as: ${quoteIfNeeded(installedAs[0])}`);
    else { lines.push('installed_as:'); installedAs.forEach(n => lines.push(`  - ${quoteIfNeeded(n)}`)); }
  }
  return lines.join('\n') + '\n';
}

function skillMd({ name, type, description, trigger, category, upstream, installedAs, stubText }) {
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

  const footer = [
    '## Invoke after install',
    '',
    `- Skill name: ${installedAs.map(n => `\`${n}\``).join(', ')}`,
    `- Trigger phrases: "${trigger}"`,
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

  const md = [...frontmatter, ...header, ...footer].join('\n');
  const stub = { name, ...parseStubText(stubText) };
  return applyBlock(md, renderInstallBlock(stub, new Map([[name, stub]])));
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
    : await choose('Type', VALID_TYPES.filter(t => t !== 'router'), 'skill');

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
          if (!val) return 'Upstream is required';
          if (!val.startsWith('https://github.com/')) return 'Must be a https://github.com/ URL';
        }
      ))
    : (flagUpstream ?? null);

  const upstreamPath = upstream && type === 'skill'
    ? (flagUpstreamPath ?? (flagYes ? 'SKILL.md' : await ask('Upstream path', 'SKILL.md')))
    : null;

  // What the install lands: the upstream skill NAMES (what `--skill` matches), not our directory name.
  const installedAsRaw = flagInstalledAs
    ?? await ask('Upstream skill name(s) this installs (comma-separated; the frontmatter `name`, see `npx skills add owner/repo --list`)', name);
  const installedAs = installedAsRaw.split(',').map(s => s.trim()).filter(Boolean);

  const installDefault = type === 'platform' ? null : (flagInstallDefault
    ?? `npx skills add ${ownerRepo(upstream)} --skill ${installedAs.map(n => (/\s/.test(n) ? `"${n}"` : n)).join(' ')}`);

  const manualReason = type === 'platform'
    ? (flagManualReason ?? await ask('Why can the skills CLI not install this? (shown to users)', null, v => (v ? undefined : 'Required for platform stubs')))
    : null;
  const installSteps = type === 'platform'
    ? (flagInstallSteps.length ? flagInstallSteps : [await ask('Install step (shell command or instruction)', null, v => (v ? undefined : 'Required for platform stubs'))])
    : [];

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
  if (rank)           console.log(`  rank:          ${rank}`);
  if (category)       console.log(`  category:      ${category}`);
  if (upstream)       console.log(`  upstream:      ${upstream}`);
  if (upstreamPath)   console.log(`  upstream_path: ${upstreamPath}`);
  console.log(`  installed_as:  ${installedAs.join(', ')}`);
  if (installDefault) console.log(`  install:       ${installDefault}`);
  console.log(`  description:   ${description}`);
  console.log(`  trigger:       "${trigger}"`);
  console.log('─────────────────────────────────────────────────────────\n');

  const stub = stubYaml({ type, tier, rank, category, upstream, upstreamPath, installedAs, installDefault, manualReason, installSteps });
  const md   = skillMd({ name, type, description, trigger, category, upstream, installedAs, stubText: stub });

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
  1. Edit skills/${name}/SKILL.md — fill in description, triggers, what it does, when NOT to use
     (the install section is generated from stub.yaml: edit stub.yaml, then \`npm run generate\`)
  2. Verify the install for real:  SKILLS_BIN=… node scripts/check-installs.mjs --real --only ${name}
  3. Update skills/design-catalogue/SKILL.md — add to catalogue index + routing guide
  4. Update the relevant domain catalogue SKILL.md
  5. Update README.md — regenerate the table: node scripts/generate-readme-table.mjs
  6. Run: npm test
  7. Commit all changes together
`);
}

main().catch(err => {
  closeRl();
  console.error(err.message);
  process.exit(1);
});
