# Affordable places to live: round 14b verification v4 (row 214)

Row 214 of `affordable-facts.md`: the writer's rewordings of the corrections in `aff-verify-v1.md`, `-v2.md` and `-v3.md` (lesson B30). Verifier: independent, did no research on the page. Date of check: 2026-10-15. The spec read is `batches/2026-10-b/specs/affordable-places-to-live.js` at commit 44899dd (not edited). The ledger and the struck list were edited as the task allows (row 214 status cell; two new struck entries; one `use` text updated).

Method. Every source URL opened again today (HTTP 200): City of Myrtle Beach (Whispering Pines), Wild Wing, SCDNR (Lewis Ocean Bay), Lennar warranty, Lennar Birchwood (community page and all six plan pages), Lennar Victory Point and Forestbrook Village, WMBF (Heron Point), the HOA site (mbgyc.com), SC Trails and the City of North Myrtle Beach (park and expansion). Every drive re-run on the public OSRM router (no traffic), with the start and end points the v1 to v3 notes give. Distance of the golf course re-measured from the OpenStreetMap outline (way 47957655). Beach drive from Villas at Sandridge re-run against the SC DES beach access layer (25 nearest points, one table call). The page text was checked in the spec source and in the built preview (the built page matches the spec for every sentence below).

Rounding rule used (CRAFT 2): under 15 minutes to the nearest minute; 15 minutes or more to the nearest 5.

## Result

Verified 16 of 18 sentence groups. Two need a small wording fix (the Lennar warranty loses "limited"; the Birchwood ceilings are first-floor in two of six plans). Nothing is wrong. The ledger row itself quotes the Fairways sentence wrongly (see 4); the page is right.

