#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline';

const PACKAGE = 'podo/design-agent-skills';
const args = process.argv.slice(2);
const cmd = args[0] || '';

function run(command, extraArgs = []) {
  const result = spawnSync('npx', ['skills', command, ...extraArgs], {
    stdio: 'inherit',
    shell: false,
  });
  if (result.error) { console.error(result.error.message); process.exit(1); }
  process.exit(result.status || 0);
}

function askScope() {
  return new Promise((resolve) => {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    process.stdout.write(
      '\nInstall scope:\n' +
      '  1) User    — ~/.agents/skills/  (all projects, all agents)\n' +
      '  2) Project — .agents/skills/    (this project only)\n' +
      '\nChoice [1]: '
    );
    rl.once('line', (answer) => {
      rl.close();
      resolve(answer.trim() === '2' ? 'project' : 'global');
    });
  });
}

const isInstall = cmd === '' || cmd === 'install';
const scopeSet  = args.some(a => a === '-g' || a === '--global' || a === '-p' || a === '--project');

if (isInstall && !scopeSet && process.stdin.isTTY) {
  askScope().then((scope) => {
    run('add', [PACKAGE, ...(scope === 'global' ? ['-g'] : [])]);
  });
} else if (isInstall) {
  run('add', [PACKAGE, ...args.filter(a => a !== 'install')]);
} else {
  run(cmd, args.slice(1));
}
