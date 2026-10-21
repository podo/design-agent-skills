---
name: remotion
description: |
  Create programmatic videos with React. Official Remotion skill package — compose video
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
  type: package
  category: creative-3d
  upstream: "https://github.com/remotion-dev/skills"
  version: latest
  install: false
---

# remotion

> Catalogue stub — full package: [remotion-dev/skills](https://github.com/remotion-dev/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 12 skills (`remotion-best-practices`, `remotion-captions`, `remotion-create`, `remotion-docs`, `remotion-interactivity`, `remotion-maps`, `remotion-markup`, `remotion-multimedia`, `remotion-render`, `remotion-saas`, `remotion-studio`, `remotion-upgrade`); checking the first.
   - Global: `f=~/.agents/skills/remotion-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/remotion-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `remotion-best-practices`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/remotion ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add remotion-dev/skills --skill remotion-best-practices remotion-captions remotion-create remotion-docs remotion-interactivity remotion-maps remotion-markup remotion-multimedia remotion-render remotion-saas remotion-studio remotion-upgrade -g -y
   ```

   **Project:**
   ```bash
   npx skills add remotion-dev/skills --skill remotion-best-practices remotion-captions remotion-create remotion-docs remotion-interactivity remotion-maps remotion-markup remotion-multimedia remotion-render remotion-saas remotion-studio remotion-upgrade -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js and a Remotion project (remotion-create scaffolds one)
- **License:** skills repo has no LICENSE file; Remotion itself is free for individuals, non-profits and for-profit teams up to 3 employees, otherwise a company license is required (remotion.dev/license)
- **Name collision:** `remotion` is also written by `google-stitch-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `remotion-best-practices`, `remotion-create`, `remotion-markup`, `remotion-studio`, `remotion-render`, `remotion-captions`, `remotion-multimedia`, `remotion-maps`, `remotion-interactivity`, `remotion-saas`, `remotion-docs`, `remotion-upgrade`
- Not sure which one? Start with `remotion-best-practices`, which routes to the others
- Trigger phrases: "remotion", "programmatic video", "React video", "animated video", "render video"

## What it does

Official Remotion skill package for creating programmatic videos with React. Compose video sequences as React components, animate with spring physics and interpolation, and render to MP4, WebM, or GIF. The sub-skills cover scaffolding a new project (`remotion-create`), markup best practices (`remotion-markup`), previewing in Remotion Studio (`remotion-studio`), rendering (`remotion-render`), captions, Mediabunny media handling (`remotion-multimedia`), map animations (`remotion-maps`), interactivity, building a SaaS app around Remotion, searching the docs and version upgrades. Best for product demos, data-driven visualizations, and explainer animations that require code-controlled precision.

Note that Remotion itself is licensed per organization size: free for individuals and very small companies, a company license for larger for-profit teams.

## When NOT to use

- Simple CSS/JS animation without video export (use `gsap-skills` or `framer-motion-skills`)
- Non-React video pipelines (use `hyperframes` for HTML-to-video)
