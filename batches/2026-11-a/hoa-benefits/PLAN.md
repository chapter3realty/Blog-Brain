# PLAN: /hoa/benefits/ (Lane U, batch 2026-11-a)

Spec to write: `specs/hoa-benefits.js` (the live page has no spec; it is hand-made, so the spec replaces it). Data: `data/2026-11-a/hoa-benefits/` (chart and table files, `findings.json`). Ledger: `facts.md` here. Must-answers: `must-answer.md` here.

## What the live page has worth keeping

- **The H1 question**, "Are HOA fees worth it on the Grand Strand?". It matches the top suggestion. Keep it. No owner-liked headline exists for this URL in `data/headlines.json`.
- **The useful lines the judge said were buried**: the per-unit deductible up to $50,000 (now row 21, with the Fannie Mae limit stated correctly), no cap on dues or fines (row 17), the closing charges (link to /hoa/estoppel-and-transfer-fees/, which owns them), and the reserve-study explanation (row 22 and a link to /hoa/reserves/).
- **The "test the association" checklist** (shared costs, funded reserves and a study, rules that fit your life, owners in control). Keep it as "What we check before you offer", in our voice.
- **The FAQ questions** (worth it, insurance, tax, raising fees, not paying). Keep the questions; rewrite the answers from verified rows.
- **Internal links** to all 15 HOA guide pages, /buyers/no-hoa-homes/ and /buyers/cost-to-own/. Keep every target, but in sentences or with link text that says what each answers (the judge: "Read more" fifteen times).
- **The homes feed** (`idx-lib/feeds.js` maps /hoa/benefits/ to AMENITIES). Keep it; it fits a page about what the fee buys.
- No calculator, tool, story or verified number on the live page needs carrying over as is.

**What must not come back:** "Forty eight hours ... is the floor" (breaks registry `hoa-48-hour-notice`); "no hearing is required" (statutes are silent; bylaws may require one); "Ask for the current insurance certificate", "Check that they were", "Ask early", "Ask them for both" (the reader is told to do our work; CRAFT "we do the work"); "Lenders allow that per unit deductible to run as high as $50,000" (Fannie Mae only; row 21).

## The reader and their job

A buyer looking at one listing with a fee, often from up north, who has never paid a condo fee of $640 a month, or a house buyer who sees $95 and wonders what it buys. Some own a boat or a work truck. Job, in one verb: **decide**. Is this fee worth it for my kind of home and my plan, and what could it cost me later?

They know nothing of SC law, "regime", "master policy" or "reserve study". They are worried about paying for things they will not use, a surprise bill, and rules that stop them parking the boat. Next they will ask: which homes have no fee, and can you read this building's papers for me.

## The deciding fact

Whether the fee buys things the owner would otherwise pay for, by kind of home. Confirmed first: the CRM listing fields say what each fee includes (rows 1, 3, 4), and the main thing a house fee buys, a pool and gym, has published public prices (row 13).

## Unique findings (no other site has these)

1. **Houses with an HOA fee do not list for more here.** In 12 of 13 Horry County ZIP codes, houses with a fee list for less per square foot than houses without one, by a middle of 17 percent; among houses built since 2000, $204 against $272 a square foot. The gap holds at every distance from the beach, and the no-fee house sits on more land in every band (rows 9 to 11). The one national study found the opposite, a 4 percent premium (row 7). This answers "do HOAs increase property value?" with local evidence nobody has published.
2. **Since 2010, about 8 in 10 houses for sale come with a fee; before 1980, 4 in 100.** Between 3 and 10 miles from the beach, 97 in 100 newer houses have one (rows 6, 12). The national figure is about 60 percent of recently built houses (row 7).
3. **What a $95 house fee buys, priced against the city's own pool and gym.** A year of the fee is about $1,140; a city recreation center pass is $175 to $295 for one adult in Myrtle Beach, and $555 to $805 a year in North Myrtle Beach (row 13). Only 2 in 100 fee houses list RV or boat parking, against 25 in 100 without a fee (row 8).
4. **What Horry County owners complain to the state about.** The top complaint in 416 filings (2022 to 2025) is that the HOA did not follow or enforce its own rules (36 in 100), then repairs (30). The rule people pay for is what they say they did not get (row 25).
5. **Oceanfront against the rest.** The middle oceanfront condo fee is about $920 a month, the rest about $515, and the oceanfront fee covers electricity in 58 in 100 listings (rows 2, 4).

