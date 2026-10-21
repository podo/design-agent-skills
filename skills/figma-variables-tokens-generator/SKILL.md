---
name: figma-variables-tokens-generator
description: |
  Guides creation of a W3C-compliant token system via an interview, generates
  a structured ZIP of JSON token files organized by collection tier (Primitives,
  Theme, Semantic, Component), and relies on a separate Figma plugin that imports
  them in dependency order.
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
  upstream_path: "figma-variables-tokens-generator/SKILL.md"
  version: latest
  install: false
---

# figma-variables-tokens-generator

> Catalogue stub — full package: [Shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/figma-variables-tokens-generator/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/figma-variables-tokens-generator/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `figma-variables-tokens-generator`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/figma-variables-tokens-generator ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Shanmus4/figma-variables-tokens-generator --skill figma-variables-tokens-generator -g -y
   ```

   **Project:**
   ```bash
   npx skills add Shanmus4/figma-variables-tokens-generator --skill figma-variables-tokens-generator -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python 3 (the skill generates the token ZIP by running its bundled Python generator); A Figma account and the free Figma Community plugin "Variables Tokens Collections Importer" (not part of this install) to import the ZIP
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `figma-variables-tokens-generator`
- Triggers: "Figma variables", "token generator", "W3C token ZIP", "Shanmus4"

## What it does

Interviews you about your brand colours, spacing, typography and the token architecture you want (from a flat single tier up to four tiers), then generates a W3C Design Token Community Group (DTCG) compliant ZIP archive with a bundled Python generator. The ZIP contains JSON token files organized into collection tiers: Primitives (raw values), Theme, Semantic (contextual aliases, with light/dark modes) and Component (component-specific tokens), with Figma variable scoping applied and alias chains kept stable across modes. The ZIP is imported into Figma Variables with the companion Figma Community plugin "Variables Tokens Collections Importer", which respects dependency order across tiers; that plugin is a separate install and is not fetched by this pointer.

## When NOT to use

- Code-side token management and pipelines — use `design-tokens-skill`
- Existing design systems not based in Figma
- Figma design operations unrelated to tokens — use the Figma MCP (`figma-official-skills`)
