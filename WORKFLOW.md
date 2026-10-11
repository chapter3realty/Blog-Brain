# The production line

How a page goes from topic to live, fast, at the standard in `STANDARD.md`.

## Why the current process is slow

The website repo's own history (`research/website-process-digest.md`) shows where the time goes:

- **Review rounds: 2 to 5 per batch.** This is the largest cost.
  - Round one finds voice and business problems.
  - Later rounds find wrong facts and missing local detail.
- **Wrong facts.** 20 of 163 researched facts were wrong, and were caught late.
- **Defects the gate would have caught,** found by the owner instead.
- **Owner questions asked after the draft,** or never answered.

All four have the same cause: the owner is the first real reviewer.

The fix is to move every check the owner does today to **before** he sees the page:

- Ask his questions first.
- Verify facts with a second agent.
- Run every gate and the score.
- Have a fresh reviewer agent read the page as he would.

**Target:** one owner review round per batch, not five.

## Roles

Owner, 2026-10-06: "you are the leader and the researcher and you are not just a writer ... im just an editor and approver but I dont want to even look at your work very often so you need to rely on yourself and do what you think is best."

| Who | Does | Time per batch of 5 |
|---|---|---|
| Owner | Reads finished pages when he chooses and edits or approves. Deploys. Answers only what no source can: his own stories and what Chapter3 does as a service. | Under 1 hour, not every batch |
| Tim Nash | Busy. Nothing is asked of him (owner, 2026-10-06). | 0 |
| Claude (orchestrator) | Picks topics, researches, decides, writes, checks and fixes. Answers its own questions from sources, the story bank and the rules. Asks the owner only the two kinds of question above. | One working session |
| Subagents | One researcher per page. One verifier per page that never researched it. Buyer readers. One reviewer. Prompts are in `prompts/`. | In parallel |

What Claude decides alone: topics, structure, wording, which verified facts to use, what to leave out when no source exists, and the fixes reviewers find. What still waits for the owner: deploying, anything sent outside the company in its name (press emails go to Gmail as drafts), a new story, and a new service promise. The legal rules in `STANDARD.md` and the website's CLAUDE.md are never Claude's to relax.

## Lane N: a new page

### 0. Pick

The input is the topic backlog, ranked by:

1. call intent
2. gap in the search results
3. whether a local fact exists

The owner approves 5 at a time.

Before anything else, run the website's PLAYBOOK A1. Name the closest existing page and say in one sentence how this page's job differs. If it does not differ, upgrade that page instead (Lane U).

### 1. Brief

About 15 minutes per page, by Claude. Fill `templates/brief.md`:

- the query and the reader
- **the verdict in one sentence**
- the sub-questions, taken from the live search results and the "People also ask" box
- the table plan
- the figure plan
- the experience slots
- the CTAs

Check the live search results for the query, and note what the top three pages lack. **No brief, no draft.**

### 2. Owner and Tim questions

Ask before drafting. One document per batch, in `templates/owner-questions.md`.

**Search `stories/stories.json` first.** A story already in the bank is never asked for again. Where no story fits, the page uses a worked example (STANDARD T2), and no question is needed. Ask only for what neither covers, at most 3 questions per batch where possible, most of them experience questions:

- "What did you see the last time a client...?"
- "What do you check first when...?"
- "What number do you use for...?"

The answers become the T2 sentences and settle business questions before any copy exists. Record them verbatim in the website repo's `research/.../owner-answers-batchN.md`, and add each new story to `stories/stories.json` with its source line, so it can be reused.

**While waiting, run step 3 in parallel.**

### 3. Facts

One researcher agent per page, in parallel, using `prompts/researcher.md`. It fills `templates/facts.md`, one row per claim:

- the claim
- the value and unit
- the URL it opened
- a verbatim quote
- the as-of date
- when it goes stale

Then a **different** agent, using `prompts/verifier.md`, re-opens every URL and marks each row:

- **verified**
- **wrong**, with the correction
- **unverifiable**

**The writer may use verified rows only.** This replaces the website's A8 step ("re-open every source"), which one writer checking their own work did not hold: 20 of 163 facts were wrong.

**Before researching, read `facts/registry.json`.** If a fact the page needs is already registered, use its value, wording and owner page, and link the owner page. A new fact that will appear on more than one page goes into the registry with its source, owner page, `staleBy` date, and the wrong shapes to watch for (STANDARD A12).

### 4. Spec

Claude writes `specs/<name>.js` in the website repo from four inputs:

- the brief
- the verified facts
- the owner answers
- `templates/spec-skeleton.js`

The rules for the spec:

