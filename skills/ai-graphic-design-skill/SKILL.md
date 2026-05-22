---
name: ai-graphic-design-skill
description: |
  Maps 15 AI tools to design scenarios — Midjourney for ideation, Stable Diffusion for
  production, ControlNet for composition control, vectorization pipelines, and mockup
  generation. Includes a 2025-2026 AI Creative Director competency roadmap.
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

## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/ai-graphic-design-skill/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `ai-graphic-design-skill` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/ai-graphic-design-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/designrique/ai-graphic-design-skill/main/SKILL.md \
    -o ~/.claude/skills/ai-graphic-design-skill/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/ai-graphic-design-skill/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `ai-graphic-design-skill`
- Trigger phrases: "AI graphic design", "AI design tools", "Midjourney workflow", "Stable Diffusion design", "AI Creative Director"

## What it does

Provides a decision framework mapping 15 AI image and design tools to specific production scenarios: Midjourney for concept ideation and moodboarding, Stable Diffusion for production image generation, ControlNet for precise composition and pose control, plus vectorization pipelines and product mockup generation workflows. Includes a structured 2025-2026 AI Creative Director competency roadmap covering prompt engineering, tool orchestration, and quality control. Helps designers and agents choose the right AI tool for each phase of a graphic design project.

## When NOT to use

- Pure code or UI implementation tasks with no image or graphic design component (use `taste-skill` or `ui-craft` instead)
- When you need interactive UI components or design systems (use `design-consultation` or `shadcn-ui`)
- When the deliverable is a Figma file (use `figma-official-skills`)
