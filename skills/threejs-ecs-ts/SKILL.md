---
name: threejs-ecs-ts
description: |
  Three.js combined with Entity Component Systems (ECS) and TypeScript, adding structured
  game and interactive architecture patterns on top of Three.js rendering for complex
  interactive scenes with many independent objects.
triggers:
  - "Three.js ECS"
  - "entity component"
  - "threejs-ecs-ts"
  - "Nice Wolf Studio"
  - "3D game architecture"
das:
  category: creative-3d
  upstream: "https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts"
  version: latest
  install: false
---

# threejs-ecs-ts

> Catalogue stub — full package: [Nice-Wolf-Studio/claude-skills-threejs-ecs-ts](https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.claude/plugins/threejs-ecs-skills` exists.
   - Yes → invoke it by describing the task and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install steps below, then invoke the skill
   - No → show the install steps; in Claude Code, send each as a chat message starting with `!`

## Install the full skill

Upstream ships plain markdown skill files with a Claude Code plugin manifest and no `SKILL.md`, so `npx skills add` cannot install it. Upstream's documented install is a clone linked into the Claude Code plugins directory:

```bash
git clone https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts.git
ln -s "$(pwd)/claude-skills-threejs-ecs-ts" ~/.claude/plugins/threejs-ecs-skills
```

For other agents, read the markdown files under `skills/` in the cloned repo as reference material.

## Invoke after install

- Describe the task ("set up a mobile-optimized Three.js game with ECS architecture") or name one of the package's skills
- Trigger phrases: "Three.js ECS", "entity component", "3D game architecture"

## What it does

Combines Three.js rendering with Entity Component System (ECS) architecture patterns in TypeScript, providing a structured approach to managing complex interactive 3D scenes. ECS separates data (components) from logic (systems) and entities (IDs), enabling scalable scenes with many independent objects such as game characters, simulations, or interactive installations. Ideal when scene complexity exceeds what simple object hierarchies can manage cleanly.

## When NOT to use

- Simple Three.js scenes without architectural complexity — use cloudai-threejs instead
- WebGPU-specific rendering features — use webgpu-claude-skill instead
- Architecture/BIM 3D workflows — use threejs-claude-skill-package instead
