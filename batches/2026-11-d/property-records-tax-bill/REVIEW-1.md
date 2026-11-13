# Review 1 fixes: /buyers/property-records/tax-bill/

Reviewer: pass=false, score 8. Spec: `wt-139/specs/property-records-tax-bill.js`. Every change is in the spec; the page was rebuilt with `node tools/mkpage.js`.

## Findings declined or changed

- **Chart caption, the reviewer's wording.** The suggested caption, "Each bid includes this year's tax, the penalties and the costs," says again what the sentence just above the chart says ("The opening bid at the sale is all the unpaid tax, penalties and costs, plus this year's tax"). The caption is now "Our count of the opening bids on the county's list, by range. The three shaded ranges, under $2,500, hold 843 properties." The date and the 1,772 stay in the paragraph only.
- **Photo credits.** The generic plural line is gone. One short line stays in its place, "The cropped photo keeps the same license." The photo is CC BY-SA 3.0, and this is its share-alike notice. The photo's own line already says it was cropped and resized.
- **The breadcrumb.** /buyers/property-records/ does not exist in wt-139 yet. The breadcrumb now reads "Buyers" (to /buyers/) until the hub exists. A rebuild after the hub ships restores "Property records". The siblings (gis-map, deeds) still link the hub directly; that is for their own fix rounds.
- **Sibling search (/buyers/property-taxes/ H2).** This is not my page. It stays a lead item in BUILD.md, and it must ship with this page.
- **The fee in the H1 line.** "Pay by e-check for free" stays. It is the page's hook and the title's promise ("E-Check Free"). The reviewer named step 3 as the cut; step 3 no longer gives the fee.

## What changed (round 1)

Blocking:
1. **Answer first.** In the short answer, "Tax Payments and Receipts site" now links to horrycountytreasurer.qpaybill.com and opens in a new tab. At 390 the link sits at y=702, in the first phone screen and above the edge homes feed. Before, the only link was the navy button at y=1130.
2. **Appeal scope (VERIFY 31).** The January 15 line is now tied to a year with no notice: "In a year with no notice, you may appeal in writing at any time. In that year, one filed by January 15 counts for that year's bill, and a later one counts for the next year." The $1,000 notice sentence moved up to sit with the 90 days.
3. **Chart.** The title is "Nearly half the properties on the tax sale list have an opening bid under $2,500" (843 of 1,772, F24). The three ranges under $2,500 keep the brass bars; the other four are slate reference bars. The spec checks that 843 is 45% to 50% of the list before it builds.
4. **Say a fact once.** The chart caption no longer repeats the date and the 1,772 (see above).

Nits taken:
5. **The fee.** Step 3 now reads "Pay by e-check or card. The county mails a receipt, and you can print a copy from the same site." `repeat-check` "card costs" is down to 2.
6. **FAQ.** Five answers cut to the new part. Phone: the fee table above and the Treasurer's line. Receipt: how to print it, and that a printed copy will not do for a car's first registration (F10). Never got a bill: the 3% starts January 16 either way, and the one exception. Waiver: the two cases, and the Treasurer's answer is final (F16, new). Myrtle Beach office: the address only.
7. **Buttons at 320.** The county button now reads "Pay on the county's tax site", with tighter padding under 360 px. Every button measured one line at 320, 390 and 1440 (county button 52 px tall at each width; the brass buttons fit on one line).
8. **Read wall at 320.** New H3 "The 4% rate on a home you live in" before the legal residence paragraph.
9. **Tax Assessor.** The Assessor card adds "In Conway and at the Central Coast Complex" (shortened from the reviewer's wording so the card does not tower over the other two) and a link to the county's Assessor page (new tab). New row F51, VERIFIED-BY-FIXER (Assessor page: "Location 1301 Second Avenue Conway"; row 30 release lists the Assessor Office at the Central Coast Complex).
10. **Cold words.** Levy notice: "A notice is posted on the property: seized, to be sold for the tax" (F52, SC 12-51-40(c)). Redeem: "The last day the owner can pay the tax and costs and get the property back" (F52, the Treasurer's Delinquent Tax page). Escrow: "If your monthly mortgage payment includes the tax, held in an escrow account, the mortgage company may pay the county before January 15" (F53, CFPB). Enrolled agent: "An enrolled agent is a tax professional the IRS approves to represent taxpayers" (F54, IRS). Rows 51 to 54 are in facts.md; their sources are saved in `data/2026-11-d/property-records-tax-bill/raw/`.
11. **Office cards at 1440.** Each card is a column, and its phone line is pinned to the bottom. All three phone numbers now sit at the same height (y=7738 at 1440).
12. The spec's header comment now names the one photo.

## Gates after the fixes (final build)

| Gate | Result |
|---|---|
| `score.js --only` (SCORE_TODAY=2026-11-13) | 99/100 (SEO 100, AEO 100, Human 99, Trust 100). No FAIL. P6 at 75%: "legal residence" once, defined in its sentence. |
| `claims-scan.js` | 0 findings |
| `facts-check.js` | 0 on this page (the 4 site-wide hits are older pages) |
| `house-claims.js` | 0 sentences |
| `struck-check.js --strict` | no struck wording on this page (15 patterns) |
| `repeat-check.js --strict` | passes |
| `build.js check` | OK |
| `build.js audit` | "missing from sitemap.xml" (lead item). Notes only: not in llms.txt, no Tim Nash sentence (none may be written), 6 sentences over 22 words, none over 28. The orphan FAIL is gone. |
| `critic.mjs` at 320, 390, 1440 | 0 blocking, 0 warnings (the read.wall warning at 320 is gone) |

Shots: `/tmp/claude-0/-home-user-Blog-Brain/6dac3d75-8af3-5045-bdd7-7ad0adf5395f/scratchpad/nd/property-records-tax-bill/shots-r1/`. Critic JSON: `.../nd/property-records-tax-bill/critic-r1.json`.

Looked at full size: the first phone screen at 390 (the county link is on it), the chart at 390 (three brass bars, four slate, one plain title), the appeal section at 390, and the office cards at 1440 (phone lines level). Extra cuts: `shots-r1/r1-390-first-screen.png`, `r1-390-chart.png`, `r1-390-appeal.png`, `r1-1440-offices.png`.
