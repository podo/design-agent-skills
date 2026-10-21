---
name: emilkowalski-skill
description: |
  Emil Kowalski's design engineering skills. Creator of Sonner (13M+ weekly npm
  downloads), Vaul, and animations.dev. Covers the animation decision framework, custom
  easing curves, component interaction principles, and typography rules, plus skills to
  review, audit, and improve motion, performance, and native-feeling mobile web UI.
triggers:
  - "Emil Kowalski"
  - "design engineering"
  - "animation decision"
  - "easing curves"
  - "emil-design-eng"
das:
  category: design-engineering
  upstream: "https://github.com/emilkowalski/skills"
  version: latest
  install: false
---

# emilkowalski-skill

> Catalogue stub — full package: [emilkowalski/skills](https://github.com/emilkowalski/skills)

## Decision tree

Run this before any animation or design engineering work:

1. **Is the skill already installed?**
   Check: `~/.agents/skills/emil-design-eng/SKILL.md` (global) or `.agents/skills/emil-design-eng/SKILL.md` (project) exists.
   - Yes → invoke `emil-design-eng` (or the more specific skill below) and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
# Just the core design engineering skill
npx skills add emilkowalski/skills --skill emil-design-eng -y

# Or every skill in the package
npx skills add emilkowalski/skills -y
```

Add `-g` to either command for a global install.

## Invoke after install

- `emil-design-eng` — "Emil Kowalski", "design engineering", "animation decision", "easing curves"
- `animate` — build an animation from scratch, decisions in the right order
- `review-animations` — review animation code against a high craft bar
- `improve-animations` / `find-animation-opportunities` — read-only audits that propose motion with exact values
- `animation-performance` — keep web animations inside the frame budget
- `animation-vocabulary` — turn a vague description of an effect into its exact term
- `apple-design` — Apple-style fluid, physical, gesture-driven motion for the web
- `animate-expo` — React Native and Expo animation
- `mobile-native` — make a web app feel native on a phone
- `break-ui` — stress UI with worst-case data
- `prototype` — several genuinely different versions behind a visual picker
- `pick-ui-library` — opinionated library choices for common frontend tasks
- `ask-sonner` — the Sonner toast library
- `write-swift` — modern Swift, concurrency, and testing

## What it does

Emil Kowalski's complete design engineering methodology — animation decision framework (4 steps: should it animate? purpose? easing? duration?), required custom CSS easing curves, component interaction principles (button scale on `:active`, `scale(0.95)` entry animations, origin-aware transforms), CSS transitions over keyframes for interruptibility, and strict typography rules (65ch cap, tabular-nums, `…` not `...`). The wider package adds review and audit skills for existing motion code, performance guidance, and mobile and native-feel techniques. Used by the creator of Sonner, Vaul, and animations.dev.

## When NOT to use

- Backend, APIs, data work
- When motion is already well-handled
