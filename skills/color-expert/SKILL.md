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

Run this before any color system or palette work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/color-expert/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `color-expert` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/color-expert && \
  curl -fsSL \
    https://raw.githubusercontent.com/meodai/skill.color-expert/main/SKILL.md \
    -o ~/.design-agent-skills/skills/color-expert/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/color-expert/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `color-expert`
- Trigger phrases: "color expert", "OKLCH", "color palette", "color science", "contrast ratio"

## What it does

Brings 286K words of color science into design decisions. Covers perceptually uniform color spaces (OKLCH, OKLAB), palette generation algorithms, WCAG accessibility contrast, color naming conventions, pigment mixing theory, and the history of color in art and design. Ideal for building color systems, choosing palettes with correct contrast, or understanding why certain color combinations feel wrong.
