---
name: claudedesignskills
description: |
  Motion and creative-coding skill package covering Three.js, GSAP ScrollTrigger, React Three
  Fiber, Framer Motion, Babylon.js, A-Frame, PixiJS, Locomotive Scroll, Barba.js, React
  Spring, Magic UI, AOS, Anime.js, Lottie, Rive, Spline, and a Blender-to-web pipeline.
  One of the broadest motion/creative suites available.
triggers:
  - "claudedesignskills"
  - "Babylon.js"
  - "A-Frame"
  - "PixiJS"
  - "React Spring"
  - "Locomotive Scroll"
  - "Spline"
  - "Rive"
das:
  type: package
  category: motion-animation
  upstream: "https://github.com/freshtechbro/claudedesignskills"
  version: latest
  install: false
---

# claudedesignskills

> Catalogue stub — full package: [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 22 skills (`threejs-webgl`, `gsap-scrolltrigger`, `react-three-fiber`, `motion-framer`, `babylonjs-engine`, `aframe-webxr`, `lightweight-3d-effects`, `playcanvas-engine`, `pixijs-2d`, `locomotive-scroll`, `barba-js`, `react-spring-physics`, `animated-component-libraries`, `scroll-reveal-libraries`, `animejs`, `lottie-animations`, `blender-web-pipeline`, `spline-interactive`, `rive-interactive`, `substance-3d-texturing`, `web3d-integration-patterns`, `modern-web-design`); checking the first.
   - Global: `f=~/.agents/skills/threejs-webgl/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/threejs-webgl/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `threejs-webgl`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/claudedesignskills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add freshtechbro/claudedesignskills --skill threejs-webgl gsap-scrolltrigger react-three-fiber motion-framer babylonjs-engine aframe-webxr lightweight-3d-effects playcanvas-engine pixijs-2d locomotive-scroll barba-js react-spring-physics animated-component-libraries scroll-reveal-libraries animejs lottie-animations blender-web-pipeline spline-interactive rive-interactive substance-3d-texturing web3d-integration-patterns modern-web-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add freshtechbro/claudedesignskills --skill threejs-webgl gsap-scrolltrigger react-three-fiber motion-framer babylonjs-engine aframe-webxr lightweight-3d-effects playcanvas-engine pixijs-2d locomotive-scroll barba-js react-spring-physics animated-component-libraries scroll-reveal-libraries animejs lottie-animations blender-web-pipeline spline-interactive rive-interactive substance-3d-texturing web3d-integration-patterns modern-web-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add freshtechbro/claudedesignskills
/plugin install core-3d-animation@claude-design-skillstack
/plugin install extended-3d-scroll@claude-design-skillstack
/plugin install animation-components@claude-design-skillstack
/plugin install authoring-motion@claude-design-skillstack
/plugin install meta-skills@claude-design-skillstack
```

**Heads-up**

- **Requires:** Blender 4.x installed locally for blender-web-pipeline (the skill drives it, it does not bundle it); a Spline account for spline-interactive and a Rive account for rive-interactive; both export through the vendor's web editor; an Adobe Substance 3D account for substance-3d-texturing; textures are authored in the vendor app
- **License:** MIT
- **Name collision:** `gsap-scrolltrigger` is also written by `gsap-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

Each library is its own skill, named after the library. The main ones:

- `threejs-webgl`, `react-three-fiber`, `babylonjs-engine`, `playcanvas-engine`, `aframe-webxr` — 3D and WebXR
- `gsap-scrolltrigger`, `motion-framer`, `animejs`, `react-spring-physics` — animation engines
- `locomotive-scroll`, `barba-js`, `scroll-reveal-libraries` — smooth scroll, page transitions, scroll reveals
- `lottie-animations`, `rive-interactive`, `spline-interactive` — authored animation and 3D design tools
- `pixijs-2d`, `lightweight-3d-effects`, `animated-component-libraries` — 2D rendering, decorative 3D, animated React components
- `blender-web-pipeline`, `substance-3d-texturing` — 3D asset pipelines
- `web3d-integration-patterns`, `modern-web-design` — combining the libraries, and current web design patterns

Trigger phrases: "claudedesignskills", "Babylon.js", "A-Frame", "PixiJS", "React Spring", "Locomotive Scroll", "Spline", "Rive"

## What it does

A broad motion and creative-coding skill suite organised around the libraries web design agencies actually reach for: Three.js 3D scenes, GSAP ScrollTrigger, React Three Fiber, Framer Motion, Babylon.js game/XR rendering, A-Frame WebXR, PixiJS 2D WebGL, Locomotive Scroll smooth scrolling, Barba.js page transitions, React Spring physics-based animation, Magic UI component animations, AOS (Animate On Scroll), Anime.js, Lottie playback, Rive interactive animation, Spline 3D, and a Blender-to-web pipeline. Use this package when a project spans multiple animation frameworks or when you are unsure which toolchain will be needed.

The skills CLI route installs the skills only. The Claude Code plugin route installs five bundles that also add slash commands and specialised agents. The repo's own `skill-creator` is not part of this pointer (it would overwrite another catalogue skill of the same name).

## When NOT to use

- When you only need one framework — use its dedicated skill instead (`gsap-skills`, `framer-motion-skills`, `cloudai-threejs`) for a lighter footprint; this package overlaps them and adds many skill descriptions to your agent's context, so install a subset with `--skill` if you only need part of it
- Backend or non-visual work
