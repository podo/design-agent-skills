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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wireframe`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/wireframe/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wireframe/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wireframe`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/claude-wireframe-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Magdoub/claude-wireframe-skill --skill wireframe -g -y
   ```

   **Project:**
   ```bash
   npx skills add Magdoub/claude-wireframe-skill --skill wireframe -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `wireframe` is also written by `wireframe-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `wireframe`
- Trigger phrases: "claude-wireframe-skill", "5 UX approaches", "exploratory wireframe", "Magdoub wireframe"

## What it does

Launches a multi-agent wireframing workflow that produces 5 distinct UX design approaches for any given UI problem: 1 safe variant that extends the existing design system and 4 exploratory variants that challenge conventions. The skill first scans the codebase to extract persistent design context (colors, components, patterns), then produces black-and-white wireframes before generating color variants in parallel. Useful when you need divergent thinking, not just a single best guess. On first run it asks for screenshots of your current app and writes a `wireframe/` folder (design-taste and design-context files plus the generated HTML) into the project root.

## When NOT to use

- Single wireframe output — use `wireframer`, or `wireframe-skill` (a different skill that installs into the same `wireframe` directory, so keep only one of the two)
- Excalidraw diagrams — use `excalidraw-diagram` instead
- When you want a fast single-pass result without parallel agent overhead
