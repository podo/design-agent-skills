# Skill Stubs Catalogue — Full Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add stubs for all skills in `~/Documents/OS/agent-skills-to-test.md` to the catalogue, organized by type, with correct upstream metadata.

**Architecture:** Each stub gets a directory under `skills/`, a `stub.yaml` (type + upstream URL), and a `SKILL.md` (agent decision-tree prompt). Three types: `skill` (single SKILL.md, curl-able), `package` (multi-skill bundle, npx install), `platform` (template vars / runtime deps, per-agent install table).

**Tech Stack:** Bash, YAML, Markdown

---

## Pre-flight: What already exists

| Stub | Type | State |
|------|------|-------|
| `design-catalogue` | native | done — update in Task 14 |
| `taste-skill` | skill | done |
| `impeccable` | platform | done |

No `install.sh` changes needed — skill/package/platform covers all incoming entries.

---

## Excluded entries (do not stub)

| Entry | Reason |
|-------|--------|
| `nexu-io/html-anything` | Full Next.js app, no SKILL.md |
| `greensock/gsap` | Pure JS npm library, no skills infrastructure |
| `raphaelsalaja/userinterface-wiki` | Wiki/reference repo — verify SKILL.md exists before stubbing; skip if absent |

---

## Task 1: type:skill — Design Review & Creative stubs (5 stubs)

**Files to create:**
- `skills/design-brief/{SKILL.md,stub.yaml}`
- `skills/creative-director/{SKILL.md,stub.yaml}`
- `skills/color-expert/{SKILL.md,stub.yaml}`
- `skills/make-interfaces-better/{SKILL.md,stub.yaml}`
- `skills/digidai-pm/{SKILL.md,stub.yaml}`

**Stub metadata:**

```yaml
# design-brief
type: skill
upstream: https://github.com/nexu-io/open-design
upstream_path: skills/design-brief/SKILL.md
version: latest

# creative-director
type: skill
upstream: https://github.com/smixs/creative-director-skill
upstream_path: SKILL.md
version: latest

# color-expert
type: skill
upstream: https://github.com/meodai/skill.color-expert
upstream_path: SKILL.md
version: latest

# make-interfaces-better
type: skill
upstream: https://github.com/jakubkrehel/make-interfaces-feel-better
upstream_path: SKILL.md
version: latest

# digidai-pm
type: skill
upstream: https://github.com/Digidai/product-manager-skills
upstream_path: SKILL.md
version: latest
```

**SKILL.md body pattern** (decision tree — same format as taste-skill):
1. Check if full skill already installed (no `das:` in SKILL.md)
2. Check shell access → run install curl or show command
3. Invoke after install section
4. What it does (2–3 sentences)

**Install curl pattern:**
```bash
mkdir -p ~/.claude/skills/<name> && \
  curl -fsSL \
    https://raw.githubusercontent.com/<org>/<repo>/main/<path>/SKILL.md \
    -o ~/.claude/skills/<name>/SKILL.md
```

**Commit:** `feat: add design-brief, creative-director, color-expert, make-interfaces-better, digidai-pm stubs`

---

## Task 2: type:skill — Excalidraw & Diagram stubs (5 stubs)

**Files to create:**
- `skills/excalidraw-diagram/{SKILL.md,stub.yaml}` — coleam00/excalidraw-diagram-skill
- `skills/hand-drawn-diagrams/{SKILL.md,stub.yaml}` — muthuishere/hand-drawn-diagrams
- `skills/excalidraw-agents365/{SKILL.md,stub.yaml}` — Agents365-ai/excalidraw-skill
- `skills/wireframer/{SKILL.md,stub.yaml}` — agilek/wireframer-skill
- `skills/frontend-slides/{SKILL.md,stub.yaml}` — zarazhangrui/frontend-slides

**Stub metadata:**

```yaml
# excalidraw-diagram
type: skill
upstream: https://github.com/coleam00/excalidraw-diagram-skill
upstream_path: SKILL.md
version: latest

# hand-drawn-diagrams
type: skill
upstream: https://github.com/muthuishere/hand-drawn-diagrams
upstream_path: SKILL.md
version: latest

# excalidraw-agents365
type: skill
upstream: https://github.com/Agents365-ai/excalidraw-skill
upstream_path: SKILL.md
version: latest

# wireframer
type: skill
upstream: https://github.com/agilek/wireframer-skill
upstream_path: SKILL.md
version: latest

# frontend-slides
type: skill
upstream: https://github.com/zarazhangrui/frontend-slides
upstream_path: SKILL.md
version: latest
```

