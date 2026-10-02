# Editorial audit: chapter3realty.com content

Date: 2026-10-01.

Source: the deployed copy at `scratchpad/live/chapter3realty`. Text was pulled from `<main>` of every page with cheerio. Quotes below are exact, copied from that text.

Who this is for: the owner, and whoever writes the next page.

What was read in full (30 pages): `/`, `/about/`, `/why-chapter-3/`, `/contact/`, `/buyers/`, `/buyers/buying-in-myrtle-beach/`, `/buyers/first-time-home-buyer-myrtle-beach/`, `/buyers/retirees/`, `/buyers/condo-in-litigation/`, `/buyers/closing-costs/`, `/buyers/relocating/from-new-jersey/`, `/hoa/`, `/hoa/special-assessments/`, `/hoa/reserves/`, `/hoa/documents/`, `/invest/`, `/invest/rental-returns/`, `/invest/str-rules/`, `/invest/condos/`, `/invest/accommodations-tax/`, `/sell/`, `/sell/home-value/`, `/sell/net-proceeds/`, `/submarkets/myrtle-beach/`, `/market-reports/`, `/market-reports/july-2026/`, `/guides/`.

Read in part: `/buyers/relocating/`, `/submarkets/conway/`, `/invest/strategies/dst/`, `/invest/canadian-buyers/`, `/buyers/property-taxes/`, the other relocation and submarket pages (by structure and shared sentences).

Measured across all 132 pages: shared sentences in the two templated families, hub coverage, inbound links, byline formats, FAQ answer openers, and a set of phrase counts. Counts are from `<main>` text, so they include CTA blocks and forms.

The prior automated study (`STUDY.md`) covered structure: images, tables, short answers, headings. This audit covers what a reader notices: whether the page answers its own question, whether pages agree with each other, whether claims are supported, and whether the copy reads well.

---

## Part 1. The ten most important problems, ranked by impact

1. **The site contradicts itself on the numbers a reader cares about most.** The property tax gap, buyer closing costs, the market's direction, days on market, months of supply, the lodging tax total and the state short-stay threshold each have two to four different values on different pages. Full table in Part 3, section H. A reader who sees two of them stops trusting both. An AI engine that sees two of them quotes neither.
2. **Pages still offer financing and quote interest rates, against the owner's standing rules.** `/buyers/` says "We are a brokerage with our own mortgage team". `/invest/` has "The investor loan menu at BrickWood" and an "Ask us" for "Conventional, VA, and FHA". `/buyers/condo-in-litigation/` is headed "A Real Deal We Underwrote". `/market-reports/july-2026/` states "the national 30-year fixed averaged 6.55 percent". Each one breaks CLAUDE.md non-negotiable 3 or PLAYBOOK A17b.
3. **Many title questions are not answered.** "What is my home worth in Myrtle Beach", "Are Myrtle Beach condos a good investment?", "Can this association pay for its own roof?", "Cost to sell a house in South Carolina" and the first-time buyer page's promise of "What a first-time buyer can afford" all get "it depends", a process description, or a calculator that shows "$0". The figures exist on other pages of the site.
4. **The market report is stale, and the site says it is monthly.** One report exists: July 2026, with June data. The site says "We publish this every month" and "updated every month". The report hub says "Until the monthly report launches". It also calls its own figures "illustrative". Competitors already published August and September 2026 updates.
5. **Data is invented and labeled "illustrative" on a site that sells itself on data.** Eight submarket pages and the report hub carry an "illustrative" monthly occupancy chart. On `/submarkets/myrtle-beach/` that chart averages about 52 percent occupancy and peaks in July. The measured figure printed right below it is "33.2% occupancy" and "June is the strongest month".
6. **Trust claims are unsupported, inconsistent, or conflict with licensing rules.**
   - Response time is promised five different ways: "Instant replies", "same day", "within 24 hours", "24hr", and "usually within a day or two".
   - Firm experience is claimed before the firm existed: "We have closed in every submarket from Little River to Pawleys Island" (A11e).
   - Superlatives have no source: "No other local brokerage offers this", "The best communication in the business", "buyers often say Chapter3 Realty is the best brokerage".
   - Statistics have no source: "#2 fastest-growing metro" and "19 million reasons".
   - The about page and the homepage describe Devin's role differently.
7. **Hubs and directories are incomplete link lists.**
   - `/guides/` says it lists "Every Myrtle Beach guide, calculator, community directory and market report on this site". It omits 53 content pages, including all 16 HOA pages and 27 investor pages.
   - `/buyers/` sends the reader to a "complete walk-through... from first look to closing day". That page has no step-by-step process section.
8. **The templated families repeat the same text.**
   - Eight of nine submarket pages use one 24-heading skeleton.
   - The same 30 sentences appear on four or more of them, including the "classic trap" about a dog trained to walk off leash, on 8 pages.
   - The ten "moving from" pages share 31 sentences on every page, and 34 to 40 percent of their 8-word sequences.
9. **Statements are wrong or overstated.**
   - "Conventional, FHA and VA loans all decline a condo building in litigation." Fannie Mae accepts some kinds of litigation.
   - Retirees are told their children can attend college tuition-free "because they were veterans". The state program requires a qualifying condition (100 percent disability, Purple Heart, POW and others) and South Carolina residency at entry into service.
   - `/buyers/buying-in-myrtle-beach/` says unincorporated Horry County requires an STR "permit". `/invest/str-rules/` says "no county STR permit".
   - `/hoa/documents/` turns a statistic about complainants into "Most Grand Strand buyers see the HOA documents after they own the property."
10. **The literal register, applied hard, now removes what the reader needs to act, and some pages read as staccato.**
    - "You will need a U.S. tax number... One form stops that." The page does not name the form (W-8ECI) or the number (ITIN).
    - The ban on naming rule-writing bodies hides the "Fannie Mae 15 percent reserve rule". That is the exact phrase condo buyers and sellers will search before January 4, 2027.
    - On `/hoa/` and `/invest/canadian-buyers/`, 23 to 26 percent of sentences are five words or fewer.

---

## Part 2. Per-page findings

Format: each defect has a quote and, where useful, the fix.

### `/` (homepage)

- **Title promises numbers, page has none.** Title: "Myrtle Beach Real Estate, By the Numbers". The only figures are "30+ years" and "1:1". Fix: put three sourced market figures from the report on the homepage, or change the title.
- **H1 is generic.** "Myrtle Beach Real Estate". Every brokerage in the market can use it. The sub-header, "Buy, sell and invest from Pawleys Island to the North Carolina line, with a specialized real estate agent.", does not say who Chapter3 is.
  - Rewrite the sub-header: "Chapter3 Realty is a Myrtle Beach brokerage led by Tim Nash, a broker with 30 years on the Grand Strand. We check the HOA, the flood history and the permits before you offer."
- **Who stands behind the firm is not on the first screen.**
  - The first screen does not name the licensed broker.
  - The team block lists the Chief Marketing Officer first and the Broker-in-Charge last.
  - The licence number is only in the footer.
  - For a reader judging trust, the broker and his 30 years should come first.
- **Testimonials cannot be checked.** All five are anonymous ("Out-of-state buyer", "First-time buyer") and have no date or platform. One reads as marketing copy: "An agent who tells you when not to buy is one who earns your trust." Fix: link to the review platform, or give first name, town and year with consent.
- **Filler claims.**
  - "Clear communication / We avoid confusion and stress."
  - "comes up with exceptional new ideas for our customers."
  - "Instant replies / Weekends included". This disagrees with "within 24 hours" on `/contact/` and "A reply within 24 hours, usually faster".
- **"I am a Buyer" goes to `/buyers/buying-in-myrtle-beach/`, not to `/buyers/`.** Sellers and investors land on their hubs. Buyers land on a single article.
- **No path to the content.**
  - The body links to only `/about/`, `/contact/`, `/invest/`, `/sell/` and one buyer article.
  - It does not link to the market report, `/guides/`, `/hoa/` or `/submarkets/`.
  - The 120 articles are the site's best asset, and the homepage body does not show them.
- **The FAQ says what is different without showing it.** "A data-first approach." The homepage shows no data.

### `/about/`

- **Firm experience claimed from before the firm existed (A11e).**
  - "30+ years on the Grand Strand under our Broker-in-Charge. We have closed in every submarket from Little River to Pawleys Island."
  - "18 years of local loan files through BrickWood Mortgage. We know what makes Grand Strand deals close". These are the lender's files, not Chapter3's.
  - Fix: "Tim Nash has closed sales in every submarket from Little River to Pawleys Island over 30 years."
- **The two descriptions of Devin disagree.**
  - Homepage: "Devin runs the day-to-day operations".
  - About: "Devin Day, Operations Officer. Abdulla Hijazi, Chief Marketing Officer. Both are marketing specialists who build the technology on this site".
  - `/sell/`: "Devin runs operations and pricing".
  - Pick one description and use it on every page.
- **"Agents" with no named agents.** "agents with decades of local selling experience", "every client works directly with a licensed agent". Tim Nash is the only licensed person named anywhere on the site. Fix: name each licensed agent with a licence number, or say "Tim Nash and the agents he supervises".
- **Unsupported superlatives.**
  - "The best communication in the business".
  - "data tools other Myrtle Beach brokerages can't match" (meta description).
  - These fail SALESY in spirit and give the reader nothing to check.
- **Fragment tricolon.** "Building-by-building ROI data. Live rental comps. Real STR regulatory guidance by municipality." PLAYBOOK A11 bans the tricolon.
- **The lender text conflicts with the owner's rule.** The page lists Tim's MLO licence ("NMLS 252563"). It also carries the BrickWood block and "a lending partner who works with us daily". Read together, a reader takes Chapter3 to be part lender. The disclosure is correct. The emphasis is not.
- **Dead end.** The body links only to `/` and `/contact/`. It does not link to Tim's reviewed articles, the market report or the guides.

### `/why-chapter-3/`

