# Review round 1: /invest/where-to-buy/ (fixes, 2026-11-03)

Three reviewers: critic (pass false, 6), cold reader (pass false, 7), owner's eye (pass false, 7). Every change is in `specs/where-to-buy.js` and the page's own data and image folders. Rebuilt with `node tools/mkpage.js specs/where-to-buy.js`.

## Gates after the fixes

- score.js (SCORE_TODAY=2026-11-03): 100/100 (SEO 100, AEO 100, Human 100, Trust 100). Numbers per 100 words 3.5 (was 4.0 before this round, 4.5 in my first draft of it).
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking. One warning left: read.wall at 320 and 390 on the last FAQ answer, the sources line and the photo credits (11 photos now). That is not body copy; the critic called the same run a false hit in round 1.
- claims-scan: no hit on this page. facts-check: no hit on this page. house-claims: 0.
- repeat-check --strict: 0 identical sentences, 0 sentence shapes in 3 or more sections (was 15). It still fails on five subject words in over 60 percent of entries (year, nightly, percent, stays, price), the words the page is about (NEEDS 7).
- build.js check: OK. build.js audit: only the two date lines (schema dateModified and "Updated September 6, 2026" against the sitemap), which `node build.js dates` sets.
- struck-check: fires on "$28,700" (row 26) and "16,300" (row 29) in the worked example, on purpose. See "Nightly income" below: it is the lead's call.

## Critic

| Finding | What I changed |
|---|---|
| Truth: Murrells Inlet "the tax per dollar is the highest of them" | Cut. The sentence now gives the two figures: about $1,512 a year on each $100,000 against about $1,244 in Garden City. |
| Truth (scope): hero tile "Tax on a rental vs a home lived in / About 3.3 times" | Tile removed. The 3.3 times line stays only in the tax section, with its scope ("Outside city limits ... in the towns it differs"). |
| Truth: "investors" and "investor share" for the 6 percent tax class (row 23) | The investor-share section is gone. Every use now names the tax class: "taxed as a second home or rental", "Second homes and rentals make up about 40 percent of homes by tax class". No "investor share" anywhere. |
| Tool: 320 px homes strip search row 364 px wide | Copied the work-around from the Conway and Garden City specs into PAGE_CSS (under 360 px: `.hx-feed .hx-fb-ai`, `label.hx-fb-q` min-width 0, max-width 100%, wrap; `.hx-pop` wraps). critic.mjs at 320: 0 blocking. |
| Tool: 1024 px header phone ends at 1029 px | PAGE_CSS hides `.header-ctas .hdr-phone-num` from 1000 to 1120 px (as /buyers/common-mistakes/ and /buyers/cost-to-own/ do); the icon and its spoken label stay. critic.mjs at 1024: 0 blocking. |
| Nit: hero tiles wrap, values as small as labels | Three short tiles: Longs 9.1%, Surfside Beach 3.3%, North Myrtle Beach "About $29,000 a year" (nightly). Values now 1.3rem, weight 650, navy; line height 1.4 (the line-height warning is gone). |
| Nit: no answer sentence on the first phone screen | The subtitle under the H1 is now the answer: "Rent by the night at the beach, and by the year inland." The top offer box is removed (heroCta false). |
| Nit: 6 of 11 entries with no photo; all photos 2011 beach aerials | Every entry has a picture now. Five USDA NAIP 2023 aerials (Murrells Inlet Georgetown side, Longs, Socastee, Little River, Carolina Forest), each a 1,000 by 750 m window over the densest block of houses inside the area's outline, and a public-domain 2010 Commons photo of the Conway riverwalk (the VERIFY candidate). Records in photos.json (make_photos_r1.py); each looked at full size. The Longs aerial shows a new subdivision going up, which is the entry's point. |
| Nit: "beach" means two groups | One name: "the six beach areas" (entries 1 to 6, grey bars in the chart). The 3-to-4-percent group is named town by town in the short answer. Garden City: "Houses here cost less than in the other five beach areas". |
| Nit: 4.0 numbers per 100 words | 3.5. Two or three numbers a place; the per-entry charts, the side-by-side cards and the investor section are gone; listing counts and HUD dollar figures cut where the share says it. |
| Nit: cross-references ("the chart in the Socastee entry ...") | All removed. The one comparison chart sits in its own section. |
| Nit: Socastee builder share is a floor | "Builders sold at least a quarter of the houses that changed hands here as new." |
| Nit: Carolina Forest "1%" in the table | The table is gone; the entry says "Under 1 percent". |
| Nit: "about a quarter" includes Conway at 28.6 | The sentence went with the investor-share section. |
| Nit: "The builder's price rose" (story) | "The sale price rose from about $230,000 for the first to about $292,000 for the last". "Not the builder's first price" is gone; the lesson reads "not against what earlier buyers paid". |
| Nit: Myrtle Beach condos $173,000 against the Myrtle Beach page's $175,000 | Printed as about $175,000 (rounded to $5,000), in the entry and the FAQ. |
| Nit: sources line leaves out sources | Added Horry rental tax chart, Georgetown license FAQ, Pawleys Island (Beach Fund page), Georgetown tax calculator, Georgetown parcels and flood zones, FEMA flood maps, FEMA flood policies, AirROI. Names shortened to stay under mkpage's 90-word limit. |
| Nit: photo credits repeat "cropped and resized" | Per-photo "changes" notes removed from the records; the one shared line stays. Photo years moved to each photo's credit ("USGS photo, 2011", "U.S. government aerial photo, 2023"), not the captions. |
| Nit: four entries do not link their area guide | North Myrtle Beach, Surfside Beach, Little River and Carolina Forest now link their guide on the place name (all eleven link one). |
| Nit: "The rent surprises people", "covers the beach side" | Both cut. |
| Nit: county line runs into the ocean at 1440 | The spec now cuts the line where it meets the coastline (area-map.js `loadGeo2().coast`), so it starts at the shore south of Garden City. |
| Nit: read.wall false hit | Same false hit (FAQ, sources, credits). Left. |

