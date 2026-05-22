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
   Check: `~/.claude/skills/design-auditor/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `design-auditor` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/design-auditor && \
  curl -fsSL \
    https://raw.githubusercontent.com/Ashutos1997/claude-design-auditor-skill/main/SKILL.md \
    -o ~/.claude/skills/design-auditor/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/design-auditor/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `design-auditor`
- Trigger phrases: "design audit", "design score", "19 categories", "design-auditor", "design quality check"

## What it does

Comprehensive design audit skill that evaluates designs across 19 professional categories: typography, color/contrast, spacing, visual hierarchy, consistency, WCAG accessibility, forms, motion/animation, dark mode, responsive design, loading states, empty states, error states, microcopy, i18n/RTL support, elevation/shadows, iconography, navigation, design tokens, ethical design and dark patterns, and Nielsen heuristics. Produces a 0-100 score with issues ranked by severity so the most impactful problems surface first.

## When NOT to use

- Accessibility-only audits — use `fixing-accessibility` for a focused WCAG pass
- WCAG-specific compliance documentation — use `wcag-audit-patterns`
