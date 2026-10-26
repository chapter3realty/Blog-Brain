# IDX on the guide pages and the homepage (round 15, 2026-10-21; built 2026-10-22 to the CRM's contract v1)

The owner: "the photos for each community could be a horizontally scrolling IDX feed and try to get it to show a wide variety of photos as it scrolls. it could just show house and price." And: "figure out how to design using the IDX for these pages and the homepage ... in a way that maximizes beauty and conversion rates."

This builds on the listing search the CRM session built (CRM Ticket 404). That work is on two branches: CRM branch `main-ms4kir` and website branch `idx-public` (commit 3c5aef6). Neither is merged or live. It has one MLS feed with three tiers. The public tier shows the facts, one photo and the listing firm. A free sign-up shows every photo and the full details.

## What a reader sees on a guide page

- In each community, right after its first paragraph, where its photo was: one row titled "Homes for sale in Cherry Grove now", with a "See all" link. The owner (2026-10-21): the feed "will act as the photos". The photo we have stays as the placeholder until the row fills, then it hides itself.
- The row scrolls sideways. On a phone about 1.7 cards show, so the next card peeks in and invites a swipe. On a wide screen 4 cards show.
- Each card is the house photo, with the price on a glass chip over it. Under it, in small print: "Listed by [firm] · CCMLS". MLS rules require the listing firm on every card (CCMLS 16.14).
- Up to 10 homes, spread across the community's price range: the lowest, the highest and evenly between them, photos first. The row shows the range of what the money buys, not ten look-alikes.
- The last card is "See all N homes in Cherry Grove". It opens the community's search page, where the sign-up shows the full details. That is the conversion step.
- The MLS disclaimer appears once, at the end of the page (CCMLS 16.16 and 16.17).
- **The Farm** has one strip, right under the top offer, so the homes for sale are the first thing after the short answer.

## When it shows nothing

The strip is an empty slot in the page until the listing search is on (`IDX_LIVE=1`). A place with fewer than 3 homes for sale keeps its empty slot. An empty slot takes no space, and the place's photo shows instead, where it has one. The page itself never holds listing data, so a stale price can never be printed into the page.

## How it is built

| Part | Where | What it does |
|---|---|---|
| The slot | `tools/glass.js` `homes(slug, name, photo)`, in all five specs | `<div class="hx-strip" data-place="cherry-grove" data-name="Cherry Grove"></div>`, then the photo in `<div class="hx-fallback">`, which CSS hides once the strip has cards |
| The look | `tools/glass.js` `homesCss()` | Glass cards, the price chip, sideways scroll with snap, reduced-transparency fallback |
| Filling it | `website-patches/idx-strips.patch`, applied to `idx-lib/near.js` on `idx-public` | At the edge, reads `/api/idx/places/<slug>` for each slot, picks the spread, writes the cards, adds the disclaimer once. A page with strips skips the generic "Homes near X" blocks at the bottom. Tested against a mock CRM: 12 homes give 10 cards across the range; 2 homes give an empty slot; the disclaimer appears once. |
| The places | `batches/2026-10-b/data/idx-places.json` | 58 places for the CRM's place catalog: slug, name, the pages each strip is on, and a draft match rule (MLS subdivision names; no-HOA areas use the area plus "association fee blank or 0, detached"). |

## The day the MLS data arrives

1. In the CRM, add the 58 places to `places-catalog.ts`. Match each by its MLS subdivision names. For each, check every section name its ledger counts (for example, Barefoot's four sections, Prince Creek's sections outside Seasons).
2. Run the CRM's read-only `scripts/idx-preview.ts` for each place. Each should return 3 or more active homes. A place with fewer stays hidden, which is fine.
3. Look at the photos the spread picks for 5 places. If one place repeats a builder's same plan, prefer one photo per street in the spread.
4. Apply `idx-strips.patch` on `idx-public`, build, and run the private preview (`IDX_PREVIEW_WORD`).
5. Then the CRM session's own go-live list: the CCAR notice, the attorney's read of the terms, the keys, `IDX_LIVE=1`.

