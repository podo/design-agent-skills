---
name: mobile-app-design
description: |
  Comprehensive mobile app UI/UX design skill covering iOS HIG, Android
  Material 3, accessibility standards, React Native best practices, touch
  targets, thumb zones, and adaptive patterns. 26,000+ words of detailed
  documentation.
triggers:
  - "mobile app design"
  - "Android design"
  - "touch targets"
  - "thumb zones"
  - "Material 3"
  - "mobile UI UX"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/awesome-skills/mobile-app-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# mobile-app-design

> Catalogue stub — full skill: [awesome-skills/mobile-app-design](https://github.com/awesome-skills/mobile-app-design)

## Decision tree

1. **Is the full skill already installed?** Check `~/.claude/skills/mobile-app-design/SKILL.md` — no `das:` block = installed.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Shell access?** Yes → install below. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/mobile-app-design && curl -fsSL https://raw.githubusercontent.com/awesome-skills/mobile-app-design/main/SKILL.md -o ~/.claude/skills/mobile-app-design/SKILL.md
```

Verify: `head -3 ~/.claude/skills/mobile-app-design/SKILL.md` — must NOT contain `das:`.

## Invoke after install

- Skill name: `mobile-app-design`
- Triggers: "mobile app design", "iOS design", "Android design", "touch targets", "thumb zones"

## What it does

26,000+ words of mobile UI/UX design guidance. Covers Apple iOS Human Interface Guidelines, Android Material 3, WCAG mobile accessibility, React Native implementation best practices, correct touch target sizing, thumb-zone ergonomics, and adaptive layout patterns for phones and tablets. Use for any cross-platform mobile design decision.

## When NOT to use

- Apple HIG-only work — use `apple-hig-skills`
- SwiftUI-specific implementation — use `swiftui-patterns`
- Professional mobile UI craft patterns — use `mobile-app-ui-design`
