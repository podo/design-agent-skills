---
name: extract-design-system
description: |
  Reverse-engineers design tokens (colors, typography, spacing, border radius,
  shadows) from any public website and generates tokens.json and tokens.css for
  local projects. Skill plus a bundled CLI the agent runs. Outputs token files,
  not a DESIGN.md document.
triggers:
  - "extract design system"
  - "reverse-engineer tokens"
  - "extract tokens from website"
  - "arvindrk extract"
  - "website to tokens"
das:
  type: skill
  category: figma-code
  upstream: "https://github.com/arvindrk/extract-design-system"
  version: latest
  install: false
---

# extract-design-system

> Catalogue stub — full skill: [arvindrk/extract-design-system](https://github.com/arvindrk/extract-design-system)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/extract-design-system/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/extract-design-system/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `extract-design-system`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/extract-design-system ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add arvindrk/extract-design-system --skill extract-design-system -g -y
   ```

   **Project:**
   ```bash
   npx skills add arvindrk/extract-design-system --skill extract-design-system -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js with npx and network access (at use time the skill runs `npx playwright install chromium` and the `extract-design-system` npm package)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `extract-design-system`
- Triggers: "extract design system", "reverse-engineer tokens", "extract tokens from website"

## What it does

Reverse-engineers starter design tokens from a public website URL. The skill has the agent run the `extract-design-system` CLI (a headless Chromium crawl) and then summarise what it found: likely primary, secondary and accent colors, detected fonts, and the spacing, radius and shadow scales. It writes `.extract-design-system/raw.json` and `normalized.json`, plus a W3C-style `design-system/tokens.json` and a `design-system/tokens.css` of CSS custom properties. It extracts tokens and starter assets, not a component library, and it asks before changing any existing app code or styles. Results are good for initialising a project, not pixel-perfect reproduction.

## When NOT to use

- Figma-source token extraction → use the Figma MCP (`figma-official-skills`) or `figma-variables-tokens-generator`
- A DESIGN.md spec document rather than token files → use `extract-design-md`
- Building a token architecture from scratch → use `design-tokens-skill`
