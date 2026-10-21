---
name: wpds
description: |
  WordPress Design System (WPDS) skill. Build and review UI that uses WPDS components, design tokens, and patterns across Gutenberg, WooCommerce, WordPress.com, and Jetpack. Reads canonical documentation from the WPDS MCP server instead of the web.
triggers:
  - "WordPress Design System"
  - "WPDS"
  - "WordPress design tokens"
  - "WordPress UI components"
  - "Gutenberg UI design"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/WordPress/agent-skills"
  version: latest
---

# wpds

> Catalogue stub — full skill: [WordPress/agent-skills](https://github.com/WordPress/agent-skills) (`skills/wpds`)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/wpds/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/wpds/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wpds ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add WordPress/agent-skills --skill wpds -g -y
   ```

   **Project:**
   ```bash
   npx skills add WordPress/agent-skills --skill wpds -y
   ```

## Invoke after install

- Skill name: `wpds`
- Trigger phrases: "WordPress Design System", "WPDS", "WordPress design tokens", "WordPress UI components"
- Works best with the WPDS MCP server configured and running; it targets WordPress 7.0+

## What it does

Guides building and reviewing WordPress-related UI against the official WordPress Design System: components (including `@wordpress/components` and `@wordpress/ui`), design tokens, colour primitives, spacing scales, and typography presets. It retrieves canonical component and token documentation from the WPDS MCP server rather than searching the web, assumes TypeScript, React, and CSS unless told otherwise, validates with the project's lint scripts when available, and closes each answer with a recap of decisions and what was left out of scope.

## When NOT to use

- Non-UI WordPress work (plugins, REST API, WP-CLI, blocks logic) → install the other skills in `WordPress/agent-skills` directly
- General design-system governance or token tooling → use `design-system-governance` or `design-tokens-skill`
- Component library work with shadcn/ui → use `shadcn-ui`
