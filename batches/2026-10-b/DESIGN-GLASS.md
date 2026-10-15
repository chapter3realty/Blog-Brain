# The glass theme: a guide for the page writers

Batch 2026-10-b, round 14. The owner, 2026-10-14: "all icons and graphs need to look very modern such as liquid glass try making the slight brown background liquid glass as well." CRAFT 4, "Look modern".

The code is `tools/glass.js`, with opt-in additions to `tools/icons.js`, `tools/area-map.js` and `tools/page-kit.js`. A page without the theme builds exactly as before. Batch 2026-10-a's four 55+ pages rebuild byte for byte with these tools (proof at the end).

## 1. Switch the theme on

Wrap the spec's export. Nothing else in the spec changes.

```js
const PK = require(path.join(BB, "tools", "page-kit.js"));
const G = PK.glass;                       // or require(path.join(BB, "tools", "glass.js"))

module.exports = G.page({
  theme: "glass",
  url: SELF,
  ...
});
```

- `G.page()` puts the theme's stylesheet at the top of the page (in `heroMedia`, else in the first section). It also draws the refined icons (golf, fitness, gate, trail, beach). Do not add the stylesheet by hand.
- Map names in glass pills: make the kit with `PK.create({ h, theme: "glass", ... })`. A batch kit that is shared (`_kit.js`) can instead pass `glass: true` to each `placesMap()` call.
- With no `theme`, or `theme: "plain"`, the spec comes back unchanged.

**The top offer is a slim glass bar (round 14).** On a glass page the first offer, right after the short answer, is one line with the button beside it (under it on a phone). It is about 133 px on a 390 px phone and 80 px on a desktop. It still links to exactly `/contact/`, with the same brass button. The dark band stays as the offer at the end of the page.

- It is the default, so no spec needs a change. To say it in the spec, add one line next to `theme: "glass"`:

  ```js
  topOffer: "compact",            // the slim bar; "band" keeps the full dark band at the top
  ```
- The bar shows `heroCta.title` and the button. `heroCta.text` is left out. Keep the title to one short line, under about 55 letters.
- `topOfferLine: "..."` replaces the bar's line when the title is too long for it.
- Why the no-HOA band was 550 px and the gated band 290: the band grows with its second line. No-HOA's `heroCta.text` is two sentences, five lines on a phone, against three lines on gated. The old section padding was also larger. The bar drops the second line, so every page's bar is the same height.
- Measured at 390 px:
  - Gated: the first offer went from 292 to 133 px. Entry 1 moved up 159 px, from 2,896 to 2,737 px (2.96 to 2.78 screens below the H1).
  - No-HOA: the first offer went from 353 to 133 px. Entry 1 moved up 220 px, from 3,673 to 3,453 px.
  - These are with this round's spacing. The 290 and 550 px heights the leads reported were measured before it.
- Checks on both pages: structure-check `--strict` passes; score.js gives gated 100 and no-HOA 98. No-HOA's one miss is S8, inbound links, which the upload's link diffs add. build.js audit gives the same results as before the change. The bar sits above the 20% mark, so it was never the audit's mid-page boxed offer.

What the theme changes, all inside `<main>`:

- The ivory bands become one soft, warm field.
- These get a frosted fill, a light edge, a soft shadow and round corners:
  - the icon row and its chips;
  - the atAGlance cards, pros and cons, and the example;
  - the selection guide (`wantPicker`);
  - the offer boxes (`h.cta`);
  - the tables (`h.table`, `compareCards`);
  - every figure: maps, photos, drawings and charts, with the caption inside the frame.
