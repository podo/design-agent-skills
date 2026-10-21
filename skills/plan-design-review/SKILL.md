---
name: plan-design-review
description: |
  Senior Designer review that rates UI across multiple dimensions (0–10) with
  AI Slop detection. Garry Tan's structured design critique — scores layout,
  hierarchy, typography, color, consistency, and flags generic AI patterns.
triggers:
  - "plan design review"
  - "rate my design"
  - "design critique"
  - "AI slop detection"
  - "design dimensions"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "plan-design-review/SKILL.md"
  version: latest
  install: false
---

# plan-design-review

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`plan-design-review`)

## Decision tree

1. **Is gstack already installed?**
   Check: `~/.claude/skills/gstack/plan-design-review/SKILL.md` exists.
   - Yes → invoke `plan-design-review` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!`

## Install the full skill

This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill: `npx skills add` would copy the instructions without the tooling they depend on. Requires Claude Code, Git, and [Bun](https://bun.sh/).

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```

## Invoke after install

- Skill name: `plan-design-review`
- Trigger phrases: "plan design review", "design score", "rate my design", "design critique", "AI slop detection"

## What it does

Structured senior designer review that scores UI across dimensions (layout, hierarchy, typography, color, consistency, polish) on a 0–10 scale. Includes AI Slop detection — flags the specific patterns that make AI-generated UI look generic. Produces a prioritized list of improvements with specific fixes for each issue.
