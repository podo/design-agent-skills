---
name: apple-hig-skills
description: |
  Apple Human Interface Guidelines as agent skills covering iOS, macOS,
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
  upstream: "https://github.com/raintree-technology/hig-doctor"
  version: latest
  install: false
---

# apple-hig-skills

> Catalogue stub — full package: [raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor) (renamed from `apple-hig-skills`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 14 skills (`hig-foundations`, `hig-platforms`, `hig-components-controls`, `hig-components-layout`, `hig-components-menus`, `hig-components-dialogs`, `hig-components-status`, `hig-components-search`, `hig-components-system`, `hig-components-content`, `hig-inputs`, `hig-patterns`, `hig-technologies`, `hig-project-context`); checking the first.
   - Global: `f=~/.agents/skills/hig-foundations/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/hig-foundations/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `hig-foundations`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/apple-hig-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add raintree-technology/hig-doctor --skill hig-foundations hig-platforms hig-components-controls hig-components-layout hig-components-menus hig-components-dialogs hig-components-status hig-components-search hig-components-system hig-components-content hig-inputs hig-patterns hig-technologies hig-project-context -g -y
   ```

   **Project:**
   ```bash
   npx skills add raintree-technology/hig-doctor --skill hig-foundations hig-platforms hig-components-controls hig-components-layout hig-components-menus hig-components-dialogs hig-components-status hig-components-search hig-components-system hig-components-content hig-inputs hig-patterns hig-technologies hig-project-context -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add raintree-technology/hig-doctor
/plugin install apple-hig-skills@apple-hig-skills
```

**Heads-up**

- **License:** MIT (tooling; Apple reference content is attributed, see upstream THIRD_PARTY_NOTICES.md)
<!-- das:install:end -->

Website: [apple.raintree.technology](https://apple.raintree.technology/)

## Invoke after install

Invoke by platform or component area:
- `hig-foundations` — color, typography, layout, materials
- `hig-platforms` — iOS, macOS, visionOS, watchOS, tvOS specifics
- `hig-components-controls` — buttons, toggles, sliders
- `hig-components-layout` — navigation bars, tab bars, toolbars
- `hig-components-menus` — context menus, action sheets, pickers
- `hig-components-dialogs` — alerts, confirmations, sheets
- `hig-components-status` — progress indicators and status UI
- `hig-components-search` — search fields and navigation-related components
- `hig-components-system` — widgets, Live Activities, notifications, App Clips
- `hig-components-content` — content display components
- `hig-inputs` — gestures, Pencil, keyboards, controllers, pointers
- `hig-patterns` — loading, onboarding, modality
- `hig-technologies` — Siri, Apple Pay, HealthKit, VoiceOver and other integrations
- `hig-project-context` — records your target platforms in a shared context file the other skills read

Trigger phrases: "Apple HIG", "iOS design", "macOS design", "visionOS"

## What it does

Apple's Human Interface Guidelines encoded as structured agent skills. Covers every Apple platform (iOS, macOS, visionOS, watchOS, tvOS) with platform-specific component behaviors, navigation patterns, typography scales, accessibility requirements, and HIG guidance. `hig-project-context` writes `.claude/apple-design-context.md` in your project so the other skills can tailor advice without repeating questions. From the team behind apple.raintree.technology.

## When NOT to use

- Source-code compliance scans and CI gates — use the `hig-doctor` stub, which installs upstream's `hig-doctor-audit` skill from the same repository (the audit CLI and MCP server live there too)
- SwiftUI implementation patterns rather than HIG guidance — use `swiftui-design-skill` or `swiftui-patterns`
- Material Design or cross-platform guidelines — use `material-3-skill` or `platform-design-skills`
