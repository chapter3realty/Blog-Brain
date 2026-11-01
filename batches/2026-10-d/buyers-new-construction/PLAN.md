# Plan: /buyers/new-construction/

Batch 2026-10-d, Lane U. Research half, 2026-11-01. Ledger: `facts.md` (32 rows, all waiting for a verifier). Demand: `must-answer.md`. Data and scripts: website working copy `data/2026-10-d/buyers-new-construction/`.

## What the live page has

Worth keeping:
- The title tag the owner liked (`data/headlines.json`): "New Builds in Myrtle Beach: What Builders Won't Say | Chapter3". Keep it. The new page finally backs it with what builders' signs leave out (the tax jump, the per-square-foot finding, the law).
- The H1 in headlines.json: "New construction in Myrtle Beach: the defect problem nobody advertises." Keep only if the warranty-and-law section carries it. The unsourced lawsuit claims are gone, so the H1 now rests on the law (rows 12 to 14) and the inspections. Proposed alternative for the lead: "New construction in Myrtle Beach: what the price on the sign leaves out." headlines.json is shared; the lead decides and edits it.
- The topics: own agent at the first visit, incentives tied to the builder's lender, three inspections, the 1-2-10 warranty, spec against to-be-built. Each now has a verified row or an owner question.
- The BrickWood inline AfBA disclosure, word for word, if BrickWood stays named in the body. Otherwise "our preferred lender".
- Internal links: /invest/new-construction-rentals/ (keep, for investors), /buyers/programs/#afba. Add: /invest/what-is-being-built/ (permits, roads, hospitals), /buyers/property-taxes/ (calculator and how to apply for 4 percent), /buyers/cost-to-own/, /buyers/coastal-insurance/, /submarkets/carolina-forest/, /buyers/no-hoa-homes/ (for readers who find every new community has an HOA), /buyers/affordable-places-to-live/.
- No calculator, no tool, no real story and no verified number on the live page.

Must go (judge, 2026-10-31, and SWEEP):
- "the Market Common district on a spec home Air Force base" (broken sentence).
- "Construction defect complaints have been rising" and "roughly sixty defect lawsuits ... against a single national builder" (no source).
- The full lead form above the answer (2,600 px on a phone). Top offer becomes a slim bar; the full form goes once, at the end.
- "Read it before you sign", "treat that as information" (reader told to do the work).
- Label headings; the meta description at 164 characters (keep it under 155).
- The chrome sentence "including off-market homes before they hit the public sites" (SWEEP). A rebuild with mkpage takes the new sentence from its donor.
- Five calls to action. Two offers: a slim bar near the top and the box at the end, one label.

## The reader and their job

A person who wants a brand-new house here, often moving from another state, who has seen a model home or a "from $299,990" sign. Job, in one verb: **decide** (is new the better buy for me, here), then **follow the steps** without getting burned. What they fear: overpaying, the builder's salesperson, defects, the surprise cost. What they ask next: do I need my own agent, can I negotiate, which inspections, what if something breaks.

## The deciding fact (checked first)

Does a new house cost more than a nearly new one for the same space in the same place? **No.** Where both are for sale within a mile, a new house lists for about the same per square foot as a house built 2016 to 2023 of similar size: the middle one about 1 percent higher, and half lower (row 5). So the choice is not about the price per foot. It is about three things the sign leaves out: the tax bill that jumps in the second year (rows 24 to 28), the extras a resale already has (owner question O5), and the wait (row 17).

## Unique findings (no other page has these)

1. **New costs about the same per square foot as nearly new, a mile away** (rows 5, 6). Our own matched comparison of 244 new houses against 3-to-10-year-old houses of similar size within a mile.
2. **The first tax bill is for the lot.** 81 percent of the homes builders sold in January to September 2026 still had no county building value; every one sold in late 2025 had one (row 24). The county then values the house at about the price paid (row 25). Worked example: about $290 a year on the lot, then about $1,210 on the house, as a legal residence in unincorporated Horry County; about $960 then $3,970 as a second home (row 26). Escrow catches up through the yearly review (row 28).
3. **New houses are most of what is for sale inland**: more than half in Loris, Longs, Aynor and Conway, under 1 in 5 at the beach (row 4). 1 in 3 countywide (row 1).
4. **Builders sold more than 1 in 4 homes recorded in the county** in the year to September 2026, and five builders recorded 7 of 10 of those sales (rows 9, 10).
5. **About 1 in 20 new houses for sale is in a FEMA high-risk zone**, fewer than among all houses (row 29).

