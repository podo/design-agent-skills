---
name: humanize-text
description: |
  Scores and rewrites text to remove AI writing patterns. Rates content across
  7 dimensions — AI vocabulary, content inflation, grammar patterns, UX copy
  quality, structural tells, punctuation, and meta-content — each on a 1–10
  scale. Works with raw text, Figma URLs, and UI screenshots. Based on
  Wikipedia's Signs of AI Writing field guide.
triggers:
  - "humanize text"
  - "remove AI patterns"
  - "AI slop"
  - "de-slop"
  - "AI writing detection"
  - "UX copy quality score"
  - "humanize-text"
das:
  type: package
  category: visual-components
  upstream: "https://github.com/gregorymm/humanize-text"
  version: latest
---

# humanize-text

> Catalogue stub — full skill: [gregorymm/humanize-text](https://github.com/gregorymm/humanize-text)

## Install the full skill

Via the Claude Code plugin marketplace:

```bash
/plugin marketplace add gregorymm/humanize-text
```

Or install directly:
```bash
/plugin install humanize-text@gregorymm-humanize
```

## What it does

Analyzes any text and produces a per-dimension score (1–10) plus a human-rewritten version:

| Dimension | What it catches |
|---|---|
| **AI vocabulary** | Overused words: "delve", "leverage", "utilize", "seamlessly", "robust" |
| **Content inflation** | Unnecessary padding, redundant qualifiers, filler transitions |
| **Grammar patterns** | Passive overuse, nominalization, non-human sentence openers |
| **UX copy quality** | Button/label clarity, error message tone, empty state effectiveness |
| **Structural tells** | Excessive bullet lists, formulaic H2/H3 patterns, intro-body-conclusion rigidity |
| **Punctuation** | Em-dash overuse, ellipsis as hedge, unnatural comma placement |
| **Meta-content** | Self-referential phrases ("In this article…", "It's important to note…") |

Works across input types: paste raw text, provide a Figma URL, or share a UI screenshot.

## When NOT to use

- Writing new UI copy from scratch — use `ux-writing-skill`
- Writing new marketing copy — use `copywriting-skill`
- Full design audit — use `design-auditor` or `plan-design-review`
