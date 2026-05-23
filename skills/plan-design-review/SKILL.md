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
  install: true
---

# plan-design-review

> Catalogue stub — full skill: [garrytan/gstack](https://github.com/garrytan/gstack/blob/main/plan-design-review/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/plan-design-review/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/plan-design-review/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/plan-design-review ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add garrytan/gstack --skill plan-design-review -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add garrytan/gstack --skill plan-design-review -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `plan-design-review`
- Trigger phrases: "plan design review", "design score", "rate my design", "design critique", "AI slop detection"

## What it does

Structured senior designer review that scores UI across dimensions (layout, hierarchy, typography, color, consistency, polish) on a 0–10 scale. Includes AI Slop detection — flags the specific patterns that make AI-generated UI look generic. Produces a prioritized list of improvements with specific fixes for each issue.
