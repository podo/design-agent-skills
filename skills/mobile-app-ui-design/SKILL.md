---
name: mobile-app-ui-design
description: |
  Professional mobile app UI design skill focused on creating intentional,
  smooth, personal, and alive interfaces modeled on patterns from top-tier apps.
triggers:
  - "mobile UI"
  - "mobile-app-ui-design"
  - "alive interfaces"
  - "smooth mobile"
  - "intentional mobile"
  - "ceorkm"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/ceorkm/mobile-app-ui-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# mobile-app-ui-design

> Catalogue stub — full skill: [ceorkm/mobile-app-ui-design](https://github.com/ceorkm/mobile-app-ui-design)

## Decision tree

1. **Is the full skill already installed?** Check `~/.claude/skills/mobile-app-ui-design/SKILL.md` — no `das:` block = installed.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Shell access?** Yes → install below. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/mobile-app-ui-design && curl -fsSL https://raw.githubusercontent.com/ceorkm/mobile-app-ui-design/main/SKILL.md -o ~/.claude/skills/mobile-app-ui-design/SKILL.md
```

Verify: `head -3 ~/.claude/skills/mobile-app-ui-design/SKILL.md` — must NOT contain `das:`.

## Invoke after install

- Skill name: `mobile-app-ui-design`
- Triggers: "mobile UI", "mobile-app-ui-design", "alive interfaces", "smooth mobile"

## What it does

Craft-focused mobile UI design skill modeled on the visual and interaction patterns of top-tier apps. Guides creating interfaces that feel intentional (purposeful hierarchy and spacing), smooth (natural motion and transitions), personal (adapted to context and user), and alive (responsive micro-interactions). Use when quality of craft is the primary concern.

## When NOT to use

- Cross-platform guidelines and platform rules — use `mobile-app-design`
- Platform-specific HIG compliance — use `apple-hig-skills`
- Sleek platform integration — use `sleek-design-mobile-apps`
