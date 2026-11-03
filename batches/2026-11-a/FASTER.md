# The same quality in less time

The owner, 2026-11-03: "lets asses how to get the same quality in less time". Measured on groups 1 to 3 of batch 2026-11-a (15 pages).

## What a group of five cost

| Group | Helper agents | Helper tokens | Hours, workflow only | Lead's own checks after it |
|---|---|---|---|---|
| 1 | 44 | 9.3 million | 5.1 | one fact verifier (0.24 million), 13 sentence fixes, 3 audit fixes, packaging |
| 2 | 56 (two runs, the usage limit stopped the first) | 10.7 million | 4.4 + restart | one fact verifier (0.34 million), 17 sentence fixes, sibling check, packaging |
| 3 | 47 (two runs) | 5.5 million | 2.0 + restart | one fact verifier (0.26 million), the STR refresh helper (0.24 million), 20 fixes, packaging |

About 1.1 to 2.1 million helper tokens a page. Each group used most of one 5-hour usage window.

## Where it went (share of each group's helper work)

| Stage | Group 1 | Group 2 | Group 3 |
|---|---|---|---|
| Build (spec, charts, photos, gates) | 29% | 27% | 30% |
| Fix (two rounds) | 21% | 24% | 20% |
| Research | 21% | 23% | 21% |
| Verify | 17% | 16% | 12% |
| Critic (browser) | 7% | 6% | 12% |
| Cold reader, owner's eye, re-check | 5% | 4% | 5% |

The reviews themselves are cheap. The cost is in making things: building the page and pulling data. It is also in redoing them: two fix rounds, and a second verifier pass on facts the fixer added.

## What does not cost much and must stay

These are what made the owner call the pages "top top tier", so none of them changes:
- Research to primary sources, with our own counts from public records.
- An independent verifier on every fact.
- One review by three readers.

## Changes made now (workflows/redesign-batch.js)

1. **No second fix round.** The second fix ran on every page in all three groups, because a re-check almost never passes on the first try. It was about a tenth of the cost. Its items were short and concrete, and the lead fixed them in minutes. Now the re-check's open items come back to the lead.
2. **The fixer's new facts are checked inside the workflow.** In every group, fixers added rows marked VERIFIED-BY-FIXER: 36, 44 and 14 of them. After each run, the lead had to send a separate verifier, and then wait for it. Now a small independent verifier checks only those rows, beside the re-check, and returns the exact sentences to change.
3. **Reuse data before pulling it.** The town pages each pulled the county's deeds and parcels again, and the condo, rental and town pages each pulled CRM listings and FEMA data again. Now research looks first in the sibling folders (`data/2026-10-d/*/`, `data/2026-11-a/*/`) and reuses what is there. Expected saving: about a third of research and verification on town and market pages.
4. **One source for STR figures.** Group 3 printed today's AirROI figures on two pages while the rest of the site used the data file. Fixing that took a sitewide refresh. Now pages read only `data/str-market.json`.
5. **Write to pass the audit the first time.** `build.js audit` failed after every group on the same kinds of sentence: one over 28 words, an opening "So", "Here is", "What you have left is", "we" in the hero sub-header, and a button promising an action at /contact/. These are now in the helpers' brief.
6. **The critic skips 768 px.** It now checks 320, 390, 1024 and 1440. Every cut-off it found in three groups showed at 320, 390 or 1024.

Expected result: about 25 to 30 percent fewer tokens per group, and about 3.5 hours instead of 5 for a group's workflow, with the same research, verification and review. Measure it on the next group before trusting it.

## Bigger changes, for the owner to decide

- **One researcher per kind of page.** The six town pages share a question set: parts of town, prices, flood, rents, rules. One researcher who pulls the county data once for every town, then one verifier, would cost less than six of each. The risk is that the towns read alike; the sibling check catches that.
- **Groups of three instead of five.** A group would finish inside one usage window instead of being stopped by the limit and resumed.
- **Fewer, deeper pages.** Some weak pages answer one narrow question that a stronger page already covers. Folding them into the stronger page, with a redirect, saves a full rebuild each.
