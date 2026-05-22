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

Run this before any PowerPoint or presentation generation:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/guizang-ppt/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `guizang-ppt` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/guizang-ppt && \
  curl -fsSL \
    https://raw.githubusercontent.com/op7418/guizang-ppt-skill/main/SKILL.md \
    -o ~/.claude/skills/guizang-ppt/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/guizang-ppt/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `guizang-ppt`
- Trigger phrases: "generate PowerPoint", "create presentation", "make slides", "PPTX from outline"

## What it does

Generates structured .pptx PowerPoint presentations from content outlines or raw text. Applies consistent slide layouts, correct typographic hierarchy, and clean formatting suitable for business and product presentations. Simpler than nanobanan-ppt (no image generation) but has no external API dependencies.
