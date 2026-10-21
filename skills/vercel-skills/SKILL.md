---
name: vercel-skills
description: |
  Official Vercel agent skills for UI review and React work: Web Interface Guidelines
  compliance review, writing guidelines review, React/Next.js performance, component
  composition patterns, and React View Transitions. Lives in the vercel-labs/agent-skills collection.
triggers:
  - "Vercel skill"
  - "web design guidelines"
  - "React best practices"
  - "composition patterns"
  - "Web Interface Guidelines"
  - "React view transitions"
das:
  category: official-suites
  upstream: "https://github.com/vercel-labs/agent-skills"
  version: latest
  install: false
---

# vercel-skills

> Catalogue stub — full package: [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)

## Decision tree

Run this before using Vercel skill workflows:

1. **Is a Vercel skill already installed?**
   Check: `~/.agents/skills/web-design-guidelines/SKILL.md` (global) or `.agents/skills/web-design-guidelines/SKILL.md` (project) exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

All skills live in the single `vercel-labs/agent-skills` repo; pick one with `--skill` (add `-g` for global install):

```bash
# Review UI code against the Web Interface Guidelines
npx skills add vercel-labs/agent-skills --skill web-design-guidelines -y

# Review docs and prose against the Writing Guidelines
npx skills add vercel-labs/agent-skills --skill writing-guidelines -y

# React/Next.js performance optimization
npx skills add vercel-labs/agent-skills --skill vercel-react-best-practices -y

# React component composition and reusable patterns
npx skills add vercel-labs/agent-skills --skill vercel-composition-patterns -y

# Native-feeling animations with React's View Transition API
npx skills add vercel-labs/agent-skills --skill vercel-react-view-transitions -y
```

For accessible, composable component authoring, see `building-components` (a separate Vercel repo).

## Invoke after install

- `web-design-guidelines` — "web design guidelines", "UI review"
- `writing-guidelines` — "review my docs", "writing style audit"
- `vercel-react-best-practices` — "React performance", "Next.js optimization"
- `vercel-composition-patterns` — "composition patterns", "reusable React patterns"
- `vercel-react-view-transitions` — "React view transitions", "page transition animation"

## What it does

Vercel's official skill collection: reviews UI code against the Web Interface Guidelines, reviews prose against the Writing Guidelines, optimizes React/Next.js performance, establishes reusable component composition patterns, and guides smooth native-feeling transitions with the React View Transition API. The repo also holds Vercel deployment and CLI skills that are not catalogued here.
