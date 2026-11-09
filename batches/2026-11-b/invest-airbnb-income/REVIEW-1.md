# Review 1 fixes: /invest/airbnb-income/ (batch 2026-11-b)

Fixer, 2026-11-09. Reviewer: pass=false, score 7. Nothing deployed, nothing committed. `node build.js stitch`, `dates` and `llmsfull` were not run.

`<web>` is `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/wt-live`. The spec before this round is saved at `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/airbnb-income.spec.before-r1.js`.

No new fact was added. Every figure still comes from a VERIFIED or CORRECTED row of facts.md, at the verifier's wording. No row needed VERIFIED-BY-FIXER.

## Findings declined or left to the lead

- **Byline "Updated July 20, 2026".** `node build.js dates` sets it. This task may not run it. The lead runs it before shipping. `build.js audit` still shows the two date lines for this page, and for /sell/ and /invest/strategies/1031-exchange/ too.
- **image-meta S13 (no 1x1 or 4x3 crops 1,200 px wide).** The only lawful photo is the 1,200 x 675 USGS aerial. A partner photo of a Grand Strand rental fixes it. Ask the photo partner (`templates/photo-request-email.md`): one Grand Strand oceanfront condo building and one Garden City Beach street of rental houses, 1,600 px or wider.
- **The str-tools changes (BUILD.md lead item 4).** They are on another page, outside this task's files. This page no longer has a "what you keep" section, ledger table, Airbnb fee H3 or lodging tax H3. /invest/str-tools/ should still drop its H2 "Which Grand Strand town does an Airbnb do best in?" and the keyword "how much does an Airbnb make in Myrtle Beach", in the same release. Then the two pages split cleanly: str-tools owns profit, this page owns gross income.
- **The AirROI November 5 refresh (BUILD.md lead item 3).** I took the other option VERIFY.md allows. The AirROI link is out of the sources line, and the page now links no AirROI page anywhere. The sources note names the update the figures come from ("AirROI's update of October 1, 2026, for the 12 months to September 2026"). The date is read from `data/str-market.json`, not typed. When the lead refreshes all four STR pages, put the link back.
- **"Would a four-bedroom house keep more after its bills?" (nit).** No verified row works a house from gross to net. Its costs are an insurance policy, upkeep and a tax line with no HOA fee, and none of them is in the ledger. With the net section gone, the italic line ("Most of the difference between towns is the size of the homes") is a claim about gross income, and the town chart and size table show it. A worked house belongs on /invest/str-tools/, if the lead wants one.
- **The cheapest-cleaner observation.** The reviewer listed it among str-tools' repeats. I kept it, reworded, in the managers section. That is where it answers the reader's question (should I hire a manager?), and str-tools has no manager H2. It is a story bank observation (`str-cheapest-cleaner`), used within its limits: nothing says Chapter3 manages rentals. It is also this page's second first-hand sentence; score T2 drops to 50 percent without it.
- **"About five times as much in July as in January" and the month chart.** Kept. This page owns gross income by month, as the reviewer's own fix says. str-tools' "How slow is the off season" can link here.
- **read.wall at 320 px (warning only).** Down from 1,124 px to 1,012 px, and gone at 390 (was 957 px). The short answer's first paragraph has three figures now, not five, and no monthly median. What is left is two short paragraphs a reader needs. Cutting more would cut the answer.
- **The homes strips look empty in the critic's screenshots.** The critic's browser has no IDX sign-in cookie. With the preview's cookie, both Garden City Beach strips show 10 homes at 390 and 1,440 (`r1/strips/`). The edge feed under the opening has the same empty look on /invest/str-tools/ and other pages in this preview, so it is the preview's sample data, not this page.

## What I changed

Spec: `<web>/specs/airbnb-income.js`. Page rebuilt with `node tools/mkpage.js specs/airbnb-income.js`.

Blocking:
1. **Homes feed under the opening.** `<web>/idx-lib/feeds.js` line 307 is now `"/invest/airbnb-income/": { ...STR_OCEAN, withStrips: true }`. The preview now puts "Prime oceanfront condos in Myrtle Beach and North Myrtle Beach" between the hero and THE SHORT ANSWER. Also added `/invest/airbnb-income/` to `pages` of `str-garden-city-beach-houses` and `str-garden-city-beach-condos`, in both `batches/2026-10-b/data/idx-places.json` and `<web>/idx-lib/places.js` (BUILD.md lead item 2). `pages` is bookkeeping; it does not change what a strip shows.
2. **No longer competes with /invest/str-tools/.** Cut the H2 "How much do you keep from a Myrtle Beach Airbnb?", the ledger table and its CSS, the list under it, the H3 "Who pays Airbnb's fee and the lodging tax?" and its offer box. Cut the FAQ entries "What percentage does Airbnb take from hosts?" and "Who pays the lodging tax?". Cut the "43 percent more active listings" and "90 days or fewer" sentences; one link now points to str-tools' "more hosts" section. Cut "The top short-term rentals pick one kind of guest" (on str-tools). The description, sub and share-card title no longer promise "gross to net". What is left after the bills is now said once, in the short answer, and the "good investment" answer links to the calculator for one condo.
3. **One answer on whether an oceanfront condo pays.** Short answer: "A typical oceanfront one inside Myrtle Beach keeps about $4,500 if it is open all year. Open only part of the year, at the nights the average listing books, it comes up short." This keeps the verifier's required part-year words (row 19 c) and drops the "$4,000 short" figure that had to be read twice. "Is an Airbnb in Myrtle Beach a good investment?" now opens: "An Airbnb here can pay, when the HOA fee is low or the home is open all year. ... One in a high-fee oceanfront tower keeps money only when it is open all year." The Boston story stays under "What do the busiest Myrtle Beach Airbnbs take in?", beside the top-quarter mark, as row 25 asks.
4. **AirROI link.** Removed from the sources line, as above. The sources are now Airbnb host fees, the Horry County 2026 tax levy, S.C. Code 12-43-220 (the tax line in the keep figures) and a manager's published fees. ST-575 and Airbnb taxes went with the lodging tax text.

