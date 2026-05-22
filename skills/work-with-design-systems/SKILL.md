---
name: work-with-design-systems
description: |
  Two-mode Figma design system skill — Inspect mode (read-only WCAG audit,
  component scoring, handoff docs) and Build mode (six-phase creation with
  variable bindings, slots, descriptions), with optional sync to tokens.css
  + AI rules.
triggers:
  - "work with design systems"
  - "natdexterra"
  - "Figma inspect mode"
  - "build design system Figma"
  - "Figma design system audit"
  - "WCAG component audit"
das:
  type: skill
  category: figma-code
  upstream: "https://github.com/natdexterra/work-with-design-systems"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# work-with-design-systems

> Catalogue stub — full skill: [natdexterra/work-with-design-systems](https://github.com/natdexterra/work-with-design-systems)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/work-with-design-systems/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/work-with-design-systems/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/work-with-design-systems ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add natdexterra/work-with-design-systems --skill work-with-design-systems -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add natdexterra/work-with-design-systems --skill work-with-design-systems -y
   ```

## Invoke after install

- Skill name: `work-with-design-systems`
- Triggers: "work with design systems", "Figma inspect mode", "build design system Figma", "WCAG component audit"

## What it does

Two operational modes for Figma design systems. **Inspect mode**: read-only analysis — WCAG accessibility audit, component quality scoring, and developer handoff documentation generation. **Build mode**: guided six-phase design system creation covering variable bindings, component slot architecture, and descriptions, with optional export to `tokens.css` and AI-readable rules files.

## When NOT to use

- Single component work not requiring system architecture
- General design work without a design system — use `mobile-app-design` or `ui-craft`
- Token enforcement during Figma writes — use `claude2figma`
