# Verify: /sell/fsbo/ (batch 2026-11-a)

Independent verifier, 2026-11-04. I did none of the research. I opened every source myself and re-ran the deed count from a fresh pull. I did not trust the pasted quotes. My scratch folder is `scratchpad/wf2/sell-fsbo/verify/`.

The ledger is `facts.md`. Its status column now matches this file, and each row's note ends with my note. Struck wording is in `sell-fsbo-struck.json` (13 entries). Every entry fires on its own struck text. No approved wording fires any entry, and six phrases from PLAN.md fire the entry they should. `node tools/struck-check.test.js` prints "all controls pass".

The current live page has one struck phrase: "38 percent of FSBO sellers sold to someone they already knew" (row 17). The rewrite must drop it.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 18: rows 1, 3, 4, 6, 7, 10, 12, 13, 15, 16, 18, 19, 20, 22, 23, 24, 26, 27 |
| CORRECTED | 9: rows 2, 5, 8, 9, 11, 14, 17, 21, 25 |
| STRUCK | 0 |

27 rows in all.

**The deciding fact holds.** SC Code 40-57-240(1) says the licence law does not apply to an unlicensed owner selling an interest identical to their own. A South Carolina attorney must supervise the closing.

## What I re-ran and opened

- **Deeds (rows 23 and 24).** The weekly deed pulls with names were gone from scratch. I pulled the AcclaimWeb DEED (001) index again for 2025-10-01 to 2026-09-30 with the sibling's `pull_deeds.py`. That gave 54 weekly files and 30,339 rows, the same count the ledger gives. I ran `analyze_surnames.py` into my own folder on the OSB sales file. `surname-findings.json` came out identical. The index gives names last name first, so the script's "first word" is the surname.
- **Listings (row 22).** I queried the live map API again at 09:10Z. The totals match this folder's cross-check within a few listings. The page prints BMB's values.
- **Primary sources, fetched live today:**
  - SC Code 40-57, 27-50, 12-24, 12-8 and 37-10
  - Doe v. McMaster
  - SC Bar ethics opinions 06-11 and 00-17
  - the disclosure form PDF, which is linked from llr.sc.gov/re/resources.aspx
  - the Commission's limited market exposure guidance, which is linked from llr.sc.gov/re/
  - EPA's lead disclosure page
  - NAR's settlement page and NAR's 2025 release
  - IRS Topic 701
  - the CFPB page
- **NAR 2025 Profile (rows 17 to 19).** I read the full report: the methodology and Exhibits 7-1, 7-11 and 8-1 to 8-8. The copy on the Rhode Island Association of REALTORS site is NAR's own document, with NAR's copyright page. It is not a secondary source.
- **Carried rows.** I checked each one against the sibling row it names (OSB 12, 17, 18, 20, 28, 40, 45 and 46; SHV 2 and 9; UF 3 and 18; BMB 1 and 9). SHV's findings.json gives the 4,919 houses and the 8.8 percent.

## Every correction

| Row | Wrong | Use |
|---|---|---|
| 2 | "so the attorney prepares the deed" | The source says nothing about who prepares the deed. Use: "Preparing a deed for someone else is the practice of law, so anyone who prepares your deed for you must be a lawyer." |
| 5 | "a sale to your spouse, child, grandchild, parent or grandparent; a sale between co-owners" | The statute says "solely". Use: "a sale **only** to your spouse, or **only** to your children, grandchildren, parents or grandparents; a sale **only** between co-owners". A sale to your child and the child's spouse together still needs the form. |
| 8 | "28 numbered questions in nine parts" | The 28 are in parts I, II, III and V only. The other parts have "Describe" lines, and IX has one Yes/No. Use: "The form has nine parts. It asks 28 numbered questions, each answered Yes, No or No Representation, plus lines where you describe things." PLAN's chip "28-question state form" is struck. |
| 9 | "Seven of the 28 questions are about water and the coast" | Question 20 also asks about flooding (UF 3 counts it), and questions 2, 3 and 21 ask about water. Use: "Seven questions in a row, 22 to 28, ask about erosion, flood ... and beach renourishment. Question 20 also asks whether the house flooded while you owned it." |
| 11 | "A seller of a home built before 1978 must ..." | EPA: "most" pre-1978 housing. These are not covered: a unit with no bedroom (studio condos are common here), housing for older people or people with disabilities where no child under six lives, a home certified free of lead paint, and a foreclosure sale. Use "most homes built before 1978" and list them. |
| 14 | "the middle resale house sold for about $350,000" | The SHV verifiers ruled the group is not all houses. Use: "the middle resale home, condos aside, sold for about $350,000". |
| 17 | "5 percent of home sales were by owner"; "about 3 in every 5 by-owner sales, the seller already knew the buyer" | (a) NAR's sellers are only people who bought a home to live in and also sold one. Say "5 percent of sellers in NAR's 2025 survey", never "of home sales" or "1 in 20 sales". (b) The 3 and 2 point split is rounded. Exhibit 7-11 narrows the share to about 52 to 72 percent. Use: "More than half of by-owner sellers already knew the buyer (3 of the 5 percentage points)." |
| 21 | "exposes it to the most qualified buyers" | The source says "the greatest number of qualified purchasers", and says broad marketing "generally" does so. Use: "... says broad marketing generally exposes a home to the greatest number of qualified buyers, and that limiting it may reduce buyer competition and may hurt the price, terms or time to sell." |
| 25 | "The closing attorney's office sends what is held back to the state." | The buyer must remit. An attorney is not liable for collection, but one that has in fact withheld must remit on time. Use: "If the closing attorney's office holds the tax back, it must send it to the state on time." |

