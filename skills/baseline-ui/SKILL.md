---
name: baseline-ui
description: |
  Opinionated UI baseline that deslops AI-generated interfaces: fixes spacing,
  hierarchy, typography, and small layout issues, and enforces Tailwind CSS,
  component, interaction, and animation rules. Use as a fast cleanup or polish pass.
triggers:
  - "baseline UI"
  - "animation validation"
  - "typography scale"
  - "Tailwind anti-patterns"
das:
  category: accessibility-quality
  upstream: "https://github.com/ibelick/ui-skills"
  upstream_path: "skills/baseline-ui/SKILL.md"
  version: latest
  install: true
---

# baseline-ui

> Catalogue stub — full skill: [ibelick/ui-skills](https://github.com/ibelick/ui-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/baseline-ui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/baseline-ui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `baseline-ui`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/baseline-ui ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ibelick/ui-skills --skill baseline-ui -g -y
   ```

   **Project:**
   ```bash
   npx skills add ibelick/ui-skills --skill baseline-ui -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `baseline-ui`
- Slash commands: `/baseline-ui` (apply the baseline to UI work in this conversation), `/baseline-ui <file>` (review a file and list violations with fixes)
- Trigger phrases: "baseline UI", "animation validation", "typography scale", "Tailwind anti-patterns"

## What it does

Applies an opinionated UI baseline to prevent AI-generated interface slop. The rules are written as MUST / SHOULD / NEVER constraints covering the Tailwind CSS stack, accessible component primitives, interaction patterns (destructive-action dialogs, loading skeletons, safe areas), animation limits (compositor-only properties, short feedback durations, reduced motion), typography (balanced headings, tabular numbers), layout (fixed z-index scale), performance, and design restraint (no purple gradients, no glow as the primary affordance). Given a file, it reports each violation with the offending snippet, why it matters, and a concrete fix.

## When NOT to use

- Full WCAG audits or keyboard and screen-reader fixes → use `accessibility-catalogue`
- Non-Tailwind or non-web UI (SwiftUI, Android) → use `swiftui-design-skill` or `material-3-skill`
- Persistent critique commands and a larger design toolchain → use `impeccable`
