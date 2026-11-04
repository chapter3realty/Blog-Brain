# Review round 1: /buyers/relocating/which-town/

Fixer, 2026-11-04. Every change is in `specs/relocating-which-town.js` and its data folder; the page is rebuilt from the spec. New facts are rows F1 to F19 in `facts.md` (VERIFIED-BY-FIXER, for the lead to re-check). The spec before this round is saved in scratch as `wf2/buyers-relocating-which-town/spec-before-fix1.js`.

## Gates after the fix

- `node tools/mkpage.js specs/relocating-which-town.js`: builds.
- `score.js --only`: 100/100 (the find section now has its "On this page" label, which fixes H14). P2 is 3.2 numbers per 100 words (it was 4.6). P6, P10 and S11 pass.
- `claims-scan`: 0 findings. `facts-check`: no hits on this page. `house-claims`: 0. `struck-check` (this page's struck.json): no struck wording. `repeat-check --strict`: passes (it failed before).
- `critic.mjs` at 320, 390, 1024 and 1440: 0 blocking. Warnings: read.wall on the FAQ at 390 and 320 (the sources line and the 13 photo credits, reference text) and one at 320 in #city-or-county (one paragraph between the rental list and the CTA).
- `node build.js check`: OK. `node build.js audit`: for this page only the two date mismatches (the lead's `build.js dates`) and the A20 warning (no quote from a licensed person; we never write one for Tim).
- Every sentence in `<main>` is 28 words or fewer; none opens with "So" or "Here is"; the hero sub-header has no we, our or us.
- New shots (390 and 320) looked at: `wf2/buyers-relocating-which-town/fix1shots/`. Headings and buttons now break in balanced lines; the cost cards have one-line labels; the chart rows read "about $8,300 a year" on one line.

## Critic, blocking

| Finding | What I changed |
|---|---|
| Sales tax cell said 8% in every other town | The cell now reads "9% Myrtle Beach; 8% Horry; 7% Pawleys" (inside a town) and "8% in Horry, 7% in Georgetown" (outside). compare.js caps a cell at 40 letters, so the full wording could not fit. |
| "No zoning limit outside the towns" was false for Georgetown | The cell reads "Horry: no limit. Georgetown: one zone". Under the table, a list gives the rule place by place at row 23's verified wording, including "Outside the towns in Georgetown County: a tourist home only in the resort residential district, as a conditional use." |
| Surfside Beach called a city; Loris a "small town" | "Four of the 13 places are a city or town in full. Myrtle Beach, North Myrtle Beach and Conway are cities, and Surfside Beach is a town. The City of Loris, the Town of Aynor and the Town of Pawleys Island sit inside places that are mostly county land." The FAQ that repeated it is cut. The map legend says "Inside a city or town's limits". |
| "Every house for sale here lists an HOA fee" | One group, the ZIP code: "Nearly every house for sale in the Carolina Forest ZIP code lists an HOA fee, about $125 a month in a typical listing." |
| Chip "New houses" hid Carolina Forest | The chip is now "Builders selling now", which is what it measures (builders' share of sales). |
| "Middle house" undefined and used two ways | "Middle house" is gone from the page. The find section says once: "A typical house, on this page, is the one in the middle. Half the houses sold for more and half for less, or half are closer to the beach and half farther." Price lines vary: "half for more and half for less", "the middle sale", "a typical house". |
| Two sentences over 28 words | Both rewritten: the flood-policy sentence is three sentences; the FAQ list of 13 names is cut. A check over every sentence in `<main>` finds none over 28. |
| P2 at 4.6 numbers per 100 words; the yearly-cost line closing all 13 entries | The yearly cost is out of every entry; the chart carries it. Each entry keeps one price line and two or three other figures. Drive minutes and flood shares stay in the table except where they are the entry's point. P2 is now 3.2. |
| "Keeping it each year, besides the mortgage, varies much less" | The short answer no longer makes this point. The yearly-cost section says it once, plainly: "For a typical house, about $6,400 to $9,700 a year ... That spread is much smaller than the spread in price." |
| One word alone on a button line | Shorter labels ("Send me houses in Loris") and `text-wrap: balance` on buttons and offer pills in the spec's own CSS. Checked at 390 and 320. |
| One word alone on the last line of an H2 or the H1 | `text-wrap: balance` on the H1, H2 and H3 in the spec's CSS. "Surfside Beach: the sand at the end of the street" now breaks into three even lines at 390. |
| Chart rows wrapped to "keep" alone | The row label is "about $8,300 a year"; the chart's title says it is the cost each year besides the mortgage. |
| Cramped cost cards | Labels shortened to "Tax, as your home", "County fee", "Insurance", "HOA fee", "Upkeep", "Total a year". Amounts are whole dollars ($89, not $89.40). Each label is one line at 320. |

## Reader, blocking

| Finding | What I changed |
|---|---|
| The insurance figure: how much more near the beach | The yearly-cost section now says what the cards assume and how far it can move: "The cards use about $2,000, the middle that Horry County owners pay for a house; half pay between about $1,300 and $3,000. East of US 17, an insurer may leave wind and hail out, and you can buy that cover separately." Then the flood policy, then a worked case: "A typical Surfside Beach house in the high-risk flood zone, with a $3,000 insurance bill, costs about $10,400 a year to keep instead of $8,300." Then the story at its approved wording: "If you buy with us, we get you an insurance quote for the address before you make an offer." No source gives a wind-cover price by distance from the beach, so the page gives the county's spread, not a beach figure. The Surfside line that leaned on the insurance figure ("less than in four places") is cut. |
| Hospital drive for only six places | The comparison table has a "To a hospital" column for all 13, with a note naming the five hospitals (row 17's verifier asked for the set to be named). compareCards takes four columns, so the lot column moved out; the lot story stays in the Loris and Aynor entries. |
| "The middle house" for two things | See the critic's finding above. |
| Pawleys Island: island or mainland for $650,000? | "Across the island, the mainland and Litchfield, the middle sale was about $650,000, and nearly all of those sales were off the island. On the island itself, the middle sale over the last three years was about $2.45 million." |
| The homestead exemption is not explained | Below the tax chart: "At 65, after a year living in South Carolina, the first $50,000 of your home's value is not taxed. Outside the towns in Horry County, that saves about $180 a year; in Conway, about $330." (Retirees rows 19 and 23; the phrase "homestead exemption" is an industry term in rules/plain-words.json, so the page says what it does.) |
| Why tell me half the houses are main homes? | North Myrtle Beach: "On the county's tax rolls, about half the houses here are someone's main home. The rest are taxed as second homes or rentals." Its rental rule is in the city-or-county list. Surfside Beach: "Along the ocean, only about 1 in 8 homes is. On many inland streets, about 7 in 10 are." The reader can now see where the second homes are. |

## Owner, blocking

| Finding | What I changed |
|---|---|
| Repetition and fixation (repeat-check strict failed) | Each entry's money line is worded on its own; drive-minute and builder lines are cut from the entries that only reported them. `repeat-check --strict` passes. |
| The price-against-yearly-cost point made five times | Made once, in the yearly-cost section. Cut from the short answer, the Surfside entry, the compare intro (the 2.3 and 1.5 ratios) and the "two things" list. |
| Leads with price | H1 kept; its second line is "13 places near Myrtle Beach, compared." Hero sub: "From Loris to Pawleys Island: where the sand is closest, where an acre is normal, where builders are selling, and what changes at the city line." The short answer opens with the which-place-for-which-want list, and the only price item is "The lowest prices: Conway, Loris, Longs and Socastee", with no figure. Socastee's heading is "a historic village on the waterway". The meta description and share title no longer lead with price. |
| Entries report data instead of selling the place | North Myrtle Beach: Ocean Drive's Main Street, McLean Park and the Ingram Dunes preserve; the shag; the Cherry Grove boat ramp to the ocean through Hog Inlet. Surfside Beach: the new concrete pier (free to walk, two restaurants), every home less than a mile from the beach road, where the second homes are. Longs: a new house asks about the same per square foot as a nearly new one; a Longs address can be inside North Myrtle Beach (Grande Dunes North and Waterside). Carolina Forest: a planned area outside the city with a Myrtle Beach address; McLeod's new hospital ribbon-cutting; the trails; no house for sale listed as open to nightly rentals. Loris: the most houses for sale with RV or boat parking. Garden City: golf carts on the county's beach from November through February. Conway: which streets flood first, how often, and that 95 in 100 homes are outside both flood areas. All from verified rows of the town pages' ledgers (facts.md F8 to F17). |
| Too many exact numbers per entry | Each entry now carries two to four figures. Loris has 4 (it had 11). The card fee is "$89", not "$89.40". |
| "Middle house" 32 times | See the critic's finding above. |
| Jargon | "zone A or AE" is said in words ("the A zones. Those are FEMA's high-risk zones away from breaking waves"); the struck-check needs the A-zone scope, so the term stays once, explained. "Unincorporated" is gone from the body ("county land", "county residents who live outside the towns"). "School operating tax" is now "most of the school tax comes off its bill". "Census area" is gone ("The Murrells Inlet on this page is the part in Georgetown County, south of the county line"). "2026 levy" is now "tax rates and bills for 2026". "The town's ordinance" is now "Each town can set its own". |
| The same facts repeated across sections; FAQ restates the body | The map caption and the FAQ no longer repeat the towns line. FAQ cut to three: Myrtle Beach or North Myrtle Beach (now in words, without the body's minutes), year-round homes, and crime (fair housing). Added one the body does not answer: "Does a Myrtle Beach address mean the house is in the city?" Cut: "What towns are near Myrtle Beach?", "the cheapest town" and the drive-times question. The rental rules are said once, in the city-or-county list; the Myrtle Beach entry keeps one line on its rental zones. |
| The Loris photo did not show the land | New USDA NAIP 2023 frame outside Loris: houses and manufactured homes on wide lots along two country roads, sheds, fields across the road. Looked at full size. Caption: "Outside Loris: houses on wide lots along two country roads, with sheds, gardens and farm fields across the road." The downtown frame is removed. `photos.js check`: all records pass. |

## Nits taken

- "a free decal for free parking" is now "A city resident's parking decal costs nothing, and it covers parking at the city's meters and pay stations." The icon is the town icon, not the beach umbrella.
- Offer pills are requests: "Send me houses in Loris".
- Little River: "Little River is not a town, so the county makes the rules. There is no city tax, and trash goes to a private hauler or a county drop-off center."
- Photo badges: every aerial badge now names its year (the four reused records had none; make_photos.py adds the year from each record's "taken").
- Trash row: the cell no longer says every town picks up at the curb. The line under the table names the three cities that pick up and the three towns the Solid Waste Authority lists as offering service. The Town of Pawleys Island is not named, because it was not checked.
- Chip "Under $300,000" is now "Up to $300,000", which matches Longs and Socastee at $299,900.
- Socastee's flood line no longer says "the most of any place away from the ocean": "About 1 in 9 houses here are in FEMA's high-risk flood zone, more than twice the share in Conway or Myrtle Beach."
- North Myrtle Beach HOA line at the verifier's wording: "About half the houses for sale list no HOA fee."
- The "North Myrtle Beach's ... middle house for sale lists no HOA fee" card now reads "North Myrtle Beach has a low city tax rate, and about half its houses for sale have no HOA fee."
- Empty block under the map at 1024 and 1440: the map is sticky beside the list on wide screens (spec CSS).
- Little River's entry still leads with the Vereen gardens and the Kings Highway, with the boat slips second, so it does not lead the way the Little River page does.

## Findings I did not change, and why

- **The live-homes strip above the short answer (critic and reader).** The website's edge puts the "new in the last 30 days" feed on articles; fix-and-flip has it too. A spec cannot move it. The empty strip in the critic shots is the critic tool not answering photos.test (NEEDS 10).
- **Five reused sibling photos (critic, uniqueness).** Kept: they are the right pictures of those places, and the photo partner's shot list (`shot-list.md`) asks for our own. The Loris frame is new.
- **10 of 13 photos are straight-down aerials; the Pawleys crop is mostly sand and sky at 390 (owner nit).** Kept until the partner's photos arrive (`shot-list.md`); no other licensed ground photo of these places is in hand.
- **The 13 entry H2s are not questions (critic SEO nit).** Kept as "N. Place: what it has", the pattern of the model list pages (no-hoa-homes, affordable-places-to-live). The section H2s around them are questions.
- **About 5 phone screens from the H1 to entry 1 (owner nit).** Kept: the map and the 13-item filter are the page's selection guide, as on the model pages.
- **Cherry Grove channel count (critic, uniqueness).** Kept as one clause, with the boat ramp, because the New York clients' story is about a boat there. The North Myrtle Beach page owns the detail.
- **Garden City and Aynor entries are under 90 words (repeat-check note).** Both now carry a non-obvious line (the winter golf carts on the beach; the farthest drive to the beach and a hospital). They stay short because the table and chart carry the rest.
