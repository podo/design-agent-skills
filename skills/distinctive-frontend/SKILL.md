---
name: distinctive-frontend
description: |
  Generates distinctive interfaces that avoid generic AI aesthetics, using extreme
  typography, cohesive themes (Cyberpunk, Brutalist, Vaporwave, Nordic Minimalism),
  orchestrated staggered animations, and layered backgrounds. Originally published
  as Koomook/claude-frontend-skills; installed from a verbatim mirror.
triggers:
  - "distinctive frontend"
  - "cyberpunk UI"
  - "brutalist frontend"
  - "vaporwave design"
  - "nordic minimalism"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Zambudio/buenchollo-app"
  upstream_path: ".agents/skills/distinctive-frontend/SKILL.md"
  version: latest
  install: false
---

# distinctive-frontend

> Catalogue stub — full skill: [Zambudio/buenchollo-app](https://github.com/Zambudio/buenchollo-app) (mirror of [Koomook/claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills))

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/distinctive-frontend/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/distinctive-frontend/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `distinctive-frontend`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/distinctive-frontend ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Zambudio/buenchollo-app --skill distinctive-frontend -g -y
   ```

   **Project:**
   ```bash
   npx skills add Zambudio/buenchollo-app --skill distinctive-frontend -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT (original Koomook/claude-frontend-skills); the mirror repo has no LICENSE file
<!-- das:install:end -->

## Invoke after install

- Skill name: `distinctive-frontend`
- Trigger phrases: "distinctive frontend", "cyberpunk UI", "brutalist frontend", "vaporwave design", "nordic minimalism"

## What it does

A four-vector approach to frontend design that steers away from "AI slop" defaults (Inter or Roboto everywhere, purple gradients, flat backgrounds, no motion): typography at weight extremes with distinctive font pairings, cohesive color systems drawn from cultural references (Cyberpunk, Brutalist, Vaporwave, Nordic Minimalism), orchestrated page-load animation with staggered reveals, and layered backgrounds (gradient meshes, noise, grid patterns). It includes CSS custom-property systems, HTML/CSS quick-start templates, React and Framer Motion examples, and an anti-pattern checklist. Choose a theme by name and the skill generates component code aligned to that aesthetic.

The original repo publishes this only as a loose markdown file with no SKILL.md, which the skills CLI cannot install (its npm package does not exist either), so this pointer installs a verbatim copy from a mirror repo.

## When NOT to use

- When you need production-safe, conservative design (these themes are opinionated and experimental — not suitable for enterprise SaaS or regulated industries without significant adaptation)
- When you need to mix themes or create a hybrid aesthetic (each theme is self-contained and opinionated)
- Anthropic's own frontend design guidance → use `frontend-design` or `anthropics-skills`
