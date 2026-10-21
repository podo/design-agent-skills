---
name: p5js-hermes
description: |
  Production pipeline for interactive and generative visual art using p5.js.
  Covers 2D/3D rendering, noise and particle systems, flow fields, GLSL shaders,
  pixel manipulation, kinetic typography, WebGL, and audio-reactive visuals.
  10 reference files from NousResearch's Hermes agent.
triggers:
  - "p5js"
  - "p5.js"
  - "generative art p5"
  - "creative coding p5"
  - "particle system p5"
  - "flow field p5"
  - "GLSL shader p5"
  - "audio reactive"
das:
  category: creative-3d
  upstream: "https://github.com/nousresearch/hermes-agent"
  upstream_path: "skills/creative/p5js/SKILL.md"
  version: latest
  install: true
---

# p5js-hermes

> Catalogue stub — full skill: [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent/blob/main/skills/creative/p5js/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `p5js`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/p5js/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/p5js/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `p5js`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/p5js-hermes ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add nousresearch/hermes-agent --skill p5js -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add nousresearch/hermes-agent --skill p5js -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `p5js`
- Trigger phrases: "p5.js", "p5js", "generative art p5", "flow field", "audio reactive"

## What it does

Full production pipeline for interactive and generative visual art in p5.js. Covers 2D/3D rendering with noise functions, particle systems, flow fields, GLSL shader integration, pixel array manipulation, kinetic typography, WebGL, and audio-reactive visuals. Backed by 10 reference files from NousResearch's Hermes agent — substantially deeper than the official algorithmic-art skill.
