---
name: deanpeters-pm-skills
description: |
  9 product management skills using canonical frameworks: NNGroup customer journey
  maps, Lean UX Canvas, Teresa Torres opportunity-solution trees, proto-personas,
  6-frame storyboards, user stories with acceptance criteria, user story mapping,
  full discovery cycle, and structured PRD process.
triggers:
  - "customer journey map"
  - "lean UX canvas"
  - "opportunity solution tree"
  - "proto persona"
  - "user story mapping"
  - "discovery process"
  - "PRD"
  - "deanpeters"
das:
  category: product-pm
  upstream: "https://github.com/deanpeters/Product-Manager-Skills"
  version: latest
  install: false
---

# deanpeters-pm-skills

> Catalogue stub — full package: [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills)

## Decision tree

Run this before any product management, discovery, or documentation work:

1. **Is a Dean Peters skill already installed?**
   Check: `~/.design-agent-skills/skills/customer-journey-map/SKILL.md` exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add deanpeters/Product-Manager-Skills
```

Or install individual skills:
```bash
npx skills add deanpeters/customer-journey-map
npx skills add deanpeters/lean-ux-canvas
npx skills add deanpeters/opportunity-solution-tree
npx skills add deanpeters/proto-persona
npx skills add deanpeters/storyboard
npx skills add deanpeters/user-story
npx skills add deanpeters/user-story-mapping
npx skills add deanpeters/discovery-process
npx skills add deanpeters/prd-development
```

## Invoke after install

| Skill | Framework | Trigger |
|-------|-----------|---------|
| `customer-journey-map` | NNGroup | "customer journey", "journey map" |
| `lean-ux-canvas` | Jeff Gothelf | "Lean UX canvas" |
| `opportunity-solution-tree` | Teresa Torres | "opportunity solution tree", "OST" |
| `proto-persona` | hypothesis-driven | "proto persona", "hypothesis persona" |
| `storyboard` | 6-frame | "storyboard", "user journey storyboard" |
| `user-story` | with acceptance criteria | "user story", "acceptance criteria" |
| `user-story-mapping` | Jeff Patton | "story mapping", "user story map" |
| `discovery-process` | full cycle | "discovery process", "research cycle" |
| `prd-development` | structured | "PRD", "product requirements doc" |

## What it does

9 PM skills implementing canonical product management frameworks: NNGroup-style journey maps, Gothelf's Lean UX Canvas, Torres' opportunity-solution trees, hypothesis-driven proto-personas, 6-frame storyboards, Patton's story mapping, a full 4-phase discovery cycle (frame → research → synthesize → validate), and a structured 2-4 day PRD process.
