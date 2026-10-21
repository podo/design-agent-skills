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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-system-governance/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-system-governance/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-system-governance`, invoke it and proceed
   - `pointer` → go to step 2

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
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install design-systems@designer-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-system-governance`
- Trigger phrases: "design system governance", "design system contribution model", "component versioning policy", "design system deprecation"

## What it does

The Owl-Listener design-system-governance skill: the three ownership models (centralized / federated / hybrid) with trade-offs, the contribution lifecycle (request → triage → design → review → build → release → communicate), semver as a consumer contract, a deprecation process with migration guidance, and the quality bar a component must clear to enter the system.

## When NOT to use

- Authoring tokens themselves → use `design-tokens-skill`
- Driving adoption of an existing system → use `design-system-adoption` (a separate skill in the same Owl-Listener repository; this stub does not install it)
