# Story bank

These are the real stories, numbers and observations that Devin Day, Tim Nash and the agents gave to the earlier AI in chat. Each one is in `stories.json`. A writer uses this bank instead of asking the owner for a new story each time.

## How the bank is used

1. Search `stories.json` by topic, place or property type. The table below lists every entry by topic.
2. Read the `summary`, the `limits` and the `checked` note before you write a sentence.
3. Write from the summary and the numbers. Never add a detail, a number, a place or a name that is not in the entry.
4. Follow every limit. Most entries are "usable-with-limits". The limit says exactly what may not be said.
5. Never use an entry marked "do-not-use". Those are listed so nobody brings them back.
6. Check `publishedOn`. A story already on two or more pages should not be the lead story of a new page.
7. A story about a deal is told as "an agent at Chapter3" or "one of our agents", or as Tim's when it happened before Chapter3 existed (PLAYBOOK A11e). Every specific outcome carries "his numbers, not a promise".
8. Devin may be the byline and the author note. He is never named in the copy, a story or a CTA (owner, 2026-10-05).
9. When a new answer comes from the owner, add an entry with its source line. Do not edit an old entry's verbatim text.

## What the fields mean

- `teller` is the person whose experience it is. Every entry reached the earlier AI through Devin in chat. "unknown" means the source names only "a co-worker" or does not say.
- `source` is the file in the website repo and the line numbers.
- `verbatim` is copied from the source by line number. Line breaks in the source are joined with one space. `[...]` marks a gap between two exact passages. In the relocating file most lines are the earlier AI's notes, not the owner's own words; the limits say so where it matters.
- `publishedOn` was found by searching the visible text of all 132 live pages on 2026-10-05, at commit 04fb120 of the live branch.

## Problems found on the live site while building this

- `/buyers/buying-in-myrtle-beach/` still says prices are appreciating "at around 10.5%". The owner retired that figure (batch 5, answer 10).
- `/buyers/relocating/from-ohio/` says Devin's own bills are on the cost of living page. They are not there.
- Eleven relocating pages and two selling pages name Devin in the body copy or a CTA ("Devin, who wrote this page", "Talk to Devin Directly"). That breaks the 2026-10-05 rule.
- `/invest/j1-rentals/` says "We have walked through a house here with more than 60 J-1 students". The source says the brokerage sold the house and the landlord reported the count.
- `/invest/strategies/fix-and-flip/` states $335,000 and $224,300 for the inherited-house flip. The owner later said $390,000 and $130,000. It is still unresolved.

## Index by topic

### Moving here: costs and taxes

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `household-utility-bills` | The owner's own bills on a 1,400 square foot two-storey house: summer electric about $130 a month, water about $50 a month. | Devin Day (owner) | usable-with-limits | 0 |
| `car-insurance-anecdote` | The owner pays $145 a month for full-coverage car insurance. | Devin Day (owner) | usable-with-limits | 0 |
| `gas-cheaper` | The owner says gas here is 50 to 75 cents a gallon cheaper than where transplants come from. | Devin Day (owner) | usable-with-limits | 1 |
| `taxes-utilities-cheaper` | The owner says his taxes "got a lot cheaper" after the move. | Devin Day (owner) | usable-with-limits | 0 |
| `dollar-stores` | The owner and a co-worker see more dollar stores here than in Maryland and Texas. | Devin Day (owner) | usable-with-limits | 0 |
| `ohio-move` | The owner moved from Pleasant City, a village of about 400 in Guernsey County, Ohio, about three years before August 2026. | Devin Day (owner) | usable-with-limits | 3 |
| `ny-client-tax-drop` | A New York client household sold a $1M house with $20k+ a year in property tax and bought a $700k house here with about $3,200 in tax. | Devin Day (owner) | usable-with-limits | 1 |
| `nj-holdback` | The owner said New Jersey holds back 2% when a nonresident sells. | Devin Day (owner) | usable | 1 |
| `maryland-transplant` | A colleague who moved from Clarksville and Columbia in Howard County, Maryland says farm stands and butchers fill the organic gap the stores leave, there are many more motorcycles in summer, and construction is everywhere. | unknown | usable-with-limits | 3 |
| `same-house-for-less` | The owner says buyers get the same house for less here, so the loan is smaller. | Devin Day (owner) | usable-with-limits | 1 |

