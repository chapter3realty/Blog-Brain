# PLAN: /invest/condo-buildings/palace-resort/ (Lane N, batch 2026-11-d)

The pilot resort page. Facts: `facts.md` (row numbers below). Demand and sibling owners: `must-answer.md`. Lead notes and what generalizes: `BUILD.md`.

## The reader and their decision

Someone typed "palace resort myrtle beach" or "the palace myrtle beach". Most of them want a room; the first screen sends them to the resort in one line. The reader this page is for has stayed at the Palace, or looked at it, and is now wondering about owning a unit: often from out of state, often new to condos, maybe planning to rent it by the night and use it a few weeks a year.

Their decision: **should I buy a unit at the Palace, and which size?** They want, in this order: what a unit costs and what is for sale now; the monthly fee for the size they would buy and what it pays; whether it can rent by the night and who runs that; what units have really sold for; what could go wrong (flood, age, the loan, the fee growing). They worry about hidden costs and about buying the wrong unit.

## The answer in two sentences

The Palace Resort is a 241-foot oceanfront tower on the south end of Myrtle Beach with 298 condos you can own: studios, one-bedrooms and two-bedrooms, which sold for about $142,000 in the middle over the past year. The monthly HOA fee goes by the unit's size, about $460 for a studio, $685 for a one-bedroom and $915 for a two-bedroom, and units can rent by the night through the resort's own program, whose guests get the water park next door.

(Rows 1, 4, 6, 14, 19 to 23. The spec builds both sentences from the data files.)

## Title, H1, description

- **Title (58 characters):** `Palace Resort Myrtle Beach Condos for Sale: Fees From $460` (the fee from `listings.json` fee_exact "0", rounded to $5). Fallback with no number: `Palace Resort Myrtle Beach Condos for Sale: HOA Fees, Sales` (59).
- **H1:** "The Palace Resort, Myrtle Beach: owning a condo in the 241-foot tower". It carries the second name form ("The Palace") and the place.
- **Hero sub (STRUCT-5):** "298 condos on the oceanfront at 1605 S Ocean Blvd, with an HOA fee set by unit size and a rental desk that books the water park next door."
- **Description (about 155):** "The Palace, 1605 S Ocean Blvd, Myrtle Beach: HOA fees by unit size, what they pay, nightly rentals and the resort's program, and what 21 units sold for."
- Keywords: palace resort myrtle beach condos for sale; the palace myrtle beach for sale; palace resort myrtle beach hoa fees; the palace myrtle beach condo fees; palace resort myrtle beach airbnb; 1605 s ocean blvd myrtle beach. Never "oceanfront condos for sale myrtle beach" (the directory owns it).
- Schema: the building as a `Place` (or `ApartmentComplex`) with address and geo, plus `FAQPage`. Never `Hotel` or `LodgingBusiness`. Author Devin Day, reviewer Tim Nash (spec author "devin").

## Sections, in order

The page is a guide to one building: lead with what owning there gives you, then the money, then what could go wrong. About 1,400 to 1,800 words. Headings are what people type where a question fits; a statement where it reads better.

