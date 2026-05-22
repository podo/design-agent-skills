# design-agent-skills

A catalogue of design skills for Claude Code, Cursor, Codex, OpenCode, and other AI coding agents.
128 skills covering UI craft, motion, Figma workflows, accessibility, data viz, presentations, and PM tools.
Skills install on demand — the catalogue is a lightweight index, not a bulk download.

## Install

```bash
npx design-agent-skills
```

Or without npm:

```bash
git clone https://github.com/podo/design-agent-skills ~/.design-agent-skills
~/.design-agent-skills/install.sh
```

Auto-detects Claude Code, Cursor, Codex, OpenCode, and Droid. Links each skill pointer into their skills directories — one source, all agents.

## Commands

```bash
npx design-agent-skills              # install or update
npx design-agent-skills status       # show installed / stub / BROKEN per skill per agent
npx design-agent-skills update       # pull new skills from upstream
npx design-agent-skills remove <skill>  # unlink a specific skill
npx design-agent-skills remove --all    # unlink everything
npx design-agent-skills fix          # remove broken symlinks
npx design-agent-skills doctor       # scan for trigger collisions and symlink health
```

Or run `install.sh` directly from `~/.design-agent-skills/` if you installed via git.

### Status output

```
skill                   claude      cursor      codex
──────────────────────  ──────────  ──────────  ──────────
design-catalogue        stub        stub        stub
taste-skill             upgraded    stub        -
```

- `stub` — pointer installed, upstream skill not yet fetched
- `upgraded` — upstream skill installed, stub replaced
- `BROKEN` — symlink target missing, run `./install.sh fix`
- `-` — not installed for this agent

### How stubs become upgraded

Each stub contains a `curl` install command. When an agent runs it, the upstream
`SKILL.md` overwrites the stub file **through the symlink** at the same path.
Because all agents share the same symlink target, one install upgrades all of them.

```bash
# example from skills/taste-skill/SKILL.md:
mkdir -p ~/.claude/skills/taste-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md \
    -o ~/.claude/skills/taste-skill/SKILL.md
```

After this runs, `./install.sh status` shows `upgraded` for every agent.

## How it works

Skills live in `skills/<name>/SKILL.md`. Two types:

| Type | Description |
|------|-------------|
| **stub** | Pointer to an upstream skill. Has `das:` frontmatter. Agent reads it to discover and install the full skill. |
| **native** | Full skill that lives in this repo. No install step needed. |

## Stub anatomy

```yaml
---
name: <skill-name>
description: |
  One-paragraph description for agent discovery.
triggers:
  - "phrase that activates this skill"
das:
  type: <type>                # skill | package | platform
  category: <category>        # design-systems, testing, devops, …
  upstream: <github-url>
  upstream_path: <path>       # skill type only
  version: latest
  install: true               # skill type only
---
```

### Stub types

| Type | `install.sh` behaviour | Example |
|------|------------------------|---------|
| `skill` | Symlinks SKILL.md; `update` re-fetches from upstream | taste-skill |
| `package` | Skips symlink; `update` prints per-agent install commands | ui-craft |
| `platform` | Same as package; SKILL.md has template vars — never curl directly | impeccable |

### Body sections

**When to use** · **How to install** · **How to invoke after install** · **What it does**

## Adding a stub

1. `mkdir skills/<name> && touch skills/<name>/SKILL.md`
2. Fill frontmatter + four body sections
3. Add a row to the table below
4. Open a PR — no review of upstream content required

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
Run `./install.sh doctor --substr` to see the full list at any time.

**Fixed impl→impl conflicts** (triggers that previously caused two unrelated skills to compete):

| Trigger | Was on | Conflicted with | Fix |
|---|---|---|---|
| `frontend design` | anthropics-skills | microsoft-skills `frontend design review` | renamed to `Anthropic frontend design` |
| `flow field` | algorithmic-art | p5js-hermes `flow field p5` | renamed to `flow field art` |

## Supply chain

Skills install from GitHub via `npx skills add`. The `npx skills add` ecosystem does not
publish versioned releases or stable commit SHAs, so pre-install pinning is not possible.

