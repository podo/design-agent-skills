#!/usr/bin/env node
/**
 * D3 README table generator: outputs the Skills section markdown from stub data.
 *
 *   node scripts/generate-readme-table.mjs          # print to stdout
 *   node scripts/generate-readme-table.mjs --check  # diff against current README
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT       = path.resolve(fileURLToPath(import.meta.url), '../..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const checkMode  = process.argv.includes('--check');

const SECTION_HEADERS = {
  'design-systems':       'Design Engineering',
  'creative-3d':          'Motion & Animation',
  'interaction-polish':   'Interaction & Polish',
  'visual-components':    'Visual Components',
  'accessibility-quality':'Accessibility & Quality',
  'design-review':        'Design Review',
  'figma-code':           'Figma & Code',
  'official-suites':      'Official Suites',
  'diagrams':             'Diagrams',
  'data-visualization':   'Data Visualization',
  'presentations':        'Presentations',
  'product-pm':           'Product & PM',
  'content-design':       'Content Design',
  'email-design':         'Email Design',
  'tui-terminal':         'TUI & Terminal',
  'motion-animation':     'Motion (Extended)',
  'design-engineering':   'Design Engineering (Extended)',
  'design-research':      'Design Research',
};

// Load stubs
const stubs = [];
for (const name of fs.readdirSync(SKILLS_DIR)) {
  const dir  = path.join(SKILLS_DIR, name);
  if (!fs.statSync(dir).isDirectory()) continue;
  const stubPath = path.join(dir, 'stub.yaml');
  const mdPath   = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(stubPath) || !fs.existsSync(mdPath)) continue;

  const raw  = fs.readFileSync(stubPath, 'utf8');
  const get  = k => (raw.match(new RegExp(`^${k}:\\s*(.+)$`, 'm')) || [])[1]?.trim();
  const type = get('type');
  if (type === 'router') continue;

  let category = get('category');
  if (!category) {
    const md = fs.readFileSync(mdPath, 'utf8');
    category = (md.match(/^das:[\s\S]*?^\s+category:\s*(.+)$/m) || [])[1]?.trim();
  }

  const upstream = get('upstream') || '';
  const repoMatch = upstream.match(/github\.com\/(.+?)(?:\.git)?\/?$/);
  const repoShort = repoMatch ? repoMatch[1] : upstream;
  const rank = Number(get('rank'));
  const star = rank === 1 ? ' ★' : '';

  stubs.push({ name, type, tier: get('tier'), rank, category: category || '(none)', upstream, repoShort, star });
}

// Group by category
const byCategory = {};
for (const s of stubs) {
  (byCategory[s.category] ??= []).push(s);
}

// Build output
const lines = [];
lines.push('### Catalogue Routers', '');
lines.push('Domain routers — activate when the user asks for a skill by domain. Route to the right implementation skill.', '');
lines.push('| Skill | Routes to |');
lines.push('|-------|-----------|');
const routerDefs = [
  ['design-catalogue',             'Top-level router across all domains'],
  ['motion-catalogue',             'Motion, 3D, shaders, generative art'],
  ['figma-catalogue',              'Figma, design-to-code, tokens, platform suites'],
  ['accessibility-catalogue',      'Accessibility, WCAG, web performance'],
  ['design-engineering-catalogue', 'UI craft, visual design, brand, mobile'],
  ['content-catalogue',            'Slides, diagrams, data viz, PM, design review, copywriting, UX writing'],
];
for (const [r, desc] of routerDefs) {
  lines.push(`| [${r}](skills/${r}/SKILL.md) | ${desc} |`);
}

for (const [cat, header] of Object.entries(SECTION_HEADERS)) {
  const skills = (byCategory[cat] || []).sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));
  if (skills.length === 0) continue;
  lines.push('', `### ${header}`, '');
  lines.push('| Skill | Type | Category | Upstream |');
  lines.push('|-------|------|----------|----------|');
  for (const s of skills) {
    const link     = `[${s.name}](skills/${s.name}/SKILL.md)${s.star}`;
    const upLink   = s.repoShort ? `[${s.repoShort}](${s.upstream})` : s.upstream;
    lines.push(`| ${link} | ${s.type} | ${s.category} | ${upLink} |`);
  }
}

const output = lines.join('\n') + '\n';

if (checkMode) {
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const start  = readme.indexOf('## Skills\n');
  const end    = readme.indexOf('\n## ', start + 1);
  const current = readme.slice(start + '## Skills\n'.length, end === -1 ? undefined : end);
  if (current.trim() === output.trim()) {
    console.log('OK — README Skills section matches generated output');
  } else {
    console.log('DIFF — README Skills section is out of date. Run without --check to see fresh output.');
    process.exit(1);
  }
} else {
  process.stdout.write('## Skills\n\n' + output);
}
