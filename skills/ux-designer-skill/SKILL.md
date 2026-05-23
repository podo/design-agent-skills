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
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/ux-designer-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/ux-designer-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/ux-designer-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add szilu/ux-designer-skill --skill ux-designer-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add szilu/ux-designer-skill --skill ux-designer-skill -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `ux-designer-skill`
- Trigger phrases: "UX designer", "UX principles", "Laws of UX", "ux-designer-skill", "usability guidelines"

## What it does

Synthesizes UX guidance from 19 authoritative sources including Nielsen Norman Group, Laws of UX, and others, updated for 2026 best practices. Covers interaction patterns, cognitive load reduction, visual design principles, usability heuristics, and platform-specific conventions (web, mobile, desktop). Useful when you need principled UX rationale grounded in established frameworks rather than generic advice.

## When NOT to use

- Code-specific implementation — this skill provides design guidance, not code output
- Brand or visual identity work — use a dedicated brand/creative direction skill
