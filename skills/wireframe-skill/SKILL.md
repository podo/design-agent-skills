---
name: wireframe-skill
description: |
  Generates wireframes from natural language descriptions, outputting machine-readable
  JSON (.wireframe.json) and interactive HTML with drag-and-drop reordering and undo/redo.
  Requires only Python 3 and a browser — no design tool accounts needed.
triggers:
  - "wireframe-skill"
  - "yhassy wireframe"
  - "JSON wireframe"
  - "interactive wireframe HTML"
das:
  type: skill
  category: diagrams
  upstream: "https://github.com/yhassy/wireframe-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wireframe-skill

> Catalogue stub — full skill: [yhassy/wireframe-skill](https://github.com/yhassy/wireframe-skill)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wireframe`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/wireframe/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/wireframe/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `wireframe`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/wireframe-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add yhassy/wireframe-skill --skill wireframe -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add yhassy/wireframe-skill --skill wireframe -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

Skill name: `wireframe`, triggers: "wireframe-skill", "yhassy wireframe", "JSON wireframe", "interactive wireframe HTML"

## What it does

Converts natural language UI descriptions into structured wireframes in two output formats: machine-readable `.wireframe.json` for programmatic use and single-file interactive HTML with drag-and-drop element reordering and undo/redo history. Requires only Python 3 and a modern browser. Ideal for rapid lo-fi ideation before any visual design work begins.

## When NOT to use

- High-fidelity mockups with color and typography — use wireframer instead
- Excalidraw-format output — use excalidraw-diagram instead
- When 5 parallel UX variants are needed — use claude-wireframe-skill instead
