---
name: wireframe-skill
description: |
  Generates wireframes from natural language descriptions, outputting machine-readable
  JSON (.wireframe.json) and a self-contained interactive HTML preview with drag-and-drop
  reordering and undo/redo. Needs Python 3 and a browser, no design tool accounts.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wireframe`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/wireframe/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wireframe/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wireframe`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wireframe-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add yhassy/wireframe-skill --skill wireframe -g -y
   ```

   **Project:**
   ```bash
   npx skills add yhassy/wireframe-skill --skill wireframe -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python 3 (the skill assembles the HTML preview with a python3 one-liner) and a browser to open the preview
- **License:** MIT
- **Name collision:** `wireframe` is also written by `claude-wireframe-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Skill name: `wireframe`, triggers: "wireframe-skill", "yhassy wireframe", "JSON wireframe", "interactive wireframe HTML"

## What it does

Converts natural language UI descriptions into structured wireframes in two output formats: machine-readable `.wireframe.json` for programmatic use and a single-file interactive HTML preview with drag-and-drop element reordering, copy/paste, delete and undo/redo history. Can also read a `designs/{design-id}/output/design-spec.md` file from an external design workflow and extract its layout. Requires Python 3 and a modern browser. Ideal for rapid lo-fi ideation before any visual design work begins.

## When NOT to use

- High-fidelity mockups with color and typography — use wireframer instead
- Excalidraw-format output — use excalidraw-diagram instead
- When 5 parallel UX variants are needed — use claude-wireframe-skill instead; it installs a skill with the same `wireframe` directory name, so choose one of the two
