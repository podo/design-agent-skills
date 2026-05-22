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
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/composio-artifacts/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/composio-artifacts/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/composio-artifacts ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill composio-artifacts -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add ComposioHQ/awesome-claude-skills --skill composio-artifacts -y
   ```

## Invoke after install

- Skill name: `composio-artifacts`
- Trigger phrases: "composio artifacts", "interactive artifact", "artifact with GitHub"

## What it does

Builds Claude artifacts that interact with real external services via Composio's 250+ tool integrations. Artifacts can read/write GitHub issues, send Slack messages, update Linear tickets, query Notion databases — all from within a Claude artifact. Requires a Composio account and `COMPOSIO_API_KEY` configured.

## When NOT to use

- Static artifacts with no external service interaction
- When you don't have a Composio account
