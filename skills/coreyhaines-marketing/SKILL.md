---
name: coreyhaines-marketing
description: |
  3 CRO (conversion rate optimization) skills by Corey Haines: optimize post-signup
  onboarding and activation, improve conversion rates on marketing pages, and
  optimize signup and trial activation flows.
triggers:
  - "CRO"
  - "conversion optimization"
  - "onboarding optimization"
  - "signup flow"
  - "marketing page conversion"
  - "activation rate"
das:
  category: product-pm
  upstream: "https://github.com/coreyhaines31/marketingskills"
  version: latest
  install: false
---

# coreyhaines-marketing

> Catalogue stub — full package: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

## Decision tree

Run this before any conversion rate optimization work:

1. **Is a Corey Haines skill already installed?**
   Check: `~/.claude/skills/onboarding-cro/SKILL.md` exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add coreyhaines31/marketingskills
```

Or install individually:
```bash
npx skills add coreyhaines31/onboarding-cro
npx skills add coreyhaines31/page-cro
npx skills add coreyhaines31/signup-flow-cro
```

## Invoke after install

- `onboarding-cro` — "onboarding optimization", "activation rate", "post-signup"
- `page-cro` — "marketing page conversion", "landing page CRO"
- `signup-flow-cro` — "signup flow", "trial activation", "signup conversion"

## What it does

3 CRO skills targeting the core SaaS conversion funnel: improving post-signup onboarding activation, optimizing marketing page conversion rates, and tightening signup/trial flows. By Corey Haines, founder of Swipefiles.
