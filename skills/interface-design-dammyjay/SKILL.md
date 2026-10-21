---
name: interface-design-dammyjay
description: |
  Craft-first interface design for dashboards, admin panels, SaaS apps, tools, and
  other information-dense product UI. Applies hierarchy, token, state, and
  consistency principles to produce interfaces that are both functional and visually
  coherent. Not for marketing or landing pages.
triggers:
  - "interface design"
  - "dashboard design"
  - "admin panel"
  - "SaaS interface"
  - "dense UI"
das:
  category: interaction-polish
  upstream: "https://github.com/Dammyjay93/interface-design"
  upstream_path: ".claude/skills/interface-design/SKILL.md"
  version: latest
  install: true
---

# interface-design-dammyjay

> Catalogue stub — full skill: [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `interface-design`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/interface-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/interface-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `interface-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/interface-design-dammyjay ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Dammyjay93/interface-design --skill interface-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add Dammyjay93/interface-design --skill interface-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Dammyjay93/interface-design
/plugin install interface-design@interface-design
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `interface-design`
- Trigger phrases: "interface design", "dashboard design", "admin panel", "SaaS interface", "dense UI"
- Claude Code: `/interface-design`, or "use interface-design to build this dashboard"

## What it does

Specialises in crafting dashboards, admin panels, SaaS apps, tools, settings pages, and data interfaces where large amounts of information must be presented clearly. Pushes every UI decision to be explicit (direction, hierarchy, tokens, states, motion) so information-dense layouts remain usable, scannable, and visually polished, and strips generic AI-looking UI. It offers to save the design decisions it makes to `.interface-design/system.md` in your project so later sessions stay consistent; the file is only written if you say yes. The Claude Code plugin route additionally provides the `design-review` and `design-deslop` commands, which the skills CLI install does not.

## When NOT to use

- Marketing pages, landing pages, campaigns, or brand-only work: the skill itself excludes them
- Broader design-engineering and anti-slop workflows beyond product UI → see `ui-craft`