- **Much of the page breaks the owner's banned-register rules.**
  - Aphorisms (A18): "Communication is our product." "the best communication wins." "Complexity doesn't slow us down."
  - No X. No Y. (A11): "No scripts, no runaround, no unanswered calls."
  - Personification: "The two don't cancel each other out: they make each other stronger."
  - Contrast framing: "Proof, not promises". "Zillow gives you a formula. We give you the facts."
  - Self-description: "The honest truth". "Most brokerages are the same. That is the problem."
  - Idioms: "before a cent of earnest money is on the line", "as many of the association's financials as we can get our hands on".
- **It knocks competitors.** "Too many agents justify their commission by reminding you the seller pays it". A reader who is weighing another agent reads this as a pitch, not information.
- **The page contradicts itself and the site.**
  - "We are a young, ambitious team" against "30+ Years of Grand Strand expertise".
  - "8 Neighborhoods covered" against nine submarket pages.
  - "24hr Response commitment" against "Instant replies" on the homepage.
- **The specialty list promises pages that do not exist.** "Divorce real estate... Foreclosures." There is no divorce page. `/invest/foreclosures/` exists but is not linked.
- **A big promise with no detail.** "Every month after you buy, you hear from us with... historical facts about the property, an updated investor report, real-time alerts when new permits are filed near you, and appreciation reports." Fix: show one sample report, or cut the promise.
- **The heading "One team for real estate and financing." conflicts with A17b.** Fix: "We work with a preferred lender. You can use any lender."
- **Duplicates `/about/`.** "What a data-driven brokerage means" repeats the four tiles on `/about/` ("30+ years", "Preferred lender", "Free tools", "Permit data").
- **The byline has no reviewer.** "By Devin Day, Operations Officer · Chapter3 Realty".

### `/contact/`

- **Placeholder text on the live page.** "Browse Active MLS Listings (Coming Soon)". The same "Search homes for sale in Myrtle Beach...Coming soon" box is on five buyer pages: retirees, relocating, second-home, va-loans and common-mistakes. Fix: remove it until search exists.
- **The office and the brand disagree.** "contact a Chapter3 agent in Murrells Inlet" and "Office 573 Vista Drive, Murrells Inlet... By appointment only". Every title says Myrtle Beach. That is fine, but say it once plainly: "Our office is in Murrells Inlet. We work the whole Grand Strand."

### `/buyers/` (hub)

- **It violates the financing rule (A17b) in its first section.** Heading: "Your agent, and financing when you need it". Body: "We are a brokerage with our own mortgage team, so the person showing you homes and the person handling your loan share an office." This also conflicts with `/about/` ("You are never required to use BrickWood"). Fix: cut the section, or "We work with a preferred lender. You can use any lender."
- **It is a link list, not a guide.** Twelve links joined by "·" with no description of what each one answers. It omits `/buyers/cost-to-own/`, `/buyers/new-construction/`, `/buyers/waterfront-homes/` and `/buyers/undisclosed-flooding/`.
- **Its FAQ contradicts other pages.**
  - "a second home or rental is taxed at 6 percent, three to four times more". This agrees with `/buyers/property-taxes/` (3.3 to 4.3 times). It disagrees with 13 other pages that say "close to double".
  - "How much do I need for a down payment...? Often less than you expect." This is a hedge. A11d asks for the number.
- **Idiom.** "a team of experts that are on the same page".

### `/buyers/buying-in-myrtle-beach/`

- **It does not keep its promise.** `/buyers/` calls this "The complete walk-through of buying on the Grand Strand, from first look to closing day". The page has no step-by-step process. Its sections are condo mistakes, appreciation, single-family mistakes, a market snapshot and an FAQ.
- **The page contradicts itself four times.**
  - "4.5mo Inventory" against the FAQ's "4.3 months".
  - "103d Avg days on market" against the FAQ's "121-day average".
  - "9.2 months Inventory · Condos" against the market report's 7.6.
  - "+10.5% Median Price YoY" against the market report's "-1.4%".
  - PLAYBOOK A22e records that the "+10.5%" tile was removed from `/invest/` because "no area matched" it. It is still on this page and on `/sell/`.
- **The appreciation section is one-sided.** "Why Grand Strand homes keep appreciating." It has a dotted line projected to 2030. The site's own rental page says "Over the last three years the same measure fell 1.7 percent." The market report says "Prices are flat".
- **Its facts disagree with the specialist pages.**
  - "Single-family homes in unincorporated Horry County generally allow STR with a permit." `/invest/str-rules/` says "no county STR permit".
  - "A condotel... only eligible for cash or portfolio loans". `/invest/condos/` says DSCR loans "are a common fit".
  - "Total buyer closing costs typically run 2-4%". `/buyers/closing-costs/` says "2 to 5 percent".
  - "a pending $15,000 special assessment you inherit at closing". `/hoa/special-assessments/` says an assessment charged before closing "belongs to the seller".
- **Unsourced and weak sources.**
  - "More golf per capita than anywhere in the US."
  - "230 Sunny Days".
  - "Named the 4th most affordable beach town in America by House Beautiful".
  - "people are voting with their feet" (idiom).
- **Self-praise in the FAQ.** "That mix of honesty and local depth is why buyers often say Chapter3 Realty is the best brokerage to buy a home from."
- **Misleading CTAs.** "Browse Homes" and "Get Off-Market Listings" both go to `/contact/`. The site has no listings. The off-market claim has no support.
- **Emoji icons in body copy** ("🏖", "⛳", "🌤", "💰") on a site that otherwise reads as plain.
- **The market snapshot is stale.** "Market Snapshot · As of June 20, 2026".

### `/buyers/first-time-home-buyer-myrtle-beach/`

- **The sub-header promises an answer the page never gives.** "What a first-time buyer can afford in Myrtle Beach". No price, no monthly figure, no example appears anywhere on the page. Starter-home prices exist on other pages (the $244,270 condo median and the $311,000 Conway year-to-date median in the market report).
- **It refuses the numbers on purpose.** "The exact dollar figures and income limits change, so rather than post numbers that go stale, we confirm the current ones". SC Housing publishes them. A11d bans refusals to answer. Fix: give this year's limits with a date and a link.
- **Broken sentence.** "The main forms: Run the actual number with our SC closing costs calculator." The colon introduces a list, and a CTA sentence sits between it and the list.
- **Two links with different labels go to the same page.** "See South Carolina housing programs →" and "Lender down-payment assistance →" both point to `/buyers/programs/`.
- **Financing language.**
  - Eyebrow: "The one-roof advantage".
  - "handled by one team that talks to each other".
  - Meta: "low-rate loans".
  - All three read as an offer of financing (A17b).
- **Idioms.** "fewer dropped balls", "the tricky stuff", "before you fall in love with a place", "can change the math overnight", "before you fall for a house", "Prices climb the closer you get to the water".
- **Five-plus-word parenthetical (A15.2).** "(See our Affiliated Business Arrangement disclosure in the footer for how that relationship works.)"
- **It misleads on insurance.** "Your lender will usually require only hazard insurance, plus flood insurance". Three lines above, the page says wind and hail are "often a separate policy". A lender on this coast requires wind cover. The same sentence is on `/buyers/retirees/`.
- **The most important first-timer fact is missing.** The 4 percent legal residence rate, and that the buyer must apply for it, is not on this page.
- **Comma splice.** "The exact cash to close depends on your loan and program, a licensed agent and lender can tell you your real number."
- **The order is wrong.** Down-payment help, the main reason a first-timer comes, is placed after the "Keep going" link block near the bottom.

### `/buyers/retirees/`

- **The page opens with an FAQ.** There is no introduction. Then there are two FAQ blocks, with overlapping questions and different answers:
  - "Is Myrtle Beach a good place to retire year-round?" Answer: "Yes, with some caveats."
  - "Is Myrtle Beach a good place to retire?" Answer: "It consistently ranks among the top U.S. retirement destinations". No source.
  - The property-tax answer appears three times.
- **The sub-header promises a comparison the page does not make.** "Del Webb, Cresswind, Barefoot Resort and Murrells Inlet compared on financials, HOA governance and lifestyle". No financials or governance are compared. Murrells Inlet is a town, not a community.
- **Verdicts on named communities (non-negotiable 5).** "Del Webb at Grande Dunes is the most established active adult community with resort-level amenities". "Cresswind at Market Common is the most walkable option".
- **It contradicts itself.** The first FAQ says "For a quieter lifestyle, Murrells Inlet". Later: "Pawleys Island or Murrells Inlet: more lively, on the water".
- **The veteran tuition claim is overstated.** "Because they were veterans, their kids started attending Coastal Carolina University tuition-free." The state program requires a qualifying condition (killed, POW or MIA, Purple Heart, Medal of Honor, or 100 percent disability) and South Carolina residency at entry into service. A retiree from New York reading this will think they qualify. Fix: list the conditions, or cut the story until the owner confirms it.
- **Insensitive and banned phrasing.**
  - "expecting third-world prices".
  - "spending like crazy".
  - "The Grand Strand hands you a real head start. The retirees who win are the ones who protect it" (personification and aphorism).
  - "knocks the first slice of your home's value off the tax rolls".
  - "South Carolina is kind to retirees, but not identically kind".
  - "how you want to spend a Tuesday".
- **Repetition.** "perks that surprise people... the one that surprises people" in back-to-back sentences.
- **Unsupported claims.** "The medical infrastructure has expanded significantly over the past decade". "some of them overcharge badly for basic amenities".
- **Statements written as questions.** The "Mistakes" FAQ uses question markup for statements: "Q: Buying in a community without reviewing HOA financials".
- **The byline has no title and no reviewer.** "By Devin Day · Chapter3 Realty". This is the only page with this form.
- **The title lacks the brand.** "Retire to Myrtle Beach, SC | Grand Strand Retirement Guide".

### `/buyers/condo-in-litigation/`

