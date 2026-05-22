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
  category: visual-components
  upstream: "https://github.com/haider-nawaz/liquid-glass-skill"
  version: latest
  install: false
---

# liquid-glass-skill

> Catalogue stub — full package: [haider-nawaz/liquid-glass-skill](https://github.com/haider-nawaz/liquid-glass-skill)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.claude/skills/liquid-glass-skill/SKILL.md` exists.
   - Yes → invoke `liquid-glass-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
/plugin marketplace add haider-nawaz/liquid-glass-skill
```

## Invoke after install

- Skill name: `liquid-glass-skill`
- Trigger phrases: "Liquid Glass", "iOS 26 design", "glassEffect", "GlassEffectContainer"

## What it does

Provides comprehensive knowledge of Apple's Liquid Glass material system introduced in iOS 26 and macOS 26. Covers the SwiftUI `.glassEffect()` view modifier, `.buttonStyle(.glass)` for interactive elements, `GlassEffectContainer` for grouping glass surfaces, platform-specific behavioral differences between iOS, macOS, tvOS, and visionOS, step-by-step migration paths for apps upgrading from pre-26 designs, and a catalogue of known pitfalls (performance, layering, contrast) with tested solutions.

## When NOT to use

- Apps targeting iOS versions before iOS 26 — Liquid Glass APIs are unavailable
- Android or cross-platform design — use mobile-app-design instead
- General SwiftUI patterns beyond Liquid Glass — use swiftui-claude-skills or swiftui-patterns
