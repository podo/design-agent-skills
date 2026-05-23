---
name: figma-official-skills
description: |
  7 official Figma skills for design-to-code and code-to-design workflows.
  Covers Figma Plugin API scripting, design implementation, library generation,
  Code Connect component mapping, and design system rules creation.
triggers:
  - "Figma skill"
  - "figma-implement-design"
  - "figma-generate-design"
  - "Figma to code"
  - "code to Figma"
  - "figma-use"
  - "Figma Plugin API"
das:
  category: figma-code
  upstream: "https://github.com/figma/skills"
  version: latest
  install: false
---

# figma-official-skills

> Catalogue stub — full package: [figma/skills](https://github.com/figma/skills)

## Decision tree

Run this before any Figma ↔ code workflow:

1. **Is a Figma skill already installed?**
   Check: `~/.design-agent-skills/skills/figma-use/SKILL.md` exists (representative skill).
   - Yes → invoke the specific Figma skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

Install individual skills (recommended — install only what you need):

```bash
# Figma Plugin API scripting
npx skills add figma/figma-use

# Figma to production code with 1:1 fidelity
npx skills add figma/figma-implement-design

# Build/update Figma screens from code or description
npx skills add figma/figma-generate-design

# Build design system library in Figma from codebase
npx skills add figma/figma-generate-library

# Connect Figma components to code
npx skills add figma/figma-code-connect-components

# Generate project-specific design system rules
npx skills add figma/figma-create-design-system-rules

# Create a blank Figma/FigJam file
npx skills add figma/figma-create-new-file
```

## Invoke after install

| Skill | Invoke with |
|-------|-------------|
| `figma-use` | "run Figma Plugin API", "Figma script" |
| `figma-implement-design` | "implement this Figma design", "Figma to code" |
| `figma-generate-design` | "generate Figma design", "code to Figma" |
| `figma-generate-library` | "build Figma library", "design system in Figma" |
| `figma-code-connect-components` | "code connect", "link Figma to code" |
| `figma-create-design-system-rules` | "Figma design system rules" |
| `figma-create-new-file` | "create Figma file", "new FigJam" |

## What it does

Official Figma skill suite covering the complete design ↔ code bridge. Converts Figma designs to production code with 1:1 fidelity, generates or updates Figma screens from code changes, builds design system libraries, connects Figma components to code components via Code Connect, and scripts the Figma Plugin API for custom automation.
