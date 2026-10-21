---
name: coreyhaines-marketing
description: |
  CRO (conversion rate optimization) skills by Corey Haines: optimize post-signup
  onboarding and activation, improve conversion rates on marketing pages, and
  optimize signup and trial activation flows. Part of a larger marketing skills library.
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
   Check: `~/.agents/skills/cro/SKILL.md` (global) or `.agents/skills/cro/SKILL.md` (project) exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

Pick the skills you need (add `-g` for global install):

```bash
npx skills add coreyhaines31/marketingskills --skill cro -y
npx skills add coreyhaines31/marketingskills --skill onboarding -y
npx skills add coreyhaines31/marketingskills --skill signup -y
```

Or install the whole marketing library:

```bash
npx skills add coreyhaines31/marketingskills -y
```

## Invoke after install

- `onboarding` — "onboarding optimization", "activation rate", "post-signup"
- `cro` — "marketing page conversion", "landing page CRO"
- `signup` — "signup flow", "trial activation", "signup conversion"

## What it does

CRO skills targeting the core SaaS conversion funnel: improving post-signup onboarding activation (`onboarding`), optimizing conversion on marketing pages and forms (`cro`), and tightening signup and trial flows (`signup`). The same repo also ships skills for pricing, paywalls, popups, copywriting, SEO, and more. By Corey Haines, founder of Swipefiles.
