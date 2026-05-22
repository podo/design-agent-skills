---
name: remotion
description: |
  Create programmatic videos with React. Official Remotion skill — compose video
  sequences using React components, animate with spring physics, and render to
  MP4/GIF. Ideal for product demos, explainers, and data-driven videos.
triggers:
  - "remotion"
  - "programmatic video"
  - "React video"
  - "video with React"
  - "animated video"
  - "render video"
das:
  category: creative-3d
  upstream: "https://github.com/remotion-dev/skills"
  upstream_path: "skills/remotion/SKILL.md"
  version: latest
  install: true
---

# remotion

> Catalogue stub — full skill: [remotion-dev/skills](https://github.com/remotion-dev/skills/blob/main/skills/remotion/SKILL.md)

## Decision tree

Run this before any programmatic video creation:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/remotion/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `remotion` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.design-agent-skills/skills/remotion && \
  curl -fsSL \
    https://raw.githubusercontent.com/remotion-dev/skills/main/skills/remotion/SKILL.md \
    -o ~/.design-agent-skills/skills/remotion/SKILL.md
```

Verify install: `head -3 ~/.design-agent-skills/skills/remotion/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `remotion`
- Trigger phrases: "remotion", "programmatic video", "React video", "animated video"

## What it does

Official Remotion skill for creating programmatic videos with React. Compose video sequences as React components, animate with spring physics and interpolation, and render to MP4, WebM, or GIF. Best for product demos, data-driven visualizations, and explainer animations that require code-controlled precision.
