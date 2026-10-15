# Round 14 gated verification v3 (rows 320 to 359, my 29 rows)

Verifier: independent, 2026-10-15. Page: /buyers/gated-communities/. Entries: wachesaw-plantation, wachesaw-east, the-reserve, willbrook-plantation.
No zillow.com, realtor.com or redfin.com page was opened. Ledger notes are in `gated-communities-facts.md`; struck wording is in `struck-v3.json` (15 entries, each tested to fire on its struck text and stay quiet on its use text).

## Counts

| Status | Rows |
|---|---|
| verified (18) | 320, 321, 324, 325, 326, 327, 330, 331, 338, 340, 342, 344, 345, 347, 348, 349, 351, 355 |
| verified with corrected wording (11) | 322, 328, 335, 341, 343, 346, 353, 354, 356, 358, 359 |
| wrong | none |
| unverifiable | none |
| not done | none |

(18 verified in the list; 29 rows in all = 18 + 11.)

No row is wrong outright, but five page sentences overstate their sources in ways that matter (328, 353, 354, 359, 346). No claim has to come off the page.

## Settled questions

- **1711 grant acreage.** Chicora RS11 (PDF p. 48) says: "The Turkey Hill, Oatland, and Willbrook properties were originally part of a 2,400 acre tract granted by the Lord Proprietors to Robert Daniel in 1711 which included properties in Berkeley, Granville, and Craven Counties. Within that grant was one tract of 1490 acres situated on Waccamaw Neck." The course's marker also says 2,400. So the struck entry on row 129 (strike "2,400", use "24,000") is wrong: nothing supports 24,000. But 2,400 acres is the whole grant across three counties; only 1,490 acres lay on Waccamaw Neck. RS11 also calls the Willbrook development "the 2400 acre Willbrook Plantation development", which is a separate 2,400. Do not put either acreage on the page as Willbrook's size. The page does not state an acreage now. `struck-v3.json` strikes "24,000-acre" and the old row 129 entry should be retired.
- **Row 355 and rows 106/107 (who may use Litchfield by the Sea's beach).** Yes for Willbrook. LBTS's Communities page says the listed sub-association communities, WillBrook among them, "have access to all the beautiful amenities with Litchfield By The Sea including Private Beach access, the Beach Club, fishing docks, crabbing docks, tennis/pickleball courts, River Club Pool, walking paths". Write "residents have access". It says nothing on renters, guests, fees or parking. The same page lists The Reserve, so it settles the same point for The Reserve.
- **Row 353 (operator's marketing site).** Weighed. It reproduces the plaque text with hole numbers, and willbrookgolf.com's About page says to "read the plaques". Text matches. But its own list holds six markers and only five are history; the sixth is a bird marker. See below.

## Page sentences to change

1. **wachesaw-plantation, line 1:** "archaeologists dug at Wachesaw and found more than half a million artifacts." The source (Michie, quoted by the Horry Independent) says "this project", the study of Richmond Hill AND Wachesaw. Use: "A University of South Carolina study of Wachesaw and the neighboring Richmond Hill plantation found more than half a million artifacts." The report PDF is behind a 403, so the number rests on a newspaper quoting the author. Published 1987 and "some finds are on display in the clubhouse" are supported.
2. **wachesaw-plantation, line 3:** "Dinner is at Kimbels". The Dining page says the club's venues serve breakfast, lunch and dinner; it does not say Kimbels serves dinner. Use: "Kimbels, the club's formal restaurant, is on the bluff above the waterway and the 18th green."
3. **wachesaw-east, line 2/4:** "The course takes public tee times, so you share it with visitors." Neither the club site nor SC Golf says "public". Sources: online tee-time booking and "Semi-Private". Use: "Tee times are booked online, and SC Golf lists the course as semi-private."
4. **the-reserve, line 1:** "the U.S. Coast Guard calls it a hurricane hole." Only the SC Clean Marina Program page says the Coast Guard designated it (relaying the marina). Attribute it: "the S.C. Clean Marina Program describes it as designated a Hurricane Hole by the U.S. Coast Guard."
5. **the-reserve, line 2:** "cut through the woods and around the marsh." The architect's page says "conforms to its low-country wetland surrounding" and "160 acres of natural wetlands"; no woods. Also 7,200 yards is the back-tee length (SCGA called it 6,500 in 2012): say "up to 7,200 yards". "A golf membership covers the family's dining and social events" should read "includes access to ... dining and social activities", family meaning dependents up to age 25. Golf Digest No. 7 (1999) rests on the architect's own awards list; I could not open Golf Digest. Attribute it.
6. **the-reserve, line 4:** "The golf club, the marina and the HOA are three separate businesses, each with its own fees." No source prints fees for any of the three, and an HOA is not a business. The club states "No operating assessments". Use: "The golf club (McConnell Golf), the marina (Safe Harbor) and the HOA are three separate operators." Drop "each with its own fees" unless fees are sourced.
7. **willbrook-plantation, line 1 and headline:** "Willbrook's golf course crosses the land of three rice plantations" and "a course across three rice plantations". RS11 puts the 2,400-acre development on the land of three plantations. The course's own About page says it is "Winding through a pair of plantations". No source puts the 18-hole course on all three. Use: "Willbrook was built on the land of three rice plantations, Willbrook, Oatland and Turkey Hill, and the course winds through a pair of them." Headline: e.g. "a neighborhood on three rice plantations".
8. **willbrook-plantation, line 1:** "six markers along it tell that history hole by hole." The operator's article lists six markers, one of them about birds. Five tell history (dig by the 9th green, dike toward the 1st tee, 8th cemetery, 5th house, 4th settlement). Use "five markers". The 5th-hole sentence is supported: house "surviving until it burned in June 1895", brick is from a replacement built that year. RS11 (PDF p. 61) says Clarence Lachicotte rebuilt it after the 1895 fire.
9. **willbrook-plantation, line 2:** "Oatland cemetery of enslaved people, with 38 graves". 38 is Litchfield by the Sea's figure. Chicora's 1987 survey found four stones and 36 probable grave depressions after bulldozing. Use: "which the community counts at 38 graves".
10. **willbrook-plantation, line 2:** "a Pennsylvania businessman bought the land in 1926 for duck and quail hunting." RS11 (PDF p. 62): the three tracts, sold in 1926 to William S. Ellis of Bryn Mawr, were "used for duck and quail hunting". The purpose of the purchase is not stated. Use: "bought the three tracts in 1926; they were used for duck and quail hunting." Chicora's 1984 conveyance to Litchfield by the Sea is on PDF p. 64.
11. **willbrook-plantation, line 3:** "One car barcode opens both gates." LBTS says one barcode request covers "your gated community and Litchfield By The Sea access" (vehicle registration, $25). It does not say it opens both gates. Use: "One vehicle barcode is issued for the owner's gated community and for Litchfield by the Sea access."

Not on the page, but corrected in the ledger: row 322 (the 2014 Women's Amateur was an announced event, not in CGA's list of past championships; page sentence is fine as written), row 341 (17 properties, not 17 clubs; reciprocal privileges), row 359 ("often", not "most of it", on the edge for water on 15 holes).

## Other flags

- **Sibling pages.** `best-neighborhoods-facts.md` does not exist; the sibling ledger is `neighborhoods-facts.md`, and it has no Wachesaw, Willbrook or Reserve rows. No disagreement to report for my rows.
- **Distance words.** None of my rows uses one. The page's "outside the gates" (Wacca Wache Marina, row 104) and "an 11-minute drive" to Huntington Beach State Park are not in my rows; not checked.
- **ESPN (row 331).** The page returns an empty 202. Scores were confirmed on Wikipedia's 1997 and 1998 LPGA Tour pages (276, -12; 269, -19), but Wikipedia is not an approved source: a second look at ESPN or an LPGA record is wise before "19 under" goes live.
- **Row 346.** The Coast Guard designation has one source (the state program page). No Coast Guard source found.
