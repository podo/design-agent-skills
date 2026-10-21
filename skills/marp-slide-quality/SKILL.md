---
name: marp-slide-quality
description: |
  Analyzes and improves Marp Markdown presentations using SlideGauge quality scoring —
  checks accessibility (alt text, contrast), code, color, content density and layout on the
  Markdown source. Use as a companion to marp-slides, run after slide creation.
triggers:
  - "marp slide quality"
  - "SlideGauge"
  - "marp-slide-quality"
  - "nibzard marp"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/nibzard/marp-slide-quality"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# marp-slide-quality

> Catalogue stub — full skill: [nibzard/marp-slide-quality](https://github.com/nibzard/marp-slide-quality)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/marp-slide-quality/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/marp-slide-quality/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `marp-slide-quality`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/marp-slide-quality ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add nibzard/marp-slide-quality --skill marp-slide-quality -g -y
   ```

   **Project:**
   ```bash
   npx skills add nibzard/marp-slide-quality --skill marp-slide-quality -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** uv (provides uvx): the skill runs `uvx --from git+https://github.com/nibzard/slidegauge slidegauge ...`, which fetches and executes SlideGauge from that GitHub repo at use time (not a PyPI package); jq for the JSON-filter examples in the skill
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `marp-slide-quality`
- Trigger phrases: "marp slide quality", "SlideGauge", "marp-slide-quality", "nibzard marp"

## What it does

Runs SlideGauge quality analysis on Marp Markdown presentations (files with `marp: true` frontmatter) and helps fix what it finds: overall score and pass rate, plus per-category issues for accessibility, code, color, content and layout. Produces a scored report with specific fix recommendations (too many bullets, overlong content and similar) and re-runs the analysis after changes. Best used as a post-creation review pass after `marp-slides` generates the initial deck.

SlideGauge is not bundled: the skill runs it through `uvx` from its own GitHub repository each time, so it needs `uv` and network access, and it executes code fetched from that repository.

## When NOT to use

- Reveal.js or Slidev presentations — SlideGauge is Marp-specific
- Creating slides from scratch — use `marp-slides` first, then run this for quality review
- When you need Marp rendered output — this analyzes the Markdown source, not the render
