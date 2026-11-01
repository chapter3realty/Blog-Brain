# Plan: /buyers/undisclosed-flooding/

Batch 2026-10-d, Lane U. Researcher's plan for the writer. Facts: `facts.md` (36 rows; use `verified` rows only). Demand: `must-answer.md`. Data and map layers: `<website>/data/2026-10-d/buyers-undisclosed-flooding/`.

## The reader and the job

A buyer with a house in mind in Horry County who typed "has this house flooded before" or "does the seller have to disclose flooding". They know there is a flood map. They do not know that the seller's form only covers the seller's own years, that FEMA and the insurance claims report are locked to the owner, or that half of Florence's flood claims here were outside the high-risk zone. A smaller group already bought and suspects the seller knew.

Their job, in one verb: **check**. They want to know, before they offer, whether this house has flooded and how to find out for sure. Next questions: what does a past flood cost me, should I still buy it, and what if the seller hid it.

What they would pay an expert for: the sources only an owner can open and how to get them anyway; the local proof that the map misses floods; the clues on the street a stranger would not read (a raised house beside low ones, cleared lots); what a past flood does to the next owner's insurance.

## The deciding fact

The state form asks about flooding, flood claims, unclaimed flood repairs and federal flood aid, but only "during your ownership" (row 3). About 3 in 4 resale houses for sale in Horry County belong to owners who bought after Florence (row 34). So for most houses on the market, the form never asks about the county's worst flood. FEMA's claims and the CLUE report go only to the owner (rows 8, 9), so the buyer gets them by asking the seller. This is the page's spine.

## What the live page has worth keeping

