# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.8.0] — 2026-05-23

### Added

- **`user-research-cookiy`** — End-to-end user research: study planning, AI-moderated interviews, survey design, transcript synthesis, research reports (141 ★) (`cookiy-ai/user-research-skill`)
- **`interaction-design`** — IxD principles, component state design, micro-interaction timing, affordances, task flows — 6 Norman + 19 Tognazzini principles (`rastian/interaction-design-skills`)
- **`format-storybook`** — Storybook story formatting: file structure, template composition, controls, Chromatic visual regression, CSF patterns (`mikemai2awesome/agent-skills`)
- **`design-sprint`** — Coding-agent design sprint: research codebase → design feature → decompose into parent + sub-issues with dependencies (`aoshimash/skills`)
- **`dark-pattern-audit`** — Static audit of codebase + copy for deceptive dark patterns — confidence-graded, source-located findings across pricing, consent, subscriptions, CTAs (`SidKH/skills`)

### Changed

- **`design-catalogue`** — Added user-research-cookiy (new Design Research section), design-sprint (Product & PM), dark-pattern-audit (Accessibility), interaction-design + format-storybook (Design Engineering); 5 new routing guide entries
- **`content-catalogue`** — New "Design Research" section with user-research-cookiy; design-sprint added to PM section; new triggers: "user research skills", "design research skills", "design sprint skills"
- **`design-engineering-catalogue`** — Added interaction-design and format-storybook to Design Engineering table
- **`accessibility-catalogue`** — Added dark-pattern-audit to Accessibility & Quality table

Catalogue grows from 135 → 140 skills.

---

## [1.7.0] — 2026-05-22

### Added

- **`textual-tui-skill`** — Textual (Python) deep-dive: 40+ widgets, TCSS styling, reactive attrs, background workers, Pilot API testing, 10 common pitfalls (`aperepel/textual-tui-skill`)
- **`CLAUDE.md`** — Contributor guide: evaluation criteria, stub.yaml/SKILL.md format, router update checklist, versioning, category reference, common mistakes

### Changed

- **`design-catalogue` + `content-catalogue` routers** — Added textual-tui-skill to TUI & Terminal Design section

Catalogue grows from 134 → 135 skills.

---

## [1.6.0] — 2026-05-22

### Added

- **`ux-writing-skill`** — Systematic UX writing: microcopy, button labels, error messages, empty states, form copy, a11y writing, voice/tone framework. v1.6.0 (`content-designer/ux-writing-skill`, 85 ★)
- **`copywriting-skill`** — 5-skill product copywriting toolkit: web copy, SEO copy, social copy, French copy, tone-of-voice generator; anti-AI-pattern layer (`judicael-s/Copywriting-skill`)
- **`humanize-text`** — Scores and rewrites text across 7 AI-pattern dimensions (AI vocabulary, content inflation, UX copy quality…); works on raw text, Figma URLs, and screenshots (`gregorymm/humanize-text`)

### Changed

- **`content-catalogue` router** — Added "Content Design & Copy" section routing to new skills; extended description and triggers to include UX writing, copywriting, microcopy, and content design

Catalogue grows from 131 → 134 skills.

---

## [1.5.0] — 2026-05-22

### Added

- **`material-3-skill`** — Material Design 3 / Material You for Jetpack Compose (primary) and Flutter (secondary); dynamic color, tonal surfaces, 30+ components, 10-category MD3 compliance audit (`hamen/material-3-skill`)
- **`styleseed`** — Design engine with 69 brand-agnostic rules, 60+ interchangeable brand skins (Toss, Stripe, Linear, Vercel, Notion…), 13 slash commands incl. `/ss-tokens`; Tailwind v4 + Radix UI (`bitjaru/styleseed`)
- **`awesome-design-skills`** — Pointer to bergside's 67-skill aesthetic registry (glassmorphism, brutalism, claymorphism, neumorphism, editorial, bento, riso…) distributed via `npx typeui.sh pull <slug>`

Catalogue grows from 128 → 131 skills.

---

## [1.4.2] — 2026-05-22

### Fixed

- **bin entry** — renamed `bin/cli.js` → `bin/cli.mjs` so npm publish retains the bin entry in ESM packages (was silently stripped under `"type": "module"`)

---

## [1.4.1] — 2026-05-22

### Fixed

- **ESM conversion** — converted `bin/cli.js` from CommonJS `require()` to ESM `import` to match `"type": "module"` package setting

---

## [1.4.0] — 2026-05-22

### Added

- **Test suite** — 1510 tests across 6 suites using `node:test` (zero dependencies):
  - `test/stubs.test.js` — file presence, stub.yaml validity (type, tier), SKILL.md frontmatter (name, description, triggers), type:skill upgrade commands use `skills add` not curl, catalogue-level invariants (6 routers, no duplicate triggers)
  - `test/cli.test.js` — bin/cli.js exists, is executable, references correct package and delegates to skills CLI
