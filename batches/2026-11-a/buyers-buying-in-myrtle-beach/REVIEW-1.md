# Review round 1: /buyers/buying-in-myrtle-beach/

Fixer, 2026-11-04. Every change is in the spec (`specs/buying-in-myrtle-beach.js`). New facts are rows F1 to F6 in facts.md, marked VERIFIED-BY-FIXER. Shared problems are NEEDS.md items 13 to 17.

## Gates after the fixes

- score.js: 99/100 (SEO 100, AEO 100, Human 98, Trust 100). P2 (numbers per 100 words) is 60 percent: the page is a market count.
- claims-scan: 0 findings. facts-check: 0 on this page. house-claims: 0. photos.js check: all records pass.
- build.js check: OK. build.js audit: only the date lines, which the lead's `node build.js dates` sets, and the A20 warning (no Tim Nash quote; we never write one).
- critic.mjs at 320, 390, 768, 1024, 1440: 1 blocking, the shared header at 1024 (NEEDS 14). Before: 6 blocking.
- Looked at crops of the hero tiles, the chart, the town table at 320, step 8, the risk grid at 1440, the cost chart and the closing box at 390 and 1440 (scratchpad wf2/buyers-buying-in-myrtle-beach/fix1/look/).

## Critic

Blocking:
- **Town table spills at 320.** Fixed. At 420 px and under the table uses fixed columns (town 35 percent), the supply line wraps under its dot, and the headers are smaller. Page width at 320 is 320.
- **Closing box unreadable.** Fixed on this page. Cause: the "Just listed" strip is added inside `<main>` after the box at run time, so glass.js's compact rule (`:not(:last-child)`) turns the box into a light bar with ivory text. The spec now gives the last navy band its dark panel back. Shared fix proposed in NEEDS 13.
- **Header 1029 px at 1024.** Shared; not fixable in the spec. NEEDS 14.
- **7.2 drawn as balanced.** Fixed. A group past 7 in all but not on resales prints "about 7", which the "Balanced (5 to 7)" key covers. The shading and the fourth key entry are gone.
- **County figures labelled "Myrtle Beach".** Fixed. The short answer opens "Across Horry County, the Myrtle Beach area"; the hero tiles say "Time to sell, county condos/houses"; the chart caption and figcaption name Horry County; the FAQ says "across Horry County". The short answer now also gives the city's figure (condos about a year).
- **"4 / percent" split in step 8.** Fixed with a non-breaking space.

Nits taken:
- Insurance card: "The middle owner of a one-family house here pays about $2,000 a year".
- Cost chart note: "Dollars a year if you live in it: ...".
- Hero tile: "Homes with a price cut / over half".
- "Housing researchers count 5 to 7 months as balanced in a local market."
- Garden City: "has the most supply of houses".
- Photo caption with no ledger row ("about 3 in 4 homes for sale are condos"): cut.
- "In 2025 the county asked new owners to apply by May 31": cut. Step 8 says "you apply to the county after you buy", with the link to the tax guide.
- Repetition: the tax figures are now in step 8 (outside the cities) and the FAQ (inside the city) only; the card points to step 8. The closing-time paragraph is gone. The FAQ no longer copies the body.
- Right edges at 1440: the risk grid, offer boxes, stat tiles and cost chart are all 760 px wide, as the figures and steps are. Cards are paired by length.
- Carolina Forest aerial: replaced (see owner nits).

Not changed:
- "Just listed" strip with no homes in the preview: shared widget and preview data, not the page.
- read.wall on the last FAQ answer at 320: end matter, as the critic said.

## Reader

