# Everything wrong with chapter3realty.com

Audit date: 2026-10-01 to 2026-10-02.

## How the site was audited

**Source.** The live site, compared with branch `claude/github-account-check-wutg8b` of the website repo, commit `511a2a5`. Its pages match production except for the undeployed stylesheet (T7).

**Seven reviews, each written up under `audit/evidence/`:**

| Review | Evidence file | What it covered |
|---|---|---|
| Technical | `technical.md` | Crawl, live HTTP checks and the site's own `build.js`. |
| Rendering and forms | `render-qa.md` | Every page at 1280 and 375 pixels, every form and every calculator, with 27 screenshots in `shots/`. |
| Facts | `facts.md` | Claims checked against primary sources, and every fact compared across pages. |
| Compliance and brand | `compliance.md` | Real estate advertising, RESPA, Reg Z, TCPA, fair housing, privacy and the brand. |
| Editorial | `editorial.md` | 27 pages read in full, plus content strategy. |
| Search presence | `offsite-search.md` | Indexing, rankings, AI answers, Google Business Profile, citations and reviews. |
| Performance and accessibility | `perf-a11y.md` | Lighthouse and axe. |

**How claims were checked.** Every Critical item, and most High items, were re-checked by hand against the source code or a primary source before going on this list.

**This is not legal advice.** Every compliance item marked Critical or High needs a South Carolina real estate attorney, and RESPA counsel where RESPA is named.

**Severity**

| Level | Meaning |
|---|---|
| Critical | Costing leads now, or a legal exposure now. |
| High | Visible harm to readers, rankings or trust. |
| Medium | A real defect with limited reach. |
| Low | Polish. |

## Fix this week

In order. Every item is confirmed.

1. **Leads are being thrown away.** Two forms show "thank you" and never send:
   - "Send me matching listings", the property-search pop-up on **every page**.
   - "Get a specialized agent", on `/invest/` and `/why-chapter-3/`.

   Each calls `c3SendForm()` without a `consent` field. That function stops when `consent` is missing (`if (!crm.consent) { ... return; }`). The visitor sees "Check your inbox shortly."

   Two more forms fail the same way: the off-market form on `/buyers/buying-in-myrtle-beach/` and the report gate on `/invest/long-term-rental/`. The report gate also collects a phone number with no consent box at all.

   **Fix:** pass `consent: box.checked ? 'yes' : 'no'` in each call, and add the locked consent checkbox to the report gate. Then test that each form reaches the CRM. (Render R-C1, R-C2.)

2. **"Same company" and "own mortgage team".** These pages say the brokerage and BrickWood are one business, which the owner says is false and called illegal:
   - `/buyers/relocating/`, four sentences.
   - `/buyers/va-loans/`, one sentence.
   - `/buyers/`: "We are a brokerage with our own mortgage team".
   - `/why-chapter-3/`: "One team for real estate and financing."
   - `/buyers/condo-in-litigation/`: "A Real Deal We Underwrote".
   - `/invest/`: "The investor loan menu at BrickWood".
   - The footer on all 131 pages: "DSCR financing". AI answers now repeat this as Chapter3 "offering DSCR financing".

   **Fix:** rewrite each line. Change the footer to "DSCR analysis". (Compliance C1, H3, H11; Editorial; Off-site 3.)

3. **The referral-benefit disclosure.** The footer says a BrickWood referral "may provide Chapter3 Realty a financial or other benefit". Without common ownership, the compliance review reads that as a possible RESPA Section 8 problem and possible unlicensed mortgage brokering under SC 37-22.

   **Fix:** ask counsel this week. Answer owner question D1 (does anyone receive anything of value from BrickWood?) first. (Compliance C2.)

4. **Banned licence claims still live.**
   - The meta and social descriptions of `/invest/non-warrantable-condos/` say "From a licensed agent and MLO."
   - `/about/` advertises Tim Nash's loan-originator licence, NMLS 252563.

   **Fix:** remove both, and ask counsel about the dual role. (Compliance C3, C4.)

