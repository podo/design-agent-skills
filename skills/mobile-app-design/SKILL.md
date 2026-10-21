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
   Upstream names this skill `Mobile App Design Standards`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/mobile-app-design-standards/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/mobile-app-design-standards/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `mobile-app-design-standards`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/mobile-app-design ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill "Mobile App Design Standards" -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill "Mobile App Design Standards" -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `mobile-app-design-standards`
- Triggers: "mobile app design", "iOS design", "Android design", "touch targets", "thumb zones"

## What it does

26,000+ words of mobile UI/UX design guidance. Covers Apple iOS Human Interface Guidelines, Android Material 3, WCAG mobile accessibility, React Native implementation best practices, correct touch target sizing, thumb-zone ergonomics, and adaptive layout patterns for phones and tablets. Use for any cross-platform mobile design decision.

## When NOT to use

- Apple HIG-only work — use `apple-hig-skills`
- SwiftUI-specific implementation — use `swiftui-patterns`
- Professional mobile UI craft patterns — use `mobile-app-ui-design`
