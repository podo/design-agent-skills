---
name: simota-agent-skills
description: |
  Large collection of specialist agent skills coordinated by an orchestrator, with a design suite: Vision (creative direction, design systems), Muse (design tokens, theming, dark mode), Frame (Figma-to-code context via MCP), Pixel (pixel-accurate HTML/CSS from mockups), Echo (simulated persona UX validation), Prose (microcopy and UX writing), and Ink (SVG icons and illustrations). The catalogue installs only these design skills.
triggers:
  - "simota"
  - "Vision skill"
  - "Muse skill"
  - "Frame skill"
  - "Pixel skill"
  - "design suite"
das:
  type: package
  category: interaction-polish
  upstream: "https://github.com/simota/agent-skills"
  version: latest
  install: false
---

# simota-agent-skills

> Catalogue stub — full package: [simota/agent-skills](https://github.com/simota/agent-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Check: `.agents/skills/vision/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The skills CLI cannot copy this repo as-is, because every skill folder links to a shared _common folder that links back (cyclic symlinks, ELOOP), and it reports success while installing nothing usable for Claude Code. A sparse clone of only the design-related skill folders leaves those links dangling, so the CLI installs each skill with its reference folder but without the shared _common docs. Add -g to the last command for a global install, and delete the clone afterwards. Upstream's own route is `make link` from a full clone, which symlinks every skill in the repo into ~/.claude/skills, ~/.agents/skills and ~/.gemini/antigravity-cli/skills.

   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/simota/agent-skills.git /tmp/simota-agent-skills
   git -C /tmp/simota-agent-skills sparse-checkout set vision muse frame pixel echo prose ink
   npx skills add /tmp/simota-agent-skills --skill vision muse frame pixel echo prose ink
   ```

**Heads-up**

- **License:** MIT
- **Name collision:** `ink` is also written by `ink-google` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `vision`, `muse`, `frame`, `pixel`, `echo`, `prose`, `ink`
- Trigger phrases: "simota", "Vision skill", "Muse skill", "Frame skill", "Pixel skill", "design suite"

## What it does

The design-related members of a large agent roster, each independently invocable:

- `vision` — directing UI/UX creative work: redesigns, new designs, trend application, design-system construction; orchestrates the other design agents and has a co-design pair mode
- `muse` — defining and managing design tokens, applying token systems to existing codebases, dark mode, cross-platform output
- `frame` — extracting and structuring design context from Figma through the Figma MCP server for downstream implementation, or Code Connect management
- `pixel` — generating pixel-accurate HTML/CSS from image mockups and checking the result visually
- `echo` — simulating users to evaluate existing flows: cognitive walkthroughs, unmet needs, JTBD, opportunity trees (not real-user research)
- `prose` — user-facing UX text: microcopy, error messages, voice and tone, onboarding copy, accessibility text
- `ink` — SVG icons, icon systems, sprite symbols, and illustrations

The skills refer to each other and to shared protocol docs in the repo's `_common` folder; the install route used here cannot copy `_common` (see the install section), so those shared docs are absent, while each skill's own `reference/` folder is installed. The repo has many more agents, including design-adjacent ones (`palette` for usability and accessibility, `flow` for CSS/JS animation, `artisan` for production frontend code, `vitrine` for Storybook, `atelier` for design-to-implementation pipelines, `forge` for prototypes, `canvas` for diagrams). To add one, put its folder name in both the `sparse-checkout set` command and the `--skill` list.

## When NOT to use

- When you need a single focused skill — individual skills from this suite can be preferred over installing all seven
- If you only need design review without the full toolkit — use `plan-design-review` or `creative-director` instead
- The generic folder names of the wider roster (`launch`, `schema`, `matrix`, `pulse`, ...) collide with unrelated skills, so do not install the whole repo
