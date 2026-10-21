---
name: emilkowalski-skill
description: |
  Emil Kowalski's design engineering skills. Creator of Sonner, Vaul, and
  animations.dev. Covers the animation decision framework, custom
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 15 skills (`emil-design-eng`, `animate`, `animate-expo`, `animation-performance`, `animation-vocabulary`, `apple-design`, `ask-sonner`, `break-ui`, `find-animation-opportunities`, `improve-animations`, `mobile-native`, `pick-ui-library`, `prototype`, `review-animations`, `write-swift`); checking the first.
   - Global: `f=~/.agents/skills/emil-design-eng/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/emil-design-eng/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `emil-design-eng`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/emilkowalski-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add emilkowalski/skills --skill emil-design-eng animate animate-expo animation-performance animation-vocabulary apple-design ask-sonner break-ui find-animation-opportunities improve-animations mobile-native pick-ui-library prototype review-animations write-swift -g -y
   ```

   **Project:**
   ```bash
   npx skills add emilkowalski/skills --skill emil-design-eng animate animate-expo animation-performance animation-vocabulary apple-design ask-sonner break-ui find-animation-opportunities improve-animations mobile-native pick-ui-library prototype review-animations write-swift -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `animate` is also written by `animate-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `prototype` is also written by `design-for-ai` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

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

Emil Kowalski's complete design engineering methodology — animation decision framework (4 steps: should it animate? purpose? easing? duration?), required custom CSS easing curves, component interaction principles (button scale on `:active`, `scale(0.95)` entry animations, origin-aware transforms), CSS transitions over keyframes for interruptibility, and strict typography rules (65ch cap, tabular-nums, `…` not `...`). The wider package adds review and audit skills for existing motion code, performance guidance, and mobile and native-feel techniques. Used by the creator of Sonner, Vaul, and animations.dev. For only the core skill, run `npx skills add emilkowalski/skills --skill emil-design-eng` instead of the full command above.

## When NOT to use

- Backend, APIs, data work
- When motion is already well-handled
