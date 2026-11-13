# Verification: HOA fees by neighborhood (/hoa/fees-by-neighborhood/)

Verifier: batch 2026-11-d, 2026-11-13, 21:55 to 22:40 UTC. I did not research this page. Ledger: `facts.md` in this folder. Struck list: `batches/2026-11-d/facts/hoa-fees-by-neighborhood-struck.json`.

## What I did

1. **Re-ran analyze.py** on a copy of the two data files (scratchpad `verify-hoafbn/in/`). The new `table.json` and `findings.json` are byte-identical to the ones in the data folder. Every count in rows 1 to 22 was then recomputed from `table.json` by my own code, not read from `findings.json`.
2. **Re-measured 53 neighborhoods live (55 name and kind checks)** with my own script (scratchpad `verify-hoafbn/scripts/vcheck.py`): every home whose own card has the exact MLS name, and each home's fee found to the dollar by halving the site's `hoaMax` filter from $0 to $5,000. I also counted `hoa=0`, and the `has=` flags for pool, clubhouse, lawn care and internet on the names in rows 7, 10 and 17. All checks ran after the feed refresh (cards show `refreshedAt` 21:50 UTC, `fresh: true`).
3. **Read listing remarks** (property pages at mbcoastalhomes.realgeeks.com, as in batch 2026-10-b method 6) for the 16 manufactured-home names among the 51 "no fee" neighborhoods, and for Lakeside Crossing as the control. I did this to check them only. No remark, address or MLS number is saved or printed.
4. **Opened every web source myself**: the Cresswind About page, the Toll Brothers Townes of Prince Creek West page, the Ocean Lakes Annual Lease Sales page, waterbridgehoa.com, myrtletracesc.org, the live /hoa/ and /buyers/55-plus-communities/ pages, and the Del Webb at Grande Dunes declaration (PDF p. 55, a scan; I ran OCR on it).
5. Checked the shared figures against the sibling pages: Myrtle Trace, Seasons, both Del Webbs, The Farm and /buyers/gated-communities/.

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 24: 2, 4, 5, 6, 8, 9, 10, 14, 16, 18, 20, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44 |
| CORRECTED | 13: 1, 3, 7, 11, 12, 13, 15, 17, 19, 21, 22, 33, 34 |
| STRUCK | 0 whole rows. Parts of rows 15, 19 and 34 are struck (below). |
| NOTE rows | 50 to 54: not facts. Row 53 needs an addition (Conway Plantation and Crystal Lake are leased land too). |

## Corrections

**Row 1.** 382 and 2,585 are right. But 4,213 is every home the three circles found, and 223 of them have a North Carolina zip code. The South Carolina total is **3,990**. The 382 names are not "between Little River and Pawleys Island": the circles reach Conway (744 South Carolina homes), Loris (140), Aynor (36), Georgetown (177), Galivants Ferry, Hemingway, Andrews and Green Sea. None of the 2,585 homes in the table has a North Carolina zip code.
Use: "382 South Carolina neighborhoods, from Little River to Pawleys Island and inland to Conway, Loris, Aynor and Georgetown, have 3 or more houses, townhomes or manufactured homes for sale. Together they hold 2,585 of the 3,990 such homes for sale we found in South Carolina [MLS listings through the site's map API, 2026-11-13; homes listed at $50,000 or more with a map point]."
Also: the site's "house" type includes semi-detached homes (villas, duplexes). Del Webb at Grande Dunes' 26 "houses" are 19 detached houses and 7 villas. Wherever the page says "houses", the methods line should say "houses (detached and semi-detached)".

