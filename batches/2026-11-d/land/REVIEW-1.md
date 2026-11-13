# Review 1: /buyers/land/ (batch 2026-11-d, fix round 1)

Reviewer verdict: pass=false, score 8.5. Three blocking items and eight nits. All three blocking items are fixed in `specs/land.js`. Six nits are taken. Three are declined, with reasons below. No new fact is on the page, so there is no VERIFIED-BY-FIXER row.

## Declined

- **Cold-reader gaps: what a septic system or a well costs, how long the septic permit takes, and what clearing or a survey costs.** No verified source exists. The saved DES pages (`data/2026-11-d/land/raw/src/des-*.txt`: FAQ, single-home builder, site inspections, before you buy land, wells) give no install cost, no driller price and no permit time. The only cost they give is "thousands of dollars more" for an engineered system, and the page already says that. des.sc.gov does not resolve from this session, so it could not be re-read live. facts.md has no row for any of these. Per the brief, they stay out. The well row keeps "$70, plus the driller". To add these later, the owner or a researcher needs a source. One possible source is a local installer's or driller's published price, cited by name.
- **1440: the article column sits left with empty space to the right.** This is the site template on every sibling guide, as the reviewer noted. The page cannot change it. `partials/` is off limits to this round.
- **critic read.wall warnings** (now #water and #road at 320, and the AfBA at 320 and 390). These are prose sections with paragraph breaks. The AfBA is required legal text, in the same words as /buyers/programs/. No change.

## Changed (fix round 1, 2026-11-13)

Blocking:
1. **Flood section, dead guide sentence.** "Our flood zone check guide shows how to read a flood map." is now written only when `/buyers/flood-zone-check/` exists in the working copy (`live()`). Until then the whole sentence is left out, not just its link. The "finding past flooding" sentence stays. The unused `sib()` helper is removed. BUILD.md lead item 5 now says this.
2. **Five offer boxes with the same opening.** Each box now opens on its own section's point. No box body says "Send us the parcel":
   - Septic: "No sewer on the lot?" / "We look for a septic permit on it, ask whether sewer can reach it, and tell you what the soil visit will look for." / Have us check the septic.
   - Lot rules: "Want a manufactured home or a barn there?" / "The zoning and the deed can each say no. We read both for the lot, and tell you what they allow on it." / Have us read the lot's rules.
   - Flood: "Big tract near a creek or a swamp?" / "One map point can miss a flood zone. We look at the flood map across the whole tract, and tell you what a house there needs." / Have us check the flood map.
   - Tax: "Land taxed as farm land now?" / "A house on it can bring rollback taxes. We look up how the county taxes it today, and what changes when you build." / Have us look up the land's tax.
   - End band: "Know what the land can hold before you offer." / "We check the septic, the flood map, the zoning and the road for any tract you send us." / Ask us about a tract.
   - The hero offer's title in the spec no longer says "Send us the parcel" either. "Send us the parcel" is now on the page 0 times. Each new line rests on a fact already in its section: no sewer means a septic permit (F2), deed restrictions can bar a mobile home (F39), a tract can reach a flood zone away from its point (F40), and a change of use owes rollback taxes (F27). Every button still goes to /contact/.
3. **Tract size chart title repeated the H2.** The chart is now titled "Price an acre, by lot size". The H2 is unchanged.

Nits taken:
4. **Story.** The second sentence ("They also grew their cleaning business here.") is cut. The block now reads: "From Chapter3's files. Clients of ours from North Carolina bought land in Longs and built a new house there with a builder." This is still within stories.json `nc-client-build-longs`. It stays in the Fees to build section, the one place where buying land and hiring a builder is the subject.
5. **266 vs 212.** It now reads "...have the most land for sale: 266 pieces. Of those, 212 are an acre or more, and 70 are 10 acres or more." The 212 matches the chart row. It is read from `LO.tracts_1ac_plus`, which the F36 check already pins at 212.
6. **Over vs about.** The hero sub now says "about $150,000 near Myrtle Beach", the same word as the short answer.
7. **Perc fact said three times.** It is cut from the short answer, which now ends "We check all three for you." The H2 answer and the FAQ keep it.
8. **Repeats.** "on tracts of an acre or more" is cut from the Conway and Longs sentence. The phrase now appears in 3 sections, down from 4: the short answer, the zoning count, and one FAQ, where an answer has to stand alone. The camper FAQ is cut. It repeated the camper H3 word for word, and that H3 is already the question. There are now 5 FAQs.

## Gates after the rebuild (`node tools/mkpage.js specs/land.js`, preview on port 8924)

| Gate | Result |
|---|---|
| `score.js --only /buyers/land/` (SCORE_TODAY=2026-11-13) | 98/100. SEO 92, AEO 100, Human 100, Trust 100. Only fail: S8 inbound links (0), a lead item. |
| `claims-scan.js` | 0 findings. |
| `facts-check.js` | 0 on this page. The 4 wrong sentences reported are on other pages, as before. |
| `house-claims.js` | 0. |
| `repeat-check.js --strict` | passes. What is left are shared patterns with different numbers, such as "about 1 in N land listings" and "In our count, N". The scope phrase is in 3 sections. |
| `struck-check.js` (buyers-land-struck.json) | 1 hit of "two campers" in the camper H3, which carries every 909.D condition (row 18), as in round 0. The FAQ hit is gone with the FAQ. |
| `critic.mjs` 320, 390, 1440 | 0 blocking. 4 warnings, all read.wall, declined above. |
| `build.js check` | OK. |
| `build.js audit` | This page fails only on "missing from sitemap.xml" and "orphan", both lead items. Warnings: not in llms.txt, no Tim Nash quote (we write none), 21 sentences over 22 words (was 23), "may" 5 times (verifier wording). |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/land/shots-r1/buyers-land-{320,390,1440}.png`, critic JSON at `.../nd/land/critic-r1.json`. I looked at the 390 tiles and one 1440 tile. The short answer is in the first screen. The tract size card reads "Price an acre, by lot size" under its H2. The 266/212 paragraph sits under the area chart. The four offer boxes each open on their own point. The flood section ends on the past-flooding guide. The story is one sentence. The end band reads "Know what the land can hold before you offer."
