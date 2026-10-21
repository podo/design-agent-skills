---
name: email-html-mjml
description: |
  Generates cross-client responsive HTML email from MJML 5.x — Outlook 2013-365 safe,
  Gmail-optimized, WCAG 2.1 AA accessible. Triggers automatically when asked to create,
  compile, or troubleshoot HTML email. Compiles with npx mjml, so it needs Node.js 20+.
triggers:
  - "MJML"
  - "HTML email"
  - "email template"
  - "Outlook-safe email"
  - "email-html-mjml"
das:
  type: skill
  category: email-design
  upstream: "https://github.com/framix-team/skill-email-html-mjml"
  upstream_path: "email-html-mjml/SKILL.md"
  version: latest
  install: true
---

# email-html-mjml

> Catalogue stub — full skill: [framix-team/skill-email-html-mjml](https://github.com/framix-team/skill-email-html-mjml)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/email-html-mjml/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/email-html-mjml/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `email-html-mjml`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/email-html-mjml ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add framix-team/skill-email-html-mjml --skill email-html-mjml -g -y
   ```

   **Project:**
   ```bash
   npx skills add framix-team/skill-email-html-mjml --skill email-html-mjml -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Node.js 20 or later; MJML installed per project (`npm install -D mjml`), never globally
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `email-html-mjml`
- Trigger phrases: "MJML", "HTML email", "email template", "Outlook-safe email"

## What it does

Generates production-ready HTML email using MJML 5.x as the authoring layer. MJML's responsive components compile to table-based HTML that is compatible with Outlook 2013 through 365, Gmail web and mobile, Apple Mail, and other major clients. The skill ships component references, example templates (newsletter, order confirmation, promo, basic layout) and compile instructions; it always delivers the `.mjml` source and the compiled `.html`, validated with MJML's strict mode and checked against Gmail's 102 KB clipping limit. Output follows accessibility rules (alt text, titles, contrast). The skill self-activates when asked to create, compile, or troubleshoot any HTML email.

It compiles with `npx mjml`, so Node.js 20 or later is required, and MJML itself is installed per project (`npm install -D mjml`).

## When NOT to use

- Marketing web page HTML — use design-html instead
- Animated web content or interactive landing pages
- Email rendering testing across clients (use a dedicated email testing service like Litmus)
