---
name: algorithmic-art
description: |
  Create generative art using p5.js with seeded randomness, flow fields, and
  particle systems. Official Anthropic skill for procedural visual art generation
  in Claude artifacts.
triggers:
  - "algorithmic art"
  - "generative art"
  - "flow field"
  - "particle system"
  - "procedural art"
  - "creative coding art"
das:
  category: creative-3d
  upstream: "https://github.com/anthropics/skills"
  upstream_path: "skills/algorithmic-art/SKILL.md"
  version: latest
  install: true
---

# algorithmic-art

> Catalogue stub — full skill: [anthropics/skills](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md)

## Decision tree

Run this before any generative art or creative coding work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/algorithmic-art/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `algorithmic-art` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/algorithmic-art && \
  curl -fsSL \
    https://raw.githubusercontent.com/anthropics/skills/main/skills/algorithmic-art/SKILL.md \
    -o ~/.claude/skills/algorithmic-art/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/algorithmic-art/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `algorithmic-art`
- Trigger phrases: "algorithmic art", "generative art", "p5.js", "flow field", "particle system"

## What it does

Official Anthropic skill for creating generative art with p5.js. Produces seeded-random compositions — flow fields, particle systems, geometric progressions — inside Claude artifacts. Seeding ensures reproducible outputs while retaining organic variation. Use for creative coding, visual experiments, and procedurally generated illustrations.
