# Review round 1: /invest/rent-prices/

Batch 2026-11-a, Lane U. Three reviewers read the built page on 2026-11-03: critic (pass false, 8), reader (pass false, 6.5), owner's eye (pass false, 7.5). This file records what the fixer changed for each finding, and where the fixer disagrees. Every edit is in `specs/rent-prices.js`; the built page was never edited by hand. The spec before this round is saved at `scratchpad/wf2/invest-rent-prices/fix2/spec-before-fix1.js`.

## The main change

All three reviewers said the same thing in different words: too many rent figures for one house, on two bases (with and without utilities), and the places ranked several times on different measures. The page now has:

- **One rent for a house:** about $1,600 a month on a new lease, before utilities, with the tenant paying about $200 for power, water and gas (rows 5 and 7). It is in the hero tile, the short answer and the new-lease section, and it means the same thing each time.
- **One rent for an apartment or condo:** about $1,100 (1 bedroom) and $1,150 (2 bedrooms), before utilities, plus about $100 (rows 4 and 5).
- **"Before utilities" as the page's basis.** "With utilities" is left only where the source has no other basis: the worked example's Census line (which the box then converts), the fair market rent (HUD's definition), and the 4-bedroom FAQ.
- **One area ranking on one measure:** asking rent by ZIP code (row 14). The FAQ "cheapest" answer now quotes the same table.

The main text now has 39 numbers in 1,181 words (score.js P2: 3.3 per 100), down from 3.4 before this round and 3.6 on the first draft of the fix.

## Critic

| Finding | What changed |
|---|---|
| BLOCKING: FAQ "Of the ten places in our Census table, Conway's city limits..." (no such table, no verb, contradicts the ZIP table) | Fixed. The FAQ now reads: "Among ten Grand Strand ZIP codes, the asking rent is lowest in the north end of Myrtle Beach (29572). It is about $1,530 a month across every kind of home listed for rent. Little River (29566) is next, about $1,560." Full sentences, they stand alone in the schema, and they match the table. The body's Census place paragraphs (Murrells Inlet, Carolina Forest, Conway $870, "sit near the county's middle") are cut. |
| BLOCKING: worked example ends "with utilities" and leaves the reader to subtract $200; mixes a county-wide row under a Carolina Forest heading | Fixed. The box now does the sum in rows: 3-bedroom homes in Carolina Forest with utilities, about $1,980; less the utilities a house tenant pays, about $200; rent with the tenant paying the utilities, about $1,780; homes listed now in 29579, about $1,770; August against January, about $40. Its answer is one bold line: "List a 3-bedroom house there from about $1,780 a month, with the tenant paying the utilities." The county-wide new-against-old row is out of the box. "Test upward" is gone. |
| Nit: hero tile "new 3-bed" breaks at 320 | Gone. The tiles are now "About $1,600, a house on a new lease", "About $1,150, a 2-bedroom apartment", "Up about 3%, house rents in a year". |
| Nit: map caption "Each number is a row" but row 10 has no marker | Fixed: "The numbers 1 to 9 match the rows of the table below. Row 10, the north end of Myrtle Beach (29572), is the coast north of the city's center and has no marker." The ZCTA has no Census place point, so a marker would be a guess. |
| Nit: "On this page" one column at 1440 | Fixed on this page with one CSS rule in the spec: three columns from 700 px. Checked at 1440 (3 rows of 3). NEEDS.md asks the lead about the site sheet. |
| Nit: line chart "2023 2026" touch at 320 and 390 | Fixed: the phone chart labels 2015, 2019 and 2026 only. |
| Nit: "middle lease rent" jargon | Fixed. The short answer says once: "the middle rent ... half rent for more, and half for less". The page then says "middle rent" and "before utilities". "Lease rent" is gone from the copy. |
| Nit: ZIP table sets asking rent beside a Census 3-bed figure | Fixed by removing the 3-bed column. The table now has one measure, plus two reference rows: the whole metro area for houses ($2,070) and for every home ($1,720). The text under the table says once what it means: each ZIP figure counts apartments and condos with houses, and across the metro a house asks about $350 more than every home together. |
| Nit: FAQ "On a lease of a year" | The condo FAQ is cut (see the FAQ-repeats nit). The phrase is gone. |
| Nit: "unless the lease itself provides for a change" | Cut. The answer is now "Yes. A new lease can state a higher rent. During a lease, the rent is the amount the lease states." Both sentences rest on 27-40-310(a) (row 30). |
| Nit: four of six FAQ answers repeat the body | The FAQ is down to four: average rent (now $1,110 before utilities, row 19, not in the body), 4 bedrooms (moved out of the body into the FAQ), cheapest ZIP code (one figure from the table), the fair market rent fall (moved out of the body into the FAQ). The condo FAQ and "Is Myrtle Beach a good place to buy a rental" are cut. |
| Nit: FAQ names pages but does not link them | The FAQ cannot link: mkpage.js refuses tags in FAQ text, because the text goes into the FAQPage schema as is. The links are in the body instead: /invest/condos/ under the bedrooms chart, /invest/run-the-numbers/ in "Is rent going up". The FAQ no longer names either page. |
| Nit: H2s without a place; HUD never spelled out | Fixed: "When is the best month to rent out a house in Myrtle Beach?" and "How much can I rent my house for in Myrtle Beach?". HUD is spelled out once: "The U.S. Department of Housing and Urban Development (HUD)". |
| Nit: byline "Updated September 7, 2026" comes before the September 2026 data | Not changed. The date belongs to `node build.js dates`, which only the lead runs. The lead should confirm that the run moves it. |
| Tool note: critic.mjs does not route photos.test | Not a page issue. In NEEDS.md. |

## Reader

| Finding | What changed |
|---|---|
| Worked example never gives the answer in one line; starts above what is listed | Fixed (see the critic's second blocking item). The answer, $1,780 with the tenant paying the utilities, now sits beside the 29579 asking figure of $1,770, so the two agree. |
| First screen: $1,800 and $2,070 side by side, $270 apart | Fixed. The hero shows one house figure ($1,600, new lease, before utilities). $2,070 appears once, as a labelled reference row in the area table ("Whole metro area: houses"). The sources line says Zillow's metro includes Brunswick County, NC. |
| Too many numbers for the same 3-bed home ($1,500, $1,800, $1,600, $1,400, $1,823, $1,260) | Fixed. $1,800 and $1,400 are gone from the copy. $1,260 is gone (the FAQ uses $1,110 before utilities). $1,500 is only in the bedrooms chart, which the text says counts old leases with new. $1,823 is only in the fair market rent section, which says it is not the average rent. |
| Area table: Carolina Forest $1,980 beside $1,770; four places have no 3-bed figure | Fixed by one measure (asking rent by ZIP code) for all ten. A firm 3-bedroom figure for Socastee, Surfside Beach, Longs and Little River does not exist: the Census margins there are over 25 percent of the estimate (row 13). The page does not invent one. The worked example shows how we get to a number for one place, and the offer is to do it for the reader's house. |
| Jargon: "middle lease rent", "lease rent", "Most of Horry County", "asking rent", "rent index" | "Middle rent" is defined in the short answer. "Lease rent" is gone. The short answer says "in Horry County outside the Loris, Aynor and Green Sea area". The area section opens: "Asking rent is the rent on a home listed for rent now." "Rent index" is now only in captions ("Zillow's rent index"). |
| Best month: "matters less for the price than for how fast the house rents. So how fast?" | Changed to: "The swing is small, about $40 a month on a house. Near the college, the month counts more for empty weeks than for the price." The next paragraph is the August story, which is what that sentence refers to. No figure on how long a house sits empty is on the page (see "Where the fixer disagrees" below). |
| Population paragraph never tied to rent | Cut. The verifier barred the causal reading (row 18, "do not say because"), and that reading is the only way to tie it to rent. |
| HUD section reads like a report; who should care | The section now opens: "The fair market rent matters to a landlord who takes housing vouchers (Section 8)." The definition reads: "It is not the average rent. About four in ten recent movers into a standard home pay that much or less." The 4-bedroom fall moved to the FAQ, and "fiscal year 2027" is in the text once and the FAQ once (not in the chart title). |
| Open questions 2 to 5 (who pays water, how long empty, property manager fee, HOA limits) | (2) The short answer now says what the $200 covers: "power, water and gas" (row 5). (3) See below. (4) A link: "What a manager charges is on our property management cost page" (/invest/property-management/). (5) Not added: no verified row covers HOA rental limits on the Grand Strand, and that subject belongs to the HOA pages. |
| Dates: about 12 mentions | Cut to: September 2026 (area table caption and sources), 2015 to 2026 (two chart captions), since 2019 (one sentence), fiscal year 2027 (once in text, once in FAQ), August and January (the season). "2020 to 2024" left the table note. score.js P3: 0 month-and-year mentions in body copy. |
| Nit: "Over seven years, both rose by about half" under a chart since 2015 | Fixed: "Since 2019, both rose by about half." The value table under the chart has a 2019 row. |
| Nit: TOC labels "Your house", "Up or down" | Fixed: "What will my house rent for", "Are rents rising". |
| Nit: Carolina Forest aerial looked blank in a full-page shot | It loads lazily. In the new 390 shot it shows (critic.mjs scrolls the page). |

## Owner's eye

| Finding | What changed |
|---|---|
| Too many rent numbers for one house | Fixed (see "The main change"). |
| The area section ranks the places four times on different numbers | Fixed: one ranking (ZIP asking rent), stated once in the opening paragraph with the gap ("Where the home is can change the rent by about $420 a month"), then the map and the table, then one line on what the figures count. The FAQ uses the same measure. |
| Corrected verbs and idioms | "sit near the county's middle": cut. "The rent is a term of the lease, so a new lease can set a new rent": now "A new lease can state a higher rent." "to get back at": now "to punish". "test upward": cut. Chart title "How far asking rents run above or below": now "Asking rents each month, above or below the year's trend", and the chart's aria text says "are above", not "run above". "one 'average rent' misleads": now "One average rent mixes long tenants with new ones, so it is lower than what the next tenant will pay." "asks the least": now "the asking rent is lowest in". "the house pays": now "whether today's rent covers them". mkpage.js also refused "HUD sets it" and "the voucher program sets"; they read "publishes it" and "uses it to work out what it pays". |
| The page tells the reader to do the agent's job ("Ask how long the tenant has been there") | Fixed: "Before you offer, we find out how long the tenant has been there and what the lease says." |
| "We set the rent" reads as property management; CTA label does not match its target | Fixed. Top offer: "An agent works out the rent for one house before you offer." with "Ask an agent", which goes to /contact/ (the site's agent form), not to the tool page. The body says "an agent at Chapter3 works out what it will rent for". The closing offer: "An agent at Chapter3 works out what the house will rent for from current local leases and listings, before you offer." "Set the rent" is gone from the page. |
| Method talk instead of meaning | The hero sub is now "Rents on leases of a year or more, by bedrooms and in ten ZIP codes from Little River to Murrells Inlet." The map caption says which rows have a number. The table note no longer explains the survey margin. "Zillow's middle-tier house value index" stays in the line chart's caption only, as its source. "Bases its payment standard on it" is now "uses it to work out what it pays". |
| Hero sub-line is a table of contents, no hook | The h1em is now the hook fact: "A new lease here costs about 40 percent more than one 5 years old." (row 7, every rented home). |
| Filler line said twice; a house acts | The FAQ copy is cut. The body says what we do: "For one address, we add the tax, HOA dues and insurance to see whether today's rent covers them: how we run the numbers on a rental." |
| Leaves out how long a rental sits empty; B25004 pulled but not used | Not added. See "Where the fixer disagrees". |
| Nit: dates 14 times | See the reader's dates row. |
| Nit: "Every rented house" row in the bedrooms table | Removed. The chart has three rows: 1-bedroom apartment or condo, 2-bedroom apartment or condo, 3-bedroom house. |
| Nit: population paragraph | Cut. |
| Nit: feed label "AI-POWERED SEARCH", not the Chapter3 AI chip | Shared, not this spec. In NEEDS.md for the lead. |
| Nit: rental picks strip shows only "See all homes" | critic.mjs does not route photos.test, so the strip is empty in every critic shot. Same as the critic's tool note. In NEEDS.md. |
| Nit: "asked for a house now" | The tile is gone. $2,070 is now a table row: "Whole metro area: houses". |

## Where the fixer disagrees

**The vacancy figure (owner, blocking; reader, open question 3).** I researched it and decided not to print it. Census does count empty homes for rent, and the 2020-2024 microdata (VACS, VACDUR) even records how long each empty home had been empty. I ran it for the same two PUMAs as the rest of the page (`data/2026-11-a/invest-rent-prices/vacancy_pums.py`, output `vacancy-pums-2024-5yr.json`; the SC housing file was re-downloaded from www2.census.gov):

- Rented houses: about 17 in 100 (plus or minus 4) of houses rented or for rent were empty and for rent on the survey day. Of those, about 9 in 10 had been empty less than a month (43 of 50 records).
- Apartments and condos: about 25 in 100 (plus or minus 3) empty and for rent; 9 in 10 of them empty less than a month.
- The published table agrees in size: DP04 gives Horry County a rental vacancy rate of 19.2 percent (plus or minus 1.7), against 8.3 in South Carolina and 5.5 in the country.

A rate three times the state's, with nearly every empty home empty for under a month, is the pattern of homes rented to visitors for days or weeks being counted as empty between stays. I could not confirm from a Census source how a vacation rental is classed in a resort county, so I cannot say what share of the 17 in 100 are long-term rentals. Printed as "about 1 in 6 rental houses sits empty" it would scare a long-term landlord with a number that likely does not describe his house. Printed with the caveat, it is one more number the owner asked us to cut. The only source that measures how long a house on a yearly lease takes to rent is MLS lease data, which the page may not show to the public. I left the vacancy figure off. The page no longer raises a question it cannot answer: the best-month section now says the month matters for empty weeks near the college and gives our August story. If the lead wants the figure, the rows above are ready for a verifier. Nothing from them is on the page.

**Derived figures** (no new facts, arithmetic on verified rows; the lead may want a look):
- $1,780 in the worked example = $1,980 (row 13, B25031 Carolina Forest 3-bedroom, with utilities) less $200 (row 5, median utilities a house tenant pays), in the rounded figures the box prints. The critic proposed this figure. The two medians are not one survey cell, so the box says "about" and the next sentence says we check the leases near the one house.
- $420 = $1,950 less $1,530 (row 14, highest and lowest ZIP codes).
- $350 = $2,070 less $1,720 (rows 1 and 2, Zillow metro houses against every home, September 2026).

## Gates after the fix (2026-11-03)

- `node tools/mkpage.js specs/rent-prices.js`: wrote the page, main 3,235 words.
- `score.js --only /invest/rent-prices/` (SCORE_TODAY=2026-11-03): 100/100; P2 3.3 numbers per 100 words.
- `claims-scan.js` on the page: 0 findings. `struck-check.js`: no struck wording. `house-claims.js`: 0. `facts-check.js` on the site: no hit on this page.
- `critic.mjs` at 320, 390, 768, 1024 and 1440: 0 blocking, 1 warning (read.wall at 320 over the three law cards, the same false hit as before). Shots: `scratchpad/wf2/invest-rent-prices/fix2/shots/`.
- `node build.js check`: OK. `node build.js audit`: 0 FAIL on this page (it found five, now fixed: no keyword in the hero sub, "Here is how", a sentence opening with "So", two sentences over 28 words). Three known warnings remain: no boxed offer mid-page (round 1 asked for the offer at the top and bottom only), no attributed sentence from Tim Nash (none in the story bank, never written for him), 12 sentences over 22 words.
- Looked at the 390 shot from top to bottom and the 1440 top: the hero shows one house figure, the TOC has three columns at 1440, the area table has one measure, and the worked example ends in one bold line.
