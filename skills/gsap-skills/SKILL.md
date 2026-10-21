---
name: gsap-skills
description: |
  Official GSAP skills from GreenSock: core GSAP, Timeline, ScrollTrigger,
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-react`, `gsap-performance`, `gsap-frameworks`); checking the first.
   - Global: `f=~/.agents/skills/gsap-core/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/gsap-core/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `gsap-core`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/gsap-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add greensock/gsap-skills --skill gsap-core gsap-timeline gsap-scrolltrigger gsap-plugins gsap-utils gsap-react gsap-performance gsap-frameworks -g -y
   ```

   **Project:**
   ```bash
   npx skills add greensock/gsap-skills --skill gsap-core gsap-timeline gsap-scrolltrigger gsap-plugins gsap-utils gsap-react gsap-performance gsap-frameworks -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add greensock/gsap-skills
/plugin install gsap-skills@gsap-skills
```

**Heads-up**

- **License:** MIT
- **Name collision:** `gsap-scrolltrigger` is also written by `claudedesignskills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-react`, `gsap-performance`, `gsap-frameworks` (start with `gsap-core`, then `gsap-timeline` and `gsap-scrolltrigger`)
- Trigger phrases: "GSAP", "GreenSock", "ScrollTrigger", "GSAP timeline", "useGSAP"

## What it does

Official GreenSock GSAP skills split by topic: core tweening (`gsap-core`), Timeline orchestration (`gsap-timeline`), ScrollTrigger for scroll-linked and scroll-triggered animation (`gsap-scrolltrigger`), plugin-specific guidance for Flip, Draggable, SplitText and more (`gsap-plugins`), a utilities skill (`gsap-utils`), React with the `useGSAP` hook and cleanup patterns (`gsap-react`), performance for 60fps GPU-accelerated motion (`gsap-performance`), and Vue, Svelte, and Nuxt integration (`gsap-frameworks`). GSAP and all of its plugins are free, including for commercial use. Works across Cursor, Claude Code, and GitHub Copilot.

## When NOT to use

- Pure CSS animations without JavaScript → use `animate-css-skill`
- Framer Motion projects in React → use `framer-motion-skills`
