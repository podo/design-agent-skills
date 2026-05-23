# design-agent-skills

A curated catalogue of design skills for Claude Code, Cursor, Codex, OpenCode, and 30+ other AI coding agents.
136 skills covering UI craft, motion, Figma workflows, accessibility, data viz, presentations, PM tools, content design, and user research.
Skills install on demand — the catalogue is a lightweight index, not a bulk download.

## Install

```bash
npx skills add podo/design-agent-skills -g     # user scope — all projects
npx skills add podo/design-agent-skills        # project scope — this project only
```

Or use the interactive CLI — arrow-key navigation, no flags needed:

```bash
npx design-agent-skills
```

```
◇  Where should skills install?
│  ● User scope    ~/.agents/skills/   all projects
│  ○ Project scope .agents/skills/     this project
└

◆  User scope
│
◇  Which profile?
│  ● Picks        24 skills  ★ best in class
│  ○ Essentials   77 skills    full coverage
│  ○ All         136 skills    everything
│  ○ Category →  pick a domain
└

◆  Picks — 24 skills
│
◆  Installing 24 skills…
│  ✓ taste-skill
│  ✓ ui-craft
│  ✓ gsap-skills
│  …
│
◆  Done — 24 skills in 4.2s
```

Auto-detects all installed agents (Claude Code, Cursor, Codex, OpenCode, Droid, and [30+ more](https://github.com/vercel-labs/skills#supported-agents)). Installs skill pointers with symlinks from every agent directory to a single canonical store — one file, all agents.

### Pick your install

| Profile | Flag | Skills | Best for |
|---------|------|--------|----------|
| **Picks** ★ | `--picks` | 24 | One best-in-class per category. Start here. |
| **Essentials** | `--essentials` | ~77 | Full coverage, no redundancy. |
| **All** | `--all` | 136 | Everything including niche and experimental. |

```bash
npx design-agent-skills --picks -g          # 24 best-in-class skills, global
npx design-agent-skills --essentials -g     # ~77 skills covering all categories
npx design-agent-skills --all -g            # all 136 (default when no flag)
```

Filter by category (composable with any profile):

```bash
npx design-agent-skills --category motion
npx design-agent-skills --picks --category accessibility
npx design-agent-skills --essentials --category figma-code
```

Valid categories: `design-systems` · `creative-3d` · `interaction-polish` · `visual-components` · `accessibility-quality` · `design-review` · `figma-code` · `official-suites` · `diagrams` · `data-visualization` · `presentations` · `product-pm` · `content-design` · `email-design` · `tui-terminal` · `motion-animation` · `design-engineering` · `design-research`

## Commands

```bash
# Installation
npx skills add podo/design-agent-skills -g    # install globally
npx skills add podo/design-agent-skills       # install for this project

# Keeping skills current
npx skills update                             # update all skills
npx skills update <name>                      # update one skill

# Inspection
npx skills list                               # list installed skills
npx skills list -g                            # global skills only

# Removal
npx skills remove <skill>                     # remove a specific skill
npx skills remove --all                       # remove everything

# Health checks (catalogue-specific)
npx design-agent-skills doctor                # trigger collisions + symlink health
```

### How skills install on demand

The catalogue has two tiers:

**Tier 1 — Routing layer** (6 domain catalogues): permanently owned by this repo. `skills update` always pulls the latest routing logic from here, regardless of what else is installed.

**Tier 2 — Implementation pointers** (122 skills): lightweight entries that tell an agent what a skill does and how to fetch the full version. When an agent reads a pointer and needs the real skill, it runs:

```bash
# Global install:
npx skills add owner/repo --skill <name> -g -y

# Project install:
npx skills add owner/repo --skill <name> -y
```

The full skill lands at `~/.agents/skills/<name>/` (global) or `.agents/skills/<name>/` (project) — overwriting the pointer at the same canonical path. All 30+ agent symlinks pick up the change automatically. One install, all agents updated.

## How it works

Each skill is a `SKILL.md` file in `skills/<name>/`. The catalogue is structured in two permanent tiers:

| Tier | Type | Count | Owned by | Updates |
|------|------|-------|----------|---------|
| **Routing** | `router` | 6 | This repo — always | `skills update` always reaches these |
| **Implementation** | `skill` / `package` / `platform` | 136 | Upstream on first use | `skills update` reaches un-upgraded pointers |

### Pointer anatomy

```yaml
---
name: <skill-name>
description: |
  One-paragraph description for agent discovery.
triggers:
  - "phrase that activates this skill"
das:
  type: <type>                # router | skill | package | platform
  category: <category>        # design-systems, motion, accessibility, …
  upstream: <github-url>      # skill/package/platform only
  upstream_path: <path>       # skill type only
  version: latest
---
```

### Pointer types

| Type | Role | Upgrade path | Example |
|------|------|-------------|---------|
| `router` | Domain navigator — routes to the right skill | Never upgraded; always from this repo | design-catalogue |
| `skill` | Single `SKILL.md` from upstream | `skills add owner/repo --skill <name>` | taste-skill |
| `package` | Multi-skill GitHub package | `skills add owner/repo` | ui-craft |
| `platform` | Platform with template vars — never fetch directly | Manual per platform docs | impeccable |

### Body sections

**Decision tree** · **Install the full skill** · **Invoke after install** · **What it does**

## Adding a skill

1. `mkdir skills/<name> && touch skills/<name>/SKILL.md skills/<name>/stub.yaml`
2. Fill frontmatter + body sections (decision tree, install, invoke, what it does)
3. Set `type: skill`, `type: package`, or `type: router` in `stub.yaml`
4. Add a row to the table below
5. Open a PR — no review of upstream content required

## Trigger routing and known overlaps

Skills activate when an agent reads a trigger phrase from a user message.
The catalogue uses a two-level routing structure:

```
User asks → design-catalogue (top-level router)
                → domain catalogue (motion-catalogue, figma-catalogue, …)
                    → implementation skill (gsap-skills, figma-official-skills, …)
```

**Intentional broad triggers** — catalogue skills carry generic triggers by design so
they fire before a more specific skill does. For example, `design-catalogue` owns
`"excalidraw"`, `"wireframe"`, `"Three.js"`, and `"GSAP"` to route the user to the
right domain. The specific implementation skills (e.g. `gsap-skills`) own longer
triggers like `"GSAP skill"` and `"GSAP timeline"` for direct invocation.

**Known overlaps by domain:**

| Short trigger | On catalogue | Longer triggers also matched | On impl skill |
|---|---|---|---|
| `excalidraw` | design-catalogue | excalidraw diagram, excalidraw for agents, excalidraw sketch | excalidraw-diagram, excalidraw-agents365 |
| `wireframe` | design-catalogue | wireframe skills, wireframe-skill, JSON wireframe, interactive wireframe HTML | wireframer, wireframe-skill, claude-wireframe-skill |
| `Three.js` | design-catalogue | Three.js skill, Three.js ECS, IFC Three.js, TSL Three.js | cloudai-threejs, threejs-ecs-ts |
| `GSAP` | design-catalogue | GSAP skill, GSAP timeline, useGSAP | gsap-skills |
| `shader` | design-catalogue | shader skill, WebGL shader, GPU compute shaders | shader-dev |
| `Framer Motion` | design-catalogue | Framer Motion skill | framer-motion-skills |
| `Marp` | design-catalogue | Marp presentation | marp-slides |
| `Slidev` | design-catalogue | Slidev presentation | slidev-skill |
| `shadcn` | design-catalogue | shadcn/ui, shadcn component, stitch shadcn | shadcn-ui |
| `Expo` | design-catalogue | Expo SDK, Expo Router | expo-skills |
| `EAS` | expo-skills | EAS Build, EAS Submit | — |
| `Apple HIG` | design-catalogue | Apple HIG audit, Apple HIG rules, fix Apple HIG | apple-hig-skills |
| `generative art` | design-catalogue | generative art p5, generative art skill | algorithmic-art |
| `animate` | animate-skill | animate-css, animated GIF, animated prototype, animated slides | animate-css-skill |

These overlaps are harmless: when both a catalogue and an impl skill activate,
the impl skill handles the request directly while the catalogue is redundant noise.
Run `npx design-agent-skills doctor --substr` to see the full list at any time.

**Fixed impl→impl conflicts** (triggers that previously caused two unrelated skills to compete):

| Trigger | Was on | Conflicted with | Fix |
|---|---|---|---|
| `frontend design` | anthropics-skills | microsoft-skills `frontend design review` | renamed to `Anthropic frontend design` |
| `flow field` | algorithmic-art | p5js-hermes `flow field p5` | renamed to `flow field art` |

## Supply chain

Skills install from GitHub via `npx skills add`. Upstream repos don't publish versioned releases or stable SHAs, so pre-install pinning isn't possible.

**What we do instead:**

- **Tier classification** — `official` (28), `community` (49), `experimental` (60) — experimental excluded by default
- **Routing layer** — domain catalogues (Tier 1) are permanently owned here; your update path to them is always intact
- **`skills update`** — re-fetches each skill from its current source; run regularly to stay current

If you need stronger guarantees, clone an upstream repo at a specific commit and point `upstream` in `stub.yaml` to your fork.

## Skills

### Catalogue Routers

Domain routers — activate when the user asks for a skill by domain. Route to the right implementation skill.

| Skill | Routes to |
|-------|-----------|
| [design-catalogue](skills/design-catalogue/SKILL.md) | Top-level router across all domains |
| [motion-catalogue](skills/motion-catalogue/SKILL.md) | Motion, 3D, shaders, generative art |
| [figma-catalogue](skills/figma-catalogue/SKILL.md) | Figma, design-to-code, tokens, platform suites |
| [accessibility-catalogue](skills/accessibility-catalogue/SKILL.md) | Accessibility, WCAG, web performance |
| [design-engineering-catalogue](skills/design-engineering-catalogue/SKILL.md) | UI craft, visual design, brand, mobile |
| [content-catalogue](skills/content-catalogue/SKILL.md) | Slides, diagrams, data viz, PM, design review, copywriting, UX writing |

### Design Engineering

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [taste-skill](skills/taste-skill/SKILL.md) ★ | skill | design-systems | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| [ui-craft](skills/ui-craft/SKILL.md) ★ | package | design-systems | [educlopez/ui-craft](https://github.com/educlopez/ui-craft) |
| [brand-design-md](skills/brand-design-md/SKILL.md) | skill | design-systems | [zephyrwang6/brand-design-md](https://github.com/zephyrwang6/brand-design-md) |
| [frontend-design](skills/frontend-design/SKILL.md) | skill | design-systems | [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) |
| [impeccable](skills/impeccable/SKILL.md) | platform | design-systems | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
| [ai-graphic-design-skill](skills/ai-graphic-design-skill/SKILL.md) | skill | design-systems | [designrique/ai-graphic-design-skill](https://github.com/designrique/ai-graphic-design-skill) |
| [design-for-ai](skills/design-for-ai/SKILL.md) | package | design-systems | [ryanthedev/design-for-ai](https://github.com/ryanthedev/design-for-ai) |
| [distinctive-frontend](skills/distinctive-frontend/SKILL.md) | package | design-systems | [Koomook/claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills) |
| [huashu-design](skills/huashu-design/SKILL.md) | skill | design-systems | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) |
| [logo-designer-skill](skills/logo-designer-skill/SKILL.md) | package | design-systems | [neonwatty/logo-designer-skill](https://github.com/neonwatty/logo-designer-skill) |
| [styleseed](skills/styleseed/SKILL.md) | package | design-systems | [bitjaru/styleseed](https://github.com/bitjaru/styleseed) |

### Motion & Animation

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [remotion](skills/remotion/SKILL.md) ★ | skill | creative-3d | [remotion-dev/skills](https://github.com/remotion-dev/skills) |
| [generative-media-skills](skills/generative-media-skills/SKILL.md) | platform | creative-3d | [SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) |
| [open-design](skills/open-design/SKILL.md) | platform | creative-3d | [nexu-io/open-design](https://github.com/nexu-io/open-design) |
| [p5js-hermes](skills/p5js-hermes/SKILL.md) | skill | creative-3d | [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent) |
| [algorithmic-art](skills/algorithmic-art/SKILL.md) | skill | creative-3d | [anthropics/skills](https://github.com/anthropics/skills) |
| [cloudai-threejs](skills/cloudai-threejs/SKILL.md) | package | creative-3d | [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills) |
| [fal-ai-skills](skills/fal-ai-skills/SKILL.md) | package | creative-3d | [fal-ai-community/skills](https://github.com/fal-ai-community/skills) |
| [shader-dev](skills/shader-dev/SKILL.md) | skill | creative-3d | [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) |
| [superdesign-skill](skills/superdesign-skill/SKILL.md) | platform | creative-3d | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) |
| [threejs-claude-skill-package](skills/threejs-claude-skill-package/SKILL.md) | package | creative-3d | [OpenAEC-Foundation/Three.js-Claude-Skill-Package](https://github.com/OpenAEC-Foundation/Three.js-Claude-Skill-Package) |
| [threejs-ecs-ts](skills/threejs-ecs-ts/SKILL.md) | package | creative-3d | [Nice-Wolf-Studio/claude-skills-threejs-ecs-ts](https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts) |
| [webgpu-claude-skill](skills/webgpu-claude-skill/SKILL.md) | package | creative-3d | [dgreenheck/webgpu-claude-skill](https://github.com/dgreenheck/webgpu-claude-skill) |

### Interaction & Polish

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [interaction-design](skills/interaction-design/SKILL.md) ★ | package | interaction-polish | [rastian/interaction-design-skills](https://github.com/rastian/interaction-design-skills) |
| [design-auditor](skills/design-auditor/SKILL.md) | skill | interaction-polish | [Ashutos1997/claude-design-auditor-skill](https://github.com/Ashutos1997/claude-design-auditor-skill) |
| [make-interfaces-better](skills/make-interfaces-better/SKILL.md) | skill | interaction-polish | [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) |
| [neo-user-journey](skills/neo-user-journey/SKILL.md) | skill | interaction-polish | [Cornjebus/neo-user-journey](https://github.com/Cornjebus/neo-user-journey) |
| [bencium-ux-designer](skills/bencium-ux-designer/SKILL.md) | package | interaction-polish | [bencium/bencium-innovative-ux-designer](https://github.com/bencium/bencium-innovative-ux-designer) |
| [design-lab](skills/design-lab/SKILL.md) | package | interaction-polish | [0xdesign/design-lab](https://github.com/0xdesign/design-lab) |
| [interface-design-dammyjay](skills/interface-design-dammyjay/SKILL.md) | package | interaction-polish | [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design) |
| [simota-agent-skills](skills/simota-agent-skills/SKILL.md) | package | interaction-polish | [simota/agent-skills](https://github.com/simota/agent-skills) |
| [taste-design-stitch](skills/taste-design-stitch/SKILL.md) | skill | interaction-polish | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |

### Visual Components

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [apple-hig-skills](skills/apple-hig-skills/SKILL.md) ★ | package | visual-components | [raintree-technology/apple-hig-skills](https://github.com/raintree-technology/apple-hig-skills) |
| [color-expert](skills/color-expert/SKILL.md) ★ | skill | visual-components | [meodai/skill.color-expert](https://github.com/meodai/skill.color-expert) |
| [material-3-skill](skills/material-3-skill/SKILL.md) ★ | package | visual-components | [hamen/material-3-skill](https://github.com/hamen/material-3-skill) |
| [shadcn-ui](skills/shadcn-ui/SKILL.md) ★ | package | visual-components | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) |
| [copywriting-skill](skills/copywriting-skill/SKILL.md) | skill | visual-components | [judicael-s/Copywriting-skill](https://github.com/judicael-s/Copywriting-skill) |
| [design-tokens-skill](skills/design-tokens-skill/SKILL.md) | skill | visual-components | [ilikescience/design-tokens-skill](https://github.com/ilikescience/design-tokens-skill) |
| [google-fonts-skill](skills/google-fonts-skill/SKILL.md) | platform | visual-components | [sliday/google-fonts-skill](https://github.com/sliday/google-fonts-skill) |
| [hig-doctor](skills/hig-doctor/SKILL.md) | package | visual-components | [raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor) |
| [humanize-text](skills/humanize-text/SKILL.md) | package | visual-components | [gregorymm/humanize-text](https://github.com/gregorymm/humanize-text) |
| [liquid-glass-skill](skills/liquid-glass-skill/SKILL.md) | package | visual-components | [haider-nawaz/liquid-glass-skill](https://github.com/haider-nawaz/liquid-glass-skill) |
| [mobile-app-design](skills/mobile-app-design/SKILL.md) | skill | visual-components | [awesome-skills/mobile-app-design](https://github.com/awesome-skills/mobile-app-design) |
| [platform-design-skills](skills/platform-design-skills/SKILL.md) | package | visual-components | [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills) |
| [swiftui-claude-skills](skills/swiftui-claude-skills/SKILL.md) | package | visual-components | [199-biotechnologies/swiftui-claude-skills](https://github.com/199-biotechnologies/swiftui-claude-skills) |
| [awesome-design-skills](skills/awesome-design-skills/SKILL.md) | package | visual-components | [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) |
| [ink-google](skills/ink-google/SKILL.md) | skill | visual-components | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) |
| [mobile-app-ui-design](skills/mobile-app-ui-design/SKILL.md) | skill | visual-components | [ceorkm/mobile-app-ui-design](https://github.com/ceorkm/mobile-app-ui-design) |
| [sleek-design-mobile-apps](skills/sleek-design-mobile-apps/SKILL.md) | platform | visual-components | [sleekdotdesign/agent-skills](https://github.com/sleekdotdesign/agent-skills) |
| [swiftui-patterns](skills/swiftui-patterns/SKILL.md) | package | visual-components | [dimillian/swiftui-ui-patterns](https://github.com/dimillian/swiftui-ui-patterns) |
| [ui-ux-pro-max](skills/ui-ux-pro-max/SKILL.md) | platform | visual-components | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |

### Accessibility & Quality

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [fixing-accessibility](skills/fixing-accessibility/SKILL.md) ★ | package | accessibility-quality | [ibelick/fixing-accessibility](https://github.com/ibelick/fixing-accessibility) |
| [wcag-ai-skill](skills/wcag-ai-skill/SKILL.md) ★ | package | accessibility-quality | [Raze-Systems/wcag-ai-skill](https://github.com/Raze-Systems/wcag-ai-skill) |
| [accessibility-agents](skills/accessibility-agents/SKILL.md) | package | accessibility-quality | [Community-Access/accessibility-agents](https://github.com/Community-Access/accessibility-agents) |
| [addyosmani-quality](skills/addyosmani-quality/SKILL.md) | package | accessibility-quality | [addyosmani/skills](https://github.com/addyosmani/skills) |
| [baseline-ui](skills/baseline-ui/SKILL.md) | package | accessibility-quality | [ibelick/baseline-ui](https://github.com/ibelick/baseline-ui) |
| [cloudflare-web-perf](skills/cloudflare-web-perf/SKILL.md) | skill | accessibility-quality | [cloudflare/skills](https://github.com/cloudflare/skills) |
| [dark-pattern-audit](skills/dark-pattern-audit/SKILL.md) | package | accessibility-quality | [SidKH/skills](https://github.com/SidKH/skills) |
| [react-doctor](skills/react-doctor/SKILL.md) | package | accessibility-quality | [millionco/react-doctor](https://github.com/millionco/react-doctor) |
| [mastepanoski-skills](skills/mastepanoski-skills/SKILL.md) | package | accessibility-quality | [mastepanoski/claude-skills](https://github.com/mastepanoski/claude-skills) |
| [wcag-audit-patterns](skills/wcag-audit-patterns/SKILL.md) | package | accessibility-quality | [wshobson/wcag-audit-patterns](https://github.com/wshobson/wcag-audit-patterns) |

### Design Review

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [plan-design-review](skills/plan-design-review/SKILL.md) ★ | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [creative-director](skills/creative-director/SKILL.md) | skill | design-review | [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill) |
| [design-review-garrytan](skills/design-review-garrytan/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [designer-skills](skills/designer-skills/SKILL.md) | package | design-review | [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills) |
| [ux-designer-skill](skills/ux-designer-skill/SKILL.md) | skill | design-review | [szilu/ux-designer-skill](https://github.com/szilu/ux-designer-skill) |
| [design-brief](skills/design-brief/SKILL.md) | skill | design-review | [nexu-io/open-design](https://github.com/nexu-io/open-design) |
| [design-consultation](skills/design-consultation/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [design-with-claude](skills/design-with-claude/SKILL.md) | package | design-review | [imsaif/design-with-claude](https://github.com/imsaif/design-with-claude) |
| [ux-ui-mastery](skills/ux-ui-mastery/SKILL.md) | package | design-review | [phazurlabs/ux-ui-mastery](https://github.com/phazurlabs/ux-ui-mastery) |
| [wondelai-skills](skills/wondelai-skills/SKILL.md) | package | design-review | [wondelai/skills](https://github.com/wondelai/skills) |

### Figma & Code

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [figma-official-skills](skills/figma-official-skills/SKILL.md) ★ | package | figma-code | [figma/skills](https://github.com/figma/skills) |
| [claude2figma](skills/claude2figma/SKILL.md) | package | figma-code | [senlindesign/claude2figma](https://github.com/senlindesign/claude2figma) |
| [extract-design-system](skills/extract-design-system/SKILL.md) | package | figma-code | [arvindrk/extract-design-system](https://github.com/arvindrk/extract-design-system) |
| [google-stitch-skills](skills/google-stitch-skills/SKILL.md) | package | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [work-with-design-systems](skills/work-with-design-systems/SKILL.md) | skill | figma-code | [natdexterra/work-with-design-systems](https://github.com/natdexterra/work-with-design-systems) |
| [design-html](skills/design-html/SKILL.md) | skill | figma-code | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [extract-design-md](skills/extract-design-md/SKILL.md) | skill | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [figma-skill](skills/figma-skill/SKILL.md) | package | figma-code | [nafiurrahmanniloy/figma-skill](https://github.com/nafiurrahmanniloy/figma-skill) |
| [figma-variables-tokens-generator](skills/figma-variables-tokens-generator/SKILL.md) | package | figma-code | [Shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator) |

### Official Suites

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [anthropics-skills](skills/anthropics-skills/SKILL.md) ★ | package | official-suites | [anthropics/skills](https://github.com/anthropics/skills) |
| [expo-skills](skills/expo-skills/SKILL.md) | package | official-suites | [expo/skills](https://github.com/expo/skills) |
| [software-mansion-skills](skills/software-mansion-skills/SKILL.md) | package | official-suites | [software-mansion-labs/skills](https://github.com/software-mansion-labs/skills) |
| [vercel-skills](skills/vercel-skills/SKILL.md) | package | official-suites | [vercel-labs/skills](https://github.com/vercel-labs/skills) |
| [callstack-agent-skills](skills/callstack-agent-skills/SKILL.md) | package | official-suites | [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) |
| [composio-artifacts](skills/composio-artifacts/SKILL.md) | skill | official-suites | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| [microsoft-skills](skills/microsoft-skills/SKILL.md) | package | official-suites | [microsoft/skills](https://github.com/microsoft/skills) |
| [openai-skills](skills/openai-skills/SKILL.md) | package | official-suites | [openai/skills](https://github.com/openai/skills) |

### Diagrams

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [excalidraw-diagram](skills/excalidraw-diagram/SKILL.md) ★ | skill | diagrams | [coleam00/excalidraw-diagram-skill](https://github.com/coleam00/excalidraw-diagram-skill) |
| [softaworks-agent-toolkit](skills/softaworks-agent-toolkit/SKILL.md) | package | diagrams | [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit) |
| [wireframe-skill](skills/wireframe-skill/SKILL.md) | skill | diagrams | [yhassy/wireframe-skill](https://github.com/yhassy/wireframe-skill) |
| [wireframer](skills/wireframer/SKILL.md) | skill | diagrams | [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill) |
| [claude-wireframe-skill](skills/claude-wireframe-skill/SKILL.md) | skill | diagrams | [Magdoub/claude-wireframe-skill](https://github.com/Magdoub/claude-wireframe-skill) |
| [excalidraw-agents365](skills/excalidraw-agents365/SKILL.md) | skill | diagrams | [Agents365-ai/excalidraw-skill](https://github.com/Agents365-ai/excalidraw-skill) |
| [hand-drawn-diagrams](skills/hand-drawn-diagrams/SKILL.md) | skill | diagrams | [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) |
| [nimbalyst-skills](skills/nimbalyst-skills/SKILL.md) | package | diagrams | [https://nimbalyst.com/skills](https://nimbalyst.com/skills) |

### Data Visualization

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [antvis-chart-skills](skills/antvis-chart-skills/SKILL.md) ★ | package | data-visualization | [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills) |
| [claud3](skills/claud3/SKILL.md) | package | data-visualization | [dtran320/claud3](https://github.com/dtran320/claud3) |
| [d3js-skill](skills/d3js-skill/SKILL.md) | skill | data-visualization | [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill) |
| [markdown-viewer-skills](skills/markdown-viewer-skills/SKILL.md) | package | data-visualization | [markdown-viewer/skills](https://github.com/markdown-viewer/skills) |
| [data-analysis-skill](skills/data-analysis-skill/SKILL.md) | skill | data-visualization | [dongzhang84/data-analysis-skill](https://github.com/dongzhang84/data-analysis-skill) |
| [data-viz-agent](skills/data-viz-agent/SKILL.md) | skill | data-visualization | [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) |

### Presentations

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [slidev-skill](skills/slidev-skill/SKILL.md) ★ | package | presentations | [slidevjs/slidev](https://github.com/slidevjs/slidev) |
| [marp-slides](skills/marp-slides/SKILL.md) | skill | presentations | [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides) |
| [revealjs-skill](skills/revealjs-skill/SKILL.md) | package | presentations | [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) |
| [cc-slidev](skills/cc-slidev/SKILL.md) | package | presentations | [rhuss/cc-slidev](https://github.com/rhuss/cc-slidev) |
| [frontend-slides](skills/frontend-slides/SKILL.md) | skill | presentations | [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) |
| [guizang-ppt](skills/guizang-ppt/SKILL.md) | skill | presentations | [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) |
| [marp-slide-quality](skills/marp-slide-quality/SKILL.md) | skill | presentations | [nibzard/marp-slide-quality](https://github.com/nibzard/marp-slide-quality) |
| [nanobanan-ppt](skills/nanobanan-ppt/SKILL.md) | skill | presentations | [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) |

### Product & PM

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [deanpeters-pm-skills](skills/deanpeters-pm-skills/SKILL.md) ★ | package | product-pm | [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) |
| [design-sprint](skills/design-sprint/SKILL.md) | package | product-pm | [aoshimash/skills](https://github.com/aoshimash/skills) |
| [digidai-pm](skills/digidai-pm/SKILL.md) | skill | product-pm | [Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills) |
| [lenny-skills](skills/lenny-skills/SKILL.md) | package | product-pm | [RefoundAI/lenny-skills](https://github.com/RefoundAI/lenny-skills) |
| [pm-skills](skills/pm-skills/SKILL.md) | package | product-pm | [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) |
| [claude-pm-skills](skills/claude-pm-skills/SKILL.md) | package | product-pm | [pratikshadake/claude-product-management-skills](https://github.com/pratikshadake/claude-product-management-skills) |
| [coreyhaines-marketing](skills/coreyhaines-marketing/SKILL.md) | package | product-pm | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) |
| [phuryn-pm-skills](skills/phuryn-pm-skills/SKILL.md) | package | product-pm | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) |

### Content Design

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [ux-writing-skill](skills/ux-writing-skill/SKILL.md) ★ | skill | content-design | [content-designer/ux-writing-skill](https://github.com/content-designer/ux-writing-skill) |
| [product-position](skills/product-position/SKILL.md) | skill | content-design | [firatcand/founder-skills](https://github.com/firatcand/founder-skills) |

### Email Design

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [email-html-mjml](skills/email-html-mjml/SKILL.md) ★ | package | email-design | [framix-team/skill-email-html-mjml](https://github.com/framix-team/skill-email-html-mjml) |

### TUI & Terminal

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [textual-tui-skill](skills/textual-tui-skill/SKILL.md) ★ | package | tui-terminal | [aperepel/textual-tui-skill](https://github.com/aperepel/textual-tui-skill) |
| [tui-design-skill](skills/tui-design-skill/SKILL.md) | package | tui-terminal | [gfargo/tui-design-skill](https://github.com/gfargo/tui-design-skill) |

### Motion (Extended)

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [framer-motion-skills](skills/framer-motion-skills/SKILL.md) ★ | package | motion-animation | [C-Jeril/framer-motion-skills](https://github.com/C-Jeril/framer-motion-skills) |
| [gsap-skills](skills/gsap-skills/SKILL.md) ★ | package | motion-animation | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) |
| [animate-skill](skills/animate-skill/SKILL.md) | skill | motion-animation | [delphi-ai/animate-skill](https://github.com/delphi-ai/animate-skill) |
| [claudedesignskills](skills/claudedesignskills/SKILL.md) | package | motion-animation | [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) |
| [motion-design-skill](skills/motion-design-skill/SKILL.md) | package | motion-animation | [lottiefiles/motion-design-skill](https://github.com/lottiefiles/motion-design-skill) |
| [animate-css-skill](skills/animate-css-skill/SKILL.md) | package | motion-animation | [msrbuilds/animate-css-skill](https://github.com/msrbuilds/animate-css-skill) |
| [css-animation-skill](skills/css-animation-skill/SKILL.md) | skill | motion-animation | [neonwatty/css-animation-skill](https://github.com/neonwatty/css-animation-skill) |
| [fixing-motion-performance](skills/fixing-motion-performance/SKILL.md) | package | motion-animation | [ibelick/fixing-motion-performance](https://github.com/ibelick/fixing-motion-performance) |
| [hyperframes](skills/hyperframes/SKILL.md) | package | motion-animation | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |
| [wiggle-claude-skill](skills/wiggle-claude-skill/SKILL.md) | skill | motion-animation | [talknerdytome-labs/wiggle-claude-skill](https://github.com/talknerdytome-labs/wiggle-claude-skill) |

### Design Engineering (Extended)

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [emilkowalski-skill](skills/emilkowalski-skill/SKILL.md) ★ | package | design-engineering | [emilkowalski/skill](https://github.com/emilkowalski/skill) |
| [format-storybook](skills/format-storybook/SKILL.md) | skill | design-engineering | [mikemai2awesome/agent-skills](https://github.com/mikemai2awesome/agent-skills) |

### Design Research

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [user-research-cookiy](skills/user-research-cookiy/SKILL.md) ★ | skill | design-research | [cookiy-ai/user-research-skill](https://github.com/cookiy-ai/user-research-skill) |
