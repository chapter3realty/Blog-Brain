# Plan: /hoa/rental-restrictions/ (Lane U)

Batch 2026-11-a. Researcher's plan for the builder, 2026-11-04. Facts come only from `facts.md` rows once a verifier marks them `verified`. Data and chart rows: website `data/2026-11-a/hoa-rental-restrictions/` (its `README.md`). Must-answer list: `must-answer.md`.

## What the live page has, and what to keep

The live page (about 900 words, about 500 of real information; judge total 23 of 50, `thin`) has:
- **Worth keeping:** the two-sets-of-rules idea (it becomes the spine, now with numbers); the list of rental rule forms (minimum lease, cap, waiting period, board approval, ban), which becomes the clause table; the links to `/invest/str-rules/` and `/invest/non-warrantable-condos/`; the offer "Have us check the rules before you offer" and the phone line; the FAQ questions "Can an HOA stop me renting my property?" and "What happens if the HOA adds a rental restriction after I buy?" (now with a real answer); the sources line (SCDCA report, 27-30).
- **Homes feed:** `idx-lib/feeds.js` gives this page `RENTALS_OK`, "Condos where the HOA allows rentals". It fits the reader. Keep it; no NEEDS item.
- **No** calculator, tool, chart, table or photo. `data/headlines.json` has no entry for this page. The live title "Myrtle Beach HOA Rental Restrictions | Chapter3 Realty" carries the words; the new one adds the question people type.
- **Cut:** the home-office "real file" story (not in `stories/stories.json`; owner question in `PROPOSED.md`); "the city permit you were counting on is worthless" (register); "Verified July 2026" (a typed date); "Plenty of our clients specifically want a community that enforces its standards, and those communities are often the best maintained" (no source, and "the best"); the long pets and porches paragraph (one short section replaces it, row 8).

Every judge problem is solved below: local information (rows 1 to 7, 22 to 24); the share of condos that allow nightly rentals, by area (rows 1, 7); statute cites and outbound links (rows 10 to 13, 18, 20); the amendment question answered plainly (rows 10, 13, 17, 18); tables and charts (sections 2 to 6); an H1 with the search phrase; question H2s; the register line removed; the unconfirmed story removed.

## The reader and their job

A buyer who plans to rent the home out, by the night, the season or the year, or who may move and keep it. Often from out of state; some from Florida, where a new rental ban does not bind owners who bought first. A second reader already owns and has heard the association may change its rules. They came to learn **who can say no to renting this home, and how to know before they buy.**

**Job in one verb:** decide. **Kind of page:** law or rule explainer with a decision table (CRAFT 3; Page shapes "Know if a rule applies" and "Decide"). The main relation is condition: if the city says yes and the papers say yes, you can rent. The two-gate table and the same-city chart carry it.

## The deciding fact (checked first)

**A South Carolina association can limit or ban renting if the rule is recorded and clearly worded** (rows 10 to 16). South Carolina sets no cap and no protection for owners who bought first (row 13), unlike Florida (row 18). A clear ban holds even after prices fall (row 14); an unclear one is read for the owner (row 16); a change needs the vote the papers require (row 17).

## The two findings no other site has

1. **The same city, two answers** (row 4). In North Myrtle Beach, where the city asks for no special permit, about 1 in 4 houses for sale with an HOA fee say nightly rentals are allowed, against about 6 in 10 with no HOA fee. In Carolina Forest, where the county sets no rental limit, 1 of 296 houses says so (row 5). Our count from the listing feed, in aggregate.
2. **What every kind of home says about renting** (rows 1 to 3). About 7 in 10 condos for sale say nightly rentals are allowed; about 4 in 100 houses with an HOA fee do; about 1 in 4 HOA houses do not say rentals are allowed at all.
3. Also new: a real South Carolina rental clause and what it did to owners who could not sell (rows 14, 15), and the Florida-versus-South-Carolina protection gap (row 18). And, optional, 6 of 1,527 state HOA complaints mention renting (row 25).

## Title, H1, description

- **Title tag (30 to 65 characters):** "Can an HOA Ban Rentals in SC? Myrtle Beach Rules | Chapter3" (59). Alternative: "HOA Rental Restrictions in Myrtle Beach and SC | Chapter3" (57).
- **H1:** "Can an HOA stop you from renting your home in Myrtle Beach?"
- **Hero sub-header (no we, our or us):** "Yes, if the rule is recorded and clear. How often each kind of home allows nightly rentals, and what South Carolina law lets an HOA change."
- **Description:** "South Carolina HOA rental restrictions: what an association can ban, whether it can change the rules after you buy, and how many Grand Strand homes for sale allow nightly rentals."
- **Key-facts row (icons with words), one row each:** about 7 in 10 condos for sale allow nightly rentals (1); about 4 in 100 HOA houses do (2); a rule binds only if recorded (10); no SC protection for owners who bought first (13).

