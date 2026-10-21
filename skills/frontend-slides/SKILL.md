---
name: frontend-slides
description: |
  Create animation-rich HTML presentations from scratch or convert PPT/PPTX into
  polished web slides. Produces self-contained HTML files with smooth transitions,
  distinctive style presets, and a fixed 16:9 stage that scales to any screen.
triggers:
  - "frontend slides"
  - "HTML slides"
  - "web presentation"
  - "animated slides"
  - "HTML presentation"
  - "convert PPT to HTML"
das:
  category: presentations
  upstream: "https://github.com/zarazhangrui/frontend-slides"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# frontend-slides

> Catalogue stub — full skill: [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/frontend-slides/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/frontend-slides/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `frontend-slides`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/frontend-slides ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add zarazhangrui/frontend-slides --skill frontend-slides -g -y
   ```

   **Project:**
   ```bash
   npx skills add zarazhangrui/frontend-slides --skill frontend-slides -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add https://github.com/zarazhangrui/frontend-slides
/plugin install frontend-slides@frontend-slides
```

**Heads-up**

- **Requires:** optional: Python with python-pptx (converting PPT/PPTX); optional: Node.js (PDF export through Playwright; URL deployment also needs a free Vercel account)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `frontend-slides`
- Trigger phrases: "frontend slides", "HTML slides", "web presentation", "animated slides"

## What it does

Creates animation-rich, zero-dependency HTML presentations from scratch or by converting existing PPT/PPTX files into web slides. It helps non-designers find a look by showing visual previews rather than asking abstract questions, with safe style presets and a library of bolder templates, and it avoids the generic "AI slop" aesthetic. Every deck is a single HTML file with inline CSS and JS on a fixed 16:9 (1920×1080) stage that scales to the viewport, so no build step is needed.

Optional helpers: PPT conversion needs Python with `python-pptx`; PDF export uses Playwright through Node.js; deploying a deck to a URL needs Node.js and a Vercel account.

## When NOT to use

- A real `.pptx` file as the deliverable — use `nanobanan-ppt` or `anthropics-skills` (pptx)
- Markdown-driven or code-heavy decks — use `marp-slides` or `slidev-skill`
