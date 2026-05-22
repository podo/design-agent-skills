---
name: design-catalogue
description: |
  Catalogue navigator for design-agent-skills. Lists available design skill stubs,
  matches user intent to the right stub, and routes to install and invoke.
  Use when the user wants to browse or find the right design skill.
triggers:
  - "what design skills"
  - "find a design skill"
  - "browse design skills"
  - "which skill for design"
  - "design skill for"
  - "show me design skills"
  - "what skills do you have"
das:
  category: meta
  type: navigator
  catalogue: true
---

# design-catalogue

Meta-skill for this catalogue. Activate when the user wants to browse, discover, or find
the right design skill — not when they've already named one.

## When to use

Activate when the user:
- Asks what design skills exist ("what skills do you have?", "show me design skills")
- Describes a problem but names no skill ("I want premium UI", "make it not look generic")
- Asks which skill fits a task ("what should I use for animations?", "which for good taste?")

Do **not** activate if the user already named a specific skill — route directly to that stub.

## How to respond

1. Present the relevant section of the catalogue index below
2. Recommend the best match with a one-line reason
3. Show the stub's install command for the match
4. Ask if they want to install and invoke it

> For `type:package` and `type:platform` stubs: show the `npx skills add` or per-agent
> install command from the stub. These must not be curl'd directly.

## Catalogue index

### Design Engineering (opinionated UI taste)

| Skill | Best for |
|-------|----------|
| [`taste-skill`](../taste-skill/SKILL.md) | Premium, non-generic UI — variance, motion, density dials |
| [`impeccable`](../impeccable/SKILL.md) | 23 commands, Chrome extension, Live Mode browser iteration |
| [`emilkowalski-skill`](../emilkowalski-skill/SKILL.md) | Animation decision framework, easing curves, interaction principles |
| [`make-interfaces-better`](../make-interfaces-better/SKILL.md) | Polish: micro-interactions, typography details, visual refinement |
| [`ui-craft`](../ui-craft/SKILL.md) | 18 slash commands, anti-slop CLI, 3 style variants — deepest design engineering skill |

### Motion & Animation

| Skill | Best for |
|-------|----------|
| [`algorithmic-art`](../algorithmic-art/SKILL.md) | Generative art with p5.js, flow fields, particle systems |
| [`shader-dev`](../shader-dev/SKILL.md) | GLSL shaders: ray marching, fluid simulation, WebGL effects |
| [`p5js-hermes`](../p5js-hermes/SKILL.md) | p5.js creative coding: noise, particles, GLSL, audio-reactive |
| [`remotion`](../remotion/SKILL.md) | Programmatic video with React |

### Interaction & Polish

| Skill | Best for |
|-------|----------|
| [`taste-design-stitch`](../taste-design-stitch/SKILL.md) | Aesthetic judgment for Google Stitch output |
| [`design-lab`](../design-lab/SKILL.md) | Interactive design exploration, variant generation |
| [`interface-design-dammyjay`](../interface-design-dammyjay/SKILL.md) | Dashboards, admin panels, SaaS information-dense UI |
| [`bencium-ux-designer`](../bencium-ux-designer/SKILL.md) | Distinctive, production-grade frontend |

### Visual, Components & Color

| Skill | Best for |
|-------|----------|
| [`color-expert`](../color-expert/SKILL.md) | OKLCH/OKLAB color science, palette generation, contrast |
| [`baseline-ui`](../baseline-ui/SKILL.md) | Animation durations, typography scale, Tailwind anti-patterns |
| [`shadcn-ui`](../shadcn-ui/SKILL.md) | shadcn/ui component workflow |
| [`ui-ux-pro-max`](../ui-ux-pro-max/SKILL.md) | 50+ styles, 97 palettes, 9 tech stacks |
| [`platform-design-skills`](../platform-design-skills/SKILL.md) | 300+ HIG/MD3/WCAG rules for cross-platform |
| [`apple-hig-skills`](../apple-hig-skills/SKILL.md) | Apple HIG: iOS, macOS, visionOS, watchOS, tvOS |
| [`hig-doctor`](../hig-doctor/SKILL.md) | Diagnose and fix Apple HIG violations |
| [`swiftui-patterns`](../swiftui-patterns/SKILL.md) | SwiftUI view and component best practices |
| [`ink-google`](../ink-google/SKILL.md) | Ink-style editorial design for artifacts |

