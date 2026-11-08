# Plan: /buyers/pool-homes/

Batch 2026-11-n, Lane N (new page). Research by the research helper, 2026-11-08. Ledger: `facts.md` (22 rows, all awaiting a verifier; use only rows marked `verified`). Must-answer list: `must-answer.md`. Data: website copy `data/2026-11-n/buyers-pool-homes/` (`findings.json` is the one file charts and tables read; `listings.json` and `listings-extra.json` hold every call). Spec to write: `specs/buyers-pool-homes.js`. Design to copy: the four approved pilots (`batches/2026-11-a/{sell-fsbo,submarkets-pawleys-island,hoa-liens-and-foreclosure,invest-condos}/DESIGN.md`).

## The reader and their job

A buyer, often from another state, who wants a house with its own pool near the beach. Many expect Florida prices. Their job: **find the pool homes and know what one costs here**, then decide between a house with its own pool and a cheaper house in a neighborhood with a shared pool. Next they ask what to check before buying one and what owning it adds (the fence rule, the insurance, the tax).

What they would pay an expert to tell them:
- how many pool homes there really are at their price, and where;
- whether paying for a pool is worth it, or a neighborhood pool does the job;
- what goes wrong with a pool purchase that a normal inspection misses.

## The deciding fact (checked first)

A private pool is rare below the top of the market. 257 of about 2,950 houses for sale in Horry County list their own pool (row 1). Only 5 ask $300,000 or less and 37 ask $500,000 or less; over $1 million, more than half have one (row 4). The page is therefore not a plain search page. Its spine is: where the pool homes are, what they ask, and the shared-pool route for a buyer under that price (row 20).

## Findings no other site has

1. **Our own count of pool houses by town, with the middle asking price with and without a pool** (rows 1, 2, 5). From the site's live listings, counted in aggregate on one day.
2. **How the chance of a pool climbs with price** (row 4): 1 in 100 houses at $300,000 or less, about 1 in 4 at $750,000 to $1 million, about 7 in 10 over $2 million. Nobody publishes this split.
3. **Same size, still far more** (row 3), with the honest reason: pool houses sit east of US 17 twice as often and are more often on the water (row 6). The page does not claim this is what a pool adds.
4. **The shared-pool alternative in numbers** (row 20): 1,261 houses in neighborhoods with a pool ask about $435,000 in the middle, with an HOA fee of about $105 a month; 168 ask $300,000 or less.
5. **The county's fence rule as a drawing** (rows 9 to 11), from Horry County's own affidavit, and the fact that a South Carolina home inspector is not required to inspect the pool or the fence (rows 13, 14).

## Title tag, H1, description

- **Title tag (54 characters):** `Homes With a Pool in Myrtle Beach: 1 in 50 Under $500K` (then the site suffix if the build adds one; check the full length stays near 60). It starts with the searched words and gives one fact from the page (row 4: 37 of 1,906 is 1.9 percent). Recheck the fact on the build day; if the share moves past 1 in 40 or 1 in 60, change the number, not the claim's shape.
- **H1, line 1:** "Homes with a pool in Myrtle Beach"
- **H1, italic sub line (about half size):** "Rare under $500,000, and where to find them"
- **Hero sub-header (no we, our or us):** "Where the pool homes are, what they ask, and what Horry County requires around a pool."
- **Description (about 150 characters):** "About 1 in 11 houses for sale around Myrtle Beach has its own pool, and most ask over $750,000. Where they are, the shared-pool option, and the fence rules."

## Page shape

A **landing page**: short and useful, with the live search as its main offer. The main relation is **place and price** (where, and at what price a pool appears), with one **choice** (own pool or a neighborhood pool) and one **rule** (the fence). Not a list of places with long entries: the towns are a table the reader scans and clicks. About 1,200 to 1,500 words.

Layout from the pilots: two-line headline with the half-size italic sub line; the answer first; one card style, used only for the own-pool-or-shared-pool choice; plain lists under thin rules elsewhere; one block width of about 720 px for the table, chart, cards, drawing and offers. On screens 1,100 px and wider, the fence drawing sits beside the paragraphs that explain it. If a screen looks busy, take something away.