**Row 3.** The counts are right, but the band labels are not. analyze.py puts a fee exactly on a band's top into that band (`v <= top`). So "Under $50" holds 4 neighborhoods at exactly $50 (North Cove, Blackmoor, Tilghman Forest - Tilghman Estates, Southwood - Surfside). In the same way, 8 sit at exactly $100, 5 at $150, 2 at $200 and 1 at $300.
Use these labels: "$50 or less" 37; "$51 to $100" 125; "$101 to $150" 56; "$151 to $200" 24; "$201 to $300" 19; "$301 to $500" 16; "over $500" 3. A middle can end in .50, for example $87.50. A label like "over $100 to $150" covers that too. Row 4's "$100 or less" (162) is right.

**Row 7.** The list skips two neighborhoods with lower fees than Arrowhead: Blackmoor (Murrells Inlet) $50 and Tilghman Forest - Tilghman Estates (North Myrtle Beach) $50. The flags hold. Every named neighborhood ticks a pool and a clubhouse on half or more of its listings: The Lakes 4 and 3 of 6; Aberdeen 3 and 3 of 3; Long Bay 4 and 3 of 5; Southgate 3 and 2 of 3; Lakeside at Eagle Nest 2 and 3 of 3; Arrowhead 11 and 9 of 12. The fees re-measured the same.
Use: "The Lakes (Myrtle Beach) about $25, Aberdeen (Longs) $30, Long Bay (Longs) $38, Southgate (Carolina Forest) $46, Lakeside at Eagle Nest (Little River) $48, Blackmoor (Murrells Inlet) $50, Tilghman Forest - Tilghman Estates (North Myrtle Beach) $50, Arrowhead (Myrtle Beach) $52." Or stop the list at Lakeside at Eagle Nest. The public card has no amenity field, so I checked "open one listing card per name" with the `has=` flags on each home. These are agent-ticked. In prose, say "listings show a pool and a clubhouse", never "has its own pool". "The Lakes" is a common name. These six are in zip 29588.

**Row 11.** 26 Waterbridge houses, all with a fee. **23 list $150**; the others list $145, $149 and **$449** (not $450). The data file and the live check agree.
Use: "Waterbridge: 26 houses for sale, every one with a fee; 23 list $150 a month, and one lists $449."

**Row 12.** "Every one listing $107" is wrong. The data file itself has a lowest of $100 and a highest of $110. Live: **12 of 14 list $107**, one lists $100 and two list $110. The HOA's own fee of $107 (row 38) is not in question.
Use: "The Farm: 14 houses for sale; 12 list $107 a month, the others $100 and $110."

**Row 13.** Myrtle Trace (9 at $95) and Seasons (4 at $342) re-measured exactly. Del Webb at Grande Dunes is **26 homes: 19 detached houses and 7 villas**. 15 of them list $401, and the middle half is $401 to $435. Del Webb North Myrtle Beach had 3 listings, each at $315, in the data. In my live check at about 22:05 UTC, one of the 3 said "no HOA" and gave no fee. A feed change in the meantime is possible.
Use: "Del Webb at Grande Dunes: 26 homes for sale (houses and villas), $401 to $435 in the middle half. Del Webb North Myrtle Beach: 3 for sale; listings show $315."

**Row 15.** The count of 51 is right. But 16 of the 51 are manufactured-home communities, and the listing remarks show that several of them are on leased land with lot rent, as Lakeside Crossing is.
- Conway Plantation: "This community is on leased land"; "lot rent".
- Crystal Lake: "sits on a leased lot"; "Located on leased land in Crystal Lake".
- Waterford Oaks: one listing mentions paying the lease monthly.
- Emerald Forest, Williamson Estates, Inlet Oaks Village, Ocean Pines (formerly Jensens) and Oceanside Landing (formerly Captains Cove) each have a remark about a lease, a lot lease or leased land.

