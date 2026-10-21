---
name: plan-design-review
description: |
  Senior designer review of a PLAN before implementation, from Garry Tan's gstack. Interactive:
  rates the plan's design dimensions 0-10, finds missing design decisions and adds them to the plan,
  and calls out generic AI-slop patterns.
triggers:
  - "plan design review"
  - "design plan review"
  - "review ux plan"
  - "check design decisions"
  - "AI slop detection"
  - "design dimensions"
das:
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "plan-design-review/SKILL.md"
  version: latest
  install: false
---

# plan-design-review

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`plan-design-review`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/gstack/plan-design-review/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Install** (the skills CLI cannot install this one):

   This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill (`--skill plan-design-review` fails because the CLI only sees gstack's root router; the subpath form `npx skills add garrytan/gstack/plan-design-review` installs the instructions without the tooling). `./setup` needs Bun, builds binaries, downloads Chromium and registers a Stop hook in your Claude settings (opt out with `./setup --no-timeline-stop-hook`); ask the user before running it. Upstream's README also tells agents to add a gstack section to CLAUDE.md after setup.

   ```bash
   git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
   cd ~/.claude/skills/gstack && ./setup
   ```

**Heads-up**

- **Requires:** Bun (setup refuses versions older than 1.3.3; upstream tests 1.4.2+), Git and Claude Code; Optional: the gstack design binary plus an OpenAI API key for mockups; Codex CLI for outside design voices
- **License:** MIT
- **Download size:** ~98 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `plan-design-review`
- Trigger phrases: "plan design review", "design plan review", "review ux plan", "check design decisions", "AI slop detection"

## What it does

A designer's-eye review of a plan, not of a live site: the agent rates the plan's overall design completeness on a 0-10 scale, explains what a 10 would look like, then works through seven passes (information architecture, interaction states, user journey and emotional arc, AI-slop risk, design-system alignment, responsive and accessibility, unresolved decisions), asking you about each gap and adding the decisions you accept to the plan before any code is written. It can optionally render visual mockups (needs gstack's `design` binary and an OpenAI API key) and ask outside voices for an independent design opinion.

gstack behaviour to know about, per its README: outside reviews are on by default and send the review prompt and the relevant plan or code to a second model provider (Codex, under your own login; turn off with `gstack-config set codex_reviews disabled`); an update check against GitHub runs by default; usage telemetry is opt-in and asked once.

## When NOT to use

- Reviewing or fixing a live, running UI — use `design-review-garrytan`
- Building a design system from scratch — use `design-consultation`
- When you do not want to install gstack's tooling (Bun, binaries, Chromium, a Stop hook)