### Moving here: jobs

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `business-owners-lower-prices` | Business owners who move here report that they cannot charge as much for their services as they did up north. | Devin Day (owner) | usable-with-limits | 1 |
| `nc-client-build-longs` | North Carolina clients built a new house: they bought land in Longs, used a builder and BrickWood financing, and expanded their cleaning business here. | Devin Day (owner) | usable-with-limits | 1 |
| `pa-buyers-retirees` | Most of the brokerage's Pennsylvania buyers are retirees. | Devin Day (owner) | usable-with-limits | 1 |
| `jobs-within-two-months` | Most of the brokerage's buyers arrive and find work within a month or two. | Devin Day (owner) | usable-with-limits | 1 |
| `cps-client-hired` | A client applied for a child protective services job during a visit and was hired a month later. | Devin Day (owner) | usable-with-limits | 1 |
| `veteran-alternating-weeks` | A veteran client lives here and works his New York job in alternating weeks. | Devin Day (owner) | usable-with-limits | 2 |
| `family-business-income-history` | Someone hired by a family business may need up to two years of income history before a lender will count the income. | Devin Day (owner) | usable-with-limits | 1 |
| `remote-workers-half` | About half of the buyers who come to the brokerage from the northern states arrive with a remote job. | Devin Day (owner) | usable-with-limits | 1 |
| `northern-pay-higher-end` | If you keep northern pay and live here, you earn at the higher end of wages in this market. | Devin Day (owner) | usable-with-limits | 1 |

### Moving here: daily life, beaches, roads, weather, schools

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `beach-parking-resident-pass` | After getting a South Carolina licence, a resident can get a parking pass from the city parking office at 914 N. | Devin Day (owner) | usable-with-limits | 1 |
| `golf-cart-community` | The area is not walkable. | Devin Day (owner) | usable-with-limits | 1 |
| `not-a-party-city` | The owner says Myrtle Beach is not the party city people expect. | Devin Day (owner) | usable-with-limits | 1 |
| `making-friends-seasonal` | Making friends is harder than movers expect, because many people near the city core are tourists or seasonal workers who leave. | Devin Day (owner) | usable-with-limits | 0 |
| `northerners-adjusting` | The owner described how northerners react to people here. | Devin Day (owner) | usable-with-limits | 0 |
| `traffic-timing` | Summer traffic is "not very bad". | Devin Day (owner) | usable-with-limits | 3 |
| `off-season-open` | In the off season nothing closes except tourist attractions and water parks. | Devin Day (owner) | usable-with-limits | 1 |
| `mosquitoes` | Mosquitoes are more noticeable here than in a big city, because the area is more rural. | Devin Day (owner) | usable-with-limits | 1 |
| `heat-and-humidity` | The owner's first summer was hot and humid. | Devin Day (owner) | usable-with-limits | 0 |
| `sunglasses` | The owner never needed sunglasses before he moved. | Devin Day (owner) | usable-with-limits | 1 |
| `roads-better-paved` | A co-worker of the owner who lived in New York, Maryland and Texas says the roads here are better paved. | unknown | usable-with-limits | 0 |
| `housing-types-mix` | Zoning here mixes housing types within short distances, more than in the Northeast. | Devin Day (owner) | usable-with-limits | 0 |
| `new-hospital-nearby` | A new hospital is under construction, and south-strand communities sit across from the South Strand Hospital site. | Devin Day (owner) | usable-with-limits | 2 |
| `client-origins` | Most of the brokerage's relocating clients come from New York and North Carolina, and a few from Ohio. | Devin Day (owner) | usable-with-limits | 1 |
| `tim-first-ten-minutes` | Tim Nash told the owner what he says to every relocation client in the first ten minutes. | Tim Nash | usable-with-limits | 1 |
| `ny-buyer-rules-fit` | The owner named the biggest mistake New York buyers make. | Devin Day (owner) | usable-with-limits | 1 |
| `ny-client-boat` | New York clients bought beachfront in North Myrtle Beach near the waterway, so they could finally use their boat. | Devin Day (owner) | usable-with-limits | 2 |
| `schools-zone-edge-family` | A family moved here because their oldest child was starting at Coastal Carolina University and the younger child still needed a school. | Devin Day (owner) | usable | 1 |
| `murrells-inlet-team-choice` | Two members of the team both chose to live in Murrells Inlet. | Devin Day (owner) | usable-with-limits | 1 |
| `tim-hurricane-hugo` | In September 1989 Tim Nash's family evacuated to Augusta, Georgia ahead of Hurricane Hugo. | Tim Nash | usable-with-limits | 1 |
| `virginia-beach-comparison` | Clients from Virginia compare Virginia Beach as much bigger, with an entertainment scene many times this one. | Devin Day (owner) | usable-with-limits | 2 |
| `connecticut-movers` | Connecticut movers praise the historic towns they leave, mention the winters, describe prices "getting out of hand", and want more beach and more room. | Devin Day (owner) | usable-with-limits | 1 |
| `boston-hotel-manager` | A friend who ran a Boston hotel retired with about $100,000 saved, sold his Massachusetts house for about $450,000, and bought three condos in one oceanfront building. | Devin Day (owner) | usable-with-limits | 2 |
| `beach-character` | Downtown Myrtle Beach is the social beach, with about $10 all-day parking, volleyball and the boardwalk. | Devin Day (owner) | usable-with-limits | 1 |
| `garden-city-winter-cart` | In the winter cart season a family loads a cooler and buckets into a golf cart, drives onto the sand at Garden City, and spends the day on an empty beach. | unknown | usable-with-limits | 1 |