- **The H1 question gets a story, not an answer.** H1: "Can you buy a condo that is in litigation?" The first paragraph: "A buyer in the area was set on a specific oceanfront unit." The answer sits in an H2: "Yes, you can often buy it, and it can be the best deal available". The three ways to buy (cash, a portfolio loan, waiting for the case to resolve) are never set out together.
- **The eyebrow implies lending.** "A Real Deal We Underwrote". Chapter3 does not underwrite loans (non-negotiable 3, A17b).
- **The central claim is too absolute.** "Conventional, FHA and VA loans all decline a condo building in litigation." Fannie Mae accepts some litigation: minor suits, suits covered by insurance, and suits where the HOA is the plaintiff collecting dues. The FAQ softens this to "Usually not", so the page also contradicts itself. The body also names "Fannie Mae, Freddie Mac" (A11a).
- **The headline result has no number.** The meta promises "how one buyer got a steep oceanfront discount". No dollar or percent figure is given.
- **The disclaimer undercuts a true story.** "This is one buyer's outcome, shared for illustration". PLAYBOOK A11e bans the blanket "illustrative" disclaimer on true stories. It makes the story read as invented.
- **Metaphor and personification.** "the litigation cloud hung over the project", "the reading carried on, and the details told a different story", "claw it back", "lock it up", "The play", "the thing that looks like a reason to run is the reason you get the deal" (aphorism).
- **Jargon not defined.** "warrantability standard" is used in the body before it is glossed. The gloss appears only in the FAQ. "a limited legal window" is never named (the statute of repose).
- **Missing sub-questions.**
  - How do I find out a building is in litigation? (HOA questionnaire, estoppel, county court index.)
  - What kinds of litigation do lenders accept?
  - Does my earnest money come back if the case does not resolve?
- **Dead end.** Two internal links out.

### `/buyers/closing-costs/`

- One of the stronger pages. Defects:
- **It does not give a total for a typical purchase.** "plan on roughly 2 to 5 percent" is a wide range. Fix: show a $300,000 and a $400,000 Horry County purchase, line by line, from the calculator's own defaults.
- **It refuses the VA funding fee.**
  - FAQ: "What is the VA funding fee in 2026?" The answer gives no percent.
  - Body: "A first use with nothing down is high on the schedule".
  - The rate is published by the VA and is not an interest rate. Give it.
- **Owner bans in the body.** "since a 1987 state Supreme Court ruling". "The statute is S.C. Code Title 12, Chapter 24". "Two things set it". "rates are set by each insurance company". "the complete math lives in our Horry County property tax calculator".
- **It competes with `/sell/net-proceeds/`.** The meta is "Calculate both sides". The seller side duplicates the net proceeds page.
- **The byline format differs from most pages.** "Published July 20, 2026". The schema dateModified is 2026-09-07. Most pages say "Updated".

### `/buyers/relocating/from-new-jersey/`

- Strong on substance. Defects:
- **The title asks a question the short answer does not answer.** Title: "Moving From New Jersey to Myrtle Beach: What You Save". The short answer: "The property tax line decides this comparison for most households. Each line is explained below." Fix: "On average, a New Jersey household saves about $X a year on property tax alone. A $400,000 home here bills about $1,470 a year."
- **The table compares the wrong area.** "Typical home value, July 2026 | New York metro area about $737,000 | About $342,000". It is New Jersey's page, and the South Carolina figure has no area named.
- **Search engines see zeros.** Before JavaScript runs, the calculator renders "Income tax | $0 | $0", "Property tax | $0 | $0".
- **A 260-word wall.** The calculator note runs "An estimate, not a fact... Your accountant gives you the final answer". It uses capitals for emphasis ("RAISE", "LOWER"). It is identical on all ten state pages.
- **Self-description and metaphor.**
  - "The property tax drop, done honestly".
  - "do the honest version".
  - "the comparison flatters the move".
  - "it does not travel".
  - "The cap is a cliff".
  - "This is the number that makes people move."
  - "Clothing gains a tax, gas loses one".
- **The brand spelling changes.** "Chapter 3 Realty is a real estate brokerage" in the author box. "Chapter3" everywhere else. "Chapter 3 Realty" appears on 35 pages, mostly in the TCPA string and author boxes.
- **A third response promise.** "We reach out the same day, evenings included."
- **Confusing comparison.** "the largest per-gallon drop of any state we compare except Pennsylvania". Say "the second largest".

### `/buyers/relocating/` (hub, partial read)

- **Fair Housing risk.**
  - "Myrtle Beach city schools trend lower in performance ratings. If schools are a priority, filter your search to the Carolina Forest and North Myrtle Beach areas."
  - Steering by school quality is the kind of statement HUD advertising guidance warns about.
  - It also conflicts with `/submarkets/myrtle-beach/`, which reports Myrtle Beach High "Math proficiency 68% (state average 43%)".
- **Unsourced statistics.**
  - "40 percent of Myrtle Beach buyers relocate from out of state".
  - "approximately 7% below the national average".
  - The 40 percent figure disagrees with `/sell/` ("Most Myrtle Beach buyers come from NY, NJ, NC, PA, OH, and VA") and with "A large share" elsewhere.
- **It overlaps `/buyers/buying-in-myrtle-beach/`.** Both carry a remote-buying FAQ, a mistakes list, a pre-approval pitch and a "which town" section.

### `/hoa/` (hub)

- **The #1 question has no number.** Title: "Myrtle Beach HOA Fees: What They Cover". There is no fee range anywhere on the page. `/buyers/retirees/` says "over $2,000 a month". `/buyers/buying-in-myrtle-beach/` says "$400/month" and "$600/month". `/invest/condo-buildings/` has published fees for 29 buildings. Fix: a table of typical monthly dues by property type, from that page's data.
- **It misreads a statistic.** "Horry County files more HOA complaints than any other county". Residents file complaints, not the county.
- **Speculation.** "Dense condo and planned-community development in a fast-growing coastal market is the likely driver."
- **Salesy and unsupported.** "Newer agents struggle to steer a buyer to the right community simply because they have not seen enough of them. We have." Chapter3 is itself a new brokerage.
- **Teaser question.** "When was the last time you read the big contract? We will."
- **Too many CTAs.** "Have us review an HOA" four times, plus "If you have any questions while reading, call 854.333.2135." on a 1,400-word page.
- **Owner bans.** It names "The South Carolina Department of Consumer Affairs" (A11a). "That association's budget sets what the fee buys" (A22a). "the building is buying them for you".
- **The legal notice contradicts the byline.** "information here was verified in July 2026". The byline says "Updated September 7, 2026".

### `/hoa/special-assessments/`

- **Template residue.** "Our AI document analysis / %s / %s". Known (STUDY). The heading also promises an AI product that does not exist on the page.
- **No numbers.** "On a coastal condo building it can run into the thousands per unit." No Grand Strand example, no range, no date.
- **The sources do not support the page.** The sources line is the same boilerplate on every HOA page. It cites the HOA complaint report and the HOA Act. The page uses no figure from the report. The HOA Act does not govern special assessments. PLAYBOOK A19: "A link is not a source."
- **The most practical answer is missing.** HO-6 loss assessment coverage can pay part of an assessment. The page does not mention it or link `/hoa/master-insurance-ho6/`. Also missing:
  - Can it be paid in installments?
  - What happens if I cannot pay? (link `/hoa/liens-and-foreclosure/`)
  - Is it deductible? (link `/hoa/tax-deductible/`)
- **Personification.** "it does not care that you only just bought", "the shortfall is waiting", "not a law of nature", "the line gets blurry", "the classic setup".
- **Grammar.** "Thin reserves against an aging roof or elevator is the classic setup."

### `/hoa/reserves/`

- **The H1 is a teaser, never answered.** "Can this association pay for its own roof?" The owner bans teaser question headers.
- **No benchmark for the key number.** "Percent funded... Higher is safer." There is no threshold. `/buyers/buying-in-myrtle-beach/` gives one: "A healthy HOA has a funded reserve ratio above 70%". Fix: put the benchmark here, on the page that owns the topic.
- **The most time-sensitive news is buried and incomplete.**
  - "has announced a rise to 15 percent for loan applications dated on or after January 4, 2027". This is correct.
  - It is the one HOA fact with a deadline three months away, and it gets one sentence.
  - The page leaves out that a qualifying reserve study is an alternative to the 15 percent budget line.
  - The owner's ban on naming Fannie Mae and on dates fights the search phrase here.
- **Metaphor.** "two pots of money", "the closest thing to a financial x-ray of a building", "arrives as a special assessment with your name on it", "raid reserves", "the gap usually closes".
- **Template residue.** "%s / %s".
- **It overlaps `/hoa/special-assessments/`.** Both cover reserves, percent funded and minutes.

### `/hoa/documents/`

- **A statistic is generalized beyond its sample.**
  - Sub-header: "Most Grand Strand buyers see the HOA documents after they own the property."
  - The source is the state complaint report: "only 32 percent of the homeowners who filed a complaint said they had received the governing documents before they bought". That is a statewide sample of people who complained.
  - Fix: "Of the South Carolina owners who filed an HOA complaint in 2025, 53 percent got the documents after they bought."
- **Editorial aside.** "That is an agent failure, plainly." "The fix is unglamorous".
- **"sets" (A22a).** "sets the promises attached to the property itself".
- **Good content.** The document list is the most useful thing in the HOA section. It should be a table: document, what it shows, who provides it, when to ask.

### `/invest/` (hub)

- **The hero offers loans.** "DSCR, condotel and non-warrantable condo loans through BrickWood Mortgage." Also:
  - "The investor loan menu at BrickWood".
  - "finances nearly every investor strategy on this site".
  - "Conventional, VA, and FHA for house hackers. Ask us".
  - All of these break A17b. Fix: describe the loan types with links to the explainers. Say once that Chapter3 works with a preferred lender.
- **Its numbers contradict other pages.**
  - Closing costs "Roughly 2 to 3 percent". `/buyers/closing-costs/` says 2 to 5.
  - Investor property tax "close to double". `/buyers/property-taxes/` says 3.3 to 4.3 times.
