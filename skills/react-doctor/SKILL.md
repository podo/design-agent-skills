---
name: react-doctor
description: |
  Detects regressions in security, performance, correctness, and architecture
  across React codebases using score-based quality checks. Surfaces issues with
  severity ratings and actionable remediation steps for each finding.
triggers:
  - "react doctor"
  - "React audit"
  - "React performance"
  - "React security"
  - "component quality"
das:
  category: accessibility-quality
  upstream: "https://github.com/millionco/react-doctor"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# react-doctor

> Catalogue stub — full skill: [millionco/react-doctor](https://github.com/millionco/react-doctor)

## Decision tree

Run this before any React code quality audit:

1. **Is the full skill already installed?**
   Check: `~/.design-agent-skills/skills/react-doctor/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `react-doctor` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code prefix with `!` to run directly in the prompt

## Install command

```bash
npx skills add millionco/react-doctor
```

Or per-agent:
- Claude Code: `claude skills add millionco/react-doctor`
- Cursor/OpenCode: `npx skills add millionco/react-doctor`

## Invoke after install

- Skill name: `react-doctor`
- Trigger phrases: "react doctor", "React audit", "React performance", "React security", "component quality"

## What it does

Runs score-based quality checks across a React codebase to detect regressions in security, rendering performance, correctness, and architectural soundness. Returns findings ranked by severity with specific component locations and actionable remediation guidance for each issue.
