---
name: cc-slidev
description: |
  Claude Code plugin for creating developer-focused technical presentations (tech talks,
  conference content) using Slidev with evidence-based design guardrails for slide quality.
  Adds opinionated constraints on top of raw Slidev for presentation polish.
triggers:
  - "cc-slidev"
  - "rhuss slidev"
  - "conference slides"
  - "tech talk slides"
das:
  category: presentations
  upstream: "https://github.com/rhuss/cc-slidev"
  version: latest
  install: false
---

# cc-slidev

> Catalogue stub — full package: [rhuss/cc-slidev](https://github.com/rhuss/cc-slidev)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/cc-slidev/SKILL.md` exists.
   - Yes → invoke `cc-slidev` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
/plugin marketplace add rhuss/cc-slidev
```

## Invoke after install

- Skill name: `cc-slidev`
- Trigger phrases: "cc-slidev", "conference slides", "tech talk slides", "rhuss slidev"

## What it does

A Claude Code plugin that wraps Slidev for technical conference and developer talk slide creation. Adds evidence-based design guardrails — enforcing appropriate information density, visual hierarchy, and slide structure quality — on top of Slidev's flexible Markdown format. Best for developer advocates, engineers preparing conference talks, or teams producing standardized technical presentation content.

## When NOT to use

- Non-technical presentations where the constraints would be limiting
- When raw Slidev flexibility is preferred over guardrails — use slidev-skill instead
- Marp output — use marp-slides instead
- Reveal.js output — use revealjs-skill instead
