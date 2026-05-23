## What this PR does

<!-- One sentence. "Add X skill" / "Fix Y bug" / "Update Z router" -->

## Checklist

### Adding a skill
- [ ] `skills/<name>/stub.yaml` — correct type / tier / rank / upstream
- [ ] `skills/<name>/SKILL.md` — frontmatter: name matches dir, description, ≥1 trigger, das.category
- [ ] `skills/design-catalogue/SKILL.md` — catalogue index row + routing guide rows
- [ ] Domain catalogue SKILL.md updated
- [ ] `README.md` — skills table row + skill count bumped
- [ ] `npm test` passes (no duplicate triggers, valid fields)
- [ ] Version bumped + CHANGELOG entry

### Fixing a bug
- [ ] Root cause identified
- [ ] Regression test added (data bug → `stubs.test.js`, CLI bug → `cli.test.js`)
- [ ] `npm test` passes
- [ ] Patch version bumped + CHANGELOG entry

### Router / catalogue update
- [ ] Both `design-catalogue` + domain catalogue updated
- [ ] `npm test` passes
- [ ] Patch version bumped if content changed
