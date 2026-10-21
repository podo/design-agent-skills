# design-agent-skills — Contributor Guide

This file is the authoritative reference for Claude Code when working on this repository.
Follow it exactly — the test suite enforces most of these rules automatically.

---

## What this repo is

A two-tier catalogue of design skills for Claude Code, Cursor, Codex, OpenCode, and 30+ other AI agents.

```
Tier 1 — Routing layer (6 routers, permanent)
  design-catalogue → domain catalogues → implementation skills

Tier 2 — Implementation pointers (160 stubs)
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
2. Find the real install: `npx skills add owner/repo --list` shows the upstream skill names (what `--skill` and `installed_as` use)
3. `node scripts/add-skill.mjs` — writes `stub.yaml` (rank 3 by default) and a `SKILL.md` with a generated install section; or copy a migrated stub
4. Fill `installed_as`, `install_default` (and `requires`/`license`/`size_mb` when relevant) in `stub.yaml`, then `npm run generate`
5. **Prove it installs:** `node scripts/check-installs.mjs --real --only <name>` (the landed directories must equal `installed_as`)
6. Write "What it does" / "When NOT to use" by hand (no hardcoded counts)
7. Update `skills/design-catalogue/SKILL.md` — add to the right section + routing guide (`npm test` fails on a stub missing from it)
8. Update the relevant domain catalogue SKILL.md
9. Regenerate the README table: `node scripts/generate-readme-table.mjs`, then update the counts
10. Run `npm test` — must pass 100%
11. Bump version (see versioning section)
12. Open a PR (`main` is protected); push the version tag after it merges — CI creates the release with the skills zip and publishes to npm automatically

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
category: tui-terminal                    # REQUIRED — must match a VALID_CATEGORIES entry
upstream: https://github.com/owner/repo   # REQUIRED for type:skill; forbidden for type:router
upstream_path: SKILL.md                   # optional — path within repo to the SKILL.md
version: latest       # always "latest"

# ── install contract (REQUIRED on every non-router stub; see "Install fields" below) ──
installed_as:                             # the upstream skill NAMES this stub installs (what --skill takes)
  - skill-a
  - skill-b
install_default: npx skills add owner/repo --skill skill-a skill-b   # the primary command (no -g, no -y)

# ── optional ──
install_extra:                            # more commands that complete the install (same rules as install_default)
  - npx skills add owner/repo/path/to/skill
install_claude:                           # Claude Code plugin route, the full two steps
  - /plugin marketplace add owner/repo
  - /plugin install name@marketplace
install_mode: npx                         # npx (default) | manual | builtin — see below
requires:                                 # shown to users: account, API key, MCP server, runtime, companion skill
  - FIGMA_API_KEY and the Figma MCP server
license: MIT                              # SPDX id (from `gh api repos/o/r --jq .license.spdx_id`) or a short note
size_mb: 150                              # repo size in MB; >= 100 adds a clone-timeout warning
conflicts_with:                           # stubs that write the same directory, incl. this stub's own pointer directory (must be mutual)
  - other-stub
note: "..."                               # maintainer annotation; never shown to agents
```

### Install fields

`stub.yaml` is the single source of truth for how a pointer installs. The install section of each
`SKILL.md` (between `<!-- das:install:start -->` and `<!-- das:install:end -->`) is **generated** from
it: edit `stub.yaml`, run `npm run generate`, and never hand-edit inside the markers. The hand-written
parts of a pointer are the frontmatter, the title line, `## Invoke after install`, `## What it does`
and `## When NOT to use`.

