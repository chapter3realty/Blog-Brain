# Build: /invest/airbnb-income/ (batch 2026-11-b)

Writer, 2026-11-09. Built from PLAN.md and only VERIFIED or CORRECTED rows of facts.md, at the verifier's values and wording (VERIFY.md). Nothing deployed, nothing committed.

## Files

- Spec (new; the live page was hand-built): `<web>/specs/airbnb-income.js`. Build: `node tools/mkpage.js specs/airbnb-income.js`.
- Page: `<web>/chapter3realty/invest/airbnb-income/index.html`.
- Share card: `<web>/chapter3realty/images/2026-11-b/invest-airbnb-income/share-card.jpg` (made with `tools/ogcard.js`, moved out of `og/` into this page's images folder; the spec points `ogImage` at it).
- Data read, never typed: `<web>/data/str-market.json` (every town figure) and `<web>/data/2026-11-b/invest-airbnb-income/findings.json` (sizes, months, the two condos). The build stops if the two files disagree, and every figure has a `must()` against its ledger row.
- Photo: the USGS oblique of Myrtle Beach oceanfront towers (public domain), from the record in `<web>/data/2026-10-d/invest-str-tools/photos.json`. No new image file.

`<web>` is `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/wt-live`.

## Outline

- **Title** (55): How Much Do Myrtle Beach Airbnbs Make? By Town and Size
- **Description** (148): How much do Myrtle Beach Airbnbs make? About $25,800 a year on average. By town, by bedrooms and by month, plus two condos worked from gross to net.
- **H1:** How much do Airbnbs make in Myrtle Beach, by town and size?
- **Italic line** (about half the H1's size): Most of the difference between towns is the size of the homes.
- **Sub:** What Grand Strand Airbnbs take in from guests, by town, size and month, and what is left after the bills.
- **Short answer:** the Myrtle Beach area average ($25,800 a year), the middle month ($2,530), two-bedrooms $21,000 to $28,000 in seven of eight towns, four-bedrooms $42,000 to $73,000 in most. Then the HOA fee: the Garden City Beach condo keeps about $5,000; the Myrtle Beach oceanfront one falls about $4,000 short, with the verifier's part-year wording.
- **Top offer bar:** "Send us a listing. We send what Airbnbs like it take in nearby."
1. **How much does an Airbnb make in each Grand Strand town?** Chart: eight towns, all sizes, exact AirROI figures, "most listings are houses" on Murrells Inlet, "4 in 5 listings are condos" on the Myrtle Beach area, "few listings" on Conway and Little River. Murrells Inlet is nearly twice Myrtle Beach for all sizes and about a tenth more for a two-bedroom. The towers photo. Occupancy (36 percent of open nights), Conway and Little River small, no Carolina Forest market.
2. **How much does a two-, three- or four-bedroom Airbnb make in Myrtle Beach?** The verifier's row 7 wording first. Table: eight towns by 2, 3 and 4 bedrooms (on a phone, each town is a name over three labelled figures; * under 30 listings; Conway has no four-bedroom row). H3 "Is the average Airbnb income the typical result?" (row 8, as corrected). H3 "How much more does a bigger home take in?" (two to four times; Garden City Beach five-bedroom about $98,000). Homes strip `str-garden-city-beach-houses`, title "Houses for sale in Garden City Beach", no fallback. Offer: "Want homes where nightly stays are allowed?"
3. **How much does a Myrtle Beach Airbnb make each month?** The middle month $2,530, the middle half $1,270 to $4,330, the top tenth $6,770 or more. Column chart, July and January labelled, June to August darker. 47 percent in summer; Pawleys Island's 37 percent, the smallest share (row 12 wording). Why twelve months do not equal the year. Link to mid-term rentals.
4. **How much do you keep from a Myrtle Beach Airbnb?** The ledger table: the same two condos as /invest/str-tools/ (asking price, HOA fee, nights and rate, every cost line, what you keep: +$5,100 and −$4,200, rounded to $100). Under it, a plain list: Garden City with a manager at 15 percent of the nightly bookings keeps under $2,000; Myrtle Beach open all year keeps about $4,500, and its HOA fee is nearly three quarters of its bills. H3 "Who pays Airbnb's fee and the lodging tax?" (15.5 percent; about 13 percent inside the City of Myrtle Beach, 89 nights). Link to the calculator. Offer: "Have us run one condo before you offer."
5. **What does an Airbnb manager take in Myrtle Beach?** 10 to 25 percent published; a list: basic plan about 13 to 17 percent "in what we have seen", full service on profit, the resort's 38.6 percent on its 2017 terms. The cheapest-cleaner observation, no quotation marks.
6. **Is an Airbnb in Myrtle Beach a good investment?** The answer in one sentence (low fee keeps money, high-fee tower does not, at average bookings). 43 percent more listings; more than half booked or blocked 90 days or fewer. H3 "What do the busiest Myrtle Beach Airbnbs take in?": the top-quarter mark, about $44,000, and the boston-hotel-manager story with "These are his real numbers, not a promise." H3 "What should you weigh next?": str-vs-ltr, rental-returns, str-rules. Offer: "Weighing an Airbnb against a yearly lease?"
- **FAQ** (6, each answered on the page): a month; the cleaning fee; Airbnb's percentage; occupancy; Carolina Forest; who pays the lodging tax.
- **Sources:** AirROI, Airbnb fees, Airbnb taxes, SCDOR ST-575, the 2026 levy, S.C. Code 12-43 (the verifier's new URL), one manager's published fees. Note: AirROI, 12 months to September 2026; our count; our arithmetic. Photo credit.
- **End band:** "Want these numbers for one address?", 854.333.2135, "We answer evenings."

Four offers plus the top bar, each in different words, each a request to /contact/. No lender, no BrickWood, no rate, no payment.

## Changes from PLAN.md, and why

- **No hero chips.** The three chips repeated the short answer's figures (CRAFT 5, each fact once).
- **Exact AirROI figures in the town chart and the month sentence.** `node build.js check` fails unless every revenue in `data/str-market.json` and the four Myrtle Beach monthly percentiles appear on this page exactly (its strdata gate). Prose rounds to $1,000, except $2,530, $1,270, $4,330 and $6,770, which AirROI prints.
- **One photo** (the towers, beside the condos-and-houses sentence). The critic blocks a blog page with no real photo.
- **Strip fallback left empty.** The fallback pill and the section's offer box sat back to back when the strip was empty.
- **"Myrtle Beach condo rental income" taken out of the keywords.** `build.js audit` flags it as /invest/condos/'s.
- **Story label** is "These are his real numbers, not a promise," the wording /invest/str-vs-ltr/ ships. `build.js audit` fails "real story" as an intensifier.
- **Lead time (row 13), the Myrtle Beach $4,200 in prose, and the counts "about 50" and "about two dozen"** are not on the page. The ledger table shows −$4,200 and the prose says "about $4,000 short", as the verifier asked.

## For the lead (not done here: outside this page's files)

1. **The edge feed.** `idx-lib/feeds.js` line 307 must become `"/invest/airbnb-income/": { ...STR_OCEAN, withStrips: true }`. Without it, the page's own strip makes `idx-lib/edge.js` (line 249) drop the STR_OCEAN feed under the opening, which the owner asked for. In the preview the feed was gone for this reason.
2. Add `/invest/airbnb-income/` to `pages` of `str-garden-city-beach-houses` in `batches/2026-10-b/data/idx-places.json` and regenerate `idx-lib/places.js`.
3. **AirROI's November 5 update** (VERIFY.md, read first). Every AirROI figure here is the October 1 update, the same as /invest/str-tools/, /invest/str-vs-ltr/ and /invest/rental-returns/. The sources line links the AirROI page, as those siblings do, and names "12 months to September 2026". Refresh all four together or none.
4. **Cannibalization.** /invest/str-tools/ still has the H2 "Which Grand Strand town does an Airbnb do best in?" with a two-bedroom chart by town, the title "Myrtle Beach Airbnb Calculator and Numbers by Town", and the keyword "how much does an Airbnb make in Myrtle Beach". PLAN.md "For the lead" items 1 to 3 give the changes.
5. **Sibling sentences** (PLAN.md items 4 and 6 to 10): rental-returns' 55 percent cost method; from-massachusetts "five data vendors"; surfside-beach "all nine submarkets"; garden-city "compare all nine submarkets"; murrells-inlet "Airbnb income page run both sides for one house"; str-tax-treatment's management link still holds (section 5 stayed).
6. **Share image.** The card is in this page's images folder, not `og/`. Move it to `og/invest-airbnb-income.jpg` if that is the convention you want; then drop `ogImage` from the spec.
7. `node tools/image-meta.js --only /invest/airbnb-income/` fails S13 (no 1x1, 4x3 and 16x9 Article.image crops 1,200 px wide). The only lawful photo is 1,200 x 675, too small for the 1x1 and 4x3 crops. Not in this task's gates. A photo from the partner would fix it.

## Gate results (final build)

From `/home/user/Blog-Brain`:
- `SCORE_TODAY=2026-11-09 node tools/score.js --site <web>/chapter3realty --only /invest/airbnb-income/`: **100/100** (SEO 100, AEO 100, Human 100, Trust 100), 1,354 words of prose. No FAIL, no partial.
- `node tools/claims-scan.js <web>`: **0 findings** on the whole site.
- `node tools/facts-check.js <web>`: **0 on this page.** The 4 wrong sentences it reports are the existing ones on /buyers/relocating/from-massachusetts/, /buyers/relocating/from-virginia/ and llms-full.txt (SC income tax), not new.
- `node tools/house-claims.js <web>/chapter3realty/invest/airbnb-income/index.html`: **0 sentences.**
- `node tools/critic.mjs http://localhost:8872 /invest/airbnb-income/ --widths 390,1024,1440`: **0 blocking.** One warning at 390: "read.wall" on the hero and short answer (the site's own hero; the same on other pages). The first run blocked twice: no photo, and the header phone link pushing the page to 1,029 px at 1,024 (fixed with the same header rule as /sell/home-value/).
- Also run: `repeat-check --strict` passes; `structure-check --strict` passes; `struck-check` (36 patterns for this page): no struck wording; `inbound.js`: 17 referring pages.

In `<web>`:
- `node build.js check`: **exit 0** ("Safe to deploy"). It failed at first on the strdata gate (exact figures); fixed.
- `node build.js audit`: on this page only the two mkpage date lines (`schema dateModified 2026-07-20 != sitemap lastmod 2026-11-04`, `visible "Updated July 20, 2026" != sitemap lastmod`), which `node build.js dates` sets. One warning (~): no attributed sentence from a named licensed person. A quote for Tim Nash is not allowed without the owner, so it stays.

## Screenshots

Final critic run, full pages:
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-airbnb-income/shots/invest-airbnb-income-390.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-airbnb-income/shots/invest-airbnb-income-1024.png`
- `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-airbnb-income/shots/invest-airbnb-income-1440.png`

Full-size slices I read: `.../rb1/invest-airbnb-income/crops5/` (390), `crops4/` (1024), `crops2/` (1440). Critic JSON: `.../rb1/invest-airbnb-income/critic.json`.

What I fixed after reading them as a stranger: the size table wrapped town names to three lines on a phone (now a name over three labelled figures); the strip's fallback pill and an offer box sat back to back; walls of text after the ledger and in the last two sections (now plain lists under thin rules and short H3s); the ledger cells wrapped "about $1,200 a month" (now plain figures); list and story text was smaller than the paragraphs; the month chart was too tall on a wide screen.

The homes strip was empty in the critic's browser, so the screenshots show the section without homes. The preview fills it when fetched directly.
