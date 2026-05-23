# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.5.1] — 2026-05-23

### Fixed

- Re-tag from v2.5.0 → v2.5.1 after v2.5.0 was tombstoned by GitHub when a partial release was deleted. No code changes.

---

## [2.5.0] — 2026-05-23

### Added

- **CLI: `--version` / `version`** — `npx design-agent-skills --version` or `version` prints the catalogue version and exits cleanly.
- **CLI: `search <query>`** — find skills by name or category substring. `--json` flag outputs structured results. Returns exit 0 with "No skills found" message when nothing matches.
- **`scripts/recategorize.mjs`** — maintenance tool for moving a skill to a new category. Updates both `stub.yaml` and the `das:` block in `SKILL.md` atomically. `--dry-run` previews changes without writing.
- **Dependabot npm monitoring** — `.github/dependabot.yml` now also watches the npm ecosystem for dependency updates.
- **`test/add-skill.test.js`** — 15 tests covering `scripts/add-skill.mjs`: source-pattern checks, dry-run with all flags exits 0, no files written on dry-run, correct stub.yaml and SKILL.md output, `npx skills add --skill` command format, and package-type SKILL.md shape.
- **`install.sh status` tests** — 4 new tests: exits 0 with no agents, exits 0 with claude agent dir, prints `skill` and `tier` column headers.
- **`install.sh remove` tests** — 5 new tests: exits 1 without args, exits 1 for unknown skill, removes single symlink, `--all` removes all symlinks, reports removed count.

Catalogue at 136 skills (unchanged). Test suite grows from 2423 → 2462 tests.

---

## [2.4.0] — 2026-05-23

### Added

- **CLI: `add <skill>` command** — `npx design-agent-skills add <skill-name> [-g]` installs a single skill by name without opening the TUI.
- **CLI: `CATEGORY_DESCRIPTIONS`** — `--list` now shows a short description alongside each category's skill count. `--list --json` includes a `description` field per entry.
- **`install.sh --picks`** — new global flag; only links rank-1 (best-in-class) skills when running `install`.
- **`install.sh --essentials`** — new global flag; only links rank-1 and rank-2 skills.
- **`install.sh help` computed tier counts** — official/community/experimental counts are now computed at runtime instead of hardcoded, staying accurate as skills are added.
- **`scripts/add-skill.mjs`** — interactive wizard for adding new skill stubs. Accepts all fields via CLI flags (`--name`, `--upstream`, `--category`, `--tier`, `--rank`, `--type`, `--yes`, `--dry-run`) for scripted use; prompts for any missing fields interactively.
- **`test/install.test.js`** — first test coverage for `install.sh`: 19 tests covering help output, install command with HOME isolation, `--picks`/`--essentials` rank profiles, and doctor command.

### Fixed

- **`install.sh` detected_agents bug** — `[ -d "$root" ] && echo` in the while loop body exits 1 when an agent's root dir doesn't exist; with `set -euo pipefail` this killed the script on systems where the last agent in `USER_AGENTS` is not installed. Fixed by adding `|| true` to each `&&` chain in `detected_agents()`.

## [2.3.0] — 2026-05-23

### Added

- **CLI: `doctor` command** — checks trigger phrase collisions across the full catalogue, reports broken symlinks in installed skills, and flags categories with no rank-1 entry. Exits 1 if issues found.
- **CLI: `--json` flag on `--list`** — outputs categories + counts as a JSON array for scripting. `npx design-agent-skills --list --json`.
- **CLI: experimental-tier warning** — when a filtered install set includes experimental-tier skills, a `⚠` warning is shown before installing.
- **CI: `test.yml` — Validate README skills table step** — `generate-readme-table.mjs --check` runs on every PR; fails if the README Skills section drifts from stub data.
- **CI: `upstream-check.yml` — rank-1 gap report** — weekly run now also reports categories with no rank-1 skill (warning only, does not fail).
- **Branch protection** — `main` now requires the `validate` CI check to pass before merging.
- **`npm version` hooks** — `preversion` runs `npm test`; `version` atomically writes `VERSION` and stages it. Running `npm version <X>` now handles both files safely.

