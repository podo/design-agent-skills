---
name: taste-skill
description: |
  High-agency frontend skill that gives AI good taste with tunable design variance,
  motion intensity, and visual density. Prevents generic AI UI slop through metric-based
  rules, strict component architecture, and premium design engineering directives.
triggers:
  - "design taste"
  - "visual taste"
  - "good taste"
  - "anti slop"
  - "visual density"
  - "premium UI"
  - "no generic UI"
  - "stop slop"
das:
  category: design-systems
  upstream: "https://github.com/Leonxlnx/taste-skill"
  upstream_path: "skills/taste-skill/SKILL.md"
  version: latest
  install: true
---

# taste-skill

> Catalogue stub — full skill lives at [@Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

## When to use this skill

Use when the user asks for any of:

- Premium, non-generic frontend UI — components, pages, dashboards, landing pages
- Explicit anti-slop / anti-AI-default design ("make it look good", "not generic", "with taste")
- Tunable design dials — they mention variance, motion level, or density preferences
- Any trigger phrase: "design taste", "good taste", "anti slop", "visual density", "premium UI"

**Do not use** for backend code, data pipelines, CLI tools, or pure logic — this skill is UI-only.

## How to install

This is a catalogue stub. The full skill (10 sections, ~600 lines of design directives) lives upstream.

**As an agent:** If the user triggers this skill and you do not have the full upstream installed, present them the command below and ask them to run it — or run it yourself if you have shell access.

```bash
mkdir -p ~/.claude/skills/taste-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md \
    -o ~/.claude/skills/taste-skill/SKILL.md
```

Verify the install succeeded:

```bash
head -5 ~/.claude/skills/taste-skill/SKILL.md
```

## How to invoke after install

Once installed, invoke by skill name or any trigger phrase:

- **Skill name:** `taste-skill` or `design-taste-frontend`
- **Trigger phrases:** "design taste", "good taste", "anti slop", "visual density", "premium UI"

The full skill activates with baseline dials already set — no config needed.

## What it does

Applies senior UI/UX engineer taste via three configurable dials:

| Dial | Default | Range | Effect |
|------|---------|-------|--------|
| `DESIGN_VARIANCE` | `8` | 1–10 | 1 = perfect symmetry → 10 = artsy asymmetry |
| `MOTION_INTENSITY` | `6` | 1–10 | 1 = static → 10 = cinematic spring physics |
| `VISUAL_DENSITY` | `4` | 1–10 | 1 = art gallery / airy → 10 = cockpit / data-packed |

Users can override dials in chat ("set motion to 3", "max density"). The full skill adjusts all
layout, typography, animation, and component rules to match.

**Enforces strict bans against AI design tells:** Inter font, centered hero sections, 3-column
equal card rows, neon glows, pure black (#000), AI-purple gradients, emoji in UI, Unsplash URLs,
and generic placeholder names (John Doe, Acme Corp).
