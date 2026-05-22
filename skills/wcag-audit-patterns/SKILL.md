---
name: wcag-audit-patterns
description: |
  Runs WCAG 2.2 audits combining automated testing, manual verification steps,
  and prioritised remediation guidance. Covers perceivability, operability,
  understandability, and robustness criteria across web interfaces.
triggers:
  - "WCAG audit"
  - "accessibility audit"
  - "WCAG 2.2"
das:
  category: accessibility-quality
  upstream: "https://github.com/wshobson/wcag-audit-patterns"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# wcag-audit-patterns

> Catalogue stub — full skill: [wshobson/wcag-audit-patterns](https://github.com/wshobson/wcag-audit-patterns)

## Decision tree

Run this before any WCAG compliance audit:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/wcag-audit-patterns/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `wcag-audit-patterns` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add wshobson/wcag-audit-patterns
```

Or per-agent:
- Claude Code: `claude skills add wshobson/wcag-audit-patterns`
- Cursor/OpenCode: `npx skills add wshobson/wcag-audit-patterns`

## Invoke after install

- Skill name: `wcag-audit-patterns`
- Trigger phrases: "WCAG audit", "accessibility audit", "WCAG 2.2", "accessibility remediation"

## What it does

Provides structured WCAG 2.2 audit patterns that combine automated testing tools with manual verification checklists. Surfaces failures by success criterion and generates prioritised remediation guidance so teams can address the highest-impact issues first.
