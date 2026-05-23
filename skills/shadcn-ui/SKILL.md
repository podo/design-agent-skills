---
name: shadcn-ui
description: |
  Project-aware shadcn/ui workflow for searching, adding, composing, and fixing
  components with correct patterns. Understands the local component registry
  and avoids common shadcn anti-patterns during implementation.
triggers:
  - "shadcn"
  - "shadcn/ui"
  - "shadcn component"
  - "ui component"
das:
  category: visual-components
  upstream: "https://github.com/shadcn-ui/ui"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# shadcn-ui

> Catalogue stub — full skill: [shadcn-ui/ui](https://github.com/shadcn-ui/ui)

## Decision tree

Run this before any shadcn/ui component work:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/shadcn-ui/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `shadcn-ui` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code prefix with `!` to run directly in the prompt

## Install command

```bash
npx skills add shadcn-ui/skills
```

Or per-agent:
- Claude Code: `claude skills add shadcn-ui/skills`
- Cursor/OpenCode: `npx skills add shadcn-ui/skills`

## Invoke after install

- Skill name: `shadcn-ui`
- Trigger phrases: "shadcn", "shadcn/ui", "shadcn component", "ui component"

## What it does

Provides a project-aware workflow for working with shadcn/ui — searching the available component registry, adding components with the correct CLI command, composing components correctly, and fixing common implementation mistakes. Ensures component usage follows shadcn/ui patterns and integrates cleanly with the existing project setup.
