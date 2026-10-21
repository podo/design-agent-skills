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
  install: false
---

# design-html

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-html`)

## Decision tree

1. **Is gstack already installed?**
   Check: `~/.claude/skills/gstack/design-html/SKILL.md` exists.
   - Yes → invoke `design-html` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!`

## Install the full skill

This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill: `npx skills add` would copy the instructions without the tooling they depend on. Requires Claude Code, Git, and [Bun](https://bun.sh/).

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```

## Invoke after install

- Skill name: `design-html`
- Trigger phrases: "design html", "design to HTML", "implement design", "mockup to code"

## What it does

Translates design specs, mockups, or Figma descriptions into production-ready HTML/CSS with pixel-level fidelity. Part of Garry Tan's gstack — focused on faithful implementation that preserves typographic choices, spacing relationships, and visual hierarchy from the design source.
