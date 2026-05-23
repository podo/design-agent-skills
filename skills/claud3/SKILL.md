---
name: claud3
description: |
  D3.js data visualization skill based on Edward Tufte principles. Selects the right chart
  type from 80+ options by analyzing the data question, then generates single-file HTML with
  D3 v7, dark theme, responsive layout, direct labels, and annotations.
triggers:
  - "claud3"
  - "D3 Tufte"
  - "80 chart types"
  - "dtran320 D3"
  - "D3 dark theme"
das:
  category: data-visualization
  upstream: "https://github.com/dtran320/claud3"
  version: latest
  install: false
---

# claud3

> Catalogue stub — full package: [dtran320/claud3](https://github.com/dtran320/claud3)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/claud3/SKILL.md` exists.
   - Yes → invoke `claud3` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` (add `-g` to install globally across all projects)

## Install command

```bash
npx skills add dtran320/claud3
```

## Invoke after install

- Skill name: `claud3`
- Trigger phrases: "claud3", "D3 Tufte", "80 chart types", "D3 dark theme"

## What it does

Applies Edward Tufte's data visualization principles to D3.js chart generation. Analyzes the underlying data question to select the most appropriate chart type from a library of 80+ options, then produces self-contained single-file HTML using D3 v7 with a dark theme, responsive layout, direct data labels (no separate legend), and contextual annotations. Includes a playground mode for interactive exploration and refinement.

## When NOT to use

- Multi-library visualization agents — use data-viz-agent instead
- AntV/G2 charts — use antvis-chart-skills instead
- Quick single charts without Tufte constraints — use d3js-skill instead