## Sections, in order, and what each proves

0. **Hero.** H1, sub line, byline (Devin Day, reviewed by Tim Nash), the sub-header. Three short key-fact rows (icon, label, number), from `findings.json`: "Houses for sale with their own pool: 257 of about 2,950" / "Middle asking price with a pool: about $955,000" / "Houses in a neighborhood with a pool: about 1,260". Never typed; read from the data file.

1. **Short answer** (H2: "How many homes in Myrtle Beach have a pool?"). About 1 in 11 houses for sale in Horry County has its own pool. The middle one asks about $955,000, against about $400,000 for a house without one. Under $500,000 it is about 1 house in 50. A buyer under that price usually gets a pool another way: about 1,260 houses sit in neighborhoods with a shared pool, at about $435,000 and an HOA fee near $105 a month. (Rows 1, 2, 4, 20.) Spell out HOA once: "homeowners association (HOA)".
   - **Slim offer bar** under it: "See every house with a pool for sale now" → `/homes/map/?q=house%20with%20a%20pool`.

2. **Where are the homes with a pool?** (rows 5, 6, 22). One sentence first: they cluster near the beach (about 1 in 3 pool houses is east of US 17, against 1 in 6 of all houses). Then **the table by town** (our unique data), built from `findings.json` by_place: town, pool houses for sale, share of the town's houses, middle asking price with a pool, middle without, and a "See them" link per row to the live search for that town. Order by number of pool houses. Rows under 10 pool houses show the count and "too few to give a middle price". Pawleys Island (Georgetown County) as the last row, labelled as such. A one-line note under the table: "Asking prices of houses for sale on [date set by build], from the MLS feed; a town here is the mailing address, not city limits."
   - Links: Myrtle Beach `q=house%20with%20a%20pool%20in%20myrtle%20beach`, North Myrtle Beach, Conway, Murrells Inlet, Surfside Beach, Longs, Little River, Pawleys Island the same way; Carolina Forest `/homes/map/?type=house&has=pool,area_carolina_forest` (the words search does not know it, row 22); Garden City and Socastee by their area keys the same way (check each link once in the preview).
   - One sentence linking the sibling /buyers/homes-near-the-beach/ for how far each area is from the sand.