**What we do instead:**

- **Lockfile** (`design-agent-skills.lock`) — SHA256 of every installed `SKILL.md` captured at install time
- **Drift detection** — `update --frozen` compares current upstream against the lockfile and warns on any change
- **Tier classification** — `official` (28), `community` (35), `experimental` (60) — experimental excluded by default

If you need stronger guarantees, clone the upstream repos at a specific commit and
point `upstream_path` in `stub.yaml` to your fork.

## Skills

### Design Engineering

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [design-catalogue](skills/design-catalogue/SKILL.md) | native | meta | — |
| [taste-skill](skills/taste-skill/SKILL.md) | skill | design-systems | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| [impeccable](skills/impeccable/SKILL.md) | platform | design-systems | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
| [emilkowalski-skill](skills/emilkowalski-skill/SKILL.md) | package | design-systems | [emilkowalski/skill](https://github.com/emilkowalski/skill) |
| [make-interfaces-better](skills/make-interfaces-better/SKILL.md) | skill | design-systems | [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) |
| [ui-craft](skills/ui-craft/SKILL.md) | package | design-systems | [educlopez/ui-craft](https://github.com/educlopez/ui-craft) |
| [frontend-design](skills/frontend-design/SKILL.md) | skill | design-systems | [Ilm-Alan/frontend-design](https://github.com/Ilm-Alan/frontend-design) |
| [huashu-design](skills/huashu-design/SKILL.md) | skill | design-systems | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) |
| [brand-design-md](skills/brand-design-md/SKILL.md) | skill | design-systems | [zephyrwang6/brand-design-md](https://github.com/zephyrwang6/brand-design-md) |
| [ai-graphic-design-skill](skills/ai-graphic-design-skill/SKILL.md) | skill | design-systems | [designrique/ai-graphic-design-skill](https://github.com/designrique/ai-graphic-design-skill) |
| [logo-designer-skill](skills/logo-designer-skill/SKILL.md) | package | design-systems | [neonwatty/logo-designer-skill](https://github.com/neonwatty/logo-designer-skill) |
| [distinctive-frontend](skills/distinctive-frontend/SKILL.md) | package | design-systems | [Koomook/claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills) |
| [design-for-ai](skills/design-for-ai/SKILL.md) | package | design-systems | [ryanthedev/design-for-ai](https://github.com/ryanthedev/design-for-ai) |

### Motion & Animation

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [algorithmic-art](skills/algorithmic-art/SKILL.md) | skill | creative-3d | [anthropics/skills](https://github.com/anthropics/skills) |
| [shader-dev](skills/shader-dev/SKILL.md) | skill | creative-3d | [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) |
| [p5js-hermes](skills/p5js-hermes/SKILL.md) | skill | creative-3d | [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent) |
| [remotion](skills/remotion/SKILL.md) | skill | creative-3d | [remotion-dev/skills](https://github.com/remotion-dev/skills) |
| [motion-design-skill](skills/motion-design-skill/SKILL.md) | package | creative-3d | [lottiefiles/motion-design-skill](https://github.com/lottiefiles/motion-design-skill) |
| [gsap-skills](skills/gsap-skills/SKILL.md) | package | creative-3d | [greensock/gsap-skills](https://github.com/greensock/gsap-skills) |
| [framer-motion-skills](skills/framer-motion-skills/SKILL.md) | package | creative-3d | [C-Jeril/framer-motion-skills](https://github.com/C-Jeril/framer-motion-skills) |
| [animate-skill](skills/animate-skill/SKILL.md) | skill | creative-3d | [delphi-ai/animate-skill](https://github.com/delphi-ai/animate-skill) |
| [animate-css-skill](skills/animate-css-skill/SKILL.md) | package | creative-3d | [msrbuilds/animate-css-skill](https://github.com/msrbuilds/animate-css-skill) |
| [css-animation-skill](skills/css-animation-skill/SKILL.md) | skill | creative-3d | [neonwatty/css-animation-skill](https://github.com/neonwatty/css-animation-skill) |
| [wiggle-claude-skill](skills/wiggle-claude-skill/SKILL.md) | skill | creative-3d | [talknerdytome-labs/wiggle-claude-skill](https://github.com/talknerdytome-labs/wiggle-claude-skill) |
| [claudedesignskills](skills/claudedesignskills/SKILL.md) | package | creative-3d | [freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) |
| [hyperframes](skills/hyperframes/SKILL.md) | package | creative-3d | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) |

### Interaction & Polish

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [taste-design-stitch](skills/taste-design-stitch/SKILL.md) | skill | interaction-polish | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [design-lab](skills/design-lab/SKILL.md) | package | interaction-polish | [0xdesign/design-lab](https://www.ui-skills.com/skills/0xdesign/design-lab) |
| [interface-design-dammyjay](skills/interface-design-dammyjay/SKILL.md) | package | interaction-polish | [Dammyjay93/interface-design](https://www.ui-skills.com/skills/dammyjay93/interface-design) |
| [bencium-ux-designer](skills/bencium-ux-designer/SKILL.md) | package | interaction-polish | [bencium](https://www.ui-skills.com/skills/bencium/bencium-innovative-ux-designer) |
| [neo-user-journey](skills/neo-user-journey/SKILL.md) | skill | interaction-polish | [Cornjebus/neo-user-journey](https://github.com/Cornjebus/neo-user-journey) |
| [simota-agent-skills](skills/simota-agent-skills/SKILL.md) | package | interaction-polish | [simota/agent-skills](https://github.com/simota/agent-skills) |
| [design-auditor](skills/design-auditor/SKILL.md) | skill | interaction-polish | [Ashutos1997/claude-design-auditor-skill](https://github.com/Ashutos1997/claude-design-auditor-skill) |

### Visual, Components & Color

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [color-expert](skills/color-expert/SKILL.md) | skill | visual-components | [meodai/skill.color-expert](https://github.com/meodai/skill.color-expert) |
| [baseline-ui](skills/baseline-ui/SKILL.md) | package | visual-components | [ibelick/baseline-ui](https://www.ui-skills.com/skills/ibelick/baseline-ui) |
| [shadcn-ui](skills/shadcn-ui/SKILL.md) | package | visual-components | [shadcn-ui/ui](https://ui.shadcn.com/docs/skills) |
| [ui-ux-pro-max](skills/ui-ux-pro-max/SKILL.md) | platform | visual-components | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| [platform-design-skills](skills/platform-design-skills/SKILL.md) | package | visual-components | [ehmo/platform-design-skills](https://github.com/ehmo/platform-design-skills) |
| [apple-hig-skills](skills/apple-hig-skills/SKILL.md) | package | visual-components | [raintree-technology/apple-hig-skills](https://github.com/raintree-technology/apple-hig-skills) |
| [hig-doctor](skills/hig-doctor/SKILL.md) | package | visual-components | [raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor) |
| [swiftui-patterns](skills/swiftui-patterns/SKILL.md) | package | visual-components | [dimillian](https://www.ui-skills.com/skills/dimillian/swiftui-ui-patterns) |
| [ink-google](skills/ink-google/SKILL.md) | skill | visual-components | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) |
| [design-tokens-skill](skills/design-tokens-skill/SKILL.md) | skill | visual-components | [ilikescience/design-tokens-skill](https://github.com/ilikescience/design-tokens-skill) |
| [google-fonts-skill](skills/google-fonts-skill/SKILL.md) | platform | visual-components | [sliday/google-fonts-skill](https://github.com/sliday/google-fonts-skill) |
| [mobile-app-design](skills/mobile-app-design/SKILL.md) | skill | visual-components | [awesome-skills/mobile-app-design](https://github.com/awesome-skills/mobile-app-design) |
| [mobile-app-ui-design](skills/mobile-app-ui-design/SKILL.md) | skill | visual-components | [ceorkm/mobile-app-ui-design](https://github.com/ceorkm/mobile-app-ui-design) |
| [sleek-design-mobile-apps](skills/sleek-design-mobile-apps/SKILL.md) | platform | visual-components | [sleekdotdesign/agent-skills](https://github.com/sleekdotdesign/agent-skills) |
| [liquid-glass-skill](skills/liquid-glass-skill/SKILL.md) | package | visual-components | [haider-nawaz/liquid-glass-skill](https://github.com/haider-nawaz/liquid-glass-skill) |
| [swiftui-claude-skills](skills/swiftui-claude-skills/SKILL.md) | package | visual-components | [199-biotechnologies/swiftui-claude-skills](https://github.com/199-biotechnologies/swiftui-claude-skills) |

### Accessibility & Quality

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [fixing-accessibility](skills/fixing-accessibility/SKILL.md) | package | accessibility-quality | [ibelick/fixing-accessibility](https://www.ui-skills.com/skills/ibelick/fixing-accessibility) |
| [fixing-motion-performance](skills/fixing-motion-performance/SKILL.md) | package | accessibility-quality | [ibelick/fixing-motion-performance](https://www.ui-skills.com/skills/ibelick/fixing-motion-performance) |
| [wcag-audit-patterns](skills/wcag-audit-patterns/SKILL.md) | package | accessibility-quality | [wshobson/wcag-audit-patterns](https://www.ui-skills.com/skills/wshobson/wcag-audit-patterns) |
| [addyosmani-quality](skills/addyosmani-quality/SKILL.md) | package | accessibility-quality | [addyosmani/skills](https://officialskills.sh/addyosmani) |
| [cloudflare-web-perf](skills/cloudflare-web-perf/SKILL.md) | skill | accessibility-quality | [cloudflare/skills](https://github.com/cloudflare/skills) |
| [react-doctor](skills/react-doctor/SKILL.md) | package | accessibility-quality | [millionco/react-doctor](https://www.ui-skills.com/skills/millionco/react-doctor) |
| [mastepanoski-skills](skills/mastepanoski-skills/SKILL.md) | package | accessibility-quality | [mastepanoski/claude-skills](https://github.com/mastepanoski/claude-skills) |
| [wcag-ai-skill](skills/wcag-ai-skill/SKILL.md) | package | accessibility-quality | [Raze-Systems/wcag-ai-skill](https://github.com/Raze-Systems/wcag-ai-skill) |
| [accessibility-agents](skills/accessibility-agents/SKILL.md) | package | accessibility-quality | [Community-Access/accessibility-agents](https://github.com/Community-Access/accessibility-agents) |

### Design Review & Creative Direction

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [creative-director](skills/creative-director/SKILL.md) | skill | design-review | [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill) |
| [design-brief](skills/design-brief/SKILL.md) | skill | design-review | [nexu-io/open-design](https://github.com/nexu-io/open-design) |
| [design-consultation](skills/design-consultation/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [design-review-garrytan](skills/design-review-garrytan/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [plan-design-review](skills/plan-design-review/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [design-html](skills/design-html/SKILL.md) | skill | design-review | [garrytan/gstack](https://github.com/garrytan/gstack) |
| [digidai-pm](skills/digidai-pm/SKILL.md) | skill | design-review | [Digidai/product-manager-skills](https://github.com/Digidai/product-manager-skills) |
| [ux-ui-mastery](skills/ux-ui-mastery/SKILL.md) | package | design-review | [phazurlabs/ux-ui-mastery](https://github.com/phazurlabs/ux-ui-mastery) |
| [designer-skills](skills/designer-skills/SKILL.md) | package | design-review | [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills) |
| [design-with-claude](skills/design-with-claude/SKILL.md) | package | design-review | [imsaif/design-with-claude](https://github.com/imsaif/design-with-claude) |
| [ux-designer-skill](skills/ux-designer-skill/SKILL.md) | skill | design-review | [szilu/ux-designer-skill](https://github.com/szilu/ux-designer-skill) |
| [wondelai-skills](skills/wondelai-skills/SKILL.md) | package | design-review | [wondelai/skills](https://github.com/wondelai/skills) |

### Figma & Design-to-Code

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [figma-official-skills](skills/figma-official-skills/SKILL.md) | package | figma-code | [figma/skills](https://officialskills.sh/figma) |
| [openai-skills](skills/openai-skills/SKILL.md) | package | figma-code | [openai/skills](https://officialskills.sh/openai) |
| [google-stitch-skills](skills/google-stitch-skills/SKILL.md) | package | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [extract-design-md](skills/extract-design-md/SKILL.md) | skill | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [claude2figma](skills/claude2figma/SKILL.md) | package | figma-code | [senlindesign/claude2figma](https://github.com/senlindesign/claude2figma) |
| [work-with-design-systems](skills/work-with-design-systems/SKILL.md) | skill | figma-code | [natdexterra/work-with-design-systems](https://github.com/natdexterra/work-with-design-systems) |
| [figma-variables-tokens-generator](skills/figma-variables-tokens-generator/SKILL.md) | package | figma-code | [Shanmus4/figma-variables-tokens-generator](https://github.com/Shanmus4/figma-variables-tokens-generator) |
| [figma-skill](skills/figma-skill/SKILL.md) | package | figma-code | [nafiurrahmanniloy/figma-skill](https://github.com/nafiurrahmanniloy/figma-skill) |
| [extract-design-system](skills/extract-design-system/SKILL.md) | package | figma-code | [arvindrk/extract-design-system](https://github.com/arvindrk/extract-design-system) |

### Official Platform Suites

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [anthropics-skills](skills/anthropics-skills/SKILL.md) | package | official-suites | [anthropics/skills](https://officialskills.sh/anthropics) |
| [vercel-skills](skills/vercel-skills/SKILL.md) | package | official-suites | [vercel-labs/skills](https://officialskills.sh/vercel-labs) |
| [microsoft-skills](skills/microsoft-skills/SKILL.md) | package | official-suites | [microsoft/skills](https://officialskills.sh/microsoft) |
| [composio-artifacts](skills/composio-artifacts/SKILL.md) | skill | official-suites | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| [software-mansion-skills](skills/software-mansion-skills/SKILL.md) | package | official-suites | [software-mansion-labs/skills](https://github.com/software-mansion-labs/skills) |
| [callstack-agent-skills](skills/callstack-agent-skills/SKILL.md) | package | official-suites | [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) |
| [expo-skills](skills/expo-skills/SKILL.md) | package | official-suites | [expo/skills](https://github.com/expo/skills) |

### Diagrams & Wireframing

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [excalidraw-diagram](skills/excalidraw-diagram/SKILL.md) | skill | diagrams | [coleam00/excalidraw-diagram-skill](https://github.com/coleam00/excalidraw-diagram-skill) |
| [hand-drawn-diagrams](skills/hand-drawn-diagrams/SKILL.md) | skill | diagrams | [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) |
| [excalidraw-agents365](skills/excalidraw-agents365/SKILL.md) | skill | diagrams | [Agents365-ai/excalidraw-skill](https://github.com/Agents365-ai/excalidraw-skill) |
| [wireframer](skills/wireframer/SKILL.md) | skill | diagrams | [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill) |
| [softaworks-agent-toolkit](skills/softaworks-agent-toolkit/SKILL.md) | package | diagrams | [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit) |
| [nimbalyst-skills](skills/nimbalyst-skills/SKILL.md) | package | diagrams | [nimbalyst.com/skills](https://nimbalyst.com/skills) |
| [wireframe-skill](skills/wireframe-skill/SKILL.md) | skill | diagrams | [yhassy/wireframe-skill](https://github.com/yhassy/wireframe-skill) |
| [claude-wireframe-skill](skills/claude-wireframe-skill/SKILL.md) | skill | diagrams | [Magdoub/claude-wireframe-skill](https://github.com/Magdoub/claude-wireframe-skill) |

### Data Visualization & Charts

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [antvis-chart-skills](skills/antvis-chart-skills/SKILL.md) | package | data-visualization | [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills) |
| [markdown-viewer-skills](skills/markdown-viewer-skills/SKILL.md) | package | data-visualization | [markdown-viewer/skills](https://github.com/markdown-viewer/skills) |
| [d3js-skill](skills/d3js-skill/SKILL.md) | skill | data-visualization | [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill) |
| [data-viz-agent](skills/data-viz-agent/SKILL.md) | skill | data-visualization | [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) |
| [claud3](skills/claud3/SKILL.md) | package | data-visualization | [dtran320/claud3](https://github.com/dtran320/claud3) |
| [data-analysis-skill](skills/data-analysis-skill/SKILL.md) | skill | data-visualization | [dongzhang84/data-analysis-skill](https://github.com/dongzhang84/data-analysis-skill) |

### 3D, Creative & Media

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [cloudai-threejs](skills/cloudai-threejs/SKILL.md) | package | creative-3d | [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills) |
| [fal-ai-skills](skills/fal-ai-skills/SKILL.md) | package | creative-3d | [fal-ai-community/skills](https://officialskills.sh/fal-ai-community) |
| [webgpu-claude-skill](skills/webgpu-claude-skill/SKILL.md) | package | creative-3d | [dgreenheck/webgpu-claude-skill](https://github.com/dgreenheck/webgpu-claude-skill) |
| [threejs-ecs-ts](skills/threejs-ecs-ts/SKILL.md) | package | creative-3d | [Nice-Wolf-Studio/claude-skills-threejs-ecs-ts](https://github.com/Nice-Wolf-Studio/claude-skills-threejs-ecs-ts) |
| [threejs-claude-skill-package](skills/threejs-claude-skill-package/SKILL.md) | package | creative-3d | [OpenAEC-Foundation/Three.js-Claude-Skill-Package](https://github.com/OpenAEC-Foundation/Three.js-Claude-Skill-Package) |
| [generative-media-skills](skills/generative-media-skills/SKILL.md) | platform | creative-3d | [SamurAIGPT/Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) |
| [open-design](skills/open-design/SKILL.md) | platform | creative-3d | [nexu-io/open-design](https://github.com/nexu-io/open-design) |
| [superdesign-skill](skills/superdesign-skill/SKILL.md) | platform | creative-3d | [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) |

### Presentations

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [nanobanan-ppt](skills/nanobanan-ppt/SKILL.md) | skill | presentations | [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) |
| [guizang-ppt](skills/guizang-ppt/SKILL.md) | skill | presentations | [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) |
| [frontend-slides](skills/frontend-slides/SKILL.md) | skill | presentations | [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) |
| [revealjs-skill](skills/revealjs-skill/SKILL.md) | package | presentations | [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) |
| [marp-slides](skills/marp-slides/SKILL.md) | skill | presentations | [robonuggets/marp-slides](https://github.com/robonuggets/marp-slides) |
| [slidev-skill](skills/slidev-skill/SKILL.md) | package | presentations | [slidevjs/slidev](https://github.com/slidevjs/slidev) |
| [cc-slidev](skills/cc-slidev/SKILL.md) | package | presentations | [rhuss/cc-slidev](https://github.com/rhuss/cc-slidev) |
| [marp-slide-quality](skills/marp-slide-quality/SKILL.md) | skill | presentations | [nibzard/marp-slide-quality](https://github.com/nibzard/marp-slide-quality) |

### Product & PM

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [deanpeters-pm-skills](skills/deanpeters-pm-skills/SKILL.md) | package | product-pm | [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) |
| [phuryn-pm-skills](skills/phuryn-pm-skills/SKILL.md) | package | product-pm | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) |
| [coreyhaines-marketing](skills/coreyhaines-marketing/SKILL.md) | package | product-pm | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) |
| [pm-skills](skills/pm-skills/SKILL.md) | package | product-pm | [product-on-purpose/pm-skills](https://github.com/product-on-purpose/pm-skills) |
| [claude-pm-skills](skills/claude-pm-skills/SKILL.md) | package | product-pm | [pratikshadake/claude-product-management-skills](https://github.com/pratikshadake/claude-product-management-skills) |

### Email Design

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [email-html-mjml](skills/email-html-mjml/SKILL.md) | package | email-design | [framix-team/skill-email-html-mjml](https://github.com/framix-team/skill-email-html-mjml) |

### TUI & Terminal Design

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [tui-design-skill](skills/tui-design-skill/SKILL.md) | package | tui-terminal | [gfargo/tui-design-skill](https://github.com/gfargo/tui-design-skill) |
