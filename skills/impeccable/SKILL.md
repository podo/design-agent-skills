---
name: impeccable
description: |
  Design fluency for frontend development. 1 skill with 23 slash commands
  (/impeccable polish, /impeccable audit, /impeccable critique, etc.),
  curated anti-pattern detection CLI, and runtime node scripts.
  Covers UI design, redesign, critique, accessibility, motion, theming,
  typography, and component craft across websites, dashboards, and apps.
triggers:
  - "impeccable"
  - "polish UI"
  - "audit design"
  - "critique interface"
  - "design commands"
  - "anti-pattern detection"
das:
  category: design-systems
  type: platform
  upstream: "https://github.com/pbakaus/impeccable"
  version: latest
---

# impeccable

> Catalogue stub — full platform: [pbakaus/impeccable](https://github.com/pbakaus/impeccable)  
> Type: platform — do NOT curl SKILL.md directly (contains unresolved template variables)

## Decision tree

Run this before any design work:

1. **Is impeccable already installed for your agent?**
   - Claude Code: does `/impeccable` slash command exist in this session?
   - Other agents: check if `impeccable` skill is loaded
   - Yes → invoke `/impeccable <command>` and proceed
   - No → go to step 2

2. **Install via your agent's preferred method:**

| Agent | Install command |
|-------|----------------|
| Claude Code | `claude plugin install pbakaus/impeccable` |
| All agents | `npx skills add impeccable` |
| npm (global) | `npm install -g impeccable` |

3. **After install, restart your agent session** so the skill and commands are loaded.

> **Why not curl?** `impeccable`'s SKILL.md contains `{{scripts_path}}`,
> `{{command_prefix}}`, and other template variables resolved at install time.
> A raw curl produces a broken skill with unresolved placeholders.

## What it does

1 skill + 23 slash commands. Invoke as `/impeccable <command>`:

| Command | Purpose |
|---------|---------|
| `polish` | Refine visual hierarchy, spacing, and details |
| `audit` | Accessibility and UX pattern review |
| `critique` | Honest design criticism |
| `shape` | Layout and composition work |
| `animate` | Motion and transition guidance |
| `colorize` | Palette and contrast |
| `typeset` | Typography decisions |
| `harden` | Edge cases and error states |
| `distill` | Simplify and reduce |
| + 14 more | See upstream README |

Also ships `npx impeccable` CLI for anti-pattern detection in CI/CD pipelines.

## What it does NOT do

- Backend, API, or data pipeline work
- Non-UI tasks (routing, auth, database)
- Works without PRODUCT.md context (it loads this file at startup — see upstream docs)