### Fixed

- **`doctor` command** — was documented in README but not implemented; now works.
- **`content-design` category — 0 skills** — `ux-writing-skill` was miscategorized as `visual-components`; fixed to `content-design`. `product-position` (B2B messaging/positioning) also moved from `product-pm` to `content-design`. Category now has 2 skills.
- **6 categories with no rank-1 skill** — promoted one best-in-class skill per category: `remotion` (creative-3d), `emilkowalski-skill` (design-engineering), `email-html-mjml` (email-design), `interaction-design` (interaction-polish), `anthropics-skills` (official-suites), `textual-tui-skill` (tui-terminal).
- **CLAUDE.md worked example** — `stub.yaml` in the worked example now includes `category: tui-terminal`.
- **Undocumented stub.yaml fields** — `install_default`, `installed_as`, `note`, `install_claude`, `install_npm` are now documented in CLAUDE.md and allowed-listed in `stub.yaml field validation` test.

### Changed

- **`readStubs()`** — removed SKILL.md fallback for category (dead code after Q2 migration); now reads category directly from stub.yaml. Added `tier` field to returned stub objects.
- **`test/stubs.test.js`** — added `stub.yaml field validation` suite (142 tests); unknown fields now fail CI immediately.
- **`test/cli.test.js`** — 28 → 40 tests; added source-pattern coverage for `--json` and `doctor`, and integration tests for `--essentials`, `--all`, `--category` + `--dry-run`, `--list --json`, and `doctor`.
- **README Skills section** — regenerated from `scripts/generate-readme-table.mjs`; now stays in sync via CI check.
- **CLAUDE.md** — test count updated to 2401; stub.yaml fields section complete.

## [2.2.0] — 2026-05-23

### Added

- **CLI: `--help` / `-h` flag** — prints usage, all flags, examples, and valid categories. Running `npx design-agent-skills --help` now works correctly.
- **CLI: `--list` command** — shows all categories with per-category skill counts. `npx design-agent-skills --list` or `npx design-agent-skills list`.
- **CLI: `--dry-run` flag** — previews what would be installed (any profile/category) without making changes. Composable: `--picks --dry-run`, `--category figma-code --dry-run`.
- **CI: `test.yml` workflow** — PR gate on every push/PR to main. Runs the full test suite and validates that the README skill count matches the actual catalogue.
- **CI: `upstream-check.yml` workflow** — weekly scheduled check (Monday 09:00 UTC) that fetches all `type:skill` upstream URLs via GitHub API and fails on 404/451. Runnable manually via `workflow_dispatch`.
- **Dependabot** — weekly GitHub Actions version updates (`.github/dependabot.yml`).
- **PR template** — `.github/PULL_REQUEST_TEMPLATE.md` with add-a-skill and bug-fix checklists.
- **`scripts/sync-categories.mjs`** — one-time migration: writes `category:` from SKILL.md `das:` block into each `stub.yaml`. Run with `--dry-run` to preview.
- **`scripts/rank-audit.mjs`** — shows rank distribution (R1/R2/R3) by category; flags categories with no rank-1 entry.
- **`scripts/generate-readme-table.mjs`** — generates the `## Skills` section of README from stub data. Run with `--check` to diff against current README.
- **19 VALID_CATEGORIES** — added `motion-animation`, `design-engineering`, `design-research` to both `bin/cli.mjs` and `test/stubs.test.js`.

### Fixed

- **README skill count** — corrected from 142 to 136 (routers are not user-facing skills and were incorrectly included).
- **`isInstall` detection** — flags passed as first arg (`--picks`, `--category`) no longer fall through to `npx skills` delegation; correctly treated as install commands.
- **Publish gate: VERSION sync check** — `publish.yml` now verifies `VERSION` matches `package.json` before `npm publish`.
- **CLAUDE.md** — updated test count (1580 → 2252), category table (16 → 19 entries), and removed hardcoded count from test file description.
- **Stub category migration** — all 136 non-router `stub.yaml` files now carry an explicit `category:` field (was read-only from SKILL.md).

