# Compliance, legal and brand audit: chapter3realty.com

Audit date: 2026-10-01. Source: the clean copy of the deployed site (132 HTML pages under `chapter3realty/`, `partials/`, `functions/_middleware.js`, `_headers`, `api-proxy-worker.js`), plus the site repo's CLAUDE.md, BRAND.md, PLAYBOOK.md, HANDOFF.md, MISTAKES.md and `build.js`.

**This is a risk review, not legal advice.** It lists where the site's copy and code sit against the text of the rules. Whether a finding is a violation depends on facts this audit cannot see: the actual BrickWood arrangement, licence records, the real source of each testimonial. Each Critical and High item should go to a South Carolina real estate attorney and, for the lender items, to RESPA counsel before anything is published or changed.

Severity scale:

- **Critical**: a likely violation of a statute or regulation with direct penalty or licence exposure, or a claim the owner has already called illegal. Fix before the next deploy.
- **High**: a probable violation, or a statement that a regulator or competitor could use, that needs counsel or owner facts.
- **Medium**: a weak point in a disclosure or a claim that should be rewritten, or a gap in the site's own rules.
- **Low**: hygiene, consistency, or a risk that only matters if the business grows.

Counts: 5 Critical, 12 High, 17 Medium, 14 Low, plus 6 items checked and found clean.

---

## Part A. Brand rename scope ("Chapter3" to "Chapter III Realty")

The 2026-09-28 brand handoff says the name is always "Chapter III Realty" in marketing, and "Chapter3 Realty Corp" only where a legal name is required. The site uses neither "Chapter III" nor "Chapter 3" consistently. "Chapter III" appears **0 times**.

### A1. Occurrences by location (132 HTML pages)

Domain names, email addresses, social handles and the `/why-chapter-3/` URL slug are excluded from these counts. They are listed separately in A3.

| Location | Marketing form ("Chapter3", "Chapter3 Realty", "Chapter 3 Realty", "Chapter3's") | Legal form ("Chapter3 Realty Corp") | Wordmark (`Chapter<span>3</span>`) | Pages |
|---|---|---|---|---|
| `<title>` | 101 (66 end in "\| Chapter3", 33 in "\| Chapter3 Realty", 2 other) | 0 | 0 | 101 |
| H1 | 2 (`/why-chapter-3/` "Why work with Chapter3 Realty", `/contact/` "Contact Chapter3 Realty in Myrtle Beach") | 0 | 0 | 2 |
| H2 to H4 headings in `<main>` | 23 | 0 | 0 | 14 |
| Body copy in `<main>` (bylines, buttons, FAQ, author boxes) | 256 | 16 | 0 | 96 |
| alt and aria-label inside `<main>` | 6 | 0 | 0 | 2 |
| Meta description | 11 | 0 | 0 | 11 |
| og: and twitter: tags (og:site_name on 131 pages, og:title 74, twitter:title 74, descriptions 22, image alt text the rest) | 563 | 0 | 0 | 131 |
| JSON-LD schema (`name` 344, `legalName` 127, `description` 27, FAQ `text` 25, `headline` 1) | 396 | 127 | 0 | 131 |
| Header partial (logo and its label) | 132 | 0 | 132 | 132 |
| Footer partial (logo, address block, copyright, AfBA text, popup video label) | 262 | 393 | 131 | 131 |
| Search modal and other page chrome outside `<main>` | 131 | 0 | 0 | 131 |
| TCPA consent string (locked, reads "Chapter 3 Realty") | 299 | 0 | 0 | 131 |
| **Total in HTML** | **2,182** | **536** | **263** | |

Variant spellings across all HTML: "Chapter3 Realty" 1,345; "Chapter3" alone 776; "Chapter3 Realty Corp" 405; "Chapter 3 Realty" 324 (299 of them in the consent string, 22 in the relocation author box, 2 in a relocation AfBA line, 1 on `/invest/landlord-insurance/`); "Chapter3 Realty Corp." 131; "Chapter 3" alone 13 (most are statute citations, not the brand).

Outside the HTML pages: `llms-full.txt` 415 marketing and 13 legal; `llms.txt` 16; `site.webmanifest` 2; the 503 maintenance page in `functions/_middleware.js` (title "Chapter3 Realty" plus the wordmark); `partials/footer.html` comment and script names (`c3track`, `c3SendForm`, not visible).

Body copy breakdown inside `<main>`: "Chapter3" 148, "Chapter3 Realty" 75, "Chapter3's" 33 (most are "in Chapter3's files"), "Chapter 3 Realty" 25, "Chapter3 Realty Corp" 16.

### A2. What must change, by type

- **Titles, H1s, headings, body, meta, OG, schema `name`, header and footer marketing text**: change to "Chapter III Realty". 2,182 strings, almost all generated from partials, specs and `build.js` constants, so most of the change is in a few templates plus `node build.js stitch`.
- **Legal name**: keep "Chapter3 Realty Corp" in the footer address and copyright line, the licence line, schema `legalName`, the Terms and Privacy pages, and the AfBA disclosure (the referring party must be identified by its legal name). 536 strings. Confirm the exact registered name with the SC Secretary of State and the SC Real Estate Commission first (see L8).
- **TCPA consent string**: currently "Chapter 3 Realty" with a space, 299 copies on 131 pages, locked in `build.js` line 693 (`const TCPA`). It must name the seller the consumer agrees to hear from. Change it once, in one commit, in `build.js`, the footer popup, the search modal and every on-page form. The CRM stores `consentText` verbatim per lead, so old leads keep proof of the old wording. Do not edit stored consents.
- **Wordmark**: 263 rendered wordmarks plus the PNG logos (`Chapter3 Logo.png`, `Chapter3 Icon.png`), favicons, `og-image.jpg` and the popup video poster carry "Chapter3" as artwork. These need new artwork, not text edits.
- **Infrastructure that carries the old name and may stay**: domain `chapter3realty.com`, `hello@chapter3realty.com`, `app.chapter3realty.com` (CRM), `api-proxy.chapter3realty.workers.dev`, social handles `@chapter3realty` on Facebook, Instagram, YouTube, URL slug `/why-chapter-3/`. Changing any of these is a separate SEO and redirect project.
- **Docs that encode the old name as a rule**: BRAND.md ("Written name: Chapter3 Realty. One word"), CLAUDE.md, PLAYBOOK.md locked Identity string ("Chapter3 Realty LLC"), `build.js` HEADLINE and LEND regexes that match "chapter\s*3". These must be updated or the gates will keep enforcing the old name.

### A3. The rename is blocked by state law until the name is registered (Critical, C5 below)

---

## Part B. Findings

### CRITICAL

#### C1. Two pages say BrickWood Mortgage and Chapter3 are the same company

- Pages: `/buyers/relocating/` (4 sentences), `/buyers/va-loans/` (1 sentence). Also mirrored in `llms-full.txt` lines 927, 933, 943, 1016, 4804.
- Quotes:
  - `/buyers/relocating/`: "Because our lender, BrickWood Mortgage (NMLS #189497), works at the same company we do, we can time the loan around your situation instead of forcing your life to fit a rigid process."
  - `/buyers/relocating/`: "Because the brokerage and the lender are the same company, we can structure the timeline around your situation instead of forcing your life to fit a rigid loan process."
  - `/buyers/relocating/`: "the kind of coordination that only works when the two sit inside the same company"
  - `/buyers/relocating/`: "that is far easier when your agent and lender work at the same company."
  - `/buyers/va-loans/`: "Because the agent and the VA loan team work at the same company, they talk to each other directly instead of passing messages between separate firms."
