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
  upstream: "https://github.com/Agents365-ai/excalidraw-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# excalidraw-agents365

> Catalogue stub — full skill: [Agents365-ai/excalidraw-skill](https://github.com/Agents365-ai/excalidraw-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/excalidraw-agents365/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/excalidraw-agents365/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/excalidraw-agents365 ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Agents365-ai/excalidraw-skill --skill excalidraw-agents365 -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Agents365-ai/excalidraw-skill --skill excalidraw-agents365 -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `excalidraw-agents365`
- Trigger phrases: "architecture diagram excalidraw", "system diagram"

## What it does

Generates Excalidraw diagrams tuned for coding agent workflows — system architecture, flow charts, and technical documentation. Optimized for clean, structured output rather than freeform sketching.