### Accessibility & Quality

| Skill | Best for |
|-------|----------|
| [`fixing-accessibility`](../fixing-accessibility/SKILL.md) | ARIA, keyboard nav, focus management, contrast fixes |
| [`fixing-motion-performance`](../fixing-motion-performance/SKILL.md) | Layout thrashing, compositor, scroll-linked animation |
| [`wcag-audit-patterns`](../wcag-audit-patterns/SKILL.md) | WCAG 2.2 audits with remediation |
| [`addyosmani-quality`](../addyosmani-quality/SKILL.md) | 6-skill suite: a11y, Lighthouse, CWV, perf, SEO, best practices |
| [`cloudflare-web-perf`](../cloudflare-web-perf/SKILL.md) | Core Web Vitals: LCP, INP, CLS fixes |
| [`react-doctor`](../react-doctor/SKILL.md) | React security, performance, correctness scoring |

### Design Review & Creative Direction

| Skill | Best for |
|-------|----------|
| [`creative-director`](../creative-director/SKILL.md) | 20+ ideation methods, Cannes/D&AD evaluation |
| [`design-brief`](../design-brief/SKILL.md) | Structured design briefs from loose requirements |
| [`design-consultation`](../design-consultation/SKILL.md) | Complete design system from scratch |
| [`design-review-garrytan`](../design-review-garrytan/SKILL.md) | Visual audit + atomic fix commits |
| [`plan-design-review`](../plan-design-review/SKILL.md) | Scored critique (0–10) with AI slop detection |
| [`design-html`](../design-html/SKILL.md) | Implement designs as production HTML/CSS |
| [`digidai-pm`](../digidai-pm/SKILL.md) | Senior PM: 30+ frameworks, SaaS metrics |

### Figma & Design-to-Code

| Skill | Best for |
|-------|----------|
| [`figma-official-skills`](../figma-official-skills/SKILL.md) | 7 official Figma skills: implement, generate, library, code-connect |
| [`openai-skills`](../openai-skills/SKILL.md) | OpenAI's 9 skills: Figma + frontend + slides + imagegen |
| [`google-stitch-skills`](../google-stitch-skills/SKILL.md) | 6 Stitch skills: design-md, react-components, shadcn, loop |
| [`extract-design-md`](../extract-design-md/SKILL.md) | Extract Stitch output into DESIGN.md format |

### Official Platform Suites

| Skill | Best for |
|-------|----------|
| [`anthropics-skills`](../anthropics-skills/SKILL.md) | 6 Anthropic skills: frontend-design, artifacts, canvas, theme, brand, pptx |
| [`vercel-skills`](../vercel-skills/SKILL.md) | 4 Vercel skills: web-design-guidelines, components, React best practices |
| [`microsoft-skills`](../microsoft-skills/SKILL.md) | 2 Microsoft skills: design review, dark-theme React |

### Diagrams & Wireframing

| Skill | Best for |
|-------|----------|
| [`excalidraw-diagram`](../excalidraw-diagram/SKILL.md) | Excalidraw with visual validation loop (3.2k stars) |
| [`hand-drawn-diagrams`](../hand-drawn-diagrams/SKILL.md) | Quick hand-drawn sketch diagrams |
| [`excalidraw-agents365`](../excalidraw-agents365/SKILL.md) | Excalidraw tuned for coding agent workflows |
| [`wireframer`](../wireframer/SKILL.md) | Low-fidelity wireframes, structure-first |
| [`softaworks-agent-toolkit`](../softaworks-agent-toolkit/SKILL.md) | 40+ skills: mermaid, excalidraw, draw-io, C4, marp |
| [`nimbalyst-skills`](../nimbalyst-skills/SKILL.md) | Excalidraw with MCP tools, mockups, data models |

### Data Visualization & Charts

| Skill | Best for |
|-------|----------|
| [`antvis-chart-skills`](../antvis-chart-skills/SKILL.md) | 7 AntV skills: 26+ chart types, 98.2% accuracy |
| [`markdown-viewer-skills`](../markdown-viewer-skills/SKILL.md) | 14 skills: Vega, PlantUML, JSON Canvas, infographics |
| [`d3js-skill`](../d3js-skill/SKILL.md) | D3.js: data binding, scales, transitions, interactive charts |
| [`data-viz-agent`](../data-viz-agent/SKILL.md) | Multi-library agent: D3/Chart.js/Plotly/Matplotlib |

