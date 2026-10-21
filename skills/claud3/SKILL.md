---
name: claud3
description: |
  D3.js data visualization skill based on Edward Tufte principles. Selects the right chart
  type from a large catalogue by analyzing the data question, then generates single-file HTML with
  D3 v7, dark theme, responsive layout, direct labels, and annotations.
triggers:
  - "claud3"
  - "D3 Tufte"
  - "80 chart types"
  - "dtran320 D3"
  - "D3 dark theme"
das:
  type: skill
  category: data-visualization
  upstream: "https://github.com/dtran320/claud3"
  upstream_path: "skills/d3-viz/SKILL.md"
  version: latest
  install: true
---

# claud3

> Catalogue stub — full skill: [dtran320/claud3](https://github.com/dtran320/claud3) (the repo and plugin are called claud3; the skill it installs is `d3-viz`)

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
   [ -e ~/.agents/skills/claud3 ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add dtran320/claud3 --skill d3-viz -g -y
   ```

   **Project:**
   ```bash
   npx skills add dtran320/claud3 --skill d3-viz -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add dtran320/claud3
/plugin install d3-viz@claud3
```

**Heads-up**

- **License:** no LICENSE file in the repo
- **Name collision:** `d3-viz` is also written by `d3js-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `d3-viz`
- Via the Claude Code plugin it is also available as the `/d3-viz` command.
- Trigger phrases: "claud3", "D3 Tufte", "80 chart types", "D3 dark theme"

## What it does

Applies Edward Tufte's data visualization principles to D3.js chart generation. Analyzes the underlying data question ("how does X change over time?", "how is X spread?") to select the most appropriate chart type from a large catalogue organized by question type (temporal, comparison, distribution, correlation, composition, flow, spatial), then produces self-contained single-file HTML using D3 v7 with a dark theme, responsive SVG, direct data labels (no separate legend), and contextual annotations. Each chart is checked against a Tufte design checklist before output. A playground mode ("explore this data") gives an interactive page for trying chart types and refining.

## When NOT to use

- Multi-library visualization work (D3, Chart.js, Plotly) — use `data-viz-agent` or `antvis-chart-skills` instead
- AntV/G2 charts — use `antvis-chart-skills` instead
- Quick single charts without Tufte constraints — use `d3js-skill` instead (note: `d3js-skill` also installs a directory named `d3-viz`; install only one of the two in a project)
