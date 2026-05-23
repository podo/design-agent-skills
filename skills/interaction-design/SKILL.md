---
name: interaction-design
description: |
  Interaction design (IxD) principles and frameworks for digital product work.
  Covers interaction flows, component state design (hover/focus/error/loading/empty),
  micro-interactions, affordances, feedback mechanisms, mental models, task flows,
  gesture design, response time guidelines, and handoff annotations. Grounded in
  6 Norman principles and 19 Tognazzini principles. v1.0.0.
triggers:
  - "interaction design"
  - "interaction flow"
  - "component states"
  - "micro-interaction"
  - "affordance"
  - "interaction spec"
  - "interaction-design"
das:
  type: package
  category: interaction-polish
  upstream: "https://github.com/rastian/interaction-design-skills"
  version: latest
---

# interaction-design

> Catalogue stub — full skill: [rastian/interaction-design-skills](https://github.com/rastian/interaction-design-skills)

## Install the full skill

```bash
# Global
git clone https://github.com/rastian/interaction-design-skills \
  ~/.agents/skills/interaction-design

# Project
git clone https://github.com/rastian/interaction-design-skills \
  .agents/skills/interaction-design
```

## What it does

A practitioner's guide to interaction design — from foundational principles to practical state design, flow specification, and interaction review:

- **Interaction flows** — task flows, user flows, navigation patterns, decision trees
- **State design** — all 10 component states: default, hover, focus, active, disabled, loading, error, success, empty, skeleton
- **Micro-interactions** — trigger → rules → feedback → loops model; timing and easing guidelines
- **Affordances** — signifiers, feedback, constraints, mapping, consistency, discoverability
- **IxD principles** — 6 Norman principles (Design of Everyday Things) + 19 Tognazzini principles (First Principles of Interaction Design)
- **Response time** — 100ms/1s/10s thresholds, progress indicators, optimistic UI
- **Interaction specs** — handoff annotation format, interaction specification documents
- **Interaction audit** — review checklist against established principles

## When NOT to use

- UX journey mapping + Playwright testing → use `neo-user-journey`
- Animation and motion timing → use `gsap-skills` or `framer-motion-skills`
- WCAG accessibility audit → use `wcag-ai-skill`
- Full UX strategy → use `ux-designer-skill`
