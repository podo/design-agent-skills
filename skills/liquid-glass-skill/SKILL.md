---
name: liquid-glass-skill
description: |
  Deep knowledge of Apple's Liquid Glass design system (iOS 26+/macOS 26+): .glassEffect()
  modifier, .buttonStyle(.glass), GlassEffectContainer, platform-specific implementations,
  migration from existing apps, and common pitfalls with tested solutions.
triggers:
  - "Liquid Glass"
  - "iOS 26 design"
  - "glassEffect"
  - "GlassEffectContainer"
  - "liquid-glass-skill"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/haider-nawaz/liquid-glass-skill"
  upstream_path: "plugins/liquid-glass/skills/liquid-glass/SKILL.md"
  version: latest
  install: false
---

# liquid-glass-skill

> Catalogue stub — full skill: [haider-nawaz/liquid-glass-skill](https://github.com/haider-nawaz/liquid-glass-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `liquid-glass`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/liquid-glass/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/liquid-glass/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `liquid-glass`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/liquid-glass-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add haider-nawaz/liquid-glass-skill --skill liquid-glass -g -y
   ```

   **Project:**
   ```bash
   npx skills add haider-nawaz/liquid-glass-skill --skill liquid-glass -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add haider-nawaz/liquid-glass-skill
/plugin install liquid-glass@liquid-glass-skills
```

**Heads-up**

- **License:** no LICENSE file in the upstream repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `liquid-glass`
- Plugin route only: the `/liquid-glass:liquid-glass` command
- Trigger phrases: "Liquid Glass", "iOS 26 design", "glassEffect", "GlassEffectContainer"

## What it does

Provides comprehensive knowledge of Apple's Liquid Glass material system introduced in iOS 26 and macOS 26. Covers the SwiftUI `.glassEffect()` view modifier, `.buttonStyle(.glass)` for interactive elements, `GlassEffectContainer` for grouping glass surfaces, morphing transitions, glass toolbars and tab bars, platform-specific behavioral differences between iOS, macOS, tvOS, and visionOS, a step-by-step migration workflow for apps upgrading from pre-26 designs, and a catalogue of known pitfalls (performance, layering, contrast) with tested solutions. The skill ships API, migration, platform and pitfall reference files plus code patterns from Apple's Landmarks sample.

## When NOT to use

- Apps targeting iOS versions before iOS 26 — Liquid Glass APIs are unavailable
- Android or cross-platform design — use `mobile-app-design` instead
- General SwiftUI patterns beyond Liquid Glass — use `swiftui-claude-skills` or `swiftui-patterns`