**Commit:** `feat: add excalidraw-diagram, hand-drawn-diagrams, excalidraw-agents365, wireframer, frontend-slides stubs`

---

## Task 3: type:skill — Google Labs stubs (4 stubs)

**Files to create:**
- `skills/taste-design-stitch/{SKILL.md,stub.yaml}`
- `skills/ink-google/{SKILL.md,stub.yaml}`
- `skills/extract-design-md/{SKILL.md,stub.yaml}`
- `skills/algorithmic-art/{SKILL.md,stub.yaml}`

**Stub metadata:**

```yaml
# taste-design-stitch
type: skill
upstream: https://github.com/google-labs-code/stitch-skills
upstream_path: plugins/stitch-utilities/skills/taste-design/SKILL.md
version: latest

# ink-google
type: skill
upstream: https://github.com/google-labs-code/design.md
upstream_path: .agents/skills/ink/SKILL.md
version: latest

# extract-design-md
type: skill
upstream: https://github.com/google-labs-code/stitch-skills
upstream_path: plugins/stitch-design/skills/extract-design-md/SKILL.md
version: latest

# algorithmic-art
# Derive raw GitHub URL from officialskills.sh source at implementation time.
# Try: https://raw.githubusercontent.com/anthropics/official-skills/main/skills/algorithmic-art/SKILL.md
type: skill
upstream: https://github.com/anthropics/official-skills
upstream_path: skills/algorithmic-art/SKILL.md
version: latest
```

> **Implementation note:** For `algorithmic-art`, run `curl -sI <raw-url>` to verify 200 before writing stub. Derive path from officialskills.sh source if 404.

**Commit:** `feat: add taste-design-stitch, ink-google, extract-design-md, algorithmic-art stubs`

---

## Task 4: type:skill — Garry Tan stubs (4 stubs)

**Files to create:**
- `skills/design-consultation/{SKILL.md,stub.yaml}`
- `skills/design-review-garrytan/{SKILL.md,stub.yaml}`
- `skills/plan-design-review/{SKILL.md,stub.yaml}`
- `skills/design-html/{SKILL.md,stub.yaml}`

**Stub metadata:**

```yaml
# design-html (GitHub path confirmed)
type: skill
upstream: https://github.com/garrytan/gstack
upstream_path: design-html/SKILL.md
version: latest

# design-consultation, design-review-garrytan, plan-design-review
# Check officialskills.sh source for raw GitHub URL.
# All three likely live in garrytan/gstack alongside design-html.
type: skill
upstream: https://github.com/garrytan/gstack
upstream_path: skills/<name>/SKILL.md  # verify exact path at implementation time
version: latest
```

> **Implementation note:** Fetch `https://officialskills.sh/garrytan/skills/design-consultation` and inspect redirects/source to get the raw GitHub URL for each of the 3 officialskills.sh-hosted stubs.

**Commit:** `feat: add design-consultation, design-review-garrytan, plan-design-review, design-html stubs`

---

## Task 5: type:skill — Data Viz & Creative stubs (4 stubs)

**Files to create:**
- `skills/d3js-skill/{SKILL.md,stub.yaml}` — chrisvoncsefalvay/claude-d3js-skill
- `skills/p5js-hermes/{SKILL.md,stub.yaml}` — NousResearch/hermes-agent
- `skills/guizang-ppt/{SKILL.md,stub.yaml}` — op7418/guizang-ppt-skill
- `skills/animation-principles/{SKILL.md,stub.yaml}` — raphaelsalaja/userinterface-wiki *(verify)*

**Stub metadata:**

```yaml
# d3js-skill
type: skill
upstream: https://github.com/chrisvoncsefalvay/claude-d3js-skill
upstream_path: SKILL.md
version: latest

# p5js-hermes
type: skill
upstream: https://github.com/nousresearch/hermes-agent
upstream_path: skills/creative/p5js/SKILL.md
version: latest

# guizang-ppt
type: skill
upstream: https://github.com/op7418/guizang-ppt-skill
upstream_path: SKILL.md
version: latest

# animation-principles — verify SKILL.md exists in repo first; skip if absent
type: skill
upstream: https://github.com/raphaelsalaja/userinterface-wiki
upstream_path: SKILL.md
version: latest
```

