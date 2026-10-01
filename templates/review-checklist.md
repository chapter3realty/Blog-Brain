# Review checklist: <page URL>

The reviewer agent fills this in (`prompts/reviewer.md`). It never wrote the page. Each "no" comes with the sentence and the fix.

## Machine gates (paste the output)

- [ ] `node build.js audit`: 0 errors on this page.
- [ ] `node tools/score.js --site <site> --only <url>`: score ___, no blockers.

## Human checks from STANDARD.md

- [ ] **A1: sub-questions.** Every sub-question in the brief is answered by an H2 or an FAQ entry. List any that are missing.
- [ ] **A11: numbers.** Every number has a unit and a date or period.
- [ ] **H6: the page agrees with itself.** The hero sub, short answer, sections, table, FAQ and schema state the same facts the same way. List every pair that disagrees. The pilot found two on a live page.
- [ ] **H7: the buyer test, on every sentence.** Would a buyer standing in the property do anything differently because of it? List every sentence that fails.
- [ ] **H8: jargon.** Every term a buyer might not know is defined in the sentence where it first appears.
- [ ] **T5: quotes.** No sentence puts words in Tim Nash's mouth unless the owner-answers file shows his approval of those exact words.
- [ ] **T6: facts.** Every number on the page appears in the fact ledger as `verified`. List any that do not.

## Owner-history check

Read every `owner-answers-*.md` and every owner note in the website's HANDOFF. For each past correction that is **not** yet a `build.js` gate, check this page for the same pattern. Examples from history:

- writing about the industry instead of the buyer (A11a)
- national framing where a local one exists (HANDOFF H:1408)
- a short answer that frames instead of answering (A22i)
- "Send the address" on a page where it does not fit (H:1723)
- implying Chapter3 does property management (H:1519)
- anything that sounds like Chapter3 lends (A14a, A17b)

List each hit, with the past note it matches.

## Read it as the reader

- [ ] Read the H1, the short answer and the first sentence of each section, and nothing else. Do they answer the query on their own?
- [ ] Read the page on a phone-width screenshot. Is the figure legible? Does the table scroll inside its box?
- [ ] Is there anything a reader would want to do next that has no link?

## Verdict

- [ ] Ready for the owner.
- [ ] Not ready. Fixes are listed above.
