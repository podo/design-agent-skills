---
name: threejs-ecs-ts
description: |
  Three.js combined with Entity Component Systems (ECS) and TypeScript: structured architecture
  patterns for games and complex interactive scenes with many independent objects, from the
  Nice Wolf Studio skill collection.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 12 skills (`ecs-architecture`, `ecs-component-patterns`, `ecs-system-patterns`, `ecs-queries`, `ecs-events`, `ecs-serialization`, `ecs-performance`, `typescript-game-types`, `typescript-ecs-types`, `typescript-performance`, `threejs-scene-setup`, `r3f-ecs-integration`); checking the first.
   - Global: `f=~/.agents/skills/ecs-architecture/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ecs-architecture/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ecs-architecture`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/threejs-ecs-ts ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/architecture.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/component-patterns.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/system-patterns.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/queries.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/events.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/serialization.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/performance.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/game-types.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/typescript-ecs-types.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/typescript-performance.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/threejs/scene-setup.md -g -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/react/r3f-ecs-integration.md -g -y
   ```

   **Project:**
   ```bash
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/architecture.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/component-patterns.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/system-patterns.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/queries.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/events.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/serialization.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/ecs/performance.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/game-types.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/typescript-ecs-types.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/typescript/typescript-performance.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/threejs/scene-setup.md -y
   npx skills add https://raw.githubusercontent.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts/main/skills/react/r3f-ecs-integration.md -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Describe the task ("set up a mobile-optimized Three.js game with ECS architecture") or name a skill:

- Skill name: `ecs-architecture` — EntityManager, ComponentManager, systems, world
- Skill name: `ecs-component-patterns`, `ecs-system-patterns`, `ecs-queries`, `ecs-events`, `ecs-serialization`, `ecs-performance`
- Skill name: `typescript-game-types`, `typescript-ecs-types`, `typescript-performance`
- Skill name: `threejs-scene-setup` — renderer, camera, lighting, resize and animation loop
- Skill name: `r3f-ecs-integration` — ECS with React Three Fiber
- Trigger phrases: "Three.js ECS", "entity component", "3D game architecture"

## What it does

Combines Three.js rendering with Entity Component System architecture in TypeScript, giving the agent a structured approach to complex interactive 3D scenes. ECS separates data (components) from logic (systems) and entities (IDs), which scales to many independent objects such as game characters, simulations or interactive installations. Ideal when scene complexity exceeds what simple object hierarchies handle cleanly.

Upstream publishes plain topic markdown, not SKILL.md folders, and its README install (clone and symlink into `~/.claude/plugins`) does not register anything in Claude Code. This stub therefore installs individual topic files as skills, one command each; the repository holds many more topics (more Three.js areas, mobile, React Three Fiber, game systems) that can be installed the same way by pointing the command at another `skills/<area>/<topic>.md` raw URL.

## When NOT to use

- Simple Three.js scenes without architectural complexity — use `cloudai-threejs` instead
- WebGPU-specific rendering features — use `webgpu-claude-skill` instead
- Architecture/BIM 3D workflows — use `threejs-claude-skill-package` instead
