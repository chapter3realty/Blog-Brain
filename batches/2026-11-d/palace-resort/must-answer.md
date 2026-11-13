# Must-answer list: /invest/condo-buildings/palace-resort/ (Lane N, batch 2026-11-d)

Sources read 2026-11-13:
- Google suggestions for 26 seeds: website copy `data/2026-11-d/palace-resort/raw/google-suggestions-2026-11-13.txt` (curl, `suggestqueries.google.com/complete/search?client=firefox`).
- The lead's keyword pulls: scratch `kw/competitor-keywords.json` and `kw/ranked-c21theharrelsongroup.com.json` (DataForSEO, US, monthly volume, read 2026-10).
- The one competitor page that ranks: c21theharrelsongroup.com `/palace-resort-condos/` (saved `raw/pages/competitor_c21_palace-resort-condos.html`).
- The cannibalization map (`reports/cannibalization-2026-11-08.json`) and the live sibling pages (grep of the website working copy).
- `stories/stories.json`: no story names the Palace. `rental-program-buildings` (Tim's knowledge of program buildings) fits the rental section. `boston-hotel-manager` is about an unnamed building and belongs to `/invest/condos/`.
- People also ask: Google's results page cannot be read from this container. The keyword data says the results page for "the palace myrtle beach" carries a People also ask box, a hotel pack, a knowledge panel and reviews. The questions below come from the suggestions and the competitor.

## The one question

**"Palace Resort condos for sale: what does owning one cost, can it rent by the night, and what do units sell for?"**

The words people type are the building's own names: "palace resort myrtle beach", "the palace myrtle beach", "palace resort south carolina", "palace at myrtle beach", and the address "1605 s ocean blvd". Then "for sale", "condos for sale", "hoa fees", "condo fees", "airbnb", "rentals".

## Who searches, and why

| Searcher | Share (judgment from the data) | What they want first | What this page does for them |
|---|---|---|---|
| A guest planning a stay | Most of the 4,300 a month. The keyword tool marks both main searches "navigational"; Google shows a hotel pack; volume peaks in June and July (4,400 and 2,900) | To book a room | One plain line near the top: this page is about owning a condo here; stays are booked with the resort's own desk (a link to palaceresort.com). The page never looks like the hotel. |
| A guest who liked the stay and wonders about owning | A real slice: "for sale", "hoa fees", "condo fees", "airbnb" all appear under the bare name | What a unit costs, what the fee is, whether it pays for itself | The whole page |
| An investor comparing towers | Smaller | Fee by unit size, sales, rental program, loan fit | The page, plus links up to the directory and across to the loan and income pages |
| An owner thinking of selling | Small | What units sold for | The sales section, plus the seller offer |

## What people search, ranked

| # | Search (as typed) | Evidence | Likely reason behind it | Where the page answers |
|---|---|---|---|---|
| 1 | palace resort myrtle beach; the palace myrtle beach; palace resort south carolina; palace at myrtle beach | 2,400; 1,900; 320; 210 a month (competitor ranks 13, 6, 6, 4) | Mostly a stay. Some want to own. | Title, H1 and first two sentences name the building both ways and say what a unit costs and earns. One line sends hotel guests to the resort. |
| 2 | palace resort myrtle beach for sale; the palace myrtle beach (sc) condos for sale; the palace myrtle beach units for sale; 1605 s ocean blvd myrtle beach for sale | Suggestions; 70 + 70 a month (competitor ranks 2) | They want to see units now | The homes strip directly under the opening, with counts by size and the price range in a sentence |
| 3 | palace resort myrtle beach hoa fees; the palace myrtle beach hoa (fees); the palace myrtle beach condo fees | Suggestions for both name forms | The second number after price. They want it for the size they would buy. | The fee by unit size, to the dollar (studio, one-bedroom, two-bedroom), what it pays and what it does not (power) |
| 4 | palace resort myrtle beach airbnb; the palace myrtle beach airbnb; the palace myrtle beach rentals | Suggestions | Can I rent it by the night, and through whom? What will it earn? | Nightly rentals are allowed (zoning and listings); the resort's own rental program and what its guests get (water-park passes); renting on your own; earnings by size from AirROI, one line with a link to /invest/airbnb-income/ |
| 5 | when was the palace resort in myrtle beach built | Suggestion | Age of the building: repairs, assessments, insurance | Built in the mid-1980s; 241 feet; floors numbered to 23 with no 13th; 302 units |
| 6 | palace resort myrtle beach reviews | Suggestion | Guest reviews (hotel), or is it a good building to own | The good and the hard, plainly, from facts. No verdict on the resort company. Guest reviews are the resort's business; we do not quote them. |
| 7 | palace resort myrtle beach water park | Suggestion | Guests: the H2Oasis passes | Two free passes a day for guests who book through the on-site program, at the water park next door. For an owner: a reason guests book a unit in the program. |
| 8 | palace resort myrtle beach parking | Suggestion | Guests; an owner too | The covered parking garage, one car for a studio or one-bedroom and two for a two-bedroom (the resort's guest rule; we check the master deed for owners) |
| 9 | palace resort myrtle beach pet friendly | Suggestion | Guests; an owner with a dog | Guests may not bring pets. An owner's pet is in the master deed and rules; we read them before an offer. |
| 10 | palace resort myrtle beach address; phone number; restaurant | Suggestions | Hotel intent | The address once, in the building facts. No phone number of the resort on the page except as the resort's link. |

## The deciding fact

**Can the page give each unit size its own monthly fee, from listings, in aggregate?** Run 2026-11-13 (`pull_listings.py`, `pull_fee_exact.py`): yes. Every studio, one-bedroom and two-bedroom for sale falls in its own narrow fee band: studios $455 to $460, one-bedrooms $683 to $690, two-bedrooms $910 to $920 a month (facts row 6). The fee goes by the unit's size, so the reader can know their fee before they pick a unit. Without this, the page would repeat the directory's one "about $685" and have no reason to exist.

Second test: **are nightly rentals allowed, and who runs them?** Yes. The tower is in the city's MUH district, which the city's map shades for short-term rentals; most listings say short-term rentals are allowed; the resort runs its own on-site rental program (facts rows 19 to 23).

## What siblings already own (this page must not take their search)

| Search | Owner | This page does |
|---|---|---|
| oceanfront condos for sale myrtle beach; oceanfront condo HOA fees myrtle beach; best condo buildings; which building fits; buildings compared | `/invest/condo-buildings/` (the index of 47) | Only the Palace's name searches. No other building is compared except by one line ("next to Landmark"). The page links up to the directory once near the top and once at the end. The directory's Palace entry stays short and links down here. The figures agree: typical fee about $685, typical sale about $142,000, 21 sales in the same year, 302 units, 241 feet. |
| are myrtle beach oceanfront condos a good investment; condo vs house; condo price trend | `/invest/condos/` | No market verdict, no price trend. One link for the reader who asks "is a condo a good idea at all". |
| how much do Airbnbs make in Myrtle Beach; by size; by month | `/invest/airbnb-income/` | One line: what studios, one- and two-bedrooms gross across Myrtle Beach (AirROI), with a link. No monthly chart, no town table. |
| rental program vs Airbnb; what a program takes; which buildings have programs | `/invest/rental-program-vs-airbnb/` | Says the Palace has its own on-site program and what its guests get. No program-versus-Airbnb math. One link. |
| condotel financing; non-warrantable condo; 500 square foot rule | `/invest/condotel-financing/` | One sentence on what the unit sizes mean for the loan, then our affiliated lender, BrickWood Mortgage, a separate company, and the link. No loan teaching. |
| can you Airbnb in Myrtle Beach; STR rules | `/invest/str-rules/` | Only this building's answer (yes, and why). Link for the license and taxes. |
| HOA master policy vs HO-6; flood insurance cost | `/hoa/master-insurance-ho6/`, `/buyers/coastal-insurance/` | The building's flood zone and what the fee's insurance means for the unit policy; links. No insurance prices. |
| homes for sale at the Palace (the place page) | `/homes/near/the-palace/` is `index: false` | No clash. The strip uses the same place. |
