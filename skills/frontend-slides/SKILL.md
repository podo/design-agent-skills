---
name: frontend-slides
description: |
  Create animation-rich HTML presentations from scratch or convert PPT/PPTX into
  polished web slides. Produces self-contained HTML files with smooth transitions,
  custom layouts, and presenter-friendly controls.
triggers:
  - "frontend slides"
  - "HTML slides"
  - "web presentation"
  - "animated slides"
  - "HTML presentation"
  - "convert PPT to HTML"
das:
  category: presentations
  upstream: "https://github.com/zarazhangrui/frontend-slides"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# frontend-slides

> Catalogue stub — full skill: [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)

## Decision tree

Run this before building any HTML/web-based presentation:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/frontend-slides/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `frontend-slides` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/frontend-slides && \
  curl -fsSL \
    https://raw.githubusercontent.com/zarazhangrui/frontend-slides/main/SKILL.md \
    -o ~/.claude/skills/frontend-slides/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/frontend-slides/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `frontend-slides`
- Trigger phrases: "frontend slides", "HTML slides", "web presentation", "animated slides"

## What it does

Creates animation-rich, self-contained HTML presentations from scratch or by converting existing PPT/PPTX files into polished web slides. Supports smooth transitions, custom layouts, speaker notes, and keyboard/touch navigation. Output is a single HTML file — no build step required.
