---
name: css-animation-skill
description: |
  Four-phase workflow — scrapes your live app's design language, interviews you about
  what to animate, produces a brief and self-contained HTML/CSS animation file, then
  iterates. Requires Claude-in-Chrome MCP for live scraping.
triggers:
  - "CSS animation"
  - "custom animation"
  - "animation from live app"
  - "css-animation-skill"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/neonwatty/css-animation-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# css-animation-skill

> Catalogue stub — full skill: [neonwatty/css-animation-skill](https://github.com/neonwatty/css-animation-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/css-animation-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `css-animation-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/css-animation-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/neonwatty/css-animation-skill/main/SKILL.md \
    -o ~/.design-agent-skills/skills/css-animation-skill/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/css-animation-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `css-animation-skill`
- Trigger phrases: "CSS animation", "custom animation", "animation from live app", "css-animation-skill"

## What it does

Runs a four-phase animation creation workflow: (1) scrapes your live app using Claude-in-Chrome MCP to extract the existing design language — colours, fonts, spacing, motion style; (2) interviews you about what element to animate, desired feel, and constraints; (3) produces an animation brief and a self-contained HTML/CSS output file with the custom `@keyframes` animation; (4) iterates based on feedback until the result is approved. Produces bespoke keyframe animations matched to your app's visual identity rather than off-the-shelf library classes.

## When NOT to use

- Library-based animations where custom keyframes aren't needed (use `animate-css-skill` or `framer-motion-skills`)
- Video or Lottie output (use `wiggle-claude-skill`)
