---
name: swiftui-patterns
description: |
  Best practices for SwiftUI views and components covering tab architecture,
  screen composition, and reusable view patterns. Ensures SwiftUI code follows
  idiomatic structure for maintainable, scalable Apple platform apps.
triggers:
  - "SwiftUI patterns"
  - "SwiftUI components"
  - "SwiftUI tab architecture"
  - "SwiftUI screen"
das:
  category: visual-components
  upstream: "https://github.com/dimillian/swiftui-ui-patterns"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# swiftui-patterns

> Catalogue stub — full skill: [dimillian/swiftui-ui-patterns](https://github.com/dimillian/swiftui-ui-patterns)

## Decision tree

Run this before any SwiftUI view or component work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/swiftui-patterns/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `swiftui-patterns` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add dimillian/swiftui-ui-patterns
```

Or per-agent:
- Claude Code: `claude skills add dimillian/swiftui-ui-patterns`
- Cursor/OpenCode: `npx skills add dimillian/swiftui-ui-patterns`

## Invoke after install

- Skill name: `swiftui-patterns`
- Trigger phrases: "SwiftUI patterns", "SwiftUI components", "SwiftUI tab architecture", "SwiftUI screen"

## What it does

Provides best practices for building SwiftUI views and components on Apple platforms, with a focus on tab-based navigation architecture, screen composition patterns, and reusable view structures. Keeps SwiftUI code idiomatic and avoids common architectural mistakes that cause layout or state management issues.
