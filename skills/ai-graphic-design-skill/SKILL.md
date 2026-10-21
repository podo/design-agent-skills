---
name: ai-graphic-design-skill
description: |
  Guide for creating logos, brand identities, and visual assets with AI tools: which tool fits which
  scenario (Recraft, Midjourney, Firefly, DALL-E, Stable Diffusion), prompt engineering per tool,
  vectorization pipelines, mockups, Python automation, and IP safety. The skill text is in Portuguese.
triggers:
  - "AI graphic design"
  - "AI design tools"
  - "Midjourney workflow"
  - "Stable Diffusion design"
  - "AI Creative Director"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/designrique/ai-graphic-design-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# ai-graphic-design-skill

> Catalogue stub — full skill: [designrique/ai-graphic-design-skill](https://github.com/designrique/ai-graphic-design-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `ai-graphic-design`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/ai-graphic-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ai-graphic-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ai-graphic-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ai-graphic-design-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add designrique/ai-graphic-design-skill --skill ai-graphic-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add designrique/ai-graphic-design-skill --skill ai-graphic-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `ai-graphic-design`
- Trigger phrases: "AI graphic design", "AI design tools", "Midjourney workflow", "Stable Diffusion design", "AI Creative Director"

## What it does

Provides a decision framework for using AI tools in logo, brand-identity, and graphic-asset work. A tool-selection matrix maps scenarios to tools: Recraft for clean vector logos, Midjourney for concept ideation and moodboards, Adobe Firefly for IP-safe commercial use, DALL-E for conversational iteration, Stable Diffusion (with ControlNet) for full control and batch work. It also covers briefing frameworks, per-tool prompt engineering, an end-to-end workflow from brief to delivery, visual consistency across campaigns, raster-to-vector pipelines, professional mockup techniques, delivery formats, Python automation, an IP-risk matrix per tool, anti-patterns, and a 2025-2026 designer-competency roadmap (the "AI Creative Director" role). The skill text itself is written in Portuguese.

## When NOT to use

- Pure code or UI implementation tasks with no image or graphic design component (use `taste-skill` or `ui-craft` instead)
- When you need interactive UI components or design systems (use `design-consultation` or `shadcn-ui`)
- When the deliverable is a Figma file (use `figma-official-skills`)
