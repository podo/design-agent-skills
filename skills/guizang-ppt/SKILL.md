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
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/guizang-ppt/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/guizang-ppt/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/guizang-ppt ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt -y
   ```
   > **Claude Code:** prefix either command with `!` to run directly in the prompt.


## Invoke after install

- Skill name: `guizang-ppt`
- Trigger phrases: "generate PowerPoint", "create presentation", "make slides", "PPTX from outline"

## What it does

Generates structured .pptx PowerPoint presentations from content outlines or raw text. Applies consistent slide layouts, correct typographic hierarchy, and clean formatting suitable for business and product presentations. Simpler than nanobanan-ppt (no image generation) but has no external API dependencies.
