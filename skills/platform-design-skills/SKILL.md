---
name: platform-design-skills
description: |
  Design rules from Apple HIG, Material Design 3, and WCAG 2.2 for
  cross-platform apps, one skill per platform: iOS, iPadOS, macOS, watchOS,
  visionOS, tvOS, Android, and web accessibility and platform conventions.
triggers:
  - "platform design"
  - "Apple HIG rules"
  - "Material Design"
  - "cross-platform design"
  - "platform conventions"
  - "HIG guidelines"
  - "MD3 design"
das:
  category: visual-components
  upstream: "https://github.com/ehmo/platform-design-skills"
  version: latest
  install: false
---

# platform-design-skills

> Catalogue stub — full package: [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`ios-design-guidelines`, `ipados-design-guidelines`, `macos-design-guidelines`, `watchos-design-guidelines`, `visionos-design-guidelines`, `tvos-design-guidelines`, `android-design-guidelines`, `web-design-guidelines`); checking the first.
   - Global: `f=~/.agents/skills/ios-design-guidelines/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ios-design-guidelines/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ios-design-guidelines`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/platform-design-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ehmo/platform-design-skills --skill ios-design-guidelines ipados-design-guidelines macos-design-guidelines watchos-design-guidelines visionos-design-guidelines tvos-design-guidelines android-design-guidelines web-design-guidelines -g -y
   ```

   **Project:**
   ```bash
   npx skills add ehmo/platform-design-skills --skill ios-design-guidelines ipados-design-guidelines macos-design-guidelines watchos-design-guidelines visionos-design-guidelines tvos-design-guidelines android-design-guidelines web-design-guidelines -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `web-design-guidelines` is also written by `vercel-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `ios-design-guidelines`, `ipados-design-guidelines`, `macos-design-guidelines`, `watchos-design-guidelines`, `visionos-design-guidelines`, `tvos-design-guidelines`, `android-design-guidelines`, `web-design-guidelines`. Use the one that matches the target platform.
- Trigger phrases: "platform design", "HIG rules", "Material Design 3", "cross-platform"

## What it does

Design rules distilled from Apple's Human Interface Guidelines, Google's Material Design 3, and WCAG 2.2, shipped as one skill per platform. Each one helps you evaluate, improve, or create interfaces that follow platform conventions: correct touch targets, navigation patterns, typography scales, component behaviors, and accessibility requirements for iOS, iPadOS, macOS, watchOS, visionOS, tvOS, Android, and the web.

To install only some of them, run the install command with just those names after `--skill`.

## When NOT to use

- Deep SwiftUI implementation guidance → use `swiftui-patterns` or `swiftui-claude-skills`
- The full HIG audit with a doctor-style workflow → use `apple-hig-skills` or `hig-doctor`
- Material 3 in depth → use `material-3-skill`
