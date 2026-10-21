---
name: design-review-garrytan
description: |
  Designer Who Codes: visual audit followed by atomic commits fixing each issue.
  Garry Tan's design review skill — treats UI like code, identifies and fixes
  design debt systematically.
triggers:
  - "design review"
  - "visual audit"
  - "UI audit"
  - "design debt"
  - "fix design issues"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-review/SKILL.md"
  version: latest
  install: false
---

# design-review-garrytan

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-review`)

## Decision tree

1. **Is gstack already installed?**
   Check: `~/.claude/skills/gstack/design-review/SKILL.md` exists.
   - Yes → invoke `design-review` and proceed
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

- Skill name: `design-review`
- Trigger phrases: "design review", "visual audit", "UI audit", "fix design issues"

## What it does

"Designer Who Codes" approach: performs a structured visual audit of the UI, then fixes each issue with an atomic commit. Treats design debt like technical debt — identifies it, prioritizes it, and ships fixes. From Garry Tan's gstack, his toolkit for building well-designed products.
