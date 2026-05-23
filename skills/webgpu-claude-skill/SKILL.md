---
name: webgpu-claude-skill
description: |
  WebGPU-enabled Three.js skill covering TSL (Three.js Shading Language), node-based materials,
  GPU compute shaders, post-processing effects, and WGSL integration. Ships in dual format for
  Claude Code and Cursor, aligned with Three.js r183+.
triggers:
  - "WebGPU"
  - "TSL Three.js"
  - "GPU compute shaders"
  - "WGSL"
  - "webgpu-claude-skill"
das:
  category: creative-3d
  upstream: "https://github.com/dgreenheck/webgpu-claude-skill"
  version: latest
  install: false
---

# webgpu-claude-skill

> Catalogue stub — full package: [dgreenheck/webgpu-claude-skill](https://github.com/dgreenheck/webgpu-claude-skill)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/webgpu-claude-skill/SKILL.md` exists.
   - Yes → invoke `webgpu-claude-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add dgreenheck/webgpu-claude-skill
```

## Invoke after install

- Skill name: `webgpu-claude-skill`
- Trigger phrases: "WebGPU", "TSL Three.js", "GPU compute shaders", "WGSL"

## What it does

Provides deep knowledge of the WebGPU rendering pipeline within Three.js (r183+), including the Three.js Shading Language (TSL) for node-based material authoring, GPU compute shaders for non-rendering workloads, advanced post-processing with WebGPU passes, and WGSL shader integration. Ships in dual format compatible with both Claude Code and Cursor. Use when building high-performance 3D experiences that require GPU compute or next-generation shader authoring.

## When NOT to use

- Standard Three.js scenes without WebGPU — use cloudai-threejs instead
- GLSL shader work on WebGL — use a standard Three.js skill instead
- Architecture/BIM workflows — use threejs-claude-skill-package instead