- **`npm test`** script added to package.json
- **`"type": "module"`** — package is now ESM
- **Engine bumped** to `>=18` (required for `node:test`)

---

## [1.3.0] — 2026-05-22

### Changed

- **Primary install path** — `npx skills add podo/design-agent-skills [-g]` replaces custom install.sh. Integrates with the [skills CLI ecosystem](https://github.com/vercel-labs/skills) and its 33+ supported agents.
- **Two-tier model (Option C)** — catalogue now has explicit tiers:
  - **Tier 1 — Routing layer** (6 domain catalogues): `type: router` in stub.yaml; permanently owned by this repo; `skills update` always reaches them.
  - **Tier 2 — Implementation pointers** (122 skills): upgrade on first use via `skills add owner/repo --skill <name> [-g]`; ownership transfers to upstream post-upgrade.
- **Upgrade path for type:skill pointers** — all 47 `type: skill` SKILL.md files rewritten: curl commands replaced with `skills add owner/repo --skill <name>` + scope detection (checks `~/.agents/skills/<name>` vs `.agents/skills/<name>` to select `-g` flag).
- **Canonical install path** — full skills now land at `~/.agents/skills/<name>/` (global) or `.agents/skills/<name>/` (project) — the standard `skills` CLI canonical location. Previous `~/.design-agent-skills/` path retired.
- **bin/cli.js** — rewritten as thin wrapper around `npx skills add podo/design-agent-skills`; scope TUI passes `-g` flag; `update`/`remove`/`list` delegated to `skills` CLI directly.
- **README** — install section, commands, how it works, pointer types table, supply chain all updated to reflect new architecture.

---

## [1.2.0] — 2026-05-22

### Added

- **npm package** — `npx design-agent-skills` now works as the primary install path. On first run: clones to `~/.design-agent-skills`. On subsequent runs: pulls latest, then installs.
- **5 domain catalogue routers** — `motion-catalogue`, `figma-catalogue`, `accessibility-catalogue`, `design-engineering-catalogue`, `content-catalogue`. Route by domain before reaching implementation skills.
- **`remove` command** — `install.sh remove <skill>` unlinks a specific skill from all detected agents. `remove --all` unlinks everything.
- **`doctor` command** — detects exact trigger collisions, substring overlaps (`--substr`), orphaned symlinks, and relocated installs.
- **`update --dry-run` / `--frozen`** — preview changes without applying; warn on upstream drift vs lockfile.
- **`lock` command** — generates `design-agent-skills.lock` (SHA256 of every installed skill).
- **Tier classification** — all 128 skills classified as `official` (28), `community` (35), or `experimental` (60). Experimental excluded by default; opt in with `--include-experimental`.
- **`--scope=project`** — link skills to project-level `.claude/skills/` instead of `~`. Warns when user-scope-only agents (codex, droid) are detected but skipped.
- **`installed_as` field** — multi-skill packages (expo-skills: 15 skills, software-mansion-skills: 5 skills, and others) now declare the exact skill names they install, enabling partial-install detection.
- **Symlink fragility detection** — `doctor` reports `BROKEN` (target missing) and `RELOCATED` (target outside current install dir) with recovery instructions.

### Fixed

- `"frontend design"` trigger on `anthropics-skills` renamed to `"Anthropic frontend design"` — previously bled into `microsoft-skills` `"frontend design review"`.
- `"flow field"` trigger on `algorithmic-art` renamed to `"flow field art"` — previously bled into `p5js-hermes` `"flow field p5"`.
- 10 exact trigger collisions across the catalogue resolved.

### Changed

- README rewritten: stubs framing replaced with skill pointer language; domain catalogues documented; trigger routing and overlap map added; supply chain position documented.

---

## [1.1.0] — 2026-05-22

### Added

62 new skill stubs discovered via deep research across GitHub, X, and community sources.

#### Design Engineering
- `frontend-design` — 8 aesthetic anchors (Brutalist, Nordic, Cyberpunk, Vaporwave…) with locked CSS tokens per theme (Ilm-Alan)
- `huashu-design` — Magazine-grade typography, animated prototypes, 20 design philosophies, MP4 export (alchaincyf)
- `brand-design-md` — Fetches exact design tokens for 62 world-class brands at runtime (zephyrwang6)
- `ai-graphic-design-skill` — Maps 15 AI tools to design scenarios + 2025-26 Creative Director roadmap (designrique)
- `logo-designer-skill` — Brand interview → 3-5 SVG concepts → PNG export 16px–2048px (neonwatty)
- `distinctive-frontend` — 4 themed design systems with pre-configured type pairings and staggered animations (Koomook)
- `design-for-ai` — CHECKER (7-category audit) + APPLIER (6-phase creation) dual-mode plugin (ryanthedev)

#### Motion & Animation
- `motion-design-skill` — Official LottieFiles: timing, easing, choreography, Disney 12 principles for UI
- `gsap-skills` — Official GSAP: 8 skills covering core, timeline, ScrollTrigger, Flip, Draggable, SplitText, React, perf
- `framer-motion-skills` — 6 Framer Motion skills: core, Next.js, variants, scroll, gestures, layout (C-Jeril)
- `animate-skill` — Emil-inspired Next.js/React patterns: hover, toast, text reveal, modals (delphi-ai)
- `animate-css-skill` — Animate.css v4 + scroll triggers + RTL + prefers-reduced-motion (msrbuilds)
- `css-animation-skill` — Scrapes live app design language, interviews, produces standalone animation file (neonwatty)
- `wiggle-claude-skill` — Animates SVG logos → Lottie JSON → GIF + MP4 (talknerdytome-labs)
- `claudedesignskills` — 22-skill bundle: Three.js, GSAP, R3F, Framer, Babylon, A-Frame, PixiJS, Rive, Lottie (freshtechbro)
- `hyperframes` — "Write HTML → render video": 11 skills for GSAP/CSS/Lottie/Three.js + TTS media (HeyGen)

#### Interaction & Polish
- `neo-user-journey` — UX journey mapping + Playwright testing + 50+ patterns + Nielsen scoring (Cornjebus)
- `simota-agent-skills` — 15 design sub-skills: Vision, Muse, Frame (Figma bridge), Pixel, Clay, Dot, Sketch (simota)
- `design-auditor` — 19-category audit: typography, dark mode, RTL, dark patterns, Nielsen; 0-100 score (Ashutos1997)

#### Visual, Components & Color
- `design-tokens-skill` — W3C DTCG token spec: OKLCH, references/aliasing, Terrazzo, Figma exports (ilikescience)
- `google-fonts-skill` — 1,923 Google Fonts with mood tags + 73 pairings + CSS vars + Tailwind config (sliday)
- `mobile-app-design` — iOS HIG + Android MD3 + RN best practices — 26K words (awesome-skills)
- `mobile-app-ui-design` — Professional mobile UI: intentional, smooth, alive interfaces (ceorkm)
- `sleek-design-mobile-apps` — Sleek platform: design screens, projects, assets via natural language (sleekdotdesign)

#### Accessibility & Quality
- `mastepanoski-skills` — 6 audit skills: ux-audit-rethink, Nielsen, WCAG POUR, Don Norman, cognitive walkthrough (mastepanoski)
- `wcag-ai-skill` — WCAG 2.2 practical guidance for design, frontend, QA, remediation, conformance (Raze-Systems)
- `accessibility-agents` — 25 specialist a11y agents: 9 web code, 6 document (Office/PDF), markdown auditors (Community-Access)

#### Design Review & Creative Direction
- `ux-ui-mastery` — 19-skill suite: cognitive psych, spatial UX, ambient/zero UI, iOS 26 Liquid Glass, WCAG 3.0 (phazurlabs)
- `designer-skills` — 91 skills, 9 plugins, 28 commands: design research, systems, ux-strategy, critique (Owl-Listener)
- `design-with-claude` — 38 design specialist slash commands: dashboards, b2b SaaS, healthcare UX, data viz (imsaif)
- `ux-designer-skill` — Synthesizes 19 authoritative UX sources (NNG, Laws of UX) with 2026 best practices (szilu)
- `wondelai-skills` — Skills from Refactoring UI, The Design of Everyday Things, Sprint, Lean UX, Inspired (wondelai)

#### Figma & Design-to-Code
- `claude2figma` — 4 skills enforcing design system compliance with token binding verification (senlindesign)
- `work-with-design-systems` — Inspect (WCAG audit, scoring) + Build (6-phase, variable bindings) dual-mode (natdexterra)
- `figma-variables-tokens-generator` — Questionnaire → W3C token ZIP + Figma plugin for import (Shanmus4)
- `figma-skill` — Figma API + Community resources → design tokens → 7 frameworks (nafiurrahmanniloy)
- `extract-design-system` — Reverse-engineers tokens from any live website → tokens.json + tokens.css (arvindrk)

#### Official Platform Suites
- `software-mansion-skills` — Official Software Mansion: React Native animations, gestures, SVG, on-device AI
- `callstack-agent-skills` — Official Callstack: RN best practices, GitHub workflows, build artifacts, upgrade
- `expo-skills` — Official Expo: Expo projects + EAS, fine-tuned by Expo team

#### Diagrams & Wireframing
- `wireframe-skill` — NL → wireframe JSON + interactive HTML with drag/drop, undo/redo (yhassy)
- `claude-wireframe-skill` — 5 UX approaches as interactive prototypes, B&W first then color (Magdoub)

#### Data Visualization & Charts
- `claud3` — D3 v7 + Tufte principles: 80+ chart types, dark theme, annotations, responsive (dtran320)
- `data-analysis-skill` — Multi-expert parallel analysis → HTML reports + PowerPoint export (dongzhang84)

#### 3D, Creative & Media
- `webgpu-claude-skill` — Three.js TSL, node materials, GPU compute, WGSL — r183+ (dgreenheck)
- `threejs-ecs-ts` — Three.js + Entity Component Systems + TypeScript (Nice-Wolf-Studio)
- `threejs-claude-skill-package` — 24 skills: WebGL, WebGPU, R3F, physics, IFC/BIM (OpenAEC Foundation)
- `generative-media-skills` — 41 workflows: Midjourney v7, Flux Kontext, Kling 3.0, Veo3, Suno audio (SamurAIGPT)
- `open-design` — 31 skills + 71 brand design systems, local-first Claude Design alternative (nexu-io)
- `superdesign-skill` — Infinite-canvas ideation: brand extraction, design drafts, IDE-native (superdesigndev)

#### Presentations
- `revealjs-skill` — Reveal.js: themes, Chart.js, speaker notes, PDF export (ryanbbrown)
- `marp-slides` — MARP + 22 example decks, SVG charts, dashboard components (robonuggets)
- `slidev-skill` — Official Slidev: developer presentations in Markdown with Vue + animations
- `cc-slidev` — Slidev plugin with evidence-based design guardrails for tech talks (rhuss)
- `marp-slide-quality` — SlideGauge scoring: overflow, contrast, density checks before render (nibzard)

#### Product & PM
- `pm-skills` — 63 skills: Triple Diamond, 30 phases, Design Sprint, Foundation Sprint (product-on-purpose)
- `claude-pm-skills` — Product thinking, discovery, prioritization, launch (pratikshadake)

#### Email Design *(new category)*
- `email-html-mjml` — MJML 4.x → cross-client HTML email, WCAG 2.1 AA, Outlook-safe (framix-team)

#### TUI & Terminal Design *(new category)*
- `tui-design-skill` — Terminal UI design for Bubble Tea (Go), Ratatui (Rust), Textual (Python), Ink (TS) (gfargo)

#### Apple / iOS 26 *(extends existing Apple HIG)*
- `liquid-glass-skill` — .glassEffect(), GlassEffectContainer, iOS 26 migration (haider-nawaz)
- `swiftui-claude-skills` — WWDC 2025 verified, iOS 26.4 RC, SwiftUI patterns (199-biotechnologies)

---

## [1.0.0] — 2026-05-22

### Added

Initial release with 62 skill stubs across 14 categories.

#### Design Engineering
- `taste-skill`, `impeccable`, `ui-craft`, `emilkowalski-skill`, `make-interfaces-better`

#### Motion & Animation
- `algorithmic-art`, `shader-dev`, `p5js-hermes`, `remotion`

#### Interaction & Polish
- `taste-design-stitch`, `design-lab`, `interface-design-dammyjay`, `bencium-ux-designer`

#### Visual, Components & Color
- `color-expert`, `baseline-ui`, `shadcn-ui`, `ui-ux-pro-max`, `platform-design-skills`, `apple-hig-skills`, `hig-doctor`, `swiftui-patterns`, `ink-google`

#### Accessibility & Quality
- `fixing-accessibility`, `fixing-motion-performance`, `wcag-audit-patterns`, `addyosmani-quality`, `cloudflare-web-perf`, `react-doctor`

#### Design Review & Creative Direction
- `creative-director`, `design-brief`, `design-consultation`, `design-review-garrytan`, `plan-design-review`, `design-html`, `digidai-pm`

#### Figma & Design-to-Code
- `figma-official-skills`, `openai-skills`, `google-stitch-skills`, `extract-design-md`

#### Official Platform Suites
- `anthropics-skills`, `vercel-skills`, `microsoft-skills`, `composio-artifacts`

#### Diagrams & Wireframing
- `excalidraw-diagram`, `hand-drawn-diagrams`, `excalidraw-agents365`, `wireframer`, `softaworks-agent-toolkit`, `nimbalyst-skills`

#### Data Visualization & Charts
- `antvis-chart-skills`, `markdown-viewer-skills`, `d3js-skill`, `data-viz-agent`

#### 3D, Creative & Media
- `cloudai-threejs`, `fal-ai-skills`

#### Presentations
- `nanobanan-ppt`, `guizang-ppt`, `frontend-slides`

#### Product & PM
- `deanpeters-pm-skills`, `phuryn-pm-skills`, `coreyhaines-marketing`

#### Meta
- `design-catalogue`