## The homepage

The homepage was redesigned (commit 54703db5, live). With the feed, five additions, top to bottom:

1. **One search bar in the hero:** a place or a price, then "Search homes". It goes to `/homes/`. It replaces nothing the hero already does well.
2. **"New this week":** one strip, the same glass cards, the 10 newest listings across the Grand Strand, spread across price. New listings are the reason a buyer comes back.
3. **"Choose by what you love":** five glass cards, one per guide (the beach, golf and gates, no HOA, The Farm, on a budget). Each card holds a small strip of 4 homes from that guide's places, and a link to the guide. The guides do the selling; the strip shows it is real.
4. **"Under $300,000":** one strip for first-time buyers, with a link to the affordable guide.
5. **One offer:** "Tell us what you want nearby. We will send three neighborhoods." The same offer as the best-neighborhoods page, so there is one clear next step.

Beauty rules for all of it: large photos, the price on a glass chip, no badges on top of the photo except the price, one row per idea, nothing that moves by itself. Conversion rules: every strip ends with "See all", and every "See all" leads to the sign-up for full details.

## SEO and AEO

The cards are written into the page at the edge, so search engines see real links to listing pages. The guide text, the FAQ, the schema and the short answers stay exactly as they are; the strips add fresh content without changing what the page answers. The pages are cached for 5 minutes while the feed is on.

## Built (2026-10-22): the website side of contract v1

The CRM's contract v1 replaced the earlier `idx-public` design. The website side is built on a new website branch, `claude/idx-v1`, on top of the live site and batch 2026-10-b. It is off until `IDX_LIVE=1`. Its own guide is `docs/idx-website.md` on that branch. In short:

