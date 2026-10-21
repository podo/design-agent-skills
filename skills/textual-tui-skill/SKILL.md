---
name: textual-tui-skill
description: |
  Deep-dive Textual (Python) TUI skill: built-in widgets, layout systems, TCSS styling,
  reactive programming, background workers, multi-screen navigation, modal dialogs, and
  testing via the Pilot API. Covers common pitfalls and thread-safety rules for
  async/worker patterns, with working example apps.
triggers:
  - "Textual TUI"
  - "textual-tui-skill"
  - "Textual widget"
  - "Textual app"
  - "TCSS styling"
  - "Textual framework"
das:
  type: skill
  category: tui-terminal
  upstream: "https://github.com/aperepel/textual-tui-skill"
  upstream_path: "skill/SKILL.md"
  version: latest
---

# textual-tui-skill

> Catalogue stub — full skill: [aperepel/textual-tui-skill](https://github.com/aperepel/textual-tui-skill) (`textual-tui`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `textual-tui`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/textual-tui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/textual-tui/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `textual-tui`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/textual-tui-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add aperepel/textual-tui-skill --skill textual-tui -g -y
   ```

   **Project:**
   ```bash
   npx skills add aperepel/textual-tui-skill --skill textual-tui -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Python with textual and textual-dev (pip install textual textual-dev) to run what the skill generates
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `textual-tui`
- Trigger phrases: "Textual TUI", "Textual widget", "Textual app", "TCSS styling", "Textual framework"

## What it does

Comprehensive Textual framework reference for building professional Python TUIs:

| Area | Coverage |
|------|----------|
| **Widgets** | Built-in widgets such as Input, Button, Select, Checkbox, DataTable, Tree, Log, RichLog, Tabs, TabbedContent |
| **Layouts** | Vertical, Horizontal, Grid; fixed/fractional sizing; responsive patterns |
| **Styling** | TCSS syntax, semantic color system, external stylesheets, borders, padding |
| **Reactivity** | Reactive attributes, watchers, computed properties, DOM-like widget tree |
| **Async** | Workers for long-running tasks, `call_from_thread()` for thread-safe UI updates, cancellation |
| **Navigation** | Multi-screen apps, modal screens, screen stack management |
| **Events** | Mount, Click, Key; keyboard bindings; action methods; message propagation |
| **Testing** | Pilot API, async test patterns with pytest, UI interaction simulation |
| **Pitfalls** | Common mistakes documented: blocking the event loop, thread safety, worker selection |

Ships `references/` (widgets, layouts, styling, an index of the official guides) and four complete example apps under `assets/`: a todo app, a system dashboard, a data viewer and a worker demo.

## When NOT to use

- Multi-framework TUI overview (Go/Rust/Python/TS) — use `tui-design-skill`
- Bubble Tea (Go) — use `tui-design-skill`
- Ratatui (Rust) — use `tui-design-skill`
- Ink (TypeScript/React) — use `tui-design-skill`
