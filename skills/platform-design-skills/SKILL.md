---
name: platform-design-skills
description: |
  300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for
  cross-platform apps. Covers iOS, Android, macOS, and web accessibility
  platform conventions in one unified skill package.
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

## Decision tree

Run this before any cross-platform UI design work:

1. **Is the platform-design skill already installed?**
   Check: `~/.design-agent-skills/skills/platform-design/SKILL.md` exists (representative).
   - Yes → invoke the relevant platform skill and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add ehmo/platform-design-skills
```

## Invoke after install

- Check installed skill names with: `ls ~/.design-agent-skills/skills/ | grep platform`
- Trigger phrases: "platform design", "HIG rules", "Material Design 3", "cross-platform"

## What it does

300+ design rules from Apple's Human Interface Guidelines, Google's Material Design 3, and WCAG 2.2 — all in one package. Ensures apps follow platform conventions on iOS, Android, macOS, and web: correct touch targets, navigation patterns, typography scales, component behaviors, and accessibility requirements per platform.
