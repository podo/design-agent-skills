---
name: designer-skills
description: |
  A comprehensive designer toolkit by Marie Claire Dean, organised into nine plugins:
  design-research, design-systems, ux-strategy, ui-design, interaction-design,
  prototyping-testing, design-ops, designer-toolkit, and visual-critique. Covers the
  design practice from research to systems, UI, interaction, testing, and handoff.
triggers:
  - "designer skills"
  - "Owl-Listener"
  - "designer skills suite"
  - "design ops"
  - "visual critique"
das:
  type: package
  category: design-review
  upstream: "https://github.com/Owl-Listener/designer-skills"
  version: latest
  install: false
---

# designer-skills

> Catalogue stub — full package: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 111 skills (`a-b-test-design`, `accessibility-audit`, `accessibility-test-plan`, `aesthetic-usability`, `affinity-diagram`, `animation-principles`, `behavioural-analytics`, `business-design`, `card-sort-analysis`, `case-study`, `click-test-plan`, `color-system`, `competitive-analysis`, `component-spec`, `concept-selection`, `content-strategy`, `conversational-ux`, `critique-affordance`, `critique-brand-consistency`, `critique-color`, `critique-composition`, `critique-information-density`, `critique-typography`, `critique-visual-hierarchy`, `dark-mode-design`, `data-visualization`, `design-brief`, `design-critique`, `design-debt-audit`, `design-impact-reporting`, `design-negotiation`, `design-principles`, `design-qa-checklist`, `design-rationale`, `design-review-process`, `design-sprint-plan`, `design-system-adoption`, `design-system-governance`, `design-token`, `design-token-audit`, `diary-study-plan`, `documentation-template`, `doherty-threshold`, `empathy-map`, `error-handling-ux`, `experience-map`, `feedback-patterns`, `fitts-law`, `form-design`, `gesture-patterns`, `handoff-spec`, `heuristic-evaluation`, `hicks-law`, `icon-system`, `illustration-style`, `information-architecture`, `interfaces-that-feel`, `interview-script`, `jakobs-law`, `jobs-to-be-done`, `journey-map`, `law-of-closure`, `law-of-common-region`, `law-of-continuity`, `law-of-figure-ground`, `law-of-proximity`, `law-of-similarity`, `layout-grid`, `loading-states`, `localization-design`, `metrics-definition`, `micro-interaction-spec`, `millers-law`, `motion-system`, `naming-convention`, `navigation-patterns`, `north-star-vision`, `onboarding-design`, `opportunity-framework`, `parallel-concepts`, `pattern-library`, `peak-end-rule`, `platform-conventions`, `presentation-deck`, `prototype-strategy`, `qual-quant-triangulation`, `readable-measure`, `research-repository`, `responsive-design`, `search-ux`, `serial-position-effect`, `service-blueprint`, `spacing-system`, `stakeholder-alignment`, `state-machine`, `summarize-interview`, `survey-design`, `team-workflow`, `teslers-law`, `test-scenario`, `theming-system`, `typography-scale`, `usability-test-plan`, `user-flow-diagram`, `user-persona`, `ux-writing`, `version-control-strategy`, `visual-hierarchy`, `von-restorff-effect`, `wireframe-spec`, `zeigarnik-effect`); checking the first.
   - Global: `f=~/.agents/skills/a-b-test-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/a-b-test-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `a-b-test-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/designer-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install design-research@designer-skills
/plugin install design-systems@designer-skills
/plugin install ux-strategy@designer-skills
/plugin install ui-design@designer-skills
/plugin install interaction-design@designer-skills
/plugin install prototyping-testing@designer-skills
/plugin install design-ops@designer-skills
/plugin install designer-toolkit@designer-skills
/plugin install visual-critique@designer-skills
```

**Heads-up**

- **License:** MIT
- **Name collision:** `data-visualization` is also written by `data-viz-agent` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `design-brief` is also written by `design-brief` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `interview-script`, `summarize-interview` is also written by `phuryn-pm-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `jobs-to-be-done` is also written by `wondelai-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `service-blueprint` is also written by `service-blueprint` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `ux-writing` is also written by `ux-writing-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

This package installs many individual skills rather than one called `designer-skills`; each is invoked by its own name or picked automatically from the request. Examples:

- Research: `user-persona`, `journey-map`, `interview-script`, `usability-test-plan`
- Systems: `design-token`, `component-spec`, `design-system-governance`
- UX strategy: `information-architecture`, `content-strategy`, `user-flow-diagram`
- UI: `color-system`, `typography-scale`, `layout-grid`, `responsive-design`
- Interaction: `micro-interaction-spec`, `form-design`, `error-handling-ux`, `onboarding-design`
- Prototyping and testing: `wireframe-spec`, `heuristic-evaluation`, `a-b-test-design`
- Ops and handoff: `handoff-spec`, `design-critique`, `design-qa-checklist`
- Critique: `critique-visual-hierarchy`, `critique-typography`, `critique-color`
- Plugin route only: `/designer-toolkit:start-here`, upstream's router that names the stage you are at and the commands to run next

## What it does

A designer toolkit by Marie Claire Dean (Owl-Listener) organised by domain: design-research (personas, empathy and journey maps, interviews, usability testing, card sorting), design-systems (tokens, component specs, naming, spacing, accessibility standards, documentation), ux-strategy (information architecture, content strategy, navigation, user flows), ui-design (color, typography, layout grids, responsive and dark mode, visual hierarchy, Gestalt laws), interaction-design (micro-interactions, animation, state machines, gestures, error handling, feedback, UX laws such as Fitts's and Hick's), prototyping-testing (wireframe specs, heuristic evaluations, accessibility audits, A/B tests), design-ops (handoff specs, critique facilitation, sprint planning, QA checklists, design debt), designer-toolkit (rationale, case studies, presentations, UX writing), and visual-critique (hierarchy, brand consistency, composition, typography).

The pointer installs the whole design-practice collection, which is a large number of skills and descriptions in the agent's context. For a handful, pass their names after `--skill` to the same `npx skills add Owl-Listener/designer-skills` command, or use the single-skill pointers in this catalogue. The upstream marketplace also lists four sibling collections (AI product design, UX program management, design leadership, inclusive design) that live in separate repos and are not installed here.

## When NOT to use

- Single-skill needs — installing the full suite may be heavier than needed
- If you only need design review — use `plan-design-review` or `creative-director`
