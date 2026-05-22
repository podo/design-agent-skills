---
name: ui-ux-pro-max
description: |
  50+ design styles, 97 color palettes, and 9 technology stack templates (React,
  Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui).
  Installs as a Claude plugin via .claude-plugin format.
triggers:
  - "UI UX pro max"
  - "50 styles"
  - "97 palettes"
  - "multi-stack UI"
  - "nextlevelbuilder"
das:
  category: visual-components
  upstream: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
  version: latest
  install: false
---

# ui-ux-pro-max

> Catalogue stub — full plugin: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## Decision tree

Run this before any multi-style or multi-stack UI design:

1. **Is the plugin already installed?**
   Check: `~/.design-agent-skills/skills/ui-ux-pro-max/` directory exists with content.
   - Yes → invoke `ui-ux-pro-max` and proceed
   - No → go to step 2

2. **Are you on Claude Code?**
   - Yes → run `claude plugin install nextlevelbuilder/ui-ux-pro-max-skill`
   - No (Cursor/OpenCode) → try `npx skills add nextlevelbuilder/ui-ux-pro-max-skill`
   - If unsure → show both commands and ask the user to confirm which agent they're using

## Install command

**Claude Code:**
```bash
claude plugin install nextlevelbuilder/ui-ux-pro-max-skill
```

**Other agents:**
```bash
npx skills add nextlevelbuilder/ui-ux-pro-max-skill
```

> Note: This skill installs via `.claude-plugin` format — if the above fails, follow setup instructions in the [GitHub README](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).

## Invoke after install

- Skill name: `ui-ux-pro-max`
- Trigger phrases: "UI UX pro max", "50 styles", "97 palettes", "multi-stack UI"

## What it does

Provides 50+ curated design styles, 97 professionally chosen color palettes, and 9 technology stack templates (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind CSS, shadcn/ui). Choose a style + palette + stack and get correctly structured, consistent UI with professional visual sensibility.

## When NOT to use

- If you only need one framework — consider taste-skill or ui-craft instead
- Backend, API, or non-UI tasks
