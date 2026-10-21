---
name: design-sprint
description: |
  Deeply researches a codebase, designs a feature through an annotated plan file,
  then decomposes it into an implementable issue hierarchy (parent + sub-issues
  with dependencies) on GitHub or Backlog. Nothing is published until you approve
  the exact content. Installs upstream's create-issue skill, which absorbed the
  earlier design-sprint skill.
triggers:
  - "design sprint"
  - "feature design sprint"
  - "design and decompose"
  - "design-sprint"
  - "design to issues"
  - "feature breakdown issues"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/aoshimash/skills"
  upstream_path: "plugins/aoshimash-skills/skills/create-issue/SKILL.md"
  version: latest
---

# design-sprint

> Catalogue stub — full skill: [aoshimash/skills](https://github.com/aoshimash/skills) (`create-issue`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `create-issue`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/create-issue/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/create-issue/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `create-issue`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/design-sprint ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add aoshimash/skills --skill create-issue -g -y
   ```

   **Project:**
   ```bash
   npx skills add aoshimash/skills --skill create-issue -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add aoshimash/skills
/plugin install aoshimash-skills@aoshimash-skills
```

**Heads-up**

- **Requires:** gh CLI installed and authenticated (GitHub issues) or the bee CLI authenticated (Backlog issues); Creates issues on your tracker, only after you approve the exact content
- **License:** MIT
- **Name collision:** `design-sprint` is also written by `wondelai-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `create-issue`
- Trigger phrases: "design sprint", "design and decompose", "create an issue", "plan and create issues"

## What it does

Upstream folded its design-sprint workflow into `create-issue`, which has two flows. The **Lightweight Flow** files a single well-scoped issue after one batched question round and one draft approval. The **Design Flow** is the former design sprint:

| Step | Output |
|---|---|
| **Setup** | Detect the issue tracker (GitHub or Backlog) and the repository's issue templates |
| **Research and design** | Deep codebase reading, then one consolidated plan file (research, design, open questions, split proposal) |
| **Annotation cycle** | You annotate the plan inline in the markdown file; the agent revises until it is right |
| **Issue creation** | After one final approval, a parent issue plus sub-issues with dependencies; research findings are kept as an issue comment |

Core principles: issues describe motivation and proposal, never implementation steps; ambiguity is resolved before an issue is created; nothing is published without explicit approval; splitting into sub-issues is always a proposal. Needs the `gh` CLI (GitHub) or the `bee` CLI (Backlog) authenticated.

## When NOT to use

- Design sprint workshop facilitation (Crazy 8s, HMW, voting) → use `pm-skills` (Design Sprint section) or `wondelai-skills` (Knapp's Design Sprint skill)
- PM discovery without code → use `deanpeters-pm-skills` or `pm-skills`
- Feature planning without issue creation → use `plan-design-review`
- Implementing the issues afterwards → upstream's separate `implement-issue` skill (not installed by this pointer)