### 3D, Creative & Media

| Skill | Best for |
|-------|----------|
| [`cloudai-threejs`](../cloudai-threejs/SKILL.md) | Three.js 3D scenes, animations, WebGL |
| [`fal-ai-skills`](../fal-ai-skills/SKILL.md) | fal.ai image/video and 3D model generation |
| [`composio-artifacts`](../composio-artifacts/SKILL.md) | Artifacts connected to GitHub/Slack/Linear via Composio |

### Presentations

| Skill | Best for |
|-------|----------|
| [`nanobanan-ppt`](../nanobanan-ppt/SKILL.md) | AI-powered PPT with document analysis and image generation |
| [`guizang-ppt`](../guizang-ppt/SKILL.md) | Structured PowerPoint from outline (no API deps) |
| [`frontend-slides`](../frontend-slides/SKILL.md) | Animation-rich HTML presentations |

### Product & PM

| Skill | Best for |
|-------|----------|
| [`deanpeters-pm-skills`](../deanpeters-pm-skills/SKILL.md) | 9 skills: journey maps, OST, story mapping, PRD |
| [`phuryn-pm-skills`](../phuryn-pm-skills/SKILL.md) | 6 skills: JTBD personas, interview scripts, PRD |
| [`coreyhaines-marketing`](../coreyhaines-marketing/SKILL.md) | 3 CRO skills: onboarding, page, signup flow |

---

## Routing guide

| User says | Route to |
|-----------|----------|
| "good taste", "anti slop", "premium UI", "not generic" | `taste-skill` or `ui-craft` |
| "design variance", "motion intensity", "visual density" | `taste-skill` |
| "no Inter font", "no 3-column cards", "no centered hero" | `taste-skill` or `ui-craft` |
| "anti-slop detector", "33 rules", "ui-craft", "18 slash commands" | `ui-craft` |
| "polish", "micro-interactions", "make it feel better" | `make-interfaces-better` |
| "animation principles", "easing curves" | `emilkowalski-skill` |
| "GLSL", "ray march", "WebGL shader" | `shader-dev` |
| "generative art", "p5.js", "particle system" | `algorithmic-art` or `p5js-hermes` |
| "Three.js", "3D scene", "WebGL 3D" | `cloudai-threejs` |
| "Figma to code", "implement Figma" | `figma-official-skills` |
| "Stitch", "DESIGN.md", "stitch loop" | `google-stitch-skills` |
| "color palette", "OKLCH", "color science" | `color-expert` |
| "WCAG", "accessibility audit", "contrast" | `fixing-accessibility` or `addyosmani-quality` |
| "Core Web Vitals", "LCP", "CLS" | `cloudflare-web-perf` or `addyosmani-quality` |
| "React performance", "React audit" | `react-doctor` |
| "design review", "visual audit", "AI slop" | `plan-design-review` |
| "design system", "build from scratch" | `design-consultation` |
| "Apple HIG", "iOS design", "visionOS" | `apple-hig-skills` |
| "HIG compliance", "fix HIG" | `hig-doctor` |
| "mermaid", "C4 diagram", "draw.io" | `softaworks-agent-toolkit` |
| "excalidraw" | `excalidraw-diagram` |
| "wireframe", "lo-fi", "layout skeleton" | `wireframer` |
| "D3", "chart", "data visualization" | `d3js-skill` or `antvis-chart-skills` |
| "customer journey", "user story", "PRD" | `deanpeters-pm-skills` or `phuryn-pm-skills` |
| "CRO", "conversion", "onboarding" | `coreyhaines-marketing` |
| "PowerPoint", "slides", "presentation" | `guizang-ppt` or `nanobanan-ppt` |
| "HTML presentation", "animated slides" | `frontend-slides` |
| "shadcn", "shadcn component" | `shadcn-ui` |
| "platform design", "cross-platform rules" | `platform-design-skills` |
| "creative strategy", "campaign concept", "SCAMPER" | `creative-director` |
| "design brief", "requirements spec" | `design-brief` |

## No match

If intent doesn't match any stub:
- Say so directly: "No stub in this catalogue covers [X] yet."
- Suggest checking the repo for new additions
- Offer to help build a stub if they have an upstream skill in mind
