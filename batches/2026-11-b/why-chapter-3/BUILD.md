# Build: /why-chapter-3/ (batch 2026-11-b, Lane U)

## Second rewrite, 2026-11-12: notes for the lead (research stage)

The owner, 2026-11-12, asked for a page that sells the firm and its tools. Research is done: `must-answer.md`, `facts.md` (37 rows, second ledger) and `PLAN.md` are rewritten. The spec is not rewritten yet. Everything below the next heading describes the first build of 2026-11-10.

1. **"Only" is not printed.** The owner says Chapter3 has "the only Ai powered real estate search tool with dynamic preview photos". The check (facts rows 15 to 21, raw file `data/2026-11-b/why-chapter-3/raw/only-check-2026-11-12.txt`) found similar tools: Zillow's natural-language search (2023), Realtor.com's AI search (October 2025) and RealAssist AI (June 2026), and BoldTrail's natural-language search on broker sites (2025). One Myrtle Beach brokerage site, CENTURY 21 Stopper & Associates, runs on Real Geeks with `data-enable-ai-search="True"`. Most other local brokerage sites could not be read by a script (parked domains, 403, proxy 502). A scoped "no other Grand Strand brokerage site we checked" would rest on the sites that could not be read, so it is not offered either. The page says what ours does, plainly and with no comparison. To revisit: a person with a browser opens each local site in row 21 and tries its search; if none reads a sentence and none reads the descriptions as you browse, a scoped line about local brokerages can be proposed to the owner then.
2. **"Dynamic preview photos": our reading.** The code has no feature by that name. The plan reads it as the row of photo cards Chapter3 AI fills while it reads the listing descriptions (`idx-lib/map.js` lines 286 to 313, signed-up visitors), plus the map dot's photo card and the rows that scroll by themselves. Show the owner section 2 and ask him to confirm that is what he meant. If he means something else, it is a one-section change.
3. **Feed head (idx-lib, not mine to edit).** `idx-lib/feeds.js` line 384 gives `/why-chapter-3/` the NEWEST feed with the head "Just listed on the Grand Strand. Pick one, and we check it first", from the first rewrite. Proposed: "Just listed on the Grand Strand. Tell our AI what you want" (the NEWEST search is homes listed in the last 21 days; the feed carries the AI box).
4. **Place strip.** The page uses `homes("str-garden-city-beach-condos", "Garden City Beach", "", "Best Airbnb opportunities in Garden City Beach")`, an existing place. Add `/why-chapter-3/` to that place's `pages` list in `idx-lib/places.js` (a record only; edge.js does not read it). No new place is needed.
5. **The rental analyzer, a sibling to look at (not this page).** /invest/long-term-rental/ shows an "Estimated value" line and asks for a down payment, an interest rate and a loan term, and its FAQ talks about DSCR and down payments. The owner said on 2026-11-12 that Chapter3 cannot speak about financing, and the site never gives a value for an address. This page describes the analyzer by rent, costs, cash flow, return and permits only. The home page's "property analysis" box (Estimated value, interest rate) has the same issue. Lead's call; flagged, not touched.
6. **Screenshots.** Allowed for our own tools, but every useful view shows listing photos or Google's map tiles, which `rules/images.md` forbids saving into a page. The page uses the live feed, one live strip and a built demo card instead. No screenshot.
7. **Data.** `data/2026-11-b/why-chapter-3/tools.json` (script `scripts/pull_tools.mjs`, run from the website root; it calls curl so the request goes through the proxy). Re-run it on build day; the demo counts and the 131-of-141 count change with the listings and the sitemap.
8. **Owner questions.** The five of 2026-11-10 stay open. The plan says nothing that depends on them.
9. **Verifier.** Rows 1 to 12, 14, 24 to 26 and 37 are NEW and need an independent check; rows 15 to 21 are for BUILD only and need no verifier unless the lead wants the "only" result re-checked.

## First build, 2026-11-10

Built 2026-11-10 from PLAN.md, with VERIFIED and CORRECTED rows only, in the verifier's wording (VERIFY.md). The spec is new: website working copy `specs/why-chapter-3.js`, author "devin" (byline Devin Day, reviewed by Tim Nash; Devin is not named in the copy). The live page was hand-made; the URL is kept. Struck list `batches/2026-11-b/facts/why-chapter-3-struck.json`: no struck wording on the built page.

## Outline