- **Unsourced tiles.** "19M+ Visitors a year", "#2 Fastest-growing US metro", "Under $200K Oceanfront condo entry" have no source and no date. The four tiles above them are dated and sourced, so the gap is visible.
- **Broken card.** "For active investors Foreclosure sales are one source: how the Horry County sale works." A link sentence has been pasted into the sub-label.
- **A link wall.** Step 6 is a 200-word paragraph of 14 links: "...A buyer in Canada has four extra steps. A house for J-1 summer students has a lawful bed count..."
- **The counts disagree.** "Four ways to invest" and "6 Myrtle Beach investment strategies" sit on the same page.
- **"Grand investor tool".** The name reads like a typo. It points to `/invest/long-term-rental/`, whose H1 is "Long-Term Rental Investment Analyzer".
- **Stale.** The directory card for STR rules says "Verified July 2026".
- **Unsupported.** Meta: "off-market deals".

### `/invest/rental-returns/`

- The highest-scoring page (92). A reader with a calculator will still find these defects.
- **The method sets the result.**
  - Every area uses one rent: "The county's three-bedroom benchmark rent is $1,823... either way".
  - That rent is divided by the "cheaper third" price, which in the Myrtle Beach city core is mostly small condos.
  - So "price alone decides the order", as the page admits.
  - A $160,703 unit in the city core is unlikely to rent at the three-bedroom benchmark. The 7.5 percent lead for Myrtle Beach is a result of the method, not of the market.
  - Fix: match the rent to the bedroom count the price buys, or say plainly that the ranking is driven by price because the rent is held constant.
- **The walk-away rules reject most of the page's own data.**
  - "Cap rate | Below 6 percent, walk". By the page's table, only Myrtle Beach (7.5) and Surfside (6.6) clear it with a manager.
  - "Occupancy | Below 60 percent a year, walk". The page says "The average listing books only 30 to 38 percent".
  - Fix: say so directly. "By these rules, most houses in six of the eight areas fail. We look for the few that pass."
- **The same measure is stated two ways.**
  - Tile: "−0.6 over three". The text says "fell 1.7 percent" and the FAQ says "fell 1.7 percent in total". These are the same measure, once per year and once in total, and the tile does not say which.
  - Occupancy: the body says "30 to 38 percent". The FAQ says "The middle listing books 25 to 36 percent". Average and median are not distinguished.
- **The short answer's range leaves out a row.** "A Horry County rental costs about $160,703 to $263,914". The table includes Pawleys Island at $320,314, which is in Georgetown County.
- **Unsupported claims.** "including off-market properties that never reach the public sites". "Enough houses here do that. Accepting less makes no sense."
- **An optimistic projection.** "The blue blocks grow at 6.1 percent a year". The five-year rate on the same page is 4.8 and the three-year is negative.
- **Ambiguous "6 percent tax".** "covering management, cleaning, utilities, platform fees, the 6 percent tax and insurance". It could be read as the property tax ratio or a lodging tax.

### `/invest/str-rules/`

- **The jurisdiction count is wrong.**
  - "Legally it is seven jurisdictions: two cities, two towns, and two counties' unincorporated areas". That adds to six.
  - Myrtle Beach, North Myrtle Beach and Conway are three cities.
  - Atlantic Beach and Briarcliffe Acres, coastal towns between Myrtle Beach and North Myrtle Beach, are not mentioned anywhere on the site.
- **The licence rules contradict each other.**
  - Body: "unincorporated Georgetown County requires none either".
  - FAQ: "In every jurisdiction except the Town of Pawleys Island, yes".
- **The lodging tax total disagrees with three other pages.**
  - This page: City of Myrtle Beach "13%".
  - `/invest/accommodations-tax/`: "South Carolina charges 7 percent. Your county or city adds 1 to 3 percent". That is 8 to 10 percent total.
  - `/submarkets/myrtle-beach/`: "a 10 percent lodging tax".
  - The investor gets three totals for one address.
- **Stale on the most volatile item.**
  - "It has not been adopted as of July 2026".
  - "Rules verified July 19, 2026".
  - "If you are reading this months later, ask us what changed."
  - It is now months later. The North Myrtle Beach ordinance status must be re-checked (STANDARD T4, 90-day review for STR pages).
- **A fragment before the table.** "What guests pay in total: State accommodations tax rules: SC Department of Revenue."
- **Personification and metaphor.** "differ by line on the map" (the exact phrase family A22 banned). "the market watching new rules most closely". "The city wants that stock to stay short-term". "the rules above flip". "Every rental is a business in the town's eyes".
- **The bottom CTA does not match the page.** "Need the rules checked for one address?" is followed by "Send us an address you are looking at, or have us send you an investment property for sale. We will run the rent, the expenses and the association documents". The same block is on several invest pages.

### `/invest/condos/`

- **The title question gets no verdict.** "Are Myrtle Beach condos a good investment?" Body: "They can be excellent and they can be money pits". FAQ: "They can be." A11d asks for "on average, yes or no", then the figures.
  - The site has the figures: Myrtle Beach city condos "down about 13 percent" (market report), STR cap rates of 3.4 percent at average occupancy (rental-returns), and condo supply of 7.6 months.
  - An honest answer: "On average, not right now for cash flow. Myrtle Beach city condo prices fell about 13 percent in the year to June 2026, and the average nightly listing returns about 3.4 percent. The ones that work..."
- **The meta promises fees it never gives.** "Fees included." No fee figure appears.
- **Unsupported.** "can outperform most coastal rental markets on price alone". "Many of the best-performing condo buildings have the most aggressive and expensive on-site management companies. We see this pattern most often". No figure, no example.
- **A misplaced sentence.** "What a furnished unit can write off in its first year is on our cost segregation page." It sits in the financing section.
- **Idiom and aphorism.** "money pits", "the difference between a condo that pays you and one that mostly pays its manager", "Judge those three, not the countertops."
- **It is thin and overlaps six other condo pages** (see Part 3A).

### `/invest/accommodations-tax/`

- Rewritten after the owner's hour on it. Clearer than most pages. Defects:
- **Its rates contradict `/invest/str-rules/`.** The local table lists only hospitality fees: "Inside a Horry County city | 1.5% hospitality fee". It leaves out the city accommodations taxes and the Myrtle Beach tourism fee that the STR rules page counts to reach 12 to 13 percent. One page understates what a guest pays by 3 to 4 points.
- **The furnishings return contradicts the STR rules page.** Here: "ask your CPA whether a Horry County unit owes it too". `/invest/str-rules/`: Horry County expects "a personal property return on your furnishings every April".
- **"set" (A22a), on a page held to the strict rule.** "It sets which office you file with." "That is the rule set by the state revenue department." "There is one exemption, set by the state revenue department".
- **Mislabel.** "Below is a chart of the taxes". It is a table.
- **A tax-avoidance pitch.** "Our specialized investment agents can help you buy in the correct county so that you avoid extra taxes." The difference is 1 to 3 points of a guest-paid tax. The line overstates the value and reads as a sales hook.
- **The bottom CTA is off-topic.** "Ask about an investment property for sale".
- **No worked example in dollars.** Fix: show what the guest pays on one $2,000 week in each county.
- **Staccato in places.** "Four things. All four can be checked before you write an offer. We check them for you." Join them: "You can check all four before you offer, and we check them for you."

### `/invest/strategies/dst/` (partial)

- **A guest author from out of state with a promotional paragraph.** "By Scott Efrusy, CFP®, Financial Planning Analyst, Horizon Advisers" (Plymouth, Michigan). His paragraph: "A DST (Delaware Statutory Trust) is a great tool for real estate investors to utilize". It breaks the register rules, has no local angle (A16), and ends with his phone number. The page refers investors to a seller of a securities product. Confirm the owner wants that referral on a brokerage page.

### `/sell/` (hub)

- **Too long, and the parts repeat.**
  - 5,384 words, three FAQ blocks, about 15 CTAs.
  - Sections that duplicate their own pages: inherited, out-of-state withholding, condo, net proceeds.
  - The page competes with every page under `/sell/`.
- **The market figures contradict each other and the report.**

| Claim on `/sell/` | Elsewhere on `/sell/` | Market report |
|---|---|---|
| "4.5 mo Months of Supply" | "approximately 4.3 months" | 4.3 |
| "103 days Avg. Days on Market" | "about 121 days" | 121 |
| "+10.5% Median Price YoY" | "balanced, leaning buyer-friendly" | -1.4% |
| "Well-priced homes still sell in 30-60 days" | | "closing at 97.3 percent of list in about four months" |
| "Peak buyer activity (Feb-Jul)" | FAQ: "Peak buyer activity runs March through June" | |

- **Unsupported precision.** "On a $350K home, a 5% overprice costs an estimated $14,000 to $21,000 in final proceeds and adds 47 or more days to sale." "Zillow and Redfin AVMs are routinely off by 10 to 25%". No source.
- **Unsourced headline claims.** "top 5 US vacation destination", "19 million reasons", "#2 Fastest-Growing Metro", "NC #1 Feeder Market 3 yrs", "7% Below National Cost of Living". The source line cites "Houzeo", a for-sale-by-owner listing site's blog.
- **Typo.** "Condo segment inventory runs approximately about 7.6 months".
- **Owner bans.** "Under South Carolina Code Section 27-50-250" (twice), "SC Code Section 27-50-10", "August 2024 NAR settlement" (A11a).
- **It contradicts the condo pages.** "Condotel / Hotel-Condo | Cash or portfolio loans only". `/invest/condos/` lists DSCR loans as "a common fit".
- **Claims a new brokerage cannot support.** "The vast majority of our listings are from out-of-state owners".
- **"Four things other Myrtle Beach listings do not get"** lists five items, 01 to 05.
- **The marketing site is not named.** "the front page of the marketing website we spend $3,800 a month advertising, a keyword domain". The seller cannot check it.
- **Unlicensed pricing.** "Devin runs operations and pricing, and he is the person who picks up the phone." CLAUDE.md says Tim Nash does the CMAs, and the page itself says "A licensed agent personally reviews your home". Pricing done by an unlicensed person, as written, is a licensing problem.
- **Banned register.** "High-tech. One dedicated agent. Total accountability." "No handoffs. No 'your agent is unavailable.'" "This call determines everything that follows". "You sign; you get wired." "The buyers are already here. And more are coming." "Your buyer already exists. They just don't know about your property yet."
- **The byline has no reviewer.**

