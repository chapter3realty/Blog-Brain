# Needs from shared files: /buyers/retirees/ (batch 2026-11-a)

For the lead. Nothing here was changed in a shared file; each item has a workaround inside `specs/retirees.js`.

## 1. glass.js: the end offer band is drawn as the light top bar

- What: on the preview, the website's listing notice ("Updated ... Source: Coastal Carolinas Association of REALTORS ...") is added inside `<main>` after the end offer band. The band is then no longer `:last-child`, so glass.js `COMPACT_RULES` (selector `main#main>section[style^="background:var(--navy)"]:not(:last-child)`) gives it the light glass bar. Its headline and text stay ivory, so they are almost invisible on the light card.
- Seen on: /buyers/retirees/ and /invest/strategies/fix-and-flip/ (screenshots at 390 px). Likely every glass page with the end band.
- Fix proposed: in glass.js, select the top bar by position or content, not by `:not(:last-child)`. For example `section[style^="background:var(--navy)"]:not(:has(>.wrap>h2))`: mkpage gives the top band a `<p>` headline and the end band an `<h2>`.
- Workaround on this page: `PAGE_CSS` in the spec restores the dark panel on the band whose first child is an H2.

## 2. compare.js: cells over 40 letters

- The decision table ("If this is you, then ...") needs a sentence per row. compareCards refuses cells over 40 letters, so the spec draws its own glass cards (`decide()` in the spec). A shared "decision cards" block in compare.js would let other decision pages use it.

## 3. Header phone number at 1024 px (review round 1)

- What: at 1000 to 1120 px the header's `.header-ctas` phone number runs about 5 px past the window (page 1029 px wide at 1024). critic.mjs blocks on it. /invest/strategies/fix-and-flip/ has the same fault.
- Fix proposed: in the shared header CSS, let `.header-ctas` shrink (or hide `.hdr-phone-num` and keep the icon) between 1000 and 1120 px.
- Workaround on this page: `PAGE_CSS` hides `.hdr-phone-num` from 1000 to 1120 px; the icon and its aria-label stay. Remove it when the shared fix lands.

## 4. Homes strips for three of the 55+ communities (review round 1)

- What: each community entry now has a homes strip (`G.homes`), the owner's "horizontally scrolling IDX feed" for each community. Only Seasons has a place slug (`prince-creek-55`) in `idx-lib/places.js`. The other three slots stay empty, and the entry's photo shows instead.
- Fix proposed: add to `batches/2026-10-b/data/idx-places.json` and regenerate places.js: `myrtle-trace-55` { name "Myrtle Trace", q { subdivision "Myrtle Trace" } }, `del-webb-grande-dunes-55` { name "Del Webb at Grande Dunes", q { subdivision "Del Webb", city "Myrtle Beach" } }, `del-webb-nmb-55` { name "Del Webb North Myrtle Beach", q { subdivision "Del Webb", city "North Myrtle Beach" } }, each with page /buyers/retirees/. These are the same searches feeds.js already runs for the three guide pages. Confirm each subdivision against the MLS once.

## 5. Top feed of /buyers/retirees/ (review round 1)

- What: `idx-lib/feeds.js` maps /buyers/retirees/ to ONE_LEVEL, which falls back to FIFTY_FIVE ("Homes for sale in 55+ communities", link subdivision=Del Webb only). The critic saw that heading with a Del Webb-only "See all", and its AI search box ran past a 320 px window. On today's preview the page renders no top feed at all (the community strips are the offer, as on /buyers/no-hoa-homes/). If the lead brings the top feed back: give FIFTY_FIVE a link that is not Del Webb only, or title it "Homes for sale in the Del Webb communities". The page CSS keeps `.hx-fb-ai` inside the column at 320 px either way.

## 6. headlines.json (review round 1)

- The H1 and title changed to lead with what retiring here gives (owner's eye, round 1; VERDICTS 2026-10-07). `data/headlines.json` still holds the old "/buyers/retirees/" entry. Spec pages keep their titles in their specs, but the lead should update the entry so tools/headlines.js and the spec agree: title "Retire to Myrtle Beach: No SC Social Security Tax | Chapter3", H1 "Retiring to Myrtle Beach:" / "no state tax on Social Security."
