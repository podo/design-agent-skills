---
name: pm-skills
description: |
  Production-ready PM skills organized around the Triple Diamond methodology: phase skills
  (Discover through Iterate), foundation skills (personas, OKRs, lean canvas), utility meta-skills,
  and Design Sprint and Foundation Sprint methodology tools. Templates, workflows, and sample
  outputs included. The catalogue installs a core subset; the Claude Code plugin installs the
  full library with slash commands and sub-agents.
triggers:
  - "Triple Diamond"
  - "pm-skills"
  - "product-on-purpose"
  - "Triple Diamond PM skills"
  - "Design Sprint methodology"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/product-on-purpose/pm-skills"
  version: latest
  install: true
---

# pm-skills

> Catalogue stub — full package: [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 16 skills (`define-problem-statement`, `define-hypothesis`, `define-jtbd-canvas`, `define-opportunity-tree`, `discover-interview-synthesis`, `discover-journey-map`, `discover-competitive-analysis`, `foundation-persona`, `develop-design-rationale`, `develop-solution-brief`, `deliver-prd`, `deliver-user-stories`, `deliver-acceptance-criteria`, `deliver-edge-cases`, `measure-experiment-design`, `measure-survey-analysis`); checking the first.
   - Global: `f=~/.agents/skills/define-problem-statement/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/define-problem-statement/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `define-problem-statement`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/pm-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add product-on-purpose/pm-skills --skill define-problem-statement define-hypothesis define-jtbd-canvas define-opportunity-tree discover-interview-synthesis discover-journey-map discover-competitive-analysis foundation-persona develop-design-rationale develop-solution-brief deliver-prd deliver-user-stories deliver-acceptance-criteria deliver-edge-cases measure-experiment-design measure-survey-analysis -g -y
   ```

   **Project:**
   ```bash
   npx skills add product-on-purpose/pm-skills --skill define-problem-statement define-hypothesis define-jtbd-canvas define-opportunity-tree discover-interview-synthesis discover-journey-map discover-competitive-analysis foundation-persona develop-design-rationale develop-solution-brief deliver-prd deliver-user-stories deliver-acceptance-criteria deliver-edge-cases measure-experiment-design measure-survey-analysis -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add product-on-purpose/agent-plugins
/plugin install pm-skills@product-on-purpose
```

**Heads-up**

- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill names: `define-problem-statement`, `define-hypothesis`, `define-jtbd-canvas`, `define-opportunity-tree`, `discover-interview-synthesis`, `discover-journey-map`, `discover-competitive-analysis`, `foundation-persona`, `develop-design-rationale`, `develop-solution-brief`, `deliver-prd`, `deliver-user-stories`, `deliver-acceptance-criteria`, `deliver-edge-cases`, `measure-experiment-design`, `measure-survey-analysis`
- Trigger phrases: "Triple Diamond", "pm-skills", "product-on-purpose", "Design Sprint methodology"
- With the Claude Code plugin the same skills are namespaced, for example `/pm-skills:deliver-prd`.

## What it does

Structured PM skills organized by the Triple Diamond product development framework. Skill names carry their phase prefix: `discover-` and `define-` (framing the problem, research synthesis), `develop-` (solution briefs, design rationale, ADRs, spikes), `deliver-` (PRDs, user stories, acceptance criteria, edge cases, launch), `measure-` (experiments, instrumentation, surveys), and `iterate-` (retrospectives, pivot decisions). `foundation-` skills cover recurring artifacts like personas, OKRs, and lean canvas, `utility-` skills handle cross-cutting concerns and skill lifecycle, and `tool-` skills facilitate Design Sprint and Foundation Sprint steps. Worked sample outputs are bundled upstream.

This catalogue installs a core subset (the discovery, definition, delivery, and measurement skills most useful next to design work). Skills route to each other in their output, and upstream notes they detect a missing sibling skill, so a subset is a supported way to use the library. Install everything with `npx skills add product-on-purpose/pm-skills` (no `--skill`) or through the Claude Code plugin, which also adds slash commands and sub-agents.

## When NOT to use

- Single PRD generation — use `deanpeters-pm-skills` for a lighter workflow
- Marketing and CRO work — use `coreyhaines-marketing` instead
- UX research focus only — use `phuryn-pm-skills` instead
