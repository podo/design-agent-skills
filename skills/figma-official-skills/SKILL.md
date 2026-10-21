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

## Decision tree

Run this before any Figma ↔ code workflow:

1. **Is a Figma skill already installed?**
   Check: `~/.agents/skills/figma-use/SKILL.md` (global) or `.agents/skills/figma-use/SKILL.md` (project) exists (representative skill).
   - Yes → invoke the specific Figma skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

These skills drive the Figma MCP server, so it must be connected too. In Claude Code the official plugin installs the MCP server settings and the skills together:

```bash
claude plugin install figma@claude-plugins-official
```

With the skills CLI (any agent), install only what you need with `--skill` (add `-g` for global install):

```bash
# Foundations for the use_figma MCP tool (Plugin API scripting)
npx skills add figma/mcp-server-guide --skill figma-use -y

# Figma design to production code
npx skills add figma/mcp-server-guide --skill figma-design-to-code -y

# Build or update Figma screens from code or a description
npx skills add figma/mcp-server-guide --skill figma-generate-design -y

# Build a design system library in Figma from a codebase
npx skills add figma/mcp-server-guide --skill figma-generate-library -y

# Map Figma components to code (Code Connect)
npx skills add figma/mcp-server-guide --skill figma-code-connect -y

# Create a blank Figma, FigJam, or Slides file
npx skills add figma/mcp-server-guide --skill figma-create-new-file -y

# Or everything in the package
npx skills add figma/mcp-server-guide -y
```

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

Also in the package: `figma-code-workflows`, `figma-generative-plugins`, `figma-shaders`, `figma-spec`.

## What it does

Official Figma skill suite covering the complete design ↔ code bridge. Converts Figma designs to production code, generates or updates Figma screens from code changes, builds design system libraries, connects Figma components to code components via Code Connect, scripts the Figma Plugin API for custom automation, and extends to FigJam, Slides, motion, shaders, and SwiftUI. Each skill is a required prerequisite before calling its matching Figma MCP tool.
