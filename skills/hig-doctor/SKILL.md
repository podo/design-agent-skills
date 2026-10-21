---
name: hig-doctor
description: |
  Audits interface source code (Swift, UIKit, AppKit, React, Vue, Svelte, Angular,
  Compose, Android XML, Flutter, CSS, HTML) for Apple HIG-aligned interface and
  accessibility problems by running the HIG Doctor CLI, then reports findings by severity
  and helps remediate them. Review evidence, not certification.
triggers:
  - "HIG doctor"
  - "HIG compliance"
  - "Apple HIG audit"
  - "HIG diagnosis"
  - "fix Apple HIG"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/raintree-technology/hig-doctor"
  upstream_path: "plugin/skills/hig-doctor-audit/SKILL.md"
  version: latest
  install: true
---

# hig-doctor

> Catalogue stub — full skill: [raintree-technology/hig-doctor](https://github.com/raintree-technology/hig-doctor/tree/main/plugin/skills/hig-doctor-audit)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `hig-doctor-audit`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/hig-doctor-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/hig-doctor-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `hig-doctor-audit`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/hig-doctor ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add raintree-technology/hig-doctor/plugin/skills/hig-doctor-audit -g -y
   ```

   **Project:**
   ```bash
   npx skills add raintree-technology/hig-doctor/plugin/skills/hig-doctor-audit -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js with npx and npm registry access at audit time (the skill runs a version-pinned `npx -y hig-doctor@<version> <target> --json`); optional companion for the guidance behind each finding: the apple-hig-skills pointer (the hig-* reference skills)
- **License:** MIT (tooling; Apple reference content is attributed, see upstream THIRD_PARTY_NOTICES.md)
<!-- das:install:end -->

## Invoke after install

- Skill name: `hig-doctor-audit`
- Trigger phrases: "HIG compliance", "Apple HIG audit", "scan this code for HIG issues", "fix Apple HIG"

## What it does

A scan-and-remediate workflow around the HIG Doctor CLI. Given a repository or directory, it runs the version-pinned `npx -y hig-doctor@<version> <target> --json`, reports the detected frameworks, severity counts, rule IDs, locations and analysis limits, separates mechanical fixes from changes that need product, design or accessibility judgment, and, if you authorise remediation, fixes and re-runs the audit. It preserves justified suppressions and baselines and never claims that a scan proves HIG compliance. It does nothing useful without source code to audit.

Needs Node.js with `npx` and npm registry access. The guidance behind each finding comes from the HIG reference skills, which are a separate pointer: `apple-hig-skills`.

## When NOT to use

- General Apple design advice with no source to audit — use `apple-hig-skills` (the `hig-*` reference skills)
- SwiftUI implementation help — use `swiftui-patterns` or `swiftui-claude-skills`
- Web accessibility conformance audits — use `wcag-audit-patterns`
