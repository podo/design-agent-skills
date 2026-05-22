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

Run this before any data visualization or charting work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/data-viz-agent/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `data-viz-agent` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/data-viz-agent && \
  curl -fsSL \
    https://raw.githubusercontent.com/rohitg00/awesome-claude-code-toolkit/main/agents/data-ai/data-visualization.md \
    -o ~/.design-agent-skills/skills/data-viz-agent/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/data-viz-agent/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `data-viz-agent`
- Trigger phrases: "data visualization agent", "Chart.js", "Plotly", "Matplotlib", "data chart"

## What it does

Full data visualization engineering agent that works across D3.js, Chart.js, Matplotlib, and Plotly. Applies the Cleveland-McGill perceptual accuracy hierarchy to choose chart types, enforces WCAG AA contrast for accessibility, uses colorblind-safe palettes by default, and selects the right visualization for the underlying data relationship (comparison, distribution, composition, relationship).
