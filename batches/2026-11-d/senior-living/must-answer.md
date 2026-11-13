# /buyers/senior-living/: what people ask, and who owns what

Researched 2026-11-13. Sources: the lead's suggestion file (`scratchpad/kw/suggest.json`, 145 matching suggestions), 20 more Google suggestion pulls today (`wt-139/data/2026-11-d/senior-living/raw/google-suggest.txt`), DataForSEO volumes (`scratchpad/kw/volumes.txt`, `research/dataforseo-2026-11-13.md`), the cannibalization report (`reports/cannibalization-2026-11-08.json`), and a grep of every live page in wt-139. No People-also-ask data exists for this cluster (the lead's `serp.json` holds one query, "horry county taxes"). The questions below marked "PAA-type" come from suggestion phrasing ("difference between", "does medicare pay").

## 1. Sibling pages and the searches each owns

`grep -rli "assisted living|independent living|memory care|senior living|nursing home|continuing care|retirement communit"` over `chapter3realty/**/index.html` finds one page: /buyers/55-plus-communities/. The other siblings were found by topic.

| Page | Owns (keep off this page) | What it says on our topic | This page's move |
|---|---|---|---|
| /buyers/55-plus-communities/ (hub, title "Myrtle Beach 55+ Communities: 9 Compared, Fees From $43") | "55+ communities Myrtle Beach" (320), "active adult communities", "Cresswind", and "retirement communities Myrtle Beach" (in its keywords). Every "<town> 55+ communities" suggestion. | One H2, "CCRC and all-inclusive options: Brightwater, Covenant Towers, Lakes at Litchfield", with entrance-fee figures that have no verified ledger row (batch 2026-10-a PLAN line 20: "Continuing-care campuses ... get their own page later"). | Link to the hub once, in the section on buying a home: "Compare the nine 55+ neighborhoods". No 55+ community names, prices or fees here. The lead should cut the hub's CCRC H2 to two lines that link here (BUILD.md). |
| 55+ community pages (/del-webb-grande-dunes/, /del-webb-north-myrtle-beach/, /myrtle-trace/, /seasons-at-prince-creek-west/) | Each community's name, fees, rules | Nothing on care | Not linked from the body. Their homes strips are not used here. |
| /buyers/retirees/ (title "Retire to Myrtle Beach: No SC Social Security Tax") | "retire to / retiring in Myrtle Beach", "is Myrtle Beach a good place to retire", SC tax on Social Security and pensions, homestead exemption at 65, the 65+ population share, "what does a house cost a year at 65" | Hospitals, weather, taxes, a retired week | Link once from the cost section ("what a house you own costs a year at 65"). Do not repeat the tax rules. Every "is <town> a good place to retire" suggestion goes there. |
| /buyers/relocating/healthcare/ | "hospitals in Myrtle Beach", "healthcare Myrtle Beach" | Six hospitals, three approved | Link once when the page mentions hospitals near care homes. No hospital list here. |
| /buyers/property-taxes/ | Horry County tax rate, homestead exemption math | | Link only if the exemption is named. |
| /sell/sell-or-buy-first/, /sell/out-of-state-buyers/, /sell/capital-gains/, /sell/inherited-house/, /sell/home-value/ | Their own seller questions | Nothing on care | Link from the "sell the house" offer section where the reader needs them next. |

Searches this page owns (none is claimed by a sibling page; checked in titles, H2s and keywords of all 144 pages):

| Search | US monthly (DataForSEO) |
|---|---|
| assisted living myrtle beach / assisted living in myrtle beach sc | 590 / 590 |
| senior living myrtle beach | 260 |
| independent living myrtle beach | 90 |
| assisted living in conway sc / conway sc assisted living | 170 / 170 |
| assisted living in murrells inlet (sc) | 170 / 170 |
| assisted living in pawleys island (sc) | 70 / 70 |
| memory care myrtle beach, nursing homes myrtle beach, retirement homes myrtle beach, senior apartments myrtle beach, how much is assisted living in myrtle beach, assisted living in north myrtle beach / little river / garden city / socastee / carolina forest | no volume returned; all are live suggestions |

"Retirement communities myrtle beach" (390) stays with the 55+ hub, because the hub lists it and Google's own suggestions for it return "55+ communities" first. This page may use the words "retirement community" only for the two state-licensed continuing-care campuses, which is what the state calls them.

