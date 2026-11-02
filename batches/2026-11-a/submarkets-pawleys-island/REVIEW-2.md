# Review round 2: /submarkets/pawleys-island/

The re-check failed the page (score 8) on two blocking items. Every change is in the spec, `specs/pawleys-island.js`. New data is in `data/2026-11-a/submarkets-pawleys-island/raw/fix2-*.json`.

## Blocking

1. **Rows 52 to 58 were marked VERIFIED-BY-FIXER.** I re-checked all seven from their sources. I am a separate agent from the round-1 fixer and did none of that research. I re-fetched the sources rather than reading the round-1 notes:
   - Row 52: the town's A-Tax memo (the four quarters and the total match to the cent) and SC Code 12-36-2630(3) (the 2 percent is paid to the town each quarter). I redid the arithmetic: $26.6 million, $69,871 a house, Q1 2.3 percent, Q3 57.8 percent.
   - Rows 53 and 54: the Hammock Shops site, the OpenStreetMap API, and OSRM drive times from Town Hall (2.5 minutes each).
   - Rows 55 and 56: Overpass re-run. The nine golf courses are all west of US 17 by a side test on US 17's own OSM ways, and the bikeway has 27 ways from 33.43 N to 33.53 N.
   - Row 57: the SC State Parks page and the NPS landmark list.
   - Row 58: OpenFEMA's v3 field list. crsClassCode is the class "used to rate the policy", and policyCost is "calculated premium" plus fees. All 98 town policies in a fresh pull carry class 5.

   All seven rows are now VERIFIED, and each carries a verifier note. One part was not re-read: the budget cross-check ($828,307). The budget PDF has no text layer, and this container has no OCR tool. The page figure rests on the memo, not on that cross-check. If the lead wants a check by a third agent, rows 52 to 58 are ready for it.
2. **Owner item 10, the missing searches.** I added the parts that were missing, each from a new ledger row (59 to 62, VERIFIED-BY-FIXER, for the lead to re-check):
   - **Eating** (row 59). There is a new "Where to eat" part in "Living there all year". It gives the town's own line on island night life, the restaurant count (20 restaurants on the map from Litchfield south past the causeways, 19 of them on US 17) and the names Pawleys Island Tavern, Frank's and Frank's Outback. The Hammock Shops entry now names its two restaurants, Local and BisQit. No restaurant is placed on a side of US 17, because several are within 50 m of the road.
   - **The Pawleys hammock** (row 60). It is a boxed note in "behind the island": a riverboat captain who carried rice between Georgetown and Waverly Mills made the first one in 1889, of cotton rope with no thick knots, and the shops still sell handmade hammocks. The source is the Hammock Shops' own history, and the page says "They say". The captain is not named. The old research note named Joshua John Ward, who died in 1853, so that name cannot be right for 1889.
   - **Brookgreen** (row 61). The Litchfield entry says what Brookgreen is: the Huntingtons set it up as a nature preserve to show her sculpture and the work of other sculptors. It is opposite the state park, and with Atalaya it is a National Historic Landmark (NPS nomination and landmark list). brookgreen.org cannot be reached from this container.
   - **Winter, day to day** (row 62). The page now has January's normal high and low (about 57 and 37 degrees, NOAA's Brookgreen Gardens station, about 6 miles north) as two tiles. It adds the dog rule: from October through April dogs may be off the leash on the beach, if the owner carries one and the dog comes when called. It says winter is outside hurricane season (June 1 to November 30), so winter is the easiest time for work on a house, when rentals are fewest and the storm season is over. The page does not say which shops stay open in winter. I found no source for that, and I cut a sentence that hinted at it.

## Nits taken

- **Owner item 1 (distance to the first place).** The "Is Pawleys Island an island" section is now the start of the four-parts section, with one heading: "Is Pawleys Island an island, and what are its four parts like?" The map stays under it, and the TOC has 9 links. The first place now starts about 200 px sooner at 390.
- **Top line "Island houses rarely list. We watch the island and call you."** Kept. Every bar page has this compact top offer (glass.js `topOfferLine`; the-farm, conway, garden-city). It is the page's first way to reach us, and it sits right under the short answer as on those pages.
- **Owner item 7 (zone labels as headings).** The two cards are now headed "About half: water and waves" and "The other half: water". Each card ends "FEMA calls it the VE zone" or "the AE zone", because those labels appear on lender and flood forms.
- **Owner item 8 (dates).** "Since 1950" is now "In the past 75 years". The chart caption keeps the data range. "2024" is down to two mentions in the body: the lodging tax quarters, and "In 2024, guests paid". The rental tiles now say "in a year".
- **Owner item 9 (referrals and repetition).** The coastal insurance referral is cut. The "What schools serve" FAQ is cut, because the body has the same line. "130 people" is cut from the body and stays in the FAQ. The Myrtle Beach FAQ now gives a distance ("about 26 miles north by road", row 50) and no longer repeats the 40-minute drive. Kept: the "Is Pawleys Island expensive?" FAQ. Search shows an FAQ answer by itself, so it has to give the price.
- **West of US 17 is the thinnest entry.** Not changed. It has the golf courses, the nearest grocery store, the flood share and the prices. Any restaurant I could add sits within about 150 m of the highway, too close to say which side it is on.
- **Read walls.** The Litchfield nearby places and the behind-the-island places are now short lists, and the hammock is a boxed note. The critic's walls for those entries and for the winter part are gone.

## Gates after the fix

- Build: `node tools/mkpage.js specs/pawleys-island.js` ok. The sources line was trimmed to fit 90 words: shorter source names and a shorter sources note.
- score.js: 100 (SEO 100, AEO 100, Human 99, Trust 100). The one part score below 100 is P2 at 79 percent (4.2 numbers per 100 words).
- claims-scan: 0 on this page. facts-check: 0 on this page. house-claims: 0. One "most houses are lived in all year" sentence was flagged and cut.
- build.js check: OK. build.js audit: only the date pair (set by `node build.js dates`, the lead's run) and A20 (no quote from a licensed person; we write none without the owner).
- critic.mjs on port 8783 at 320, 390 and 1440: 0 blocking. 3 warnings, all read.wall on parts this round did not touch: the golf cart FAQ at 390 and 320, and the short answer at 320. Output is in `wf2/submarkets-pawleys-island/critic.json`, and the shots are in `critic-shots2/`. I looked at the 390 and 320 shots of the four parts and the living section. The lists, the hammock note and the January tiles read in order and fit the width.
