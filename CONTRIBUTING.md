# Contributing

Thanks for your interest in improving the design-agent-skills catalogue.

## Quickest way to contribute

**Suggest a skill** — open a [skill request issue](.github/ISSUE_TEMPLATE/skill-request.md) with the upstream repo URL, star count, and suggested category. If it passes the evaluation criteria, a maintainer will add it.

**Report a bug** — open a [bug report issue](.github/ISSUE_TEMPLATE/bug-report.md) with reproduction steps.

## Adding a skill yourself

Full contributor guide is in [CLAUDE.md](CLAUDE.md) — it covers:

- Evaluation criteria (what gets accepted, what gets skipped)
- `stub.yaml` format and rules
- `SKILL.md` format and rules
- Router update checklist
- Rank and tier assignment
- How to run the test suite

**Short version:**

```bash
# 1. Use the wizard — it generates both files correctly
node scripts/add-skill.mjs

# 2. Update routers and README (wizard prints a checklist)

# 3. Tests must pass
npm test

# 4. Open a PR — the CI gate enforces test passage
```

## Acceptance bar

| | Accept | Skip |
|---|---|---|
| Install | `npx skills add owner/repo` works | `curl \| bash` only, no npx path |
| Upstream | Has a `SKILL.md` at repo root | No `SKILL.md`, or archived |
| Stars | Any (50+ preferred for rank 1–2) | 0 stars + fewer than 5 commits |
| Scope | Design, UI, motion, a11y, Figma, data viz, content, PM | General-purpose dev tools, MCPs, VS Code extensions |
| Overlap | Fills a gap or adds a meaningful sub-niche | Near-duplicate of an existing rank-1 entry |

## Development setup

```bash
git clone https://github.com/podo/design-agent-skills
cd design-agent-skills
npm test   # 2400+ tests, should all pass
```

No dependencies to install — the test suite uses Node.js built-ins only.
