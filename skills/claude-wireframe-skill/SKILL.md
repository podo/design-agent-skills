---
name: claude-wireframe-skill
description: |
  Generates 5 UX design approaches as interactive prototypes — 1 safe design-system extension
  and 4 exploratory variants — starting as B&W wireframes then producing color variants via
  parallel agents. Scans codebase on first run to build persistent design context.
triggers:
  - "claude-wireframe-skill"
  - "5 UX approaches"
  - "exploratory wireframe"
  - "Magdoub wireframe"
das:
  type: skill
  category: diagrams
  upstream: "https://github.com/Magdoub/claude-wireframe-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# claude-wireframe-skill

> Catalogue stub — full skill: [Magdoub/claude-wireframe-skill](https://github.com/Magdoub/claude-wireframe-skill)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wireframe`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/wireframe/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/wireframe/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `wireframe`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/claude-wireframe-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Magdoub/claude-wireframe-skill --skill wireframe -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Magdoub/claude-wireframe-skill --skill wireframe -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

Skill name: `wireframe`, triggers: "claude-wireframe-skill", "5 UX approaches", "exploratory wireframe", "Magdoub wireframe"

## What it does

Launches a multi-agent wireframing workflow that produces 5 distinct UX design approaches for any given UI problem: 1 safe variant that extends the existing design system and 4 exploratory variants that challenge conventions. The skill first scans the codebase to extract persistent design context (colors, components, patterns), then produces black-and-white wireframes before generating color variants in parallel. Useful when you need divergent thinking, not just a single best guess.

## When NOT to use

- Single wireframe output — use wireframe-skill or wireframer instead
- Excalidraw diagrams — use excalidraw-diagram instead
- When you want a fast single-pass result without parallel agent overhead
