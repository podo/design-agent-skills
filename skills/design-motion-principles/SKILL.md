---
name: design-motion-principles
description: |
  Motion and interaction design expert with two modes: build interactive
  components with purposeful motion, or audit existing animations for AI-slop
  patterns. Audit emits a branded HTML report with looping CSS demos per finding.
  Based on Emil Kowalski (restraint), Jakub Krehel (production polish), and
  Jhey Tompkins (creative experimentation), with lenses weighted to project context.
  Works with React, Framer Motion, CSS, and HTML.
triggers:
  - "add animation"
  - "audit animation"
  - "hover state"
  - "enter exit animation"
  - "motion review"
  - "AI slop motion"
  - "motion audit"
  - "purposeful motion"
  - "motion principles"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/kylezantos/design-motion-principles"
  upstream_path: "skills/design-motion-principles/SKILL.md"
  version: latest
---

# design-motion-principles

> Catalogue stub — full skill: [kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-motion-principles/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-motion-principles/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-motion-principles`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-motion-principles ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add kylezantos/design-motion-principles --skill design-motion-principles -g -y
   ```

   **Project:**
   ```bash
   npx skills add kylezantos/design-motion-principles --skill design-motion-principles -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-motion-principles`
- Trigger phrases: "add animation", "audit animation", "hover state", "enter exit animation", "motion review", "AI slop motion"

The skill detects its mode from your request:

| You say | Mode |
|---------|------|
| "animate this", "add motion", "make it feel alive" | **Create** |
| "audit my animations", "review motion", "check for AI slop" | **Audit** |
| Ambiguous | Skill asks which mode |

## What it does

Two modes, three lenses weighted to project context:

| Mode | Output |
|------|--------|
| **Create** | Context discovery, lens weighting, then a component with motion baked in (React / Framer Motion / CSS / HTML) |
| **Audit** | Motion-gap analysis plus an anti-AI-slop checklist, delivered as a branded HTML report with auto-looping CSS demos, or `--terminal` for inline markdown |

**Three lenses:**
- **Emil Kowalski** — Restraint and speed. "Should this animate at all?"
- **Jakub Krehel** — Production polish. "Is this subtle enough?"
- **Jhey Tompkins** — Creative experimentation. "What could this become?"

The productive tension between these three lenses, not one applied universally, is the point. The skill reads its own `workflows/` and `references/` folders, so it must be installed through the skills CLI rather than by copying `SKILL.md` alone.

## When NOT to use

- Static layout, color or typography work (use a design-systems skill such as `ui-ux-pro-max`)
- Only Emil Kowalski's single-lens guidance (use `emilkowalski-skill`)
- Interactive gesture-driven animation requiring JavaScript state (use `framer-motion-skills`)
