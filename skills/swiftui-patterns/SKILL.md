---
name: swiftui-patterns
description: |
  Best practices and example-driven guidance for SwiftUI views and components:
  tab architecture, navigation hierarchies, screen composition, custom view
  modifiers, and responsive layouts. Keeps SwiftUI code idiomatic and maintainable
  for Apple platform apps.
triggers:
  - "SwiftUI patterns"
  - "SwiftUI components"
  - "SwiftUI tab architecture"
  - "SwiftUI screen"
das:
  category: visual-components
  upstream: "https://github.com/Dimillian/Skills"
  upstream_path: "swiftui-ui-patterns/SKILL.md"
  version: latest
  install: true
---

# swiftui-patterns

> Catalogue stub — full skill: [Dimillian/Skills](https://github.com/Dimillian/Skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `swiftui-ui-patterns`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/swiftui-ui-patterns/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/swiftui-ui-patterns/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `swiftui-ui-patterns`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/swiftui-patterns ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Dimillian/Skills --skill swiftui-ui-patterns -g -y
   ```

   **Project:**
   ```bash
   npx skills add Dimillian/Skills --skill swiftui-ui-patterns -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `swiftui-ui-patterns` is also written by `swiftui-claude-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `swiftui-ui-patterns`
- Trigger phrases: "SwiftUI patterns", "SwiftUI components", "SwiftUI tab architecture", "SwiftUI screen"

## What it does

Provides best practices and example-driven guidance for building SwiftUI views and components on Apple platforms: tab-based navigation architecture with `TabView`, navigation hierarchies, screen composition with stacks and grids, custom view modifiers, `@State` and `@Binding` management, and component-specific patterns with reference examples. Keeps SwiftUI code idiomatic and avoids common architectural mistakes that cause layout or state-management issues.

## When NOT to use

- Liquid Glass (iOS 26) APIs → use `liquid-glass-skill`
- Visual design direction for SwiftUI apps → use `swiftui-design-skill`
- A broader SwiftUI skill set → use `swiftui-claude-skills`
