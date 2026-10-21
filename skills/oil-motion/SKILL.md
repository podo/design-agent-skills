---
name: oil-motion
description: |
  Turns AI-generated or existing video and image sequences into web animation that responds to scroll, pointer, drag, touch, device orientation, audio, data, or state. Designs the motion, produces keyframes and clips, packs sprite sheets or video, compiles a timeline, and wires up a runtime. Docs are in Chinese.
triggers:
  - "oil motion"
  - "scroll-driven video animation"
  - "sprite sequence web animation"
  - "pointer-driven video"
  - "scroll-scrubbed video"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/oil-oil/oil-motion"
  version: latest
---

# oil-motion

> Catalogue stub — full skill: [oil-oil/oil-motion](https://github.com/oil-oil/oil-motion)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/oil-motion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/oil-motion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/oil-motion ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add oil-oil/oil-motion --skill oil-motion -g -y
   ```

   **Project:**
   ```bash
   npx skills add oil-oil/oil-motion --skill oil-motion -y
   ```

## Invoke after install

- Skill name: `oil-motion`
- Trigger phrases: "oil motion", "scroll-driven video animation", "sprite sequence web animation", "pointer-driven video"

## What it does

Converts an interaction intent into verified animation assets, a timeline manifest, and a web runtime. AI generation handles semantic changes such as a character turning, a product exploding into parts, or a camera flying through a scene; deterministic code handles input mapping, playback control, media processing, and performance. It also cleans up, keys out, frame-interpolates, and compresses green-screen video and sprite sheets. Four single sources of truth (concept contract, motion brief, timeline, motion budget) keep the pipeline consistent. Needs Python 3.10+, Pillow, and `ffmpeg`; AI generation defaults to ZenMux and needs an API key, while local processing of existing media does not. Skill text is in Chinese.

## When NOT to use

- Transitions and micro-interactions achievable with plain CSS, JS, SVG, or Lottie → use `css-animation-skill`, `gsap-skills`, or `framer-motion-skills`
- Real-time 3D scenes → use `cloudai-threejs`
- Standalone video editing or composition → use `remotion` or `hyperframes`