### Changed

- **`test.yml`** — replaced the inline duplicate-trigger script (covered by `npm test`) with a README count validation step.
- **`test/cli.test.js`** — expanded from 17 to 28 tests: source-pattern coverage for all new flags + 6 integration tests that spawn the real CLI binary.

## [2.1.2] — 2026-05-23

### Fixed

- **Category TUI** — all categories showed 0 skills and installs returned "No skills match". Root cause: `readStubs()` read `category` from `stub.yaml`, but all 142 stubs store category in `SKILL.md` frontmatter under `das.category`. CLI now falls back to SKILL.md when `stub.yaml` has no `category` field.
- **CI** — npm OIDC Trusted Publishing failed with misleading E404 because Node 20 ships npm v10, which doesn't implement the OIDC handshake. Switched to Node 24 (npm v11).

---

## [2.1.1] — 2026-05-23

### Fixed

- **All stubs** — stub decision trees now tell the agent to surface `! npx skills add …` as a chat message when auto-install is blocked (Claude Code auto-mode). Includes scope guidance: add `-g` for global install or omit for project-only. Pattern A stubs (scope-detection format) already handled scope correctly; this fixes B/C/D patterns.

---

## [2.1.0] — 2026-05-23

### Changed

- **`bin/cli.mjs`** — replaced numbered text prompts with a clack-style arrow-key TUI. `◇`/`◆`/`●`/`○` symbols, `↑↓` navigation, `ENTER` to confirm, `Q`/`Ctrl-C` to quit. Category sub-prompt shows per-category skill counts. Install output uses `✓`/`✗` per skill with elapsed time. Zero new dependencies — pure Node.js raw mode + ANSI escape codes.

---

## [2.0.0] — 2026-05-23

### Added

- **Install profiles** — `--picks` (18 skills), `--essentials` (~77 skills), `--all` (142, default). Interactive prompt when no flag is given.
- **Category filter** — `--category <name>` installs all skills in a specific domain; composable with any profile (`--picks --category accessibility`)
- **`rank` field in stub.yaml** — required on all non-router stubs: `1` = Picks, `2` = Essentials, `3` = Extended. Enforced by test suite.
- **`★` markers in README** — 18 Picks-tier skills marked in the skills table.
- **`.npmignore`** — excludes `test/`, `docs/`, `.claude/`, `CLAUDE.md`, `CHANGELOG.md` from the published package.

### Changed

- **`bin/cli.mjs`** — fully rewritten: profile selection prompt, `--picks` / `--essentials` / `--all` / `--category` flags, per-skill install loop for filtered installs, batch install preserved for `--all`.
- **`test/stubs.test.js`** — added `rank` validation: non-router stubs must have `rank` of `1`, `2`, or `3` (1674 → 1958 tests).
- **`.gitignore`** — added `docs/plans/` and `node_modules/`.
- **`CLAUDE.md`** — documented `rank` field, rank assignment criteria, `--category` flag; updated checklist and common mistakes.

### Breaking

- All non-router `stub.yaml` files now require a `rank` field. Any fork that adds stubs without `rank` will fail `npm test`.

---

## [1.9.0] — 2026-05-23

### Added

- **`product-position`** — B2B SaaS positioning and messaging advisor: positioning docs, messaging hierarchy, competitive framing, strategic narratives — Dunford, JTBD, Raskin, Lochhead frameworks (`firatcand/founder-skills`)
- **`lenny-skills`** — 86 PM and product design skills from Lenny Rachitsky's framework: behavioral product design, conducting interviews, designing surveys, running design reviews, user onboarding, growth loops, design systems (945 ★) (`RefoundAI/lenny-skills`)

### Changed

- **`design-catalogue` + `content-catalogue` routers** — Added product-position and lenny-skills to Product & PM section; 2 new routing guide entries

Catalogue grows from 140 → 142 skills.

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
