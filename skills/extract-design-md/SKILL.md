---
name: extract-design-md
description: |
  Extract Google Stitch design specifications into DESIGN.md format. Creates a
  structured design document from Stitch output that can be version-controlled,
  shared with the team, and used to guide future iterations.
triggers:
  - "extract design md"
  - "stitch to DESIGN.md"
  - "extract stitch design"
  - "design spec from stitch"
  - "DESIGN.md"
das:
  category: figma-code
  upstream: "https://github.com/google-labs-code/stitch-skills"
  upstream_path: "plugins/stitch-design/skills/extract-design-md/SKILL.md"
  version: latest
  install: true
---

# extract-design-md

> Catalogue stub — full skill: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `stitch::extract-design-md`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/stitch-extract-design-md/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/stitch-extract-design-md/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `stitch-extract-design-md`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/extract-design-md ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch::extract-design-md -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch::extract-design-md -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `stitch-extract-design-md`
- Trigger phrases: "extract design md", "stitch to DESIGN.md", "DESIGN.md"

## What it does

Extracts design specifications from Google Stitch output into a structured `DESIGN.md` file — the Google Stitch-compatible format for encoding visual design decisions. The resulting file can be version-controlled, shared across agents, and used to maintain design consistency across iterations. Part of Google Labs' official Stitch skills.
