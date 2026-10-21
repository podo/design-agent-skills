---
name: data-analysis-skill
description: |
  Multi-expert parallel analysis workflow that selects domain expert subagents to analyze
  datasets in parallel, synthesizes findings into interactive HTML reports with charts, and
  exports to PowerPoint on request. Requires Python packages: pandas, openpyxl, tabulate, chardet.
triggers:
  - "data analysis skill"
  - "parallel data analysis"
  - "dongzhang84"
  - "data HTML report"
  - "data to PowerPoint"
das:
  type: skill
  category: data-visualization
  upstream: "https://github.com/dongzhang84/data-analysis-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# data-analysis-skill

> Catalogue stub — full skill: [dongzhang84/data-analysis-skill](https://github.com/dongzhang84/data-analysis-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `data-analysis-pro`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/data-analysis-pro/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/data-analysis-pro/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `data-analysis-pro`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/data-analysis-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-pro -g -y
   ```

   **Project:**
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-pro -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python 3.8+ with pandas, openpyxl, tabulate and chardet (the bundled scripts auto-install missing packages with pip on first run)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `data-analysis-pro`
- Trigger phrases: "data analysis skill", "parallel data analysis", "dongzhang84", "data HTML report", "data to PowerPoint"

## What it does

End-to-end data analysis assistant for Excel/CSV analysis, business-metrics review, ROI calculation, formula writing, and data visualization. For deeper questions it runs a multi-expert analysis: it selects a panel of domain-expert roles, runs each as a parallel subagent so every expert analyses the dataset from a distinct angle, and synthesizes the results into a single interactive HTML report with embedded charts. PowerPoint export (HTML to PPTX) is available when the user asks for slides. Needs a Python environment with pandas, openpyxl, tabulate, and chardet; the bundled scripts install missing packages on first run.

## When NOT to use

- Single-chart generation — use `d3js-skill`, `claud3` or `data-viz-agent` instead
- Real-time streaming data dashboards
- When Python dependencies cannot be installed in the environment
