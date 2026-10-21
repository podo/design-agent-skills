---
name: react-doctor
description: |
  Scans React codebases for security, performance, correctness, accessibility and
  architecture issues and reports a 0-100 health score, with severity-ranked findings and
  a regression check to run after changes. Can also run a focused UI design audit and a
  runtime performance trace.
triggers:
  - "react doctor"
  - "React audit"
  - "React performance"
  - "React security"
  - "component quality"
das:
  type: skill
  category: accessibility-quality
  upstream: "https://github.com/millionco/react-doctor"
  upstream_path: "skills/react-doctor/SKILL.md"
  version: latest
  install: true
---

# react-doctor

> Catalogue stub — full skill: [millionco/react-doctor](https://github.com/millionco/react-doctor)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/react-doctor/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/react-doctor/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `react-doctor`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/react-doctor ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add millionco/react-doctor --skill react-doctor -g -y
   ```

   **Project:**
   ```bash
   npx skills add millionco/react-doctor --skill react-doctor -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js with network access, because the skill runs `npx react-doctor@latest` at use time; the /doctor workflow fetches a remote playbook from www.react.doctor with curl on every run
- **License:** Modified MIT, GitHub shows NOASSERTION (prior written permission needed to use it as AI training or evaluation data, or to sell it as a hosted service)
- **Large download (~120 MB):** the skills CLI gives up cloning after 300 s; if it times out, retry with `SKILLS_CLONE_TIMEOUT_MS=900000`.
<!-- das:install:end -->

## Invoke after install

- Skill name: `react-doctor`
- Trigger phrases: "react doctor", "React audit", "React performance", "React security", "component quality"

## What it does

Runs `npx react-doctor@latest` against a React codebase to detect regressions in security, rendering performance, correctness, accessibility and architectural soundness. Returns a 0-100 score and findings ranked by severity, with component locations and remediation guidance. Use it after React changes (`--scope changed`) or for a full cleanup pass. A `/doctor` command runs a full local triage loop from a playbook the skill fetches from react.doctor, a `design` mode runs a focused UI audit, and `scan <url>` records a Chrome DevTools trace of a slow interaction. Because it executes the latest published package and a remote playbook at use time, review what it runs in sensitive repos.

## When NOT to use

- Non-React projects
- A WCAG-focused accessibility pass or compliance write-up (use `fixing-accessibility` or `wcag-audit-patterns`)
- Core Web Vitals and general web performance work beyond React (use `addyosmani-quality`)
