---
name: shader-dev
description: |
  GLSL shader development: ray marching, SDF modeling, fluid simulation,
  particle systems, procedural generation, lighting, and post-processing.
  Official MiniMax skill for creating real-time visual effects in WebGL and
  creative coding contexts (ShaderToy-compatible techniques).
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/shader-dev/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/shader-dev/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `shader-dev`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/shader-dev ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add MiniMax-AI/skills --skill shader-dev -g -y
   ```

   **Project:**
   ```bash
   npx skills add MiniMax-AI/skills --skill shader-dev -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `shader-dev`
- Trigger phrases: "shader", "GLSL", "ray marching", "fluid simulation", "WebGL shader"

## What it does

Official MiniMax GLSL shader skill: one skill with a library of ShaderToy-compatible techniques and references covering ray marching and SDF modeling for 3D, fluid dynamics simulation, particle systems, procedural pattern generation, lighting, and post-processing. Produces working WebGL fragment/vertex shaders with correct uniforms, time-based animation, and noise functions.

## When NOT to use

- Three.js scenes, WebGPU, or TSL node materials → use `cloudai-threejs`, `threejs-claude-skill-package`, or `webgpu-claude-skill`
- Generative art with p5.js → use `p5js-hermes` or `algorithmic-art`
