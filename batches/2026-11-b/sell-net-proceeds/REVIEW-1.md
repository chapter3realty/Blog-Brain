# Review 1, fix round: /sell/net-proceeds/ (batch 2026-11-b)

Fixer, 2026-11-09. The reviewer gave pass=false, 7.5. Every blocking item is fixed in `specs/net-proceeds.js` (website working copy `scratchpad/wt-live`). Most nits are taken. The ones I declined or changed are explained below. Before-fix copies: `scratchpad/np-spec-before-r1.js` and `scratchpad/np-photos-before-r1.json`.

## Declined or done another way, and why

- **"Swap in 'How is the money sent at closing?' (row 40)."** Row 40 is wire safety, and the page already says it in the payoff section under "Closing day: guard the wire". A FAQ with the same answer would be the same repeat the reviewer flagged. The other half of the question, when sellers are paid, waits on owner question Q5. I cut the three duplicates and added no question. The FAQ now has four entries: net sheet, title insurance, the attorney, and selling before the mortgage is paid off. The wire step stays in the body, where a seller sees it without opening an accordion.
- **"Cut the duplicate H3 or FAQ" (payoff).** I cut the H3 and its paragraph and kept the FAQ. People search the question, and the FAQ is now the only place that asks it.
- **The courthouse photo.** Removed. A page with no photo fails the critic (`photos.blog-no-photo`), so I put in the NOAA public-domain aerial of Carolina Forest houses. It is already licensed, checked at full size and live on /buyers/cost-to-own/. It shows the thing being sold: houses outside city limits, which is what the tax figures assume. Its caption says only what it shows. It sits in the deed stamp section, beside the house prices in the table. The photo partner's shot list can still replace it. The three courthouse files were moved out of the image folder to `scratchpad/np-removed-r1/`.
- **The end offer.** `bottomCta` is required by `glass.js`. A link to the homes map fails `build.js audit` ("a button must convert"). The end card is now a different offer: "Selling a second home or a rental?", which goes to the capital gains and withholding calculator. That page is on the audit's tool list. Only one net sheet offer is left at the end, the form.
- **The homes feed.** I did not check the live feed. I reworded the sentence so it is true under CUT_MID and under the COMPETITION fallback: "The homes for sale near the top of this page are the kind a seller near the middle competes with."
- **/buyers/closing-costs/ H2.** Not this page's files, so not done here. The lead still owes that fix (reports/cannibalization-2026-11-08.json).
- **Byline date.** `build.js dates` sets it at ship, as told.
- **Not a gate here.** `image-meta.js` S13 still fails: the photo is 1200 x 900, so a 1x1 crop 1,200 px wide would be upscaled. The same is true on /buyers/cost-to-own/.

## Changes, fix round 1

Blocking:
1. **320 px net sheet.** Below 380 px, the "You keep" total may wrap after "about" (1.3rem), and the amounts use body size, so the amount column fits. Critic at 320 px: 0 blocking, 0 warnings, and the page no longer scrolls sideways. I read the 320 shot: every amount and the "Amount" header are whole.
2. **30-word hold-back sentence.** Split: "For a 2026 sale it is 5.21 percent of your gain if you sign the state's gain affidavit. Without the affidavit, it is 5.21 percent of the price less your selling costs."
3. **30-word exclusion sentence.** Split: "You owned and lived in the home at least 2 of the last 5 years. You also did not use the exclusion on another home in the 2 years before."
4. **Attorney H2.** Now "What does the closing attorney charge the seller for?" The section opens with who the attorney is (supervises, the buyer chooses, does not advise you, you may refuse to sign), then the three charges. Then: "These charges differ from one attorney's office to the next, so this page prints no figure for them." The offer under it is "Want the attorney's charges on your net sheet?" with "We ask the attorney's office for its charges and fill in every other line, free." The net sheet row's note now says "It differs from one attorney's office to the next". New ledger row 41 (VERIFIED-BY-FIXER: EAO 11-06's "reasonable" fee and row 14's search) supports the sentence. No figure is printed; row 14 stays struck. The order also ends the 958 px block with no heading or list that the critic warned about at 320 px.
5. **Repetition.** I cut the payoff H3 "Can I sell my house before the mortgage is paid off?" (the FAQ keeps it), the FAQ "Is the commission always 6 percent?" (its answer repeated the commission line word for word), and the FAQ "How much are deed stamps in SC?" (it repeated the deed stamp section and $1,295).

Nits taken:
6. **Condo totals.** "All but one of 2,686 condos for sale list one" is now "Almost every condo for sale lists one." It is true of row 22's pull (1 of 2,686) and of the verifier's November 9 re-pull (0 of 2,694). The house share, "more than 1 in 4", holds in the November 9 pull too (790 of 2,929, 27.0 percent), so the sources line ("our count of the listing feed on November 9, 2026") is now true of every listing figure on the page.
7. **"Fees in state law" everywhere.** The hero tile ("$1,320 of fees in state law on a $350,000 sale with a mortgage"), the tier table header and phone label ("Fees in state law"), and the meta description.
8. **Phone tier label.** "Per 1%" is now "Each 1% of commission".
9. **Warranty sentence.** "Only 62 of 2,188 resale houses and townhouses for sale advertise one. Nearly all the home warranties offered here come with new homes." (Row 31: 894 of 956. The spec throws if the share falls to 90 percent or below.)
10. **One form for shares.** "about 63 percent under $300,000, and about 56 percent in each higher band" (row 30: 62.5 and 56; read from findings.json).
11. **End offers.** See above: the second net sheet card is gone, and the end card is the capital gains calculator.
12. **Tax H2.** "Do you pay tax on the money from selling your house?" is now "Is the money you keep from the sale taxed?", which leaves the capital-gains search to /sell/capital-gains/.
13. **"Estoppel letter."** The who-pays item is now "The association's letter of what is owed".
14. **Meta description** cut to 158 characters ("who pays what, a calculator"). The critic had warned at 162.

## Gates after the fix (rebuilt with `node tools/mkpage.js specs/net-proceeds.js`, preview `tools/preview.mjs` on port 8871)

| Gate | Result |
|---|---|
| `SCORE_TODAY=2026-11-09 node tools/score.js --only /sell/net-proceeds/` | 100/100 (SEO 100, AEO 100, Human 100, Trust 100). P6 is clean now. |
| `node tools/claims-scan.js` | 0 findings |
| `node tools/facts-check.js` | No hit on this page. The 4 sitewide hits are on other pages and llms-full.txt, as before. |
| `node tools/house-claims.js` | 0 |
| `node tools/struck-check.js` (sell-net-proceeds-struck.json) | No struck wording |
| `node tools/repeat-check.js --strict` | Passes |
| `node tools/critic.mjs --widths 320,390,1024,1440` | 0 blocking, 0 warnings at all four widths |
| `node build.js check` | OK |
| `node build.js audit` | Only the two date lines (`build.js dates` not run, as told) and the note on quotes from a named licensed person (no quote may be written for Tim Nash) |
| Sentence check (main text) | No sentence over 28 words. No em dash, no "So" opener, no "Here is", no "state fees", no "estoppel". |

Shots: `scratchpad/rb1/sell-net-proceeds/fix1-shots/` (320, 390, 1024, 1440), with slices in `fix1-view/`. Critic JSON: `scratchpad/rb1/sell-net-proceeds/critic-fix1.json`. I read the 320 net sheet, the 390 page from top to footer, and the 1440 net sheet, calculator, who pays, attorney and deed stamp sections. Each was calm and whole.
