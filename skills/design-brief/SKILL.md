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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/design-brief/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-brief/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/design-brief ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add nexu-io/open-design --skill design-brief -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add nexu-io/open-design --skill design-brief -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `design-brief`
- Trigger phrases: "design brief", "project brief", "design spec"

## What it does

Generates structured design briefs from loose requirements and product context. Turns a rough idea or a vague ask into a clear design document: goals, target audience, success metrics, constraints, and scope. Prevents misaligned design work by establishing shared intent before any UI work begins.
