---
name: microsoft-skills
description: |
  Two official Microsoft frontend skills: frontend design review for distinctive,
  design-system-compliant interfaces, and dark-themed React with Tailwind and
  Framer Motion animations. Both target production-quality UI with strong visual identity.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 2 skills (`frontend-design-review`, `frontend-ui-dark-ts`); checking the first.
   - Global: `f=~/.agents/skills/frontend-design-review/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/frontend-design-review/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `frontend-design-review`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/microsoft-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add microsoft/skills --skill frontend-design-review -g -y
   npx skills add microsoft/skills/.github/plugins/azure-sdk-typescript/skills/frontend-ui-dark-ts -g -y
   ```

   **Project:**
   ```bash
   npx skills add microsoft/skills --skill frontend-design-review -y
   npx skills add microsoft/skills/.github/plugins/azure-sdk-typescript/skills/frontend-ui-dark-ts -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT (frontend-ui-dark-ts also bundles Segoe UI font files; check font licensing before redistributing)
<!-- das:install:end -->

## Invoke after install

- `frontend-design-review` — "frontend design review", "distinctive interface"
- `frontend-ui-dark-ts` — "dark theme UI", "dark React", "dark Tailwind"

## What it does

Microsoft's two frontend skills from the `microsoft/skills` repo, which is otherwise a large collection of Azure SDK skills (not catalogued here). `frontend-design-review` reviews and creates distinctive, production-grade interfaces against three quality pillars (PR reviews, design-system compliance, accessibility, responsive and theme checks). `frontend-ui-dark-ts` builds dark-themed React and TypeScript dashboards with Tailwind CSS, glassmorphism effects and Framer Motion animations.

## When NOT to use

- Backend, infrastructure or non-UI reviews (the review skill says so itself)
- A lighter, light-or-dark agnostic aesthetic system (use `frontend-design` or `anthropics-skills`)
