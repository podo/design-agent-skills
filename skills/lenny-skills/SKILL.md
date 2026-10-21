---
name: lenny-skills
description: |
  Product management and design-adjacent skills distilled from Lenny Rachitsky's podcast and
  newsletter archive, with named frameworks, checklists, and templates per skill. The catalogue
  installs the design-relevant ones: customer interviews, continuous discovery, feedback analysis,
  product reviews, onboarding and activation, PRDs, growth model, product taste, AI-native UX, and
  AI-assisted prototyping. The full library covers strategy, hiring, growth, and leadership too.
triggers:
  - "lenny skills"
  - "lenny-skills"
  - "Lenny Rachitsky skills"
  - "customer interview skill"
  - "product taste and intuition"
  - "AI-native UX"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/RefoundAI/lenny-skills"
  version: latest
---

# lenny-skills

> Catalogue stub — full package: [RefoundAI/lenny-skills](https://github.com/RefoundAI/lenny-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 10 skills (`customer-interviews`, `continuous-discovery`, `analyzing-user-feedback`, `product-reviews`, `user-onboarding-activation`, `writing-prds`, `growth-model`, `product-taste`, `ai-native-ux`, `ai-assisted-prototyping`); checking the first.
   - Global: `f=~/.agents/skills/customer-interviews/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/customer-interviews/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `customer-interviews`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/lenny-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add RefoundAI/lenny-skills --skill customer-interviews continuous-discovery analyzing-user-feedback product-reviews user-onboarding-activation writing-prds growth-model product-taste ai-native-ux ai-assisted-prototyping -g -y
   ```

   **Project:**
   ```bash
   npx skills add RefoundAI/lenny-skills --skill customer-interviews continuous-discovery analyzing-user-feedback product-reviews user-onboarding-activation writing-prds growth-model product-taste ai-native-ux ai-assisted-prototyping -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill names: `customer-interviews`, `continuous-discovery`, `analyzing-user-feedback`, `product-reviews`, `user-onboarding-activation`, `writing-prds`, `growth-model`, `product-taste`, `ai-native-ux`, `ai-assisted-prototyping`
- Invoke by name (for example `/customer-interviews`) or just describe the task and the matching skill triggers.

## What it does

Each skill packages the frameworks and templates that Lenny's guests and posts actually use, with sourced insights. The skills installed here:

| Skill | Best for |
|-------|----------|
| `customer-interviews` | Interview scripts, moderation, uncovering pain and behavioral triggers |
| `continuous-discovery` | Turning customer feedback into a steady engine for product decisions |
| `analyzing-user-feedback` | Feedback triage, pattern detection, prioritization |
| `product-reviews` | Facilitating product reviews as strategic deep-dives on craft and alignment instead of status updates |
| `user-onboarding-activation` | First-run experience, removing friction, reaching the first moment of core value |
| `writing-prds` | Turning ideas into specs that align engineering and design on the problem and success metrics |
| `growth-model` | Moving from funnel thinking to a loop-based growth model |
| `product-taste` | Building a reliable internal compass for what good looks like |
| `ai-native-ux` | Designing interfaces for probabilistic models: intent, agency, trust, and control |
| `ai-assisted-prototyping` | Building functional prototypes from natural language or mocks with AI coding tools |

The upstream repo holds many more skills (strategy, pricing, positioning, hiring, fundraising, career). They have generic names, so they are left out of the default install; add any of them by listing its name after `--skill`.

## When NOT to use

- Deep qualitative research methodology → use `user-research-cookiy`
- PM frameworks / Triple Diamond → use `pm-skills`
- JTBD personas + PRD templates → use `phuryn-pm-skills` or `deanpeters-pm-skills`
- Product positioning / messaging → use `product-position`
