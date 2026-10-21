---
name: awesome-design-skills
description: |
  Registry of visual aesthetic and style skills for Claude Code, Cursor, Codex, and other agents.
  Each style is its own skill shipping SKILL.md + DESIGN.md (tokens, components, accessibility,
  tone, quality gates) for an aesthetic such as glassmorphism, brutalism, claymorphism,
  neumorphism, editorial, bento, retro, or riso. The catalogue installs a few popular styles;
  any other style can be added by name.
triggers:
  - "awesome-design-skills"
  - "design aesthetic skill"
  - "glassmorphism skill"
  - "brutalism skill"
  - "claymorphism skill"
  - "neumorphism skill"
  - "visual style skill"
  - "typeui"
das:
  type: package
  category: visual-components
  upstream: "https://github.com/bergside/awesome-design-skills"
  version: latest
---

# awesome-design-skills

> Catalogue stub — full registry: [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 6 skills (`glassmorphism`, `brutalism`, `claymorphism`, `neumorphism`, `editorial`, `bento`); checking the first.
   - Global: `f=~/.agents/skills/glassmorphism/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/glassmorphism/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `glassmorphism`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/awesome-design-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add bergside/awesome-design-skills --skill glassmorphism brutalism claymorphism neumorphism editorial bento -g -y
   ```

   **Project:**
   ```bash
   npx skills add bergside/awesome-design-skills --skill glassmorphism brutalism claymorphism neumorphism editorial bento -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill names: `glassmorphism`, `brutalism`, `claymorphism`, `neumorphism`, `editorial`, `bento`
- Trigger phrases: "glassmorphism skill", "brutalism skill", "claymorphism skill", "neumorphism skill", "visual style skill"

## What it does

Each skill in the registry is one visual style and includes:
- **SKILL.md** — agent instructions: token palette, component rules, accessibility constraints, quality gates
- **DESIGN.md** — human-readable rationale: brand mission, style foundations, do/don't patterns

The agent reads both files to apply the aesthetic consistently across any UI task: colors, typography, spacing, shadows, motion, tone of voice.

The command above installs six popular styles. The repo has many more, one folder per style (for example `retro`, `riso`, `neon`, `minimal`, `cosmic`, `dithered`, `vintage`): install another by running the same command with that folder name after `--skill`, for example `--skill retro`. Install by name only; a bare `npx skills add bergside/awesome-design-skills` pulls the whole registry, and a few style names (`matrix`, `pulse`, `codex`, `shadcn`, `storytelling`) are also directory names used by unrelated skills. Upstream also ships its own CLI for the same registry (`npx typeui.sh list`, `npx typeui.sh pull retro`), which this catalogue has not verified.

## When NOT to use

- Functional design tooling (Figma, tokens, accessibility audits) — use the relevant tool skill
- Brand-specific tokens for a real product — use `design-tokens-skill` or author your own DESIGN.md
- Material Design 3 / platform HIG — use `material-3-skill` or `platform-design-skills`
