---
name: phuryn-pm-skills
description: |
  6 product management skills covering market research and product discovery:
  customer journey maps with touchpoints and emotions, 3-persona JTBD analysis,
  Teresa Torres opportunity-solution trees, customer interview scripts, 8-section
  PRDs, and feature prioritization by theme, impact, effort, and risk.
triggers:
  - "phuryn"
  - "JTBD personas"
  - "interview script"
  - "feature prioritization"
  - "analyze feature requests"
  - "create PRD"
das:
  category: product-pm
  upstream: "https://github.com/phuryn/pm-skills"
  version: latest
  install: false
---

# phuryn-pm-skills

> Catalogue stub — full package: [phuryn/pm-skills](https://github.com/phuryn/pm-skills)

## Decision tree

Run this before product discovery or market research work:

1. **Is a Phuryn skill already installed?**
   Check: `~/.design-agent-skills/skills/create-prd/SKILL.md` exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add phuryn/pm-skills
```

## Invoke after install

- `customer-journey-map` — "customer journey with emotions", "touchpoint map"
- `user-personas` — "3 personas", "JTBD personas", "pains and gains"
- `opportunity-solution-tree` — "opportunity solution tree", "Teresa Torres"
- `interview-script` — "customer interview", "JTBD interview"
- `create-prd` — "create PRD", "8-section PRD"
- `analyze-feature-requests` — "feature requests", "prioritize features"

## What it does

6 PM skills focused on discovery and research: customer journey maps with emotion layers and opportunity identification, 3-persona JTBD analysis with pains/gains, Teresa Torres' opportunity-solution trees, customer interview scripts with JTBD probing questions, 8-section PRDs from problem to release plan, and feature request analysis prioritized by theme, impact, effort, and risk.
