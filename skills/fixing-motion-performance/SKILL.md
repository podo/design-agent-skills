---
name: fixing-motion-performance
description: |
  Audits and fixes animation performance issues including layout thrashing,
  compositor properties, scroll-linked motion, and blur effects. Guides
  developers to smooth, GPU-accelerated animations that avoid jank.
triggers:
  - "motion performance"
  - "animation performance"
  - "layout thrashing"
  - "compositor properties"
das:
  category: motion-animation
  upstream: "https://github.com/ibelick/ui-skills"
  upstream_path: "skills/fixing-motion-performance/SKILL.md"
  version: latest
  install: true
---

# fixing-motion-performance

> Catalogue stub — full skill: [ibelick/ui-skills](https://github.com/ibelick/ui-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/fixing-motion-performance/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/fixing-motion-performance/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `fixing-motion-performance`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/fixing-motion-performance ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ibelick/ui-skills --skill fixing-motion-performance -g -y
   ```

   **Project:**
   ```bash
   npx skills add ibelick/ui-skills --skill fixing-motion-performance -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `fixing-motion-performance`
- Trigger phrases: "motion performance", "animation performance", "layout thrashing", "compositor properties"

## What it does

Audits animations for layout thrashing, incorrect compositor property usage, scroll-linked motion anti-patterns, and expensive blur effects. Provides concrete fixes to move animations onto the GPU and eliminate frame drops for smooth, production-grade motion.

## When NOT to use

- Choosing easing, timing, or motion design principles (not performance) → use `design-motion-principles`
- Library-specific GSAP work (ScrollTrigger, timelines, `useGSAP`) → use `gsap-skills`
