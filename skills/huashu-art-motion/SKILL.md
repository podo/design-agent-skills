---
name: huashu-art-motion
description: |
  Art and explainer video animation driven by code. Storyboard-first pipeline with many implemented art styles, reusable explainer-animation grammars that render from voice-over parameters, QA gates, and a delivery check. Docs are in Chinese.
triggers:
  - "huashu art motion"
  - "art style animation"
  - "explainer animation grammar"
  - "storyboard to animation video"
  - "recreate an animation in code"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/alchaincyf/huashu-art-motion"
  version: latest
---

# huashu-art-motion

> Catalogue stub — full skill: [alchaincyf/huashu-art-motion](https://github.com/alchaincyf/huashu-art-motion)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/huashu-art-motion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/huashu-art-motion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/huashu-art-motion ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add alchaincyf/huashu-art-motion --skill huashu-art-motion -g -y
   ```

   **Project:**
   ```bash
   npx skills add alchaincyf/huashu-art-motion --skill huashu-art-motion -y
   ```

## Invoke after install

- Skill name: `huashu-art-motion`
- Trigger phrases: "huashu art motion", "art style animation", "explainer animation grammar", "storyboard to animation video"

## What it does

Turns the agent into director, storyboarder, animator, and editor, with code as the paintbrush. The pipeline writes a shot list first (one visual style per film, a colour palette, shot-by-shot nouns and verbs), lints it, renders each shot as a video clip, concatenates, runs frame QA, and only delivers on a green check. It ships a library of implemented art styles and transferable style recipes, plus explainer-animation grammars that can render clips from voice-over parameters. AI-generated frames, existing recordings, and voice cloning are optional. Needs `uv`, Playwright, and `ffmpeg` locally; the skill text and references are written in Chinese.

## When NOT to use

- Magazine-grade typography and animated design prototypes → use `huashu-design`
- HTML-to-video rendering of existing web compositions → use `hyperframes` or `remotion`
- Interface micro-interactions and UI motion → use `design-motion-principles` or `emilkowalski-skill`
