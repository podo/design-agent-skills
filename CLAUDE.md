# design-agent-skills — Contributor Guide

This file is the authoritative reference for Claude Code when working on this repository.
Follow it exactly — the test suite enforces most of these rules automatically.

---

## What this repo is

A two-tier catalogue of design skills for Claude Code, Cursor, Codex, OpenCode, and 30+ other AI agents.

```
Tier 1 — Routing layer (6 routers, permanent)
  design-catalogue → domain catalogues → implementation skills

Tier 2 — Implementation pointers (128 stubs)
  Lightweight stubs that tell an agent what a skill does and how to fetch the real one.
  On first use the agent upgrades the pointer to the full skill in-place.
```

Skills install via: `npx skills add podo/design-agent-skills [-g]`
This fetches directly from GitHub — **npm publish is only needed for changes to `bin/cli.mjs`**.

---

## Repository layout

```
skills/<name>/
  stub.yaml     — machine-readable metadata (type, tier, upstream)
  SKILL.md      — human/agent-readable pointer with frontmatter + install instructions

test/
  stubs.test.js — run with: npm test
  cli.test.js   — bin entry tests

bin/cli.mjs     — thin wrapper around `npx skills add`
VERSION         — semver, single line
package.json    — version field must match VERSION
CHANGELOG.md    — keep-a-changelog format
README.md       — skills table, router table, supply chain section
```

---

## Adding a skill — checklist

1. Evaluate the skill (see criteria below)
2. Create `skills/<name>/stub.yaml` — set `rank: 3` by default; promote if clearly rank-1 or rank-2
3. Create `skills/<name>/SKILL.md`
4. Update `skills/design-catalogue/SKILL.md` — add to the right section + routing guide
5. Update the relevant domain catalogue SKILL.md
6. Update `README.md` — skills table row + supply chain tier count if community changes
7. Run `npm test` — must pass 100%
8. Bump version (see versioning section)
9. Commit and push to `main`
10. Create a GitHub release (`gh release create`) with the CHANGELOG body — CI automatically attaches the skills zip and publishes to npm

---

## Fixing bugs — checklist

1. Reproduce the bug and identify the root cause
2. Fix it
3. **Add a regression test** that would have caught the bug before the fix:
   - Data bugs (missing fields, wrong values in stub.yaml / SKILL.md) → `test/stubs.test.js`
   - CLI behaviour bugs (wrong counts, wrong filtering, wrong commands) → `test/cli.test.js`
4. Run `npm test` — must pass 100%
5. Bump the patch version (see versioning section)
6. Commit the fix and the test together

Do not close a bug fix without a test. The test is proof the bug is fixed and stays fixed.

---

## Evaluation criteria — what makes a good skill

### Accept if all of these are true

| Signal | Why it matters |
|--------|---------------|
| Has a `SKILL.md` at the upstream repo root (or known path) | The pointer's upgrade target must exist |
| Installable via `npx skills add owner/repo` OR has a clear alternative install | Agents must be able to fetch the real skill |
| Covers a gap not already in the catalogue | No point in two near-identical skills |
| Addresses a real design/engineering use case | Scope must fit: UI, motion, a11y, Figma, data viz, content, etc. |

### Strong positive signals

- 50+ GitHub stars (traction, maintenance signal)
- Official org account (Anthropic, Vercel, Google, Expo, GSAP, LottieFiles…) → `tier: official`
- Active commits in the last 6 months
- Multiple sub-skills or slash commands (high density of capability)
- Unique angle not covered elsewhere in the catalogue

### Skip if any of these are true

- Archived repository
- `curl | bash` only install, no `npx skills add` pathway, and no reasonable `type: package` alternative
- Heavy overlap with an existing catalogue entry and no meaningful differentiation
- Not a SKILL.md — MCPs, web tools, VS Code extensions, pip packages go elsewhere
- Lives in a completely different ecosystem (pip/skilz, VS Code marketplace, etc.)
- 0 stars and fewer than 5 commits (too immature / likely abandoned)

### Tier assignment

| Tier | When to use |
|------|-------------|
| `official` | Published by the company/project that owns the upstream (Anthropic, Figma, Vercel, Expo, GSAP, LottieFiles, shadcn, remotion…) |
| `community` | Published by an individual or third party; 1+ stars; actively maintained |
| `experimental` | Very new, 0 stars, or unverified upstream — excluded from default installs |

### Rank assignment

`rank` controls which install profile includes this skill (`npx design-agent-skills --picks / --essentials / --all`).

