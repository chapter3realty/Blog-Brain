# Verify: /hoa/rental-restrictions/

Batch 2026-11-a, Lane U. Independent verifier, 2026-11-04. I did none of the research. Ledger: `facts.md` (status and note columns filled). Struck list: `hoa-rental-restrictions-struck.json` (13 entries; each fires on its struck wording and none fires on the approved wording; `node tools/struck-check.test.js` prints "all controls pass").

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 15: 1, 3, 4, 6, 7, 8, 11, 12, 17, 19, 20, 22, 23, 27, 28 |
| CORRECTED | 14: 2, 5, 9, 10, 13, 14, 15, 16, 18, 21, 24, 25, 26, 29 |
| STRUCK | 0 whole rows. Parts struck inside row 26 (waiting period) and row 29 (the heading). |

## What I opened

- Every statute on the live page today: S.C. Code 27-30, 27-31, 12-36-920; Fla. Stat. 718.110 and 720.306 ("The 2026 Florida Statutes"); Fannie Mae B4-2.1-03 (08/05/2026).
- The three Court of Appeals opinions (5362, 5525, 5312) and the Supreme Court's Hanold opinion (27702).
- Bill pages H. 3861, S. 442, and also H. 3447 and H. 5204 (HOA bills, to test row 29's "no bill").
- The city pages for Myrtle Beach and North Myrtle Beach, Surfside Beach's code text, the county zoning ordinance (updated September 1, 2026), the SC REC addendum PDF, stories.json.
- The CRM API: re-ran `pull_listings.py` and `pull_other_rules.py` into scratch at 13:45 UTC, re-ran `compute.py` on the saved inputs (outputs identical byte for byte), and ran the area and filter checks below.
- The four SCDCA workbooks, every column.

## Data scripts

- `compute.py` on the saved `listings.json`, `other-rules.json` and `scdca-rentals.json` gives the same `findings.json`, `chart-by-type.json` and `chart-by-area.json`.
- A fresh pull 80 minutes later moved a few counts by 1 or 2 (condos 2,675 and 1,906 nightly; houses 2,979; NMB HOA houses 26 nightly; Conway HOA houses 501; Longs 316). Rounded shares do not change. Build the page from one pull.
- `scdca_rentals.py` undercounts (row 25). My recount is `data/2026-11-a/hoa-rental-restrictions/verify_scdca.py`, which writes `scdca-rentals-verified.json` (counts and complaint numbers only).

## Every correction

1. **Row 2.** The heading "Houses in an HOA rarely allow nightly rentals" states a rule; the data is what listings say. Use: "Few houses with an HOA fee say nightly rentals are allowed." Numbers stand.
2. **Row 5.** "Carolina Forest is outside the cities" is not true of every listing: 9 of the 296 Carolina Forest houses carry the CRM's inside-city-limits flag (none marked nightly; 0 condos). Use: "Most of them (287) are outside city limits, where Horry County's zoning sets no limit on how long a home may be rented." The counts (296, 1 nightly; 110 condos, 56 nightly) stand.
3. **Row 9.** The filter `rentals_allowed` is now labelled "Can rent it out", not "Rentals allowed". Every no-fee house carries it, so the flag is likely set by the feed, not the agent. Do not write "as the listing agent marked it"; write "the rental flags on each listing".
4. **Row 10.** Repeats wording the hoa-documents verifier struck (its row 9, lesson B30). 27-30-130(B)(1)(b) has a carve-out: no copy on request is required if the rules are posted in a common area or on the association's website. Use: "Rules take effect when adopted. An association must give a member a copy on request unless they are posted in a common area or on its website. They stay enforceable only if recorded at the county by January 10 of the year after they are adopted or changed."
5. **Row 13.** The search holds: neither 27-30 nor 27-31 limits or grandfathers a rental rule; H. 3447 and H. 5204 have no rental-limit provision. But "South Carolina law puts no limit" is wider than what was searched (fair-housing law still bars rules aimed at protected groups). Use: "Neither South Carolina's HOA Act nor its condo law caps an association's rental rules or exempts owners who bought before a new one."
6. **Row 14.** The Spur ban had a carve-out: an owner's child or grandchild could live in or rent the unit. The quoted words are the circuit court's, affirmed on appeal. The opinion says Richland County, not Columbia. Use: "a Richland County condo's master deed barred renting to college students not related to the owner ... The courts held that by buying they had bound themselves to the rule, and that the drop in prices did not undo it."
7. **Row 15.** The court did not find that the association had not watched rentals; it said "even if" it had not. Use: "The court said that even if the association had not watched rentals before, it had not given up the rule, because it acted once it got a complaint."
8. **Row 16.** The owners were a couple ("owners ... their house"), not "an owner ... his house". The rest stands.
9. **Row 18.** Florida 718.110(13) covers an amendment to the condo declaration, not any new board rule. 720.306(1)(h)2 covers rules on leases shorter than 6 months and a limit of three rentals a year. Use the ledger's safe wording.
10. **Row 21** (reused from where-to-buy row 1). 12-36-920(A) has a second carve-out the reused wording leaves out: rooms in the owner's own home with fewer than six sleeping rooms. Add it, or keep only the 90-day definition.
11. **Row 24.** Source fix: Zoneomics is a secondary site. Cite Surfside Beach Code Sec. 17-396.10 (Municode), as where-to-buy row 6's verifier did. Wording stands.
12. **Row 25.** The rental counts are wrong. The script chose columns with a case-sensitive "Recommend" and missed both "Other recommendations ..." columns, and it had no "rented". Recount over every free-text column: 18 of 1,527 complaints use a renting word (4 of 416 from Horry). Read by hand, 9 are about an association's rental rules, 1 from Horry County: C22-04112 asks to cancel an HOA's change to "not allow long term rentals". The rental-deposit complaint is not about a rental rule. Use: "From 2022 to 2025 it logged 1,527 HOA complaints statewide. 9 were about an association's rental rules, and 1 of those came from Horry County." The 1,527 and 416 totals and the 27-30-340(E) quote are verified. Never name an HOA.
13. **Row 26.** "A waiting period before a new owner may rent" has no source in any row (one complaint only recommends one): cut it, or get it from the owner (PROPOSED question 2). "A ban on renting to a group of tenants" misreads the Spur clause: say "a limit on who may rent", with that case as the example. A ban on nightly renting is supported by complaint C24-04131 (an HOA not allowing a home to be used as an Airbnb rental), unnamed.
14. **Row 29.** "No state bill would change this" is wider than the search. Keep: "Two 2025 bills on short-term rentals, H. 3861 and S. 442, were sent to committee and went no further. Both are about cities and counties, not associations."

Also noted, not a status change:
- **Row 17.** The researcher's note says the Supreme Court affirmed "on another point". The Supreme Court (Op. No. 27702, filed February 15, 2017) affirmed on the same question, the meaning of "developed" lots. The page may say "affirmed in 2017".
- **Row 19.** Cite the current 06.2025 form, as the hoa-documents verifier did. The question's wording is unchanged.

## Not to publish

- Any HOA name or complaint text from the SCDCA files, the Spur owners' names, and the 48 Planters Wood Drive address in Op. No. 5525.
- The rental-deposit complaint as an example of a rental-rule complaint (row 25).
- "Waiting period" as a form of rental rule, until a source or the owner supplies it (row 26).
- The live page's home-office story (not in stories.json; PROPOSED question 1).

## Photo candidates (PLAN.md section 7)

1. **"Myrtle Beach, North Ocean Boulevard 100420-F-4155R-021.jpg"** (Wikimedia Commons). Licence checked on the file page and the API: public domain, U.S. Air Force photo by Tech. Sgt. Louis L. Rivers, category "PD US Air Force", no attribution required. The licence is acceptable. **Rejected for this caption.** At full size (1050 x 750) it shows a street of shops: the Gay Dolphin Gift Cove sign, Ripley's Moving Theater with its dinosaur, a haunted-house attraction, a car and pedestrians. It shows no oceanfront towers, and business signs and logos are the main subject (rules/images.md). Do not use it for "Oceanfront towers in Myrtle Beach". Find another public-domain or CC file that shows the towers, and check it is not one the siblings use.
2. **USDA NAIP 2023 aerial of Carolina Forest.** NAIP imagery from the USGS ImageServer is public domain (USDA), as the Garden City record shows. No file exists yet, so nothing to look at. Before it ships: overlay the county parcel or subdivision outline so the frame is on Carolina Forest (lesson B29), label roads only, name no subdivision. Use the row 5 wording in the caption ("Every one of the 296 houses for sale in Carolina Forest has an HOA fee, and 1 says nightly rentals are allowed"); never "outside the cities".
