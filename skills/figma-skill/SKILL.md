---
name: figma-skill
description: |
  Connects to Figma API, discovers Community resources matching the project,
  extracts design tokens, and generates framework-specific code for 7
  frameworks.
triggers:
  - "figma-skill"
  - "Figma API extract"
  - "Figma to framework"
  - "nafiurrahmanniloy figma"
  - "Figma Community resources"
das:
  type: package
  category: figma-code
  upstream: "https://github.com/nafiurrahmanniloy/figma-skill"
  version: latest
  install: false
---

# figma-skill

> Catalogue stub — full package: [nafiurrahmanniloy/figma-skill](https://github.com/nafiurrahmanniloy/figma-skill)

## Decision tree

1. **Is the skill already installed?** Check `~/.design-agent-skills/skills/` for `figma-skill` or related directories.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Shell access?** Yes → install below. No → show user the command.

## Install command

```bash
npx skills add nafiurrahmanniloy/figma-skill
```

## Invoke after install

- Skill name: `figma-skill`
- Triggers: "figma-skill", "Figma API extract", "Figma to framework", "Figma Community resources"

## What it does

Connects to the Figma API to discover Community file resources that match your project context, extracts design tokens from those files, and generates framework-specific implementation code. Supports 7 frameworks — covering major React, Vue, Angular, and native ecosystems.

## When NOT to use

- Official Figma file operations (reading/writing your files) — use the Figma MCP (`figma-official-skills`)
- Design system token enforcement in Figma — use `claude2figma`
- Token architecture without Figma — use `design-tokens-skill`
