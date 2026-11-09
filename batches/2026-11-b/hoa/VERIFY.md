# Verify: /hoa/ (batch 2026-11-b)

Independent verifier, 2026-11-09. I did none of this research. Ledger: `facts.md` in this folder (status and notes columns updated). Struck list: `batches/2026-11-b/facts/hoa-struck.json` (10 entries; each fires on its struck wording, no approved wording fires; `node tools/struck-check.test.js` prints "all controls pass").

**Counts: 29 rows. VERIFIED 20. CORRECTED 9. STRUCK 0.**

## What I re-ran

- **Map API (rows 1 to 6).** My own script, not the researcher's. For all 11 segments: the total, the blank-fee count, and each quartile tested at its value and at $5 below. Every total matches `fees-by-kind.json` and every quartile holds. Re-counted 8 "covers" cells; all match. Scratch log: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/verify-hoa/api-check.log`.
- **FEMA (row 9).** Re-ran `pull_rcbap.py` into a fresh folder: `rcbap.json` identical. Read the OpenFEMA field dictionary live for code A, policyCount and policyCost.
- **Census PUMS (rows 7, 8, 21).** Downloaded `csv_hsc.zip` (2024 1-year) and re-ran `analyze_pums.py` for Horry and the rest of SC: both outputs identical to the reused files.
- **Budgets (rows 10, 13, 14).** Downloaded both PDFs (byte-identical to `raw/`). Re-read every Del Webb line from the text and recomputed the shares. Rendered the Myrtle Trace scan, page 6, at 150 dpi and read the 2026 column; every typed figure matches.
- **Documents.** The SCDCA 2026 report PDF (rows 22, 24); SC Code Title 27 chapters 30 and 31, live (rows 25, 26, 27); Del Webb at Grande Dunes Declaration 7.13, rendered from the scan (row 11); waterbridgehoa.com (row 19).
- **Reused rows.** I read each source row in its own ledger, including its verifier's note. I re-queried the API where a row could have gone stale (rows 18, 19, 20, 28).

## Corrections

| Row | What was wrong | Use instead |
|---|---|---|
| 7 | "Horry County owners". The PUMS group leaves out the Loris area (PUMA 02601), the same scope fix as cost-to-own row 27. | "Owners of a one-family house in Horry County outside the Loris area who pay an HOA fee report a middle of about $90 a month; owners of a unit in a building of three or more homes, about $440. In the rest of South Carolina: about $70 and $390." Only the two numbers against the listings; no clause about second homes or rentals. |
| 10 | (1) $3.9 million is Department 1 only, the main budget all owners share; villas have a second budget. (2) "In shared buildings" is not in the budget. | "In its main 2025 budget, which all owners share, Del Webb at Grande Dunes planned to spend and save about $3.9 million." "About 6 cents for power, water, gas, phone and internet." A dollar total needs its year. The shares may run without a year if the sources line says 2025. |
| 11 | The declaration says the opposite. Section 7.13 says master charges, the Beach Club fee among them, "are separate from, and in addition to, the Assessments provided for in this Declaration and are not included in the budget of expenses for the Association." No document says the Beach Club is the Ocean Club. | "Every owner pays a mandatory Beach Club fee to the Grande Dunes master association, on top of the association's own assessments [declaration 7.13]. In 2025 the association's budget collected the Ocean Club and master association charges from owners and paid them on [budget, 2025]." |
| 15 | The note lets the copy say "the fee includes lawn care, internet and TV". Source row 72 says not to state what the HOA covers; rows 27 and 28 are the builder's claims. Row 70's count was wrong (headline stands). | "Listings show $315 a month on most homes for sale or sold in 2026 (77 of 80). The builder lists lawn care and a 175-channel TV package in the fee, and most listings name internet." |
| 17 | "Guarded gate" for Prestwick. "Guarded" is a listing agent's word (gated row 19). | "Prestwick (a main gate off Highway 544) $185 to $197". The other four examples stand. |
| 19 | The lazy river comes from listing remarks, which are allowed for fees only. It is not a row. | "Waterbridge, a neighborhood of houses with a pool complex and a clubhouse: listings show about $150 a month on most homes for sale" [HOA site, neighborhoods row 185; fee re-queried today, 26 of 27 at $150 or less]. |
| 20 | "Surfside Beach and North Myrtle Beach $25". This is the script fault that cost-to-own row 25's verifier caught: a $0 middle printed as $25. Today 138 of 255 houses in 29582 list no fee, and 123 of 176 in 29575. | "In North Myrtle Beach 29582 and Surfside Beach 29575, more than half of houses for sale list no fee." The other area values stand. |
| 21 | The same geography gap as row 7. | "Owners of a one-family house in Horry County outside the Loris area pay a middle of about $2,000 a year for home insurance." Row 19's "may also pay" wording stays exactly. |
| 27 | "The recorded documents are the only limits" is wording that hoa-benefits row 17's verifier struck. That row is CORRECTED, not verified. | "South Carolina's HOA law and condo law set no cap on dues, on a special assessment or on a fine. The limits are in the master deed, covenants and bylaws." |

## Verified, with limits the writer must keep

- **Rows 1 to 3.** Each figure is a median to the nearest $5 step, so write "about". Gated golf has a wide middle half ($100 to $320, 144 homes): print "about $200" only. The flag labels are "Community amenities" and "Community pool or clubhouse".
- **Row 4.** The quote cell says house trash is 1,167 of 2,526. The file says 1,161. The share, 46, is right either way. "Insurance" is not "the master policy". Pool, gate and security are what the community has, not a fee line.
- **Row 9.** $405 is the middle building's cost per unit, not the middle unit's; weighted by units it is about $294, so "a small part" holds. For V zones print only "about $550": that is 50 policies, middle half $306 to $1,165.
- **Rows 12 and 16.** The source rows (2026-10-a rows 95 and 86) are marked "wrong" on scope and counts. Their headline fees stand ($401 houses; $342). These are fees sellers entered on listings. Do not say the Del Webb listing fee includes the Ocean Club or the master charges.
- **Row 14.** The 2026 budget shows no transfer to reserves. Write "left over after expenses", never "saved".
- **Row 18.** The fee is re-queried and holds: Grande Dunes houses about $350, 90 for sale today.
- **Row 24.** These are complaints filed with the Department of Consumer Affairs. Do not say HOA problems rose 176 percent.
- **Row 26.** The source row is "corrected", but only its deed sentence was wrong, and this row does not use that sentence.

## Do not publish

- Row 11 as written: "the beach club is part of the Del Webb at Grande Dunes fee".
- Row 20's "$25" for North Myrtle Beach and Surfside Beach houses.
- Row 27's "the recorded documents are the only limits".
- The lazy river in Waterbridge.
- Any clause that the oceanfront condos are mostly second homes or rentals (row 7: no source).

## For the coordinator

- /buyers/cost-to-own/ (batch 2026-11-a, row 17) prints the $2,000 house insurance figure as "Horry County". The same Loris-area scope applies there.
- The hub's ledger listed rows 11, 12, 15, 16, 20, 26 and 27 as "reused-verified". Several of their source rows were marked wrong or corrected, not verified. Read each source row's status before reusing it.
