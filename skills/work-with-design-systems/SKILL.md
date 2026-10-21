---
name: work-with-design-systems
description: |
  Two-mode Figma design system skill — Inspect mode (read-only WCAG audit,
  component scoring, detached-instance detection, handoff docs) and Build mode
  (phased creation with variable bindings, slots, descriptions), with optional sync
  to tokens.css + AI rules. Needs the figma-use skill and the Figma MCP server.
triggers:
  - "work with design systems"
  - "natdexterra"
  - "Figma inspect mode"
  - "build design system Figma"
  - "Figma design system audit"
  - "WCAG component audit"
das:
  type: skill
  category: figma-code
  upstream: "https://github.com/natdexterra/work-with-design-systems"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# work-with-design-systems

> Catalogue stub — full skill: [natdexterra/work-with-design-systems](https://github.com/natdexterra/work-with-design-systems)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/work-with-design-systems/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/work-with-design-systems/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `work-with-design-systems`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/work-with-design-systems ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add natdexterra/work-with-design-systems --skill work-with-design-systems -g -y
   ```

   **Project:**
   ```bash
   npx skills add natdexterra/work-with-design-systems --skill work-with-design-systems -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** The figma-use skill (installed by the figma-official-skills stub) and the remote Figma MCP server connected; the skill must invoke figma-use before every use_figma call; Figma MCP read calls are rate-limited per plan and seat (upstream cites 10 calls/min and 200/day on a Professional Full or Dev seat)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `work-with-design-systems`
- Needs the `figma-use` skill (from the `figma-official-skills` stub) and a connected Figma MCP server
- Triggers: "work with design systems", "Figma inspect mode", "build design system Figma", "WCAG component audit"

## What it does

Two operational modes for Figma design systems, auto-detected from your request. **Inspect mode**: read-only analysis with audit modules for token compliance, interactive states, WCAG accessibility, detached instances, naming quality and component descriptions, weighted readiness scoring, and developer handoff documentation. The skill always pauses after inspect and waits for your decision before any build action. **Build mode**: guided phased design system creation covering variable bindings, slot-based component composition and structured component descriptions, with an optional final phase (off by default, only on explicit request) that exports `tokens.css` and AI-readable rules files into your codebase.

## When NOT to use

- Single component work not requiring system architecture
- General design work without a design system — use `mobile-app-design` or `ui-craft`
- Token enforcement during Figma writes — use `claude2figma`
- Implementing Figma designs as code — use `figma-official-skills` (its `figma-design-to-code` skill)
