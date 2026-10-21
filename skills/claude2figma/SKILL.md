---
name: claude2figma
description: |
  Skill set that enforces design system compliance when Claude writes to Figma through
  the Figma MCP server: components are instances of master components, and
  colors/fonts/spacing/radii bind to Figma variables and styles instead of raw values.
  Every canvas write is followed by a binding check. Needs a Figma file with a design
  system and the Figma MCP server.
triggers:
  - "claude2figma"
  - "Figma token compliance"
  - "Figma variables enforcement"
  - "design system Figma"
  - "senlindesign"
  - "Figma design system enforcement"
das:
  type: package
  category: figma-code
  upstream: "https://github.com/senlindesign/claude2figma"
  version: latest
  install: false
---

# claude2figma

> Catalogue stub — full package: [senlindesign/claude2figma](https://github.com/senlindesign/claude2figma)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 4 skills (`figma-preflight`, `component-rules`, `figma-style-binding`, `reference-interpreter`); checking the first.
   - Global: `f=~/.agents/skills/figma-preflight/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/figma-preflight/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `figma-preflight`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/claude2figma ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add senlindesign/claude2figma --skill figma-preflight component-rules figma-style-binding reference-interpreter -g -y
   ```

   **Project:**
   ```bash
   npx skills add senlindesign/claude2figma --skill figma-preflight component-rules figma-style-binding reference-interpreter -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add senlindesign/claude2figma
/plugin install claude2figma@claude2figma
```

**Heads-up**

- **Requires:** Figma MCP server connected and authenticated; a Figma file with a Design System (local, or linked through a Library)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

There is no skill called `claude2figma`; the package installs these skills, which work together:

- Skill name: `figma-preflight` — say "let's start" with a Figma URL: runs the preflight check and loads the token map and component registry (start here)
- Skill name: `reference-interpreter` — share a screenshot, URL or description and get a structured design brief before building
- Skill name: `component-rules` — any UI construction task: library-first component lookup, Auto Layout, semantic naming
- Skill name: `figma-style-binding` — any color, font or spacing operation: bind to variables and styles, then verify after the write
- Trigger phrases: "claude2figma", "Figma token compliance", "Figma variables enforcement", "design system Figma"

## What it does

An enforcement layer for building in Figma against an existing design system. A preflight step checks the MCP connection, file permissions, libraries, styles, variables and components, then every build follows one loop: search the design system, create instances of master components (not rebuilt or detached copies), bind all color, typography, spacing and radius values to variables and styles, and verify the bindings.

The skills CLI installs only the skills. The upstream README also asks you to copy its `.claude/settings.json` (Figma tool permissions and a reminder hook) and `CLAUDE.md.template` (where you paste your Figma file URL) into your project.

## When NOT to use

- Reading or auditing existing Figma designs — use `figma-official-skills` (Figma MCP)
- Creating a design system from scratch, free-form design without a design system, or FigJam work
- Code-to-design without a token-based design system
- Token architecture outside Figma — use `design-tokens-skill`
