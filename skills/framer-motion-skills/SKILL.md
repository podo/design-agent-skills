---
name: framer-motion-skills
description: |
  Six dedicated Framer Motion skills: core animation, React/Next.js integration,
  variants and orchestration, scroll animations, gestures (drag/tap/hover), and
  layout/shared transitions.
triggers:
  - "Framer Motion"
  - "framer animation"
  - "layout animation"
  - "shared transitions"
  - "motion variants"
das:
  type: package
  category: motion-animation
  upstream: "https://github.com/C-Jeril/framer-motion-skills"
  version: latest
  install: false
---

# framer-motion-skills

> Catalogue stub — full package: [C-Jeril/framer-motion-skills](https://github.com/C-Jeril/framer-motion-skills)

## Decision tree

1. **Is the package already installed?**
   Check: your agent's skills directory contains `framer-motion-skills` with content beyond this stub.
   - Yes → invoke `framer-motion-skills` and proceed
   - No → go to step 2

2. **Which agent are you on?**
   - Claude Code → `npx skills add C-Jeril/framer-motion-skills` — or send `! npx skills add … -g` as a chat message to install without leaving the conversation
   - Cursor → `npx skills add C-Jeril/framer-motion-skills`
   - Other → `npx skills add C-Jeril/framer-motion-skills` or see [GitHub README](https://github.com/C-Jeril/framer-motion-skills)

## Install command

```bash
npx skills add C-Jeril/framer-motion-skills
```

## Invoke after install

- Skill name: `framer-motion-skills`
- Trigger phrases: "Framer Motion", "framer animation", "layout animation", "shared transitions", "motion variants"

## What it does

Six dedicated Framer Motion skills covering the full library surface: core animation primitives (`motion` components, `animate`, `initial`, `exit`), React and Next.js integration patterns, variants and animation orchestration (`staggerChildren`, `delayChildren`, `when`), scroll-linked and scroll-triggered animations (`useScroll`, `useTransform`), gesture-driven interactions (drag, tap, hover, `whileDrag`/`whileHover`/`whileTap`), and layout animations with shared element transitions (`layoutId`).

## When NOT to use

- GSAP-specific projects or complex timeline orchestration (use `gsap-skills`)
- Vanilla CSS animation without a React framework (use `animate-css-skill`)
