---
name: figma-variables-tokens-generator
description: |
  Guides creation of a W3C-compliant token system via questionnaire, generates
  a structured ZIP of JSON token files organized by collection tier (Primitives,
  Semantic, Component), plus a Figma plugin that imports them maintaining
  dependency order.
triggers:
  - "Figma variables"
  - "token generator"
  - "figma-variables-tokens"
  - "W3C token ZIP"
  - "Shanmus4"
  - "token collection tiers"
das:
  type: package
  category: figma-code
  upstream: "https://github.com/Shanmus4/figma-variables-tokens-generator"
  version: latest
  install: false
---

# figma-variables-tokens-generator

> Catalogue stub — full package: [Shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator)

## Decision tree

1. **Is the skill already installed?** Check `~/.design-agent-skills/skills/` for `figma-variables-tokens-generator` or related directories.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Shell access?** Yes → install below. No → show user the command (Claude Code: prefix with `!` to run in prompt).

## Install command

```bash
npx skills add Shanmus4/figma-variables-tokens-generator
```

## Invoke after install

- Skill name: `figma-variables-tokens-generator`
- Triggers: "Figma variables", "token generator", "W3C token ZIP", "Shanmus4"

## What it does

Runs a structured questionnaire to understand your design system needs, then generates a W3C Design Token Community Group (DTCG) compliant ZIP archive. The ZIP contains JSON token files organized into collection tiers: Primitives (raw values), Semantic (contextual aliases), and Component (component-specific tokens). Also provides a companion Figma plugin that imports these JSON files into Figma Variables, respecting dependency order across tiers.

## When NOT to use

- Code-side token management and pipelines — use `design-tokens-skill`
- Existing design systems not based in Figma
- Figma design operations unrelated to tokens — use the Figma MCP (`figma-official-skills`)
