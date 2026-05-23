---
name: design-auditor
description: |
  Audits designs across 19 professional categories including typography, color/contrast, spacing, visual hierarchy, consistency, WCAG, forms, motion, dark mode, responsive, loading/empty/error states, microcopy, i18n/RTL, elevation, iconography, navigation, design tokens, ethical design/dark patterns, and Nielsen heuristics. Scores 0-100 with severity-ranked issues.
triggers:
  - "design audit"
  - "design score"
  - "19 categories"
  - "design-auditor"
  - "design quality check"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/Ashutos1997/claude-design-auditor-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# design-auditor

> Catalogue stub — full skill: [Ashutos1997/claude-design-auditor-skill](https://github.com/Ashutos1997/claude-design-auditor-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/design-auditor/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-auditor/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/design-auditor ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Ashutos1997/claude-design-auditor-skill --skill design-auditor -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Ashutos1997/claude-design-auditor-skill --skill design-auditor -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `design-auditor`
- Trigger phrases: "design audit", "design score", "19 categories", "design-auditor", "design quality check"

## What it does

Comprehensive design audit skill that evaluates designs across 19 professional categories: typography, color/contrast, spacing, visual hierarchy, consistency, WCAG accessibility, forms, motion/animation, dark mode, responsive design, loading states, empty states, error states, microcopy, i18n/RTL support, elevation/shadows, iconography, navigation, design tokens, ethical design and dark patterns, and Nielsen heuristics. Produces a 0-100 score with issues ranked by severity so the most impactful problems surface first.

## When NOT to use

- Accessibility-only audits — use `fixing-accessibility` for a focused WCAG pass
- WCAG-specific compliance documentation — use `wcag-audit-patterns`
