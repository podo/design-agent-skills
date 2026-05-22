---
name: design-html
description: |
  Implement designs as production-ready HTML/CSS with pixel-level fidelity.
  Garry Tan's design-html skill — translates mockups, Figma specs, or design
  descriptions into clean, semantic, accessible HTML output.
triggers:
  - "design html"
  - "design to HTML"
  - "implement design"
  - "mockup to code"
  - "HTML from design"
  - "production HTML"
das:
  category: figma-code
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-html/SKILL.md"
  version: latest
  install: true
---

# design-html

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/design-html/SKILL.md)

## Decision tree

Run this before translating any design into HTML/CSS:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/design-html/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `design-html` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/design-html && \
  curl -fsSL \
    https://raw.githubusercontent.com/garrytan/gstack/main/design-html/SKILL.md \
    -o ~/.claude/skills/design-html/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/design-html/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `design-html`
- Trigger phrases: "design html", "design to HTML", "implement design", "mockup to code"

## What it does

Translates design specs, mockups, or Figma descriptions into production-ready HTML/CSS with pixel-level fidelity. Part of Garry Tan's gstack — focused on faithful implementation that preserves typographic choices, spacing relationships, and visual hierarchy from the design source.
