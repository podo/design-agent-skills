---
name: cloudflare-web-perf
description: |
  Audit Core Web Vitals and render-blocking resources. Official Cloudflare skill
  for identifying and fixing LCP, INP, CLS, TTFB issues with Cloudflare-specific
  optimization strategies.
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

## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `web-perf`, so it installs next to this pointer (the pointer is not replaced). Check for the installed copy:
   - Global: `[ -f ~/.agents/skills/web-perf/SKILL.md ] && echo "installed" || echo "pointer"`
   - Project: `[ -f .agents/skills/web-perf/SKILL.md ] && echo "installed" || echo "pointer"`
   - `installed` → the full skill is installed as `web-perf`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   To detect scope:
   ```bash
   [ -e ~/.agents/skills/cloudflare-web-perf ] && echo "global" || echo "project"
   ```

   **Global** (installed with `-g`):
   ```bash
   npx skills add cloudflare/skills --skill web-perf -g -y
   ```

   **Project** (installed without `-g`):
   ```bash
   npx skills add cloudflare/skills --skill web-perf -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.


## Invoke after install

- Skill name: `web-perf`
- Trigger phrases: "web performance", "Core Web Vitals", "LCP", "CLS", "render blocking"

## What it does

Official Cloudflare skill for auditing and fixing Core Web Vitals — LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift), and TTFB. Identifies render-blocking resources, unoptimized images, and layout instability causes. Includes Cloudflare-specific fixes using Workers, Cache Rules, and Image Optimization.
