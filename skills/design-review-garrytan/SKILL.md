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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/design-review-garrytan/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-review-garrytan/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/design-review-garrytan ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add garrytan/gstack --skill design-review-garrytan -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add garrytan/gstack --skill design-review-garrytan -y
   ```

## Invoke after install

- Skill name: `design-review-garrytan`
- Trigger phrases: "design review", "visual audit", "UI audit", "fix design issues"

## What it does

"Designer Who Codes" approach: performs a structured visual audit of the UI, then fixes each issue with an atomic commit. Treats design debt like technical debt — identifies it, prioritizes it, and ships fixes. From Garry Tan's gstack, his toolkit for building well-designed products.
