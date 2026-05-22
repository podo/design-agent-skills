---
name: marp-slide-quality
description: |
  Analyzes and improves Marp Markdown presentations using SlideGauge quality scoring —
  detects overflow, contrast issues, text density, and structural problems before rendering.
  Use as a companion to marp-slides, run after slide creation.
triggers:
  - "marp slide quality"
  - "SlideGauge"
  - "marp-slide-quality"
  - "nibzard marp"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/nibzard/marp-slide-quality"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# marp-slide-quality

> Catalogue stub — full skill: [nibzard/marp-slide-quality](https://github.com/nibzard/marp-slide-quality)

## Decision tree

1. **Is the full skill already installed?** Check `~/.claude/skills/marp-slide-quality/SKILL.md` — no `das:` = installed.
   - Yes → invoke and proceed. No → go to step 2.
2. **Shell access?** Yes → install. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/marp-slide-quality && curl -fsSL https://raw.githubusercontent.com/nibzard/marp-slide-quality/main/SKILL.md -o ~/.claude/skills/marp-slide-quality/SKILL.md
```

Verify: `head -3 ~/.claude/skills/marp-slide-quality/SKILL.md` — must NOT contain `das:`.

## Invoke after install

Skill name: `marp-slide-quality`, triggers: "marp slide quality", "SlideGauge", "marp-slide-quality", "nibzard marp"

## What it does

Runs SlideGauge quality analysis on Marp Markdown presentations before they are rendered, catching problems that only appear visually at render time. Detects content overflow (text spilling past slide boundaries), insufficient color contrast, excessive text density, missing structure elements, and layout anti-patterns. Produces a scored report with specific fix recommendations. Best used as a post-creation review pass after marp-slides generates the initial deck.

## When NOT to use

- Reveal.js or Slidev presentations — SlideGauge is Marp-specific
- Creating slides from scratch — use marp-slides first, then run this for quality review
- When you need Marp rendered output — this analyzes the Markdown source, not the render
