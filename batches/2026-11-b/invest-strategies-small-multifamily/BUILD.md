# Build: /invest/strategies/small-multifamily/ (batch 2026-11-b)

Writer, 2026-11-10. The page is built from `specs/small-multifamily.js` (new; the live page was hand-made) with `node tools/mkpage.js specs/small-multifamily.js`, in the website working copy. Facts come only from VERIFIED rows and from CORRECTED rows in the verifier's wording (VERIFY.md). Every number is read from the data folder and tied to its ledger row by a `must()` check in the spec. No date is typed: the listing day and the deed window come from `findings.json`, the FHA limits' year from HUD's own page.

Files this step wrote (all inside the page's own folders):
- `specs/small-multifamily.js`
- `chapter3realty/invest/strategies/small-multifamily/index.html` (built)
- `chapter3realty/images/2026-11-b/invest-strategies-small-multifamily/share.jpg` (our own share card, `tools/ogcard.js`)
- `data/2026-11-b/invest-strategies-small-multifamily/group_points.py` and `group-points.json` (the middle address point of each named group, rounded to about 100 m; no PIN or address), `photos.json` (the license record of the one photo)

## Outline

Title (59 characters): "Duplexes for Sale in Myrtle Beach: Prices, Rents, FHA Rules". Description 156 characters. H1 kept from the live page: "How to buy a duplex or fourplex in Myrtle Beach". Italic line, the wow (row 8): "Nearly 3 in 4 of Horry County's duplexes, triplexes and fourplexes stand within a mile of the ocean."

- **Short answer**: 55 for sale on the listing day at about $680,000 in the middle; 58 sold in the past year at about $520,000, about $842,000 within a quarter mile of the ocean; FHA or VA up to four units if you live in one; no rental under 30 days on an FHA loan.
- **Top offer bar**: "Tell us your budget and whether you will live in one unit. We send the buildings that fit." Button "Send me buildings that fit" (/contact/).
- The site's edge feed follows (idx-lib MULTI).
1. **How do you buy a duplex or fourplex in Myrtle Beach?** Plain definition, then five numbered steps, each with what we do: pick the building and place; add up the rent roll (S1); look at the whole building (R1, S2); choose how you will pay (BrickWood as our affiliated lender, a separate company); offer and close (FHA's rent test for 3 and 4 units).
2. **How many duplexes are for sale in Myrtle Beach, and what do they cost?** Middle half of asking prices; table by mailing address (North Myrtle Beach, Myrtle Beach, Surfside Beach, the other five towns together, county), medians only where 9 or more; 32 of 55 within a quarter mile; 58 sales, 4 in every 1,000 home sales, 45 / 5 / 8 by kind, middle duplex about $512,000.
3. **Where are the duplexes and fourplexes on the Grand Strand?** The wow section. Row 5 in the verifier's wording; nearly 3 in 4 within a mile, more than a third within a quarter mile, 354 of 439 in North Myrtle Beach. **Map** (our own, `tools/area-map.js`): six numbered places, each at the middle of its groups' points, with a key. **Chart** (`G.bars`): "Buildings of 2 to 4 homes near the ocean sell for more", the middle sale price by distance with the sale count on each bar (row 11). Then the places, each with its wow and its homes strip or offer pill:
   - North Myrtle Beach's old beach towns: formed in 1968 from four towns (W1); about 340 of 439 buildings on their old streets and Ingram Beach; 160 to 340 yards from the ocean at the middle (row 13); the USGS photo of the streets behind the oceanfront at Crescent Beach; the shag and the Carolina Beach Music Awards (W2, W3); the record tiger shark (W4, SCDNR wording, no "caught": the website's register check bans "catch"); county values $487,000 to $685,000. Strip "north-myrtle-beach-duplexes".
   - Surfside Beach, Ocean Terrace and Ocean Pines: 0.4 to 0.5 mile; the 814-foot concrete pier, free to walk (W5); the lowest beach-group values; 20 of 54 at the owner's rate (row 33).
   - Garden City: 42 buildings; line dances at the end of the pier (W6); value about $622,000. Strip "surfside-garden-city-duplexes".
   - Offer: "Near the beach, or lower priced away from it?" Button "Send me buildings in my area".
   - Away from the old beach blocks (never "inland"): Windtree Estates (49 fourplexes, City of Myrtle Beach, 62nd to 67th Avenue North, 0.7 mile, $230,000, 23 of 49 at the owner's rate), Tarpon Bay II (75 duplexes, near Forestbrook, about 5 miles, $238,000), A Place at the River (22 duplexes, Little River, 2.7 miles, $255,000). Each ends with an offer pill naming it. Then "362 have a Myrtle Beach mailing address" and strip "myrtle-beach-duplexes".
4. **What does a duplex unit rent for in Myrtle Beach?** "In most of Horry County" a 2-bedroom unit about $1,000 (about $1,135 with utilities); any unit about $950; a house about $1,400; 6 in 10 have 2 bedrooms; leases of every age; link to /invest/rent-prices/; R2 in the verifier's wording.
5. **Is a duplex a good investment in Myrtle Beach?** Row 31 per-home sentence in the verifier's wording (the 4.7 percent is not on the page); a quarter-mile building sold for more than 3 times one over 3 miles away (row 11); two good and two hard points; link to /invest/run-the-numbers/. Offer: "Have us run the rents and costs on one building." Button "Have us run the numbers".
6. **Can you live in one unit and rent the others? FHA and VA in Horry County** House hacking defined; rows 20, 21 (table of FHA's four limits), 4a, 22, 27, 28, 26 (verifier's wording, no percentage), 29, 32, 33.
7. **What is the FHA self-sufficiency test for a triplex or fourplex?** Rows 23, 24; worked box in rent only (row 30: $4,000 less 25 percent, $3,000 FHA counts; no payment figure). Offer: "Buying a triplex or fourplex with FHA?" Button "Send us the building" (with BrickWood as our affiliated lender, a separate company).
8. **Can you Airbnb a duplex in Myrtle Beach?** Row 25 in the verifier's wording; links to /invest/str-rules/ and /invest/j1-rentals/.
- **FAQ** (6, each answered on the page): FHA duplex limit, VA on a duplex, down payment (no percentage), fourplex commercial, disclosure form, rent caps.
- **Sources**, photo credit, legal notice, **end band**: "Found a duplex or fourplex you like?" Call 854.333.2135. Button "Send us a building".

Every button links to /contact/. Offer pills link to /contact/?place=<place>.

Changes from PLAN.md, with the reason:
- Map V2 shows six group centers (the five North Myrtle Beach groups as one, Ocean Terrace and Ocean Pines as one). Eleven markers crowded the phone view.
- Table V1 shows what is for sale only. Myrtle Beach's sale median ($268,000) against its asking median ($715,000) would confuse a reader without more explanation; the chart carries the sale prices.
- The analyzer (S3) is not linked: the verifier flagged that it gives a rent estimate for any address. /invest/run-the-numbers/ is linked instead.
- One photo (USGS 2011, public domain, already on /buyers/no-hoa-homes/): the critic blocks a guide with no real photo.

## Gate results (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /invest/strategies/small-multifamily/` | 99/100 (SEO 100, AEO 100, Human 97, Trust 100). No FAIL. One partial: P2, 5.2 numbers per 100 words (a data page; each number is one the reader uses). |
| `node tools/claims-scan.js <web>` | 0 findings on this page (0 sitewide). |
| `node tools/facts-check.js <web>` | No wrong sentence on this page. The 4 sitewide hits are on /buyers/relocating/from-massachusetts/, /from-virginia/ and llms-full.txt (not this page). |
| `node tools/house-claims.js <page>` | 0 sentences to scope or source. |
| `node tools/struck-check.js --batch batches/2026-11-b --strict` | No struck wording on the page. |
| `node tools/repeat-check.js <page> --strict` | Passes. |
| `node tools/structure-check.js <page> --strict` | Passes (not a list of places). |
| `node tools/critic.mjs http://localhost:8872 /invest/strategies/small-multifamily/ --widths 390,1024,1440` | 0 blocking, 0 warning at each width. Two earlier blockers were fixed: a chart value spilled out of its card, and the page had no real photo. |
| `node build.js check` | OK. Nothing on this page. |
| `node build.js audit` | On this page only the two mkpage date lines (schema dateModified and "Updated June 13, 2026" against the sitemap's lastmod); `node build.js dates` sets them. Fixed on the way: "caught" (register), a "$3,000 ... loan payment" window (payment check), and 3 local-edge sentences (now 4 or more). Warnings left: 3 dates in body copy (1964, 1968, 1984 and the like, which are place facts), and no attributed sentence from Tim Nash (none exists; never write one). |
| `node tools/inbound.js <web> --only /invest/strategies/small-multifamily/` | 6 referring pages. |

## Screenshots (final build, looked at full size)

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-small-multifamily/shots/invest-strategies-small-multifamily-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-small-multifamily/shots/invest-strategies-small-multifamily-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-strategies-small-multifamily/shots/invest-strategies-small-multifamily-1440.png`
- Cut into screens: `.../rb1/invest-strategies-small-multifamily/cut/` (390-00 to 390-12, 1024-00 to 1024-12, 1440-00 to 1440-12). Critic JSON: `.../rb1/invest-strategies-small-multifamily/critic.json`.

The preview has no live feed, so the homes strips are empty in the shots and each place's offer pill shows in its place.

## For the lead (outside this page's folder)

### New places (add to batches/2026-10-b/data/idx-places.json, then regenerate idx-lib/places.js)

All `index: false`: a /homes/near/ page must not compete with this page for "duplex for sale ...". Counts are the live map API on 2026-11-10 (researcher).

```json
[
 {
  "slug": "north-myrtle-beach-duplexes",
  "name": "North Myrtle Beach",
  "pages": ["/invest/strategies/small-multifamily/"],
  "q": { "near": "33.81800,-78.67000", "miles": 5, "type": "multi" },
  "index": false,
  "note": "Strip for the old beach towns (Cherry Grove Beach, Crescent Beach, Windy Hill, Ocean Drive, Ingram Beach). 2026-11-10: 29 (North Myrtle Beach 26, Little River 2, Atlantic Beach 1)."
 },
 {
  "slug": "surfside-garden-city-duplexes",
  "name": "Surfside Beach and Garden City",
  "pages": ["/invest/strategies/small-multifamily/"],
  "q": { "near": "33.60600,-78.97300", "miles": 3, "type": "multi" },
  "index": false,
  "note": "Strip for Ocean Terrace, Ocean Pines and Garden City. 2026-11-10: 12 (Surfside Beach 9, Murrells Inlet mailing city 3)."
 },
 {
  "slug": "myrtle-beach-duplexes",
  "name": "Myrtle Beach",
  "pages": ["/invest/strategies/small-multifamily/"],
  "q": { "near": "33.69000,-78.89200", "miles": 4, "type": "multi" },
  "index": false,
  "note": "Strip after the groups away from the beach. 2026-11-10: 11, all Myrtle Beach mailing city. Under 3 homes, the slot stays empty and the offer pill shows."
 }
]
```

The strip titles are in the spec (`G.homes` head), each true for any 2 to 4 unit building because FHA and VA allow living in one unit (rows 20, 27):
- north-myrtle-beach-duplexes: "Live in one, rent the rest in North Myrtle Beach"
- surfside-garden-city-duplexes: "Your own beach-town rental in Surfside Beach and Garden City"
- myrtle-beach-duplexes: "Several rents, one closing: Myrtle Beach duplexes and fourplexes" (fix round 1: it now follows the three groups away from the beach; its fallback pill is "Get the duplexes and fourplexes for sale in Myrtle Beach")

### Feed (idx-lib/feeds.js)

- `"/invest/strategies/small-multifamily/": MULTI` stays the edge feed. **Add `withStrips: true`**: the page has three `G.homes()` slots, and without it the edge feed is left off the page (as on the 1031 page).
- Proposed page-level head for this URL only (bold, personal, true for any 2 to 4 unit building): **"Live in one, rent the rest: duplexes and fourplexes for sale"**.

### Referring pages (other batches' pages)

Today 6. Proposed additions, on words already there where possible: /invest/rent-prices/ (a link on the rents in 2 to 4 unit buildings), /buyers/va-loans/ (on "up to 4 units"), /submarkets/north-myrtle-beach/ (Cherry Grove or Crescent Beach), /buyers/first-time-home-buyer-myrtle-beach/ (FHA section, "a duplex you live in").

### Owner question (one; proposed answer in place)

- Do our agents run the rent for each unit of a 2 to 4 unit building the way they do for a house (S1)? The page says "our agents run the number for each unit from current local leases and listings, at no cost, before you write the offer". Proposed answer: yes, the same service.

### Notes

- Row 21 (FHA limits) is stale by 2026-12-31. HUD announces the 2027 limits late in the year; re-read the HUD lookup and the copy in `data/.../raw/` before publishing in December. The spec's `must()` check will stop the build if the copy changes.
- Not run, by instruction: `node build.js stitch`, `dates` and `llmsfull`.

## Fix round 1 (2026-11-10)

See REVIEW-1.md. The places and feed above are unchanged; only the three strip titles changed (above). The "Where" section now has three offers, one per place group (North Myrtle Beach; Surfside Beach and Garden City; the groups away from the beach, then Myrtle Beach). The box "Near the beach, or lower priced away from it?" and the three "Ask about ..." pills are gone. New ledger rows W7 to W10 (VERIFIED-BY-FIXER) and `data/.../wow-measures.json`.
