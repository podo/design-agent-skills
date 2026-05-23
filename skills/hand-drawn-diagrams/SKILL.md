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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/hand-drawn-diagrams/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/hand-drawn-diagrams/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/hand-drawn-diagrams ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add muthuishere/hand-drawn-diagrams --skill hand-drawn-diagrams -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add muthuishere/hand-drawn-diagrams --skill hand-drawn-diagrams -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `hand-drawn-diagrams`
- Trigger phrases: "hand drawn diagram", "sketch diagram", "rough diagram"

## What it does

Generates hand-drawn style Excalidraw diagrams from a text prompt with animated SVG output, a hosted live-edit link, and PNG export. Best for quick whiteboard-style sketches and early ideation where the rough aesthetic communicates "this is exploratory."