3. **What does a house with a pool cost here?** (rows 3, 4, 6, 7). Lead: a pool appears mostly at the top of the market. **The chart**: share of houses with their own pool in each price band (8 bars, from `pool_share_by_price`), one line of note. Then the same-size fact in two sentences: at every size from 1,500 to 4,000 square feet, pool houses ask much more. Then why, plainly: they sit nearer the beach, more of them are on the water, and most have a fenced yard; so the gap is not the price of a pool. Two of row 7's traits at most (fenced yard; listed with no HOA fee).
   - FAQ carries "Does a pool add value to a home here?": the honest answer from row 3, no appraisal claim.
   - **Offer box A** (headline "Find a pool home in your price range"; one sentence; button "Send us your price range") → `/contact/?topic=pool-home-search` (or the site's form with the topic named).

4. **Your own pool or a neighborhood pool?** (rows 7, 16, 20, 21). **Two cards**, side by side on a desktop, one under the other on a phone. This is where the reader chooses, so cards earn their place.
   - *Your own pool:* about 257 for sale, middle ask about $955,000; you keep the fence, the pump and the water; about a quarter also list a hot tub; a pool at a rental house is a home pool under state rules (row 16; one line, link /invest/str-rules/).
   - *A neighborhood pool:* about 1,260 houses, middle ask about $435,000, HOA fee about $105 a month; the state counts it as a public pool, so it has a yearly state permit and a certified operator checks it at least three times a week while it is open (row 21, with "public" explained in the same sentence); the HOA's rules set the hours and guests.
   - One sentence linking /buyers/no-hoa-homes/ for what an HOA can and cannot control, and /buyers/gated-communities/ for amenity centers.

5. **What does Horry County require around a pool?** (rows 8 to 12, 18). Lead: the county requires a barrier around every pool, and a permit with inspections; South Carolina leaves pool rules to each county and city (row 8). **The drawing** beside the text on wide screens: a fence at least 48 inches tall, no gap a 4-inch ball passes, at most 2 inches under it on grass, the gate swinging out with the latch on the pool side, the pump at least 36 inches from the fence, a door alarm on the house wall. Each label from row 10 or 11, said once in the drawing and not repeated in a list. Then a plain list under a thin rule for the three things the drawing cannot show: the alarm-or-cover choice for doors (row 11), a hot tub with a locking cover needs no fence (row 11), the permit lapses after 180 days without an inspection (row 12). One sentence on why (row 18), no alarm words.
   - Say the rule is the county's (outside city limits). Inside a city, say only what a verified row allows (see facts "Not verified"); the offer covers the rest.

6. **Does a home inspection check the pool?** (rows 13, 14). Answer first: no, not by default. A South Carolina home inspector is not required to inspect the pool or the fence, and must list what was skipped. Then what we do (owner question 2; until the owner answers, say only: "We make sure the pool, its equipment and its fence are inspected before your inspection period ends", if the owner confirms; otherwise cut to the offer).
   - **Offer box B** (headline "Is this pool's fence legal?"; one sentence; button "Have us check the pool and its permit") → `/contact/?topic=pool-check`.

7. **What does a pool add to the cost of owning?** (rows 15, 17, 19). Three plain items under thin rules, no cards:
   - Insurance: insurers may charge more and ask about the fence and a cover; an umbrella policy adds liability coverage (row 15). Link /buyers/coastal-insurance/.
   - Property tax: a pool you add later is taxed at its full value in its first year; a home you buy is valued as of the sale (row 17). Link /buyers/property-taxes/.
   - The season: average highs above 80 degrees June to September, near 79 in May and 76 in October, about 56 in January (row 19). A heater is what lets you swim in spring and fall; no number on that.
   - Upkeep: no dollar figure until owner question 1 is answered. Do not write "it depends".

8. **FAQ** (open text, each answer's first sentence names the subject):
   - Are there homes with a pool under $300,000 in Myrtle Beach? (row 4: 5 that day; the shared-pool route, row 20.)
   - Does a pool add value to a home in Myrtle Beach? (row 3, the honest version.)
   - Do you need a fence around a pool in South Carolina? (rows 8, 9.)
   - Do home inspectors check pools in South Carolina? (row 13.)
   - Can I rent out a house with a pool? (row 16; link /invest/str-rules/.)
   - Are above-ground pools counted? (18 houses list one; not in the counts; row 1 note.)

9. **End offer band** (headline "Want a pool home? We will find it."; button "Have us set up your pool-home search") → `/contact/`. Then sources and the MLS line, the photo credits.

Offers, all different words: bar "See every house with a pool for sale now"; per-town "See them"; box A "Send us your price range"; box B "Have us check the pool and its permit"; band "Have us set up your pool-home search".

## Visuals (one per idea)

| Idea | Visual | Built from |
|---|---|---|
| Where | Table by town with a search link per row | `findings.json` by_place |
| What it costs | Bar chart, share of houses with their own pool by price band | `findings.json` pool_share_by_price |
| Own or shared | Two cards | rows 7, 16, 20, 21 (numbers from `findings.json`) |
| The fence rule | Our own drawing (SVG, `tools/illustrations.js` style): fence, gate, latch, pump clear zone, door alarm, each with its number | rows 10, 11 |
| Key facts | Three icon rows in the hero | `findings.json` |

No map: the table already says where, and a second "where" block would repeat it (CRAFT 3). No chart of the same-size gap: it would invite the reader to read it as the pool's value.

### Photos

No free photo of a local pool home was found (facts "Not verified"). Candidates for the build half, each to be looked at full size before use:

| Candidate | Source and licence | What it could show | Where |
|---|---|---|---|
| USGS 2011 oblique aerial over Surfside Beach, frames 2011_0824_175705d to 175825d (plane at 33.60 to 33.64 N); also Garden City frames just south | U.S. Geological Survey, public domain. Data release Morgan, K.L.M., 2017, https://doi.org/10.5066/F7N877XX ; frames are in https://coastal.er.usgs.gov/data-release/doi-F7N877XX/data/11CCH03_0824_175500.zip (the single-frame URLs now return 404) | Beach houses behind the dunes with backyard pools, where 1 in 4 houses for sale has a pool (row 5) | Section 2, beside the table on wide screens. Only if pools are visible at page size; caption says "beach houses with backyard pools in Surfside Beach, seen from a plane in 2011", names no house. Do not reuse a frame another page uses (list in `data/2026-11-a/invest-condos/photos.json` provenance). |
| None from Commons yet | The search API was rate-limited on 2026-11-08; retry "Category:Swimming pool fences", "Category:Private swimming pools in the United States" | A pool fence with a self-closing gate | Section 5, only if it shows the rule. The drawing is enough without it. |

Never: a listing photo, a builder photo, a hotel pool, a person as the subject, an AI image of a real place.

## Photo partner shot list (for `templates/photo-request-email.md`)

No person as the subject, no readable house numbers, plates or business signs. With each photo, send the street or neighborhood and confirm in writing that we may use it as our own. Shoot only from a public place, or with the owner's written permission.

| # | Place | What to shoot | Why | Section |
|---|---|---|---|---|
| 1 | A house with a backyard pool in Surfside Beach, Garden City or North Myrtle Beach (beach side of US 17) | The pool and its fence from the yard, with the owner's permission; landscape; daylight | The page says pool homes cluster near the beach; a real local pool beats a 2011 aerial | Section 2 or the hero |
| 2 | The same or another pool's gate | Close shot of a pool gate showing the latch on the pool side and the gate swinging out | Shows the county's gate rule beside the drawing | Section 5 |
| 3 | A pool equipment pad (pump, filter, heater) next to a fence | Wide enough to show the space between the equipment and the fence | The 36-inch clear zone | Section 5 |
| 4 | A neighborhood pool at an amenity center in Carolina Forest, Market Common or a newer Conway community | From a public spot or with the HOA's permission, no swimmers; the posted state permit or "No lifeguard on duty" sign if visible | The shared-pool card: about 1,260 houses for sale have this instead | Section 4 |
| 5 | A screened pool enclosure on a house (the screened cage over a pool) | From the yard with permission, landscape | Readers search "pool screen enclosure"; shows what one is | Section 7 or FAQ |

## Siblings and who owns what

- /buyers/homes-near-the-beach/ (this batch) owns distance to the sand and east-of-17 detail. This page uses only "1 in 3 pool houses is east of US 17" (row 6) and links there.
- /buyers/new-construction/ and /buyers/new-construction/builders/ (this batch) own builders and their amenities. This page says only that 1 in 8 pool houses for sale is new (row 7), if used.
- /buyers/no-hoa-homes/ owns HOA rules and "about $95 a month on a house". This page's $105 is for houses in neighborhoods with a pool; keep the group in the sentence.
- /buyers/coastal-insurance/ owns the coastal policy and wind; this page has one insurance line (row 15).
- /buyers/property-taxes/ owns rates and the 4 and 6 percent split; this page has one tax line (row 17).
- /sell/seller-disclosure/ (this batch) owns what a seller must disclose; do not say what the SC form asks about pools here.

## Writer cautions

- Every price is an asking price, counted in aggregate. Never "sold for". Never a price for one house.
- Row 3 is not the value of a pool. Never "a pool adds $X".
- "Public pool" (row 21) is the state's category; explain it in the same sentence.
- The fence rule is the county's; no sentence may say it is state law (row 8 says the opposite).
- No "safe", "family-friendly" or "perfect for kids". The drowning fact is one sentence beside the rule.
- No sentence over 28 words, none opening with "So", no "Here is", no "What you ... is" clefts, no em dashes.
- We do the checking: never "check the permit", "ask the inspector" or "read your report" addressed to the reader.
