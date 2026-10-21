---
name: wcag-ai-skill
description: |
  Turns WCAG 2.2 into practical guidance for web design, frontend implementation, content review, accessibility QA, remediation planning, and conformance documentation. Different focus from wcag-audit-patterns — covers the full WCAG guidance workflow from design through documentation.
triggers:
  - "WCAG 2.2 guidance"
  - "wcag-ai-skill"
  - "Raze Systems"
  - "WCAG conformance docs"
  - "accessibility remediation"
das:
  type: skill
  category: accessibility-quality
  upstream: "https://github.com/Raze-Systems/wcag-ai-skill"
  upstream_path: ".agents/skills/wcag-2.2/SKILL.md"
  version: latest
---

# wcag-ai-skill

> Catalogue stub — full skill: [Raze-Systems/wcag-ai-skill](https://github.com/Raze-Systems/wcag-ai-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `wcag-22`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/wcag-22/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wcag-22/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wcag-22`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wcag-ai-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Raze-Systems/wcag-ai-skill --skill wcag-22 -g -y
   ```

   **Project:**
   ```bash
   npx skills add Raze-Systems/wcag-ai-skill --skill wcag-22 -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** AGPL-3.0 (copyleft; stated in the README and SKILL.md, the repo has no LICENSE file)
<!-- das:install:end -->

## Invoke after install

- Skill name: `wcag-22`
- Trigger phrases: "WCAG 2.2 guidance", "Raze Systems", "WCAG conformance docs", "accessibility remediation"

## What it does

Translates WCAG 2.2 success criteria into practical, actionable guidance across the full accessibility workflow: web design (what to spec), frontend implementation (how to code it), content review (what writers need to know), accessibility QA (how to test), remediation planning (how to fix issues), and conformance documentation (how to report). It produces guidelines, requirements, acceptance criteria, and test plans, not ready-made components or legal certification. Different from `wcag-audit-patterns`, which focuses on the audit/testing phase.

## When NOT to use

- Quick contrast checks — use `fixing-accessibility` for targeted color contrast fixes
- Automated Lighthouse-style performance audits — use `addyosmani-quality`
