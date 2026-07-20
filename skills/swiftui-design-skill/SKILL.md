---
name: swiftui-design-skill
description: |
  SwiftUI visual design skill for distinctive iOS/macOS interfaces that avoid generic AI-slop patterns. Covers design direction, layout systems, typography, color, spacing, brand integration, and design review.
triggers:
  - "SwiftUI design"
  - "SwiftUI visual design"
  - "iOS visual design"
  - "SwiftUI aesthetics"
  - "distinctive iOS interface"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/wholiver/swiftui-design-skill"
  version: latest
---

# swiftui-design-skill

> Catalogue stub — full skill: [wholiver/swiftui-design-skill](https://github.com/wholiver/swiftui-design-skill)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/swiftui-design-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/swiftui-design-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/swiftui-design-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add wholiver/swiftui-design-skill --skill swiftui-design-skill -g -y
   ```

   **Project:**
   ```bash
   npx skills add wholiver/swiftui-design-skill --skill swiftui-design-skill -y
   ```

## Invoke after install

- Skill name: `swiftui-design-skill`
- Trigger phrases: "SwiftUI design", "SwiftUI visual design", "iOS visual design", "SwiftUI aesthetics"

## What it does

SwiftUI visual design skill for building distinctive iOS/macOS interfaces that avoid generic AI-slop patterns. Focuses on the *aesthetic* layer rather than code structure: design direction and visual style selection, layout and spacing systems, typography, color, brand-asset integration, and a multi-dimension design review of the resulting UI. Use when a SwiftUI screen looks generic or AI-generated, when choosing a visual direction for a new app, or when prototyping polished iOS interfaces.

## When NOT to use

- SwiftUI code architecture, view composition, or idiomatic patterns → use `swiftui-patterns`
- iOS 26 Liquid Glass APIs, animations, and verified UI component code → use `swiftui-claude-skills`
- Apple platform interaction/HIG conformance rather than visual craft → use `apple-hig-skills`
- Cross-platform mobile design (Android + iOS) → use `mobile-app-ui-design` or `mobile-app-design`
