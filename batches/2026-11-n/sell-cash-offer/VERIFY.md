# Verify: /sell/cash-offer/

Batch 2026-11-n, Lane N. Independent verifier, 2026-11-08. I did not research these rows. I opened every source myself and re-ran every data script. The full note for each row is in `facts.md`, in the verifier note column. The struck wording is in `sell-cash-offer-struck.json` (11 entries; each struck sentence fires its entry and each approved sentence fires none; `node tools/struck-check.test.js`: all controls pass).

## Counts

| Status | Rows |
|---|---|
| VERIFIED | 16: rows 1, 2, 4, 5, 6, 7, 8, 10, 12, 13, 18, 19, 21, 23, 24, 26 |
| CORRECTED | 12: rows 3, 9, 11, 14, 15, 16, 17, 20, 22, 25, 27, 28 |
| STRUCK | 0 |

## Data re-run

- `cash_buyers.py`, `cash_share.py` and `build_findings.py` were re-run into a separate folder (`<scratch>/wfn/sell-cash-offer/verify/`), with the 53 weekly DEED pulls (`<scratch>/wf2/sell-out-of-state-buyers/raw/`) and the 57 weekly MORTGAGE (002) pulls (`<scratch>/wfn/sell-cash-offer/raw/`). All three outputs are identical to the files in DATA.
- Every SALES row has its deed (13,194 of 13,194). Every mortgage week returned all its rows (Total equals rows; no cap).
- Company names: all 1,298 company buyers carry a legal suffix, or PROPERTY (18) or PARTNERSHIP (3). No person or trust was misread as a company, and no LLC written another way was missed.
- Resale pairs: rebuilt by hand. 105 of 107 match the company name exactly; 2 match by the 14-letter prefix, and both are spelling variants of one name.
- Instant-offer count: all 20 are one firm's entities.
- **Label limit on "houses".** A house here is a sale not marked HPR (condo) in the county legal description. 1,464 of the 8,569 have UNIT, APT or BLDG in it: villas, townhouses and some condo units. I re-ran the house figures with those moved out. Results: company share 9.1% (claimed 10.5%); under $150,000 33.6% (27.7%); $250,000 to $499,999 4.4% (5.3%); bought and resold n 63, 68.5% (68.3%), $173,000 and $268,000 ($170,000 and $260,000). Every sentence in rows 1, 2 and 5 still holds as worded. The page should not print a house figure with more precision than "about".
- Listing counts (row 9): re-queried at about 08:10 UTC on 2026-11-08. Same counts and medians.

## Corrections

1. **Row 3.** "Most company buyers are small" is struck. The count is of names, and the story bank (`llc-practice`) says about nine in ten of our investor customers use a new LLC for each house. Say that 922 of 1,045 *names* bought one home, and that one owner can appear under several names. All 20 instant-offer buys were by one firm, so write "instant-offer buyers", not "companies".
2. **Row 9.** "Another 142" is wrong. At least 15 listings are both cash only and needs work (9 houses, 2 condos, 4 manufactured). Write "142 listings were marked needs work; some are also cash only". Show the feed's CCMLS source line with the counts.
3. **Row 11.** "Passing your contract" reads as the seller assigning. Write "A buyer who passes its place in your contract to someone else (assigns it)".
4. **Row 14.** Scope. NAR writes about the whole country and says practice varies by state. Write "Across the US, no law requires a deposit, and deposits typically run 1 to 10 percent".
5. **Row 15.** Freddie Mac ties the refund to a contingency not being met, and the right to back out to having an inspection contingency in the contract. Write "If the contract has an inspection contingency, the buyer can back out of the sale". The second sentence is allowed only as a plain consequence, never as a claim about what buyers intend.
6. **Row 16** (carried from FSBO 2). It brought back "so the attorney prepares the deed", which the FSBO verifier struck on 2026-11-04. Use: "anyone who prepares your deed for you must be a lawyer".
7. **Row 17** (carried from FSBO 27). The CFPB page is now archived content from June 3, 2019; cite the archive URL. The source says "your trusted representatives", not only the attorney's office. "We confirm wiring by phone" is a practice claim with no source; write it as the seller's own step unless the owner confirms it.
8. **Row 20** (carried from FSBO 21). It repeated "exposes it to the most qualified buyers", which FSBO struck. The source says "generally" and "the greatest number of qualified purchasers". Use FSBO 21's safe wording, and give no date in the body.
9. **Row 22.** Cut "Most buyers who need a loan cannot buy it as it is". The source is Fannie Mae's rule on which loans it will buy. Write "A loan on it cannot be sold to Fannie Mae until it is repaired to at least C5".
10. **Row 25** (carried). Cut "Cash buyers often ask for that". It has no source; it is owner question Q6.
11. **Row 27** (story). The story says "modest cashflow", not modest rent, and "closed within 13 days", not "13 days after". The wording is fixed in the row.
12. **Row 28** (carried). "The closing attorney still searches the title, prepares the deed ..." brings back the FSBO-struck "prepares the deed". The court says these steps are done under an attorney's supervision. Write "A South Carolina attorney still supervises the title search, the closing and the recording of the deed".

## Checks that passed, worth knowing

- Row 13: the customer-duty paragraph is **40-57-350(L)(5)**.
- Row 10: the wholesaling definition ends "does not refer to the assigning or offering to assign a contractual right". The page must not say that assigning alone is wholesaling.
- Row 8: "at least" is right for the claim as worded. The note now records three limits: only doc type MORTGAGE (002) was read; a manufactured home financed as personal property has no recorded mortgage; the mortgage pull ends 2026-10-21, so the last nine days of deeds had a window shorter than 30 days.
- Row 19: same per-$500 figure and grantor rule as FSBO 15 and sell-divorce. 178,000 and 260,000 are exact multiples of $500.
- Row 23: Fannie Mae accepts a stand-alone wind policy. The second sentence holds only when no wind policy of any kind can be had. Do not suggest that is common.
- Sibling ledgers in 2026-11-n share no figure with this page, except the deed fee rate, and that matches.

## Photos (PLAN.md)

- **P1: Florence floodwater, Conway area** (`images/2026-10-d/buyers-undisclosed-flooding/conway-florence-floodwater-street-*`). I opened the Commons file page. It is public domain as a work of a U.S. National Guard member on official duty (PD-USGov-Military-National_Guard; FlickreviewR passed 9 June 2019). The author is the SC National Guard (Senior Master Sgt. Edward Snyder, per the description). The set's description names Conway, S.C., September 25, 2018. I looked at the 1200 px file: houses, floodwater, road signs, no readable plate or house number. `node tools/photos.js check` on its record passes with image root `chapter3realty`. The base file named in the record (no size suffix) is not in the working copy; only the -600w, -1200w and crop files are. **Licence verified.** It is already on /buyers/undisclosed-flooding/, so it is a second choice, as PLAN says.
- **We_Buy_Houses.jpg.** The file page confirms CC BY-SA 2.0, Alan Stanton, camera at 51.598, -0.068 (Tottenham, London). Rejecting it is right: it is not this place.
- No other photo is proposed. The partner's shot list asks for no readable company name, phone number or house number; that fits `rules/images.md`.

## Should not be published

- The "70 percent rule" as a rule anyone follows. The researcher left it out, and I agree.
- Any house-level reading of the deed pairs: the $170,000 and $260,000 are separate medians, not one house.
- "Paid cash" as fact for any buyer.
