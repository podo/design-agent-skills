#!/usr/bin/env node
/**
 * D3 README table generator: outputs the Skills section markdown from stub data.
 *
 *   node scripts/generate-readme-table.mjs          # print to stdout
 *   node scripts/generate-readme-table.mjs --check  # diff against current README
 *   node scripts/generate-readme-table.mjs --write  # replace the "## Skills" section of README.md in place
 *
 * The skill counts elsewhere in README.md are not generated: update them by hand (a test checks them).
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, allStubs } from './lib/stub.mjs';

const checkMode  = process.argv.includes('--check');
const writeMode  = process.argv.includes('--write');

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

// Load stubs (the shared reader, so this table cannot disagree with lint, install.sh tests or the pointers)
const stubs = allStubs()
  .filter(s => s.type !== 'router' && fs.existsSync(s.mdPath))
  .map(s => {
    const upstream = s.upstream || '';
    const repoMatch = upstream.match(/github\.com\/(.+?)(?:\.git)?\/?$/);
    const rank = Number(s.rank);
    return {
      name: s.name, type: s.type, tier: s.tier, rank, category: s.category || '(none)',
      upstream, repoShort: repoMatch ? repoMatch[1] : upstream, star: rank === 1 ? ' ★' : '',
    };
  });

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

const readmePath = path.join(ROOT, 'README.md');
const readme     = fs.readFileSync(readmePath, 'utf8');
const start      = readme.indexOf('## Skills\n');
const end        = readme.indexOf('\n## ', start + 1);

if (writeMode) {
  if (start === -1) { console.error('README.md has no "## Skills" section'); process.exit(1); }
  const next = readme.slice(0, start) + '## Skills\n\n' + output + (end === -1 ? '' : readme.slice(end));
  if (next === readme) console.log('README Skills section already up to date');
  else { fs.writeFileSync(readmePath, next); console.log('README Skills section rewritten'); }
} else if (checkMode) {
  const current = readme.slice(start + '## Skills\n'.length, end === -1 ? undefined : end);
  if (current.trim() === output.trim()) {
    console.log('OK — README Skills section matches generated output');
  } else {
    console.log('DIFF — README Skills section is out of date. Run with --write to update it.');
    process.exit(1);
  }
} else {
  process.stdout.write('## Skills\n\n' + output);
}
