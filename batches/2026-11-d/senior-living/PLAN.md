# PLAN: /buyers/senior-living/

Spec: `specs/senior-living.js` (structure of `specs/home-value.js` and `specs/garden-city.js`; author "devin"). Data: `data/2026-11-d/senior-living/senior-living.json`, built by `build.py` from `raw/`. Facts: `facts.md` in this folder (rows cited as F1, F2 ...). Searches and sibling owners: `must-answer.md`.

## The reader and the decision

Two readers, one decision. An adult child, often living up north, whose parent near Myrtle Beach (or on the way here) is starting to need help. And a couple in their 60s or 70s choosing their last move. Both are deciding: **stay in a home, with help brought in, or move into a place that gives care; and if they move, what happens to the house.** They know none of the words (CRCF, CCRC, skilled nursing) and none of the towns. They are worried about money, about choosing wrong, and about a hurricane. They will ask next: what is included, who pays, where exactly, and what if needs grow.

What they would pay an expert to tell them: the real monthly cost here for each level of care; which level fits which needs, by state rule; where the licensed homes are, by town; what a continuing care contract lets them undo; and whether owning a smaller home with help hired is the better buy for now.

## The answer in two sentences

Assisted living around Myrtle Beach costs about $5,850 a month, and the state licenses 23 assisted living homes in the Grand Strand towns. While no one needs daily care, a home you own costs far less to keep, and help at home runs about $31 an hour.

(F1, F3, F4, F10, F31. The second sentence must give its numbers on the page: $70,200 a year for assisted living against about $1,380 a year in county tax and fees on a $400,000 house at 65, plus insurance and any HOA fee.)

## Title, H1, description

- **Title (61 characters):** Assisted Living Myrtle Beach SC: $5,850 a Month, Town by Town
- **H1:** Senior living around Myrtle Beach: what each choice costs and gives you
- **Hero sub:** Assisted living, memory care, nursing homes and continuing care around Myrtle Beach, with 2025 costs, licensed homes town by town, and when buying a home still makes sense.
- **Description:** Assisted living in Myrtle Beach costs about $5,850 a month. Compare independent living, memory care, nursing homes and continuing care, with licensed homes by town.
- **Keywords:** assisted living Myrtle Beach SC, senior living Myrtle Beach, independent living Myrtle Beach, memory care Myrtle Beach, nursing homes Myrtle Beach, assisted living Conway SC, assisted living Murrells Inlet, assisted living Pawleys Island, how much is assisted living in Myrtle Beach. **Not** "55+ communities" or "retirement communities Myrtle Beach" (the 55+ hub owns both).

Headings are statements where a statement reads better (owner, 2026-11-12); question headings where they match a real search.

## Sections, in order

1. **Short answer** (the two sentences above) and a calm row of four tiles with words: "$5,850 a month, assisted living", "$8,900 a month, nursing home, shared room", "$31 an hour, care at home", "23 licensed assisted living homes in the Grand Strand towns". Slim offer bar under it.
2. **How much is assisted living in Myrtle Beach?** One bar chart, monthly cost by kind of care (adult day care $1,560, assisted living $5,850, care at home 44 hours a week $5,911, nursing home shared $8,897, private $9,885). Plain title: "What a month of care costs around Myrtle Beach". One sentence each: above South Carolina's $5,350 and below the U.S. $6,200 for assisted living (F2); third highest of the state's areas (F6). Say there is no published local figure for memory care or independent living (F7), and offer to get current prices. If the verifier cannot confirm the 44-hour week (F4), the chart shows care at home as "$31 an hour" in a note, not a bar.
   **Mid offer:** "Have us weigh a year of care against your house" (a sale estimate from county sales, never an automated value).
