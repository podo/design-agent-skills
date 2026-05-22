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

Run this before any p5.js creative coding work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/p5js-hermes/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `p5js-hermes` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/p5js-hermes && \
  curl -fsSL \
    https://raw.githubusercontent.com/nousresearch/hermes-agent/main/skills/creative/p5js/SKILL.md \
    -o ~/.design-agent-skills/skills/p5js-hermes/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/p5js-hermes/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `p5js-hermes`
- Trigger phrases: "p5.js", "p5js", "generative art p5", "flow field", "audio reactive"

## What it does

Full production pipeline for interactive and generative visual art in p5.js. Covers 2D/3D rendering with noise functions, particle systems, flow fields, GLSL shader integration, pixel array manipulation, kinetic typography, WebGL, and audio-reactive visuals. Backed by 10 reference files from NousResearch's Hermes agent — substantially deeper than the official algorithmic-art skill.
