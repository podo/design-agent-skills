---
name: hyperframes
description: |
  "Write HTML. Render video." — skills for composition authoring, captions and
  voiceover, CLI workflow, asset registry, and GSAP/Anime.js/CSS/Lottie/Three.js/WAAPI
  animation. Built specifically for AI coding agents. Some media features (background
  music, TTS voiceover, avatar video) need a HeyGen CLI sign-in.
triggers:
  - "hyperframes"
  - "HTML to video"
  - "HeyGen"
  - "render video from HTML"
  - "Anime.js"
das:
  type: package
  category: motion-animation
  upstream: "https://github.com/heygen-com/hyperframes"
  version: latest
  install: false
---

# hyperframes

> Catalogue stub — full package: [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 10 skills (`hyperframes`, `hyperframes-core`, `hyperframes-cli`, `hyperframes-animation`, `hyperframes-audio`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-registry`, `hyperframes-studio`, `media-use`); checking the first.
   - Global: `f=~/.agents/skills/hyperframes/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/hyperframes/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `hyperframes`, invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The repository is about 500 MB (showcase media and test baselines), so the skills CLI's full clone can exceed its 300 s limit. Sparse-clone only the skills folder, then install the entry skill and the core set from the local clone; the entry skill installs the other workflow skills on demand. For a global install add -g to the last command.

   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/heygen-com/hyperframes.git /tmp/hyperframes-skills
   git -C /tmp/hyperframes-skills sparse-checkout set skills
   npx skills add /tmp/hyperframes-skills --skill hyperframes hyperframes-core hyperframes-cli hyperframes-animation hyperframes-audio hyperframes-creative hyperframes-keyframes hyperframes-registry hyperframes-studio media-use -y
   rm -rf /tmp/hyperframes-skills
   ```

**Claude Code plugin route:**

```
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

**Heads-up**

- **Requires:** Node.js 22+ and FFmpeg (upstream requirements); Network access at use time. The entry skill installs the workflow skills it routes to (slideshow, general-video, product-launch-video and others) on demand with `npx hyperframes skills update <workflow>`; HeyGen CLI sign-in (free OAuth allowance) only for background music, TTS voiceover and avatar video. Sound effects and animation authoring need no account
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `hyperframes` — the entry point; read it first for any request to make, edit, animate or render a video or motion graphic. It resumes project state, routes to the right workflow, and installs that workflow on demand.
- Domain skills it loads as needed: `hyperframes-core` (composition structure and timing), `hyperframes-animation`, `hyperframes-keyframes`, `hyperframes-creative`, `hyperframes-audio`, `hyperframes-cli` (init, lint, render, publish), `hyperframes-studio`, `hyperframes-registry`, `media-use` (images, icons, audio, captions, grades)
- Trigger phrases: "hyperframes", "HTML to video", "render video from HTML", "Anime.js"

## What it does

"Write HTML. Render video." — a suite of skills for AI coding agents that need to produce video from HTML compositions. A composition is an HTML file whose DOM declares timing with `data-*` attributes and whose animation runtime is seekable, so the framework can render it frame by frame. The core set covers composition authoring, motion rules and runtime adapters (GSAP, Anime.js, CSS, Lottie, Three.js, WAAPI), creative direction, audio and captions, a CLI-driven init/lint/render workflow, and a reusable media registry.

This pointer installs the core set, which is what upstream installs eagerly. The creation workflows (slideshow or deck, product-launch video, PR-to-video, talking-head overlays, music-to-video, motion graphics, faceless explainer, general video, Remotion port) are fetched by the `hyperframes` skill on demand, so they are not installed here. To get everything at once, use the Claude Code plugin route above.

## When NOT to use

- Static animation without video output → use `gsap-skills`, `framer-motion-skills`, or `animate-css-skill`
- Programmatic React video → use `remotion`
- Background music, TTS or avatar features without a HeyGen CLI sign-in will not work; animation authoring and sound effects need no account
