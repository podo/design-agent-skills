---
name: design-brief
description: |
  Turns a structured visual design brief (I-Lang format or plain language) into a
  concrete DESIGN.md spec plus an HTML preview. Forces the vague parts of a request
  ("make it professional") into explicit dimensions: palette, accent, typography,
  layout, mood, density, constraints. Built for OpenDesign; works standalone.
triggers:
  - "design brief"
  - "design spec"
  - "visual brief"
  - "I-Lang brief"
  - "structured brief"
  - "brief to DESIGN.md"
das:
  category: design-review
  upstream: "https://github.com/nexu-io/open-design"
  upstream_path: "skills/design-brief/SKILL.md"
  version: latest
  install: true
---

# design-brief

> Catalogue stub — full skill: [nexu-io/open-design](https://github.com/nexu-io/open-design/blob/main/skills/design-brief/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-brief/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-brief/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-brief`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-brief ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add https://raw.githubusercontent.com/nexu-io/open-design/main/skills/design-brief/SKILL.md -g -y
   ```

   **Project:**
   ```bash
   npx skills add https://raw.githubusercontent.com/nexu-io/open-design/main/skills/design-brief/SKILL.md -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** Apache-2.0
- **Name collision:** `design-brief` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-brief`
- Trigger phrases: "design brief", "visual brief", "I-Lang brief", "structured brief"

## What it does

Takes a design brief either as an I-Lang structured block (`[PLAN:@DESIGN|type=saas_landing] |palette=navy_and_white |accent=coral ...`) or as natural language ("clean, minimal, dark-mode landing page for a developer tool, Inter, no animations"), maps it onto eight visual dimensions (palette, accent, body and display typography, layout model, mood, density, exclusions), fills unspecified dimensions with mood-compatible defaults, and writes a `DESIGN.md` with concrete tokens plus a `brief-preview.html` preview. Asks before overwriting an existing `DESIGN.md`.

This is a visual-direction brief, not a product brief: there is no audience, goals or success-metrics content. The frontmatter carries an OpenDesign-specific block that other agents ignore; the skill itself is a single self-contained file.

## When NOT to use

- A product or project brief with goals, audience, success criteria and scope: the `designer-skills` package has a `design-brief` skill that writes exactly that. It installs into the same `design-brief` directory as this one, so choose one of the two
- Building a full design system with a consultation process (use `design-consultation`)
- When the visual direction is already fixed in an existing `DESIGN.md`
