---
name: animate-skill
description: |
  Emil Kowalski-inspired animation patterns for Next.js/React with 8 working examples:
  hover effects, toast notifications, text reveals, and modals. Emphasises motion that
  feels inevitable and purposeful.
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

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `animate`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/animate/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/animate/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `animate`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/animate-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add delphi-ai/animate-skill --skill animate -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add delphi-ai/animate-skill --skill animate -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `animate`
- Trigger phrases: "animate", "hover animation", "toast animation", "text reveal", "animate-skill"

## What it does

Emil Kowalski-inspired animation patterns for Next.js and React. Ships 8 production-ready working examples: hover micro-interactions, toast notification entrance/exit animations, character and word text reveals, and modal transitions. Design philosophy centres on motion that feels inevitable and purposeful rather than decorative — every animation should serve a clear communicative function. Patterns use CSS transitions and spring physics favoured by the animations.dev aesthetic.

## When NOT to use

- Complex timeline orchestration with multiple sequenced steps (use `gsap-skills`)
- Video or Lottie output (use `wiggle-claude-skill`)
