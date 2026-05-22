---
name: addyosmani-quality
description: |
  6 web quality skills from Google Chrome's Addy Osmani: accessibility (WCAG),
  web quality audit (Lighthouse-style), Core Web Vitals (LCP/INP/CLS),
  performance, SEO, and security best practices.
triggers:
  - "Addy Osmani"
  - "web quality"
  - "core web vitals"
  - "web accessibility"
  - "Lighthouse audit"
  - "SEO audit"
  - "web best practices"
das:
  category: accessibility-quality
  upstream: "https://github.com/addyosmani/skills"
  version: latest
  install: false
---

# addyosmani-quality

> Catalogue stub — full package: [addyosmani/skills](https://github.com/addyosmani/skills)

## Decision tree

Run this before any web quality, performance, or accessibility audit:

1. **Is an Osmani skill already installed?**
   Check: `~/.design-agent-skills/skills/web-quality-audit/SKILL.md` exists (representative skill).
   - Yes → invoke the specific skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → install the specific skill below, then invoke it
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
# WCAG compliance, screen reader, keyboard navigation
npx skills add addyosmani/accessibility

# Lighthouse-style: performance, a11y, SEO, best practices
npx skills add addyosmani/web-quality-audit

# LCP, INP, CLS-specific optimizations
npx skills add addyosmani/core-web-vitals

# Loading speed, runtime efficiency, resource optimization
npx skills add addyosmani/performance

# Search engine optimization, structured data
npx skills add addyosmani/seo

# Security, modern web APIs, code quality
npx skills add addyosmani/best-practices
```

## Invoke after install

- `accessibility` — "WCAG compliance", "screen reader", "keyboard nav"
- `web-quality-audit` — "Lighthouse audit", "web quality"
- `core-web-vitals` — "LCP", "INP", "CLS", "Core Web Vitals"
- `performance` — "page speed", "loading performance"
- `seo` — "SEO", "structured data", "crawlability"
- `best-practices` — "web security", "modern APIs", "code quality"

## What it does

Addy Osmani's (Google Chrome) 6-skill web quality suite. Covers the complete quality axis: accessibility (WCAG 2.2), Lighthouse-style holistic audits, Core Web Vitals optimization, loading/runtime performance, SEO, and security best practices — each as a focused, actionable skill.
