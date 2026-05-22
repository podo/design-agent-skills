---
name: excalidraw-diagram
description: |
  Generate beautiful Excalidraw diagrams from natural language. Diagrams that
  "argue visually" — built-in Playwright visual validation loop, brand-customizable
  palette, and 3.2k+ GitHub stars. By coleam00.
triggers:
  - "excalidraw diagram"
  - "excalidraw"
  - "hand-drawn diagram"
  - "diagram from description"
  - "visual diagram"
das:
  category: diagrams
  upstream: "https://github.com/coleam00/excalidraw-diagram-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# excalidraw-diagram

> Catalogue stub — full skill: [coleam00/excalidraw-diagram-skill](https://github.com/coleam00/excalidraw-diagram-skill)

## Decision tree

Run this before any Excalidraw diagram work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/excalidraw-diagram/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `excalidraw-diagram` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/excalidraw-diagram && \
  curl -fsSL \
    https://raw.githubusercontent.com/coleam00/excalidraw-diagram-skill/main/SKILL.md \
    -o ~/.claude/skills/excalidraw-diagram/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/excalidraw-diagram/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `excalidraw-diagram`
- Trigger phrases: "excalidraw diagram", "excalidraw", "diagram from description"

## What it does

Generates Excalidraw diagrams from natural language descriptions using a built-in Playwright visual validation loop that iterates until the output looks right. Diagrams are designed to "argue visually" — they communicate reasoning, not just structure. Supports brand-customizable palettes and exports to editable `.excalidraw` files. One of the most starred diagram skills in the ecosystem (3.2k+ stars).
