---
name: superdesign-skill
description: |
  AI design agent for infinite-canvas ideation inside the IDE — searches design prompts,
  extracts brand guides, creates projects, and iterates on design drafts. Works via the
  @superdesign/cli package which must be installed globally first.
triggers:
  - "superdesign"
  - "infinite canvas"
  - "design canvas IDE"
  - "superdesigndev"
das:
  category: creative-3d
  upstream: "https://github.com/superdesigndev/superdesign-skill"
  version: latest
  install: false
---

# superdesign-skill

> Catalogue stub — full platform: [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill)

## Account / environment requirement

**@superdesign/cli must be installed globally.** The skill communicates with the SuperDesign canvas via the CLI bridge — without it, skill invocation will fail.

## Install methods

| Step | Command |
|------|---------|
| 1. Install SuperDesign CLI | `npm install -g @superdesign/cli@latest` |
| 2. Install the Claude skill | `npx skills add superdesigndev/superdesign-skill` |
| 3. Launch the canvas | `superdesign` (opens browser canvas) |

## Decision tree

1. **Is @superdesign/cli installed?** Run `superdesign --version`.
   - No → install it: `npm install -g @superdesign/cli@latest`
   - Yes → go to step 2.
2. **Is the skill installed?** Check `~/.design-agent-skills/skills/superdesign-skill/SKILL.md`.
   - No → `npx skills add superdesigndev/superdesign-skill`
   - Yes → invoke `superdesign-skill` and proceed.
3. **Is the canvas running?** Open `superdesign` in a terminal if not already open.

## What it does

Brings an infinite-canvas design workspace directly into the IDE agent loop. The agent can search a library of design prompts, extract brand identity from existing assets, create new design projects, and iterate on design drafts with immediate visual feedback in the browser canvas. Suited for open-ended ideation sessions where spatial organization of design variants matters.

## When NOT to use

- Without the SuperDesign CLI installed — the skill has no fallback rendering path
- Standard UI code generation without ideation overhead — use a component-generation skill instead
- Headless or server environments without a browser
