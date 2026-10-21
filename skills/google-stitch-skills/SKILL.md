---
name: google-stitch-skills
description: |
  Official Google Stitch skills for the design-to-code pipeline: generate and edit Stitch screens,
  DESIGN.md and SITE.md management, prompt enhancement, React / React Native / shadcn/ui component
  generation, code-to-design upload, and iterative Stitch build loops.
triggers:
  - "Stitch skill"
  - "google stitch"
  - "design-md"
  - "stitch loop"
  - "enhance prompt"
  - "stitch shadcn"
das:
  category: figma-code
  upstream: "https://github.com/google-labs-code/stitch-skills"
  version: latest
  install: false
---

# google-stitch-skills

> Catalogue stub — full package: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 16 skills (`stitch-loop`, `design-md`, `enhance-prompt`, `site-md`, `taste-design`, `stitch-extract-design-md`, `stitch-extract-static-html`, `stitch-generate-design`, `stitch-code-to-design`, `stitch-manage-design-system`, `stitch-upload-to-stitch`, `stitch-react-components`, `stitch-react-native`, `react-vite-dashboard`, `shadcn-ui`, `remotion`); checking the first.
   - Global: `f=~/.agents/skills/stitch-loop/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/stitch-loop/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `stitch-loop`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/google-stitch-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add google-labs-code/stitch-skills -g -y
   ```

   **Project:**
   ```bash
   npx skills add google-labs-code/stitch-skills -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Stitch MCP server configured with its credentials (Stitch MCP setup guide: https://stitch.withgoogle.com/docs/mcp/setup/); upstream says the skills need it running
- **License:** Apache-2.0
- **Name collision:** `shadcn-ui` is also written by `shadcn-ui` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `remotion` is also written by `remotion` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Skills prefixed `stitch::` install into a `stitch-…` directory (for example `stitch::react-components` becomes `stitch-react-components`). Upstream says the skills depend on each other, so install the package rather than single skills.

- `stitch-loop` — "stitch loop", "iterate design"
- `design-md` — "DESIGN.md", "create design spec"
- `site-md` — a SITE.md project constitution for the Stitch build loop
- `enhance-prompt` — "enhance my prompt", "improve UI prompt"
- `taste-design` — a DESIGN.md that enforces premium, anti-generic UI standards
- `stitch::generate-design` — generate and edit screens and variants through the Stitch MCP
- `stitch::manage-design-system` — manage Stitch design systems and apply them to screens
- `stitch::extract-design-md` (installed as `stitch-extract-design-md`) — "extract design md", "Stitch to DESIGN.md"
- `stitch::react-components` (installed as `stitch-react-components`) — "Stitch to React", "convert to React"
- `stitch::react-native` (installed as `stitch-react-native`) — Stitch HTML to React Native components
- `react-vite-dashboard` — Stitch designs to React + Vite dashboards
- `shadcn-ui` — "Stitch to shadcn", "build with shadcn"
- `remotion` — walkthrough videos from Stitch projects
- `stitch::code-to-design`, `stitch::extract-static-html`, `stitch::upload-to-stitch` — move existing web code into a Stitch project

## What it does

Google Labs' official Stitch skill collection for the complete design-to-code pipeline: manages DESIGN.md and SITE.md specification files, enhances prompts with UI/UX vocabulary, generates and edits Stitch screens, converts Stitch output to React, React Native or shadcn/ui components, extracts design specs, uploads existing code into Stitch, and runs iterative improvement loops. The skills drive the Stitch MCP server.

Upstream also recommends its plugin suite (`npx plugins add google-labs-code/stitch-skills --scope project --target claude-code`); the command above installs the same skills without plugin packaging.

## When NOT to use

- Designs that do not live in Google Stitch — use `figma-official-skills` for Figma, or `design-consultation` to build a design system from scratch
- Only the shadcn/ui component workflow, not the Stitch pipeline — use the official `shadcn-ui` stub; this package installs a different (Stitch-specific) skill into the directory `shadcn-ui`, the same name the catalogue pointer for that stub uses, so installing both overwrites one
- Only the Remotion video workflow — use the `remotion` stub; the Stitch `remotion` skill is Stitch-specific and installs into a directory with the same name as that stub
