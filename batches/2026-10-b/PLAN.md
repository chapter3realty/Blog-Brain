# Batch 2026-10-b: five pages that bring home buyers

Chosen 2026-10-12 to bring buyer leads (owner: "identify the next 5 best pages to create that will maximize the chances we get leads wanting to buy a house"). Approved 2026-10-13: "use all of your skills to write these blogs so perfectly for the audience they are intended for and so well designed that I dont need to change anything in the pages at all."

Search demand: Google search suggestions, read 2026-10-12 and 2026-10-13. No Search Console access yet, so these show what people type, not how many.

Fair housing (owner asked "are all of these legal topics?", 2026-10-12): no page sorts or describes places by who lives there. Never "for families", "safe", crime, demographics, "young adults", "retirees" as a selling point. Places are described by what they have: minutes to things, fees, prices, amenities, rules, assigned school names as a plain fact from the district (no ratings). Never a conclusion about a named HOA, builder or community ("best run", "poorly kept").

## The five pages

### 1. Best neighborhoods in Myrtle Beach, by what you want nearby

- URL: `/buyers/best-neighborhoods/`
- Reader's job: choose two or three neighborhoods to look at. Decision guide (reports/Page shapes, section 9) plus a place guide.
- Searches: best neighborhoods in Myrtle Beach (SC), best places to live in Myrtle Beach (area), best communities in Myrtle Beach, best areas to live, best neighborhoods in North Myrtle Beach and Surfside Beach, best gated communities, best retirement communities, Myrtle Beach neighborhoods map, Myrtle Beach suburbs, Carolina Forest vs Myrtle Beach, is Myrtle Beach a good place to live.
- Must answer: which neighborhoods to look at for each want (walk or bike to the beach, a short drive to the beach for less money, pools and amenities, golf, no or low HOA fee, new homes, near the hospital, a lower price), what a home usually sells for in each, the HOA fee, minutes to the beach, where each one is on a map, and the honest trade-off of each.
- Deciding fact: 8 to 12 named neighborhoods, each with a verified typical sale price, a verified HOA fee (or none) and verified drive minutes to the beach.
- Offer: tell us what you want; we send three neighborhoods and the homes for sale in each.
- Links: every page in this batch, the four 55+ pages, the town pages under /submarkets/, /buyers/relocating/which-town/.

### 2. Gated communities in Myrtle Beach

- URL: `/buyers/gated-communities/`
- Reader's job: find gated neighborhoods in their price range and learn what the gate means. List page plus place guide.
- Searches: gated communities in Myrtle Beach (SC), best gated communities, gated communities North Myrtle Beach, Surfside Beach, Murrells Inlet, 55+ gated communities, gated golf communities, homes for sale in gated communities.
- Must answer: which communities have a gate, by area; whether the gate is staffed or a code or call box (only where a source says); the HOA fee; what homes usually sell for; whether it is 55+ or golf; what a gate costs owners (the fee) and does not do (never a safety claim).
- Deciding fact: at least 8 communities with a gate shown by a primary or verifiable source (HOA documents, county GIS gatehouse, builder, two listing sites agreeing), across at least three areas.
- Offer: this week's list of homes for sale in gated communities, in your price range.

### 3. Homes with no HOA in Myrtle Beach

- URL: `/buyers/no-hoa-homes/`
- Reader's job: find where homes with no HOA are and decide if no HOA suits them. Explainer plus place guide.
- Searches: Myrtle Beach homes no HOA, houses for sale Myrtle Beach no HOA, condos for sale no HOA, homes for sale North Myrtle Beach no HOA, why are HOA fees so high in Myrtle Beach, average HOA fees in Myrtle Beach, how to avoid an HOA, does every neighborhood have an HOA.
- Must answer: where no-HOA homes are (areas and kinds of streets), what share of homes for sale have no HOA fee, what they usually cost, what you give up (no shared pool, no rules for neighbors) and what you gain, what you pay for yourself instead (trash? streets? flood?), how to tell before you offer (deed restrictions can exist without an HOA), why HOA fees are high here, what a typical HOA fee is.
- Deciding fact: a verified count or share of no-HOA homes among recent listings by area, and that condos with no fee are rare or not (from listings).
- Offer: we send homes with no HOA in your price range.
- Links: the 16 HOA guides under /hoa/.

### 4. The Farm at Carolina Forest

- URL: `/submarkets/carolina-forest/the-farm/`
- Reader's job: picture living there and decide whether to look. Community guide (reports/Page shapes, section 1), the 55+ page model.
- Searches: The Farm at Carolina Forest HOA, HOA rules, homes for sale, homes for rent and rentals, pool, map, The Farm Carolina Forest SC; Carolina Forest HOA fees, Carolina Forest schools and school district map.
- Must answer: where it is (map, minutes to the beach, groceries, hospital, schools), the homes (sizes, years, builder, how many), the HOA fee and what it includes, the pool and amenities, the rules (renting, fences, sheds, parking) where readable, assigned public schools as a plain fact from Horry County Schools, flood, property tax for a home you live in, what homes usually sell for, pros and cons, homes for sale offer.
- Deciding fact: the community's extent (county subdivision records) and a readable HOA fee.
- Offer: the list of homes for sale in The Farm.

### 5. The most affordable places to buy a home near Myrtle Beach

- URL: `/buyers/affordable-places-to-live/`
- Reader's job: find where their budget goes furthest and what each place costs them in time and trade-offs. Comparison (reports/Page shapes, section 4) with a map.
- Searches: most affordable places to live near Myrtle Beach, affordable towns near Myrtle Beach, cheap homes Myrtle Beach, affordable homes near Myrtle Beach, cheapest places to live in Myrtle Beach, is Myrtle Beach cheap to live, Conway vs Myrtle Beach, Loris, Aynor (homes for sale, to Myrtle Beach).
- Must answer: where a home usually costs least (towns and areas), how much less than Myrtle Beach, minutes to the beach and to work centers, what the trade-off is (drive, flood, older homes, HOA), property tax differences inside and outside city limits, down-payment help (link /buyers/programs/), and a clear next step.
- Deciding fact: typical home values by town or ZIP from one consistent source (Zillow's published research data, ZHVI, which CLAUDE.md allows) checked against county recorded sales.
- Offer: see what your budget buys in each place, and which down-payment programs fit.

## Shared

- Prices: one source for every page, so the five agree (WORKFLOW rule: one fact, one value).
- Every fact from a verified ledger row in `batches/2026-10-b/facts/`.
- Pictures: aerials from U.S. government imagery (NOAA 2026 where flown, else USDA NAIP), our own maps, Commons photos only of the place named.
- Delivery: `tools/package-batch.js` with `batches/2026-10-b/upload.json`; pushed to the live branch when the owner approves.

## When IDX arrives (owner, 2026-10-14)

"make a note that once we get IDX we hook that into this page." When the site has an IDX feed (live MLS listings), connect it to these pages. Each named place shows its homes for sale now, in place of the "send me the list" form alone. First /buyers/affordable-places-to-live/ (each community's listings under its entry), then /buyers/no-hoa-homes/ (by price band), /buyers/gated-communities/, /buyers/best-neighborhoods/ and The Farm. Also listed in audit/FIX-LIST.md.
