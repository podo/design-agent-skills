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

Run this before any web performance audit or optimization:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/cloudflare-web-perf/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `cloudflare-web-perf` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/cloudflare-web-perf && \
  curl -fsSL \
    https://raw.githubusercontent.com/cloudflare/skills/main/skills/web-perf/SKILL.md \
    -o ~/.claude/skills/cloudflare-web-perf/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/cloudflare-web-perf/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `cloudflare-web-perf`
- Trigger phrases: "web performance", "Core Web Vitals", "LCP", "CLS", "render blocking"

## What it does

Official Cloudflare skill for auditing and fixing Core Web Vitals — LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift), and TTFB. Identifies render-blocking resources, unoptimized images, and layout instability causes. Includes Cloudflare-specific fixes using Workers, Cache Rules, and Image Optimization.
