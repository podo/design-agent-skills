---
name: design-review-garrytan
description: |
  Designer Who Codes: visual audit followed by atomic commits fixing each issue.
  Garry Tan's design review skill — treats UI like code, identifies and fixes
  design debt systematically.
triggers:
  - "design review"
  - "visual audit"
  - "UI audit"
  - "design debt"
  - "fix design issues"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-review/SKILL.md"
  version: latest
  install: true
---

# design-review-garrytan

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/design-review/SKILL.md)

## Decision tree

Run this before any design review or UI audit:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/design-review-garrytan/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `design-review-garrytan` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/design-review-garrytan && \
  curl -fsSL \
    https://raw.githubusercontent.com/garrytan/gstack/main/design-review/SKILL.md \
    -o ~/.design-agent-skills/skills/design-review-garrytan/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/design-review-garrytan/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `design-review-garrytan`
- Trigger phrases: "design review", "visual audit", "UI audit", "fix design issues"

## What it does

"Designer Who Codes" approach: performs a structured visual audit of the UI, then fixes each issue with an atomic commit. Treats design debt like technical debt — identifies it, prioritizes it, and ships fixes. From Garry Tan's gstack, his toolkit for building well-designed products.
