# Batch 2026-11-a: the next 20 blogs, and finishing batch 2026-10-d

Written 2026-11-01 for a new Claude account taking over the work. Read this whole file first, then `CLAUDE.md`, then `CRAFT.md`.

## The owner's prompt to paste into the new session

> You are taking over the Blog-Brain production line for chapter3realty.com. Read batches/2026-11-a/BRIEF.md and follow it exactly. First do Task 0. Then redesign the 20 pages in Task 1 with the lean line in workflows/redesign-batch.js, 5 pages at a time, using a workflow. After each group of 5, package a website patch, push it to Blog-Brain, and give me the PowerShell deploy block. I want very creative, unique information on every page that is valuable for SEO, AEO and GEO, and simple for a human to read. Match the quality of the five finished pages in batch 2026-10-d. One review round, one fix, one short re-check of the fixes only. Never loop reviews to 9. Never create, archive or message a Claude Code session. Never deploy.

The photo partner's email address is not in this repo (the repo is public). The owner gives it in the chat.

## What the bar looks like

The owner on 2026-11-01, about five pages of batch 2026-10-d: "the content on all five of those are absolutely top top tier like really good." Those five are:

| Page | Spec | Why it worked |
|---|---|---|
| /sell/home-value/ | specs/home-value.js | Every heading is a question people search ("What did homes sell for in my area of Myrtle Beach?", "How accurate are online home estimates in Myrtle Beach?"). Sale prices by area from county deed records, not MLS. The county's value compared with real sale prices. No automated value. |
| /buyers/programs/ | specs/programs.js | SC Housing's current limits for Horry County in one table. Where homes under the price limit are, counted from live listings in aggregate. Whether the $10,000 is paid back, answered plainly. No rate, no payment. |
| /invest/strategies/dst/ | specs/dst.js | Opens with the reader's real decision: a DST, another rental, or pay the tax. Fees, minimums and exits as numbers from offering documents. What you give up, said plainly. |
| /hoa/reserves/ | specs/reserves.js | "How much is enough" answered with a number. What an underfunded building looks like, from public records. Lender rules and other states' laws for comparison. |
| /buyers/undisclosed-flooding/ | specs/undisclosed-flooding.js | Exactly how to find out if a house flooded, from public sources. SC disclosure law quoted. Flooding outside a flood zone, shown. |

What they share. Copy this, not their wording:

1. **The answer in the first two sentences**, under a question heading that matches a real search.
2. **At least two findings no other site has**: our own count or table from public records, a comparison nobody published, a worked example on a real local case, a map we drew.
3. **Charts and tables built from data files** under `data/<batch>/<slug>/`, never typed.
4. **Plain words for a reader who is new to the topic.** Short sentences. Each fact said once.
5. **The reader's decision is the spine of the page,** not the topic's textbook outline.
6. **Facts only from verified ledger rows,** checked by a second agent that did not research them.

## Setup (a new container has none of this)

```
cd /home/user/Blog-Brain && npm install
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 3 -b claude/github-account-check-wutg8b https://github.com/chapter3realty/chapter3-website <scratchpad>/web2
cd <scratchpad>/web2
git log --oneline -1          # see "Live branch" below
for v in v1.20-ai-memory-closest-ring-speed v1.21-ai-reads-descriptions-phone-layout v1.22-instant-layout v1.23-hover-photos-feeds; do git am /home/user/Blog-Brain/website-patches/$v.patch; done
for p in /home/user/Blog-Brain/batches/2026-10-d/*/web.patch; do [ -s "$p" ] && git apply --binary "$p"; done
```

**Live branch.** Before you apply anything, check which patches the owner already deployed. If the live branch's log already has a patch's subject, skip that patch. When batch 2026-10-d's pages are packaged (Task 0), their web.patch files no longer need applying.

Tools you will use, all in this repo:

- **The site with sample homes:** `node tools/preview.mjs <web2> --port <n>`.
- **Overlap, photos, readability and SEO in a browser:** `node tools/critic.mjs`, then `prompts/critic.md` for the AI half.
- **Save a helper's work to GitHub:** `tools/checkpoint.sh`. A container restart deletes the scratchpad. It happened twice on 2026-11-01. Set `CLAUDE_SESSION_URL` to your session link so the commits carry it.
- **The lean line as a workflow:** `workflows/redesign-batch.js`. Pass `args` as below.