## Sections, in order (each heading is a question people type)

Short answer first, under the H1, in two sentences (rows 10, 13, 2). Then the slim offer bar, then the homes feed. "On this page" list (8 sections).

1. **"Can an HOA restrict rentals in South Carolina?"** The rule in one sentence, then who, what and when: recorded papers bind (10); condos must write lease limits in the master deed (11) and owners must follow them strictly (12); no state cap or grandfather rule (13). Proves the answer is yes, and where the rule lives.
2. **"If the city allows short-term rentals, can the HOA still say no?"** The two-gate decision table (below). Then the local gates in one table of four places, each one line with a link to `/invest/str-rules/` (rows 21 to 24). Proves both must say yes. **Offer:** "Have us check both rules for one address."
3. **"Do most HOAs allow Airbnb here?"** Chart 1 (by kind of home, rows 1 to 3), then the same-city chart (rows 4 to 6), then one sentence each on what they mean. The map of city zones belongs to `/submarkets/myrtle-beach/`: one line and a link (row 6). Proves the association is the gate that closes most often, with our own numbers.
4. **"What do HOA rental restrictions look like?"** The clause table (below), then the real South Carolina clause, quoted, and what it did (row 15). Story row 28 in one line: new communities differ, so each is read. Proves the reader can recognise each rule and what it does to their plan. **Offer:** "Send us your plan: nightly, seasonal or by the year."
5. **"Can an HOA change the rental rules after you buy?"** Yes, by the route its papers set: a board rule binds from adoption and must be recorded by January 10 (10); an amendment needs the vote the papers require (17); South Carolina does not protect owners who bought first (13); Florida does (18), in a two-column table. Then the case of the owners who could not sell (row 14), told in four plain sentences. Proves the risk is real and shows how it is read. **Offer:** "Have us read the amendment rules before you offer."
6. **"Does a condo's rental setup affect the loan?"** Fannie Mae's tests (row 20), three bullets, link `/invest/condotel-financing/`. Proves the rental rule can change who can finance the unit.
7. **"What if the rule is unclear, or nobody enforced it?"** Unclear rules are read for the owner (16); past lax checks did not stop enforcement (15); the state agency does not referee (25). Proves what happens in a dispute. **Offer:** "Ask us to read the rental clause on one home."
8. **"What else can an HOA restrict?"** Short: boat and RV parking count (row 8), pets and home businesses as forms a covenant can take, with a link to `/buyers/no-hoa-homes/`. No more than about 120 words.

Then **"How we check a home before you offer"**, three numbered steps from story row 27 and rows 10, 11, 19: the zoning for the address, the recorded papers and rules, the seller's addendum answer. Then the end offer band. Then the FAQ.

