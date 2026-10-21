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
  upstream_path: "skills/shadcn/SKILL.md"
  version: latest
  install: true
---

# shadcn-ui

> Catalogue stub — full skill: [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (`skills/shadcn`)

## Decision tree

Run this before any shadcn/ui component work:

1. **Is the full skill already installed?**
   The upstream skill is named `shadcn` and installs next to this pointer. Check: `~/.agents/skills/shadcn/SKILL.md` (global) or `.agents/skills/shadcn/SKILL.md` (project) exists.
   - Yes → invoke `shadcn` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add shadcn-ui/ui --skill shadcn -y    # add -g for global install
```

The same repo also ships `migrate-radix-to-base` for moving components from Radix to Base UI:

```bash
npx skills add shadcn-ui/ui --skill migrate-radix-to-base -y
```

## Invoke after install

- Skill name: `shadcn`
- Trigger phrases: "shadcn", "shadcn/ui", "shadcn component", "ui component"

## What it does

Provides a project-aware workflow for working with shadcn/ui — searching the available component registry, adding components with the correct CLI command, composing components correctly, and fixing common implementation mistakes. Ensures component usage follows shadcn/ui patterns and integrates cleanly with the existing project setup.
