---
name: motion-design-skill
description: |
  Official LottieFiles motion design principles — timing curves, easing, choreography,
  Disney's 12 principles adapted for UI. Implementation-agnostic: works with CSS, GSAP,
  Framer Motion, Lottie, and spring-based animation.
triggers:
  - "motion design"
  - "animation principles"
  - "LottieFiles"
  - "Disney principles UI"
  - "timing curves"
das:
  type: package
  category: motion-animation
  upstream: "https://github.com/lottiefiles/motion-design-skill"
  upstream_path: "skills/motion-design/SKILL.md"
  version: latest
  install: false
---

# motion-design-skill

> Catalogue stub — full package: [lottiefiles/motion-design-skill](https://github.com/lottiefiles/motion-design-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `motion-design`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/motion-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/motion-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `motion-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/motion-design-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add LottieFiles/motion-design-skill --skill motion-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add LottieFiles/motion-design-skill --skill motion-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `motion-design`
- Trigger phrases: "motion design", "animation principles", "LottieFiles", "Disney principles UI", "timing curves"

## What it does

Official LottieFiles motion design principles skill. Covers timing curves, easing functions, animation choreography, and Disney's 12 classic animation principles adapted for UI contexts. Helps agents reason about when to animate, how to choose easing, how to sequence compound animations, and how to balance energy and weight in motion. The installed skill has a core quick reference plus deeper folders: philosophy (`director/`), ready-made patterns (entrance/exit, state feedback, ambient motion, choreography) and lookup tables (`reference/`). Implementation-agnostic — the guidance applies equally to CSS transitions, GSAP, Framer Motion, Lottie, or any other animation toolchain.

## When NOT to use

- GLSL/shader-level animation (use `shader-dev`)
- Specific framework implementation (use `gsap-skills` or `framer-motion-skills`)
