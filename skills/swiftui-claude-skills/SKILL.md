---
name: swiftui-claude-skills
description: |
  SwiftUI skills for iOS 26: Liquid Glass, a UI/UX review engine, component
  patterns, on-device AI (Foundation Models), and vendored Pro skills for
  SwiftUI review, Swift Testing, Swift concurrency, and SwiftData. The author
  states they were verified against WWDC 2025 docs and Xcode 26.3. Different
  from swiftui-patterns, which focuses on general SwiftUI best practices.
triggers:
  - "SwiftUI iOS 26"
  - "swiftui-claude-skills"
  - "WWDC 2025 SwiftUI"
  - "Xcode 26"
  - "199-biotechnologies"
das:
  category: visual-components
  upstream: "https://github.com/199-biotechnologies/swiftui-claude-skills"
  version: latest
  install: false
---

# swiftui-claude-skills

> Catalogue stub — full package: [199-biotechnologies/swiftui-claude-skills](https://github.com/199-biotechnologies/swiftui-claude-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`swiftui-liquid-glass`, `swiftui-ui-ux-review`, `swiftui-ui-patterns`, `on-device-ai`, `swiftui-pro`, `swift-testing-pro`, `swift-concurrency-pro`, `swiftdata-pro`); checking the first.
   - Global: `f=~/.agents/skills/swiftui-liquid-glass/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/swiftui-liquid-glass/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `swiftui-liquid-glass`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/swiftui-claude-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add 199-biotechnologies/swiftui-claude-skills --skill swiftui-liquid-glass "SwiftUI UI/UX Review" swiftui-ui-patterns on-device-ai swiftui-pro swift-testing-pro swift-concurrency-pro swiftdata-pro -g -y
   ```

   **Project:**
   ```bash
   npx skills add 199-biotechnologies/swiftui-claude-skills --skill swiftui-liquid-glass "SwiftUI UI/UX Review" swiftui-ui-patterns on-device-ai swiftui-pro swift-testing-pro swift-concurrency-pro swiftdata-pro -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file in the upstream repo
- **Name collision:** `swiftui-ui-patterns` is also written by `swiftui-patterns` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `swiftui-liquid-glass`, `swiftui-ui-ux-review` (upstream frontmatter name `SwiftUI UI/UX Review`), `swiftui-ui-patterns`, `on-device-ai`, `swiftui-pro`, `swift-testing-pro`, `swift-concurrency-pro`, `swiftdata-pro`
- Trigger phrases: "SwiftUI iOS 26", "WWDC 2025 SwiftUI", "Xcode 26", "Liquid Glass", "SwiftUI UI review"

## What it does

Custom skills by 199 Biotechnologies: the complete Liquid Glass API (`swiftui-liquid-glass`), an automated UI/UX review engine covering animations, accessibility, HIG compliance, and iOS 26 APIs (`swiftui-ui-ux-review`), component pattern references (`swiftui-ui-patterns`), and Foundation Models on-device AI (`on-device-ai`). The package also vendors Paul Hudson's (twostraws) Pro skills for SwiftUI code review, Swift Testing, Swift 6.2 concurrency, and SwiftData. The author reports cross-checking API details against Apple's documentation to reduce hallucinated APIs on fast-moving iOS 26 features.

## When NOT to use

- General SwiftUI without iOS 26 specifics — use `swiftui-patterns` instead (both install a skill named swiftui-ui-patterns, so installing both overwrites one)
- Liquid Glass only, without broader SwiftUI — use `liquid-glass-skill` for a focused scope
- Android or cross-platform mobile — use `mobile-app-design` instead