## The shape

A decision guide that turns into a short process (CRAFT 3; `reports/Page shapes by kind of page.md` sections 9 and 3). The main relation is a condition ("new is the better buy if ...") and then a sequence (contract, inspections, closing, the tax bills, the warranty clocks). Not a list of places: the towns appear in one chart and one map, never as entries.

First screen on a phone: H1, byline, and the verdict in two sentences: "Often, yes. A new house here costs about the same per square foot as one built in the last ten years a mile away; what the sign leaves out is a tax bill that jumps in year two, the extras, and the wait." Then a slim offer bar. No form above the answer.

## Sections in order, with what each proves

Headings are the questions people type. The first sentence under each is the answer, with the subject named.

1. **Is a new house a better deal than a nearly new one?** Proves: about the same per square foot (rows 5, 6); lots no smaller in the same town (row 7). Decision table, 4 rows, "If this is you / Then":
   - you want to move in within a month: a nearly new resale or a finished spec home (rows 11, 17; 570 finished, 695 still being built);
   - you want to pick the plan and finishes and can wait 6 months or more: to-be-built (row 17);
   - you are buying it to rent: see /invest/new-construction-rentals/ (incentives are rare for investors, row 20);
   - you want no HOA: /buyers/no-hoa-homes/ (one line).
   Visual: chart A (new against nearly new, price per square foot, by town).
