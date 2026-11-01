# Review round 1: /buyers/new-construction/

Batch 2026-10-d, Lane U. Fixer, 2026-11-01. Three reviewers (critic 5, reader 7, owner's eye 7) failed the page. Every change is in the spec (`specs/new-construction.js`), the page's data folder, its image folder and this folder. The built page was not edited by hand.

New facts are ledger rows 33 to 37 in `facts.md`, each marked VERIFIED-BY-FIXER for the lead to re-check:
- 33: the ten communities where builders sold the most, from the verified builder deeds (row 9) and county GIS layers 17, 22, 24 and 31 (`build_communities.py`, `findings-communities.json`).
- 34: the HOA fee on new houses for sale, from CRM filter totals counted in aggregate (`pull_hoa.sh`, `raw/listings-hoa-totals.txt`).
- 35: SC Code 38-73-1095(C), the coastal wind rating factors.
- 36: where and when to apply for 4 percent, taken from the first-time buyer ledger's verified row 32.
- 37: inside a city the bill is higher (the 2026 levy's city mills).

## Gates after the fixes

- score.js: 100/100. P2 is 3.3 numbers per 100 words (it was 4.3).
- claims-scan: 0 findings.
- facts-check: 0 lines on this page.
- house-claims: 0.
- struck-check: no struck wording.
- photos.js check: all records pass.
- build.js check: OK.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking and 0 warning. The page is exactly the window width at all four widths I measured, 320, 390, 1024 and 1440.
- build.js audit: three items left, none of them mine to fix. The two date mismatches go away when the lead runs `build.js dates`. A20 asks for a quote from Tim, which I may not write.
- I looked at the shots myself: the first screen at 390 and 1440, the map at 390 and 1440, the community cards at 320 and 390, the tax table at 320, the TOC and warranty chart at 1440, the header at 1024 and the full page at 390.

## Critic

### Blocking

- **The search box overflowed at 320 px.** Added a scoped rule to the spec's CSS. The row can now shrink, and below 400 px the field wraps and the button sits under it. At 320 the page measures 320 wide. NEEDS.md item 5 asks for the shared fix.
- **The header overflowed at 1024 px.** Added a scoped rule between 900 and 1100 px that makes the gap, the phone number and the button padding smaller. The shot shows the header fits, and the page measures 1024 wide. NEEDS.md item 6 asks for the shared fix.
- **O6, "we look up the builder's license".** Cut from both places. The license law now sits in an FAQ answer with no service claim.
- **O3, "we line them up".** Put back to the owner-approved live wording, "Any lender can run that comparison for you, including our preferred lender." The FAQ line "We compare full Loan Estimates with you" is cut.
- **H1.** Changed to the PLAN.md alternative: "New construction in Myrtle Beach: what the price on the sign leaves out." The ogTitle and the schema headline changed to match.
  - The title tag the owner liked is kept, because the tax finding backs "What Builders Won't Say".
  - headlines.json is shared, so the lead edits it (NEEDS.md item 9).
  - For the owner: the old H1 promised a defect problem. No source shows one here, and the unsourced lawsuit lines were struck. The new H1 is the page's real finding.

### Nits

- **First phone screen.** The hero tiles no longer lead with a price. They now say "1 in 3" houses for sale is new, "About even" per square foot with nearly new, and "4 in 5" sold this year are still taxed as lots. The listing strip is placed by the site and was not moved.
- **Tiles at 320.** The text is shorter, and under 360 px it is set a little smaller. One tile still runs four short lines at 320.
- **Tax table at 320.** The row label is now "Second home, rental", and the first column has 44 percent of the width. The 4 percent condition moved into the sentence above the table.
- **TOC at 1440.** Now two columns at 900 px and up (NEEDS.md item 7).
- **Right edges at 1440.** The decision cards are now 760 px wide, like the checklists and figures. The shared G.bars charts stay at their own width.
- **Warranty chart axis.** Added a gap below the axis labels. I did not change the position of "5 years". It sits at 50 percent of the same box as the bars, and I saw no offset in the 1440 shot.
- **"Usually, yes:".** Now reads "Usually the new house: you pay about the same per square foot...".
- **10 years against 8 years.** Added: "The warranty and the state's limit are two different clocks. The warranty says what the builder will fix. The 8 years is the most time the state allows for most lawsuits over defects..." This uses only rows 13 to 15. The carve-out for fraud, gross negligence and recklessness is in the chart caption.
- **"you or your agent apply".** Now "Apply to the Horry County Assessor by January 15 of the year after you move in, before the first penalty date" (row 36).
- **$290 after the 4 percent application.** The short answer now says "outside city limits and after you apply for the 4 percent rate". The table sentence says "with the 4 percent rate on a home you live in". The FAQ that repeated it is cut.
- **$329,000.** Now "a typical home a builder sold this year that the county still taxes as a lot".
- **"45 in 100 are finished".** Now "Of the new houses for sale in the MLS feed". It appears in that one place only; the decision card no longer repeats it.
- **Story placement.** The story is cut. See the owner's-eye story item below.
- **"Works out the tax bill" service line.** Kept. The page shows the method, so the offer is arithmetic the page already does. **The lead should confirm it along with O6.**
- **Realtor section has no local number.** Not fixed: O1 and O2 are still with the owner. The section now has one line on who pays.
- **Inspections are generic.** The local parts stay: the builder's one-year term and the warranty-visit observation. O4, the inspection cost, is still open, and no cost is stated.
- **Incentive kinds.** Not named: O3 is still pending. If the owner says yes, add "closing-cost credit, design-center credit, rate buydown tied to the builder's lender", with no amounts.
- **Flood link.** Added /buyers/coastal-insurance/ in the "What does a new house give you?" list.
- **P2.** Now 3.3 per 100 words. Changes:
  - Cut "1,006 of 3,014", "5,108 of 17,881", "99.8 percent" and "15 in 100 built since 2020".
  - The raw counts in the share chart are gone.
  - The notice-and-cure steps (90, 30 and 10 days) are gone.
- **Photo credits.** The plural line is stripped in the spec (NEEDS.md item 8). The credit now says what changed: the markers and an outline.
- **Byline date.** Left for `build.js dates`.
- **Map labels.**
  - Murrells Inlet is south of the map frame. Labelling it would place it off the map, and critic.mjs flagged the attempt, so the label stays off. The share chart still names it.
  - The Little River and Longs labels moved clear of each other and of the new community markers.
- **Aerial marker 2.** I redrew the image from the unmarked export.
  - The slab now has an orange outline, with a short line to marker 2.
  - The other markers are in the same places.
  - I checked the result at full size.
  - The photo record (`changes`, `what`, `subject_check`) is updated, and photos.js passes.
- **critic.mjs photo routing.** This is a tool note, so it went to NEEDS.md item 10. My own shots route photos.test.

## Reader

### Blocking

- **"The page never told me what the defect problem is".** Fixed with the new H1. The short answer no longer says "Defects are the other surprise". Defects come up only where the page can back them: the inspections, the warranty, and what to do when something is wrong.
- **Can't act on 4 percent.** The bullet now says to apply to the Horry County Assessor by January 15 of the year after you move in, before the first penalty date (row 36).
- **Two "middle" prices.**
  - The top tile is no longer a price.
  - The short answer's figure is now "a typical $329,000 home", outside city limits.
  - The cost section says "A typical new house for sale ... is listed at about $370,000", so the asking price is labelled.
  - The tax section says the $329,000 is what a builder sold a home for that the county still taxes as a lot.
- **Does "outside the cities" apply to me?**
  - Each of the ten community cards now says "inside X city limits" or "outside city limits", with the town in the mailing address.
  - Under the tax table, the page names the four communities inside a city: three in North Myrtle Beach and Kingston Oaks in Conway.
  - It also says the city adds its own tax, so the bill is higher. The 2026 levy shows city mills (North Myrtle Beach 50.0, Conway 101.3). These are more than the county fire and waste mills that a city address may not pay, so "higher" holds either way.
  - The link to the property tax guide stays, now labelled "has each city's rate".
- **Who pays my agent.** One plain line now says the written agreement covers who pays the agent and what you would owe if the builder does not. Whether builders here usually pay is O1, still with the owner, and is not answered.

### Nits

- **Jargon.**
  - "escrow": now "If your lender collects the taxes with your loan, the tax part of the payment may go up once the house is valued".
  - "Loan Estimate": now has a plain sentence of its own.
  - "deed index": now "deed records".
  - "by mailing address": now "grouped by the town in the address".
  - "FEMA high-risk": now "high-risk flood zone on FEMA's map".
  - "NVR": now "NVR (Ryan Homes)".
  - "substantially complete": kept only in the chart caption, which is the law's wording.
  - "FHA, VA and conventional": kept, because it is the owner's own observation.
- **Three years from when?** The ledger limit says no start date (row 14), so none is added. The new two-clocks sentence ties the 3 years to the 8-year chart line.
- **Number pile-ups.** Cut. See the P2 nit above.
- **Escrow, builder table and law steps were skipped.**
  - The escrow text is one plain sentence.
  - The law steps are cut to one sentence.
  - The builder chart stays, but the community cards come before it and answer "where" and "who builds what".
- **Reads like a report.** The map caption, chart captions and sources line are plainer.
- **The story did not fit.** Cut.
- **Inspection cost.** Not stated. O4 is still open.
- **Dates.** "2016 to 2023" now appears where the comparison needs it: the first section, the chart key and the lot sentence. Score P3 is 0.
- **The site's listing box.** Placed by the site. Not changed.

## Owner's eye

### Blocking

- **Headline.** Fixed. See the critic's H1 item.
- **"Name some roads, some communities".** New in the "Where" section:
  - The ten communities where builders recorded the most sales in the past year, from county records (row 33).
  - Each card gives the town in the mailing address, inside or outside city limits, and the numbered highways or parkways it is near. It also gives the miles to the ocean in a straight line, the builders with their sale counts, and the typical price buyers paid.
  - The ten are also numbered on the dot map.
  - The short answer now names the roads: Highway 90, Highway 22 and the Carolina Bays Parkway.
  - A mid-page offer under the cards reads "Tour these communities with your own agent", with the button "Set up my builder tour". The heading and the button match.
  - Not added: amenity centers and hospital distances. The county plat names an amenity site only for Auberon Woods. The open-space name match is not complete enough to compare communities (`raw/community-plat-parcels.json` holds what was read), and there is no verified hospital location set. The link to /invest/what-is-being-built/ covers hospitals. The photo partner's shot list item 3 (finished new streets) would add the look of the place.
- **Nothing sells the house or the place.**
  - New H3 "What does a new house give you?" with four points: no one has lived in it and you pick finishes; a written warranty; today's building code, with state law on coastal wind rates counting codes, construction and tie-downs (row 35); and less flood risk on average (row 29), with the coastal insurance link.
  - New decision card "You want to be near the beach", which points to the three communities about 1 to 2 miles from the ocean.
  - The HOA fee is now answered in the cost section: about 1 in 5 has none, and about 3 in 4 pay $100 a month or less or none (row 34).
  - Insurance on new against older houses: only the statute is stated, with no premium or discount, because none is verified.
  - Lot premiums and upgrades stay out (O5).
- **Story.** Cut. The entry `nc-client-build-longs` has no problem and no skill shown. A detail may not be added, so it cannot carry tension. If the owner has a new-build story with a problem we solved, it belongs at the end.
- **Photo.**
  - The aerial is kept. Marker 2 is fixed and an outline marks the slab.
  - No ground photo was added. The Commons API returned 429 (rate limited) to every search this session.
  - The shot list (`shot-list.md`) is ready. The partner's address is with the owner, not in this repo, so I could not send it. **The lead or the owner needs to send `shot-list.md` with `templates/photo-request-email.md` before the owner sees the page.** Items 1 and 3 (a street being built, a finished new street) would replace the aerial.
- **Repeated facts.** Each fact is now said once, apart from the short answer's summary:
  - Price per square foot: the short answer and section 1. The FAQ is cut.
  - $290 to $1,210: the short answer and the table. The FAQ is cut.
  - 1/2/10 years: the warranty paragraph and the chart. The inspection step now says "the one-year part of the warranty" and the FAQ is cut.
  - NVR: the chart label and one FAQ.
  - Investor incentives: the incentives section only. The card now links to the rental guide.
  - "Nearly new houses for sale within a mile": once, in the agent checklist.
  - Remaining FAQs: under $300,000, new townhomes, builder license, biggest builders. Two of these are new material (townhomes, license) moved out of the body.
- **Too many exact numbers.**
  - Cut "1,006 of 3,014", "5,108 of 17,881" and "99.8 percent".
  - The raw counts in the share chart are gone.
  - Community sale counts are rounded to the nearest 10, and prices to the nearest $5,000.
- **Technical law section.**
  - The heading is now the question "What can you do when something is wrong with a new house?".
  - Cut: the 90/30/10-day steps, the personal injury line, the complaint procedure in the body (it is now in the license FAQ), and "a lawsuit is paused".
  - The section now has the warranty first, the chart, the two-clocks sentence, one sentence on the builder's chance to repair, and what we do.
  - The escrow text is one plain sentence.

### Nits

- **"the middle".** Replaced everywhere with "typical", or with "half are listed for more, half for less".
- **The price tile, and the tile with no number.** Both replaced. See the critic's first-phone-screen nit.
- **"Our property tax calculator has the rate for every town".** The bare sentence is gone. The link now follows the page's own answer for city addresses.
- **The tax box had a heading and a button that did not match.** The box is removed. The one mid-page offer is the community tour box, and its heading and button match.
- **The map is MLS active listings in aggregate.** Yes: these are active listings only, one dot per pixel, with no address, price or photo. That is allowed. The caption now says "from MLS listings".
- **The required "fully negotiable" sentence.** Now one sentence with who pays. There is one line on who pays.

## Not changed, and why

- **Murrells Inlet map label.** Off the map frame. See the map labels nit above.
- **No inspection cost, incentive kinds, typical fee payer or builder registration rule.** These are owner questions O4, O3, O1 and O2. Each still has its proposed answer in `facts.md`.
- **The A20 audit warning (no attributed sentence from Tim).** A quote for Tim Nash needs the owner (`templates/owner-questions.md`).
