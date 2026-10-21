---
name: revealjs-skill
description: |
  Generates professional Reveal.js presentations as standalone HTML and CSS: themed designs,
  multi-column layouts, Chart.js charts, code highlighting, speaker notes, animations and
  PDF export through decktape. No build step required.
triggers:
  - "Reveal.js"
  - "revealjs-skill"
  - "Reveal presentation"
  - "ryanbbrown slides"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/ryanbbrown/revealjs-skill"
  upstream_path: "skills/revealjs/SKILL.md"
  version: latest
  install: false
---

# revealjs-skill

> Catalogue stub — full skill: [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) (`revealjs`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `revealjs`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/revealjs/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/revealjs/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `revealjs`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/revealjs-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add ryanbbrown/revealjs-skill --skill revealjs -g -y
   ```

   **Project:**
   ```bash
   npx skills add ryanbbrown/revealjs-skill --skill revealjs -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add ryanbbrown/revealjs-skill
/plugin install revealjs@revealjs-skill
```

**Heads-up**

- **Requires:** Node.js (the skill runs its own helper scripts to scaffold decks and open the editor); optional - puppeteer for the overflow check and decktape via npx for PDF export and screenshots
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `revealjs`
- Trigger phrases: "Reveal.js", "revealjs-skill", "Reveal presentation", "ryanbbrown slides"

## What it does

Generates Reveal.js presentations as an HTML file plus a CSS file that load Reveal from a CDN, so there is no build tooling. The skill picks a palette and typography from the subject of the deck, scaffolds slides with a helper script, and supports multi-column layouts, callout boxes, code highlighting, embedded Chart.js charts (bar, line, pie, doughnut, scatter), staggered animations and speaker notes. Bundled scripts check slides for overflow and open a visual editor, and PDF export goes through decktape. Best for visually rich, browser-displayed presentations with interactivity.

## When NOT to use

- Marp Markdown output — use marp-slides instead
- Slidev/Vue-component presentations — use slidev-skill instead
- PowerPoint/PPTX export — use `anthropics-skills` (its `pptx` skill) instead
- Quality scoring an existing Marp deck — use marp-slide-quality instead
