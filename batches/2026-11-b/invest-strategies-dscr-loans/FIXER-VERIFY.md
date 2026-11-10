# Fixer rows, independent check (2026-11-10)

/invest/strategies/dscr-loans/. Rows marked VERIFIED-BY-FIXER: 44, 45, 46 and 47. Row 15 only mentions the RTN fixer row; its own status is VERIFIER VERIFIED and was not re-checked here.

| Row | Result | Note |
|---|---|---|
| 44 | VERIFIED | sctrails.net canoe trail page fetched today: "The preserve protects 28 miles of the Waccamaw River, which is the only river that originates from a Carolina Bay."; "a classic floodplain forest dominated by bald cypress, water tupelo"; "habitat for numerous birds and animals such as otters and black bear"; "Riverside camping is allowed on preserve land."; access point "Mile 5.5 Highway 9 Public Landing". "Only river" has two sources (SC Trails, from SCDNR; MyHorryNews in WT S6). The page says "a state preserve along 28 miles of it", which describes the preserve, not a 28-mile paddle from SC 9 (the trail from that landing is about 20 miles). Keep it that way. |
| 45 | CORRECTED | sctrails.net page fetched today: "a 7 mile trail that twists and turns across 72 acres of land, sandwiched between Carolina Forest and the Intracoastal waterway"; "located in Carolina Forest off of River Oaks Drive, hosts seven miles of mountain biking and running trails". The county, which runs the park, says "7 miles of mountain biking and hiking trails on 70 acres of open space" (WT row 25, verified 2026-11-03). Two sources disagree on the acres, and the owner's page says 70; "wooded" is in neither quote. Right value: 7 miles of trails on about 70 acres. |
| 46 | CORRECTED | gardencitypier.com fetched today: "our 668-foot pier"; "No fishing license required—your pier pass covers everything you need"; "Summer Hours Fishing 24/7". The bands line sits under the heading "Summer Entertainment" ("Come alive with the sounds of summer ... live bands performing every night (weather permitting) at both ends of the pier"), and the winter hours list no End Bar. So the nightly bands are a summer fact. GC row 32's verifier left out "in summer"; that missed the heading. Right value: in summer, bands play every night at both ends, weather permitting [the pier's own site]. |
| 47 | VERIFIED | Fannie Mae B4-2.1-03 fetched today: "Fannie Mae will not purchase or securitize mortgage loans that are secured by units in certain condo or co-op projects if those projects have characteristics that make the project ineligible." /invest/non-warrantable-condos/ ships the same sentence (NW row 1, VERIFIED). |

## Page sentences to change

Row 45. Page: "Off River Oaks Drive, the county's Bike and Run Park, which riders call "The Hulk", has 7 miles of mountain bike and running trails through 72 wooded acres."
Use: "Off River Oaks Drive, the county's Bike and Run Park, which riders call "The Hulk", has 7 miles of mountain bike and running trails on about 70 acres." (The section heading "trails in the woods" can stay: the SC Trails page speaks of "a nice stroll through the woods".)

Row 46. Page: "Bands play every night at both ends of it, weather permitting, and in summer you can fish from it around the clock."
Use: "In summer, bands play every night at both ends of it, weather permitting, and you can fish from it around the clock."
Siblings already say it this way: specs/garden-city.js ("In summer, its deck bar has karaoke in the afternoons, and bands ...") and specs/relocating-why-myrtle-beach.js ("In summer, bands play ..."). This page drops "in summer", and so does specs/relocating-which-town.js ("Its pier is 668 feet long, with bands every night at both ends, weather permitting."). That one is not this batch; the lead should fix it.

Struck list: `batches/2026-11-b/facts/invest-strategies-dscr-loans-struck.json`, entries "invest-strategies-dscr-loans 45" and "46". `node tools/struck-check.test.js`: all controls pass.

Loans: no interest rate or payment amount on the built page (scanned).
