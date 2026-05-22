---
name: digidai-pm
description: |
  Senior Product Manager agent with 30+ PM frameworks and SaaS metrics.
  Covers discovery, prioritization, roadmapping, stakeholder communication,
  and product analytics for B2B and consumer products.
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

## Decision tree

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/digidai-pm/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/digidai-pm/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/digidai-pm ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add Digidai/product-manager-skills --skill digidai-pm -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add Digidai/product-manager-skills --skill digidai-pm -y
   ```

## Invoke after install

- Skill name: `digidai-pm`
- Trigger phrases: "product manager", "PM frameworks", "product roadmap", "SaaS metrics"

## What it does

Brings senior PM thinking to product decisions with 30+ frameworks covering the full product lifecycle. Handles discovery (user research synthesis, opportunity framing), prioritization (RICE, ICE, opportunity scoring), roadmapping, stakeholder alignment, and SaaS product analytics. Oriented toward B2B and consumer digital products.
