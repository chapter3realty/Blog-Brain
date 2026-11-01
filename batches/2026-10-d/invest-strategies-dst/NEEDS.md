# Needs: /invest/strategies/dst/

Changes to shared files that this page needs. The writer did not make them (shared files rule); the spec works around each one where it can.

## 1. glass.js: the closing offer band is drawn as the light top bar on every glass page (high)

`tools/glass.js` styles the top offer with `section[style^="background:var(--navy)"]:not(:last-child)` and expects the closing band to be the last child of `<main>`. The website's edge (`idx-lib/edge.js` line 183) adds the listing disclaimer as a `<div class="hx-wrap">` just before `</main>`. The closing band is then not the last child, so it gets the light glass surface with its ivory text: the headline and the sentence are almost invisible. Seen in the preview at 390 and 1440 px on this page before the workaround. Every glass page served through the edge has it, including the live site.

Fix: in glass.js, use `:not(:last-of-type)` for TOP and `:last-of-type` for the closing band (the disclaimer is a div, so the band is the last section). Then remove the workaround block in `specs/dst.js` (CSS, comment "The closing offer band").

## 2. idx-lib/feeds.js: the feed for this page

`"/invest/strategies/dst/": OCEAN_PROGRAM` puts "Oceanfront condos in a rental program" right under the hero. The reader of this page is selling a rental, not buying one, and the feed pushes the short answer off the first phone screen (the critic's first-screen check failed until the hero sub was made the summary; /invest/strategies/fix-and-flip/ still fails it for the same reason). Proposed: `{ ...OCEAN_PROGRAM, low: true }`, or the RUN_NUMBERS rental feed with `low: true`, so it sits lower in the page.

## 3. Owner question 2: the no-fee sentence

Not on the page until the owner answers `OWNER-QUESTIONS.md` question 2. If the answer is yes, add to "What does Chapter3 do when you sell a rental for a DST?", after the sentence that Chapter3 does not sell or advise on DST shares:

"Chapter3 takes no fee, referral payment or commission split from any DST sponsor, securities firm or adviser. Today FINRA Rule 2040 bars a securities firm from paying a person who is not registered but would need to be."

The second sentence is ledger row 12 (verified wording, source https://www.finra.org/rules-guidance/rulebooks/finra-rules/2040).

## 4. Owner question 1: the guest author

The page is built on the proposed answer: Chapter3's own page, byline Devin Day, reviewed by Tim Nash. The guest's paragraph, phone, website and the Cetera disclosure are gone. If the owner wants him kept, one boxed line goes before the FAQ.

## 5. Photo metadata

`node tools/photos.js embed data/2026-10-d/invest-strategies-dst/photos.json chapter3realty` needs exiftool, which this container does not have. Run it where exiftool is installed, before upload. `tools/image-meta.js` fails S13 on every page here for the same reason.

## 6. Dates

The byline still shows the old page's date. The lead's `node build.js dates` sets it.

## 7. Header: the page is 1029 px wide at 1024 (review round 1, critic blocking)

`div.header-ctas` ("SEARCH LISTINGS" and the phone number) ends at 1029 px in a 1024 px window, so every page scrolls sideways by 5 px between about 1000 and 1100 px. /invest/strategies/fix-and-flip/ has the same fault. Fix in the shared header CSS: let the gaps in `.header-inner` and `.primary` shrink, or drop the phone number, between 1000 and 1100 px. Workaround in `specs/dst.js` CSS until then: `@media (min-width:1000px) and (max-width:1100px){.header-inner>.primary{gap:2.2rem!important}.header-inner{gap:1.6rem!important}}`. Remove it when the shared fix lands.

## 8. Listing search box: 341 px wide in a 320 px window (review round 1, critic blocking)

`.hx-fb-ai`, its badge and `.hx-fb-q` keep the textarea at 200 px, so the "Find houses" button is 29 percent cut off and the page is 364 px wide at 320. Same on fix-and-flip. Fix in the shared filter-bar CSS: `.hx-fb-ai,.hx-fb-q{max-width:100%;min-width:0;box-sizing:border-box}` and `.hx-fb-q textarea{flex:1 1 0;width:auto;min-width:0}`. The same rules are in `specs/dst.js` under `@media (max-width:379px)` until then.

## 9. photos.js: the credit note is said twice

`tools/photos.js` line 392 adds "Chapter3 Realty resized these photos and cropped some of them." after each photo's own note already says it changed the photo. On a page with one photo the line repeats. Proposed: add the general line only when a photo has no changes note of its own. `specs/dst.js` strips the line from `PH.credits()` until then.

## 10. Feed under the title (item 2 again, now from three reviewers)

The critic, the reader and the owner's-eye reviewer all flagged "Waterfront condos in Myrtle Beach and North Myrtle Beach" under the title. It showed 0 homes in the preview at every width, it is for a buyer, and it pushes the short answer below the first phone screen. Owner VERDICTS 2026-10-25: a feed must fit what the blog is about. Proposed again: no feed on this page, or a low feed (`low: true`) of rental-program condos, or a "sell your rental" strip. The page cannot fix this from its spec.

## 11. Share card

`node tools/ogcard.js <site>/chapter3realty /invest/strategies/dst/` made `chapter3realty/og/invest-strategies-dst.jpg` (the site path must be absolute, or the fonts do not load and Playwright reports "NetworkError"). The checkpoint does not save `og/`. If it is lost, run the command again. The page no longer uses the condo photo as its share image.

## 12. Photos of the DST-owned communities

Round 2: the oceanfront condo aerial is gone (critic and owner's-eye review: the photo did not show the subject). In its place is a U.S. government aerial (USDA NAIP 2023, public domain) of the apartment community a DST owns near Carolina Forest Boulevard, with the trust's parcel outlined from the county file (ledger row 31, photos.json). It sits under the map in "Do DSTs own property on the Grand Strand?". Still send shot-list.md items 1 and 2 to the photo partner: a ground photo of a DST-owned community would be better than an aerial. The old condo files are deleted from images/2026-10-d/invest-strategies-dst/; the record is kept in the scratch folder as photos.r1.json.

## 13. Feed under the title, round 2

Still open (items 2 and 10). At 390 and 1440 the strip "Waterfront condos in Myrtle Beach and North Myrtle Beach" shows only the "See all homes" tile in the preview, right under the hero. All three round-2 reviewers flagged it. The spec cannot change the feed. The lead must choose: a feed this reader could buy with the exchange (rentals that suit a 1031 replacement, with a title that says so), `low: true`, or no strip on this page.

## 14. Map labels at 320 px and road names (critic, round 3)

At 320 px the region map's place labels and scale text are about 9 to 10 px. The spec now passes `maxRatio: 0.8`, which took the empty top third off the map at 768 to 1440 px. Marker 2 (Clear Pond) still has no named road next to it. A shared fix in `tools/area-map.js`: a minimum label size on narrow screens, and an option to name a nearby road. Not changed here (shared file).

## 15. Feed under the title, round 3

Still open (items 2, 10 and 13). All three round-3 reviewers flagged the "Waterfront condos" strip again. The lead's choice is unchanged.
