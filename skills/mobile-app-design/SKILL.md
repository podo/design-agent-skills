---
name: mobile-app-design
description: |
  Comprehensive mobile app UI/UX design skill covering iOS HIG, Android
  Material 3, accessibility standards, React Native best practices, touch
  targets, thumb zones, and adaptive patterns, with detailed reference
  documents, examples and audit scripts.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `mobile-app-design-standards`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/mobile-app-design-standards/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/mobile-app-design-standards/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `mobile-app-design-standards`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/mobile-app-design ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill "Mobile App Design Standards" -g -y
   ```

   **Project:**
   ```bash
   npx skills add awesome-skills/mobile-app-design --skill "Mobile App Design Standards" -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file
<!-- das:install:end -->

## Invoke after install

- Skill name: `mobile-app-design-standards`
- Triggers: "mobile app design", "iOS design", "Android design", "touch targets", "thumb zones"

## What it does

Extensive mobile UI/UX design guidance. Covers Apple iOS Human Interface Guidelines, Android Material 3, WCAG mobile accessibility, React Native implementation best practices, correct touch target sizing, thumb-zone ergonomics, and adaptive layout patterns for phones and tablets. Ships reference documents (iOS, Android, accessibility checklist, performance, common mistakes, platform differences, UI libraries), example screens, and helper scripts for accessibility, contrast and touch-target checks. Use for any cross-platform mobile design decision.

The upstream skill is named "Mobile App Design Standards", so it installs as `mobile-app-design-standards` next to this pointer.

## When NOT to use

- Apple HIG-only work — use `apple-hig-skills`
- SwiftUI-specific implementation — use `swiftui-patterns`
- Professional mobile UI craft patterns — use `mobile-app-ui-design`
