---
name: taste-skill
description: |
  High-agency frontend skill that gives AI good taste with tunable design variance,
  motion intensity, and visual density. Prevents generic AI UI slop through metric-based
  rules, strict component architecture, and premium design engineering directives.
triggers:
  - "design taste"
  - "visual taste"
  - "good taste"
  - "anti slop"
  - "visual density"
  - "premium UI"
  - "no generic UI"
  - "stop slop"
das:
  category: design-systems
  upstream: "https://github.com/Leonxlnx/taste-skill"
  upstream_path: "skills/taste-skill/SKILL.md"
  version: latest
  install: true
---

# taste-skill

> Catalogue stub — full skill: [@Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/taste-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/taste-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/taste-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Leonxlnx/taste-skill --skill taste-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Leonxlnx/taste-skill --skill taste-skill -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `taste-skill` or `design-taste-frontend`  
- Trigger phrases: "design taste", "good taste", "anti slop", "visual density", "premium UI"

## What it does

Applies senior UI/UX engineer taste via three tunable dials:

| Dial | Default | Range | Effect |
|------|---------|-------|--------|
| `DESIGN_VARIANCE` | `8` | 1–10 | 1 = perfect symmetry → 10 = artsy asymmetry |
| `MOTION_INTENSITY` | `6` | 1–10 | 1 = static → 10 = cinematic spring physics |
| `VISUAL_DENSITY` | `4` | 1–10 | 1 = art gallery / airy → 10 = cockpit / data-packed |

Override dials in chat: "set motion to 3", "max density". Enforces strict bans against AI design tells: Inter font, centered heroes, 3-column equal card rows, neon glows, pure black (#000), AI-purple gradients, emoji in UI.

## When NOT to use

- Backend code, APIs, data pipelines, CLI tools, or any non-UI task
- When the user explicitly wants generic or template-style UI
