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

1. `STUDY.md`: what the 122 live articles score and why.
2. `STANDARD.md`: what a finished page has. Every rule has an ID.
3. `WORKFLOW.md`: the production line. Lane N is a new page; Lane U is an upgrade.
4. In the website repo, `CLAUDE.md` and `PLAYBOOK.md`. They hold the owner's rules on voice and compliance. `build.js` enforces them. This repo does not repeat them, and they win any conflict.
5. `research/website-process-digest.md`: a summary of the website's 4,000 lines of process docs.

## Commands

```
npm install
npm test                                                     # scorer controls; must print "all controls pass"
node tools/score.js --site <site>/chapter3realty             # every article, with a leaderboard
node tools/score.js --site <site>/chapter3realty --only /invest/llc/
node tools/ogcard.js <site>/chapter3realty /invest/llc/      # or --all
node tools/site-upgrade.js <site>/chapter3realty [--write]   # share image + Person author, head only
```

`<site>` is the website repo root. Set `SCORE_TODAY=YYYY-MM-DD` to make the freshness rule reproducible.

## Non-negotiables, inherited from the website repo

- **Never deploy.** The owner deploys from PowerShell.
- **Never hand-edit a generated page.** Edit the spec.
- **Never type a date.** `node build.js dates` sets every date.
- **Never write a quote for Tim Nash, or a story that did not happen.** Ask in `templates/owner-questions.md` and wait for the answer.
- **Never state an interest rate or a payment amount.** Chapter3 is not a lender.
- **Facts come from verified rows in a fact ledger,** checked by an agent that did not research them.

## Working on the tools

- Every rule in `tools/score.js` has a passing and a failing control in `tools/score.test.js`. A new rule needs both. Sanity-check a new rule against the live site before trusting its counts (website MISTAKES rule 4). Several first drafts of these rules fired on correct copy, and were fixed against the site:
  - "131%since" read as `%s`
  - a "Sources" heading went unseen
  - full sentences that were links were counted as fragments
- Rule IDs map to `STANDARD.md` through the `STD` table in `score.js`. A new rule needs a STANDARD entry and an ID.
- `tools/site-upgrade.js` refuses to change anything inside `<main>`. Keep that guard.
- Patches to the website repo go in `website-patches/`. Test each one with `git apply --check` on a clean clone of the live branch.

## Writing in this repo

Same register as the site: literal, short sentences, no em dashes, no metaphors. The owner reads these files.
