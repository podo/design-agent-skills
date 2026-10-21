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
  install: false
---

# design-consultation

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-consultation`)

## Decision tree

1. **Is gstack already installed?**
   Check: `~/.claude/skills/gstack/design-consultation/SKILL.md` exists.
   - Yes → invoke `design-consultation` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!`

## Install the full skill

This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill: `npx skills add` would copy the instructions without the tooling they depend on. Requires Claude Code, Git, and [Bun](https://bun.sh/).

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```

## Invoke after install

- Skill name: `design-consultation`
- Trigger phrases: "design consultation", "design system from scratch", "build design system"

## What it does

Garry Tan's (Y Combinator president) approach to building a complete design system from scratch. Establishes visual language, spacing scale, typography system, color tokens, and component library through a structured consultation process. Opinionated, systematic, and practical for early-stage products.
