# Review round 1: /buyers/va-loans/, what the fixer changed

Fixer, 2026-11-02. Three reviewers: critic (5), reader (7), owner's eye (7). Every change is in `specs/va-loans.js`; the page was rebuilt with `node tools/mkpage.js specs/va-loans.js`. New facts are rows F1 to F12 in `facts.md`, marked VERIFIED-BY-FIXER for the lead to re-check. New data files: `data/2026-11-a/buyers-va-loans/pull-communities.py`, `check-communities.py`, `communities-checked.json`, `raw/communities-for-sale.json`, `raw/multi-counts.json`. The Warbird Park photo files were re-cut (`photos.json` record updated).

## Gates after the fix

- score.js: 100/100 (SEO 100, AEO 100, Human 100, Trust 100). Round 0 was 99.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking, 0 warnings (round 0: 1 warning, the 940 px wall). An interim build had a 991 px wall in the appraisal section at 320; two subheadings fixed it. Shots: `wf2/buyers-va-loans/critic-shots-r1/`, JSON `critic-r1.json`. I looked at the 320 and 1440 shots.
- claims-scan, facts-check: no finding on this page. house-claims: 0. struck-check: no struck wording. An interim draft reused the struck "VA buyer can choose from ... as an FHA buyer" wording; the verifier's wording replaced it. repeat-check and structure-check: strict pass. photos.js check: all records pass.
- build.js check: OK. build.js audit: only the date mismatches (byline and schema dateModified against the sitemap). The lead's `node build.js dates` sets those. Also the A20 warning (no attributed sentence from a named licensed person), which is a warning only and was there in round 0.

## Critic: blocking

| Finding | What changed |
|---|---|
| "The VA orders the appraisal." has no row | Cut. The appraisal section opens with what it checks: value, and "the VA's basic standards for a safe, sound home" (row F8, 38 CFR 36). |
| First two sentences disagree ("most houses" vs "about half") | The short answer now uses the critic's sentence: "For a house you will live in, yes, if the seller agrees and it passes the VA appraisal. About half the houses for sale on the Grand Strand are marked as taking a VA loan." |
| "Often" badge on villa, golf and townhome condos; "Usually" on townhouses | Condo card: "If listed", with a link to the named communities. Townhouse card: "Yes", with the condo-regime condition in its line (row 1). |
| Card titles wrap one word a line at 320 | Page CSS: under 520 px the badge sits on its own line under the title, so the title has the card's width. Checked in the 320 shot. |
| Button "Get the VA homes list" wraps | Label is now "Get the list", and every `.btn` on the page is `white-space:nowrap`. |
| Phone number split at 390 | The number is a `tel:` link with `white-space:nowrap`. |

## Critic: nits and warnings

