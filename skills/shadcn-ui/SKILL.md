---
name: shadcn-ui
description: |
  Project-aware shadcn/ui workflow for searching, adding, composing, and fixing
  components with correct patterns. Reads the local project's shadcn config and
  installed components and avoids common shadcn anti-patterns during implementation.
triggers:
  - "shadcn"
  - "shadcn/ui"
  - "shadcn component"
  - "ui component"
das:
  category: visual-components
  upstream: "https://github.com/shadcn-ui/ui"
  upstream_path: "skills/shadcn/SKILL.md"
  version: latest
  install: true
---

# shadcn-ui

> Catalogue stub — full skill: [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (`skills/shadcn`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `shadcn`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/shadcn/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/shadcn/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `shadcn`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/shadcn-ui ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add shadcn-ui/ui --skill shadcn -g -y
   ```

   **Project:**
   ```bash
   npx skills add shadcn-ui/ui --skill shadcn -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js: the skill runs the shadcn CLI through your package runner (`npx shadcn@latest ...`, fetched from npm at use time), including `info --json` for project context; A project with a components.json file (or one you are about to create with `shadcn init`)
- **License:** MIT
- **Download size:** ~71 MB.
- **Name collision:** `shadcn-ui` is also written by `google-stitch-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `shadcn`
- Trigger phrases: "shadcn", "shadcn/ui", "shadcn component", "ui component"

## What it does

Provides a project-aware workflow for working with shadcn/ui: searching the available component registries (including community registries), adding components with the correct CLI command, composing components from existing ones (a settings page is Tabs + Card + form controls), using built-in variants and semantic colors before custom styles, and fixing common implementation mistakes. It also covers presets, registries and design-system pages. The skill loads project context by running `npx shadcn@latest info --json`.

The same upstream repository ships a separate `migrate-radix-to-base` skill for moving components from Radix UI to Base UI; it is not part of this stub (add it with `npx skills add shadcn-ui/ui --skill migrate-radix-to-base`).

## When NOT to use

- A non-shadcn component library, or a design system built from scratch — use `design-consultation`
- Google Stitch to shadcn conversion — use `google-stitch-skills`