### `/sell/home-value/`

- **The H1 question is never answered.** "What is my home worth in Myrtle Beach." The H1 ends with a period. The FAQ answer is "It depends on what similar homes near yours sold for". The page gives no median, no price per square foot, and no area table. The market report has area medians for seven towns. Fix: show that table here, dated, then the CMA offer.
- **Its advice on online estimates contradicts other pages.** "Start anywhere you like, including the online estimates. They are a useful first look". `/sell/` says AVMs are "routinely off by 10 to 25%". `/why-chapter-3/` says "Zillow gives you a formula. We give you the facts."
- **The response promise contradicts `/sell/`.** "We call the same day... the full analysis follows quickly, usually within a day or two". `/sell/` says "sends a verified pricing analysis within 24 hours".
- **Unsupported claims.** "Spring sales move fastest here." "move prices by tens of thousands of dollars".
- **Mostly a lead form.** About 1,000 words, with three CTAs and a form before any content.

### `/sell/net-proceeds/`

- **The title question has no total.** "Cost to sell a house in South Carolina". There is no "about X to Y percent of the price, all-in" and no worked example. Search engines see "Total selling costs $0".
- **Number format.** "1.85 dollars per 500 dollars", "300,000 dollar sale", "1,110 dollars". The rest of the site uses "$1.85". Digits are easier to read.
- **"set" (A22a).** "it is set by law". "competing offers set the price". The banned verb "sit" appears in "Homes that sit".
- **Off-topic.** The direct answer pivots to "Putting the money into a rental instead of a home? The investor strategies guide compares the six ways".
- **Jargon.** "under form I-290", twice, with no gloss.

### `/submarkets/myrtle-beach/` (template representative)

- **Three different short-stay definitions.**
  - "The city defines short-term as under 90 days (not the state 30)".
  - FAQ: "stricter than South Carolina's general 30-day threshold".
  - `/invest/accommodations-tax/` and `/invest/str-rules/` say the state tax applies to stays under 90 days.
- **Three different lodging tax totals.** "a 10 percent lodging tax" here, 13 percent on `/invest/str-rules/`, 8.5 percent implied on `/invest/accommodations-tax/`.
- **Invented chart beside real data.** "Typical short-term rental occupancy by month (illustrative)": July 90 percent, June 84 percent, average about 52. Directly below: "33.2% occupancy... June is the strongest month".
- **Seven price figures with no reconciliation.**
  - "near $315,000... down about 3 percent" (Zillow).
  - "$279,713" (`/invest/rental-returns/`).
  - "about $388,800" (Census).
  - "$330,000s to high $380,000s".
  - "$525,000" year-to-date (market report).
  - "$150,000 to $1,500,000+".
  - "high $180,000s to the mid $310,000s".
  - A reader cannot tell what a house costs.
- **A geography error that undercuts the STR message.** "Within the city, investor demand concentrates in a few distinct pockets... Carolina Forest is the dominant inland choice... Socastee providing the most approachable single-family entry." Carolina Forest and Socastee are unincorporated Horry County. That is the distinction `/invest/str-rules/` calls the most important one.
- **Unsupported.** "the right building can produce forty percent more revenue".
- **Repetition inside the page.**
  - Market Common "built on the old air-force base", twice.
  - The airport "minutes" away, three times.
  - Two school sections.
  - Two lifestyle sections ("lifestyle and amenities", "What it is like to live").
  - The 4 percent versus 6 percent rule, five times.
  - Condotel financing, three times.
- **It reads as an investor report for every reader.** Eyebrow "Myrtle Beach Investor Report", breadcrumb "Investor Hub", H1 "Myrtle Beach, SC Real Estate Market". The page is also the main result for people moving here.
- **Metaphor.** "the center of gravity for the entire Grand Strand", "two worlds", "behave like a normal residential market", "after the building takes its share".
- **Hedged FAQ.** "Is Myrtle Beach good for short-term rentals?" Answer: "It has the region's deepest tourist demand... though performance and short-term-rental rules vary". There is no yes or no.

### `/submarkets/conway/` (partial)

- **An STR chart on a page that says STR does not fit.** "Typical short-term rental occupancy by month (illustrative)". The same page says "Conway is a long-term-rental and appreciation play, not an Airbnb play."
- **It contradicts the returns page.** `/invest/rental-returns/` shows a Conway nightly rental beats a yearly lease at 34.7 percent occupancy, about the market average of 35 percent.
- **It understates the STR rule.** "Short-term rentals are allowed under City of Conway and Horry County rules". `/invest/str-rules/` adds "the district's zoning has to permit transient lodging".

### `/market-reports/` (hub)

- **It contradicts itself.** "Until the monthly report launches, these pages carry our sourced Grand Strand numbers." On `/market-reports/july-2026/`: "We publish this every month." `/guides/` says "updated every month".
- **It calls its own data illustrative.** "Those figures are illustrative and move every month, so treat them as a frame rather than a quote." FAQ: "The figures here are illustrative."
- **It refuses the number.** "What is the median home price in Myrtle Beach? As of mid-2026, median sale prices... vary by property type... Ask for a current report for actual figures." The July report linked from the same page has "$359,945".

### `/market-reports/july-2026/`

- **It states interest rates.** "the national 30-year fixed averaged 6.55 percent the week of July 16". The FAQ "What are mortgage rates right now?" repeats it. This breaks CLAUDE.md non-negotiable 3: "Never state a payment amount or an interest rate".
- **Stale.** June data, published July 19. Today is October 1. The August and September reports, with July and August data, are missing. Competitors published both ("What Do the August 2026 Numbers Say...", "September 2026 Market Update" on carolinacraftedhomes.com).
- **The area table is not explained.**
  - Every listed town's median ("Myrtle Beach $590,000") is above the regional single-family median of $359,945. The page does not say which areas pull the regional figure down.
  - It does not say whether the town figures are single-family or all homes.
- **Contrast framing and figurative verbs.** "Prices are flat, not falling." "That is not an oversupply story." "rides small sample sizes". "The exception cuts the other way". "it points down".
- **Good:** dated sources, a real table, and a takeaway for each type of reader. Keep the format and publish it monthly.

### `/guides/`

- **The directory is incomplete.** It claims "Every Myrtle Beach guide, calculator, community directory and market report on this site". It omits 53 content pages:
  - all 16 HOA pages;
  - `/buyers/cost-to-own/`, `/buyers/new-construction/`, `/buyers/waterfront-homes/`;
  - 27 investor pages, including `/invest/rental-returns/`, `/invest/accommodations-tax/`, `/invest/llc/` and `/invest/where-to-buy/`;
  - `/sell/home-value/`, `/sell/net-proceeds/`, `/sell/fsbo/`, `/sell/rental-property/`.
  - Last updated September 2, before the September batch.
- **Hyperbole.** "Why everyone is moving here". "Every storm since Hugo, told partly first person".

---

## Part 3. Sitewide content strategy

### A. Keyword cannibalization

Pages that answer the same query, with how they collide and what to do.

**1. "Buying a home in Myrtle Beach"**
- `/buyers/buying-in-myrtle-beach/`: "Buying a Home in Myrtle Beach | What You Need to Know".
- `/buyers/first-time-home-buyer-myrtle-beach/`.
- `/buyers/relocating/`: "Moving to Myrtle Beach".
- `/buyers/` hub, whose FAQ is "Buying a home in Myrtle Beach: FAQ".
- `/buyers/common-mistakes/`.
- All five carry buyer mistakes, a pre-approval pitch and an FAQ on steps or costs. Three have a mistakes list: buying-in, first-time and relocating.
- Fix:
  - Make `/buyers/buying-in-myrtle-beach/` the process page, with numbered steps from pre-approval to keys, timing and costs.
  - Move every mistakes list to `/buyers/common-mistakes/` and link to it.
  - Keep `/buyers/` as a hub with no FAQ that competes with the process page.

**2. Condos (seven pages)**
- `/invest/condos/` (is it a good investment), `/invest/condo-buildings/` (directory), `/invest/condotel-financing/`, `/invest/non-warrantable-condos/`, `/buyers/condo-in-litigation/`, `/invest/rental-program-vs-airbnb/`, `/sell/sell-my-condo/`.
- Two of them share keywords: condotel-financing's keyword list includes "non-warrantable condo loan", which is the non-warrantable page's subject.
- The "condotel financing" explanation is repeated on `/invest/condos/`, `/submarkets/myrtle-beach/`, `/buyers/buying-in-myrtle-beach/` and `/sell/`, and they disagree (DSCR "a common fit" against "Cash or portfolio loans only").
- Fix:
  - Make `/invest/non-warrantable-condos/` the one page for "which loans work on which building", with condotel as a section.
  - Have `/invest/condotel-financing/` hold only what is specific to condotels.
  - Make `/invest/condos/` the verdict page, with numbers.
  - Every other page links to the owner page and does not explain financing again.

**3. Short-term rental rules and taxes (ten pages)**
- `/invest/str-rules/`, `/invest/accommodations-tax/`, `/invest/str-setup/`, `/invest/14-day-rule/`, `/invest/str-tax-treatment/`, `/invest/where-to-buy/` (which also has "Grand Strand short-term rental zoning by city" in its keywords), `/invest/mid-term-rentals/` ("90 day rental rule"), `/invest/str-vs-ltr/`, `/invest/str-tools/` ("Short-Term Rental Investing in Myrtle Beach"), plus each submarket page's own STR section.
- Licence and tax facts are restated on at least five of these, and the restatements disagree (Part 3H).
- Fix:
  - `/invest/str-rules/` owns zoning and legality.
  - `/invest/accommodations-tax/` owns tax rates and licences.
  - The others link to them and do not restate a rate.
  - This is PLAYBOOK A22e ("one number, one source"), which the site already has and does not apply to these facts.