A buyer there pays a monthly lot rent, not "no fee". Row 53 already says this kind of row reads "leased land", not "no fee". **Strike Conway Plantation, Crystal Lake and Waterford Oaks as no-fee examples.**
Use: "35 neighborhoods of houses or townhomes have homes for sale, but no listing gives a fee, among them Hagley Estates (Pawleys Island, 10 for sale), Windy Hill Beach (North Myrtle Beach, 12) and Pine Lakes (Myrtle Beach, 7). 16 more are manufactured-home communities, where no listing gives an HOA fee; in some, such as Conway Plantation and Crystal Lake, listings say the home sits on leased land with a monthly lot rent."
For the writer and the lead: analyze.py should mark Conway Plantation and Crystal Lake `leased_land`. The other 14 manufactured-home rows should show "no HOA fee listed; ask about lot rent", not "no fee". Hagley Estates (10, 2 say no HOA), Windy Hill Beach (11 houses, 1 manufactured home, all say no HOA) and Pine Lakes (7, all say no HOA) re-measured exactly.

**Row 17.** The list is not the top: Del Webb at Grande Dunes ($401, 26 homes) and Grande Dunes - Bal Harbor ($400, 3) are both above Leatherleaf ($398). Every figure re-measured exactly: North Beach Plantation's two cottage names $898 on all 3 of each; Waterside Pointe 375, 503, 503; Prince George Ocean 482 to 503 (middle $492.50); Leatherleaf 385, 398, 398. The "includes lawn care and internet" holds: Banyan lawn care 3 of 3 and internet 2 of 3; Cottages at Margaret 2 of 3 and 2 of 3.
Use: "...Prince George Ocean (Pawleys Island) about $493; Del Webb at Grande Dunes about $401; Grande Dunes - Bal Harbor about $400; Barefoot Resort - Leatherleaf about $398." Or write "among the highest". Each of these rests on 3 or 4 homes, except Del Webb (26).

**Row 19.** The name counts and fees are right: 11 "Grande Dunes" names, 10 "Prince Creek", 9 "Market Common". Live checks matched: Cipriana Park $232, Longwood Bluffs $99, Willow Bay $180, Highlands at Withers Preserve $63, Sweetgrass Square $220, and townhomes in "Market Common, The" $450 and Market View $490. Two parts have no source:
- **"inside one master community".** No row shows that these names share one master association. Prince Creek and Prince Creek West are two names. Row 41 calls Prince Creek West its own 2,700-acre master plan. One "Grande Dunes" name, North Village, has Longs addresses (zip 29568). Only Del Webb's declaration (row 34) names a Grande Dunes master association.
- **"on the town center's streets".** No source places these townhomes. Strike it.

Use: "Some communities appear in the listings under many sub-neighborhood names, each with its own listed fee: 11 names begin with Grande Dunes (houses from about $232 in Cipriana Park to about $503 in Waterside Pointe); 10 include Prince Creek or Prince Creek West (houses from about $99 in Longwood Bluffs to $180 in Willow Bay, and $342 in Seasons at Prince Creek West, a 55+ community); 9 include Market Common (houses from about $63 in Highlands at Withers Preserve to $220 in Sweetgrass Square; townhomes about $450 and $490)."

**Row 21.** The denominator is wrong. The table has 2,585 homes, and the three leased-land rows hold 174 (Lakeside Crossing 21, Apache Campground 8, Ocean Lakes 145). That leaves **2,411**, not 2,422. 2,097 of 2,411 = 87.0%. Leaving out Conway Plantation and Crystal Lake too (row 15) gives 2,097 of 2,386 (87.9%). Leaving out all 16 manufactured-home rows with no fee gives 2,097 of 2,306 (90.9%).
Use: "Of the 2,411 homes for sale in the table outside the campground and land-lease communities, 2,097 list a fee (about 87 in 100)." Or, safer: "close to 9 in 10".

**Row 22.** The fees are right, but four of the five come from one or two listings:
- Mt Gilead $9: 1 listing of 5; the other 4 give no fee.
- Myrtle Dunes $9: 1 listing of 3.
- North Litchfield Beach $5: 1 listing of 5.
- The Olde Village $1: 2 listings of 3.

