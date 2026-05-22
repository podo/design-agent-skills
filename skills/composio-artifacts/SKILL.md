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

Run this before building artifacts that connect to external services:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/composio-artifacts/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `composio-artifacts` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/composio-artifacts && \
  curl -fsSL \
    https://raw.githubusercontent.com/ComposioHQ/awesome-claude-skills/master/artifacts-builder/SKILL.md \
    -o ~/.design-agent-skills/skills/composio-artifacts/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/composio-artifacts/SKILL.md` — output must NOT contain `das:`.

> **Required:** Set `COMPOSIO_API_KEY` environment variable. Get key at [composio.dev](https://composio.dev).

## Invoke after install

- Skill name: `composio-artifacts`
- Trigger phrases: "composio artifacts", "interactive artifact", "artifact with GitHub"

## What it does

Builds Claude artifacts that interact with real external services via Composio's 250+ tool integrations. Artifacts can read/write GitHub issues, send Slack messages, update Linear tickets, query Notion databases — all from within a Claude artifact. Requires a Composio account and `COMPOSIO_API_KEY` configured.

## When NOT to use

- Static artifacts with no external service interaction
- When you don't have a Composio account