Nits taken:
- Short answer: dropped the monthly median ($2,530 stays in the month section and the FAQ). Three figures in the first paragraph, all yearly. Split the four-bedroom clause into its own sentence (the old one was 31 words).
- Said once: the size section no longer repeats "$21,000 to $28,000 ... seven of the eight". It opens with the three-bedroom range, which only it has. The paragraph after the town chart no longer repeats "nearly twice" or the condo and house labels: "The gap between towns is mostly the kind of home, as the labels show. For a two-bedroom alone, Murrells Inlet took in only about a tenth more than the Myrtle Beach area." The sentence "Conway and Little River have far fewer listings" is gone; the chart says "few listings".
- "Plan on the nights a listing like yours books now." Cut.
- The ledger nits (HOA $1,200 x 12, the black insurance line, 320 px wrapping) went with the table.
- A second strip: `str-garden-city-beach-condos`, titled "Garden City Beach condos, where the typical one pays its bills" (the str-tools title; row 20 backs it). It sits in "Is an Airbnb in Myrtle Beach a good investment?", under the answer about low-fee condos and the calculator link. No fallback, so no pill sits beside the section's offer box.
- First paragraph of "By town" now names the top and bottom: "Murrells Inlet's average Airbnb took in the most, about $48,000 a year, and Little River's the least, about $15,000."
- New FAQ: "How much does a four-bedroom Airbnb make in Myrtle Beach?" (row 5: about $57,000 against about $25,000 for a two-bedroom), with the matching keyword.
- Hero sub: "What the average Grand Strand Airbnb takes in from guests in a year, by town, by home size and by month." A shorter sub tripped the critic's first-screen check at 390.

## Gates (final build)

From `/home/user/Blog-Brain`, page `<web>/chapter3realty/invest/airbnb-income/index.html`:
- `SCORE_TODAY=2026-11-09 node tools/score.js --site <web>/chapter3realty --only /invest/airbnb-income/`: **100/100** (SEO 100, AEO 100, Human 100, Trust 100), 1,078 words of prose. The first rebuild scored 95. The short answer was 126 words, "It can be" was a weak opener, the FAQ had three exact $10,000+ amounts, and there was one first-hand sentence. All fixed.
- `node tools/claims-scan.js <web>`: 0 findings.
- `node tools/facts-check.js <web>`: 0 on this page.
- `node tools/house-claims.js <page>`: 0 sentences.
- `repeat-check --strict` and `structure-check --strict`: pass. `struck-check` with `batches/2026-11-b/facts/invest-airbnb-income-struck.json`: no struck wording.
- `node tools/inbound.js <web>/chapter3realty --only /invest/airbnb-income/`: 17 referring pages. No page links to a removed anchor.
- `node tools/image-meta.js <web>/chapter3realty --only /invest/airbnb-income/`: fails S13, as before (declined above).
- My own sentence check of the main text: none over 28 words, no em dash, no sentence opening with "So" or "Here is". No rate, payment, BrickWood, Devin in the copy or Tim Nash quote.
- In `<web>`: `node build.js check` exits 0 ("Safe to deploy"). `node build.js audit` shows only the two date lines for this page (`node build.js dates`) and the existing A20 warning.
- Preview: `node tools/preview.mjs <web> --port 8872`. `node tools/critic.mjs http://localhost:8872 /invest/airbnb-income/ --widths 320,390,1440`: **0 blocking** at every width. One warning, read.wall at 320 (above).

Screenshots, all under `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/rb1/invest-airbnb-income/r1/`:
- `shots/invest-airbnb-income-{320,390,1440}.png`: full pages.
- `tiles/`: the full-size slices I read at 390 and 1,440.
- `strips/`: the three strips with the preview's sign-in cookie (feed, Garden City Beach houses, Garden City Beach condos).
- `critic.json`.

What I saw in the shots: the feed section is between the hero and THE SHORT ANSWER at 390 and 1,440. The short answer is two calm paragraphs. The town chart, size table and month chart are unchanged. The managers section ends in one short paragraph. "Worth it?" reads: answer, calculator link, condo strip, top-quarter mark, story, next pages, offer. Nothing overlaps at any width.
