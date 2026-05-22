---
name: taste-design-stitch
description: |
  Apply design taste and aesthetic judgment to Google Stitch UI output. Elevates
  AI-generated Stitch interfaces beyond generic defaults with opinionated visual
  choices, spacing, and typographic refinement.
triggers:
  - "taste design"
  - "stitch taste"
  - "design taste stitch"
  - "improve stitch UI"
  - "stitch aesthetics"
das:
  category: interaction-polish
  upstream: "https://github.com/google-labs-code/stitch-skills"
  upstream_path: "plugins/stitch-utilities/skills/taste-design/SKILL.md"
  version: latest
  install: true
---

# taste-design-stitch

> Catalogue stub — full skill: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/taste-design/SKILL.md)

## Decision tree

Run this when working with Google Stitch UI output:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/taste-design-stitch/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `taste-design-stitch` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/taste-design-stitch && \
  curl -fsSL \
    https://raw.githubusercontent.com/google-labs-code/stitch-skills/main/plugins/stitch-utilities/skills/taste-design/SKILL.md \
    -o ~/.claude/skills/taste-design-stitch/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/taste-design-stitch/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `taste-design-stitch`
- Trigger phrases: "taste design", "stitch taste", "improve stitch UI", "stitch aesthetics"

## What it does

Applies aesthetic judgment and design taste to Google Stitch UI output. Pushes generated interfaces past generic AI defaults — opinionated choices on spacing, typography, color, and visual hierarchy that make Stitch output feel crafted rather than computed. Part of Google Labs' official Stitch skills ecosystem.
