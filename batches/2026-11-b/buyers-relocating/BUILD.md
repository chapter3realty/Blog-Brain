# Build: /buyers/relocating/ (batch 2026-11-b, the relocation hub)

Writer, 2026-11-10. Spec: `specs/relocating.js` in the website working copy (`scratchpad/wt-live`), new. The live hub was hand-made HTML; the spec replaces it at the same URL. Built with `node tools/mkpage.js specs/relocating.js`. Facts: VERIFIED rows and CORRECTED rows in the verifier's wording only (facts.md, VERIFY.md). The table and every count are read from `data/2026-11-b/buyers-relocating/hub.json` and `data/2026-10-d/sell-out-of-state-buyers/out-of-state-buyers.json`; the spec throws if a ledger value moves.

## Outline

- **Title** (54 characters): Relocating to Myrtle Beach: How to Buy Before You Move
- **Description** (155): Relocating to Myrtle Beach: how to buy from another state, from an offer signed online to an attorney closing by mail, plus every moving guide by question.
- **H1:** Relocating to Myrtle Beach? You can buy before you move. **Italic line, about half size:** How to buy from home, and every moving guide by question.
- **Sub, shown:** When relocating to Myrtle Beach from another state, you can sign, inspect and close on a home from where you live now. (The critic needs an answer on the first phone screen, and the edge feed sits between the hero and the short answer.)
- **Byline:** Devin Day, reviewed by Tim Nash (spec author "devin"). The date is mkpage's.
- **Edge feed** under the opening (idx-lib, MOVE_IN). Not touched.
- **Short answer:** you can buy before you move; the offer signed electronically (row 16), the attorney may close by mail (row 24). Then about 15,000 in and 9,100 out (row 1), the $944 tax line (row 3), and the link to the why page for the four reasons.
- **Slim offer bar:** "Moving here? Tell us where from and what you want." / Plan my move with us (/contact/).
- **On this page** (four sections and the FAQ).
1. **Can I buy a house in Myrtle Beach before I move?** Seven numbered steps under thin rules: pick the towns (link to the 13 towns), see the houses, the insurance quote before the offer (row 17), offer from home (16), inspect (18, verifier's wording), choose the closing attorney (19, 20, 21), sign the closing papers at home (24, 22, 23, "a lender may set its own signing rules"). Then about 3 in 10 buyers have a tax bill in another state or country, more than half for condos (9, 10). A link to the steps on /buyers/buying-in-myrtle-beach/#steps.
   - Offer: "Buying from another state? Send us the homes you like." / Send us the homes you like (/contact/).
2. **Which moving guide is for your state?** About 8 in 10 out-of-state buyers are in the ten guide states (13). A plain table under thin rules, caption "North Carolina sends the most out-of-state buyers, by far": each state linked to its guide, buyers in a year with a thin bar, road miles rounded to 10 from the named top source county (11, 12, 14; "from the middle of the county" in the note). On a phone each state is three short lines. Brunswick County is next door (15, verifier's wording, first sentence only; the 50 miles is in the table). A link to where movers come from on the why page.
3. **What should I know before moving to Myrtle Beach?** One calm list per question group (Is it the right move? Where should I live? What will it cost? Work, health care and school; Weather, storms and the beach; Getting here and getting around; The move itself), 21 guides. One fact under a link only where a row exists: the 4 and 6 percent rule (29), half of northern buyers bring a remote job (25), January 56/37 and the ocean in the low 70s in October (4, 5), 45 days for the license and the car (28).
   - **The wow, under the beach group:** the winter golf cart season on the beaches Horry County runs (7, verifier's wording, split into two sentences), a USGS photo of the beach by the Garden City Pier (public domain, record from /invest/where-to-buy/, parcels in Horry County tax district 610), and Myrtle Beach State Park's winter riding season for horses (8, the verifier's replacement line; never the county zone, never November 1).
   - Offer: "Not sure which town fits your move?" / Have us pick towns for you (/contact/).
4. **Talk to a local agent about your move** (id lead-form). Name, phone, email optional, where from and when; the consent text word for word; a Call 854.333.2135 button. Sends as "Relocating page".
- **FAQ** (4, each answered in the body): Do I have to be at the closing? Can I sign my closing papers on a video call? Who picks the closing attorney? Can I move before I have a job here? (rows 24, 22, 23, 20, 21, 25, 26 labelled our clients' experience).
- **Sources** (16 links) and a note; photo credit; legal notice (not attorneys, not legal advice).
- **End band:** "Moving to Myrtle Beach? Start with one call." / Talk to us about your move (/contact/).

Not on the page: any lender, BrickWood, rate or payment; any home price; row 27 (the jobs page tells that story); row 30; owner questions 1 to 3 (no video tours, no "one trip", no extensions story); every line in the struck list.

## Gate results (final build)

| Gate | Result |
|---|---|
| `score.js --only /buyers/relocating/` (SCORE_TODAY=2026-11-09) | 97/100 (SEO 100, AEO 100, Human 96, Trust 79). No FAIL. Partial: P10 "law does not limit" (row 18 is CORRECTED; its wording is kept), P7 one picture for 1,206 words (the table is not counted), T2 one first-hand sentence. |
| `claims-scan.js` | 0 findings sitewide. |
| `facts-check.js` | 0 wrong sentences on this page. The 4 sitewide are on /from-massachusetts/, /from-virginia/ and llms-full.txt, from before this build. |
| `house-claims.js` | 0 sentences to scope or source. |
| `critic.mjs` at 390, 1024, 1440 | 0 blocking. One warning at 1440: "few visuals" (1 photo, 1 table; 3 expected). Fixed on the way: the first phone screen had no answer (sub now shown), a 981 px wall after the steps (notary facts moved into step 7), and the table note's line length. |
| `build.js check` | OK. |
| `build.js audit` | No FAIL on this page except the two mkpage date lines (schema and visible date vs sitemap lastmod). Two notes (~): no attributed sentence from a named licensed person; "may" 5 times (each is the law's or the verifier's "may"). Fixed on the way: sources block over 90 words, the sub's keyword and anchor, and the "moving to myrtle beach" keyword the why page owns (removed from this page's keywords). |
| `struck-check.js` (batch 2026-11-b) | 4 hits, all the generic CRAFT 2 distance patterns firing on "close by mail" (three times) and on "next door" in row 15's approved wording. None is a distance claim. |
| `repeat-check.js --strict`, `structure-check.js --strict` | Pass. |
| Banned forms | No em dash, no sentence opening with "So", no "Here is", no sentence over 28 words in the copy. |

## Shots

Taken by the critic on the second-to-last build (the last build only split one 32-word sentence in step 7 into two):

- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-relocating/shots/buyers-relocating-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-relocating/shots/buyers-relocating-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-relocating/shots/buyers-relocating-1440.png`
- Critic JSON: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/buyers-relocating/critic.json`
- Slices viewed at full size: `.../rb1/buyers-relocating/cut2/` (390, 1024, 1440).

What I changed after looking as a stranger: the phone table first showed two labelled cells per state, ten times. It is now three short lines per state (name; buyers with the bar; miles from the county), with one key line under the caption. The Brunswick sentence repeated the table's 50 miles, so it lost its second sentence.

## Files this build wrote

- `specs/relocating.js` (new)
- `chapter3realty/buyers/relocating/index.html` (rebuilt by mkpage)
- `chapter3realty/og/buyers-relocating.jpg` (new share card, `tools/ogcard.js`; it is this page's own image, outside the listed folders, so the lead should know)
- Nothing in `idx-lib/`, `partials/` or `batches/2026-10-b/data/idx-places.json`. The other modified files in the working copy were there before this build.

## For the lead

1. **Feed title** (`idx-lib/feeds.js`, "/buyers/relocating/": MOVE_IN). Bolder and personal, still true: "Move-in ready homes, for the day the truck arrives". No new place or feed.
2. **/buyers/buying-in-myrtle-beach/** has the H2 "Can I buy a home in Myrtle Beach from out of state?" (id out-of-state), the same question as this hub's first section. Cut it to one line and a link to /buyers/relocating/ ("how to buy before you move").
3. **/buyers/relocating/beaches/**: add the state park's winter horse line (row 8, verifier's wording), never the county's horse zone.
4. **One value for the typical home price** (facts F): cost-of-living says about $342,000 (July 2026); why-myrtle-beach says about $320,000 (September 2026). This page prints neither.
5. **Row 7 code check:** confirm the county's golf cart section once library.municode.com can be read (VERIFY.md).
6. **struck-check:** its CRAFT 2 distance patterns ("close by", "next door") fire on "close by mail" and on approved wording. A narrower pattern would stop the noise.
7. **Owner questions** (facts H) still open: video walk-throughs for a homebuyer; "one trip"; the extensions story. The page is written without them. A yes on the first would let step 2 say we walk the house on a video call.
8. **Referring pages:** the hub already has many (inbound count 28 in PLAN); nothing added.
