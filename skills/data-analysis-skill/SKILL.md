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

1. **Is the full skill already installed?** Check `~/.claude/skills/data-analysis-skill/SKILL.md` — no `das:` = installed.
   - Yes → invoke and proceed. No → go to step 2.
2. **Shell access?** Yes → install. No → show user the command.

## Install command

```bash
mkdir -p ~/.claude/skills/data-analysis-skill && curl -fsSL https://raw.githubusercontent.com/dongzhang84/data-analysis-skill/main/SKILL.md -o ~/.claude/skills/data-analysis-skill/SKILL.md
```

Verify: `head -3 ~/.claude/skills/data-analysis-skill/SKILL.md` — must NOT contain `das:`.

## Invoke after install

Skill name: `data-analysis-skill`, triggers: "data analysis skill", "parallel data analysis", "dongzhang84", "data HTML report", "data to PowerPoint"

## What it does

Orchestrates a panel of 3-5 domain-specific expert subagents that analyze a dataset in parallel, each contributing a distinct analytical perspective. Results are synthesized into a single interactive HTML report with embedded charts. One-click PowerPoint export is available for presentation delivery. Requires Python environment with pandas, openpyxl, tabulate, and chardet installed.

## When NOT to use

- Single-chart generation — use d3js-skill or claud3 instead
- Real-time streaming data dashboards
- When Python dependencies cannot be installed in the environment
