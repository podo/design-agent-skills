---
name: ui-craft
description: |
  Design engineering skill for AI coding agents: opinionated rules for how interfaces should look,
  move, and feel, a required discovery phase before coding, domain references, three style variants
  (minimal, editorial, dense-dashboard), and an anti-slop approach that flags generic patterns such
  as centered hero sections, Inter-only typography, and three-column card grids. Covers premium UI
  taste, component patterns, and design-engineering workflows.
triggers:
  - "ui-craft"
  - "anti-slop"
  - "slash commands for design"
  - "design engineering skill"
  - "educlopez"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/educlopez/ui-craft"
  version: latest
  install: true
---

# ui-craft

> Catalogue stub — full package: [educlopez/ui-craft](https://github.com/educlopez/ui-craft)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 4 skills (`ui-craft`, `ui-craft-minimal`, `ui-craft-editorial`, `ui-craft-dense-dashboard`); checking the first.
   - Global: `f=~/.agents/skills/ui-craft/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ui-craft/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ui-craft`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ui-craft ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add educlopez/ui-craft --skill ui-craft ui-craft-minimal ui-craft-editorial ui-craft-dense-dashboard -g -y
   ```

   **Project:**
   ```bash
   npx skills add educlopez/ui-craft --skill ui-craft ui-craft-minimal ui-craft-editorial ui-craft-dense-dashboard -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add educlopez/ui-craft
/plugin install ui-craft@ui-craft
```

**Heads-up**

- **Requires:** Plugin route only: bundles the ui-craft-mcp quality-gate MCP server, which Claude Code starts with npx (downloads and runs an npm package)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill names: `ui-craft`, `ui-craft-minimal`, `ui-craft-editorial`, `ui-craft-dense-dashboard`
- Trigger phrases: "ui-craft", "anti-slop", "design engineering", "slash commands for design"

## What it does

UI Craft gives AI coding agents the design knowledge they are missing: not templates or component libraries, but craft rules about layout, typography, color, motion, accessibility, dashboards, tables, landing pages, theming, and polish, plus a discovery step that reads the project's existing tokens before building. The main `ui-craft` skill routes by intent (build, animate, review, polish, audit) and tests every UI against "would someone believe AI made this?". Three variants lock the knobs for a style: `ui-craft-minimal` (clean, whitespace-heavy, Linear/Notion-like), `ui-craft-editorial` (magazine and long-form), and `ui-craft-dense-dashboard` (data-heavy admin tools).

The skills CLI route installs the skill and its variants only. Upstream also ships separate command-pass skills with generic names (`craft`, `critique`, `polish`, `audit`, `animate`, `brief`, `tokens`, and others), a Go CLI, review agents, and an MCP quality-gate server (the Claude Code plugin bundles the agents and the server). The command passes are left out of the default install because their short names collide with unrelated skills (`animate`); add any of them by name after `--skill` if you want them.

## When NOT to use

- Backend, API, or data tasks with no UI component
- When you only need a single focused skill (consider `taste-skill` for lighter touch)