- `/invest/str-tools/` has a title that competes for the head term "short-term rental investing Myrtle Beach" with no unique answer. Retitle it to what it is, a set of tools.

**4. Returns and income**
- `/invest/rental-returns/`, `/invest/run-the-numbers/`, `/invest/airbnb-income/`, `/invest/str-vs-ltr/` and `/invest/long-term-rental/`.
- Airbnb revenue appears on `/invest/airbnb-income/`, `/invest/rental-returns/` and every submarket page. That is acceptable if they all read the same data file. They do today ($20,946 everywhere checked).

**5. Retirement**
- `/buyers/retirees/` against `/buyers/55-plus-communities/` (same communities, same Del Webb and Cresswind framing) and `/buyers/relocating/why-myrtle-beach/`.
- Fix: `/buyers/retirees/` should own taxes, healthcare and the pension check. Community comparisons go to the 55+ page.

**6. Selling**
- `/sell/` against `/sell/home-value/`, `/sell/net-proceeds/`, `/sell/capital-gains/`, `/sell/out-of-state-buyers/`, and the seller half of `/buyers/closing-costs/`.
- The hub duplicates each one in long sections.
- Fix:
  - Cut `/sell/` to the two-ways decision, the process, the marketing proof, and one link per situation.
  - Move the seller-side figures off `/buyers/closing-costs/`, or keep them there and drop the seller cost section from `/sell/`.

**7. About pages**
- `/about/` and `/why-chapter-3/` repeat the same four trust tiles. `/why-chapter-3/` also targets "Data-Driven Grand Strand Brokerage", the homepage's claim.
- Fix: `/about/` is people and licences. `/why-chapter-3/` is the process with one real example.

**8. Property tax**
- `/buyers/property-taxes/` owns the 4 percent versus 6 percent rule.
- Fourteen other pages explain it again, and eleven of them give a different multiple (Part 3H).

### B. Topic gaps

Checked against what the three named competitors publish (pages listed in their guides and blog indexes on 2026-10-01) and against common buyer and seller questions for this market. None of these has a page on chapter3realty.com.

| Gap | Why it matters | Competitor coverage |
|---|---|---|
| **Monthly market updates after July 2026** | The one recurring page type that brings return visits and fresh dates | carolinacraftedhomes.com: "What Do the August 2026 Numbers Say About the Myrtle Beach Housing Market?", "Did Myrtle Beach Just Flip Back in Buyers' Favor? \| September 2026 Market Update" |
| **The South Carolina purchase contract: due diligence period, due diligence fee, earnest money, timeline** | The main question a buyer asks after the offer is accepted, and it differs from other states. Mentioned on 10 pages, explained on none | General gap |
| **Home inspections on the coast** (what to inspect, CL-100, wind mitigation, septic) | "home inspection" appears on 1 page | General gap |
| **The Fannie Mae 15 percent reserve rule and Grand Strand condos** | Takes effect for applications from January 4, 2027. Condo owners and buyers are searching this now | Industry press since September 2026 |
| **Myrtle Beach conversion overlay ("Section 1808")** | Sellers of oceanfront condos who want to switch to annual leases | carolinacraftedhomes.com: "Section 1808: Why Some Myrtle Beach Condos Can't Become Annual Rentals". Chapter3 has one paragraph in `/invest/str-rules/` |
| **Rental guest and occupancy limits by town** | Investors and guests both search it | carolinacraftedhomes.com: "Myrtle Beach Rental Guest Limits" |
| **Homes under a price point** ("Myrtle Beach homes under $300,000", "under $350,000") | High-volume buyer queries | carolinacraftedhomes.com: "Myrtle Beach Homes Under $350,000: 2026 Buyer Guide" |
| **Development projects approved in 2026** | Chapter3's own differentiator (permit data) has no news page | carolinacraftedhomes.com: "What Myrtle Beach Development Projects Were Approved in 2026?" Chapter3 has `/invest/what-is-being-built/`, framed for investors only |
| **Buyer agency agreements after the 2024 settlement** ("Can I work with multiple agents?", "Who pays my agent?") | Every buyer now signs one. "buyer agreement" appears on 2 pages | carolinacraftedhomes.com covers it |
| **Is now a good time to sell an oceanfront condo?** | The condo segment is down 13 percent in the city. Owners are asking | carolinacraftedhomes.com covers it. `/sell/sell-my-condo/` does not answer it as a question |
| **Neighborhood and subdivision pages** (Market Common, Socastee, Forestbrook, Grande Dunes, Cherry Grove, Prince Creek, Longs, Atlantic Beach) | Searchers type the neighborhood, not "Horry County" | homeguidemyrtlebeach.com: Grande Dunes, Cherry Grove, Longs and Loris, subdivisions such as Sherwood Forest and Pecan Grove. lifeinmb.com: per-neighborhood pages. Atlantic Beach and Briarcliffe Acres are not mentioned anywhere on chapter3realty.com |
| **Intracoastal Waterway, oceanfront homes, luxury** | Separate buyer intents with separate searches | homeguidemyrtlebeach.com has all three. Chapter3 has `/buyers/waterfront-homes/`, and it is missing from the buyers hub and `/guides/` |
| **Probate and divorce sales** | `/why-chapter-3/` claims divorce as a specialty, but no page exists | homeguidemyrtlebeach.com: "Myrtle Beach SC Probate and Real Estate" |
| **Property search and listings** | "Coming soon" placeholders on 6 pages. Every competitor has IDX search | All three |

A second kind of gap is **missing sub-questions inside existing pages**:
- `/hoa/special-assessments/`: loss assessment coverage, installments, what happens if you cannot pay.
- `/hoa/reserves/`: what percent funded is healthy.
- `/buyers/first-time-home-buyer-myrtle-beach/`: what you can afford, the 4 percent application, credit score.
- `/buyers/condo-in-litigation/`: how to find out a building is in litigation.
- `/invest/condos/`: what condos return now.
- `/sell/home-value/`: area medians.

### C. Hub pages

| Hub | What it does well | What is wrong |
|---|---|---|
| `/buyers/` | Three "Find your path" cards with one-line descriptions | A link list joined by "·" with no descriptions. Four buyer articles missing. A financing claim that breaks A17b. An FAQ that competes with the process page |
| `/invest/` | Dated, sourced tiles. A "Match the goal" section that sends each kind of investor to the right page | 2,211 words. A 14-link paragraph in step 6. Loan offers. 9 child pages not linked. Two contradictory "ways to invest" counts |
| `/hoa/` | The hub links all 15 HOA pages with one line each | The hub is also the HOA fees article, so the fees question gets no numbers and the link list is at the bottom |
| `/sell/` | The "two ways to sell" decision is clear | 5,384 words. Three FAQ blocks. Duplicates every child page. Does not link `/sell/fsbo/`, `/sell/home-value/` or `/sell/net-proceeds/` in the body |
| `/buyers/relocating/` | All 22 children linked | An FAQ with a Fair Housing risk. Overlaps the buying guide |
| `/submarkets/` | All 9 linked | |
| `/guides/` | One place for everything, in intent groups | Omits 53 pages while claiming "Every" |
| `/market-reports/` | | Says "illustrative" and "Until the monthly report launches". One report |

Rule for hubs: a hub answers "which page do I need" in one screen, with one line per page that says what the page answers. It carries no FAQ that competes with a child page. It is regenerated from the page list, so a new page cannot be missing from it.

### D. Templated families

**Submarket pages (9).**
- Eight use the same 24 H2s in the same order ("Real estate investing in X, SC", "X property types and pricing", "Where investors are looking in X", ... "Who X suits").
- Thirty sentences appear on four or more of them word for word, after the town name is swapped. Examples:
  - "The classic trap: you have spent years training your dog to walk off leash, then buy into a community with a strict leash rule and lose the thing you valued most." (8 pages)
  - "Official figures from government sources, with no interpretation added." (8 pages)
  - "How to pull the crime numbers yourself..." (8 pages)
  - "The effective property tax on the same home can be close to double when it is not your primary residence." (7 pages)
- Each page carries the same "illustrative" occupancy chart shape.
- `/submarkets/carolina-forest/` uses a different, better structure: subdivisions compared, schools by zone, growth. It is the model for the others.
- What is unique per page today: the town paragraph, the STR data block, and the market paragraph. That is roughly 20 to 30 percent of each page.
- Fix:
  - Drop the shared investor sections to one paragraph and a link.
  - Spend the words on what only that town has: subdivisions and their dues, the flood zones by street, the schools by attendance zone, the town's own rules, and a dated price table.
  - Remove the "illustrative" chart.

**Relocation pages (10).**
- Thirty-one sentences are identical on all ten, including the 260-word calculator note and the "Who wrote this" box.
- Measured with 8-word shingles over the whole main text, pairs share 34 to 40 percent. STUDY measured 19 percent with a narrower method that excluded the shared blocks. A reader sees the shared blocks.
- The state-specific sections are good and specific: the New Jersey holdback, the Ohio city taxes, the Massachusetts estate line.
- Fix: move the calculator note behind a "How the estimate works" link to one page, and shorten the author box to one line linking to `/about/`. That cuts the shared text on each page by about 400 words.

### E. Internal linking

- **Pages with no link from any non-hub page body:** `/hoa/benefits/`, `/hoa/hoa-vs-poa/`, `/hoa/who-pays-for-damage/`, `/buyers/relocating/from-florida/`, `/buyers/relocating/from-maryland/`, `/buyers/relocating/why-myrtle-beach/`.
- **One such link only:** `/buyers/waterfront-homes/`, `/hoa/tax-deductible/`, `/invest/canadian-buyers/`, `/invest/how-long-to-hold/`, `/invest/llc/`, `/invest/rental-returns/`, `/invest/what-is-being-built/`, three state pages and `/buyers/relocating/schools/`.
- **Dead ends** (one to three distinct internal links out, besides contact): `/hoa/south-carolina-hoa-laws/` (1), `/buyers/condo-in-litigation/` (2), `/invest/section-8-rentals/` (2), `/about/` (home and contact only), and ten more with 3.
- **Missing obvious links:**
  - `/hoa/special-assessments/` does not link `/hoa/master-insurance-ho6/`, `/hoa/liens-and-foreclosure/` or `/hoa/tax-deductible/`.
  - `/invest/str-rules/` does not link `/invest/14-day-rule/`, though it discusses personal-use days.
  - `/why-chapter-3/` names "Foreclosures" and does not link `/invest/foreclosures/`.
