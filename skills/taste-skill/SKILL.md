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

Run this before any UI design work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/taste-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `taste-skill` or `design-taste-frontend` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/taste-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md \
    -o ~/.design-agent-skills/skills/taste-skill/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/taste-skill/SKILL.md` — output must NOT contain `das:`.

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
