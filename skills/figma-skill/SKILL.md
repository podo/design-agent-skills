---
name: figma-skill
description: |
  Figma design bridge for Claude Code: browse Figma files through the figma-developer-mcp server,
  download assets, extract design tokens, and generate code for Tailwind, React, Vue, Svelte,
  React Native, Flutter and plain CSS. Also finds Figma Community resources that match the project.
  Needs a Figma access token and the figma-developer-mcp server.
triggers:
  - "figma-skill"
  - "Figma API extract"
  - "Figma to framework"
  - "nafiurrahmanniloy figma"
  - "Figma Community resources"
das:
  type: skill
  category: figma-code
  upstream: "https://github.com/nafiurrahmanniloy/figma-skill"
  upstream_path: "figma/SKILL.md"
  version: latest
  install: true
---

# figma-skill

> Catalogue stub — full skill: [nafiurrahmanniloy/figma-skill](https://github.com/nafiurrahmanniloy/figma-skill) (`figma`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `figma`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/figma/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/figma/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `figma`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/figma-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add nafiurrahmanniloy/figma-skill --skill figma -g -y
   ```

   **Project:**
   ```bash
   npx skills add nafiurrahmanniloy/figma-skill --skill figma -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Figma personal access token (FIGMA_API_KEY); the figma-developer-mcp server configured in .mcp.json; Python 3.8+ (for the token and code scripts)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `figma`
- Triggers: "figma-skill", "Figma API extract", "Figma to framework", "Figma Community resources"

Before first use, set up the prerequisites the heads-up lists: a Figma personal access token, the `figma-developer-mcp` server in your `.mcp.json`, and Python 3.8+. Without the MCP server the skill cannot read any Figma file.

## What it does

A Figma-to-code workflow built on the `figma-developer-mcp` server. It browses a Figma file or a single node, downloads image assets, extracts design tokens (CSS variables, Tailwind config, SCSS or JSON) with a bundled Python script, and generates component code for Tailwind, React, Vue, Svelte, React Native, Flutter or plain CSS. A separate workflow builds a project profile and searches Figma Community for UI kits and design systems that fit it. Everything runs through your own Figma token.

## When NOT to use

- Official Figma file operations (reading/writing your files) — use the Figma MCP (`figma-official-skills`)
- Design system token enforcement in Figma — use `claude2figma`
- Token architecture without Figma — use `design-tokens-skill`