| Field | Rule |
|-------|------|
| `installed_as` | Exact upstream skill names (frontmatter `name`, which is what `--skill` matches). The CLI installs each into `.agents/skills/<sanitised name>` (lowercase, runs of characters outside `[a-z0-9._]` become `-`; `stitch::x` → `stitch-x`). **This list must equal what the install really lands** — `npm run verify:installs` checks it exactly. |
| `install_default` | `npx skills add <owner/repo or owner/repo/subpath or raw SKILL.md URL> [--skill a b c]`. Must target the stub's own upstream repo. **No `-g`, `-y`, `--yes` or `--all`** (the pointer adds `-g -y` itself). Prefer a targeted `--skill a b c` over a bare repo install so `installed_as` is exact. |
| `install_mode: manual` | For skills the CLI cannot install (no/unparseable frontmatter, shared tooling like gstack, a repo too big to clone). Needs `manual_reason`, `install_steps` (shell lines) and optionally `install_check` (a path whose existence means "installed"). `npm run verify:installs` replays only the safe steps (`git clone`, `git -C … sparse-checkout`, `npx skills add <clone path>`) in a scratch dir and never runs `./setup`, `cp`, `curl` or `pip`. |
| `install_mode: builtin` | The skill is a feature of an app, nothing to install (e.g. Nimbalyst). Needs `manual_reason`. |
| `install_claude` | The **complete** plugin route: a `/plugin marketplace add …` is only valid together with a `/plugin install name@marketplace`. Must start with `/plugin` or `claude plugin`. |
| `conflicts_with` | Two different upstreams that write the same directory overwrite each other silently. That includes a stub's own pointer directory (`skills/<name>`): if another stub installs a skill with that name, installing it replaces your pointer. Declare it on both stubs; the pointer then warns. The same upstream listed twice is fine. |

Banned in any install field or pointer (lint-enforced): `claude skills add` and `claude plugin add`
(neither is a Claude Code command), `--skill <placeholder>`, the legacy `~/.design-agent-skills` path,
and hardcoded skill/agent/command counts in the description or prose (they go stale; see `design-with-claude`).

Offline checks for one stub, without running the whole suite:

```bash
node scripts/lint-stubs.mjs --only my-stub            # install schema, banned commands, pointer in sync
node scripts/generate-pointers.mjs --only my-stub     # rewrite the generated install section
SKILLS_BIN=/path/to/skills node scripts/check-installs.mjs --real --only my-stub   # REAL install, exact match
```

### Type selection

| Type | Use when | Upgrade path |
|------|----------|-------------|
| `router` | Domain navigator (never add new routers — exactly 6 exist) | Never — always from this repo |
| `skill` | One upstream skill installable via `npx skills add owner/repo --skill <upstream-name>` | `install_default` |
| `package` | Several skills from one upstream (`--skill a b c`), or a skill with a custom install | `install_default`, or `install_mode: manual` |
| `platform` | A platform/app the skills CLI cannot install | `install_mode: manual` / `builtin` |

**Rule**: `type: router` must NOT have an `upstream` field. `type: skill` MUST have one.

### Examples

```yaml
# type: skill — one upstream skill whose name differs from our directory (ux-writing-skill -> ux-writing)
type: skill
tier: community
rank: 1
category: content-design
upstream: https://github.com/content-designer/ux-writing-skill
upstream_path: SKILL.md
version: latest
install_default: npx skills add content-designer/ux-writing-skill --skill ux-writing
installed_as: ux-writing
```

```yaml
# type: package — several skills from one upstream, with heads-up facts
type: package
tier: official
rank: 1
category: official-suites
upstream: https://github.com/anthropics/skills
version: latest
install_default: npx skills add anthropics/skills --skill frontend-design pptx
installed_as:
  - frontend-design
  - pptx
license: pptx is proprietary; the others are Apache-2.0 or per-skill
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

<!-- das:install:start … -->     ← GENERATED from stub.yaml (decision tree, install commands, heads-up)
<!-- das:install:end -->

## Invoke after install          ← hand-written; every `Skill name:` must be one of installed_as

...trigger phrases or slash commands...

## What it does

...capability summary (no hardcoded counts; they go stale)...

## When NOT to use

...redirect to alternatives...
```

### Install route rules

`--skill` matches the **upstream SKILL.md frontmatter `name`**, not our directory name. When the two
differ (directory `guizang-ppt`, upstream skill `guizang-ppt-skill`) the full skill installs *next to*
the pointer instead of replacing it; the generated "already installed?" check handles both cases by
testing that the installed `SKILL.md` exists and no longer carries the pointer's `das:` marker.

**Always verify before committing** — a wrong name fails silently for users:

```bash
npx skills add owner/repo --list                 # the names listed are what --skill accepts
SKILLS_BIN=… node scripts/check-installs.mjs --real --only my-stub    # real install, exact match with installed_as
```

