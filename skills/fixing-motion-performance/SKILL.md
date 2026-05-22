---
name: fixing-motion-performance
description: |
  Audits and fixes animation performance issues including layout thrashing,
  compositor properties, scroll-linked motion, and blur effects. Guides
  developers to smooth, GPU-accelerated animations that avoid jank.
triggers:
  - "motion performance"
  - "animation performance"
  - "layout thrashing"
  - "compositor properties"
das:
  category: motion-animation
  upstream: "https://github.com/ibelick/fixing-motion-performance"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# fixing-motion-performance

> Catalogue stub — full skill: [ibelick/fixing-motion-performance](https://github.com/ibelick/fixing-motion-performance)

## Decision tree

Run this before any motion performance audit:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/fixing-motion-performance/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `fixing-motion-performance` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
npx skills add ibelick/fixing-motion-performance
```

Or per-agent:
- Claude Code: `claude skills add ibelick/fixing-motion-performance`
- Cursor/OpenCode: `npx skills add ibelick/fixing-motion-performance`

## Invoke after install

- Skill name: `fixing-motion-performance`
- Trigger phrases: "motion performance", "animation performance", "layout thrashing", "compositor properties"

## What it does

Audits animations for layout thrashing, incorrect compositor property usage, scroll-linked motion anti-patterns, and expensive blur effects. Provides concrete fixes to move animations onto the GPU and eliminate frame drops for smooth, production-grade motion.
