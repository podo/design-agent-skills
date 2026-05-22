---
name: data-viz-agent
description: |
  Data visualization engineer agent using D3.js, Chart.js, Matplotlib, and Plotly.
  Applies Cleveland-McGill perceptual hierarchy, WCAG AA contrast, and colorblind-safe
  palettes. Selects the right chart type for the data relationship.
triggers:
  - "data visualization agent"
  - "chart agent"
  - "visualization engineer"
  - "Chart.js"
  - "Plotly"
  - "Matplotlib"
  - "data chart"
das:
  category: data-visualization
  upstream: "https://github.com/rohitg00/awesome-claude-code-toolkit"
  upstream_path: "agents/data-ai/data-visualization.md"
  version: latest
  install: true
---

# data-viz-agent

> Catalogue stub — full skill: [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit/blob/main/agents/data-ai/data-visualization.md)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/data-viz-agent/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/data-viz-agent/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/data-viz-agent ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add rohitg00/awesome-claude-code-toolkit --skill data-viz-agent -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add rohitg00/awesome-claude-code-toolkit --skill data-viz-agent -y
   ```

## Invoke after install

- Skill name: `data-viz-agent`
- Trigger phrases: "data visualization agent", "Chart.js", "Plotly", "Matplotlib", "data chart"

## What it does

Full data visualization engineering agent that works across D3.js, Chart.js, Matplotlib, and Plotly. Applies the Cleveland-McGill perceptual accuracy hierarchy to choose chart types, enforces WCAG AA contrast for accessibility, uses colorblind-safe palettes by default, and selects the right visualization for the underlying data relationship (comparison, distribution, composition, relationship).
