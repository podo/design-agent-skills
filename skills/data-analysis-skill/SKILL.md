---
name: data-analysis-skill
description: |
  Multi-expert parallel analysis workflow that selects 3-5 domain expert subagents to analyze
  datasets in parallel, synthesizes findings into interactive HTML reports with charts, and
  exports to PowerPoint one-click. Requires Python packages: pandas, openpyxl, tabulate, chardet.
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

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `data-analysis-pro`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/data-analysis-pro/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/data-analysis-pro/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `data-analysis-pro`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/data-analysis-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-pro -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-pro -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

Skill name: `data-analysis-pro`, triggers: "data analysis skill", "parallel data analysis", "dongzhang84", "data HTML report", "data to PowerPoint"

## What it does

Orchestrates a panel of 3-5 domain-specific expert subagents that analyze a dataset in parallel, each contributing a distinct analytical perspective. Results are synthesized into a single interactive HTML report with embedded charts. One-click PowerPoint export is available for presentation delivery. Requires Python environment with pandas, openpyxl, tabulate, and chardet installed.

## When NOT to use

- Single-chart generation — use d3js-skill or claud3 instead
- Real-time streaming data dashboards
- When Python dependencies cannot be installed in the environment
