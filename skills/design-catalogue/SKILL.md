---
name: design-catalogue
description: |
  Catalogue navigator for design-agent-skills. Lists available design skill stubs,
  matches user intent to the right stub, and routes to install and invoke.
  Use when the user wants to browse or find the right design skill.
triggers:
  - "what design skills"
  - "find a design skill"
  - "browse design skills"
  - "which skill for design"
  - "design skill for"
  - "show me design skills"
  - "what skills do you have"
das:
  category: meta
  type: navigator
  catalogue: true
---

# design-catalogue

Meta-skill for this catalogue. Activate when the user wants to browse, discover, or find
the right design skill — not when they've already named one.

## When to use

Activate when the user:
- Asks what design skills exist ("what skills do you have?", "show me design skills")
- Describes a problem but names no skill ("I want premium UI", "make it not look generic")
- Asks which skill fits a task ("what should I use for animations?", "which for good taste?")

Do **not** activate if the user already named a specific skill — route directly to that stub.

## How to respond

1. Present the catalogue index below
2. Recommend the best match with a one-line reason
3. Show the stub's install command for the match
4. Ask if they want to install and invoke it

## Catalogue index

| Skill | Category | Best for |
|-------|----------|----------|
| [`taste-skill`](../taste-skill/SKILL.md) | design-systems | Premium, non-generic UI — tunable variance, motion, and density dials |

## Routing guide

| User says | Route to |
|-----------|----------|
| "good taste", "anti slop", "premium UI", "not generic" | `taste-skill` |
| "design variance", "motion intensity", "visual density" | `taste-skill` |
| "no Inter font", "no 3-column cards", "no centered hero" | `taste-skill` |
| "bento grid", "glassmorphism", "spring physics UI" | `taste-skill` |

## No match

If intent doesn't match any stub:
- Say so directly: "No stub in this catalogue covers [X] yet."
- Suggest checking the repo for new additions
- Offer to help build a stub if they have an upstream skill in mind
