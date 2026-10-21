---
name: wiggle-claude-skill
description: |
  Animates static logo images (PNG, SVG, JPG) into Lottie JSON, then renders them as animated
  GIFs and MP4s, with perfect-loop validation. Specialised for logo animation workflows.
triggers:
  - "logo animation"
  - "wiggle"
  - "SVG to Lottie"
  - "animated GIF"
  - "wiggle-claude-skill"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/talknerdytome-labs/wiggle-claude-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wiggle-claude-skill

> Catalogue stub — full skill: [talknerdytome-labs/wiggle-claude-skill](https://github.com/talknerdytome-labs/wiggle-claude-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wiggle`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/wiggle/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wiggle/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wiggle`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wiggle-claude-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add talknerdytome-labs/wiggle-claude-skill --skill wiggle -g -y
   ```

   **Project:**
   ```bash
   npx skills add talknerdytome-labs/wiggle-claude-skill --skill wiggle -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python 3 with `pip install lottie[all] Pillow pycairo`, plus the Cairo system library (`brew install cairo pkg-config`, or `apt-get install libcairo2-dev pkg-config python3-dev`)
- **License:** Apache-2.0 (LICENSE.txt; GitHub shows NOASSERTION)
<!-- das:install:end -->

## Invoke after install

- Skill name: `wiggle`
- Trigger phrases: "logo animation", "wiggle", "SVG to Lottie", "animated GIF", "wiggle-claude-skill"

## What it does

Specialised logo animation workflow: takes a static logo image (PNG, SVG or JPG) as input, builds an animation in Lottie JSON using motion-design presets, then renders the Lottie as an animated GIF and an MP4 video file, validating that the loop is seamless. Designed for brand logo animation where you need exportable motion assets rather than in-browser animation. The skill ships Python scripts and needs Cairo for GIF rendering.

## When NOT to use

- Complex multi-layer animations beyond logo scope (use `gsap-skills` or `framer-motion-skills`)
- In-browser or React component animation (the output here is standalone Lottie, GIF and MP4 files)
