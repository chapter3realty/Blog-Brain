# PLAN: /invest/condo-buildings/ (Lane U, batch 2026-11-b)

Built from `must-answer.md` and the rows of `facts.md` (all pending until verified). The writer uses only rows a verifier marks VERIFIED or CORRECTED. Data: website copy `data/2026-11-b/invest-condo-buildings/` (README there).

## 1. What is on the live page, and what to keep

The live page (July, hand-made, no spec) is a directory of 29 buildings in two wide tables, then sections on condotel financing and fees, then an FAQ.

Keep:
- **The idea and the title words.** A directory of oceanfront buildings, south to north, Myrtle Beach then North Myrtle Beach. The title "Myrtle Beach Oceanfront Condo Buildings: HOA Fees Compared" kept its searched words and gained showings after 2026-10-27 (CRAFT 7). It stays: 26 of the 28 July buildings still in the feed now have a fee (deciding fact, facts row 1).
- **The three kinds of oceanfront ownership** (condo, condotel, timeshare), cut to three plain sentences. Readers type "condotel" and "condo hotel".
- **"The building matters more than the unit."** The one line of the old offer that a top agent would say. It becomes the end band's headline idea.
- **The list of buildings** (28 still on the MLS), with the additions in section 5.
- **The FAQ questions** "What is a condotel?", "Condotel or timeshare?", "Can you get a mortgage on an oceanfront condo?" and "Why are oceanfront condo HOA fees so high?", answered shorter, each pointing to the page that owns the long answer.

Cut or fix (each was a reader problem, not a rule):
- **"Not published"** in about half the fee cells. Replaced by the fee from units for sale now, with the count, or by plain words when there are too few.
- **Unsourced figures:** "15 to 30 percent" dues rises, "35 to 45 percent" desk splits, build years and unit counts from broker pages. Unit counts now come from the county (row 5); the rest is cut.
- **"Eight approved projects" (FHA).** HUD's list shows 9 in Horry County, none of them a building on this page (row 13).
- **"Our team once fixed that mid-deal..."** It is not in `stories/stories.json`. Cut.
- **"Chapter3 Realty check the building"** (grammar) and "our preferred lender" (the approved wording is "our affiliated lender, BrickWood Mortgage, a separate company").
- **The condotel financing H2.** Two sentences and a link (cannibalization map).
- **Margaritaville Vacation Residences.** Pre-construction, not in the MLS feed, and its ground-breaking date has no ledger row. Out of the directory.
- **Two wide tables on a phone.** One entry per building, then one compact table.

## 2. The reader and the decision

The reader is shopping for an oceanfront condo on the Grand Strand. Often they have stayed in one of these resorts on vacation and know its name. Most plan nightly rentals between their own weeks; some want a second home. They know little about condo fees or loans.

Their decision: **which two or three buildings to look at, given the price of a unit, the monthly fee and what the resort gives them and their guests.** Then they want to see the units for sale.

What they would pay an agent to tell them: what each building really charges a month, what it sells for, how fast units there sell, what is on site that their guests will pay for, and which buildings a normal loan will not touch.

## 3. The answer in two sentences

> About 1,100 condos are for sale in Grand Strand oceanfront buildings, and the middle one charges about $920 a month in HOA fees (row 3). Building by building, the middle fee runs from about $425 at Sands Ocean Club to about $1,820 at Margate Tower in Kingston Plantation (row 2).

The next line (key facts, not the answer): units sold last year for a middle price of about $53,000 at Sea Mist and about $950,000 at Margate Tower (row 7).

## 4. Sections in order (headings are searched questions)

0. **Hero.** Title kept: "Myrtle Beach Oceanfront Condo Buildings: HOA Fees Compared" (58). Description: "45 Myrtle Beach and North Myrtle Beach oceanfront condo buildings: the monthly HOA fee in each, what units sold for, and the units for sale now." H1 "Myrtle Beach oceanfront condo buildings, with their HOA fees compared." Hero sub (8 to 30 words): "45 oceanfront buildings from Myrtle Beach Resort to Cherry Grove, with each one's monthly fee, what its units sold for, and its units for sale." Byline Devin Day, reviewed by Tim Nash.
   The edge's homes feed for this URL (HIGH_OCEAN, "Oceanfront, sixth floor and up") stays under the opening.
   **Short answer** (above). **Key facts row**, three items with words: about 1,100 for sale in oceanfront buildings; middle fee about $920 a month; units sold from about $53,000 (Sea Mist) to about $950,000 (Margate Tower).
   **Slim offer bar:** "Send me units in one building".
