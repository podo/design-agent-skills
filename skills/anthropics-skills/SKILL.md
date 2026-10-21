---
name: anthropics-skills
description: |
  Official Anthropic skills for frontend design, artifact creation, and presentation.
  Covers UI/UX development tools, complex HTML artifacts, visual art in PNG/PDF,
  professional theme application, Anthropic brand guidelines, and PowerPoint creation.
triggers:
  - "Anthropic skill"
  - "Anthropic frontend design"
  - "web artifacts"
  - "canvas design"
  - "theme factory"
  - "brand guidelines"
  - "pptx Anthropic"
das:
  type: package
  category: official-suites
  upstream: "https://github.com/anthropics/skills"
  version: latest
  install: false
---

# anthropics-skills

> Catalogue stub — full package: [anthropics/skills](https://github.com/anthropics/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 6 skills (`frontend-design`, `web-artifacts-builder`, `canvas-design`, `theme-factory`, `brand-guidelines`, `pptx`); checking the first.
   - Global: `f=~/.agents/skills/frontend-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/frontend-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `frontend-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/anthropics-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add anthropics/skills --skill frontend-design web-artifacts-builder canvas-design theme-factory brand-guidelines pptx -g -y
   ```

   **Project:**
   ```bash
   npx skills add anthropics/skills --skill frontend-design web-artifacts-builder canvas-design theme-factory brand-guidelines pptx -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
/plugin install document-skills@anthropic-agent-skills
```

**Heads-up**

- **License:** Apache-2.0 for frontend-design, web-artifacts-builder, canvas-design, theme-factory and brand-guidelines; pptx is proprietary (Anthropic, all rights reserved, per its LICENSE.txt); the repo has no root LICENSE
- **Name collision:** `frontend-design` is also written by `frontend-design` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- `frontend-design` — "frontend design", "UI/UX development"
- `web-artifacts-builder` — "web artifact", "React artifact", "build HTML artifact"
- `canvas-design` — "canvas design", "PNG art", "visual art"
- `theme-factory` — "theme artifact", "professional theme", "style artifact"
- `brand-guidelines` — "brand colors", "brand typography", "apply brand"
- `pptx` — "PowerPoint", "create PPTX", "presentation"

## What it does

Anthropic's official skill suite covering design-adjacent workflows: production-quality frontend design guidance, complex multi-component HTML artifact construction with React/Tailwind/shadcn, visual art creation, theme systems, Anthropic's own brand colors and typography, and PowerPoint generation. The `pptx` skill is proprietary (Anthropic, all rights reserved); the other five are Apache-2.0.

## When NOT to use

- Applying a different company's brand — `brand-guidelines` applies Anthropic's brand; use `brand-design-md` for well-known brands
- A different take on the same job as `frontend-design` — the catalogue also has a `frontend-design` stub from another author that writes to the same install directory; pick one
- Every other skill in the repo (docx, xlsx, pdf, claude-api, mcp-builder, ...) — this pointer installs only the six listed; add more by passing their names to `--skill`
