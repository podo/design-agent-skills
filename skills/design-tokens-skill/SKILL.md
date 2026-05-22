---
name: design-tokens-skill
description: |
  Expert in the W3C DTCG token specification — token structure, color spaces
  (sRGB, Display P3, OKLCH), references/aliasing, theme resolvers, and tools
  (jq, JSONata, Terrazzo, Figma exports). The authoritative skill for design
  token architecture.
triggers:
  - "design tokens"
  - "DTCG tokens"
  - "W3C tokens"
  - "Terrazzo"
  - "design-tokens-skill"
  - "token aliasing"
  - "token references"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/ilikescience/design-tokens-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# design-tokens-skill

> Catalogue stub — full skill: [ilikescience/design-tokens-skill](https://github.com/ilikescience/design-tokens-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/design-tokens-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-tokens-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/design-tokens-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add ilikescience/design-tokens-skill --skill design-tokens-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add ilikescience/design-tokens-skill --skill design-tokens-skill -y
   ```

## Invoke after install

- Skill name: `design-tokens-skill`
- Triggers: "design tokens", "DTCG tokens", "W3C tokens", "Terrazzo", "token aliasing"

## What it does

Deep expertise in the W3C Design Token Community Group (DTCG) specification. Covers token file structure, value types, color space handling (sRGB, Display P3, OKLCH), references and aliasing between tokens, composite tokens, theme resolvers, and the full toolchain: jq, JSONata, Terrazzo, and exporting from Figma. Use when architecting a token system, migrating tokens to DTCG format, or configuring multi-theme token pipelines.

## When NOT to use

- OKLCH color generation without token structure — use `color-expert`
- Figma-specific token variables UI — use `figma-variables-tokens-generator`
- Figma official operations — use `figma-official-skills`