- **The homepage body** links to five pages and none of the guides.

### F. Homepage, about and why pages (E-E-A-T)

| Question a first-time visitor has | Answered on the first screen? |
|---|---|
| Who is Chapter3? | Partly. "Chapter3 Realty · Myrtle Beach, SC" and "a specialized real estate agent". It does not say it is a brokerage, when it was founded, or who leads it |
| Who does it serve? | Yes. "Buy, sell and invest from Pawleys Island to the North Carolina line" |
| Why trust it? | No. Anonymous testimonials. The licensed broker appears last in the team block, below the fold. No licence number in the body. No review count or source. No transaction count, though a new firm can honestly give Tim's career numbers |
| What is different? | Claimed ("data-first") but not shown |

Competitor comparison (lifeinmb.com home, read 2026-10-01): the agent's photo and name on the first screen, then "150+ Transactions Closed", "$55M+ Sales Volume", "Top 1.1% of REALTORS in SC", then named testimonials. Chapter3 has a stronger true story (a third-generation broker, 30 years, his father's name on a boulevard) and does not tell it on the homepage. It is in the relocation author box instead: "His father, Fred Nash, also sold real estate here, and Fred Nash Boulevard by Myrtle Beach International Airport is named for him."

### G. Market reports

- One report: `/market-reports/july-2026/`, June data, published July 19, 2026.
- On October 1 it is three months stale, and it is the only dated market page.
- The hub, `/guides/` and the report itself promise monthly publication.
- Pages that cite "current" figures (`/sell/`, `/buyers/buying-in-myrtle-beach/`) carry figures that are older and different from the report.
- Fix:
  - Publish monthly from one data file.
  - Have `/sell/`, `/buyers/buying-in-myrtle-beach/`, `/sell/home-value/` and the submarket pages read their tiles from that file at build time (A22e).
  - Drop the interest rate line.

### H. The numbers that disagree across pages

