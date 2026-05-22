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

Run this for any product management or strategy work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/digidai-pm/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `digidai-pm` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/digidai-pm && \
  curl -fsSL \
    https://raw.githubusercontent.com/Digidai/product-manager-skills/main/SKILL.md \
    -o ~/.claude/skills/digidai-pm/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/digidai-pm/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `digidai-pm`
- Trigger phrases: "product manager", "PM frameworks", "product roadmap", "SaaS metrics"

## What it does

Brings senior PM thinking to product decisions with 30+ frameworks covering the full product lifecycle. Handles discovery (user research synthesis, opportunity framing), prioritization (RICE, ICE, opportunity scoring), roadmapping, stakeholder alignment, and SaaS product analytics. Oriented toward B2B and consumer digital products.
