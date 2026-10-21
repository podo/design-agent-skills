---
name: frontend-design
description: |
  Eight aesthetic anchors (Swiss, Industrial, Brutalist, Aurora Maximalism, Chaotic Maximalism,
  Retro-Futuristic, Organic, Lo-Fi), each locking palette, typography, and texture to specific
  CSS tokens. Pick one per brief and the skill generates matching code, with a content rule
  against fabricated demo data and filler labels.
triggers:
  - "aesthetic anchor"
  - "brutalist design"
  - "swiss design"
  - "themed UI"
  - "frontend-design"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Ilm-Alan/frontend-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# frontend-design

> Catalogue stub — full skill: [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/frontend-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/frontend-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `frontend-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/frontend-design ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Ilm-Alan/frontend-design --skill frontend-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add Ilm-Alan/frontend-design --skill frontend-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `frontend-design` is also written by `anthropics-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `frontend-design`
- Trigger phrases: "aesthetic anchor", "brutalist design", "swiss design", "themed UI", "frontend-design"

## What it does

Provides eight named aesthetic anchors, each defined by a locked set of CSS tokens covering surface, typography, accent and structure. The skill states a direction and a differentiator before coding, then builds components that stay inside the chosen anchor's tokens; hybrids ("Swiss with a Brutalist edge") are ruled out by design. A second rule governs content: every string on screen must name real information, so fabricated telemetry, filler mono-caps labels, themed replacements for standard UI copy and unicode-glyph icons are forbidden. This makes the design system the constraint, not a suggestion.

Anthropic's own skill of the same name (part of `anthropics-skills`) installs into the same `frontend-design` directory, so keep only one of the two.

## When NOT to use

- When you need multi-stack support across React, Vue, and Svelte simultaneously (use `ui-ux-pro-max`)
- When the primary deliverable is animation-heavy or video (use `remotion`)
- When no specific aesthetic direction has been chosen and you need exploration first (use `design-consultation`)
