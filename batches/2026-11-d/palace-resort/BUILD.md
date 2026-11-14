# BUILD: /invest/condo-buildings/palace-resort/ (Lane N, batch 2026-11-d)

The pilot for the oceanfront resort pages: one page per resort, for the person who searched the resort's name and might own a unit there. Built 2026-11-13 from PLAN.md and the VERIFIED and CORRECTED rows of facts.md (corrected rows at the verifier's wording).

## Files

- Spec: website `specs/palace-resort.js` (author "devin"; theme glass; structure from `specs/garden-city.js` and `specs/home-value.js`). Every count, fee, price, share and chart value is read from the data files and checked against its ledger row with `must()`; a changed file stops the build.
- Page: website `chapter3realty/invest/condo-buildings/palace-resort/index.html` (built with `node tools/mkpage.js specs/palace-resort.js`; no date typed).
- Data: website `data/2026-11-d/palace-resort/` (`listings.json`, `county.json`, `flood.json`, `tax.json`, `raw/`, the pull scripts). New today: `photos.json` (the aerial's license record) and `images/` (`label.py`, `labels.json`, `naip-frames.json`, `parcels-near.json`: the request and the coordinates behind each label).
- Images: website `chapter3realty/images/2026-11-d/palace-resort/palace-resort-from-above-{600w,1200w,1x1,4x3,16x9}.webp`. USDA NAIP 2023 aerial, public domain, cropped and labelled from coordinates: "The Palace" at the FAA obstacle point 45-000725 (facts row 1), "Landmark Resort" at the middle of the county parcel boxes of LANDMARK HPR PH I and II, "Atlantic Ocean" in the water. Metadata embedded; `node tools/photos.js check` passes. The share image is the unlabelled 16x9 crop.

## Outline

- **H1:** "The Palace Resort, Myrtle Beach: condos for sale on the ocean." Italic line (about half the H1's size): "A 241-foot tower with a water park next door."
- **Title (58):** "Palace Resort Myrtle Beach Condos for Sale: Fees From $460" (the studio fee from `fee_exact`, rounded to $5). **Description (153).**
- **Hero:** four glass key facts with words (on the beach, 241-foot tower; 298 condos; built mid-1980s; nightly rentals allowed); byline Devin Day, reviewed by Tim Nash; sub line with the wow: two pools on the ocean, the putting green, the three 40-foot slides next door, the address.
- **Short answer:** what it is and what units sold for; the fee by size and that units rent by the night, with the water park for program guests; one line sending hotel guests to the resort's own site.
- **Homes strip** right under the answer: place "the-palace", title "Own a condo in the Palace Resort, on the ocean in Myrtle Beach"; fallback pill "Get the condos for sale at the Palace sent to you". Then one link up to the 47-building directory. No top offer bar (the strip is the first offer, as on the pages whose strips are the offer).
- **What is it like to own a condo at the Palace?** The water-park passes first (the fine print: first two guests of a reservation booked through the resort's program), the slides, the pools, whirlpools, sauna, putting green, beach accesses; H3 "A 241-foot tower on the south end": height, no floor numbered 13, top floors; next door to Landmark, Family Kingdom and Springmaid Pier; the labelled aerial; kitchens, balconies (resort's room features), sleeps; furnished, covered parking, views; age, with a link to the checks.
- **What are the HOA fees at the Palace Resort?** The fee by size in the first sentence; the fee table (cards on a phone: size and sleeps, fee a month, fees a year, middle asking price, for sale this week); what the fee pays and what you pay yourself (plain list under thin rules); H3 "What a year costs before any loan" with a plain table (fees plus tax as a rental, studio about $7,500, two-bedroom about $14,500); the 6 percent rule and reset; transfer fee and escrow (row 26 corrected wording). Offer: "Have us get the Palace's budget and reserve study".
- **Can you Airbnb a condo at the Palace Resort?** Yes, and why (zoning, the resort rents nightly, about 8 in 10 for sale in a program); two ways (the resort's program, on your own) as a plain list; the program's split is not published, so we get the terms; income link to /invest/airbnb-income/ with no figure (row 25 corrected); H3 the guest rules (21, pets with the service-animal carve-out, cars) and that owner rules are read before an offer.
- **What have Palace Resort condos sold for?** 21 sales by county deeds, about 1 in 14 units a year; a three-row plain table (middle sale price about $142,000, middle half $112,500 to $157,000, middle asking price of the 25 for sale on the run date, about $160,000, row 12a); upper-floor sales ran higher, mostly because more were larger units (row 15 corrected); we compare a unit with sales of its own size. No chart (review 1: its title and its note disagreed). Offer for sellers: "Have us price a Palace unit".
- **What we check before you buy at the Palace** (a statement heading): flood zones (row 32 wording in plain words), age, the unit's size and the 500-square-foot program rule, Fannie Mae's hotel rule and the HUD list, who uses the units (1 in 10 taxed as a home); our agents' experience on rental-program buildings; our affiliated lender, BrickWood Mortgage, a separate company; links to condotel financing. Offer: "Have us check a Palace unit". Second link up to the directory, and one to /invest/condos/.
- **FAQ (7, open text, each answered on the page):** when built, how tall, hotel or condos, is the water park free, pet friendly, address, how many for sale.
- **End band:** "Book a showing at the Palace."
- **Schema:** mkpage's Article, WebPage, Breadcrumb and FAQPage; plus a `Place` (name, alternate names, address, geo from the footprint center) and the photo's ImageObject. Never Hotel or LodgingBusiness.
- **Internal links (12 pages):** /invest/condo-buildings/ (twice), /hoa/master-insurance-ho6/, /buyers/property-taxes/, /invest/rental-program-vs-airbnb/, /invest/str-rules/, /invest/airbnb-income/, /sell/home-value/, /hoa/special-assessments/, /invest/condotel-financing/, /invest/condos/.

Review 1 (2026-11-13) changes and gates: `REVIEW-1.md`.

## Gate results (first build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-13 node tools/score.js --only /invest/condo-buildings/palace-resort/` | **97/100** (SEO 92, AEO 100, Human 99, Trust 100). One FAIL: S8, no other page links here yet (the lead's sibling links below). P2 at 81% (4.2 numbers per 100 words; a building page is a page of numbers). |
| `node tools/claims-scan.js <site>` | 0 findings sitewide. |
| `node tools/facts-check.js <site>` | 0 on this page. The 4 wrong sentences on 3 other pages (llms-full.txt and two others) were there before. |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source. |
| `node tools/critic.mjs http://localhost:8926 /invest/condo-buildings/palace-resort/ --widths 390,1024,1440` | **0 blocking.** 1 warning at 390: the hero sub and the short answer run 1,026 px with no visual, because the preview leaves the homes strip empty (its fallback pill shows). On the live site the strip fills right under the answer. Fixed on the way: the chart's $154,000 spilled its card (bar scale now has room), the page was 1,029 px wide at 1,024 (the header nav gap fix from garden-city.js), and a 957 px wall in the fee section (now a plain list and a table). |
| `node build.js check` | OK. |
| `node build.js audit` | On this page: `!!` missing from sitemap.xml and `!!` orphan (both the lead's items below). `~` notes: not in llms.txt (lead), no attributed Tim Nash sentence (we never write one), 15 sentences over 22 words (none over 28). A 39-word list item ("A building run like a hotel" plus the Fannie Mae sentence) was split. |
| `node tools/struck-check.js --batch batches/2026-11-d --strict` | The page's own 23 patterns: quiet. Five hits of a generic CRAFT 2 pattern on "next door" (struck on another page for a 0.2 to 0.5 mile gap). Here it is true: Landmark's parcels adjoin the Palace's (county layer 24; facts row 23, 0.06 mile, "next door" holds), and the aerial shows the two towers side by side. Kept. |
| `node tools/photos.js check data/2026-11-d/palace-resort/photos.json` | All records pass. |

## Shots

Final, after the last build: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/palace-resort/shots/`
- `invest-condo-buildings-palace-resort-390.png`
- `invest-condo-buildings-palace-resort-1024.png`
- `invest-condo-buildings-palace-resort-1440.png`
- `critic.json`

Looked at in full, cut into screens, as a stranger: calm, one card style (the fee table, the chart, the offers), plain lists and the yearly table under thin rules, one picture under its sentence. The homes strip shows its fallback pill in the preview (photos.test does not load, and the place does not yet list this page).

## For the lead (files this page may not edit)

| What | Where | Change |
|---|---|---|
| Homes place | `idx-lib/places.js` "the-palace" (and `batches/2026-10-b/data/idx-places.json`) | Add `"/invest/condo-buildings/palace-resort/"` to `pages`. Keep `index: false` so the place page never competes with this guide. Query unchanged: `{subdivision: "Palace", type: "condo"}` returns only Palace units (25 today). |
| Feed under the opening | `idx-lib/feeds.js` | **No entry.** The page carries its own strip for the same place right under the short answer; an edge feed would show the same homes twice. |
| Sitemap | `chapter3realty/sitemap.xml`, after the condo-buildings line | `<url><loc>https://chapter3realty.com/invest/condo-buildings/palace-resort/</loc><lastmod>(set by build.js dates)</lastmod><changefreq>monthly</changefreq><priority>0.75</priority><image:image><image:loc>https://chapter3realty.com/images/2026-11-d/palace-resort/palace-resort-from-above-1200w.webp</image:loc></image:image></url>` (0.75: one step under the directory's 0.85, as the-farm sits under carolina-forest). |
| llms.txt | invest section, after the condo-buildings line | `- [Palace Resort condos for sale, Myrtle Beach](https://chapter3realty.com/invest/condo-buildings/palace-resort/): the 241-foot oceanfront tower at 1605 S Ocean Blvd with 298 condos; HOA fee by unit size and what it pays, nightly rentals and the resort's own program with water-park passes, recorded sales by floor, flood zones.` |
| New place or feed | none | The place exists. |
| The directory's figures | `/invest/condo-buildings/` | Agree with this page: 241 feet, 302 units (298 condos plus 4 commercial), typical fee about $685, 21 sales, about $142,000. The directory's Palace entry says guests get passes; this page uses the narrower fine print (first two guests of a reservation booked through the resort's program). Consider the same wording there. |

Sibling pages that should link here (aim for 6; check with `node tools/inbound.js <site> --only /invest/condo-buildings/palace-resort/`):

| Page | Where | Suggested sentence (link words in brackets) |
|---|---|---|
| /invest/condo-buildings/ | The Palace entry, last line | "[Fees by unit size, rentals and recorded sales at the Palace] are on its own page." Also link the entry's name in the table row "The Palace". |
| /invest/condo-buildings/ | Landmark Resort entry | "Its water park, H2Oasis, is also open to guests of [the Palace next door] who book through that resort's own program." |
| /invest/non-warrantable-condos/ | table row "The Palace" | Link the name: "[The Palace]". |
| /invest/rental-program-vs-airbnb/ | note under the chart, row "The Palace · Myrtle Beach" | "Guests who book [the Palace's own rental program] get the water park next door." |
| /invest/condotel-financing/ | after the oceanfront buildings run like hotels | "At [the Palace Resort], every studio for sale is under 500 square feet; the one- and two-bedrooms are over." |
| /submarkets/myrtle-beach/ | "What are oceanfront condos like in Myrtle Beach?" | "On the south end, [the Palace Resort] is a 241-foot tower with the H2Oasis water park next door." |
| /invest/airbnb-income/ | the size section | "At [the Palace], studios, one-bedrooms and two-bedrooms each have their own HOA fee." |
| /hoa/master-insurance-ho6/ | where a resort's fee pays the building's insurance | "At [the Palace Resort], nearly every listing says the fee pays the building's insurance, and none says it pays power." |

## Photo

The page uses the labelled NAIP aerial until the photo partner's shots arrive. Shot list for him (`templates/photo-request-email.md`): the tower from the beach at the water's edge, late afternoon; the two oceanfront pools and the putting green from the beach walkway; the H2Oasis slides seen from the Palace's pool deck, in season; the parking garage entrance from Ocean Boulevard. When they arrive, his beach-side shot replaces the aerial in `owning`.

## How to win the biggest share of the resort-name searches (the ~60,000 a month)

The resort names are the largest searches the site does not answer. From the lead's keyword pull (US monthly volume): Bay View about 36,000, Landmark about 20,000, Prince about 20,000, Caravelle about 10,000, Sea Mist about 9,000, Kingston Plantation about 8,000, Paradise about 7,900, Roxanne Towers about 7,300, Carolinian about 5,400, the Palace about 5,000. The competitor ranks 8 to 20 on most with two paragraphs and listings.

1. **Most of those searches want a room, and we cannot win that part.** Google shows a hotel pack and the resort's own site first. The share we can take is everyone who searches the name with "for sale", "HOA fees", "condo fees", "Airbnb", "rentals", "reviews", "built", "parking", "pet friendly", "water park", or who clicks past the hotel results. Each page answers every one of those in a sentence or a section, and its FAQ repeats them in the words people type.
2. **One plain line sends hotel guests to the resort.** It keeps bounce honest and keeps the page from looking like the hotel.
3. **Every name form in the title, H1, description and first sentences:** "Palace Resort", "The Palace", "Myrtle Beach", the street address. Title pattern: "<Resort> Myrtle Beach Condos for Sale: <one number>".
4. **Numbers no one else has:** the fee by unit size to the dollar (listings, bracket then bisection), what the fee pays, recorded sales from county deeds, units and floors from county parcels, the flood zones under the lot, the share taxed as a home. The pull scripts run for any building by changing the regime name, the deed name, the subdivision and the street number.
5. **The building's wow, sourced:** the water park, the lazy river, the height, the pier next door; then a labelled aerial or the partner's photo.
6. **The live homes strip under the answer,** with the place kept `index: false`, so the place page never competes with the guide.
7. **`Place` schema plus FAQ.** Never Hotel.
8. **Links both ways:** the directory entry links down; every sibling that prints the building's name links it (table rows first).
9. **Publish before spring.** "palace resort myrtle beach" ran 480 to 720 a month from October to December 2025 and 2,900 to 4,400 from April to July 2026. Pages need a few months to rank, so the rest of the resorts should ship this winter, largest first.
10. **Then measure:** Search Console clicks by query for each resort page after 4 weeks; rewrite a title that shows but is not clicked, keeping the searched words (CRAFT 7).

What does not generalize:
- The fee went by unit size here because the Palace has three unit types. A building with many plans (Landmark, Bay View) needs the fee by bedrooms and a range.
- A building with several towers or regimes (Compass Cove, Sands Ocean Club, Bay Watch) needs each tower named, and the county match checked per regime.
- Some resorts' water parks are for program guests only; others are open to all owners. Read each resort's own words.
- The tax figure uses the City of Myrtle Beach millage. North Myrtle Beach and unincorporated buildings use their own.

## Open items

- The rental program's split is not published. The page offers to get the terms and gives no split.
- An owner's pet rules and water-park passes for owners are in the master deed and rules, which are not public. The page states the guest rules and says we read the owner rules before an offer.
- No nightly income figure for this building exists in a published source. The page links /invest/airbnb-income/ and prints no figure (row 25). That page's AirROI table is a month old (VERIFY.md, "For the lead").

## Round 2 (owner, 2026-11-14)

Changed: the CRM strip `G.homes("the-palace")` with its "Get the condos for sale at the Palace sent to you" offer is replaced by a live strip. The "Thinking of selling a Palace unit?" offer is removed to keep two.

Strips (live counts):
- "Own a condo in the Palace Resort, on the ocean": `subdivision=PALACE, THE` (the MLS spelling), 25, under the short answer.
- "Oceanfront condos within a mile of the Palace": `near=33.672518,-78.901529&miles=1&type=condo&has=oceanfront_unit`, 173, at the end of "What is it like to own a condo".

Offers kept (2): "Have us get a Palace unit's fees", "Have us check a Palace unit". Removed: the "sent to you" offer, the sell-price offer.
Gates: score 98 (P2 numbers and P7 pictures, both unchanged from round 1), claims-scan 0, house-claims 0, critic 0 blocking, audit clean. Same glass.js note as plantation-point.