3. **The choices, side by side.** One table, cards on a phone. Columns: what you get; who licenses it; what it costs a month here; what happens when needs grow. Rows: your own home with help hired (F4, F31); independent living and senior apartments (not licensed, F28; four HUD-assisted buildings in Horry County, F27); assisted living (meals three times a day, help with dressing, bathing and medicines, F15 to F16); memory care (an assisted living or nursing home unit for Alzheimer's or dementia, F12 definition); nursing home (nurses on staff, F15); continuing care (one contract, entrance fee, F20). Under the table, the rule a family must know: assisted living cannot keep someone who needs nursing home care, and a move must happen within 30 days (F17).
4. **Where assisted living is around Myrtle Beach, town by town.** A clean table from `by_town`: town, licensed assisted living homes, licensed beds, nursing homes. Myrtle Beach (includes Carolina Forest, Grande Dunes and Socastee addresses), Murrells Inlet (includes two homes named for Garden City), Little River (the nearest to North Myrtle Beach, which has none inside its own city, F11), Conway, Pawleys Island, Loris. One plain sentence per town naming the licensed homes, as the state lists them, in alphabetical order, with no adjective and no ranking. Link to DPH's Find a Facility map for licenses and inspection reports, and to Medicare's Care Compare for nursing homes. A bar chart is not needed; the table is the visual.
   **Mid offer:** "Tour the towns with us before you choose" (where the family would live, near which home).
5. **Memory care and nursing homes here.** Memory care count only if the verifier confirms F12. Nursing homes: 8 in Horry County, 824 beds; 7 of 8 certified for Medicare and Medicaid, and what certification does not promise (F14, F26). Who pays: Medicare does not pay for long-term care; OSS helps low-income residents of licensed assisted living and is not Medicaid (F23, F24).
6. **Continuing care: two licensed campuses on the Grand Strand.** Brightwater in Myrtle Beach and The Lakes at Litchfield in Pawleys Island are 2 of South Carolina's 34 licensed continuing care communities (F19). What the entrance fee buys, the contract must say what part is refunded, and the 30 days to cancel with a refund less costs (F20 to F22). No fees for either campus (no published survey).
   **Mid offer:** "Have us line up the house sale with the entrance fee" (timing a sale to the move-in date).
7. **When buying a home still makes sense.** For a couple or a parent who does not need daily care yet. A one-level home or a condo with an elevator: about $1,380 a year in county tax and fees on a $400,000 house at 65 (link /buyers/retirees/ for the tax rules), against $70,200 a year in assisted living; help at home at $31 an hour when it is needed (F1, F4, F31). One sentence that links the 55+ hub: "Compare the nine 55+ neighborhoods" (the hub owns names, fees and rules). **Wow detail:** Horry County lends beach wheelchairs free on its beaches, booked two days ahead, and Surfside Beach lends them too (F32, F33): a parent who cannot walk on sand can still get to the ocean.
   **Homes strips here** (two, `glass.js homes()`), titles bold and true:
   - "One-level homes a short drive from the sand" (houses, `has: one_level,near_beach`).
   - "Elevator condos: no stairs, no yard to keep" (condos, `has: elevator_building`).
   The button under each strip is the fallback only.
8. **We sell the house up north, or the one here.** The offer section the brief asks for: we help families sell the house up north or here and find the right home, or right-size. What we do at each step, in our words: price the house from recorded sales, time the sale to the move, find the one-level home or the condo. Links to /sell/sell-or-buy-first/, /sell/out-of-state-buyers/, /sell/capital-gains/ and /sell/home-value/ where the reader needs them. Story: none required. If one is used, `pa-buyers-retirees` as one plain line (F35). No new story.
   **Full offer band:** "Sell the house, find the right-size home" to /contact/.
9. **FAQ** (open text, each answer first): Does Medicare pay for assisted living in South Carolina? Does Medicaid? Do assisted living homes here evacuate for hurricanes? (the written plan made with the county, updated yearly, open to families on request, F18). Is independent living licensed? Are there low-cost senior apartments? (F27). What does adult day care cost? (F5). How much is memory care? (no published local figure; we get current prices).
10. **Sources** box: CareScout 2025; SC DPH Find a Facility and Reg. 60-84; SC Department of Consumer Affairs CCRC list; S.C. Code 37-11; Medicare.gov; SCDHHS OSS; CMS Care Compare; HUD. The date of each pull comes from the data file, never typed.

"On this page" list (short labels): Costs, The choices, By town, Memory care and nursing homes, Continuing care, Buying a home, Selling the house, FAQ.

## Visuals (each readable at a glance)

- Four-tile key facts row (section 1).
- One horizontal bar chart from `costs.monthly` (section 2), one message in the title, values on the bars, glass.js style.
- One comparison table that turns into cards on a phone (section 3).
- One town table from `by_town` (section 4).
- Two homes strips (section 7).
- No map, no drawing, no photo of a named care home (rules/images.md; a photo of a named home would read as an endorsement). If the photo partner is asked for anything, it is a one-level street and an elevator condo lobby, not a care home.

## Fair housing and compliance

- Describe the care, the homes and the costs; never the people who live there. Do not reuse the DPH sheet's "average resident" lines.
- 55+ housing may be described as age-restricted; nothing else on the page says who a place suits.
- No ranking, rating or "best". Facilities are named only as the state's public license list, alphabetically within a town.
- No interest rate, payment amount, loan or down payment. The home-cost line is county tax and fees from a verified row, and the yearly cost of care.
- BrickWood is not needed on this page. If financing comes up, it is "our affiliated lender, BrickWood Mortgage, a separate company".
- No automated value for any address; the house offer is a price from recorded sales by an agent.
- Listing data only in aggregate; the strips are written in at the site's edge.
- Devin Day byline, Tim Nash reviewer; neither is quoted, and Devin is not named in the copy.
- No dates typed; no sentence over 28 words; no em dashes; no "So" openers; no "Here is".

## Offers

Slim bar (top), three mid offers (sections 2, 4, 6), two strips (section 7), the full band (section 8). Every button links to /contact/ or #lead-form; the site opens the short pop-up. No two offers share words.

## For BUILD.md (the lead adds these; this page does not edit them)

- **Sitemap and llms.txt:** one line each for /buyers/senior-living/.
- **New homes places** (Blog-Brain `batches/2026-10-b/data/idx-places.json`, `index: false`, `listOnly: true`): `senior-one-level-near-beach` {type: house, has: "one_level,near_beach"}, title "One-level homes a short drive from the sand"; `senior-elevator-condos` {type: condo, has: "elevator_building"}, title "Elevator condos: no stairs, no yard to keep". Both on page /buyers/senior-living/.
- **Pages that should link here** (aim for six or more, on words already there):
  - /buyers/55-plus-communities/: cut the "CCRC and all-inclusive options" H2 to two lines with no fee figures, ending "Assisted living, memory care and continuing care costs are on our senior living page."
  - /buyers/retirees/: from the hospitals section or the FAQ, "when more care is needed".
  - /buyers/relocating/healthcare/: from the hospital list, "assisted living and nursing homes by town".
  - /buyers/relocating/ (hub): one line in its list of guides.
  - /sell/sell-or-buy-first/ and /sell/out-of-state-buyers/: "selling a parent's house before a move into care".
  - /buyers/cost-to-own/: "if you are comparing owning with assisted living".
- **Search ownership:** this page owns assisted, independent and senior living, memory care, nursing homes and continuing care searches; the 55+ hub keeps "55+ communities" and "retirement communities Myrtle Beach".
