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

Run this before any D3.js visualization work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/d3js-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `d3js-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/d3js-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/chrisvoncsefalvay/claude-d3js-skill/main/SKILL.md \
    -o ~/.design-agent-skills/skills/d3js-skill/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/d3js-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `d3js-skill`
- Trigger phrases: "D3.js", "D3 chart", "D3 visualization", "data visualization D3"

## What it does

Generates sophisticated D3.js data visualizations with correct data binding patterns, scales, axes, transitions, and interactivity. Handles bar charts, line graphs, scatter plots, heatmaps, and custom chart types. Produces properly structured SVG with real dataset transformations, not just static examples.
