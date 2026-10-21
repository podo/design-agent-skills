---
name: nimbalyst-skills
description: |
  Visual-output skills built into the Nimbalyst workspace: Excalidraw diagrams with
  MCP tool support, UI wireframe mockups, and database ERD design. These are slash
  commands inside the Nimbalyst app, not standalone installable skills.
triggers:
  - "Nimbalyst"
  - "nimbalyst excalidraw"
  - "nimbalyst mockup"
  - "nimbalyst data model"
das:
  category: diagrams
  upstream: "https://nimbalyst.com/skills"
  version: latest
  install: false
---

# nimbalyst-skills

> Catalogue stub — platform: [nimbalyst.com/skills](https://nimbalyst.com/skills)

These skills are built into the Nimbalyst app and produce artifacts inside its visual editors, so they cannot be installed with `npx skills add`. Use them from within Nimbalyst.

## Decision tree

Run this for Nimbalyst workspace workflows:

1. **Are you working inside the Nimbalyst app?**
   - Yes → run the slash command directly: `/mockup`, `/excalidraw`, `/datamodel`
   - No → go to step 2

2. **Install the app (free, MIT-licensed desktop app for macOS, Windows, and Linux):**
   Download it from [github.com/nimbalyst/nimbalyst](https://github.com/nimbalyst/nimbalyst), then use the slash commands above.

   Only want the portable skills? Nimbalyst's separate public repo has product, developer, content, and research skills (no diagram skills):

   ```bash
   npx skills add nimbalyst/skills -y    # add -g for global install
   ```

## Invoke inside Nimbalyst

- `/excalidraw` — architecture diagrams, flowcharts, system maps (programmatic shapes, arrows, frames, Mermaid import via MCP tools)
- `/mockup` — UI mockups and wireframes from text descriptions
- `/datamodel` — database schemas designed visually as ERDs

## What it does

Nimbalyst's visual output skills: Excalidraw with programmatic element manipulation through MCP tools, UI wireframing from a text description, and structured data model design. The artifacts open in Nimbalyst's integrated editors rather than as plain files.

## When NOT to use

- You are not using the Nimbalyst app → use `excalidraw-diagram` or `wireframer` instead
