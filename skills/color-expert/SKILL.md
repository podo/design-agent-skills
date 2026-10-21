---
name: color-expert
description: |
  A large color-science knowledge base applied to UI/UX design. Covers OKLCH/OKLAB color spaces,
  palette generation, accessibility contrast ratios, color naming, pigment mixing,
  and historical color theory. By meodai, creator of color-names.
triggers:
  - "color expert"
  - "colour expert"
  - "OKLCH"
  - "OKLAB"
  - "color palette"
  - "colour palette"
  - "color science"
  - "color theory"
  - "contrast ratio"
das:
  category: visual-components
  upstream: "https://github.com/meodai/skill.color-expert"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# color-expert

> Catalogue stub — full skill: [meodai/skill.color-expert](https://github.com/meodai/skill.color-expert)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/color-expert/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/color-expert/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `color-expert`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/color-expert ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add meodai/skill.color-expert --skill color-expert -g -y
   ```

   **Project:**
   ```bash
   npx skills add meodai/skill.color-expert --skill color-expert -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** CC-BY-4.0 (original material; third-party source material keeps its own licenses)
<!-- das:install:end -->

## Invoke after install

- Skill name: `color-expert`
- Trigger phrases: "color expert", "OKLCH", "color palette", "color science", "contrast ratio"

## What it does

Brings a deep color-science reference library into design decisions: the skill file carries the essentials and an index points into hundreds of reference files. Covers perceptually uniform color spaces (OKLCH, OKLAB), palette generation algorithms, WCAG accessibility contrast, color naming conventions, pigment mixing theory, CSS color syntax, and the history of color in art and design. Ideal for building color systems, choosing palettes with correct contrast, or understanding why certain color combinations feel wrong.

## When NOT to use

- Design-token file structure (DTCG, aliasing, theme resolvers) → use `design-tokens-skill`
- A full accessibility audit (WCAG beyond contrast) → use `wcag-audit-patterns` or `addyosmani-quality`
