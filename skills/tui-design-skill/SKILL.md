---
name: tui-design-skill
description: |
  Designs, builds, and reviews clean, professional terminal UIs and CLIs across
  four ecosystems: Go (Bubble Tea/Lipgloss), Rust (Ratatui), Python (Textual),
  and TypeScript (Ink). Covers layout patterns, color systems, keybinding
  conventions, discoverability, and framework-specific design patterns.
triggers:
  - "TUI design"
  - "terminal UI"
  - "Bubble Tea"
  - "Ratatui"
  - "Textual Python"
  - "Ink TypeScript"
  - "tui-design-skill"
das:
  type: skill
  category: tui-terminal
  upstream: "https://github.com/gfargo/tui-design-skill"
  upstream_path: "plugins/tui-design/skills/tui-design/SKILL.md"
  version: latest
---

# tui-design-skill

> Catalogue stub — full skill: [gfargo/tui-design-skill](https://github.com/gfargo/tui-design-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `tui-design`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/tui-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/tui-design/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `tui-design`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/tui-design-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add gfargo/tui-design-skill --skill tui-design -g -y
   ```

   **Project:**
   ```bash
   npx skills add gfargo/tui-design-skill --skill tui-design -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `tui-design`
- Trigger phrases: "TUI design", "terminal UI", "Bubble Tea", "Ratatui", "Textual Python", "Ink TypeScript"

## What it does

Provides design knowledge for building professional terminal user interfaces and command-line tools across four major ecosystems: Go with Bubble Tea and Lipgloss, Rust with Ratatui, Python with Textual, and TypeScript/Node.js with Ink. A core skill file holds the workflow and cross-cutting rules (layout, color systems from true color to ANSI, keybinding conventions, focus management, discoverability) and loads one framework-specific reference when needed. Covers full-screen TUIs, interactive prompts, and plain CLIs.

## When NOT to use

- Web UI design — use a frontend-design skill instead
- Deep Textual (Python) work beyond layout conventions — use `textual-tui-skill`
- Simple CLI argument parsing without interactive UI
