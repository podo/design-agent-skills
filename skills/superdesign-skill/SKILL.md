---
name: superdesign-skill
description: |
  AI design agent for coding agents: design or redesign frontend UI, presentations and marketing
  graphics on the hosted Superdesign infinite canvas, with project context read from your code
  and branchable drafts you refine. Works through the @superdesign/cli package.
triggers:
  - "superdesign"
  - "infinite canvas"
  - "design canvas IDE"
  - "superdesigndev"
das:
  type: skill
  category: creative-3d
  upstream: "https://github.com/superdesigndev/superdesign-skill"
  upstream_path: "skills/superdesign/SKILL.md"
  version: latest
  install: true
---

# superdesign-skill

> Catalogue stub — full skill: [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `superdesign`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/superdesign/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/superdesign/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `superdesign`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/superdesign-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add superdesigndev/superdesign-skill --skill superdesign -g -y
   ```

   **Project:**
   ```bash
   npx skills add superdesigndev/superdesign-skill --skill superdesign -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add superdesigndev/superdesign-skill
/plugin install superdesign@superdesign
```

**Heads-up**

- **Requires:** Superdesign CLI installed globally (`npm install -g @superdesign/cli@latest`) and a Superdesign account (`superdesign login`); the skill drives the hosted superdesign.dev canvas through that CLI
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Install the CLI it drives and sign in first: `npm install -g @superdesign/cli@latest`, then `superdesign login`.

- Skill name: `superdesign`
- On Claude Code, the plugin route is namespaced and invoked as `/superdesign:superdesign`; upstream says not to also run `npx skills add` there (it leaves a second, unnamespaced copy)
- Trigger phrases: "superdesign", "infinite canvas", "superdesigndev"

## What it does

Brings the Superdesign design agent into the coding-agent loop. It finds design direction and real style references, sets up a design system from your codebase, approves slide outlines for presentations, and generates and iterates design drafts (UI, slide decks, graphics) on the hosted infinite canvas, remembering the project between sessions. Suited for open-ended ideation where branching design variants side by side matters. Superdesign is a hosted product from Superdesign dev, Inc. (superdesign.dev); the skill is its client and needs the CLI and an account.

## When NOT to use

- Without the Superdesign CLI and an account: the skill drives the hosted canvas through that CLI
- Standard UI code generation without ideation overhead — use a component-generation skill instead
- Headless or server environments without a browser for the login step
