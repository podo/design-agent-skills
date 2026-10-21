---
name: d3js-skill
description: |
  Create custom data visualizations with D3.js: bar, line and scatter charts, chord diagrams,
  heatmaps, force-directed networks and geographic maps, with proper data binding, scales, axes,
  transitions and interactivity. Works in React, Vue, Svelte or vanilla JavaScript.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `d3-viz`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/d3-viz/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/d3-viz/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `d3-viz`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/d3js-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add chrisvoncsefalvay/claude-d3js-skill --skill d3-viz -g -y
   ```

   **Project:**
   ```bash
   npx skills add chrisvoncsefalvay/claude-d3js-skill --skill d3-viz -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file in the repository
- **Name collision:** `d3-viz` is also written by `claud3` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `d3-viz`
- Trigger phrases: "D3.js", "D3 chart", "D3 visualization", "data visualization D3"

## What it does

Guides an agent through building bespoke D3.js visualizations with correct data binding patterns, scales, axes, transitions and interactivity (tooltips, zoom and pan, click handling). Covers common patterns such as bar, line and scatter charts, heatmaps, chord diagrams, pie charts and force-directed networks, plus responsive sizing, accessibility and performance practice. Ships reference notes (colour schemes, D3 patterns, scale reference) and starter chart templates next to the skill.

## When NOT to use

- Standard charts where a charting library is enough; D3 is for bespoke visualizations
- 3D visualization — use `cloudai-threejs`
- Choosing chart types and accessible palettes across libraries (D3, Chart.js, Matplotlib, Plotly) rather than writing D3 code — use `data-viz-agent`
