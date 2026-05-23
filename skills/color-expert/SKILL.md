---
name: color-expert
description: |
  286K words of color science applied to UI/UX design. Covers OKLCH/OKLAB color spaces,
  palette generation, accessibility contrast ratios, color naming, pigment mixing,
  and historical color theory. By meodai, creator of color-names.
triggers:
  - "color expert"
  - "colour expert"
  - "OKLCH"
  - "OKLAB"
  - "color palette"
  - "colour palette"
  - "color science"
  - "color theory"
  - "contrast ratio"
das:
  category: visual-components
  upstream: "https://github.com/meodai/skill.color-expert"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# color-expert

> Catalogue stub — full skill: [meodai/skill.color-expert](https://github.com/meodai/skill.color-expert)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/color-expert/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/color-expert/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/color-expert ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add meodai/skill.color-expert --skill color-expert -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add meodai/skill.color-expert --skill color-expert -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `color-expert`
- Trigger phrases: "color expert", "OKLCH", "color palette", "color science", "contrast ratio"

## What it does

Brings 286K words of color science into design decisions. Covers perceptually uniform color spaces (OKLCH, OKLAB), palette generation algorithms, WCAG accessibility contrast, color naming conventions, pigment mixing theory, and the history of color in art and design. Ideal for building color systems, choosing palettes with correct contrast, or understanding why certain color combinations feel wrong.
