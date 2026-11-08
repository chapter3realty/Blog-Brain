# Review round 1: /buyers/pool-homes/

Batch 2026-11-n, Lane N. Three reviewers (critic 8, reader 7, owner's eye 7, all fail). Fixed in `specs/buyers-pool-homes.js` (version 2), never in the built page. New facts are rows 23 to 28 in `facts.md`, marked VERIFIED-BY-FIXER (row 28 is row 6's verified value, now on the page). New data: `data/2026-11-n/buyers-pool-homes/neighborhoods.json`, made by `pull_neighborhoods.py`.

## What changed, finding by finding

### Critic

| Finding | Change |
|---|---|
| B1 cleft "A pool heater is what stretches the season" | Cut. The swimming season item left the cost section (it was not a cost). The season is one glance line: "June to September, average daily highs above 80 degrees" (row 19). |
| B2 the FAQ repeats the body | The inspection, fence and rent FAQs are gone. New FAQs from verified rows: short-term rentals allowed (row 7, 28 against 12 percent), gated (row 7, 1 in 5 against 1 in 9), townhouses with a shared pool (row 27, 149 of 298). "Does a pool add value" now answers yes on asking prices. |
| B3a property tax sentence | Rewritten: "If you add a pool after you buy, the county adds its full value to your home's value. There is a 15 percent limit on how much the county can raise a home's value at a countywide revaluation. It does not cover the new pool in its first taxed year." The December 31 sentence is cut; a line says a pool already there is part of the home's value. |
| B3b "listed safety cover" | "a safety cover on the pool, tested and labeled to the safety standard". |
| B3c "SC DES" | The line is cut (owner finding 4). |
| B3d "Middle ask" | Table heads "Middle asking price, with a pool" and "Middle asking price, no pool"; phone labels "Middle price, with a pool" and "Middle price, no pool". |
| W chart dots, short bars | The name column is 14.5rem and the scale tops at 70 percent (the largest band), so the 70 percent bar fills the track. Small bars are short rectangles (radius 3 px), not dots. |
| W fence drawing has no words | Added "House", "Pool" and "Outside the fence" to the drawing, and to its title. |
| W 320 px wraps | Contents labels are one or two short words ("Where", "Prices", "Upkeep"). Phone table labels are shorter and do not wrap. critic.mjs: 0 blocking, 0 warnings at 320, 390, 1024 and 1440 (the 320 px "wall" warnings are gone too). |
| W H2 with no place | "What does a pool cost to keep up in Horry County?" |
| W offer spacing | Offer boxes after Prices (2), Upkeep (5) and Inspection (7); each of the five neighborhoods has its own offer link (4). |
| W end band centered, foot widths | Shared kit, not this page. Not changed (the pilots' work-around is kept). |
| W P2 numbers | 5.7 to 5.0 per 100 words. The repeated figures are cut; the town table stays, as the critic says it is the page's value. |

### Reader

| Finding | Change |
|---|---|
| B1 no cost to keep a pool | New section "What does a pool cost to keep up in Horry County?": power for the pump with the one primary figure (ENERGY STAR: up to $310 a year; a certified pump saves about $50, row 26), chemicals and care (no public source; the offer box gets a pool service quote for the house), insurance, property tax. No primary source gives a local monthly service or chemicals cost; that is still owner question 1. |
| B2 own-or-shared one-sided | The own-pool card names what you pay for and the $310 pump figure; the shared card gives the $105 HOA fee and the $435,000 middle price. |
| B3 fence rule only outside cities | The section now says about 7 in 10 pool houses for sale are outside city limits, so the county rule is theirs (row 28). Inside a city, the city's own building official issues the pool permit (SC Code 6-9-30(A), row 25), and each city decides its own rule. Neither city's pool barrier rule could be read: Municode refuses scripted requests and no city page was found (also tried in research). So the page does not state a city rule, and the agent asks the city's building office for the house. |
| N "Carolina Forest area" | The note says Carolina Forest and Garden City are areas, not towns. Three of the five neighborhoods say "in Carolina Forest". |
| N report-like note | Cut to four short sentences; the MLS line stays only in the sources line. |
| N CPSC figures; 4-inch ball | The three CPSC figures are now one line with no number. The gaps item is two plain sentences; the numbers are the rule itself, so they stay. |
| N "Why tell me" public pool lines | Cut. One plain line stays in the shared card: a yearly state permit and a certified operator who checks it three times a week. |
| N words | ASHI is spelled out; SC DES, ASTM F1346, "listed" and "reassessment" are gone. |
| N condos and townhouses | Townhouse FAQ added (row 27). Condos are left out: a condo's pool flag means the building's pool (facts, CRM note). |
| N heated pools | No count exists (no CRM key for a pool heater). Not added. |
| N dates | The neighborhood counts say "the same day as the town table" instead of a third date. |

### Owner's eye

| Finding | Change |
|---|---|
| B1 leads with price | The sub line is "About 1 house in 11 for sale has its own pool. Many more share one." No price in the hero: the glance row is about 1,260 houses with a shared pool, near the ocean, and June to September. The short answer says the price once, then the shared-pool way to have one. |
| B2 surface-level where | New section "Which neighborhoods near Myrtle Beach have a shared pool?": Myrtle Beach Golf and Yacht Club (pool and hot tub, gated, off Bay Road), The Farm at Carolina Forest (a large and a small pool; no private pools allowed), Berkshire Forest (two pool areas, one with a water slide by a lake), Waterbridge (the HOA's pool complex and 80 acres of lakes), Plantation Lakes (two large pools joined by waterfalls). Each has its count for sale and a price line, a link to its houses on our map, and its own offer ("Have us find you a house in The Farm" and so on). Facts from verified rows of batch 2026-10-b, re-read (row 24). The wider "where" paragraph now says what the data shows (near the ocean, east of US 17) instead of naming the two biggest towns. |
| B3 headings not answered | The cost section has a dollar figure. "Does a pool add value" says "On asking prices, yes." |
| B4 technical knowledge | Cut: the "public pool" category, "SC DES does not regulate it", "written by the International Code Council", ASTM F1346, the 180-day permit, "improvement", "reassessment", "listed". |
| B5 fear statistic | One line: "The rule is there for small children. Most children who drown in a pool or spa drown at a home, the Consumer Product Safety Commission reports." |
| B6 repeated figures | Each figure once: 257 and 2,950 in the table only (the H1 says 1 in 11); $955,000 in the short answer and the table's county row; 1,260 in the glance; $435,000 and $105 in the shared card; 37 and 827 in the budget block only (cut from the short answer and the price section). |
| B7 cleft | Cut (see critic B1). |
| N "Middle ask" | Fixed (critic B3d). |
| N 2011 aerial | Kept. No newer licensed photo of a pool exists in the record (Commons refused searches in research). The pool photo is on the photo partner shot list (`shot-list.md`). |
| N hedges | The insurance item no longer says "may": "A pool can raise the premium, and the insurer can ask ...". "Can" stays because the source says "might" (VERIFY row 15); the page cannot say it always does. |
| N "A buyer with $500,000 ..." lead-in | Cut. |
| N "page covers" four times | Down to one ("guide to The Farm", "property tax page has the rates", "55+ communities page"); the no-HOA and gated "page covers" lines are cut. |

## Findings not taken

- None outright. Two are only partly met, for want of a primary source: a local monthly cost for pool service and chemicals (owner question 1), and the pool fence rule inside Myrtle Beach and North Myrtle Beach (row 25 note).

## Gates after the fix

- `mkpage.js`: builds. `build.js audit`: two errors on this page, both the lead's (missing from sitemap.xml; orphan). They are in NEEDS.md items 1 and 2. Warnings: not in llms.txt, no Tim Nash sentence (A20, never invented), 13 sentences over 22 words (none over 28).
- `score.js`: 97/100. One fail, S8 (no inbound links; the lead's). P2 numbers at 56 percent.
- `claims-scan.js`: 0. `house-claims.js`: 0. `struck-check.js`: no struck wording. `facts-check.js`: nothing on this page. `site-audit.js`: the same two lead errors only.
- `critic.mjs` at 320, 390, 1024, 1440: 0 blocking, 0 warnings. Shots: `wfn/buyers-pool-homes/critic-shots-r1/`. I looked at 1440 and 390: the hero has no price, the neighborhood list is plain rows under thin rules with one link and one offer each, the chart bars fill the box, and the drawing has its words.
- `ogcard.js` stopped on a browser network error, as in the first build. The page's share image is the photo.
