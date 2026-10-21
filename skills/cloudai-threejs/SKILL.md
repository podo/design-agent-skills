---
name: cloudai-threejs
description: |
  Three.js skills for creating interactive 3D elements and experiences on the web.
  Covers scene setup, geometries, materials, lighting, textures, animation, loaders,
  custom shaders, post-processing, interaction, performance, and React Three Fiber,
  with WebGL and WebGPU/TSL guidance for a current three.js release.
triggers:
  - "Three.js"
  - "threejs"
  - "3D web"
  - "WebGL 3D"
  - "3D scene"
  - "3D animation"
das:
  category: creative-3d
  upstream: "https://github.com/CloudAI-X/threejs-skills"
  version: latest
  install: false
---

# cloudai-threejs

> Catalogue stub — full package: [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 13 skills (`threejs-fundamentals`, `threejs-geometry`, `threejs-materials`, `threejs-lighting`, `threejs-textures`, `threejs-animation`, `threejs-loaders`, `threejs-shaders`, `threejs-postprocessing`, `threejs-interaction`, `threejs-performance`, `threejs-asset-pipeline`, `threejs-react-three-fiber`); checking the first.
   - Global: `f=~/.agents/skills/threejs-fundamentals/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/threejs-fundamentals/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `threejs-fundamentals`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/cloudai-threejs ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add CloudAI-X/threejs-skills --skill threejs-fundamentals threejs-geometry threejs-materials threejs-lighting threejs-textures threejs-animation threejs-loaders threejs-shaders threejs-postprocessing threejs-interaction threejs-performance threejs-asset-pipeline threejs-react-three-fiber -g -y
   ```

   **Project:**
   ```bash
   npx skills add CloudAI-X/threejs-skills --skill threejs-fundamentals threejs-geometry threejs-materials threejs-lighting threejs-textures threejs-animation threejs-loaders threejs-shaders threejs-postprocessing threejs-interaction threejs-performance threejs-asset-pipeline threejs-react-three-fiber -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

There is no single `threejs` skill; the package installs one skill per topic and the agent picks the relevant one from the task:

- `threejs-fundamentals` — scene, cameras, renderer, animation loop, transforms
- `threejs-geometry`, `threejs-materials`, `threejs-lighting`, `threejs-textures` — building and shading scene content
- `threejs-animation`, `threejs-interaction` — keyframes, skeletal animation, raycasting, controls
- `threejs-loaders`, `threejs-asset-pipeline` — glTF and texture loading, asset optimisation
- `threejs-shaders`, `threejs-postprocessing` — GLSL, TSL nodes, effects chains
- `threejs-performance` — draw calls, instancing, memory
- `threejs-react-three-fiber` — three.js from React with R3F and drei

## What it does

Three.js skill suite for building interactive 3D elements and experiences on the web. Gives the agent current, release-pinned three.js knowledge (including the WebGPU and TSL paths) together with Common Mistakes lists of outdated patterns that models still reach for. Use for product visualizations, interactive backgrounds, and immersive web experiences.

## When NOT to use

- Architecture, engineering and BIM/IFC work in three.js — use `threejs-claude-skill-package`
- WebGPU-only shader work — use `webgpu-claude-skill`
- Non-web 3D (engines, DCC tools) — not covered
