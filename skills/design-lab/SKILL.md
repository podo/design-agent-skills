---
name: design-lab
description: |
  Interactive design exploration environment: conducts design interviews,
  generates multiple UI variants in a temporary design lab, collects feedback,
  and refines the design until the direction is confirmed.
triggers:
  - "design lab"
  - "design exploration"
  - "design variants"
  - "iterative design"
das:
  category: interaction-polish
  upstream: "https://github.com/0xdesign/design-plugin"
  upstream_path: "design-and-refine/skills/design-lab/SKILL.md"
  version: latest
  install: true
---

# design-lab

> Catalogue stub — full skill: [0xdesign/design-plugin](https://github.com/0xdesign/design-plugin)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/design-lab/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-lab/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-lab`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-lab ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add 0xdesign/design-plugin --skill design-lab -g -y
   ```

   **Project:**
   ```bash
   npx skills add 0xdesign/design-plugin --skill design-lab -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add 0xdesign/design-plugin
/plugin install design-and-refine@design-plugins
```

**Heads-up**

- **Requires:** A web project with a running dev server (the variations are previewed in the browser)
- **License:** no LICENSE file in the upstream repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-lab`
- Trigger phrases: "design lab", "design exploration", "design variants", "iterative design"
- Plugin route only: the `/design-and-refine:start` command (optionally with a component name)

## What it does

Runs an interactive design exploration session in the user's own codebase. It first conducts a brief design interview and infers the existing design system, then generates several distinct UI variations as real working components in a temporary design-lab route. You compare them side by side in the browser, leave element-level feedback through an overlay, and the skill synthesizes a refined version, repeating until a direction is confirmed. It ends with an implementation plan and removes its temporary files.

The skill's text relies on a `FeedbackOverlay` template that lives outside the skill directory, in the plugin's `templates` folder. The npx install copies only the skill, so the agent recreates the overlay from the skill's description; for the complete, upstream-intended setup use the Claude Code plugin route above.

## When NOT to use

- A single design pass with no comparison loop → use `design-consultation` or `plan-design-review`
- Polishing or cleaning up an existing interface → use `baseline-ui`
- Generating and iterating visuals outside a codebase → use `design-catalogue` to pick a design-generation skill
