---
name: brand-design-md
description: |
  Looks up the design spec (a DESIGN.md of colors, type weights, letter-spacing, radii,
  shadows) for well-known brands such as Stripe, Linear, Apple, Figma, Notion and Nike
  from getdesign.md at runtime, then applies it to your project. The installed skill is
  written in Chinese but accepts English brand names.
triggers:
  - "brand tokens"
  - "brand design"
  - "match Stripe design"
  - "62 brands"
  - "brand-design-md"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/SpaceZephyr/brand-design-md"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# brand-design-md

> Catalogue stub — full skill: [SpaceZephyr/brand-design-md](https://github.com/SpaceZephyr/brand-design-md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/brand-design-md/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/brand-design-md/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `brand-design-md`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/brand-design-md ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add SpaceZephyr/brand-design-md --skill brand-design-md -g -y
   ```

   **Project:**
   ```bash
   npx skills add SpaceZephyr/brand-design-md --skill brand-design-md -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js and network access at use time (the skill runs `npx getdesign@latest add <brand>`, which downloads and executes an unpinned third-party npm package)
- **License:** no LICENSE file
<!-- das:install:end -->

## Invoke after install

- Skill name: `brand-design-md`
- Trigger phrases: "brand tokens", "brand design", "match Stripe design", "62 brands", "brand-design-md"

## What it does

Maps a brand name (Chinese or English, e.g. "做成 Stripe 的感觉", "make it feel like Linear") to a slug in its brand registry, runs `npx getdesign@latest add <slug>` in a temp directory to fetch that brand's `DESIGN.md` from getdesign.md, and then generates UI code that follows the exact values in it (colors, type scale, spacing, border-radius, shadows). It can blend several brands ("Notion colors + Linear typography"). Useful for demos, pitch material or brand-matched prototypes without manual research.

Two things to know before using it: the skill's own instructions are written in Chinese, and it executes an unpinned third-party npm package (`getdesign@latest`) at use time, so it needs Node.js and network access.

## When NOT to use

- When you need to develop a custom brand identity from scratch (this skill matches existing brands, not creates new ones)
- When none of the registry brands match your target (use `design-consultation` to build a bespoke system)
- When brand token accuracy is legally or contractually sensitive (always verify tokens against official brand guidelines)
- When running an unpinned `npx` package at use time is not acceptable in your environment
