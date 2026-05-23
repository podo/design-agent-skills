---
name: interface-design-dammyjay
description: |
  Specialised for dashboards, admin panels, and SaaS applications where
  information density is high. Applies craft and consistency principles to
  produce interfaces that are both functional and visually coherent.
triggers:
  - "interface design"
  - "dashboard design"
  - "admin panel"
  - "SaaS interface"
  - "dense UI"
das:
  category: interaction-polish
  upstream: "https://github.com/Dammyjay93/interface-design"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# interface-design-dammyjay

> Catalogue stub — full skill: [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design)

## Decision tree

Run this before designing dashboards or admin interfaces:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/interface-design-dammyjay/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `interface-design-dammyjay` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` (add `-g` to install globally across all projects)

## Install command

```bash
npx skills add Dammyjay93/interface-design
```

Or per-agent:
- Claude Code: `claude skills add Dammyjay93/interface-design`
- Cursor/OpenCode: `npx skills add Dammyjay93/interface-design`

## Invoke after install

- Skill name: `interface-design-dammyjay`
- Trigger phrases: "interface design", "dashboard design", "admin panel", "SaaS interface", "dense UI"

## What it does

Specialises in crafting dashboards, admin panels, and SaaS interfaces where large amounts of information must be presented clearly. Applies consistency systems and craft principles to ensure information-dense layouts remain usable, scannable, and visually polished.