## Task 0: finish batch 2026-10-d (small; do it yourself, no helpers)

1. `/hoa/reserves/`: a stronger search title. The owner: "I don't feel like it has a very high SEO title." Today it is "Myrtle Beach HOA Reserves: How Much Is Enough? | Chapter3". Write one that matches what people search for condo reserves before buying, within 30 to 65 characters. Edit `specs/reserves.js`, then rebuild.
2. `/buyers/undisclosed-flooding/`: the same, a stronger search title. Today it is "Did This Myrtle Beach House Flood? How to Find Out | Chapter3".
3. `/buyers/undisclosed-flooding/` homes row. The owner: "homes close to the beach but outside of flood zones." Change its feed in `idx-lib/feeds.js` to near-the-beach homes that are not in a flood zone. Check the live result count at https://chapter3realty.com/homes/api/map?... (at least 10 homes). Give it a unique, true title.
4. Package the five finished pages (home value, programs, DST, reserves, flooding) as website patch v1.24. The batch's claims sweep is in `batches/2026-10-d/sweep/web.patch`; include it. Then run:
   - `node build.js stitch`, `dates`, `llmsfull`, `check` and `audit`
   - `npm test` in this repo
   - `node tools/claims-scan.js <web2>`

   Test the patch on a clean clone of the live branch. Push it and give the owner the deploy block.
5. **The other seven pages of 2026-10-d stay unshipped for now:** out-of-state-buyers, special-assessments, first-time-buyer, new-construction, hoa-vs-poa, str-vs-ltr, str-tools. Each has a last review in its batch folder (REVIEW-*.md) and the journal summary in "Open items" below. Finish them after Task 1, with one fix and one re-check each.

## Task 1: the next 20 pages

These are the weakest pages after batch 2026-10-d, from `audit/judged-2026-10-31.json`. The total is out of 50; the live pages scored 13 to 43. Every judge's notes for a page are in that file: problems, ideas and photo needs. Hub pages (/buyers/, /sell/, /guides/ and the like) are left for later.

| # | Page | Total | Spec file to write |
|---|---|---|---|
| 1 | /buyers/retirees/ | 20 | retirees.js |
| 2 | /buyers/va-loans/ | 20 | va-loans.js |
| 3 | /hoa/liens-and-foreclosure/ | 20 | liens-and-foreclosure.js |
| 4 | /invest/run-the-numbers/ | 20 | run-the-numbers.js (exists; update it) |
| 5 | /submarkets/conway/ | 20 | conway.js |
| 6 | /submarkets/garden-city/ | 20 | garden-city.js |
| 7 | /submarkets/little-river/ | 20 | little-river.js |
| 8 | /submarkets/myrtle-beach/ | 20 | myrtle-beach.js |
| 9 | /submarkets/pawleys-island/ | 20 | pawleys-island.js |
| 10 | /buyers/common-mistakes/ | 21 | common-mistakes.js |
| 11 | /buyers/cost-to-own/ | 21 | cost-to-own.js |
| 12 | /invest/condos/ | 21 | condos.js |
| 13 | /invest/rent-prices/ | 21 | rent-prices.js (exists; update it) |
| 14 | /invest/where-to-buy/ | 21 | where-to-buy.js (exists; update it) |
| 15 | /submarkets/murrells-inlet/ | 21 | murrells-inlet.js |
| 16 | /submarkets/north-myrtle-beach/ | 21 | north-myrtle-beach.js |
| 17 | /submarkets/surfside-beach/ | 21 | surfside-beach.js |
| 18 | /buyers/buying-in-myrtle-beach/ | 22 | buying-in-myrtle-beach.js |
| 19 | /buyers/relocating/which-town/ | 22 | relocating-which-town.js |
| 20 | /buyers/relocating/why-myrtle-beach/ | 22 | relocating-why-myrtle-beach.js |

Some pages are not spec-built yet:

- **/buyers/cost-to-own/:** it is the donor the relocating pages copy their chrome from. Do not change its chrome. Check `data/relocating/assemble-page.js` before you rebuild it as a spec.
- **The two relocating pages:** they are built from `data/relocating/pages/<page>.js` with `assemble-page.js`. Upgrade them there, or move them to a spec, but never hand-edit the built page.
- **Town pages** (Conway, Garden City and the rest): give each town at least one table or map of its own from county records. A reader comparing towns should learn something on each page that the others do not repeat. Run `node tools/sibling-check.js` across the town pages before review.

Groups of five, in this order: 1 to 5, 6 to 10, 11 to 15, 16 to 20. Check the account's usage after the first group. The owner's budget is about half of a $100 plan's week for all 20.

Run each group as a workflow:

```
Workflow({ scriptPath: "/home/user/Blog-Brain/workflows/redesign-batch.js", args: {
  web: "<scratchpad>/web2", bb: "/home/user/Blog-Brain", sp: "<scratchpad>", batch: "2026-11-a", today: "<YYYY-MM-DD>",
  pages: [ { url: "/buyers/retirees/", slug: "buyers-retirees", spec: "retirees.js" }, ... ] } })
```

After each group:

1. Read each page's result. Fix small open items yourself.
2. Run stitch, dates, llmsfull, check, audit, `npm test` and claims-scan.
3. Package the group as the next website patch, test it on a clean live clone, push it, and give the owner the deploy block.
4. Then send the photo partner one email from the owner's Gmail with every page's `shot-list.md` (`templates/photo-request-email.md`).

## The lean line, and why

Batch 2026-10-d looped full three-reviewer rounds until all three gave 9. Fresh reviewers always find something new, so the scores stayed flat at 5 to 8 for three rounds, and about a third of the usage was wasted. The owner stopped it. `workflows/redesign-batch.js` now runs:

1. Research
2. Verify (a different agent)
3. Build
4. One review by three lenses (critic, cold reader, owner's eye)
5. One fix
6. One short re-check of only the fixed items
7. One last fix if the re-check found something still open

Then the lead finishes by hand. Quality comes from the research and the build, not from extra review rounds. The owner's own read is the real test.

## Open items on the seven unshipped 2026-10-d pages (last review, 2026-11-01)

- **out-of-state-buyers:**
  - It does not say what our agent does once the home is listed.
  - How the deed gets to the seller and back.
  - Who picks and pays the closing attorney.
  - Who holds the key.
  - The thinnest page of the batch.
  - One FAQ answer on online notaries needs a source.
- **special-assessments:**
  - "No cap" is said five times.
  - It talks about data we do not have; cut that.
  - The depreciation line must match IRS Pub. 527.
  - Who pays when a vote comes before closing and the bill after.
  - Whether the buyer's own insurance pays a share.
- **first-time-buyer:**
  - It never states FHA's smallest down payment.
  - The insurance question is left open.
  - Its four neighborhoods copy /buyers/affordable-places-to-live/.
  - One line contradicts itself on first-time rules.
  - The photo does not show the subject.
- **new-construction:**
  - The H1 promises "what the price on the sign leaves out" and gives one cost; add lot premiums, upgrades, HOA start-up and closing.
  - "In our experience" has no source in stories.json; cut it.
  - Banned metaphor ("clock").
  - No photo of a new house.
- **hoa-vs-poa:**
  - The same answer appears four times at the top.
  - It never says what two association fees come to.
  - Explain "lien".
  - The homes search box is cut off at 320 px, and the header phone link at 1024 px. Those two are site-wide, so fix them in the shared CSS once.
- **str-vs-ltr:**
  - Banned wording: "to Win" in the title, "where you buy can decide", "the number holds", "wins".
  - "Most oceanfront condos allow both" needs a narrower claim.
  - The lodging tax line needs a source.
- **str-tools:**
  - The short answer does not answer the H1.
  - The calculator opens on a losing case that goes against the page's own advice.
  - Too many exact numbers.
  - The "too many Airbnbs?" section talks about the data source and never answers.
  - Every number assumes the owner runs it himself; show the manager case.
