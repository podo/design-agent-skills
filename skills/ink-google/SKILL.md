---
name: ink-google
description: |
  Ink terminal renderer for json-render: turns JSON specs (including AI-generated ones) into
  interactive terminal UIs with standard components, data binding, visibility rules, actions
  and dynamic props. Use for building terminal UIs from JSON or component catalogs.
triggers:
  - "json-render Ink"
  - "Ink terminal renderer"
  - "terminal UI from JSON"
  - "json-render terminal"
das:
  type: skill
  category: tui-terminal
  upstream: "https://github.com/vercel-labs/json-render"
  upstream_path: "skills/ink/SKILL.md"
  version: latest
---

# ink-google

> Catalogue stub — full skill: [vercel-labs/json-render](https://github.com/vercel-labs/json-render/blob/main/skills/ink/SKILL.md) (`ink`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `ink`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/ink/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ink/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ink`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ink-google ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add vercel-labs/json-render --skill ink -g -y
   ```

   **Project:**
   ```bash
   npx skills add vercel-labs/json-render --skill ink -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js with the @json-render/ink package (npm install @json-render/ink) to run what the skill generates
- **License:** Apache-2.0
- **Name collision:** `ink` is also written by `simota-agent-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `ink`
- Trigger phrases: "json-render Ink", "terminal UI from JSON", "render a JSON spec in the terminal"

## What it does

Teaches an agent the `@json-render/ink` renderer: a flat element-map spec format, a `defineCatalog` / `defineRegistry` setup for standard plus custom components, and the data-binding, visibility and action systems, so JSON specs render as Ink (React-for-terminals) component trees.

Google's `design.md` repository vendors a copy of the same skill, which is why this pointer keeps its older `ink-google` directory name.

## When NOT to use

- Hand-written Ink or other TUI layout and design guidance — use `tui-design-skill`
- Python terminal apps — use `textual-tui-skill`
