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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/shader-dev/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/shader-dev/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/shader-dev ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add MiniMax-AI/skills --skill shader-dev -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add MiniMax-AI/skills --skill shader-dev -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `shader-dev`
- Trigger phrases: "shader", "GLSL", "ray marching", "fluid simulation", "WebGL shader"

## What it does

Official MiniMax GLSL shader skill covering the full real-time graphics toolbox: ray marching for 3D SDFs, fluid dynamics simulation, particle systems, and procedural pattern generation. Produces working WebGL fragment/vertex shaders with correct uniforms, time-based animation, and noise functions.
