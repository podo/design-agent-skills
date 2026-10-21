---
name: softaworks-agent-toolkit
description: |
  Design-adjacent skills picked from the softaworks agent toolkit: mermaid-diagrams,
  excalidraw, draw-io, c4-architecture, marp-slide, database-schema-designer and
  design-system-starter. The repo holds many more skills (jira, codex, gemini, commit
  tooling, ...) that this pointer does not install.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 7 skills (`mermaid-diagrams`, `excalidraw`, `draw-io`, `c4-architecture`, `marp-slide`, `database-schema-designer`, `design-system-starter`); checking the first.
   - Global: `f=~/.agents/skills/mermaid-diagrams/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/mermaid-diagrams/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `mermaid-diagrams`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/softaworks-agent-toolkit ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add softaworks/agent-toolkit --skill mermaid-diagrams excalidraw draw-io c4-architecture marp-slide database-schema-designer design-system-starter -g -y
   ```

   **Project:**
   ```bash
   npx skills add softaworks/agent-toolkit --skill mermaid-diagrams excalidraw draw-io c4-architecture marp-slide database-schema-designer design-system-starter -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add softaworks/agent-toolkit
/plugin install mermaid-diagrams@agent-toolkit
/plugin install excalidraw@agent-toolkit
/plugin install draw-io@agent-toolkit
/plugin install c4-architecture@agent-toolkit
/plugin install marp-slide@agent-toolkit
/plugin install database-schema-designer@agent-toolkit
/plugin install design-system-starter@agent-toolkit
```

**Heads-up**

- **License:** MIT
- **Name collision:** `excalidraw` is also written by `excalidraw-agents365` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Skills installed (invoke by name):
- `mermaid-diagrams` — class, sequence, flowchart, ERD, C4, git, Gantt, pie/bar charts
- `excalidraw` — delegates reading and editing of `.excalidraw` files to subagents so the verbose JSON does not exhaust your context
- `draw-io` — draw.io diagram creation, editing and review
- `c4-architecture` — C4 model: context, container, component, deployment diagrams in Mermaid
- `marp-slide` — Marp slide presentations with several built-in themes
- `database-schema-designer` — SQL and NoSQL schema design: normalization, indexing, migrations
- `design-system-starter` — design tokens, component architecture, accessibility guidelines, documentation templates

## What it does

A handful of the softaworks agent-toolkit skills that matter for design and documentation work: diagramming in Mermaid, Excalidraw, draw.io and C4, Marp presentations, schema design, and a design-system starter. The rest of the toolkit (Jira, Codex and Gemini bridges, commit helpers, humanizer, and so on) is deliberately not installed; add any of them by name with `--skill`.

## When NOT to use

- Generating Excalidraw diagrams from scratch (including SVG/PNG export) — use `excalidraw-agents365`; it installs a skill with the same directory name, so choose one of the two
- Hand-drawn style diagrams — use `hand-drawn-diagrams`
- Slide decks as HTML — use `frontend-slides`