1. **Which oceanfront condo building fits what you want?** The selection guide, once, as `guideCards()` by feature, never by who lives there. Each item links to its entry. Proposed groups, filled from rows:
   - Units that sold for under $100,000: Sea Mist (about $53,000), Coral Beach ($86,000), Landmark ($100,000) (row 7).
   - The lowest monthly fee: Sands Ocean Club ($425), Beach Colony ($595), Bay Watch and Sea Mist ($610), Camelot ($625) (row 2).
   - Slides and lazy rivers for guests: Landmark, Beach Cove, Avista, Monterey Bay, Kingston Plantation (rows 17, 19, 20, 22); Dunes Village once row 23 is read.
   - Room for a family, most units 2 or 3 bedrooms: Sand Dunes, Dunes Village, Margate, Royale Palms, Brighton, South Hampton, Maisons Sur-Mer (row 4).
   - Bring the dog: pets allowed on most listings at the Kingston Plantation towers, Ocean Forest Plaza, Beach Colony and Ocean Creek (row 4). It answers the "pet friendly" search.
   - A gated resort: Ocean Creek, SeaWatch, Kingston Plantation (rows 18, 20, 21).
2. **What are the oceanfront condo buildings in Myrtle Beach?** One entry per building, south to north (H3 = the building's name, the words people type). In each entry, in this order:
   - its best true thing a buyer would not guess (the sunset over a tidal creek at Ocean Creek, row 18; Grande Cayman being the old Long Bay Resort, row 10; Landmark's slides open only to rental-program guests, row 17; Sea Mist selling about 1 unit in 4 last year, row 6; Landmark having the most units of any building, row 5);
   - what owning there is like: the units (studios or 3-bedroom), what the fee includes (the power bill or not), pets, the indoor pool;
   - the trade-off, in one honest line (a fee that is a large share of the price, few sales, studios only);
   - one plain sentence with the price and the fee: "Units here sold for about $140,000 last year, and the HOA fee is about $905 a month.";
   - the homes strip `homes("<slug>", "<name>")`, then the place offer "See units for sale at <name>" to `/contact/?place=<name>`.
   No label lines, no field lists. A device (a drive time, a street name) is used two or three times at most.
3. **What are the oceanfront condo buildings in North Myrtle Beach?** The same, Ocean Drive to Cherry Grove.
   **Mid offer** (after the two directory sections): "Have us pull one building's budget and reserves".
4. **How do HOA fees compare across Myrtle Beach oceanfront buildings?** The title's promise, kept whole.
   - Chart 1 (below), then the compact table of every building.
   - One line on the whole group: the middle oceanfront fee, $920, with a link to `/hoa/` for fees by kind of home (row 3).
   - Fee as a share of price: at Coral Beach a year of fees comes to about a fifth of what a unit there sold for, at Sea Mist and Landmark about a tenth or more; at Margate and North Beach Towers about 2 in 100 (row 9). This is the one place the page says it, and the one finding a budget buyer most needs.
5. **What does an oceanfront condo HOA fee pay for?** Three short lines from the hub's oceanfront row (insurance on the building, water, internet, often the power bill; row 11) and the per-building power-bill share where it differs (row 4). Buying into a rental-program building usually also means a transfer fee and a few months of dues held at closing (row 15). Links: `/hoa/reserves/`, `/hoa/special-assessments/`, `/hoa/master-insurance-ho6/`.
   **Mid offer:** "Have us get the real fee for one unit".
6. **Which oceanfront buildings sell the most units?** Chart 2 (below). One line on what turnover means for a seller later: at Sea Mist about 1 unit in 4 changed hands in a year; at Prince Resort, about 1 in 37 (row 6). This section takes over the H2 the cannibalization map moves off `/submarkets/myrtle-beach/`.
   **Mid offer:** "Have us price a unit against its building's sales".
7. **Condo, condotel or timeshare: what are you buying?** Three sentences (kept from the live page, fixed). Then two sentences on loans: Fannie Mae will not buy a loan in a building run like a hotel (row 12), and none of HUD's 9 FHA-approved projects in Horry County is on this page (row 13). Then "Which loans close on these buildings is on our condotel financing page." Our affiliated lender, BrickWood Mortgage, a separate company, is named once, in that wording, only if the section needs it.
8. **FAQ** (open text, each repeats a section's answer in one or two sentences): What is a condotel in Myrtle Beach? What is the difference between a condotel and a timeshare? Which Myrtle Beach oceanfront condos have the lowest HOA fees? Can you have a dog in a Myrtle Beach oceanfront condo? Are Myrtle Beach oceanfront condos a good investment? (one sentence and the link to `/invest/condos/`, which owns it).
9. **End band:** "Learn the building before you choose the unit." / "Have us check a building".

"On this page" list with short labels (the page has more than 4 sections).

Sources line: the CRM's listing feed (Coastal Carolinas MLS, counted in aggregate, with the day it ran), Horry County parcel records and deeds (recorded October 2025 to September 2026), HUD's condo search, the Fannie Mae Selling Guide, and the resorts' own pages for the amenity lines.

## 5. Which buildings get an entry

From `findings.json`, 2026-11-09:
- **An entry (about 32):** the 26 July buildings with a fee, plus the six largest additions: Bluewater (37 for sale), Monterey Bay Suites (31, 20 sold), The Palace (25, 21 sold), Beach Colony (21, 23 sold), Sands Ocean Club (16, 32 sold) and Holiday Sands (15). A seventh, Holiday Inn Pavilion, waits for clean search words (row 2).
- **Table only (13):** Meridian Plaza, Sandy Beach, Carolina Winds, Maisons Sur-Mer, Ocean Forest Plaza, South Hampton, Crescent Shores, Boardwalk, Carolinian, Oceans One, Patricia Grand, Mar Vista Grande, Holiday Inn Pavilion. Each row still links to its homes search. Promote one to an entry only if research finds something only it has.
- **Table, "No units for sale this week":** Island Vista, Ocean Drive Beach & Golf.
- South Hampton, Brighton, Margate and Royale Palms sit together in Kingston Plantation. Give the four one shared opening paragraph (what Kingston gives every owner) and short entries after it, so the resort's amenities are said once.

An entry is written only when it has at least one true thing no other entry has (CRAFT 5). A building whose research comes back with only price and fee goes in the table, not the list.

## 6. The visuals (each says one thing in its title)

| # | Title (plain) | What it shows | Data |
|---|---|---|---|
| Chart 1 | "What each oceanfront building charges a month" | One horizontal glass bar per building with a fee, lowest to highest, the fee at the end of the bar, and the number of units behind it in small text. Myrtle Beach and North Myrtle Beach in two colors, a two-word key. | `chart-fees.json` |
| Chart 2 | "Where oceanfront units sold most last year" | The 12 buildings with the most recorded sales, bars by count, the middle sale price written at the end of each bar. | `chart-sales.json` |
| Table | "Every oceanfront building, side by side" | Building, town, middle fee a month (units behind it), middle asking price now, sold last year (middle price). Cards on a phone. Plain words where there is no figure. | `table.json` |

No map: 40 dots on a 23-mile strip read as a smear on a phone, and the entries already run south to north. No drawing. Photos: the homes strips carry the photos of each building. A building whose strip is empty shows nothing, not a stock image. If the lead wants one photo for the opening, ask the photo partner for a shot of the tower line from the beach (`templates/photo-request-email.md`).

## 7. Homes strips

One strip in every entry, by MLS subdivision words (BUILD.md lists the slugs and words for `idx-places.json`). The strip title stays the default "Homes for sale in <name> now" unless a true, bolder title fits one building (for example "Units under $100,000 at Sea Mist", only if its search makes it true). The "See units for sale at <name>" button under each strip is the fallback when the strip is empty.

## 8. The offers

| Where | Headline | Button |
|---|---|---|
| Slim bar under the answer | Tell us the building | Send me units in one building |
| After the North Myrtle Beach entries | Before you pick a building, see its money | Have us pull one building's budget and reserves |
| After the fee section | The fee on a listing can be out of date | Have us get the real fee for one unit |
| After the sales chart | Selling a unit later? | Have us price a unit against its building's sales |
| Each entry | (none) | See units for sale at <building> |
| End band | Learn the building before you choose the unit | Have us check a building |

## 9. What this page must not do

- Take `/invest/condos/`'s question (good investment, price trend, cost-to-own example), `/hoa/`'s fees by kind of home, `/invest/rental-program-vs-airbnb/`'s rental-program table or `/invest/condotel-financing/`'s loan detail.
- State a rate, a payment, a value for any unit or address, or a single sold price.
- Say who lives in a building, or grade a building or a company as good or bad.
- Name Devin in the copy, quote Tim Nash, or tell a story not in the story bank.
- Type a date.
