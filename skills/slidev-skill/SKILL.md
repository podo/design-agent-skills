---
name: slidev-skill
description: |
  Official Slidev skill from the Slidev team — helps agents understand and generate
  developer-focused technical presentations using Slidev's Markdown format with Vue
  components, code highlighting, and animations.
triggers:
  - "Slidev"
  - "slidev-skill"
  - "Slidev presentation"
  - "developer slides Vue"
das:
  category: presentations
  upstream: "https://github.com/slidevjs/slidev"
  version: latest
  install: false
---

# slidev-skill

> Catalogue stub — full package: [slidevjs/slidev](https://github.com/slidevjs/slidev)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/slidev-skill/SKILL.md` exists.
   - Yes → invoke `slidev-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add slidevjs/slidev
```

## Invoke after install

- Skill name: `slidev-skill`
- Trigger phrases: "Slidev", "Slidev presentation", "developer slides Vue"

## What it does

The official Claude skill maintained by the Slidev team. Provides complete knowledge of Slidev's Markdown-based presentation format, enabling agents to generate developer-focused technical presentations with Vue component embeds, Shiki-powered syntax highlighting, click-through animations, and presenter mode. Slidev presentations run as a local Vite dev server and export to PDF or SPA.

## When NOT to use

- PowerPoint/PPTX export — use guizang-ppt instead
- Simple Marp Markdown without Vue components — use marp-slides instead
- Reveal.js HTML output — use revealjs-skill instead
- Conference slide quality guardrails — use cc-slidev as an alternative with design constraints
