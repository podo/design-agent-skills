---
name: webgpu-claude-skill
description: |
  WebGPU-enabled Three.js skill covering TSL (Three.js Shading Language), node-based materials,
  GPU compute shaders, post-processing effects, and WGSL integration. Aligned with Three.js r183+.
triggers:
  - "WebGPU"
  - "TSL Three.js"
  - "GPU compute shaders"
  - "WGSL"
  - "webgpu-claude-skill"
das:
  type: skill
  category: creative-3d
  upstream: "https://github.com/dgreenheck/webgpu-claude-skill"
  upstream_path: "skills/webgpu-threejs-tsl/SKILL.md"
  version: latest
  install: false
---

# webgpu-claude-skill

> Catalogue stub — full skill: [dgreenheck/webgpu-claude-skill](https://github.com/dgreenheck/webgpu-claude-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `webgpu-threejs-tsl`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/webgpu-threejs-tsl/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/webgpu-threejs-tsl/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `webgpu-threejs-tsl`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/webgpu-claude-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add dgreenheck/webgpu-claude-skill --skill webgpu-threejs-tsl -g -y
   ```

   **Project:**
   ```bash
   npx skills add dgreenheck/webgpu-claude-skill --skill webgpu-threejs-tsl -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add dgreenheck/webgpu-claude-skill
/plugin install webgpu-threejs-tsl@webgpu-threejs-tsl
```

**Heads-up**

- **License:** MIT per the plugin manifest; no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `webgpu-threejs-tsl`
- Trigger phrases: "WebGPU", "TSL Three.js", "GPU compute shaders", "WGSL"

## What it does

Provides deep knowledge of the WebGPU rendering pipeline within Three.js (r183+), including WebGPU renderer setup, the Three.js Shading Language (TSL) for node-based material authoring, GPU compute shaders for non-rendering workloads, advanced post-processing with WebGPU passes, and WGSL shader integration, with a quick-reference cheatsheet. The upstream repo also ships matching Cursor rules, which the skills install does not copy. Use when building high-performance 3D experiences that require GPU compute or next-generation shader authoring.

## When NOT to use

- Standard Three.js scenes without WebGPU — use `cloudai-threejs` instead
- GLSL shader work on WebGL — use a standard Three.js skill instead
- Architecture/BIM workflows — use `threejs-claude-skill-package` instead
