---
name: wireframer
description: |
  Generate low-fidelity wireframes for UI layouts, user flows, and screen
  architecture. Focuses on structure and content hierarchy before visual design
  decisions are made.
triggers:
  - "wireframe"
  - "wireframer"
  - "low fidelity"
  - "lo-fi mockup"
  - "layout skeleton"
  - "UI structure"
das:
  category: diagrams
  upstream: "https://github.com/agilek/wireframer-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wireframer

> Catalogue stub — full skill: [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill)

## Decision tree

Run this before wireframing any screen or user flow:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/wireframer/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `wireframer` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/wireframer && \
  curl -fsSL \
    https://raw.githubusercontent.com/agilek/wireframer-skill/main/SKILL.md \
    -o ~/.claude/skills/wireframer/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/wireframer/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `wireframer`
- Trigger phrases: "wireframe", "low fidelity", "lo-fi mockup", "UI structure"

## What it does

Generates low-fidelity wireframes that establish layout, content hierarchy, and navigation structure before any visual design decisions. Forces content-first thinking and prevents premature pixel-pushing. Use before bringing in design skills like impeccable or ui-craft.
