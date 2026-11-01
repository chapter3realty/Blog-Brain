# Proposed registry rows: /buyers/programs/

For `facts/registry.json`, after the verifier marks the rows. Each is on more than one page (this page, `/buyers/affordable-places-to-live/`, and the first-time buyer page being rebuilt), so one owner page and one value.

1. **id `sc-housing-bond-dpa`.** "SC Housing's Homebuyer (bond) Program gives an eligible buyer $10,000 toward the down payment and closing costs, forgiven after 15 years in the home and repaid in full on a sale, refinance or move before then." Source: Programs page and the February 2026 program guide (facts.md rows 2, 3). ownerPage `/buyers/programs/`. staleBy 2027-04-01. `wrong` patterns, to be tested against the site before adding (CLAUDE.md):
   - `\$8,000[^.]{0,80}\bSC Housing\b|\bSC Housing\b[^.]{0,80}\$8,000` (an older amount; a lender's sample form in the guide shows 8,000.00).
   - `\bforgiven\b[^.]{0,60}\b(?:each|every|per) year\b|\b(?:each|every|per) year\b[^.]{0,60}\bforgiven\b` near "SC Housing" (the help is not forgiven year by year).
   - The live page's `Interest Rate\s*0%` is already caught by the rate rules.
2. **id `sc-housing-bond-limits-horry`.** "For loans reserved from June 1, 2026, the Homebuyer Program limits in Horry and Georgetown counties are $114,960 (1 or 2 people), $134,120 (3 or more) and a $450,000 home price." Source: the 06.01.2026 limits sheet (row 4). ownerPage `/buyers/programs/`. staleBy 2027-06-01 (HUD's 2027 limits). `wrong`: `\$108,600|\$126,700` (last year's limits) beside "SC Housing".
3. **id `palmetto-home-advantage-income`.** "$140,000 statewide for 2026/2027." Source: the limits sheet (row 13). `wrong`: `\$135,750` beside "Palmetto Home Advantage" (last year's figure, still on SC Housing's own program page).
4. **id `horry-targeted-county`.** "Horry and Georgetown are targeted counties: no first-time buyer rule, but no home owned at closing." Rows 1. `wrong`: `first-time (?:home ?buyers?|buyer status)[^.]{0,80}\b(?:required|must)\b[^.]{0,80}\bHorry\b` (to be checked for false hits on the FTHB page before adding).

No new stories proposed. stories/stories.json has no first-hand account of a buyer using SC Housing help; facts.md question 2 asks the owner once.
