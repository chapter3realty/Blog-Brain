# Review round 1: /submarkets/murrells-inlet/ (fixes, 2026-11-03)

Three reviewers read the built page: critic (pass=false, 5), reader (pass=false, 7), owner (pass=false, 7). Every change is in `specs/murrells-inlet.js`. No new fact was added. Every figure still comes from a VERIFIED row, or from a CORRECTED row in its safe wording. Nothing here is marked VERIFIED-BY-FIXER.

## Gates after the fixes

- score.js: 99/100. The one point lost is P2, at 3.7 numbers per 100 words. The critic had measured 5.3.
- claims-scan: no hit on this page. facts-check: no hit. house-claims: 0. struck-check: no struck wording. That took three rewrites: the oyster "open to anyone", the "$1,080 high-risk" line and "pays most for big houses".
- photos.js check: every record passes. The new part 3 aerial has its metadata embedded.
- build.js check: OK.
- build.js audit: the same 3 lines as before the round. The 2 date FAILs go away with the lead's `build.js dates` run. The third line is the A20 warning.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking. There are 2 warnings, both `read.wall` on the FAQ's last answer plus the sources and credits. The round-1 critic called that a false hit.
- At 320 px the page is 320 px wide. The AI search box is 272 px wide.
- At 390 px, part 1 now starts at y 3940. Before it started about 6 screens down. The homes strip still sits above the short answer, and the shared layout puts it there.

## Critic