5. **The Google Maps API key is unrestricted.** Anyone can copy it from page source and bill Geocoding, Places and Static Maps calls to the account.

   **Fix:** restrict it to the site's domain and the Maps JavaScript API, and set a quota cap. (Technical T1.)

6. **Both GitHub repos are public.** The website repo holds the owner's verbatim answers, including notes marked "Do NOT publish", plus licensing-review and attorney notes. Both repos rank for the brand name.

   **Fix:** make `Chapter3-Website` and `Blog-Brain` private. (Technical T2; Off-site 7.)

7. **North Myrtle Beach rental rules are wrong.** `/submarkets/north-myrtle-beach/` says rentals need an annual permit, a safety inspection and a Responsible Local Agent within 30 miles. The city's own page says: "There is currently no special zoning or permit process required beyond standard licensing."

   **Fix:** rewrite the section from nmb.us/833. (Facts.)

8. **`%s` placeholders on two pages.** The "Our AI document analysis" box on `/hoa/special-assessments/` and `/hoa/reserves/` shows `%s` as its heading and body. It promotes a tool that does not exist.

   **Fix:** delete the box until the tool exists. (Technical T4, Render R-C4, Compliance M11.)

9. **Interest rates and payments on owner-occupied pages.**
   - `/buyers/cost-to-own/` opens with 20% down, a 7% rate and a 30-year term filled in.
   - `/buyers/closing-costs/` opens with 10% down and 6.5%.
   - `/buyers/va-loans/` says a program raises the rate "by an average of 2 percentage points".
   - `/market-reports/july-2026/` states a 6.55 percent mortgage rate, now wrong in direction too: 7.28 percent on 2026-10-01, against 6.34 a year earlier.

   **Fix:** leave rate and down-payment boxes empty. Remove the stated rates. (Compliance H4, Facts, Render R-M3.)

10. **Tim Nash's licence shows at another brokerage off-site.** Homes.com and land.com show licence 43182 at Seaside Realty, phone 843-455-9959. The realtors' association lists Chapter3 with that same phone.

    **Fix:** the broker confirms the licence transfer with the SC Real Estate Commission and the MLS, then corrects every listing. (Off-site 2, 4.)

11. **No Google Business Profile was found**, and there are no reviews anywhere.

    **Fix:** create and verify the profile, then ask every past client for a review. (Off-site 1, 6.)

12. **Unsourced testimonials.** Five anonymous five-star testimonials sit on the homepage of a firm launched in May 2026. AI answers quote them as evidence.

    **Fix:** confirm a real, documented source for each one, or remove them. (Compliance H2; Off-site 6.)

13. **The privacy policy describes a form service the site does not use.** It names Web3Forms. Forms actually post to the CRM, and Slack gets an alert. It also leaves out Google Maps, GA4 events, browser storage and SMS.

    **Fix:** rewrite it to match what the site does. (Compliance H5.)

14. **The FAQ on `/sell/` and `/buyers/buying-in-myrtle-beach/` cannot be used on phones.** A sticky block covers the questions from 320 to 480 pixels wide, and 0 of 18 questions take a tap.

    **Fix:** one CSS line, `position: static`, inside the existing mobile rule. (Render R-C3.)

15. **Unbalanced markup on 11 pages.** The 8 submarket pages, `/invest/`, `/buyers/coastal-insurance/` and `/buyers/relocating/cost-of-living/`.

    **Fix:** balance the tags, and make `build.js` treat this as an error, not a warning. (Technical T3.)

## The complete list

Each line gives the severity, the problem, where it is, and the fix. The ID points to the evidence file:

- **T** is `technical.md`.
- **R** is `render-qa.md`.
- **F** is `facts.md`.
- **C** is `compliance.md`.
- **E** is `editorial.md`.
- **O** is `offsite-search.md`.
- **P** is `perf-a11y.md`.

