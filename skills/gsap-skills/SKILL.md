---
name: gsap-skills
description: |
  Official GSAP skills suite with 8 focused skills: core GSAP, Timeline, ScrollTrigger,
  plugins (Flip/Draggable/SplitText), utils, React (useGSAP hook), performance (60fps),
  and frameworks (Vue/Svelte/Nuxt). Works across Cursor, Claude Code, Copilot.
triggers:
  - "GSAP"
  - "GreenSock"
  - "ScrollTrigger"
  - "GSAP timeline"
  - "useGSAP"
das:
  type: package
  category: motion-animation
  upstream: "https://github.com/greensock/gsap-skills"
  version: latest
  install: false
---

# gsap-skills

> Catalogue stub — full package: [greensock/gsap-skills](https://github.com/greensock/gsap-skills)

## Decision tree

1. **Is the package already installed?**
   Check: your agent's skills directory contains `gsap-skills` with content beyond this stub.
   - Yes → invoke `gsap-skills` and proceed
   - No → go to step 2

2. **Which agent are you on?**
   - Claude Code → `npx skills add https://github.com/greensock/gsap-skills`
   - Cursor → `npx skills add https://github.com/greensock/gsap-skills`
   - Other → `npx skills add https://github.com/greensock/gsap-skills` or see [GitHub README](https://github.com/greensock/gsap-skills)

## Install command

```bash
npx skills add https://github.com/greensock/gsap-skills
```

## Invoke after install

- Skill name: `gsap-skills`
- Trigger phrases: "GSAP", "GreenSock", "ScrollTrigger", "GSAP timeline", "useGSAP"

## What it does

Official GreenSock GSAP skills suite comprising 8 focused skills: core GSAP tweening, Timeline orchestration, ScrollTrigger (scroll-linked and scroll-triggered animations), plugin-specific skills for Flip, Draggable, and SplitText, a utilities skill, a React skill covering the `useGSAP` hook and cleanup patterns, a performance skill targeting 60fps GPU-accelerated motion, and a frameworks skill covering Vue, Svelte, and Nuxt integration. Works across Cursor, Claude Code, and GitHub Copilot.

## When NOT to use

- Pure CSS animations without JavaScript (use `animate-css-skill`)
- Framer Motion projects in React (use `framer-motion-skills`)
