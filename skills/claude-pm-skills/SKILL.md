---
name: claude-pm-skills
description: |
  Production-grade skills for product thinking, discovery, prioritization, and launch
  decisions. Covers the full PM lifecycle with a different author and focus than other
  PM skill packages in the catalogue.
triggers:
  - "claude PM skills"
  - "pratikshadake PM"
  - "product management skill"
  - "product thinking"
das:
  category: product-pm
  upstream: "https://github.com/pratikshadake/claude-product-management-skills"
  version: latest
  install: false
---

# claude-pm-skills

> Catalogue stub — full package: [pratikshadake/claude-product-management-skills](https://github.com/pratikshadake/claude-product-management-skills)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/claude-pm-skills/SKILL.md` exists.
   - Yes → invoke the relevant skill and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add pratikshadake/claude-product-management-skills
```

## Invoke after install

- Skill name: `claude-pm-skills`
- Trigger phrases: "claude PM skills", "pratikshadake PM", "product management skill", "product thinking"

## What it does

Production-ready product management skills covering the core PM workflow: product thinking and framing, customer discovery, prioritization frameworks, and launch decision-making. Built by pratikshadake with a distinct focus and opinionated approach compared to the pm-skills and phuryn-pm-skills packages. Use when you want actionable PM artifacts with clear decision frameworks rather than a full methodology suite.

## When NOT to use

- UX research and journey mapping — use phuryn-pm-skills instead
- Full Triple Diamond methodology — use pm-skills instead
- Marketing and CRO tasks — use coreyhaines-marketing instead
