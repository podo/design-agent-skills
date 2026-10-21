---
name: deanpeters-pm-skills
description: |
  Product management skills using canonical frameworks: NNGroup customer journey
  maps, Lean UX Canvas, Teresa Torres opportunity-solution trees, proto-personas,
  6-frame storyboards, user stories with acceptance criteria, user story mapping,
  full discovery cycle, and structured PRD process. Part of a larger PM library;
  this pointer installs only these skills.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 9 skills (`customer-journey-map`, `lean-ux-canvas`, `opportunity-solution-tree`, `proto-persona`, `storyboard`, `user-story`, `user-story-mapping`, `discovery-process`, `prd-development`); checking the first.
   - Global: `f=~/.agents/skills/customer-journey-map/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/customer-journey-map/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `customer-journey-map`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/deanpeters-pm-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add deanpeters/Product-Manager-Skills --skill customer-journey-map lean-ux-canvas opportunity-solution-tree proto-persona storyboard user-story user-story-mapping discovery-process prd-development -g -y
   ```

   **Project:**
   ```bash
   npx skills add deanpeters/Product-Manager-Skills --skill customer-journey-map lean-ux-canvas opportunity-solution-tree proto-persona storyboard user-story user-story-mapping discovery-process prd-development -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add deanpeters/Product-Manager-Skills
/plugin install customer-journey-map@pm-skills
/plugin install lean-ux-canvas@pm-skills
/plugin install opportunity-solution-tree@pm-skills
/plugin install proto-persona@pm-skills
/plugin install storyboard@pm-skills
/plugin install user-story@pm-skills
/plugin install user-story-mapping@pm-skills
/plugin install discovery-process@pm-skills
/plugin install prd-development@pm-skills
```

**Heads-up**

- **License:** CC BY-NC-SA 4.0 (non-commercial, share-alike; GitHub shows NOASSERTION)
- **Name collision:** `customer-journey-map`, `opportunity-solution-tree` is also written by `phuryn-pm-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

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

PM skills implementing canonical product management frameworks: NNGroup-style journey maps, Gothelf's Lean UX Canvas, Torres' opportunity-solution trees, hypothesis-driven proto-personas, 6-frame storyboards, Patton's story mapping, a full 4-phase discovery cycle (frame → research → synthesize → validate), and a structured 2-4 day PRD process.

The upstream repo is a much larger PM library (finance, strategy, career, lifecycle and more). This pointer installs only the design- and discovery-relevant skills above; add others by passing their names to the same `npx skills add deanpeters/Product-Manager-Skills --skill` command. The content is licensed CC BY-NC-SA 4.0 (non-commercial, share-alike), so check that fits your use before using it in a company setting.

## When NOT to use

- Full Triple Diamond methodology → use `pm-skills`
- UX research and journey mapping from a different author → use `phuryn-pm-skills`
- Short decision prompts (problem clarity, value vs effort, launch readiness) → use `claude-pm-skills`
- Positioning and messaging → use `product-position`