Blocking:
- **How far below asking can I offer?** Not answered with a number. The listing feed gives only the current price and no price history, so a typical cut cannot be counted (NEEDS 15). The page keeps the direction (room on condos, less on houses under $700,000) and the "Have us price one home" offer.
- **Who pays my agent?** Fixed. Step 1: "It states what your agent is paid. That fee is negotiable, and a seller may still offer to pay it." (F1, NAR.)
- **How long to close?** The non-answer is cut from the body and the FAQ (owner reviewer's second option). A number waits on owner question 3 (NEEDS 16). No unverified range was added.
- **Chart contradicts its key.** Fixed (see critic). Section 1 now says: "Condos as a whole are past 7 months; two condo price ranges sit just under 7, at the top of balanced."
- **Condo costs more than a house.** Fixed. The section now says what the fee pays for ("to run and keep up the shared building and grounds, and may pay the building's insurance", F2), that the condo costs less than half as much to buy in Myrtle Beach (F3), and "Weigh the smaller loan against the larger fee." The chart caption already says "besides the mortgage".

Nits taken:
- Tile "over half of what": now "Homes with a price cut".
- Which Myrtle Beach: scoped in the short answer, tiles, chart and FAQ.
- Old deadline: cut.
- Notary: the video sentence is cut; step 6 says "before a notary where you live, with two witnesses". Whether another state's video notary is accepted is not verified (NEEDS 17).
- Step 3: "The contract can say otherwise" and "one to four units" are cut; "The seller of most resale houses must give you the state's disclosure form before you sign."
- Words: MLS cut; "reconsideration of value" now "a request to look at the value again"; Fannie Mae explained ("which backs many ordinary home loans ... Buyers there need a different loan or cash"); "months of supply" explained before use in the short answer ("would take about 7.5 months to sell"); "house price index" now "a federal index of Horry County house prices"; Loan Estimate and Closing Disclosure each get a plain meaning.
- Too many numbers: the house cost line now gives the total, the monthly figure and the two biggest parts; the recording fees and deed-fee rate are cut; step 8 has two amounts.
- HOA on every house: the house line no longer lists the HOA fee.
- Carolina Forest "$172,000 / Too few sales": a town with no supply count now shows only "Too few sales".
- Flood insurance cost: added, "For a house you live in there, a federal flood policy cost a middle of about $1,070 a year" (F4).

Not changed:
- "5 to 6 months" for city houses: the verifier set a range (row 8: 65 condo-hotel units sit in the city's house group). Explaining it on the page would add the technical detail the owner asked us to cut.
- How many oceanfront buildings run like hotels: no verified count. The card links the condotel loan guide.
- Forestbrook, Socastee and Red Hill have no guide pages to link.
- "Updated June 12" date: the lead's `build.js dates` sets it.

## Owner

Blocking:
- **Closing-time question with no answer.** Cut from body and FAQ.
- **Repetition.** Price cut: hero tile and section 1 only. Signing from another state: step 2 (e-signature) and step 6 (notary) only; cut from the offer box and the out-of-state section. FAQ: six entries, one or two lines each; none copies the body. The seasonal entry and the closing-time entry are cut. The out-of-state paragraph no longer repeats the two counts in the tiles under it.
- **Steps too long and technical.** Cut: the trust account, recording fees, the appraisal-at-closing waiver, the disclosure-law wording, who may issue a CL-100 (kept as its own FAQ, which the body no longer repeats), the MLS rule, the notary law, the $3.70 deed-fee rate. Each step says what happens and what we do.
- **Hero tile reads as "cut in half".** Now "Homes with a price cut / over half".
- **Chart and its legend.** "about 7" in the balanced colour; the fourth key entry and the shading are gone.
- **Words a first-time buyer does not know.** See reader nits; "most mortgages require flood insurance" (F5); the short answer explains months of supply as time to sell.
- **Too many dates.** The copy keeps "the past year" and "the latest year". The deed months, the index years and the Census year are in the sources line. "In 2025 ... May 31" and "the 2026 tax" are gone.
- **Thirteen "Our X guide covers" sentences.** Now none. Links are folded into the sentence that states the fact: New homes, House prices, costs more to own each year, apply to the county, moved into Horry County, past flooding, home insurance, short-term rental, different loan, ten costliest buyer mistakes, What the buyer pays at closing. Cut: "Each town's guide ...", "Our market reports ...", the condo investing link and the condo litigation link. The condotel card now has its own "we" line.

Nits taken:
- **Story.** `low-appraisal-reconsideration` is now its own card in "What can go wrong", in the story's words with no detail added: "When one comes in low, we send comparable sales with a request to look at the value again. Once, the value changed and the borrower brought less to closing."
- **Same aerial as /buyers/cost-to-own/.** Replaced with a new frame from the same public-domain NOAA tile (pixels 0-1440 x 3000-4080, no overlap with the three pages that use that tile). Looked at full size: houses around two ponds, a shared pool and woods; no readable person, plate or number. All corners inside the Carolina Forest outline. Record and metadata pass photos.js (F6).
- Final offer box: confirmed it was not a fade-in; fixed (critic item 2).

Not changed:
- Two values for city condo supply (about a year here, about 18 months on /submarkets/myrtle-beach/): NEEDS 1, the lead decides.
- headlines.json and the H1: NEEDS 4 and 8, the lead decides.
- "Just listed" strip: shared widget.
- "5 to 6 months": see reader.