**Commit:** `feat: add d3js-skill, p5js-hermes, guizang-ppt, animation-principles stubs`

---

## Task 6: type:skill — Media & Misc stubs (5 stubs)

**Files to create:**
- `skills/hig-doctor/{SKILL.md,stub.yaml}` — raintree-technology/hig-doctor
- `skills/cloudflare-web-perf/{SKILL.md,stub.yaml}` — cloudflare/web-perf
- `skills/shader-dev/{SKILL.md,stub.yaml}` — MiniMax-AI/shader-dev
- `skills/remotion/{SKILL.md,stub.yaml}` — remotion-dev/remotion
- `skills/data-viz-agent/{SKILL.md,stub.yaml}` — rohitg00/data-visualization

**Stub metadata:**

```yaml
# hig-doctor
type: skill
upstream: https://github.com/raintree-technology/hig-doctor
upstream_path: SKILL.md
version: latest

# cloudflare-web-perf, shader-dev, remotion
# Derive raw GitHub URLs from officialskills.sh source at implementation time.
type: skill
upstream: https://github.com/<org>/<repo>   # verify
upstream_path: skills/<name>/SKILL.md        # verify
version: latest

# data-viz-agent (note: source file is .md not SKILL.md)
type: skill
upstream: https://github.com/rohitg00/awesome-claude-code-toolkit
upstream_path: agents/data-ai/data-visualization.md
version: latest
```

**Commit:** `feat: add hig-doctor, cloudflare-web-perf, shader-dev, remotion, data-viz-agent stubs`

---

## Task 7: type:skill — ui-skills.com stubs (8 stubs)

Individual skills accessible via ui-skills.com. Verify each GitHub repo URL during implementation. Fallback install: `npx skills add <user>/<skill>`.

**Files to create:**
- `skills/baseline-ui/{SKILL.md,stub.yaml}` — ibelick/baseline-ui
- `skills/fixing-motion-performance/{SKILL.md,stub.yaml}` — ibelick/fixing-motion-performance
- `skills/fixing-accessibility/{SKILL.md,stub.yaml}` — ibelick/fixing-accessibility
- `skills/wcag-audit-patterns/{SKILL.md,stub.yaml}` — wshobson/wcag-audit-patterns
- `skills/design-lab/{SKILL.md,stub.yaml}` — 0xdesign/design-lab
- `skills/interface-design-dammyjay/{SKILL.md,stub.yaml}` — Dammyjay93/interface-design
- `skills/bencium-ux-designer/{SKILL.md,stub.yaml}` — bencium/bencium-innovative-ux-designer
- `skills/react-doctor/{SKILL.md,stub.yaml}` — millionco/react-doctor

**Strategy:** Each skill likely lives in its own GitHub repo. Use `npx skills add <user>/<skill>` as the primary install. For stub.yaml: `type: skill`, `upstream_path: SKILL.md`. If a repo 404s during verification, downgrade to `type: package` with `install_default: npx skills add <user>/<skill>`.

**Commit:** `feat: add 8 ui-skills.com stubs (ibelick ×3, wshobson, 0xdesign, dammyjay, bencium, millionco)`

---

## Task 8: type:skill — shadcn/ui & SwiftUI stubs (2 stubs)

**Files to create:**
- `skills/shadcn-ui/{SKILL.md,stub.yaml}`
- `skills/swiftui-patterns/{SKILL.md,stub.yaml}`

**Stub metadata:**

```yaml
# shadcn-ui — official skill, source at ui.shadcn.com/docs/skills
# Verify actual SKILL.md raw GitHub URL from that page.
type: skill
upstream: https://github.com/shadcn-ui/ui
upstream_path: apps/www/content/docs/skills.mdx  # verify — may differ
version: latest

# swiftui-patterns — derive GitHub repo from ui-skills.com/skills/dimillian/swiftui-ui-patterns
type: skill
upstream: https://github.com/dimillian/...  # verify
upstream_path: SKILL.md
version: latest
```

> **Implementation note:** If shadcn has no raw-curl-able SKILL.md, set `type: package` with `install_default: npx skills add shadcn-ui/skills`.

**Commit:** `feat: add shadcn-ui, swiftui-patterns stubs`

---

