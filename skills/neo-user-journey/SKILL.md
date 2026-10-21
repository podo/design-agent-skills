---
name: neo-user-journey
description: |
  UX agency skill for user journey mapping with emotional tracking. Includes Playwright testing (happy path, cognitive walkthrough, accessibility, synthetic user), a library of proven UX patterns, synthetic personas, Nielsen heuristics scoring, and anti-generic-AI guardrails.
triggers:
  - "user journey"
  - "UX journey"
  - "journey mapping"
  - "Playwright UX"
  - "neo-user-journey"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/Cornjebus/neo-user-journey"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# neo-user-journey

> Catalogue stub — full skill: [Cornjebus/neo-user-journey](https://github.com/Cornjebus/neo-user-journey)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `ux-journey-architect`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/ux-journey-architect/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ux-journey-architect/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ux-journey-architect`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/neo-user-journey ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Cornjebus/neo-user-journey --skill ux-journey-architect -g -y
   ```

   **Project:**
   ```bash
   npx skills add Cornjebus/neo-user-journey --skill ux-journey-architect -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Playwright in your project (@playwright/test and @axe-core/playwright) for the automated journey tests
- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `ux-journey-architect`
- Trigger phrases: "user journey", "UX journey", "journey mapping", "Playwright UX", "neo-user-journey"

## What it does

UX agency skill for end-to-end user journey mapping with emotional state tracking at every step. Runs four Playwright test modes — happy path, cognitive walkthrough, accessibility audit, and synthetic user simulation — against live or localhost URLs, so the test half needs Playwright in your project. Ships with a library of proven UX patterns, synthetic personas representing diverse user archetypes, a Nielsen heuristics scoring rubric, and explicit anti-generic-AI guardrails to prevent surface-level analysis.

## When NOT to use

- Static design work with no user flow — use a design review skill instead
- Pure visual audit with no interaction component — use `plan-design-review`