| Fact | Values on the site |
|---|---|
| Property tax, second home vs primary | "roughly 3.3 times... about 4.3 times" (`/buyers/property-taxes/`). "three to four times more" (`/buyers/`). "close to double" (8 submarket pages, `/invest/` FAQ). "roughly double" (`/invest/condos/`). "roughly three times higher" (one other page). "several times" (`/buyers/closing-costs/`) |
| Buyer closing costs | "2 to 5 percent" (`/buyers/closing-costs/`). "2-4%" (`/buyers/buying-in-myrtle-beach/`). "Roughly 2 to 3 percent" (`/invest/`) |
| Median price change, year over year | "+10.5%" (`/sell/`, `/buyers/buying-in-myrtle-beach/`). "-1.4%" single-family (market report). "down about 3 percent" (`/submarkets/myrtle-beach/`) |
| Average days on market | "103 days" (`/sell/` tile, buying guide tile). "121" (same pages' text, market report) |
| Single-family months of supply | "4.5" (tiles). "4.3" (text, report) |
| Condo months of supply | "9.2 months" (buying guide). "7.6" (report, `/sell/`) |
| Lodging tax, City of Myrtle Beach | "13%" (`/invest/str-rules/`). "a 10 percent lodging tax" (`/submarkets/myrtle-beach/`). 7 percent plus 1.5 percent (`/invest/accommodations-tax/`) |
| State short-stay threshold | "under 90 days" (`/invest/accommodations-tax/`, `/invest/str-rules/`). "South Carolina's general 30-day threshold" (`/submarkets/myrtle-beach/`) |
| STR permit, unincorporated Horry County | "no county STR permit" (`/invest/str-rules/`). "generally allow STR with a permit" (`/buyers/buying-in-myrtle-beach/`) |
| Condotel financing | "DSCR loans... are a common fit" (`/invest/condos/`). "Cash or portfolio loans only" (`/sell/`, buying guide) |
| Response time | "Instant replies" (home). "same day, evenings included" (34 pages). "within 24 hours" (`/contact/`, `/sell/`). "24hr Response commitment" (`/why-chapter-3/`). "usually within a day or two" (`/sell/home-value/`) |
| Neighborhoods covered | "8 Neighborhoods covered" (`/why-chapter-3/`). 9 submarket pages |
| Special assessment at closing | "you inherit at closing" (buying guide). "belongs to the seller" (`/hoa/special-assessments/`) |

### I. Compliance items found by reading (beyond the gate)

- **Interest rates stated:** `/market-reports/july-2026/` (body and FAQ).
- **Financing offered in headlines or hubs (A17b):** `/buyers/` ("our own mortgage team"), `/invest/` hero and loan menu, `/buyers/condo-in-litigation/` ("We Underwrote"), `/why-chapter-3/` ("One team for real estate and financing."), `/buyers/first-time-home-buyer-myrtle-beach/` ("The one-roof advantage", "low-rate loans").
- **Firm experience predating the firm (A11e):** `/about/` ("We have closed in every submarket").
- **Verdicts on named communities (non-negotiable 5):** `/buyers/retirees/` (Del Webb, Cresswind).
- **Steering by school quality:** `/buyers/relocating/` FAQ.
- **Pricing attributed to an unlicensed person:** `/sell/` ("Devin runs operations and pricing").
- **Testimonials with no source:** homepage.

---

## Part 4. The ten most common writing defects, with a rule for each

Counts are from `<main>` text across 132 pages. Where a scanner was used, a sample of its hits was read to confirm them (MISTAKES rule 4).

### 1. The question in the title is not answered first, or not with a number

Evidence:
- `/sell/home-value/`, `/invest/condos/`, `/hoa/reserves/`, `/sell/net-proceeds/`, `/hoa/` (fees), `/buyers/first-time-home-buyer-myrtle-beach/`, `/market-reports/` (median), `/buyers/condo-in-litigation/`.
- STUDY counted 6 yes or no H1s with no verdict. Reading finds at least 8 more where the verdict exists but no number does.
- FAQ answers that open with "It depends", "Depends", "It can", "They can be" or "Sometimes": 33.

Before (`/invest/condos/`): "They can be excellent and they can be money pits, and the difference is almost never the unit itself."

After: "On average, not for cash flow in 2026. Myrtle Beach city condo prices fell about 13 percent in the year to June, and the average nightly listing returns about 3.4 percent of its price. A condo in a well-run building, booked 60 percent of nights, returns about 6 percent."

**Rule 1:**
- The first sentence under the H1 answers the H1 in 30 words or fewer.
- It contains a number that is already on the site.
- If the honest answer depends on something, name the two or three cases and give the number for each.
- "It depends" is never the whole first sentence.

### 2. The same fact has different values on different pages

Evidence: Part 3H. Eleven facts with two to six values each. The property tax multiple alone has six wordings on 16 pages.

Before (8 submarket pages): "The effective property tax on the same home can be close to double when it is not your primary residence."

After: "A second home pays about 3.3 times the tax of the same house as a legal residence in unincorporated Horry County, and about 4.3 times inside Myrtle Beach. The property tax page has the calculator."

**Rule 2:**
- Before you type a figure, find the page that owns it.
- Copy that page's wording, or link to it and give no figure.
- A new figure gets an owner page and goes in the data file (A22e).
- At review, search the site for the figure and every older wording of it.

### 3. Claims without support

Evidence:
- "#2 fastest-growing metro" (5 pages).
- "19 million" visitors (5 pages).
- "off-market" deals or listings (7 pages, 19 times).
- "No other local brokerage offers this".
- "More golf per capita than anywhere in the US".
- "the right building can produce forty percent more revenue".
- "Zillow and Redfin AVMs are routinely off by 10 to 25%".
- "a 5% overprice costs an estimated $14,000 to $21,000".

Before (`/sell/`): "Myrtle Beach is a top 5 US vacation destination. That is 19 million reasons buyers already know and love this market."

After: "About 19 million people visited the Grand Strand in 2025, according to the area's visitor bureau (link). Many buyers first came here on vacation."

**Rule 3:**
- Every number and every superlative gets a named source, with a link and a year, in the same sentence or the sources line.
- If you cannot find the source, cut the claim.
- Claims about Chapter3 ("off-market", "the vast majority of our listings") need a count from the owner, or they are cut.

### 4. Figurative language that the gate does not catch

Evidence:
- "sit" or "sits": 115 hits on 60 pages.
- "decide" or "decides" with a non-human subject: 111 hits on 60 pages.
- "money pit", "on the line", "claw", "head start", "center of gravity", "two worlds", "cliff": 15 hits on 12 pages.
- Plus a long tail: "the litigation cloud hung", "the line gets blurry", "it does not travel", "flatters the move", "people are voting with their feet", "fewer dropped balls", "differ by line on the map".

Before (`/buyers/condo-in-litigation/`): "the sellers inside the building were stuck, unable to find buyers while the litigation cloud hung over the project".

After: "The owners could not sell, because lenders would not lend in the building until the lawsuit ended."

**Rule 4:**
- Read every sentence whose subject is not a person: a tax, a house, a rule, a building, a market, a number.
- If that subject does something only a person can do (decides, sits, wants, cares, hands, flatters, travels, watches), rewrite it with the person or the plain verb: costs, is, applies, requires, allows.
- Add each new phrase to `REGISTER_REGEX` in the same commit.

### 5. Self-description instead of content

Evidence:
- "honest" or "honestly": 67 hits on 41 pages.
- "The honest truth", "done honestly", "Honest answers. No sales spin.", "Pros and cons, honestly", "The honest version", "Answered honestly."
- "Want us to look at it for you?" repeated 18 times on 13 pages.

Before (`/buyers/relocating/from-new-jersey/`): "The property tax drop, done honestly".

After: "How much lower is property tax in Myrtle Beach than in New Jersey?"

**Rule 5:**
- Never describe the writing ("honest", "plain", "simple", "in one paragraph", "the direct answer").
- Show the evidence that would make a reader call it honest: the downside, the number that cuts against us, the source.

### 6. Sales lines in an information page, and too many CTAs

Evidence:
- `/sell/` has about 15 CTAs.
- `/hoa/` has four identical "Have us review an HOA" buttons plus a phone line before the first heading.
- "buyers often say Chapter3 Realty is the best brokerage".
- "Our specialized investment agents can help you buy in the correct county so that you avoid extra taxes".
- Off-topic bottom CTAs: "Ask about an investment property for sale" on a tax page, "have us send you an investment property for sale" on the STR rules page.

Before (`/invest/accommodations-tax/`): "Our specialized investment agents can help you buy in the correct county so that you avoid extra taxes."

After: "We check the county, the city and the HOA for any address before you offer. Send us the address."

**Rule 6:**
- Two CTAs inside the article, as the site already says (A11c), plus the hero and the bottom.
- Each CTA names the specific thing we will do for this page's question.
- No comparative claim about other brokerages.
- No line that says what customers say about us unless it is a sourced review.

### 7. Walls of text, and link walls

Evidence:
- Paragraphs over 80 words: 354 on 106 pages, counting calculator notes and author boxes. STUDY: 92 pages.
- The relocation calculator note is 260 words, on 10 pages.
- `/invest/` step 6 is a 200-word paragraph of 14 links.
- `/buyers/` joins 12 links with "·".

Before (`/invest/`): "...If the tenants will hold housing vouchers, read how the voucher program pays. In a new community, read the recorded rules before you sign. For the second and third rental, the mistakes on a second rental. Before any of it, what return a rental should make here and how long to hold it before selling. A buyer in Canada has four extra steps..."

After: a table with two columns, "Your situation" and "Read this". One row per page. Example: "Tenants with housing vouchers | How the voucher program pays".

**Rule 7:**
- No paragraph over 80 words.
- Three or more links in a row become a list or a table, each item one line saying what the page answers.
- A disclaimer over 60 words moves to a linked "How this works" page.

### 8. Rule names, statute numbers, enactment dates and agency names in body copy (A11a)

Evidence:
- "Fannie Mae" or "Freddie Mac" in body copy on 11 pages.
- "Code Section", "Title N, Chapter N" or "S.C. Code" on 15 pages (35 hits).
- "since a 1987 state Supreme Court ruling".
- "August 2024 NAR settlement".
- "The South Carolina Department of Consumer Affairs publishes an annual HOA complaint report because state law requires it."

Before (`/sell/`): "Under South Carolina Code Section 27-50-250, a buyer takes title subject to existing vacation rental agreements for periods beginning within 90 days of deed recording."

After: "A buyer must honor vacation bookings that start within 90 days after closing. Bookings after that depend on your contract."

**Rule 8:** The owner's rule holds in body copy, with one exception, written down. When searchers use the name of the rule ("Fannie Mae 15 percent reserve rule", "FIRPTA", "W-8ECI", "Section 1808"), use the name once, in a heading or the first mention, with a plain gloss. Then refer to it plainly. A reader who cannot type the name of the form cannot file it.

### 9. Over-literal staccato and hidden specifics

This is a side effect of the owner's rules A22 and A11a, and the fix must not undo them.

Evidence:
- On `/hoa/` 26 percent of sentences are five words or fewer. On `/invest/canadian-buyers/` 23 percent, and on `/hoa/documents/` and `/hoa/tax-deductible/` 22 percent. These counts include bullet labels; reading confirms runs of fragments in the body.
- `/invest/canadian-buyers/`: "You will need a U.S. tax number. Without one, whoever collects your rent must send 30 percent of it to the government. One form stops that. Then you pay tax on your profit instead of on all the rent." The number (ITIN) and the form (W-8ECI) are not named, so the reader cannot act on it.
- `/invest/accommodations-tax/`: "Four things. All four can be checked before you write an offer. We check them for you."

Before (`/invest/canadian-buyers/`): "You will need a U.S. tax number. Without one, whoever collects your rent must send 30 percent of it to the government. One form stops that."

After: "You need a U.S. tax number, called an ITIN. Without it, your property manager must send 30 percent of the gross rent to the IRS. File form W-8ECI with the manager, and you pay tax only on your profit."

**Rule 9:**
- Short sentences, yes. Fragments, no.
- A sentence has a subject and a verb and carries one fact.
- Join two short sentences when the second only makes sense with the first.
- Name the form, the number, the office and the deadline whenever the reader must use them. The buyer test asks whether the reader will do something differently. Naming the form passes that test.

### 10. Invented, placeholder and stale content on a data site

Evidence:
- "illustrative" on 10 pages, 18 times. That includes the occupancy chart on 8 submarket pages and "The figures here are illustrative" on `/market-reports/`.
- "%s" on 2 pages.
- "Coming soon" search boxes on 6 pages.
- "Verified July 2026" on volatile pages that are now three months old.
- "Market Snapshot · As of June 20, 2026" presented as current.

Before (`/submarkets/myrtle-beach/`): "Typical short-term rental occupancy by month (illustrative)... Jul 90%".

After: the measured monthly occupancy from the data file the page already cites (AirROI, through 2026-08-08), or no chart.

**Rule 10:**
- Never publish a made-up figure, even labelled.
- A page with no data for a section drops the section.
- Every "as of" date older than 90 days on a volatile topic (taxes, STR rules, insurance, market numbers) is re-checked before any other edit to that page.
- A placeholder never ships.

---

## Part 5. Rules for future blog posts

These add to STANDARD.md and the website PLAYBOOK. They do not replace them.

1. **Answer first, with a number.** The first sentence answers the title in 30 words or fewer and carries a figure that is on the site or in the fact ledger. Yes or no questions start "Yes", "No" or "On average".
2. **List the sub-questions before drafting, and answer each.** Write down the five questions a reader asks next ("how do I find out", "what does it cost", "what if I cannot pay", "who pays", "when"). Check the finished page against the list. The special-assessments page missed loss assessment coverage this way.
3. **One owner per fact.** Search the site for the figure before you write it. Use the owner page's wording or link to it. Never write a second version of a rate, a ratio, a threshold or a range.
4. **Source every number and superlative in the same sentence or the sources line.** Sources must support a claim on the page. The same boilerplate sources line on every page in a section is not a source.
5. **Name the thing the reader must use.** Forms, ID numbers, offices, deadlines and the searched name of a rule appear once, with a plain gloss. Everything else follows the owner's literal register.
6. **Write full short sentences, not fragments.** Subject, verb, object. Join two sentences when the second depends on the first. Read the page aloud once. If it sounds like a list of telegrams, join sentences.
7. **No figurative subjects.** A tax, house, rule, market or number does not decide, sit, want, hand, flatter, travel or watch. Say who does what.
8. **Never describe the writing or the company's virtues.** No "honest", "plain", "direct answer", "best", "no other brokerage". Show the downside and the source instead.
9. **Chapter3 experience is attributed and dated.** "Tim Nash has..." for anything before the firm existed. "In Chapter3's files..." for the firm. Never "we have closed" for Tim's career. True stories carry "his numbers, not a promise", not "for illustration".
10. **Never offer or imply financing, and never state a rate.** No "our mortgage team", no "loan menu", no "underwrote", no "one team for financing", no national mortgage rate in a market report. Write "a lender will require", and "we work with a preferred lender; you can use any lender".
11. **Two CTAs in the body, specific to the page.** The CTA says what we will do for this question ("Send the building name and we read the last 24 months of minutes"). No generic investment-property CTA on a tax or rules page.
12. **Hubs list every child page, generated from the page list.** One line per page saying what it answers. No FAQ that competes with a child page.
13. **Templated pages earn their place with local facts.** A state or town page must have at least 60 percent of its text unique to that state or town. Shared explanations become one linked page. No shared anecdote (the off-leash dog) on more than one page.
14. **No placeholders, no illustrative data, no stale "as of".** Volatile pages are re-checked every 90 days. The market report ships monthly or the site stops promising it.
15. **No verdicts about named communities, buildings or businesses, and no steering by school quality.** Give the dated, sourced facts (dues, report card scores, rules) and let the reader judge.
16. **Brand and byline consistency.** "Chapter3" in prose (the TCPA string is locked and stays as written). Every article byline: "By <person>, <title> · Reviewed by <person>, <title> · Updated <date>". 31 pages today have no reviewer, and one has no title.

---

## Appendix: method notes

- **Text extraction.** Text was extracted from `<main>` with cheerio. Block elements became lines. Links are shown as ⟨path⟩. Scratch files are in the session scratchpad, not this repo.
- **Head titles.** Chart `<title>` elements inside SVGs were excluded when checking head titles. The head titles of `/invest/rental-returns/`, `/invest/rent-prices/` and `/submarkets/myrtle-beach/` are correct.
- **Shared-sentence counts.** Sentences longer than 8 words, after swapping place names for a placeholder, appearing on 4 or more pages of the family. The TCPA consent string was excluded.
- **Shingle overlap.** 8-word shingles over all of `<main>`, divided by the smaller page's shingle count.
- **Inbound links.** Counted from `<main>` of non-hub pages. Hubs, `/guides/`, `/` and `/map/` were excluded as sources.
- **Competitor topic lists.** `carolinacraftedhomes.com/blog`, `homeguidemyrtlebeach.com/guides/`, and the `lifeinmb.com` homepage and navigation, fetched 2026-10-01.
- **Facts checked on the web.**
  - The Fannie Mae 15 percent reserve rule for applications from January 4, 2027 is correct as stated on `/hoa/reserves/`. Several industry sources confirm it, and they add that a qualifying reserve study is an alternative.
  - The South Carolina tuition program for children of certain veterans requires a qualifying condition and South Carolina residency at entry into or during service. Several veterans' benefit guides agree. Confirm with the SC Department of Veterans' Affairs before editing `/buyers/retirees/`.
