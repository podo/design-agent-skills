---
name: ux-ui-mastery
description: |
  Sumi (formerly ux-ui-mastery), a UX/UI design-intelligence skill suite from Phazur Labs: a router
  skill plus deep skills for cognitive psychology UX, Nielsen Norman Group heuristics, UX research methods,
  interaction and motion design, accessibility and inclusive design, mobile and desktop UX,
  cross-cultural i18n UX, agentic AI and generative UX, ambient/zero UI, spatial and voice UX,
  design systems and tokens, component code, and reference-grounded visual design.
triggers:
  - "ux mastery"
  - "phazurlabs"
  - "UX ui mastery"
  - "Sumi design crew"
  - "iOS 26 UX"
  - "ambient UI"
das:
  type: package
  category: design-review
  upstream: "https://github.com/phazurlabs/sumi"
  version: latest
  install: false
---

# ux-ui-mastery

> Catalogue stub — full package: [phazurlabs/sumi](https://github.com/phazurlabs/sumi) (the repo was renamed from `phazurlabs/ux-ui-mastery`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 45 skills (`sumi-orchestrator`, `accessibility-inclusive-design`, `agentic-ai-generative-ux`, `ai-design-generation`, `ai-spatial-voice-ux`, `ambient-calm-zero-ui`, `animation-recipe-library`, `business-design-templates`, `cognitive-psychology-ux`, `color-palette-library`, `component-patterns-code`, `conversion-optimization-patterns`, `cross-cultural-i18n-ux`, `data-visualization-mastery`, `design-critique-case-studies`, `design-memory`, `design-process-methods`, `design-systems-architecture`, `design-token-presets`, `desktop-app-design`, `figma-design-tool-workflows`, `form-design-encyclopedia`, `icon-illustration-systems`, `image-media-patterns`, `interaction-motion-design`, `layout-block-intelligence`, `micro-copy-intelligence`, `mobile-ux-design`, `navigation-pattern-encyclopedia`, `nng-ux-heuristics`, `page-composition-engine`, `performance-states-patterns`, `platform-visual-standards`, `reference-intelligence`, `responsive-block-patterns`, `screen-flow-patterns`, `sector-style-intelligence`, `shadow-elevation-density`, `typography-pairing-recipes`, `ui-pattern-intelligence`, `ui-visual-design-system`, `ux-ethics-content-strategy`, `ux-metrics-measurement`, `ux-research-methods`, `visual-design-mastery`); checking the first.
   - Global: `f=~/.agents/skills/sumi-orchestrator/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/sumi-orchestrator/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `sumi-orchestrator`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ux-ui-mastery ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add phazurlabs/sumi --skill sumi-orchestrator accessibility-inclusive-design agentic-ai-generative-ux ai-design-generation ai-spatial-voice-ux ambient-calm-zero-ui animation-recipe-library business-design-templates cognitive-psychology-ux color-palette-library component-patterns-code conversion-optimization-patterns cross-cultural-i18n-ux data-visualization-mastery design-critique-case-studies design-memory design-process-methods design-systems-architecture design-token-presets desktop-app-design figma-design-tool-workflows form-design-encyclopedia icon-illustration-systems image-media-patterns interaction-motion-design layout-block-intelligence micro-copy-intelligence mobile-ux-design navigation-pattern-encyclopedia nng-ux-heuristics page-composition-engine performance-states-patterns platform-visual-standards reference-intelligence responsive-block-patterns screen-flow-patterns sector-style-intelligence shadow-elevation-density typography-pairing-recipes ui-pattern-intelligence ui-visual-design-system ux-ethics-content-strategy ux-metrics-measurement ux-research-methods visual-design-mastery -g -y
   ```

   **Project:**
   ```bash
   npx skills add phazurlabs/sumi --skill sumi-orchestrator accessibility-inclusive-design agentic-ai-generative-ux ai-design-generation ai-spatial-voice-ux ambient-calm-zero-ui animation-recipe-library business-design-templates cognitive-psychology-ux color-palette-library component-patterns-code conversion-optimization-patterns cross-cultural-i18n-ux data-visualization-mastery design-critique-case-studies design-memory design-process-methods design-systems-architecture design-token-presets desktop-app-design figma-design-tool-workflows form-design-encyclopedia icon-illustration-systems image-media-patterns interaction-motion-design layout-block-intelligence micro-copy-intelligence mobile-ux-design navigation-pattern-encyclopedia nng-ux-heuristics page-composition-engine performance-states-patterns platform-visual-standards reference-intelligence responsive-block-patterns screen-flow-patterns sector-style-intelligence shadow-elevation-density typography-pairing-recipes ui-pattern-intelligence ui-visual-design-system ux-ethics-content-strategy ux-metrics-measurement ux-research-methods visual-design-mastery -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add phazurlabs/sumi
/plugin install sumi
```

**Heads-up**

- **Requires:** for the plugin's /sumi:inspo reference capture - a local Chrome and puppeteer-core in your project (npm i -D puppeteer-core); for Mobbin references - a Mobbin account and its MCP server
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Start with `sumi-orchestrator`: it routes any UX/UI request (audit, fix, create, implement, systematize, measure) to the right skills in order
- Depth skills it routes to are named for their topic, for example `cognitive-psychology-ux`, `nng-ux-heuristics`, `accessibility-inclusive-design`, `ux-research-methods`, `interaction-motion-design`, `mobile-ux-design`, `agentic-ai-generative-ux`, `ui-visual-design-system` and `component-patterns-code`
- With the Claude Code plugin route you also get the `/sumi:` commands (start with `/sumi:start`) and a crew of four agents. If `/plugin install sumi` is ambiguous, use the full form `/plugin install sumi@sumi-marketplace`

Trigger phrases: "ux mastery", "phazurlabs", "UX ui mastery", "Sumi design crew", "iOS 26 UX", "ambient UI"

## What it does

A large UX/UI knowledge suite for Claude Code. The router skill, `sumi-orchestrator`, maps a request to a pipeline with stage gates, and the other skills are the depth libraries it pulls in: cognitive psychology and Laws of UX, NN/g heuristics with severity ratings, UX research methods, WCAG 2.2 accessibility, interaction and motion, mobile, desktop, cross-cultural, agentic-AI, ambient and spatial/voice UX, design systems and W3C tokens, production component code, microcopy, layout blocks, palettes, typography pairings, and platform standards such as iOS 26 Liquid Glass and Material 3 Expressive. The plugin adds commands (`/sumi:audit`, `/sumi:fix`, `/sumi:inspo` and more) and agents that source current Awwwards and Mobbin references and grade your build against them.

The skills CLI route installs the skills only, which adds many skill descriptions to your agent's context. The router names the skills it needs, so trim with `--skill` only if you keep the ones it routes to.

## When NOT to use

- Quick design review — use `plan-design-review` for a lighter-weight pass
- Single-domain needs where one focused skill suffices (for example `wcag-ai-skill` for accessibility only, or `interaction-design` for interaction states)
