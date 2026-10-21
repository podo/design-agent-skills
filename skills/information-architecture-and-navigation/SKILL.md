---
name: information-architecture-and-navigation
description: |
  Reference-grade information architecture and navigation: organization/labeling/navigation/
  search systems, taxonomy depth-vs-breadth, every nav pattern per device, wayfinding, findability.
triggers:
  - "information architecture"
  - "navigation design"
  - "site map structure"
  - "card sorting analysis"
  - "tree testing"
  - "findability audit"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/jpoindexter/design-and-ai-skills"
  upstream_path: "design-system-skills/information-architecture-and-navigation/SKILL.md"
  version: latest
---

# information-architecture-and-navigation

> Catalogue stub — full skill: [jpoindexter/design-and-ai-skills](https://github.com/jpoindexter/design-and-ai-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/information-architecture-and-navigation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/information-architecture-and-navigation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `information-architecture-and-navigation`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/information-architecture-and-navigation ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add jpoindexter/design-and-ai-skills --skill information-architecture-and-navigation -g -y
   ```

   **Project:**
   ```bash
   npx skills add jpoindexter/design-and-ai-skills --skill information-architecture-and-navigation -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file
<!-- das:install:end -->

## Invoke after install

- Skill name: `information-architecture-and-navigation`
- Trigger phrases: "information architecture", "navigation design", "site map structure", "card sorting analysis", "tree testing", "findability audit"

## What it does

A long IA reference built on Rosenfeld/Morville/Arango (the "polar bear book") four-systems model — organization, labeling, navigation, search — with exact-vs-ambiguous schemes, depth/breadth and faceted classification, per-device navigation patterns, wayfinding mechanics, URLs-as-IA, and the research methods (card sort, tree test, first-click) that prove findability. Much more extensive than the short `information-architecture` skill in the `designer-skills` package.

## When NOT to use

- Visual nav-bar styling only → a component/design-system concern
- Search interaction details → pair with `search-ux`
