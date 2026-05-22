---
name: styleseed
description: |
  Design engine that teaches agents design judgment, not just data. Ships
  69 brand-agnostic rules, 48 React components, 13 slash commands (/ss-tokens,
  /ss-component, /ss-audit, /ss-a11y, and more), and 60+ interchangeable brand
  skins (Toss, Stripe, Linear, Vercel, Notion, Raycast, Arc…). Tailwind v4 +
  Radix UI. Works with Claude Code and Cursor.
triggers:
  - "styleseed"
  - "brand skin"
  - "design judgment"
  - "ss-tokens"
  - "ss-component"
  - "design engine rules"
das:
  type: package
  category: design-systems
  upstream: "https://github.com/bitjaru/styleseed"
  version: latest
---

# styleseed

> Catalogue stub — full skill: [bitjaru/styleseed](https://github.com/bitjaru/styleseed)

## Install the full skill

Copy the engine into your project:

```bash
git clone https://github.com/bitjaru/styleseed /tmp/styleseed
cp -r /tmp/styleseed/engine/* ./
```

Or follow the interactive setup after cloning:
```bash
/ss-setup
```

For Cursor, copy `.cursorrules` from the repo root.

## Invoke after install

13 slash commands available:

| Command | Purpose |
|---|---|
| `/ss-setup` | Initial project setup and brand skin selection |
| `/ss-tokens` | Token management — generate, audit, update design tokens |
| `/ss-component` | Build a component following brand rules |
| `/ss-page` | Compose a full page layout |
| `/ss-pattern` | Apply a UI pattern (card, table, form…) |
| `/ss-review` | Design review against the 69 rules |
| `/ss-a11y` | Accessibility audit |
| `/ss-lint` | Lint components for rule violations |
| `/ss-audit` | Full design system audit |
| `/ss-flow` | User flow design |
| `/ss-copy` | Copy/content guidance |
| `/ss-feedback` | Collect and apply design feedback |
| `/ss-update` | Update brand skin or rules |

## What it does

StyleSeed installs a set of design rules the agent applies to every UI decision — color discipline, spatial rhythm, information hierarchy, shadow/elevation, component variance, motion. Switching brand skins (via `data-skin` attribute) morphs the same component set across 60+ brand aesthetics without changing markup. Token management is first-class via `/ss-tokens`.

## When NOT to use

- Component library without token/rule context — use `shadcn-ui` or `baseline-ui`
- Design token architecture only — use `design-tokens-skill`
- Single-page design review — use `design-review-garrytan` or `design-auditor`
