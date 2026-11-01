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
