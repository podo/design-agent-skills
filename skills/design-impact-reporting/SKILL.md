---
name: design-impact-reporting
description: |
  Communicate design’s contribution to user and business outcomes in stakeholder terms.
  Metrics framework, scorecard / before-after / A-B / portfolio report formats.
triggers:
  - "design impact reporting"
  - "design ROI"
  - "measuring design impact"
  - "design scorecard"
  - "design metrics report"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "design-ops/skills/design-impact-reporting/SKILL.md"
  version: latest
---

# design-impact-reporting

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/design-impact-reporting/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-impact-reporting/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-impact-reporting ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-impact-reporting -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-impact-reporting -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.

## What it does

Owls design-impact skill: connect design work to user metrics → product metrics → business metrics, with honest attribution of shared outcomes. Provides concrete report structures (design scorecard, before/after case, A/B summary, annual portfolio) plus narrative structure and qualitative-evidence pairing. Web research found no public skill with equivalent reporting machinery.

## When NOT to use

- Portfolio case-study storytelling → use a case-study/portfolio skill
- PM-level product metrics only → use `pm-skills` or `deanpeters-pm-skills`