## The page shape

**Decision guide** (CRAFT 3; `reports/Page shapes by kind of page.md` section 9). Lead with the verdict and its conditions; then a decision table; then one section per condition in order of how often it decides the case; costs side by side; what goes wrong; next steps. Good news before bad inside each section.

Title tag (30 to 65 characters, search words first): **"Are HOA Fees Worth It? Myrtle Beach Pros, Cons and Costs | Chapter3"** (68 with the suffix; if the build counts the suffix, use "Are HOA Fees Worth It? Myrtle Beach Pros and Cons | Chapter3"). H1: keep "Are HOA fees worth it on the Grand Strand?". Description: the verdict sentence with $640 and $95.

Hero sub-header (no we, our or us): "Usually yes for a condo. For a house, only if you will use the pool and want the rules." 

## Sections in order, and what each proves

0. **Short answer, first two sentences** (A3): "Usually yes for a condo, because the fee pays for the building's insurance, water, trash and upkeep that you could not buy alone. For a house, the typical fee of about $95 a month mostly buys a pool, a clubhouse and the rules, so it is worth it only if you want those." Rows 1, 3, 19. Then a small key-facts row: $640 condo, $95 house, 8 in 10 newer houses have a fee, no state cap on dues. Slim offer bar.

1. **"Is an HOA worth it for your kind of home?" (the decision table).** "If you are ... / Then ... / Why". Rows:
   - buying a condo to live in or rent: usually worth it, and almost no condo is sold without one (1 of 2,832 lists no fee, row 2); the question is which building (section 6);
   - buying a second home you will leave empty: usually worth it, the lawn and the outside are handled (row 3);
   - buying a house and you will use the pool: worth it for scale against $175 to $805 a year at a city pool (row 13);
   - own a boat, an RV or a work truck: usually not; 2 in 100 fee houses list RV or boat parking (row 8); link /buyers/no-hoa-homes/;
   - want land: usually not; newer fee houses sit on about a fifth of an acre, no-fee houses on about half an acre (row 9);
   - want an older house near the beach: most have no fee; under a mile from the beach, 6 in 10 newer houses for sale have none (row 12).
   On a phone, the table becomes cards (one per row).

2. **"What do HOA fees pay for here?"** Proves the fee is not one thing. Table by kind of home (condo, townhouse, house): typical fee, a year of it, then the share whose fee includes insurance, water and sewer, trash, lawn, internet, amenities, a gate (rows 1, 3). One line: a condo fee and a house fee cannot be compared as numbers. Words readers use: "HOA dues", "condo fees", "amenities".

3. **"Why are condo fees so high in Myrtle Beach?"** Proves the money buys the building. Oceanfront $920 against $515 (row 2); oceanfront fees carry internet and power more often (row 4); the association must insure the building (row 19); a house owner pays a roof alone, about $10,400 (row 5). Answer "Is $500 too high?" here: 69 in 100 condos for sale list more (row 2). Photo 1. **Mid offer:** "Have us read this building's fee and what it covers."

4. **"What does a $95 house fee buy?"** Proves the house fee is mostly amenities. 59 in 100 list a pool, 42 a clubhouse (row 8). Chart 1: a year of the fee against a year at a public pool and gym (row 13), labelled "for scale": an HOA pool is usually outdoor. Photo 2.

5. **"Do HOAs increase property value here?"** The surprise. Chart 2: price per square foot with and without a fee, by distance from the beach, with lot size beside each bar (row 10). Then ZIP by ZIP (row 11), then the national study (row 7). Say what it means: the fee does not show up in the asking price here; land and location do. Never "the HOA lowers value" (no cause is shown). Method in the sources line: asking prices of houses for sale, Horry County ZIP codes. **Mid offer:** "Ask us for houses with no HOA fee where you want to live."

6. **"Can you avoid an HOA?"** Proves the choice is shrinking. Chart 3: share with a fee by year built (row 6), and the 3-to-10-mile line (row 12). You cannot opt out of a recorded HOA (row 14). The story `ny-buyer-rules-fit` in one or two sentences: the mistake we see most from buyers moving from up north is not checking that the rules fit how they live: boats, golf carts, rentals, pools (row 26). Link /buyers/no-hoa-homes/ for the boat owner.

