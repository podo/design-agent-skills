---
name: fixing-accessibility
description: |
  Audits and fixes ARIA labels, keyboard navigation, focus management, color
  contrast, and form error handling. Surfaces issues systematically and applies
  targeted remediations to bring components up to accessibility standards.
triggers:
  - "fixing accessibility"
  - "ARIA"
  - "keyboard navigation"
  - "focus management"
das:
  category: accessibility-quality
  upstream: "https://github.com/ibelick/ui-skills"
  upstream_path: "skills/fixing-accessibility/SKILL.md"
  version: latest
  install: true
---

# fixing-accessibility

> Catalogue stub — full skill: [ibelick/ui-skills](https://github.com/ibelick/ui-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/fixing-accessibility/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/fixing-accessibility/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `fixing-accessibility`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/fixing-accessibility ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ibelick/ui-skills --skill fixing-accessibility -g -y
   ```

   **Project:**
   ```bash
   npx skills add ibelick/ui-skills --skill fixing-accessibility -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `fixing-accessibility`
- Trigger phrases: "fixing accessibility", "accessibility audit", "ARIA", "keyboard navigation", "focus management"

## What it does

Audits components for missing or incorrect ARIA labels, broken keyboard navigation paths, focus management gaps, color contrast failures, and inaccessible form error patterns. Applies concrete code-level fixes so components meet accessibility standards without losing visual design intent. Use it when adding interactive controls, forms or dialogs, or when reviewing WCAG compliance.

## When NOT to use

- Full-site, document (Office/PDF) or markdown accessibility audits with specialist routing — use `accessibility-agents`
- A structured WCAG 2.2 audit with manual verification steps — use `wcag-audit-patterns`
