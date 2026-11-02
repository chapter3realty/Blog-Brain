# Proposed story-bank rows, registry rows and site fixes: /buyers/common-mistakes/

For the lead. Nothing here is applied.

## 1. Stories: the three on the live page (owner must confirm first)

The live page tells three stories that are not in `stories/stories.json`, and no owner-answers file in either repo records them. Proposed: cut them from the page now. Ask the owner once whether each happened as written; if yes, add each as its own row with `teller` and `source` set to his answer, and restore it word for word in entry 7 (the first two) and entry 10 (the third).

- `skipped-inspection-well` (story): a buyer put nearly everything into the down payment and closing costs and moved in with about $4,000 left; the well then needed an expensive repair; she had skipped the inspection, so she had no chance to make the sellers pay or to walk away; she found a low quote and saved her way out of it.
- `extension-cord-outlets` (observation): inspections here have found wall outlets screwed onto extension cords.
- `job-not-lined-up` (observation): buyers have moved to the coast before securing work, and the loan timeline fell apart because the job must verify before closing.

Owner question (one line, with the proposed answer): "The common-mistakes page has three stories with no record in the story bank: the skipped inspection and the well, the extension-cord outlets, and the job that was not lined up. Did each happen as written? Proposed: yes, keep them word for word."

## 2. Registry: Myrtle Beach grandfathered STR houses (new)

- id: `mb-str-grandfathered`
- fact: The City of Myrtle Beach says 24 houses in traditional residential zones are grandfathered for short-term rentals; zoning districts that begin with R do not allow rentals under 90 days, except RMV.
- source: https://www.cityofmyrtlebeach.com/departments/planning_and_zoning_department.php
- asOf: 2026-11-02. staleBy: 2027-05-01. ownerPage: /invest/str-rules/.
- wrong: `\bfewer than 30\b[^.]{0,80}\bgrandfathered\b|\bgrandfathered\b[^.]{0,80}\bfewer than 30\b` (note: "The city's planning page now says 24.")
- Why: /invest/str-rules/ and the live common-mistakes page say "fewer than 30" (an older city news page, `research/invest-next/where-to-buy-facts.md` line 46). Read each hit before trusting the count.

## 3. Registry: recent buyers still at 6 percent (new, owner page this one)

- id: `recent-buyers-6pct`
- fact: Of people who bought a house in Horry County in 2024 and get the tax bill at the house, about 1 in 7 (1,091 of 7,633) were taxed at 6 percent in the county's parcel records on 2026-11-02.
- source: Horry County GIS layer 24 and 22 (DATA analyze_parcels.py). asOf 2026-11-02. staleBy 2027-05-01. ownerPage /buyers/common-mistakes/.
- wrong: none yet; the row exists so /buyers/property-taxes/ and the relocating pages quote the same figure if they use it.

## 4. Registry: flood policy cost by zone (new, owner page this one)

- id: `horry-nfip-policy-median`
- fact: For one-family houses with a FEMA flood policy in Horry County (policies starting September 2025 to August 2026), the middle yearly cost was about $550 outside the high-risk zone for a home the owner lives in, about $1,070 inside zone A, about $1,370 inside zone A for a home not lived in, and about $3,240 in zone V.
- source: OpenFEMA NfipPolicies v3 (DATA analyze_fema.py). asOf 2026-11-02 (file asOfDate 2026-09-08). staleBy 2027-05-01. ownerPage /buyers/common-mistakes/ until /buyers/coastal-insurance/ adopts it.
- wrong: `\$4\d\d to \$7\d\d (?:per|a) month\b[^.]{0,120}\binsur` (the live page's three-policy guess). Read each hit.

## 5. Registry: extend `buyer-agreement-source`

Add the state rule this page now cites: "In South Carolina no agency relationship exists until the buyer and the firm agree in writing; until then the firm is presumed a transaction broker (40-57-370(C), (E))." Keep the existing wrong pattern.

## 6. Owner question 2 (what our agents do), as the page now states it

The page says, in its "we" boxes and offers: we price the tax at both rates while you choose; at closing we give a buyer who will live here the county's checklist in order (license, car registration, online application); we never price from the seller's bill; we get a flood insurance quote on every house during due diligence; we test every address against FEMA's flood map before you offer; we get the condo budget, reserve figure and board minutes before you sign a contract; we look up the city zoning of each address; we line up the inspection with septic and well checks where they apply; on the first call we explain both agency choices and put our duties in writing; we read the HOA's rules against how you will use the home. Proposed answer: yes, all of these. If any is not done on every purchase, cut that sentence.

Review round 1 (fixer, 2026-11-02): until the owner answers, every service line on the page now says "we can" (price the tax at both rates, give the county's list of papers at closing, work out your bill at your price and rate, get a flood quote on any house, test any address against FEMA's map, tell which side of the wind line a house is on and get a homeowners quote that shows whether wind is in it, get the condo budget, savings figure and board minutes before you offer, look up the city zoning, line up the inspection with septic and well checks, read the HOA papers for the boat, the cart and the pool). Two lines stay firm because a source holds them: "When we search for you, we leave out communities that ban renting, and we read the HOA papers for any rule that would block your rental plan" (stories.json `hoa-rental-bans-filtered`), and "Before we show you a home, we put in writing what we will do for you and what we are paid" (the NAR rule, row 37). If the owner says yes to the list, "we can" may become "we".

## 7. Registry: wind and hail exclusion area (new, owner page /buyers/coastal-insurance/)

Extend `wind-pool-line` or add: "An insurer may leave wind and hail out of a homeowners policy only inside the Wind and Hail Underwriting Association's coastal area, or with the insurance director's approval (38-75-1230)." Fixer rows F1 and F3 in facts.md. Wrong-pattern idea: "(?:all|every) homeowners polic(?:y|ies)[^.]{0,80}\bcover\w* wind" anywhere on the site.
