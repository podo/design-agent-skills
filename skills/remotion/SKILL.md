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

1. **Is the full skill already installed?**
   Check whether the skill at this location still has a `das:` block:
   - Global: `grep -q "^das:" ~/.agents/skills/remotion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/remotion/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke it and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/remotion ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add remotion-dev/skills --skill remotion -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add remotion-dev/skills --skill remotion -y
   ```

## Invoke after install

- Skill name: `remotion`
- Trigger phrases: "remotion", "programmatic video", "React video", "animated video"

## What it does

Official Remotion skill for creating programmatic videos with React. Compose video sequences as React components, animate with spring physics and interpolation, and render to MP4, WebM, or GIF. Best for product demos, data-driven visualizations, and explainer animations that require code-controlled precision.