### The team and how the brokerage works

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `fred-nash-boulevard` | Tim Nash's father, Fred Nash, sold real estate here before him. | Devin Day (owner) | usable | 23 |
| `nash-three-generations` | Tim Nash's grandfather owned farms, restaurants and rental properties in Myrtle Beach. | Devin Day (owner) | usable-with-limits | 2 |
| `relationships-not-ads` | The owner says a new company can outspend Chapter3 on Facebook ads, but it cannot create friendships that last years. | Devin Day (owner) | usable | 1 |
| `low-appraisal-reconsideration` | Low appraisals are rare here. | Devin Day (owner) | usable-with-limits | 1 |

### 1031, BRRRR, flips and off-market deals

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `client-200-properties-1031` | A New York based investor, a longtime customer of Tim Nash, owns over 200 properties, mostly condos. | Devin Day (owner) | usable-with-limits | 1 |
| `strategy-mix` | Many investors sell in expensive markets and buy in lower-cost, high-growth states, and 1031 buyers are one of the biggest groups the brokerage works with. | Devin Day (owner) | usable-with-limits | 2 |
| `1031-team-speed` | The brokerage's agents, lending partners, insurance and legal partners let a 1031 buyer move quickly and avoid missing the 45-day and 180-day deadlines. | Devin Day (owner) | usable-with-limits | 1 |
| `cap-rate-not-finishes` | The owner says a replacement property should be judged on cap rate and tenant history, not on floors and counters, because it is an investment, not a home. | Devin Day (owner) | usable-with-limits | 1 |
| `reo-discount-observation` | Bank-owned homes are one of the best sources for BRRRR. | Devin Day (owner) | usable-with-limits | 1 |
| `distressed-condo-discount` | Distressed-owner condos in stable buildings average a 22.32% discount, because condo supply is large and half of investors do not want to buy in a condo building. | Devin Day (owner) | usable-with-limits | 1 |
| `brrrr-target-areas` | Most good BRRRR candidates are lower-value homes inland toward Longs or Little River, or condo units in a stable building with a distressed owner. | Devin Day (owner) | usable | 1 |
| `quiet-sale-condo` | An agent befriended a consultant he met at a networking event. | an agent at Chapter3 | usable-with-limits | 1 |
| `woodlawn-rehab` | A house on Woodlawn Drive took $90,317.80 of rehab. | Devin Day (owner) | usable-with-limits | 1 |
| `inherited-house-flip` | An inherited house was rehabbed in about 2.5 months and advertised during the work. | Devin Day (owner) | usable-with-limits | 1 |
| `flip-buyers-and-wholesale` | Flipped houses here sell to relocators and retirees. | Devin Day (owner) | usable-with-limits | 1 |
| `builder-brrrr` | A builder the brokerage works with builds houses that appraise for more than cost right after completion and rent for more because they are new. | Devin Day (owner) | usable-with-limits | 1 |
| `off-market-financed-offer` | Nothing beats a cash offer, but the agents can find off-market properties through friends and negotiate a deal that allows financing. | Devin Day (owner) | usable | 2 |
| `flip-steps-and-costs` | The owner's flip steps: buy below market with the agents' help finding distressed homes, do the work, watch holding costs, and sell with the agents. | Devin Day (owner) | usable | 1 |
| `brrrr-needs-rental-market` | BRRRR is hard to find because the distressed house must also sit in a strong rental market, since the strategy depends on high rents. | Devin Day (owner) | usable | 1 |

