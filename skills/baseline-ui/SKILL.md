---
name: baseline-ui
description: |
  Validates animation durations, enforces typography scale, checks component
  accessibility, and prevents layout anti-patterns in Tailwind CSS. Ensures
  UI work meets baseline quality standards before shipping.
triggers:
  - "baseline UI"
  - "animation validation"
  - "typography scale"
  - "Tailwind anti-patterns"
das:
  category: accessibility-quality
  upstream: "https://github.com/ibelick/baseline-ui"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# baseline-ui

> Catalogue stub — full skill: [ibelick/baseline-ui](https://github.com/ibelick/baseline-ui)

## Decision tree

Run this before any baseline UI validation work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/baseline-ui/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `baseline-ui` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add ibelick/baseline-ui
```

Or per-agent:
- Claude Code: `claude skills add ibelick/baseline-ui`
- Cursor/OpenCode: `npx skills add ibelick/baseline-ui`

## Invoke after install

- Skill name: `baseline-ui`
- Trigger phrases: "baseline UI", "animation validation", "typography scale", "Tailwind anti-patterns"

## What it does

Validates animation durations against design system standards, enforces typography scale consistency, and checks component accessibility. Prevents common layout anti-patterns in Tailwind CSS to keep UI output consistent and production-ready.