Rosehaven ($9 to $11) is on all 7 listings. A "$1" fee is almost surely an entry for a yearly or voluntary due.
Use: "A few listings show fees under $15 a month: Rosehaven $9 to $11 on all 7, and one or two listings each in Mt Gilead ($9), Myrtle Dunes ($9), North Litchfield Beach ($5) and The Olde Village ($1)." Do not present Mt Gilead, Myrtle Dunes, North Litchfield Beach or The Olde Village as a neighborhood with a $9, $5 or $1 HOA.

**Row 33.** myrtletracesc.org (re-read today) says: "A covenant and age restricted (55 & older) retirement Community. Myrtle Trace consists of single-family homes and a few townhouses." The dues quote is on the home page word for word. $95 from January 2026 is in the registry, from the December 2025 minutes. 518 homes, 42 acres and fifteen ponds rest on verified rows (hoa row 13; hoa-benefits row 8). Fix one word: it is not "a community of houses" only.
Use: "a 55+ community of single-family homes and a few townhouses in Conway".

**Row 34.** I read Declaration 7.13 myself (PDF p. 55, OCR). The Beach Club fee is payable to the **master association**: "The assessments, charges, fees, and other payments due to the Master Association are separate from, and in addition to, the Assessments provided for in this Declaration and are not included in the budget of expenses for the Association." No source says the Beach Club is the Grande Dunes Ocean Club (2026-11-09 verifier, hoa row 11). **Strike "for the Grande Dunes Ocean Club".**
Use: "Every owner pays a mandatory Beach Club fee to the Grande Dunes master association, on top of the association's own fee [declaration 7.13]." "About $400 a house, about $445 a villa" stands. My count: 401 on 15 of 26.

## Rows verified, with what I checked

