# REVIEW 1: /invest/condo-buildings/palace-resort/ (fix round)

Reviewer: pass=false, score 8. Five blocking items, eleven nits. All blocking items are fixed in the spec (website `specs/palace-resort.js`). One new fact row: facts.md row 12a, VERIFIED-BY-FIXER.

## Declined or partly taken

- **Critic read.wall on the hero sub (390, 320).** Not changed. The preview leaves the "the-palace" strip empty; live, the strip fills under the short answer. The reviewer called this a false hit.
- **Critic read.wall in #owning at 320 (904 px).** Kept. It is four short paragraphs on the water park and the pools, the page's wow. It does not fire at 390. The added line on owners' passes was cut to one sentence to keep it short.
- **P7 (2 pictures per 800 words) dropped to 50%** because the floor chart is gone. Kept that way: the reviewer asked for the chart to go, and a second picture waits for the photo partner's shots (BUILD.md, Photo).
- **The reviewer's loan sentence** ("Many standard loans will not cover a unit in a building run like a hotel, and the Palace is not on the FHA list") was used as two sentences, to stay under 28 words with the list label (build.js audit counts them together).

## What changed

Blocking:
1. **Fair housing.** "a reason a family picks your unit" is now "a reason a guest picks your unit".
2. **Dated counts.** The spec reads the run date from `listings.json` refreshedAt (`RUN`, no date typed). "this week" is gone from the page. Owning: "All 25 condos for sale on November 13, 2026 came furnished". Fee table column: "For sale Nov. 13". Renting: "the condos for sale on November 13". Sales table: "25 for sale on Nov. 13". FAQ: "On November 13, 2026, 25 Palace Resort condos were for sale". Sources note: "CCMLS listings on November 13, 2026, in aggregate; county parcels and the deeds recorded in the 12 months to September 2026". The year is printed once in the body (P3).
3. **Repetition.**
   - (a) The reserve-study promise is now only in the checks list ("The building's age"). Cut the line in the owning section. The fee offer box is now about fees at closing: "Know the Palace's fees before you offer / We ask the association for the unit's dues, its transfer fee and any dues held at closing, and add them up for you." Button: "Have us get a Palace unit's fees". The checks offer box: "We go through each check above for the unit you like, and we get the rental program's terms and the unit's booking history."
   - (b) The HOA section opens on what the fee pays (water and sewer, trash, internet, the building's insurance; most add pest control; same size lists nearly the same fee), then the table. The fee-by-size sentence is only in the short answer and the table. "What you pay yourself" is a plain paragraph under the table.
   - (c) The chart and its note are gone (item 4).
4. **Chart.** Removed. The sales section is now: one sentence (21 sales, about 1 in 14 units a year), a three-row plain table (middle sale price about $142,000; middle half about $112,500 to $157,000; middle asking price, 25 for sale on Nov. 13, about $160,000), then "Asking prices ran above what units sold for. Upper-floor sales ran higher, mostly because more of them were larger units." (row 15, verifier's wording) and "The deeds do not record bedrooms, so we compare a unit with sales of its own size." The floor medians are still checked with must() but no longer printed.
5. **Jargon and lending talk.** "non-warrantable" and the Fannie Mae definition are gone. The two loan items are one list item, "If you will use a loan": "Many standard loans will not cover a unit in a building run like a hotel. The Palace is not on HUD's list of condos approved for FHA loans. One published condotel loan program asks for at least 500 square feet and a separate bedroom. Every studio for sale is under that size; the one- and two-bedrooms are over it. Ask a lender before you choose a studio." (rows 27, 28, 29). It sits last in the list, right above "Our affiliated lender, BrickWood Mortgage, a separate company, can tell you which loans fit a Palace unit." The Fannie Mae source link stays (row 28).

Nits taken:
- **Arithmetic.** The yearly totals round to $100, as their parts do: studio $5,500 + $2,000 = $7,500; two-bedroom $11,000 + $3,300 = $14,300. must() checks the parts and the totals. "at today's typical asking price" is now "at the middle asking price".
- **Asking versus sales.** The typed sentence is replaced by the overall asking middle from `listings.json` asking.all (about $160,000), checked with must() and against the sales middle. New row 12a (VERIFIED-BY-FIXER): re-pulled the map API on 2026-11-13, 25 pins at 1605, median $159,999, $110,000 to $255,000; it also follows from row 12's ranges.
- **Owners' passes.** Added: "Whether owners get passes is in the association's rules, and we ask before you offer."
- **End band.** Text now matches the showing: "Tell us the size you want and the days you are here. An agent shows you the Palace units for sale in that size."
- **Photo credits.** "Chapter3 Realty resized and cropped this photo." (spec replaces the shared helper's plural line for this page; must() stops the build if the helper's wording changes).
- **Escrow.** Explained both times: "a few months of dues in escrow, an account that holds the money until it is due"; "holds the rent in escrow, a separate account, until it pays the owner".
- **Short answer.** "The middle sale price over the past year was about $142,000."
- **Key facts on phones.** A 2x2 grid under 700 px. THE SHORT ANSWER now starts at about 790 px at 390 (was about 920), inside the first phone screen. Under 360 px the icons hide so each fact reads on two lines.
- **Studio card at 320.** "sleeps 4" no longer breaks (non-breaking space).

## Gates (final build)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-13 node tools/score.js --only /invest/condo-buildings/palace-resort/` | 96/100 (SEO 92, AEO 100, Human 96, Trust 100). FAIL S8 only (no inbound links yet; the lead's sibling links in BUILD.md). P2 87%, P7 50% (chart removed). |
| `node tools/claims-scan.js <site>` | 0 findings. |
| `node tools/facts-check.js <site>` | 0 on this page (4 old hits on 3 other pages). |
| `node tools/house-claims.js <page>` | 0. |
| `node build.js check` | OK. |
| `node build.js audit` | This page: `!!` missing from sitemap.xml and `!!` orphan (both the lead's). `~` 3 explicit dates in body copy (the dated counts the owner asked for), not in llms.txt, no Tim Nash sentence (we never write one), 12 sentences over 22 words (none over 28). |
| `node tools/struck-check.js --batch batches/2026-11-d --strict` | No hit on this page. |
| `node tools/photos.js check` | All records pass. |
| `node tools/critic.mjs http://localhost:8926 ... --widths 320,390,1024,1440` | 0 blocking. 3 warnings: read.wall on the hero sub at 390 and 320 (empty strip in preview) and #owning at 320 (904 px). The #sales wall is gone (the table). |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/palace-resort/shots-r1/` (full pages at 320, 390, 1024, 1440; screens in `crops/`; `critic.json`). Looked at each screen: the short answer is on the first phone screen, the fee cards and the yearly table add up, the sales table reads at a glance, the checks list ends on the loan item right above the BrickWood line, one offer per section with different words.
