---
name: data-viz-agent
description: |
  Data visualization engineer agent using D3.js, Chart.js, Matplotlib, and Plotly.
  Chooses visual encodings by perceptual accuracy, enforces WCAG AA contrast, colorblind-safe
  palettes, and keyboard and screen-reader support, and selects the right chart type for the
  data relationship. Upstream is a Claude Code subagent definition installed here as a skill.
triggers:
  - "data visualization agent"
  - "chart agent"
  - "visualization engineer"
  - "Chart.js"
  - "Plotly"
  - "Matplotlib"
  - "data chart"
das:
  type: skill
  category: data-visualization
  upstream: "https://github.com/rohitg00/awesome-claude-code-toolkit"
  upstream_path: "agents/data-ai/data-visualization.md"
  version: latest
  install: true
---

# data-viz-agent

> Catalogue stub — full skill: [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit/blob/main/agents/data-ai/data-visualization.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `data-visualization`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/data-visualization/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/data-visualization/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `data-visualization`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/data-viz-agent ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add https://raw.githubusercontent.com/rohitg00/awesome-claude-code-toolkit/main/agents/data-ai/data-visualization.md -g -y
   ```

   **Project:**
   ```bash
   npx skills add https://raw.githubusercontent.com/rohitg00/awesome-claude-code-toolkit/main/agents/data-ai/data-visualization.md -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** Apache-2.0
- **Name collision:** `data-visualization` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `data-visualization`
- Trigger phrases: "data visualization agent", "Chart.js", "Plotly", "Matplotlib", "data chart"

## What it does

A data visualization engineering persona that works across D3.js, Chart.js, Plotly, and Observable on the web and Matplotlib, Seaborn, and Altair for analysis. It maps data dimensions to perceptual channels in order of accuracy (position for quantitative comparison, then length, then color), applies accessibility standards (WCAG AA contrast, alternative text, keyboard-navigable interactions, colorblind-safe palettes), picks the library that fits the job, and verifies the result before handing it back.

The upstream file is a Claude Code subagent definition (its frontmatter declares tools and a model) rather than a SKILL.md; the skills CLI installs it from the raw file URL as a skill named `data-visualization`.

## When NOT to use

- Tufte-style single-file D3 charts — use `claud3` or `d3js-skill`
- AntV/G2 charts — use `antvis-chart-skills`
- Dataset analysis and report writing rather than chart building — use `data-analysis-skill`
