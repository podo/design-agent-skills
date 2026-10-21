---
name: kami
description: |
  Document typesetting skill: resumes, one-pagers, white papers, letters, portfolios, and slide decks laid out on warm paper-like pages with serif type and ink-blue accents. Template and layout rules that produce print-ready output.
triggers:
  - "Kami document typesetting"
  - "Kami templates"
  - "typeset a resume"
  - "typeset a one-pager"
  - "white paper layout"
  - "paper-style slide deck"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/tw93/Kami"
  version: latest
---

# kami

> Catalogue stub — full skill: [tw93/Kami](https://github.com/tw93/Kami)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/kami/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/kami/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/kami ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add tw93/Kami --skill kami -g -y
   ```

   **Project:**
   ```bash
   npx skills add tw93/Kami --skill kami -y
   ```

## Invoke after install

- Skill name: `kami` (also available as the `/kami` command)
- Trigger phrases: "Kami document typesetting", "Kami templates", "typeset a resume", "white paper layout"

## What it does

"Good content deserves good paper." Kami ships a set of templates and layout rules for documents that should look designed rather than generated: resumes, one-pagers, white papers, letters, portfolios, slide decks, and a landing-page template. Output is PDF, PNG, or editable PowerPoint. The workflow starts by locking a contract (language, template, output formats, page or length target, visual acceptance, verification command), then builds through scripts and verifies the output. English and Chinese have the most complete support; Japanese and Korean use language-specific font fallbacks. An optional brand profile can override defaults.

## When NOT to use

- Auditing or restyling an existing product site or app UI → use `hallmark` or `impeccable`
- Interactive, animated HTML slide decks → use `frontend-slides` or `html-ppt`
- Markdown-driven developer decks → use `slidev-skill` or `marp-slides`
- AI-generated slide imagery from a document → use `nanobanan-ppt`