0. **Opening (first phone screen).** The two-sentence answer. Then one line for hotel guests: "Booking a stay? The resort takes reservations on its own site" (link https://www.palaceresort.com/, row 33). A slim offer bar: "Get the Palace condos for sale sent to you" (/contact/). A small row of four glass key facts with words, no more: "241 feet, floors to 23" · "298 condos" · "Built in the mid-1980s" · "Nightly rentals allowed" (rows 1 to 4, 19). One link up: "The Palace is one of 47 buildings in our oceanfront condo directory" (/invest/condo-buildings/).
   - **The live homes strip goes here** (the site's edge puts the page's feed under the opening; place "the-palace", title in BUILD.md). It is the strongest offer on the page. If the edge feed is not placed by then, the spec's `G.homes("the-palace", "The Palace", ...)` takes this slot instead; never both.

1. **What owning at the Palace gives you** (H2: "What is it like to own a condo at the Palace?"). Sell it like the best agent in town, from true things only:
   - The wow, first: guests who book a unit through the resort's own desk get two free passes a day to H2Oasis next door, with three 40-foot slides (row 23). For an owner who rents, that is a reason a family books your unit.
   - Two oceanfront pools, three whirlpools by the ocean and one inside, a sauna and a putting green next to the pools; two beach accesses straight off the pool deck (row 22). Seasonal: say so once.
   - The tower: 241 feet, floors numbered up to 23 with no 13th; the top two floors hold 10 condos each (row 2). Units look at the ocean, most of them at an angle; the resort's own unit names say "Angle Oceanview" (rows 5, 13).
   - Where it is: next door to Landmark Resort; Family Kingdom's rides under a mile north; Springmaid Pier about a mile and a half south (row 31). A covered parking garage (rows 13, 24).
   - One honest line: it is about 40 years old, so we read the reserve study before an offer (row 3; section 5).
   - Picture: one labelled NAIP aerial of the tower, its pools and the water park next door (BUILD.md "Photo"), until the photo partner's shots arrive. One picture, under its sentence.

2. **What the HOA fee is, by unit size** (H2: "What are the HOA fees at the Palace Resort?"). First sentence is the answer by size. Then:
   - **Visual 1, the one table on the page (readable at a glance):** three rows, studio / one-bedroom / two-bedroom; columns "Size", "HOA fee a month", "Fee a year", "Asking now (middle)", "For sale". Title: "At the Palace, the fee goes by the size of the unit." (rows 6, 9, 12). Cards on a phone.
   - What the fee pays: water and sewer, trash, internet and the building's insurance, by nearly every listing; none says it pays the power bill (row 8). What that means: budget for power and the unit's own policy (link /hoa/master-insurance-ho6/).
   - The yearly line (CRAFT 1): "A studio costs about $7,500 a year to hold before any loan: about $5,500 in fees and about $2,000 in property tax at the rental rate, plus power and the unit policy" (rows 9 to 11; the spec computes; tax link /buyers/property-taxes/).
   - **Mid offer:** "Have us get the Palace's budget, reserve study and any assessment before you offer." (/contact/)

3. **Renting it by the night** (H2: "Can you Airbnb a condo at the Palace Resort?"). The answer first: yes; the tower is in a district the city zones for nightly rentals, and the resort rents its own units by the night (row 19). About 8 in 10 condos for sale are in a rental program now (row 20).
   - Two ways to rent: the resort's on-site program, part of the Vacation Myrtle Beach group, which collects the lodging taxes, sends monthly statements and holds the rent in escrow (row 21), and whose guests get the water park (row 23); or on your own with a licensed manager or Airbnb (link /invest/rental-program-vs-airbnb/ for the money both ways; /invest/str-rules/ for the license and taxes).
   - What rentals of each size gross across Myrtle Beach, in one sentence with a link: the middle studio listing about $8,200 a year, one-bedroom about $17,000, two-bedroom about $20,100 (row 25; /invest/airbnb-income/ owns it). Say it is city-wide.
   - Our agents' experience, as told in the story bank: program buildings like this one are run for renting; buyers pay transfer fees and often a few months of dues up front (row 26).
   - Guests may not bring pets, and check-in is 21 and older (row 24). An owner's own pet and parking rules are in the master deed; we read them before an offer.
   - **Mid offer:** "Have us get the rental program's terms and a unit's booking history."

4. **What units sold for** (H2: "What have Palace Resort condos sold for?"). First sentence: 21 units sold by recorded deed in the past year, at about $142,000 in the middle, about 1 in 14 of the building (row 14). The finding: units on the 11th floor and up sold for about $154,000, against about $112,500 below (row 15).
   - **Visual 2, one chart, one message:** two horizontal glass bars, "Floors 1 to 10" and "Floors 11 to 23", each with its middle sale price and a thin line for its lowest to highest; title "Higher floors at the Palace sold for more"; note "Recorded deeds, past 12 months; 10 and 11 sales." From `county.json` group figures only (no dot per sale: a floor and a price together can point to one deed).
   - One line on asking prices now by size (row 12), which run above recent sales; we price a unit from the sales, not the asking.
   - **Offer for owners who sell:** "Thinking of selling a Palace unit? Have us price it from these sales." (/contact/; an agent's review, never an automated value.)

5. **What to check before you buy** (H2: "What could go wrong at the Palace, and what we check"). The good and the hard, short, each hard point with what we do:
   - Flood: most of the lot is outside FEMA's high-risk zones; the ocean-side corner is in zone AE (row 32). We check the flood map for the building and the master policy's flood cover.
   - Age: built in the mid-1980s (row 3). We read the reserve study, the last two budgets and the minutes for any planned assessment.
   - The loan: every studio here is under 500 square feet, the size one published condotel program asks for with a bedroom; the one- and two-bedrooms are over (row 27). A building run with a front desk and a rental program usually needs a condotel loan (row 28). One sentence, then "our affiliated lender, BrickWood Mortgage, a separate company" and the link /invest/condotel-financing/. No rate, no down payment, no loan teaching.
   - Few units are anyone's home: about 1 in 10 is taxed as the owner's home (row 17). Said as what it means: the building is run for renters and visitors.
   - **Offer:** "Have our affiliated lender, BrickWood Mortgage, look at the unit before you offer" (/contact/ with the lender named in the button's words; BrickWood is a separate company).

6. **FAQ (open text, each answer one or two sentences, none repeating a section):** When was the Palace Resort built? How tall is it, and how many floors? Is the Palace a hotel or condos? (Both: 298 owned condos, run as a resort by an on-site rental desk.) Can you bring a pet? Is there parking? Is the water park free? What is the address? (1605 S Ocean Blvd, Myrtle Beach.) How many units are for sale? (Read from the file, "this week".)

7. **End offer band:** "Book a showing at the Palace" with the phone button, then the second link up: "Compare the Palace with the other 46 oceanfront buildings" (/invest/condo-buildings/).

## Visuals (each readable at a glance)

1. Key-facts row: four glass chips with words (section 0).
2. The fee-by-size table, cards on a phone (section 2). The page's main tool.
3. The two-bar sales chart, "Higher floors at the Palace sold for more" (section 4).
4. One labelled aerial (section 1), replaced by the photo partner's beach-side shot when it arrives.
Nothing else: no map (the place is one building), no illustration.

## Homes strips

One: the building's live strip under the opening (place "the-palace"; title "Condos for sale in the Palace, a 241-foot tower on the ocean" or "Own a condo in the Palace Resort, on the ocean in Myrtle Beach"; fallback pill "Send me Palace condos for sale"). No second strip: a second Palace strip would repeat the same homes. If the lead wants one more, the only true one is the two-bedrooms (`beds=2`), titled "Two-bedroom condos at the Palace, sleeping six", after section 2.

## Offers (no two with the same words)

| Where | Words | Link |
|---|---|---|
| Under the answer | Get the Palace condos for sale sent to you | /contact/ |
| After the fees | Have us get the Palace's budget, reserve study and any assessment before you offer | /contact/ |
| After renting | Have us get the rental program's terms and a unit's booking history | /contact/ |
| After sales | Thinking of selling a Palace unit? Have us price it from these sales | /contact/ |
| After the checks | Have our affiliated lender, BrickWood Mortgage, look at the unit before you offer | /contact/ |
| End band | Book a showing at the Palace (and the phone button) | /contact/ or #lead-form |

## Checks before build

- One value on every surface: 241 feet; 302 units (298 condos); about $685 for the typical unit only beside the sizes; 21 sales; about $142,000. The same as the directory's Palace entry.
- No sentence about guests' or owners' people; no rating of the resort company; no quote from guest reviews; no staff names.
- No "indoor pool" (row 13 note); "putting green next to its oceanfront pools" (CB verifier); "floors numbered up to 23", never "23 stories".
- The spec reads `listings.json`, `county.json`, `flood.json` and `tax.json`, and stops (`must`) if the fee bands overlap or a group has fewer than 5 listings, in which case the table shows the range in words instead.
