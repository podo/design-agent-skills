---
name: excalidraw-agents365
description: |
  Excalidraw diagram generation optimized for coding agents. Produces clean,
  structured diagrams for system architecture, flow charts, and technical
  documentation from natural language.
triggers:
  - "excalidraw for agents"
  - "architecture diagram excalidraw"
  - "system diagram"
das:
  category: diagrams
  upstream: "https://github.com/Agents365-ai/365-skills"
  upstream_path: "plugins/excalidraw/skills/excalidraw-skill/SKILL.md"
  version: latest
  install: true
---

# excalidraw-agents365

> Catalogue stub — full skill: [Agents365-ai/365-skills](https://github.com/Agents365-ai/365-skills) (`plugins/excalidraw`)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `excalidraw`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/excalidraw/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/excalidraw/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `excalidraw`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/excalidraw-agents365 ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Agents365-ai/365-skills --skill excalidraw -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Agents365-ai/365-skills --skill excalidraw -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `excalidraw`
- Trigger phrases: "architecture diagram excalidraw", "system diagram"

## What it does

Generates Excalidraw diagrams tuned for coding agent workflows — system architecture, flow charts, and technical documentation. Optimized for clean, structured output rather than freeform sketching. Moved from the standalone `excalidraw-skill` repo into the `365-skills` collection.