### New construction as a rental

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `new-community-rent-caps` | There is no single pattern for rental caps in new communities, because locations vary: near the ocean, west of Highway 17, near the college, rural Longs, retiree communities, and near entertainment. | Devin Day (owner) | usable-with-limits | 1 |
| `little-river-townhouses` | An agent now on the team helped buyers purchase about eight nearly identical townhouses in a new community in Little River. | an agent at Chapter3 | usable-with-limits | 1 |
| `buy-new-community-early` | New communities can be a good investment if you buy early. | Devin Day (owner) | usable-with-limits | 1 |
| `nine-house-holder` | In the same Little River community, another buyer who was not a Chapter3 client bought nine homes, rents none of them, and plans to sell them at about $300k. | Devin Day (owner) | usable-with-limits | 1 |
| `builder-incentives-rare-investors` | Most builders here offer incentives to FHA, VA and conventional buyers, but it is very rare for a builder to offer incentives to investors using DSCR loans. | Devin Day (owner) | usable | 1 |
| `builder-warranty-visit` | Many builders here send their maintenance person within the first 12 months to fix defects and touch up paint. | Devin Day (owner) | usable-with-limits | 1 |

### Foreclosures and tax sales

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `foreclosure-connections-tech` | The owner says the team's decades in the market and its connections let it hear about new foreclosures faster. | Devin Day (owner) | usable-with-limits | 2 |
| `master-in-equity-experience` | The owner says one person bought many foreclosures, some as his own investments and some for customers, and that the team is experienced in master-in-equity sales. | Devin Day (owner) | usable-with-limits | 1 |
| `tax-sale-sister-notice` | A client bought at a tax sale and waited the 12-month redemption period. | Devin Day (owner) | usable-with-limits | 1 |
| `bank-owned-45-days` | A financed purchase of a bank-owned home takes about 45 days, longer than an ordinary purchase, depending on the case. | Devin Day (owner) | usable-with-limits | 1 |
| `hoa-lien-flip` | Unpaid HOA fees are usually a lien paid from the seller's proceeds. | Devin Day (owner) | usable-with-limits | 1 |
| `courthouse-sale-porch` | Before a buyer bid at a courthouse foreclosure sale, an agent visited the house: a brick ranch on an acre with a tarped roof. | an agent at Chapter3 | usable-with-limits | 1 |

