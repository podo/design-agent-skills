---
name: microsoft-skills
description: |
  2 official Microsoft skills: frontend design review for distinctive interfaces,
  and dark-themed React with Tailwind and animations. Both target production-quality
  UI with strong visual identity.
triggers:
  - "Microsoft skill"
  - "frontend design review"
  - "dark theme React"
  - "frontend UI dark"
das:
  category: official-suites
  upstream: "https://github.com/microsoft/skills"
  version: latest
  install: false
---

# microsoft-skills

> Catalogue stub — full package: [microsoft/skills](https://github.com/microsoft/skills)

## Decision tree

1. **Is a Microsoft skill already installed?**
   Check: `~/.design-agent-skills/skills/frontend-design-review/SKILL.md` exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code prefix with `!` to run directly in the prompt

## Install command

```bash
# Review and create distinctive interfaces
npx skills add microsoft/frontend-design-review

# Dark-themed React with Tailwind and animations
npx skills add microsoft/frontend-ui-dark-ts
```

## Invoke after install

- `frontend-design-review` — "frontend design review", "distinctive interface"
- `frontend-ui-dark-ts` — "dark theme UI", "dark React", "dark Tailwind"

## What it does

Microsoft's two official frontend skills: one for reviewing and producing distinctive, non-generic interfaces; one for building dark-themed React/TypeScript UIs with Tailwind and animations. Both enforce strong visual identity over default aesthetics.