| Finding | What changed |
|---|---|
| Rentals "Yes, unless the neighborhood's own rules say no." (blocking) | The section now opens "It depends on the HOA papers and the county zoning for that lot." |
| Flood policy "in Georgetown County / in Horry County" (blocking) | Now reads "on the Georgetown side / on the Horry side", the safe wording of row 20. |
| 320 px: the AI box is cut off and the page scrolls sideways (blocking, both) | Fixed inside the spec with scoped CSS, the same fix as conway and pawleys-island. The shared fix is NEEDS item 7. |
| Burned-in labels cropped at 768 to 1440 (blocking) | The 4:3 aerials now show at 4:3 at every width, with `object-fit:contain`. Shots at 1024 show "US 17 bypass", "Business 17" and "Salt marsh" whole. |
| Tax tables scroll at 320 | The headers are now "Horry" and "Georgetown". There is one tax table now, not two. |
| "20 / min" breaks in the drive table | Each time in the table uses non-breaking spaces. |
| "the MarshWalk is about 9." and "Broadway at the Beach about 25." | Part 1 now says "about 9 minutes away". The FAQ answer with Broadway was rewritten without drive times. |
| "golf and pools" | The flood chart has no feature column now. |
| Caption does not match the part 3 photo | Re-cut. See the owner's part 3 row. |
| AirROI tile says "income" | The tiles are cut. The text says "about $47,600 in gross bookings ... before costs" and "Its count may take in Garden City Beach homes" (row 27's note). |
| Hero chips measured from the MarshWalk; "Creek sales" | The labels now read "MarshWalk to hospital", "MarshWalk to beach" and "Marsh-front sales: 7 a year". They are 2 lines at 390 px, down from 4. |
| H1 "room for patient buyers" is not explained | Kept, because the owner liked it (data/headlines.json). The short answer now says "If you want a house on the creek, plan to wait: only about 7 sell in a year." The dock section says "you may wait for one." |
| Part CTAs all open the same form | Each one passes `&part=horry-side`, `georgetown-west`, `between-the-roads` or `creek-side`. The labels read as requests ("Send me ... homes in Murrells Inlet"). |
| Life section opens with a tax ratio | It now opens with the MarshWalk and its photo. The 85-in-100 line comes after. |
| Team story sign-off | Still one line with no names, in the drives part of the life section: "Two of our own team chose to live in Murrells Inlet. One of them drives from here to Market Common and to a gym in Carolina Forest." This is within the story's summary and limits. **The lead must still confirm its use (PROPOSED.md).** |
| Two false hits in the critic tool | No change. The photo routing is NEEDS item 8. |

## Reader

| Finding | What changed |
|---|---|
| The headline is never explained; no price trend or time on market | The patience line is in the short answer (see the critic table). No verified row covers a price trend or days on market, so the page makes no claim about either. Adding one needs a new research row, for the lead to decide. |
| Which county are parts 3 and 4 in? | Part 3 opens "This narrow band is on the Georgetown side". Part 4 opens "East of Business 17, on the Georgetown side". The tax section says "Parts 3 and 4 on the map are on the Georgetown side." |
| 220 against 370 creek houses | Part 4 now says "The creek side has about 370 homes. About 220 of them are houses on the edge of the marsh". The $930,000 is "the middle one" of those marsh-edge sales. The parts table is cut. |
| No homeowners or wind insurance figure | No verified source, so no figure is printed. The tax section says homeowners insurance comes on top. The flood section says we pull an insurance quote for the house and links /buyers/coastal-insurance/. |
| Is a creek dock realistic? Does 465 include Garden City? | Now: "Of the 465 listings with a Murrells Inlet address, Garden City included, ... a private dock on 9. Only 2 of those were on the creek side. A creek house with a dock does come up, but you may wait for one." |
| What 3 low tides in 10 means for a boat | Now: "At a dock with little water, a boat can sit on the mud at those tides. We look at the dock at low tide before you offer." The tide chart and its three figures are cut. |
| Nits | The first screen now has the prices and what each side gives. "at the middle" became "middle house price" in the short answer. Part 3 has one name, "Between the bypass and Business 17", and the made-up "between the roads" wording is gone. "true 55+" became "age-restricted". The no-HOA counts were cut from parts 3 and 4. The two US 17 roads are explained once: "US 17 runs through Murrells Inlet as two roads". "A zone" and "V zone" are defined where they are used. "school operating tax", "accommodations tax account", "yearly property return", "SCDES" and "The Census's Murrells Inlet" are cut. Dates are down to October 1 / May, around 1850 and 1989. The dock rule dates, April 30, "2026 rates", "in 2020", "1920" and "January 2025" are gone. The dredging line now has no date. |

## Owner's eye

| Finding | What changed |
|---|---|
| Facts repeated 3 or 4 times | Cut: the 4-card "What the county line changes" table, the "four parts side by side" table, the flood shares in the entries, and the "What a year costs" table, which held the second Georgetown tax figure. The flood shares now appear once, in the flood chart. $450,000 and $570,000 appear once, in the short answer. The tax table uses $450,000 as its example house. "Not a town" is said once. Schools and "who answers calls" now appear only in the FAQ, and the "Is it safe" question is dropped. |
| Too long before the first place | With the county table cut, the county section is two paragraphs and the map. Part 1 starts at y 3940 at 390 px. |
| Technical content and teaching the agent's job | The six dock-rule cards became one sentence plus what we check. The tax section lost the 4 and 6 percent explanation and the method paragraph. It now gives the bill and the link to /buyers/property-taxes/. The sources note says only "each county's rates and fees for its district". |
| Industry terms | A and V zones are defined in plain words where they are used. HUD's fair rent is now "the government's figure for a standard rental in the ZIP code, rent and utilities included". SCDES and "the Census's Murrells Inlet" are gone. |
| Too many numbers | The county paragraph has no counts. The flood insurance paragraph went from 6 figures to 4: the beach-strip $3,260 and "461 of 606" are out. The Airbnb section lost the 4 tiles and "grew 56 percent", and the prose no longer repeats the table's gaps. The tide numbers are cut. |
| Life comes last | "What is it like to live in Murrells Inlet?" is now H2 number 3, right after the four parts. The short answer opens with what each side gives. |
| Part 3 does not sell; the photo shows a storage yard | The aerial was re-cut from the same NAIP 2023 service. It is centred at -79.0462, 33.5492, 600 m wide (naip.py, label_naip.py, naip-frames.json, labels.json and records.py updated; photos.json regenerated). It now shows streets of houses and a loop street of newer houses between the labelled bypass and Business 17. I looked at it full size, and the caption says what it shows. The entry now leads with where the band is: the hospital and a Food Lion just west of the bypass, and the MarshWalk, the restaurants and the creek just east of Business 17. Then the house and condo prices. The H3 is "streets in the middle of the village". The file name still says "between-the-roads". It is not visible copy. |
| Figurative lines | Cut or rewritten: "decides", "changes four things", "puts a boat on the river" (now "Boats go in at Wacca Wache Landing"), "the marsh at the back door" (now "houses on the salt marsh"), "rises toward the creek, not at the county line", "climbs", "Flood risk starts here" and "changed the creek front overnight" (now "Hurricane Hugo struck the creek front in 1989, and the village rebuilt"). |
| The story is boxed in the middle of part 1 | The box is gone. It is one plain line beside Seasons at Prince Creek West, in the summary's own words ("a golf community with no age restriction", "an age-restricted community a few minutes away"). No detail was added. |
| Same fields in every entry | Each entry now carries what is its own. Horry: the HOA point, builders, townhouse and condo prices. Georgetown west: the river, Wachesaw, the Prince Creek split and the HOA fee. Part 3: its location and prices. Creek: history, rarity and the marsh price. The no-HOA count stays only where it is the point (Horry), as a pointer to /buyers/no-hoa-homes/. |
| Pictures of the subject; per-part homes strips | Five of six photos are still aerials. The ground shots wait on the photo partner (shot-list.md) and the per-part strips wait on idx-places.json (NEEDS items 4, 9 and 10). The lead must send the email. |
| CTAs | See the critic table. |
| Nits | The hero tiles are shorter. The cost table with the second Georgetown tax figure is gone. The safe FAQ question is dropped. The Myrtle Beach FAQ answer is now row 2 only: "No part of the Murrells Inlet ZIP code is inside Myrtle Beach or any other town." The "Beach 9 min" figure is cut from the drive table and the FAQ. "true" became "age-restricted". The new shots are in `wf2/submarkets-murrells-inlet/cut3/` and `critic2-shots/`. The byline date is left to the lead's dates run. |

## Where I did not follow a reviewer

- I kept the H1 "room for patient buyers". The owner kept it, so I added the line that explains it instead of removing it.
- The owner's nit suggested the team's routines. I used only "Market Common and a gym in Carolina Forest", from the story summary. I left out the business names, Barnes & Noble and the second person's gym, to keep the line short and add no detail.
- No price trend or homeowners insurance figure. No verified row exists, and the hard rules forbid an unverified fact.
