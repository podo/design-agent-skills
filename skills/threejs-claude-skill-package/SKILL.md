---
name: threejs-claude-skill-package
description: |
  24 deterministic Three.js skills covering WebGL, WebGPU, React Three Fiber, Drei, physics,
  and IFC (architecture/BIM workflows). Built by the Open AEC Foundation for architecture
  and engineering workflows on top of 3D web rendering.
triggers:
  - "OpenAEC"
  - "Three.js BIM"
  - "IFC Three.js"
  - "React Three Fiber skills"
  - "threejs-claude-skill-package"
das:
  category: creative-3d
  upstream: "https://github.com/OpenAEC-Foundation/Three.js-Claude-Skill-Package"
  version: latest
  install: false
---

# threejs-claude-skill-package

> Catalogue stub — full package: [OpenAEC-Foundation/Three.js-Claude-Skill-Package](https://github.com/OpenAEC-Foundation/Three.js-Claude-Skill-Package)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.claude/skills/threejs-claude-skill-package/SKILL.md` exists.
   - Yes → invoke the relevant skill and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add OpenAEC-Foundation/Three.js-Claude-Skill-Package
```

## Invoke after install

- Skill name: `threejs-claude-skill-package`
- Trigger phrases: "OpenAEC", "Three.js BIM", "IFC Three.js", "React Three Fiber skills"

## What it does

Provides 24 deterministic Three.js skill modules maintained by the Open AEC (Architecture, Engineering, Construction) Foundation. Covers the full modern Three.js ecosystem: core WebGL, WebGPU renderer, React Three Fiber with Drei helpers, physics integration, and IFC file loading for BIM/architecture workflows. Each skill is scoped and deterministic — specify the exact domain and the right skill activates.

## When NOT to use

- Non-architectural general 3D — use cloudai-threejs instead
- WebGPU-only shader work — use webgpu-claude-skill instead
- ECS game architecture — use threejs-ecs-ts instead
