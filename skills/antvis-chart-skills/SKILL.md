---
name: antvis-chart-skills
description: |
  Chart and visualization skills from Ant Group's AntV ecosystem: chart images,
  G2 chart code, G6 graphs, X6 diagram editors, infographics, GPT-Vis charts,
  icon search, and narrative text visualization (T8).
triggers:
  - "AntV"
  - "antvis"
  - "chart visualization"
  - "G2 chart"
  - "G6 graph"
das:
  category: data-visualization
  upstream: "https://github.com/antvis/chart-visualization-skills"
  version: latest
  install: false
---

# antvis-chart-skills

> Catalogue stub — full package: [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`chart-visualization`, `antv-g2-chart`, `antv-g6-graph`, `antv-x6-editor`, `antv-infographic`, `antv-t8-ntv`, `antv-gpt-vis`, `icon-retrieval`); checking the first.
   - Global: `f=~/.agents/skills/chart-visualization/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/chart-visualization/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `chart-visualization`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/antvis-chart-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add antvis/chart-visualization-skills --skill chart-visualization antv-g2-chart antv-g6-graph antv-x6-editor antv-infographic antv-t8-ntv antv-gpt-vis icon-retrieval -g -y
   ```

   **Project:**
   ```bash
   npx skills add antvis/chart-visualization-skills --skill chart-visualization antv-g2-chart antv-g6-graph antv-x6-editor antv-infographic antv-t8-ntv antv-gpt-vis icon-retrieval -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add antvis/chart-visualization-skills
/plugin install chart-visualization@visualization-skills
/plugin install antv-g2-chart@visualization-skills
/plugin install antv-g6-graph@visualization-skills
/plugin install antv-x6-editor@visualization-skills
/plugin install antv-infographic@visualization-skills
/plugin install antv-t8-ntv@visualization-skills
/plugin install antv-gpt-vis@visualization-skills
/plugin install icon-retrieval@visualization-skills
```

**Heads-up**

- **Requires:** Network access: chart-visualization POSTs your chart data to the third-party endpoint antv-studio.alipay.com to render images; antv-g2-chart, antv-g6-graph and icon-retrieval also call AntV HTTP APIs with curl
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Skills from the AntV ecosystem:

| Skill | Use case |
|-------|----------|
| `chart-visualization` | Chart images for time series, comparisons, part-to-whole, relationships, geographic and hierarchical data, rendered through the AntV web API |
| `antv-g2-chart` | G2 v5 chart code generator (bar, line, pie, scatter, area, heatmap and more) |
| `antv-g6-graph` | G6 v5 graph visualization: network graphs, tree graphs, flow charts, mind maps |
| `antv-x6-editor` | X6 v3 graph editor code for interactive diagrams: flowcharts, DAGs, ER diagrams, org charts |
| `antv-infographic` | Infographics from text content: lists, sequences, hierarchies, comparisons, relations |
| `antv-t8-ntv` | Narrative text visualization: structured data-interpretation reports with entity annotations (T8 syntax) |
| `antv-gpt-vis` | GPT-Vis charts in syntax/JSON mode or as complete runnable code |
| `icon-retrieval` | Search the AntV infographic icon library and retrieve SVG strings |

## What it does

Chart, graph, infographic and narrative-report generation built on Ant Group's production AntV libraries (G2, G6, X6, GPT-Vis, Infographic, T8). Some skills generate library code you run yourself; `chart-visualization` instead sends your chart data to a hosted AntV endpoint and returns an image URL, so do not use it for confidential data. The `chart-visualization` skill body is written in Chinese.

## When NOT to use

- Confidential data you must keep local: use the code-generating skills (`antv-g2-chart`, `antv-g6-graph`) or another charting skill such as `d3js-skill`
- Pivot tables and spreadsheet-style tables: the AntV S2 skill is no longer part of this repository
- Slides, wireframes or flowcharts drawn by hand: use `excalidraw-agents365` or the `content-catalogue` router
