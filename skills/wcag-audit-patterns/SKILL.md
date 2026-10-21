---
name: wcag-audit-patterns
description: |
  Runs WCAG 2.2 audits combining automated testing, manual verification steps,
  and prioritised remediation guidance. Covers perceivability, operability,
  understandability, and robustness criteria across web interfaces.
triggers:
  - "WCAG audit"
  - "accessibility audit"
  - "WCAG 2.2"
das:
  type: skill
  category: accessibility-quality
  upstream: "https://github.com/wshobson/agents"
  upstream_path: "plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md"
  version: latest
  install: true
---

# wcag-audit-patterns

> Catalogue stub — full skill: [wshobson/agents](https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/wcag-audit-patterns/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/wcag-audit-patterns/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `wcag-audit-patterns`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/wcag-audit-patterns ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add wshobson/agents --skill wcag-audit-patterns -g -y
   ```

   **Project:**
   ```bash
   npx skills add wshobson/agents --skill wcag-audit-patterns -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add wshobson/agents
/plugin install accessibility-compliance@claude-code-workflows
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `wcag-audit-patterns`
- Trigger phrases: "WCAG audit", "accessibility audit", "WCAG 2.2", "accessibility remediation"

## What it does

Provides structured WCAG 2.2 audit patterns that combine automated testing tools with manual verification checklists. Surfaces failures by success criterion and generates prioritised remediation guidance so teams can address the highest-impact issues first. It is one skill from the `accessibility-compliance` plugin of `wshobson/agents`, which also carries a screen-reader testing skill, agents, and commands (available through the Claude Code plugin route).
