---
name: content-catalogue
description: |
  Domain navigator for presentations, diagrams, wireframes, data visualization,
  design review, product strategy, copywriting, UX writing, content design, and
  design research skills. Routes to the right skill for slides, charts, UX strategy,
  PM frameworks, email, microcopy, product copy, user research, and design sprints.
triggers:
  - "presentation skills"
  - "slides skill"
  - "diagram skills"
  - "wireframe skills"
  - "data visualization skills"
  - "PM skills"
  - "product skills"
  - "design review skills"
  - "UX strategy skills"
  - "email design skills"
  - "UX writing skills"
  - "copywriting skills"
  - "content design skills"
  - "microcopy skills"
  - "user research skills"
  - "design research skills"
  - "design sprint skills"
---

# content-catalogue

Domain navigator for presentations, diagrams, data viz, design review, strategy, and PM skills.
Activate when the user asks for a skill in communicating design or managing product decisions.

→ For the full catalogue across all domains: use `design-catalogue`.

## When to use

Activate when the user:
- Needs to create slides, presentations, or pitch decks
- Wants wireframes, diagrams, or flowcharts
- Needs data visualization or chart generation
- Asks about design review, critique, or UX strategy
- Needs PM frameworks, PRD templates, or product strategy tools
- Needs to write or improve UI copy, microcopy, or error messages
- Needs product or marketing copywriting
- Wants to detect or remove AI writing patterns from text

## Presentations & Slides

| Skill | Best for |
|-------|----------|
| [`nanobanan-ppt`](../nanobanan-ppt/SKILL.md) | AI slide decks: document analysis → styled slide images + HTML player (needs a Gemini key) |
| [`guizang-ppt`](../guizang-ppt/SKILL.md) | Structured PowerPoint from outline (no API deps) |
| [`frontend-slides`](../frontend-slides/SKILL.md) | Animation-rich HTML presentations |
| [`html-ppt`](../html-ppt/SKILL.md) | HTML PPT Studio: themes, layouts, full-deck templates, presenter mode with speaker script |
| [`kami`](../kami/SKILL.md) | Paper-style typesetting: resumes, one-pagers, white papers, letters, decks (PDF/PNG/PPTX) |
| [`humanize-ppt`](../humanize-ppt/SKILL.md) | Outline director + post-render checkup for agent-made decks (planner only, no rendering) |
| [`revealjs-skill`](../revealjs-skill/SKILL.md) | Reveal.js: themes, Chart.js, speaker notes, PDF export |
| [`marp-slides`](../marp-slides/SKILL.md) | MARP + 22 example decks, SVG charts, dashboard components |
| [`slidev-skill`](../slidev-skill/SKILL.md) | Official Slidev: developer presentations in Markdown with Vue + animations |
| [`cc-slidev`](../cc-slidev/SKILL.md) | Slidev plugin with evidence-based design guardrails for tech talks |
| [`marp-slide-quality`](../marp-slide-quality/SKILL.md) | SlideGauge scoring: overflow, contrast, density checks before render |

## Diagrams & Wireframing

| Skill | Best for |
|-------|----------|
| [`excalidraw-diagram`](../excalidraw-diagram/SKILL.md) | Excalidraw diagrams with a visual validation loop |
| [`anatomy`](../anatomy/SKILL.md) | Interactive isometric figures where a real machine *is* the explanation |
| [`hand-drawn-diagrams`](../hand-drawn-diagrams/SKILL.md) | Quick hand-drawn sketch diagrams |
| [`excalidraw-agents365`](../excalidraw-agents365/SKILL.md) | Excalidraw tuned for coding agent workflows |
| [`wireframer`](../wireframer/SKILL.md) | Low-fidelity wireframes, structure-first |
| [`softaworks-agent-toolkit`](../softaworks-agent-toolkit/SKILL.md) | Design-adjacent picks: mermaid, excalidraw, draw-io, C4, marp, schema designer, design-system starter |
| [`nimbalyst-skills`](../nimbalyst-skills/SKILL.md) | Nimbalyst app built-ins: Excalidraw with MCP tools, mockups, data models |
| [`wireframe-skill`](../wireframe-skill/SKILL.md) | NL → wireframe JSON + interactive HTML with drag/drop, undo/redo |
| [`claude-wireframe-skill`](../claude-wireframe-skill/SKILL.md) | 5 UX approaches as interactive prototypes — B&W first then color variants |