- Why it matters: HANDOFF.md records the owner's fact (2026-07-30) that Chapter3 does not own BrickWood, and says "Zero pages claim common ownership". These sentences claim more than common ownership: they say the lender is inside the brokerage. That is a representation that Chapter3 is engaged in mortgage lending.
- Rules:
  - SC Code 37-22-120(A)(2): it is unlawful for a non-exempt person "to circulate or use advertising, including electronic means, make a representation or give information to a person which indicates or reasonably implies activity within the scope of this chapter." https://www.scstatehouse.gov/code/t37c022.php
  - SC Code 40-57-710(A)(4): discipline for a licensee who "pursues a continued and flagrant course of misrepresentation or makes false and misleading promises through any medium of advertising or otherwise." https://www.scstatehouse.gov/code/t40c057.php
  - 12 CFR 1014.3(n) and (o) (Regulation N): no material misrepresentation about the association of a mortgage credit product or provider with another person, or about the source of a commercial communication. https://www.ecfr.gov/current/title-12/chapter-X/part-1014/section-1014.3
  - These are consumer loans (relocation purchases, VA loans), so Regulation N and the SC Mortgage Lending Act both reach them.
- Gate gap: `build.js` LEND_VOICE and the "in-house" check do not match "same company".
- Fix: replace each sentence with "BrickWood Mortgage is a separate company. Our agents work with its loan officers often." Add "same company", "same firm", "under one roof", "one company" to the LEND_VOICE gate, scanning title, meta, schema and `llms-full.txt`. Regenerate `llms-full.txt`.

#### C2. The referral-benefit disclosure admits a payment that RESPA and the SC Mortgage Lending Act may not allow

- Pages: footer on 131 pages; `/about/`; `/buyers/programs/#afba`; `/buyers/new-construction/`; `/why-chapter-3/`; `/buyers/relocating/jobs/`; `/buyers/relocating/from-north-carolina/`.
- Quotes:
  - Footer: "Chapter3 Realty Corp has a business relationship with BrickWood Mortgage (NMLS #189497). Because of this relationship, this referral may provide Chapter3 Realty a financial or other benefit."
  - `/about/`: "Because of this relationship, a referral may provide Chapter3 Realty a financial or other benefit."
  - `/about/` and `/why-chapter-3/`: "18 years of local loan files through BrickWood Mortgage"
- Why it matters: the Affiliated Business Arrangement exemption only exists where the referring party has an ownership or affiliate relationship with the provider. The owner says Chapter3 does not own BrickWood (HANDOFF.md, "Contradictions" section, item 1). Without that relationship, the AfBA exemption is not available, and any "financial or other benefit" Chapter3 receives for sending borrowers to BrickWood is a referral fee.
- Rules:
  - 12 USC 2602(7) defines an affiliated business arrangement as one where the referring person "has either an affiliate relationship with or a direct or beneficial ownership interest of more than 1 percent in a provider of settlement services." https://www.law.cornell.edu/uscode/text/12/2602
  - 12 USC 2607(a) (RESPA section 8(a)): "No person shall give and no person shall accept any fee, kickback, or thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or a part of a real estate settlement service involving a federally related mortgage loan shall be referred to any person." https://www.law.cornell.edu/uscode/text/12/2607
  - 12 CFR 1024.15(b)(3): in an AfBA, "the only thing of value that is received from the arrangement, other than the payments listed in § 1024.14(g), is a return on an ownership interest or franchise relationship." https://www.consumerfinance.gov/rules-policy/regulations/1024/15/
  - SC Code 37-22-110(1): "Act as a mortgage broker" means to act "for compensation or gain, or in the expectation of compensation or gain, either directly or indirectly", and "also includes bringing a borrower and lender together to obtain a mortgage loan." There is no exemption for real estate licensees in 37-22-110's "exempt person" list. 37-22-120 makes it unlawful to do this without a licence. https://www.scstatehouse.gov/code/t37c022.php
- Fix: the owner and counsel must answer one question in writing: does Chapter3, Tim Nash or any employee receive anything of value from BrickWood, directly or indirectly (money, shared marketing, free leads, rent, services)? If no, remove "may provide Chapter3 Realty a financial or other benefit" everywhere and replace it with a plain statement: "Chapter3 Realty Corp and BrickWood Mortgage are separate companies. Chapter3 receives no payment for referring you. You are not required to use BrickWood Mortgage." If yes, stop referrals until counsel structures it.

#### C3. A banned licence claim is still in a page's search snippet

- Page: `/invest/non-warrantable-condos/` (meta description, og:description, twitter:description); also `llms-full.txt` line 10479.
- Quote: "What makes a Myrtle Beach condo non-warrantable, how to finance one, and how to check a building before you offer. From a licensed agent and MLO."
- Why it matters: the owner ruled on 2026-09-07 that neither Chapter3 nor its staff is ever called an MLO on the site, "that's illegal" (PLAYBOOK A17). This text is what Google and AI answer engines show for the page.
- Rules: SC Code 37-22-120(A)(2) (quoted in C1); SC Code 40-57-710(A)(4).
- Gate gap: `MLO_CLAIM_REGEX` in `build.js` line 1295 only fires when "MLO" sits within 120 characters of "Devin", or after "Chapter3's licensed" or "our licensed". "a licensed agent and MLO" matches none of them.
- Fix: rewrite the three meta tags to "What makes a Myrtle Beach condo non-warrantable, how buyers finance one, and how to check a building before you offer." Widen the gate to error on `\bMLO\b|loan originator` anywhere in title, meta, schema and body unless the sentence is about a third party ("a loan officer at our preferred lender").

#### C4. Tim Nash's mortgage loan originator licence is advertised on the brokerage site

- Pages: `/about/` (two places); repeated in `llms-full.txt` line 149.
- Quotes:
  - "Tim has also held a mortgage loan originator license for more than a decade (NMLS 252563)"
  - "Tim Nash, Broker-in-Charge. ... South Carolina license 43182, NMLS 252563."
- Why it matters: this is the same claim the owner banned for Devin Day on 2026-09-07, applied to the Broker-in-Charge. On a brokerage page with a lender relationship and a referral-benefit disclosure, it tells the reader the broker can originate the loan. If Tim's NMLS licence is sponsored by BrickWood, he is also on both sides of the referral (RESPA section 8 and SC 40-57-710(A)(15), "receives compensation in a real estate transaction or directly resulting from a real estate transaction from more than one party except with the full knowledge and written disclosure to all parties"). If it is inactive, "has held" may still be read as current.
- Rules: SC Code 37-22-120(A)(2); SC Code 37-22-210(F) and 37-22-270(D) (an NMLS identifier belongs on the licensed mortgage company's advertising, not a third party's) https://www.scstatehouse.gov/code/t37c022.php; SC Code 40-57-710(A)(15) https://www.scstatehouse.gov/code/t40c057.php; 12 USC 2607(a).
- Fix: check NMLS Consumer Access for 252563 (status, sponsoring company). Then remove the MLO sentence and the NMLS number from `/about/`, the schema and `llms-full.txt`, as the owner did for Devin. Keep "worked two years in a local real estate attorney's office" only if Tim confirms it. Update CLAUDE.md "Who is who" so the number is not reused.

#### C5. "Chapter III Realty" cannot be used until the name is registered with the Real Estate Commission

- Scope: the whole rename (Part A).
- Rule: SC Code 40-57-135(C)(3): "A licensee may not conduct real estate business under another name or at an address other than the one for which his license is issued. Alternative names may be utilized following confirmation of registration of the name with the commission." 40-57-135(E)(3): "If a real estate brokerage firm operates under a trade or franchise name, the identity of the franchisee or holder of the trade name clearly must be revealed." 40-57-135(A)(8): the BIC must notify the commission within ten days of "any change of office name". https://www.scstatehouse.gov/code/t40c057.php
- Conflict with the brand handoff: the handoff says the legal name appears "only where a legal name is required". SC requires every advertisement to "identify the full name of the real estate brokerage firm" (40-57-135(E)(2)(a)). On a website a link to the firm homepage satisfies this (E)(2)(b), but once the marketing name differs from the licensed name, (E)(3) requires the holder ("Chapter3 Realty Corp") to be revealed. So the footer line "Chapter III Realty is a trade name of Chapter3 Realty Corp, SC real estate company licence 28849" must stay on every page, and every off-site ad needs the same.
- Also: if the corporation will also register "Chapter III Realty" as an assumed name with the SC Secretary of State, do that first.
- Fix: Tim files the alternative-name registration with SCREC and waits for confirmation. Only then deploy the rename. Keep the confirmation letter in the brokerage file.

