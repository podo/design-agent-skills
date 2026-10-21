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
   Check: `~/.agents/skills/frontend-design-review/SKILL.md` (global) or `.agents/skills/frontend-design-review/SKILL.md` (project) exists.
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

`microsoft/skills` is a large repo, so install just these two (add `-g` for global install):

```bash
# Review and create distinctive interfaces
npx skills add microsoft/skills --skill frontend-design-review -y

# Dark-themed React with Tailwind and animations (nested under a plugin path, so use the full path)
npx skills add microsoft/skills/.github/plugins/azure-sdk-typescript/skills/frontend-ui-dark-ts -y
```

## Invoke after install

- `frontend-design-review` — "frontend design review", "distinctive interface"
- `frontend-ui-dark-ts` — "dark theme UI", "dark React", "dark Tailwind"

## What it does

Microsoft's two official frontend skills: one for reviewing and producing distinctive, non-generic interfaces; one for building dark-themed React/TypeScript UIs with Tailwind and animations. Both enforce strong visual identity over default aesthetics.
