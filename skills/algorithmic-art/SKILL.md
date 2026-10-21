---
name: algorithmic-art
description: |
  Create generative art using p5.js with seeded randomness, flow fields, and
  particle systems. Official Anthropic skill: it writes an "algorithmic philosophy"
  first, then expresses it as an interactive p5.js viewer.
triggers:
  - "algorithmic art"
  - "generative art"
  - "flow field art"
  - "particle system"
  - "procedural art"
  - "creative coding art"
das:
  category: creative-3d
  upstream: "https://github.com/anthropics/skills"
  upstream_path: "skills/algorithmic-art/SKILL.md"
  version: latest
  install: true
---

# algorithmic-art

> Catalogue stub — full skill: [anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/algorithmic-art/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/algorithmic-art/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `algorithmic-art`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/algorithmic-art ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add anthropics/skills --skill algorithmic-art -g -y
   ```

   **Project:**
   ```bash
   npx skills add anthropics/skills --skill algorithmic-art -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** Apache-2.0 (the skill ships its own LICENSE.txt; the repo has no root license)
<!-- das:install:end -->

## Invoke after install

- Skill name: `algorithmic-art`
- Trigger phrases: "algorithmic art", "generative art", "p5.js", "flow field", "particle system"

## What it does

Official Anthropic skill for creating generative art with p5.js. It works in two steps: first it writes an "algorithmic philosophy" (a short manifesto for the piece), then it expresses that philosophy as seeded-random p5.js code: flow fields, particle systems, geometric progressions. The output is an interactive HTML viewer plus the generative JS, with parameter controls. Seeding keeps outputs reproducible while retaining organic variation. Use it for creative coding, visual experiments, and procedurally generated illustrations.

## When NOT to use

- Static posters or visual art as PNG/PDF → use `anthropics-skills` (`canvas-design`)
- Real-time 3D or shader work → use `motion-catalogue` to pick a Three.js or shader skill
