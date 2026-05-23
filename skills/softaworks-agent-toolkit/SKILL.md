---
name: softaworks-agent-toolkit
description: |
  40+ agent skills in one package: mermaid-diagrams, excalidraw, draw-io,
  c4-architecture, design-system-starter, marp-slide, database-schema-designer,
  and more. The most comprehensive multi-skill toolkit available.
triggers:
  - "agent toolkit"
  - "softaworks"
  - "mermaid diagrams"
  - "c4 architecture"
  - "draw.io"
  - "marp slides"
  - "database schema"
das:
  category: diagrams
  upstream: "https://github.com/softaworks/agent-toolkit"
  version: latest
  install: false
---

# softaworks-agent-toolkit

> Catalogue stub — full package: [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit)

## Decision tree

Run this before any diagramming, documentation, or system design work:

1. **Is the toolkit already installed?**
   Check: `~/.design-agent-skills/skills/mermaid-diagrams/SKILL.md` exists (representative skill).
   - Yes → invoke the relevant skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code prefix with `!` to run directly in the prompt

## Install command

```bash
npx skills add softaworks/agent-toolkit
```

## Invoke after install

Skills installed (invoke by name):
- `mermaid-diagrams` — class, sequence, flowchart, ERD, C4, git, Gantt, pie/bar charts
- `excalidraw` — Excalidraw diagrams
- `draw-io` — Draw.io diagram generation
- `c4-architecture` — C4 model: context, container, component, code diagrams
- `marp-slide` — Marp slide presentations
- `database-schema-designer` — database schema design
- And 34+ more — see [skills directory](https://github.com/softaworks/agent-toolkit/tree/main/skills)

## What it does

The most comprehensive multi-skill toolkit available: 40+ agent skills covering all diagramming formats (Mermaid, Excalidraw, Draw.io, C4), documentation systems, presentation tools (Marp), and design utilities. Install once, unlock a complete diagramming and documentation suite across all supported agents.
