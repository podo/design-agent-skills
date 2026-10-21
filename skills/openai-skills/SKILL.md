---
name: openai-skills
description: |
  Official OpenAI skills relevant to design work: a set of Figma skills (design
  implementation, design generation, library generation, Code Connect, design
  system rules), image generation and editing with the OpenAI Image API, and
  screenshot capture. Part of a larger curated OpenAI skills repo.
triggers:
  - "OpenAI skill"
  - "openai imagegen"
  - "openai figma"
das:
  category: official-suites
  upstream: "https://github.com/openai/skills"
  version: latest
  install: false
---

# openai-skills

> Catalogue stub — full package: [openai/skills](https://github.com/openai/skills)

## Decision tree

Run this before using OpenAI-specific skill workflows:

1. **Is an OpenAI skill already installed?**
   Check: `~/.agents/skills/imagegen/SKILL.md` (global) or `.agents/skills/imagegen/SKILL.md` (project) exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

`openai/skills` is a large curated repo; pick skills with `--skill` (add `-g` for global install):

```bash
# Generate/edit images using the OpenAI Image API
npx skills add openai/skills --skill imagegen -y

# Capture screenshots of apps, pages, or the desktop
npx skills add openai/skills --skill screenshot -y

# Figma skills (overlap with the official Figma suite — see figma-official-skills)
npx skills add openai/skills --skill figma -y
npx skills add openai/skills --skill figma-implement-design -y
npx skills add openai/skills --skill figma-generate-design -y
npx skills add openai/skills --skill figma-generate-library -y
npx skills add openai/skills --skill figma-code-connect-components -y
npx skills add openai/skills --skill figma-create-design-system-rules -y
```

## Invoke after install

- `imagegen` — "generate image", "edit image", "OpenAI image"
- `screenshot` — "take a screenshot", "capture the screen"
- Figma skills — same triggers as `figma-official-skills`

## What it does

OpenAI's official curated skill collection. The design-relevant parts are image creation and editing through the OpenAI Image API, screenshot capture, and Figma integration skills that parallel the official Figma suite. The repo also holds many non-design skills (deployment, security, notebooks, docs) that are not catalogued here.
