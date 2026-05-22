---
name: apple-hig-skills
description: |
  Apple Human Interface Guidelines as 14 agent skills covering iOS, macOS,
  visionOS, watchOS, and tvOS. From raintree-technology, makers of the
  Apple HIG compliance website.
triggers:
  - "Apple HIG"
  - "Human Interface Guidelines"
  - "iOS design"
  - "macOS design"
  - "visionOS"
  - "watchOS design"
  - "tvOS design"
  - "Apple design guidelines"
das:
  category: visual-components
  upstream: "https://github.com/raintree-technology/apple-hig-skills"
  version: latest
  install: false
---

# apple-hig-skills

> Catalogue stub — full package: [raintree-technology/apple-hig-skills](https://github.com/raintree-technology/apple-hig-skills)

## Decision tree

Run this before any Apple platform UI design:

1. **Is an HIG skill already installed?**
   Check: `~/.design-agent-skills/skills/hig-foundations/SKILL.md` exists.
   - Yes → invoke the specific platform skill and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add raintree-technology/apple-hig-skills
```

Website: [apple.raintree.technology](https://apple.raintree.technology/)

## Invoke after install

14 skills covering the full HIG — invoke by platform or component area:
- `hig-foundations` — color, typography, layout, materials
- `hig-platforms` — iOS, macOS, visionOS, watchOS, tvOS specifics
- `hig-components-controls` — buttons, toggles, sliders
- `hig-components-layout` — navigation bars, tab bars, toolbars
- `hig-components-menus` — context menus, action sheets, pickers
- `hig-components-dialogs` — alerts, confirmations, sheets
- `hig-inputs` — text fields, search, forms
- `hig-patterns` — loading, onboarding, modality
- `hig-technologies` — SwiftUI, Accessibility, Handoff, etc.
- And more...

Trigger phrases: "Apple HIG", "iOS design", "macOS design", "visionOS"

## What it does

Apple's Human Interface Guidelines encoded as 14 structured agent skills. Covers every Apple platform (iOS, macOS, visionOS, watchOS, tvOS) with platform-specific component behaviors, navigation patterns, typography scales, accessibility requirements, and HIG compliance checks. From the team behind apple.raintree.technology.
