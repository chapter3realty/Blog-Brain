# Review round 1: /invest/rental-program-vs-airbnb/

Three reviewers (critic 7, reader 7, owner 7.5), all pass=false. Every change was made in `specs/rental-program-vs-airbnb.js`. New facts are in ledger row 31, marked VERIFIED-BY-FIXER.

## Gates after the fix

- score.js: 100/100. claims-scan, facts-check: 0 findings on this page. house-claims: 0.
- build.js check: OK. build.js audit: this page has no `!!`; it has two `~` warnings (no attributed sentence, 8 sentences over 22 words). The remaining `!!` lines are on sibling pages (/hoa/documents/, /hoa/tax-deductible/, /sell/fsbo/), which are dates the lead's `build.js dates` run sets.
- critic.mjs at 320, 390, 768, 1024 and 1440: 0 blocking. 3 read.wall warnings at 320 only.
- Shots I looked at: the calculator at 320 (inputs end at 274, the panel at 296, page 320 wide; the "$21,807" no longer breaks), the hero at 390, the three-ways cards at 390, the building chart at 1440, and the header at 1024 (page 1024 wide).

## Critic

| Finding | What I did |
|---|---|
| Calculator spills at 320 | The grid column is `minmax(0,1fr)`. Labels, units and inputs get `min-width:0`, `max-width:100%` and `box-sizing`, and labels wrap. Inputs now end 22 px inside the panel. The result figures keep `white-space:nowrap`. |
| Page 1029 px wide at 1024 | Added the batch's page-only rule: `.hdr-phone-num` hidden from 1000 to 1120 px, icon kept. NEEDS.md item 5. |
| Hero tile "8 in 10 condos for sale in a program" | Now "oceanfront condos for sale in a program". |
| Chart caption and lead-in false (Mb Resort Rt) | The lead-in says "the buildings with 15 or more condos for sale". The note says all 17 are shown, and that one more listing name, "Mb Resort Rt" (21 of 34), names no building and is left out. The spec throws if that changes. |
| 38.6% beside "About 40 to 60%" in one column | The manager's cell now reads "A share of the profit, not of the rent". No manager percentage is on the page. The prose says managers price full service on gross profit, so it cannot be set beside the shares above, and links the property management page. NEEDS.md item 7. |
| Grande Shores and "every one of the 43" not ledger rows | Added to row 31 (d). |
| "For an owner that far away" | "For an owner who lives out of state". The decision card says "live out of state". |
| "Lenders list the signs." | "Lenders list what makes a building ineligible." |
| "the standard mortgages most buyers use" | "the standard mortgages". |
| "is on Airbnb income in Myrtle Beach" | "is on our Airbnb income page". |
| "Hotel services count as well" | Names them: registration at a front desk, daily cleaning, a central phone, central keys and limits on decorating. |
| Walls at 320 | The short answer is now three paragraphs. Three walls remain as warnings at 320 only. |
| "its last 12 monthly owner statements" | That sentence is cut (owner's repetition finding). |
| Sources cite 1.469-5T only | Added 26 CFR 1.469-1T. |
| Weak H2s without a place | "Who may run a Myrtle Beach rental for you?" and "Program or Airbnb: which fits your condo?" |

## Reader

| Finding | What I did |
|---|---|
| No typical cleaner cost | Not fixed with a number. The only allowed source for rental figures is `str-market.json`, which has no cost shares (NEEDS.md item 1, already filed). Neither its occupancy nor its ADR gives a stay count I can trust: 36.3% of nights gives about 132 nights, and revenue over ADR gives about 100. What I added: the $6,600 is about $550 a month (row 31 a); the bookings already include the cleaning fees guests pay; on Airbnb or Vrbo that fee comes to the owner with the rent, less the site's fee; and the desk's statement shows room rent only, so the table favors the program (row 31 b, c). The calculator says the bookings already hold the guests' cleaning fees. The calculator's cost field still starts at $0. |
| Am I allowed to run it myself in these buildings? | Added: in 30 of the 43 buildings with 8 or more for sale, some condos for sale say they are not in the program, so an owner there can be outside it (row 31 d). The page says the recorded documents say whether a program is required. On keys: the exit list now says the door was rekeyed so the unit had its own lock again, and a line says the owner then chooses how guests get in. Whether any program lets owners use Airbnb too is still owner question 2 in facts.md. |
| Is 35% normal? Manager 40 to 60% confused me | The manager percentage is gone (see critic). The basic-plan 13 to 17 percent is cut. No source says what is normal today, so under PLAIN-9 the page does not guess. |
| Does a program fill more nights? | No data. The page now says plainly that the table gives both ways the same bookings. |
| Who gets the cleaning fee? | Answered in the year section (row 31 b, c). |
| Does my choice or the building change the loan? | The section and the FAQ now open with "Lenders look at the building, not at whether you join its program", and say this includes a unit you run on Airbnb yourself (row 31 e, from row 8). "Non-warrantable" now comes after a plain sentence: buildings with a program usually do not qualify for standard loans. |
| Strip shows a house-hunter search box | The page sets no strip. `idx-lib/feeds.js` gives it "Condos in buildings with a rental program". The preview's sample homes have no program flag, so it falls back. NEEDS.md item 6. |
| Hard words (pool, blackout dates, materially participate) | The voluntary-pooling line is cut. "Pool their units" is now "rent their units through the building's program". The hours test is moved off the page. |
| Too many numbers | The referral commission is one figure ("20 percent of the nightly rate in most months"). The Airbnb tax card no longer lists rates. |
| "Theft and damage have followed." | "Owners who hired one have had theft and damage." |
| Name the resort | Not done. PLAN choice (a) and VERIFY row 30 keep the name in the sources line unless the lead names it. |
| Dishes list | Kept. The owner listed the furnishing standard as a strength, and the reader found it useful once. |

## Owner

| Finding | What I did |
|---|---|
| PLAIN-9 (what we could read, 2017, "not today's rate") | All three cut. The first section opens: "One large oceanfront Myrtle Beach resort's rental desk took about 4 of every 10 rent dollars ... Its written rules set three fees". The year stays only in the sources line. Every resort fact is in the past tense. |
| BUYER-1 and BUYER-3 ("the manual" 11 times) | "Manual" is gone from the body. The source is named once at the top as the resort's rental desk and its written rules. Rules are stated as facts about "that resort" or "the desk". The table column is "The rental desk's rules", and its phone label is "Its rules:". |
| FACT-2 (manager range in the same column) | Fixed, as in the critic's row. |
| The offer repeated about nine times | Kept in the short answer and the six CTA boxes. Cut from section 1, the leaving section, the taxes card, the buildings section and both FAQ answers. |
| Simple words; the hours test as a second subject | The pooling line is cut. The license section ends with one sentence: whether you or a manager runs the rental changes your tax result, with a link to the rental tax page. |
| FIG-5 "The real choice is the building" | Now "Every rental there goes through it". |
| Hero sub (STRUCT-5) | "One Myrtle Beach resort's rental desk kept 38.6 percent of the rent. Airbnb takes 15.5 percent from most hosts." (19 words.) |
| Strip title | NEEDS.md item 6. The live strip already says "Condos in buildings with a rental program". |
| 1024 scroll and 320 spill | Fixed, as in the critic's rows. |
| FAQ on charges is thin | Now ends with Airbnb's 15.5 percent for comparison. The manager range waits for the base (NEEDS.md item 7). |
| Only one photo | Unchanged. The resort front desk and keycard door shots are on `shot-list.md` for the photo partner. |

## Findings I did not take

- **A typical cleaner cost, or a calculator that starts with one.** The brief allows rental figures only from `str-market.json`, and it has no cost data. A cost per clean from a cleaner's website would be a marketing claim, not a primary source. NEEDS.md item 1 asks the lead to add AirROI's cost shares to `str-market.json`. Once they are there, the calculator's cost field can start at the Myrtle Beach figure.
