---
name: service-blueprint
description: |
  Generate professional service blueprints (NN/g, GDS, Practical Service Design): the five
  swim lanes, lines of interaction/visibility/internal-interaction, plus a JSON schema and render pipeline.
triggers:
  - "service blueprint"
  - "service design blueprint"
  - "frontstage backstage"
  - "service delivery map"
das:
  type: package
  category: design-review
  upstream: "https://github.com/j-clegg/service-blueprint-skill"
  version: latest
---

# service-blueprint

> Catalogue stub — full package: [j-clegg/service-blueprint-skill](https://github.com/j-clegg/service-blueprint-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Check: `~/.agents/service-blueprint-skill/SKILL.md` exists.
   - Yes → invoke it and proceed
   - No → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The upstream SKILL.md has no YAML frontmatter (name, description), so the skills CLI skips it and installs nothing ("No valid skills found"). Clone the repo to a fixed folder and have your agent read its SKILL.md directly; this pointer stays installed as the entry point.

   ```bash
   git clone --depth=1 https://github.com/j-clegg/service-blueprint-skill.git ~/.agents/service-blueprint-skill
   ```

**Heads-up**

- **License:** MIT
- **Name collision:** `service-blueprint` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Read `~/.agents/service-blueprint-skill/SKILL.md` and follow it; it points to `METHODOLOGY.md`, `SCHEMA.md` and `RENDERING.md` in the same folder
- Trigger phrases: "service blueprint", "service design blueprint", "frontstage backstage", "service delivery map"

## What it does

A service-blueprint package: sourced methodology (`METHODOLOGY.md`), a machine-readable blueprint schema (`SCHEMA.md`), and an HTML/Mermaid output pipeline (`RENDERING.md`) with example blueprints and a stylesheet. Maps user actions, frontstage, backstage, and support processes across the lines of interaction, visibility and internal interaction, with timed facilitation and moments-of-truth analysis. Follows methodology from Nielsen Norman Group, the UK Government Digital Service and Practical Service Design.

## When NOT to use

- Single-user emotional journey only → use a journey-map skill
- High-level UX strategy → use `design-consultation`
- You want a skill the skills CLI can install and register by name → use `designer-skills`, whose `service-blueprint` skill is a lighter take on the same method
