# design-agent-skills

A shareable catalogue of agent skill stubs. Clone once, link to every AI coding tool you use.

## Install

```bash
git clone https://github.com/<you>/design-agent-skills
cd design-agent-skills
./install.sh
```

Auto-detects Claude Code, Cursor, Codex, OpenCode, and Droid. Symlinks each stub into their skills directories — one source, all agents.

## Commands

```bash
./install.sh              # link all stubs to detected agents
./install.sh status       # show stub / upgraded / BROKEN per skill per agent
./install.sh update       # pick up new stubs added to the catalogue (after git pull)
./install.sh fix          # remove broken symlinks
```

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

### Motion & Animation

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [algorithmic-art](skills/algorithmic-art/SKILL.md) | skill | creative-3d | [anthropics/skills](https://github.com/anthropics/skills) |
| [shader-dev](skills/shader-dev/SKILL.md) | skill | creative-3d | [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) |
| [p5js-hermes](skills/p5js-hermes/SKILL.md) | skill | creative-3d | [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent) |
| [remotion](skills/remotion/SKILL.md) | skill | creative-3d | [remotion-dev/skills](https://github.com/remotion-dev/skills) |

### Interaction & Polish

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [taste-design-stitch](skills/taste-design-stitch/SKILL.md) | skill | interaction-polish | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [design-lab](skills/design-lab/SKILL.md) | package | interaction-polish | [0xdesign/design-lab](https://www.ui-skills.com/skills/0xdesign/design-lab) |
| [interface-design-dammyjay](skills/interface-design-dammyjay/SKILL.md) | package | interaction-polish | [Dammyjay93/interface-design](https://www.ui-skills.com/skills/dammyjay93/interface-design) |
| [bencium-ux-designer](skills/bencium-ux-designer/SKILL.md) | package | interaction-polish | [bencium](https://www.ui-skills.com/skills/bencium/bencium-innovative-ux-designer) |

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

### Accessibility & Quality

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [fixing-accessibility](skills/fixing-accessibility/SKILL.md) | package | accessibility-quality | [ibelick/fixing-accessibility](https://www.ui-skills.com/skills/ibelick/fixing-accessibility) |
| [fixing-motion-performance](skills/fixing-motion-performance/SKILL.md) | package | accessibility-quality | [ibelick/fixing-motion-performance](https://www.ui-skills.com/skills/ibelick/fixing-motion-performance) |
| [wcag-audit-patterns](skills/wcag-audit-patterns/SKILL.md) | package | accessibility-quality | [wshobson/wcag-audit-patterns](https://www.ui-skills.com/skills/wshobson/wcag-audit-patterns) |
| [addyosmani-quality](skills/addyosmani-quality/SKILL.md) | package | accessibility-quality | [addyosmani/skills](https://officialskills.sh/addyosmani) |
| [cloudflare-web-perf](skills/cloudflare-web-perf/SKILL.md) | skill | accessibility-quality | [cloudflare/skills](https://github.com/cloudflare/skills) |
| [react-doctor](skills/react-doctor/SKILL.md) | package | accessibility-quality | [millionco/react-doctor](https://www.ui-skills.com/skills/millionco/react-doctor) |

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

### Figma & Design-to-Code

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [figma-official-skills](skills/figma-official-skills/SKILL.md) | package | figma-code | [figma/skills](https://officialskills.sh/figma) |
| [openai-skills](skills/openai-skills/SKILL.md) | package | figma-code | [openai/skills](https://officialskills.sh/openai) |
| [google-stitch-skills](skills/google-stitch-skills/SKILL.md) | package | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |
| [extract-design-md](skills/extract-design-md/SKILL.md) | skill | figma-code | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) |

### Official Platform Suites

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [anthropics-skills](skills/anthropics-skills/SKILL.md) | package | official-suites | [anthropics/skills](https://officialskills.sh/anthropics) |
| [vercel-skills](skills/vercel-skills/SKILL.md) | package | official-suites | [vercel-labs/skills](https://officialskills.sh/vercel-labs) |
| [microsoft-skills](skills/microsoft-skills/SKILL.md) | package | official-suites | [microsoft/skills](https://officialskills.sh/microsoft) |
| [composio-artifacts](skills/composio-artifacts/SKILL.md) | skill | official-suites | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |

### Diagrams & Wireframing

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [excalidraw-diagram](skills/excalidraw-diagram/SKILL.md) | skill | diagrams | [coleam00/excalidraw-diagram-skill](https://github.com/coleam00/excalidraw-diagram-skill) |
| [hand-drawn-diagrams](skills/hand-drawn-diagrams/SKILL.md) | skill | diagrams | [muthuishere/hand-drawn-diagrams](https://github.com/muthuishere/hand-drawn-diagrams) |
| [excalidraw-agents365](skills/excalidraw-agents365/SKILL.md) | skill | diagrams | [Agents365-ai/excalidraw-skill](https://github.com/Agents365-ai/excalidraw-skill) |
| [wireframer](skills/wireframer/SKILL.md) | skill | diagrams | [agilek/wireframer-skill](https://github.com/agilek/wireframer-skill) |
| [softaworks-agent-toolkit](skills/softaworks-agent-toolkit/SKILL.md) | package | diagrams | [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit) |
| [nimbalyst-skills](skills/nimbalyst-skills/SKILL.md) | package | diagrams | [nimbalyst.com/skills](https://nimbalyst.com/skills) |

### Data Visualization & Charts

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [antvis-chart-skills](skills/antvis-chart-skills/SKILL.md) | package | data-visualization | [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills) |
| [markdown-viewer-skills](skills/markdown-viewer-skills/SKILL.md) | package | data-visualization | [markdown-viewer/skills](https://github.com/markdown-viewer/skills) |
| [d3js-skill](skills/d3js-skill/SKILL.md) | skill | data-visualization | [chrisvoncsefalvay/claude-d3js-skill](https://github.com/chrisvoncsefalvay/claude-d3js-skill) |
| [data-viz-agent](skills/data-viz-agent/SKILL.md) | skill | data-visualization | [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) |

### 3D, Creative & Media

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [cloudai-threejs](skills/cloudai-threejs/SKILL.md) | package | creative-3d | [CloudAI-X/threejs-skills](https://github.com/CloudAI-X/threejs-skills) |
| [fal-ai-skills](skills/fal-ai-skills/SKILL.md) | package | creative-3d | [fal-ai-community/skills](https://officialskills.sh/fal-ai-community) |

### Presentations

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [nanobanan-ppt](skills/nanobanan-ppt/SKILL.md) | skill | presentations | [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) |
| [guizang-ppt](skills/guizang-ppt/SKILL.md) | skill | presentations | [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) |
| [frontend-slides](skills/frontend-slides/SKILL.md) | skill | presentations | [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) |

### Product & PM

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [deanpeters-pm-skills](skills/deanpeters-pm-skills/SKILL.md) | package | product-pm | [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) |
| [phuryn-pm-skills](skills/phuryn-pm-skills/SKILL.md) | package | product-pm | [phuryn/pm-skills](https://github.com/phuryn/pm-skills) |
| [coreyhaines-marketing](skills/coreyhaines-marketing/SKILL.md) | package | product-pm | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) |