## Data Visualization & Charts

| Skill | Best for |
|-------|----------|
| [`antvis-chart-skills`](../antvis-chart-skills/SKILL.md) | AntV chart skills: chart images, G2, G6 graphs, X6 diagrams, infographics, GPT-Vis, T8 narrative text |
| [`markdown-viewer-skills`](../markdown-viewer-skills/SKILL.md) | Text-driven visuals in Markdown (docu.md): Vega-Lite/ECharts charts, UML, BPMN, ArchiMate, infographics |
| [`d3js-skill`](../d3js-skill/SKILL.md) | D3.js: data binding, scales, transitions, interactive charts |
| [`claud3`](../claud3/SKILL.md) | D3 v7 + Tufte principles: 80+ chart types, dark theme, annotations |
| [`data-viz-agent`](../data-viz-agent/SKILL.md) | Data-viz engineer agent: D3, Chart.js, Matplotlib, Plotly; perceptual encodings, colorblind-safe, accessible |
| [`data-analysis-skill`](../data-analysis-skill/SKILL.md) | Multi-expert parallel analysis → HTML reports + PowerPoint export |

## Design Review & UX Strategy

| Skill | Best for |
|-------|----------|
| [`creative-director`](../creative-director/SKILL.md) | Concept generation (SIT, TRIZ, SCAMPER, lateral thinking) scored against Cannes/D&AD/HumanKind criteria |
| [`design-brief`](../design-brief/SKILL.md) | Structured design briefs from loose requirements |
| [`design-consultation`](../design-consultation/SKILL.md) | Complete design system from scratch |
| [`design-review-garrytan`](../design-review-garrytan/SKILL.md) | Visual audit + atomic fix commits |
| [`plan-design-review`](../plan-design-review/SKILL.md) | Designer review of a plan before implementation: 0–10 per design dimension, fills gaps, flags AI-slop (gstack) |
| [`design-html`](../design-html/SKILL.md) | Implement designs as production HTML/CSS |
| [`ux-ui-mastery`](../ux-ui-mastery/SKILL.md) | Sumi (ex ux-ui-mastery): cognitive UX, NN/g heuristics, research, interaction/motion, a11y, i18n, agentic AI UX, design systems |
| [`designer-skills`](../designer-skills/SKILL.md) | Nine-plugin designer toolkit: research, systems, UX strategy, UI, interaction, testing, ops, critique (installs every skill) |
| [`design-with-claude`](../design-with-claude/SKILL.md) | Deterministic WCAG/token audit + design slash commands: dashboards, b2b SaaS, healthcare UX, onboarding |
| [`ux-designer-skill`](../ux-designer-skill/SKILL.md) | UX/UI review and critique grounded in Nielsen heuristics, Laws of UX and WCAG 2.2; references loaded on demand |
| [`wondelai-skills`](../wondelai-skills/SKILL.md) | Book-derived: Refactoring UI, Everyday Things, Microinteractions, Lean UX, Inspired, JTBD, Hook Model, Design Sprint |
| [`digidai-pm`](../digidai-pm/SKILL.md) | Senior PM: 30+ frameworks, SaaS metrics |
| [`design-impact-reporting`](../design-impact-reporting/SKILL.md) | Design ROI: user→product→business metrics, scorecard / before-after / A-B / portfolio |
| [`design-debt-audit`](../design-debt-audit/SKILL.md) | Design-debt taxonomy + audit process + Severity×Frequency/Effort scoring + register |
| [`design-negotiation`](../design-negotiation/SKILL.md) | Advocacy scripts: timeline / scope / stakeholder override / headcount, evidence-based |
| [`service-blueprint`](../service-blueprint/SKILL.md) | Service blueprints (NN/g, GDS): five swim lanes, lines of visibility/interaction, JSON schema + render pipeline |