| Finding | What changed |
|---|---|
| P6 "homestead exemption" | The term is gone. The line says: "At 65, after a year living in South Carolina, the first $50,000 of your home's value is not taxed." |
| "Usually" on the townhouse card | Fixed above. |
| "before the loan closes" not in the quote | Now "any peeling or damaged paint must be fixed" (row 20's safe wording). |
| Palmetto Heroes "is closed" | Cut, with the owner's rule (no solution, no problem). The year-round SC Housing link stays. |
| Service promises | Cut: "We walk you through these four steps", "we look for peeling paint", "We find out which rule covers you". Kept: "We write what you ask for into your offer" (writing the offer is the agent's licensed job), "We look it up on the VA's list" (the live page's cleared line), and "we ask the listing agent / the seller's agent" (asking the other agent is ordinary agent work). |
| The P&T sentence read twice | Now "If the VA rates you permanently and totally disabled from your service, you pay no property tax on your home." |
| Table caption read twice | Now "Tax a fully exempt veteran saves each year, on a home the county values at $400,000". |
| Entitlement undefined | Defined once, in plain words, from the VA limits page (row F5): "Your entitlement is the amount the VA agrees to pay your lender if you do not repay the loan. Your COE shows it." |
| First CTA said a house is on a VA list | Now "Send us a condo or a house you like. We find out whether a VA loan can buy it before you tour." The end CTA says what we check for each: the community for a condo, the seller for a house. |
| Second-home section opens with a national line | Now opens with a local count: "few sellers of these homes here mark VA: 3 of the 61 for sale" (2 to 4 unit homes, row F3). |
| Closing section is national only | No local figure exists for the fee, and the rules forbid its percentage. The section now opens with what the reader asked for: "A VA loan can need no down payment" (row F4), and says how the fee works in words: a share of the loan, lower with a down payment, higher after the first use (row F6). |
| Seagate Village line stands alone | Cut. Seagate Village is now a row in the community table. |
| Heading wraps ("house", "VA", "loans") | Every H2 and H3 on the page has `text-wrap:balance`. The headings are also new: "Send us the home you like", "Houses for sale that take VA", "Flood zones". |
| Map labels about 9 px at 320 | Not changed: area-map.js is shared. Note in NEEDS.md. |
| Right edges step at 1440 | The cards and the community table now end at 820 px, where the charts end. The text column and the photo are set by the theme, so they still differ. |
| Warbird Park photo corner fragment | Re-cut from the Library of Congress 50% rendering, 50 rows off the top. I looked at the corner and the full frame: the sign edge is gone, and the jets are whole. `photos.json` notes the new crop. |
| First phone screen, MLS strip | Shared. Note in NEEDS.md. The dek under the H1 now gives an answer, not a method: "Your VA loan can buy most kinds of home here, but a condo must be in one of about 175 Horry County communities on the VA's list." |
| creditText "Carol M" | Worked around in the spec (`fixImg`, `fullCredit`). The bug is in photos.js line 528; note in NEEDS.md. |
| Footer "investor-focused" | Already in NEEDS.md. A site fix. |

## Reader: blocking

| Finding | What changed |
|---|---|
| The page names only 3 condo communities | New table, "Condo communities on the VA's list with condos for sale now": 15 communities from Carolina Forest to Longs, each with the area, how many condos are for sale, the asking prices and the bedrooms. Source: the VA's list, matched to condos for sale by community name, and every community checked by street before it went in (row F1, `check-communities.py`). Six name matches were thrown out because their streets did not match the VA record. The CTA under it offers the rest by area and price. |
| First screen is a method and the MLS box | The dek now answers (above). The MLS box is shared (NEEDS.md). |
| Funding fee size unanswered | We may not print the percentage (Reg Z; ledger header). The page now says what the fee depends on (row F6) and links the VA's chart. |
| No plain "no down payment" | First line of the closing section: "A VA loan can need no down payment, as long as the price is not higher than the appraised value." (row F4) |
| Entitlement, and the reader's own case (a VA loan still open) | Defined (above). The second paragraph now says what happens in his case: part of the entitlement is in use, the VA works out what is left from the $832,750 county limit, and if it does not cover enough of the new loan the lender may ask for a down payment (row F5). |
| What to do on a house not marked VA | New line: "A listing without the VA mark can still take a VA offer. On a house you like that is not marked, we ask the listing agent whether the seller will take VA before you make an offer." Why a seller turns VA down is not on any row, so the page does not guess. |

## Reader: nits

| Finding | What changed |
|---|---|
| "accepted VA record", "reasonable value", "proposed or memorandum rating", "creditable years", "condo's sponsor" | "on the VA's list"; "4 percent of the value the VA appraisal gives the home" (row F7); "You are still serving and already rated: Before your closing date, the VA rated you eligible for disability pay on a claim made before discharge"; "6 qualifying years"; "Your lender can ask the VA to review it". |
| "Why are you telling me this" (Seagate, HUD) | Seagate line cut. The HUD comparison is one clause, in the verifier's wording. |
| 1978 vs 1980 | The chart note now says why: "The Census counts homes by the decade they were built, so 1980 is the closest line to 1978." |
| Too many numbers in the price paragraph | The middle-house band is cut. The paragraph keeps two shares and says the point first: "VA is most common in the middle of the market". |
| Builder incentives line | Cut. |
| Byline vs feed dates | The lead's `build.js dates`. NEEDS.md. |
| Seller-paid costs read as a contradiction | Now "A seller can pay all of your closing costs, with no VA limit. The VA's 4 percent limit is only for other help from the seller, such as paying your funding fee or paying off a debt." |

## Owner's eye: blocking

| Finding | What changed |
|---|---|
| Names: only 3 of about 175 | The community table (above). |
| Too many numbers | The two charts lose their second count per row ("3,702 for sale"). "27 reviews: 22 accepted, 5 rejected" is now "most of the VA's reviews of condo communities here ended with the community on the list". The price paragraph lost the middle band. HUD's "which holds 9" is cut. |
| Repetition | 2 of 29: once, in the oceanfront card (the short answer says "few"; the condo section and the FAQ no longer repeat it). "We look it up on the VA's list": once, in the building CTA. The chart-repeating lines ("The chart shows...", "The cards below...") are cut. The town paragraph under the chart no longer repeats the chart. "Permanently and totally disabled": the short answer and the tax section only; "A rating below permanent and total" and "Rated below 100 percent?" are merged into "A lower rating does not qualify" plus the one H3. Reuse of the benefit: FAQ only. The FAQ is new: reuse, manufactured homes (a fact the body does not have), a house with a tenant (moved out of the body), and the rate question. repeat-check passes strict. |
| BIZ-8: veteran head count | Cut, and its Census source and the guard. Warbird Park and the base stay. |
| Industry terms | Entitlement defined once. Every other term listed is rewritten (above). DIC is spelled out once beside "VA survivor pay". |
| Dates in body copy | Cut: "for 2026 only ... 2025 get $75,000", "It opened in 2021", "closed in 1993", "one-year estimates for 2024". Kept: "by July 15", the one date a reader must act on. |
| The oceanfront towers photo | Cut, with its credit and ImageObject. The shot list now asks the photo partner for Magnolia Pointe and Seagate Village, two communities on the VA's list. |
| Palmetto Heroes | Cut. |
| The page never sells | New paragraph under the town chart: inland towns give a VA buyer the most choice, Conway's city tax gives a fully exempt veteran the biggest saving there, with links to our Conway and Carolina Forest guides. The houses CTA now ends "and we show you the ones you pick". Two true stories from stories.json, told in their verified wording: the low appraisal (`low-appraisal-reconsideration`, the 2026-10-d verifier's wording, in the appraisal section, where it is the answer to a low appraisal), and the veteran who works his New York job in alternating weeks (`veteran-alternating-weeks`, near the end, after the military history). |

## Owner's eye: nits

| Finding | What changed |
|---|---|
| H1 vs headlines.json | Kept the spec's H1: the page now proves "which condos and homes qualify". Note for the lead in NEEDS.md. |
| IDX feed fallback title | NEEDS.md (shared). |
| Signpost sentences | Cut. |
| "A rating below permanent and total" and "Rated below 100 percent?" | Merged (above). |
| Clinic map | Kept. |
| Tax table: say its point once | The line above it ("Conway's city tax is the highest...") is gone from the tax section; the point is said once, in the sellers section, where it helps a buyer choose a town. |
| Phone length, the #sellers wall | The flood zone and assumable loan paragraphs are now under two H3s. Phone length went up with the community table, which is the content the reviewers asked for. |

## Findings I did not take, and why

- **Map label size, the MLS strip, the footer, the date mismatch, photos.js credits:** shared files I may not edit. Each is in NEEDS.md.
- **"Give a local figure for the funding fee":** none exists that we may print. The fee is a percentage of the loan, and the ledger header (Reg Z, PLAYBOOK A14 and A17) bars the percentage. The page now says how it works in words and links the VA's chart.
- **"Why a seller turns VA down":** no ledger row. I did not guess; the page says what we do on a house without the VA mark.
- **"We write what you ask for into your offer":** kept. Writing the offer is the buyer's agent's job under South Carolina licensing, not a new service.
EOF