- `/homes/` search, `/homes/<MLS#>` (301 to the listing's URL), one page per listing, `/homes/near/<place>/` for every community on these pages, `/homes/terms/`, and `/sitemap-homes.xml`.
- The public sees one photo and the key facts; a free sign-up with name, email and phone (terms box unticked and required, texts optional with the locked TCPA wording, Turnstile) shows every photo and the full details. Heart and "Tour this home" on every listing.
- The guide pages' strips are filled at the edge from the CRM search: `subdivision` words for a named community, `near` a point for an area (`data/idx-places.json`). They pan sideways with no scroll bar; a mouse drags them.
- Every card shows the price and, under it, the listing firm at the same size. The MLS requires the firm on every listing, no smaller than the listing's own text (CCMLS 16.14, contract §8.1), so it cannot be smaller than the price.
- The footer now names Chapter3 Realty, Corp. (linked home) and says Equal Housing Opportunity; the privacy policy has the listing search section (contract §8, §9).
- 69 controls against a mock CRM pass (`node tools/idx-test.mjs` on that branch).
- A separate security and MLS review found 3 high, 4 medium and 12 low problems. All are fixed, each with a control where a test can show it: the page script broke on `$$` inserted through `String.replace`; `/homes/terms/` was read as an MLS number; a slow CRM had no timeout (now 8 s, and 3 s for a guide page's strips, after which the page shows its photos); listing text with `$'` could break the head; a malformed CRM answer gave an error page; a bad sign-up cookie was kept on search and place pages; edited pages kept the static file's ETag. Sign-out is now a same-origin POST, with its own button. A re-check by the same reviewer confirmed every fix and found three small new problems in the sign-out and "See them all" buttons; those are fixed too. The maintenance redirect no longer allows `//other-site`.
- The CRM answered on 22 Oct 2026. Its `hoa=0` filter (ticket 415) returns only homes whose listing says there is no HOA; a listing that does not say is left out. The 16 no-HOA places now send it, and every no-HOA strip and place page says "No HOA, as listed by the listing agent. Confirm before you buy." The CRM requires that line. Its limits (300 searches per visitor and 12,000 for the site, per 10 minutes) cover a guide page's 18 strip searches at once, so nothing changed there. The sitemap call now waits up to 25 seconds.
- The whole website change is saved here as `website-patches/idx-v1-listing-search.patch`. It applies on top of batch 2026-10-b (`git apply --check` passes).

The pages themselves (round 15): no glass offer boxes anymore; on best, gated, no-HOA and affordable the top is the title, the short answer and the guide, then the entries. The homes strip is each place's offer.

## Live (2026-10-23)

The owner deployed batch b and the listing search, and set `IDX_API_SECRET` and `IDX_LIVE=1` with wrangler. Checked on the live site the same day:

- `/homes/` shows 24 of 11,721 homes, each with its listing firm, the CCMLS source line and "Updated". Listing pages, place pages, the terms page and `/sitemap-homes.xml` answer 200. The header's "Search Listings" opens `/homes/`.
- The homes strips: 57 of 60 filled on a warm cache, with real MLS photos (hotlinked, loading) and the price over the firm. All 16 no-HOA strips carry the no-HOA note.
- Empty: Myrtle Beach Golf and Yacht Club (0 homes for "Golf and Yacht"; the MLS may write "Golf & Yacht"), Indigo Grove (0), Villas at Sandridge (1 home, under the minimum of 3). Check the MLS spelling with the dev key.
- On a cold cache a few strips missed the 2.5 s limit on the first load and filled on the next. Watch this; raise the limit if it keeps happening.
- Turnstile is not set yet, so the sign-up asks people to call.

## Round 16 (2026-10-23): price-only strips and the listing page

The owner: "you do not need the listing company displayed there i know it for a fact so just have the price". The strip cards on the guide pages now show the price only. The listing firm stays on the search and place result cards and on every listing page, where the MLS rules require it on the page for the home (CCMLS 16.14 as the CRM contract cites it).

The listing page, redesigned (`website-patches/idx-v1.1-listing-page.patch`, on top of the live commit c1df4fd6):

- A photo mosaic: the large photo, then two tiles. Not signed up: one tile blurs the photo and offers all the photos with a free sign-up; the other asks for a tour.
- The price large, the address, the facts as pills with icons, the listing firm, the key facts as glass cards.
- A side card that stays in view: price, "Tour this home", "Ask a question", save.
- Not signed up: "Free: everything else about this home", the locked items listed with blurred bars, never a number.
- After 5 seconds, a small card bottom right: "Want more information or a tour?" with "Tour this home" and "Ask a question". Once a visit; never over an open form; closes with ×. On a phone it is one short row.
- "Ask a question" uses the same lead form as the tour, with interest "question" (contract §7e). Both work without Turnstile.
- "More homes for sale in <subdivision>": up to 10 other homes there, closest in price, price-only cards.
- Subdivision names in capitals show in title case (format only).

What a visitor who is not signed up sees is only the public card the CRM sends: status, type, beds, baths, square feet, lot, year built, subdivision, waterfront, MLS number, one photo, the listing firm. HOA fees, taxes, the description, days on market and sold prices show only after sign-up. 75 controls pass.

## Round 18 (2026-10-25): the maps

`website-patches/idx-v1.3-maps.patch`, on top of v1.2:

- `/homes/map/`: a 2D map like Zillow's, on Google Maps with the site's browser key (a public key; the setting `MAPS_BROWSER_KEY` can replace it). Blue dots far out, price pills at zoom 14 and closer. The list of homes sits beside the map, or behind a "List" button on a phone. Hovering a card lights its pin, and a pin lights its card. "Search this area" after the map moves runs the search around the new view (`near` and `miles`). The search box takes plain words. A "Map" button on `/homes/` opens the same search on the map.
- `/map/` (the 3D map): a blue dot for each home, a search bar at the top that narrows them with plain words, and a card on click with the price, facts, address, MLS line and a link to the home.
- Both read `/homes/api/map`: one validated search, up to 144 homes, cached 5 minutes. It returns only what a pin needs, and every word goes into the page with textContent.
- **The pins need one thing from the CRM: a map point on the public card** (IDX-STUDY.md, request 2). The CRM already has the points (its `near` search uses them), but sends them only on the signed-up full listing. Until then, both maps show the homes in their lists and say "Map pins arrive when the MLS feed adds each home's location."
- Not checked here: the real Google map. This environment's proxy blocks Google's map tiles, so the page was tested with a stand-in map (dots, list, highlight, phone pop-up, no script errors). After the deploy, check the map on the site, and check that both browser keys allow `chapter3realty.com/*` in Google Cloud.

## Round 19 (2026-10-25): fixes, and the analyzer on the MLS

`website-patches/v1.4-maps-menu-analyzer.patch` (on the live commit cf061c38), and `website-patches/api-proxy-worker.js` for the separate `api-proxy` worker.

- **The 3D map's "Oops":** its Google key (`AIzaSyCt5…`) belongs to a Cloud project with billing disabled (Google's own answer: "You must enable Billing"). The site's other key (`AIzaSyAFT…`, the one in `partials/maps-loader.html`) answers for the static map and the 3D tiles, so both maps now use it. The 3D map moves from the `alpha` channel to `beta`, which removes the "development purposes only" banner.
- **The book pop-up:** it no longer opens on `/homes/*`, `/map/`, or any page with homes strips. Where WebGL is missing it no longer shows the raw green screen.
- **Menu:** the Guides menu opens on a click, not on hover; a second click goes to `/guides/`, and Escape or a click outside closes it. "All neighborhoods" is now "Search homes" (`/homes/`). The deploy gate's link check now knows that `/homes/` is served by the listing-search function.
- **The rental analyzer (`/invest/long-term-rental/`):**
  - It looks the home up on the MLS (`/homes/api/lookup`, by MLS number or by address near the point the address search returns) and fills in the beds, baths and size, with a note naming the MLS number, the listing firm and the source.
  - The AI is given the listing's facts as authoritative. For a signed-up visitor these include the HOA fee, the taxes, the flood zone, the stories and the description, which follows the listing-page rule. The old first AI call, which asked the model to "use actual listing records" it could not see, is gone.
  - Listing pages link to it with `?mls=`.
- **The worker:** runs on Claude Haiku 5.5 at effort medium, with room for its thinking (the browser's 1200 tokens becomes 3600, capped at 8000). It returns only text blocks, and a new cache version so every stored answer is fresh. A stand-in API test passes 7 of 7.
- **Homepage:** a "New" banner under the hero points to the analyzer, and the analyzer's eyebrow now reads "Now with live MLS data".
- Not checked: a real Haiku 5.5 call (no API key here, and a call costs money), and the real Google maps (blocked by this environment's proxy).

## Round 20 (2026-10-25): feeds on every article, sold homes, one map, returning clients

`website-patches/v1.5-feeds-maps-returning.patch`, on top of v1.4. Apply v1.4 first.

- **A homes feed on every article.** `idx-lib/feeds.js` gives each article under `/buyers/`, `/submarkets/`, `/invest/`, `/hoa/`, `/sell/` and `/market-reports/` its own search: a town's guide shows that town; the condo pages show condos; the 55+ pages show Del Webb, Myrtle Trace and Seasons at Prince Creek; the rental pages show houses or condos by the kind of rental; the newer-home and older-home pages filter by year built. The feed sits before the third section of the article, under "Live from the MLS", in the same card as the strips, with a "See all" link to the full search. When a search finds fewer than 3 homes, it falls back to a wider one; when that fails too, the article shows no feed. Pages that already have a strip get no second one.
- **Sold homes in the rental analyzer.** For a signed-up visitor, an address that is not for sale is looked up among sold homes (`sold=1`, contract §5). The AI is given the sold price, the date, the first list price and the days on market, and is told a recorded sale is the strongest value signal. A visitor who is not signed up is told sold data needs the free sign-up. The MLS rule allows sold data only to registered visitors.
- **One map page, 2D and 3D.** `/homes/map/` has a 2D/3D switch. `/map/` now opens it in 3D (a 301). The 3D view shows a blue pin for each home; a click opens its card. The footer link reads "Map of homes for sale".
- **Dots now, before the CRM sends points.** The site places each home with the US Census address finder (free, no key), cached 30 days. A home with a withheld address is never placed. When the CRM merges `website/public-map-points`, its points are used first.
- **A map on every listing page.** "Where it is" shows a map of the home. A click opens the map page centered on that home, with every home for sale in the city around it.
- **Returning clients (contract §7g).** A link from our emails carries a 12-letter code (`?k=`). The site trades it once for the visitor's token, sets the cookie for a year, and removes the code from the address bar before analytics reads it. A page with a code is never cached. A visitor whose terms are missing sees one box to accept them. The sign-up box has "Already working with us?": phone and first name sign a client in.
- **Homepage:** a "Search listings" box is the hero's main call to action. The "I am" paths sit under it.
- Why the dots were missing on the live 3D map: v1.4 is not deployed yet, and the CRM has not merged the map points. The "alpha channel" banner also goes away with the v1.4 deploy.
- An independent review found 9 problems. All are fixed, with a control for each that failed before the fix: the Welcome back box sat after the script that opens it; a home with a withheld address never signed the visitor in; an old listing address could claim twice; the newer-homes feed read the year at load time, when a Worker's clock reads 1970; the home sent from a listing page was missing from the map; a feed could land inside an open section; a CRM point missing its longitude; a repeat of the same search; and an unchecked page field.
- Not checked here: the real Google maps and 3D pins (this environment's proxy blocks Google), and a real Census call from Cloudflare. The tests use a stand-in Census service.

## Round 21 (2026-10-26): the map fix, feeds near the top, the analyzer in three questions

`website-patches/v1.5.1-map-fix.patch` (on the live commit c6346d5d), then `website-patches/v1.6-feeds-analyzer-speed.patch`.

- **The map page error (Cloudflare 1101).** The map page asked the geocoder for each home separately, each with a cache read and write: up to 144 outside calls. Cloudflare allows 50 per request on this plan, so the page's last call failed and the page broke. Now all homes go to the Census batch geocoder in one call (tested on the real service: 144 addresses in 2 seconds). Anything unexpected on `/homes` now shows our own "try again" page, never Cloudflare's.
- **Cards said "Built 2008" on old houses.** The year was read when the code loaded, and a Cloudflare Worker's clock reads 1970 at that moment. Fixed; the feeds had the same fault.
- **The "Welcome back" sign-in form showed under the sign-up form** on the live site. Fixed.
- **Homepage:** "Search listings" is a button in the same style as the "I am" buttons, above them. The analyzer box on the homepage asks for the address, the price (optional), and cash or a loan, and goes straight to the results.
- **Sign-up box:** as short as the owner's example: full name, email, phone, the terms box, the optional text box, "Continue to photos", "Already have an account?".
- **Address suggestions in every address box,** from Google Places (the key already allows it), loaded only when someone types. No number box on the site moves with the scroll wheel.
- **Feeds near the top of every article,** right under the part with the title. Each has a title made true by its filter, a line saying how the homes were picked, and a "make it yours" search (price, beds, town). Examples: "DSCR candidates: the lowest price per bedroom"; "Homes priced under the typical Maryland home" (from our own Zillow data on that page); "Waterfront condos in the vacation-rental towns"; "Houses with no HOA fee" with the required note; "Houses within 3 miles of Coastal Carolina University". No title describes people, promises income, or states a rate.
- **The rental analyzer:** one box for the address or MLS number; a blank price uses the MLS asking price; beds, baths, size and HOA come from the MLS. When the visitor has not said how they pay, a box asks "Buying with cash or a loan?" while the analysis runs. Results lead with a short AI overview, then four numbers, then homes like it for sale nearby, then the details in sections that open.
- **Listing pages:** "Analyze it as a rental" opens the analyzer with the home filled in and starts it.
- **Rates:** the owner asked for a 6% rate and 20% down filled in, and a daily rate. The website's own rule (CLAUDE.md item 3, PLAYBOOK) bans any stated interest rate everywhere, and down payment figures outside four investor-loan pages. So the boxes stay empty with "Your rate", and the old hidden fallback (25% down, 7.5%) is gone. If the owner changes the rule, this is a one-line change.
- **Speed:** the hero map image on phones is the 1,400-pixel one and no longer jumps the queue; "Myrtle Beach" in the hero paints at once. Lighthouse (mobile, local): largest paint 2.3 to 2.8 seconds before, 2.0 after. Also fixed: two color-contrast failures, the review slides' roles (the "agentic browsing" warning), and a table without a header on four relocating pages.
- **Links to the six pages Google had not crawled:** from the retirees guide (both 55+ pages), the STR rules and Airbnb income pages (STR setup), and the cost-of-living page (all ten "moving from" pages).
- **Found, not fixed:** Devin is named in the copy of seven relocating pages (from-ohio has a section "What surprised Devin after the move"). The rule says byline only. Removing it means rewriting those stories; that is a separate job. The cost-of-living page's sentence about him is removed.
- **This repo:** `tools/site-audit.js` now knows that `/homes/` is served by a Pages Function. 284 of its 300 errors on the site were that false alarm.
- Not checked here: the real Google maps and 3D pins, a real Haiku call, and real Places suggestions from a browser on chapter3realty.com (tested the same request from here; the browser was tested with a stand-in).
- **Review (independent agent), 10 findings, all fixed with a control each that failed before the fix.** The worst: a crafted `?go=1` link could put the AI's answer into the page as HTML, and that answer is cached for everyone. Now every AI number becomes a number and every AI text is escaped. Also fixed: a hidden 25% down payment when the box was cleared; a second analysis reusing the first home's facts; the cash-or-loan box staying open after an error, or starting twice; "See all" on no-HOA and near-a-point feeds opening an unfiltered search (the search page now reads `hoa=0` and `near`, with the no-HOA source note); ranked feeds now ask for the cheapest homes first; no analyzer button on a home whose address is withheld; a typed address now needs its town.
- **Emails:** every `hello@chapter3realty.com` on the site (146 places, mostly the business schema in each page) is now `info@chapter3realty.com`. `rules/claims.json` has a new rule, `old-email`, so it cannot come back. The CRM has hello@ only in its tests; the address it sends from is set in its mail settings.
- **Returning clients (contract §7g), checked point by point** in a browser against the development key's answers: one tap from an email link, a year's cookie, a returning cookie goes straight in with no claim, a bad code shows the normal page, no `k` in the address bar, "Nobody" falls back to the prefilled sign-up, `private, no-store` on any URL with `k`. Fixed in this pass: Turnstile is reset after every answer before the prefilled sign-up can post; the Sign in button no longer stays greyed out after "not found"; the two endpoints read bodies up to 48 KB as the contract says.

## Round 22 (2026-10-26): feeds picked for their readers, one filter bar

- Feeds (idx-lib/feeds.js): every card meets QUALITY (12 photos, $150,000 or $120,000 for a condo, built 1975+, 900 sq ft+, $110 to $2,500 a sq ft). Order is appeal, never price, with the towns in turn. Moving-from feeds are "Homes people from <state> love", each with a feature profile. Investor feeds search the long-term rental areas. No subtitles.
- Titles that name a year need a year on the listing (strictYear). A title that needs the CRM's features (needs: "has") falls back to headToday until the CRM says it applied them.
- Filter bar (idx-lib/filters.js): one GET form; works with no script. The value in force is always a choice. A filtered strip says "Homes for sale that match your filters" and adds the no-HOA note when hoa=0. The newest strip answer wins.
- GET /homes/api/strip: validated params, anonymous CRM call, light quality bar, which the reader's own type or low max overrides. No hearts in the cached answer.
- Review (10 findings, all fixed, controls in tools/idx-test.mjs). Patch: website-patches/v1.7-feeds-filters.patch, after v1.6.1.
