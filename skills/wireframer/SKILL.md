---
name: wireframer
description: |
  Generate clickable low-fidelity, hand-drawn wireframes (Balsamiq style) for web UI
  from a text description: a self-contained single-page prototype with sketchy
  wired-elements components, doodle icons and a graph-paper background. Focuses on
  layout, content and flow before visual design.
triggers:
  - "wireframe"
  - "wireframer"
  - "low fidelity"
  - "lo-fi mockup"
  - "layout skeleton"
  - "UI structure"
das:
  category: diagrams
  upstream: "https://github.com/agilek/wireframer-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wireframer

> Catalogue stub — full skill: [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/wireframer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wireframer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wireframer`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wireframer ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add agilek/wireframer-skill --skill wireframer -g -y
   ```

   **Project:**
   ```bash
   npx skills add agilek/wireframer-skill --skill wireframer -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add agilek/wireframer-skill
/plugin install wireframes-designer@wireframer
```

**Heads-up**

- **Requires:** permission to edit your project's agents.md, CLAUDE.md or .cursorrules (on first use the skill appends its style rules there, or creates agents.md if none exists); network access for the Google Fonts, wired-elements and react-doodle-icons that generated prototypes load
- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `wireframer`
- Trigger phrases: "wireframe", "low fidelity", "lo-fi mockup", "UI structure"

## What it does

Generates a clickable, Balsamiq-style prototype from a plain description: a single-page app (vanilla HTML/JS or React) with strict grayscale styling, hand-drawn wired-elements components, doodle icons and sketchy borders, plus realistic copy instead of lorem ipsum. It establishes layout, content hierarchy and navigation before any visual design decisions, which forces content-first thinking and prevents premature pixel-pushing. Use before bringing in design skills like `impeccable` or `ui-craft`.

**Side effect to know about:** on first use in a project the skill writes its style rules into your AI instruction file (it appends to an existing `agents.md`, `CLAUDE.md`, `.cursorrules` or similar, or creates `agents.md`) and tells you it did so. Check the diff if you do not want that.