## Task 9: type:package — Design Engineering collections (4 stubs)

**Files to create:**
- `skills/emilkowalski-skill/{SKILL.md,stub.yaml}`
- `skills/softaworks-agent-toolkit/{SKILL.md,stub.yaml}`
- `skills/markdown-viewer-skills/{SKILL.md,stub.yaml}`
- `skills/antvis-chart-skills/{SKILL.md,stub.yaml}`

**Stub metadata:**

```yaml
# emilkowalski-skill
type: package
upstream: https://github.com/emilkowalski/skill
version: latest
install_default: "npx skills add emilkowalski/skill"
note: "Use --skill emil-design-eng to install just the design engineering skill"

# softaworks-agent-toolkit (40+ skills: mermaid, excalidraw, draw-io, c4-architecture, marp-slide, etc.)
type: package
upstream: https://github.com/softaworks/agent-toolkit
version: latest
install_default: "npx skills add softaworks/agent-toolkit"

# markdown-viewer-skills (14 skills: vega, infographic, canvas, uml, cloud, network, security, etc.)
type: package
upstream: https://github.com/markdown-viewer/skills
version: latest
install_default: "npx skills add markdown-viewer/skills"

# antvis-chart-skills (7 skills: chart-visualization, infographic-creator, antv-g2, antv-g6, etc.)
type: package
upstream: https://github.com/antvis/chart-visualization-skills
version: latest
install_default: "npx skills add antvis/chart-visualization-skills"
```

**SKILL.md body for type:package:** Decision tree — check if installed → run `npx skills add <pkg>` or show command → list skill names that become available after install.

**Commit:** `feat: add emilkowalski-skill, softaworks-agent-toolkit, markdown-viewer-skills, antvis-chart-skills stubs`

---

## Task 10: type:package — Official org suites (5 stubs)

**Files to create:**
- `skills/figma-official-skills/{SKILL.md,stub.yaml}` — 7 skills
- `skills/openai-skills/{SKILL.md,stub.yaml}` — 9 skills
- `skills/anthropics-skills/{SKILL.md,stub.yaml}` — 6 skills
- `skills/vercel-skills/{SKILL.md,stub.yaml}` — 4 skills
- `skills/google-stitch-skills/{SKILL.md,stub.yaml}` — 6 skills

**Stub metadata:**

```yaml
# figma-official-skills
type: package
upstream: https://github.com/figma/skills  # verify
version: latest
install_default: "npx skills add figma/<skill>"
note: "7 skills: figma-implement-design, figma-generate-design, figma-generate-library, figma-code-connect-components, figma-create-design-system-rules, figma-create-new-file, figma-use"

# openai-skills
type: package
upstream: https://github.com/openai/skills  # verify
version: latest
install_default: "npx skills add openai/<skill>"
note: "9 skills: figma, figma-implement-design, figma-generate-design, figma-generate-library, figma-code-connect-components, figma-create-design-system-rules, frontend-skill, slides, imagegen"

# anthropics-skills
type: package
upstream: https://github.com/anthropics/official-skills  # verify
version: latest
install_default: "npx skills add anthropics/<skill>"
note: "6 skills: frontend-design, web-artifacts-builder, canvas-design, theme-factory, brand-guidelines, pptx"

# vercel-skills
type: package
upstream: https://github.com/vercel-labs/skills  # verify
version: latest
install_default: "npx skills add vercel-labs/<skill>"
note: "4 skills: web-design-guidelines, building-components, react-best-practices, composition-patterns"

# google-stitch-skills
type: package
upstream: https://github.com/google-labs-code/stitch-skills
version: latest
install_default: "npx skills add google-labs-code/<skill>"
note: "6 skills: design-md, enhance-prompt, extract-design-md, react-components, shadcn-ui, stitch-loop"
```

> **Implementation note:** `web-design-guidelines` (vercel) and `figma-implement-design` (figma) may be stale listings on officialskills.sh — verify 200 before listing them in the stub body.

**Commit:** `feat: add figma, openai, anthropics, vercel, google-stitch official skills stubs`

---

## Task 11: type:package — More org suites (5 stubs)

