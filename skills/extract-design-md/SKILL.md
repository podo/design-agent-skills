---
name: extract-design-md
description: |
  Extract Google Stitch design specifications into DESIGN.md format. Creates a
  structured design document from Stitch output that can be version-controlled,
  shared with the team, and used to guide future iterations.
triggers:
  - "extract design md"
  - "stitch to DESIGN.md"
  - "extract stitch design"
  - "design spec from stitch"
  - "DESIGN.md"
das:
  category: figma-code
  upstream: "https://github.com/google-labs-code/stitch-skills"
  upstream_path: "plugins/stitch-design/skills/extract-design-md/SKILL.md"
  version: latest
  install: true
---

# extract-design-md

> Catalogue stub — full skill: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md)

## Decision tree

Run this after generating UI with Google Stitch:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/extract-design-md/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `extract-design-md` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/extract-design-md && \
  curl -fsSL \
    https://raw.githubusercontent.com/google-labs-code/stitch-skills/main/plugins/stitch-design/skills/extract-design-md/SKILL.md \
    -o ~/.design-agent-skills/skills/extract-design-md/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/extract-design-md/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `extract-design-md`
- Trigger phrases: "extract design md", "stitch to DESIGN.md", "DESIGN.md"

## What it does

Extracts design specifications from Google Stitch output into a structured `DESIGN.md` file — the Google Stitch-compatible format for encoding visual design decisions. The resulting file can be version-controlled, shared across agents, and used to maintain design consistency across iterations. Part of Google Labs' official Stitch skills.
