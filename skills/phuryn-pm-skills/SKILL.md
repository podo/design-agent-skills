---
name: phuryn-pm-skills
description: |
  PM Skills Marketplace — product-management skills and chained workflows across
  nine plugins: product discovery, product strategy, execution (PRDs, OKRs,
  roadmaps, sprints, retros, release notes), market research, data analytics
  (SQL, cohort analysis, A/B testing), go-to-market, marketing & growth, a PM
  toolkit, and an AI shipping kit. Encodes proven frameworks for discovery →
  strategy → execution → launch → growth.
triggers:
  - "phuryn"
  - "PM skills marketplace"
  - "JTBD personas"
  - "interview script"
  - "feature prioritization"
  - "analyze feature requests"
  - "create PRD"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/phuryn/pm-skills"
  version: latest
---

# phuryn-pm-skills

> Catalogue stub — full package: [phuryn/pm-skills](https://github.com/phuryn/pm-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 58 skills (`analyze-feature-requests`, `brainstorm-experiments-existing`, `brainstorm-experiments-new`, `brainstorm-ideas-existing`, `brainstorm-ideas-new`, `identify-assumptions-existing`, `identify-assumptions-new`, `interview-script`, `metrics-dashboard`, `opportunity-solution-tree`, `prioritize-assumptions`, `prioritize-features`, `summarize-interview`, `ansoff-matrix`, `business-model`, `lean-canvas`, `monetization-strategy`, `pestle-analysis`, `porters-five-forces`, `pricing-strategy`, `product-strategy`, `product-vision`, `startup-canvas`, `swot-analysis`, `value-proposition`, `brainstorm-okrs`, `create-prd`, `job-stories`, `outcome-roadmap`, `pre-mortem`, `prioritization-frameworks`, `release-notes`, `sprint-plan`, `stakeholder-map`, `strategy-red-team`, `test-scenarios`, `user-stories`, `wwas`, `competitor-analysis`, `customer-journey-map`, `market-segments`, `market-sizing`, `sentiment-analysis`, `user-personas`, `user-segmentation`, `ab-test-analysis`, `cohort-analysis`, `beachhead-segment`, `competitive-battlecard`, `growth-loops`, `gtm-motions`, `gtm-strategy`, `ideal-customer-profile`, `marketing-ideas`, `north-star-metric`, `positioning-ideas`, `product-name`, `value-prop-statements`); checking the first.
   - Global: `f=~/.agents/skills/analyze-feature-requests/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/analyze-feature-requests/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `analyze-feature-requests`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/phuryn-pm-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add phuryn/pm-skills --skill analyze-feature-requests brainstorm-experiments-existing brainstorm-experiments-new brainstorm-ideas-existing brainstorm-ideas-new identify-assumptions-existing identify-assumptions-new interview-script metrics-dashboard opportunity-solution-tree prioritize-assumptions prioritize-features summarize-interview ansoff-matrix business-model lean-canvas monetization-strategy pestle-analysis porters-five-forces pricing-strategy product-strategy product-vision startup-canvas swot-analysis value-proposition brainstorm-okrs create-prd job-stories outcome-roadmap pre-mortem prioritization-frameworks release-notes sprint-plan stakeholder-map strategy-red-team test-scenarios user-stories wwas competitor-analysis customer-journey-map market-segments market-sizing sentiment-analysis user-personas user-segmentation ab-test-analysis cohort-analysis beachhead-segment competitive-battlecard growth-loops gtm-motions gtm-strategy ideal-customer-profile marketing-ideas north-star-metric positioning-ideas product-name value-prop-statements -g -y
   ```

   **Project:**
   ```bash
   npx skills add phuryn/pm-skills --skill analyze-feature-requests brainstorm-experiments-existing brainstorm-experiments-new brainstorm-ideas-existing brainstorm-ideas-new identify-assumptions-existing identify-assumptions-new interview-script metrics-dashboard opportunity-solution-tree prioritize-assumptions prioritize-features summarize-interview ansoff-matrix business-model lean-canvas monetization-strategy pestle-analysis porters-five-forces pricing-strategy product-strategy product-vision startup-canvas swot-analysis value-proposition brainstorm-okrs create-prd job-stories outcome-roadmap pre-mortem prioritization-frameworks release-notes sprint-plan stakeholder-map strategy-red-team test-scenarios user-stories wwas competitor-analysis customer-journey-map market-segments market-sizing sentiment-analysis user-personas user-segmentation ab-test-analysis cohort-analysis beachhead-segment competitive-battlecard growth-loops gtm-motions gtm-strategy ideal-customer-profile marketing-ideas north-star-metric positioning-ideas product-name value-prop-statements -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
claude plugin marketplace add phuryn/pm-skills
claude plugin install pm-product-discovery@pm-skills
claude plugin install pm-product-strategy@pm-skills
claude plugin install pm-execution@pm-skills
claude plugin install pm-market-research@pm-skills
claude plugin install pm-data-analytics@pm-skills
claude plugin install pm-go-to-market@pm-skills
claude plugin install pm-marketing-growth@pm-skills
claude plugin install pm-toolkit@pm-skills
claude plugin install pm-ai-shipping@pm-skills
```

**Heads-up**

- **License:** MIT
- **Download size:** ~22 MB.
- **Name collision:** `competitor-analysis` is also written by `assimovt-productskills` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `opportunity-solution-tree`, `customer-journey-map` is also written by `deanpeters-pm-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `interview-script`, `summarize-interview` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Skills load automatically when relevant; force one by name (for example `create-prd`, `user-personas`, `opportunity-solution-tree`, `interview-script`). The Claude Code plugin route also adds the slash commands (`/discover`, `/strategy`, `/write-prd` and others); the skills CLI route installs the skills only.

In Claude Cowork: **Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `phuryn/pm-skills`**.

## What it does

PM skills plus chained workflows, grouped in plugins:

| Plugin | Covers |
|--------|--------|
| `pm-product-discovery` | Ideation, assumptions, experiments, feature requests, customer interviews, opportunity solution tree |
| `pm-product-strategy` | Vision, strategy, business models, lean and startup canvases, pricing, competitive frameworks |
| `pm-execution` | PRDs, OKRs, roadmaps, sprints, retrospectives, release notes, user and job stories |
| `pm-market-research` | Personas, segmentation, journey maps, market sizing, sentiment, competitor analysis |
| `pm-data-analytics` | SQL queries, cohort analysis, A/B test analysis |
| `pm-go-to-market` | GTM strategy, beachhead segments, ideal customer profile, battlecards, growth loops |
| `pm-marketing-growth` | Marketing ideas, positioning, value proposition statements, North Star metric |
| `pm-toolkit` | Resume review, NDA and privacy-policy drafting, grammar check |
| `pm-ai-shipping` | For people accountable for AI-built code: document a vibe-coded app, review it, produce a shipping packet |

The skills CLI route installs the product-management skills from the discovery, strategy, execution, market-research, go-to-market and marketing plugins, plus A/B-test and cohort analysis. It leaves out the generically named skills (`code-review`, `retro`, `sql-queries`, `summarize-meeting`, `grammar-check`, `dummy-dataset`) and the toolkit and AI-shipping skills (NDA, privacy policy, resume review, vibe-code review) so they cannot overwrite a skill of yours with the same name. The plugin route installs everything, namespaced: on Claude Code prefer it and install only the plugins you need.

## When NOT to use

- Lightweight discovery + roadmaps/metrics in one bundle → use `assimovt-productskills`
- Customer journey maps / story mapping → use `deanpeters-pm-skills`
- Triple Diamond / Design Sprint facilitation → use `pm-skills`
- Behavioral product design, growth loops → use `lenny-skills`
