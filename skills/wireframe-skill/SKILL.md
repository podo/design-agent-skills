---
name: wireframe-skill
description: |
  Generates wireframes from natural language descriptions, outputting machine-readable
  JSON (.wireframe.json) and interactive HTML with drag-and-drop reordering and undo/redo.
  Requires only Python 3 and a browser — no design tool accounts needed.
triggers:
  - "wireframe-skill"
  - "yhassy wireframe"
  - "JSON wireframe"
  - "interactive wireframe HTML"
das:
  type: skill
  category: diagrams
  upstream: "https://github.com/yhassy/wireframe-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wireframe-skill

> Catalogue stub — full skill: [yhassy/wireframe-skill](https://github.com/yhassy/wireframe-skill)

## Decision tree

1. **Is the full skill already installed?** Check `~/.claude/skills/wireframe-skill/SKILL.md` — no `das:` = installed.
   - Yes → invoke and proceed. No → go to step 2.
2. **Shell access?** Yes → install. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/wireframe-skill && curl -fsSL https://raw.githubusercontent.com/yhassy/wireframe-skill/main/SKILL.md -o ~/.claude/skills/wireframe-skill/SKILL.md
```

Verify: `head -3 ~/.claude/skills/wireframe-skill/SKILL.md` — must NOT contain `das:`.

## Invoke after install

Skill name: `wireframe-skill`, triggers: "wireframe-skill", "yhassy wireframe", "JSON wireframe", "interactive wireframe HTML"

## What it does

Converts natural language UI descriptions into structured wireframes in two output formats: machine-readable `.wireframe.json` for programmatic use and single-file interactive HTML with drag-and-drop element reordering and undo/redo history. Requires only Python 3 and a modern browser. Ideal for rapid lo-fi ideation before any visual design work begins.

## When NOT to use

- High-fidelity mockups with color and typography — use wireframer instead
- Excalidraw-format output — use excalidraw-diagram instead
- When 5 parallel UX variants are needed — use claude-wireframe-skill instead
