# Review 1: /invest/strategies/small-multifamily/ (batch 2026-11-b)

Reviewer's verdict: pass=false, score 8. Five blocking items and nine nits. Fix round 1 by the writer, 2026-11-10. The spec is `specs/small-multifamily.js` in the website working copy. Copies of the spec and page before this round are in the scratchpad: `smf-fix/spec-before-r1.js` and `smf-fix/page-before-r1.html`.

## Findings declined or taken in part

- **"Price the places with the page's own sale data (the chart by distance)": taken for five of the six places, not for Windtree Estates and A Place at the River.** The North Myrtle Beach blocks, Surfside Beach and Garden City sit inside one distance band each, so the band's middle sale price is a fair price line. Tarpon Bay II is 5 miles out, in the "more than 3 miles" band ($245,000), and gets that line. Windtree Estates is 0.7 mile from the ocean. Its band ($500,000) is mostly Surfside and Myrtle Beach duplexes, while Windtree is all fourplexes with a county value for tax near $230,000. A Place at the River had no sale in the year. Printing the band beside either would mislead a buyer more than it helps. Those two are priced by the section's one county line, labelled "value for tax" and "not a sale price", the use row 14's verifier allows ("only to say where the lower-priced buildings are").
- **Critic warning read.wall at 320 px: not changed in the copy.** The reviewer read it as a false hit, since the tool does not count the h3 heading and the rule inside the span. After this round's changes the warning no longer fires at 320, 390, 1024 or 1440. For the tool lead: `tools/critic.mjs` read.wall may need to treat an h3 or h4 as a break.
- **Homes strips: not changed here.** They wait on the lead (BUILD.md: three places and `withStrips: true`). Only the three strip titles changed, to bolder ones.

Everything else was taken.

## What changed (fix round 1)

