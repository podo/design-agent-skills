---
name: assimovt-productskills
description: |
  Focused product-management skills spanning the full lifecycle: discovery
  (user interviews, problem validation, JTBD, research synthesis), strategy
  (competitor analysis, positioning, strategy docs), prioritization (RICE,
  Shape Up scope-cutting and bet-sizing), evidence-first PRDs, plus launch
  plans, North Star metrics frameworks, A/B experiment design, and
  Now/Next/Later roadmaps.
triggers:
  - "productskills"
  - "assimovt"
  - "roadmap planning"
  - "metrics framework"
  - "North Star metric"
  - "experiment design"
  - "competitor analysis"
  - "Shape Up"
  - "bet sizing"
das:
  type: package
  category: product-pm
  upstream: "https://github.com/assimovt/productskills"
  version: latest
---

# assimovt-productskills

> Catalogue stub — full package: [assimovt/productskills](https://github.com/assimovt/productskills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 16 skills (`user-interview`, `problem-validation`, `jtbd-analysis`, `research-synthesis`, `opportunity-mapping`, `competitor-analysis`, `product-positioning`, `strategy-doc`, `feature-prioritization`, `scope-cutting`, `bet-sizing`, `prd-writing`, `launch-plan`, `metrics-framework`, `experiment-design`, `roadmap-planning`); checking the first.
   - Global: `f=~/.agents/skills/user-interview/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/user-interview/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `user-interview`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/assimovt-productskills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add assimovt/productskills --skill user-interview problem-validation jtbd-analysis research-synthesis opportunity-mapping competitor-analysis product-positioning strategy-doc feature-prioritization scope-cutting bet-sizing prd-writing launch-plan metrics-framework experiment-design roadmap-planning -g -y
   ```

   **Project:**
   ```bash
   npx skills add assimovt/productskills --skill user-interview problem-validation jtbd-analysis research-synthesis opportunity-mapping competitor-analysis product-positioning strategy-doc feature-prioritization scope-cutting bet-sizing prd-writing launch-plan metrics-framework experiment-design roadmap-planning -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add assimovt/productskills
/plugin install product-skills@productskills
```

**Heads-up**

- **License:** MIT
- **Name collision:** `competitor-analysis` is also written by `phuryn-pm-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
- **Name collision:** `experiment-design` is also written by `claude-pm-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill names: `user-interview`, `problem-validation`, `jtbd-analysis`, `research-synthesis`, `opportunity-mapping`, `competitor-analysis`, `product-positioning`, `strategy-doc`, `feature-prioritization`, `scope-cutting`, `bet-sizing`, `prd-writing`, `launch-plan`, `metrics-framework`, `experiment-design`, `roadmap-planning`
- Trigger phrases: "roadmap planning", "metrics framework", "North Star metric", "experiment design", "competitor analysis", "Shape Up", "bet sizing"

## What it does

Evidence-first PM skills, each shipped with a worked example. Strongest on the
areas the other catalogue PM packages don't cover deeply — roadmaps, metrics,
experimentation, competitive analysis, strategy, and Shape Up scoping.

| Sub-skill | Best for |
|-----------|----------|
| `user-interview` | Mom Test + YC's Five Questions — unbiased user interviews |
| `problem-validation` | Score problems on frequency × intensity × willingness-to-pay |
| `jtbd-analysis` | Jobs-to-be-Done + Forces of Progress |
| `research-synthesis` | Turn interview notes into atomic insights and patterns |
| `opportunity-mapping` | Opportunity Solution Trees (Teresa Torres) |
| `competitor-analysis` | Feature matrix, positioning map, strategic gaps |
| `product-positioning` | April Dunford's Obviously Awesome framework |
| `strategy-doc` | Playing to Win + Rumelt's Strategy Kernel |
| `feature-prioritization` | RICE scoring with enablers vs blockers lens |
| `scope-cutting` | Shape Up appetite — fixed time, variable scope |
| `bet-sizing` | Shape Up pitch format + Type 1/2 decision framework |
| `prd-writing` | Evidence-first, concise, measurable PRDs |
| `launch-plan` | Launch tiers (silent / soft / big-bang) with checklists |
| `metrics-framework` | North Star + input/output tree + counter-metrics |
| `experiment-design` | Hypothesis-driven A/B tests with a sample-size plan |
| `roadmap-planning` | Now/Next/Later roadmaps — outcomes, not features |

To install only some of them, run the install command with just those names after `--skill`.

## When NOT to use

- Customer journey maps / user story mapping → use `deanpeters-pm-skills`
- Triple Diamond / Design Sprint facilitation → use `pm-skills`
- Broad PM marketplace (GTM, data analytics) → use `phuryn-pm-skills`
- Behavioral product design, growth loops → use `lenny-skills`
- Go-to-market and sales motion → use `chadboyda-gtm`
