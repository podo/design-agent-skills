---
name: design-consultation
description: |
  Build a complete design system from scratch. Garry Tan's design consultation
  skill: systematic approach to establishing visual language, component library,
  spacing scale, and design tokens from first principles.
triggers:
  - "design consultation"
  - "design system from scratch"
  - "build design system"
  - "design language"
  - "visual language"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-consultation/SKILL.md"
  version: latest
  install: false
---

# design-consultation

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-consultation`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/gstack/design-consultation/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Install** (the skills CLI cannot install this one):

   This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill (`--skill design-consultation` fails because the CLI only sees gstack's root router, and even with `--full-depth` the copied instructions lack the tooling). `./setup` needs Bun, builds binaries, downloads Chromium and registers a Stop hook in your Claude settings (opt out with `./setup --no-timeline-stop-hook`); ask the user before running it. Upstream's README also tells agents to add a gstack section to CLAUDE.md after setup.

   ```bash
   git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
   cd ~/.claude/skills/gstack && ./setup
   ```

**Heads-up**

- **Requires:** Bun (setup refuses versions older than 1.3.3; upstream tests 1.4.2+), Git and Claude Code
- **License:** MIT
- **Download size:** ~98 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-consultation`
- Trigger phrases: "design consultation", "design system from scratch", "build design system"

## What it does

Garry Tan's (Y Combinator president) approach to building a complete design system from scratch. Establishes visual language, spacing scale, typography system, color tokens, and component library through a structured consultation process. Opinionated, systematic, and practical for early-stage products.