- The headline the owner liked (`data/headlines.json`): title "Did This Myrtle Beach House Flood? How to Find Out | Chapter3", H1 "Did the house flood before? / How to find out in Myrtle Beach." Keep the H1. The title should also carry "Horry County" or "South Carolina" and "flood history" if it fits (search words: "flood history", "flooded before", "disclose flooding"). Writer's call; the owner liked this one.
- The core idea: a flood zone is not a flood history. Keep it, now with local proof (rows 18 to 22, 32, 36).
- The four check areas (seller's disclosure and claims, physical clues, the neighborhood, permits). Keep them as the numbered checks, corrected (rows 8, 9, 15, 16, 17, 24).
- Internal links that stay: /buyers/condo-in-litigation/ (the "we dig before you offer" sibling), /why-chapter-3/ (only if the sentence beside it is true), /contact/. Add: /buyers/coastal-insurance/ (owns flood insurance cost and the "Zone X" myth), /buyers/relocating/hurricanes/ (owns storm history), /sell/home-value/ (owns the flood-line price finding), /buyers/waterfront-homes/.
- Nothing else on the page is a verified number, a calculator or a real story.

Must go (judge's problems and SWEEP.md "For the other helpers"):
- The unsourced story (not in `stories/stories.json`). Cut until the owner confirms (PROPOSED.md).
- "Most agents do not check" and "our building study surfaces exactly this": no source.
- "A CLUE report can show prior water/flood claims" with no word that only the owner can order it.
- The burst-pipe example (not a flood for the form or for flood insurance).
- The old listing-search sentence in the chrome ("including off-market homes before they hit the public sites"): a page rebuilt with mkpage gets the new sentence from its donor; check it is gone.
- "Talk to Devin" or any CTA naming a person.

## The shape

A how-to with a law explainer inside (CRAFT 3: "Follow the steps" plus "Know if a rule applies"). Main relation: **sequence** (the checks, in the order we run them), with a **condition** (who can get each source). Lead with the short answer and how many checks; the visual that does the work is the numbered checks, each with who can open the source. Then the local proof, in one chart and one map.

Wrong-shape test: not a checklist page (the order matters: the seller's reports must be asked for in the offer, before the option period runs out), not a market-data page (the numbers prove the "why", they are not the subject), not a law page (the law is one section; the reader came to check a house).

Phone top: H1, byline, the short answer (2 or 3 sentences), then a row of three key facts. The first offer is a slim bar, not the full box (CRAFT 3, "Measure the top").

## Sections, in order, and what each proves

1. **Short answer (no heading, first screen).** "You find a house's flood history in three places: the seller's own records, which only the seller can pull; the county's records, which we pull; and the house and street themselves. The seller's disclosure form only covers the years the seller owned it." Rows 3, 8, 9, 14 to 16. Key facts row (three tiles, from data): "About 3 in 4 houses for sale were bought after Florence" (row 34); "Half of Florence's flood claims were outside the high-risk zone" (row 20); "About 1 in 7 homes here has flood insurance" (row 23, with its group limit).
2. **What the seller must tell you, and the gap (H2: "Does a seller have to disclose flooding in South Carolina?").** First sentence answers: yes, on the state form, for the seller's own years. The six flood questions in a table (V1) with a column "Covers years before the seller bought?" Then "No Representation" in plain words (row 4), the sales with no form (row 5), and the deciding finding (row 34). Proves: the form is necessary and not enough.
3. **The checks we run before you offer (H2: "How do you find out if a house has flooded before?").** Numbered steps (V2), each with what it shows, who can get it, and what it misses:
   1. Ask the seller, in the offer, for the house's FEMA flood claim history and its CLUE report. Only the owner can get them (rows 8, 9). Claims follow the address and can raise the next owner's premium (row 10).
   2. Put the house on two maps: FEMA's high-risk zone and the county's Florence flood map (rows 14, 26, 32). The map (V4) shows the difference.
   3. Ask the county's floodplain staff whether the property has flooded, and pull its elevation certificate (row 15).
   4. Look for permits behind any repair; over $500 needs one in the unincorporated county (row 16).
   5. Read the house and the street: does water stand by the walls, are the ditches clear (row 17); is one house raised above its neighbors (row 24); are there cleared lots where houses were (rows 11, 12).
   Each step says what we do ("We put every house we show on both maps"), never "you should check" (CRAFT 5, "We do the work"). Steps 1 and 3 are things we ask for on the buyer's behalf.
4. **Why the flood map is not the answer here (H2: "Can a house flood if it is not in a flood zone?").** First sentence: yes, and here it is common in rain and river floods. Chart V3 (share of paid claims outside the zone, by storm, row 36), then Florence in one paragraph (rows 20, 21) with photo P1, then the map V4 and the count (row 32: 8 to 12 square miles and about 400 houses well inside land Florence flooded outside FEMA's current zone, about 700 counting the edges; use the conservative figure first). One line on the listings today (row 33), in aggregate only. Close with why a clean claim history proves little: 1 in 7 insured (row 23).
5. **What a past flood means for the next owner (H2: "Should you buy a house that flooded?").** Usually yes, if three things are true: it was repaired with permits, it is raised or the risk is known, and you have priced the flood insurance. Rows 10, 24, 25, 7, 31. Insurance cost is one line plus a link to /buyers/coastal-insurance/ (that page owns it). Never a premium or payment amount.
6. **The empty lots (H3 inside section 5, or its own short H2 "Why are there empty lots on some streets?").** Buyouts in Socastee and Conway (rows 11, 12), with photo P3 if the partner gets it. Short.
7. **If you think the seller hid it (H2: "What if the seller did not disclose flooding?").** The law in three lines (rows 6, 30), the agent's duty (row 28), where complaints go and where they do not (row 29), the time limit only in the limited form (row 35), then: talk to a South Carolina real estate attorney. Not legal advice; say so once, plainly.
8. **FAQ (open text).** Five questions from the suggestions, each answered in its first sentence, each a fact from a verified row: "Can I get a CLUE report on a house I want to buy?" (row 9); "Can I see FEMA flood claims by address?" (row 8); "Does a seller have to disclose flooding in South Carolina?" (rows 3, 4); "Does Zone X mean the house never flooded?" (rows 18, 20); "What is a severe repetitive loss property?" (row 10).
9. **Offer (the page's gap).** One box, once near the top as a slim bar and once at the end: "Have us check a house's flood history before you offer." One sentence: "We put it on FEMA's map and the county's Florence map, check the permits and the county's flood records, and ask the seller for the two reports only an owner can get." Button: "Check a house". Links to /contact/ with the page named.

Story: the live story is cut (PROPOSED.md). A labelled example may replace it, built only from rows 3, 8, 14 and 34, in the present tense, 4 to 6 sentences, passing `voice/STORY-SIMPLE.md`: a buyer likes a house near the river; the seller bought it after Florence and answers "No" to the flood question; the county's Florence map shows the lot was under water; we ask the seller for the FEMA claim history before the offer. Retell: "The form said no flood, because the seller did not own it then; the county's map said otherwise." Label it as an example.

## Visuals (each carries a fact in the sentence beside it)

- **V1. Table: the six flood questions on the seller's form.** Columns: the question in plain words; covers the years before the seller bought? (No for Q20, 25, 26, 27; "asks about now" for Q23, 24). Built from row 3. On a phone, cards.
- **V2. Numbered steps** (section 3), five steps, each with an icon chip and a "who can get it" tag: "Only the seller" / "Public: we pull it" / "On the street". Glass style.
- **V3. Bar chart: share of paid flood claims outside FEMA's high-risk zone, by storm.** Hugo 9, Ian 5, Isaias 2, Matthew 20, Floyd 37, Florence 45, October 2015 rains 51 (percent). Group the bars: surge storms vs rain and river floods, with the number of paid claims under each bar. Data: `claims-findings.json` "events", never typed. Title says the one point: "Rain and river floods reach past the map." `G.bars` from glass.js fits; check the dataviz rules.
- **V4. Map: where Florence's water went outside FEMA's zone.** Our own static map from `map-county.geojson`, `map-sfha.geojson` (light fill), `map-sfz.geojson` and `map-sfz-outside-sfha-core.geojson` (strong fill; the edge strips are left out so the map shows the 400-house figure, not map noise), labeled with Conway, Longs, Loris, Socastee and Myrtle Beach for orientation, placed from real coordinates. Short and wide on a phone. No listing dots and no house dots. If `area-map.js` cannot draw polygons from a geojson, note it in NEEDS.md and draw the SVG inside the spec.
- **V5. Key facts row** (three tiles, section 1), values from the JSON files.
- No calculator. No tract map: the claims file mixes 2010 and 2020 tract codes, so a tract map would drop claims or need both outlines (`raw/tracts-horry*.json` are there if the writer wants it later).

## Photos

Free-licence candidates, all public domain (U.S. National Guard photos, Senior Master Sgt. Edward Snyder, 169th Fighter Wing; Commons credit "SC National Guard"). All taken in the Conway area as the Waccamaw rose after Florence. Look at each at full size before use; crop out any person who becomes the subject; check no readable house number or plate.

- **P1.** Flooded street of houses, water up to the yards and road signs (File:Hurricane_Florence_-_South_Carolina_National_Guard_Responds_(44200296354).jpg, https://commons.wikimedia.org/wiki/File:Hurricane_Florence_-_South_Carolina_National_Guard_Responds_(44200296354).jpg, 3600 x 2400, public domain). For section 4, beside the Florence paragraph. Caption states only what the source says: "Florence's floodwater in a Conway-area neighborhood as the Waccamaw River rose." Do not name a street or say whether these homes were in a flood zone.
- **P1 alternate.** Same street, wider (…(44200296434).jpg), public domain.
- **P2.** US 501 lined with sandbag barriers, floodwater on the land beside it (…(29983782957).jpg, public domain). Optional, for the "river floods reach past the map" point. Do not stack with P1; use one.
- **Not used:** (44200295024) shows a business sign as a main subject; (44200290334) is a river view that says less than P1.
- New files only under `chapter3realty/images/2026-10-d/buyers-undisclosed-flooding/`, with a licence record `tools/photos.js` accepts.

## Photo partner's shot list (`templates/photo-request-email.md`)

For /buyers/undisclosed-flooding/. Each photo must show the thing named, from a public road, wide, landscape, no faces, no readable house numbers or plates, no sign as the subject.

1. **Most wanted.** A house raised on pilings or a tall foundation next to an older house at ground level on the same street, in one frame. Socastee near the Intracoastal Waterway, Bucksport, or the river side of Conway. Purpose: the 50 percent rule clue (row 24).
2. **Most wanted.** A street with grassy cleared lots between houses in the Socastee buyout area (the Rosewood area behind Socastee High School, near the Waterway), taken only where the county or the state has a sign or the lots are plainly cleared. Purpose: the buyout clue (row 11). Tell us which street, so we can confirm with the county before we caption it.
3. A roadside drainage ditch or a neighborhood pond after a heavy rain, water high in the ditch, a house in the background. Purpose: the drainage checks (row 17).
4. The Waccamaw River at the Conway Riverwalk at normal level, wide, with the river gauge or a bridge in the frame if possible. Purpose: to pair with the record crest (row 21).
5. Only with the owner's written permission, from a home we are showing: a water line or staining low on a brick foundation; new drywall or new baseboards only at the bottom of a wall. Purpose: the physical signs (Not verified 2). Do not take these without permission from the home's owner.

## Siblings and owners of facts

- /buyers/coastal-insurance/ owns flood insurance cost, Zone X insurance, the CRS discount and "more than 1 in 4 flood claims come from outside the high-risk zones" (national). This page gives Horry County's own share (rows 18 to 20, 36) and links there for cost. The two figures describe different groups; say "here" or "in Horry County" every time.
- /buyers/relocating/hurricanes/ owns storm history. This page names Matthew and Florence only for what they did to houses and flood claims.
- /sell/home-value/ (this batch) owns the flood-line price finding ("houses inside the line did not sell for less"). This page does not repeat it.
- /buyers/condo-in-litigation/ is the "what we dig up before you offer" sibling; one link.
- Horry County Supplemental Flood Zone: no other page uses it yet. If another batch page names it, this page owns the definition.

## Hard-rule checks for the writer

- No interest rate, no premium and no payment amount. The claim payout in row 20 is a payout, not a payment the reader makes; if it reads like a cost to the reader, cut it.
- BrickWood Mortgage is not named.
- No Tim Nash quote; no story not in `stories/stories.json`.
- No dates typed in the body or captions (storm names carry the time; "after Florence", not the year). The ledger's dates are for the verifier.
- No fair-housing words. Naming flooded subdivisions (row 21) is a fact about water, not people; write it as the NWS does, and never imply who lives there.
- Listings in aggregate only (row 33), with the CCMLS line in the sources. No dots, no addresses.
- We do the work: "We ask the seller for...", "We put the house on...". The reader is never told to go check.
- Not legal advice, said once in section 7; no telling the reader whether they have a case.
- The old search-box sentence and "Talk to Devin" must not survive (SWEEP.md).

## Questions for the owner

See PROPOSED.md: the story's source, and the list of checks our agents really run on every offer.