## Corrections to notes and the preface (no status change)

- **Preface, the 38 percent.** The 38 percent *is* in the 2025 report, in Exhibit 7-11, but the other way round. Of sellers who knew the buyer, 38 percent sold by owner; of those who did not, 2 percent. The live page's "38 percent of FSBO sellers sold to someone they already knew" is still wrong, and the struck list fires on it. The Exhibit 7-11 figure may be useful, but it needs its own ledger row first.
- **Row 16 note.** "Several times a typical listing fee": no listing fee is ledgered. Compare the miss with the 1 percent example only. This is in the struck list.
- **Row 19 note.** "Most by-owner sellers had their buyer before they started" says more than the source does. Knowing the buyer is not the same as having them as the buyer before the sale began. This is in the struck list.
- **Row 27 note.** "We confirm it by phone with the attorney's office" is a practice claim with no source (OSB 28 said the same). In a by-owner sale, Chapter3 is usually not in the deal. Write it as the seller's own step. The CFPB URL now redirects to its archive (dated June 3, 2019). The advice is unchanged; cite the archive URL.
- **Rows 17 to 19 are stale by 2026-11.** NAR's 2025 Profile came out on November 4, 2025. The 2026 Profile was not on nar.realtor today. Check again before publishing. If it is out, the figures change.

## Photos (PLAN.md)

| Candidate | Licence on its file page | Verdict |
|---|---|---|
| `images/2026-11-a/invest-where-to-buy/surfside-beach-pier-and-houses-2011.webp` | USGS data release 10.5066/F7N877XX. Its metadata Use_Constraints says "Public domain data from the U.S. Government ... Please recognize the U.S. Geological Survey" (checked live). The record passes `photos.js check`. | **Cleared.** I looked at it full size. It shows the Surfside Beach pier and rows of beach houses, some on open pilings. Fix the PLAN caption: "A seller of a house like these answers seven of the form's questions" implies other sellers do not. Every seller answers all 28. Say what the questions ask (row 9 wording) without tying them to these houses. |
| `images/2026-11-a/hoa-liens-and-foreclosure/horry-government-justice-center.webp` | Commons file page checked live: CC BY-SA 3.0, "Pollinator at English Wikipedia", 2006. It matches the record. | **Cleared** for step 10. Its 16x9 crop has no embedded metadata (`photos.js check`). Embed it again when copying the record. |
| `File:YscloskeyForSaleByOwner.jpg` | GFDL 1.2 or CC BY 2.5 (dual), "Infrogmation", own work | Licence fine (use CC BY 2.5 with credit). **Not viewed**: upload.wikimedia.org returned HTTP 429 to every request. The description says it is a house in St. Bernard Parish, Louisiana, after Hurricane Katrina that "got knee-high water inside". A caption must say that. As a picture for a South Carolina FSBO page, it suggests a flood house. I would not use it. |
| `File:For Sale By Owner sign - 76 Acres.jpg` | CC BY 4.0, "RickObst", own work, 23 October 2026 | Licence fine. Its own title says 76 acres of land, not a house. **Reject**, as PLAN says. Not viewed (HTTP 429). |
| `File:Old Jefferson, Jefferson Parish, Louisiana -House for Sale.jpg` | CC BY-SA 4.0, "Infrogmation of New Orleans", own work, 2 March 2016 | Licence fine. The description says only "House in Old Jefferson". Nothing on the page says the sign is a by-owner sign. **Not viewed** (HTTP 429). Do not use it until someone looks at it full size. |

## Should not be published at all

- The live page's "38 percent of FSBO sellers" sentence (see above).
- "We confirm the wiring by phone" as a Chapter3 practice on this page, until the owner confirms it.
- None of the 27 rows is struck.
