---
name: emilkowalski-skill
description: |
  Emil Kowalski's entire design engineering philosophy as a skill. Creator of Sonner
  (13M+ weekly npm downloads), Vaul, and animations.dev. Covers animation decision
  framework, custom easing curves, component interaction principles, and typography rules.
triggers:
  - "Emil Kowalski"
  - "design engineering"
  - "animation decision"
  - "easing curves"
  - "emil-design-eng"
das:
  category: design-engineering
  upstream: "https://github.com/emilkowalski/skill"
  version: latest
  install: false
---

# emilkowalski-skill

> Catalogue stub — full package: [emilkowalski/skill](https://github.com/emilkowalski/skill)

## Decision tree

Run this before any animation or design engineering work:

1. **Is the skill already installed?**
   Check: `~/.design-agent-skills/skills/emil-design-eng/SKILL.md` exists.
   - Yes → invoke `emil-design-eng` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add emilkowalski/skill --skill emil-design-eng
```

Or for all skills in the package:
```bash
npx skills add emilkowalski/skill
```

## Invoke after install

- Skill name: `emil-design-eng`
- Trigger phrases: "Emil Kowalski", "design engineering", "animation decision", "easing curves"

## What it does

Emil Kowalski's complete design engineering methodology — animation decision framework (4 steps: should it animate? purpose? easing? duration?), required custom CSS easing curves, component interaction principles (button scale on `:active`, `scale(0.95)` entry animations, origin-aware transforms), CSS transitions over keyframes for interruptibility, and strict typography rules (65ch cap, tabular-nums, `…` not `...`). Used by the creator of Sonner, Vaul, and animations.dev.

## When NOT to use

- Backend, APIs, data work
- When motion is already well-handled
