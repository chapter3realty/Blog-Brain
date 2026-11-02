# Review round 1: /invest/run-the-numbers/

Fixer, 2026-11-02. The changes are in the spec only (`specs/run-the-numbers.js`). The page was rebuilt with mkpage. New data file: `data/2026-11-a/invest-run-the-numbers/insurance.json`, with the source pages in `raw/clovered-*.txt`. New ledger rows 30 to 33 are marked VERIFIED-BY-FIXER, so the lead can re-check them.

## What changed, finding by finding

### Critic (blocking)
- **Closing band text was invisible.** The page now has no top offer band (`heroCta: false`), so glass.js no longer adds its compact rules. The page CSS also forces the dark panel on its navy band as a guard. Checked at all five widths: the band background is the dark gradient and the h2 is ivory (shot r1/band-390.png). NEEDS 5 asks for the glass.js selector fix, because fix-and-flip has the same bug.
- **AI search box overflowed at 320 px.** Fixed with page CSS inside `main#main`: the badge and the input row may wrap, and the textarea has a min width. The page is now 320 px wide at 320. NEEDS 6 asks for the shared fix.
- **Header at 1024 px (1029 px wide).** Not fixed. It is the site header, outside `<main>`, so the spec cannot fix it. It is recorded in NEEDS 7. This is the only blocking item critic.mjs still reports.
- **The page promised an insurance quote in every sheet.** All three places now use the approved line: "We can get you an insurance quote for the house before you make an offer." The sheet contents now list only the rent, the tax, the dues and the rules.

### Reader (blocking)
- **"6 percent" read as a yearly rate.** Every place now leads with dollars: about $1,206 a year for each $100,000 of value outside city limits, and $1,528 in the City of Myrtle Beach. The hero tile and the short answer say "about $1,200". The tax section adds: "That 6 percent is the share of the value that is taxed, not the yearly rate." The sheet's tax line reads "About $1,206 for each $100,000 of the price".
- **The cap rate question was not answered.** The heading is now "What cap rate, cash-on-cash return and coverage should you aim for here?" The section states our targets (cap rate 6 percent, coverage 1.25, prices rising 3 percent a year; row 32) and says none of the three sample homes reaches 6. The calculator has a Cap rate card with "Under/At or above our 6% target".
- **Why would anyone buy here?** The ratios section and an FAQ now answer it from story tenant-occupied-sale-13-days: our agents keep a list of investors who buy for a modest cash flow in an area where prices are rising. They link to the rental returns page for price change by area.
- **Insurance was left blank everywhere.** The page now uses one agency's published estimates (rows 30, 31): about $2,200 a year on a $200,000 Myrtle Beach house and $3,300 on a $350,000 house, and a condo unit policy of about $500 on average, up to about $970. The calculator starts with these filled in. The sheet, the bars and the short answer are after insurance: cap rates 3.1, 4.2 and 1.0 percent. The page calls them estimates, never quotes. Flood is said to be a separate policy. NAIC (403) and SC DOI (connection reset) were tried again and were still unreachable.
- **The coverage figures contradicted each other, and DSCR was not explained.** The coverage card and the "?" now say: a DSCR loan is judged on this ratio; a loan officer at our preferred lender starts writing DSCR loans at 0.75, so a home under 1.25 can still get one; 1.25 is our target, a rent a quarter more than those monthly costs.