| Rank | Profile | Criteria |
|------|---------|----------|
| `1` | **Picks** | Best-in-class for its category — one winner per domain. High stars, official when available, no redundancy. |
| `2` | **Essentials** | Adds real coverage without duplicating rank-1. Covers sub-niches, secondary tools, solid community picks. |
| `3` | **Extended** | Niche, experimental, heavy overlap with rank-1/2, platform-specific, or low star count. |

**Rules:**
- Routers (`type: router`) are **exempt** from rank — always installed.
- Every other stub **must** have a `rank` field (test enforces this).
- When in doubt: new skills default to `rank: 3`. Promote to `rank: 2` once quality is confirmed; `rank: 1` only when it's the clear winner for its category.

---

## stub.yaml — format and rules

Every skill directory must have a `stub.yaml`. The test suite enforces all rules below.

### Fields

```yaml
type: skill           # REQUIRED — one of: router | skill | package | platform
tier: community       # REQUIRED — one of: official | community | experimental
rank: 2               # REQUIRED (non-routers) — one of: 1 | 2 | 3 (see Rank assignment below)
upstream: https://github.com/owner/repo   # REQUIRED for type:skill; forbidden for type:router
upstream_path: SKILL.md                   # optional — path within repo to the SKILL.md
version: latest       # always "latest"
```

### Type selection

| Type | Use when | Upgrade path |
|------|----------|-------------|
| `router` | Domain navigator (never add new routers — exactly 6 exist) | Never — always from this repo |
| `skill` | Single upstream `SKILL.md` installable via `npx skills add owner/repo` | `npx skills add owner/repo --skill <name>` |
| `package` | Multi-skill GitHub package, or skill with a custom install mechanism | `npx skills add owner/repo` (no `--skill` flag) |
| `platform` | Platform with template variables — must NOT be fetched directly | Manual per platform docs |

**Rule**: `type: router` must NOT have an `upstream` field. `type: skill` MUST have one.

### Examples

```yaml
# type: skill — single upstream SKILL.md, npx skills add
type: skill
tier: community
upstream: https://github.com/content-designer/ux-writing-skill
upstream_path: SKILL.md
version: latest
```

```yaml
# type: package — multi-skill or custom install
type: package
tier: community
upstream: https://github.com/gregorymm/humanize-text
version: latest
```

```yaml
# type: router — no upstream, permanent
type: router
tier: official
note: "Meta-navigator for the design-agent-skills catalogue"
```

---

## SKILL.md — format and rules

Every skill directory must have a `SKILL.md`. The test suite validates the frontmatter.

### Frontmatter rules

```yaml
---
name: <skill-name>         # REQUIRED — must exactly match the directory name
description: |             # REQUIRED — multiline OK; used by agents for discovery
  One or two sentences.
  What it does, not marketing copy.
triggers:                  # REQUIRED — at least one; no duplicates across the whole catalogue
  - "phrase that activates this skill"
  - "another phrase"
das:                       # optional block — can hold type/category for tooling
  type: skill
  category: content-design
  upstream: "https://github.com/owner/repo"
  version: latest
---
```

### Trigger rules

- Triggers are matched exactly against user messages — keep them natural phrases
- No two skills in the catalogue can share the same trigger (test enforces this)
- Use longer, specific phrases for impl skills (`"UX writing skill"`, `"microcopy pattern"`)
- Use shorter, generic phrases for routers (`"UX writing skills"`, `"microcopy"`)
- Check for conflicts before adding: `grep -r "your trigger" skills/*/SKILL.md`

### Body sections (type:skill and type:package)

```markdown
# <skill-name>

> Catalogue stub — full skill: [owner/repo](https://github.com/owner/repo)

## Decision tree        ← type:skill only; omit for type:package

1. Is the full skill already installed?
   ...detect and branch...

2. Detect scope, then install:
   ...global vs project commands...

## Install the full skill    ← type:package; replaces decision tree

Via skills CLI:
npx skills add owner/repo [-g]

## Invoke after install

...trigger phrases or slash commands...

## What it does

...capability summary...

## When NOT to use

...redirect to alternatives...
```

### type:skill — mandatory upgrade command format

The test suite checks both of these lines exist in every `type:skill` SKILL.md:

```bash
# Global install:
npx skills add owner/repo --skill <skillname> -g -y

# Project install:
npx skills add owner/repo --skill <skillname> -y
```

The `--skill <skillname>` flag must exactly match the directory name.
Do NOT use `curl` — the test will fail.

### Decision tree pattern for type:skill

