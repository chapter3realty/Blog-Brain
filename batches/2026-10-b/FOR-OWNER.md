# Batch 2026-10-b: five buyer pages, ready for your yes

All five pages are done, checked and graded 9 of 10 by an independent reviewer. Nothing is live yet.

## The pages (round 14, after your third read)

| Page | Address | Review grade | What a buyer gets |
|---|---|---|---|
| Best neighborhoods | /buyers/best-neighborhoods/ | 9 | 13 neighborhoods in six groups, by what each does best: walk to the beach, golf course neighborhoods, a boat or a paddle, a town center, new houses, and more house for the money. Each shows a normal day there, one honest trade-off, its price and its own "Book a showing" link. |
| Gated communities | /buyers/gated-communities/ | 9 | From the Cherry Grove marsh to DeBordieu: the club, the course, the water, how each gate works and what the fee pays for. Each place has its own showing link. |
| Homes with no HOA | /buyers/no-hoa-homes/ | 9 | 16 areas circled on one map, where all or most homes have no HOA. Each says what you can keep and do at home (a boat, a work truck, a shed, renting), one line on price, and its own showing link. |
| The Farm at Carolina Forest | /submarkets/carolina-forest/the-farm/ | 9 | The homes, the fee and what it covers, the pools, the trails, the school zones, and the old bombing range, said plainly. |
| Most affordable places | /buyers/affordable-places-to-live/ | 9 | Twelve neighborhoods that sell the place and the home: what the price buys, a day there, one trade-off. The chart lists a benefit beside every price. |

Preview of all five: https://claude.ai/artifact/6UAHR9HKpFEUGoumKpQLZ1

## Round 15 (your notes of 2026-10-21)

- **Cleaner tops:** the map is gone from the top of best; gated and no-HOA show their guide as small glass cards; gated's four-circle area map is cut; the line under the H1 is hidden on four pages.
- **Homes strip per community:** where each community's photo was, a row of homes for sale scrolls sideways: photo and price, the listing firm in small print, then "See all". It fills from the MLS once the listing search is on, and the photo we have stays as the placeholder until then. The Farm's row sits right under the top offer. Design and go-live steps: `IDX-DESIGN.md` (it builds on the listing search the CRM chat built; nothing is merged or live there yet).
- **No-HOA:** a few more facts a buyer could not guess, each checked: the Blue Crab Festival (a TV station reported more than 30,000 people in 2026), the Socastee swing bridge that completed the waterway in 1935, Conway's 1825 courthouse, Loris as the "Gate City", and others.
- **The Farm:** the school map now names the two Ocean Bay schools at the dot, and the caption names all three schools the area is zoned for.

## How they were made

- **Your third read, applied to all five:** sell each place like the best agent in town, with facts a buyer could not guess; no "facts:" lines; no preamble; the list of places once, grouped by what each does best (features, never people); a different angle on each page for its own reader; an offer for every place; the glass design.
- **One home for each fact.** Where two pages name the same place, one page owns each fact and the other gives a different one (`review/SIBLING-OWNERS.md`). Best dropped Grande Dunes and Forestbrook Estates for this reason: the gated page owns Grande Dunes, and no source gave either a day there that another page did not already have.
- **Facts:** every fact on the pages was checked by an agent that did not write it. When a fact was wrong, the corrected wording went on a list the build refuses to print again.
- **The package:** `upload/` is built from the website as it is live today, and every gate passes on all five pages (`upload/README-UPLOAD.md`).
- **New checks from this round:** `tools/house-claims.js` (no "most houses have a porch" from a few listings) and `tools/sibling-check.js` (no fact copied from a sibling page). Lessons B54 to B57.
- **Fair housing:** no page describes a place by who lives there, and no page calls a place safe or unsafe.

## What I need from you

1. **Yes to go live.** On your yes, I push the five pages to the website branch, as with the 55+ pages. You then run `deploy.ps1` the same way as last time. Note: the 55+ pages are live on the site, but their commit (39036014) is not on GitHub's copy of the website branch. On your yes I push it first, so GitHub matches the live site.
2. **The Farm's old bombing range.** The page says, near the end, that The Farm is on land the Army Air Force used for practice from 1942 to 1948. It says the Army Corps of Engineers' latest map shows the cleanup on the land under every home as finished, and it offers to show a buyer the Corps' map for a lot. It draws no conclusion about safety. Keep it, or take it out?
3. **The footer on every page.** All five readers said the site looked like it was for investors. The footer reads "The Myrtle Beach investor-focused brokerage. DSCR analysis, STR analysis, and condo-by-condo ROI data for serious real estate investors." A buyer reading about a first home stops there. My suggestion: "Chapter III Realty, a local brokerage on the Grand Strand. We help people buy, sell and invest." Yes or no?
4. **The search pop-up on every page.** It promises "off-market homes before they hit the public sites". MLS rules limit marketing a listing before it is on the MLS, so this promise is a compliance risk. My suggestion: remove that one phrase. Yes or no?
5. **Your name in the copy of two live pages.** You said on 2026-10-05 that your name goes only in the byline. Two older relocation pages use it in the text, for example "Devin rides his motorcycle into December" (/buyers/relocating/why-myrtle-beach/, /buyers/relocating/which-town/). Fix them to "we", or keep them?

6. **A line from Tim on each page.** The site's own audit asks each page for one sentence from a named licensed agent: something Tim did or said about the place. Search engines and AI answers weigh a named expert. I may not write it for him. If Tim gives one real line per page, I add it. Optional.
7. **Photos from Abdulla.** The one-line-per-shot request is `batches/2026-10-b/photo-request-abdulla.pdf` (updated 2026-10-21: two shots for places cut from the best page are gone). Send it yourself, or give me his address in this chat and I will send it from your Gmail.
8. **Drive to work (optional).** The affordable page gives drives to the beach only. A reviewer asked for one drive to a job center per place. Name the job centers your buyers ask about (for example the hospitals, the airport, Coastal Carolina University) and I will add them.

None of questions 2 to 7 holds up the five pages.
