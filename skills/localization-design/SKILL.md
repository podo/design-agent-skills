---
name: localization-design
description: |
  Design interfaces that survive translation, RTL scripts, and cultural difference.
  Per-language text-expansion table, full RTL mirroring rules, non-Latin typography,
  logical CSS properties, and cultural color/icon traps.
triggers:
  - "localization design"
  - "RTL layout design"
  - "text expansion design"
  - "internationalization design"
  - "right-to-left UI"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "design-systems/skills/localization-design/SKILL.md"
  version: latest
---

# localization-design

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/localization-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/localization-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `localization-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/localization-design ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill localization-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill localization-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install design-systems@designer-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `localization-design`
- Trigger phrases: "localization design", "RTL layout design", "text expansion design", "internationalization design", "right-to-left UI"

## What it does

Design guidance for shipping an interface in more than one locale. Covers the failure modes generic agents miss: text-expansion budgets per language (German, French, Finnish and others), full RTL layout mirroring (what flips and what does not, including icons), non-Latin script typography, `margin-inline-start`-style logical properties, locale-aware date, time and number formats, and culturally loaded color and icon meanings. It covers localization-*design*; for the words themselves it defers to a UX writing skill.

## When NOT to use

- Pure string/i18n plumbing (use an i18n library, not a design skill)
- General accessibility audits → use `wcag-audit-patterns` or `fixing-accessibility`
- The wording of interface copy itself (use `ux-writing-skill`)