```markdown
## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/<name>/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/<name>/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/<name> ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add owner/repo --skill <name> -g -y
   ```

   **Project:**
   ```bash
   npx skills add owner/repo --skill <name> -y
   ```
```

---

## Updating routers

When adding a new skill, update **both**:

### 1. `skills/design-catalogue/SKILL.md` (top-level router)

- Add a row to the right section in the `## Catalogue index`
- Add 1–3 rows to `## Routing guide` at the bottom
- If it's a content/copy skill, also update the domain fast-path table description

### 2. Domain catalogue (pick one)

| Domain | File | Add when |
|--------|------|----------|
| Motion, 3D, shaders, animation | `skills/motion-catalogue/SKILL.md` | GSAP, Three.js, Lottie, shader, generative art, video |
| Figma, design-to-code, tokens | `skills/figma-catalogue/SKILL.md` | Figma, Stitch, design tokens, design-to-code |
| Accessibility, WCAG, performance | `skills/accessibility-catalogue/SKILL.md` | a11y audits, WCAG, Core Web Vitals, React quality |
| UI craft, visual, brand, mobile | `skills/design-engineering-catalogue/SKILL.md` | Taste, color, typography, iOS/Android, brand, components |
| Slides, diagrams, data viz, PM, copy | `skills/content-catalogue/SKILL.md` | Presentations, wireframes, charts, PM, UX writing, copywriting |

### 3. `README.md`

- Add a row to the right section in `## Skills`
- Bump skill counts in lines 4, 20, and the tier table (line ~70)
- Update supply chain community/official/experimental counts if tier changes

---

## Category values

Use these exact strings in `stub.yaml` and `das:` blocks:

| Category | Used for |
|----------|----------|
| `design-systems` | UI taste, brand, design engineering, aesthetic anchors |
| `creative-3d` | Motion, animation, 3D, shaders, generative art, video |
| `interaction-polish` | UX polish, user journeys, interaction patterns, audits |
| `visual-components` | Color, typography, components, mobile platform design |
| `accessibility-quality` | a11y, WCAG, performance, quality audits |
| `design-review` | Design review, critique, creative direction, UX strategy |
| `figma-code` | Figma, design-to-code, tokens, design system tooling |
| `official-suites` | Official org skill packages (Anthropic, Vercel, Expo…) |
| `diagrams` | Wireframes, excalidraw, flowcharts, architecture diagrams |
| `data-visualization` | Charts, D3, data analysis, BI |
| `presentations` | Slides, PowerPoint, Reveal.js, Slidev, MARP |
| `product-pm` | PM frameworks, PRD, discovery, product strategy |
| `content-design` | UX writing, copywriting, microcopy, AI text quality |
| `email-design` | HTML email, MJML, email templates |
| `tui-terminal` | Terminal UI, TUI frameworks (Textual, Ratatui, Bubble Tea, Ink) |
| `meta` | Catalogue routers and meta-skills |
| `motion-animation` | Motion design, animation principles, timing, easing |
| `design-engineering` | Design-engineering crossover: bridging design and code |
| `design-research` | User research, usability testing, discovery methods |

---

## Versioning

### When to bump

| Change | Version bump |
|--------|-------------|
| New skills added | Minor (`1.6.0` → `1.7.0`) |
| Router/catalogue content updates only | Patch (`1.6.0` → `1.6.1`) |
| Breaking changes to CLI or install format | Major |
| README/CLAUDE.md only | No bump required |

### How to bump

Update these three files atomically:

```bash
# 1. VERSION file
echo "1.7.0" > VERSION

# 2. package.json
npm version 1.7.0 --no-git-tag-version

# 3. CHANGELOG.md — add entry at the top (after the header)
```

### Creating a GitHub release

After pushing the version bump, create a GitHub release. Use the CHANGELOG entry as the release body.

```bash
gh release create v<version> \
  --title "v<version> — Short description of what's new" \
  --latest \
  --notes "$(cat <<'EOF'
## Added

- **`skill-name`** — One-line description. (`owner/repo`, N ★)

## Changed

- **`router-name` router** — What changed.

Catalogue grows from N → M skills.
EOF
)"
```

**Rules:**
- Tag must match the `VERSION` file exactly (e.g. `v1.7.0`)
- Always pass `--latest` on the newest release so GitHub surfaces it correctly
- Copy the body verbatim from `CHANGELOG.md` — no paraphrasing
- Create the release **after** pushing to main (the tag must exist on the remote)

### What GitHub Actions does automatically on release

The `.github/workflows/publish.yml` workflow fires on every `gh release create` and:

1. Runs `npm test` — must pass before anything publishes
2. Attaches a **skills-only zip** (`design-agent-skills-vX.Y.Z.zip`) to the release — contains only `skills/`, no source code
3. Publishes to **npm** via Trusted Publishing (OIDC — no token secret required)

**You do not need to run `npm publish` manually.** Creating the GitHub release is the only trigger needed.

**Never** `npm publish` by hand — it will conflict with the workflow if the version is already in flight, and it bypasses the test gate.

### CHANGELOG format

```markdown
## [1.7.0] — YYYY-MM-DD

### Added

- **`skill-name`** — One-line description. vX.Y.Z (`owner/repo`, N ★)

### Changed

- **`router-name` router** — What changed in the router.

Catalogue grows from N → M skills.
```

---

## Running tests

```bash
npm test
```

2252 tests across 2 suites. All must pass before committing.

### What the tests check

| Suite | Checks |
|-------|--------|
| `file presence` | Every skill dir has both `stub.yaml` and `SKILL.md` |
| `stub.yaml validity` | `type` is one of `router/skill/package/platform`; `tier` is one of `official/community/experimental`; routers have no `upstream`; skills have `upstream` |
| `SKILL.md frontmatter` | Has `name`, `description`, `triggers` (≥1); `name` matches directory name |
| `type:skill upgrade commands` | Contains `npx skills add`; contains `--skill <name>`; no legacy `~/.design-agent-skills/` paths; no `curl` |
| `catalogue-level invariants` | Exactly 6 routers; no duplicate trigger phrases across all skills |

### Diagnosing failures

```bash
# Check for duplicate triggers before adding
grep -h "  - " skills/*/SKILL.md | sort | uniq -d

# Verify a new skill's stub
cat skills/<name>/stub.yaml

# Verify SKILL.md frontmatter
head -20 skills/<name>/SKILL.md
```

---

## Common mistakes

| Mistake | Test that catches it | Fix |
|---------|---------------------|-----|
| `name:` in SKILL.md frontmatter doesn't match directory name | `SKILL.md frontmatter → name matches directory` | Make them identical |
| `type:skill` SKILL.md uses `curl` instead of `npx skills add` | `type:skill upgrade commands` | Replace with `npx skills add owner/repo --skill <name>` |
| `type:skill` SKILL.md missing `--skill <name>` flag | `upgrade command includes skill name` | Add `--skill <name>` to both install commands |
| Trigger phrase already used by another skill | `no duplicate trigger phrases` | Pick a more specific phrase; check with grep first |
| New router added (8th router) | `has exactly 6 router skills` | Routers are permanent and fixed — never add a new router |
| `type:router` has `upstream` field | `router type has no upstream` | Remove the `upstream` field |
| `type:skill` missing `upstream` in stub.yaml | `skill type has upstream` | Add `upstream: https://github.com/owner/repo` |
| Non-router stub missing `rank` field | `non-router has rank` | Add `rank: 1`, `2`, or `3` to stub.yaml |
| Forgot to update both routers | Manual review | Always update design-catalogue + domain catalogue |
| Forgot to update README skill count | Manual review | Update count on lines 4, 20, and tier table |

---

## What NOT to add

- **MCP servers** — different protocol, not `SKILL.md` skills
- **VS Code extensions** — different ecosystem
- **pip/skilz ecosystem** — different install toolchain
- **Archived repos** — even if the skill was good
- **Skills that require account signup to install** (platform type is OK but flag it)
- **A 7th router** — the 6 routers are a hardcoded catalogue invariant

---

## Worked example — adding a new skill

Say you want to add `aperepel/textual-tui-skill`:

```bash
# 1. Create the files
mkdir skills/textual-tui-skill

# 2. stub.yaml — type:package because install is via quickstart.sh, not npx skills add
cat > skills/textual-tui-skill/stub.yaml << 'EOF'
type: package
tier: community
rank: 2
upstream: https://github.com/aperepel/textual-tui-skill
version: latest
EOF

# 3. SKILL.md — see format above; category: tui-terminal
# 4. Add to content-catalogue (TUI & Terminal Design section)
# 5. Add to design-catalogue (TUI & Terminal Design section + routing guide)
# 6. Add to README.md (TUI & Terminal Design table)
# 7. Run tests
npm test

# 8. Commit all changes together
git add skills/textual-tui-skill/ skills/content-catalogue/SKILL.md \
        skills/design-catalogue/SKILL.md README.md CHANGELOG.md VERSION package.json
git commit -m "feat: add textual-tui-skill (Textual Python TUI, deep-dive)"
git push origin <branch>:main
```
