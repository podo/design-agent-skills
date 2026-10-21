---
name: nanobanan-ppt
description: |
  AI-powered PowerPoint generation with document analysis and styled image generation.
  Analyzes input documents, structures content into slides, and generates matching
  visual assets. Requires API credentials for image generation features.
triggers:
  - "NanoBanana"
  - "nanobanan ppt"
  - "AI PowerPoint"
  - "styled PPT"
  - "PPT with images"
  - "document to slides"
das:
  category: presentations
  upstream: "https://github.com/op7418/NanoBanana-PPT-Skills"
  upstream_path: "SKILL.md"
  version: latest
  install: false
---

# nanobanan-ppt

> Catalogue stub — full package: [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - `f=~/.claude/skills/ppt-generator/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   Upstream's SKILL.md has no YAML frontmatter, so the skills CLI cannot see it; upstream's own README documents this clone into the Claude Code skills directory. The pip line adds PyJWT and requests, which upstream's video scripts import but its README omits.

   ```bash
   git clone https://github.com/op7418/NanoBanana-PPT-Skills.git ~/.claude/skills/ppt-generator
   cd ~/.claude/skills/ppt-generator && python3 -m venv venv && source venv/bin/activate
   pip install google-genai pillow python-dotenv PyJWT requests
   cp ~/.claude/skills/ppt-generator/.env.example ~/.claude/skills/ppt-generator/.env
   ```

**Heads-up**

- **Requires:** Python 3 and a Gemini API key (GEMINI_API_KEY in .env) for image generation; Optional, for the video feature: Kling AI keys (KLING_ACCESS_KEY, KLING_SECRET_KEY) and FFmpeg
- **License:** MIT per the README; no LICENSE file in the repository
<!-- das:install:end -->

## Invoke after install

First edit `.env` and add your `GEMINI_API_KEY` (video transitions also need the Kling keys), then check `python3 generate_ppt.py --help` from `~/.claude/skills/ppt-generator` with the virtual environment active. Image generation uses Google's Gemini image model; keep the key in `.env`.

- Skill name: `ppt-generator` (the directory it is cloned into; upstream's own SKILL.md has no frontmatter and calls itself ppt-generator-pro)
- Trigger phrases: "NanoBanana", "AI PowerPoint", "styled PPT", "document to slides"

## What it does

AI-powered presentation generation that goes beyond text structure: analyzes input documents for content and tone, structures content into coherent slide decks, and generates styled slide images matched to the presentation theme (upstream ships two built-in styles, a gradient glass look and a vector illustration look). Optionally generates transition videos between slides with Kling AI, plus an interactive player and a full-video export. Output is slide images and an HTML player rather than an editable .pptx file. Image generation requires external API credentials. The upstream docs are in Chinese.

## When NOT to use

- Slide decks that need no image-generation API → use `guizang-ppt` instead (it makes HTML decks and has no image-API dependency)
- When you don't have image API credentials configured
- When you need an editable PowerPoint file — use `anthropics-skills` (its `pptx` skill)
