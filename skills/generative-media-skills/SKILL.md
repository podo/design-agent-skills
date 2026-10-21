---
name: generative-media-skills
description: |
  Skills for AI media generation through the muapi.ai platform: cinematic video direction, image
  generation with Nano Banana, Seedance 2.0 video, UGC and product video ads, logos, UI mockups,
  YouTube thumbnails and shorts, social posts and AI clipping. Routes to models such as Midjourney
  v7, Flux Kontext, Kling 3.0 and Veo3. Requires a muapi account and the muapi CLI.
triggers:
  - "generative media"
  - "Flux Kontext"
  - "Kling 3.0"
  - "Veo3"
  - "SamurAIGPT"
das:
  type: package
  category: creative-3d
  upstream: "https://github.com/SamurAIGPT/Generative-Media-Skills"
  version: latest
  install: false
---

# generative-media-skills

> Catalogue stub — full package: [SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 13 skills (`muapi-ad-creative`, `muapi-ai-clipping`, `muapi-cinema-director`, `muapi-instagram-post`, `muapi-logo-creator`, `muapi-nano-banana`, `muapi-product-video-ad-maker`, `muapi-seedance-2`, `muapi-social-media-video`, `muapi-ugc-video-factory`, `muapi-ui-design`, `muapi-youtube-shorts`, `muapi-youtube-thumbnail`); checking the first.
   - Global: `f=~/.agents/skills/muapi-ad-creative/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/muapi-ad-creative/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `muapi-ad-creative`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/generative-media-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add SamurAIGPT/Generative-Media-Skills --skill muapi-ad-creative muapi-ai-clipping muapi-cinema-director muapi-instagram-post muapi-logo-creator muapi-nano-banana muapi-product-video-ad-maker muapi-seedance-2 muapi-social-media-video muapi-ugc-video-factory muapi-ui-design muapi-youtube-shorts muapi-youtube-thumbnail -g -y
   ```

   **Project:**
   ```bash
   npx skills add SamurAIGPT/Generative-Media-Skills --skill muapi-ad-creative muapi-ai-clipping muapi-cinema-director muapi-instagram-post muapi-logo-creator muapi-nano-banana muapi-product-video-ad-maker muapi-seedance-2 muapi-social-media-video muapi-ugc-video-factory muapi-ui-design muapi-youtube-shorts muapi-youtube-thumbnail -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** a muapi.ai account and API key (MUAPI_API_KEY); every skill calls the muapi service and generation consumes muapi credits; the muapi CLI (npm install -g muapi-cli, then muapi auth configure) and curl; generated prompts and uploaded media are sent to the third-party muapi.ai service
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Every skill is named `muapi-<recipe>`; the agent picks one from the task:

- `muapi-cinema-director`, `muapi-seedance-2` — directed cinematic video
- `muapi-product-video-ad-maker`, `muapi-ugc-video-factory`, `muapi-ad-creative` — product and UGC ads
- `muapi-nano-banana`, `muapi-logo-creator`, `muapi-ui-design` — image generation, logos, UI mockups
- `muapi-youtube-thumbnail`, `muapi-youtube-shorts`, `muapi-social-media-video`, `muapi-instagram-post`, `muapi-ai-clipping` — social and short-form content

Before first use: install the muapi CLI and run `muapi auth configure` with your muapi.ai API key (see the heads-up above).

## What it does

Structured workflow recipes that turn a creative brief into calls to the muapi.ai platform, which fronts many image, video and audio models (Midjourney v7, Flux Kontext, Kling 3.0, Veo3, Seedance 2.0, Suno and others). Each skill encapsulates prompt patterns, parameter choices and model selection for one output type, for example a cinematic shot list for video models or a UGC ad built from a person photo, a product photo and a script. The skills CLI installs the packaged set listed above. The repo holds many more recipes under `library/<group>/<name>`; install one by path, for example `npx skills add SamurAIGPT/Generative-Media-Skills/library/motion/music-video`.

Everything runs against a third-party paid service: prompts and uploaded media leave your machine and generation consumes muapi credits.

## When NOT to use

- Without a muapi account — the skills require muapi CLI authentication
- fal.ai model workflows specifically — use fal-ai-skills instead
- Static image editing without AI generation
