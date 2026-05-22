---
name: design-consultation
description: |
  Build a complete design system from scratch. Garry Tan's design consultation
  skill: systematic approach to establishing visual language, component library,
  spacing scale, and design tokens from first principles.
triggers:
  - "design consultation"
  - "design system from scratch"
  - "build design system"
  - "design language"
  - "visual language"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-consultation/SKILL.md"
  version: latest
  install: true
---

# design-consultation

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/design-consultation/SKILL.md)

## Decision tree

Run this before any design system creation work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/design-consultation/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `design-consultation` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/design-consultation && \
  curl -fsSL \
    https://raw.githubusercontent.com/garrytan/gstack/main/design-consultation/SKILL.md \
    -o ~/.claude/skills/design-consultation/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/design-consultation/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `design-consultation`
- Trigger phrases: "design consultation", "design system from scratch", "build design system"

## What it does

Garry Tan's (Y Combinator president) approach to building a complete design system from scratch. Establishes visual language, spacing scale, typography system, color tokens, and component library through a structured consultation process. Opinionated, systematic, and practical for early-stage products.