**Files to create:**
- `skills/microsoft-skills/{SKILL.md,stub.yaml}` — 2 skills
- `skills/addyosmani-quality/{SKILL.md,stub.yaml}` — 6 skills
- `skills/fal-ai-skills/{SKILL.md,stub.yaml}` — 2 skills
- `skills/cloudai-threejs/{SKILL.md,stub.yaml}` — CloudAI-X/threejs-skills
- `skills/nimbalyst-skills/{SKILL.md,stub.yaml}` — 3 skills

**Stub metadata:**

```yaml
# microsoft-skills
type: package
upstream: https://github.com/microsoft/...  # derive from officialskills.sh
version: latest
install_default: "npx skills add microsoft/<skill>"
note: "2 skills: frontend-design-review, frontend-ui-dark-ts"

# addyosmani-quality
type: package
upstream: https://github.com/addyosmani/...  # derive from officialskills.sh
version: latest
install_default: "npx skills add addyosmani/<skill>"
note: "6 skills: accessibility, web-quality-audit, core-web-vitals, performance, seo, best-practices"

# fal-ai-skills
type: package
upstream: https://github.com/fal-ai-community/...  # derive from officialskills.sh
version: latest
install_default: "npx skills add fal-ai-community/<skill>"
note: "2 skills: fal-generate, fal-3d"

# cloudai-threejs
type: package
upstream: https://github.com/CloudAI-X/threejs-skills
version: latest
install_default: "npx skills add CloudAI-X/threejs-skills"

# nimbalyst-skills (custom registry at nimbalyst.com/skills)
type: package
upstream: https://nimbalyst.com/skills
version: latest
install_default: "npx skills add nimbalyst/<skill>"
note: "3 skills: excalidraw, mockup, datamodel — custom registry"
```

**Commit:** `feat: add microsoft, addyosmani, fal-ai, cloudai-threejs, nimbalyst stubs`

---

## Task 12: type:package — PM & Toolkits (5 stubs)

**Files to create:**
- `skills/deanpeters-pm-skills/{SKILL.md,stub.yaml}` — 9 skills
- `skills/phuryn-pm-skills/{SKILL.md,stub.yaml}` — 6 skills
- `skills/coreyhaines-marketing/{SKILL.md,stub.yaml}` — 3 skills
- `skills/platform-design-skills/{SKILL.md,stub.yaml}` — ehmo
- `skills/apple-hig-skills/{SKILL.md,stub.yaml}` — raintree (14 skills)

**Stub metadata:**

```yaml
# deanpeters-pm-skills
type: package
upstream: https://github.com/deanpeters/Product-Manager-Skills
version: latest
install_default: "npx skills add deanpeters/Product-Manager-Skills"
note: "9 skills: customer-journey-map, lean-ux-canvas, opportunity-solution-tree, proto-persona, storyboard, user-story, user-story-mapping, discovery-process, prd-development"

# phuryn-pm-skills
type: package
upstream: https://github.com/phuryn/pm-skills
version: latest
install_default: "npx skills add phuryn/pm-skills"
note: "6 skills: customer-journey-map, user-personas, opportunity-solution-tree, interview-script, create-prd, analyze-feature-requests"

# coreyhaines-marketing
type: package
upstream: https://github.com/coreyhaines31/marketingskills
version: latest
install_default: "npx skills add coreyhaines31/marketingskills"
note: "3 skills: onboarding-cro, page-cro, signup-flow-cro"

# platform-design-skills (300+ rules from Apple HIG, Material Design 3, WCAG 2.2)
type: package
upstream: https://github.com/ehmo/platform-design-skills
version: latest
install_default: "npx skills add ehmo/platform-design-skills"

# apple-hig-skills (14 skills: iOS, macOS, visionOS, watchOS, tvOS)
type: package
upstream: https://github.com/raintree-technology/apple-hig-skills
version: latest
install_default: "npx skills add raintree-technology/apple-hig-skills"
```

**Commit:** `feat: add deanpeters-pm, phuryn-pm, coreyhaines-marketing, platform-design, apple-hig stubs`

---

## Task 13: type:platform — Complex runtime stubs (3 stubs)

**Files to create:**
- `skills/ui-ux-pro-max/{SKILL.md,stub.yaml}` — nextlevelbuilder/ui-ux-pro-max-skill
- `skills/nanobanan-ppt/{SKILL.md,stub.yaml}` — op7418/NanoBanana-PPT-Skills
- `skills/composio-artifacts/{SKILL.md,stub.yaml}` — ComposioHQ/artifacts-builder

**Stub metadata:**

