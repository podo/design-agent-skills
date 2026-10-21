---
name: impeccable
description: |
  Design fluency for frontend development. One skill with a suite of slash commands
  (/impeccable polish, /impeccable audit, /impeccable critique, etc.), curated
  anti-pattern detection, and a runtime launcher script.
  Covers UI design, redesign, critique, accessibility, motion, theming,
  typography, and component craft across websites, dashboards, and apps.
triggers:
  - "impeccable"
  - "polish UI"
  - "audit design"
  - "critique interface"
  - "design commands"
  - "anti-pattern detection"
das:
  type: skill
  category: design-systems
  upstream: "https://github.com/pbakaus/impeccable"
  upstream_path: ".agents/skills/impeccable/SKILL.md"
  version: latest
---

# impeccable

> Catalogue stub — full skill: [pbakaus/impeccable](https://github.com/pbakaus/impeccable)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/impeccable/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/impeccable/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `impeccable`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/impeccable ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add pbakaus/impeccable --skill impeccable -g -y
   ```

   **Project:**
   ```bash
   npx skills add pbakaus/impeccable --skill impeccable -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add pbakaus/impeccable
/plugin install impeccable@impeccable
```

**Heads-up**

- **Requires:** the skill's launcher (scripts/impeccable) downloads a native engine binary to ~/.impeccable/bin on first run; anonymous usage telemetry is on by default (opt out with IMPECCABLE_NO_TELEMETRY=1 or DO_NOT_TRACK=1)
- **License:** Apache-2.0
- **Large download (~737 MB):** the skills CLI gives up cloning after 300 s; if it times out, retry with `SKILLS_CLONE_TIMEOUT_MS=900000`.
<!-- das:install:end -->

## Invoke after install

- Skill name: `impeccable`
- Run `/impeccable <command> <target>`, and `/impeccable init` once per project to capture PRODUCT.md
- Restart your agent session after installing so the skill and commands load

`npx skills add` installs the skill only. Upstream's own installer (`npx impeccable install`) also registers edit hooks that run the design detector after UI file edits; review those hooks before using it.

## What it does

A single skill whose commands are invoked as `/impeccable <command>`:

| Command | Purpose |
|---------|---------|
| `shape` | Plan UX/UI before writing code |
| `init` / `document` | Capture product context (PRODUCT.md) and generate DESIGN.md from existing code |
| `critique` | UX design review with heuristic scoring |
| `audit` | Technical quality checks (accessibility, performance, responsive) |
| `polish` | Final quality pass before shipping |
| `bolder` / `quieter` / `distill` | Amplify, calm down, or simplify a design |
| `animate` / `colorize` / `typeset` / `layout` / `delight` | Targeted enhancement passes |
| `harden` / `onboard` / `clarify` / `adapt` / `optimize` | Edge cases, first-run flows, UX copy, responsiveness, performance |
| `live` / `generate` | Pick elements in the browser and iterate on variants |
| + more | See the upstream README and the skill's command table |

It also ships a detector for design anti-patterns that can run from the command line. Commands read PRODUCT.md for durable product context; missing it, the skill runs `init` for a new surface rather than guessing.

## When NOT to use

- Backend, API, or data-pipeline work
- Non-UI tasks (routing, auth, database)
- Deep color-science work such as OKLCH palette generation (use `color-expert`)
