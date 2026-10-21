---
name: search-ux
description: |
  Design search experiences that help users find, recover from failure, and refine.
  Query input, autocomplete, results, ranking, filtering, zero-results, and analytics.
triggers:
  - "search UX"
  - "search experience design"
  - "zero results state"
  - "autocomplete design"
  - "faceted search UX"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/Owl-Listener/designer-skills"
  upstream_path: "interaction-design/skills/search-ux/SKILL.md"
  version: latest
---

# search-ux

> Catalogue stub — full skill: [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/search-ux/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/search-ux/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `search-ux`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/search-ux ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill search-ux -g -y
   ```

   **Project:**
   ```bash
   npx skills add Owl-Listener/designer-skills --skill search-ux -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Owl-Listener/designer-skills
/plugin install interaction-design@designer-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `search-ux`
- Trigger phrases: "search UX", "search experience design", "zero results state", "autocomplete design", "faceted search UX"

## What it does

The end-to-end search-UX skill from Owl-Listener's designer-skills: search input and autocomplete, results layout and ranking, faceted filtering, the often-neglected zero-results state (treated as a retention moment), and search analytics (zero-result queries, click position, abandonment).

## When NOT to use

- Backend search indexing/relevance tuning → an engineering concern, not this skill
- General navigation IA → use `information-architecture-and-navigation`
