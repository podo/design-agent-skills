---
name: distinctive-frontend
description: |
  Generates distinctive interfaces using four themed design systems — Cyberpunk, Brutalist,
  Vaporwave, and Nordic Minimalism — with pre-configured typography pairings, color systems,
  and staggered animations. Single skill: distinctive-frontend.
triggers:
  - "distinctive frontend"
  - "cyberpunk UI"
  - "brutalist frontend"
  - "vaporwave design"
  - "nordic minimalism"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/Koomook/claude-frontend-skills"
  version: latest
  install: false
---

# distinctive-frontend

> Catalogue stub — full package: [Koomook/claude-frontend-skills](https://github.com/Koomook/claude-frontend-skills)

## Decision tree

1. **Is the package already installed?**
   Check: your agent's skills directory contains `distinctive-frontend` with content beyond this stub.
   - Yes → invoke `distinctive-frontend` and proceed
   - No → go to step 2

2. **Which agent are you on?**
   - Claude Code → `npm install -g @bong/claude-frontend-skills`
   - Cursor → `npm install -g @bong/claude-frontend-skills`
   - Other → `npm install -g @bong/claude-frontend-skills` or see [GitHub README](https://github.com/Koomook/claude-frontend-skills)

## Install command

```bash
npm install -g @bong/claude-frontend-skills
```

## Invoke after install

- Skill name: `distinctive-frontend`
- Trigger phrases: "distinctive frontend", "cyberpunk UI", "brutalist frontend", "vaporwave design", "nordic minimalism"

## What it does

Packages four fully-specified design systems in a single skill: Cyberpunk (neon-on-dark, tech typography, glitch effects), Brutalist (high-contrast, raw grid, bold sans), Vaporwave (pastel gradients, retro type, synthwave motion), and Nordic Minimalism (clean whitespace, muted palette, functional sans). Each theme ships with curated typography pairings, a complete color system, and pre-built staggered animation sequences. Choose a theme by name and the skill generates production-ready component code aligned to that aesthetic.

## When NOT to use

- When you need production-safe, conservative design (these themes are opinionated and experimental — not suitable for enterprise SaaS or regulated industries without significant adaptation)
- When you need to mix themes or create a hybrid aesthetic (each theme is self-contained and opinionated)
