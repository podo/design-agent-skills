---
name: slidev-skill
description: |
  Official Slidev skill from the Slidev team — helps agents understand and generate
  developer-focused technical presentations using Slidev's Markdown format with Vue
  components, code highlighting, and animations.
triggers:
  - "Slidev"
  - "slidev-skill"
  - "Slidev presentation"
  - "developer slides Vue"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/slidevjs/slidev"
  upstream_path: "skills/slidev/SKILL.md"
  version: latest
  install: true
---

# slidev-skill

> Catalogue stub — full skill: [slidevjs/slidev](https://github.com/slidevjs/slidev)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `slidev`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/slidev/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/slidev/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `slidev`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/slidev-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add slidevjs/slidev --skill slidev -g -y
   ```

   **Project:**
   ```bash
   npx skills add slidevjs/slidev --skill slidev -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add slidevjs/slidev
/plugin install slidev@slidev-plugins
```

**Heads-up**

- **Requires:** Node.js and pnpm (or npm) to run Slidev itself; PDF export also needs playwright-chromium
- **License:** MIT
- **Download size:** ~80 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `slidev`
- Trigger phrases: "Slidev", "Slidev presentation", "developer slides Vue"

## What it does

The official Claude skill maintained by the Slidev team. Provides complete knowledge of Slidev's Markdown-based presentation format, enabling agents to generate developer-focused technical presentations with Vue component embeds, Shiki-powered syntax highlighting, click-through animations, and presenter mode. Slidev presentations run as a local Vite dev server and export to PDF, PPTX or a hosted SPA.

## When NOT to use

- PowerPoint/PPTX files built from an outline — use `anthropics-skills` (its `pptx` skill) instead
- Simple Marp Markdown without Vue components — use `marp-slides` instead
- Reveal.js HTML output — use `revealjs-skill` instead
- Conference slide quality guardrails — use `cc-slidev` as an alternative with design constraints
