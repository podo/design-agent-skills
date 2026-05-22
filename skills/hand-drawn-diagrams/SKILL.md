---
name: hand-drawn-diagrams
description: |
  Generate hand-drawn Excalidraw diagrams from a text prompt. Produces animated SVG,
  a hosted edit link, and PNG export. Lightweight alternative to excalidraw-diagram
  with a focus on quick ideation sketches.
triggers:
  - "hand drawn diagram"
  - "sketch diagram"
  - "excalidraw sketch"
  - "rough diagram"
das:
  category: diagrams
  upstream: "https://github.com/muthuishere/hand-drawn-diagrams"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# hand-drawn-diagrams

> Catalogue stub — full skill: [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams)

## Decision tree

Run this for quick hand-drawn style diagrams:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/hand-drawn-diagrams/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `hand-drawn-diagrams` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/hand-drawn-diagrams && \
  curl -fsSL \
    https://raw.githubusercontent.com/muthuishere/hand-drawn-diagrams/main/SKILL.md \
    -o ~/.claude/skills/hand-drawn-diagrams/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/hand-drawn-diagrams/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `hand-drawn-diagrams`
- Trigger phrases: "hand drawn diagram", "sketch diagram", "rough diagram"

## What it does

Generates hand-drawn style Excalidraw diagrams from a text prompt with animated SVG output, a hosted live-edit link, and PNG export. Best for quick whiteboard-style sketches and early ideation where the rough aesthetic communicates "this is exploratory."
