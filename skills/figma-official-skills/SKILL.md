---
name: figma-official-skills
description: |
  Official Figma agent skills for design-to-code and code-to-design workflows with the
  Figma MCP server. Covers Figma Plugin API scripting (use_figma), implementing designs
  in code, generating designs and design system libraries, Code Connect component
  mapping, FigJam, Slides, motion, shaders, and SwiftUI.
triggers:
  - "Figma skill"
  - "figma-implement-design"
  - "figma-generate-design"
  - "Figma to code"
  - "code to Figma"
  - "figma-use"
  - "Figma Plugin API"
das:
  category: figma-code
  upstream: "https://github.com/figma/mcp-server-guide"
  version: latest
  install: false
---

# figma-official-skills

> Catalogue stub — full package: [figma/mcp-server-guide](https://github.com/figma/mcp-server-guide)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 16 skills (`figma-use`, `figma-design-to-code`, `figma-generate-design`, `figma-generate-library`, `figma-code-connect`, `figma-create-new-file`, `figma-generate-diagram`, `figma-use-figjam`, `figma-use-slides`, `figma-use-motion`, `figma-implement-motion`, `figma-swiftui`, `figma-code-workflows`, `figma-generative-plugins`, `figma-shaders`, `figma-spec`); checking the first.
   - Global: `f=~/.agents/skills/figma-use/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/figma-use/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `figma-use`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/figma-official-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add figma/mcp-server-guide --skill figma-use figma-design-to-code figma-generate-design figma-generate-library figma-code-connect figma-create-new-file figma-generate-diagram figma-use-figjam figma-use-slides figma-use-motion figma-implement-motion figma-swiftui figma-code-workflows figma-generative-plugins figma-shaders figma-spec -g -y
   ```

   **Project:**
   ```bash
   npx skills add figma/mcp-server-guide --skill figma-use figma-design-to-code figma-generate-design figma-generate-library figma-code-connect figma-create-new-file figma-generate-diagram figma-use-figjam figma-use-slides figma-use-motion figma-implement-motion figma-swiftui figma-code-workflows figma-generative-plugins figma-shaders figma-spec -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
claude plugin install figma@claude-plugins-official
```

**Heads-up**

- **Requires:** Figma account; the Figma MCP server (https://mcp.figma.com/mcp), which the Claude Code plugin sets up and the skills CLI does not; a Dev or Full seat on a paid Figma plan for normal use (Starter plan, View and Collab seats are limited to 6 MCP tool calls per month)
- **License:** no LICENSE file
<!-- das:install:end -->

## Invoke after install

| Skill | Invoke with |
|-------|-------------|
| `figma-use` | "run Figma Plugin API", "Figma script" |
| `figma-design-to-code` | "implement this Figma design", "Figma to code" |
| `figma-generate-design` | "generate Figma design", "code to Figma" |
| `figma-generate-library` | "build Figma library", "design system in Figma" |
| `figma-code-connect` | "code connect", "link Figma to code" |
| `figma-create-new-file` | "create Figma file", "new FigJam" |
| `figma-generate-diagram` | "diagram in FigJam" |
| `figma-use-figjam`, `figma-use-slides`, `figma-use-motion` | FigJam, Slides, and animation work through `use_figma` |
| `figma-implement-motion` | "implement this motion", "animate from Figma" |
| `figma-swiftui` | SwiftUI ↔ Figma in either direction |

Also installed: `figma-code-workflows`, `figma-generative-plugins`, `figma-shaders`, `figma-spec`.

## What it does

Official Figma skill suite covering the complete design ↔ code bridge. Converts Figma designs to production code, generates or updates Figma screens from code changes, builds design system libraries, connects Figma components to code components via Code Connect, scripts the Figma Plugin API for custom automation, and extends to FigJam, Slides, motion, shaders, and SwiftUI. Each skill is a required prerequisite before calling its matching Figma MCP tool.

These skills drive the Figma MCP server, so it must be connected too and you need a Figma account. In Claude Code the official plugin sets up the MCP server and the skills together; with the skills CLI you get only the skills and add the server yourself (`claude mcp add --transport http figma https://mcp.figma.com/mcp`).

## When NOT to use

- Design-token compliance on every Figma write against an existing design system — use `claude2figma`
- Token architecture outside Figma — use `design-tokens-skill`
- Static design-to-code without the Figma MCP server (the skills assume the server's tools)
