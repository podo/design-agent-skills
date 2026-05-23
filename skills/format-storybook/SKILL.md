---
name: format-storybook
description: |
  Structures and organizes Storybook files for scalability using battle-tested
  patterns from Cassondra Roberts' "A Storybook format that scales with you".
  Covers story definitions, template composition, controls/args, visual regression
  with Chromatic, component documentation, and CSF conventions. Activates on any
  Storybook question — file structure, controls, args, or component documentation.
triggers:
  - "Storybook"
  - "Storybook story"
  - "format-storybook"
  - "Chromatic visual regression"
  - "CSF story format"
  - "component story"
das:
  type: skill
  category: design-engineering
  upstream: "https://github.com/mikemai2awesome/agent-skills"
  upstream_path: "skills/format-storybook/SKILL.md"
  version: latest
---

# format-storybook

> Catalogue stub — full skill: [mikemai2awesome/agent-skills](https://github.com/mikemai2awesome/agent-skills)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/format-storybook/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/format-storybook/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/format-storybook ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add mikemai2awesome/agent-skills --skill format-storybook -g -y
   ```

   **Project:**
   ```bash
   npx skills add mikemai2awesome/agent-skills --skill format-storybook -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.

## What it does

Enforces scalable, maintainable Storybook patterns across a component library:

- **File structure** — co-locate stories with components; `stories/component.stories.js` + `stories/template.js` + optional `component.docs.mdx`
- **Template composition** — import child component templates instead of duplicating markup; single source of truth per component
- **Controls & args** — progressive disclosure: sensible defaults + optional controls for edge cases; arg types and descriptions
- **Visual regression** — Chromatic integration patterns; snapshot testing strategy
- **CSF conventions** — Component Story Format 3.0; default export metadata; named story exports
- **Documentation** — MDX docs pages; component API tables; usage examples; do/don't patterns

## When NOT to use

- React Native Storybook stories specifically → use `storybook-rn-skill`
- Design token generation → use `design-tokens-skill`
- Component implementation from scratch → use `shadcn-ui` or `baseline-ui`
