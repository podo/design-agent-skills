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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/mobile-app-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/mobile-app-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/mobile-app-design ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill mobile-app-design -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill mobile-app-design -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `mobile-app-design`
- Triggers: "mobile app design", "iOS design", "Android design", "touch targets", "thumb zones"

## What it does

26,000+ words of mobile UI/UX design guidance. Covers Apple iOS Human Interface Guidelines, Android Material 3, WCAG mobile accessibility, React Native implementation best practices, correct touch target sizing, thumb-zone ergonomics, and adaptive layout patterns for phones and tablets. Use for any cross-platform mobile design decision.

## When NOT to use

- Apple HIG-only work — use `apple-hig-skills`
- SwiftUI-specific implementation — use `swiftui-patterns`
- Professional mobile UI craft patterns — use `mobile-app-ui-design`
