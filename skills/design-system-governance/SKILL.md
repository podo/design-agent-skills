---
name: design-system-governance
description: |
  Define how a design system evolves: ownership models, contribution lifecycle,
  semantic versioning as a contract, deprecation policy, and quality gates.
triggers:
  - "design system governance"
  - "design system contribution model"
  - "component versioning policy"
  - "design system deprecation"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "design-systems/skills/design-system-governance/SKILL.md"
  version: latest
---

# design-system-governance

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/design-system-governance/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/design-system-governance/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-system-governance ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-system-governance -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-system-governance -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.

## What it does

Owls design-system-governance skill: the three ownership models (centralized / federated / hybrid) with trade-offs, the contribution lifecycle (request → triage → design → review → build → release → communicate), semver as a consumer contract, a deprecation process with migration guidance, and the quality bar a component must clear to enter the system. Public alternatives omit the ownership-model analysis.

## When NOT to use

- Authoring tokens themselves → use `design-tokens-skill`
- Driving adoption of an existing system → see Owl’s design-system-adoption
