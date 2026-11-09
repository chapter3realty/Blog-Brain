# Batch 2026-11-b: the triage list, worked in the approved style

Source of the work: `reports/triage-2026-11-08.md` (one verdict per page) and `reports/cannibalization-2026-11-08.json` (which page owns which search).

## Round 1 (patch 0022)

- Redesign the look, every word kept except each page's overlap fix: the seven folders here, each with its DESIGN.md.
- Title only: /sell/capital-gains/, /invest/section-8-rentals/, /buyers/new-construction/, /invest/llc/. Golf communities left as it is: it earns clicks.
- The LLC page's opening line said every investor client holds rentals in an LLC; its own body says an LLC, a trust or a corporation. It now says most hold each rental in its own LLC.
- Places (idx-places.json): Conway's five parts; one-guide slices out of search; Tidewater and Golf and Yacht Club one page each, the duplicate slug redirects.

Open after round 1 (for the owner's eye or a later round):
- /buyers/act-388-changes/ and /invest/rental-property-tax-cut/ are bylined Devin Day and Abdulla Hijazi (mkpage allows it on the election pages). CLAUDE.md says Devin Day alone unless the owner says otherwise.
- The election hub's tax slider still answers the rental tax question itself (cannibalization fix: move it to the rental tax page).
- /invest/run-the-numbers/ FAQ "Is there a free rental property calculator for Myrtle Beach?" still overlaps /invest/long-term-rental/.

## Light fixes, round 1 (patch 0023)

About 45 pages: italic subtitles at the approved size, answers moved into the first screen, card stacks to plain lists, titles that carry the searched words, repeated figures said once, the rental analyzer's financing sentences removed, the guides list rebuilt from the sitemap, the flood deadline page bylined Devin Day alone.

Waiting on fresh, verified facts (round 2):
- /buyers/closing-costs/: re-check the July figures ($2,900 survey, 1% VA origination, $575 appraisal).
- /buyers/coastal-insurance/: why the local range differs from the national sites, from a source; a primary source for the local range.
- /buyers/relocating/moving-checklist/: Conway city utility and Georgetown County Water and Sewer deposits.
- /invest/strategies/brrrr/: a source for the 17.34% and 22.32% figures, or remove them from the title.
- /invest/str-tax-treatment/: Publication 925's $150,000 end of the phase-out.
- /buyers/flood-insurance-after-the-election/: after Dec. 11, whether Congress extended the flood program.
- /invest/landlord-rules/: after Jan. 1, 2027, the new eviction fees.
- Plus the triage rows that were fact work from the start: str-rules, carolina-forest, inherited-house, estoppel, healthcare, sell-my-condo, accommodations-tax, what-is-being-built, student-rentals, weather, cost-segregation, how-long-to-hold, from-new-york, rental-depreciation, horry-county-growth, from-ohio, beaches, j1 (bed count).

Owner's call:
- Election pages show Devin Day as "Chief Operating Officer" (mkpage, devin+abdulla); every other page says "Operations Officer".
- The election hub keeps its own tax slider; /invest/rental-property-tax-cut/ has its own calculator.

## Fact fixes (patch 0024)

23 pages, each through research, an independent verifier and a fixer who used only verified rows. Each folder holds facts.md, VERIFY.md, FIX.md and APPLIED.md. A fact that did not verify made the page say less.

Lead's follow-ups:
- /buyers/relocating/healthcare/ said nothing about whether McLeod Carolina Forest's new building is open, because mcleodhealth.org refused that researcher. The verifier for /invest/what-is-being-built/ opened McLeod's own release of October 30, 2026 ("now open to patients"); healthcare now says the same.
- Patch 0024 carries three CSV data files with Windows line endings; it was exported with them as binary so git am applies it as is.

Still open: Conway's accommodations tax (12% on str-rules, 11.5% in the ledger; not re-checked); the $330 plus $2.10 title-insurance formula behind the closing-costs calculator (needs the filed SC rate manual); flood program after Dec. 11; eviction fees after Jan. 1.
- Cost segregation, January 19, 2025 (lead, 2026-11-09): IRS Notice 2026-11 (interim guidance, January 2026) applies 100% bonus depreciation to property acquired and placed in service after January 19, 2025, as the page says (BDO, RSM, Grant Thornton and Thomson Reuters summaries of the notice agree). Closed.

## Rebuild batch 1 and referring pages (patch 0025)

- /sell/net-proceeds/ and /hoa/ rebuilt through the full line (folders sell-net-proceeds, hoa). /hoa/hoa-vs-poa/ now reads its fee figures from the hub's data, drops its fees FAQ and links the hub.
- Owner, 2026-11-09: "make sure every page has referring pages". tools/inbound.js counts referring pages from links inside <main>. 47 pages were under 6; all 143 are now at 6 or more.
- Net proceeds offers "We ask the attorney's office for its charges and fill in every other line, free." The owner should confirm the team does this.
- Next rebuilds, in order of times shown in Google: /invest/strategies/1031-exchange/, /invest/condo-buildings/, /sell/, /invest/condotel-financing/, /hoa/rental-restrictions/, /invest/airbnb-income/.

## Rebuild batches 2 and 3 (patch 0026)

- /invest/strategies/1031-exchange/, /invest/condo-buildings/, /sell/, /invest/airbnb-income/ rebuilt through the full line; the fixers' new rows were checked by a second verifier (FIXER-VERIFY.md) and seven sentences corrected.
- 31 new one-guide places (29 condo buildings, 2 for the 1031 page); feeds marked withStrips for 1031, condo buildings and Airbnb income.
- /invest/str-tools/ gives up "how much does an Airbnb make" to /invest/airbnb-income/ (title, first H2, town H2, FAQ, keywords). Its H1, which the owner knows the page by, is kept.
- /submarkets/myrtle-beach/ passes building figures to /invest/condo-buildings/ and drops three keywords siblings own.
- Open: /invest/rental-returns/ uses its own 55 percent cost method for nightly rentals (triage: one method); the July market report is stale (June data) and is on the rebuild list.
- Preview note: restart tools/preview.mjs after idx-lib changes; it loads places.js once.