## Design Research

| Skill | Best for |
|-------|----------|
| [`user-research-cookiy`](../user-research-cookiy/SKILL.md) | End-to-end user research: study planning, discussion guides, transcript synthesis, reports; optional AI-moderated interviews on Cookiy |
| [`software-ux-research`](../software-ux-research/SKILL.md) | UX research methods, study design, synthesis and research ops: reference guides + templates |

## Product & PM

| Skill | Best for |
|-------|----------|
| [`deanpeters-pm-skills`](../deanpeters-pm-skills/SKILL.md) | journey maps, OST, story mapping, PRD |
| [`phuryn-pm-skills`](../phuryn-pm-skills/SKILL.md) | Nine PM plugins: discovery, strategy, execution, market research, analytics, GTM, growth, toolkit, AI shipping |
| [`coreyhaines-marketing`](../coreyhaines-marketing/SKILL.md) | CRO: onboarding, page, signup flow |
| [`pm-skills`](../pm-skills/SKILL.md) | Triple Diamond phase skills, foundation skills (personas, OKRs, lean canvas), Design Sprint and Foundation Sprint tools |
| [`claude-pm-skills`](../claude-pm-skills/SKILL.md) | Product thinking, discovery, prioritization, launch |
| [`design-sprint`](../design-sprint/SKILL.md) | Research codebase → design feature → decompose into parent + sub-issues (GitHub/Backlog; installs create-issue) |
| [`product-position`](../product-position/SKILL.md) | B2B SaaS positioning: messaging hierarchy, competitive framing, strategic narrative — Dunford + JTBD frameworks |
| [`lenny-skills`](../lenny-skills/SKILL.md) | Design-relevant skills from Lenny's archive: interviews, discovery, onboarding, PRDs, product taste, AI-native UX |
| [`assimovt-productskills`](../assimovt-productskills/SKILL.md) | Roadmaps, North Star metrics, A/B experiments, competitor analysis, strategy docs, Shape Up scoping |
| [`chadboyda-gtm`](../chadboyda-gtm/SKILL.md) | Go-to-market skills: positioning/ICP, pricing, sales motion, outbound, launches, retention, GTM metrics |

## Content Design & Copy

| Skill | Best for |
|-------|----------|
| [`ux-writing-skill`](../ux-writing-skill/SKILL.md) | Microcopy, button labels, error messages, empty states, form copy, a11y writing |
| [`copywriting-skill`](../copywriting-skill/SKILL.md) | Landing pages, product copy, email sequences, headlines, tone-of-voice (5 sub-skills) |
| [`humanize-text`](../humanize-text/SKILL.md) | Score + rewrite text to remove AI patterns across 7 dimensions; works on Figma URLs + screenshots |
| [`content-strategy`](../content-strategy/SKILL.md) | Content audit, content model, voice/tone, governance, content hierarchy |

## Email & Terminal

| Skill | Best for |
|-------|----------|
| [`email-html-mjml`](../email-html-mjml/SKILL.md) | MJML 5.x → cross-client HTML email, WCAG 2.1 AA, Outlook-safe |
| [`tui-design-skill`](../tui-design-skill/SKILL.md) | Terminal UI design: Bubble Tea (Go), Ratatui (Rust), Textual (Python), Ink (TS) |
| [`textual-tui-skill`](../textual-tui-skill/SKILL.md) | Textual (Python) deep-dive: widgets, TCSS, reactive, workers, Pilot testing, common pitfalls |
| [`ink-google`](../ink-google/SKILL.md) | json-render Ink renderer: JSON specs → interactive terminal UIs |
