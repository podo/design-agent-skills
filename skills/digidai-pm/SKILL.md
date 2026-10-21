---
name: digidai-pm
description: |
  Senior product manager skill with SaaS metrics, PRD critique, roadmapping, discovery,
  PM career coaching, AI-product decisions, and PLG growth strategy. Ships knowledge
  domains, templates, and an opinionated style that labels assumptions and names tradeoffs.
triggers:
  - "product manager"
  - "PM frameworks"
  - "product roadmap"
  - "product discovery"
  - "SaaS metrics"
  - "product strategy"
  - "product requirements"
das:
  category: product-pm
  upstream: "https://github.com/Digidai/product-manager-skills"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# digidai-pm

> Catalogue stub — full skill: [Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `product-manager-skills`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/product-manager-skills/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/product-manager-skills/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `product-manager-skills`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/digidai-pm ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Digidai/product-manager-skills --skill product-manager-skills -g -y
   ```

   **Project:**
   ```bash
   npx skills add Digidai/product-manager-skills --skill product-manager-skills -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** CC BY-NC-SA 4.0 (non-commercial, share-alike; GitHub reports it as NOASSERTION)
<!-- das:install:end -->

## Invoke after install

- Skill name: `product-manager-skills`
- Trigger phrases: "product manager", "PM frameworks", "product roadmap", "SaaS metrics"

## What it does

Brings senior PM thinking to product decisions. Diagnoses SaaS health metrics, critiques and writes PRDs, plans roadmaps, runs discovery (interview plans, opportunity-solution trees, problem statements), coaches PM career transitions, pressure-tests AI product decisions, and designs PLG growth strategies. Ships a set of fill-in templates and examples, and answers in an opinionated style that labels assumptions and names tradeoffs. Oriented toward B2B and consumer digital products.

## When NOT to use

- Commercial or client work where a non-commercial licence is a problem (use `phuryn-pm-skills`, which is MIT-licensed)
- Design-side research synthesis (use `user-research-cookiy`)