| # | Sentence on the page | Verdict | Exact wording if corrected |
|---|---|---|---|
| 1 | "Whispering Pines, the city's own 18-hole golf course, is less than a quarter mile from Parkview." | verified | |
| 2 | "Residents of Horry, Georgetown and Brunswick counties play a round there for $45 plus tax, with a cart." | verified | (the source says "can play"; optional) |
| 3 | Chart "city golf course, beach 4 min"; heading "a four-minute beach drive, by the city's golf course" | verified | |
| 4 | "Horry-Georgetown Technical College and Coastal Carolina University are each about a seven-minute trip." | verified (the ledger quote "each about seven minutes away" is not the page's words) | |
| 5 | "The Avocet course, by Larry Nelson and Jeff Brauer, is still open. It is known for its double greens and dual fairways" | verified | (optional: "is open, after a 2026 renovation") |
| 6 | Lewis Ocean Bay: "on International Drive, is about 15 minutes by car from Sawgrass East. It holds one of the largest groups of Carolina bays in the state ... South Carolina's largest Venus flytrap population, the only one with long-term viability, is centered there." | verified | |
| 7 | "Resales here went for less than the new townhomes at Victory Point, an eleven-minute trip." | verified | |
| 8a | "Lennar's plans here list granite counters, stainless steel appliances, 9-foot ceilings and energy-efficient windows." | verified with corrected wording | "Lennar's plans here list granite counters, stainless steel appliances, 9-foot ceilings on the first floor and energy-efficient windows." |
| 8b | "Lennar's warranty covers the workmanship for a year, the electrical, plumbing and mechanical systems for two, and the structure for ten." | verified with corrected wording | "Lennar's limited warranty covers the workmanship for a year, the electrical, plumbing and mechanical systems for two, and the structure for ten." (link text "Lennar's limited warranty") |
| 9 | "Long Bay Club, a golf course in Longs, is a seven-minute trip." and Polo Farms "Long Bay Club's golf course is about 13 minutes away." | verified | |
| 10 | "about a four-minute drive from the Golf and Yacht Club's entrance"; chart "gated, boat ramp 4 min from the gate" | verified | |
| 11 | "Heron Point, which announced in 2014 that it would close. Today the HOA has a pool and hot tub, tennis courts, a pavilion and a community center." | verified | |
| 12 | "The HOA has a community watch desk covered 24 hours a day, and a gatehouse phone line. From mid-April to mid-October, the pool opens at 8 a.m. for lap swimming, then exercise, then open swim until 8 p.m. or sundown." | verified | |
| 13 | Sandpiper Place "usually went for about $330,000" | verified | |
| 14 | Forestbrook Village "Broadway at the Beach is 12 minutes away"; chart "schools 4 to 5 min" | verified | |
| 15 | Victory Point "The community has a pool, a playground, a picnic area and a pond"; "Broadway at the Beach 14"; chart and heading "part of the old speedway" | verified | |
| 16 | Amber Bluff "Downtown Conway, with its riverwalk on the Waccamaw River, is about a seven-minute drive." | verified | |
| 17 | Villas at Sandridge: "has a lake, walking trails, two dog parks and an accessible playground"; "The city's new section of the park has added soccer and baseball fields, ponds, trails and two more playgrounds."; chart "beach 7 min, wake park 5 min"; heading "a seven-minute beach trip and a five-minute trip to a wake park"; short answer "five minutes from a park with a cable wake park" | verified | |

## The evidence, sentence by sentence

**1. Whispering Pines.** City page (https://www.cityofmyrtlebeach.com/i_want_to/find/whispering_pines_golf_course.php): "The 18-hole course originally was part of the Myrtle Beach Air Force Base ... The course is owned by the City of Myrtle Beach." So "the city's own 18-hole golf course" holds. Distance: OSM way 47957655 (the course outline) to the middle of Parkview's sales (33.686431, -78.91036): 255 m (0.159 mile) to the nearest edge, 306 m to the nearest vertex. Both are under 402 m (a quarter mile), as v3 gave (0.16 to 0.19). The word is a straight line from the middle of the community; the nearest edge of Parkview is closer still. Holds.

**2. $45.** Same page: "Local residents of Horry, Georgetown and Brunswick Counties can play at Whispering Pines for just $45 per round (plus tax), including the use of a cart!" The group, the tax and the cart are all on the page, as v1 required. The page is undated and it is a discount offer; the source verb is "can play". The sentence is true as written. The writer may add "can" to match the source.

**3. Chart and heading.** Beach: Parkview (-78.91036, 33.686431) to SC DES access MYRTLE BEACH 13 (-78.90086, 33.67252): 4.01 min, 1.31 mi. Rounds to 4. "By the city's golf course" rests on item 1.

**4. Fairways, college and university.** From (-78.986234, 33.787649): Horry-Georgetown Technical College 7.19 min at the campus center and 6.59 min at 2050 Highway 501 East; Coastal Carolina University 7.92 min at the campus center and 6.24 min at 100 Chanticleer Drive West. All reproduced to the hundredth. The range is 6.2 to 7.9, which rounds to 6 through 8. "About seven" is the middle of the range and within a minute of both ends, as v1 gave as its alternative. The v1 correction (drop "an eight-minute one") is applied. The ledger quotes the page as "each about seven minutes away". The page says "each about a seven-minute trip". Substance is the same; the ledger text is not the page's words. The end of row 214 also has a stray repeat of this sentence inside the Villas group (a ledger splice, harmless).

**5. Avocet.** Wild Wing's own site (https://www.wildwing.com/): "Designed by Jeff Brauer and three-time major champion Larry Nelson, the course is relentlessly interesting, testing players with drivable par 4s, double greens and dual fairways." The Golf Digest star sentence is gone from the page (v1 correction applied). Open: the site says "The Newly Restored Avocet Course Is Now Open" and "Avocet Course at Wild Wing Reopens September 19". Note for the writer: the course closed for a renovation in summer 2026 and reopened on September 19, 2026. "Is still open" is true today and sits beside "Three of them closed in 2004", so it reads as "the one that survived". It does not say the course never closed. If the writer wants it exact: "is open, after a 2026 renovation."

**6. Lewis Ocean Bay.** SCDNR release, June 10, 2025: "Lewis Ocean Bay contains the largest assemblage of Carolina Bays in the state." "Today, the largest and only long-term viable population in South Carolina is centered within Lewis Ocean Bay." (the sentence is about the Venus flytrap). The tract is "across International Drive from the existing preserve". Drive: Sawgrass East (-78.929975, 33.756167) to the preserve's information board on International Drive (-78.8909052, 33.8056659): 16.78 min, 7.60 mi (reproduced exactly; to the parking node nearby 16.77). Rounds to 15 under the rule. The three v2 corrections are applied: "on International Drive" describes the road the preserve is on (not "up International Drive"); "one of the largest groups" softens the one-source superlative; "wild" is gone. The sentence "oval wetlands found along this coast" is outside the quoted part of row 214 and was not in v2's notes. Carolina bays are oval wetlands on the Atlantic coastal plain; no conflict found.

**7. Eleven-minute trip.** Sawgrass East (-78.929975, 33.756167) to the middle of Victory Point (-78.951801, 33.7454): 10.90 min, 3.69 mi. Rounds to 11. The v3 correction ("ten" to "eleven") is applied and the old struck entry no longer fires. The prices behind "less than" ($222,500 against $235,630) were verified by v3 and are not changed.

**8a. Lennar plans.** I read the Birchwood community page and all six plan pages (Gerson, Lookout, Brower, Woodhaven, Mayer, Whitetail). Each lists: "Brand-new stainless steel appliances", "Granite countertops grace the kitchen and center island", "9' smooth finish ceiling on first floor", "Low-E insulated and energy-efficient windows". So "plans here list" is true for all six, which v2 had not shown (it read two). Problem the writer could not know from v2: Mayer and Whitetail are two-story homes (Lennar: "two-story home"), and the 9-foot ceiling is "on first floor". Gerson, Brower and Woodhaven say "single-level home". The page's "9-foot ceilings" with no floor is more than the source for the two-story plans (the first-floor limit v2 noted was lost when "downstairs" was struck). Corrected wording: "9-foot ceilings on the first floor". The v2 caveat "the features in each house are in the purchase agreement" is not on the page; "plans here list" carries the attribution, so I do not require it. The Lennar page also still shows Birchwood as "Sold out" with one home available (120 Birchwood Dr, $247,300); that is not in row 214.

**8b. Lennar warranty.** https://www.lennar.com/warranty: "Lennar Warranty Program 1–2–10 Limited warranty". "1 Year Workmanship ... 2 Years Mechanical & Systems Covers performance of electrical, plumbing and mechanical systems. 10 Years Structural." "Length of Limited Warranty is shorter in Colorado and Utah." Years, tiers and the "electrical, plumbing and mechanical" words match the page; "heating" is gone (v2 correction applied). v2 also noted "it is a limited warranty". The page says "Lennar's warranty" and the link text is "Lennar's warranty": the word "limited" is lost, and Lennar's own word is part of the claim. Corrected wording: "Lennar's limited warranty covers ...", and the link text "Lennar's limited warranty". This is the only place the page names the warranty (spec line 328).

**9. Long Bay Club.** Birchwood (-78.754012, 33.925885) to the course (-78.739853, 33.954359): 7.17 min, 3.18 mi, rounds to 7. Polo Farms (-78.812061, 33.917844): 12.81 min, 6.66 mi, rounds to 13 ("about 13"). OSM reverse geocode of the end point gives "394, Fox Tail Drive ... Longs" and a road named "Long Bay Golf Place" beside it. The v2 correction (drop "designed by Jack Nicklaus") is applied; the page makes no designer claim now. The club's own site (longbayclub.com) did not respond from here, so the name and the town rest on the address data v2 read (a tournament site and the Census point) and on the OSM street names; nothing on the page depends on more than "a golf course in Longs".

**10. Enterprise Landing.** Bay Road entrance (-79.043605, 33.647343) to Enterprise Landing (OSM node 4409738803, -79.06079, 33.66783): 4.37 min, 1.73 mi (start snaps 0 m). Rounds to 4. From the middle of the older homes it is 7.49 min, so the page names its start (the entrance), as v3 required. The chart label "gated, boat ramp 4 min from the gate" matches. The gated page says the same ("about a 4-minute drive from the entrance").

**11. Heron Point and amenities.** WMBF, Oct. 10, 2014: "The Heron Point Golf Club announced the closure of its course to local residents. Residents of the Myrtle Beach Golf and Yacht Club community received a letter ... saying the management of the course has decided to close and they will be closed by December." HOA site: "we relax and enjoy our pool, tennis courts, pavilion, HOA community center ... Although we no longer have an on-site golf course or yacht club". "Pool & Hot Tub will be closed October 15". So "announced in 2014 that it would close" (not "closed in 2014"), "once had its own golf course", and the amenity list all hold; "inside the gate" is gone (v2 correction applied).

**12. Watch desk and pool hours.** HOA site: "Community Watch Desk Coverage is 24 Hours. Seven days a week Gatehouse Phone: (843) 650-4109". Pool: "Pool Opens April 15", closed October 15; "8:00-9:00 am - Lap Swimming ... 9:00-10:00 am - Exercise ... 10:00 am-8:00 pm or Sundown - Open Swim". The page says "covered 24 hours a day" (not "staffed", not "at the gatehouse") and "8 p.m. or sundown" (not "until dark"). All three v2 corrections applied.

**13. Sandpiper Place.** Row 161: 91 sales, all by D.R. Horton, middle $329,000, "inside the community" by the MLS name (not "inside the gate"). "Usually went for about $330,000" is the middle, rounded. I did not re-pull the deed index; I rely on row 161 (verified with corrected wording, recomputed in round 8b) and v3's check.

**14. Forestbrook Village.** Forestbrook Village (-78.966818, 33.714649) to Broadway at the Beach: 12.14 min (John Q. Hammons St entrance), 12.30 (Robert M. Grissom Pkwy), 11.07 (north entrance); to the street address 1325 Celebrity Circle (Nominatim, -78.8833533, 33.7143223) 12.34. All round to 11 or 12; 12 is right where a reader arrives. Schools: Forestbrook Middle (OSM way 447319820) 4.41 min and Elementary (way 447319821) 5.00 min today (4.3 and 4.9 in row 184; OSM or router data moved a little). "4 to 5" holds.

**15. Victory Point.** Lennar's Victory Point page: "Residents can enjoy days of effortless recreation at the swimming pool, playground and picnic area, all complemented by a pristine pond"; "Temporarily sold out". Drive to Broadway at the Beach from (-78.951801, 33.7454): 13.46 (Hammons), 13.62 (Grissom), 12.39 (north entrance), 13.65 (1325 Celebrity Circle). The street address and two of three entrances give 13.5 to 13.6, which rounds to 14, so "14" is supported (the north entrance gives 12; v2 also chose 14). The page says "sold out for now", which matches "temporarily sold out". "Part of the old speedway" adds the "part of" v3 asked for. Note: Lennar's page still calls Victory Point "an upcoming community"; the amenity list is Lennar's marketing text, as in v2.

**16. Downtown Conway.** Amber Bluff (-79.021249, 33.810207) to Main Street at 4th Avenue: 6.57 min; to the foot of Main: 6.22; to Riverwalk Park's south end (v3's point): 8.32. "About a seven-minute drive" is the middle of 6.2 to 8.3 and equals v3's safe wording. D.R. Horton lists 7 to the riverwalk and 8 to downtown. Holds.

**17. Villas at Sandridge.** SC Trails: "an eco-friendly 162-acre park ... walking trails, a 10-acre meadow ... 25-acre lake ... an ADA accessible playground ... and two dog parks." The page keeps the lake, the trails, two dog parks and the accessible playground, and drops 162 acres, 25 acres and "11 ball fields" (v3 corrections applied). City of North Myrtle Beach: "completed in November 2025 ... 5 Soccer Fields 6 Baseball Fields Freshwater Ponds Walking Trails 2 Playgrounds Picnic Shelters". The page says "soccer and baseball fields, ponds, trails and two more playgrounds". Holds. Drives: Villas (33.852846, -78.696635) to the park (-78.7093563, 33.8405685): 5.28 min, rounds to 5. Beach: 7.46 min to NORTH MYRTLE BEACH 68 (SC DES layer, nearest of the 25 closest points); rounds to 7. The wake park shares the park's address (150 Citizens Circle), so the same five minutes.

## Not in row 214, seen on the way

- None of the words the website's build refuses ("sets"; a road or fee that "runs" or "carries") appears in the safe wordings above. "pulls wakeboard riders across the water on a cable" (spec line 367, outside the row) is a machine acting on riders; I flag it only so the build's personification check is run on it.
- No interest rate or payment amount is stated in any sentence of the row.

## Struck list

`affordable-places-to-live-struck.json`: two entries added (row "affordable 214"):

1. `Lennar's warranty covers` (struck: the sentence without "limited"; use: "Lennar's limited warranty covers ...").
2. `\bLennar's plans here list[^.]{0,90}\b9-foot ceilings and\b`, unless `first[- ]floor` (struck: "9-foot ceilings and"; use: "9-foot ceilings on the first floor and").

One existing entry changed: the `use` text of the second "affordable 204" entry (`Lennar's houses here come with`) now says "9-foot ceilings on the first floor", because the old approved wording is now the struck wording of entry 2 and the controls require that no approved wording fires an entry.

`node tools/struck-check.test.js`: all controls pass.

`node tools/struck-check.js --batch batches/2026-10-b --preview <dir> --strict` (the preview folder is the writer's built pages in the session scratchpad, `preview/b/`, five pages; the affordable page in it matches the spec's wording for every sentence above):
- Before my two entries: exit 0, "no struck wording on any page" (affordable 97 patterns).
- After my two entries: exit 1, 2 struck phrases on the affordable page, both in "4. Birchwood: a new house on a quarter acre" (the two sentences in 8a and 8b). Other four pages: no struck wording. This is the intended result until the writer applies the two fixes.
- A direct scan of the spec source against all 91 original entries found no struck wording (the one match was a code comment on spec line 127, not page text).

## Summary

Counts: verified 16 groups; verified with corrected wording 2 (8a, 8b); wrong 0; unverifiable 0. Row 214 status: "verified with corrected wording (v4)".

Writer, two edits:
1. Spec line 326: "9-foot ceilings" becomes "9-foot ceilings on the first floor".
2. Spec line 328: "Lennar's warranty" (link text and sentence) becomes "Lennar's limited warranty".

Optional: "can play" in the Whispering Pines sentence; "is open, after a 2026 renovation" for the Avocet. Correct the ledger quote of the Fairways sentence when row 214 is next edited.

Claims that should not be published: none.