- **Nested or hidden skills** (under a plugin path, or the repo has a root `SKILL.md`): install by subpath
  `npx skills add owner/repo/path/to/skill`, or use the CLI's `--full-depth`.
- **Huge repos** (the CLI gives up cloning after 300 s; raise it with `SKILLS_CLONE_TIMEOUT_MS`): prefer a raw
  single-file URL (`npx skills add https://raw.githubusercontent.com/o/r/main/skills/x/SKILL.md`) or a
  `manual` sparse clone (`git clone --depth 1 --filter=blob:none --sparse …` + `git -C … sparse-checkout set …`).
- **Skills that call shared tooling elsewhere in their repo** (gstack) must be installed as a whole:
  `install_mode: manual` with the upstream's real steps.
- **Upstream `SKILL.md` with no or unparseable YAML frontmatter** is invisible to the CLI: document the
  upstream's manual install (`install_mode: manual`).
- Do NOT use `curl`/`cp` into the pointer's own directory; it nests the skill inside the pointer.

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

`main` is a **protected branch** — `git push origin main` is rejected by the branch
protection hook. The version bump goes through a PR like any other change, and only
then does the tag get pushed.

```bash
# 1. Bump VERSION + package.json + CHANGELOG on a branch
git checkout -b release-<version>
git commit -am "chore: release <version>"
git push origin release-<version>

# 2. PR it, wait for `validate`, merge
gh pr create --base main --title "chore: release <version>"
gh pr merge <n> --squash --delete-branch

# 3. Tag main — this is what triggers the release + npm publish
git checkout main && git pull --ff-only
git tag v<version>
git push origin v<version>
```

CI does the rest — it runs tests, builds the skills-only zip, creates the GitHub
release with the zip attached, and publishes to npm.

Do **not** run `gh release create` manually — it creates a release before the zip is
ready, and GitHub marks that release immutable (no further asset uploads allowed).

**Rules:**
- Tag must match the `VERSION` file exactly (e.g. `v1.7.0`)
- Push the tag **after** the version bump commit is merged to `main`
- The CHANGELOG entry for the tagged version is extracted automatically for the release body
- Auto-merge is disabled on this repo, so `gh pr merge --auto` fails; and branches must
  be up to date before merging, so two PRs touching the same file serialize (the second
  needs `gh pr update-branch` and a fresh CI run)

### What GitHub Actions does automatically on tag push

The `.github/workflows/publish.yml` workflow fires on every `git push origin v*` and:

1. Runs `npm test` — must pass before anything publishes
2. Builds a **skills-only zip** (`design-agent-skills-vX.Y.Z.zip`) — contains only `skills/`, no source code
3. Creates the GitHub release with the zip attached and notes from `CHANGELOG.md`
4. Publishes to **npm** via Trusted Publishing (OIDC — no token secret required)

**You do not need to run `npm publish` or `gh release create` manually.** Pushing the tag is the only trigger needed.

**Never** `npm publish` by hand — it will conflict with the workflow if the version is already in flight, and it bypasses the test gate.

### CHANGELOG format

```markdown
## [1.7.0] — YYYY-MM-DD

### Added

- **`skill-name`** — One-line description. vX.Y.Z (`owner/repo`)

### Changed

- **`router-name` router** — What changed in the router.

Catalogue grows from N → M skills.
```

---

## Running tests

```bash
npm run test:fast   # stubs + pointers + check-installs + cli — hermetic, a few seconds. Use while iterating.
npm test            # the above plus install.sh / add-skill shell integration tests
npm run lint:stubs  # the install lint on its own, readable output (add `-- --only name`)
```

`test:fast` covers `stubs.test.js`, `pointers.test.js`, `check-installs.test.js` and `cli.test.js`: thousands of
assertions, no network. It enforces every rule in this file, so it is the gate that matters when
adding or editing a skill. It is also what `preversion` runs. Anything that needs a real install
(`npm run verify:installs`) is network-dependent and runs in CI instead.

The full `npm test` additionally drives `install.sh` end to end. Those tests fork one
subprocess per skill in several loops (`doctor` alone forks ~130 `awk`s), so they take
tens of seconds on macOS and are the slow half of the suite. All must pass before
committing.

### What the tests check

