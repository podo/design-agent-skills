---
name: animate-css-skill
description: |
  Adds Animate.css (v4.1.1) animations to HTML, React/JSX, and WordPress PHP templates.
  Includes scroll-trigger via Intersection Observer, RTL directional flipping, and
  prefers-reduced-motion compliance. Bundles the Animate.css library, so no CDN is needed.
triggers:
  - "Animate.css"
  - "CSS animation library"
  - "bounce animation"
  - "fadeIn"
  - "animate-css"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/msrbuilds/animate-css-skill"
  upstream_path: "animate-css-skill/SKILL.md"
  version: latest
  install: true
---

# animate-css-skill

> Catalogue stub — full skill: [msrbuilds/animate-css-skill](https://github.com/msrbuilds/animate-css-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `animate-css`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/animate-css/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/animate-css/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `animate-css`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/animate-css-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add msrbuilds/animate-css-skill --skill animate-css -g -y
   ```

   **Project:**
   ```bash
   npx skills add msrbuilds/animate-css-skill --skill animate-css -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `animate-css`
- Trigger phrases: "Animate.css", "CSS animation library", "bounce animation", "fadeIn", "animate-css"

## What it does

Applies Animate.css v4.1.1 animations across HTML, React/JSX components, and WordPress PHP templates. Covers the full Animate.css class catalogue (attention seekers, bouncing, fading, flipping, rotating, sliding, zooming, specials) and extracts only the keyframes you need from the bundled `assets/animate.min.css`. Adds scroll-triggered reveals using the Intersection Observer API, RTL-aware directional flipping for right-to-left layouts, and `prefers-reduced-motion` compliance to respect user accessibility preferences.

## When NOT to use

- Custom keyframe animations built from scratch (use `css-animation-skill`)
- Interactive gesture-driven animations requiring JavaScript state (use `framer-motion-skills`)
