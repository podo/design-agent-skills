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
  upstream_path: "skills/make-interfaces-feel-better/SKILL.md"
  version: latest
  install: true
---

# make-interfaces-better

> Catalogue stub — full skill: [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better)

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `make-interfaces-feel-better`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/make-interfaces-feel-better/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/make-interfaces-feel-better/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `make-interfaces-feel-better`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/make-interfaces-better ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add jakubkrehel/make-interfaces-feel-better --skill make-interfaces-feel-better -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add jakubkrehel/make-interfaces-feel-better --skill make-interfaces-feel-better -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `make-interfaces-feel-better`
- Trigger phrases: "make interfaces better", "interface polish", "micro-interactions", "polished UI"

## What it does

Applies Jakub Krehel's design engineering principles to make interfaces feel genuinely polished — not just functional. Covers micro-interactions, precise typography choices, visual hierarchy refinement, motion timing, and the subtle details (hover states, transitions, spacing rhythm) that distinguish well-crafted UI from generic output. By the creator of oklch.fyi and the Interfaces publication.
