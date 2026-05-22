---
name: wiggle-claude-skill
description: |
  Animates static SVG logos into Lottie JSON format, then renders them as animated
  GIFs and MP4s. Specialised for logo animation workflows.
triggers:
  - "logo animation"
  - "wiggle"
  - "SVG to Lottie"
  - "animated GIF"
  - "wiggle-claude-skill"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/talknerdytome-labs/wiggle-claude-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wiggle-claude-skill

> Catalogue stub — full skill: [talknerdytome-labs/wiggle-claude-skill](https://github.com/talknerdytome-labs/wiggle-claude-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/wiggle-claude-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/wiggle-claude-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/wiggle-claude-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add talknerdytome-labs/wiggle-claude-skill --skill wiggle-claude-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add talknerdytome-labs/wiggle-claude-skill --skill wiggle-claude-skill -y
   ```

## Invoke after install

- Skill name: `wiggle-claude-skill`
- Trigger phrases: "logo animation", "wiggle", "SVG to Lottie", "animated GIF", "wiggle-claude-skill"

## What it does

Specialised logo animation workflow: takes a static SVG logo as input, animates its paths and shapes into Lottie JSON format, then renders the Lottie as both an animated GIF and an MP4 video file. Designed specifically for brand logo animation use cases where you need exportable motion assets rather than in-browser animation.

## When NOT to use

- Complex multi-layer animations beyond logo scope (use `gsap-skills` or `framer-motion-skills`)
- Non-SVG source assets (the workflow requires SVG input)
