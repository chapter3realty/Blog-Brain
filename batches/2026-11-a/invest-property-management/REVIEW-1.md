# Review round 1: /invest/property-management/

Batch 2026-11-a, Lane U. Three reviewers (critic 8, reader 7, owner 8; all FAIL). Every change below is in `specs/property-management.js`, rebuilt with `node tools/mkpage.js`. The spec before this round is saved at `scratchpad/wf2/invest-property-management/spec-before-fix1.js`.

New facts this round are fee-page lines only: facts.md rows 36 to 41, marked VERIFIED-BY-FIXER, each re-read live on 2026-11-04 (PURE from the saved copy; its live fetch returned a bot page). The lead re-checks them.

## No finding disputed

I took every blocking item and every nit that was plainly right. Two nits are left as they were, with reasons, at the end.

## What changed, finding by finding

### Critic

1. **Worked example top figure ($3,400 vs $1,920 + $1,600).** The new-tenant row now says how it is built: "Add half a month's rent to place the tenant. Or a full month's rent, at the firm that then starts its 10 percent in the second month." $1,600 + 11 x $160 = $3,360, about $3,400 (row 11, Firm A's "starting 2nd month", row 2). The 1-in-4 average is unchanged.
2. **Full service read as 40 to 60 percent of bookings.** The short answer now says "Full service takes about 40 to 60 percent of the profit after costs, not of the bookings." The table cell reads "About 40 to 60% of profit after costs". A body line says its dollar cost depends on the home's costs. No full-service dollar figure is given (row 8). NEEDS.md item 5 flags /invest/str-vs-ltr/; /invest/condos/ already names the base.
3. **"Three times the deposit".** Now "Three times what was wrongly kept".
4. **Generic "what the fee buys" section.** Replaced by "What do property managers charge besides the monthly fee?" Six cards from the five fee pages: setup fee (Firm B $200, Firm A none), a month with no rent (Firm D only on collected rent; the other four do not say), inspections (Firm B), repairs (Firm B pays up front and deducts; own repair person allowed; none of the five prints a markup), evictions (row 32 plus Firm E's no-fee line), a tenant who leaves early (Firm D re-leases free). The two task lists are cut to two sentences. The money drawing stays.
5. **Price range broken over two lines.** The value cell is `white-space:nowrap; flex:none`. Checked at 1024 and 1440.
6. **Lone word in offer headings; "3-" / "bedroom".** Offer headings, the closing heading and card titles use `text-wrap: balance`. "3-bedroom" is wrapped in a no-break span everywhere it shows. Checked at 320 and 390.

Critic nits:
- "Myrtle Beach area property managers" now reads "property managers serving Horry County", the same words as the H2 section.
- The repeated tax sentence is merged into one, plus "That is the manager or the booking site, or you when you book the guest yourself."
- FAQ repeats: the HOA line is out of the body; every FAQ answer is now a question the body does not answer (licence, unlicensed staff, owner notice, tax deduction, HOA).
- "their share" now "their percentage of the rent". The chart note no longer gives the reader an order. The decision table reasons are full sentences ("About 8 in 10 oceanfront condos for sale list a vacation rental program"). "a plan" is now "the basic plan".
- Tax H2 is now "Who pays the taxes on a vacation rental in Myrtle Beach?". The tax is named: "the state's 7 percent accommodations tax".
- Photo credits: the closing "Chapter3 Realty resized these photos..." line is removed from this page's output (the shared helper is unchanged).
- Numbers density is 3.4 per 100 words (was 3.7).

### Reader

1. **Worked example does not add up.** Fixed as critic 1.
2. **Vacation rental figures disagree; what full service keeps.** The base is named (critic 2). The printed 10 to 25 percent stays, with "We plan with the ranges above, which come from rentals we have seen run." Basic plan: "repairs and tax help cost extra" (str-market.json `basicIncludes`, row 8). The table caption says "in the rentals we have seen". The $25,800 sentence now says "of any type or size", and the dollars are worked from the 13 and 17 percent the reader sees: about $3,400 and $4,400.
3. **Firm C in Summerville; Firm D says nothing.** The text above the table says three firms have an Horry County office, Firm C serves Myrtle Beach from its Charleston office in Summerville (row 41), and Firm D is the Myrtle Beach rentals site of a national brokerage's local franchise. Each label now gives office and plan type. Names stay off the page (story no-vendor-names).
4. **Tax-bill chart: "6 percent rate", too many numbers, Pawleys Island.** The note now reads: homes not taxed as anyone's main home; "Inside the area" means Horry County's post-office ZIP codes and Pawleys Island's. The 6 percent rate, 102,511, 261, 10,827, 64 and 98.5 percent are off the page; the method is one clause in the sources line. The section now opens on why it matters: a manager is the person near the home.
5. **"About 8 in 10 for sale list one".** Fixed (critic nit). The decision block is now cards with full sentences, because a compare-table cell holds 40 letters.

Reader nits: the "12% a year" tile is gone; the retail licence double negative is rewritten ("The exception is a home rented one week or less in each calendar quarter."); the tax is named; empty-month and repair-markup questions are answered in the new section.

### Owner

1. **Same fact said too many times.** The tiles now carry three findings from lower on the page (about 9 percent on a "7 percent" plan, about 6 in 10 tax bills out of the area, 30 days' notice). The short answer keeps the dollar figure and the vacation rental figures; "about 12 percent" is said once, in the worked example. The two H2 openings no longer restate 10 percent. The hero summary line is hidden, as on /invest/strategies/fix-and-flip/.
2. **Licence said four times; trust account three times; HOA twice.** Licence: once in the decision cards (own home) and once in the FAQ (someone else's). Trust account: the drawing only. HOA: FAQ only. Each FAQ answers a question the body does not.
3. **Tax section repeats itself.** Merged (critic nit).
4. **Personification.** "what a rental keeps with the manager's real fee in" is now "what you keep after the manager's fee". "whether the house still pays" is now "whether the rent still covers the costs". The tile "with the extra fees in" is gone.
5. **Too many numbers in the need section.** Kept one finding (about 6 in 10), the chart and the state names. Cut the condo and house split (78, 57), 63 beside 64, and the method talk.
6. **Chart point not seen in a second.** Chart title: "For most rentals and second homes here, the tax bill goes outside the area."
7. **Decision row not proper English.** Rewritten as full sentences in cards.
8. **Legal section full of office-running rules.** Four cards an owner acts on: a way out after the first term (30 days), renewal pay on page one, the deposit list within 30 days, three times what was wrongly kept. "No tie to a sale" is one sentence. Supervisor, unlicensed staff and owner notice are cut from the body; two of them are FAQ answers.
9. **Mid-roll offer after taxes did not match.** The condo program offer moved to the vacation rental section. The tax section's offer is now about the taxes: "Want to know who collects each tax on your rental? ... We go through who collects and pays each tax with you."
10. **Anonymous firms confuse.** Fixed as reader 3.
11. **Extra charges left out.** The new "charges besides the monthly fee" section, with the "Send us the agreement" offer right after it.
12. **Banned phrases.** "Ready to hand over the keys?" is now "Looking for a manager here?". "Usually yes, if you live more than a drive away." is cut; the section opens "A manager is the person near the home who shows it, lets in repair people and answers the tenant." "Pick a manager with the numbers in front of you." is now "Want the numbers for a rental you are looking at?".

Owner nits: worked-year sums fixed (critic 1; $4,500 now $4,400); the stacked hero summary line is hidden; the county fee line now reads "When a manager arranges the stay, the county's page says the manager should collect and pay it." (no task handed to the reader, and no claim that we check it, because row 34 does not cover that).

## Left as it was

- **Towers photo (owner nit).** Kept until the photo partner's lockbox and management shots arrive (shot-list.md). No licensed photo of a managed rental is in the repo.
- **Closing offer box centred at 1440 while the text column starts left (critic nit).** It is the site's closing band, styled the same as /invest/rent-prices/ (NEEDS.md item 4). A change belongs in glass.js.
- **Homes strip empty in the preview.** The preview fixtures, not this page (NEEDS.md item 6).
- **A20 audit warning (no attributed sentence from a licensed person).** No owner quote exists for this page, and none may be written.

## Gates after the fixes

- `node tools/mkpage.js specs/property-management.js`: built.
- `score.js --only /invest/property-management/` (SCORE_TODAY=2026-11-04): 100/100. P2 3.4 per 100 words.
- `claims-scan.js`: 0 findings. `house-claims.js`: 0. `facts-check.js`: 0 hits on this page. The struck list (11 patterns) fires on nothing in `<main>`.
- `build.js check`: OK. `build.js audit`: no FAIL for this page; warnings: A20, and 11 sentences over 22 words (none over 28).
- `critic.mjs` on port 8782 at 320, 390, 1024, 1440: 0 blocking. One warning: read.wall at 320 on the short answer (two paragraphs, as before). Shots in `scratchpad/wf2/invest-property-management/shots2/`; I looked at each width in parts.
