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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 16 skills (`genmedia`, `model-routing`, `fal-models-catalog`, `fal-prompting`, `fal-recipes`, `character-design`, `cinematography`, `commercial`, `marketing`, `storytelling`, `ugc`, `fal-gamedev`, `fal-redesign`, `fal-regenerate-3d`, `fan-cam`, `genmedia-workflow`); checking the first.
   - Global: `f=~/.agents/skills/genmedia/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/genmedia/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `genmedia`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/fal-ai-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add fal-ai-community/skills --skill genmedia model-routing fal-models-catalog fal-prompting fal-recipes character-design cinematography commercial marketing storytelling ugc fal-gamedev fal-redesign fal-regenerate-3d fan-cam genmedia-workflow -g -y
   ```

   **Project:**
   ```bash
   npx skills add fal-ai-community/skills --skill genmedia model-routing fal-models-catalog fal-prompting fal-recipes character-design cinematography commercial marketing storytelling ugc fal-gamedev fal-redesign fal-regenerate-3d fan-cam genmedia-workflow -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** fal.ai account and API key (FAL_KEY); generation calls are charged per endpoint (check cost with `genmedia pricing`); the genmedia CLI (the genmedia skill installs it with `curl https://genmedia.sh/install -fsS | bash`; source at fal-ai-community/genmedia-cli)
- **License:** MIT per the README; no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- `genmedia` — "fal generate", "generate image fal", "generate video fal" (the CLI core every other skill calls)
- `fal-models-catalog` / `model-routing` — choosing the right endpoint per modality
- `fal-prompting` / `fal-recipes` — family-specific prompt craft and use-case pipelines
- `fal-regenerate-3d` — "fal 3D", "3D model from image"
- `fal-redesign`, `fal-gamedev`, `fan-cam`, `genmedia-workflow`, `character-design`, `cinematography`, `commercial`, `marketing`, `storytelling`, `ugc` — production and vertical skills

## What it does

Official fal.ai community skills for AI media generation. The default execution path is the `genmedia` CLI (discover an endpoint, inspect its schema, run it, poll, download); most other skills are knowledge layers telling the agent which endpoint to use, how to prompt it, and how to chain calls. Covers text/image/video/audio/3D modalities and design-adjacent work such as website redesign from screenshots and 2D game assets.
