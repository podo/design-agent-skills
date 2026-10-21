---
name: coreyhaines-marketing
description: |
  CRO (conversion rate optimization) skills by Corey Haines: optimize post-signup
  onboarding and activation, improve conversion rates on marketing pages and forms, and
  optimize signup and trial activation flows. Part of a larger marketing skills library
  of which only these three are installed.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 3 skills (`cro`, `onboarding`, `signup`); checking the first.
   - Global: `f=~/.agents/skills/cro/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/cro/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `cro`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/coreyhaines-marketing ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add coreyhaines31/marketingskills --skill cro onboarding signup -g -y
   ```

   **Project:**
   ```bash
   npx skills add coreyhaines31/marketingskills --skill cro onboarding signup -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills@marketingskills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- `onboarding` — "onboarding optimization", "activation rate", "post-signup"
- `cro` — "marketing page conversion", "landing page CRO"
- `signup` — "signup flow", "trial activation", "signup conversion"

## What it does

CRO skills targeting the core SaaS conversion funnel: improving post-signup onboarding and activation (`onboarding`), optimizing conversion on marketing pages and forms (`cro`), and tightening signup and trial flows (`signup`). The skills read `.agents/product-marketing.md` when it exists; the library's `product-marketing` skill creates that context file, and you can add it with `--skill product-marketing` in the same command.

The same repo ships many more skills (pricing, paywalls, popups, copywriting, SEO, ads, and more). Pick any of them by name, for example `npx skills add coreyhaines31/marketingskills --skill pricing`; this pointer installs only the three above because the library's names are generic and would crowd your skills directory. The Claude Code plugin route installs the whole library instead. By Corey Haines, founder of Swipefiles.

## When NOT to use

- Visual or interaction design of the page itself — this covers conversion strategy, not UI craft (use `ui-ux-pro-max` or `interaction-design`)
- General UX research and usability findings (use `ux-designer-skill`)
