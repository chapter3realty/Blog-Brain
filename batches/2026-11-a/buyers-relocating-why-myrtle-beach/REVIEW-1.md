# Review round 1: /buyers/relocating/why-myrtle-beach/

Fixer, 2026-11-04. Spec: `specs/relocating-why-myrtle-beach.js` in the website working copy. New facts are rows 45 to 63 in facts.md: VERIFIED-BY-FIXER rows 45 to 49, and carried rows 50 to 59 from sibling ledgers. The lead re-checks rows 45 to 49.

## Gates after the fixes

- `score.js`: 100/100 (SEO 100, AEO 100, Human 100, Trust 100).
- `claims-scan`: 0 hits on this page. `facts-check`: 0 on this page. `house-claims`: 0.
- `critic.mjs` at 320, 390, 768, 1024 and 1440 px: 0 blocking. The 320 px sideways scroll is gone. One warning is left at 320 and 390: a read.wall over the last FAQ answer, the sources and the credits. That is the end matter, and I left it as it is.
- `node build.js check`: OK.
- `node build.js audit`: two `!!` items, both dates (byline and schema against the sitemap), for the lead's `build.js dates` run. One `~` warning: A20 (NEEDS.md 6).
- I looked at the new shots at 390 px: the map, all five photos, the cards and the tool. Each photo shows what its caption says.

## Critic

| Finding | What I changed |
|---|---|
| B: `.c3-rc` cards overflow at 320 px | `minmax(min(19rem,100%),1fr)` and `min-width:0` on each card. critic.mjs: no page-scroll at 320. |
| B: the short answer's first sentence is unsupported | Rebuilt from rows 4 and 23: "Most households moving to Myrtle Beach and the rest of Horry County come from another state. In most of the out-of-state counties that send the most, a typical home costs more than one here." "Near the beach" is gone. |
| B: hero chip "Born elsewhere" | Now "Born in another state · 6 in 10". |
| W: read.wall in #why-people-leave | Added a chart of where the leavers went (Georgetown, Brunswick, Charleston; row 9). Cut the three-fact "What one mover noticed" block. |
| W: the leaving H2 answers where, not why | The why is now on the page: lower income (row 6), making friends (story), heat (about 21 days a year at 90 degrees, row 46) and hurricane season (row 48). One link is left (hurricane page). I did not write that lower local pay causes people to leave, because no row says so. The income sentence stands on its own, and the "Should you move?" intro makes the point. |
| W: the winter card gives no winter figure | The card is now "The winter is short and mild": a January high of about 56 and a low of about 37, and about an inch of snow a year, with about two winters in three bringing none (rows 46, 47). The "outside in winter" decision card now gives a number: a day that stays below freezing all day comes about once in three years. |
| W: the "out-of-state" qualifier was dropped | Added in the tax section, the short answer and the FAQ ("in the out-of-state counties most movers come from"). |
| W: "about 9,100 a year" | Now "In the latest IRS count, about 9,100 households left ... and about 15,000 arrived", in the body and the FAQ. |
| W: "most of all North Carolina, Long Island ..." has no state row | Rewritten by region and county: "About six in seven households ... come from another state. The South sends the most, then the Northeast", then the counties by name (rows 4, 7, 62, 63). |
| W: sources line is missing rows | Added SC Code 12-16, NOAA normals (NCEI), NWS snowfall, NOAA hurricanes, OpenFEMA, ACS microdata and 56-3-627. The Villages sentence is cut, so "our ranking" is no longer needed. |
| W: "larger from the year you turn 65" | Now worded as row 33: "From the year you turn 65, up to $10,000 a year of retirement income is deducted for each person. A second deduction brings the total to $15,000 a person against any income." |
| W: the hero sub-header answers "is it growing" | The sub-header now gives the reasons: "Movers come to Horry County for the beach and the water, a short and mild winter, a lower home price and a low property tax." It has no we, our or us, and it names a place (audit anchor). |
| W: the count-date sentence | The chart note now says "We ran this count on November 3, 2026; ask us and we run it again for your price." The date is read from `listings-counts.json` `pulled` (as run-the-numbers.js does), not typed. |
| W: the fastest-growing FAQ | It now opens "No, but it is close." |
| W: the population chart is flat at 1440 | The chart now has three bars: the 2020 census, the latest estimate and the 2030 projection, with max at 1.05 times the projection. The year-by-year bars are cut (owner). |
| Nits | Notes only (date mismatch, preview strip). The strip is in NEEDS.md 4. |