- **Title (56):** How Chapter3 Checks a Myrtle Beach Home Before You Offer. It names the topic and a place and leaves "Chapter3 Realty team" to /about/ (cannibalization fix).
- **Description (143):** What a Chapter3 agent checks before you offer on a Myrtle Beach area home, the public record behind each check, and how to look up our license.
- **H1:** What does Chapter3 check before you offer on a Grand Strand home? **Italic line:** What the listing does not tell you, found before your money is at risk. The sub is hidden, as on /buyers/condo-in-litigation/.
- **Short answer:** the five checks (flood record, HOA papers, court cases, insurance quote, rental numbers). Then row 9: the law does not require an agent to discover hidden defects, and we go and look on any home you are serious about (row 23, the owner's wording).
- **Top offer bar:** "Found a home? Send us the address before you make an offer." Button: Have us check a home -> /contact/.

1. **What does Chapter3 check before you make an offer?** The table "What we check, and where we look", in the page's one card style. It has six rows, each with a link to the page that owns the detail: flood record, HOA papers, court cases, insurance, rental numbers, and HOA liens (before closing). On a phone each row folds into labelled lines. Then the rental-ban filter (row 24), the deed index line (row 14), and the photo of the Government and Justice Center in Conway. **Offer:** "Found a home you like?" Button: Send us the address.
2. **Can a home search tell you if a home is in a flood zone?** Our own count, in the verifier's wording for row 20: about 1 in 5 comes up when our home search is filtered for flood zone. **Chart:** one bar, 230 found and 888 not, with the day of the count, all from `listing-vs-map.json`. The spec checks that the share is about 1 in 5 for both the full zone and the core. The core test (19 percent) is in the sources line. Then we look up each home on FEMA's map, the disclosure form's limits (row 12, corrected), the county's floodplain staff (row 16), and a link to /buyers/undisclosed-flooding/. **Offer:** "Want the flood record of one home?" Button: Have us check its flood record.
3. **What does a buyer's agent have to tell you in South Carolina?** Rows 8 (corrected), 9 and 10. "We go and look."
4. **Is Chapter3 Realty licensed in South Carolina?** Yes, licenses 28849 and 43182 (rows 1, 2). **Wow line** (rows 30, 31): Tim's 30+ years and three generations, and Fred Nash Boulevard by the airport, named for his father. Link to /about/. H3 "How to look up our license" (row 6). H3 "What does a Broker-in-Charge do?" has three duties (row 7, corrected). The office duty is left out, as the verifier asks, while the office is by appointment only.
5. **Do you have to sign anything, and what does it cost?** Row 22 first, then row 11 (corrected, "the law presumes"). H3 "Do you have to use our affiliated lender?" uses the approved wording and the body disclosure word for word as on /invest/condotel-financing/ (row 32). The footer carries the full locked text. build.js refuses "the subject property" in body copy. **Offer:** "Want the rental numbers on a home?" Button: Send us a home to analyze.
6. **Which free tools does Chapter3 have?** Seven tools in a plain list under thin rules (row 27). The map line gives the count of homes for sale with its day (row 19, from the data file). Then a link to /guides/.

- **FAQ (5)** repeats only page answers: what we check, the flood search, the license, the cost, the lender.
- **End band:** "Tell us which home you are looking at." It gives the phone and its hours (row 3) and has one button, Tell us about the home -> /contact/.
- **Sources:** SC Code 40-57, Licensee Lookup, SC disclosure form, County flood flyer, County flood zones, Clerk of Court, Register of Deeds, Fred Nash Boulevard. Then the count note, and the photo credit (CC BY-SA 3.0).

Not on the page:
- the street number (owner, 2026-11-07)
- permits (owner question 2)
- the flooded-house story
- any reply-time promise
- "every" about the study
- the trade-name line
- rows 18, 21 and 28
- any rate, payment, value or address

## Files (website working copy)

- Spec: `specs/why-chapter-3.js`
- Page: `chapter3realty/why-chapter-3/index.html` (built by `node tools/mkpage.js specs/why-chapter-3.js`)
- Data: `data/2026-11-b/why-chapter-3/listing-vs-map.json` (rows 19, 20) and `photos.json`. The photo record is reused from /hoa/liens-and-foreclosure/: Wikimedia Commons, CC BY-SA 3.0, place verified in that batch. The page points at the existing files in `images/2026-11-a/hoa-liens-and-foreclosure/`.
- Share card: `chapter3realty/images/2026-11-b/why-chapter-3/share.jpg`. Made with tools/ogcard.js, moved out of og/, and set as the spec's `ogImage`.

## Gates

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /why-chapter-3/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100), 1,110 words of prose |
| `node tools/claims-scan.js` | 0 findings sitewide. The first build had "our lender" in an H3; it now reads "our affiliated lender". |
| `node tools/facts-check.js` | 0 on this page. Sitewide: 4 wrong sentences on 3 other pages (relocating from-massachusetts, from-virginia, llms-full.txt; SC standard deduction), not this page's. |
| `node tools/house-claims.js` | 0 sentences to scope or source |
| `node tools/struck-check.js --batch batches/2026-11-b --strict` | why-chapter-3 (15 patterns): no struck wording |
| `node tools/critic.mjs ... --widths 390,1024,1440` | 0 blocking, 0 warning at every width. The first run blocked on "a blog with no real photo"; the Conway photo fixed it. |
| `node build.js check` | OK. The one WARN is sitewide (index.html inline script). |
| `node build.js audit` | The only FAILs are the two mkpage date lines (dateModified and the visible Updated date against the sitemap lastmod). `node build.js dates` sets them. Two "~" notes: three explicit dates in the body (the byline and the count's day, given twice), and no quote from a named licensee (none is written; never a quote for Tim). |

Fixed on the way: P10 ("law does not limit"), T2 (first-hand sentences: "We checked", "We read"), S1 and S2 (topic and place in the title), and S5 (share image). From the audit: the hidden sub now uses "you" and names a place, "actually" is gone, and so is "the subject property".

## Screenshots

`/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/why-chapter-3/shots/`: `why-chapter-3-390.png`, `why-chapter-3-1024.png`, `why-chapter-3-1440.png`. Critic JSON: `.../rb1/why-chapter-3/critic.json`. Each was read at full size, in slices.

What I changed after looking:
- I cut the table note on city records. Its source is a researcher's note, not a verified row.
- "The disclosure form does not answer it either" became "asks about floods, with limits". "it" had no clear subject.
- "HOA" is spelled out once.
- The tool lines now match each tool's own page.
- A "So that" list line is now "To make sure".

The page is calm at all three widths:
- one card style for the table, the chart, the photo and the offers
- plain lists under thin rules
- no clutter in the first screen: the H1, the italic line, the byline, the short answer and the slim offer bar

## For the lead (nothing here was edited by this page's agent)

1. **Edge feed (idx-lib/feeds.js).** `/why-chapter-3/` has no entry, so no homes show under the opening. Proposed: `"/why-chapter-3/": { ...NEWEST, head: "Just listed on the Grand Strand. Pick one, and we check it first" }`. Review 1 (2026-11-10) asks for it again: the first offer is "Found a home?", so the strip belongs under the opening. The search (active, listed in the last 21 days) makes "Just listed" true, and the second sentence is the page's offer. If a feed title may not carry an offer, use "Just listed on the Grand Strand, ready for our checks" or keep NEWEST's title. The page names no place, so it has no glass.js homes() strip and needs no idx-places.json entry.
2. **The working copy is behind the live branch** (VERIFY.md, lead note 1). The footer partial here still prints "573 Vista Drive". The owner removed it on 2026-11-07 (live commit 2a280af0). The page body has no street number. Ship this page on top of that commit.
3. **Trade-name line (partials, compliance).** The header logo reads "Chapter III Realty". SC Code 40-57-135(E)(3) asks that a firm using a trade name reveal who holds it (row 5). The page leaves the line out until the lead and the owner decide the footer line. Proposed: "Chapter III Realty is a trade name of Chapter3 Realty Corp, South Carolina real estate company license 28849" (audit C5).
4. **Photo of the office.** Ask the owner before the shot list goes to the photo partner. A street photo may show the number he took off the site (VERIFY.md, lead note 2). When it arrives, it replaces the Conway photo in section 1 or sits in section 4.
5. **Row 20 upgrade.** If the CRM confirms that `flood_zone` reads the listing's FloodZone field, the page may say "the listing marks a flood zone" (VERIFY.md, lead note 3). Until then it keeps the search wording. Since review 1 the page says "when the MLS listings are searched for flood zone" and leads with what we do (we look up the home on FEMA's map); "our home search" is gone from the H2, the chart title and the FAQ. The fixer could not open `chapter3realty/chapter3-crm` from this session (adding the repo was refused), so the question to Abdulla is still open.
5b. **The filter behind five feeds (idx-lib/feeds.js).** SINCE_2010, BEACH_DRY, LL_INS, DRY_450 and the "florida" profile use `not: "flood_zone"` under titles such as "no flood zone listed". This page's count found 888 of the 1,118 Horry County homes for sale inside FEMA's high-risk zone without that flag. The titles are literally true, but a reader can take them as "out of the flood zone". Decide with the owner and Abdulla whether to fix the flag in the CRM, drop the filter from those feeds, or test the pin against FEMA's map at the edge.
6. **Referring pages** (owner, 2026-11-09). 21 pages link here today, all in the relocation author block and /guides/. Add links in body text, on words already there, to /why-chapter-3/ from:
   - /buyers/undisclosed-flooding/ (its "we check" lines)
   - /buyers/condo-in-litigation/
   - /hoa/documents/
   - /buyers/common-mistakes/
   - /buyers/
   - /about/ ("what we check before you offer")
7. **Owner questions** 1 to 5 stay open in `templates/owner-questions.md`. Each answer adds a line:
   - Question 2 adds the permit check, and "every" if he confirms it.
   - Question 3 adds whether the study itself is free.
   - Question 4 adds one reply promise.
   - Question 5(a) adds the flood story, after section 2.
8. **Data refresh** before release: `RAW=<scratch> python3 -I data/2026-11-b/why-chapter-3/scripts/pull_listing_vs_map.py data/2026-11-b/why-chapter-3`, then rebuild. The spec stops the build if the share is no longer about 1 in 5.
9. Not run, as briefed: `node build.js stitch`, `dates`, `llmsfull`.
10. **Site-wide, from review 1 (not this page's files).** (a) The footer partial's "Ready to make your next move on the Grand Strand?" band follows every page's own end band, so two closing offers stack. One fix: hide the footer band on pages whose `<main>` ends with an offer band. (b) `tools/photos.js` creditsList adds "Chapter3 Realty resized these photos and cropped some of them." after a record that already says "Chapter3 Realty cropped and resized the photo." (51 pages). Skip the general note when every row already carries its own change note, with a control in `tools/photos.test.js`.
