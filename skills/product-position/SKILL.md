---
name: product-position
description: |
  B2B SaaS product positioning, messaging hierarchy, and differentiation advisor.
  Applies Dunford, JTBD, Raskin, and Lochhead frameworks to produce positioning docs,
  messaging matrices, competitive framing, and strategic narratives.
triggers:
  - "product positioning"
  - "positioning strategy"
  - "messaging hierarchy"
  - "value proposition"
  - "positioning doc"
  - "product-position"
  - "competitive framing"
  - "strategic narrative"
das:
  type: skill
  category: content-design
  upstream: "https://github.com/firatcand/founder-skills"
  version: latest
---

# product-position

> Catalogue stub — full skill: [firatcand/founder-skills](https://github.com/firatcand/founder-skills)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/product-position/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/product-position/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/product-position ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add firatcand/founder-skills --skill product-position -g -y
   ```

   **Project:**
   ```bash
   npx skills add firatcand/founder-skills --skill product-position -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.

## What it does

Positioning and messaging advisor grounded in methodologies from Dunford, Ries & Trout, Raskin, Moesta, Laja, and Lochhead:

- Positioning from scratch or repositioning existing products
- Audit and critique of existing messaging or positioning
- Builds positioning docs, messaging hierarchies, and JTBD summaries
- Competitive alternative framing (including "do nothing" / status quo)
- Category choice vs. category creation decisions
- Strategic narrative structure (Raskin-style)
- Homepage, pitch deck, and sales narrative messaging clarity

## When NOT to use

- Landing page copy or headlines → use `copywriting-skill`
- Full PM discovery / PRD → use `deanpeters-pm-skills` or `pm-skills`
- User research for positioning insights → use `user-research-cookiy`
- Brand identity / visual language → use `brand-design-md`
