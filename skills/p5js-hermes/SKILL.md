---
name: p5js-hermes
description: |
  Production pipeline for interactive and generative visual art using p5.js.
  Covers 2D/3D rendering, noise and particle systems, flow fields, GLSL shaders,
  pixel manipulation, kinetic typography, WebGL, and audio-reactive visuals, with
  headless export to HTML, PNG, GIF, MP4 or SVG. From NousResearch's Hermes agent.
triggers:
  - "p5js"
  - "p5.js"
  - "generative art p5"
  - "creative coding p5"
  - "particle system p5"
  - "flow field p5"
  - "GLSL shader p5"
  - "audio reactive"
das:
  category: creative-3d
  type: skill
  upstream: "https://github.com/NousResearch/hermes-agent"
  upstream_path: "skills/creative/p5js/SKILL.md"
  version: latest
  install: true
---

# p5js-hermes

> Catalogue stub — full skill: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/blob/main/skills/creative/p5js/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/p5js/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/p5js/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The upstream repo is about 1.3 GB, so `npx skills add NousResearch/hermes-agent --skill p5js` never finishes cloning (it timed out even with a 25 minute limit). Sparse-clone only the skill's folder into /tmp and install from that local path (usually well under a minute).

   If an earlier attempt left `/tmp/hermes-agent-sparse` behind, delete it first (`rm -rf /tmp/hermes-agent-sparse`): `git clone` refuses a non-empty directory.

   ```bash
   [ -e ~/.agents/skills/p5js-hermes ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/NousResearch/hermes-agent.git /tmp/hermes-agent-sparse
   git -C /tmp/hermes-agent-sparse sparse-checkout set skills/creative/p5js
   npx skills add /tmp/hermes-agent-sparse/skills/creative/p5js -g -y
   ```

   **Project:**
   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/NousResearch/hermes-agent.git /tmp/hermes-agent-sparse
   git -C /tmp/hermes-agent-sparse sparse-checkout set skills/creative/p5js
   npx skills add /tmp/hermes-agent-sparse/skills/creative/p5js -y
   ```

**Heads-up**

- **Requires:** Node.js, puppeteer and ffmpeg for the skill's headless export scripts (PNG, GIF, MP4)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `p5js`
- Trigger phrases: "p5.js", "p5js", "generative art p5", "flow field", "audio reactive"

## What it does

Full production pipeline for interactive and generative visual art in p5.js. Covers 2D/3D rendering with noise functions, particle systems, flow fields, GLSL shader integration, pixel array manipulation, kinetic typography, WebGL, and audio-reactive visuals. Ships reference notes, helper scripts and sketch templates from NousResearch's Hermes agent, and exports finished sketches as HTML, PNG, GIF, MP4 or SVG (the export scripts need Node with puppeteer and ffmpeg). Substantially deeper than the official `algorithmic-art` skill.
