---
name: frontend-design
description: |
  8 aesthetic anchors (Brutalist, Nordic, Cyberpunk, Vaporwave, Organic, Luxury, Editorial,
  Industrial), each locking palette, typography, and texture to specific CSS tokens. Pick one
  per brief and the skill generates matching code.
triggers:
  - "aesthetic anchor"
  - "brutalist design"
  - "nordic design"
  - "themed UI"
  - "frontend-design"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Ilm-Alan/frontend-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# frontend-design

> Catalogue stub — full skill: [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/frontend-design/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `frontend-design` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/frontend-design && \
  curl -fsSL \
    https://raw.githubusercontent.com/Ilm-Alan/frontend-design/main/SKILL.md \
    -o ~/.claude/skills/frontend-design/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/frontend-design/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `frontend-design`
- Trigger phrases: "aesthetic anchor", "brutalist design", "nordic design", "themed UI", "frontend-design"

## What it does

Provides 8 named aesthetic anchors — Brutalist, Nordic, Cyberpunk, Vaporwave, Organic, Luxury, Editorial, and Industrial — each defined by a locked set of CSS custom properties covering palette, typography scale, and texture tokens. The user picks one anchor per brief and the skill generates component code that strictly adheres to those tokens. This prevents aesthetic drift across a project by making the design system the constraint, not a suggestion.

## When NOT to use

- When you need multi-stack support across React, Vue, and Svelte simultaneously (use `ui-ux-pro-max`)
- When the primary deliverable is animation-heavy or video (use `remotion`)
- When no specific aesthetic direction has been chosen and you need exploration first (use `design-consultation`)
