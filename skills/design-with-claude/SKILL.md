---
name: design-with-claude
description: |
  38 design specialist agents as slash commands covering visual hierarchy, interaction design, design system architecture, typography, color, spacing, motion, forms, navigation, dashboards, mobile, landing pages, auth UX, healthcare UX, b2b SaaS, e-commerce, dark mode, error handling, onboarding, data viz, and more. No runtime dependencies, pure markdown.
triggers:
  - "design with claude"
  - "imsaif design"
  - "38 design commands"
  - "b2b SaaS design"
das:
  type: package
  category: design-review
  upstream: "https://github.com/imsaif/design-with-claude"
  version: latest
  install: false
---

# design-with-claude

> Catalogue stub — full package: [imsaif/design-with-claude](https://github.com/imsaif/design-with-claude)

## Decision tree

1. **Is the package already installed?**
   Check your agent's skills directory for `design-with-claude` with content beyond this stub.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code / Cursor → `/plugin marketplace add imsaif/design-with-claude`
   - Other → see [GitHub README](https://github.com/imsaif/design-with-claude)

## Install command

```bash
/plugin marketplace add imsaif/design-with-claude
```

## Invoke after install

- Skill name: `design-with-claude`
- Trigger phrases: "design with claude", "imsaif design", "38 design commands", "dashboard design", "b2b SaaS design"

## What it does

38 design specialist agents exposed as slash commands, each a domain expert with no runtime dependencies (pure markdown). Specialists cover: visual hierarchy, interaction design, design system architecture, typography, color theory, spacing/layout, motion design, form design, navigation patterns, dashboard design, mobile UX, landing page design, authentication UX, healthcare UX, B2B SaaS design, e-commerce design, dark mode, error handling, onboarding flows, data visualization, and more. Invoke by domain when you need deep specialist guidance rather than a general review.

## When NOT to use

- Non-visual work with no design component
- When a single focused skill already installed suffices — avoid installing the full suite for one-off needs
