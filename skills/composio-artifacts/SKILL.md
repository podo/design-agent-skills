---
name: composio-artifacts
description: |
  Build interactive Claude artifacts with Composio tools. Connects artifacts to
  real external services (GitHub, Slack, Linear, Notion) via Composio's 250+
  tool integrations. Requires a Composio account and API key.
triggers:
  - "composio artifacts"
  - "interactive artifact"
  - "artifact with tools"
  - "artifact with GitHub"
  - "composio"
das:
  category: official-suites
  upstream: "https://github.com/ComposioHQ/awesome-claude-skills"
  upstream_path: "artifacts-builder/SKILL.md"
  version: master
  install: true
---

# composio-artifacts

> Catalogue stub — full skill: [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/artifacts-builder/SKILL.md)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `artifacts-builder`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/artifacts-builder/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/artifacts-builder/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `artifacts-builder`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/composio-artifacts ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill artifacts-builder -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill artifacts-builder -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `artifacts-builder`
- Trigger phrases: "composio artifacts", "interactive artifact", "artifact with GitHub"

## What it does

Builds Claude artifacts that interact with real external services via Composio's 250+ tool integrations. Artifacts can read/write GitHub issues, send Slack messages, update Linear tickets, query Notion databases — all from within a Claude artifact. Requires a Composio account and `COMPOSIO_API_KEY` configured.

## When NOT to use

- Static artifacts with no external service interaction
- When you don't have a Composio account
