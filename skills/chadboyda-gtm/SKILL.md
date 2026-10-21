---
name: chadboyda-gtm
description: |
  Go-to-market agent skills that turn a coding agent into a GTM operator:
  positioning + ICP, AI pricing, sales-motion design, cold outreach, AI SDR,
  lead enrichment, multi-platform and Product Hunt launches, programmatic SEO,
  paid creative, retention/expansion, partner programs, and GTM
  metrics/attribution.
triggers:
  - "agent-gtm-skills"
  - "chadboyda"
  - "GTM operator"
  - "go-to-market skills"
  - "sales motion"
  - "AI SDR"
  - "pricing strategy"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/chadboyda/agent-gtm-skills"
  version: latest
---

# chadboyda-gtm

> Catalogue stub — full package: [chadboyda/agent-gtm-skills](https://github.com/chadboyda/agent-gtm-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 18 skills (`positioning-icp`, `ai-pricing`, `sales-motion-design`, `ai-cold-outreach`, `ai-sdr`, `lead-enrichment`, `video-outreach`, `multi-platform-launch`, `ai-seo`, `social-selling`, `content-to-pipeline`, `ai-ugc-ads`, `paid-creative-ai`, `expansion-retention`, `partner-affiliate`, `gtm-engineering`, `solo-founder-gtm`, `gtm-metrics`); checking the first.
   - Global: `f=~/.agents/skills/positioning-icp/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/positioning-icp/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `positioning-icp`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/chadboyda-gtm ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add chadboyda/agent-gtm-skills --skill positioning-icp ai-pricing sales-motion-design ai-cold-outreach ai-sdr lead-enrichment video-outreach multi-platform-launch ai-seo social-selling content-to-pipeline ai-ugc-ads paid-creative-ai expansion-retention partner-affiliate gtm-engineering solo-founder-gtm gtm-metrics -g -y
   ```

   **Project:**
   ```bash
   npx skills add chadboyda/agent-gtm-skills --skill positioning-icp ai-pricing sales-motion-design ai-cold-outreach ai-sdr lead-enrichment video-outreach multi-platform-launch ai-seo social-selling content-to-pipeline ai-ugc-ads paid-creative-ai expansion-retention partner-affiliate gtm-engineering solo-founder-gtm gtm-metrics -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add chadboyda/agent-gtm-skills
/plugin install agent-gtm-skills@agent-gtm-skills
```

**Heads-up**

- **License:** MIT (stated in the README; the repo has no LICENSE file)
<!-- das:install:end -->

## Invoke after install

- Skill names: `positioning-icp`, `ai-pricing`, `sales-motion-design`, `ai-cold-outreach`, `ai-sdr`, `lead-enrichment`, `video-outreach`, `multi-platform-launch`, `ai-seo`, `social-selling`, `content-to-pipeline`, `ai-ugc-ads`, `paid-creative-ai`, `expansion-retention`, `partner-affiliate`, `gtm-engineering`, `solo-founder-gtm`, `gtm-metrics`
- Trigger phrases: "go-to-market skills", "sales motion", "AI SDR", "pricing strategy", "GTM operator"

## What it does

GTM skills across strategy, outbound, inbound, paid, retention, and ops. Each is a long, benchmark-heavy playbook; they assume the paid third-party tools they compare (Clay, Apollo, DataForSEO, Arcads, HeyGen and similar), but installing needs no key.

| Group | Skills |
|-------|--------|
| Strategy | `positioning-icp`, `ai-pricing`, `sales-motion-design` |
| Outbound | `ai-cold-outreach`, `ai-sdr`, `lead-enrichment`, `video-outreach` |
| Inbound | `multi-platform-launch`, `ai-seo`, `social-selling`, `content-to-pipeline` |
| Paid | `ai-ugc-ads`, `paid-creative-ai` |
| Retention | `expansion-retention`, `partner-affiliate` |
| Operations | `gtm-engineering`, `solo-founder-gtm`, `gtm-metrics` |

To install only some of them, run the install command with just those names after `--skill`.

## When NOT to use

- Product discovery, PRDs, roadmaps → use `assimovt-productskills` or `deanpeters-pm-skills`
- Product positioning craft (messaging hierarchy) → use `product-position`
- Conversion-rate optimization (onboarding, signup) → use `coreyhaines-marketing`
- Landing-page / product copy → use `copywriting-skill`
