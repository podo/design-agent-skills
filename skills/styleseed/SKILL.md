---
name: styleseed
description: |
  Design method engine that teaches agents design judgment, not just data. One
  entry-point skill routes to internal workflows for setup, build, review, scoring,
  rendered verification, tokens, motion, accessibility, copy and updates. Compiles
  project-specific rules from a design lock (STYLESEED.md), with brand skins and
  structural recipes, and a score-then-fix quality gate. Works with Claude Code,
  Codex and Cursor.
triggers:
  - "styleseed"
  - "brand skin"
  - "design judgment"
  - "ss-tokens"
  - "ss-component"
  - "design engine rules"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/bitjaru/styleseed"
  upstream_path: "skills/styleseed/SKILL.md"
  version: latest
---

# styleseed

> Catalogue stub — full skill: [bitjaru/styleseed](https://github.com/bitjaru/styleseed)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/styleseed/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/styleseed/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `styleseed`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/styleseed ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add bitjaru/styleseed --skill styleseed -g -y
   ```

   **Project:**
   ```bash
   npx skills add bitjaru/styleseed --skill styleseed -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
claude plugin marketplace add bitjaru/styleseed
claude plugin install styleseed@styleseed
```

**Heads-up**

- **Requires:** Node.js and npm (the skill's bundled context compiler and quality gates run as Node scripts); Writes STYLESEED.md (a design lock) and a .styleseed/ directory into your project when its setup and build workflows run
- **License:** MIT
- **Download size:** ~77 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `styleseed` (the only registered skill)
- Claude Code: `/styleseed <request>`, for example `/styleseed Help improve this screen. Preserve our existing design choices.`; Codex: `$styleseed <request>`
- Name the workflow in the request: `/styleseed setup`, `/styleseed resolve`, `/styleseed build`, `/styleseed review`, `/styleseed score`, `/styleseed verify`, `/styleseed tokens`. The former separate `/ss-*` commands (for example `/ss-build`, `/ss-tokens`) are now internal workflows of this one skill.

## What it does

StyleSeed turns recorded design decisions into project-local rules and implementation workflows. The single `styleseed` skill picks one internal workflow from your request (setup, studio, reference, build, audit, review, score, verify, restyle, tokens, motion, accessibility, microcopy, flows, states, update) and applies the rules that fit the task. Setup writes a `STYLESEED.md` design lock (skin, key colour, radius, motion) so decisions survive new screens and sessions; a context compiler turns it into a small rule bundle under `.styleseed/`, and a render-and-score quality gate reviews the UI before it is shown to you. Skins are inspired-by token sets that restyle the same components. A score supports, but does not replace, human design acceptance.

## When NOT to use

- Component library without token/rule context — use `shadcn-ui` or `baseline-ui`
- Design token architecture only — use `design-tokens-skill`
- Single-page design review — use `design-review-garrytan` or `design-auditor`
