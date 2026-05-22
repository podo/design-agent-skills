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

1. **Is the full skill already installed?** Check `~/.claude/skills/design-tokens-skill/SKILL.md` — no `das:` block = installed.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Shell access?** Yes → install below. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/design-tokens-skill && curl -fsSL https://raw.githubusercontent.com/ilikescience/design-tokens-skill/main/SKILL.md -o ~/.claude/skills/design-tokens-skill/SKILL.md
```

Verify: `head -3 ~/.claude/skills/design-tokens-skill/SKILL.md` — must NOT contain `das:`.

## Invoke after install

- Skill name: `design-tokens-skill`
- Triggers: "design tokens", "DTCG tokens", "W3C tokens", "Terrazzo", "token aliasing"

## What it does

Deep expertise in the W3C Design Token Community Group (DTCG) specification. Covers token file structure, value types, color space handling (sRGB, Display P3, OKLCH), references and aliasing between tokens, composite tokens, theme resolvers, and the full toolchain: jq, JSONata, Terrazzo, and exporting from Figma. Use when architecting a token system, migrating tokens to DTCG format, or configuring multi-theme token pipelines.

## When NOT to use

- OKLCH color generation without token structure — use `color-expert`
- Figma-specific token variables UI — use `figma-variables-tokens-generator`
- Figma official operations — use `figma-official-skills`
