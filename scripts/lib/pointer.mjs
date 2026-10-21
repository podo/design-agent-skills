/**
 * Renders the install section of a pointer SKILL.md from its stub.yaml.
 *
 * The install section is the part that drifted by hand across 150+ pointers (wrong "already
 * installed?" paths, stale skill names, per-skill shorthand that never worked), so it is now
 * generated: edit stub.yaml, run `npm run generate`, never hand-edit between the markers.
 */
import { HEAVY_MB, installMode, parseGitClone, parseNpx, sanitize, tokenize } from './stub.mjs';

export const START = '<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->';
export const END = '<!-- das:install:end -->';

/** Directories this stub writes (what `installed_as` becomes after the CLI sanitises it). */
export function installedDirs(stub) {
  return (stub.installed_as ?? []).map(sanitize);
}

/** Directories a stub owns: what it installs plus its own pointer directory (another stub writing there replaces the pointer). */
export function claimedDirs(stub) {
  return [...new Set([stub.name, ...installedDirs(stub)])];
}

function code(lang, lines) {
  return ['```' + lang, ...lines, '```'];
}

/** Probe for an `install_check` path: it exists (file or directory) and is not this pointer's own marker. */
const probe = p => `f=${p}; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`;

/** Clone directories a manual route only stages: a later `npx skills add` reads from them. */
function stagedClones(steps) {
  const dests = [];
  for (const s of steps) {
    const t = tokenize(s);
    if (t[0] === 'git' && t[1] === 'clone') {
      const { dest } = parseGitClone(t.slice(2));
      if (dest) dests.push(dest);
    }
  }
  return dests.filter(d => steps.some(s => parseNpx(s) && s.includes(d)));
}

function checkCommands(stub) {
  const dirs = installedDirs(stub);
  const rep = dirs[0];
  const t = root => `f=${root}/${rep}/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`;
  return { global: t('~/.agents/skills'), project: t('.agents/skills'), rep };
}

function headsUp(stub, all) {
  const lines = [];
  if (stub.requires?.length) lines.push(`- **Requires:** ${stub.requires.join('; ')}`);
  if (stub.license) lines.push(`- **License:** ${stub.license}`);
  const mb = Number(stub.size_mb);
  if (mb >= HEAVY_MB) {
    lines.push(`- **Large download (~${mb} MB):** the skills CLI gives up cloning after 300 s; if it times out, retry with \`SKILLS_CLONE_TIMEOUT_MS=900000\`.`);
  } else if (mb >= 20) {
    lines.push(`- **Download size:** ~${mb} MB.`);
  }
  for (const other of stub.conflicts_with ?? []) {
    const o = all?.get(other);
    const shared = o ? claimedDirs(stub).filter(d => claimedDirs(o).includes(d)) : [];
    lines.push(`- **Name collision:** \`${shared.join('`, `') || '…'}\` is also written by \`${other}\` (its install or its catalogue pointer); installing both overwrites the earlier one.`);
  }
  return lines.length ? ['', '**Heads-up**', '', ...lines] : [];
}

function pluginRoute(stub) {
  const cmds = stub.install_claude ?? [];
  return cmds.length ? ['', '**Claude Code plugin route:**', '', ...code('', cmds)] : [];
}

