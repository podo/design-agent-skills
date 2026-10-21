---
name: design-with-claude
description: |
  Deterministic design-system audit plus a full set of design specialists as slash commands. `npx dwic-audit` scans a project across categories such as color, typography, spacing, accessibility, forms, navigation, motion, and copy using WCAG contrast math and token parsing (no LLM involved), then routes each finding to the specialist that fixes it. Specialists cover visual hierarchy, interaction design, design system architecture, typography, color, spacing, motion, forms, navigation, dashboards, mobile, landing pages, auth UX, healthcare UX, B2B SaaS, e-commerce, dark mode, error handling, onboarding, and data viz. Installs as a Claude Code plugin; the commands are pure markdown with no runtime dependencies.
triggers:
  - "design with claude"
  - "imsaif design"
  - "audit my design system"
  - "WCAG contrast audit"
  - "b2b SaaS design"
das:
  type: package
  category: design-review
  upstream: "https://github.com/imsaif/design-with-claude"
  version: latest
  install: false
---

# design-with-claude

> Catalogue stub — full package: [imsaif/design-with-claude](https://github.com/imsaif/design-with-claude) (MIT)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - `f=~/.claude/plugins/cache/design-with-claude/design-with-claude; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The skills CLI skips this repo because upstream's SKILL.md frontmatter does not parse as YAML, so the supported route is the Claude Code plugin. Run the two plugin commands in a terminal, or send the same two as slash commands inside Claude Code, then run /reload-plugins (without it the commands do not appear).

   ```bash
   claude plugin marketplace add imsaif/design-with-claude
   claude plugin install design-with-claude@design-with-claude
   ```

**Claude Code plugin route:**

```
/plugin marketplace add imsaif/design-with-claude
/plugin install design-with-claude@design-with-claude
```

**Heads-up**

- **Requires:** Claude Code (plugin route). Commands are namespaced, for example /design-with-claude:design-brief; Optional audit CLI `npx dwic-audit` (runs an npm package; it sends an anonymous run counter unless --no-telemetry or DWIC_TELEMETRY=off is set); Optional MCP server for interactive use needs a token from designwithclaude.com
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-with-claude`
- Trigger phrases: "design with claude", "audit my design system", "WCAG contrast audit", "dashboard design", "b2b SaaS design"
- Plugin commands are namespaced, for example `/design-with-claude:design-brief` and `/design-with-claude:accessibility-specialist`. Run `/reload-plugins` after installing or they do not appear.

## What it does

Two halves that work together.

**Measure.** `npx dwic-audit` runs a deterministic static scan across categories such as color, typography, spacing, accessibility, forms, navigation, motion, and copy. WCAG contrast math, token parsing, markup heuristics; no LLM runs. It prints a dashboard, writes a shareable `.dwic/audit-<date>.md`, and exits non-zero on errors so it works in CI. Your code stays on your machine; the CLI only sends an anonymous run counter with category-level counts (disable with `--no-telemetry` or `DWIC_TELEMETRY=off`). It needs no install and no token.

**Fix.** Design specialists as slash commands, each a domain expert in pure markdown with no runtime dependencies. The audit's categories map onto specialists (contrast failures → `/color-specialist`, unlabelled inputs → `/form-designer`, and so on), and `/design-triage` will read the audit report and work the findings in ranked order. `/design-brief` routes a plain-language brief when the problem spans several domains.

Use it when the request is vague ("improve our design", "is this any good?") — measure first, then invoke the specialist the findings point at, rather than guessing. An optional MCP server (set up with `npx dwic-audit setup`, needs a token from designwithclaude.com) adds project memory across sessions; it is not needed for the audit or the commands.

## When NOT to use

- Non-visual work with no design component
- A one-line CSS change you already know how to make
- When a single focused skill already installed suffices — avoid installing the full suite for one-off needs
- Non-Claude agents (Cursor, Cline, Gemini CLI, ...): the skills CLI currently cannot read upstream's SKILL.md (YAML error), so use the `npx dwic-audit` audit on its own or follow the [upstream README](https://github.com/imsaif/design-with-claude#readme)
