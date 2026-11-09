# Verify: /invest/strategies/brrrr/

Independent verifier, 2026-11-09. I did not research these rows. I opened each source myself: stories/stories.json, the website's research/relocating/owner-answers.md (lines 953 and 1023), data/2026-10-c/horry-flips.json, and the live page source.

Counts: 1 VERIFIED, 0 CORRECTED, 3 STRUCK.

| # | Status | Why |
|---|---|---|
| 1 | STRUCK | No public source for 17.34%. The owner's own words, line 953: "an average 17.34% below market value discounts Myrtle beach's Real estate owned average discount is lower than the average". So 17.34% is not the Myrtle Beach figure. The title, H1 and lede state it as the Myrtle Beach figure. Cut it everywhere. |
| 2 | STRUCK | No public source, no method and no file for 22.32%. It is the owner's observation (stories.json `distressed-condo-discount`, Q22). The story bank allows it only with the attribution "Chapter3's own observation". As a fact on the page it fails. Cut the number. |
| 3 | STRUCK | Confirmed. horry-flips.json rows carry buy and sell prices, legal, land use and county values; no seller type ("bank") and no market value. A deed records the price paid. A discount to market needs a matched comparison study. None exists. |
| 4 | VERIFIED | stories.json `nash-three-generations`: "grandfather owned farms, restaurants and rental properties in Myrtle Beach". Status usable-with-limits; publishedOn lists /invest/strategies/brrrr/. Limits: no superlative; never imply Chapter3 lends or finances. |

## FIX.md: sentences that go beyond the verified rows

- "Distressed condo units sell at a deeper discount, because condo supply is larger and many investors will not buy into a building at all." It states the owner's observation as a fact. The story bank's limit for `distressed-condo-discount` is "Attribute ... as Chapter3's own observation" and "Do not state 'half of investors' as a statistic". Write: "In our experience, distressed condo units in sound buildings sell at a deeper discount, because condo supply is larger and many investors will not buy into a condo building." Or cut it, since the Condos section already says it.
- New lede, "and the refinance returns your cash": no fact is needed, but it reads as a promise. Safer: "and the refinance can return your cash." (A wording point, not a fact.)
- The H1 and the new title carry no facts. They pass.
- After the edit, grep the built page and llms-full.txt for "17.34", "22.32", "17 percent", "17%" and "22 percent". llms-full.txt has 9 hits for these strings across the site today. Check that none is left in this page's entry.

Struck list: batches/2026-11-b/facts/invest-strategies-brrrr-struck.json.
