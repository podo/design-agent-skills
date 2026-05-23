---
name: anthropics-skills
description: |
  6 official Anthropic skills for frontend design, artifact creation, and presentation.
  Covers UI/UX development tools, complex HTML artifacts, visual art in PNG/PDF,
  professional theme application, brand guidelines, and PowerPoint creation.
triggers:
  - "Anthropic skill"
  - "Anthropic frontend design"
  - "web artifacts"
  - "canvas design"
  - "theme factory"
  - "brand guidelines"
  - "pptx Anthropic"
das:
  category: official-suites
  upstream: "https://github.com/anthropics/skills"
  version: latest
  install: false
---

# anthropics-skills

> Catalogue stub — full package: [anthropics/skills](https://github.com/anthropics/skills)

## Decision tree

Run this before using Anthropic official skills:

1. **Is an Anthropic skill already installed?**
   Check: `~/.design-agent-skills/skills/frontend-design/SKILL.md` exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` (add `-g` to install globally across all projects)

## Install command

```bash
# Frontend design and UI/UX development
npx skills add anthropics/frontend-design

# Build complex HTML artifacts with React/Tailwind/shadcn
npx skills add anthropics/web-artifacts-builder

# Design visual art in PNG/PDF
npx skills add anthropics/canvas-design

# Style artifacts with professional themes
npx skills add anthropics/theme-factory

# Apply brand colors and typography
npx skills add anthropics/brand-guidelines

# Create, edit, and analyze PowerPoint presentations
npx skills add anthropics/pptx
```

## Invoke after install

- `frontend-design` — "frontend design", "UI/UX development"
- `web-artifacts-builder` — "web artifact", "React artifact", "build HTML artifact"
- `canvas-design` — "canvas design", "PNG art", "visual art"
- `theme-factory` — "theme artifact", "professional theme", "style artifact"
- `brand-guidelines` — "brand colors", "brand typography", "apply brand"
- `pptx` — "PowerPoint", "create PPTX", "presentation"

## What it does

Anthropic's official skill suite covering design-adjacent workflows: production-quality frontend design guidance, complex multi-component HTML artifact construction with React/Tailwind/shadcn, visual art creation, theme systems, brand application, and PowerPoint generation.
