# Verify: /buyers/buying-in-myrtle-beach/ (batch 2026-11-a)

Independent verifier, 2026-11-03. I did not research these rows. I opened every source myself, or re-ran its script into my own scratch folder (`scratchpad/wf2/buyers-buying-in-myrtle-beach/verify/`). I did not trust the pasted quotes.

The ledger is `facts.md`. Its status column now matches this file, and each row's note ends with my note. Struck wording is in `buyers-buying-in-myrtle-beach-struck.json` (20 entries). Every entry fires on its own struck text, and no approved wording fires any entry. `node tools/struck-check.test.js` prints "all controls pass". The current live page has two struck phrases ("30 to 45 days" and "cash ... about two weeks", row 39). The rewrite must drop both.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 31: rows 1, 2, 3, 4, 5, 7, 9, 10, 14, 15, 19, 20, 21, 22, 23, 26, 27, 28, 29, 32, 33, 35, 36, 40, 42, 43, 46, 47, 48, 49, 51 |
| CORRECTED | 18: rows 6, 8, 11, 12, 13, 16, 17, 18, 25, 30, 31, 34, 37, 38, 41, 44, 45, 50 |
| STRUCK | 2: rows 24 and 39 (owner questions 1 and 3; no source) |

51 rows in all.

**The deciding fact holds, with one limit.** Houses are not a buyer's market: about 3.8 months of supply. Because house sales are a floor, the true figure is at or below that. Condos are: about 7.5 months, and still 7.4 after moving 73 condo-hotel units into the condo group. Houses at $700,000 and up have about 7 months, but that is the top of the source's balanced band, and resales alone have 6.8. Say "near" a buyer's market for them, not "a buyer's market" (row 6). Two condo price bands (6.7 months) are inside the balanced band too. The H1 can say condos are a buyer's market. It cannot say that of "condos and expensive houses" without "near".

## What I re-ran

- **Listings, deeds and builder sales (rows 1 to 11).** I re-ran `analyze.py`, `analyze_new.py` and `build_market.py` into my own folder. `findings.json`, `new-sales.json` and `market.json` came out byte-identical. I re-queried the live map API at 23:00Z. The totals are within one or two of the pull (house 3,701, townhouse 367, condo 2,842, manufactured 508). Every pin I sampled has the status "For sale".
- **Double counting (row 2).** I matched every sale in the OSB file to the NC kept deeds by parcel, date and price. No OSB resale is an NC builder sale, so no sale is counted twice. 114 OSB "builder" sales are not NC builder sales, and they fall out of both counts. Houses sold is a floor, so house months of supply is a ceiling.
- **Towns (row 8).** I re-ran `analyze_towns.py` and `build_towns.py`. `town-table.json` is identical. The only difference in `towns.json` is the order of two places with one sale each. I also counted listings by MLS type in each town, and counted the land-use codes of each town's house resales.
- **Primary sources, fetched live today:**
  - the TRERC PDF
  - SC Code 40-57, 27-50, 26-1, 26-2, 26-3, 26-6, 30-5, 37-10 and 8-21
  - SC Regulations chapter 27 (27-1085 K)
  - Doe v. McMaster
  - both CFPB answer pages, and 12 CFR 1026.19 on eCFR
  - the Horry County Register of Deeds page
  - Fannie Mae Selling Guide B4-2.1-03 (dated 08/05/2026)
  - Clemson's own listing for its Wood Infestation Report training, which names the form "CL-100"
- **Carried rows.** I checked each one against the sibling ledger row it names (SHV, OSB, NC, CM, C2O, MB). For C2O 1 and C2O 6, I also checked the live /buyers/cost-to-own/ page.

## Every correction

