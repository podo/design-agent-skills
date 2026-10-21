---
name: hand-drawn-diagrams
description: |
  Generate hand-drawn Excalidraw diagrams from a text prompt. Produces animated SVG,
  a hosted edit link, and PNG export. Lightweight alternative to excalidraw-diagram
  with a focus on quick ideation sketches.
triggers:
  - "hand drawn diagram"
  - "sketch diagram"
  - "excalidraw sketch"
  - "rough diagram"
das:
  category: diagrams
  upstream: "https://github.com/muthuishere/hand-drawn-diagrams"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# hand-drawn-diagrams

> Catalogue stub — full skill: [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/hand-drawn-diagrams/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/hand-drawn-diagrams/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `hand-drawn-diagrams`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/hand-drawn-diagrams ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add muthuishere/hand-drawn-diagrams --skill hand-drawn-diagrams -g -y
   ```

   **Project:**
   ```bash
   npx skills add muthuishere/hand-drawn-diagrams --skill hand-drawn-diagrams -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python with uv (the skill runs scripts/*.py through `uv run python`); Chrome DevTools MCP or Playwright, only for PNG and animated-SVG rendering
- **License:** MIT (GitHub reports it as NOASSERTION)
<!-- das:install:end -->

## Invoke after install

- Skill name: `hand-drawn-diagrams`
- Trigger phrases: "hand drawn diagram", "sketch diagram", "rough diagram"

## What it does

Generates hand-drawn style Excalidraw diagrams (flows, explainers, mind maps, wireframes, page mockups) from a text prompt. It routes to a diagram type, writes and validates a `.excalidraw` file, then produces a hosted edit link, with animated SVG and PNG export as follow-ups. Monochrome sketch output by default. Best for quick whiteboard-style sketches and early ideation where the rough aesthetic communicates "this is exploratory." The edit and animation links open a page on the author's GitHub Pages site with the diagram encoded in the URL, so the diagram data travels in the link.

## When NOT to use

- Polished or structured diagrams with Excalidraw libraries and a render pipeline (use `excalidraw-diagram`)
- Diagrams that must not leave your machine inside a shareable link (use `excalidraw-diagram`, which renders with a local Playwright browser)
