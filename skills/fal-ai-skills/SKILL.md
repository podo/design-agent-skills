---
name: fal-ai-skills
description: |
  Official fal.ai agent skills for AI image, video, and 3D generation. A genmedia CLI
  core plus model routing, prompting, and recipe skills, production skills (character
  design, cinematography, commercial, marketing, storytelling, UGC), and verticals such
  as website redesign and 2D game assets. Requires a fal.ai API key.
triggers:
  - "fal.ai"
  - "fal generate"
  - "fal 3D"
  - "generate image fal"
  - "generate video fal"
  - "3D model from image"
das:
  category: creative-3d
  upstream: "https://github.com/fal-ai-community/skills"
  version: latest
  install: false
---

# fal-ai-skills

> Catalogue stub — full package: [fal-ai-community/skills](https://github.com/fal-ai-community/skills)

## Decision tree

Run this before using fal.ai generation features:

1. **Is a fal.ai skill already installed?**
   Check: `~/.agents/skills/genmedia/SKILL.md` (global) or `.agents/skills/genmedia/SKILL.md` (project) exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
# Everything in the package
npx skills add fal-ai-community/skills -y

# Or pick skills with --skill (add -g for global install)
npx skills add fal-ai-community/skills --skill genmedia -y        # the CLI core every other skill calls
npx skills add fal-ai-community/skills --skill fal-recipes -y     # use-case pipelines
npx skills add fal-ai-community/skills --skill fal-redesign -y    # website redesign from screenshots
```

Requires a fal.ai account and API key for generation.

## Invoke after install

- `genmedia` — "fal generate", "generate image fal", "generate video fal"
- `fal-models-catalog` / `model-routing` — choosing the right endpoint per modality
- `fal-prompting` / `fal-recipes` — family-specific prompt craft and use-case pipelines
- `fal-regenerate-3d` — "fal 3D", "3D model from image"
- `fal-redesign`, `fal-gamedev`, `character-design`, `cinematography`, `commercial`, `marketing`, `storytelling`, `ugc` — production and vertical skills

## What it does

Official fal.ai community skills for AI media generation. The default execution path is the `genmedia` CLI (discover an endpoint, inspect its schema, run it, poll, download); most other skills are knowledge layers telling the agent which endpoint to use, how to prompt it, and how to chain calls. Covers text/image/video/audio/3D modalities and design-adjacent work such as website redesign from screenshots and 2D game assets.
