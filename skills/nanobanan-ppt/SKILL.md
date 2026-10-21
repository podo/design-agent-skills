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

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/ppt-generator/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install steps below, then invoke the skill
   - No → show the install steps; in Claude Code, send each as a chat message starting with `!`

## Install the full skill

Upstream's `SKILL.md` has no YAML frontmatter, so `npx skills add` cannot discover it. Upstream's documented install is a clone into the Claude Code skills directory:

```bash
git clone https://github.com/op7418/NanoBanana-PPT-Skills.git ~/.claude/skills/ppt-generator
cd ~/.claude/skills/ppt-generator
python3 -m venv venv && source venv/bin/activate
pip install google-genai pillow python-dotenv
cp .env.example .env    # then add your GEMINI_API_KEY (video transitions also need Kling keys)
python3 generate_ppt.py --help
```

Image generation uses Google's Gemini image model; keep the key in `.env`.

## Invoke after install

- Skill name: `ppt-generator`
- Trigger phrases: "NanoBanana", "AI PowerPoint", "styled PPT", "document to slides"

## What it does

AI-powered PowerPoint generation that goes beyond text structure: analyzes input documents for content and tone, structures content into coherent slide decks, and generates styled images matched to the presentation theme. Output is a fully assembled deck with both content and visuals. Image generation requires external API credentials.

## When NOT to use

- Simple text-only slide generation → use `guizang-ppt` instead (no API deps)
- When you don't have image API credentials configured
