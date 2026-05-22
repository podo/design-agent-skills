---
name: neo-user-journey
description: |
  Elite UX agency skill for user journey mapping with emotional tracking. Includes Playwright testing (happy path, cognitive walkthrough, accessibility, synthetic user), 50+ UX patterns, 7 synthetic personas, Nielsen heuristics scoring, and anti-generic-AI guardrails.
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

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/neo-user-journey/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/neo-user-journey/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/neo-user-journey ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Cornjebus/neo-user-journey --skill neo-user-journey -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Cornjebus/neo-user-journey --skill neo-user-journey -y
   ```

## Invoke after install

- Skill name: `neo-user-journey`
- Trigger phrases: "user journey", "UX journey", "journey mapping", "Playwright UX", "neo-user-journey"

## What it does

Elite UX agency skill for end-to-end user journey mapping with emotional state tracking at every step. Runs four Playwright test modes — happy path, cognitive walkthrough, accessibility audit, and synthetic user simulation — against live or localhost URLs. Ships with 50+ UX patterns, 7 synthetic personas representing diverse user archetypes, Nielsen heuristics scoring rubric, and explicit anti-generic-AI guardrails to prevent surface-level analysis.

## When NOT to use

- Static design work with no user flow — use a design review skill instead
- Pure visual audit with no interaction component — use `plan-design-review`