2. **Where are new homes being built here?** Proves: the inland/beach split (row 4), the scale (rows 1, 30), who builds (row 10, counts only). Visual: chart B (share of houses for sale that are new, by town) or the map; not both if they say the same thing. Prefer the map with town counts, and put chart B's numbers in the map labels. One line and a link to /invest/what-is-being-built/ for permits, roads and hospitals.
3. **What does a new house cost in Myrtle Beach?** Proves: middle price, size, lot (row 3); 1 in 5 at $300,000 or less (row 3); townhouses (row 2). The site's homes feed for new construction sits here (feeds.js puts "Live from the MLS" before the third section; check it filters to new construction, or file a NEEDS line).
4. **What the price on the sign leaves out.** Proves: the lot-only first bill (rows 22 to 25), the worked example (row 26), the 4 percent rule (row 27), the escrow catch-up (row 28). Visual: chart C (builder sales by month, part still unvalued) and a small table: year 1 (lot) against year 2 (house), legal residence and second home. Then what we do: we price the second-year bill before you sign, and we flag the 4 percent application at closing (the law lets the owner or the owner's agent apply, row 27; whether Chapter3 files it is a service claim for the owner). Link /buyers/property-taxes/ for the calculator. Lot premiums and upgrades: one line from O5, or leave out.
5. **Do I need my own agent for new construction?** Proves: the builder's salesperson works for the builder; the written agreement rule (row 18); who pays (O1); registration (O2). What we do, in our voice.
6. **Builder incentives and the builder's lender.** Proves: incentives usually come tied to the builder's lender (O3, row 20); compare full Loan Estimates (row 21). No rate, no payment, no buydown amount. AfBA disclosure inline if BrickWood is named.
7. **Spec home or to-be-built, and how long it takes.** Proves: build times (row 17); share finished and never lived in (row 11); this year's homes (row 8). Optional real story: the North Carolina clients who bought land in Longs and built (row 19), told exactly as recorded.
8. **The three inspections on a new house.** Steps: before drywall, before closing, month 11. Why: code compliance is the legal floor (row 12 note, 40-59-820(3)); our inspector looks past it. Visual: numbered steps with one photo (framing stage).
9. **What South Carolina law gives you when something is wrong.** Proves: the notice-and-cure steps (row 12), 3 years (row 14), 8 years (row 13), the warranty pattern (row 15), the license and complaints (row 16). Visual: "the clocks that start at closing", a timeline from closing: year 1 workmanship, year 2 systems, year 3 the general claim window, year 8 the outer limit, year 10 structure.
10. **FAQ** (open text): the remaining must-answers in one or two sentences each: under $300,000 (row 3), flood zone (row 29), can you negotiate (O3), new townhomes (row 2), who builds here (row 10), license lookup (row 16), how long is the warranty (row 15).
11. **Bottom offer** (the one form). "Tour new builds with your own agent. We compare the house you like with the nearly new houses for sale within a mile, and price its second-year tax bill, before you sign." One label throughout: "Set up my builder tour" (the live label) or "Compare a new build" (lead decides).

Sources line: county deed index and parcel layer (read by Chapter3, method in one line), the CRM listings in aggregate, Census ACS and Survey of Construction, the 2026 levy, SC Code titles 12, 15 and 40, LLR, CFPB, NAR, StrucSure. Not legal or tax advice.

## Visuals

- Chart A, `chart-new-vs-nearly-new.json`: paired dots per town, price per square foot, new against built 2016-2023 (towns with 10 or more of each; drop Loris and Aynor from the sentence, keep in the chart only if the writer marks them "few"). Caption: the matched-within-a-mile result.
- Chart B, `chart-share-by-town.json`: bar of the share new, by town, 10 towns. Or fold into the map labels.
- Chart C, `chart-tax-lag.json`: 12 monthly bars, builder sales, the part with no county building value shaded. Caption: "Homes builders sold in 2026 are still taxed as lots."
- Map: `tools/area-map.js` with the towns of chart B labeled by count of new houses for sale. If the writer wants dots, use listing points rounded to about 100 m, no addresses (as the first-time-buyer page did), from `raw/listings.json` set `new_house`.
- Table: the tax worked example (row 26), 2 rows by 2 columns.
- Timeline: the clocks after closing (rows 13 to 15). `tools/illustrations.js` or numbered steps in the glass style.
- Steps: the three inspections.
- Style: glass (`tools/glass.js`), as the bar pages.

## Photos

Stand-ins with a free licence (check each at full size, and add a licence record that `tools/photos.js` accepts; caption as framing, not as a local place):
- "New construction framing and sheathing underway" by Kgacs, CC BY-SA 4.0, 1952 x 1464: https://commons.wikimedia.org/wiki/File:New_construction_framing_and_sheathing_underway.jpg (a house at the framing stage; for the pre-drywall step).
- "Wood-framed house" by Jaksmata, CC BY-SA 3.0, 1083 x 546, a house under construction in Katy, Texas: https://commons.wikimedia.org/wiki/File:Wood-framed_house.jpg (smaller; second choice).
- More may be in Commons "Category:Houses under construction in the United States"; the Commons API rate-limited this session after two searches.
- Never a builder's photo, a listing photo, a model-home photo or a builder sign.

## Shot list for the photo partner (`templates/photo-request-email.md`)

As much as the page needs, in order of use:
1. A house at the framing stage in a current Horry County subdivision, with wiring and plumbing visible through open walls. No builder sign, logo or people. (Inspection step 1.)
2. The same kind of house with drywall up or near finished, from the street. (Inspection step 2, or the spec-home section.)
3. A finished new street in Carolina Forest, and one in Longs or Conway, showing lot sizes and the street trees (or lack of them). (Where new homes are; the extras a resale already has.)
4. A close detail of window flashing or a siding joint on a new house. (The law section: the defects people find.)
5. A lot cleared and staked, before the slab. (The to-be-built path, and the "first tax bill is for the lot" section.)
6. A side-by-side pair if possible: a new house and a 5-to-10-year-old house on nearby streets, same angle. (Section 1.)

## Notes for the writer

- One value per fact across the page: "about 1 in 3", "about $370,000", "about 1 percent", "81 percent", "about $290 then about $1,210".
- Say what it means: "your first tax bill is on the lot", not "MarketImprv 0".
- Builders are named only in the count sentence (row 10) and nowhere with a judgment.
- Devin Day may stay in the byline only. No "Talk to Devin". Tim Nash: no quotes.
- No rate, payment, down payment or buydown amount. No sold MLS data. No value for any address.
- Fair housing: describe towns by what is for sale and what it costs, never by who lives there.