Blocking:
1. **A wow line for every place.** New rows W7 to W10 in facts.md, VERIFIED-BY-FIXER, with the measurements in `data/2026-11-b/invest-strategies-small-multifamily/wow-measures.json`. Each is read and checked by `must()` in the spec.
   - A Place at the River: "The old Little River waterfront is about a mile from A Place at the River, about 4 minutes by car. Each October, more than 200 vendors and two stages of live music set up there for Little River ShrimpFest." (Carried which-town T9; the waterfront address from the festival's page; the distance from county address points and OSRM.)
   - Tarpon Bay II: "More than 3 miles from the ocean, as here, buildings sold for about $245,000 at the middle, the least of any distance." and "The nearest beach is about 12 minutes by car." (Row 11; OSRM.) No park, landing or water lies within a walk in the county's parks layer or the Census water layer, so its draw for a buyer is the lowest price band and the short drive.
   - Windtree Estates: "From the middle of it, the beach is about a 15-minute walk. Grand Strand Medical Center, with the region's only heart surgery program, is about 6 minutes by car." (OSM foot router; carried MB row 47, the heart surgery part only; OSRM.)
   - Each entry now leads with its wow, then the counts. North Myrtle Beach, Surfside Beach and Garden City keep their verified wow lines.
2. **The county's value is no longer used as a price.** Gone: "These blocks cost the most: the county's middle value runs ...", "Ocean Terrace has the lowest county value of the beach groups ...", "The county's middle value of a building here is about $622,000", and the three per-group "county's middle value here" sentences. One county sentence stays, at the head of "Away from the old beach blocks": "The county's middle value for tax is about $230,000 to $255,000 in these groups, and about $447,000 to $685,000 in the largest beach groups. It is a figure for the tax bill, not a sale price." The places are priced with the sale bands of row 11: about $842,000 within a quarter mile (North Myrtle Beach's old blocks, whose middle buildings stand 160 to 340 yards from the ocean), about $500,000 from a quarter mile to a mile (Surfside Beach and Garden City, 0.4 to 0.6 mile), about $245,000 beyond 3 miles (Tarpon Bay II). The spec checks that each place still falls inside its band.
3. **"Where" has three offers instead of seven.** These were cut: the box "Near the beach, or lower priced away from it? ... Send me buildings in my area", the three "Ask about ..." pills, and the orphan line "In all, 362 of these buildings have a Myrtle Beach mailing address." What is left: one strip or pill for North Myrtle Beach, one for Surfside Beach and Garden City, and one for the three groups away from the beach. Those three are now ordered A Place at the River, Tarpon Bay II, Windtree Estates, so the Myrtle Beach strip follows the Myrtle Beach entry. Its pill reads "Get the duplexes and fourplexes for sale in Myrtle Beach".
4. **"Worth it" now answers with a decision.** "Yes, if you will live in one unit. You can buy it with an FHA or VA home loan. On FHA, the other units' rent can count toward your income. Your own unit can be taxed at the owner's 4 percent rate." Then: "If you will rent every unit, the whole building is taxed at 6 percent, and you borrow a smaller share of the price. Then two things count most: what each home costs, and where the building stands." The list is three local points: the price per home (row 31, the verifier's wording split in two, no 4.7 percent), the price by distance (row 11), and how rarely one sells (row 9). These were cut: "It can be.", "Good: one closing, one loan" (it repeated the steps intro), "Good: several rents" and "Hard: more tenants" (true of any town).
5. **No sentence over 28 words.** Split: the HUD-92561 sentence ("... signs HUD's form 92561. On it, the buyer promises ..."), the per-home sentence, the Garden City Pier sentence ("The Garden City Pier was rebuilt after Hurricane Hugo destroyed the old one in 1989. At its far end, the rain shelter has a bandstand and a dance floor bar."; "destroyed" is from the pier's own story page), and the Freddie Mac sentence ("... matches its top loan on a one-unit home. Freddie Mac's system must accept the loan."). A check of every sentence in `<main>` finds none over 28 words.

Nits:
- The tiger shark is gone. The North Myrtle Beach price line stands in its own paragraph.
- Map: Ocean Terrace, Ocean Pines and Garden City are now one marker, "Surfside Beach and Garden City". They share one homes strip, and as two markers Garden City lost its label and both markers showed the small true-spot dots. All five markers are labelled at 390 and 1440, with no stray dots.
- 320 px table: on a phone, the labels ("For sale", "Middle asking price") and the values no longer wrap (smaller label, no wrap). At 320 the three rows line up, and "about $840,000" stays on one line.
- "2-bedroom" uses a non-breaking hyphen.
- "We run the rent ... at no cost" is said twice now: step 2 and the "Have us run the numbers" box. Step 3 now reads "We go through the expenses and any association documents with you before you write an offer." The FHA box reads "Our affiliated lender, BrickWood Mortgage, a separate company, works out whether its rents pass FHA's test."
- Step 5 "Offer and close" now says what happens: "We write the offer with you and work with you up to closing. The seller gives you the state's disclosure form before you both sign the contract, the same form a house comes with." (R1, moved from step 3.)
- The chart note adds "Two of the 58 sales had no address point to measure." (row 11; the spec checks the count).
- Strip titles are bolder: "Live in one, rent the rest in North Myrtle Beach", "Your own beach-town rental in Surfside Beach and Garden City", and "Several rents, one closing: Myrtle Beach duplexes and fourplexes". BUILD.md is updated.
- Also fixed: "walks through the costs one building carries" now reads "lists the costs of owning one building". "Carries" is a banned verb (FIG-4).

## Gates after the fix (port 8872)

| Gate | Result |
|---|---|
| `node tools/mkpage.js specs/small-multifamily.js` | Built, 3,691 words in main, every `must()` passes |
| `SCORE_TODAY=2026-11-10 node tools/score.js --only /invest/strategies/small-multifamily/` | 99/100 (SEO 100, AEO 100, Human 97, Trust 100). No FAIL. P2 partial: 5.5 numbers per 100 words, a data page |
| `node tools/claims-scan.js <web>` | 0 findings |
| `node tools/facts-check.js <web>` | Nothing on this page (the same 4 sitewide hits on other pages) |
| `node tools/struck-check.js <struck.json> <page>` | No struck wording |
| `node tools/house-claims.js <page>` | 0 |
| `node tools/repeat-check.js <page> --strict` | Passes |
| `node tools/structure-check.js <page> --strict` | Passes |
| `node build.js check` | OK |
| `node build.js audit` | On this page, only the two date lines that `node build.js dates` sets, the 3 dates in body copy (1968, 1984, 1989, all place facts), and no Tim Nash quote (none exists; we never write one). Unchanged from the build |
| `node tools/inbound.js <web> --only /invest/strategies/small-multifamily/` | 6 referring pages |
| `node tools/critic.mjs http://localhost:8872 /invest/strategies/small-multifamily/ --widths 320,390,1024,1440` | 0 blocking, 0 warning at each width |

The shots, looked at full size, are in the scratchpad: `rb1/invest-strategies-small-multifamily/r1/shots/` (320, 390, 1024, 1440), cut into screens in `r1/cut/`, with the critic's output in `r1/critic.json`.

Not run, by instruction: `node build.js stitch`, `dates` and `llmsfull`.