### Rentals, tenants and landlords

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `investors-near-hospitals` | Northern investors buy in high-appreciation areas and near new hospitals. | Devin Day (owner) | usable-with-limits | 1 |
| `multifamily-listings` | There are usually fewer than 100 multifamily listings here, priced from $225k to over $13M. | Devin Day (owner) | usable-with-limits | 1 |
| `j1-multifamily-audience` | J-1 students are the biggest audience for multifamily rentals here, paying $500 to $700 per person. | Devin Day (owner) | usable-with-limits | 1 |
| `str-cheapest-cleaner` | The worst short-term rental mistake the owner sees is self-managing with the cheapest cleaner; theft and damage followed. | Devin Day (owner) | usable-with-limits | 1 |
| `investor-common-question` | The most common investor question is "send me properties with analytics to prove it". | Devin Day (owner) | usable | 0 |
| `unwarrantable-condo-ltv` | An unwarrantable condo needs about 25% down, against 20% in a warrantable building, so an extra 5% of the value stays tied up in that unit and cannot fund the next purchase. | Devin Day (owner) | usable-with-limits | 1 |
| `rental-program-buildings` | Rental programs here are usually in oceanfront short-term rental buildings. | Devin Day (owner) | usable-with-limits | 1 |
| `student-tenant-pools` | Students near Coastal Carolina want the cheapest house that fits their group. | Devin Day (owner) | usable-with-limits | 1 |
| `student-cosigners-premium` | About 75% of college student tenants have a parent co-sign, because most cannot qualify alone at 3 to 5 times the rent in income. | Devin Day (owner) | usable-with-limits | 1 |
| `hoa-rental-bans-filtered` | Many communities ban renting the house out at all. | Devin Day (owner) | usable-with-limits | 1 |
| `eviction-timeline` | An eviction can take up to 3 weeks to be approved. | Devin Day (owner) | usable-with-limits | 1 |
| `pm-eviction-fees` | Many property managers handle evictions, depending on the service level. | Devin Day (owner) | usable-with-limits | 1 |
| `august-turnover` | Near the college, August turnover has been no problem, because new students arrive and need housing. | Devin Day (owner) | usable | 1 |
| `fastest-eviction-police` | The fastest eviction in the brokerage's files took a few days. | Devin Day (owner) | usable-with-limits | 1 |
| `maryland-voucher-developer` | A developer from Maryland bought 3 to 4 bedroom fixer-uppers here to rent to voucher holders, because the voucher pays more for more bedrooms. | Devin Day (owner) | usable-with-limits | 1 |
| `voucher-pays-on-time` | The owner said landlords do not need to worry about late rent on a voucher, because the government pays on time each month. | Devin Day (owner) | usable-with-limits | 1 |
| `reserve-story` | A buyer wanted to fix a house he owned, rent it, then sell a few others and buy more, but fixing the house would have left him broke. | Devin Day (owner) | usable | 1 |
| `overcrowded-j1-house` | The brokerage sold a house whose landlord said he had 40 people in a 2,500 square foot house, each paying $700 a month, and 20 more in a detached garage. | Devin Day (owner) | usable-with-limits | 1 |

### Financing, LLCs, insurance and tax on a rental

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `insurance-quote-before-offer` | The owner wants buyers told that Chapter3 can get them an insurance quote before they make an offer on a house. | Devin Day (owner) | usable | 2 |
| `dscr-zillow-links` | A buyer spent a year sending Zillow links to his agent and was told each time that it was a good buy in an up and coming neighborhood. | Devin Day (owner) | usable-with-limits | 1 |
| `active-not-passive-agent` | The owner says many agents wait for the client to bring a deal. | Devin Day (owner) | usable-with-limits | 1 |
| `dscr-lender-figures` | From the owner's loan work: DSCR purchases take 15 to 25 percent down, more on a condotel. | Devin Day (owner) | usable-with-limits | 1 |
| `no-vendor-names` | The brokerage works with attorneys, management companies and insurance agents it can recommend once it is working with a customer. | Devin Day (owner) | usable-with-limits | 1 |
| `llc-occupancy-fraud` | A buyer may move a home into an LLC with the lender's approval, even an owner-occupied one. | Devin Day (owner) | usable-with-limits | 1 |
| `llc-practice` | All DSCR and business-purpose loans close in an LLC or corporation. | Devin Day (owner) | usable-with-limits | 1 |
| `llc-owner-occupied-multi-member` | If the LLC's owner lives in the house, it can be accepted. | Devin Day (owner) | usable-with-limits | 1 |
| `first-rental-hardest` | The first rental is the hardest to finance. | Devin Day (owner) | usable-with-limits | 0 |
| `equity-for-next-rental` | After a few properties, an investor can fund the next down payment from the equity in properties they own, through a cash-out refinance or a line of credit, so the purchase takes no new cash from savings. | Devin Day (owner) | usable-with-limits | 1 |
| `second-rental-paperwork` | A common second-rental mistake is expecting the same loan process as the first. | Devin Day (owner) | usable-with-limits | 1 |
| `landlord-insurance-premium` | Insurance on a rental is not as much more than on a home as people expect. | Devin Day (owner) | usable-with-limits | 1 |
| `flood-insurance-rental` | The owner says flood insurance on a rental is about three times more than on a primary home. | Devin Day (owner) | usable-with-limits | 1 |
| `property-tax-rental` | Taxes stop more rental deals than insurance does. | Devin Day (owner) | usable-with-limits | 1 |
| `dscr-priced-like-conventional` | With good credit and a 1.25 to 1.5 DSCR, a DSCR loan prices about the same as a conventional loan. | Devin Day (owner) | usable-with-limits | 1 |
| `ten-property-rule-rare` | The owner has not hit the ten financed property limit in his loan work. | Devin Day (owner) | usable-with-limits | 1 |
| `canadian-buyers-loans` | Canadians usually need a DSCR loan unless they have a Social Security number and US credit, or an EAD card. | Devin Day (owner) | usable-with-limits | 1 |
| `canadian-withholding` | The owner has not had a withholding issue with Canadian buyers. | Devin Day (owner) | usable-with-limits | 0 |

