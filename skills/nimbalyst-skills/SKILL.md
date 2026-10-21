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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Install

These skills are built into the Nimbalyst desktop app (github.com/nimbalyst/nimbalyst) and drive its Excalidraw, mockup and data-model editors through the app's own MCP tools, so there is nothing to install with the skills CLI. Download the app and use the slash commands inside it.

**Heads-up**

- **License:** MIT (Nimbalyst app)
<!-- das:install:end -->

## Invoke inside Nimbalyst

Are you working inside the Nimbalyst app? Then run the commands directly. If not, download the free, MIT-licensed desktop app (macOS, Windows, Linux) from [github.com/nimbalyst/nimbalyst](https://github.com/nimbalyst/nimbalyst) first.

- `/excalidraw` — architecture diagrams, flowcharts, system maps (programmatic shapes, arrows, frames, Mermaid import via MCP tools)
- `/mockup` — UI mockups and wireframes from text descriptions
- `/datamodel` — database schemas designed visually as ERDs

## What it does

Nimbalyst's visual output skills: Excalidraw with programmatic element manipulation through MCP tools, UI wireframing from a text description (`.mockup.html` files), and structured data model design. The artifacts open in Nimbalyst's integrated editors rather than as plain files.

Nimbalyst also publishes a separate [nimbalyst/skills](https://github.com/nimbalyst/skills) repo of portable skills for product, developer, content, and research work. It contains no diagram, mockup, or data-model skill, so it is not a way to get the skills above outside the app.

## When NOT to use

- You are not using the Nimbalyst app → use `excalidraw-diagram` or `wireframer` instead
