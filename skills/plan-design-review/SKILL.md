---
name: plan-design-review
description: |
  Senior Designer review that rates UI across multiple dimensions (0–10) with
  AI Slop detection. Garry Tan's structured design critique — scores layout,
  hierarchy, typography, color, consistency, and flags generic AI patterns.
triggers:
  - "plan design review"
  - "design score"
  - "rate my design"
  - "design critique"
  - "AI slop detection"
  - "design dimensions"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "plan-design-review/SKILL.md"
  version: latest
  install: true
---

# plan-design-review

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/plan-design-review/SKILL.md)

## Decision tree

Run this for structured design critique and scoring:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/plan-design-review/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `plan-design-review` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/plan-design-review && \
  curl -fsSL \
    https://raw.githubusercontent.com/garrytan/gstack/main/plan-design-review/SKILL.md \
    -o ~/.claude/skills/plan-design-review/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/plan-design-review/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `plan-design-review`
- Trigger phrases: "plan design review", "design score", "rate my design", "design critique", "AI slop detection"

## What it does

Structured senior designer review that scores UI across dimensions (layout, hierarchy, typography, color, consistency, polish) on a 0–10 scale. Includes AI Slop detection — flags the specific patterns that make AI-generated UI look generic. Produces a prioritized list of improvements with specific fixes for each issue.
