# Blog-Brain

The page production system for chapter3realty.com: the standard a page must meet, the line that produces it, and the tools that measure it. The website itself lives in another repo.

## Two repos

| Repo | What | Branch |
|---|---|---|
| `chapter3realty/Blog-Brain` (this one) | Standard, workflow, scorer, templates, prompts, pilots | your session branch |
| `chapter3realty/Chapter3-Website` | The site, `build.js`, `tools/mkpage.js`, specs, research | **`claude/github-account-check-wutg8b`**, which matches the live site. `main` is stale (July) and is missing 45 pages. |

Clone the website (read-only is enough to study and score it):

```
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 -b claude/github-account-check-wutg8b https://github.com/chapter3realty/chapter3-website <path>
```

## Read first

0. `CRAFT.md`: the skill of making a page, in one place. You are learning a skill, not filling a template (owner, 2026-10-10).
1. `audit/AUDIT.md`: everything wrong with the live site on 2026-10-01, ranked, with fixes. Evidence is in `audit/evidence/`. Start here.
2. `STUDY.md`: what the 122 live articles score and why.
3. `STANDARD.md`: what a finished page has, and what it may never claim. Every rule has an ID.
4. `WORKFLOW.md`: the production line. Lane N is a new page; Lane U is an upgrade; Lane O is off-site.
5. In the website repo, `CLAUDE.md` and `PLAYBOOK.md`. They hold the owner's rules on voice and compliance. `build.js` enforces them. This repo does not repeat them, and they win any conflict.
6. `research/website-process-digest.md`: a summary of the website's 4,000 lines of process docs.
7. Before writing any page: `voice/RULES.md` (the owner's corrections by class) and `stories/stories.json` (real stories; never add a detail). The reviewer answers `voice/REVIEW-PASS.md`.

## Commands

```
npm install
npm test                                                     # all five control suites; each must print "all controls pass"
node tools/score.js --site <site>/chapter3realty             # every article, with a leaderboard
node tools/score.js --site <site>/chapter3realty --only /invest/llc/
node tools/ogcard.js <site>/chapter3realty /invest/llc/      # or --all
node tools/site-upgrade.js <site>/chapter3realty [--write]   # share image + Person author, head only
node tools/site-audit.js <site> [--live]                     # links, anchors, markup, residue, form delivery, sources
node tools/claims-scan.js <site>                             # banned claims on every surface (rules/claims.json)
node tools/facts-check.js <site>                             # known-wrong facts and stale entries (facts/registry.json)
node tools/facts-check.js --stale                            # registry entries past their staleBy date
node tools/record-edit.js draft.txt edited.txt --page /url/  # add the owner's edits to voice/edits.jsonl
```

`<site>` is the website repo root. Set `SCORE_TODAY=YYYY-MM-DD` to make the freshness rule reproducible.

## Non-negotiables, inherited from the website repo

- **Never deploy.** The owner deploys from PowerShell.
- **Never hand-edit a generated page.** Edit the spec.
- **Never type a date.** `node build.js dates` sets every date.
- **Never write a quote for Tim Nash, or a story that did not happen.** Ask in `templates/owner-questions.md` and wait for the answer.
- **Never state an interest rate or a payment amount.** Chapter3 is not a lender and does no financing work.
- **BrickWood Mortgage is an affiliate, not the same company.** Keep the affiliation and its disclosure; never imply ownership (owner, 2026-10-04).
- **Devin Day may be the visible author** (byline, author note, schema). Never name him in the copy, a story or a CTA. Never name Paul on the site (owner, 2026-10-05).
- **The DBA "Chapter III Realty" is registered.** The owner will supply the new logo; `website-patches/logo-chapter-iii.patch` is on hold.
- **Claude decides; the owner approves (owner, 2026-10-06).** Do not send the owner questions a source, the story bank or the rules can answer. See WORKFLOW Roles.
- **Listing sites:** Zillow's robots file disallows its listing pages for every agent. Use Horry County recorded sales and Zillow's published research data instead.
- **Facts come from verified rows in a fact ledger,** checked by an agent that did not research them.

## Working on the tools

- Every rule in `tools/score.js` has a passing and a failing control in `tools/score.test.js`. A new rule needs both. Sanity-check a new rule against the live site before trusting its counts (website MISTAKES rule 4). Several first drafts of these rules fired on correct copy, and were fixed against the site:
  - "131%since" read as `%s`
  - a "Sources" heading went unseen
  - full sentences that were links were counted as fragments
- Rule IDs map to `STANDARD.md` through the `STD` table in `score.js`. A new rule needs a STANDARD entry and an ID.
- A banned claim goes in `rules/claims.json`. A fact that is on two pages or has been wrong once goes in `facts/registry.json`. Each needs a firing and a quiet control in its test file, taken from real site text. Read every hit of a new pattern against the live site before trusting its count: the first versions here fired on "our preferred lender" (approved wording), "48 hours" in unrelated deadlines, and "close to double" about prices.
- `tools/site-upgrade.js` refuses to change anything inside `<main>`. Keep that guard.
- Patches to the website repo go in `website-patches/`. Test each one with `git apply --check` on a clean clone of the live branch.

## Writing in this repo

Same register as the site: literal, short sentences, no em dashes, no metaphors. The owner reads these files.
