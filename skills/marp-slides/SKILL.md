---
name: marp-slides
description: |
  Marp presentation skill with a library of curated example decks, SVG charts,
  dashboard components, and dark/light themes. Teaches slide composition and
  visual quality patterns for Markdown-based presentations rendered with the
  Marp framework.
triggers:
  - "Marp"
  - "marp-slides"
  - "Marp presentation"
  - "robonuggets slides"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/robonuggets/marp-slides"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# marp-slides

> Catalogue stub — full skill: [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/marp-slides/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/marp-slides/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `marp-slides`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/marp-slides ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add robonuggets/marp-slides --skill marp-slides -g -y
   ```

   **Project:**
   ```bash
   npx skills add robonuggets/marp-slides --skill marp-slides -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Marp for VS Code extension (or @marp-team/marp-cli, run with npx, to export PDF)
- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `marp-slides`
- Trigger phrases: "Marp", "marp-slides", "Marp presentation", "robonuggets slides"

## What it does

Creates Marp Markdown presentations informed by a set of curated real-world example decks covering different content types and visual styles. Includes SVG-based chart components, dashboard-style layout components, and dark/light theme variants. The examples teach the skill correct slide composition: appropriate information density, visual hierarchy, and component reuse patterns. Rendering and export need the Marp for VS Code extension (with `markdown.marp.enableHtml` and `markdown.marp.allowLocalFiles` on) or `@marp-team/marp-cli`.

## When NOT to use

- Animated or interactive slides — use `revealjs-skill` instead
- Vue-component developer presentations — use `slidev-skill` instead
- Quality-checking an existing Marp deck — use `marp-slide-quality` as a companion after creation
