# Plan: /buyers/flood-zone-check/

Researcher, 2026-11-13. Rows are `facts.md` row numbers (F#). Searches and sibling owners are in `must-answer.md`. Data: `wt-139/data/2026-11-d/flood-zone-check/`.

## The reader and their decision

A buyer who has found a house in Horry County, or is about to start looking. They typed "is my house in a flood zone" or "Horry County flood map". They assume the listing would have said so. They fear a flood insurance bill they learn about after the offer.

Their decision: is this house in FEMA's high-risk flood zone, and do I want to offer on it knowing what that means? The page gets them the zone for any address, tells them what the letter means for a bank loan, and offers to do the check and the insurance quote before they offer.

## The answer in two sentences

Type the address into FEMA's flood map, or our free lookup, and the zone shows in a few steps; AE and VE are high risk, and a bank loan there needs flood insurance. Do not count on the listing: of 1,122 Horry County homes for sale in FEMA's high-risk zone, about 4 in 5 did not come up when our home search filtered for flood zone (F1, F2).

## Title, H1, hero, description

- **Title (57 characters):** `Is My House in a Flood Zone? Horry County Flood Map Check`. It leads with the biggest search (1,300) and carries "Horry County flood map" (210 + 210 + 170). Alternative with the hook, 60 characters: `Horry County Flood Map: Is the House in a Flood Zone?`.
- **H1:** `Is this house in a flood zone? Check FEMA's map, not the listing`
- **Hero sub (write last; a statement):** `About 4 in 5 Horry County homes for sale in FEMA's high-risk flood zone do not come up when our home search filters for flood zone.` (F2; the count's day from the data file.)
- **Description (about 155):** `Is my house in a flood zone? Check any Horry County address on FEMA's flood map, learn what AE, VE and X mean, and how often a home search misses the zone.`
- **Keywords:** is my house in a flood zone, is my house in a flood zone by address, how to check flood zone, how to check if a house is in a flood zone, what flood zone am I in, Horry County flood map, Horry County flood zone map, Horry County flood zones, Horry County FEMA flood map, Myrtle Beach flood zone map, flood zone AE meaning, flood zone X meaning, X500 flood zone, Horry County elevation certificate.
- **Never in keywords, title or H2:** flood insurance cost, flood history, flooded before, seller disclosure, "is Myrtle Beach in a flood zone", "<town> flood zone", "GIS", "condo flood insurance" (siblings own them; `must-answer.md`).

## Kind of page and shape

A how-to with one finding nobody else has. The spine is the reader's sequence: check the address, learn why the listing is not enough, read the letter, know when the lender tells you, get the papers before the offer. The study is the wow, and it sits right under the answer. Calm and short: about 1,300 to 1,600 words, one chart, one table, two mid offers.

## Sections, in order

1. **Opening (first phone screen).** H1, byline (Devin Day, reviewed by Tim Nash), hero sub, then the short answer: the two sentences above. Slim offer bar: `Send us an address. We check its flood zone today.` -> /contact/.
2. **The chart (the wow), right under the short answer.** Title: `Of 1,122 high-risk homes for sale, 231 came up under "flood zone"`. Built from `chart-high-risk-tagged.csv` with `G.bars` (two bars, max 1,122): "Came up under flood zone" 231; "Did not come up" 891. Caption: `Horry County homes for sale with a map pin inside FEMA's high-risk zone, counted on [day from the data file].` One message: about 4 in 5 are missing. No legend, no axis to read.
3. **The site's own homes feed** (the edge puts it under the opening; see Homes strips).
4. **H2 `How do I check if a house is in a flood zone?`** (F11, F14, F15). Three numbered steps, bold lead words:
   - **Type the address in our free lookup** at /buyers/property-records/: it reads FEMA's map at that spot and says the zone in plain words (F14). If the tool is not live when this page ships, this step becomes FEMA's Map Service Center and the lookup step is added later.
   - **Open FEMA's Flood Map Service Center**, the official source (F11), type the address, and print the map panel. That printout is the "Horry County flood zone map PDF" people search for. FEMA updates maps, so print it on the day (F12).
   - **Read the letter** in the table below.
   - Then one line: the county's own map has a Flood Zones layer (F15), link /buyers/property-records/gis-map/. And the CRAFT line: "We do this for every house we show. Send us the address and we send back the zone, the map panel and an insurance quote."
   Note on CRAFT "We do the work" against this how-to: the reader typed "how to check", so the page shows the check. It keeps the offer beside it and never turns into a list of chores (no "call the county", "ask the seller").
5. **H2 (statement) `A home search can miss the flood zone`.** Our study, in plain words:
   - What we counted (F1, F2): every Horry County home for sale with a map pin, tested against FEMA's map. About 1 in 6 is in the high-risk zone; of those, about 4 in 5 do not come up under flood zone.
   - What our search reads (F9): it finds a home under flood zone only when the listing data says so. FEMA's map is the source of truth. No blame on any agent, the MLS or a website.
   - Three short facts that make it real, one sentence each: most are condos (833 of 1,122; F4); even in FEMA's wave zone, VE, 85 of 108 do not come up (F5); even at $1 million and up, 45 of 59 do not (F6).
   - The other way (F8), one sentence: some homes that come up under flood zone sit outside FEMA's high-risk zone, so the filter is not the map either way.
   - Optional, one sentence (F7): about 1 in 3 homes for sale in North Myrtle Beach is in the zone. Leave out if it reads like the town guide.
   - **Mid offer 1:** headline `Like a house? We'll check its flood zone before you offer.` One sentence: "We read FEMA's map for that address, look for an elevation certificate and get a flood insurance quote." Button: `Have us check this house's flood zone` -> /contact/.
6. **H2 `What does my flood zone mean?`** (F17 to F21). One table, four rows, two columns a reader uses: "What it means" and "Does a bank loan need flood insurance?"
   - VE: high risk, ocean waves expected. Yes.
   - AE (and A, AO, AH): high risk, a 1 percent or greater chance of a flood each year. Yes.
   - X shaded, also called X500 (0.2 percent a year): moderate risk. No federal rule; a lender may still ask.
   - X: minimal risk. No federal rule; a lender may still ask.
   Under it, two sentences: a 1 percent chance a year adds up to at least about 1 in 4 over 30 years (F19). Zone X still floods: that, and what policies cost, is on /buyers/coastal-insurance/ (one line, a link, no figure). VE by kind of water: /buyers/waterfront-homes/ (link on "VE").
7. **H2 `When will the lender tell me the house is in a flood zone?`** (F22 to F25). The lender must tell you in writing before you sign the loan, after your offer is accepted (F25). A bank loan in the zone needs flood insurance (F22). A policy bought with the mortgage starts with no wait; otherwise there is a 30-day wait (F23). What that means: get the zone and a quote before you offer, so the cost is in your numbers, not a surprise at closing. Whether the house has flooded is a separate check: link /buyers/undisclosed-flooding/.
   - **Mid offer 2:** headline `Send us the address. We'll get the flood quote before you offer.` Button: `Get a flood zone check and quote` -> /contact/. (Different words from offer 1.)
8. **H2 `Does the house have an elevation certificate?`** (F26 to F28). What it is in one sentence (the height of the lowest floor, kept for newer buildings in the zone; F26, as the verifier allows). Horry County posts the signed certificates it has, about 1,700 from 2010 on (F27). Older houses, and many inside a city, will not have one there. We look for it with every flood check. A condo's building policy and yours: link /hoa/master-insurance-ho6/ on "condo".
9. **FAQ (open text, 5 short answers, no repeat of a section):**
   - Can I look up a flood zone by ZIP code? No: one town holds both zones (F7: 316 of 902 homes for sale in North Myrtle Beach are in the high-risk zone, the rest are not). Check the address.
   - Is there a Horry County flood map PDF? Yes: FEMA's Map Service Center prints the panel for an address (F11).
   - How new is Horry County's flood map? It took effect in December 2021; all 162 panels carry that date (F13).
   - Does Zone X mean the house will not flood? One line, link /buyers/coastal-insurance/ and /buyers/undisclosed-flooding/.
   - Who at the county answers flood map questions? Its 12 certified floodplain managers (F16; the phone only if the verifier passes it).
10. **End offer band:** `Found a house? Send us the address.` "We check its flood zone, find any elevation certificate and get a flood insurance quote, before you make an offer." Button `Send us the address` -> #lead-form.
11. **Sources box:** the CCMLS line and notice; "Chapter3 home search, counted in aggregate on [day]; Horry County's copy of FEMA's flood map, effective December 2021"; the method limits (F3, F10); 44 CFR 59.1, 60.3, 64.3; 42 U.S.C. 4012a, 4104a; FEMA Map Service Center; Horry County elevation certificates page.

No "On this page" list is needed at six sections; add one if the build makes the page longer than about four phone screens.

## Visuals (each readable at a glance)

1. **The chart** (section 2): two bars, 231 against 891, title says the point. From `chart-high-risk-tagged.csv`, never typed.
2. **The zone table** (section 6): four rows, two plain columns. Zone letters in bold.
3. Nothing else. No map: the reader's map is FEMA's, and a county-wide flood map image would be gray texture on a phone (CRAFT 4). No icons row. If the build wants a picture of the check, use a screenshot of our own lookup tool's result card once it is live (our own image), never a FEMA or listing screenshot.

## Homes strips

- **The edge feed under the opening** (the site adds it; the page is not yet in `idx-lib/feeds.js`). Proposal for the lead (BUILD.md): a feed for `/buyers/flood-zone-check/` of houses within a mile of the beach (`has: "beach_1mi"`, houses from about $250,000, the six beach towns), titled `Beach-close houses we can zone-check today`, with a one-line note under it: "Pick one. We send you its FEMA flood zone the same day." The title is true without promising anything about flooding. Do not add `not: "flood_zone"` and do not title any feed "outside the flood zone": this study shows that filter misses about 4 in 5 high-risk homes.
- **No `homes()` strips for named places.** The page names no place a reader picks; a town strip here would compete with the town guides.
- Lead item, site-wide: feeds that use `not: "flood_zone"` (`SINCE_2010`, `LL_INS`, `florida`, `DRY_450`, `BEACH_DRY` in `idx-lib/feeds.js`) still let high-risk homes through. Their titles today promise nothing about flooding; keep it that way.

## Offers (each different words, each to /contact/ or #lead-form; the site opens the short pop-up)

1. Slim bar under the answer: `Send us an address. We check its flood zone today.`
2. After the study: `Have us check this house's flood zone`.
3. After the lender section: `Get a flood zone check and quote`.
4. End band: `Send us the address`.

## Hard limits for the writer

- No premium, rate, payment or dollar figure for insurance. Cost is a link to /buyers/coastal-insurance/.
- The study is aggregate only: counts and shares. Never a listing, address, MLS number, map dot or photo.
- Approved study wording: "come up when our home search filters for flood zone". Never "the listing marks", "the MLS hides", "agents leave it out", or any company named.
- No story (none in `stories/stories.json` fits). No quote for Tim Nash.
- No date typed in body copy except the map's own effective month (F13), which is a fact, not the page's date. The count's day comes from the data file.
- Fair housing: zones and buildings only, never who lives there.

## For BUILD.md (lead items)

- **sitemap.xml:** `/buyers/flood-zone-check/`.
- **llms.txt:** `- [Is my house in a flood zone? Horry County flood map check](https://chapter3realty.com/buyers/flood-zone-check/): check any address on FEMA's map, what AE, VE and X mean, and our count of high-risk homes for sale the flood-zone filter misses.`
- **Feed:** the proposal under Homes strips.
- **Pages that should link here** (six or more, on words already there where possible):
  - /buyers/common-mistakes/: H2 "Will the listing tell me the house is in a flood zone?"; link "our flood zone study", and refresh its houses figures (245 / 196, an older pull) from this page's data file so the site has one value.
  - /buyers/undisclosed-flooding/: FAQ "Will the lender tell me if the house is in a flood zone?" and "Can a house flood if it is not in a flood zone?"
  - /buyers/coastal-insurance/: H2 "Myrtle Beach flood zones: Zone X does not mean no flood risk", on "flood zone".
  - /buyers/property-records/: the lookup tool's flood line already links here (its PLAN).
  - /buyers/property-records/gis-map/: "Flood Zones. FEMA's flood zone codes, such as AE and VE."
  - /buyers/waterfront-homes/: H2 "Do you need flood insurance on a waterfront home?"
  - /buyers/homes-near-the-beach/ (it carries "is Myrtle Beach in a flood zone").
  - /buyers/relocating/hurricanes/: H2 "Three things to check on any address, before you fall for the house".
  - /why-chapter-3/: the one line on our flood count (row 27 there) should link here instead of /buyers/undisclosed-flooding/.
  - /buyers/buying-in-myrtle-beach/ and /buyers/first-time-home-buyer-myrtle-beach/ where they say "flood zone".
- **Owner question still open:** which MLS field fills our search's flood_zone key (TOMORROW item 9). The page does not need the answer; it says only what our search finds.
- **Dependency:** the lookup tool at /buyers/property-records/ (TOMORROW item 4). Ship this page with FEMA's Map Service Center as step 1 if the tool is not live yet.
