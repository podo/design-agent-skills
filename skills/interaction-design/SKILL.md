---
name: interaction-design
description: |
  Interaction design (IxD) principles and frameworks for digital product work.
  Covers interaction flows, component state design (hover/focus/error/loading/empty),
  micro-interactions, affordances, feedback mechanisms, mental models, task flows,
  gesture design, response time guidelines, and handoff annotations. Grounded in
  Norman's design principles and Tognazzini's first principles of interaction design.
triggers:
  - "interaction design"
  - "interaction flow"
  - "component states"
  - "micro-interaction"
  - "affordance"
  - "interaction spec"
  - "interaction-design"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/rastian/interaction-design-skills"
  upstream_path: "SKILL.md"
  version: latest
---

# interaction-design

> Catalogue stub — full skill: [rastian/interaction-design-skills](https://github.com/rastian/interaction-design-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/interaction-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/interaction-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `interaction-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/interaction-design ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add rastian/interaction-design-skills --skill interaction-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add rastian/interaction-design-skills --skill interaction-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `interaction-design`
- Trigger phrases: "interaction design", "interaction flow", "component states", "micro-interaction", "affordance", "interaction spec"

## What it does

A practitioner's guide to interaction design — from foundational principles to practical state design, flow specification, and interaction review:

- **Interaction flows** — task flows, user flows, navigation patterns, decision trees
- **State design** — the full set of component states: default, hover, focus, active, disabled, loading, error, success, empty, skeleton
- **Micro-interactions** — trigger → rules → feedback → loops model; timing and easing guidelines
- **Affordances** — signifiers, feedback, constraints, mapping, consistency, discoverability
- **IxD principles** — Norman's principles (Design of Everyday Things) and Tognazzini's First Principles of Interaction Design
- **Response time** — 100ms/1s/10s thresholds, progress indicators, optimistic UI
- **Interaction specs** — handoff annotation format, interaction specification documents
- **Interaction audit** — review checklist against established principles

The install includes a `reference/` folder with the principles, response-time and patterns-and-flows notes the skill points to.

## When NOT to use

- UX journey mapping + Playwright testing → use `neo-user-journey`
- Animation and motion timing → use `gsap-skills` or `framer-motion-skills`
- WCAG accessibility audit → use `wcag-ai-skill`
- Full UX strategy → use `ux-designer-skill`
