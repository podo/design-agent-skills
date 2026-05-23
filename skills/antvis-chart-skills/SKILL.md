---
name: antvis-chart-skills
description: |
  7 professional chart and visualization skills powered by Ant Group's AntV ecosystem.
  26+ chart types, 98.2% accuracy on test cases. Covers charts, infographics, graphs,
  tables, icons, and narrative reports.
triggers:
  - "AntV"
  - "antvis"
  - "chart visualization"
  - "G2 chart"
  - "G6 graph"
  - "S2 table"
  - "pivot table"
das:
  category: data-visualization
  upstream: "https://github.com/antvis/chart-visualization-skills"
  version: latest
  install: false
---

# antvis-chart-skills

> Catalogue stub — full package: [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills)

## Decision tree

Run this before any professional chart or data visualization work:

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/chart-visualization/SKILL.md` exists (representative skill).
   - Yes → invoke the relevant skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code prefix with `!` to run directly in the prompt

## Install command

```bash
npx skills add antvis/chart-visualization-skills
```

## Invoke after install

7 skills from the AntV ecosystem:

| Skill | Use case |
|-------|----------|
| `chart-visualization` | 26+ chart types: time series, comparisons, part-to-whole, relationships, geographic, hierarchical |
| `infographic-creator` | 50+ infographic templates: lists, sequences, hierarchies, comparisons, relations |
| `icon-retrieval` | Search and retrieve icon SVGs from the AntV icon library |
| `narrative-text-visualization` | Structured narrative reports with entity annotations (T8 Syntax) |
| `antv-s2-expert` | Multi-dimensional cross-analysis tables (pivot tables, table sheets) |
| `antv-g6-graph` | G6 v5 graph visualization: network graphs, tree graphs, flow charts, mind maps |
| `antv-g2-chart` | G2 v5 chart code generator for 30+ chart types |

## What it does

Professional chart generation powered by Ant Group's production-grade AntV libraries. 98.2% accuracy on visualization test cases, 26+ chart types with correct semantic mapping, and specialized tools for pivot tables, graph networks, and narrative reports with data annotation.
