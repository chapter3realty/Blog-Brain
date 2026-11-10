# Verify: /invest/strategies/ (batch 2026-11-b)

Independent verifier, 2026-11-10. I did not research this page. Prompt: `prompts/verifier.md`. Ledger: `facts.md` in this folder (status and note columns filled). Struck list: `batches/2026-11-b/facts/invest-strategies-struck.json` (25 entries). Every struck sentence fires its entry, no approved wording fires any entry, and no claim of a VERIFIED row fires any entry. `node tools/struck-check.test.js` prints "all controls pass".

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 20: 4, 6, 7, 10, 13, 18, 21, 22, 25, 26, 27, 28, 31, 32, 33, 34, 35, 38, 39, 40 |
| CORRECTED | 21: 1, 2, 3, 5, 8, 9, 11, 12, 14, 15, 16, 17, 19, 20, 23, 24, 29, 30, 36, 37, 41 |
| STRUCK (whole row) | 0 (parts struck inside rows 3, 14 and 37) |
| Total | 41 |

Most corrections are a carried row's limit that the hub's shorter wording dropped. Four put back wording a sibling verifier had already struck (lesson B30): row 16 ("344" without "at least"), row 17 ("flipper"), row 30 ("on Carolina Forest Boulevard") and row 41 (the DST ruling without its limits).

## What I re-ran or opened myself

