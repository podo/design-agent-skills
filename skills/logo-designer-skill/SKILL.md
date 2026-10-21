---
name: logo-designer-skill
description: |
  Conducts a brand interview, proposes 3-5 distinct SVG logo concepts, refines the chosen
  direction, and exports PNGs at 16px-2048px. Requires resvg, Inkscape, or librsvg for
  PNG export.
triggers:
  - "logo design"
  - "SVG logo"
  - "brand mark"
  - "logo concepts"
  - "logo-designer"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/neonwatty/logo-designer-skill"
  upstream_path: "skills/logo-designer/SKILL.md"
  version: latest
  install: true
---

# logo-designer-skill

> Catalogue stub — full skill: [neonwatty/logo-designer-skill](https://github.com/neonwatty/logo-designer-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `logo-designer`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/logo-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/logo-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `logo-designer`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/logo-designer-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add neonwatty/logo-designer-skill --skill logo-designer -g -y
   ```

   **Project:**
   ```bash
   npx skills add neonwatty/logo-designer-skill --skill logo-designer -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** an SVG-to-PNG converter for PNG export (resvg, Inkscape, or librsvg)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `logo-designer`
- Trigger phrases: "logo design", "SVG logo", "brand mark", "logo concepts", "logo-designer"

## What it does

Runs a structured brand interview to capture values, audience, and visual direction before generating 3-5 distinct SVG logo concepts. After the user selects a direction, iterates through refinement rounds to tighten proportions, weight, and scalability. Exports final SVGs and PNGs across the full size spectrum from 16px favicon to 2048px high-res. PNG export requires one of resvg, Inkscape, or librsvg to be available in the environment.

## When NOT to use

- Full brand system design including color, type, and spacing guidelines (use `brand-design-md` to apply an existing brand's tokens)
- When PNG export tools (resvg, Inkscape, librsvg) are not available and raster output is required
- When the deliverable is a complete marketing or product UI rather than a standalone mark
