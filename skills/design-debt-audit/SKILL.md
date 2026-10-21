---
name: design-debt-audit
description: |
  Identify, categorize, and prioritize accumulated design inconsistencies and structural
  problems. Debt taxonomy, audit process, Severity×Frequency/Effort scoring, debt register.
triggers:
  - "design debt audit"
  - "design debt triage"
  - "UI inconsistency audit"
  - "design debt register"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "design-ops/skills/design-debt-audit/SKILL.md"
  version: latest
---

# design-debt-audit

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-debt-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-debt-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-debt-audit`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-debt-audit ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-debt-audit -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-debt-audit -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install design-ops@designer-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-debt-audit`
- Trigger phrases: "design debt audit", "design debt triage", "UI inconsistency audit", "design debt register"

## What it does

The design-debt-audit skill from Owl-Listener's designer-skills: a debt taxonomy (visual / structural / accessibility / documentation / implementation), a five-step audit process (scope, classify, quantify, prioritize, remediate), a Severity×Frequency/Effort prioritization score, and a living debt register. Turns "the UI feels inconsistent" into a triaged, remediable backlog.

## When NOT to use

- Codebase/technical debt (not design) → a code-quality skill
- Live accessibility violations → use `wcag-audit-patterns`
- Token coverage specifically, or the rest of the designer-skills plugins → see `designer-skills`
