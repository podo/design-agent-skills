---
name: fixing-accessibility
description: |
  Audits and fixes ARIA labels, keyboard navigation, focus management, color
  contrast, and form error handling. Surfaces issues systematically and applies
  targeted remediations to bring components up to accessibility standards.
triggers:
  - "fixing accessibility"
  - "ARIA"
  - "keyboard navigation"
  - "focus management"
das:
  category: accessibility-quality
  upstream: "https://github.com/ibelick/fixing-accessibility"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# fixing-accessibility

> Catalogue stub — full skill: [ibelick/fixing-accessibility](https://github.com/ibelick/fixing-accessibility)

## Decision tree

Run this before any accessibility audit or fix:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/fixing-accessibility/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `fixing-accessibility` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` (add `-g` to install globally across all projects)

## Install command

```bash
npx skills add ibelick/fixing-accessibility
```

Or per-agent:
- Claude Code: `claude skills add ibelick/fixing-accessibility`
- Cursor/OpenCode: `npx skills add ibelick/fixing-accessibility`

## Invoke after install

- Skill name: `fixing-accessibility`
- Trigger phrases: "fixing accessibility", "accessibility audit", "ARIA", "keyboard navigation", "focus management"

## What it does

Audits components for missing or incorrect ARIA labels, broken keyboard navigation paths, focus management gaps, color contrast failures, and inaccessible form error patterns. Applies concrete code-level fixes so components meet accessibility standards without losing visual design intent.
