---
name: neo-user-journey
description: |
  Elite UX agency skill for user journey mapping with emotional tracking. Includes Playwright testing (happy path, cognitive walkthrough, accessibility, synthetic user), 50+ UX patterns, 7 synthetic personas, Nielsen heuristics scoring, and anti-generic-AI guardrails.
triggers:
  - "user journey"
  - "UX journey"
  - "journey mapping"
  - "Playwright UX"
  - "neo-user-journey"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/Cornjebus/neo-user-journey"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# neo-user-journey

> Catalogue stub — full skill: [Cornjebus/neo-user-journey](https://github.com/Cornjebus/neo-user-journey)

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/neo-user-journey/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `neo-user-journey` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/neo-user-journey && \
  curl -fsSL \
    https://raw.githubusercontent.com/Cornjebus/neo-user-journey/main/SKILL.md \
    -o ~/.design-agent-skills/skills/neo-user-journey/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/neo-user-journey/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `neo-user-journey`
- Trigger phrases: "user journey", "UX journey", "journey mapping", "Playwright UX", "neo-user-journey"

## What it does

Elite UX agency skill for end-to-end user journey mapping with emotional state tracking at every step. Runs four Playwright test modes — happy path, cognitive walkthrough, accessibility audit, and synthetic user simulation — against live or localhost URLs. Ships with 50+ UX patterns, 7 synthetic personas representing diverse user archetypes, Nielsen heuristics scoring rubric, and explicit anti-generic-AI guardrails to prevent surface-level analysis.

## When NOT to use

- Static design work with no user flow — use a design review skill instead
- Pure visual audit with no interaction component — use `plan-design-review`
