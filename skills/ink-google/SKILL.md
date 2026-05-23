---
name: ink-google
description: |
  Ink-style visual design skill for Claude artifacts. Applies a distinctive
  editorial aesthetic — high contrast, strong typographic voice, restrained
  color — to artifact output from Google Labs.
triggers:
  - "ink design"
  - "ink style"
  - "editorial design"
  - "ink visual"
  - "artifact design"
das:
  category: visual-components
  upstream: "https://github.com/google-labs-code/design.md"
  upstream_path: ".agents/skills/ink/SKILL.md"
  version: latest
  install: true
---

# ink-google

> Catalogue stub — full skill: [google-labs-code/design.md](https://github.com/google-labs-code/design.md/blob/main/.agents/skills/ink/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/ink-google/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/ink-google/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/ink-google ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add google-labs-code/design.md --skill ink-google -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add google-labs-code/design.md --skill ink-google -y
   ```
   > **Claude Code:** prefix either command with `!` to run directly in the prompt.


## Invoke after install

- Skill name: `ink-google`
- Trigger phrases: "ink design", "ink style", "editorial design", "artifact design"

## What it does

Applies a distinctive ink-style editorial aesthetic to Claude artifact output: high contrast, strong typographic voice, minimal restrained color, and clean structural composition. From Google Labs' design.md project — a system for encoding visual design intent into agent-readable format.