- The navy offer bands become a dark glass panel, about 24 to 32 px from the text above and below it.
- The sections take about two thirds of the site's top and bottom padding. The page is now one field, so two paddings meet between sections.
- Buttons become brass pills in sentence case, so "Send me the homes for sale" fits a phone line, and wraps cleanly when it does not.
- Brass words (eyebrows, the H1's second line) are a slightly darker brass, so they keep WCAG AA contrast on the field.
- The site's floating dots (`#c3-particles`) are off on a glass page. This is the only rule that reaches outside `<main>`.

You do not need to change any block you already use.

## 2. The chart with each place's best feature

`G.bars(rows, o)` draws a flat chart:

- one rounded bar for each place;
- the place's best feature beside its name;
- the price at the end of its bar;
- no gridlines and no legend;
- a glass frame.

It is the affordable page's opening chart.

```js
G.bars([
  { name: "1. Parkview", href: "#parkview", feature: "walk to Whispering Pines golf", value: 190000 },
  { name: "2. The Fairways at Wild Wing", href: "#fairways-at-wild-wing", feature: "...", value: 215000 },
  ...
  { name: "A home in the city of Myrtle Beach", value: 421250, reference: true },
], {
  caption: "What homes usually sold for, and the best thing about each place",
  note: "Bars start at $0. The gray bar is a home in the city of Myrtle Beach, for comparison.",
  format: (v) => money(v),               // optional; the default is "$190,000"
});
```

- `feature`: the field for the best feature. Keep it short, 48 letters or fewer. It reads "Parkview · walk to Whispering Pines golf", with the price at the end of the bar.
- Each feature must come from a verified row, like any other fact.
- The fair housing check runs on every feature. It refuses a feature about people, such as "great for families".
- `reference: true` draws a neutral gray bar for a comparison.
- Bars start at $0, so their lengths compare honestly.
- A screen reader reads the chart as a table: place, best feature, price.
- 2 to 20 rows.

## 3. Circled areas on a map

`placesMap(name, places, { areas })`, or `regionMap({ name, places, areas })`, draws named areas. Each area is a soft brass circle or outline, and its name sits in a glass pill.

```js
const MAP = placesMap("Homes with no HOA, by area", [], {   // [] : areas only, no numbered places
  areas: [
    { name: "Conway", note: "Almost all no HOA", lat: 33.836, lon: -79.048, radius: 3000 },   // a circle, meters
    { name: "Socastee", note: "Most no HOA", polygon: [[-79.03, 33.70], [-78.98, 33.70], [-78.97, 33.67], [-79.02, 33.66]] },  // [lon, lat]
  ],
  caption: "Map of the areas where most homes have no HOA fee.",
});
MAP.html   // the figure, and the key for any area whose name had no room
```

- An area is a circle (`lat`, `lon`, `radius` in meters, 150 to 15,000) or an outline (`polygon`, 3 to 400 points, longitude first, the GeoJSON order).
  - A point given latitude first is refused.
  - The town points are in `loadGeo2().towns`.
- `name`: 32 letters or fewer. `note`: optional, 32 letters or fewer, under the name in the pill.
  - The share of homes with no HOA is a fact. It needs its verified row.
- Up to 30 areas. Areas and numbered places can share a map.
- Where the name goes:
  - inside a large area;
  - else beside it, just off its edge, nearer it than any other area. It tries the right, left, bottom and top, in that order, and takes the first side that is inside the frame and clear of other pills, circles and marks. It may slide along that side, or onto its own circle's edge at a frame edge. The corners come last.
  - with the note dropped when only the name fits.
- A name with no room gets the area's number at its middle (a letter, beside numbered places). The name then goes in the key under the map.
- `areaLabels: "numbers"` numbers every area in the order given. Use it when the areas are the page's numbered entries and the map is crowded.
- A town inside an area is not named again.
- Every fact on the map must also be in the text (CRAFT 4).

## 4. An offer for each place

`G.offer(place, o)` draws a small brass-edged pill at the end of a place's entry. CRAFT 3: every place gets its own offer.

```js
G.offer("Parkview")
// <p class="c3-offer"><a class="c3-offer-pill" href="/contact/?place=Parkview">Book a showing in Parkview →</a></p>
G.offer("Indigo Grove", { label: "Get the homes for sale in Indigo Grove" })
```

- **The link format.** `/contact/?place=<the place, URL-encoded>`, for example `/contact/?place=The%20Fairways%20at%20Wild%20Wing`. With `website-patches/contact-place-prefill.patch` (in this batch's upload), the contact form reads `place`:
  - the message starts with the place, for example "Wachesaw Plantation: ";
  - "Buying a home" is ticked when nothing else is.
  
  The place is read with URLSearchParams and set as plain text, never as markup. It is cut to 80 characters, and a message already typed is kept.
- The label must name the place, and must read as a request.
  - The default is "Book a showing in X".
  - "Get the homes for sale in X" and "Ask about homes in X" are fine.
  - "See...", "Check...", "View..." and "Explore..." are refused. The website's build refuses such a label on a button to a form (build.js `CTA_PROMISE`, owner 2026-08-25). The pill is not a `.btn`, so the build would not catch it, and `glass.js` does.
- **Keep the boxed offers on `/contact/`.** The build's mid-page offer check counts a boxed `.btn` only when its link is exactly `/contact/`. So:
  - the page's main offer boxes (`heroCta`, `h.cta`, `bottomCta`) stay on `/contact/`;
  - the `?place=` link is for the per-place pill only.
- On a page without the theme, add `G.offerCss()` once.

## 5. Rules the theme keeps

- **Contrast.** All text keeps WCAG AA on the glass, at 390 and 1280 px. It was measured against the pixels really painted behind each line: the text is made clear, the page is captured, and the worst 3% of the pixels behind each line count.
  - The Farm with the theme: 249 lines of text. The only lines under AA are the small photo credits on the aerials ("U.S. government aerial photo", `tools/photos.js`). They are the same on the page without the theme, and the theme does not touch them.
  - The blocks demo (chart, pills, circled map, guide, table, pros and cons, offer boxes): 149 lines, none under AA. The lowest is 3.5:1, on the H1's large second line, which needs 3:1.
  - The page without the theme fails AA on two lines, the eyebrow and the H1's second line (2.6:1). The theme's darker brass fixes both.
  - Light glass and the dark offer panels both pass. The site has no dark color scheme, so the field stays light when a phone is in dark mode. The same audit with the phone in dark mode gives the same result.
- **Size.** The theme makes no text smaller. Body text, the chart, the pills and the offers are at the reading size (`--read`). Captions are at the site's 0.95rem.
- **Motion.** The theme adds no motion. With `prefers-reduced-motion`, nothing moves. Hovering a pill changes its color only.
- **Speed.**
  - Blur runs on a few large surfaces only: the offer boxes and panels, the selection guide, the table containers and the chart.
  - Blur is never nested. Small cards sit on a smooth gradient, where blur would show nothing and cost paint time.
  - With no `backdrop-filter`, or with `prefers-reduced-transparency`, every surface is a solid, slightly lighter panel.
  - Measured on The Farm, on a 390 px phone with the CPU slowed four times and no GPU:
    - first paint in about 0.4 seconds, the same as without the theme;
    - while scrolling, the median frame is 16.7 ms, the same as without the theme;
    - the slowest 5% of frames take 33 ms, against 17 ms without the theme. Two of 255 frames took over 50 ms, against one without the theme.
    - A real phone draws blur on its GPU, so it does better than this test.

## Screenshots

The Farm, built from `batches/2026-10-b/specs/the-farm.js` with the theme on. A demo page shows the chart, the pills, the circled map, the guide and the table. The demo's feature labels and area notes are placeholders, not facts.

In `batches/2026-10-b/review/glass/`:

- **Before, without the theme:**
  - `farm-before-390.png`: the top of the page, on a phone;
  - `farm-before-1280.png`: the pools section, on a desktop.
- **After, with the theme:**
  - `farm-glass-390.png`: the top of the page, on a phone;
  - `farm-glass-1280.png`: the pools section, on a desktop;
  - `farm-glass-390-offer.png`: the offer panel at the end, on a phone.
- **The gated page, round 14 polish:**
  - `gated-before-390-top.png`, `gated-before-390-map.png`
  - `gated-glass-390-top.png`, `gated-glass-390-map.png`, `gated-glass-1280-map.png`
  - On a 390 px phone, entry 1 moved up from 3,196 px to 2,925 px (3.79 to 3.47 screens). The space between the dark band and the text above and below it went from 117 and 100 px to 32 and 31 px.
- **The compact top offer:**
  - `gated-topoffer-before-390.png`, `gated-topoffer-after-390.png`
  - `gated-topoffer-after-1280.png`, `nohoa-topoffer-after-390.png`
- **The blocks:**
  - `blocks-chart-390.png`: the chart with feature labels;
  - `blocks-offer-1280.png`: the offer pills and an offer box;
  - `blocks-map-390.png`: the circled areas;
  - `blocks-guide-table-390.png`: the guide and the table as cards.

## Proof that batch 2026-10-a does not move (lesson B20)

The four 55+ pages were rebuilt in a copy of the website worktree (`scratchpad/wb-farm`, live branch commit 39036014). The copy kept the worktree's specs, data and mkpage. The pages:

- `/buyers/55-plus-communities/del-webb-grande-dunes/`
- `/buyers/55-plus-communities/del-webb-north-myrtle-beach/`
- `/buyers/55-plus-communities/myrtle-trace/`
- `/buyers/55-plus-communities/seasons-at-prince-creek-west/`

There were three builds.

1. **The live tools.** Built with the website's own pinned copy, `tools/blog-brain/`. All four are byte identical to the live pages (`cmp`).
2. **This change against the tools before it.**
   - The first build used the Blog-Brain tools at d06126b, before this change.
   - The second build used the tools with this change (`BLOG_BRAIN`).
   - All four pages are byte identical between the two builds. Their sha256 begin 19715da0bd59955c, a6b3e69377045c37, bbcd20e6cc9698e8 and 70db1655aa8ab58d.
   - Neither build equals the live pages for three of the four: d06126b already drew the wider batch-b map data. This is the known B20 case, and it is why batch 2026-10-a keeps its pinned `tools/blog-brain/`.
3. **This change applied to the live copy.**
   - The `icons.js` change was applied to the live `tools/blog-brain/tools/icons.js`, and the four pages were rebuilt.
   - All four are byte identical to the live pages.
   - The `area-map.js` change does not apply to the live copy as a patch, because that copy is older. Build 2 covers it.
