---
name: claude-pm-skills
description: |
  Product-management decision skills for solo founders and startup PMs: problem
  clarity, outcome definition, assumption mapping, prioritization, experiment design,
  PRD critique, launch readiness, and post-launch learning. Focused on deciding
  what is worth building rather than writing documents faster.
triggers:
  - "claude PM skills"
  - "pratikshadake PM"
  - "product management skill"
  - "product thinking"
das:
  category: product-pm
  upstream: "https://github.com/pratikshadake/claude-product-management-skills"
  version: latest
  install: false
---

# claude-pm-skills

> Catalogue stub — full package: [pratikshadake/claude-product-management-skills](https://github.com/pratikshadake/claude-product-management-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 15 skills (`problem-clarity`, `outcome-definition`, `assumption-mapper`, `jtbd-extractor`, `value-vs-effort`, `user-segment-prioritizer`, `tradeoff-articulator`, `roadmap-reality-checker`, `experiment-design`, `feature-adoption-analyzer`, `retention-drop-diagnoser`, `prd-critic`, `stakeholder-alignment-checker`, `launch-readiness`, `post-launch-learning`); checking the first.
   - Global: `f=~/.agents/skills/problem-clarity/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/problem-clarity/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `problem-clarity`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/claude-pm-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add pratikshadake/claude-product-management-skills --skill problem-clarity outcome-definition assumption-mapper jtbd-extractor value-vs-effort user-segment-prioritizer tradeoff-articulator roadmap-reality-checker experiment-design feature-adoption-analyzer retention-drop-diagnoser prd-critic stakeholder-alignment-checker launch-readiness post-launch-learning -g -y
   ```

   **Project:**
   ```bash
   npx skills add pratikshadake/claude-product-management-skills --skill problem-clarity outcome-definition assumption-mapper jtbd-extractor value-vs-effort user-segment-prioritizer tradeoff-articulator roadmap-reality-checker experiment-design feature-adoption-analyzer retention-drop-diagnoser prd-critic stakeholder-alignment-checker launch-readiness post-launch-learning -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Name collision:** `experiment-design` is also written by `assimovt-productskills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Each skill installs under its own name and is picked up automatically from a normal product question ("Is this problem worth solving?", "Which feature first?", "Why is retention dropping?"), or call it explicitly:

- Problem discovery: `problem-clarity`, `outcome-definition`, `assumption-mapper`, `jtbd-extractor`
- Prioritization and strategy: `value-vs-effort`, `user-segment-prioritizer`, `tradeoff-articulator`, `roadmap-reality-checker`
- Validation and learning: `experiment-design`, `feature-adoption-analyzer`, `retention-drop-diagnoser`
- Delivery and launch: `prd-critic`, `stakeholder-alignment-checker`, `launch-readiness`, `post-launch-learning`

## What it does

A set of short, opinionated product-management skills by pratikshadake. Each one is a compact decision prompt (purpose, when to use, a few steps, a fixed output template ending in a verdict or recommendation, and a worked example) rather than a long methodology. The package is aimed at solo founders and startup PMs who want help deciding what to build and whether it worked. The skills are small, so they cost little context but also carry far less depth than the larger PM suites.

## When NOT to use

- Deep frameworks and templates (journey maps, opportunity-solution trees, story mapping, PRD process) → use `deanpeters-pm-skills`
- Full Triple Diamond methodology → use `pm-skills`
- UX research and journey mapping → use `phuryn-pm-skills`
- Marketing and CRO tasks → use `coreyhaines-marketing`