- **2** $95 (middle of 280 house-neighborhood middles), recomputed.
- **4** 162 of 280 = 57.9%; "about 6 in 10" holds.
- **5** $300 (19) and $90 (261), recomputed.
- **6** $115 (130) and $68 (92), recomputed.
- **8** $250 (39), recomputed. Sawgrass East re-measured: 7 at $423 to $432; 1 now says no HOA.
- **9** Every town figure recomputed: Surfside 72, Socastee 77.5, Conway 81.5, North Myrtle Beach 206, Pawleys Island 236.25, Myrtle Beach 110 (88), Carolina Forest 107 (34), Murrells Inlet 140 (35), Little River 117.5 (24), Longs 93.5 (38). Georgetown (16, $125) is in the data but not in the claim, which is fine. Socastee is a CRM area, not a town; call it "the Socastee area".
- **10** 34 rows; middles from $46 to $486. 28 house neighborhoods, from $46 to $159. 27 of 28 tick a pool; The Battery on the Waterway is the one that does not (0 of 6, live).
- **14** Live: 6 houses, all at hoaMax=0, 3 say no HOA. Matches the Plantation Point pilot (row 42).
- **16** Live: Ocean Lakes 145 (81 houses, 64 manufactured or mobile homes), every listing says no HOA. Lakeside Crossing 21 (4 houses, 17 manufactured), 20 say no HOA, and 1 types $807. Lakeside's remarks confirm leased land (land lease 5, leased land 2, lot lease 1).
- **18** Live: Tidewater 19 (middle half $192 to $231, $175 to $501 in all); DeBordieu 15 ($306 to $310); Waterway Palms now 20 for sale, $137 to $157 (one fewer than the data).
- **20** Live, every name matched: Heather Glen 120, Windjammer Village - LR 119 (8 houses), Kingston Oaks 119, Heritage Park 82, Arrowhead 52 to 53, Arcadia 86, The Parks of Carolina Forest 120, Hillsborough 130, Cypress Village 172 to 173, Rosehaven 9 to 11, Bridgewater Cottages 208 (one listing each at $135 and $308), Wild Wing Plantation 135. The note's "about 40 of 65 searched names" was not re-checked; it is not printed.
- **30** Live /hoa/ title: "Myrtle Beach HOA Fees: About $95 a House, $650 a Condo".
- **31, 32** Match batch 2026-11-b hoa rows 3 and 4 (VERIFIED 2026-11-09) cell for cell.
- **35** Registry `seasons-hoa-fee`. Live: 4 of 4 at $342. The live page says "about $340" and the same inclusions.
- **36** Uses the 2026-11-09 verifier's corrected sentence. Live: 2 of 3 at $315.
- **37** waterbridgehoa.com: "A spectacular swimming pool complex and restful pocket parks". The site's menu and calendar name a Clubhouse. Live: 23 of 26 at $150.
- **38** Rows reused as verified 2026-11-10. farmatcarolinaforest.com did not render text for me. The Farm ledger (2026-10-b) has Orchards totals of $225 to $254 and Planters Point $453 to $497, so "about" holds. The live Farm page says $107, consistent.
- **39** No-HOA ledger row 1 correction (leased land, 55+). Live 55+ page: "Land-lease: you own the home and rent the lot from Sun Communities". The lot-rent figure stays unverified and is not printed.
- **40** cresswind-myrtlebeach.com/about-cresswind/: "Acreage : 248 acres", "12,000 sq. ft. clubhouse", "Pool & Pool Grounds / Hot Tub", "Four pickleball courts are located at the site as well as 1 tennis court", a fitness center with "a yoga/aerobics studio", and "bocce courts, horseshoes, an outdoor amphitheater for movies and concerts, and a network of walking trails". The site calls itself an "active adult community". The ledger's rule stands: no "55+" for Cresswind without a row.
- **41** Toll Brothers page: "Final opportunity for new construction in the 2,700-acre Prince Creek West master plan"; "“The Park” amenity complex which includes two community pools, sport courts, walking trails, and more". The same sentence says "Just a short walk from". That is a distance phrase for Toll's townhomes only; do not reuse it.
- **42** Pilot `plantation-point/listings.json`: for_sale 6, fee_at_or_under 0 = 6, listing_says_no_hoa 3.
- **43** oceanlakes.com Annual Lease Sales: "One mile of oceanfront", "2,579 Annual Lease Sites", "houses with up to 1,600 square feet of living space", and "an elevated beach house, mobile home, or place to park your camper". The page also says "gated community". As the ledger says, do not repeat it.
- **44** waterbridgehoa.com: "Waterbridge features over 80 acres of lakes and natural areas throughout the property. A spectacular swimming pool complex and restful pocket parks".

## Sibling pages (shared figures)

- Myrtle Trace $95, Seasons about $340, Del Webb North Myrtle Beach about $315, Del Webb at Grande Dunes about $400 and $445, The Farm $107, Tidewater about $230 (gated page): each agrees with this ledger.
- **Conflict, not on this page:** the live /buyers/55-plus-communities/del-webb-grande-dunes/ says "Your HOA fee includes basic lawn care and the beach club." That is the struck wording of hoa row 11: Declaration 7.13 makes the Beach Club fee a master-association charge "separate from, and in addition to" the association's assessments. The lead should send it to that page's owner. This page must not repeat it (struck entry hoafees 34).
- Minor, not on this page: the live Myrtle Trace page says the fee keeps up "the gates". The HOA's site says "gate", and the ledger notes the gate is the back gate only.

## Do not publish

- Conway Plantation, Crystal Lake or Waterford Oaks as neighborhoods with "no fee" (leased land with lot rent).
- "every one listing $107" (The Farm), "one lists $450" (Waterbridge), "each $315" (Del Webb North Myrtle Beach).
- "inside one master community"; "on the town center's streets".
- "a Beach Club fee for the Grande Dunes Ocean Club"; any wording that puts the Beach Club inside the Del Webb fee.
- "2,585 of the 4,213"; "2,422".
- A $1, $5 or $9 neighborhood fee from a single listing, stated as the neighborhood's HOA.
