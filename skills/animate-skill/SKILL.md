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
   Check: `~/.design-agent-skills/skills/animate-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `animate-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/animate-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/delphi-ai/animate-skill/main/SKILL.md \
    -o ~/.design-agent-skills/skills/animate-skill/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/animate-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `animate-skill`
- Trigger phrases: "animate", "hover animation", "toast animation", "text reveal", "animate-skill"

## What it does

Emil Kowalski-inspired animation patterns for Next.js and React. Ships 8 production-ready working examples: hover micro-interactions, toast notification entrance/exit animations, character and word text reveals, and modal transitions. Design philosophy centres on motion that feels inevitable and purposeful rather than decorative — every animation should serve a clear communicative function. Patterns use CSS transitions and spring physics favoured by the animations.dev aesthetic.

## When NOT to use

- Complex timeline orchestration with multiple sequenced steps (use `gsap-skills`)
- Video or Lottie output (use `wiggle-claude-skill`)