## Reader (62, Columbus, Ohio)

| Finding | What I changed |
|---|---|
| B: winter is never answered | Winter card, decision card and a new FAQ "What is winter like in Myrtle Beach?" (rows 46, 47). The hero chip is "January high · About 56°F". |
| B: insurance is missing | The H2 is now "How much are taxes and insurance in Myrtle Beach?" and has an H3, "Home insurance costs more than in the rest of the state". It gives about $2,000 against $1,400 (row 50). Flood insurance is about $550 outside the high-risk zone and about $1,070 inside it, with who must buy it (row 51). It names which towns have few houses in the high-risk zone and which have about 3 in 10 (row 52), and offers an insurance quote before the offer (story). The FAQ "Is it cheaper ...?" now says insurance costs more. |
| B: no map | New map in "Is Myrtle Beach getting overcrowded?". It shows the City of Myrtle Beach and Carolina Forest, Socastee, Murrells Inlet and Little River from the Census outlines, numbered, with a key that says which are outside city limits. Under it are drive minutes to the beach from each place (row 53). The first paragraph of the four reasons now explains Horry County and the Grand Strand, where the reader first meets them. |
| B: the Boston story confuses | Cut from this page. It is an investor story (owner agrees). PROPOSED.md 4 is updated. |
| B: who is the biggest source? | Georgetown County is now named as the largest single source, with its count (about 530, row 63). The region chart labels "Other South Carolina counties" with "most from Georgetown County". The eight-county table is cut. |
| Nit: no Ohio county in the tool | Added Franklin County (Columbus) and Cuyahoga County (Cleveland), same Zillow file and month (row 45). New sentence: "From Ohio and the Pittsburgh area, the reverse is true: a typical home here costs more than one there." |
| Nit: $944 against $1,470 | "The bills in the chart are what owners pay today. For a house you buy, budget from its price: about $1,470 a year on a $400,000 house you live in outside the city limits." |
| Nit: the MLS strip | NEEDS.md 4 (shared feed file). |
| Nit: jargon | "MLS" is gone from the body (spelled out once in the sources note). "Zillow's home value index" is now "county figures". "metro area" is explained once ("the Myrtle Beach area, which is all of Horry County"). "IRS count of tax returns that moved ..." is gone from the body. "Clear days" is gone. |
| Nit: too many numbers, both tables skipped | The year-by-year chart, the births-and-deaths chart, the eight-county table, the region ratios and the 1-in-19 line are cut. |
| Nit: many dates | The year list, "2019 to 2025" in the prose and the births-and-deaths years are cut. Left: the jobs card label, mid-2024 to mid-2025, 1927, the 2026 exemption line and the count date. |
| Nit: repeated business-owner line | The card is cut. The line stays once, in jobs. |
| Nit: "More people die here than are born" in the hero | The line is out of the hero. The growth section says "The growth is people moving in". |
| Nit: the $250 fee | Explained from SC Code 56-3-627(D): a one-time state fee on each car first titled in another state. Active duty owners do not pay it (row 49). The $50 road fee is dropped (one number fewer). |

## Owner's eye

