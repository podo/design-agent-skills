---
name: bencium-ux-designer
description: |
  Produces distinctive, production-grade frontend interfaces with high design
  quality and a strong point of view. Actively avoids generic AI-generated
  aesthetics in favour of considered, original UI decisions.
triggers:
  - "innovative UX"
  - "bencium"
  - "distinctive UI"
  - "production frontend"
das:
  category: interaction-polish
  upstream: "https://github.com/bencium/bencium-innovative-ux-designer"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# bencium-ux-designer

> Catalogue stub — full skill: [bencium/bencium-innovative-ux-designer](https://github.com/bencium/bencium-innovative-ux-designer)

## Decision tree

Run this before any frontend interface work requiring distinctive design quality:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/bencium-ux-designer/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `bencium-ux-designer` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add bencium/bencium-innovative-ux-designer
```

Or per-agent:
- Claude Code: `claude skills add bencium/bencium-innovative-ux-designer`
- Cursor/OpenCode: `npx skills add bencium/bencium-innovative-ux-designer`

## Invoke after install

- Skill name: `bencium-ux-designer`
- Trigger phrases: "innovative UX", "bencium", "distinctive UI", "production frontend"

## What it does

Guides the creation of distinctive, production-ready frontend interfaces that avoid the bland patterns common in AI-generated UI. Applies principled design decisions around layout, typography, spacing, and interaction to deliver original interfaces ready for real products.
