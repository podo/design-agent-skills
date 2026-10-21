---
name: markdown-viewer-skills
description: |
  One routing skill for text-driven visuals in Markdown, from the docu.md pipeline:
  charts and analytics (Vega-Lite, ECharts), UML, BPMN, ArchiMate and cloud, network
  and security architecture (PlantUML), infographics, system-architecture layouts
  and cards in HTML/CSS. Figures are text in the Markdown, rendered live by the viewer.
triggers:
  - "markdown viewer"
  - "vega chart"
  - "PlantUML"
  - "infographic"
  - "UML diagram"
  - "cloud architecture diagram"
  - "network diagram"
das:
  category: data-visualization
  upstream: "https://github.com/markdown-viewer/skills"
  upstream_path: "documd-visuals/SKILL.md"
  version: latest
  install: false
---

# markdown-viewer-skills

> Catalogue stub — full package: [markdown-viewer/skills](https://github.com/markdown-viewer/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `documd-visuals`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/documd-visuals/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/documd-visuals/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `documd-visuals`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/markdown-viewer-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add markdown-viewer/skills --skill documd-visuals -g -y
   ```

   **Project:**
   ```bash
   npx skills add markdown-viewer/skills --skill documd-visuals -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** A docu.md-compatible Markdown viewer renders the figures live; plain Markdown renderers show them as code blocks; Optional export to html, epub, docx or pdf needs Node 18+ and Chrome/Chromium (npx @markdown-viewer/documd, installed separately)
- **License:** CC-BY-4.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `documd-visuals`
- Trigger phrases: "vega chart", "PlantUML", "infographic", "UML diagram", "cloud architecture diagram", "network diagram"

## What it does

Upstream used to ship many separate engine- and domain-named skills (vega, uml, cloud, network, security, archimate, bpmn, mindmap, infographic, architecture, infocard and others). They are now one package, `documd-visuals`, organised by what the reader wants: a router matches the request to a goal domain (service reliability, product metrics, software design, cloud architecture, planning and roadmaps, internal documents and more), goal guides list the scenarios, and engine references cover PlantUML (UML, ArchiMate, BPMN, cloud/network/security architecture with a large icon stencil set), Vega and Vega-Lite, ECharts, Infographic templates, and bare HTML/CSS for architecture diagrams and cards. It ships a library of verified examples to start from.

Figures are written as text in the Markdown and drawn live by a docu.md-compatible viewer, so nothing is pre-rendered. Exporting a document to html, epub, docx or pdf is optional and goes through the separate `npx @markdown-viewer/documd` CLI, which this install does not fetch.

## When NOT to use

- Slide decks or math notation: the package excludes them
- Mermaid, JSON Canvas, draw.io or Graphviz output: the package marks these as not recommended; use `excalidraw-agents365` or `hand-drawn-diagrams` for sketch-style diagrams
- Charts rendered as images through a hosted API or as G2/G6 code → use `antvis-chart-skills`
