---
name: google-stitch-skills
description: |
  6 official Google Stitch skills for the complete design-to-code pipeline:
  DESIGN.md management, prompt enhancement, React component generation, shadcn/ui
  components, and iterative Stitch feedback loops.
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

## Decision tree

Run this for any Google Stitch design workflow:

1. **Is a Stitch skill already installed?**
   Check: `~/.agents/skills/stitch-loop/SKILL.md` (global) or `.agents/skills/stitch-loop/SKILL.md` (project) exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

All skills live in the single `google-labs-code/stitch-skills` repo; pick one with `--skill` (add `-g` for global install):

```bash
# Create and manage DESIGN.md files
npx skills add google-labs-code/stitch-skills --skill design-md -y

# Improve prompts with UI/UX vocabulary
npx skills add google-labs-code/stitch-skills --skill enhance-prompt -y

# Extract Stitch design specs into DESIGN.md format
npx skills add google-labs-code/stitch-skills --skill stitch::extract-design-md -y

# Convert Stitch to React components
npx skills add google-labs-code/stitch-skills --skill stitch::react-components -y

# Build components with shadcn/ui
npx skills add google-labs-code/stitch-skills --skill shadcn-ui -y

# Iterative design-to-code feedback loop
npx skills add google-labs-code/stitch-skills --skill stitch-loop -y

# Or everything in the package
npx skills add google-labs-code/stitch-skills -y
```

## Invoke after install

Skills prefixed `stitch::` install into a `stitch-…` directory.

- `design-md` — "DESIGN.md", "create design spec"
- `enhance-prompt` — "enhance my prompt", "improve UI prompt"
- `stitch::extract-design-md` (installed as `stitch-extract-design-md`) — "extract design md", "Stitch to DESIGN.md"
- `stitch::react-components` (installed as `stitch-react-components`) — "Stitch to React", "convert to React"
- `shadcn-ui` — "Stitch to shadcn", "build with shadcn"
- `stitch-loop` — "stitch loop", "iterate design"

The package also ships `stitch::generate-design`, `stitch::code-to-design`, `stitch::manage-design-system`, `stitch::upload-to-stitch`, `taste-design`, `site-md`, `react-native`, `react-vite-dashboard`, and `remotion`.

## What it does

Google Labs' official Stitch skill collection for the complete design-to-code pipeline. Manages DESIGN.md specification files, enhances prompts with UI/UX vocabulary, converts Stitch output to React components or shadcn/ui, extracts design specs, and runs iterative improvement loops.
