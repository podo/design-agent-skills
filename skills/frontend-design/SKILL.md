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
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/frontend-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/frontend-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/frontend-design ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Ilm-Alan/frontend-design --skill frontend-design -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Ilm-Alan/frontend-design --skill frontend-design -y
   ```
   > **Claude Code:** prefix either command with `!` to run directly in the prompt.


## Invoke after install

- Skill name: `frontend-design`
- Trigger phrases: "aesthetic anchor", "brutalist design", "nordic design", "themed UI", "frontend-design"

## What it does

Provides 8 named aesthetic anchors — Brutalist, Nordic, Cyberpunk, Vaporwave, Organic, Luxury, Editorial, and Industrial — each defined by a locked set of CSS custom properties covering palette, typography scale, and texture tokens. The user picks one anchor per brief and the skill generates component code that strictly adheres to those tokens. This prevents aesthetic drift across a project by making the design system the constraint, not a suggestion.

## When NOT to use

- When you need multi-stack support across React, Vue, and Svelte simultaneously (use `ui-ux-pro-max`)
- When the primary deliverable is animation-heavy or video (use `remotion`)
- When no specific aesthetic direction has been chosen and you need exploration first (use `design-consultation`)
