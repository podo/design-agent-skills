---
name: design-html
description: |
  Finalize a design as production-ready HTML/CSS. Garry Tan's gstack
  design-html skill generates Pretext-native HTML/CSS (computed text layout,
  so text reflows and heights adjust on resize) from an approved mockup, a
  plan, or a freeform brief.
triggers:
  - "design html"
  - "design to HTML"
  - "implement design"
  - "mockup to code"
  - "HTML from design"
  - "production HTML"
das:
  category: figma-code
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-html/SKILL.md"
  version: latest
  install: false
---

# design-html

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-html`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - `f=~/.claude/skills/gstack/design-html/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill. `./setup` needs Bun, builds binaries, downloads Chromium and registers a Stop hook in your Claude settings; ask the user before running it.

   ```bash
   git clone --single-branch --depth=1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
   cd ~/.claude/skills/gstack && ./setup
   ```

**Heads-up**

- **Requires:** Bun; Claude Code
- **License:** MIT
- **Large download (~185 MB):** the skills CLI gives up cloning after 300 s; if it times out, retry with `SKILLS_CLONE_TIMEOUT_MS=900000`.
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-html` (upstream's own phrases: "build the design", "code the mockup", "make design real")
- Trigger phrases: "design html", "design to HTML", "implement design", "mockup to code"
- It works best after gstack's `/design-shotgun` has produced an approved mockup; it can also work from a plan or a freeform brief
- Lighter, degraded alternative (instructions only, without gstack's `bin/` helpers): `npx skills add garrytan/gstack --full-depth --skill design-html`

## What it does

Part of Garry Tan's gstack: turns an approved design into finalized, production-quality HTML/CSS. Its engine is Pretext, so text layout is computed rather than approximated and text reflows on resize. It detects its input (an approved mockup from `/design-shotgun`, a plan, a freeform brief, or an earlier output to evolve), analyses the design, generates the HTML (vanilla or for the detected framework), runs a live-preview refinement loop with verification screenshots, and extracts design tokens at the end. Figma is not a documented input, and the skill relies on gstack's shared tooling and workflow.

## When NOT to use

- A Figma file or spec is the source of truth → use `figma-official-skills`
- You are still defining the visual language and design system → use `design-consultation`
- You want a design review of a plan or live UI before building → use `plan-design-review` or `design-review-garrytan`
