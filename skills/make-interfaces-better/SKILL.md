---
name: make-interfaces-better
description: |
  Design engineering principles for making interfaces feel polished and alive.
  Covers micro-interactions, typography details, visual refinement, and the small
  decisions that separate "it works" from "it feels right". By Jakub Krehel
  (Interfere, Interfaces magazine, oklch.fyi).
triggers:
  - "make interfaces better"
  - "interface polish"
  - "micro-interactions"
  - "interface feel"
  - "polished UI"
  - "UI refinement"
das:
  category: interaction-polish
  upstream: "https://github.com/jakubkrehel/make-interfaces-feel-better"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# make-interfaces-better

> Catalogue stub — full skill: [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better)

## Decision tree

Run this when polishing any UI component or interaction:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/make-interfaces-better/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `make-interfaces-better` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/make-interfaces-better && \
  curl -fsSL \
    https://raw.githubusercontent.com/jakubkrehel/make-interfaces-feel-better/main/SKILL.md \
    -o ~/.claude/skills/make-interfaces-better/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/make-interfaces-better/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `make-interfaces-better`
- Trigger phrases: "make interfaces better", "interface polish", "micro-interactions", "polished UI"

## What it does

Applies Jakub Krehel's design engineering principles to make interfaces feel genuinely polished — not just functional. Covers micro-interactions, precise typography choices, visual hierarchy refinement, motion timing, and the subtle details (hover states, transitions, spacing rhythm) that distinguish well-crafted UI from generic output. By the creator of oklch.fyi and the Interfaces publication.
