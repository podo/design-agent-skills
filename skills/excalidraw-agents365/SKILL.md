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

Run this before Excalidraw diagram generation in a coding context:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/excalidraw-agents365/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `excalidraw-agents365` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/excalidraw-agents365 && \
  curl -fsSL \
    https://raw.githubusercontent.com/Agents365-ai/excalidraw-skill/main/SKILL.md \
    -o ~/.design-agent-skills/skills/excalidraw-agents365/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/excalidraw-agents365/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `excalidraw-agents365`
- Trigger phrases: "architecture diagram excalidraw", "system diagram"

## What it does

Generates Excalidraw diagrams tuned for coding agent workflows — system architecture, flow charts, and technical documentation. Optimized for clean, structured output rather than freeform sketching.
