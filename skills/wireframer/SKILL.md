---
name: wireframer
description: |
  Generate low-fidelity wireframes for UI layouts, user flows, and screen
  architecture. Focuses on structure and content hierarchy before visual design
  decisions are made.
triggers:
  - "wireframe"
  - "wireframer"
  - "low fidelity"
  - "lo-fi mockup"
  - "layout skeleton"
  - "UI structure"
das:
  category: diagrams
  upstream: "https://github.com/agilek/wireframer-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wireframer

> Catalogue stub — full skill: [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/wireframer/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/wireframer/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/wireframer ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add agilek/wireframer-skill --skill wireframer -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add agilek/wireframer-skill --skill wireframer -y
   ```
   > **Claude Code:** prefix either command with `!` to run directly in the prompt.


## Invoke after install

- Skill name: `wireframer`
- Trigger phrases: "wireframe", "low fidelity", "lo-fi mockup", "UI structure"

## What it does

Generates low-fidelity wireframes that establish layout, content hierarchy, and navigation structure before any visual design decisions. Forces content-first thinking and prevents premature pixel-pushing. Use before bringing in design skills like impeccable or ui-craft.
