---
name: extract-design-md
description: |
  Reverse-engineer a Stitch-compatible DESIGN.md design system from existing frontend source
  code. Analyzes component files, stylesheets, Tailwind configs, theme definitions, and design
  tokens in React, Vue, Svelte, Angular, or plain HTML/CSS, and writes a structured document that
  can be version-controlled, shared with the team, and used to keep future UI consistent.
triggers:
  - "extract design md"
  - "design system from source code"
  - "reverse engineer design system"
  - "DESIGN.md"
das:
  type: skill
  category: figma-code
  upstream: "https://github.com/google-labs-code/stitch-skills"
  upstream_path: "plugins/stitch-design/skills/extract-design-md/SKILL.md"
  version: latest
  install: true
---

# extract-design-md

> Catalogue stub — full skill: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/extract-design-md/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `stitch-extract-design-md`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/stitch-extract-design-md/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/stitch-extract-design-md/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `stitch-extract-design-md`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/extract-design-md ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch::extract-design-md -g -y
   ```

   **Project:**
   ```bash
   npx skills add google-labs-code/stitch-skills --skill stitch::extract-design-md -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Optional Stitch MCP server, only to push the resulting DESIGN.md into a Stitch project (the extraction itself reads source files only)
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `stitch-extract-design-md` (the upstream name is `stitch::extract-design-md`; the CLI installs it under the sanitised directory name)
- Trigger phrases: "extract design md", "design system from source code", "reverse engineer design system", "DESIGN.md"

## What it does

Reads a frontend codebase and extracts its design system into a `DESIGN.md` file in the format Google Stitch uses: colors, typography, spacing, component patterns, and layout principles, plus notes for Stitch generation. It works from source files only (stylesheets, component files, Tailwind and theme configs, CSS-in-JS), so it needs no build, no running app, and no Stitch connection. Typical uses: auditing the visual language of a repo, reconciling inconsistent styles, or migrating a project's identity into Stitch. The direction is code to DESIGN.md, not Stitch output to DESIGN.md. Part of Google Labs' official Stitch skills.

## When NOT to use

- You have a rendered Stitch project and want its DESIGN.md — use the `design-md` skill from `google-stitch-skills` instead
- You want design tokens (JSON/CSS) pulled from a live website rather than a DESIGN.md from source — use `extract-design-system`
- You only want a DESIGN.md for a well-known brand — use `brand-design-md`
