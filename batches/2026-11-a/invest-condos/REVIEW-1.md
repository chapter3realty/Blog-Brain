# Review round 1: /invest/condos/ (fix round 1, 2026-11-03)

Spec: `specs/condos.js` (version 3). New data: `data/2026-11-a/invest-condos/str-income.json` (from `str_income.py`), `photos.json` (two new USGS records). New images: `images/2026-11-a/invest-condos/north-myrtle-beach-condos-2011*`, `garden-city-condos-2011*`. New ledger rows 34 to 39, all VERIFIED-BY-FIXER for the lead to re-check.

## Critic (pass=false, 5)

| Finding | What changed |
|---|---|
| Block: page scroll at 320 px (homes search bar) | Page-only CSS in PAGE_CSS: under 360 px the bar's field and button wrap and the pills wrap. 320 px is 320 wide now. Shared fix logged in NEEDS.md. |
| Block: header phone number past 1024 px | Page-only CSS: the number text hides from 1000 to 1100 px; the phone icon stays. 1024 px is 1024 wide now. Shared fix in NEEDS.md. |
| Block: truth, "We compare the building's program with outside managers" | Cut. |
| Block: truth, checklist lines no story supports (lawsuit, the building's policy, the seller's statement) | Cut. The list is now "Five parts of a building matter most": budget and fee, savings for repairs, rental rules, the loan, the flood zone. "We" appears only where a story or row supports it: the rental-rules filter (hoa-rental-bans-filtered) and the lender check (row 19). The seller's statement is now a plain statute fact under "Can you owe the seller's HOA dues?" (row 27), with no promise from us. |
| Block: truth, 25 percent exemption not in the ledger, deadline missing, 12-37 not cited | Ledger row 34 in RTN row 5's corrected wording, with the January 31 deadline, read again in the raw 12-37 copy. On the page with what it does to the example ($5,200 falls to about $3,900 at the lowest). SC Code 12-37 added to Sources. |
| Nit: earnings section had no local number; analyzer link was long-term | New H2 "What does a Myrtle Beach condo earn?" with the typical two-bedroom's yearly take and a chart of what the average and the top-quarter rental keep after running costs, against the example condo's fee and tax (rows 35, 23). The long-term analyzer link is gone. I did not frame /invest/long-term-rental/?embed=1: it rents by the year and this section is about nightly rentals, the owner left the short-term tool out until it is reworked (VERDICTS 2026-11-03), and the web2 copy of long-term-rental has no embed mode. |
| Nit: "Why are HOA fees so high" twice, answered by neither | Body H3 renamed "What are HOA fees on a Myrtle Beach condo?"; the FAQ item is gone. |
| Nit: chart labels on the house line | "2023 high" moved above and right of its dot, clear of both lines; label halo widened to 6 px. "2006 high" sits under its dot; "2012 low" stays above its dot (below it hit the 2010 axis label). Looked at 390 and 1440. |
| Nit: 967 px wall in the yearly cost section | Split with "What does insurance add?" and "Who pays the lodging tax?"; the 72-day rule moved to the FAQ. Critic: no wall there now. |
| Nit: "legal residence" | Now "the home you live in" everywhere. "Before the 25 percent exemption" is out of the cost card; the card says "at the rental rate", and the exemption follows the tax paragraph. |
| Nit: story label | See the owner's nit below: "his real numbers, from a real story" fails build.js audit ("real X"). Label is now "His own numbers, not a promise", the wording already shipped on the relocating pages. |
| Nit: photos, alt says two towers | Alt now "Three tall oceanfront condo towers". Two more USGS 2011 aerials, each checked at full size and against county parcels and roads (photos.json). shot-list.md updated. |
| Nit: credits repeat "cropped and resized" | The per-photo "changes" line is dropped from the records, so the credits say it once. |
| Nit: "Only 9 FHA-approved condo projects" needs a place | Card now "Horry County has 9 FHA-approved ones". |
| Nit: dates | Not changed: the lead's `build.js dates` run sets them (audit still flags 2026-07-19 against the sitemap). |
| Nit: empty "Waterfront condos" strip in preview | Not changed: no sample home in the preview fixture matches the filter. Live check is for the lead. |

## Reader (pass=false, 6.5)