| Row | Wrong | Use |
|---|---|---|
| 6 | "$700,000 and up ... where buyers have the edge" | About 7 months is the top of the balanced range: "near the point where buyers gain the edge". Resales alone are 6.8. |
| 8 | City of Myrtle Beach condos "about 12", houses "about 5" | 65 of the city's 676 "house" resales are condo-hotel units (code 108). Moving them, and allowing for the 6 percent no-point gap, gives condos **about 11 to 12 months (about a year)** and houses **about 5 to 6**. Every other town value stands. |
| 11 | "new house is not a premium" (note) | Cut any "new is cheaper" reading. "The middle home a builder sold, condos aside, went for about $330,000; the middle resale house or other home about $350,000." The builder group includes townhouses. The 28.6% is a share of deeds and is a floor. |
| 12 | "the most from May through July"; price "barely moves" | October 2025 (648 house resales) beat May (641) and July (639). Use: "fewest in January and February (about 430 houses a month), about 620 to 670 a month from May to October" [one year]. For price, use SHV 5's corrected wording. |
| 13 | "middle resale house" | "middle resale house or other home" (SHV 1 and 2). |
| 16 | "tax bill goes to another state" | "another state or country" (OSB 2). The condo figure is HPR condos only. |
| 17 | "Out-of-state buyers do not pay more" | OSB 7's wording: "paid the same middle price ... the records show no sign that they pay more". |
| 18 | "rose 0.8 percent ... after rising 52 percent in the five years before"; the note says the index mixes houses and condos | SHV 6's wording: up about 51 percent from mid-2021 to mid-2025, and about flat in the year to mid-2026 (+0.8 percent, inside the margin). The index counts single-family houses only, not condos. It is stale when the 2026Q3 release comes out (late November 2026). |
| 25 | "we line one up on every purchase" | "We line up the inspection" until owner question 2 is answered. |
| 30 | "we send the appraiser comparable sales" | "we send comparable sales with a request for a reconsideration of value". The story does not name a recipient. |
| 31 | "no later than three days before closing" | SHV 21's wording: three **business** days, or as soon as it is done if that is sooner, and the buyer may waive it [12 CFR 1002.14(a)]. |
| 34 | "a home loan for a home to live in" | The law covers any personal, family or household loan secured by real estate, which includes a second home. Say "a home loan for personal or family use" [37-10-102(a)]. |
| 37 | "must be in the room with the signer" | "must be in each other's physical presence; no remote (video) notarization" (OSB 15). The 2021 Electronic Notary Public Act still requires the signer to appear in person (26-2-50(A)(1)). |
| 38 | "The county charges $15 ... $25" | These are uniform fees set by state law (8-21-310(A)) that the register collects: "Recording costs $15 for a deed and $25 for a mortgage, fees set by state law." The address is confirmed live. |
| 41 | "On a $350,000 house" | "On a house the county values at $350,000" (CM 12). |
| 44 | $7,550 a year, $630 a month, HOA $900 | C2O 1 corrected: **$7,850 a year, about $650 a month, HOA $1,200** (Horry ZIPs only). The live cost-to-own page prints $7,850. |
| 45 | North Myrtle Beach house $7,970 | C2O 6 corrected: **$7,670**. Only in Myrtle Beach does the condo cost "less than half as much to buy". |
| 50 | "has no zoning map for them" | MB 39's wording: "needs a business licence, and for now there is no special zoning or permit process beyond it". |

## Struck

- **Row 24 (due diligence period) and row 39 (days to close).** There is no public primary source. Owner questions 1 and 3 stay open. The live page's "30 to 45 days" and "cash in about two weeks" must go. The struck list fires on both.

## For the lead (sibling pages)

1. **MB 14 is the undercount, not this page.** MB 14 is live on /submarkets/myrtle-beach/ and says about 18 months. Its condo rule (HPR only) finds 661 city condo resales. 329 more are condo units the county codes 107, for example "OCEAN REEF RSRT N TOWER; UNIT 612" and "SEA MARK TOWER; UNIT 302". SHV 1's verified rule counts them. With them, city condos have about 11 to 12 months. MB 14 should change to "about a year". Until it does, the site prints two values for one fact.
2. **SHV 4 ($337,000 new-house median on 2,010 sales) is the undercount.** The deed file it uses drops builder sales that have no county building value yet, most of them from 2026. On the full file, the median is $330,000 on 4,998 sales.
3. **Kind mapping limit (all town rows).** A listing's kind comes from its MLS type, and a sale's kind comes from the county's land-use code and the HPR wording. They do not always agree. In Garden City, 69 of the 121 resale "house" listings are manufactured homes. Keep the method line in the sources.

## Photo candidates (PLAN.md)

- **A. "Myrtle Beach (24050832475).jpg".** I read the file page live. The licence is **CC BY-SA 2.0 Generic**. The author is Tom Long from Oak Island, USA. The photo was taken 13 June 2015 and came from Flickr, and FlickreviewR 2 reviewed it. The original is 3,840 x 2,160. I looked at the 1,920 copy at full size. It shows the downtown beach at low tide, with the SkyWheel, rows of umbrellas, and hotel and condo towers. The people are small and none is the subject. The caption "The beach beside the SkyWheel in downtown Myrtle Beach." is accurate. Credit: "Photo: Tom Long, CC BY-SA 2.0, via Wikimedia Commons." The photo is 11 years old: do not say "today".
- **B. "SkyWheel Myrtle Beach in August 2022.jpg".** I read the file page live. The licence is **CC BY-SA 4.0 International**. The author is DiscoA340 ("Own work"). The photo was taken 14 August 2022. It matches the existing record in `data/photos.json` (slug del-webb-grande-dunes).
- **C. Carolina Forest NOAA aerial.** This is public domain (NOAA NGS, record in `data/2026-11-a/buyers-cost-to-own/photos.json`), and the file exists. C2O 39 places it inside the Carolina Forest outline, but only a fixer verified that. Its record says "two-story houses ... gray roofs" and says nothing about age. The caption may not say "new".
- The rejected "Homes and Resorts Along Myrtle Beach.jpg" stays rejected.
