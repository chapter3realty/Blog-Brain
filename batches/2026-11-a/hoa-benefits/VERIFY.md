# Verification: /hoa/benefits/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did none of the research. I opened every source again from this container and re-ran every data script on a copy. Each row's status and note are also in `facts.md`.

## Counts

| Status | Rows | Count |
|---|---|---|
| VERIFIED | 1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 19, 21, 23, 25 | 17 |
| CORRECTED | 3, 5, 13, 17, 18, 20, 22, 24, 26 | 9 |
| STRUCK | none | 0 |

Struck list: `hoa-benefits-struck.json` in this folder, 13 entries. Every entry fires on its own struck wording. No approved wording fires, and neither do six quiet controls taken from verified rows. `node tools/struck-check.test.js` still prints "all controls pass". The live page has none of the struck wording. **For the lead:** batch mode reads `batches/2026-11-a/facts/*-struck.json`. My brief let me write only in this folder, so please copy the file there.

## Corrections

| Row | Wrong | Use |
|---|---|---|
| 3 | House trash 47. The share is 1,204 of 2,590, which is 46.49%. The sibling verifier corrected the same figure (hoa-vs-poa row 17). The row also lists "amenities such as a pool or clubhouse" and "a gate" as things the fee includes. Both are listing fields about the community ("Amenities in the community"), and that field does not name a pool or a clubhouse. | "... trash on 91, 73 and 46; ... The listing says the community has shared amenities on 87, 56 and 61 in 100, and a gate on 13, 8 and 15." |
| 5 | "A house owner pays the roof alone" is not in the source. The survey covers every one-family owner, with an HOA or without. "Paid from the fee and the reserves": no law requires a reserve. The sections cited were also the wrong ones. | "Owners of a one-family house in the South Atlantic states who replaced a roof paid a middle of about $10,400; about 1 in 9 did in a two-year span [AHS 2023]. In a condo, the roof is a common element, and its repair is a shared expense of all the owners [27-31-20(f)(2), 27-31-190]." |
| 13 | "Indoor" is on neither city page. The $175 rate is for an adult aged 18 to 54 (seniors 55+ pay $125 or $210), and the low rate is for a city resident or a US military veteran. At North Myrtle Beach, "Individual" means age 24 and up, and "Couple" means a married couple at the same address. | "... such as Pepper Geddings with its 25-yard pool and weight room, costs an adult age 18 to 54 $175 as a city resident or $295 otherwise ... $555 for one adult or $805 for a married couple, paid in full, plus a $100 joining fee." NMB rates are effective September 1, 2026. |
| 17 | "The recorded documents are the only limits." The special-assessments verifier struck this sentence on 2026-10-d (row 8), and this rewrite put it back (lesson B30). 27-30-140 adds a notice rule. | "South Carolina's HOA law and condo law set no cap on dues, on a special assessment or on a fine, and require no reserve study. The limits are in the master deed, covenants and bylaws." The code is current through the 2026 session. |
| 18 | "Bars it from regulating HOAs" says more than the law does. The law bars the department from issuing regulations or guidelines on how an HOA is run, and from serving as an arbiter. | "The law bars it from issuing rules or guidelines on how an HOA is run, and from acting as a referee in a dispute. A money dispute under the HOA Act of $7,500 or less can go to magistrates court [27-30-160, 22-3-10]." |
| 20 | Heading: "A condo owner can make the association follow its own rules." 27-31-170 binds each co-owner. It lets the board, or in a proper case a harmed co-owner, sue a co-owner who breaks the rules. It says nothing about a board that breaks them. | "Every condo owner must follow the bylaws and the recorded restrictions. A breach is grounds for a suit for damages or an order, brought by the board for the owners or, in a proper case, by an owner who is harmed." |
| 22 | The section is B4-2.2-01, Full Review Process (08/05/2026), although its URL reads b4-2.2-02. It is a condo project review, not a review of every HOA. The study route needs more than "the reserves are funded". Freddie Mac moves its test to 15 percent for applications from January 4, 2027 (hoa-reserves row 16), so this row is stale on 2027-01-04. | "For a conventional loan on a condo, Fannie Mae has the lender check that the association's budget puts at least 10 percent of its yearly dues income into reserves. The lender may rely on an acceptable reserve study instead, if the funded reserves meet the study's recommendations." |
| 24 | No source says "the documents come through the seller and the association". Members of a nonprofit-corporation HOA also have records rights, under 33-31-1602 (five business days' written notice). | "An owner may inspect and copy the yearly budget and the member list. In a nonprofit-corporation HOA, that right comes from the Nonprofit Corporation Act; in any other HOA, from the HOA Act. A buyer is not yet an owner under either." |
| 26 | The story is about buyers from New York. "From up north" widens the place, which adds a detail. | "The biggest mistake we see buyers from New York make: not checking that the community's rules fit how they live, such as HOA covenants on boats, golf carts, rentals and pools." |

## Re-runs

- `analyze_houses.py` on the saved `raw/houses-active.json` gives identical output.
- Fresh pulls, 2026-11-04 about 13:10 to 13:40 UTC:
  - `pull_counts.py`: 3,695 houses, 1,140 with no fee.
  - `pull_condo_fees.py`: 2,832 condos; $640, $920 and $515.
  - `pull_houses.py`: 278 calls, 3,691 of 3,695 houses.
  - `analyze_houses.py` on the new pull.
- Every rounded figure in rows 2, 6 and 8 to 12 is unchanged. The counts moved by 1 to 3 homes (built 2000+ with a fee: 2,014, was 2,012). Copies: `data/2026-11-a/hoa-benefits/verifier-rerun/` in the website working copy (counts.json, condo-fees.json, price-test.json).
- `scdca_concerns.py`: identical output. I downloaded the four workbooks again from consumer.sc.gov/HOA-reports, and their SHA-1 hashes match the reused files. The complaint dates run from 2022-01-31 to 2025-12-30, so the period is calendar 2022 to 2025. The 2026 report counts 140 Horry complaints.

## What I opened

- SC Code chapters 27-30, 27-31, 27-50, 33-31 and 22-3, live at scstatehouse.gov. Its code page says the code is "current through the 2026 Session".
- Fannie Mae Selling Guide B7-3-03 and B4-2.2-01, live (published October 7, 2026).
- Clarke and Freedman (2019):
  - the abstract at RePEc
  - the full April 2019 text at lcc.mn.gov (54 pages)
- City of Myrtle Beach: recreation memberships and Pepper Geddings pages.
- North Myrtle Beach Aquatic and Fitness Center: membership and home pages.
- SCDCA HOA reports page and its four workbooks.
- The sibling ledgers: hoa-hoa-vs-poa rows 15 to 17; buyers-cost-to-own row 30; hoa-reserves rows 12, 13 and 16; hoa-liens-and-foreclosure rows 1 and 2; hoa-tax-deductible row 28; hoa-special-assessments row 8.
- stories.json `ny-buyer-rules-fit`.

## Notes for the writer on verified rows

- Row 7: the sales in the study date from 2005 onward. Say "a 2019 study", never "recent sales". The premium is a national average, and it shrinks as homes age.
- Row 9: "No fee" means a fee of 0 or blank. Use "list for", never "sell for", and do not claim the HOA causes the gap.
- Row 19: 27-31-250(B) is about repairing damaged insured property.
- Row 23: never "the Supreme Court confirmed". Timeshares are the exception to court-only foreclosure.
- Row 25: "Other" (92 complaints, 22.1%) is the third largest group. Either show it in the chart or call the list "named concerns".

## Photo candidates (PLAN.md)

| # | File | Licence on the file page | Look at full size | Status |
|---|---|---|---|---|
| 1 | `images/2026-11-a/invest-condos/myrtle-beach-condo-towers-2011.webp` | USGS data release doi:10.5066/F7N877XX. Its metadata reads: "Use_Constraints: Public domain data from the U.S. Government ... Please recognize the U.S. Geological Survey". Record passes `tools/photos.js check`. | Three oceanfront towers with pool decks behind the dunes and wooden walkovers to the beach. No readable name or plate. It shows what the caption says. | OK |
| 1 alt | `images/2026-11-a/invest-rental-program-vs-airbnb/oceanfront-resort-from-the-beach.webp` | Commons "The Grande Shores Resort": CC BY-SA 2.0, Philip Tellis (Flickr 2355885139), taken 2008-03-01. The record matches and passes. | A ten-story building at dusk with a walkover over the dune. | OK; credit required |
| 2 | `images/buyers/the-farm/the-farm-pool-from-above-2026.webp` (NOAA NGS, public domain) or `images/buyers/best-neighborhoods/waterbridge-from-above.webp` (USDA NAIP, public domain) | Both records are U.S. government work and the licences are right. | **Neither file exists in the website working copy** (or its 600w and 1200w variants). `tools/photos.js check` fails on both. | NOT USABLE until re-exported |
| 3 | `images/buyers/no-hoa/myrtle-beach-older-streets-from-above.webp` (USDA NAIP, public domain) | Licence right | **File missing** (same failure) | NOT USABLE until re-exported |

The builder needs one of two things for photos 2 and 3. Either re-export from the recorded sources into `images/2026-11-a/hoa-benefits/`, with a new licence record, or drop them.
