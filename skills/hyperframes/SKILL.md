---
name: hyperframes
description: |
  "Write HTML. Render video." — 11 skills for composition authoring, TTS/transcription,
  CLI workflow, asset registry, URL capture, and GSAP/Anime.js/CSS/Lottie/Three.js/WAAPI
  animation. Built specifically for AI coding agents. Requires HeyGen account for media
  generation.
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

> **Note:** Requires a HeyGen account for TTS and media generation features.

## Decision tree

1. **Is the package already installed?**
   Check: your agent's skills directory contains `hyperframes` with content beyond this stub.
   - Yes → invoke `hyperframes` and proceed
   - No → go to step 2

2. **Which agent are you on?**
   - Claude Code → `npx skills add heygen-com/hyperframes` — or send `! npx skills add … -g` as a chat message to install without leaving the conversation
   - Cursor → `npx skills add heygen-com/hyperframes`
   - Other → `npx skills add heygen-com/hyperframes` or see [GitHub README](https://github.com/heygen-com/hyperframes)

## Install command

```bash
npx skills add heygen-com/hyperframes
```

> A HeyGen account is required for TTS, transcription, and video rendering features. Animation authoring works without an account.

## Invoke after install

- Skill name: `hyperframes`
- Trigger phrases: "hyperframes", "HTML to video", "HeyGen", "render video from HTML", "Anime.js"

## What it does

"Write HTML. Render video." — a suite of 11 skills built specifically for AI coding agents that need to produce video output from HTML compositions. Covers: composition authoring (building HTML/CSS/JS scenes), text-to-speech and transcription via HeyGen, a CLI-driven render workflow, an asset registry for reusable media, URL capture for grabbing live web content, and six animation sub-skills spanning GSAP, Anime.js, plain CSS animations, Lottie playback, Three.js 3D, and the Web Animations API (WAAPI). Designed ground-up for agent-driven video production pipelines.

## When NOT to use

- Static animation without video output (use `gsap-skills`, `framer-motion-skills`, or `animate-css-skill`)
- When you do not have a HeyGen account — media generation features (TTS, video render) will not function
