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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `design-tokens`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/design-tokens/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-tokens/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-tokens`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-tokens-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ilikescience/design-tokens-skill --skill design-tokens -g -y
   ```

   **Project:**
   ```bash
   npx skills add ilikescience/design-tokens-skill --skill design-tokens -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-tokens`
- Triggers: "design tokens", "DTCG tokens", "W3C tokens", "Terrazzo", "token aliasing"

## What it does

Deep expertise in the W3C Design Token Community Group (DTCG) specification. Covers token file structure, value types, color space handling (sRGB, Display P3, OKLCH), references and aliasing between tokens, composite tokens, theme resolvers, and the full toolchain: jq, JSONata, Terrazzo, and exporting from Figma. Use when architecting a token system, migrating tokens to DTCG format, or configuring multi-theme token pipelines.

## When NOT to use

- OKLCH color generation without token structure — use `color-expert`
- Figma-specific token variables UI — use `figma-variables-tokens-generator`
- Figma official operations — use `figma-official-skills`
