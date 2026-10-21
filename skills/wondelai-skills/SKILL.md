---
name: wondelai-skills
description: |
  Design and product-design skills derived from seminal books, selected from the
  larger Wondel.ai collection: Refactoring UI, The Design of Everyday Things,
  Microinteractions, Lean UX, Inspired (Marty Cagan), Jobs To Be Done, the Hook
  Model, and the Design Sprint. Installed as individual skills.
triggers:
  - "wondelai"
  - "Refactoring UI skill"
  - "Design of Everyday Things"
  - "microinteractions skill"
  - "Lean UX skill"
  - "Hook Model skill"
  - "Design Sprint skill"
das:
  type: package
  category: design-review
  upstream: "https://github.com/wondelai/skills"
  version: latest
  install: false
---

# wondelai-skills

> Catalogue stub — full package: [wondelai/skills](https://github.com/wondelai/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`refactoring-ui`, `design-everyday-things`, `microinteractions`, `lean-ux`, `design-sprint`, `inspired-product`, `jobs-to-be-done`, `hooked-ux`); checking the first.
   - Global: `f=~/.agents/skills/refactoring-ui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/refactoring-ui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `refactoring-ui`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wondelai-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add wondelai/skills --skill refactoring-ui design-everyday-things microinteractions lean-ux design-sprint inspired-product jobs-to-be-done hooked-ux -g -y
   ```

   **Project:**
   ```bash
   npx skills add wondelai/skills --skill refactoring-ui design-everyday-things microinteractions lean-ux design-sprint inspired-product jobs-to-be-done hooked-ux -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add wondelai/skills
/plugin install ux-design@wondelai-skills
/plugin install product-innovation@wondelai-skills
/plugin install product-strategy@wondelai-skills
```

**Heads-up**

- **License:** MIT
- **Name collision:** `design-sprint` is also written by `design-sprint` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `jobs-to-be-done` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- `refactoring-ui` — "Refactoring UI skill", visual polish heuristics
- `design-everyday-things` — "Design of Everyday Things", affordances, feedback, mental models
- `microinteractions` — "microinteractions skill"
- `lean-ux` — "Lean UX skill", hypothesis-driven design
- `design-sprint` — "Design Sprint skill", Knapp's five-day process
- `inspired-product` — product discovery and empowered teams (Marty Cagan)
- `jobs-to-be-done` — customer jobs analysis
- `hooked-ux` — "Hook Model skill", habit-forming product loops

## What it does

A curated subset of the Wondel.ai skill collection, drawn from foundational design and product books. Brings frameworks from Refactoring UI (visual polish heuristics), The Design of Everyday Things (affordances, feedback, mental models), Microinteractions, Lean UX (hypothesis-driven design), Inspired by Marty Cagan (product discovery and design thinking), Jobs To Be Done, the Hook Model (habit-forming product design), and Design Sprint (the five-day process) into your workflow. The upstream repository holds many more skills (marketing, sales, code quality, architecture); this pointer installs only the design-related ones.

## When NOT to use

- Code implementation — these are design thinking and methodology skills, not code-generation skills
- Component-level visual design — use `color-expert`, `design-tokens-skill`, or `ui-craft`
- Figma execution — use `work-with-design-systems` or `claude2figma`
- Breaking a designed feature into tracker issues — use the `design-sprint` stub, which installs upstream's `create-issue` skill (a different thing from the Design Sprint skill here)
