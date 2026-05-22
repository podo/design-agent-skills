---
name: figma-catalogue
description: |
  Domain navigator for Figma, design-to-code, design tokens, and official
  platform skill suites. Routes to the right skill for working between
  design tools and code, managing design systems, or using official
  platform skills (Anthropic, Vercel, Expo, Software Mansion, Callstack).
triggers:
  - "Figma skills"
  - "design to code skills"
  - "design system skills"
  - "design tokens skills"
  - "Stitch skills"
  - "official platform skills"
  - "platform suite skills"
---

# figma-catalogue

Domain navigator for Figma, design-to-code workflows, design tokens, and official platform suites.
Activate when the user asks for a skill that bridges design tools and code.

→ For the full catalogue across all domains: use `design-catalogue`.

## When to use

Activate when the user:
- Asks about Figma-to-code or code-to-Figma workflows
- Needs design token management or extraction
- Wants to work with design systems
- Asks about official skill suites (Anthropic, Vercel, Expo, Figma)

## Figma & Design-to-Code

| Skill | Best for |
|-------|----------|
| [`figma-official-skills`](../figma-official-skills/SKILL.md) | 7 official Figma skills: implement, generate, library, code-connect |
| [`openai-skills`](../openai-skills/SKILL.md) | OpenAI's 9 skills: Figma + frontend + slides + imagegen |
| [`google-stitch-skills`](../google-stitch-skills/SKILL.md) | 6 Stitch skills: design-md, react-components, shadcn, loop |
| [`extract-design-md`](../extract-design-md/SKILL.md) | Extract Stitch output into DESIGN.md format |
| [`claude2figma`](../claude2figma/SKILL.md) | 4 skills enforcing token compliance: colors/fonts/spacing → Figma variables |
| [`work-with-design-systems`](../work-with-design-systems/SKILL.md) | Inspect (WCAG audit) + Build (6-phase with variable bindings) dual-mode |
| [`figma-variables-tokens-generator`](../figma-variables-tokens-generator/SKILL.md) | Questionnaire → W3C token ZIP + Figma plugin for import |
| [`figma-skill`](../figma-skill/SKILL.md) | Figma API + Community resources → design tokens → 7 frameworks |
| [`extract-design-system`](../extract-design-system/SKILL.md) | Reverse-engineers tokens from any live website → tokens.json + tokens.css |
| [`design-tokens-skill`](../design-tokens-skill/SKILL.md) | W3C DTCG token spec: OKLCH, references/aliasing, Terrazzo, Figma exports |

## Official Platform Suites

| Skill | Best for |
|-------|----------|
| [`anthropics-skills`](../anthropics-skills/SKILL.md) | 6 Anthropic skills: frontend-design, artifacts, canvas, theme, brand, pptx |
| [`vercel-skills`](../vercel-skills/SKILL.md) | 4 Vercel skills: web-design-guidelines, components, React best practices |
| [`microsoft-skills`](../microsoft-skills/SKILL.md) | 2 Microsoft skills: design review, dark-theme React |
| [`software-mansion-skills`](../software-mansion-skills/SKILL.md) | Official Software Mansion: RN animations, gestures, SVG, on-device AI |
| [`callstack-agent-skills`](../callstack-agent-skills/SKILL.md) | Official Callstack: RN best practices, profiling, Turbo Modules, upgrade |
| [`expo-skills`](../expo-skills/SKILL.md) | Official Expo: Expo SDK, EAS Build/Submit, Expo Router |
