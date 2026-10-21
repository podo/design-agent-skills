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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 5 skills (`web-design-guidelines`, `writing-guidelines`, `vercel-react-best-practices`, `vercel-composition-patterns`, `vercel-react-view-transitions`); checking the first.
   - Global: `f=~/.agents/skills/web-design-guidelines/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/web-design-guidelines/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `web-design-guidelines`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/vercel-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add vercel-labs/agent-skills --skill web-design-guidelines writing-guidelines vercel-react-best-practices vercel-composition-patterns vercel-react-view-transitions -g -y
   ```

   **Project:**
   ```bash
   npx skills add vercel-labs/agent-skills --skill web-design-guidelines writing-guidelines vercel-react-best-practices vercel-composition-patterns vercel-react-view-transitions -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Network access at use time: web-design-guidelines and writing-guidelines are thin skills that fetch their current rules from vercel-labs/web-interface-guidelines and vercel-labs/writing-guidelines on GitHub before each review
- **License:** no LICENSE file in the repository
- **Name collision:** `web-design-guidelines` is also written by `platform-design-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- `web-design-guidelines` — "web design guidelines", "UI review"
- `writing-guidelines` — "review my docs", "writing style audit"
- `vercel-react-best-practices` — "React performance", "Next.js optimization"
- `vercel-composition-patterns` — "composition patterns", "reusable React patterns"
- `vercel-react-view-transitions` — "React view transitions", "page transition animation"

## What it does

Vercel's official skill collection, narrowed to the design-relevant five: reviews UI code against the Web Interface Guidelines, reviews prose against the Writing Guidelines (both fetch their current rules from GitHub at use time), optimizes React/Next.js performance, establishes reusable component composition patterns, and guides smooth native-feeling transitions with the React View Transition API. The repo also holds Vercel deployment, CLI, optimization and React Native skills that are not catalogued here.

For accessible, composable component authoring, see `building-components` (a separate Vercel repo).

## When NOT to use

- Review of platform-specific Apple or Android UI guidelines — use `platform-design-skills` (note it also installs a different skill named `web-design-guidelines`, so installing both overwrites one)
- Component library setup rather than review — use `shadcn-ui`