- **This page's script.** `build_findings.py` re-run from the website root: `findings.json` and `chart-entry-prices.json` byte-identical.
- **Flip deeds.** Recounted `data/2026-10-c/horry-flips.json` without the script: 344 pairs on 338 parcels; 143 company resales, median gain $75,000; 221 homes with land value, $265,000 and $315,000; 66 losses. The flip spec's area ranking, recomputed on houses only, gives the same three areas.
- **Small multifamily.** Re-ran that page's `analyze.py` on a copy against the researcher's raw files: `findings.json` and `listings-prices.json` identical. Pulled parcels coded 102, 103, 104 and 126 live from county layer 24 (984, 103, 181, 1,021). Measured the ocean distance by a second method (parcel-shape centroids, distance at each point's own latitude): 927 of 1,268 within a mile, 73.1 percent. Joined the live PINs to the deed file: 58 sales, median $520,000, on 54 buildings.
- **Listings.** Re-pulled `/homes/api/map?type=multi` (07:20 UTC refresh): 65 in all, 55 inside the county line by my own test, median $679,900. Condo flags: 2,704 condos, 1,936 marked for short-term rentals.
- **Deed buyers.** Recounted `out-of-state-buyers.json`: 3,603 of 12,125 outside SC; 1,124 company buyers; 1,969 of the 12,125 are builder sales.
- **DST.** Recomputed `formd_dst_rows.csv`: 160 filings dated 2025-10-01 to 2026-09-30, median minimum $100,000, median commission share 6.0 percent. Re-ran the county owner query live: 11 parcels, 10 trusts, $201,747,318.
- **Opened live:** Zillow ZORI houses CSV (2,074.06 for 2026-09-30); 26 U.S.C. 1031 (Cornell); SC Code 12-43-220 (scstatehouse.gov); Form I-295 and RR 09-13 (dor.sc.gov); HUD 4000.1 Update 18 and form HUD-92561 (hud.gov); the VA purchase page; 38 U.S.C. 3704; the SEC accredited-investor page and Form D data-set page; IRB 2004-33; the City of Myrtle Beach rental news page; AirROI Myrtle Beach and Murrells Inlet.
- **Could not open:** HUD's FMR history file (bot check, HTTP 202, empty). Row 7 is read from the saved copy, as RP's verifier did. The county's land-use code list (`currentlanduse.pdf`) returns 404, so the 102 to 104 meaning stays our reading (SMF row 5).
- **Stories.** Read every story the rows name in `stories/stories.json`, and the owner's own words in the website's `research/relocating/owner-answers.md`.

## Corrections

| # | Wrong part | Use instead |
|---|---|---|
| 1 | "All of these strategies" (the hub has eight; the source says six). "The right house" (the BRRRR lane includes condos). | All six strategies with their own guide here happen on the Grand Strand. DSCR purchases and 1031 trades are the most common we see, and BRRRR is the rarest, because the right property is rare [strategy-mix]. |
| 2 | "a local event", "stayed in touch for years" (not in the story); "asked us", "our buyer list" (makes Chapter3 the actor, PLAYBOOK A11e amended); "still". | An agent at Chapter3 met a man at a networking event, and the two became friends. When he fell behind on a condo here, he asked that agent to sell it quietly. It went to an investor on the buyer list without being listed, at about 20 percent under market, and that investor now collects the rent. |
| 3 | "lenders, attorneys, contractors and managers": no story names contractors or managers. | A new company can outspend us on ads. It cannot buy friendships that last years, and friends of ours tell us about properties before they list [relationships-not-ads; off-market-financed-offer]. |
| 5 | "before you offer" (not in the story). | We filter those out of a search and read the HOA documents for rules that would block your rental plan. |
| 8 | "A house": the group is every non-condo home (HV row 1). | The middle resale of a home other than a condo, mostly houses, was about $350,000 in the 12 months to September 2026. |
| 9 | "the rent": it is HUD's figure for the ZIP, at the middle asking price, for principal and interest. | At HUD's rent figure for the ZIP, a middle-priced 3-bedroom house for sale in Longs or Carolina Forest, outside city limits, leaves about 46 to 49 percent of that rent for principal and interest at our 1.25 target ratio. |
| 11 | "not on your tax returns" (DSCR row 3 ruling). | The lender qualifies the loan on the rent, not on your income. |
| 12 | "a home you live in, on 4 percent" (too loose; RTN row 1). | A home that is not its owner's legal residence, such as a house rented out year-round or a second home, is taxed on 6 percent of its value. A legal residence rented out more than 72 days in a calendar year loses the 4 percent rate. |
| 14 | Conway, Socastee, Carolina Forest, "dated", "where prices drop again" (not in the story; Carolina Forest's middle house is $395,000, above the county's). The condo lane is dropped. | Most good BRRRR candidates here are lower-value homes inland toward Longs or Little River, or condo units in a stable building with a distressed owner. |
| 15 | "the refinance is judged on the rent" (not in the story; not true of every refinance). | BRRRR is rare because the worn house must also sit where rents are high, since the strategy relies on high rents. |
| 16 | "344 quick resales": a floor (FLIP row 2). Areas are ZIP codes. | Horry County recorded at least 344 quick resales, a home resold within 12 months of its last sale, in the year to September 2026. When a company resold, the middle gain between the two deed prices was about $75,000, before costs. By ZIP area, houses gained most in the Conway, Carolina Forest and Little River areas. |
| 17 | "a flipper bought" (most quick resales were sold by people; FLIP rows 3, 5). | Of the homes with their own land, mostly houses, resold within a year, the middle one was bought for about $265,000 and resold for about $315,000. |
| 19 | "58 duplexes ... sold": 58 sales on 54 buildings. | Horry County recorded 58 sales of buildings with 2 to 4 homes, on 54 buildings, in the 12 months to September 2026, at a middle price of about $520,000 [county deeds and parcels; the code meaning is our reading]. |
| 20 | "the county's duplexes": the count leaves out duplex halves on their own lots (code 126, 1,021 parcels, mostly inland). | Nearly 3 in 4 of the county's buildings of 2 to 4 homes on one parcel stand within a mile of the ocean, in a straight line. |
| 23 | "own it within 180" (drops the earlier-of rule). | Name the replacement within 45 days of the sale, and own it within 180 days or by your tax return's due date with extensions, if that comes first. |
| 24 | "held back unless the exchange box is ticked" (with box 16c the amount goes to the intermediary at closing; X1031 row 43). | A seller who lives in another state has state income tax withheld at closing. In a 1031 exchange through a qualified intermediary, that amount goes to the intermediary, and the state is paid nothing if the exchange is completed. |
| 29 | Drops "and reasonably expects the same for the current year". | ... over $200,000 of income ($300,000 with a spouse or partner) in each of the last two years, with the same expected this year. |
| 30 | "on Carolina Forest Boulevard" (struck in DST row 25). | two large apartment communities, one near Carolina Forest Boulevard and one in the Clear Pond area. |
| 36 | "homes resold": the 12,125 include 1,969 builder sales. | About 9 in 100 homes sold in Horry County in the year to September 2026 went to a buyer whose name reads as a company, such as an LLC, a corporation or a bank. (Resales only: 1,062 of 10,156, about 1 in 10.) |
| 37 | "a finding no one prints side by side" (no source). Bar labels from rows 8 and 17. The flip bar's first deeds run from November 2024, so the chart's one period line is wrong for it. | Our comparison: what each way in costs here at the middle. Labels: "A home other than a condo (resale)", "A house resold within a year (first price)". Give the flip bar its own period note, and the DST bar "usual minimum, not a price". |
| 41 | Drops Rev. Rul. 2004-86's limits (X1031 row 38). | A share of a Delaware statutory trust can be the replacement if the trust stays inside Rev. Rul. 2004-86's limits and the other 1031 rules are met. |

## Limits that bind VERIFIED rows

- **6:** Zillow's metro includes Brunswick County, NC. Name it in the sources line; never "Horry County".
- **7:** HUD's 40th-percentile figure, rent plus utilities; not the average.
- **10:** a typical oceanfront two-bedroom at the nights the average listing books; 75 percent of guest payments counted.
- **18:** most of the 66 were sold by people (56 by the file's flag, 55 by FLIP's wider test). Say "most".
- **21:** a count of one day; the page dates it.
- **25:** "another state or country"; the condo share covers HPR-described units only; it is a tax-bill address; never "1031 buyers".
- **28:** the commission part only, never "the fee".
- **31 to 33:** AirROI's October 1 update, 12 months to September 2026. AirROI's live pages moved to the November 5 update on 2026-11-05 (Myrtle Beach area $27,835, 8,669 listings; Murrells Inlet $50,680). The lead's call, as AI's VERIFY says: refresh `data/str-market.json` for every STR page at once, or never link AirROI as the place to check a number. The hub is now a fifth page on the October figures.

## For the lead (outside this page)

- **Small multifamily page, sibling figures.** Its verifier passed SMF row 9 ("58 of those buildings sold") and row 8 ("the county's duplexes, triplexes and fourplexes"). My checks: 58 sales on 54 buildings, and the stock leaves out 1,021 duplex halves on their own lots. Give both pages the same scoped wording, or the two pages will say different things about one figure.
- **BRRRR page.** It prints "Conway, Socastee and Carolina Forest are the usual targets" and "where prices drop again" with no ledger row (row 14 here).
- **Chart data file.** `chart-entry-prices.json` takes its labels and period line from `build_findings.py`. The writer changes the labels and the flip bar's note in the script, then re-runs it. The values stand.

## Should not be published at all

Nothing whole. Cut these parts: "contractors and managers" (row 3), "no one prints side by side" (row 37), and Conway, Socastee and Carolina Forest as BRRRR areas (row 14).