| Finding | What I changed |
|---|---|
| B: the short answer is contradicted by the data | Rebuilt (see critic). The overcrowding section and the advice to buy outside the city now agree with it. |
| B: the page sells money, not the place | The first reason is now "The beach and the water", and the second is winter. Work moved to its own section. New H2 "What do people do in Myrtle Beach?" covers the Boardwalk (1.3 miles), Murrells Inlet's seafood and MarshWalk, public oyster and clam grounds from October through May, Conway's Riverwalk and kayak launch, the Bike and Run Park on the waterway, Huntington Beach State Park, Pine Lakes and the $72 Golf Passport, the off season, and farm stands and butchers (rows 54 to 58, stories). It has three new photos, each under its sentence. |
| B: too many numbers | Cut as the owner listed: the year-by-year list, the births-and-deaths chart and H3, the eight-county table, the ratio lines and The Villages sentence. Kept: the 15,000 and 9,100 headline (short answer, leaving section, FAQ) and 6 in 10. |
| B: formal wording | Gone: "nearest long-term government weather station", "The Census Bureau's Myrtle Beach metro area is Horry County alone", the IRS-report phrasing in the body, "Zillow's home value index" and "gross". |
| B: the winter card | Answered (see critic). |
| B: nine send-elsewhere links | Each section now answers in place and keeps at most one link. Traffic: "rush hour adds 5 to 10 minutes, and SC 31 or SC 22 avoids the many stop lights on US 17" (traffic-timing). Heat and hurricanes: one number each. Jobs: what our buyers find, and how fast. The winter card has numbers. The retirees link and the pros-and-cons, weather and getting-around links are gone. The state-page list stays as navigation, now a list. |
| B: repetition | The duplicate card is cut. $320,000 now appears in the reason card and the tool. $944 appears in the reason card, the chart and the FAQ ("cheaper" FAQ no longer repeats it). "Does not tax Social Security" appears in the retiree list and its FAQ. "22 percent" appears in the chip and the growth section. Suffolk or Long Island is down to five mentions in prose (the rest are rows in the tool and two charts). The "few go back" example is now Ocean County, NJ (about five to one, row 8). |
| B: story fragments, no agent, mid-page | The Boston, New York tax and Maryland "three things" fragments are cut. The Ohio line is now the answer to the vehicle-tax question, and the Virginia line sits in the night-life card beside a fact about what is here. One story near the end, "One move we helped with" (`schools-zone-edge-family`, told as recorded): a family's houses sat near a school-zone edge, and the agents checked each address. It has tension and our agents in it. |
| B: surface-level decision cards | Night life: "In summer, bands play every night at both ends of the Garden City Pier", then the Virginia clients' line. Local job: apply on your house-hunting visit, with the client hired a month after applying on a visit (cps-client-hired, BrickWood not named). Winter: the freezing-day figure and the Boardwalk staying open (off-season-open). |
| B: too few pictures | There are now five photos and a map. New: the downtown beach by the SkyWheel, fishing boats in Murrells Inlet and the Conway Riverwalk, all CC BY-SA 2.0, CC BY-SA 3.0 or public domain, with records that already pass photos.js (site records and /buyers/buying-in-myrtle-beach/). Kept: the late-November beach beside the winter card, and the cleared-woods aerial. No licensed waterway or golf photo file is on this branch (their records exist, but their files are not in the clone), so none is shown. shot-list.md still asks the photo partner for them. |
| Nit: filler "Each reason has a number..." | Cut. |
| Nit: the Grand Strand line after the photo | Moved to the first paragraph of the section, where Horry County is first named. |
| Nit: the income line has no point | It now opens "Those who leave reported less income" and sits beside the leaving chart. The point, that the move is harder on local pay, is made once in "Should you move?". |
| Nit: count date | Done (see critic). |
| Nit: FAQ repeats the body | Shortened. Each answer is two or three sentences. |
| Nit: shared 320 overflow (IDX pop-over, orbs) | critic.mjs no longer finds any page scroll at 320 px. I changed nothing shared. |
| Nit: the strip and the byline date | NEEDS.md 4 and 5. |

## Findings I did not take, and why

- **Critic, "connect the leavers' lower income to local pay at 64 cents".** I put the two facts on the page (64 cents in jobs, the $55,000 against $83,000 in the leaving section). I did not join them with "because", since no row says lower pay is why people leave.
- **Owner, "Keep the 15,000 and 9,100" against "say a fact once".** The headline count appears in the short answer, the leaving section and the FAQ. The short answer and the FAQ are the quotable copies for search, and the body says it once.
