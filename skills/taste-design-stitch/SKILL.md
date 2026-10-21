---
name: taste-design-stitch
description: |
  Generates agent-friendly DESIGN.md files for Google Stitch that enforce premium, anti-generic
  UI standards: strict typography, calibrated color, asymmetric layouts, and perpetual micro-motion.
  The DESIGN.md then steers Stitch's screen generation away from generic AI defaults.
triggers:
  - "taste design"
  - "stitch taste"
  - "design taste stitch"
  - "improve stitch UI"
  - "stitch aesthetics"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/google-labs-code/stitch-skills"
  upstream_path: "plugins/stitch-utilities/skills/taste-design/SKILL.md"
  version: latest
  install: true
---

# taste-design-stitch

> Catalogue stub — full skill: [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/taste-design/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `taste-design`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/taste-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/taste-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `taste-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/taste-design-stitch ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add google-labs-code/stitch-skills --skill taste-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add google-labs-code/stitch-skills --skill taste-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** access to Google Stitch (stitch.withgoogle.com), where the generated DESIGN.md is used; the Stitch MCP server is optional, for programmatic use (the skill's allowed-tools lists StitchMCP)
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `taste-design`
- Trigger phrases: "taste design", "stitch taste", "improve stitch UI", "stitch aesthetics"

## What it does

A semantic design-system skill for Google Stitch. It writes a `DESIGN.md` that encodes visual atmosphere, color calibration, typographic architecture, component behaviors, layout principles, motion philosophy and an explicit list of banned AI design cliches, in the descriptive language Stitch's agent interprets. Use that file as the single source of truth when prompting Stitch for new screens, so the output feels crafted rather than computed. Part of Google Labs' official Stitch skills.

## When NOT to use

- Extracting a DESIGN.md from existing code (use `extract-design-md`)
- The wider Stitch skill set: design generation, React and shadcn builds (use `google-stitch-skills`)
- Taste guidance for a coding agent that is not driving Stitch (use `taste-skill`)
