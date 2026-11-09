# Verify: /hoa/estoppel-and-transfer-fees/ (and the matching /sell/ lines)

Independent verifier, 2026-11-09. I re-opened S.C. Code Title 27 Chapters 30 and 31 myself. The old t27c030.php and t27c031.php addresses now return 404; the live addresses are https://www.scstatehouse.gov/code/statmast.php?title=27&chapter=30 and ...&chapter=31. Use those in links and in the ledger.

Counts: 2 VERIFIED, 0 CORRECTED, 1 STRUCK.

| # | Status | Finding |
|---|---|---|
| 1 | STRUCK | No primary source for a Grand Strand range. No SC statute sets or caps the fee. A search for a 2025-26 South Carolina bill that caps estoppel fees found none. Print no range anywhere. |
| 2 | VERIFIED | Re-read today, not reused. Chapter 30 is 27-30-110 to 170 and 27-30-310 to 340. "estoppel", "resale", "transfer fee", "capital contribution" and "statement" appear nowhere. The only "fee" match is inside "feels". Nothing on who pays. |
| 3 | VERIFIED | 27-31-220 as quoted. The duty is on the "council of co-owners" of a Horizontal Property Act regime. It sets no fee and no deadline. |

Struck list: `batches/2026-11-b/facts/hoa-estoppel-and-transfer-fees-struck.json`. On today's site it fires on the estoppel page's "within minutes" sentence and on three /sell/ sentences.

## FIX.md: planned sentences that go past their verified rows, and a miss

1. **Miss: /sell/ has a third range.** `chapter3realty/sell/index.html` line 642: "Condo HOAs typically charge $100 to $400 for estoppel letters and transfer fees." FIX.md changes only lines 55 and 688. Line 642 must go too, or the site still gives two answers. Suggested: "No South Carolina law caps HOA estoppel or transfer fees, so ask the HOA or its manager for its figures in writing."
2. Section 2 and the /sell/ line: "The amounts vary from one community to the next" and "which vary by community". No row supports "vary". Row 1 found no fee schedules at all. Row 2 supports only "no South Carolina law caps them or says what they are". Safer: "No South Carolina law caps these fees or says what they are. Ask the HOA or its manager for its own figures in writing, early." Do not write "sets": build.js refuses it (SETS_REGEX, owner rule 2026-09-06).
3. Section 3 title "Fees, Who Pays, How Long". "How long" rests on "about three days in practice", which is the brokerage's own experience ("That is what we see"). No row covers it. It is existing copy, so it can stay as experience, but it must not become a stated fact in the title or the meta description.
4. Section 1 (cut "within minutes"): correct. No fact is needed to cut it.
