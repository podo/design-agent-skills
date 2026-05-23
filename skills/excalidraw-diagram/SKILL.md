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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/excalidraw-diagram/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/excalidraw-diagram/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/excalidraw-diagram ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add coleam00/excalidraw-diagram-skill --skill excalidraw-diagram -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add coleam00/excalidraw-diagram-skill --skill excalidraw-diagram -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `excalidraw-diagram`
- Trigger phrases: "excalidraw diagram", "excalidraw", "diagram from description"

## What it does

Generates Excalidraw diagrams from natural language descriptions using a built-in Playwright visual validation loop that iterates until the output looks right. Diagrams are designed to "argue visually" — they communicate reasoning, not just structure. Supports brand-customizable palettes and exports to editable `.excalidraw` files. One of the most starred diagram skills in the ecosystem (3.2k+ stars).