**FAQ (open text, not repeating the body):** "Can an HOA ban short-term rentals but allow yearly leases?" (rows 1, 26); "Am I grandfathered if the HOA bans rentals after I buy?" (13, 18); "Does 'residential use only' ban Airbnb?" (16, said as that case's agreement); "Can an HOA make my tenant fill out an application?" (15); "What counts as a short-term rental in South Carolina?" (21); "Where can I buy and rent nightly on the Grand Strand?" (1, 7, link to the feed and `/invest/str-rules/`).

**Measure the top** (CRAFT 3): H1, byline, two-sentence answer, key-facts row and slim offer bar within the first phone screen; the homes feed below that; section 1 starts within two screens.

## Visuals

1. **Chart 1, stacked bars (100 percent), from `chart-by-type.json`:** condos; townhouses with an HOA fee; houses with an HOA fee; houses with no HOA fee. Three segments: "Nightly allowed", "Rentals allowed, not nightly", "Doesn't say rentals are allowed". Count beside each bar. Footnote from row 9. Liquid glass style (`tools/glass.js` `bars`, or the kit's chart helper).
2. **Chart 2, paired bars, "The same rules, a different answer", from `chart-by-area.json` and `findings.json`:** North Myrtle Beach HOA houses vs no-HOA houses (27/120 vs 83/133); City of Myrtle Beach the same (13/152 vs 5/47), labelled "the city's zoning decides first"; Carolina Forest HOA houses (1/296), labelled "every house has an HOA". Optional third pair: condos by area, only areas with 40 or more listings (row 7).
3. **The two-gate decision table** (a 2 by 2, phone cards):

   | | The association allows it | The association bans it |
   |---|---|---|
   | **The city or county allows it** | You can rent, under both sets of rules | You cannot rent. The association's rule still binds |
   | **The city or county bars it** | You cannot rent. The city's rule still binds | You cannot rent |

   Rows 10, 22 to 24. No facts beyond the rule.
4. **The clause table** (row 26; logic, no counts): columns "The rule", "What it says", "Nightly plan", "Seasonal plan (1 to 6 months)", "Yearly lease". Rows: ban on all renting; ban on nightly renting; minimum lease term; rental cap; waiting period; board application. Cells say "blocked", "allowed if the term fits", "may have to wait".
5. **South Carolina vs Florida table** (rows 13, 18): "A new ban binds owners who bought first?" SC condos yes, SC HOAs yes; FL condos no, FL HOAs no, except bans on rentals under 6 months or more than 3 a year.
6. **Numbered steps:** "How we check a home before you offer" (3 steps).
7. **Photos** (one at a time, each under its sentence; none above the answer). Licence to be confirmed on each file page and a record written that `tools/photos.js` accepts; look at each full size and at 390 px:
   - Section 3, oceanfront condo towers: "Myrtle Beach, North Ocean Boulevard 100420-F-4155R-021.jpg", U.S. Air Force photo, likely public domain, https://commons.wikimedia.org/wiki/File:Myrtle_Beach,_North_Ocean_Boulevard_100420-F-4155R-021.jpg . Caption by fact: "Oceanfront towers in Myrtle Beach. About 8 in 10 condos for sale in the city say nightly rentals are allowed." Avoid files siblings use (`invest-condos`: Atlantica, condo towers 2011; `submarkets-myrtle-beach` and `hoa-documents`: houses and towers from the ocean; `invest-rental-program-vs-airbnb`: Grande Shores).
   - Section 3, Carolina Forest from above: a USDA NAIP 2023 aerial of a Carolina Forest neighborhood of houses, public domain, exported from https://imagery.nationalmap.gov/arcgis/rest/services/USGSNAIPImagery/ImageServer as the Garden City record does (`data/2026-11-a/submarkets-garden-city/photos.json`). Label only roads, from map data. Caption: "Houses in Carolina Forest from above. Every house for sale here has an HOA fee, and 1 of 296 says nightly rentals are allowed." Do not name a subdivision in the caption (a picture is a claim).
   - Commons was rate-limited (HTTP 429) during research, so no file page was opened. The builder opens each one first.

## Links

Up: `/hoa/` hub. Across, each in a sentence that says what it answers: `/invest/str-rules/` (rules by town), `/submarkets/myrtle-beach/` (the city zone map), `/hoa/documents/` (reading the papers, the seller's addendum), `/invest/condotel-financing/` and `/invest/non-warrantable-condos/` (loans), `/invest/str-vs-ltr/` (nightly or yearly), `/buyers/no-hoa-homes/` (boats and fewer rules). Outbound: scstatehouse.gov 27-30 and 27-31, the three sccourts.org opinions, the Florida statutes, Fannie Mae B4-2.1-03, the city and county pages from rows 22 to 24.

## Sibling owners (no repeats)

- Rules by town, tax rates: `/invest/str-rules/`. Here: one table line per place.
- Zone counts and map in Myrtle Beach: `/submarkets/myrtle-beach/`. Here: one line (row 6).
- The seller's addendum and how to get the papers: `/hoa/documents/`. Here: one line (row 19).
- Loans on condotels: `/invest/condotel-financing/`. Here: the three Fannie tests only.
- Condo shares from the invest-condos page ("about 7 in 10 condos say they allow it"): same figure family. This page's row 1 is today's pull (1,904 of 2,673); `specs/condos.js` printed 7 in 10 from 1,895 of 2,656. Same rounded value; keep "about 7 in 10".

## Writing notes for the builder

- No sentence over 28 words; none opens with "So"; no "Here is"; the hero sub-header has no we, our or us; buttons to /contact/ are requests ("Have us ...", "Send us ...", "Ask us ...").
- Never "safe", "the best", "family-friendly", "exclusive". The Spur opinion states the rule's purpose with a banned word; never quote that line.
- Name the court cases in the sources line and in a link, never the owners. Say "a Columbia condo" and "a Hilton Head house".
- The listing counts are what listings say, not recorded rules: "say nightly rentals are allowed", "do not say rentals are allowed". Never "ban" from a listing row.
- We do the checking: "We read the master deed and the rules", never "check the master deed".
- No interest rate or payment amount. BrickWood is not needed on this page.

## Photo partner's shot list

Also in `shot-list.md`.
