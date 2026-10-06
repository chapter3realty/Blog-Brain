# Batch 2026-10-a: what happened, and what changes next time

Four 55+ community pages, drafted 2026-10-05. Review page for the owner: https://claude.ai/artifact/1cLs6mnrzK2GaVWkX9gYh2 (private).

## The numbers

| Step | Result | Wall time |
|---|---|---|
| Research, 3 agents, 6 communities | 266 facts with sources and verbatim quotes (4 ledgers used) | about 80 minutes |
| Verification, separate agents | 227 verified, 21 wrong (8 percent), 18 unverifiable | about 50 to 95 minutes, in parallel |
| Communities dropped | 2 of 6: no recorded age rule read for Cypress Village or Cresswind | |
| Writing, 1 agent | 4 specs, all gates passing on the first build | about 50 minutes |
| Review, 1 agent that did not write | 75 fixes: 8 high, the rest medium and low | about 35 minutes |
| Fixes and 4 added tax rows | All applied; all gates pass; score 100 on all four | about 50 minutes |
| Owner time so far | 0 | |

The 21 wrong facts are the case for a separate verifier. In the old process the owner was the fact-checker. Examples: Myrtle Trace's acreage, a board officer's estimate stated as a board decision, the drive distances, the number of FEMA panels.

## What the reviewer caught that the writer should not repeat

These go into the writer brief for the next batch.

1. **A fact stated past what was read.** "The recorded rules" when only the association's online copy was read. Name the document that was read, with its date.
2. **A CTA that promises a service nobody described.** "Read Pulte's contract" was in no owner answer. A CTA offers only what an owner answer or the story bank records.
3. **The same instruction in two sections.** Say "ask the manager for X" once, where it belongs.
4. **Links to raw data.** FEMA and Census API queries open JSON. Link the page a person reads; keep the query in the ledger.
5. **Method notes in body copy.** "Estimates on OpenStreetMap roads" belongs in the sources note.
6. **Acronyms and terms of art.** Define AAM, "assessed value", "legal residence" at first use.
7. **Two numbers where the reader needs one.** Find the record that settles it (here, a tax bill for a parcel in the district) instead of printing a range.
8. **The hub diff kept old figures.** Any page the batch links to or edits must agree with the new pages, or go to the owner as a question.

## What changes in the process

- **Tax districts:** pull the Treasurer's bill for one association-owned parcel per community during research, not after review. It settles the district millage in one row.
- **Archived pages:** web.archive.org cannot be reached from the verification environment. A fact whose only source is an archived page will end up unverifiable, so researchers should find a live primary source or skip it.
- **Age rules first:** read the recorded age rule before researching the rest of a 55+ community. Two of six communities failed at that step after a full research pass.
- **Cost:** about 7 million agent tokens for four pages, most of it research and verification. Running the verifiers on a smaller model worked. The next 55+ batch reuses this batch's method and links, so it should cost less.

## Rewrite round, 2026-10-06

The owner read the four pages and said they led with technical information and read like records. Rules: class BUYER in `voice/RULES.md`. The four specs were rewritten against them, then read by four buyer-reader agents (`prompts/buyer-reader.md`) and one reviewer at the same time.

| Step | Result |
|---|---|
| Flood insurance and events research | FEMA cost for each ZIP code and zone; Myrtle Trace's calendar counts |
| Verification | All FEMA rows verified; 1 events row wrong (Myrtle Trace 77) |
| Rewrite | All gates pass; score 100 on all four |
| Buyer reads | Same top gap on three of four pages: no monthly HOA dues |
| Dues research | No per-home figure from a primary source for three communities |
| Review | 4 high, 25 medium, 34 low |

What the buyer readers caught that no gate and no reviewer had:

1. **The money answer.** A buyer wants the monthly cost before anything else. The ledgers had what the dues include but not the amount. This is now a day-one research item with an owner fallback (`templates/research-brief.md`).
2. **Method notes.** "Policies that began from June 2025 to May 2026 in the whole ZIP code" reads as a report. The number and what it means go in the copy; the method goes in the sources note.
3. **Words a gate passes.** Homestead exemption, homesite, transfer fee, Zone X, wind pool. None is banned, and each stopped a reader.
4. **Reference points.** Distances "from 1285 Possum Trot Road" mean nothing to a buyer. Name the place: the main entrance, the clubhouse.

What the reviewer caught that the readers did not: facts stated as current from an older rules copy, a sentence a verifier had said not to use, and figures that said more than their row. The two passes find different things. Both stay.
