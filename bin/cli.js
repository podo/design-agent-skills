#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');
const readline = require('readline');

const INSTALL_DIR = process.env.DESIGN_AGENT_SKILLS_DIR
  || path.join(os.homedir(), '.design-agent-skills');
const REPO_URL = 'https://github.com/podo/design-agent-skills.git';

const args = process.argv.slice(2);
const cmd = args[0] || '';

function run(command, opts) {
  const result = spawnSync(command, { shell: true, stdio: 'inherit', ...opts });
  if (result.error) { console.error(result.error.message); process.exit(1); }
  return result;
}

function delegate(extraArgs) {
  const installSh = path.join(INSTALL_DIR, 'install.sh');
  const r = spawnSync('bash', [installSh, ...args, ...extraArgs], { stdio: 'inherit' });
  process.exit(r.status || 0);
}

function askScope() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    process.stdout.write(
      '\nInstall scope:\n' +
      '  1) User  — ~/.claude/skills/   (all projects)\n' +
      '  2) Project — ./.claude/skills/ (this project only)\n' +
      '\nChoice [1]: '
    );
    rl.once('line', (answer) => {
      rl.close();
      resolve(answer.trim() === '2' ? 'project' : 'user');
    });
  });
}

// Clone or pull into permanent home
if (!fs.existsSync(INSTALL_DIR)) {
  console.log(`\nCloning design-agent-skills to ${INSTALL_DIR}...\n`);
  const r = run(`git clone --depth=1 "${REPO_URL}" "${INSTALL_DIR}"`);
  if (r.status !== 0) process.exit(r.status);
} else if (cmd === '' || cmd === 'install' || cmd === 'update') {
  const r = run(`git -C "${INSTALL_DIR}" pull --ff-only --quiet`);
  if (r.status !== 0) console.error('Warning: could not pull latest — using cached version.');
}

// Scope TUI: only for install (or bare invocation), only if --scope not already set
const isInstall = cmd === '' || cmd === 'install';
const scopeSet = args.some(a => a.startsWith('--scope'));

if (isInstall && !scopeSet && process.stdin.isTTY) {
  askScope().then((scope) => {
    const extra = scope === 'project' ? ['--scope=project'] : [];
    delegate(extra);
  });
} else {
  delegate([]);
}
