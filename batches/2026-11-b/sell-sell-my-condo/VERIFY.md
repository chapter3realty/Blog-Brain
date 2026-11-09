# Verify: /sell/sell-my-condo/

Independent verifier, 2026-11-09. I downloaded the CCAR file myself from https://www.ccarsc.org/clientuploads/2026_Market_Stats/October_2026_Monthly_Market_Report.pdf. The marketstats page links it as "October 2026 Market Report". sha256 1c71eff81a5004f7dff14af0db6afecf54becde0255f5e1420829ca90d497af5, the same file the researcher read. Every page says "Current as of October 10, 2026". The data month is September 2026. The November file is not posted yet (404), so September is the latest CCAR month today.

Counts: 9 VERIFIED, 0 CORRECTED, 1 STRUCK.

| # | Status | Finding |
|---|---|---|
| 1 | VERIFIED | Condo closed 420 to 368, -12.4%. Single-family 1,046 to 1,012, -3.3%. |
| 2 | VERIFIED | Condo pending 448 to 420, -6.3%. YTD 3,878 to 4,105, +5.9%. Single-family 933 to 877, -6.0%. |
| 3 | VERIFIED | Condo median $242,250 to $230,125, -5.0%. Single-family $365,000 to $370,000, +1.4%. |
| 4 | VERIFIED | Condo 137, single-family 118. Definition, p. 7: "Average number of days between when a property is listed and when an offer is accepted in a given month." This is a one-month figure. The condo YTD figure is 131. |
| 5 | VERIFIED | 95.9% and 97.3%. The definition does not account for seller concessions. |
| 6 | VERIFIED | 7.5 and 4.2 months. |
| 7 | VERIFIED | Condo inventory 3,235 in both years. |
| 8 | VERIFIED | YTD condo closed +4.8%. YTD condo median $232,000, -2.9%. |
| 9 | VERIFIED | Matches from-north-carolina.js line 124 word for word. The footer AfBA text and the `#afba` anchor exist. |
| 10 | STRUCK | stories.json has no master policy, underinsurance, roof age or $500 fee (0 hits). The details stay off the page. |

Scope: CCAR's figures cover its whole MLS area, condo properties only. They do not cover the City of Myrtle Beach.

Struck list: `batches/2026-11-b/facts/sell-sell-my-condo-struck.json`. On today's page it fires six times: both "137 days to sell" sentences, "at normal fees", both $500 and roof-age sentences, and the City-of-Myrtle-Beach line.

## FIX.md: planned sentences that go past their verified rows

1. Section 1, subtitle: "Condos here take about 137 days to get an accepted offer". 137 is one month's average (September). The subtitle names no month, and the YTD figure is 131. Write "Condos here averaged 137 days to an accepted offer in September 2026", or use the YTD 131 with "so far in 2026". The same goes for section 4's "in a market where an accepted offer already takes 137 days".
2. Section 5: "Our affiliated lender, BrickWood Mortgage, a separate company, finances condotel and non-warrantable buildings." No row covers what BrickWood does. Row 9 covers the disclosure only. The site's own pages say it more carefully. /invest/condo-buildings/ and /invest/condotel-financing/ say: "BrickWood Mortgage, our affiliated lender, arranges condotel and non-warrantable loans through wholesale lenders that accept these buildings". Use that wording. A lender lends on units, not buildings.
3. Section 6, the new master-policy paragraph: "A lender reviews the building, not only the buyer. If the association's master insurance policy is too small to rebuild after a storm, the building can fail that review partway through a loan ... The fix is the association's: a new master policy for the whole building." No row covers it. Add a row from the agency rule, the Fannie Mae Selling Guide's project insurance section (B7-3), or cut it to what the story bank allows. "The fix is the association's" is also too firm: no source says a new master policy is the only cure.
4. Section 6, the documents paragraph: "Many associations here hire outside companies to hold their records, and those companies charge for their documents, on the company's schedule, not the closing's." No row covers it. Once the $500 story detail is gone, nothing on the page supports "many associations here". Cut it, or tie it to the estoppel page, which also has no fee source (its row 1 is STRUCK).
5. Section 7, FAQ: "Condo supply sits at 7.5 months, which favors buyers." The report gives 7.5 months, not "favors buyers". Write it as a comparison the report supports: "Condo supply was 7.5 months, against 4.2 for single-family homes."
6. Section 7, FAQ: "...but up 5.9 percent for the year to date, so priced-right units are moving." The report does not say "priced-right units are moving". Cut the "so" clause.
7. Section 3, the table: correct. Note that the "June 2026" header and source line must both change. `grep -c "June 2026"` must be 0. The page's second "137 days to sell as of June 2026 ... 121 days" sentence is in the FAQ, and the new FAQ answer replaces it.
