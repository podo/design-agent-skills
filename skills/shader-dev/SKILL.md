---
name: shader-dev
description: |
  GLSL shader development: ray marching, fluid simulation, particle systems,
  and procedural generation. Official MiniMax skill for creating real-time
  visual effects in WebGL and creative coding contexts.
triggers:
  - "shader"
  - "GLSL"
  - "ray marching"
  - "fluid simulation"
  - "WebGL shader"
  - "procedural generation"
  - "visual effects"
das:
  category: creative-3d
  upstream: "https://github.com/MiniMax-AI/skills"
  upstream_path: "skills/shader-dev/SKILL.md"
  version: latest
  install: true
---

# shader-dev

> Catalogue stub — full skill: [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills/blob/main/skills/shader-dev/SKILL.md)

## Decision tree

Run this before any GLSL shader or WebGL visual effect work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/shader-dev/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `shader-dev` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/shader-dev && \
  curl -fsSL \
    https://raw.githubusercontent.com/MiniMax-AI/skills/main/skills/shader-dev/SKILL.md \
    -o ~/.claude/skills/shader-dev/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/shader-dev/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `shader-dev`
- Trigger phrases: "shader", "GLSL", "ray marching", "fluid simulation", "WebGL shader"

## What it does

Official MiniMax GLSL shader skill covering the full real-time graphics toolbox: ray marching for 3D SDFs, fluid dynamics simulation, particle systems, and procedural pattern generation. Produces working WebGL fragment/vertex shaders with correct uniforms, time-based animation, and noise functions.
