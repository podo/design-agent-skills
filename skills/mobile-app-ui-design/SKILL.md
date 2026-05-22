---
name: mobile-app-ui-design
description: |
  Professional mobile app UI design skill focused on creating intentional,
  smooth, personal, and alive interfaces modeled on patterns from top-tier apps.
triggers:
  - "mobile UI"
  - "mobile-app-ui-design"
  - "alive interfaces"
  - "smooth mobile"
  - "intentional mobile"
  - "ceorkm"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/ceorkm/mobile-app-ui-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# mobile-app-ui-design

> Catalogue stub — full skill: [ceorkm/mobile-app-ui-design](https://github.com/ceorkm/mobile-app-ui-design)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/mobile-app-ui-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/mobile-app-ui-design/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/mobile-app-ui-design ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add ceorkm/mobile-app-ui-design --skill mobile-app-ui-design -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add ceorkm/mobile-app-ui-design --skill mobile-app-ui-design -y
   ```

## Invoke after install

- Skill name: `mobile-app-ui-design`
- Triggers: "mobile UI", "mobile-app-ui-design", "alive interfaces", "smooth mobile"

## What it does

Craft-focused mobile UI design skill modeled on the visual and interaction patterns of top-tier apps. Guides creating interfaces that feel intentional (purposeful hierarchy and spacing), smooth (natural motion and transitions), personal (adapted to context and user), and alive (responsive micro-interactions). Use when quality of craft is the primary concern.

## When NOT to use

- Cross-platform guidelines and platform rules — use `mobile-app-design`
- Platform-specific HIG compliance — use `apple-hig-skills`
- Sleek platform integration — use `sleek-design-mobile-apps`
