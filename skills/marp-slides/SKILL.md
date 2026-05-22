---
name: marp-slides
description: |
  Marp presentation skill with 22 curated example decks, SVG charts, dashboard components,
  and dark/light themes. Teaches slide composition and visual quality patterns for
  Markdown-based presentations rendered with the Marp framework.
triggers:
  - "Marp"
  - "marp-slides"
  - "Marp presentation"
  - "robonuggets slides"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/robonuggets/marp-slides"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# marp-slides

> Catalogue stub — full skill: [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides)

## Decision tree

1. **Is the full skill already installed?** Check `~/.claude/skills/marp-slides/SKILL.md` — no `das:` = installed.
   - Yes → invoke and proceed. No → go to step 2.
2. **Shell access?** Yes → install. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/marp-slides && curl -fsSL https://raw.githubusercontent.com/robonuggets/marp-slides/main/SKILL.md -o ~/.claude/skills/marp-slides/SKILL.md
```

Verify: `head -3 ~/.claude/skills/marp-slides/SKILL.md` — must NOT contain `das:`.

## Invoke after install

Skill name: `marp-slides`, triggers: "Marp", "marp-slides", "Marp presentation", "robonuggets slides"

## What it does

Creates Marp Markdown presentations informed by 22 curated real-world example decks covering different content types and visual styles. Includes SVG-based chart components, dashboard-style layout components, and dark/light theme variants. The examples teach the skill correct slide composition: appropriate information density, visual hierarchy, and component reuse patterns.

## When NOT to use

- Animated or interactive slides — use revealjs-skill instead
- Vue-component developer presentations — use slidev-skill instead
- Quality-checking an existing Marp deck — use marp-slide-quality as a companion after creation
