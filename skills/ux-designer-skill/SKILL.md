---
name: ux-designer-skill
description: |
  Synthesizes guidance from 19 authoritative UX sources including Nielsen Norman Group and Laws of UX, with 2026 modern best practices. Covers interaction patterns, cognitive load reduction, visual design, usability principles, and platform conventions.
triggers:
  - "UX designer"
  - "UX principles"
  - "Laws of UX"
  - "ux-designer-skill"
  - "usability guidelines"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/szilu/ux-designer-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# ux-designer-skill

> Catalogue stub — full skill: [szilu/ux-designer-skill](https://github.com/szilu/ux-designer-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/ux-designer-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `ux-designer-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/ux-designer-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/szilu/ux-designer-skill/main/SKILL.md \
    -o ~/.design-agent-skills/skills/ux-designer-skill/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/ux-designer-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `ux-designer-skill`
- Trigger phrases: "UX designer", "UX principles", "Laws of UX", "ux-designer-skill", "usability guidelines"

## What it does

Synthesizes UX guidance from 19 authoritative sources including Nielsen Norman Group, Laws of UX, and others, updated for 2026 best practices. Covers interaction patterns, cognitive load reduction, visual design principles, usability heuristics, and platform-specific conventions (web, mobile, desktop). Useful when you need principled UX rationale grounded in established frameworks rather than generic advice.

## When NOT to use

- Code-specific implementation — this skill provides design guidance, not code output
- Brand or visual identity work — use a dedicated brand/creative direction skill