```yaml
# ui-ux-pro-max (50+ styles, 97 palettes, 9 stacks)
# Verify if SKILL.md has template vars — if not, downgrade to type:skill
type: platform
upstream: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
version: latest
install_default: "npx skills add nextlevelbuilder/ui-ux-pro-max-skill"
install_claude: "claude plugin install nextlevelbuilder/ui-ux-pro-max-skill"

# nanobanan-ppt (requires API credentials for image generation)
type: platform
upstream: https://github.com/op7418/NanoBanana-PPT-Skills
version: latest
install_default: "npx skills add op7418/NanoBanana-PPT-Skills"
note: "Requires API credentials for image generation features"

# composio-artifacts (requires Composio account + API key)
type: platform
upstream: https://github.com/ComposioHQ/awesome-claude-skills
version: latest
install_default: "npx skills add ComposioHQ/artifacts-builder"
install_claude: "claude plugin install ComposioHQ/awesome-claude-skills"
note: "Requires Composio account and API key"
```

**Commit:** `feat: add ui-ux-pro-max, nanobanan-ppt, composio-artifacts platform stubs`

---

## Task 14: Update design-catalogue routing table

**File:** `skills/design-catalogue/SKILL.md`

Add all new stubs to the routing table grouped by category. Append to existing table:

| Category | Stubs to add |
|----------|-------------|
| Design Engineering | emilkowalski-skill |
| Motion & Animation | animation-principles, algorithmic-art, shader-dev |
| Interaction & Polish | make-interfaces-better, design-lab, interface-design-dammyjay, bencium-ux-designer, taste-design-stitch |
| Visual & Components | color-expert, baseline-ui, shadcn-ui, ui-ux-pro-max, platform-design-skills, apple-hig-skills, hig-doctor, swiftui-patterns, ink-google |
| Accessibility | fixing-accessibility, fixing-motion-performance, wcag-audit-patterns, addyosmani-quality |
| Design Review | creative-director, design-brief, design-consultation, design-review-garrytan, plan-design-review, design-html, digidai-pm |
| Figma & Code | figma-official-skills, openai-skills, google-stitch-skills, extract-design-md |
| Official Suites | anthropics-skills, vercel-skills, microsoft-skills |
| Diagrams | excalidraw-diagram, hand-drawn-diagrams, excalidraw-agents365, wireframer, softaworks-agent-toolkit, nimbalyst-skills |
| Data Visualization | antvis-chart-skills, markdown-viewer-skills, d3js-skill, data-viz-agent |
| 3D & Creative | p5js-hermes, cloudai-threejs, remotion, fal-ai-skills |
| Presentations | nanobanan-ppt, guizang-ppt, frontend-slides |
| Product & PM | deanpeters-pm-skills, phuryn-pm-skills, coreyhaines-marketing |
| React | react-doctor |

**Commit:** `docs: update design-catalogue routing table with all new stubs`

---

## Task 15: Update README skills table

**File:** `README.md`

Add a row for every new stub. Format:
```
| [name](skills/name/SKILL.md) | skill/package/platform | category | [org/repo](url) |
```

**Commit:** `docs: update README skills table — 69 stubs total`

---

## Summary

| Phase | Tasks | New stubs |
|-------|-------|-----------|
| type:skill (GitHub paths known) | 1–6 | ~33 |
| type:skill (ui-skills.com + shadcn) | 7–8 | ~10 |
| type:package (collections) | 9–12 | ~23 |
| type:platform (runtime deps) | 13 | 3 |
| Docs update | 14–15 | — |
| **Total** | **15 tasks** | **~69 new stubs** |

**Execution order:** Tasks 1–13 are independent (batch per task). Tasks 14–15 depend on all previous tasks completing.

**URLs that need derivation at implementation time** (check officialskills.sh source or curl headers):
- algorithmic-art, design-consultation/review/plan-design-review (garrytan), cloudflare-web-perf, shader-dev, remotion (all on officialskills.sh)
- figma, openai, anthropics, vercel, microsoft, addyosmani, fal-ai (verify org GitHub repo names)
- ibelick ×3, wshobson, 0xdesign, bencium, Dammyjay93, dimillian, millionco (derive from ui-skills.com source)
- raphaelsalaja/userinterface-wiki — skip if no SKILL.md at root
- ui-ux-pro-max — check for template vars to confirm type:platform vs type:skill
