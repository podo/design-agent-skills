---
name: guizang-ppt
description: |
  Generate structured PowerPoint presentations from content or outlines.
  Produces clean .pptx files with consistent slide layouts, proper hierarchy,
  and presenter-ready formatting.
triggers:
  - "guizang ppt"
  - "generate PowerPoint"
  - "create presentation"
  - "make slides"
  - "PPTX from outline"
das:
  category: presentations
  upstream: "https://github.com/op7418/guizang-ppt-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# guizang-ppt

> Catalogue stub — full skill: [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `guizang-ppt-skill`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/guizang-ppt-skill/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/guizang-ppt-skill/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `guizang-ppt-skill`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/guizang-ppt ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt-skill -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `guizang-ppt-skill`
- Trigger phrases: "generate PowerPoint", "create presentation", "make slides", "PPTX from outline"

## What it does

Generates structured .pptx PowerPoint presentations from content outlines or raw text. Applies consistent slide layouts, correct typographic hierarchy, and clean formatting suitable for business and product presentations. Simpler than nanobanan-ppt (no image generation) but has no external API dependencies.