## 2. What people ask, ranked

Rank = search volume, then how many suggestion variants ask it.

| # | Question (reader's words) | Why they typed it | Deciding fact | Status |
|---|---|---|---|---|
| 1 | How much is assisted living in Myrtle Beach? ("assisted living myrtle beach cost per month", "senior living prices") | An adult child or a couple sizing the money before calling anyone | CareScout 2025 survey, Myrtle Beach-Conway-North Myrtle Beach: $5,850 a month median (facts 1 to 5) | Answered |
| 2 | Where is assisted living around Myrtle Beach? ("assisted living in conway / murrells inlet / north myrtle beach / little river / pawleys island / carolina forest / socastee / garden city") | They want a list near a person or near family | SC DPH licensed list: 20 in Horry County, 23 in the Grand Strand towns, counts and beds by town (facts 8 to 14) | Answered, by town, as licensing facts only |
| 3 | Assisted living vs independent living vs nursing home: what is the difference? (PAA-type; "is independent living cheaper than assisted living") | They do not know which level a parent needs | DPH's own comparison sheet, Reg. 60-84 limits on who assisted living may keep, CCRC Act definition (facts 15 to 22) | Answered |
| 4 | Memory care Myrtle Beach ("memory care facilities", "memory care conway sc", "average cost of memory care") | A diagnosis in the family | 14 of 20 licensed assisted living homes in Horry County are listed as giving Alzheimer's care, 13 with a special unit (fact 12; the field meaning needs the verifier). No local memory care price exists in the survey. | Count answered; price: say there is no published local figure, offer to get quotes |
| 5 | Does Medicare pay for assisted living in SC? Does Medicaid? ("nursing homes in myrtle beach that accept medicaid") | Planning how to pay | Medicare does not pay for long-term care (fact 23). SC's OSS helps low-income residents of licensed homes and "is not a Medicaid program" (fact 24). 7 of 8 Horry nursing homes are Medicare and Medicaid certified (fact 26) | Answered |
| 6 | Independent living / senior apartments in Myrtle Beach ("for rent", "under $500", "under $1000") | Wants a smaller place without care | Independent living is not licensed by the state; HUD lists 4 assisted apartment buildings for older adults in Horry County (fact 27) | Answered briefly; the real-estate answer is buying a smaller home (section 6 of PLAN) |
| 7 | Continuing care / Brightwater / Lakes at Litchfield ("brightwater myrtle beach", "brightwater retirement") | Considering a campus with an entrance fee | SC licenses 34 CCRCs; 2 on the Grand Strand (fact 19). The law gives 30 days to cancel and a refund less costs (fact 21) | Answered as licensing and law facts; no fees for named campuses (no published survey) |
| 8 | When does buying a home still make sense? (no direct search; the reason behind "retirement homes for sale", "myrtle beach senior condos for sale", "55+ condos") | A healthy couple or a parent who wants to stay independent | Home care costs $31 an hour here (fact 4); a $400,000 house at 65 costs about $1,380 a year in county tax and fees (fact 31, carried) | Answered with costs, no payment, no rate |
| 9 | What about hurricanes? (asked by families of residents; "do assisted living homes evacuate") | Fear for a parent on the coast | Reg. 60-84 1401: each licensed home keeps a written evacuation plan made with the county, updated yearly, open to residents and families (fact 18) | Answered in one FAQ line |
| 10 | Respite care, adult day care, home care in Myrtle Beach | A family caregiver needs help | Adult day care: 3 licensed centers in Horry County; $1,560 a month for 5 days a week (facts 5, 14) | One FAQ line |

Searches left off on purpose: "assisted living jobs" and "brightwater jobs" (not our reader); "brightwater complaints/reviews" and "best assisted living" (we do not rate or rank named homes; the page says where official inspection reports are); "horry county retirement system" (a pension, not housing).

## 3. What the top results do, and how to beat them

The results for "assisted living myrtle beach" are directory sites (caring.com, seniorly.com, seniorhousingnet.com, payingforseniorcare.com) found by today's web search. They list homes with "get pricing" forms and quote older cost figures that disagree with each other (a search today returned $5,625 and $5,850 for the same area, and $3,694 and $5,060 for Conway). None of them gives the state's licensed count by town, the state rules on who assisted living can keep, the continuing-care cancellation law, or the choice between moving into care and buying a home that fits. Those four are this page's edge.