### HIGH

#### H1. An unlicensed employee is presented as the contact for seller pricing

- Page: `/sell/` (beside the home-valuation form).
- Quote: "Talk to Devin Directly ... Call or text Devin directly. No scripts, no "let me have someone call you." Devin runs operations and pricing, and he is the person who picks up the phone."
- Why it matters: Devin Day is not a real estate licensee (HANDOFF.md, "He is not a real estate agent"). Pricing a seller's home is brokerage activity.
- Rules:
  - SC Code 40-57-30(A): "It is unlawful for an individual to act as a real estate broker, real estate associate, or real estate property manager or to advertise or provide services as such without an active, valid license issued by the commission."
  - SC Code 40-57-135(K): an unlicensed individual working under a BIC may not "(1) discuss, negotiate, or explain a contract, listing agreement, buyer agency agreement ..."; "(7) answer questions regarding company listings, title, financing, and closing issues, except for information that is otherwise publicly available"; "(10) engage in an activity requiring a real estate license". https://www.scstatehouse.gov/code/t40c057.php
- Related: 101 pages carry the byline "By Devin Day, Operations Officer" and 19 broker-authored pages carry "Reviewed by Devin Day, Operations Officer". Writing general educational content is not by itself licensed activity, but a non-licensee "reviewing" the broker's advice reads as the reverse of supervision. The `/contact/` page byline is also "By Devin Day".
- Fix: change the `/sell/` block to "Talk to Tim Nash, Broker-in-Charge" or "Talk to a licensed agent". Remove "pricing" from Devin's role everywhere. Change "Reviewed by Devin Day" to "Edited by Devin Day" or drop it. Same rule applies to Abdulla Hijazi under the new brand handoff (he is correctly not shown as an agent today).

#### H2. Five anonymous five-star testimonials on the homepage

- Page: `/` (hero carousel).
- Quotes (each with five stars, no name, no date):
  - "We were buying from 800 miles away. ... Highly recommend." (Out-of-state buyer)
  - "They talked me out of a unit that looked great on paper. ..." (First-time buyer)
  - "They flagged active building permits and a development two streets over that no other agent mentioned. ..." (Relocated from Ohio)
  - "I've bought rentals through three brokerages. Chapter3 is the only one that ran real DSCR and rental income numbers before I made an offer." (Investor, North Myrtle Beach)
  - "Sold our condo above asking. ..." (Seller, Myrtle Beach)
- Why it matters: the site launched in early May 2026 (HANDOFF.md). The owner's rule says "Never write a quote for Tim Nash, or a story that did not happen." If any of these was written by staff, paraphrased beyond what the customer said, or describes an experience with an agent's previous brokerage, it is a fake review. The fourth one also makes a comparative claim against named-by-implication competitors.
- Rules:
  - 16 CFR 465.2(a): it is unfair or deceptive "for a business to write, create, or sell a consumer review, consumer testimonial, or celebrity testimonial that materially misrepresents, expressly or by implication: (1) That the reviewer or testimonialist exists; (2) That the reviewer or testimonialist used or otherwise had experience with the product, service, or business that is the subject of the review or testimonial; or (3) The reviewer's or testimonialist's experience with the product, service, or business". Civil penalties apply. https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465
  - 16 CFR 255.1 (Endorsement Guides): endorsements must reflect the honest opinions and experience of the endorser. https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255
  - SC Code 40-57-710(A)(4).
- Fix: for each quote, the owner produces the source (email, text, Google review) and the transaction it refers to, and confirms the transaction closed through Chapter3 Realty Corp. Keep only those with a source; attribute them ("Google review, August 2026, first name and initial"). Remove the rest. Do not add Review or AggregateRating schema (none exists today, which is correct).

#### H3. "Equal Housing Lender" and "our lender" language on a brokerage site

- Pages and quotes:
  - `/buyers/programs/`: "Chapter3 Realty is not a lender and does not originate loans. ... Equal Housing Lender."
  - `/buyers/programs/`: "Our lender, BrickWood Mortgage, does not offer its own down payment assistance program"
  - `/buyers/second-home/`: "Our lender, BrickWood Mortgage, will lay out both paths with real numbers."
  - `/buyers/buying-in-myrtle-beach/`: "Chapter3 is affiliated with BrickWood Mortgage (NMLS #189497), a Grand Strand lender that ... knows every building, every HOA warrantability issue, and every financing quirk in this market."
  - `/buyers/new-construction/`: "including our affiliated lender, BrickWood Mortgage."
  - `/invest/condotel-financing/`: "BrickWood Mortgage, our affiliated lender, arranges condotel and non-warrantable loans"
  - `/invest/non-warrantable-condos/`: "Our affiliated lender, BrickWood Mortgage, arranges these loans"
  - `/privacy/`: "our affiliated lender when relevant"
- Why it matters: "Equal Housing Lender" is the statement a lender makes about itself. Next to "not a lender" it contradicts itself. "Our lender" and "affiliated" assert the ownership link the owner says does not exist (see C2).
- Rules: SC Code 37-22-120(A)(2); 12 USC 2602(7); SC Code 40-57-710(A)(4).
- Fix: delete "Equal Housing Lender" from `/buyers/programs/` (use "Equal Housing Opportunity" if a fair-housing line is wanted). Replace "our lender" and "our affiliated lender" with "BrickWood Mortgage, a separate lender we work with" until counsel confirms the relationship.

#### H4. Regulation Z trigger terms on owner-occupied pages

Every down payment, rate, payment, term and finance-charge statement in the site's visible copy and calculators, checked against `DOWN_PAYMENT_OK_PAGES` in `build.js` (`/invest/strategies/dscr-loans/`, `/invest/strategies/brrrr/`, `/invest/strategies/fix-and-flip/`, `/invest/non-warrantable-condos/`):

| Page | Text or default | Trigger type | On allowlist | Assessment |
|---|---|---|---|---|
| `/buyers/cost-to-own/` | Calculator defaults: price $300,000, "Down payment (%)" 20, "Rate (%, example, use your quote)" 7, "Term (years)" 30. `coCalc()` runs on load and shows "Loan payment (principal + interest)". | down payment %, rate, term, payment amount | No | **High.** Consumer page shows a computed payment with a down payment and term. |
| `/buyers/closing-costs/` | Calculator defaults: "Down payment %" 10, "Interest rate %" 6.5 | down payment %, rate | No | **High.** Consumer page. |
| `/buyers/programs/` | DPA table: "Interest Rate 0%", "Monthly Payments None", "Lien Term 15 yrs", "Fully Forgiven After 15 yrs"; also "a competitive fixed interest rate mortgage loan" | rate, period of repayment | No | **High.** A stated rate must be an APR under 1026.24(c). |
| `/buyers/va-loans/` | "The Palmetto Heroes DPA provides $10,000 but raises your interest rate by an average of 2 percentage points" | rate (relative) | No | Medium. Also a Regulation N accuracy question. |
| `/buyers/va-loans/` | "VA loans offer 0% down payment, no private mortgage insurance, seller concessions up to 4% of the loan amount" | none ("no downpayment" is not a trigger; concessions are not credit terms) | No | Clean. |
| `/market-reports/july-2026/` | "the national 30-year fixed averaged 6.55 percent the week of July 16, per Freddie Mac" (body and FAQ schema) | rate, term | No | Low. Market news, not an ad for a credit product, but it breaks the owner's rule "Never state an interest rate". |
| `/invest/strategies/dscr-loans/` | "15 to 25 percent down on most Grand Strand DSCR loans, from the current BrickWood Mortgage investor programs" | down payment % | Yes | Business-purpose credit, outside Reg Z (1026.3(a)). Low: "current" ages; SC 37-22-190(A)(6) requires BrickWood to be able to deliver what is advertised. |
| `/invest/strategies/brrrr/` | "want about 25 percent down, against the 20 percent a warrantable building can take" | down payment % | Yes | Business purpose. Clean. |
| `/invest/long-term-rental/` | Analyzer placeholders "25" down, "7.5" rate, term select 30 years | down payment %, rate, term | No (investor page) | Low. Business purpose; placeholders are grey hints. |
| `/buyers/closing-costs/` | "plan on roughly 2 to 5 percent of the purchase price on top of the down payment" | closing costs, not a trigger | n/a | Clean. |
| 20+ pages | "the 4 percent rate", "the 6 percent rate" | property tax assessment ratio, not credit | n/a | Clean. |

