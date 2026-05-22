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
   Check: `~/.claude/skills/wiggle-claude-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `wiggle-claude-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/wiggle-claude-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/talknerdytome-labs/wiggle-claude-skill/main/SKILL.md \
    -o ~/.claude/skills/wiggle-claude-skill/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/wiggle-claude-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `wiggle-claude-skill`
- Trigger phrases: "logo animation", "wiggle", "SVG to Lottie", "animated GIF", "wiggle-claude-skill"

## What it does

Specialised logo animation workflow: takes a static SVG logo as input, animates its paths and shapes into Lottie JSON format, then renders the Lottie as both an animated GIF and an MP4 video file. Designed specifically for brand logo animation use cases where you need exportable motion assets rather than in-browser animation.

## When NOT to use

- Complex multi-layer animations beyond logo scope (use `gsap-skills` or `framer-motion-skills`)
- Non-SVG source assets (the workflow requires SVG input)