7. **"What goes wrong in an HOA?"** Good news first is not possible here, so lead with the most common real problem, plainly. Chart 4: what Horry County owners complained to the state about (row 25). Then the costs a low fee can hide, as a simple three-part drawing (the judge's idea): the reserve study says what should be saved, the account shows what is saved, the gap becomes a special assessment. One line on the lender's 10 percent test (row 22); links to /hoa/reserves/ and /hoa/special-assessments/. Then the deductible: a master policy may carry up to 5 percent of its coverage per storm, or $50,000 per unit, for a Fannie Mae loan (row 21); link /hoa/master-insurance-ho6/. **Mid offer:** "Send us the HOA documents. We read them before you offer."

8. **"What South Carolina law does and does not do."** A two-column table, "The law does" and "The law does not": requires the documents to be recorded to bind you (row 15); 48 hours' notice before a budget increase, except for a nonprofit HOA (row 16); budget and member list open to owners (row 24); complaints go to Consumer Affairs, which may not referee (row 18); money disputes in magistrates court (row 18); a condo must insure the building and an owner can sue to make the board follow the rules (rows 19, 20). Does not: cap dues, special assessments or fines; require a reserve study (row 17); let you opt out (row 14). "General information, not legal advice" once, in small text. Link /hoa/south-carolina-hoa-laws/.

9. **"What we check before you offer."** Numbered checklist in our voice (we do the work): the recorded declaration and rules (row 15); the budget and its reserve line (row 22); the reserve study; the insurance certificate and its deductible (row 21); recent minutes for a coming assessment; the rules on rentals, pets, boats, trucks, fences and golf carts (row 26); who runs the board (link /hoa/developer-control-turnover/); what the association charges at closing (link /hoa/estoppel-and-transfer-fees/). End band offer.

10. **FAQ** (open text, answers from rows): Are HOA fees worth it? (1, 3); Is a $500 HOA fee too high for a condo here? (2); Do HOAs increase property value? (9 to 11, 7); Can I buy a house and not join the HOA? (14); Can an HOA raise fees without telling owners? (16, 17); What happens if I do not pay? (23, link); Are HOA fees tax deductible? (link only to /hoa/tax-deductible/, which owns the answer; no claim here); Why are HOA fees so high in Myrtle Beach? (2, 4, 19).

11. **Related guides**: the HOA guide pages as a short list where the link text is the question each answers ("When can an HOA raise dues?", "What the master policy covers"). No "Read more".

Sources line: SC Code Title 27 Ch. 30 and 31; Fannie Mae Selling Guide B7-3-03 and B4-2.2-02; SC Department of Consumer Affairs HOA reports; Clarke and Freedman (2019); City of Myrtle Beach and City of North Myrtle Beach membership pages; Census AHS 2023; houses and condos for sale, counted in aggregate from the local MLS feed. Method lines (pull counts, "asking prices", "15 houses per ZIP") go here, not in the copy.

Offers: slim bar under the short answer; three mid offers (after 3, 5, 7), each different words, each a request ("Have us ...", "Ask us ...", "Send us ..."); end band. Never "Run ... for me".

## Visuals

| # | Visual | Data | Notes |
|---|---|---|---|
| Table A | Decision table (section 1) | rows 2, 8, 9, 12, 13 | cards on a phone |
| Table B | What the fee pays for, by kind of home (section 2) | `findings.json` typical_fee, includes | 3 columns + label; phone: one card per kind of home |
| Chart 1 | A year of the house fee against a year at a public pool and gym (section 4) | `chart-fee-vs-pool.json` | horizontal bars, 5 rows; the fee bar in the accent colour |
| Chart 2 | Price per square foot with and without a fee, by distance from the beach (section 5) | `chart-price-by-beach.json` | grouped horizontal bars (two per band), lot acres as text beside each pair; glass style; if `glass.js` has no grouped bars, draw it in the spec (NEEDS item 3) |
| Chart 3 | Share of houses for sale with a fee, by year built (section 6) | `chart-hoa-by-year-built.json` | 5 bars, oldest first |
| Chart 4 | What Horry owners complained to the state about (section 7) | `chart-complaints.json` | 8 horizontal bars, percent of 416 complaints; plain labels (rewrite the state's labels: "HOA did not follow or enforce its rules", "Maintenance or repairs", "Documents not provided", "How the money is spent", "The fees or a special assessment", "Not told about board actions", "No financial statements", "Board elections") |
| Table C | What SC law does and does not do (section 8) | rows 14 to 20, 24 | two columns |
| Drawing | The reserve gap in three parts: the study, the account, the bill (section 7) | no numbers | `tools/illustrations.js` style, our own drawing |
| Steps | What we check before you offer (section 9) | rows 15, 21, 22, 26 | numbered |

## Photos (all already licensed on the site; the builder looks at each at full size and at 390 px before use)

1. **Oceanfront condo towers with pool decks and walkovers** (section 3): `images/2026-11-a/invest-condos/myrtle-beach-condo-towers-2011.webp`, USGS oblique aerial, August 24, 2011, public domain, https://doi.org/10.5066/F7N877XX (licence record in `data/2026-11-a/invest-condos/photos.json`). Caption carries the fact: the fee pays for the building, its pool deck and the walkovers. Alternative from the beach: `images/2026-11-a/invest-rental-program-vs-airbnb/oceanfront-resort-from-the-beach.webp`, "The Grande Shores Resort", Philip Tellis, CC BY-SA 2.0, https://commons.wikimedia.org/wiki/File:The_Grande_Shores_Resort.jpg (record in that folder's photos.json); do not name the building in the caption with any conclusion.
2. **A neighborhood HOA pool and its activity center from above** (section 4): `images/buyers/the-farm/the-farm-pool-from-above-2026.webp`, NOAA National Geodetic Survey, January 12, 2026, public domain (record in `data/2026-10-b/photos.json`). Or Waterbridge's pool complex and clubhouse, `images/buyers/best-neighborhoods/waterbridge-from-above.webp`, USDA NAIP April 2023, public domain. Caption: what a house fee buys, the pool and clubhouse; name the place only as a place.
3. **Optional, section 5:** older streets with no HOA between Kings Highway and the beach, `images/buyers/no-hoa/myrtle-beach-older-streets-from-above.webp`, USDA NAIP 2023, public domain (record in `data/2026-10-b/photos.json`). Caption: bigger lots on older streets with no HOA. Use only if it reads at 390 px; otherwise leave the chart to carry it.

No new files are needed under `images/2026-11-a/hoa-benefits/` unless the builder draws the reserve illustration or labels a photo (then save there with a licence record that `tools/photos.js` accepts).

## Shot list for the photo partner (this page)

Send from the owner's Gmail with the group email (`templates/photo-request-email.md`). For each, no person as the subject, no readable plate, no logo as the subject.

1. **A neighborhood pool and clubhouse in a Carolina Forest or Market Common subdivision**, from the street or the parking lot, pool and building in one frame. Shows what a $95 house fee buys.
2. **A beach walkover owned by an oceanfront condo building, from the beach**, the building behind it. Shows a cost the condo fee carries.
3. **A boat on a trailer beside a house on an older street with no HOA** (Myrtle Beach between Kings Highway and Ocean Boulevard, or Socastee). Shows what the no-HOA buyer keeps.
4. **Two streets for contrast**: a new subdivision street with small lots and matching mailboxes (Carolina Forest), and an older street with larger lots (Forestbrook or the Conway side). Shows the lot-size gap behind the price finding.
5. **A grounds crew or storm cleanup on condo grounds**, the crew small in the frame. Shows upkeep the fee pays for.
6. **A posted pool rules sign at a community pool**, readable rules, no community name needed. Shows that the fee comes with rules.

## Sibling ownership (CRAFT 3, lesson B46)

- /hoa/hoa-vs-poa/ owns the typical fee by kind of home; this page reuses its $640/$275/$95 and adds the oceanfront split and the "is it worth it" test.
- /hoa/tax-deductible/ owns the tax answer: link only.
- /hoa/reserves/ and /hoa/special-assessments/ own reserves and assessments: one line and a link each.
- /hoa/liens-and-foreclosure/ owns unpaid dues: one FAQ line and a link.
- /hoa/master-insurance-ho6/ owns the policy detail: the deductible limit only here.
- /buyers/no-hoa-homes/ owns where no-HOA houses are and the town parking rules: this page links to it from the boat and land rows.
- This page owns: the price test, the share with a fee by year built and distance, the fee against a public pool, the complaint chart.

## Audit traps to avoid (brief)

No sentence over 28 words; none opens with "So"; no "Here is"; no pseudo-cleft; hero sub-header without we, our, us; buttons to /contact/ are requests; never "the best", "top-rated", "family-friendly", "safe"; never describe who lives in an HOA; never "sell for" from asking prices; never a date in the copy.
