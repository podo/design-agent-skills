---
name: awesome-design-skills
description: |
  Registry of 67 visual aesthetic and style skills for Claude Code, Cursor,
  Codex, and other agents. Each skill ships as SKILL.md + DESIGN.md covering
  tokens, components, accessibility, tone, and quality gates for a specific
  design aesthetic — glassmorphism, brutalism, claymorphism, neumorphism,
  editorial, bento, retro, riso, and 59 more. Distributed via the TypeUI CLI.
triggers:
  - "awesome-design-skills"
  - "design aesthetic skill"
  - "glassmorphism skill"
  - "brutalism skill"
  - "claymorphism skill"
  - "neumorphism skill"
  - "visual style skill"
  - "typeui"
das:
  type: package
  category: visual-components
  upstream: "https://github.com/bergside/awesome-design-skills"
  version: latest
---

# awesome-design-skills

> Catalogue stub — full registry: [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills)

## Install a style skill

Browse available skills:
```bash
npx typeui.sh list
```

Install a specific style:
```bash
npx typeui.sh pull <slug>
# examples:
npx typeui.sh pull glassmorphism
npx typeui.sh pull brutalism
npx typeui.sh pull claymorphism
npx typeui.sh pull editorial
npx typeui.sh pull bento
```

Skills install to your local agents directory and are immediately available.

## Available styles (67 total)

Aesthetic moods: `agentic`, `ant`, `artistic`, `bento`, `bold`, `brutalism`, `cafe`, `claymorphism`, `clean`, `colorful`, `contemporary`, `corporate`, `cosmic`, `creative`, `dashboard`, `dithered`, `doodle`, `dramatic`, `editorial`, `elegant`, `energetic`, `enterprise`, `expressive`, `fantasy`, `fiction`, `flat`, `friendly`, `futuristic`, `glassmorphism`, `gradient`, `immersive`, `luxury`, `minimal`, `modern`, `mono`, `neobrutalism`, `neon`, `neumorphism`, `paper`, `perspective`, `premium`, `professional`, `publication`, `refined`, `retro`, `riso`, `simple`, `sketch`, `skeuomorphism`, `sleek`, `spacious`, `storytelling`, `vibrant`, `vintage`, and more.

## What it does

Each skill in the registry includes:
- **SKILL.md** — agent instructions: token palette, component rules, accessibility constraints, quality gates
- **DESIGN.md** — human-readable rationale: brand mission, style foundations, do/don't patterns

The agent reads both files to apply the aesthetic consistently across any UI task — colors, typography, spacing, shadows, motion, tone of voice.

## When NOT to use

- Functional design tooling (Figma, tokens, accessibility audits) — use the relevant tool skill
- Brand-specific tokens for a real product — use `design-tokens-skill` or author your own DESIGN.md
- Material Design 3 / platform HIG — use `material-3-skill` or `platform-design-skills`
