---
name: huashu-design
description: |
  HTML-native design skill for high-fidelity prototypes, slide decks, animations, data visualizations
  and expert design review, with a library of named design styles and PPTX, PDF, MP4 and GIF export.
  Agent-agnostic; its own prompts are written in Chinese.
triggers:
  - "huashu"
  - "magazine typography"
  - "CSS Grid design"
  - "animated prototype"
  - "MP4 export"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/alchaincyf/huashu-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# huashu-design

> Catalogue stub — full skill: [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/huashu-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/huashu-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `huashu-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/huashu-design ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add alchaincyf/huashu-design --skill huashu-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add alchaincyf/huashu-design --skill huashu-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python 3 for the skill's helper scripts (learn.py, design_lint.py, capabilities.py); Node.js with the packages in the skill's package.json (Playwright, pptxgenjs, sharp, pdf-lib) and ffmpeg on PATH for PPTX, PDF, MP4 and GIF export; the skills CLI installs none of these
- **License:** MIT
- **Large download (~224 MB):** the skills CLI gives up cloning after 300 s; if it times out, retry with `SKILLS_CLONE_TIMEOUT_MS=900000`.
<!-- das:install:end -->

## Invoke after install

- Skill name: `huashu-design`
- Trigger phrases: "huashu", "magazine typography", "CSS Grid design", "animated prototype", "MP4 export"

## What it does

Produces publication-quality HTML/CSS designs: clickable prototypes, slide decks, animations, infographics and visualizations, with expert design review. For any new design it first shows three directions and waits for your pick before executing, draws on a library of named design styles with visual specimens, runs a design-lint check on the delivered file, and keeps a "look ledger" of what you have shipped so later projects avoid repeating it. Supports animated interactive prototypes and exports to PPTX, PDF, MP4 and GIF. Agent-agnostic and does not need an external component library. The skill's prompts and references are in Chinese, but upstream says it works fine with English tasks.

## When NOT to use

- Production web apps or systems that need a backend — upstream says the skill does not apply
- Non-HTML targets such as React Native, SwiftUI, or backend rendering (the skill is HTML/CSS native)
- When you need a pre-built component library or design system scaffold (use `shadcn-ui` or `design-consultation`)
