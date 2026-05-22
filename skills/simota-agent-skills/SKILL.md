---
name: simota-agent-skills
description: |
  140+ skill collection with a full design suite: Vision (creative direction), Muse (design tokens/dark mode), Frame (Figma-to-code bridge), Pixel (pixel-accurate HTML/CSS), Echo (persona-driven UI validation), Prose (microcopy/UX writing), Ink (SVG icons), Dot (pixel art), Clay (3D model generation), Sketch (AI image generation).
triggers:
  - "simota"
  - "Vision skill"
  - "Muse skill"
  - "Frame skill"
  - "Pixel skill"
  - "design suite"
das:
  type: package
  category: interaction-polish
  upstream: "https://github.com/simota/agent-skills"
  version: latest
  install: false
---

# simota-agent-skills

> Catalogue stub — full package: [simota/agent-skills](https://github.com/simota/agent-skills)

## Decision tree

1. **Is the package already installed?**
   Check your agent's skills directory for `simota-agent-skills` with content beyond this stub.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code / Cursor → `npx skills add simota/agent-skills`
   - Other → see [GitHub README](https://github.com/simota/agent-skills)

## Install command

```bash
npx skills add simota/agent-skills
```

## Invoke after install

- Skill name: `simota-agent-skills`
- Trigger phrases: "simota", "Vision skill", "Muse skill", "Frame skill", "Pixel skill", "design suite"

## What it does

A 140+ skill collection with a comprehensive design suite. The design-focused skills include: Vision (creative direction and art direction), Muse (design tokens, theming, dark mode), Frame (Figma-to-code bridge for design handoff), Pixel (pixel-accurate HTML/CSS implementation), Echo (persona-driven UI validation), Prose (microcopy and UX writing), Ink (SVG icon generation), Dot (pixel art creation), Clay (3D model generation), and Sketch (AI image generation). Each skill is independently invocable.

## When NOT to use

- When you need a single focused skill — individual sub-skills from this suite can be preferred over installing the full collection
- If you only need design review without the full toolkit — use `plan-design-review` or `creative-director` instead
