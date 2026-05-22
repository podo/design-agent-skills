---
name: textual-tui-skill
description: |
  Deep-dive Textual (Python) TUI skill — 40+ widgets, layout systems, TCSS
  styling, reactive programming, background workers, multi-screen navigation,
  modal dialogs, and testing via Pilot API. Covers 10 common pitfalls and
  thread-safety rules for async/worker patterns. v1.0.0.
triggers:
  - "Textual TUI"
  - "textual-tui-skill"
  - "Textual widget"
  - "Textual app"
  - "TCSS styling"
  - "Textual framework"
das:
  type: package
  category: tui-terminal
  upstream: "https://github.com/aperepel/textual-tui-skill"
  version: latest
---

# textual-tui-skill

> Catalogue stub — full skill: [aperepel/textual-tui-skill](https://github.com/aperepel/textual-tui-skill)

## Install the full skill

```bash
# Clone and run quickstart
git clone https://github.com/aperepel/textual-tui-skill
cd textual-tui-skill
bash quickstart.sh
```

Or install the pre-compiled skill file directly into your agent's skills directory:

```bash
# Global
curl -o ~/.agents/skills/textual-tui-skill/SKILL.md \
  https://raw.githubusercontent.com/aperepel/textual-tui-skill/main/skill/SKILL.md

# Project
curl -o .agents/skills/textual-tui-skill/SKILL.md \
  https://raw.githubusercontent.com/aperepel/textual-tui-skill/main/skill/SKILL.md
```

## What it does

Comprehensive Textual framework reference for building professional Python TUIs:

| Area | Coverage |
|------|----------|
| **Widgets** | 40+ built-in: Input, Button, Select, Checkbox, DataTable, Tree, Log, RichLog, Tabs, TabbedContent |
| **Layouts** | Vertical, Horizontal, Grid; fixed/fractional sizing; responsive patterns |
| **Styling** | TCSS syntax, semantic color system, external stylesheets, borders, padding |
| **Reactivity** | Reactive attributes, watchers, computed properties, DOM-like widget tree |
| **Async** | Workers for long-running tasks, `call_from_thread()` for thread-safe UI updates, cancellation |
| **Navigation** | Multi-screen apps, modal screens, screen stack management |
| **Events** | Mount, Click, Key; keyboard bindings; action methods; message propagation |
| **Testing** | Pilot API, async test patterns with pytest, UI interaction simulation |
| **Pitfalls** | 10 common mistakes documented: blocking event loop, thread safety, worker selection |

4 complete working example apps (~1,100 lines): todo app, system dashboard, data viewer, worker demo.

## When NOT to use

- Multi-framework TUI overview (Go/Rust/Python/TS) — use `tui-design-skill`
- Bubble Tea (Go) — use `tui-design-skill`
- Ratatui (Rust) — use `tui-design-skill`
- Ink (TypeScript/React) — use `tui-design-skill`
