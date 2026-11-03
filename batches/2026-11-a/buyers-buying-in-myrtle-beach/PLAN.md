# Plan: /buyers/buying-in-myrtle-beach/

Researcher, 2026-11-03. Spec to write: `specs/buying-in-myrtle-beach.js` (the live page is hand-built, not spec-built; rebuild it as a spec with `tools/glass.js`). Facts: `facts.md` in this folder (rows cited as F#). Data: `<web2>/data/2026-11-a/buyers-buying-in-myrtle-beach/` (README.md there).

## The reader and their job

A buyer from another state, most often North Carolina, New York, Pennsylvania, New Jersey or Virginia (F16). They have bought a home before, somewhere else. They have decided Myrtle Beach is a real option. They do not know the towns, the 4 and 6 percent tax rates, the flood maps, or that an attorney supervises every closing here. Many will buy without living here first.

Their job, in one verb: **decide** (whether now is the time, house or condo, and where), then **follow the steps**.

What they would pay an expert to tell them, in order:
1. Is now a good time, or will I overpay? Do I have room to negotiate?
2. What does a house or a condo cost, and where does my budget go furthest?
3. What are the steps here, and what is different from home?
4. What will it cost each year besides the mortgage?
5. What could go wrong here that would not where I live now?

## The deciding fact

The owner's headline says "it's a buyer's market". Our count says **condos yes, houses no** (F3 to F7):
- Condos: about 7.5 months of supply at every price. Housing researchers call 6 to 6.5 balanced, so condos are past it.
- Houses: about 4 months (3.8). Below balanced; sellers have a slight edge. The one exception is houses at $700,000 and up, at about 7 months.
- More than half of homes for sale have already cut their price (F9).

The live page called 4.5 months for houses "a buyer's market". That is wrong by the benchmark, and the 4.5 itself came from a file that drops new houses (F2).

**H1 (keeps the owner's words, scoped to what is true):** "Buying in Myrtle Beach: a buyer's market for condos, not yet for houses." If the lead wants it shorter: "Buying in Myrtle Beach: it's a buyer's market for condos."
**Title tag (30 to 65 characters):** "Buying in Myrtle Beach: Buyer's Market, Prices, Steps | Chapter3".
**Meta description:** what the page gives, no promise of off-market homes (claims-scan HIGH on the live page): months of supply for condos and houses, prices by town, and the South Carolina steps from offer to recorded deed.

Update `data/headlines.json` only if the lead approves the H1 (it is the owner's liked headline; NEEDS.md 4).

## Page shape

The reader came to decide, then to follow steps. CRAFT 3 and `reports/Page shapes by kind of page.md`: a **decision guide that opens with market data**, then **numbered steps with a timeline**. The relation is condition (is it a buyer's market, for what) and then sequence (the steps). One dominant shape per half:
- Top half: the verdict for each situation (condo, house under $700,000, house over $700,000), proved by one chart and one town table.
- Bottom half: a step timeline, each step saying what we do.

Wrong-shape questions for the review: Is it a market report? No, it gives a verdict and no trend chart of its own (FHFA gets one sentence, F18). Is it a list of places? No, the towns are one table, with links to each town guide; no entry per town. Is it a cost page? No, one yearly-cost line, then a link to /buyers/cost-to-own/.

Measure the top on a phone: H1 and byline, the two-sentence answer, a row of four key facts, a slim offer bar, then the first section. No lead form above the answer (the live page's first screen is a form and four tiles).

## Sections in order

Every H2 is a question people search (must-answer.md). The first sentence under each answers it with the subject named. No sentence over 28 words; none opens with "So"; no "Here is"; no pseudo-cleft. The hero sub-header has no we, our or us.

### 0. Hero
- H1 above. Byline (Devin Day may be the byline only). Date set by `build.js dates`.
- **Short answer, two sentences:** "Myrtle Beach is a buyer's market for condos and for houses over $700,000: more than 7 months of homes for sale at today's pace of sales. Houses under $700,000 are not; they have about 4 months, and well-priced ones still sell." (F4 to F6; each figure from market.json.)
- **Key facts row (glass chips, words with each number):** Condos for sale: about 7.5 months of supply (F5). Houses: about 4 months (F4). Homes for sale with a price cut: more than half (F9). Middle resale price: house about $350,000, condo about $215,000 (F13).
- Slim offer bar (first offer looks like an offer: a box with a headline, one sentence and a large button). Headline: "Want the numbers on one address?" Button: "Send us an address" to /contact/ with the page named.

### 1. Is Myrtle Beach a buyer's market right now?
Proves: the verdict by kind and price.
- First sentence: the answer, then what months of supply means in one plain line ("how many months it would take to sell every home for sale if sales kept their pace").
- **Chart 1 (the page's main visual):** horizontal bars, months of supply for 8 groups (condos in 4 price bands, houses in 4 price bands), with the balanced range (6 to 6.5, and the 5 to 7 band lightly) drawn as a shaded column. Bars past it read "buyers have room"; bars short of it read "sellers have the edge". Data: `market.json` kinds.*.bands[].months_all. Built with `glass.bars` or an inline SVG from the data; never typed. Labels 16 px or more on a phone.
- Two sentences on what the reader does with it: on a condo, there is room to ask for a lower price or for repairs; on a house under $700,000, a well-priced one may still draw more than one offer. Then the evidence that sellers already feel it: price cuts (F9) and listings over 90 days (F10).
- One sentence on prices: flat for a year after rising about half in five years (F18). No forecast.
- Photo 1 (under the first paragraph, not above the answer): the downtown beach and the SkyWheel (candidate A below), caption saying what it shows.

### 2. Where do buyers have the most room to negotiate?
Proves: the verdict changes by town; a reader learns where their budget goes furthest.
- First sentence: the City of Myrtle Beach condo market has the most supply on the coast, about a year (F8; see the conflict note in F8 and NEEDS.md 1 before printing a number), while houses inland (Carolina Forest, Forestbrook, Red Hill) and in Surfside Beach and Little River have under 4 months.
- **Table 1 (cards on a phone):** town, middle resale house price, months for houses, middle resale condo price, months for condos (F8, F14; `town-table.json`). Ten towns. A cell with too few sales shows a dash. Column names plain: "Middle house price", "Months of houses for sale", and so on. Each town name links to its guide where one exists: /submarkets/myrtle-beach/, /submarkets/north-myrtle-beach/, /submarkets/surfside-beach/, /submarkets/garden-city/, /submarkets/little-river/, /submarkets/carolina-forest/, /submarkets/conway/. Forestbrook, Socastee and Red Hill have no guide yet: no link.
- **Map 1:** our own static map of the ten towns (`tools/area-map.js`, Census place outlines from `data/2026-11-a/invest-where-to-buy/raw/places.json`), each town shaded by its condo or house months (two small maps side by side on desktop, stacked on a phone), with a Google Maps link. Short and wide on a phone. Labels placed from the outlines' real centers. If two maps make the top too long, keep one map (houses) and let the table carry condos.
- Fair housing: towns are compared by price and supply only. Never "best", "safe", "family-friendly", or who lives there.

### 3. How much does a house or condo cost in Myrtle Beach?
Proves: the price, new against resale, and the yearly cost the reader will carry.
- First sentence: the middle resale house about $350,000 and condo about $215,000 in the year to September (F13).
- New homes: builders sold more than 1 in 4 homes; the middle new house about $330,000 (F11). One line on why a reader should care: new homes are a large share of what is for sale, and they sell fast (about 3 months of supply, F4).
- **Yearly cost, one line each (CRAFT 1):** the middle house about $7,550 a year besides the mortgage as your home; the middle condo about $10,170, three quarters of it the condo fee (F44, F45). Then the surprise the reader would not guess: in Myrtle Beach and North Myrtle Beach the middle condo costs more to own each year than the middle house (F45). That answers "if condos have so much supply, why are they not cheaper?"
- Link: /buyers/cost-to-own/ for the parts; /sell/home-value/ owns the full price table.
- Photo 2: a new-construction street (partner shot 3; stand-in below).

### 4. What are the steps to buy a house in South Carolina?
Proves: the order, the waits that are fixed by law, and what is different here. The judge's missing piece.
- First sentence: how many steps and who runs the closing (an attorney supervises every closing here, F32).
- **Timeline (numbered steps, a vertical line on a phone).** Each step: what happens, what is different here, and what we do. No contract rule until owner question 1 is answered.
  1. **Sign a buyer agreement with us.** No firm is your agent until you both sign; since August 2024 an agent must have one before touring with you, and the fee is negotiable (F20, F21).
  2. **Make an offer, signed from anywhere.** An e-signature counts as ink (F22). Earnest money goes to the brokerage's trust account within 48 hours of acceptance, not counting weekends (F23).
  3. **Due diligence.** We line up the home inspection (it is the buyer's duty here, F25), the termite letter, the CL-100 (F27), the insurance quote for the address (F28), the flood zone (F47, F48), the seller's disclosure form (F26) and, for a condo, the HOA papers and rental rules (F49, F50). The walk-away window and its fee go here once the owner answers (owner question 1, F24).
  4. **The loan.** The Loan Estimate within 3 business days of applying (F29). The appraisal; low ones are rare here, and when one comes in low we send the appraiser comparable sales (F30). The buyer gets a copy (F31). Condotel note: a hotel-run building cannot get a Fannie Mae loan (F51).
  5. **The attorney.** The attorney supervises the title search, the loan papers, the closing and the recording (F33). With a home loan for a home you live in, you pick the attorney (F34). We work with several and recommend them once we work with you (F35). The Closing Disclosure arrives at least 3 business days before closing (F29).
  6. **Closing.** At the attorney's office, or sign before a notary where you live with two witnesses (F36). South Carolina has no video notary (F37).
  7. **Recording.** The deed and mortgage are recorded at the Register of Deeds in Conway; the county charges $15 for a deed and $25 for a mortgage; the seller pays the state deed fee (F38). Link /buyers/closing-costs/ for the itemized costs.
  8. **After closing: apply for the 4 percent rate.** It is not automatic; on a $350,000 house it is the difference between about $1,290 and $4,220 a year outside city limits (F40 to F42). The seller's tax bill is not yours (F43). Link /buyers/property-taxes/.
- Days to close: the total only after owner question 3 (F39). Until then the timeline shows the two federal waits and no total.
- Photo 3: the Government and Justice Center in Conway at step 7 (partner shot 5).

### 5. Can I buy in Myrtle Beach from out of state, and will I pay more?
Proves: the out-of-town reader is normal here and does not pay a premium. The thought-provoking finding for this reader.
- First sentence: about 3 in 10 homes, and more than half of condos, went to buyers whose tax bill goes to another state; North Carolina sends the most (F16).
- Then the finding: in the same building or subdivision, those buyers paid the same middle price as South Carolina buyers (F17).
- Who else is coming: the metro grew faster than every U.S. metro but one, about 39 people a day moving in (F19).
- How a remote purchase works, in two lines pointing back to steps 2 and 6. Link /sell/out-of-state-buyers/ only if it reads as useful to a buyer; otherwise /buyers/relocating/.

### 6. What can go wrong when buying here?
Proves: we know the local traps and handle them. Short, good news first, each hard point with what we do. Not a copy of /buyers/common-mistakes/; link to it for the full ranked list.
- Flood: 1 in 4 condos and 1 in 15 houses resold sat in FEMA's high-risk zone (F47); a loan there needs flood insurance (F48). We pull the zone before you offer. Link /buyers/undisclosed-flooding/.
- Insurance: about $2,000 a year for a house, about 40 percent more than the rest of the state; about $800 for a condo owner's own policy (F46). We get the quote before you offer (F28). Link /buyers/coastal-insurance/.
- Tax: forgetting to apply for 4 percent (step 8).
- Nightly rentals: inside the City of Myrtle Beach most houses are not zoned for them and most condos are (F49); North Myrtle Beach licenses them with no zoning map (F50). Link /invest/str-rules/.
- Condo litigation and hotel-run buildings: link /buyers/condo-in-litigation/ and /invest/condotel-financing/.

### 7. Offer (full band, end of page)
One label, tied to the page's gap: "Send us an address. Before you offer, we pull its flood zone, an insurance quote, the tax at 4 percent and, for a condo, the HOA papers and rental rules." Button "Send us an address" to /contact/. Same box component as the top bar. Phone link kept.

### 8. FAQ (open text, FAQPage schema), one answer per question, each true alone
- Is Myrtle Beach a buyer's market? (F4 to F6)
- Will home prices in Myrtle Beach go down? (F18, no forecast; supply facts)
- Do you need a lawyer to buy a house in South Carolina? (F32 to F34)
- How long does it take to close? (owner question 3; until then, the federal waits, F29)
- What is a CL-100? (F27)
- What is the best time of year to buy? (F12: the fewest closings in January and February; prices barely move; one year of data)
- Can I rent my condo by the night? (F49, F50)
- What is the difference between a condo and a condotel? (F51)
- How much are property taxes? (F40, F41)

Plus BreadcrumbList schema (the judge noted both were missing).

### 9. Sources line
Horry County Register of Deeds and GIS parcels (12 months to September 2026); the Chapter3 listing feed counted in aggregate; Census TIGERweb; FHFA; Census population estimates; Texas A&M Real Estate Research Center; S.C. Code and regulations cited; CFPB. Method sentences live here, not in the body.

## What to keep from the live page

- The owner's liked headline words, "buyer's market", scoped (above).
- Internal links that still help: /buyers/common-mistakes/, /buyers/undisclosed-flooding/, /buyers/condo-in-litigation/, /market-reports/ (the latest report, not the July one by name).
- The "Have us look at a property" offer and the phone number (keep the request wording).
- The listing-alert form is a site-wide component; keep it below the first section or at the end, never above the answer.
- Nothing else. Cut: emoji tiles, golf and sunshine claims, "#2 fastest-growing" without a source (now F19), the five "forces", the appreciation forecast line to 2030 (a forecast), the copied mistakes sections, "remote online notarization", the insurance ranges, "the best brokerage", "off market listings" (claims-scan HIGH), every "As of" date in copy.
- No calculator or real story on the live page to keep. BrickWood: if named, the inline affiliated-business disclosure; prefer "our preferred lender" or nothing.

## Visuals

| # | Visual | What it proves | Built from |
|---|---|---|---|
| Chart 1 | Months of supply, 8 bars (condo and house by price band), balanced range shaded | The verdict at a glance | `market.json` |
| Table 1 | Town table, 10 towns, cards on a phone | Where the room to negotiate is | `town-table.json` |
| Map 1 | Ten towns shaded by months of supply (houses; condos optional) | The same, as a place | `town-table.json` + Census place outlines (`invest-where-to-buy/raw/places.json`); `tools/area-map.js` |
| Steps | 8-step vertical timeline with glass icons | The order and the fixed waits | rows F20 to F43 |
| Chips | Four key facts in the hero | The answer in numbers | `market.json`, F13 |
| Photo 1 | Downtown beach and SkyWheel | What the reader pictures when they say Myrtle Beach | candidate A |
| Photo 2 | New-construction street | What a new house here is | stand-in C until partner shot 3 |
| Photo 3 | Government and Justice Center, Conway | Where the deed is recorded | partner shot 5 (no stand-in; text only until it arrives) |

### Free-licence photo candidates (the builder checks each at full size and writes its licence record to `data/2026-11-a/buyers-buying-in-myrtle-beach/photos.json`; files only under `chapter3realty/images/2026-11-a/buyers-buying-in-myrtle-beach/`)

- **A. "Myrtle Beach (24050832475).jpg"**, Wikimedia Commons, https://commons.wikimedia.org/wiki/File:Myrtle_Beach_(24050832475).jpg. Seen at full size (1920 x 1080, copy in `scratchpad/wf2/buyers-buying-in-myrtle-beach/photos/`): the downtown beach at low tide, the SkyWheel, umbrellas and towers, people small. Licence: the earlier pass recorded CC BY-SA 2.0 (a Flickr upload, 2015); Commons' API refused this session (HTTP 429), so **the builder must read the licence and author on the file page before use**. Caption: "The beach beside the SkyWheel in downtown Myrtle Beach."
- **B. "SkyWheel Myrtle Beach in August 2022.jpg"**, DiscoA340, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:SkyWheel_Myrtle_Beach_in_August_2022.jpg. Licence record already on the site (`data/photos.json`, slug del-webb-grande-dunes, taken 2022-08-14). Seen at full size: the SkyWheel from the beach, late day, flat light. Use if A's licence fails.
- **C. "Streets of houses in Carolina Forest, NOAA aerial, January 2026" (public domain)**, already licensed for /buyers/cost-to-own/ (C2O 39; file `images/2026-11-a/buyers-cost-to-own/carolina-forest-house-streets-from-above.webp`, record in `data/2026-11-a/buyers-cost-to-own/photos.json`). Point this page's record at the existing file. Caption: Carolina Forest, outside city limits, seen from above. It shows streets of houses, not that they are new: the caption may not say "new" unless the builder confirms from the NOAA tile that the streets were built recently.
- **Rejected: "Homes and Resorts Along Myrtle Beach.jpg"** (Commons). At full size it shows raised houses with docks on a barrier strip and a salt marsh behind: Garden City Beach or the Murrells Inlet area, not the City of Myrtle Beach. The title is wrong for what it shows and the place cannot be confirmed. Do not use.
- The USGS 2011 oceanfront aerials are already on eight sibling pages. Do not add a ninth.

## Photo partner's shot list

`shot-list.md` in this folder (five shots: the downtown boardwalk and beach, oceanfront condo towers from the beach, a new-construction street in Carolina Forest or Longs, an older resale street in Myrtle Beach, the Government and Justice Center in Conway). The lead sends it with the group's email.

## Siblings (who owns which fact)

- /sell/home-value/ owns price by town (F14 carried). This page shows them only beside months of supply.
- /buyers/cost-to-own/ owns the yearly cost (F44, F45: one line here, link there).
- /buyers/common-mistakes/ owns the ranked mistakes and the 4 percent application detail (F40 to F42: step 8 only).
- /buyers/closing-costs/ owns the itemized costs (F38 names two fees only).
- /submarkets/myrtle-beach/ owns the city's nightly-rental map and its own months of supply: resolve NEEDS.md 1 before both print.
- /buyers/new-construction/ owns builders by name (never name a builder here).

## Owner questions (in facts.md)

1. The due diligence period on the current SCR contract (F24).
2. Inspection and CL-100 on every purchase, or most (F25).
3. Days from accepted offer to closing, financed and cash (F39).

None blocks a draft. The timeline is written so each answer drops into its step.
