# Round 14 gated verification v4 (rows 360 to 393, Litchfield, Heritage, DeBordieu)

Verifier: independent, 2026-10-15. Every source was opened this session (club, association and county pages, the PDFs, the newsletter page images, the Georgetown County parcel service, the two Coastal Observer stories). No listing site was used as a source. Only edits: the last two cells of the 25 rows, `struck-v4.json` (18 entries) and this file.

## Counts (25 rows)

- Verified: 13 (361, 362, 366, 368, 371, 373, 378, 379, 380, 382, 385, 387, 388)
- Verified with corrected wording: 12 (360, 363, 365, 369, 370, 372, 374, 376, 386, 390, 392, 393)
- Wrong: 0
- Unverifiable: 0

Rows 361 to 363: see below. Rows 376 to 379: the images were opened and read; quotes match.

## No row is wrong. Every row that needs corrected wording

- 360: the county field is a sale date (2018-07-10, deed book 3308 page 40), not a recording date. Do not say "recorded".
- 363: 2019 facts. Weddings: one in June 2019, one set for November, four booked for 2020, "a limited number". Not "a few a year".
- 365: "on the ocean" is not in any primary source. Say "a beach house on Pawleys Island". Drive measured 4.2 to 4.5 miles, about 10 minutes (OSRM), so "about 4 miles" holds; name the start point.
- 369: the source does not say the dock house and the party deck are next to each other, or that owners gather there.
- 370: the "no special assessment" statement covers the time since 2002 only.
- 372: memberships are for "residents", not owners; two different ranking claims on the site, give neither.
- 374: the source says mornings are "reserved for league play"; "busiest" is the researcher's word. Tennis Monday to Saturday (Court 4 open Monday and Friday mornings); pickleball Tuesday, Wednesday, Friday, Saturday.
- 376: the camera is labelled "Clubhouse Deck", not "Beach Club deck".
- 386: yardage 7,284 is from the championship tees; row 111 says 7,032 (sibling row disagrees). The tournaments are "including".
- 390: two free barcodes only "provided that all assessments have been paid"; the 3 days is the notice to the gatehouse for an event.
- 392: the packet gives the line-up point (DeBordieu and Luvan boulevards, 9 a.m.) and a 10 a.m. start, not a route; Beach Sweep is a statewide event the owners join; the 6-mile turtle walk is shared with Prince George and Hobcaw.
- 393: see "Rows 361 to 363 and 393" below.

## Rows 361 to 363: what the page may state as true today

The source is one Coastal Observer story of August 25, 2019 (a local newspaper, no court record found). The county record agrees on the key fact: the Litchfield Plantation Association owns the house parcel (sale July 10, 2018, 7.35 acres, $1,091,042).

May state, in the past tense: owners took control of the association in summer 2018 after court challenges; until then the developer's company held a majority of one in electing the board; the board foreclosed on loans from the association to the company that were partly secured by the house; the association owns the house and pool today (county); the house and oak avenue first appear on a 1794 plat.

May not state as present fact: the club room, the ballroom, the bridal-party bedrooms, the weddings and the terrace use (all 2019); the 1970 renovation as "the latest"; "a few weddings a year".

## Page sentences to change (spec: batches/2026-10-b/specs/gated-communities.js)

Each has an entry in `struck-v4.json`.

1. litchfield-plantation: "The house hosts a few weddings a year to help pay for its upkeep." Source (2019): a limited number of weddings. Write: "It has hosted a limited number of weddings to help pay for upkeep" and mark it as 2019, or cut it.
2. litchfield-plantation: "a terrace off the main room looks over the old rice fields at sunset." The story says the terrace overlooks the former rice fields and some people watch the sunset from it. Write: "a terrace off the main room overlooks the old rice fields, and some owners watch the sunset from it." (No struck entry; low risk.)
3. litchfield-plantation: "a beach house on the ocean at Pawleys Island, about 4 miles away by road". Drop "on the ocean". Give the start point and "about 10 minutes".
4. litchfield-by-the-sea: "the association's live cameras on the Beach Club deck". Write "on a clubhouse deck".
5. litchfield-by-the-sea: "It is many neighborhoods inside one gate, each with its own association". The community has a Main Gate and a South Gate (October 2026 newsletter, page 4), and the page's own Willbrook entry says "both gates". The communities page lists 30 sub-associations. Write "inside the community's gates, each with its own sub-association".
6. heritage-plantation: "Next to it, a deck over the water ... is where owners gather at sunset." Write "The marina also has a deck over the water, bordered by cypress trees, that serves as a daily sunset gathering place."
7. heritage-plantation: "Owners have run the association since 2002 and say they have never needed a special assessment." Write "... have not needed a special assessment in that time."
8. heritage-plantation: "In the morning, leagues play on the four Har-Tru tennis courts and four pickleball courts." Write "Many mornings are reserved for league play: tennis Monday to Saturday, pickleball Tuesday, Wednesday, Friday and Saturday."
9. heritage-plantation: "the land of two old rice plantations, True Blue and Midway." The source says "former True Blue and Midway Plantations", not rice. Write "the former True Blue and Midway plantations" unless a source for "rice" is added to the ledger.
10. debordieu-colony: "A gated community cannot get public money to rebuild a beach, so in 2017 they voted to create a beach fund". The source is one newspaper line about DeBordieu ("As a gated community, DeBordieu doesn't qualify for public funds"), not a general rule, and no source gives a reason for the 2017 vote. Write "DeBordieu, a gated community, does not qualify for public beach renourishment money. In 2017 the owners voted to set up a beach preservation fund, paid by assessments."
11. debordieu-colony: "Each Fourth of July brings a parade down DeBordieu Boulevard." No route is stated and the packet is one year's. Write "The July 4 parade lines up at DeBordieu and Luvan boulevards and begins at 10 a.m."
12. debordieu-colony: 'Locals say "Debidue", a pronunciation that comes from the Gullah dialect.' The Gullah origin is the association's claim only. Attribute it.
13. debordieu-colony: "Joining the club costs extra, beyond the association fee." The club is a separate organization (Welcome Packet); dues are not posted. Write "The club is a separate organization from the association, and its dues are not posted."
14. debordieu-colony: "oceanfront dining steps from the sand". The Gazebo is "just steps from the sand" with ocean views; none is called oceanfront. Write "dining steps from the sand with ocean views".
15. debordieu-colony (kept as is, checked): "boats cannot stay at the community dock overnight", "one gate", "registered online, in an app or by phone", "a guest pass lasts up to a week", "eight Har-Tru tennis courts", "Carolinas Mid-Amateur", "Pete and P.B. Dye course", "open only to owners" all match their sources.

## Claims that should not be published as written

- A general rule that gated communities cannot receive public beach money (item 10).
- Any route for the DeBordieu parade (item 11).
- The Heritage Club ranking (two different claims on the association site, no year).

## Sibling and ledger notes

- Row 386 (7,284 yards) and row 111 (7,032) disagree; row 387 (eight Har-Tru and two hard courts) and row 111 (one hard court) disagree. Use the amenities page for both.
- Row 365's link between the county lot and the beach house rests partly on a real estate listing; the page should not give the street address.
- Not found: any report that the DeBordieu groins were built, or the Court of Appeals result. The page must not say they were built.
- `node tools/struck-check.test.js` prints "all controls pass" (after `npm install`). Each v4 pattern was checked by hand (node) to fire on its "struck" text and stay quiet on its "use" text; the standard test does not read this file.
