---
name: cloudflare-web-perf
description: |
  Audit Core Web Vitals and render-blocking resources. Official skill published by Cloudflare
  for diagnosing and fixing LCP, INP, CLS and Lighthouse performance issues, driven by
  Chrome DevTools performance traces.
triggers:
  - "web performance"
  - "Core Web Vitals"
  - "LCP"
  - "CLS"
  - "INP"
  - "render blocking"
  - "cloudflare performance"
das:
  category: accessibility-quality
  upstream: "https://github.com/cloudflare/skills"
  upstream_path: "skills/web-perf/SKILL.md"
  version: latest
  install: true
---

# cloudflare-web-perf

> Catalogue stub — full skill: [cloudflare/skills](https://github.com/cloudflare/skills/blob/main/skills/web-perf/SKILL.md)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `web-perf`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/web-perf/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/web-perf/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `web-perf`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/cloudflare-web-perf ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add cloudflare/skills --skill web-perf -g -y
   ```

   **Project:**
   ```bash
   npx skills add cloudflare/skills --skill web-perf -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Chrome DevTools MCP server (chrome-devtools-mcp) for performance traces; without it the skill falls back to source and network analysis and says which measurements it could not collect
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

- Skill name: `web-perf`
- Trigger phrases: "web performance", "Core Web Vitals", "LCP", "CLS", "render blocking"

## What it does

Cloudflare's official skill for auditing and diagnosing website loading and interaction performance: Core Web Vitals (LCP, INP, CLS), Lighthouse performance scores and render-blocking resources. It tells the agent to retrieve current thresholds from web.dev and Chrome documentation rather than rely on memory, to use Chrome DevTools MCP traces when available, and to quantify the impact of each recommendation. The guidance is generic; it is not specific to Cloudflare products.

## When NOT to use

- Accessibility audits (ARIA, keyboard, contrast) — use `fixing-accessibility` or `wcag-audit-patterns`
- React or Next.js render performance specifically — use `vercel-skills`