| Suite | Checks |
|-------|--------|
| `file presence` | Every skill dir has both `stub.yaml` and `SKILL.md` |
| `stub.yaml validity` | `type` is one of `router/skill/package/platform`; `tier` is one of `official/community/experimental`; routers have no `upstream`; skills have `upstream` |
| `SKILL.md frontmatter` | Has `name`, `description`, `triggers` (≥1); `name` matches directory name |
| `type:skill upgrade commands` | Contains `npx skills add`; contains `--skill <name>`; no legacy `~/.design-agent-skills/` paths; no `curl` |
| `catalogue-level invariants` | Exactly 6 routers; no duplicate trigger phrases across all skills |
| `pointers.test.js` (install schema) | Every stub has `installed_as` and a valid install route; install commands target the stub's own upstream, with no `-g`/`-y`/`--all`/placeholders; every `--skill` name is declared; the generated install section matches `stub.yaml`; "Skill name" lines are installed skills; no banned commands or hardcoded counts; no two different upstreams write the same directory (unless both declare `conflicts_with`); every stub is in the top-level router |
| `check-installs.test.js` | The real-install checker's pass/fail logic, offline, against a fake skills CLI |

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

## Upstream freshness check

`scripts/check-upstreams.mjs` verifies that every non-router stub still points at a live, non-stale upstream repo:

- **Deleted / blocked** upstream (HTTP 404 / 451) → hard failure. The pointer's upgrade target is gone; fix the URL or remove the skill.
- **Archived** upstream → stale warning (fails only with `--strict`).
- **Missing `upstream_path`** file → warning (only checked with `--paths`).

Where it runs:

| Trigger | Scope | Blocking |
|---------|-------|----------|
| Pull request (`Test` workflow) | only skills changed in the PR (`--only`) | yes — a PR can't add a dead pointer |
| Weekly cron + manual (`Upstream URL check`) | whole catalogue (`--paths`) | yes — alerts on rot anywhere |

Set `GITHUB_TOKEN`/`GH_TOKEN` when running locally so the GitHub API allows 5000 req/hr instead of 60:

```bash
GH_TOKEN=$(gh auth token) node scripts/check-upstreams.mjs            # whole catalogue
GH_TOKEN=$(gh auth token) node scripts/check-upstreams.mjs --only my-skill,other-skill
```

PR CI is intentionally **scoped to changed skills** so a PR is gated only on what it touches — pre-existing rot elsewhere is caught by the weekly full-catalogue run, not by every unrelated PR.

## Install command check

A live upstream does not prove the documented install works. `scripts/check-installs.mjs` uses the real
skills CLI. It needs network and `npx`, so it is not part of `npm test`:

```bash
node scripts/check-installs.mjs                       # --list mode: every target resolves and lists its --skill names
node scripts/check-installs.mjs --real                # real install of every stub into a scratch dir
node scripts/check-installs.mjs --real --only a,b     # just these stubs
SKILLS_BIN=/path/to/skills node scripts/check-installs.mjs --real   # use a local CLI instead of npx
```

`--real` is the one that matters: for each stub it runs `install_default` (+ `install_extra`) with `-y` in an empty
directory and requires the directories that land in `.agents/skills/` to **exactly equal** `installed_as`
(sanitised), each with a SKILL.md carrying `name` and `description`. Manual stubs have only their clone,
sparse-checkout and `npx skills add <clone path>` steps replayed; `./setup`, `cp`, `curl` and `pip` are
never run. Clone failures under load are retried; stubs with `size_mb >= 100` run one at a time.

It runs on PRs (changed stubs only) and weekly (every stub). When it fails, fix `installed_as` / `install_default`
in `stub.yaml` and run `npm run generate`.

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
| `--skill <directory-name>` when the upstream skill is named differently | `install command validity → installs upstream skill` (table of known names) | Add `installed_as: <upstream name>`, use it in `--skill`; confirm with `npx skills add owner/repo --list` |
| Per-skill shorthand like `npx skills add owner/<skill>` or `owner/skill-name` | `install command validity → targets only the upstream repo` | Use `npx skills add <upstream owner/repo> --skill <name>` |
| Legacy `~/.design-agent-skills/skills/...` detection path | `install command validity → no legacy path` | Use `~/.agents/skills/<name>` (global) or `.agents/skills/<name>` (project) |

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
category: tui-terminal
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
