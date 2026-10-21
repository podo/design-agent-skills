---
name: taste-skill
description: |
  Anti-slop frontend art direction (tasteskill v2). Deals researched design directions for a
  page or app screen from a library built from curated gallery sites, enforces a strict
  no-generic-AI-UI house style with a real-browser inspector, and runs a look-and-fix loop
  on screenshots. Works in any web stack.
triggers:
  - "design taste"
  - "visual taste"
  - "good taste"
  - "anti slop"
  - "visual density"
  - "premium UI"
  - "no generic UI"
  - "stop slop"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/Leonxlnx/taste-skill"
  upstream_path: "skills/taste-skill/SKILL.md"
  version: latest
  install: true
---

# taste-skill

> Catalogue stub — full skill: [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `design-taste-frontend`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/design-taste-frontend/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/design-taste-frontend/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `design-taste-frontend`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/taste-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Leonxlnx/taste-skill --skill design-taste-frontend -g -y
   ```

   **Project:**
   ```bash
   npx skills add Leonxlnx/taste-skill --skill design-taste-frontend -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Leonxlnx/taste-skill
/plugin install taste-skill@taste-skill
```

**Heads-up**

- **Requires:** Node.js 22 or later and an installed Chrome, Edge or Chromium (for the bundled inspector and screenshot scripts); network access for the asset script (it fetches pictures from open collections, no API keys)
- **License:** MIT
- **Download size:** ~39 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-taste-frontend`
- Trigger phrases: "design taste", "good taste", "anti slop", "premium UI", "make this look designed", "this page looks generic"

## What it does

Art direction for websites and app screens, aimed at the generic look models default to (centred headline over three lines, a small label, a row of icon cards, a soft gradient). A script deals a few researched directions (idea, composition, type system, palette, hero and section blueprints, pictures of the subject's world) and you choose one; a house style with no ornaments is then measured in a real browser by an inspector script, and you look at screenshots at several widths, judge them against a rubric, fix, and look again. A separate run covers app screens such as dashboards, settings and inboxes. Use it whenever you build, restyle or review a landing page, product page, portfolio, one-pager or dashboard, or when a page looks generic or "AI-made".

The bundled scripts need Node 22+ and an installed Chrome, Edge or Chromium; one script fetches pictures from open collections over the network. Working files are written to `.taste-skill/` in your project root.

## When NOT to use

- Backend code, APIs, data pipelines, CLI tools, or any non-UI task
- When the user explicitly wants generic or template-style UI
- Native iOS or Android interfaces (use `mobile-app-design` or `swiftui-design-skill`)