| Finding | What changed |
|---|---|
| Never told whether the rent covers the costs | The short answer now says it with numbers: fee and tax on the typical oceanfront two-bedroom about $18,000; the average nightly rental keeps about $16,000 after running costs; a top-quarter rental about $28,000. The earnings chart proves it. The Boston story now says "an average of about $40,000 a condo". |
| Insurance and management missing from the sum | Management: a three-row card (hands-off about 40 to 60 percent of gross profit; basic plan about 13 to 17; yourself), from the owner's recorded ranges (row 36). AirROI's running costs already include a rental policy, cleaning, Airbnb's fee and the rest. Insurance: no dollar figure (see owner block 2). |
| How much cash, and what a DSCR loan is | DSCR is explained in the sentence ("which is approved on what the unit rents for"). No down payment figure: the story's limits and the site rule forbid a down payment percentage on this page (unwarrantable-condo-ltv). The page says what it means: a larger down payment, more cash tied up. |
| 307 FHA listings against 9 FHA buildings | Raw counts and the loan chart are gone. The paragraph says the listing line is what the seller's agent wrote, the FHA's list holds 9 buildings, and we check the building with the lender (row 19). |
| "Taxed on 6 percent" reads as a 6 percent tax | New sentence: "The rate is the share of the value that is taxed, not the tax. On the $340,000 example, 6 percent is about $20,000", then the $5,200 and the exemption's effect. The card column now says "The tax rate applies to". |
| Short-term rental zoning sent away | Answered here: the city's zones named, and about 3 in 4 city condos are in them (row 37). |
| Nits: 12 months' worth; 22.32 percent; lien paragraph; report-like sentences; hotel-list words; no map; "Who owns"; "Many communities ban renting" | Hero chip replaced by the two-bedroom's yearly take; months of supply is a plain FAQ answer ("would take about a year to sell"). "About 22 percent". Lien rewritten as "Can you owe the seller's HOA dues?" in plain words. Fannie Mae list in plain words ("registration services that check guests in, as a hotel does", "one key system for every unit, run by the building", "owners required to put their units in a shared rental pool"). Where: a new "Where are the condos?" with unit counts by area and three photos, one per area, each naming its road. No drawn map: area-map.js would add a shared map file outside my folders; the photos name the stretch. "Who owns" is now "Who are your neighbors in a condo building?", ending "Most of your neighbors will rent their units out or use them part of the year." "Some buildings ban renting at all." |

## Owner (pass=false, 7)

| Finding | What changed |
|---|---|
| Block: never says what a condo earns | As the reader's first item: the earnings section and the short answer. The verdict changed with the data: "For rental income, often" is gone; it is now "Only if it rents like the busier listings here." |
| Block: yearly cost leaves out insurance | Not fully fixed, and I think a dollar figure would break the ledger rule. NAIC still returns 403 today; the only figure found is an agency's, struck as secondary (row 22, RTN rows 30 and 31). The page now says what insurance covers (building policy in the fee for about 8 in 10), that a rented unit costs more to insure (15 to 20 percent in our files; about 25 percent nationally, III), and offers the quote before the offer (story insurance-quote-before-offer). The earnings math does carry AirROI's rental policy line. Owner question for the lead: the range our agents see on a unit policy for a rented oceanfront condo would close this. |
| Block: "Send us a building" three times | Four different offers, each on the owner's record of labels: hero "Talk to a specialized agent"; after the earnings "Have us check a condo" (rental rules, insurance quote, lender check); after the bargains "Have us find you your next investment" (the bargains section is now its own H2 with the main offer); end "Have us help buy your next unit". |
| Block: verdict four times | Said once, in the short answer. The hero line, the dek and the section openers no longer restate it. |
| Block: FAQ repeats the body | Replaced with questions the body does not answer: living in it and renting part of the year (72 days), what you pay the HOA when you buy, whether a condo is harder to sell, whether most condos are in big buildings. |
| Block: nine "Our X page explains Y" pointers | Cut. Links stay only inside sentences that say something (special assessment, saved, lodging taxes, rental program, run like a hotel, non-warrantable, DSCR loan, the city's rental map). |
| Block: too many exact numbers and dates | Bar labels carry no counts; quartiles, listing counts, "only 2 other months", recovery months and most dates are cut; dollars in prose rounded. Score P2 is now 4.7 numbers per 100 words (target 3.5); P1 passes. |
| Block: industry and legal language | Months of supply, the Fannie Mae list, non-warrantable and the lien are in plain words (see reader nits). |
| Block: thin on place and pictures | Three photos, one per area, naming South Ocean Boulevard, North Ocean Boulevard and North Waccamaw Drive; unit counts by area. No building is named with a conclusion (ledger rule). |
| Nit: keep the findings | Kept: the 25-year chart, 1 in 5 against 6 in 10, North Myrtle Beach at about twice the city, 1 in 6 flood. |
| Nit: bargains at the end with no offer | Own H2 before the building section, with the page's main offer. |
| Nit: story label | "His own numbers, not a promise". **I think the finding's wording is wrong for this site:** the stories.json label "his real numbers, from a real story, not a promise" fails `build.js audit` ("punch: 'real X' intensifier"). The relocating pages ship "his own numbers ... not a promise". Lead: update the story's limits or the audit rule. |
| Nit: empty homes strip | Preview fixture; see critic. |
| Nit: 94 in 100 against 7 in 10 | The card says "Oceanfront: 94 in 100 say they allow it"; the body gives both, each with its group. |
| Nit: "That is why the building's rules..." | Replaced (see reader). |
| Nit: 2011 photo | All three photos are 2011 USGS; shot-list.md asks the photo partner for current shots. |

## Gates after the fix

- `node tools/mkpage.js specs/condos.js`: built.
- score.js: 99/100 (P2 numbers 4.7 per 100 words is the only miss).
- claims-scan: no finding on /invest/condos/. facts-check: none on the page. house-claims: 0.
- struck-check, every list in the batch: none, except two cross-page false hits from the Pawleys Island list ("AirROI", "$450,000"; NEEDS.md).
- critic.mjs at 320, 390, 768, 1024, 1440: 0 blocking, 1 warning (the FAQ reads as one 1,029 px block at 320 px). JSON `wf2/invest-condos/critic2.json`, shots `wf2/invest-condos/critic-shots2/`. Section shots looked at: `wf2/invest-condos/look3/`.
- build.js check: OK. build.js audit: only the date mismatch (the lead's dates run) and the A20 warning that was already there.
