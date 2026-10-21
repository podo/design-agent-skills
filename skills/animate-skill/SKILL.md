---
name: animate-skill
description: |
  Emil Kowalski-inspired animation patterns for Next.js/React: easing and timing rules,
  CSS transitions and Framer Motion recipes, with working examples for hover effects,
  toast notifications, text reveals, and modals. Emphasises motion that feels inevitable
  and purposeful.
triggers:
  - "animate"
  - "hover animation"
  - "toast animation"
  - "text reveal"
  - "animate-skill"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/delphi-ai/animate-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# animate-skill

> Catalogue stub — full skill: [delphi-ai/animate-skill](https://github.com/delphi-ai/animate-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `animate`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/animate/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/animate/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `animate`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/animate-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add delphi-ai/animate-skill --skill animate -g -y
   ```

   **Project:**
   ```bash
   npx skills add delphi-ai/animate-skill --skill animate -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file
- **Name collision:** `animate` is also written by `emilkowalski-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `animate`
- Trigger phrases: "animate", "hover animation", "toast animation", "text reveal", "animate-skill"

## What it does

Emil Kowalski-inspired animation patterns for Next.js and React, based on his "Animations on the Web" course. Ships an easing and duration cheat sheet, reference notes (CSS animations, Framer Motion, easing and timing, performance and accessibility) and working `.tsx` examples: hover micro-interactions, toast stacking, text reveals, shared-layout tab indicators, animated height and modal transitions. Design philosophy centres on motion that feels inevitable and purposeful rather than decorative: every animation should serve a clear communicative function.

## When NOT to use

- Complex timeline orchestration with multiple sequenced steps (use `gsap-skills`)
- Video or Lottie output (use `wiggle-claude-skill`)
