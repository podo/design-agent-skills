---
name: framer-motion-skills
description: |
  Dedicated Framer Motion skills for React: React and Next.js integration,
  variants and orchestration, scroll animations, gestures (drag/tap/hover), and
  layout/shared transitions. Community-published, not by the Motion team.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 5 skills (`framer-motion-gestures`, `framer-motion-layout`, `framer-motion-react`, `framer-motion-scroll`, `framer-motion-variants`); checking the first.
   - Global: `f=~/.agents/skills/framer-motion-gestures/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/framer-motion-gestures/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `framer-motion-gestures`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/framer-motion-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add C-Jeril/framer-motion-skills --skill framer-motion-gestures framer-motion-layout framer-motion-react framer-motion-scroll framer-motion-variants -g -y
   ```

   **Project:**
   ```bash
   npx skills add C-Jeril/framer-motion-skills --skill framer-motion-gestures framer-motion-layout framer-motion-react framer-motion-scroll framer-motion-variants -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Each skill installs under its own name; the agent picks the right one from the request.

- `framer-motion-react` — "AnimatePresence", "Framer Motion with Next.js", "SSR"
- `framer-motion-variants` — "variants", "stagger", "orchestrated animation"
- `framer-motion-scroll` — "useScroll", "parallax", "scroll-linked animation"
- `framer-motion-gestures` — "drag", "tap", "hover gesture"
- `framer-motion-layout` — "layoutId", "shared element transition", "reorderable list"

## What it does

Separate Framer Motion skills, each covering one slice of the library: React and Next.js integration (`AnimatePresence`, `useAnimation`, SSR), variants and animation orchestration (state machines, stagger, sequencing), scroll-linked and scroll-triggered animation (`useScroll`, `useTransform`, parallax), gesture-driven interaction (drag, pan, tap, hover, focus), and layout animations with shared element transitions (`layoutId`).

The upstream repo also lists a sixth skill for the core API (`framer-motion-core`), but its SKILL.md has a YAML error, so the skills CLI cannot install it today and this pointer leaves it out. For the animation library maintained by the Motion team itself, see the `motion` pointer.

## When NOT to use

- The official Motion skill (docs search, CSS springs, performance audits, upgrade guides) → use `motion`
- GSAP-specific projects or complex timeline orchestration → use `gsap-skills`
- Vanilla CSS animation without a React framework → use `animate-css-skill`
