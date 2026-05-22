---
name: design-brief
description: |
  Generate structured design briefs from loose requirements and product context.
  Turns vague ideas into actionable design specs: goals, constraints, audience,
  success metrics, and scope boundaries.
triggers:
  - "design brief"
  - "project brief"
  - "design spec"
  - "design requirements"
  - "brief from requirements"
das:
  category: design-review
  upstream: "https://github.com/nexu-io/open-design"
  upstream_path: "skills/design-brief/SKILL.md"
  version: latest
  install: true
---

# design-brief

> Catalogue stub — full skill: [nexu-io/open-design](https://github.com/nexu-io/open-design/blob/main/skills/design-brief/SKILL.md)

## Decision tree

Run this before any design brief work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/design-brief/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `design-brief` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/design-brief && \
  curl -fsSL \
    https://raw.githubusercontent.com/nexu-io/open-design/main/skills/design-brief/SKILL.md \
    -o ~/.claude/skills/design-brief/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/design-brief/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `design-brief`
- Trigger phrases: "design brief", "project brief", "design spec"

## What it does

Generates structured design briefs from loose requirements and product context. Turns a rough idea or a vague ask into a clear design document: goals, target audience, success metrics, constraints, and scope. Prevents misaligned design work by establishing shared intent before any UI work begins.
