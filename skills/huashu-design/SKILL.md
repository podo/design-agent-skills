---
name: huashu-design
description: |
  HTML-native design skill producing magazine-grade typography, precise CSS Grid, animated
  prototypes with 20 design philosophies, 5-dimension self-review, and MP4 export.
  Agent-agnostic and works without external component libraries.
triggers:
  - "huashu"
  - "magazine typography"
  - "CSS Grid design"
  - "animated prototype"
  - "MP4 export"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/alchaincyf/huashu-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# huashu-design

> Catalogue stub — full skill: [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/huashu-design/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `huashu-design` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/huashu-design && \
  curl -fsSL \
    https://raw.githubusercontent.com/alchaincyf/huashu-design/main/SKILL.md \
    -o ~/.claude/skills/huashu-design/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/huashu-design/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `huashu-design`
- Trigger phrases: "huashu", "magazine typography", "CSS Grid design", "animated prototype", "MP4 export"

## What it does

Produces publication-quality HTML/CSS designs with magazine-grade typography and precise CSS Grid layouts, drawing on 20 named design philosophies. Includes a built-in 5-dimension self-review loop that critiques its own output across readability, hierarchy, proportion, rhythm, and contrast before delivering. Supports animated interactive prototypes and MP4 export for sharing or presenting motion designs. Entirely agent-agnostic — no external component libraries or framework dependencies required.

## When NOT to use

- Non-HTML targets such as React Native, SwiftUI, or backend rendering (the skill is HTML/CSS native)
- When you need a pre-built component library or design system scaffold (use `shadcn-ui` or `design-consultation`)