### 1. Leads and forms

| Sev | Problem | Where | Fix | Ref |
|---|---|---|---|---|
| Critical | 4 forms show success and drop the lead (no `consent` passed) | Property search on all pages; specialist form on /invest/ and /why-chapter-3/; off-market form; report gate | Pass consent. Then test each form end to end. | R-C1 |
| Critical | Report gate takes a phone number with no TCPA consent box | /invest/long-term-rental/ | Add the locked consent checkbox | R-C2 |
| High | About 35 forms accept "not-an-email" and a phone of "12" or "abc" | Sitewide, and the popup | One shared validator | R-H1 |
| High | Leads may be shared with BrickWood, but the consent names only Chapter 3 Realty | Privacy policy vs consent text | Counsel: either stop sharing or change the disclosure | C-H6 |
| Medium | Forms will not send unless the call and text consent box is ticked, so an email-only inquiry is impossible | All forms | Let the form send without SMS consent. Record consent separately. | C-M5 |
| Medium | Several forms fail validation silently, with no error text | Various | Show an inline message | R-M1 |
| Medium | Placeholder text is the only label | Many lead forms | Visible labels (PLAYBOOK A29e) | R-M2 |
| Medium | No privacy or SMS terms link at any of the 299 consent boxes | Sitewide | Link the privacy policy next to every box | C-M6 |
| Medium | Monthly messages are promised but not covered by the consent | /why-chapter-3/ | Narrow the promise or widen the consent | C-M7 |
| Low | The pop-up promises a response time; response times are promised five different ways sitewide | Sitewide | One promise the team can keep | C-L6, E |
| Low | The search modal button has `width:100%%` | Sitewide | Fix the CSS typo | R-L6 |

### 2. Compliance, licensing and claims

