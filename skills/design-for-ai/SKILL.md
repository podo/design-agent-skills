---
name: design-for-ai
description: |
  Two-mode plugin: CHECKER audits designs across seven categories (purpose, typography,
  proportions, composition, visual hierarchy, color, SEO); APPLIER guides six-phase creation
  from foundation through technical implementation.
triggers:
  - "design checker"
  - "design auditor"
  - "design for AI"
  - "rtd design"
  - "design-for-ai"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/ryanthedev/design-for-ai"
  version: latest
  install: false
---

# design-for-ai

> Catalogue stub — full package: [ryanthedev/design-for-ai](https://github.com/ryanthedev/design-for-ai)

## Decision tree

1. **Is the package already installed?**
   Check: your agent's skills directory contains `design-for-ai` with content beyond this stub.
   - Yes → invoke `design-for-ai` and proceed
   - No → go to step 2

2. **Which agent are you on?**
   - Claude Code → `/plugin marketplace add ryanthedev/rtd-claude-inn` then `/plugin install design-for-ai@rtd`
   - Cursor → `/plugin marketplace add ryanthedev/rtd-claude-inn` then `/plugin install design-for-ai@rtd`
   - Other → see [GitHub README](https://github.com/ryanthedev/design-for-ai)

## Install command

```bash
/plugin marketplace add ryanthedev/rtd-claude-inn
/plugin install design-for-ai@rtd
```

Note: install is a two-step process — add the marketplace source first, then install the plugin by name.

## Invoke after install

- Skill name: `design-for-ai`
- Trigger phrases: "design checker", "design auditor", "design for AI", "rtd design", "design-for-ai"

## What it does

Operates in two distinct modes. CHECKER mode audits an existing design across seven scored categories — purpose and clarity, typography, proportions, composition, visual hierarchy, color, and SEO readiness — and returns a structured report with actionable remediation for each failing category. APPLIER mode guides creation of a new design through six sequential phases: foundation (brief and constraints), layout structure, typographic system, color and contrast, component composition, and technical implementation. Together the two modes cover the full design lifecycle from blank canvas to quality-assured output.

## When NOT to use

- Lightweight UI polish on an existing component (use `taste-skill` for faster, lower-overhead iteration)
- Accessibility-specific audits focused on ARIA, keyboard navigation, or WCAG compliance (use `fixing-accessibility` or `wcag-audit-patterns`)
