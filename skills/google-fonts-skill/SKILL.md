---
name: google-fonts-skill
description: |
  Searches Google Fonts enriched with personality and mood tags, suggests proven
  pairings, generates CSS custom properties, Tailwind config, and embed links,
  and offers modular type scales. Works as a skill with bundled Python scripts,
  or as an MCP server.
triggers:
  - "Google Fonts"
  - "font pairing"
  - "typography skill"
  - "google-fonts-skill"
  - "modular scale"
  - "font mood"
  - "font personality"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/sliday/google-fonts-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# google-fonts-skill

> Catalogue stub — full skill: [sliday/google-fonts-skill](https://github.com/sliday/google-fonts-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `google-fonts`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/google-fonts/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/google-fonts/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `google-fonts`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/google-fonts-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add sliday/google-fonts-skill --skill google-fonts -g -y
   ```

   **Project:**
   ```bash
   npx skills add sliday/google-fonts-skill --skill google-fonts -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
claude plugin marketplace add sliday/google-fonts-skill
claude plugin install google-fonts@google-fonts-skill
```

**Heads-up**

- **Requires:** Python 3 (a skill-only install runs the bundled scripts/search.py and scripts/generate-css.py)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `google-fonts`
- Trigger phrases: "Google Fonts", "font pairing", "modular scale", "choose a font", "type scale"

## What it does

Provides Google Fonts selection backed by an enriched font dataset (personality, contrast, mood, body suitability, quality tier). Runs in single-font mode (one font for headings and body) or pair mode (searches proven pairings first), then generates ready-to-use CSS custom properties, Tailwind configuration, and Google Fonts embed links, with a choice of modular type scales. As a skill it searches the bundled data with `scripts/search.py` and `scripts/generate-css.py`.

Optional MCP route: upstream also ships the same tools as an MCP server (`claude mcp add google-fonts -- uvx google-fonts-mcp`, needs `uv`); the installed skill prefers the MCP tools when that server is connected.

## When NOT to use

- Non-Google font sources (self-hosted, Adobe Fonts, etc.)
- Complete brand typography system needing token architecture — pair with `design-tokens-skill`
- Variable font fine-tuning at axis level — consult font-specific documentation
