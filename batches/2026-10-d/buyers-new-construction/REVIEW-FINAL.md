# Final fix: /buyers/new-construction/

Batch 2026-10-d, Lane U. Final fixer, 2026-11-03. Every change is in the spec (`specs/new-construction.js`), the page's data folder, its image folder and this folder. The built page was not edited by hand. The spec before this round is saved at the scratchpad path `nc-spec-before-final.js`.

New facts are ledger rows 47 to 52 in `facts.md`, each marked VERIFIED-BY-FIXER with its source and quote. The verbatim quotes are also in the website's `data/2026-10-d/buyers-new-construction/raw/primary-quotes-final.json`.

## The lead's open items

1. **The H1 promises "what the price on the sign leaves out" and gave one cost.** Fixed. The section now names five things and backs each one:
   - **The tax bill.** Unchanged (rows 23 to 27, 36, 45).
   - **Lot premiums and upgrades.** New H3 "Lot premiums, options and upgrades". Pulte's own pages for Crescent Cove and Del Webb North Myrtle Beach say the price "may not include lot premiums, upgrades and options" (row 47). Pulte's 10-K names flooring, countertops, fixtures and appliances (row 49). Toll Brothers, 97 of the builder sales here, reports that its buyers' options and lot premiums came to about a quarter of the base price nationwide in fiscal 2025, and that its spec homes have less to add (row 48). No local dollar amount is given, because none has a public source (O5 stays with the owner).
   - **Deposits.** Now under their own H3, from row 40.
   - **Closing costs.** New H3 "HOA charges and closing costs", with a three-item list. The CFPB says the buyer generally pays them and lists what they include (row 50). Meritage, 334 sales here, says it may pay part of the closing costs for buyers who use its preferred lenders (row 52). A seller credit usually comes with a higher price (row 50). No rate and no amount.
   - **HOA start-up.** No recorded HOA declaration with a start-up or capital fee was reached for any of the ten communities, so the page names no fee. It says only what the sources support: a new community's HOA can charge at closing, Pulte's pages list community association fees as a possible extra (row 47), and any HOA charge paid at closing is listed on the Closing Disclosure (row 51, Reg Z comment 38(g)(4)-1). Then: "Ask the builder for the HOA's fees before you sign."
   - The hero line, the short answer and the section's first sentence now name the same five things. The short answer's "What the sign leaves out is the full tax bill" was a pseudo-cleft and is gone.
2. **"In our experience" has no source.** It was already gone from the page and the spec. The two "We see ..." sentences that remain are the owner's own observations in `stories/stories.json` (`builder-incentives-rare-investors`, `builder-warranty-visit`). They are what keeps T2 passing.
3. **The banned metaphor "clock".** Already cut in round 2. The word is on neither the page nor the spec's page text.
4. **No photo of a new house.** I searched Wikimedia Commons and Openverse on 2026-11-03. Neither has a free-licence ground photo of a new house in Horry County. I also tried the Library of Congress, which refused the request. I took the aerial out, but then critic.mjs blocked the page with "a blog with no real photo" (photos.blog-no-photo). So the public-domain USDA NAIP aerial is back. It is a free-licence photo of new houses in the City of Myrtle Beach: finished houses, a slab and a house in framing. Its embedded IPTC metadata was missing from the working copy, so I ran `photos.js embed`, and all records now pass. **For the lead:** the photo partner's shot list (`shot-list.md`, NEEDS item 12) is still the way to get a ground photo. When it arrives, his photo replaces the aerial.

## Other changes

- **Hero line.** The audit flagged the line once it no longer gave a number: "no concrete anchor". It now reads: "New construction in Horry County costs about what a nearly new house does. The sign leaves out lot premiums, options, HOA charges, closing costs and the full tax bill." It is 29 words, with no we, our or us.
- **The fourth FAQ (A7).** New: "How does the county know a new house is being built?" The answer is in the verifier's corrected wording of row 22.
- **Sources line.** It was over the 90-word cap, so I removed "matched to parcels" from the note. The new sources are linked in the text. Pulte and Reg Z are also in the sources line.
- **may/might.** Two of the new uses were cut. Five uses are left, and the audit gives a warning, not a failure.
- **Meta description.** It now names the lot premiums, fees and tax bill the sign leaves out.

## Gates

- score.js (SCORE_TODAY=2026-11-03): 100/100. SEO 100, AEO 100, Human 100, Trust 100. P2 is 3.5 per 100 words. A7 has 4 FAQ entries.
- claims-scan: 0 findings.
- facts-check: 0 lines on this page.
- house-claims: 0.
- struck-check (`batches/2026-10-d/facts/buyers-new-construction-struck.json`): no struck wording.
- photos.js check: all photo records pass.
- critic.mjs at 320, 390, 1024 and 1440: 0 blocking and 0 warning. I looked at the new section at 390 myself.
- build.js audit: only the two date mismatches, which `build.js dates` clears. There are two warnings, not failures: A20 (a quote from Tim needs the owner) and "may/might" 5 times.

## Still with the lead or the owner

- O1 to O6 are unchanged.
- The A20 quote from Tim.
- headlines.json (NEEDS items 2 and 9).
- The photo partner's shot list (NEEDS item 12).
- Rows 47 to 52 need the lead's re-check, along with rows 33 to 46.
