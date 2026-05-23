---
name: wcag-ai-skill
description: |
  Turns WCAG 2.2 into practical guidance for web design, frontend implementation, content review, accessibility QA, remediation planning, and conformance documentation. Different focus from wcag-audit-patterns — covers the full WCAG guidance workflow from design through documentation.
triggers:
  - "WCAG 2.2 guidance"
  - "wcag-ai-skill"
  - "Raze Systems"
  - "WCAG conformance docs"
  - "accessibility remediation"
das:
  type: package
  category: accessibility-quality
  upstream: "https://github.com/Raze-Systems/wcag-ai-skill"
  version: latest
  install: false
---

# wcag-ai-skill

> Catalogue stub — full package: [Raze-Systems/wcag-ai-skill](https://github.com/Raze-Systems/wcag-ai-skill)

## Decision tree

1. **Is the package already installed?**
   Check your agent's skills directory for `wcag-ai-skill` with content beyond this stub.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code / Cursor → `npx skills add Raze-Systems/wcag-ai-skill` — or send `! npx skills add …` as a chat message (add `-g` for global, omit for project-only)
   - Other → see [GitHub README](https://github.com/Raze-Systems/wcag-ai-skill)

## Install command

```bash
npx skills add Raze-Systems/wcag-ai-skill
```

## Invoke after install

- Skill name: `wcag-ai-skill`
- Trigger phrases: "WCAG 2.2 guidance", "wcag-ai-skill", "Raze Systems", "WCAG conformance docs", "accessibility remediation"

## What it does

Translates WCAG 2.2 success criteria into practical, actionable guidance across the full accessibility workflow: web design (what to spec), frontend implementation (how to code it), content review (what writers need to know), accessibility QA (how to test), remediation planning (how to fix issues), and conformance documentation (how to report). Covers the complete WCAG guidance lifecycle rather than just the audit phase. Different from `wcag-audit-patterns` which focuses on the audit/testing phase.

## When NOT to use

- Quick contrast checks — use `fixing-accessibility` for targeted color contrast fixes
- Automated Lighthouse-style performance audits — use `addyosmani-quality`
