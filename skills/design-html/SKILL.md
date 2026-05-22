---
name: design-html
description: |
  Implement designs as production-ready HTML/CSS with pixel-level fidelity.
  Garry Tan's design-html skill — translates mockups, Figma specs, or design
  descriptions into clean, semantic, accessible HTML output.
triggers:
  - "design html"
  - "design to HTML"
  - "implement design"
  - "mockup to code"
  - "HTML from design"
  - "production HTML"
das:
  category: figma-code
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-html/SKILL.md"
  version: latest
  install: true
---

# design-html

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/design-html/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/design-html/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-html/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/design-html ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add garrytan/gstack --skill design-html -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add garrytan/gstack --skill design-html -y
   ```

## Invoke after install

- Skill name: `design-html`
- Trigger phrases: "design html", "design to HTML", "implement design", "mockup to code"

## What it does

Translates design specs, mockups, or Figma descriptions into production-ready HTML/CSS with pixel-level fidelity. Part of Garry Tan's gstack — focused on faithful implementation that preserves typographic choices, spacing relationships, and visual hierarchy from the design source.
