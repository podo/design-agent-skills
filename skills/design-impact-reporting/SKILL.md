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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-impact-reporting/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-impact-reporting/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-impact-reporting`, invoke it and proceed
   - `pointer` → go to step 2

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
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-impact-reporting`
- Trigger phrases: "design impact reporting", "design ROI", "design scorecard"

## What it does

Owl-Listener's design-impact skill: connect design work to user metrics → product metrics → business metrics, with honest attribution of shared outcomes. Provides concrete report structures (design scorecard, before/after case, A/B summary, annual portfolio) plus narrative structure and qualitative-evidence pairing. It is aimed at reporting results upward; for choosing the metrics in the first place, upstream points to its `metrics-definition` skill (ux-strategy), which is part of the same `Owl-Listener/designer-skills` repo (see the `designer-skills` stub).

## When NOT to use

- Portfolio case-study storytelling → use a case-study/portfolio skill
- PM-level product metrics only → use `pm-skills` or `deanpeters-pm-skills`
- Picking which design metrics to track → use `metrics-definition` from `designer-skills`
