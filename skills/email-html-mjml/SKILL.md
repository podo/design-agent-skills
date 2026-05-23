---
name: email-html-mjml
description: |
  Generates cross-client HTML email from MJML 4.x — Outlook 2013-365 safe, Gmail-optimized,
  WCAG 2.1 AA accessible. Triggers automatically when asked to create, compile, or
  troubleshoot HTML email.
triggers:
  - "MJML"
  - "HTML email"
  - "email template"
  - "Outlook-safe email"
  - "email-html-mjml"
das:
  category: email-design
  upstream: "https://github.com/framix-team/skill-email-html-mjml"
  version: latest
  install: false
---

# email-html-mjml

> Catalogue stub — full package: [framix-team/skill-email-html-mjml](https://github.com/framix-team/skill-email-html-mjml)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.design-agent-skills/skills/email-html-mjml/SKILL.md` exists.
   - Yes → invoke `email-html-mjml` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the install command; in Claude Code, send it as a chat message starting with `!` — add `-g` for global install or omit for project-only

## Install command

```bash
npx skills add framix-team/skill-email-html-mjml
```

## Invoke after install

- Skill name: `email-html-mjml`
- Trigger phrases: "MJML", "HTML email", "email template", "Outlook-safe email"

## What it does

Generates production-ready HTML email using MJML 4.x as the authoring layer. MJML's responsive components compile to table-based HTML that is compatible with Outlook 2013 through 365, Gmail web and mobile, Apple Mail, and other major clients. Output meets WCAG 2.1 AA accessibility standards (sufficient contrast, semantic structure, alt text). The skill self-activates when asked to create, compile, or troubleshoot any HTML email.

## When NOT to use

- Marketing web page HTML — use design-html instead
- Animated web content or interactive landing pages
- Email rendering testing across clients (use a dedicated email testing service like Litmus)
