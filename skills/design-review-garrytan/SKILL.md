---
name: design-review-garrytan
description: |
  Designer Who Codes: visual audit followed by atomic commits fixing each issue.
  Garry Tan's design review skill — treats UI like code, identifies and fixes
  design debt systematically.
triggers:
  - "design review"
  - "visual audit"
  - "UI audit"
  - "design debt"
  - "fix design issues"
das:
  type: package
  category: design-review
  upstream: "https://github.com/garrytan/gstack"
  upstream_path: "design-review/SKILL.md"
  version: latest
  install: false
---

# design-review-garrytan

> Catalogue stub — part of [garrytan/gstack](https://github.com/garrytan/gstack) (`design-review`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/gstack/design-review/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Install** (the skills CLI cannot install this one):

   This skill is part of gstack and calls gstack's shared tooling (`~/.claude/skills/gstack/bin/…`), so install gstack itself rather than the single skill (`--skill design-review` fails because the CLI only sees gstack's root router, and even with `--full-depth` the copied instructions lack the tooling). `./setup` needs Bun, builds binaries, downloads Chromium and registers a Stop hook in your Claude settings (opt out with `./setup --no-timeline-stop-hook`); ask the user before running it. Upstream's README also tells agents to add a gstack section to CLAUDE.md after setup.

   ```bash
   git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
   cd ~/.claude/skills/gstack && ./setup
   ```

**Heads-up**

- **Requires:** Bun (setup refuses versions older than 1.3.3; upstream tests 1.4.2+), Git and Claude Code
- **License:** MIT
- **Download size:** ~98 MB.
<!-- das:install:end -->

## Invoke after install

- Skill name: `design-review`
- Trigger phrases: "design review", "visual audit", "UI audit", "fix design issues"

## What it does

"Designer Who Codes" approach: performs a structured visual audit of the UI, then fixes each issue with an atomic commit. Treats design debt like technical debt — identifies it, prioritizes it, and ships fixes. From Garry Tan's gstack, his toolkit for building well-designed products.

It expects a clean working tree (it offers to commit or stash your changes first) because every fix lands as its own commit.

## When NOT to use

- Planning a design before anything is built — use `plan-design-review` or `design-consultation`
- A review that must not touch code or git history — this skill edits files and commits
