---
name: ui-ux-pro-max
description: |
  UI/UX design intelligence: a searchable local database of design styles, color
  palettes, font pairings, UX guidelines and chart types, plus stack-specific UI
  guidance for React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter,
  Tailwind, shadcn/ui and more. Ships with a Python search script.
triggers:
  - "UI UX pro max"
  - "50 styles"
  - "97 palettes"
  - "multi-stack UI"
  - "nextlevelbuilder"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
  upstream_path: ".claude/skills/ui-ux-pro-max/SKILL.md"
  version: latest
  install: false
---

# ui-ux-pro-max

> Catalogue stub — full skill: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/ui-ux-pro-max/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ui-ux-pro-max/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ui-ux-pro-max`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ui-ux-pro-max ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max -g -y
   ```

   **Project:**
   ```bash
   npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

**Heads-up**

- **Requires:** Python 3 (no extra packages): the skill queries its bundled database by running scripts/search.py. The installed SKILL.md writes that path as ${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max/scripts/search.py, which only resolves with the plugin route; with the npx install the script sits at ui-ux-pro-max/scripts/search.py inside the skills directory
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `ui-ux-pro-max`
- Trigger phrases: "UI UX pro max", "multi-stack UI", "nextlevelbuilder"

## What it does

Gives the agent a searchable, local design-intelligence database and a workflow for using it: choose a style, color palette, typography pairing and UX rules that fit the product type, then apply stack-specific guidance for the chosen framework. The agent queries the data through the bundled `search.py` script (by domain such as style, color, typography or ux, or by stack), can generate a full design system recommendation for a project, and can persist it to files. It does not install packages or change the system. Choose a style plus palette plus stack and get consistently structured UI with a deliberate visual direction.

Upstream also publishes several sibling skills (`design`, `brand`, `slides`, `design-system`, `banner-design`, `ui-styling`) in the same repo. Their generic names collide with other tools, so this pointer installs only the main skill; add the others with the same command and their names after `--skill`.

## When NOT to use

- If you only need one framework — consider `taste-skill` or `ui-craft` instead
- Backend, API, or non-UI tasks
