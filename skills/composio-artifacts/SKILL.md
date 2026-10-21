---
name: composio-artifacts
description: |
  Build elaborate multi-component claude.ai HTML artifacts with React, TypeScript, Vite,
  Tailwind CSS, and shadcn/ui, then bundle them into a single HTML file. This is the
  artifacts-builder skill from ComposioHQ's awesome-claude-skills collection, a copy of
  Anthropic's web-artifacts-builder. It does not integrate Composio tools.
triggers:
  - "composio artifacts"
  - "interactive artifact"
  - "artifacts builder"
  - "shadcn artifact"
  - "bundle artifact to single HTML"
  - "composio"
das:
  category: official-suites
  upstream: "https://github.com/ComposioHQ/awesome-claude-skills"
  upstream_path: "artifacts-builder/SKILL.md"
  version: latest
  install: true
---

# composio-artifacts

> Catalogue stub — full skill: [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/artifacts-builder/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `artifacts-builder`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/artifacts-builder/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/artifacts-builder/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `artifacts-builder`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/composio-artifacts ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill artifacts-builder -g -y
   ```

   **Project:**
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill artifacts-builder -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js 18+ and a shell (the bundled init script runs `npm install -g pnpm` if pnpm is missing, then installs npm dependencies)
- **License:** Apache-2.0 (skill's own LICENSE.txt; the repo has no top-level LICENSE file)
<!-- das:install:end -->

## Invoke after install

- Skill name: `artifacts-builder`
- Trigger phrases: "composio artifacts", "interactive artifact", "artifacts builder", "shadcn artifact", "bundle artifact to single HTML"

## What it does

A suite of tools for building complex claude.ai artifacts that need state management, routing, or shadcn/ui components. The skill scaffolds a React + TypeScript + Vite project with Tailwind CSS and a set of pre-installed shadcn/ui components (`scripts/init-artifact.sh`), lets the agent develop the artifact in that project, then bundles everything into one self-contained `bundle.html` with Parcel and html-inline (`scripts/bundle-artifact.sh`) that can be shared as an artifact. It also carries design guidance to avoid "AI slop" (centered layouts, purple gradients, uniform rounded corners, Inter).

The skill is a copy of Anthropic's `web-artifacts-builder` that happens to live in Composio's collection. Despite the stub name and trigger "composio", it contains no Composio integration: no external tool calls, no API key.

## When NOT to use

- Simple single-file HTML or JSX artifacts that need no state, routing, or component library
- When you want Anthropic's own maintained copy — use `anthropics-skills` (installs `web-artifacts-builder`)
- When you want an artifact wired to external services (GitHub, Slack, Linear, Notion) through Composio: that is a different Composio skill (`connect-apps` in the same upstream repo) and is not part of this catalogue
