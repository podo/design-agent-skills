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
  install: true
---

# nanobanan-ppt

> Catalogue stub — full skill: [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills)

## Decision tree

Run this for AI-powered slide generation with images:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/nanobanan-ppt/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `nanobanan-ppt` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/nanobanan-ppt && \
  curl -fsSL \
    https://raw.githubusercontent.com/op7418/NanoBanana-PPT-Skills/main/SKILL.md \
    -o ~/.claude/skills/nanobanan-ppt/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/nanobanan-ppt/SKILL.md` — output must NOT contain `das:`.

> **Note:** Image generation features require API credentials — check the README after install for configuration.

## Invoke after install

- Skill name: `nanobanan-ppt`
- Trigger phrases: "NanoBanana", "AI PowerPoint", "styled PPT", "document to slides"

## What it does

AI-powered PowerPoint generation that goes beyond text structure: analyzes input documents for content and tone, structures content into coherent slide decks, and generates styled images matched to the presentation theme. Output is a fully assembled .pptx with both content and visuals. Image generation requires external API credentials.

## When NOT to use

- Simple text-only slide generation → use `guizang-ppt` instead (no API deps)
- When you don't have image API credentials configured