- Rules:
  - 12 CFR 1026.24(c): "If an advertisement states a rate of finance charge, it shall state the rate as an 'annual percentage rate,' using that term." 1026.24(d)(1) triggering terms: "(i) The amount or percentage of any downpayment. (ii) The number of payments or period of repayment. (iii) The amount of any payment. (iv) The amount of any finance charge." 1026.24(d)(2) then requires the down payment, the terms of repayment, and the APR. https://www.consumerfinance.gov/rules-policy/regulations/1026/24/
  - Official comment 2(a)(2)-2: "All persons must comply with the advertising provisions in §§ 1026.16 and 1026.24, not just those that meet the definition of creditor". https://www.consumerfinance.gov/rules-policy/regulations/1026/interp-2/
  - SC Code 37-22-140(N): "All advertisements of mortgage loans must comply with the Truth in Lending Act".
- Gate gap: `build.js` strips `<label>`, `<input>` and `<select>` before the Reg Z scan ("a number inside a calculator input is not ad copy"), so calculator defaults are never checked. `RATE_NUM_I` needs "N% interest" or "interest rate of N", so "Interest Rate 0%" in a table cell and "raises your interest rate by an average of 2 percentage points" pass.
- Fix: on `/buyers/cost-to-own/` and `/buyers/closing-costs/`, leave the rate, down payment and term fields empty with placeholder text "your quote", and show no payment until the user types a rate. On `/buyers/programs/`, remove the rate and term rows and describe the DPA as "a forgivable second loan with no monthly payment; ask SC Housing for current terms". On `/buyers/va-loans/`, write "can come with a higher interest rate". Extend the gate to calculator `value=` defaults on non-allowlisted pages and to table rows labelled "Interest Rate" or "Term".

#### H5. The privacy policy does not describe what the site does with form data

- Page: `/privacy/` ("Last updated: July 2026").
- Quotes and what the code does:
  - Policy: "Form submissions are delivered to us through a third-party form service (Web3Forms) that transmits your message to our email." Code: every form posts JSON to `https://app.chapter3realty.com/api/forms/lead` (function `c3SendForm` on 131 pages), including name, phone, email, page, message and the full consent text. The code comment says a rejected lead will "alarm Slack". Web3Forms is not called anywhere.
  - Policy: "we may share your information with them [the affiliated lender] so they can help". The consent a visitor gives names only "Chapter 3 Realty" (see H6).
  - Policy does not mention: the CRM and its operator, Slack, Google Maps on `/map/` (loads `maps.googleapis.com` with an API key), `localStorage` and `sessionStorage` keys `c3PopDone` and `c3PopSeen`, GA4 event tracking of form submissions, phone clicks and calculator use (`generate_lead`, `phone_click`, `calculator_used` in the footer script), retention of CRM records, how to opt out of texts, and that mobile numbers are not shared for marketing.
  - Policy is accurate on: Anthropic, Cloudflare KV cache (12 months), Census geocoder, Photon/Komoot in Germany, Horry County GIS.
- Rules:
  - FTC Act section 5, 15 USC 45(a): "unfair or deceptive acts or practices in or affecting commerce ... are hereby declared unlawful." A privacy policy that names the wrong processor is a deceptive statement. https://www.law.cornell.edu/uscode/text/15/45
  - CTIA Messaging Principles and Best Practices (carrier requirement for 10DLC texting): the privacy policy must say how mobile numbers are used and that they are not shared with third parties for marketing. https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf
- Fix: rewrite "How your form is processed" to name the CRM (and its vendor), Slack notifications, and retention. Add Google Maps, browser storage and GA4 events. Add an SMS section: "We do not share your mobile number or text consent with third parties or affiliates for their marketing." Remove or condition the lender-sharing sentence (H6). Date the policy with a full date and keep a change log.

#### H6. Leads may be passed to BrickWood under a consent that names only Chapter3

- Pages: every form (299 consent blocks on 131 pages); `/privacy/`.
- Quotes: consent: "I consent to receive calls and text messages from Chapter 3 Realty about my property inquiry, showing appointments, and listing information I requested". Privacy: "if your request involves financing, we may share your information with them".
- Rules:
  - 47 CFR 64.1200(f)(9): prior express written consent is "an agreement, in writing, bearing the signature of the person called that clearly authorizes the seller to deliver or cause to be delivered to the person called advertisements or telemarketing messages using an automatic telephone dialing system or an artificial or prerecorded voice, and the telephone number to which the signatory authorizes such advertisements or telemarketing messages to be delivered." Consent runs to the named seller. https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200
  - SC Code 37-21-20(6)(b)(i): the consent exemption needs "a signed or electronically signed, written agreement stating that the person agrees to be contacted by or on behalf of a specific party". https://www.scstatehouse.gov/code/t37c021.php
- Fix: do not pass a lead's phone number to BrickWood for calls or texts. If a buyer asks for a lender, give the buyer BrickWood's number, or get a separate, unchecked, optional consent naming BrickWood Mortgage.

#### H7. Experience and client statistics a five-month-old firm cannot support

- Pages and quotes (selection):
  - `/about/`: "We have closed in every submarket from Little River to Pawleys Island."
  - `/` homepage stat block: "30+ years / On the Grand Strand" under "Why Chapter3 on the Grand Strand?" (not attributed to Tim).
  - `/about/`, `/why-chapter-3/`: "18 years of local loan files through BrickWood Mortgage" (BrickWood's history presented as Chapter3's).
  - `/invest/llc/`: "Every investor client we work with holds title in an LLC, a trust or a corporation, and about nine in ten form a new LLC for each house." Also "About nine in ten of Chapter3's investor clients form a new LLC for each house."
  - "In Chapter3's files" appears about 25 times on `/invest/landlord-insurance/`, `/invest/landlord-rules/`, `/invest/student-rentals/`, `/invest/section-8-rentals/`, `/invest/j1-rentals/`, `/invest/foreclosures/`, `/invest/financing-multiple-rentals/`, `/invest/new-construction-rentals/`, `/invest/rent-prices/`, `/invest/canadian-buyers/`. Examples: "The fastest eviction in Chapter3's files took a few days." "About three in four student leases in Chapter3's files carry a parent co-signer." "In Chapter3's files the authority's share has arrived on time every month."
  - `/invest/strategies/1031-exchange/`: "it is the reason 1031 investors on the Grand Strand end up at Chapter3" and "An exchange that is a scramble for a brokerage doing its first one is routine for our team".
  - `/buyers/relocating/`: "Most of our out-of-state buyers find their home on a single 2-day visit." `/buyers/relocating/from-pennsylvania/`: "Most of our Pennsylvania buyers are retirees." `/submarkets/carolina-forest/`: "Most of our relocating clients tour it first, and many stop looking after."