/** The generated block, markers included. `all` is a Map(name -> stub) used for collision text. */
export function renderInstallBlock(stub, all) {
  const mode = installMode(stub);
  const out = [START];

  if (mode === 'builtin') {
    out.push('## Install', '', stub.manual_reason || 'This skill has no standalone install.');
    out.push(...headsUp(stub, all), END);
    return out.join('\n');
  }

  const ck = checkCommands(stub);
  const dirs = installedDirs(stub);
  out.push('## Decision tree', '', '1. **Is the full skill already installed?**');
  if (mode === 'manual' && stub.install_check) {
    const c = stub.install_check;
    // a project-relative check (".agents/skills/…") also exists under ~ for a global install
    if (/^[/~]/.test(c)) out.push(`   - \`${probe(c)}\``);
    else out.push(`   - Global: \`${probe(`~/${c}`)}\``, `   - Project: \`${probe(c)}\``);
    out.push('   - `installed` → invoke it and proceed', '   - `pointer` → go to step 2');
  } else {
    if (dirs.length > 1) {
      out.push(`   This package installs ${dirs.length} skills (\`${dirs.join('`, `')}\`); checking the first.`);
    } else if (dirs[0] !== stub.name) {
      out.push(`   Upstream names this skill \`${dirs[0]}\`, so it installs next to this pointer (the pointer is not replaced).`);
    }
    out.push(`   - Global: \`${ck.global}\``, `   - Project: \`${ck.project}\``);
    out.push(`   - \`installed\` → the skill is installed as \`${dirs[0]}\`, invoke it and proceed`, '   - `pointer` → go to step 2');
  }

  if (mode === 'manual') {
    const steps = stub.install_steps ?? [];
    const indent = lines => lines.map(l => `   ${l}`);
    out.push('', '2. **Install** (the skills CLI cannot install this one):', '');
    if (stub.manual_reason) out.push(`   ${stub.manual_reason}`, '');
    for (const d of stagedClones(steps)) {
      out.push(`   If an earlier attempt left \`${d}\` behind, delete it first (\`rm -rf ${d}\`): \`git clone\` refuses a non-empty directory.`, '');
    }
    if (steps.some(s => parseNpx(s))) {
      // same scope handling as the npx route: the step carries no -g/-y, the pointer adds them
      const run = flags => indent(code('bash', steps.map(s => (parseNpx(s) ? `${s}${flags}` : s))));
      out.push(...indent(code('bash', [`[ -e ~/.agents/skills/${stub.name} ] && echo "global" || echo "project"`])));
      out.push('', '   **Global:**', ...run(' -g -y'), '', '   **Project:**', ...run(' -y'));
    } else {
      out.push(...indent(code('bash', steps)));
    }
    out.push(...pluginRoute(stub));
    out.push(...headsUp(stub, all), END);
    return out.join('\n');
  }

  const cmds = [stub.install_default, ...(stub.install_extra ?? [])].filter(Boolean);
  out.push('', '2. **Detect scope, then install:**', '');
  out.push(...code('bash', [`[ -e ~/.agents/skills/${stub.name} ] && echo "global" || echo "project"`]).map(l => `   ${l}`));
  out.push('', '   **Global:**', ...code('bash', cmds.map(c => `${c} -g -y`)).map(l => `   ${l}`));
  out.push('', '   **Project:**', ...code('bash', cmds.map(c => `${c} -y`)).map(l => `   ${l}`));
  out.push('   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.');
  out.push(...pluginRoute(stub));
  out.push(...headsUp(stub, all), END);
  return out.join('\n');
}

const INSTALL_HEADING = /^## (Decision tree|Install)\b/;
const ANCHORS = /^## (Invoke after install|What it does|When NOT to use)\b/;

/** Replace the install section (between markers, or the old hand-written one) with `block`. */
export function applyBlock(md, block) {
  const s = md.indexOf(START.slice(0, 24));
  const e = md.indexOf(END);
  if (s !== -1 && e !== -1 && e > s) {
    return md.slice(0, s) + block + md.slice(e + END.length);
  }
  const lines = md.split('\n');
  const first = lines.findIndex(l => INSTALL_HEADING.test(l));
  if (first !== -1) {
    let last = lines.length;
    for (let i = first + 1; i < lines.length; i++) {
      if (/^## /.test(lines[i]) && !INSTALL_HEADING.test(lines[i])) { last = i; break; }
    }
    return [...lines.slice(0, first), block, '', ...lines.slice(last)].join('\n');
  }
  const anchor = lines.findIndex(l => ANCHORS.test(l));
  if (anchor !== -1) return [...lines.slice(0, anchor), block, '', ...lines.slice(anchor)].join('\n');
  return md.replace(/\n*$/, '\n\n') + block + '\n';
}
