---
name: design-negotiation
description: |
  Advocate for design quality, scope, and time with cross-functional partners using
  evidence and shared goals — not taste or authority.
triggers:
  - "design negotiation"
  - "design advocacy"
  - "defend design decisions"
  - "stakeholder pushback"
  - "design trade-off negotiation"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "designer-toolkit/skills/design-negotiation/SKILL.md"
  version: latest
---

# design-negotiation

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-negotiation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-negotiation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-negotiation`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-negotiation ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-negotiation -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill design-negotiation -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install designer-toolkit@designer-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-negotiation`
- Trigger phrases: "design negotiation", "design advocacy", "defend design decisions", "stakeholder pushback"

## What it does

Owl's design-negotiation skill: ready-to-use approaches for timeline compression, scope cuts made without design review, stakeholder overrides ("make the button red"), and headcount requests, each grounded in evidence (research, metrics, accessibility, precedent) rather than taste. Plus building long-term influence. It points to a sibling skill, `business-design` (in the same repo's ux-strategy plugin), for commercial vocabulary; that one is not installed by this pointer.

## When NOT to use

- One-off copy/wording help → use `ux-writing-skill`
- Pure PM prioritization frameworks → use `pm-skills`
