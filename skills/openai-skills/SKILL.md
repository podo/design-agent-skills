---
name: openai-skills
description: |
  Official OpenAI skills relevant to design work: image generation and editing,
  desktop screenshot capture, and Figma skills for design implementation, Code Connect
  component mapping, and design system rules. Part of a larger curated OpenAI skills repo.
triggers:
  - "OpenAI skill"
  - "openai imagegen"
  - "openai figma"
das:
  category: official-suites
  upstream: "https://github.com/openai/skills"
  version: latest
  install: false
---

# openai-skills

> Catalogue stub — full package: [openai/skills](https://github.com/openai/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 5 skills (`imagegen`, `screenshot`, `figma-implement-design`, `figma-code-connect-components`, `figma-create-design-system-rules`); checking the first.
   - Global: `f=~/.agents/skills/imagegen/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/imagegen/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `imagegen`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/openai-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add openai/skills --skill imagegen screenshot figma-implement-design figma-code-connect-components figma-create-design-system-rules -g -y
   ```

   **Project:**
   ```bash
   npx skills add openai/skills --skill imagegen screenshot figma-implement-design figma-code-connect-components figma-create-design-system-rules -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** imagegen: Codex's built-in image_gen tool by default; elsewhere only the explicit CLI fallback works and it needs OPENAI_API_KEY; the Figma skills: Figma account and the Figma MCP server
- **License:** no repo-level LICENSE file; imagegen and screenshot carry Apache-2.0 license files, each skill ships its own
<!-- das:install:end -->

## Invoke after install

- `imagegen` — "generate image", "edit image", "OpenAI image"
- `screenshot` — "take a screenshot", "capture the screen"
- `figma-implement-design` — "implement this Figma design", Figma URLs to production code
- `figma-code-connect-components` — "code connect", "map this component to code"
- `figma-create-design-system-rules` — "create design system rules", project-specific Figma-to-code conventions

## What it does

OpenAI's official curated skill collection. The design-relevant parts are image creation and editing (`imagegen`), OS-level screenshot capture (`screenshot`), and Figma skills that work with the Figma MCP server. The repo also holds many non-design skills (deployment, security, notebooks, docs) that are not catalogued here.

`imagegen` is written for Codex: its default path uses Codex's built-in `image_gen` tool, which other agents do not have. Outside Codex it falls back to a bundled CLI that needs `OPENAI_API_KEY`, and only when you explicitly ask for it.

For the full Figma suite, including `figma-use`, `figma-generate-design` and `figma-generate-library`, use `figma-official-skills`: OpenAI ships skills with those names too, which would overwrite the Figma ones, so this pointer leaves them out.

## When NOT to use

- The complete official Figma workflow (Plugin API scripting, library generation, FigJam, Slides) — use `figma-official-skills`
- Vector or code-native assets such as SVG icons and logos — use `logo-designer-skill` or draw them in SVG/HTML directly
