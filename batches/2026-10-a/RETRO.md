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