- Why it matters: the firm launched in early May 2026 (HANDOFF.md). Per CLAUDE.md, "in Chapter3's files" is the replacement for stories from Devin Day's own files, and Devin is a mortgage loan originator, not a property manager or broker. The owner also said "we don't do any property management" (HANDOFF.md 2026-09-07), yet the eviction, lease, co-signer and housing-authority sentences describe property management files. These statements attribute other people's or other companies' history to Chapter3 Realty Corp.
- Rules: SC Code 40-57-710(A)(4); 15 USC 45(a); 16 CFR 255.1(c) (an endorser's claimed experience must be real).
- Fix: attribute experience to the person and the time ("Tim Nash, over 30 years selling on the Grand Strand"). Replace "Chapter3's files" with the true source ("in Tim Nash's rentals", "in a loan officer's files at our preferred lender") or cut the sentence. Remove client percentages unless the owner can show the count behind them.

#### H8. Comparative and superlative claims with no substantiation

- Quotes:
  - `/why-chapter-3/`: "Instant rent, return, cap rate, and vacation-rental analysis on any Grand Strand address. No other local brokerage offers this."
  - `/buyers/buying-in-myrtle-beach/`: "That mix of honesty and local depth is why buyers often say Chapter3 Realty is the best brokerage to buy a home from."
  - `/about/`: "The best communication in the business, because none of it matters if your agent doesn't respond."
  - `/why-chapter-3/`: "Every one of our agents is trained to do the above-and-beyond work on every deal, without fail"
  - `/why-chapter-3/`: "Every client gets a real agent who responds quickly, explains every step, and never leaves you guessing"
  - `/` homepage: "Instant replies / Weekends included" and "1:1 / A dedicated agent, always". The `/contact/` page says "A reply within 24 hours" and office hours Mon-Fri 9 to 6, Sat 10 to 4.
  - `/buyers/second-home/`: "We know every building on the Grand Strand."
- Rules: SC Code 40-57-710(A)(3) "makes false promises likely to influence, persuade, or induce" and (A)(4); 15 USC 45(a) (claims need a reasonable basis before they are made). The brand handoff also requires broker sign-off for "best/#1/top/guaranteed" claims in ads; this website is advertising under 40-57-135(E)(2) ("in any medium").
- Fix: delete "No other local brokerage offers this" and "buyers often say ... the best brokerage". Replace "best communication in the business" with a measurable promise the office can keep ("We return calls the same business day"). Make the homepage stats match the contact page hours. Add a `build.js` gate for "no other (local )?brokerage", "the best brokerage", "best .* in the business", "#1", "number one" in first-person sentences.

#### H9. The site's own rule files still carry the banned licence claim and the wrong entity

- Files: `BRAND.md` (site repo), `HANDOFF.md`, `PLAYBOOK.md` "Locked strings".
- Quotes:
  - BRAND.md: "Devin Day, Operations Officer, licensed MLO, NMLS 2721275. Shown on all financing content." and "Tim Nash: SC broker licence 43182, NMLS 252563. Devin Day: NMLS 2721275 on financing content."
  - HANDOFF.md: "Devin Day is the person in the chat. Operations Officer, licensed MLO (NMLS 2721275)."
  - PLAYBOOK.md Identity: "Chapter3 Realty LLC · BrickWood Mortgage NMLS #189497 · Devin Day NMLS 2721275 · Timothy Nash, BIC, SC licence 43182, NMLS 252563 · Paul Hankins NMLS 281393"
  - PLAYBOOK A14: "this brokerage has a disclosed affiliation with a lender and an MLO on staff"
- Why it matters: MISTAKES 74 shows the claim reached 117 pages because a rule file said to show it. These lines tell the next writer to put it back, name the entity as an LLC, and re-add Paul Hankins, who was removed on 2026-07-28.
- Rules: same as C3 and C4.
- Fix: in the website repo, rewrite these lines to match A17 (no NMLS numbers for staff, no MLO claims), change "LLC" to the confirmed legal name, delete Paul Hankins from the locked identity string, and change "an MLO on staff" in A14.

#### H10. BrickWood co-marketing pages in the repo describe an in-house lender and a two-way referral deal

- Files (not deployed by wrangler, but finished and intended for BrickWood): `brickwood-partnership/partnership-announcement.html`, `brickwood-partnership/deal-analyzer.html`, `brickwood-partnership/brickwood Chapter3 Page.html`.
- Quotes:
  - "An agent and a lender, under one roof."
  - "expert local real estate guidance and an in-house lender that finances the deals other banks decline."
  - "A real estate referral partner. Borrowers who need an agent get a data-driven local team; buyers who need a lender get BrickWood. One trusted hand-off, both directions."
  - "A co-branded deal analyzer. A BrickWood-branded investment tool ... ready to embed on the BrickWood site."
  - "Devin Day / Operations Officer & licensed MLO, Chapter3 Realty"
  - "BrickWood Mortgage (NMLS #189497) and Chapter3 Realty LLC have a business relationship. ... Equal Housing Lender."
- Why it matters: an agreement to exchange referrals, and a free tool built for the lender, are each a "thing of value" given for referrals.
- Rules: 12 CFR 1024.14(d): "thing of value ... includes, without limitation, monies, things, discounts, salaries, commissions, fees, ... the opportunity to participate in a money-making program, ... services of all types at special or free rates" https://www.consumerfinance.gov/rules-policy/regulations/1024/14/; 12 USC 2607(a); SC Code 37-22-120(A)(2); PLAYBOOK A17.
- Fix: do not give these pages to BrickWood. If any is already live on BrickWood's site, ask BrickWood to take it down. Any co-marketing must go through RESPA counsel with each party paying its own share at market rates.

#### H11. The footer tells every visitor the brokerage offers financing

- Pages: footer on 131 pages.
- Quote: "The Myrtle Beach investor-focused brokerage. DSCR financing, STR analysis, and condo-by-condo ROI data for serious real estate investors."
- Also `/invest/` hero: "and DSCR, condotel and non-warrantable condo loans through BrickWood Mortgage." and section "The investor loan menu at BrickWood".
- Rules: PLAYBOOK A14a and the owner's rule "We are NOT a lending company: no title, H1, hero sub or CTA label may read as an offer to finance"; SC Code 37-22-120(A)(2) where the loan is a consumer loan (condotel and non-warrantable loans are often second homes, see M12).
- Fix: footer text "The Myrtle Beach investor-focused brokerage. Rental analysis, short-term rental rules and condo building data for investors." The LEND_HEADLINE gate does not scan the footer partial; add it.

#### H12. Off-market listings are promised to the public on every page

- Pages: search modal on 131 pages; `/invest/strategies/`; `/invest/strategies/1031-exchange/`.
- Quotes:
  - Modal: "Set your criteria and we will send matching Grand Strand listings to your inbox, including off-market homes before they hit the public sites."
  - `/invest/strategies/`: "the local lenders, attorneys, contractors, insurers and property managers who tell us about properties before they list"
  - `/invest/strategies/1031-exchange/`: "We search the Coastal Carolinas MLS and our off-market sources"
- Rules:
  - SC Code 40-57-135(E)(1): "A licensee may not advertise, market, or offer to conduct a real estate transaction involving real estate owned, in whole or in part, by another person without first obtaining a written listing agreement ... Licensees not associated with the listing brokerage firm may advertise real estate owned ... by another person only if they have written authorization from the listing brokerage firm". https://www.scstatehouse.gov/code/t40c057.php
  - If Chapter3 is a CCAR MLS participant: NAR MLS Policy Statement 8.0 (Clear Cooperation) and the 2025 "Multiple Listing Options for Sellers" policy limit public marketing of listings outside the MLS. https://www.nar.realtor/about-nar/policies/clear-cooperation-policy
- Fix: remove "including off-market homes before they hit the public sites". Describe only what Chapter3 can lawfully send ("new MLS listings that match your search"). The search itself is "Coming soon": when IDX launches, apply the CCAR MLS IDX display rules (listing firm name on each listing, data disclaimer, last-updated time).

### MEDIUM

#### M1. The AfBA disclosure text does not follow the required format and cannot replace the written notice

- Pages: footer (131), `/buyers/programs/#afba`, `/about/`, `/why-chapter-3/`.
- What is missing against Appendix D: the nature of the relationship and the percentage of ownership; the estimated charge or range of charges for BrickWood's services; the capitalized sentence "THERE ARE FREQUENTLY OTHER SETTLEMENT SERVICE PROVIDERS AVAILABLE WITH SIMILAR SERVICES. YOU ARE FREE TO SHOP AROUND TO DETERMINE THAT YOU ARE RECEIVING THE BEST SERVICES AND THE BEST RATE FOR THESE SERVICES." (the footer shortens it to "There are frequently other providers available. You are free to shop around."); the acknowledgment block.
- `/why-chapter-3/` version drops the benefit sentence and turns the notice into a sales point: "Chapter3 Realty has a business relationship with BrickWood Mortgage. A referral can mean faster timelines and coordinated closings."
- Rules: 12 CFR 1024.15(b)(1): the disclosure is given "on a separate piece of paper no later than the time of each referral" and "in the format of the Affiliated Business Arrangement Disclosure Statement set forth in appendix D". https://www.consumerfinance.gov/rules-policy/regulations/1024/15/ and https://www.consumerfinance.gov/rules-policy/regulations/1024/d/
- Fix: this depends on C2. If counsel confirms an AfBA exists, use the Appendix D text verbatim on `/buyers/programs/#afba`, keep a short pointer in the footer, and give the paper form at each referral. If there is no AfBA, replace all of these with the separate-companies statement in C2. Either way, remove the `/why-chapter-3/` "faster timelines" version.

#### M2. 18 pages name BrickWood in the body with no inline disclosure

- Pages: `/buyers/55-plus-communities/`, `/buyers/buying-in-myrtle-beach/`, `/buyers/closing-costs/`, `/buyers/golf-communities/`, `/buyers/relocating/`, `/buyers/second-home/`, `/invest/`, `/invest/airbnb-income/`, `/invest/condo-buildings/`, `/invest/condos/`, `/invest/condotel-financing/`, `/invest/str-tools/`, `/invest/strategies/1031-exchange/`, `/invest/strategies/brrrr/`, `/invest/strategies/dscr-loans/`, `/invest/strategies/fix-and-flip/`, `/sell/sell-my-condo/`, `/submarkets/carolina-forest/`.
- Rule: the site's own rule (CLAUDE.md, BRAND.md, PLAYBOOK A16): "Any page referring to BrickWood in the body carries the affiliated-business disclosure inline, not only in the footer."
- Gate gap: `build.js` line 2180 fires only on a `brickwoodmortgage.com` link, not on the name.
- Fix: decide C2 first. Then either add the inline text to these 18 pages or change the rule. Make the gate fire on the word "BrickWood" in `<main>`.

#### M3. Fair-housing: school and family steering phrases

- Quotes:
  - `/buyers/relocating/`: "Carolina Forest is the most popular landing spot for families relocating to the Grand Strand." and "It has the best schools in Horry County, approximately 30 sub-neighborhoods across a range of price points, and an active resale market."
  - `/buyers/relocating/`: "The town most relocating families tour first has its own guide: Carolina Forest."
  - `/buyers/relocating/`: FAQ "Which Myrtle Beach neighborhoods are best for relocators?" and "A zip code that looks average in the statistics may contain a top-rated school district"
  - `/submarkets/carolina-forest/`: "the county's flagship school zone"
  - `/buyers/retirees/`: "Plenty of the area suits retirees without the age restriction, and some of our retiree buyers are happier in Pawleys Island or Murrells Inlet"
- Why it matters: the site's own `/buyers/relocating/schools/` page says it correctly: "Courts have treated an agent's opinions about schools as evidence of that, because phrases like 'good schools' ...". "Best schools" and "for families" are the phrases it warns against. Familial status is a protected class.
- Rules: 42 USC 3604(c): unlawful "to make, print, or publish ... any notice, statement, or advertisement, with respect to the sale or rental of a dwelling that indicates any preference, limitation, or discrimination based on race, color, religion, sex, handicap, familial status, or national origin" https://www.law.cornell.edu/uscode/text/42/3604; 24 CFR 100.75(c) https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100/subpart-B/section-100.75; HUD memo "Guidance Regarding Advertisements Under Section 804(c) of the Fair Housing Act" (Achtenberg, 1995) https://www.hud.gov/sites/documents/DOC_7784.PDF; SC Fair Housing Law, SC Code 31-21-60 https://www.scstatehouse.gov/code/t31c021.php
- Gate gap: `FAIR_HOUSING` in `build.js` line 1201 lists 9 phrases. It does not include "best schools", "top-rated school", "for families", "families relocating", "suits retirees".
- Fix: replace with facts and a link: "Carolina Forest is inside the Carolina Forest High School attendance zone. Check the state report card for any school." Remove "families" as the subject of "landing spot" and "tour first". Rewrite the retirees sentence as "Age-restricted communities are not the only option. Pawleys Island and Murrells Inlet have homes near the MarshWalk." Add the phrases to the gate.

#### M4. "Your agent costs you nothing"

- Page: `/buyers/common-mistakes/`.
- Quote: "Your agent costs you nothing in most transactions. Seller compensation covers the buyer agent fee in the majority of Myrtle Beach closings."
- Why it matters: since August 2024 buyers sign a written agreement that states what they owe. "Costs you nothing" is the claim regulators have called misleading. "The majority of Myrtle Beach closings" has no source.
- Rules: SC Code 40-57-135(I)(2)(b)-(c) (buyer agreements state compensation and how it is earned); 15 USC 45(a); NAR settlement practice changes https://www.nar.realtor/the-facts/nar-settlement-faqs
- Fix: "Your buyer agreement states what you owe your agent. Sellers often offer to pay part or all of it, and that is negotiable." The `/sell/` page already says it correctly: "Real estate commissions are negotiable and not set by law."

#### M5. Text and call consent is required to send any inquiry

- Pages: popup (131 pages), search modal (131), `/contact/` and 36 other on-page forms (299 consent blocks in total; all byte-identical to the locked string; none pre-checked).
- Code: popup `send()` stops with "Please tick the box so we are allowed to call or text you." The `/contact/` checkbox has `required`. `c3SendForm` refuses to post when consent is false ("No consent box on this page means the CRM will refuse").
- Why it matters: the consent text says "Consent is not a condition of any purchase," but a visitor cannot ask a question by form without agreeing to autodialed calls and texts. A regulator or plaintiff can argue consent given this way was not freely given. It also means a visitor who only wants email has no way to reach the firm by form.
- Rules: 47 CFR 64.1200(f)(9)(i)(B): the agreement must disclose that the person "is not required to sign the written agreement (directly or indirectly), or agree to enter into such an agreement as a condition of purchasing any property, goods, or services"; SC Code 37-21-20(6)(b)(i).
- Fix: let the form send with the box unticked; store `consent: false`; reply by email only. Change the CRM so it accepts leads without text consent instead of alarming Slack.

#### M6. No privacy or SMS terms link at the point of consent

- Measured: 1 of 299 consent blocks has a `/privacy/` link within 1,500 characters. The only link is the footer.
- Rule: CTIA Messaging Principles (link above): the opt-in must link to the privacy policy and to SMS terms (program name, message frequency, HELP, STOP, data rates). The Terms page has no SMS section.
- Fix: add one line under each consent: "See our Privacy Policy and SMS Terms." Add an SMS Terms section to `/terms/`. This does not change the locked string; it sits below it.

#### M7. The consent covers less than the site promises to send

- Quotes:
  - `/why-chapter-3/`: "Every month after you buy, you hear from us with the things that matter for your home: historical facts about the property, an updated investor report, real-time alerts when new permits are filed near you, and appreciation reports."
  - Search modal: "keep you posted as new ones come on."
- Consent scope: "about my property inquiry, showing appointments, and listing information I requested".
- Rules: 47 CFR 64.1200(a)(2) and (f)(9) (telemarketing texts need consent that covers them); SC Code 37-21-20(2)(b) (an inquiry creates an established business relationship for only three months); CAN-SPAM, 15 USC 7704 and 16 CFR 316 (every marketing email needs the sender's postal address, a working opt-out honored within 10 business days, and a non-deceptive subject) https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-316
- Fix: send the monthly reports by email only, with CAN-SPAM opt-out and the Murrells Inlet address, or ask for a separate text consent for them.

#### M8. Regulation N: statements about BrickWood's fees and role conflict

- Quotes:
  - `/invest/condotel-financing/`: "BrickWood Mortgage, our affiliated lender, arranges condotel and non-warrantable loans through wholesale lenders that accept these buildings, and charges the same lender fees on a condotel file as on any other loan it originates, an FHA loan included."
  - `/invest/condo-buildings/`: "Our preferred lender BrickWood Mortgage finances condotels at the same fees as any other loan"
  - `/sell/sell-my-condo/`: "Our preferred lender, BrickWood Mortgage, finances condotel and non-warrantable buildings at normal fees."
  - `/invest/strategies/dscr-loans/`: "Below 1.00, BrickWood Mortgage still finances the de[al]"
- Why it matters: one page says BrickWood arranges loans through wholesale lenders (it brokers), others say it finances them. Fee parity is a factual claim about the cost of credit. Condotel units are often bought for personal use, so these are often consumer loans.
- Rule: 12 CFR 1014.3(c): no material misrepresentation about "the existence, nature, or amount of fees or costs to the consumer associated with the mortgage credit product". https://www.ecfr.gov/current/title-12/chapter-X/part-1014/section-1014.3
- Fix: get BrickWood's written confirmation of the fee statement or remove it. Use one consistent verb: "BrickWood Mortgage arranges these loans".

#### M9. The Reg Z allowlist and its rationale are wrong in two places

- `build.js` line 1297: `DOWN_PAYMENT_OK_PAGES` includes `/invest/non-warrantable-condos/`. That page says: "Non-warrantable financing works for primary homes, second homes, and investment properties." The business-purpose exemption in 12 CFR 1026.3(a) and comment 3(a)-4 covers only non-owner-occupied rental property. A down payment percentage on this page would reach consumer readers. (The page has no percentage today, so this is a latent risk.)
- PLAYBOOK A14 says "A brokerage is not a creditor" and treats coverage as a "safest reading". Official comment 2(a)(2)-2 says all persons, not only creditors, must comply with 1026.24 when they advertise consumer credit. The practical rule (write qualitatively) is right; the stated reason is not.
- Rules: 12 CFR 1026.3(a) and comment 3(a)-4 and -5 https://www.consumerfinance.gov/rules-policy/regulations/1026/interp-3/; comment 2(a)(2)-2 (link in H4).
- Fix: remove `/invest/non-warrantable-condos/` from the allowlist. Correct the PLAYBOOK A14 scope paragraph.

#### M10. build.js compliance gates miss what this audit found

| Gate | Misses | Example on the live site |
|---|---|---|
| `MLO_CLAIM_REGEX` (line 1295) | MLO claims not tied to "Devin" or "our"/"Chapter3's licensed" | C3 meta description; C4 Tim's MLO licence |
| `LEND_VOICE` and the "in-house" check | "same company", "Equal Housing Lender", "our lender", "affiliated lender", footer partial | C1, H3, H11 |
| AfBA gate (line 2180) | BrickWood named without a link | M2 (18 pages) |
| Reg Z scan (line 1806) | calculator defaults (inputs are stripped), rate in a table cell, relative rate, market rate | H4 |
| `FAIR_HOUSING` (line 1201) | school and family phrases | M3 |
| No gate | superlatives and comparisons ("no other local brokerage", "the best brokerage") | H8 |
| No gate | template placeholders left in output (`%s`) | M11 |
| No gate | unlicensed staff as contact ("Call or text Devin directly") | H1 |

- Rule: CLAUDE.md of this repo and website MISTAKES rule 4: sanity-check a scanner with one case that should match and one that should not.
- Fix: add the patterns, each with a failing and a passing control, and run them against the live copy before trusting them.

#### M11. "Our AI document analysis" box shows raw template code and offers a tool that does not exist

- Pages: `/hoa/reserves/`, `/hoa/special-assessments/`.
- Quote (rendered): "Our AI document analysis %s %s Analyze my HOA documents Call 854.333.2135". The headline and body are the literal characters `%s`. The button opens the lead popup; there is no upload or analyzer (HANDOFF.md: "HOA document analyzer tool ... Deferred by the owner as its own build").
- Why it matters: it advertises an AI review of legal documents that is not offered. The FTC has acted against companies that claimed AI could review legal documents (DoNotPay, 2024).
- Rules: 15 USC 45(a); FTC, "Operation AI Comply" (2024) https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes
- Fix: remove the block from both pages until the tool exists. When it launches, say what it does and does not do: "a summary, not a legal review; an attorney reads documents for legal meaning."

#### M12. Brokerage reads documents and handles tax paperwork in a way that may read as legal work

- Quotes:
  - `/hoa/documents/`: "A document review is not a legal opinion, and if something in the declaration needs a lawyer's reading we will say so. We tell you what the documents say, what it will mean for you, and which parts argue against the purchase."
  - `/invest/strategies/1031-exchange/`: "We draft the list with you and send it in time." and "we handle the South Carolina withholding paperwork covered further down", while the same page says "The closing attorney and your qualified intermediary prepare that form".
- Rules: SC Code 40-5-310 (unauthorized practice of law) https://www.scstatehouse.gov/code/t40c005.php; SC Code 40-57-135(K)(1) for unlicensed staff explaining documents. All 16 HOA pages carry a "not legal advice" notice, which helps.
- Fix: "We read the documents for the facts a buyer asks about: fees, reserves, rental rules, pending assessments. Your closing attorney explains legal meaning." On the 1031 page: "Your qualified intermediary prepares the identification notice; we help you choose the properties to list. Your closing attorney prepares the withholding forms."

#### M13. "Our closing attorney" language

- Quotes: `/invest/strategies/1031-exchange/` "Our closing attorney, your intermediary and the lender all work to the same date"; `/invest/canadian-buyers/` "put you with the closing attorney".
- Rule: SC Code 40-57-710(A)(13): discipline for a licensee who "violates a provision of law relating to the freedom of a buyer or seller to choose an attorney, insurance agent, title insurance agent, or another service provider". 
- Fix: "the closing attorney you choose" and "we can suggest closing attorneys we have worked with".

#### M14. Office "by appointment only"

- Page: `/contact/`: "Office 573 Vista Drive Murrells Inlet, SC 29576 By appointment only".
- Rule: SC Code 40-57-135(C)(1): the BIC "shall establish and maintain a specific office location which must be accessible by the public, investigators, and inspectors during reasonable business hours." (A)(4): the BIC must "be available to the public during business hours".
- Fix: list the office hours that the office is open, or "Walk-ins welcome during office hours".

#### M15. Plural "agents" when one licensee is named

- Quotes: `/about/` "agents with decades of local selling experience"; `/why-chapter-3/` "Every one of our agents is trained"; `/invest/accommodations-tax/` "Our specialized investment agents"; `/invest/strategies/dscr-loans/` "Our agents search the Grand Strand".
- Why it matters: the site names one licensee, Tim Nash. `/invest/new-construction-rentals/` mentions "an agent now on our team", so there may be more. If not, the plural is misleading.
- Rule: SC Code 40-57-710(A)(4).
- Fix: owner confirms the number of licensees under the BIC; match the copy to it.

#### M16. "Supervises every transaction" and "reviews every page"

- Quotes: `/` "As Broker-in-Charge, Tim supervises every transaction and makes sure every customer gets a high standard of care."; `/about/` "As Broker-in-Charge, he supervises every transaction."; relocation author box (22 pages) "He reviews every page we publish and runs our market analyses himself."
- Rule: website MISTAKES row 28 ("describe a role, never promise an individual's involvement in every transaction"). Supervision is a statutory duty (40-57-135(A)(1), (3)); "makes sure every customer gets a high standard of care" is a promise that creates liability.
- Fix: "Tim Nash is the Broker-in-Charge and supervises the firm's licensees."

#### M17. Accessibility statement claims contrast the site does not meet

- Page: `/accessibility/`: "This includes readable text and contrast, keyboard navigation".
- Fact: the brass link colour measures 3.01:1 on ivory sitewide (website PLAYBOOK, "Known accepted exceptions"), below WCAG 2.1 AA 4.5:1 for body text. The statement names no conformance target and no date of last review.
- Rules: DOJ guidance on web accessibility under the ADA https://www.ada.gov/resources/web-guidance/; WCAG 2.1 SC 1.4.3 https://www.w3.org/TR/WCAG21/#contrast-minimum; 15 USC 45(a) for an inaccurate statement.
- Fix: state the target ("We aim for WCAG 2.1 AA"), list known gaps (link colour, the auto-opening popup video), and give a date.

### LOW

#### L1. Regulation Z: market-rate statement on the market report

`/market-reports/july-2026/`: "the national 30-year fixed averaged 6.55 percent the week of July 16, per Freddie Mac" (also in FAQ schema). Not a credit ad, but it breaks the owner's "never state an interest rate" rule. Fix: "National mortgage rates are published weekly by Freddie Mac" with the link.

#### L2. Fair-housing phrases about guests and tenants on investor pages

`/submarkets/north-myrtle-beach/` "positioned for big families"; `/invest/str-tools/` "families with young children" (vacation guests); `/invest/student-rentals/` "Two groups rent near campus: students ... and families who move to Conway to be near a student"; `/guides/` "The upscale south end". Investor-facing and mostly about short-term lodging, but long-term tenant descriptions fall under 42 USC 3604(c). Fix: describe the property ("sleeps 12", "near campus"), not the people.

#### L3. Fair-housing page is incomplete

`/fair-housing/` gives "HUD's toll-free line" without the number, does not name the SC Human Affairs Commission, and says Chapter3 does not discriminate in "financing" (Chapter3 does not finance). No Equal Housing Opportunity logo or statement in the footer. Rules: 24 CFR 110 (fair housing poster at the broker's office) https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-110; HUD advertising guidance (link in M3). Fix: add 1-800-669-9777, the SC Human Affairs Commission, remove "financing", add "Equal Housing Opportunity" to the footer legal line.

#### L4. 55+ page: handled correctly, one check

`/buyers/55-plus-communities/` separates deed-restricted from age-targeted communities and tells buyers to check the recorded covenant. This meets HOPA practice (42 USC 3607(b)(2)(C), 24 CFR 100.304). Keep it. Only check: the "55+ community" filter in the search modal must match recorded restrictions when IDX launches.

#### L5. Generic use of "realtor"

`/buyers/new-construction/` "Do I need a realtor to buy new construction?"; `/sell/fsbo/` "Can I sell my house without a realtor in South Carolina?" (both also in FAQ schema). REALTOR is a NAR membership mark. Whether or not Chapter3 is a member, NAR asks that it not be used as a generic word. https://www.nar.realtor/membership-marks-manual Fix: "real estate agent". The REALTOR association names in source lines are used correctly.

#### L6. Popup response promise

The popup shows on every page after 10 seconds and its success text says "An agent will reach out shortly" while the contact page says within 24 hours. Fix: align to "within one business day".

#### L7. Founder and co-founder inconsistency

Schema `founder: Abdulla Hijazi`; `/about/` and `/` say "Co-founder"; the brand handoff says Abdulla is the founder. Schema also lists Devin Day as Operations Officer while `/about/` calls both Devin and Abdulla "marketing specialists" and `/sell/` says Devin "runs operations and pricing". Fix: one role line per person, used everywhere.

#### L8. Legal entity name

The live site is consistent: "Chapter3 Realty Corp" in the footer address (131 pages), copyright (131), AfBA (131), schema `legalName` (127 pages), Terms, Privacy, Fair Housing, About. The 6 pages without the Organization schema are `/accessibility/`, `/terms/`, `/privacy/`, `/fair-housing/`, `/map/`, `/404.html`. Inconsistent outside the live site: PLAYBOOK locked Identity, `brickwood-partnership/deal-analyzer.html` and `retired-lender-dpa-page/index.html` say "Chapter3 Realty LLC". The relocation author box says "built as a partnership". Fix: confirm the registered name (SC Secretary of State and SCREC licence 28849), fix the three off-site files, and change "built as a partnership" to "built around a simple idea".

#### L9. Removed person's photo still public

`chapter3realty/team/paul.jpg` is deployed and served at `/team/paul.jpg` although nothing links to it. Paul Hankins was removed on 2026-07-28 and the string "Hankins" appears on 0 pages. Keep it out of the deploy folder; RESTORE-PAUL.md can point to a copy outside `chapter3realty/`.

#### L10. Terms of Use gaps

`/terms/` has no SMS program terms, no statement that analyzer text is generated by an AI model and cached for 12 months, and no clause on user-submitted addresses. Fix: add the SMS section (M6) and "The analyzer's written analysis is produced by an AI model from public data and is an estimate."

#### L11. Implied per-building financing conclusions

`/invest/condo-buildings/` sub-header promises "which loans can close in each" for 29 named buildings, though the table gives only observable facts (front desk, fees, price bands). Fix: "how each operates and what that means for financing in general". No negative conclusions about a named building, HOA or builder were found anywhere (see Part C).

#### L12. Typos and template defects in compliance-adjacent copy

`/invest/condo-buildings/` "Chapter3 Realty check the building before you offer"; four relocation pages "runs our market analyzes himself"; `/privacy/`, `/terms/`, `/fair-housing/`, `/accessibility/` link the text "hello@chapter3realty.com" to `/contact/` instead of `mailto:`.

#### L13. Privacy-law applicability (no change needed now)

South Carolina has no comprehensive consumer privacy law. CCPA applies only above about $26.6 million revenue, 100,000 California consumers, or half of revenue from selling data; none is plausible. The relocation pages target Maryland, Connecticut and New Jersey residents; Maryland's MODPA and Connecticut's amended CTDPA apply from 35,000 consumers, New Jersey from 100,000. Not met today. No cookie banner is legally required in the US for GA4. The site sends Komoot (Germany) address text; no EU visitors are targeted. Revisit if traffic grows or ads with Google Signals are turned on.

#### L14. Security items seen in passing

`partials/maps-loader.html` ships a Google Maps API key (normal for Maps JS; confirm it is restricted to the site's referrer). `functions/_middleware.js` hard-codes the maintenance bypass word "letmein"; set `MAINTENANCE_BYPASS` in Cloudflare instead.

---

## Part C. Checked and clean

1. **No pre-checked consent boxes.** The only pre-checked boxes on the site are calculator settings on `/sell/capital-gains/` ("I am not an SC resident", "I will sign the I-295").
2. **Consent string integrity.** All 299 consent blocks are byte-identical to the locked string, and every one of the 299 phone inputs has one.
3. **Banned identifiers.** NMLS 2721275: 0 pages. "Hankins": 0 pages. "Paul": 0 pages (only "St. Paul" in a city data file). "Licensed Mortgage Loan Originator" in schema: 0.
4. **Licence numbers.** Company licence 28849 on 132 pages, always "South Carolina real estate company license 28849". Tim Nash 43182 on 25 pages, always with "South Carolina (broker) license". BrickWood NMLS #189497 on 132 pages, always the same.
5. **Named third parties.** No negative conclusion about a named building, HOA, builder or lender was found. Negative statements are about unnamed parties ("some [lenders] ... pad the fees", "a rival brokerage"). Crime data is handled by pointing readers to the FBI and SLED sources, which is the recommended practice.
6. **Copyright year.** "© 2026 Chapter3 Realty Corp." is correct for 2026.

---

## Part D. Questions for the owner and counsel

1. Does Chapter3, Tim Nash or any employee receive anything of value from BrickWood Mortgage, in any form? (C2, H10)
2. Is Tim Nash's NMLS 252563 active, and which company sponsors it? (C4)
3. For each of the five homepage testimonials, what is the source and the transaction? (H2)
4. How many licensees work under the Broker-in-Charge today? (M15)
5. Is Chapter3 Realty Corp a CCAR MLS participant and a REALTOR member? (H12, L5)
6. Has "Chapter III Realty" been registered with the SC Real Estate Commission? (C5)
7. Where do the "Chapter3's files" statistics come from (which person, which company, which years)? (H7)
