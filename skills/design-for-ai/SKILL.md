---
name: design-for-ai
description: |
  Design-foundations system for Claude Code built on Design for Hackers: a four-stage workflow
  (research, plan, mock, build) with a seeded design-DNA dealer, dual-blind review, and doctrine
  skills for usability, data visualisation and prototyping.
triggers:
  - "design for AI"
  - "rtd design"
  - "design-for-ai"
  - "design research plan mock build"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/ryanthedev/design-for-ai"
  version: latest
  install: false
---

# design-for-ai

> Catalogue stub — full package: [ryanthedev/design-for-ai](https://github.com/ryanthedev/design-for-ai)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 4 skills (`prototype`, `clarify`, `usability`, `data-viz`); checking the first.
   - Global: `f=~/.agents/skills/prototype/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/prototype/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `prototype`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-for-ai ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ryanthedev/design-for-ai --skill prototype clarify usability data-viz -g -y
   ```

   **Project:**
   ```bash
   npx skills add ryanthedev/design-for-ai --skill prototype clarify usability data-viz -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add ryanthedev/rtd-claude-inn
/plugin install design-for-ai@rtd
```

**Heads-up**

- **Requires:** Node.js for the plugin's palette, dealer and detector scripts (scripts/*.mjs); Optional: a browser MCP so the prototype skill can render and screenshot mocks
- **License:** MIT per plugin.json and README; no LICENSE file in the repository
- **Name collision:** `prototype` is also written by `emilkowalski-skill` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Claude Code plugin route (the full system): `/design-for-ai:research`, then `/design-for-ai:plan`, `/design-for-ai:mock`, `/design-for-ai:build`
- Skill name: `prototype` — renders a self-contained HTML mock or wireframe from design tokens and page specs
- Skill name: `clarify` — turns an underspecified design request into a confirmed brief
- Skill name: `usability` — heuristic evaluation, UX laws, operability questions
- Skill name: `data-viz` — chart type, truthful encoding, dashboard layout
- Trigger phrases: "design for AI", "rtd design", "design research plan mock build"

## What it does

Teaches the agent design vocabulary instead of default AI-looking output (cyan-on-dark heroes, uniform card grids, glassmorphism everywhere). The workflow takes any design idea from brief to a viewable, gated artifact: `research` facilitates the brief, `plan` turns it into a phased design plan, `mock` renders a throwaway prototype and gates on your sign-off, and `build` executes the plan phase by phase with build, review and commit steps. A seeded dealer picks composition, hue and signature from named references (any axis can be pinned by you), and review is dual-blind: an isolated critique plus a deterministic AI-tell detector.

The commands, agents and doctrine files come only with the Claude Code plugin route. `npx skills add` installs the four standalone skills; `usability` and `data-viz` are doctrine files the workflow reads, so on Claude Code they are marked as not directly invocable.

## When NOT to use

- Lightweight UI polish on an existing component — use `taste-skill` for faster, lower-overhead iteration
- Accessibility-specific audits focused on ARIA, keyboard navigation, or WCAG compliance — use `fixing-accessibility` or `wcag-audit-patterns`
