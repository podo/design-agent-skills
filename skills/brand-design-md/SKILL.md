---
name: brand-design-md
description: |
  Fetches exact design tokens (colors, type weights, letter-spacing) for 62 world-class brands
  including Stripe, Linear, Apple, Figma, Notion, and Nike at runtime, then applies them to
  your project.
triggers:
  - "brand tokens"
  - "brand design"
  - "match Stripe design"
  - "62 brands"
  - "brand-design-md"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/zephyrwang6/brand-design-md"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# brand-design-md

> Catalogue stub — full skill: [zephyrwang6/brand-design-md](https://github.com/zephyrwang6/brand-design-md)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/brand-design-md/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `brand-design-md` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/brand-design-md && \
  curl -fsSL \
    https://raw.githubusercontent.com/zephyrwang6/brand-design-md/main/SKILL.md \
    -o ~/.design-agent-skills/skills/brand-design-md/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/brand-design-md/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `brand-design-md`
- Trigger phrases: "brand tokens", "brand design", "match Stripe design", "62 brands", "brand-design-md"

## What it does

At runtime, fetches the precise design tokens — primary and accent colors, type weights, letter-spacing, border-radius, and shadow values — for any of 62 documented world-class brands including Stripe, Linear, Apple, Figma, Notion, Vercel, Airbnb, and Nike. Once fetched, applies those tokens to the current project's CSS variables or Tailwind config so the output accurately reflects the chosen brand's visual language. Useful for building demos, pitch materials, or brand-matched prototypes quickly without manual research.

## When NOT to use

- When you need to develop a custom brand identity from scratch (this skill matches existing brands, not creates new ones)
- When none of the 62 brands match your target (use `design-consultation` to build a bespoke system)
- When brand token accuracy is legally or contractually sensitive (always verify tokens against official brand guidelines)
