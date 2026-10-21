---
name: excalidraw-diagram
description: |
  Generate Excalidraw diagrams from natural language. Diagrams that "argue visually", with a
  built-in Playwright render-and-validate loop and a brand-customizable color palette. By coleam00.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/excalidraw-diagram/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/excalidraw-diagram/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `excalidraw-diagram`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/excalidraw-diagram ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add coleam00/excalidraw-diagram-skill --skill excalidraw-diagram -g -y
   ```

   **Project:**
   ```bash
   npx skills add coleam00/excalidraw-diagram-skill --skill excalidraw-diagram -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** uv (Python) and Playwright Chromium for the mandatory render-and-validate loop (`cd .claude/skills/excalidraw-diagram/references && uv sync && uv run playwright install chromium`); The skill hard-codes the project path `.claude/skills/excalidraw-diagram/references`, so install it at project scope (not -g) for the render step to work
- **License:** no LICENSE file in the repository
<!-- das:install:end -->

## Invoke after install

- Skill name: `excalidraw-diagram`
- Trigger phrases: "excalidraw diagram", "excalidraw", "diagram from description"

## What it does

Generates `.excalidraw` JSON files from natural language descriptions. Diagrams are designed to "argue visually": shapes mirror the concept they represent (fan-outs for one-to-many, timelines for sequences) and include evidence artifacts such as real code snippets or payloads. A render-view-fix loop (Playwright renders the file to PNG, the agent looks at it and fixes layout problems) validates each diagram before delivery. All colors and brand styles live in `references/color-palette.md`, so editing that one file re-skins every diagram. Output is an editable `.excalidraw` file.

## When NOT to use

- Quick ideation sketches where no uv and Playwright toolchain is wanted — use `hand-drawn-diagrams` (lighter weight) or `excalidraw-agents365`
- Wireframes of screens rather than concept diagrams — use `wireframe-skill`