### Owner (blocking)
- **"Send the address" (CTA-1).** It is gone from every label. The hero line is now "Run the numbers here, or have us run them." The tax box and the end box say "Have us run the numbers on a home", and the form button says "Have us run the numbers". The top offer band was removed.
- **The landlord-vs-homeowner percentage line.** It is removed from the cost table and from the sources (III). It is replaced with dollar figures, and the calculator is pre-filled, so the cap rate shows when the page loads.
- **Deflections.** The cap rate and the targets are answered on the page. "What managers charge here is on our property management page" is cut. "It is yours to work out with your lender's payment" is replaced: "If you pay cash, it is the same as the cap rate. A loan raises it or lowers it, and the calculator shows which once you type the payment."
- **Tax meaning (PLAIN-3).** See reader item 1. The page leads with about $1,200 per $100,000, about 3 times what an owner who lives there pays.
- **Too many numbers and dates.** Numbers per 100 words went from 5.1 to 4.1 (score.js P2, 52% to 82%). Cut: the 8,310 deeds, 4,223 of 8,310, the middle half 3.4 to 4.8, 2,828 and 1,777 in the chart note, 1,785 / 214 / 31 to 46 in the body (now "about 1 in 8" and "fewer than 3 in 100"), 429 and 189, the 40th percentile sentence, "largest line everywhere but Loris", $655, and the three-home cap rates in prose. The date is said once in the body (the chart caption), plus the deadlines. The rest are left because the page is a calculator: each remaining number is a result the reader came for.
- **Calculator results were blank, and each had a meaning line.** On load, all five results show: Cap rate 3.1%, 1% rule price $223,000, Costs 54%, Coverage "No loan", Cash-on-cash 3.1% "If you pay cash". Each meaning sits behind a "?" beside the result name (hover, tap or tab), as the owner asked on 2026-10-27. Under each number is only a short verdict such as "Under our 6% target".
- **The tool was three screens down.** The calculator now comes right after the short answer. The homes strip sits under it (the feed's `low` placement lands before the third section). The "On this page" box is dropped (`toc: false`). The calculator starts at about 1,690 px on a 390 px phone, down from about three screens. The desktop layout is the site's single column; the calculator's two columns fill the width.

### Nits taken
- Short answer opens with the verdict: "Usually not, for cash flow." Then the 3 to 4 percent for houses, 1 percent for condos, and the 6 percent target. score.js A3 passes.
- Dek says "year-round" and "condo dues from homes for sale" (not "real"). Hero sub has a place (Horry County).
- Choosing a ZIP code now sets the town rate (Myrtle Beach and its north end: city; North Myrtle Beach, Surfside Beach, Murrells Inlet and Garden City, Conway, Loris: their own; everything else: outside city limits). A hint says a ZIP code can cross city limits, so pick the home's own town. Checked: picking 29572 sets the City of Myrtle Beach rate.
- HUD rent note now says "with utilities. Type your own rent if you know it" and "If your tenant will pay the utilities, type the rent you expect instead." No figure for the utility gap, because none is in the ledger (see "Not changed").
- The 1% chart includes Aynor, so it shows all 14 passing houses. The spec throws if a passing house is left out. Its note explains the 8 percent bar in one line: "The 1 percent rule asks for 12 percent a year, so the bar uses a lower test, 8 percent, to show where the rent comes closest."
- Tax chart caption rewritten plainly. The tax bars are now small labelled SVGs (role="img"), so score.js H4 counts a chart.
- "Buy one of those" is now "Buy a home taxed at 4 percent and rent it out, outside city limits".
- The 25 percent exemption uses the approved wording ("applies only when the home was taxed at 6 percent before the sale and stays at 6 percent after it"). The figures above it are said to leave it out.
- Hero tile "$600 to $700 the middle condo's dues" is replaced with "23 to 48% of a 2-bedroom condo's rent goes to dues", which matches the chart. The body no longer gives a "middle condo" figure for all sizes, so the 2,828 count no longer appears twice.
- Personification cut: "the dues take back much of the rent", "Condos pass on price, then the dues take it back", "A lower bar shows". The build audit's "rule expects", "rule of thumb", "Here is why" and "So" openers are cut too.
- Ratio cards no longer repeat the 1% count or the 42/39/80 percent.
- "Many communities ban renting" is now "Some communities here ban renting the house at all" (story hoa-rental-bans-filtered).
- Dues chart labels shortened ("$550 of $1,420") so they do not leave one word alone on a line at 390 px. Sheet amounts drop "about" (the note under each line carries it), and there is a smaller font under 360 px.
- Form footer: "Prefer to talk now?" no longer breaks, and the stray period after the call button is gone.
- Condo FAQ: the bare range is explained elsewhere. The body now uses "fewer than 3 in 100", and the FAQ uses the share of rent.
- New FAQ: "How much is landlord insurance on a Myrtle Beach rental?"

### Photo
- The owner's nit says to cut the aerial. When it was cut, critic.mjs blocked: "photos.blog-no-photo". The aerial is back, smaller (620 px), in the 1 percent rule section. Its caption now says something about the numbers: "3 of the 14 houses for sale that pass the 1 percent rule are in this ZIP code." The place is in 29579, and the critic checked it on parcel layer 24. The photo partner's shot list (shot-list.md) is the real fix.

## Not changed, and why
- **Header overflow at 1024 px.** It is outside `<main>`; see NEEDS 7.
- **How much lower the rent is when the tenant pays utilities.** HUD's utility allowance by unit size is not in the ledger and was not researched in this round. Adding a figure would need a verified row. Proposed for the lead: HUD's utility allowance schedule for the Myrtle Beach housing authority.
- **Mid-term rental in the form.** It is kept as a plan option. The page does not cover it, and the form only records the plan.
- **Dates.** The visible "Updated September 6, 2026" and the schema date wait for the lead's `node build.js dates` (NEEDS 9).
- **The cash-on-cash target.** None is on record from the owner, so the page states none.

## Gates after the fix
- score.js: 100/100 (P2 82%, 4.1 numbers per 100 words).
- claims-scan: 0 hits on this page. facts-check: 0 on this page. house-claims: 0. struck-check: no struck wording. photos.js check: all records pass.
- critic.mjs, widths 320, 390, 768, 1024 and 1440: 1 blocking (overlap.page-scroll at 1024, the site header, NEEDS 7). The rest are warnings: the hero tile line height, and read.wall on the sheet card, the tax callout and the form, which are the same tool misses reported in NEEDS 2.
- build.js check: OK. build.js audit, this page: only the two date lines and two soft notes ("no attributed sentence from a named licensed person", "17 sentences over 22 words").
- The calculator was driven in the browser through all three examples, a ZIP change, a typed payment and cash, and a cleared insurance box. Every figure matches row 33.
