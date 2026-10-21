---
name: threejs-claude-skill-package
description: |
  Deterministic Three.js skills covering the core scene graph, renderer, geometries,
  materials, shaders, WebGPU, React Three Fiber, Drei, physics, XR, error diagnosis,
  and IFC viewing (architecture/BIM workflows). Built by the Open AEC Foundation for
  architecture and engineering workflows on top of 3D web rendering.
triggers:
  - "OpenAEC"
  - "Three.js BIM"
  - "IFC Three.js"
  - "React Three Fiber skills"
  - "threejs-claude-skill-package"
das:
  category: creative-3d
  upstream: "https://github.com/Impertio-Studio/Three.js-Claude-Skill-Package"
  version: latest
  install: false
---

# threejs-claude-skill-package

> Catalogue stub — full package: [Impertio-Studio/Three.js-Claude-Skill-Package](https://github.com/Impertio-Studio/Three.js-Claude-Skill-Package) (formerly OpenAEC-Foundation)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 24 skills (`threejs-agents-model-optimizer`, `threejs-agents-scene-builder`, `threejs-core-math`, `threejs-core-raycaster`, `threejs-core-renderer`, `threejs-core-scene-graph`, `threejs-errors-performance`, `threejs-errors-rendering`, `threejs-impl-animation`, `threejs-impl-audio`, `threejs-impl-drei`, `threejs-impl-ifc-viewer`, `threejs-impl-lighting`, `threejs-impl-physics`, `threejs-impl-post-processing`, `threejs-impl-react-three-fiber`, `threejs-impl-shadows`, `threejs-impl-webgpu`, `threejs-impl-xr`, `threejs-syntax-controls`, `threejs-syntax-geometries`, `threejs-syntax-loaders`, `threejs-syntax-materials`, `threejs-syntax-shaders`); checking the first.
   - Global: `f=~/.agents/skills/threejs-agents-model-optimizer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/threejs-agents-model-optimizer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `threejs-agents-model-optimizer`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/threejs-claude-skill-package ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Impertio-Studio/Three.js-Claude-Skill-Package -g -y
   ```

   **Project:**
   ```bash
   npx skills add Impertio-Studio/Three.js-Claude-Skill-Package -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

The package installs one skill per topic; there is no single skill named after the package. Each skill activates from the task, so name the domain:

- `threejs-core-*` — scene graph, renderer, math, raycaster
- `threejs-syntax-*` — geometries, materials, shaders, loaders, controls
- `threejs-impl-*` — animation, audio, lighting, shadows, post-processing, WebGPU, XR, physics, React Three Fiber, Drei, IFC viewer
- `threejs-errors-*` — rendering and performance problem diagnosis
- `threejs-agents-*` — scene-builder and model-optimizer workflows

## What it does

Provides deterministic Three.js skill modules maintained by the Open AEC (Architecture, Engineering, Construction) Foundation. Covers the modern Three.js ecosystem: core WebGL, WebGPU renderer, React Three Fiber with Drei helpers, physics integration, XR, and IFC file loading for BIM/architecture workflows. Each skill is scoped and written in ALWAYS/NEVER language — specify the exact domain and the right skill activates.

## When NOT to use

- Non-architectural general 3D — use `cloudai-threejs` instead
- WebGPU-only shader work — use `webgpu-claude-skill` instead
- ECS game architecture — use `threejs-ecs-ts` instead
