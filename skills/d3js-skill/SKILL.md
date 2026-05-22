---
name: d3js-skill
description: |
  Create sophisticated data visualizations with D3.js: bar charts, line graphs,
  scatter plots, interactive visualizations with proper data binding, scales,
  axes, and animations. Handles real datasets with transformations and transitions.
triggers:
  - "D3.js"
  - "D3 chart"
  - "D3 visualization"
  - "data visualization D3"
  - "interactive chart"
das:
  category: data-visualization
  upstream: "https://github.com/chrisvoncsefalvay/claude-d3js-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# d3js-skill

> Catalogue stub — full skill: [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill)

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/d3js-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/d3js-skill/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/d3js-skill ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add chrisvoncsefalvay/claude-d3js-skill --skill d3js-skill -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add chrisvoncsefalvay/claude-d3js-skill --skill d3js-skill -y
   ```

## Invoke after install

- Skill name: `d3js-skill`
- Trigger phrases: "D3.js", "D3 chart", "D3 visualization", "data visualization D3"

## What it does

Generates sophisticated D3.js data visualizations with correct data binding patterns, scales, axes, transitions, and interactivity. Handles bar charts, line graphs, scatter plots, heatmaps, and custom chart types. Produces properly structured SVG with real dataset transformations, not just static examples.
