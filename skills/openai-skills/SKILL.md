---
name: openai-skills
description: |
  9 official OpenAI skills: 6 Figma design skills (mirroring the Figma official suite),
  frontend design for landing pages and apps, PowerPoint slide creation with PptxGenJS,
  and image generation using the OpenAI Image API.
triggers:
  - "OpenAI skill"
  - "openai frontend"
  - "openai slides"
  - "openai imagegen"
  - "openai figma"
das:
  category: official-suites
  upstream: "https://github.com/openai/skills"
  version: latest
  install: false
---

# openai-skills

> Catalogue stub — full package: [openai/skills](https://github.com/openai/skills)

## Decision tree

Run this before using OpenAI-specific skill workflows:

1. **Is an OpenAI skill already installed?**
   Check: `~/.design-agent-skills/skills/frontend-skill/SKILL.md` exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
# Visually strong landing pages and app UIs
npx skills add openai/frontend-skill

# Create/edit .pptx decks with PptxGenJS
npx skills add openai/slides

# Generate/edit images using OpenAI Image API
npx skills add openai/imagegen

# Figma skills (mirror figma/ official suite)
npx skills add openai/figma
npx skills add openai/figma-implement-design
npx skills add openai/figma-generate-design
npx skills add openai/figma-generate-library
npx skills add openai/figma-code-connect-components
npx skills add openai/figma-create-design-system-rules
```

## Invoke after install

- `frontend-skill` — "visually strong landing page", "app UI", "frontend design"
- `slides` — "create PowerPoint", "make slides", "PPTX"
- `imagegen` — "generate image", "edit image", "OpenAI image"
- Figma skills — same triggers as figma-official-skills above

## What it does

OpenAI's official skill collection: frontend design for high-quality landing pages and web apps, PowerPoint generation using PptxGenJS, image creation and editing via the OpenAI Image API, and 6 Figma integration skills mirroring the official Figma suite.
