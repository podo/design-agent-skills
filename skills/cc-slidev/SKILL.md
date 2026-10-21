---
name: cc-slidev
description: |
  Claude Code plugin and skills for creating developer-focused technical presentations (tech talks,
  conference content) with Slidev, with evidence-based design guardrails for slide quality.
  Adds opinionated constraints on top of raw Slidev for presentation polish.
triggers:
  - "cc-slidev"
  - "rhuss slidev"
  - "conference slides"
  - "tech talk slides"
das:
  category: presentations
  upstream: "https://github.com/rhuss/cc-slidev"
  version: latest
  install: false
---

# cc-slidev

> Catalogue stub — full package: [rhuss/cc-slidev](https://github.com/rhuss/cc-slidev)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 6 skills (`slidev-mastery`, `presentation-design`, `slide-quality-assessment`, `visual-design`, `excalidraw-generation`, `latex-handouts`); checking the first.
   - Global: `f=~/.agents/skills/slidev-mastery/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/slidev-mastery/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `slidev-mastery`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/cc-slidev ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add rhuss/cc-slidev --skill "Slidev Mastery" "Presentation Design" "Slide Quality Assessment" "Visual Design" "Excalidraw Generation" "LaTeX Handouts" -g -y
   ```

   **Project:**
   ```bash
   npx skills add rhuss/cc-slidev --skill "Slidev Mastery" "Presentation Design" "Slide Quality Assessment" "Visual Design" "Excalidraw Generation" "LaTeX Handouts" -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add rhuss/cc-slidev
/plugin install slidev@slidev-dev-marketplace
```

**Heads-up**

- **Requires:** Slidev CLI (`npm install -g @slidev/cli`) and Node.js 18+; Optional: LaTeX (pdflatex) for handouts, mermaid-cli for offline diagram rendering
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skills (every install route): `Slidev Mastery` (installed as `slidev-mastery`), `Presentation Design`, `Slide Quality Assessment`, `Visual Design`, `Excalidraw Generation`, `LaTeX Handouts`
- Slash commands (Claude Code plugin route only): `/slidev:init <topic>` runs the guided end-to-end workflow; or use the phases one by one: `/slidev:frame`, `/slidev:brainstorm`, `/slidev:outline`, `/slidev:generate`, `/slidev:visuals`, `/slidev:notes`, `/slidev:handout`, `/slidev:export <format>`
- Trigger phrases: "cc-slidev", "conference slides", "tech talk slides", "rhuss slidev"

## What it does

A Claude Code plugin that wraps Slidev for technical conference and developer talk slide creation. Adds evidence-based design guardrails (limits on elements and body text per slide, assertion titles, minimum font size and contrast, colorblind-safe palettes) on top of Slidev's flexible Markdown format, and covers the workflow from framing and outline to modular slide generation, diagrams, presenter notes, LaTeX handouts and export.

The `npx skills add` route installs the six skills that the CLI can read, without the slash commands. Two further upstream skills (`diagram-design` and `slide-management`) have frontmatter the CLI cannot parse, so it skips them.

## When NOT to use

- Non-technical presentations where the constraints would be limiting
- When raw Slidev flexibility is preferred over guardrails — use `slidev-skill` instead
- Marp output — use `marp-slides` instead
- Reveal.js output — use `revealjs-skill` instead