- Pin `datePublished`.
- Build the table with `h.table()`.
- Build the figure with `h.figure()`.
- Build charts from the data file, never from typed values (the website's A29c).

### 5. Gates

Machine checks, looped until clean, before any person reads the page:

```
node tools/mkpage.js specs/<name>.js                                         # website repo
node build.js audit                                                          # website repo: 0 errors
node <blog-brain>/tools/ogcard.js chapter3realty /<url>/                     # its share card
node tools/mkpage.js specs/<name>.js                                         # again, now it picks up the card
node <blog-brain>/tools/score.js --site chapter3realty --only /<url>/         # 90+, no blockers
node <blog-brain>/tools/claims-scan.js chapter3realty/<url>/index.html        # no critical or high (STANDARD C)
node <blog-brain>/tools/facts-check.js .                                      # no WRONG on this page, no STALE (A12, T7)
node <blog-brain>/tools/site-audit.js .                                       # no errors on this page (links, markup, forms)
```

Fix the spec and rerun until all of them are clean.

### 5b. Buyer reader

A fresh agent reads each built page as a first-time buyer, with `prompts/buyer-reader.md`. It lists every word it did not know, every sentence that explained how instead of what it means, every paragraph it skipped, and the questions it still has. The writer fixes these before the reviewer reads. (Added 2026-10-06, after the owner found four pages that scored 100 too technical.)

### 6. Reviewer agent

A fresh agent, using `prompts/reviewer.md`, that did not write the page. It works through `templates/review-checklist.md`, which covers the human checks in STANDARD:

- H6: the page agrees with itself
- H7: the buyer test on every sentence
- H8: jargon defined on first use
- A1: the sub-questions are answered
- A11: every number has a unit and a date
- T5: no unapproved quote
- T6: every number is in the verified ledger

It also checks the page against every past owner edit in `owner-answers-*.md` that is not yet a `build.js` gate. That is how round two is caught in advance.

Claude applies the fixes and reruns step 5.

### 7. Look at it

The checks from the website's PLAYBOOK Phase 8:

- Browser checks at 1280 and 375 pixels wide.
- Look at the figure and the table once at each width.
- A phone has to be able to read the figure. Chart text must render at 11 pixels or more at 375; measure it. On 2026-10-01 all 19 charts rendered 4 to 8 pixel text on a phone.
- Run axe at 1280 and 375. Zero serious or critical violations (H10).
- Run Lighthouse mobile once on the page's template (H11).
- **Form delivery test (H12).** For every form on the page, route `**/api/forms/**` to a stub in Playwright, then:
  - fill the form validly and submit it once;
  - assert that exactly one request was captured, and that it carries `consent`;
  - assert the success message appears only after that request.

  Then submit "not-an-email", a 2-digit phone, and an unticked consent box, and assert that nothing is sent. A thank-you with no captured request is a dropped lead. That is exactly how four forms lost every lead until 2026-10-01.

### 8. Owner review

One preview for the whole batch (`tools/mkpreview.js`). He sends one message with all edits.

- Record the edits first: `node tools/record-edit.js draft.txt edited.txt --page /url/ --note "<his words>"`. Each changed sentence goes into `voice/edits.jsonl`.
- The reviewer agent gives each record a class. When a class appears twice, it becomes a rule in `voice/RULES.md` and a question in `voice/REVIEW-PASS.md`. The next batch is written against it.
- Apply the edits to the spec.
- Any edit that is a pattern, not a one-off, becomes a `build.js` gate in the same commit. That is what "hard code that" means.
- If the pattern is a claim about the business, it also goes into `rules/claims.json` with a control. If it is a fact, it goes into `facts/registry.json`.
- Add it to the reviewer's list as well.
- **Update every rule file that states the old rule, in the same commit**: the website's `CLAUDE.md`, `BRAND.md`, `PLAYBOOK.md` locked strings and `HANDOFF.md`, and this repo's `STANDARD.md`. On 2026-10-01, `BRAND.md` and the PLAYBOOK identity line still named Devin Day a licensed MLO three weeks after the owner banned it. A stale rule file is how the next session puts a banned claim back.

### 9. Ship

In the website repo, in order:

1. `node build.js dates`
2. `node build.js llmsfull`
3. Add the sitemap and llms.txt entries.
4. Add 2 or more inbound body links (S8).
5. `node build.js preflight`, which must exit 0.
6. Commit.

The owner deploys. After the deploy:

- Run `indexnow.ps1`.
- Request indexing for the new URLs in Search Console.

### 10. Follow-up

| When | What |
|---|---|
| Day 7 | Check the URL is indexed in Search Console. |
| Day 30 | Look at the queries it gets impressions for. Add any missing sub-question as an H2 or an FAQ entry. |
| Every 90 days | Re-check the volatile facts on the page (T4). Run `node tools/facts-check.js --stale` and fix every entry it lists. |

## Lane U: upgrade an existing page

Most of the gain on this site is in the 122 pages that already exist. The `/invest/llc/` pilot went from 75 to 99 with no new research. Run upgrades in this order, cheapest and widest first:

### U0. Fix the live defects

Today. `audit/AUDIT.md` "Fix this week" is the list, in order. The first item is the four forms that drop every lead.

Then run the four sitewide checks and work them to zero errors:

```
node <blog-brain>/tools/site-audit.js . --live
node <blog-brain>/tools/claims-scan.js .
node <blog-brain>/tools/facts-check.js .
node <blog-brain>/tools/score.js --site chapter3realty
```

The first three found, on 2026-10-01:

- 23 site errors, 6 of them lead-delivery errors;
- 69 distinct banned-claim sentences (329 findings counting every page the footer repeats on);
- 65 known-wrong fact sentences on 32 pages.

### U1. Sitewide head fixes

About 30 minutes, no prose changes, so no dates move.

1. In the website repo: `git apply <blog-brain>/website-patches/mkpage.patch`.
2. `node <blog-brain>/tools/ogcard.js chapter3realty --all`, then look at a sample of the cards.
3. `node <blog-brain>/tools/site-upgrade.js chapter3realty`, a dry run. Read the list.
4. `node <blog-brain>/tools/site-upgrade.js chapter3realty --write`.
5. `node build.js preflight`. Run it in the full clone; a shallow clone fails the dates check on every page.
6. `git diff --stat`. Every file should change in `<head>` only.

**Measured on a clean copy of the site:**

- 122 cards rendered with no overflow.
- 49 pages gained a Person author.
- `build.js check` and `build.js audit` both passed.
- No line inside `<main>` changed.
- The site mean rose from 77 to 81.

### U2. Rebuild the specs

Make the 8 broken specs rebuild their live pages:

- **6 are blocked by "sets".** Fix the wording in the spec.
- **2 drifted.** Copy the hand edits back into the spec.
- **Pin `datePublished` in all of them.**

Then add a check to `preflight` that regenerates every spec into a temporary folder and compares it with the live page. Drift then fails the build instead of surfacing in a later edit.

### U3. Answer-shape pass

About 15 minutes per page:

- The 6 yes or no pages: A3.
- The 17 pages with fragment links: A8.

### U4. Restructure pass, page by page

Use the pilot as the pattern (`pilots/invest-llc/`). Work in score order, and once Search Console data is in hand, in impressions order.

Restructure only; no new facts:

- the verdict first
- split paragraphs over 80 words
- a table built from facts already on the page
- a figure
- question headings
- sentence links instead of fragments

**Target: 30 to 45 minutes per page, one owner read per batch of 10.**

### U5. Experience pass

Ask the owner and Tim the T2 questions for each page, 3 per page, in one batch document. This is the only upgrade step that needs new input, and it is the one competitors cannot copy.

## Lane O: off-site (once, then monthly)

A five-month-old domain with no Google Business Profile, no reviews and one inbound link will not rank on page quality alone. The 2026-10-01 audit found:

- the site visible for 1 of 20 target queries;
- about 18 of 127 pages in the indexes that could be reached.

The checklist is `templates/offsite-checklist.md`. The owner or Tim does most of it, because it needs their accounts and their licence records.

## Sweeps: new rules reach old pages

A rule that is right for new pages is run against every page within 30 days.

On 2026-10-01, 57 banned "sets" and "carry" phrasings were still live. So were two errors that HANDOFF had recorded as fixed: Pawleys Island's county, and the stacked SC deductions. In each case the rule had been applied to new pages only.

Every month, in one batch:

1. Run the four sitewide checks.
2. Pick the 10 pages with the most findings.
3. Fix them in Lane U.

## Cadence: how many pages, how fast

Revised 2026-10-11. The owner: weeks of 5 pages a day gave the site its most impressions, and he wants more pages than that, all very high quality. He is right that impressions track the number of good pages: each page can show for its own set of searches. The limit is not a number of pages. It is that every page must be worth a reader's time.

What Google says, and what it means here:

- Google does not count how often a site publishes. It does act against many pages made mainly to rank with little value ("scaled content abuse", March 2024), however they are made, and some of its signals are sitewide.
- Hundreds of pages updated often are fine when each update is real: new prices, new rules, new photos. Changing a date without changing the page is not. `node build.js dates` moves a date only when the page changed.
- Two pages that answer the same search with the same facts compete with each other. One page per real question.

The pace:

1. **Now:** up to 5 new pages a day, run in parallel, as long as every page passes every gate, the buyer readers grade it 8 or more, and it carries facts no other page on the site or the web has.
2. **Grow past 5 a day** when Search Console shows most new pages indexed and showing within about 4 weeks.
3. **Slow down at once** if "Crawled, currently not indexed" or "Discovered, currently not indexed" grows week over week in Search Console. That is Google saying the pages are not worth indexing.
4. **Updates:** every page's prices refresh monthly from the county deed index; rules and photos when they change.
5. **Choose topics that share research** so the cost per page falls: all 55+ communities from one set of county pulls, all condo buildings from one deed export, all towns from one tax table.

## Rules that keep the line fast

- **Never hand-edit a generated page.** Edit the spec. Drift costs a revision later.
- **One fact, one owner page.** A number used on two pages is computed on one and linked from the other (the website's A22e).
- **A new owner ban becomes a gate the same day.** Each round he repeats is a round the line failed to learn from.
- **The verifier is never the researcher.** The same agent re-checking its own work is how 20 of 163 slipped through.
- **Score before anyone reads.** The owner's time is for business judgment, not for finding a 171-character meta description.
- **Scan every surface.** A claim in the footer, a meta description, a calculator default or llms.txt is published as much as one in the body. AI answers quoted the footer.
- **A form is not done until a captured request proves it sends.**
