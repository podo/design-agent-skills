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
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/data-analysis-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/data-analysis-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/data-analysis-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add dongzhang84/data-analysis-skill --skill data-analysis-skill -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

Skill name: `data-analysis-skill`, triggers: "data analysis skill", "parallel data analysis", "dongzhang84", "data HTML report", "data to PowerPoint"

## What it does

Orchestrates a panel of 3-5 domain-specific expert subagents that analyze a dataset in parallel, each contributing a distinct analytical perspective. Results are synthesized into a single interactive HTML report with embedded charts. One-click PowerPoint export is available for presentation delivery. Requires Python environment with pandas, openpyxl, tabulate, and chardet installed.

## When NOT to use

- Single-chart generation — use d3js-skill or claud3 instead
- Real-time streaming data dashboards
- When Python dependencies cannot be installed in the environment
