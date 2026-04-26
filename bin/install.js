#!/usr/bin/env node

const fs   = require('fs');
const path = require('path');
const os   = require('os');
const readline = require('readline');

const CLAUDE_MD_SRC = path.join(__dirname, '..', 'CLAUDE.md');
const skill = fs.readFileSync(CLAUDE_MD_SRC, 'utf8');

const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';
const YELLOW = '\x1b[33m';
const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';

console.log(`\n${BOLD}SaaSRival Skill Installer${RESET}`);
console.log('─'.repeat(40));

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question(
  `\nInstall where?\n  ${BOLD}1${RESET} — This project only  (copies CLAUDE.md here)\n  ${BOLD}2${RESET} — Global             (appends to ~/.claude/CLAUDE.md)\n\nChoice [1/2]: `,
  (answer) => {
    rl.close();

    if (answer.trim() === '2') {
      // Global install — append to ~/.claude/CLAUDE.md
      const globalDir  = path.join(os.homedir(), '.claude');
      const globalFile = path.join(globalDir, 'CLAUDE.md');

      if (!fs.existsSync(globalDir)) fs.mkdirSync(globalDir, { recursive: true });

      const existing = fs.existsSync(globalFile) ? fs.readFileSync(globalFile, 'utf8') : '';
      if (existing.includes('SaaSRival Skill')) {
        console.log(`\n${YELLOW}Already installed globally — skipping.${RESET}`);
      } else {
        fs.writeFileSync(globalFile, existing + (existing.endsWith('\n') ? '' : '\n') + skill);
        console.log(`\n${GREEN}✓ Installed globally at ${globalFile}${RESET}`);
      }
      printNextSteps('global');

    } else {
      // Project install — write CLAUDE.md to cwd
      const dest = path.join(process.cwd(), 'CLAUDE.md');

      if (fs.existsSync(dest)) {
        const existing = fs.readFileSync(dest, 'utf8');
        if (existing.includes('SaaSRival Skill')) {
          console.log(`\n${YELLOW}Already installed in this project — skipping.${RESET}`);
          printNextSteps('project');
          return;
        }
        // Append to existing CLAUDE.md
        fs.writeFileSync(dest, existing + '\n\n' + skill);
        console.log(`\n${GREEN}✓ Appended to existing CLAUDE.md in ${process.cwd()}${RESET}`);
      } else {
        fs.writeFileSync(dest, skill);
        console.log(`\n${GREEN}✓ Created CLAUDE.md in ${process.cwd()}${RESET}`);
      }
      printNextSteps('project');
    }
  }
);

function printNextSteps(mode) {
  console.log(`
${BOLD}Next steps:${RESET}

  1. Download a ${CYAN}.saasrival${RESET} keyfile from ${CYAN}saasrival.com${RESET}
  2. Drop it into your project folder
  3. Run ${BOLD}claude${RESET}${mode === 'global' ? ' in any project' : ' in this folder'}

Claude Code will detect the keyfile and load the brand intelligence automatically.

${YELLOW}Get keyfiles → https://saasrival.com${RESET}
`);
}