## Cold reader

| Finding | What I changed |
|---|---|
| No nightly income anywhere | Each beach entry gives what a nightly rental took in a year on average (data/str-market.json, the site's one source), the short answer gives the range (about $20,000 to $38,000), and the worked example compares the same $300,000 two ways: a Longs house leased by the year (about $22,400 left, 7.5 percent) against a North Myrtle Beach condo rented by the night (about $16,300 left, 5.4 percent), with the nightly costs listed that it leaves out. See "Nightly income" below. |
| "HUD's 3-bedroom rent" unexplained; is it the rent I would get? | Longs now says what it is: "The federal housing agency publishes a rent for a standard 3-bedroom in each ZIP code: $2,270 a month here, with the utilities a tenant pays." The example says the rent you collect is lower. Why Longs' ZIP code is highest is not in any verified row, so the page does not guess. |
| The money example stops before the big costs (insurance) | New paragraph from FEMA's flood policies (ledger row 35, fixer): a federal flood policy on a house cost about $3,300 a year at the middle on the oceanfront, about $1,400 in the rest of the high-risk zone at the beach, about $1,000 in the high-risk zone inland, and about $600 outside it. Wind and homeowners insurance have no verified row; the page names insurance among the costs left out. The Longs HOA fee is the middle fee on Longs houses for sale (row 28); whether most Longs houses have an HOA is not in a row, so the card says only "HOA fee, about $100 a month". |
| Homes strip pushes the short answer down, yearly-only title | The strip is the shared feed the owner placed near the top (2026-10-26); its title comes from idx-lib/feeds.js. Logged as NEEDS 11. The top offer box under the hero is removed, so the short answer is the next thing after the strip. |
| Words I don't know | Removed or said plainly: R3 and C3, "every zone whose name begins with R ... except RMV", the overlay and Ordinance 2024-69, tax district 250, "coastal V zone", BRRRR, "a distressed owner", "Census place", "tourist home", "conditional use", "General Resort Residential" (now "resort residential district"), "Core Commercial, Central Business and Waccamaw Riverfront" (now "three of its business districts, including downtown and the riverfront"). |
| Murrells Inlet county confusion | Entry 4 opens: "Murrells Inlet sits on both sides of the county line. On this page, Murrells Inlet is the Census area of that name, which lies on the Georgetown County side." The tax table no longer names the Horry fire district; it says "Garden City". |
| Monthly or snowbird rentals | "Will the rules change?" now has a short list for a rental of one to three months: Myrtle Beach (under 90 days is short-term, so a marked zone), Conway (up to 90 days in the three business districts), Surfside Beach (the code leaves it open, so we ask the town), Georgetown County's resort district (up to 30 days), Horry County outside the towns (no zoning limit). |
| Too many numbers in one sentence | Cut: "280 of 607", "29 of 51", the condo and house counts, the $1,206 / $1,223 / $1,244 split (the tax table has one row for most homes outside the towns). |
| Sounds like a report | Cut "by our list of builder sellers", "34 percent in the Census survey", "Georgetown County's current estimate" in the body (it stays in the tax table label). The 6 percent definition note went with the investor chart. |
| Dates | "seen from a plane in 2011" (5 times), "2025 to 2026 session", "since late 2024", "Ordinance 2024-69" and the second "year to September 2026" are gone. One date remains in the chart note; the Updated line waits for `node build.js dates`. |
| No pictures of the inland places | Five new aerials and the Conway photo (see the critic's photo nit). |
| The eleven-area table as 3,600 px of cards; pointers back | The side-by-side cards are gone. One chart, in its own section. |

## Owner's eye

| Finding | What I changed |
|---|---|
| Long preamble; the places listed twice before entry 1 | Kept the map, cut the index cards ("Renting by the night: 1 to 6", "Renting by the year: 7 to 11") and the top offer box. The map has one key (the eleven names beside their numbers, in two columns) and a two-column legend. Entry 1 now starts about 3,200 px down at 390 px (it was about 4 screens); the homes strip (about 400 px) is shared and placed by the owner's rule, so two screens is not reachable without moving it. |
| The list again as field-list cards; two sections that repeat; four charts ranking all eleven inside entries | Removed: the side-by-side compare cards, "Where do other investors already own?", the investor chart (North Myrtle Beach), the builder chart (Longs), the tenant-rent chart (Conway), the county-line cards (Murrells Inlet), the townhouse bar chart (Little River) and the "short stay" cards. One comparison remains: the rent-to-price chart in "How do the eleven areas compare?". |
| No nightly income; the only money example is a yearly-leased condo | Done (see the reader's first finding and "Nightly income" below). The Myrtle Beach yearly condo card is gone; the example is now Longs by the year against North Myrtle Beach by the night. |
| Industry terms and code names | See the reader's word list. "HUD's 3-bedroom rent" is explained once (Longs) and kept as a label in the chart note and the example card. |
| Repetitive writing | repeat-check --strict: 0 repeated sentence shapes (was 15). "special zoning" now appears three times (map intro, entry 1, one FAQ answer), was five in the first screens. "a subdivision's recorded rules can bar nightly stays" appears once. "where the rules (for the address) allow it" appears in the short answer, one FAQ and their variants, four times in all. The sale price is worded one way, in the price line inside each offer box ("The middle house here sold for about ..."). Two or three deciding numbers a place; "percent" in prose is down from 33 to 23. |
| "second only to Longs" and phrase sentences | "second only to Longs" cut (Carolina Forest no longer gives HUD's rent). "Watch the water.", "The trade-off is water:", "The rent surprises people." cut. |
| Photos: five 2011 aerials, six entries with none | Six new pictures, one for each entry that had none; years only in the credit lines. Shot list updated; NEEDS 12 asks the owner to email it to the photo partner (priority 7, 9, 1, 2, 11). |
| The page sends the reader elsewhere | The map now shades Myrtle Beach's nightly-rental zones (dark blue), from /submarkets/myrtle-beach/'s map file (row 36). The nightly figures are on this page. "Our property tax calculator has every town's rate" is cut; the table covers all eleven areas. Links that remain are offers or the area guides on the place names. |
| Nit: orange outline on the first hero tile | It was the critic tool's box around the tile it flagged for line height. With the line height fixed, it is gone from the new shots. |
| Nit: the strip shows only "See all homes" in the preview | The preview has few sample homes for this feed; the live feed fills it. NEEDS 11. |
| Nit: the story mid-page | Moved to its own section after the worked example, "Why do we run the rent against your price?", and it opens with the lesson: "We price a rental against the rent it will get now, not against what earlier buyers paid." Longs and Little River link to it. |
| Nit: entry 10's two-row table repeats the paragraph | Removed. |
| Nit: hero tile on tax | Removed. |
| Nit: "the most of the six areas in the chart under Conway" | Removed. Carolina Forest now says "more than in Conway, Socastee or Myrtle Beach". |
| Nit: 1029 px at 1024 | Fixed in page CSS (see the critic). |

## Nightly income: the lead decides

The verifier struck rows 26, 27 and 29's nightly side as vendor data. The owner's rule of 2026-10-26 (voice/VERDICTS.md) is that "a page for a buyer who may rent gives what a rental takes in, from data/str-market.json", and both the reader and the owner's eye blocked on its absence. I put it back from that file only (rows 26F and 29F, VERIFIED-BY-FIXER), read at build, never typed. No month figures (row 27 stays out).

When I opened AirROI's pages on 2026-11-03, they showed higher figures for October 2025 to September 2026 (North Myrtle Beach $34,401 against the file's $28,667; Murrells Inlet $47,603 against $38,356). The file is due for refresh on 2026-11-13 (NEEDS 1 and 10). After `node build.js strdata`, rebuilding this spec updates every nightly figure; its checks stop the build if the order of the areas or the worked example's conclusion changes (with today's AirROI figure, the condo keeps about 7.3 percent against Longs' 7.5).

If the lead strikes the nightly figures again: remove the third hero tile, each entry's "took in" sentence, the range in the short answer, and the condo card of the worked example (the spec's `take()` and `exN`).

## Not changed

- The homes strip's place and title (shared feed, owner's rule): NEEDS 11.
- The Updated date and schema dateModified: the lead's `node build.js dates`.
- repeat-check's five subject words in over 60 percent of entries (NEEDS 7).
- Three entries are 83 to 87 words (Socastee, Little River, Carolina Forest); the number budget (3.5 per 100 words) left no room for another figure, and I did not pad them.