### Selling a rental

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `tenant-occupied-buyer-pool` | With more than 3 to 4 months left on a lease, a tenant-occupied house is very hard to sell to someone who will live in it, because FHA, VA and USDA loans require the buyer to move in within 60 days. | Devin Day (owner) | usable-with-limits | 1 |
| `tenant-showing-legal-risk` | The agent cannot control the condition of the house at a showing. | Devin Day (owner) | usable-with-limits | 2 |
| `tenant-occupied-sale-13-days` | An agent sold a tenant-occupied house for a man who had owned it 15 years and was moving to New York to be with his sister. | an agent at Chapter3 | usable | 1 |

### Market numbers

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `growth-interstate-hospitals-houses` | The owner sums up the growth as a new interstate, three hospitals and 7,000 houses. | Devin Day (owner) | usable-with-limits | 3 |

### Do not use

| id | Summary | Teller | Status | Live pages |
|---|---|---|---|---|
| `homeless-observations` | The owner gave observations about homeless people. | Devin Day (owner) | do-not-use | 0 |
| `name-and-founding` | The name "Chapter 3" has no story, and the brokerage is new. | Devin Day (owner) | do-not-use | 0 |
| `nicer-culture` | The owner said the culture here is nicer. | Devin Day (owner) | do-not-use | 0 |
| `health-framing-cut` | The owner said people with medical issues love this area, and gave a 7 to 10 minute North Myrtle Beach drive figure. | Devin Day (owner) | do-not-use | 0 |
| `age-areas-cut` | The owner said there is no shortage of younger people near the college and gyms, and a colleague said ages mix in Maryland but separate here. | Devin Day (owner) | do-not-use | 0 |
| `surfside-families-cut` | The owner described Surfside as just families and their kids, the nicest people, mainly locals. | Devin Day (owner) | do-not-use | 0 |
| `safer-cleaner-healthier-cut` | The owner said South Carolina is safer, Connecticut cities are safe, the beaches have less pollution, sunnier weather makes people feel healthier, and recalled a DoubleTree fiber convention. | Devin Day (owner) | do-not-use | 0 |
| `voucher-never-again-claim` | The owner said a voucher tenant who damages the house and is reported to HUD can never get another voucher. | Devin Day (owner) | do-not-use | 0 |
| `appreciation-10-5` | The 10.5 percent appreciation figure on the hub was older numbers and only true in some areas. | Devin Day (owner) | do-not-use | 1 |

124 entries: 29 stories, 77 observations, 18 numbers. 14 usable, 101 usable with limits, 9 do not use. 20 are not on any live page yet.