| Sev | Problem | Where | Fix | Ref |
|---|---|---|---|---|
| Critical | "Same company" and "own mortgage team" claims | /buyers/relocating/, /buyers/va-loans/, /buyers/, /why-chapter-3/, /invest/, /buyers/condo-in-litigation/ | Rewrite. Add a `build.js` gate for the meaning, not the phrasing. | C-C1, E |
| Critical | The referral-benefit disclosure may describe an illegal referral payment | Footer, all pages; /about/ | Counsel | C-C2 |
| Critical | "licensed agent and MLO" in meta and social descriptions | /invest/non-warrantable-condos/ | Remove. Scan the meta tags too. | C-C3 |
| Critical | Tim's loan-originator licence advertised | /about/ | Remove; counsel on the dual role | C-C4 |
| Critical | "Chapter III Realty" cannot be used until registered with the Real Estate Commission, and "Chapter3 Realty Corp" must still appear on every page (SC 40-57-135) | Rename plan | Register first. See the brand section. | C-C5 |
| High | Devin, who is not licensed, is the pricing contact for sellers ("Devin runs operations and pricing") | /sell/ | Make the broker the pricing contact | C-H1 |
| High | Five anonymous testimonials | Homepage | Source each, or remove (16 CFR 465) | C-H2 |
| High | "Equal Housing Lender" and "our lender" wording | /buyers/programs/ and others | "Equal Housing Opportunity"; "our lending partner" | C-H3 |
| High | Reg Z trigger terms in calculator defaults and copy. The `build.js` gate strips calculator inputs before it scans. | /buyers/cost-to-own/, /buyers/closing-costs/, /buyers/programs/, /buyers/va-loans/ | Empty the defaults; make the gate scan input values | C-H4 |
| High | The privacy policy does not match what the site does | /privacy/ | Rewrite | C-H5 |
| High | Experience and client statistics a five-month-old firm cannot support: "We have closed in every submarket"; "nine in ten of Chapter3's investor clients"; about 25 "in Chapter3's files" statistics; "18 years of loan files" (BrickWood's) | /about/, /invest/llc/ and others | Attribute each to Tim's career or to BrickWood, or cut it. Owner question D7. | C-H7, E |
| High | Unsupported superlatives: "No other local brokerage offers this"; "buyers often say Chapter3 Realty is the best brokerage" | Several | Cut | C-H8 |
| High | The site's own rule files still name Devin as a licensed MLO with NMLS 2721275, the entity as "LLC", and Paul Hankins | BRAND.md, HANDOFF.md, PLAYBOOK locked strings | Update the docs, so the next session does not reintroduce them | C-H9 |
| High | BrickWood co-marketing pages say "under one roof", "in-house lender", and describe a two-way referral | `brickwood-partnership/` in the repo | Counsel before any of it is published | C-H10 |
| High | The footer offers "DSCR financing" | All pages | "DSCR analysis" | C-H11, O |
| High | "Off-market homes before they hit the public sites" promised to the public | Search modal, all pages | Remove (MLS and Clear Cooperation rules) | C-H12 |
| Medium | The AfBA disclosure is not in the required format | Footer | Counsel | C-M1 |
| Medium | 18 pages name BrickWood with no inline disclosure. The gate fires only on a link to BrickWood's site. | 18 pages | Gate on the name | C-M2 |
| Medium | Fair housing: "best schools in Horry County", "most popular landing spot for families", "suits retirees" | /buyers/relocating/ and others | Describe property and geography only | C-M3 |
| Medium | "Your agent costs you nothing" | Buyer pages | Remove | C-M4 |
| Medium | Statements about BrickWood's fees and its role conflict | Several | One approved sentence | C-M8 |
| Medium | The Reg Z allowlist includes /invest/non-warrantable-condos/, whose copy covers primary homes | build.js | Remove it from the list, or make the page investor-only | C-M9 |
| Medium | Document-reading and tax-paperwork copy may read as legal work | HOA and tax pages | Attorney review of the wording | C-M12 |
| Medium | "Our closing attorney" | Several | "the closing attorney" | C-M13 |
| Medium | "agents" when one licensee is named | Several | Match the real headcount | C-M15 |
| Medium | "Supervises every transaction" and "reviews every page" | Several | Describe the role | C-M16 |
| Medium | The accessibility statement claims contrast the site does not meet | /accessibility/ | Fix the contrast, or the claim | C-M17, R-H3 |
| Low | Fair-housing phrases about guests and tenants; incomplete fair-housing page; generic "realtor"; founder inconsistency; legal-entity variants; removed person's photo still public; gaps in the terms of use | Various | See the file | C-L2 to C-L14 |

### 3. Facts

| Sev | Problem | Where | Fix | Ref |
|---|---|---|---|---|
| Critical | North Myrtle Beach rental rules invented: permit, inspection and a local agent within 30 miles | /submarkets/north-myrtle-beach/ | Rewrite from nmb.us/833 | F |
| High | The 48-hour HOA budget notice stated without the nonprofit-corporation exemption (27-30-140(2)); the document-access right stated without its limit | /hoa/south-carolina-hoa-laws/, /hoa/benefits/, /hoa/developer-control-turnover/ | Add the exemptions. HANDOFF already lists this as a known trap. | F |
| High | SC 2026 deduction stated as a flat $15,000 / $30,000. Under Act 110 it phases out to $0 at $95,000 AGI single and $190,000 joint. | 5 relocation pages | Rewrite | F |
| High | **Calculator bug:** the relocation tax calculator ignores that phase-out, understating SC tax by about $995 a year for a $150,000 joint household | /buyers/relocating/cost-of-living/ and 10 state pages | Fix the calculator | F |
| High | Age-65 and retirement deductions shown as stacking; the statute reduces one by the other | from-pennsylvania, from-maryland, from-north-carolina, from-virginia | Rewrite. A known HANDOFF trap, back again. | F |
| High | Rental vs residence property tax called "close to double". It is 3.3 to 4.3 times. | /invest/, /invest/condos/, 8 submarket pages | Use the figure /buyers/property-taxes/ owns, and link to it | F, E |
| High | Wind pool territory line misstated ("Highway 17 Business"; the Intracoastal line is the rule for other counties) | /buyers/coastal-insurance/, /submarkets/carolina-forest/ | Quote 38-75-310(5)(c) | F |
| High | Palmetto Heroes said to raise the rate "by an average of 2 percentage points" | /buyers/va-loans/ | Remove | F |
| High | Pawleys Island said to straddle the county line. It is entirely in Georgetown County. A known HANDOFF fact, regressed. | /buyers/relocating/which-town/ | Fix | F |
| Medium | Myrtle Beach lodging tax: 10% vs 13% vs about 8.5% | Submarket page vs /invest/str-rules/ vs a third | 13%, owned by one page | F, E |
| Medium | Market numbers conflict: median change +10.5% vs -1.4%; days on market 103 vs 121; months of supply 4.5 vs 4.3 | /sell/, buying guide, market report | One owner page per figure (A22e) | E, F |
| Medium | Buyer closing costs: 2-3%, 2-4% and 2-5% | Buyer pages | One figure, one owner page | E |
| Medium | State short-stay line: "not the state 30" (it is 90) | /submarkets/myrtle-beach/ | Fix | F |
| Medium | Unincorporated Horry STR rules: "a permit" vs "no permit" | Two pages | Verify, and give one answer | E |
| Medium | Annual visitors: 17M, 18.2M, 19M and 19M+ | Several | One sourced figure | F |
| Medium | Out-of-state buyer share: 40% vs 60%+, neither sourced | Several | Source it or cut it | F |
| Medium | Typical home value: $310,000 vs $342,000 vs $329,000 | Several | One owner page | F |
| Medium | The "illustrative" occupancy charts average 44 to 53% (peaks 91%); the measured figure printed below them is 30 to 38% | 8 submarket pages | Remove the illustrative charts. Chart the measured data. | F, E |
| Medium | McLeod Carolina Forest hospital still "in progress". It opened on August 27, 2026. | 2 pages | Update | F |
| Medium | Murrells Inlet said to be entirely in Georgetown County. It straddles the line. | /invest/where-to-buy/ | Fix | F |
| Medium | 2026 millage certified on July 27 (North Myrtle Beach 45.0 to 50.0; Conway 98.1 to 101.3); 4 calculators and the copy still use 2025 | Property tax pages and calculators | Update the data file | F |
| Medium | The LLC page contradicts itself on multi-member deeds; the non-warrantable FAQ states a superseded 5% deductible rule | /invest/llc/, /invest/non-warrantable-condos/ | Fix | F |
| Medium | Withholding duty put on the closing attorney (the statute puts it on the buyer); LLC withholding test misstated; deed fee put on the buyer | /sell/, /invest/llc/, /buyers/common-mistakes/ | Fix | F |
| Medium | "SC law requires a buyer agreement before touring". That is the NAR settlement rule, not state law. | /buyers/common-mistakes/ | Fix | F |
| Medium | "All conventional, FHA and VA loans decline litigation", overstated; the veterans' free-tuition story overstates eligibility | /buyers/condo-in-litigation/, /buyers/retirees/ | Fix. Confirm with SC Veterans' Affairs. | E |
| Medium | "Seven jurisdictions" whose breakdown sums to six; Atlantic Beach and Briarcliffe Acres missing sitewide | /invest/str-rules/ | Fix | E |
| Low | Stale items: Palmetto Heroes round closed April 13; programs source dated 2025; mortgage credit certificate ended June 30; past CCU dates; undated "this year"; overlay called a "2025 ordinance" (adopted 2024-12-10) | Various | Update on a 90-day schedule | F |
| Info | 14 claims could not be verified, including visitor counts, lodging totals and insurance ranges | Various | Source or soften | F |

### 4. Content and strategy

| Sev | Problem | Where | Fix | Ref |
|---|---|---|---|---|
| High | Titles ask a question the page never answers with a number: home value, condo investment, reserves, cost to sell, HOA fees, first-time buyer affordability | Several | Answer in the first 30 words with the figure the site already has (STANDARD A2, A3) | E |
| High | One market report, July 2026 with June data. It was promised monthly. The hub calls its figures "illustrative". A competitor has published August and September. | /market-reports/ | Publish monthly from a data file, or drop the promise | E, F |
| High | Templated families repeat text. The 8 submarket pages share one 24-heading layout and 30 identical sentences, including the same off-leash dog story on all 8. The ten "moving from" pages share 31 sentences and 25-38% of their text. | /submarkets/, /buyers/relocating/from-*/ | Rebuild on local facts. /submarkets/carolina-forest/ is the model. | E, T |
| High | 6 pages show "Coming soon" property-search boxes, and the search is a pop-up with no crawlable listing pages | Sitewide | Ship IDX, or remove "coming soon" | E, O |
| Medium | /guides/ claims to list every guide but leaves out 53 pages, including all 16 HOA pages | /guides/ | Generate the hub from the page list | E |
| Medium | The "complete walk-through" on the buyers hub has no step-by-step process; /sell/ is 5,384 words with three FAQ blocks | /buyers/, /sell/ | Restructure | E |
| Medium | Cannibalization between overlapping pages, e.g. the condo pages and the STR rules pages | See the file | Merge, or give each a distinct query | E |
| Medium | The literal-register rules now hide what readers search for: unnamed forms (ITIN, W-8ECI); the 15% reserve rule effective 2027-01-04 hidden by the ban on naming its source; 22-26% of sentences on some pages are 5 words or fewer | /hoa/, /invest/canadian-buyers/ | Owner decision: allow official names once per page | E |
| Medium | Missing topics: monthly market updates; the SC purchase contract (due diligence, earnest money); coastal inspection; the reserve rule; the Section 1808 conversion overlay; guest and occupancy limits; "homes under $X" pages; buyer agency; Market Common, Socastee, Grande Dunes, Cherry Grove and Atlantic Beach; probate and divorce sales (claimed as specialties) | | Backlog | E |
| Medium | 31 pages have no reviewer in the byline | | One byline format | E |
| Medium | The DST page is a promotional guest paragraph from an out-of-state financial planner, with his phone number, on a securities product | /invest/strategies/dst/ | Owner decision | E, T16 |
| Low | 111 pages lack an attributed sentence from a named licensee; 88 have fewer than half their headings as questions; 57 banned "sets" or "carry" phrasings remain on older pages; 18 H1s name no place | | Lane U sweeps | T |

### 5. Rendering, layout and tools

| Sev | Problem | Where | Fix | Ref |
|---|---|---|---|---|
| Critical | The FAQ is covered by a sticky block on phones | /sell/, /buyers/buying-in-myrtle-beach/ | `position: static` in the mobile rule | R-C3 |
| Critical | `%s` placeholders | /hoa/special-assessments/, /hoa/reserves/ | Delete the box | R-C4, T4 |
| High | The rental analyzer contradicts itself: -$109 vs -$1,147 a month, 2.1% vs 1.05% cap rate, and a $3.2M "property value" for an 1,100 sq ft condo | /invest/long-term-rental/ | Build the text from the computed values. Never use a building's parcel value. | R-H2 |
| High | Text under 3:1 contrast: 2.52:1 on /sell/; 2.23:1 on 5 buyer pages; brass on ivory-2 at 2.76:1 on 102 pages | Sitewide | A darker brass for text | R-H3 |
| High | Chart labels cut off; one reads "0% of nights booked" (it is 30%) | /invest/rental-returns/ | Widen the margin | R-H4 |
| High | All 19 charts on 14 pages render 4-8px text on a phone | 14 pages | A mobile layout, or a scrolling wrapper | R-H5 |
| High | /map/: Google's "alpha channel" banner covers the menu button on phones, and there is no 2D fallback | /map/ | Use the stable channel, and add a fallback | R-H6 |
| High | Unbalanced markup | 11 pages | Balance the tags; make it a build error | T3 |
| Medium | Button text clipped at 320; chart legend cut off | Homepage, /invest/what-is-being-built/ | Fix | R-M4, R-M5 |
| Low | "$-64,240" formatting; impossible inputs accepted (120% down, term 0); label collisions; step numbers at 1.35:1; tap targets of 16-20px; tables scroll with no cue | Various | See the file | R-L1 to R-L8 |

### 6. Technical and infrastructure

| Sev | Problem | Fix | Ref |
|---|---|---|---|
| Critical | Google Maps key unrestricted | Restrict it, set a quota cap and a billing alert | T1 |
| Critical | Both repos public, with private material | Make them private | T2 |
| Medium | 3 broken source links: the market report's source domain does not exist (`coastalcarolinas.org`; the real one is `ccarsc.org`); scstatehouse t62.php is a 404; a census.gov press kit is a 404 | Fix the URLs | T5 |
| Medium | The repo branch is ahead of production. The undeployed homepage redesign and its stylesheet would ship with any fix. | Decide on the redesign before the next deploy | T7 |
| Medium | GitHub `main` is from July | Merge the live branch | T8 |
| Medium | llms.txt lists "DSCR loan qualification" as a specialty and makes an unsupported comparative claim | Rewrite | T17 |
| Medium | 83 of 127 sitemap dates are the same day | Honest updates will spread them | T9 |
| Low | Cloudflare bot script on every page; Email Obfuscation on; no CSP or `frame-ancestors`; video and team photos cached 4 hours; DMARC `p=none`; 4 pages with one inbound link; 2 `tel:` links without +1; the DST page has no Article image | See the file | T10 to T16 |

### 7. Search presence and off-site

| Sev | Problem | Fix | Ref |
|---|---|---|---|
| Critical | No Google Business Profile found | Create and verify one: "Real estate agency", 573 Vista Drive, 854.333.2135 | O-1 |
| Critical | Tim's licence and phone shown at Seaside Realty off-site; the realtors' association lists Chapter3 with a different phone | Broker confirms the licence; correct every listing | O-2, O-4 |
| High | About 18 of 127 URLs visible in the indexes that could be reached. No /hoa/ or /buyers/relocating/ page appears. | Search Console: submit the sitemap, request indexing, earn links | O |
| High | Ranks for 1 of 20 target queries (#8, with the wrong page). No AI answer cites the site. | Content fixes plus off-site authority | O |
| High | Zero independent reviews | A review program | O-6 |
| High | Tim's experience: 30+ years on the site, 15 on Homes.com, about 10 on BrickWood | The owner states one figure everywhere | O-5 |
| High | Thin backlinks: only CCAR links in; BrickWood does not link | BrickWood bios, the Chamber, Bing Places, Zillow and Realtor.com profiles | O-8 |
| Medium | `sameAs`: Facebook and Instagram could not be verified; YouTube has 10 subscribers, no description and no link back | Fix the profiles; add the CCAR URL | O-9 |
| Medium | Schema geo about 5.5 km off; the header says "Myrtle Beach, SC" for a Murrells Inlet office | Fix both | O-10, O-11 |
| Medium | Stale index snippets: "a brokerage that has its own lender and 18 years of local loan data" | Request reindexing after the copy fix | O |
| Medium | Brand: "Chapter III Realty" matches nothing, and chapteriiirealty.com appears unregistered | Register the domains now, and decide the name | O-12 |
| Low | No LinkedIn company page | Create one | O-14 |

### 8. Performance and accessibility

See `evidence/perf-a11y.md`. Summary added below when that review completes.

## What was checked and is clean

**Technical**

- All 127 URLs return 200.
- Redirects are single-hop.
- A missing page returns a real 404.
- No repo files are served.
- No broken internal links or anchors.
- Canonicals, sitemap and llms.txt coverage are correct.
- JSON-LD is valid and the organization data is consistent.
- AI crawlers are allowed.
- Assets are cached and compressed.
- No console errors, failed assets or sideways scrolling.

**Compliance**

- All 299 consent strings are byte-identical, and none is pre-checked.
- No NMLS 2721275 and no Paul Hankins anywhere.
- Licence numbers are consistent.
- No conclusions about named buildings.
- The 55+ page is handled correctly.

**Calculators.** Ten matched about 100 hand-computed cases, including typed 0 and a 0% rate.

**Facts.** 56 claims were verified against primary sources.

## Questions only the owner (and counsel) can answer

1. Does Chapter3, Tim or any employee receive anything of value from BrickWood? This decides the footer disclosure (C-C2).
2. Is NMLS 252563 active, and who sponsors it? (C-C4)
3. Where did each homepage testimonial come from? (C-H2)
4. How many licensees work under the broker-in-charge? (C-M15)
5. Is Chapter3 a CCAR MLS participant and a REALTOR member? (C-H12, O)
6. Has "Chapter III Realty" been registered with the Real Estate Commission? Is the name final? (C-C5, O-12)
7. Where do the "in Chapter3's files" statistics come from: Tim's career, BrickWood, or this firm? (C-H7)
8. Is Tim's licence transferred to Chapter3? How many years should the site state? (O-2, O-5)
9. May a page name an official rule or form once, where people search for it by name (ITIN, W-8ECI, the 15% reserve rule)? (E)
10. Keep the out-of-state financial planner's DST page? (E)
11. Ship the homepage redesign with the next deploy, or hold it? (T7)

## Why this happened, and what stops it next time

Each root cause below has a fix in Blog-Brain. See `STANDARD.md`, `WORKFLOW.md` and `tools/`.

**1. The compliance gates match phrasings, not claims.**

- "Under one roof" was banned. "Same company", "own mortgage team" and "one team for real estate and financing" were not, so the same claim came back in new words.
- **Fix:** a claims ledger. Every claim about who Chapter3 is, what it does and who it works with gets one approved sentence. Any sentence about Chapter3 and a lender must match an approved sentence (STANDARD C1).

**2. The gates skip surfaces where claims live:**

- meta and social descriptions
- calculator default values
- llms.txt
- the footer
- the search modal

**Fix:** `tools/claims-scan.js` scans every surface, with the same banned list.

**3. Forms were checked for validation, never for delivery.**

- No test confirmed that a submitted form reaches the CRM.
- **Fix:** WORKFLOW step 7 adds a delivery test. Every form's `c3SendForm` call is captured and must carry `consent`. `site-audit.js` checks this statically.

**4. Facts were copied between pages.**

- 12 facts now disagree across pages.
- **Fix:** a facts registry (`facts/registry.json`). One value, source and as-of date per fact. Pages cite the registry, and a scan flags any other value (STANDARD A12).

**5. Nothing re-checks facts on a schedule.**

- Millage, deductions, programs and the market report all went stale within four months.
- **Fix:** every registry entry has a "stale by" date. `site-audit.js` lists entries past it.

**6. Old pages are exempt from new rules.**

- 57 banned phrasings and the Pawleys and stacking errors survive on older pages.
- **Fix:** Lane U sweeps on a schedule. A rule that is good for new pages is run against every page within 30 days.

**7. Templated families were built by swapping names.**

- **Fix:** STANDARD S10 now counts all text, at the site's 25% line, and is a gate for every page in a family.

**8. The rule files themselves went stale.**

- BRAND.md and PLAYBOOK still carry the banned MLO line, which invites the next session to reintroduce it.
- **Fix:** update them in the same commit as the rule change (WORKFLOW).

**9. Off-site work was never started.**

- No profile, no reviews, wrong listings.
- Pages alone cannot rank a five-month-old domain with no reviews.
- **Fix:** an off-site checklist in WORKFLOW, done once and reviewed monthly.
