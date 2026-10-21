---
name: guizang-ppt
description: |
  Generates horizontal-swipe web decks as a single HTML file: WebGL backgrounds, presenter view,
  synced audience screen, speaker notes, section covers, big-number data slides, and image grids.
  Two visual systems: "electronic magazine x e-ink" (serif, fluid background, warm) and
  "Swiss international" (sans-serif, grid, high-saturation accent colors). Also produces slide
  images and platform covers. Output is HTML, not .pptx. The skill text is Chinese-first.
triggers:
  - "guizang ppt"
  - "web ppt single HTML"
  - "magazine style deck"
  - "Swiss style deck"
  - "horizontal swipe deck"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/op7418/guizang-ppt-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# guizang-ppt

> Catalogue stub — full skill: [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `guizang-ppt-skill`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/guizang-ppt-skill/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/guizang-ppt-skill/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `guizang-ppt-skill`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/guizang-ppt ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt-skill -g -y
   ```

   **Project:**
   ```bash
   npx skills add op7418/guizang-ppt-skill --skill guizang-ppt-skill -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** A browser to preview the generated HTML deck (Node.js only for the optional deck validator scripts)
- **License:** AGPL-3.0 (copyleft)
<!-- das:install:end -->

## Invoke after install

- Skill name: `guizang-ppt-skill`
- Trigger phrases: "guizang ppt", "magazine style deck", "Swiss style deck", "horizontal swipe deck", "web ppt single HTML"

## What it does

Turns an article, outline, or Markdown file into a single-file HTML slide deck that swipes horizontally (keyboard, wheel, touch, dot navigation, ESC index). It ships two complete visual systems: Style A "electronic magazine x e-ink", suited to narrative and personal-voice talks, and Style B "Swiss international", suited to facts, products, and analysis. Templates include cover, section break, big-number data poster, image-text, image grid, pipeline, and comparison layouts. A built-in presenter mode adds speaker notes, per-slide timing, and a synced audience window for rehearsal and delivery. It can also produce slide images and multi-platform cover images.

The output is an HTML file you open in a browser, not a PowerPoint file. The skill is written in Chinese (with an English README upstream), and is licensed AGPL-3.0.

## When NOT to use

- You need an actual `.pptx` file for PowerPoint or Keynote — use `anthropics-skills` (its `pptx` skill) or `nanobanan-ppt`
- Markdown-driven developer decks (Slidev, Marp, Reveal.js) — use `slidev-skill`, `marp-slides` or `revealjs-skill`
- You need a non-copyleft license for the generated templates — check upstream's AGPL-3.0 terms first
