# Render and function QA: chapter3realty.com

Run on 2026-10-01 and 2026-10-02 against the live site, https://chapter3realty.com.
Source reference: the clean clone of the deployed branch in the session scratchpad. The live CSS hash (`app.650a027cfa.css`) is newer than the clone's (`app.19a7095691.css`), so every finding below was measured on the live site, not the clone.

Screenshots are in `audit/evidence/shots/`. There are 27 JPEG files at quality 70.

## How it was measured

- **Pages.** All 127 URLs in `sitemap.xml`, plus `/map/` (linked from the footer but not in the sitemap).
- **Widths.** Every page at 1280x800 and at 375x812 (mobile emulation with touch). A 32-page sample at 320x700 and 768x1024.
- **Browser.** Playwright Chromium. `canvas#c3-particles` was hidden. The popup was suppressed with `sessionStorage.c3PopSeen` except in the popup tests.
- **Measurement order.** Each page was scrolled top to bottom in instant steps, so `.sr` reveals and lazy images fire. All measurements were taken after that.
- **Contrast.** For every text node, the background was taken from `document.elementsFromPoint` at the text position, compositing translucent layers and gradients. A walk up the DOM was the fallback. Effective opacity (the product of ancestor opacities) was applied to the text colour. The scanner was checked against known cases before its counts were trusted:
  - It reproduced the known brass-on-ivory 3.01:1.
  - Its "overlap" findings on closed `<details>` accordions were confirmed false by screenshot and are excluded.
  - Text sitting on SVG charts was excluded from the contrast count.
- **Reachability.** Every link, button, input and summary was hit-tested with `elementFromPoint` at its centre, at each vertical scroll position (step = one third of the viewport).
- **No real lead was sent.** Two layers stopped it:
  - `context.route('**/api/forms/**')` aborted and counted every request. **Total requests reaching it across all runs: 0.**
  - In form tests, `window.fetch` was replaced after page load with a recorder that returns a fake 200. The page's own `c3SendForm` therefore ran unmodified, and the test could see whether it would have posted and with what payload, without anything leaving the browser.
- **Analyzer cost.** The LTR analyzer was run twice on one address (the second run was served from the proxy cache). That calls the site's own API worker, not the CRM.

## What passed

- **Load errors.** No page errors, no console errors and no 4xx/5xx asset responses on any of the 127 pages at 1280 or 375. There is no mixed content, and no broken images.
- **Overflow.** No horizontal page overflow at 320, 375, 768 or 1280.
- **Internal links.** All 134 unique internal link targets return 200. The cross-page fragments `/invest/long-term-rental/#compare`, `/sell/#seller-cma-form` and `/buyers/programs/#afba` all have targets.
- **In-page anchors.** No broken in-page `#` anchors on any page. Every `#lead-form` CTA has a target.
- **Phone links.** Every Chapter3 `tel:` link dials 854.333.2135. Two omit the +1 (see L5).
- **Inline handlers.** No inline `on*` handler references an undefined function.
- **Layout classes.** No inert `.grid-2/3/4`, no inputs crushed below 60px, no clipped field values.
- **Residue.** No `NaN`, `undefined`, `[object Object]`, `Lorem` or `TODO` in rendered text. The only `%s` is H1 below. `+131%since` is a known false positive.
- **TCPA consent.** On every form that has a consent box, the text matches the locked string byte for byte and the box is unchecked on load. That covers 35 on-page forms, the popup and the IDX modal.
- **Mobile nav.** The burger opens and closes on the homepage, an article, a submarket page and a relocation page. All 9 mobile-nav items resolve and are tappable. It fails on `/map/` (H6).
- **IDX modal.** The repo's `verify-idx-modal.js`, run against live, passes: 33 of 33 controls reachable at 320, 390, 414, 768, 1280 and 1440, and the close button frees page scroll.
- **Popup behaviour.**
  - It opens at about 10.8 s.
  - It does not reopen on the next page in the same session.
  - It is not shown on `/contact/`.
  - Close by tap works.
  - All 6 controls are tappable at 375 and 1280.
  - Validation messages appear for empty name, missing phone and unticked consent.
- **Calculators.** About 100 hand-computed checks passed. The details are under "Calculators" below.

---

## Critical

### C1. Four lead forms show "thank you" and then throw the lead away

`c3SendForm` refuses to send unless `fields.consent` is `true` or `'yes'`. It logs `c3SendForm: no consent recorded, not sending`. Four callers never pass `consent`, so every submission is dropped after the success message is shown. The visitor believes they reached an agent. Nothing reaches the CRM.

| Form | Where | Caller | Evidence (valid data, consent ticked where a box exists) | Screenshot |
|---|---|---|---|---|
| IDX "Send me matching listings" | every page (header "Search Listings") | `idxSearch()` in `assets/s.6af7c2078d.js` | `#idxOk` display `block` ("Thanks. A licensed agent will send Grand Strand listings..."); posts to /api/forms: **0**; console warn "no consent recorded, not sending" | `idx-375-success-shown-lead-dropped.jpg` |
| "Get a specialized agent" | `/invest/`, `/why-chapter-3/` | `specialistSubmit()` inline | "You're matched. An agent who specializes in your goal will reach out within 24 hours." shown; posts: **0**; same warn | `why-chapter-3-375-matched-but-lead-dropped.jpg` |
| Off-market alert form | `/buyers/buying-in-myrtle-beach/` | `submitOffMarket()` inline | "Thanks. Our team will reach out with off-market listings shortly." shown; posts: **0**; same warn | `buying-mb-375-offmarket-thanks-but-lead-dropped.jpg` |
| Investor report gate | `/invest/long-term-rental/` | `ltrGateSubmit()` in `assets/s.b314839f53.js` | gate closes, report proceeds; posts: **0**; same warn | `ltr-gate-375-phone-no-consent-box.jpg` |

The IDX payload also sends `listing_criteria`, which `c3SendForm` never maps into the CRM body. Even after the consent fix, the search criteria would be lost.

**Fix.**
- Pass `consent: document.getElementById('<box id>').checked ? 'yes' : 'no'` in each call. The box IDs are `idxConsent`, `saConsent` and `bimbConsent`.
- The LTR gate has no box at all; add one (see C2).
- Map `fields.listing_criteria` (and `deal`) into `crm.message` in `c3SendForm`.
- Add a gate check in `build.js` that fails any `c3SendForm({` call without a `consent:` key.

### C2. The investor report gate collects a phone number with no consent checkbox

- **Where.** `/invest/long-term-rental/`, all widths.
- **What is wrong.** The gate has Name, Email and "Phone (optional)". The locked TCPA text is printed as part of a paragraph ("Your numbers stay on this page either way. I consent to receive..."), but there is no checkbox. PLAYBOOK A15 requires an unchecked checkbox.
- **Evidence.** `#ltr-gate input[type=checkbox]` count = 0.
- **Screenshot.** `ltr-gate-375-phone-no-consent-box.jpg`
- **Fix.** Add the standard `<label class="form-consent"><input type="checkbox" id="ltrGateConsent"><span>{TCPA}</span></label>`. Require it when a phone is entered. Pass `consent` to `c3SendForm`. Move "Your numbers stay on this page either way." out of the consent paragraph.

### C3. Sticky FAQ intro covers the FAQ questions on phones

- **Where.** `/sell/` and `/buyers/buying-in-myrtle-beach/`, at every width from 320 to 480.
- **What is wrong.** The FAQ grid collapses to one column under 768px. Its first child (the "Every question sellers ask us..." intro, its paragraph and the "Find out what your home's worth" button) keeps `position: sticky; top: 85px`. As the visitor scrolls, the intro stays pinned over the questions. The text renders on top of the questions, and taps land on the intro.
- **Evidence (/sell/ width sweep).** With each of the 18 `summary` elements scrolled to the screen centre, `elementFromPoint` returned:

  | Width | Questions hit |
  |---|---|
  | 320, 340, 360, 375, 390, 414, 430, 480 | 0 of 18 (hits land on the intro `P` or `A.btn`) |
  | 600, 768, 1024, 1280 | 18 of 18 |

  A sitewide scan at 375 found the same pattern only on these two pages.
- **Screenshots.** `sell-375-sticky-faq-intro-covers-questions.jpg`, `buying-mb-375-sticky-faq-intro-covers-questions.jpg`
- **Fix.** Inside the existing `@media (max-width:768px)` block in `app.*.css`, next to `.faq-seller-grid{grid-template-columns:1fr !important}`, add:

  ```css
  .faq-seller-grid > :first-child,
  .bimb-faq-grid > :first-child { position: static !important; }
  ```

  Then rehash.

### C4. "%s" placeholders shown as the heading and body of a call-to-action box

- **Where.** `/hoa/special-assessments/` and `/hoa/reserves/`, all widths.
- **What is wrong.** The navy "Our AI document analysis" box renders a serif heading `%s` and a paragraph `%s` above the "Analyze my HOA documents" and "Call" buttons. A string template was written to the page without its values.
- **Evidence.**
  - Rendered `innerText`: `OUR AI DOCUMENT ANALYSIS\n\n%s\n\n%s\n\nANALYZE MY HOA DOCUMENTS\nCALL 854.333.2135`.
  - Source: `<p style="font-family:var(--serif);font-size:1.3rem;color:var(--ivory)...">%s</p><p ...>%s</p>`.
- **Screenshots.** `hoa-special-assessments-375-percent-s-residue.jpg`, `hoa-reserves-1280-percent-s-residue.jpg`
- **Fix.** Write the real heading and sentence into both pages. Both are hand-written, with no spec in `specs/`. Add `>%s<` to the residue check in `build.js audit`.

---

## High

### H1. Lead forms accept "not-an-email" and a 2-digit or letters-only phone, and post them to the CRM

Measured with the fetch recorder. Each row shows the payload that would have been posted.

| Page / form | Input accepted | Payload (abridged) |
|---|---|---|
| `/sell/` CMA form and final form | email `not-an-email`, phone `12` | `{"formType":"seller","phone":"12","email":"not-an-email","consent":true,...}` |
| `/sell/home-value/`, `/sell/net-proceeds/`, `/sell/fsbo/`, `/buyers/cost-to-own/`, `/buyers/new-construction/`, `/buyers/waterfront-homes/` (ldWrap) | same | `"phone":"12","email":"not-an-email"` |
| `/invest/non-warrantable-condos/` (nwWrap), `/invest/run-the-numbers/` (rnWrap) | same | same |
| 22 `/buyers/relocating/*` forms (name and phone only) | phone `12` | `"phone":"12","email":""` |
| `/contact/` | phone `abc` (email is checked by the browser) | `"phone":"abc"` |
| Site popup (every page) | phone `abc`, email `not-an-email` | `"phone":"abc","email":"not-an-email"` |

In each case the input itself reports `:invalid` for the email (it is `type=email`), but the JS handlers never call `checkValidity()`.

**Screenshots.** `sell-375-cma-form-accepts-bad-email-phone.jpg`, `popup-375-accepts-phone-abc.jpg`

**Fix.** One shared validator in `c3SendForm` or in each handler:
- phone must have 10 digits after stripping (11 with a leading 1);
- email must be empty-or-valid where optional, and valid where required;
- show the error in the form's existing error element.

### H2. The LTR analyzer shows two different results for the same property

- **Where.** `/invest/long-term-rental/`.
- **Inputs.** 601 S Ocean Blvd, Myrtle Beach 29577, price 300,000, 2 bed / 2 bath / 1,100 sq ft, 25% down, 0% rate, HOA 400, management 10%.
- **What the computed tiles show.** Monthly cash flow **$-109**, cap rate **2.1%**, DSCR 0.83, NOI $6,197, annual mortgage $7,500. The tiles are arithmetically correct: 21,000 - 14,803 = 6,197; 225,000 / 360 = 625 a month; 6,197 / 300,000 = 2.07%.
- **What the narrative and Key Signals say.** "negative cash flow of about **$1,147 per month**" and "Cap rate of **1.05%**".
- **The header.** It shows "EST. PROPERTY VALUE **$3,212,890**" for a 1,100 sq ft condo the visitor priced at $300,000. This is likely the county parcel value for the whole building.
- **Screenshot.** `ltr-1280-tiles-contradict-narrative.jpg`
- **Fix.**
  - Do not let the model write numbers. Build the narrative and Key Signals sentences from the same computed values the tiles use, or strip figures from the model text.
  - When the parcel is a condominium building, do not show its market value as the unit's value. Fall back to the visitor's price, or label the figure as the building's.

### H3. Text that fails contrast below 3:1

| Where | Text | Measured | Screenshot |
|---|---|---|---|
| `/sell/` net proceeds CTA, all widths | "No obligation. Real estate commissions are negotiable." (a legal statement), 12.2px, `rgba(244,239,232,.3)` on navy | **2.52:1** | `sell-1280-disclaimer-2.52-contrast.jpg` |
| `/buyers/common-mistakes/`, `/buyers/relocating/`, `/buyers/retirees/`, `/buyers/second-home/`, `/buyers/va-loans/` brass band under hero | "Our agents find these before you close." and similar, 11px, `rgba(244,239,232,.7)` on brass | **2.23:1** | `common-mistakes-1280-hero-card-2.23-contrast.jpg` |
| 102 pages: eyebrows ("Common questions", "Who wrote this", "Side by side"), inline body links at 17px, source links, breadcrumbs on ivory-2 sections | brass `#c4783a` on `#ede5d8` | **2.76:1** (864 text nodes) | `pros-and-cons-1280-brass-on-ivory2-2.76.jpg` |
| 6 `/invest/strategies/*` pages, "Why people do it" card label and a link | brass on `#f0e5da` | **2.79:1** | (same colour pair as above) |
| `/buyers/buying-in-myrtle-beach/` step numbers 01 to 05, 42.5px | brass on navy | 2.54:1 (large text needs 3:1) | none |

**Fix.**
- Raise the opacity of the `/sell/` disclaimer to at least `.7` (about 7:1).
- Use solid ivory or navy text on the brass band.
- For brass text on ivory-2, use a darker brass token for text, for example `#91592b`, already used on the site at 4.26:1 on `#eadccb`, or the navy.

Also measured, between 3:1 and 4.5:1, so it fails AA for body text but is not under the 3:1 threshold in this brief:
- brass on ivory, 3.01:1, 126 pages, 1,019 nodes, including 17px inline body links;
- brass on white, 3.45:1, 25 pages;
- ivory at 40% on navy, 3.44:1, 27 pages (breadcrumbs).

### H4. Chart labels cut off by the SVG edge; one now reads "0% of nights booked"

- **Where.** `/invest/rental-returns/`, chart "The same house let by the year, let nightly...".
- **What is wrong.** The right-aligned row sub-labels start left of the SVG box.
- **Evidence.**
  - At 1280: "34% of nights booked..." cut 5px, "32%..." 2px, "35%..." 2px, "33%..." 3px, "30% of nights booked, $323,004 house" cut **7px**. The last one renders as "0% of nights booked" for Little River.
  - At 375 all six such labels are cut.
- **Screenshots.** `rental-returns-1280-chart-label-clipped.jpg`, `rental-returns-375-chart-label-clipped.jpg`
- **Fix.** In the chart generator, widen the left margin. Label `x` is 198 with `text-anchor:end` in a 760-wide viewBox; measure the longest label, or move the sub-label under the area name.

### H5. Every chart is unreadable on a phone

- **What is wrong.** The SVG charts scale their whole viewBox down to the column width, so the label text shrinks with it.
- **Measured rendered text height at 375.**

  | Chart | Text height at 375 |
  |---|---|
  | Submarket occupancy charts (8 pages) | 5px |
  | `/buyers/buying-in-myrtle-beach/` value chart | 4px (3px at 320) |
  | `/invest/rental-returns/` | 6 to 8px |
  | `/invest/section-8-rentals/` | 7 to 8px |
  | `/invest/how-long-to-hold/`, `/invest/what-is-being-built/`, `/invest/rent-prices/` | 8px |

  All 19 charts on 14 pages have every label under 9px at 375.
- **Screenshot.** `submarket-conway-375-chart-text-5px.jpg`
- **Fix.** Pick one:
  - Give charts a `min-width` (for example 560px) inside an `overflow-x:auto` wrapper.
  - Generate a narrow-layout variant with fewer ticks and larger `font-size`, swapped by `<picture>`/media query.

### H6. On /map/, Google's "alpha channel" banner covers the site header

- **Where.** `/map/`, every width.
- **What is wrong.**
  - The page loads the alpha channel of the Maps JavaScript API. Google then shows "Using the alpha channel of the Google Maps JavaScript API. For development purposes only. Dismiss" across the top.
  - At 320 and 375 the banner covers the logo, the phone link and the **burger button**: `elementFromPoint` returns `DIV.vAygCK-api-load-alpha-banner`, and a tap on `#burgerBtn` times out. At 768 and 1280 it covers the logo, the nav and "Search Listings".
  - On a device without a WebGL2-capable GPU, the 3D map fails ("Attempted to load a 3D Map, but failed") and shows Google's "Oops! Something went wrong" box, with no site fallback.
- **Screenshots.** `map-375-alpha-banner-covers-header.jpg`, `map-1280-alpha-banner-covers-nav.jpg`, `map-375-no-gpu-no-fallback.jpg`
- **Fix.**
  - Load the 3D map from the `beta` or a stable channel (`v=beta`), or push the header below the banner.
  - Catch the 3D load failure (`gmp-error` or a timeout) and show a 2D map or a link list of areas instead of the Google error.
  - The "Left drag / Right drag / Scroll" mouse instructions also show on phones, where they mean nothing, and overlap the "Tap an area for prices and details" card at 375. Hide them on `(pointer:coarse)`.

---

## Medium

### M1. Validation that gives no message

| Form | Behaviour on failure |
|---|---|
| Specialist form (`/invest/`, `/why-chapter-3/`) | With consent unticked, the button only moves focus to the checkbox. No text. With empty name and email, nothing happens, because the consent check runs first. |
| `/sell/` CMA and final forms (`sellerSubmit`, `finalSellerSubmit`) | Empty or no consent: `return false` with no message. |
| IDX modal | Unticked consent: a 2px red outline on a 15px checkbox, no text. Bad email: red border only. |
| `/contact/`, off-market form | Rely on native browser bubbles (fine), but phone has no pattern. |

**Fix.** Use the ld-form pattern that works ("Add your name.", "Check the consent box so we are allowed to call or text you.") on these forms.

### M2. Placeholder used as the only label (PLAYBOOK A29e)

Once typed into, the fields have no visible name.

| Fields | Where |
|---|---|
| `ldCtx` / `ldName` / `ldPhone` / `ldEmail` | `/sell/home-value/`, `/sell/net-proceeds/`, `/sell/fsbo/`, `/buyers/cost-to-own/`, `/buyers/new-construction/`, `/buyers/waterfront-homes/` |
| `ldName` / `ldPhone` | 22 relocating pages |
| `nwBuilding`, `nwName`, `nwPhone`, `nwEmail` | `/invest/non-warrantable-condos/` |
| `rnAddr`, `rnName`, `rnPhone`, `rnEmail`, `rnNotes` | `/invest/run-the-numbers/` (they have `aria-label`, but nothing visible) |
| `sbh-street` / `sbh-city` / `sbh-zip` | homepage |
| IDX `idxName` / `idxPhone` / `idxEmail` | every page |
| Popup name / phone / email | every page (aria-label only) |

**Screenshots.** `home-value-375-placeholder-as-label-filled.jpg`, `popup-375-placeholder-labels.jpg`

**Fix.** Add a visible `<label>` above each field, as `/contact/` and the capital-gains tool already do.

### M3. Interest-rate defaults typed into calculators (owner non-negotiable: never state an interest rate)

| Page | Field | Value shown | What it drives |
|---|---|---|---|
| `/buyers/cost-to-own/` | `#coRate` | 7 | a P&I of $1,597 on load |
| `/buyers/closing-costs/` | `#cc-rate` | 6.5 | |
| `/invest/long-term-rental/` | `#ltr-rate` placeholder | 7.5 | |

**Fix.** Leave the rate empty, with a hint "Enter the rate your lender quoted". Show the payment only after the visitor types one. Confirm with the owner first; this is a compliance call, not a rendering one.

### M4. Homepage button text clipped at 320

- **Where.** `/`, the "See the investor analysis →" button.
- **What is wrong.** The button is 228px wide, but its text needs 260px (`white-space:nowrap; overflow:hidden`). The arrow and the end of "ANALYSIS" are cut off.
- **Screenshot.** `home-320-investor-button-text-clipped.jpg`
- **Fix.** Allow wrapping (`white-space:normal`) or reduce letter-spacing under 360px.

### M5. Chart legend cut off at the bottom

- **Where.** `/invest/what-is-being-built/`, permits chart, all widths.
- **What is wrong.** The legend labels "Earlier years" and "2026" sit at `y=230` in a `viewBox="0 0 640 230"`, so their lower 3px is clipped.
- **Screenshot.** `what-is-being-built-1280-chart-label.jpg`
- **Fix.** Make the viewBox 640x246.

---

## Low

- **L1. Negative money printed "$-109".**
  - On `/sell/net-proceeds/`: price 200,000 with payoff 250,000 gives "$-64,240". The LTR tiles show "$-109" and "$-1,303".
  - Fix: format as `-$64,240`, or "You would bring $64,240 to closing", as the capital-gains and flip tools already do.
- **L2. Calculators accept impossible inputs.**
  - `/sell/net-proceeds/` seller credit `-5000` gives other costs "$-3,500".
  - `/buyers/cost-to-own/` down payment 120% gives P&I "$-506". Term typed `0` silently becomes 30 years.
  - `/sell/capital-gains/` depreciation above basis gives adjusted basis "-$60,000".
  - Fix: clamp at 0 to 100 and show a message.
- **L3. Chart label collisions.**
  - On `/invest/rental-returns/` (first chart), the dashed 6% target line runs through the value labels "5.7%", "6.1%" and "5.4%". See `rental-returns-1280-target-line-through-labels.jpg`.
  - On `/buyers/buying-in-myrtle-beach/`, the rotated axis title "Typical home value" overlaps the tick labels "$250K" and "$300K". See `buying-in-mb-1280-chart-axis-title-overlap.jpg`.
  - On `/invest/how-long-to-hold/`, "July 2026: $342,010" sits on the line.
  - Fix: offset labels, or knock the line out behind label text.
- **L4. Decorative step numbers on /sell/ at 1.35:1.**
  - The numbers "01" to "07" are brass at low opacity on ivory, 44px. See `sell-1280-step-numbers-1.35.jpg`.
  - Decorative, but they carry the step order. Raise them to at least 3:1.
  - Not counted: the 6%-opacity state abbreviations on `/sell/out-of-state-buyers/` (1.19:1) are a background watermark, and the same text appears as headings.
- **L5. `tel:8543332135` without +1.** The "Call or text" link on `/sell/` and "Speak to an Agent" on `/invest/long-term-rental/`. Every other link uses `tel:+18543332135`. Change both for consistency.
- **L6. IDX submit button has `style="width:100%%"`.** This is invalid CSS left from a printf template. The button renders 272px in a 294px footer at 375. Change it to `width:100%`.
- **L7. Small tap targets on every page at 375.**

  | Target | Size |
  |---|---|
  | Header "Call if you have any questions" bar link | 16px tall |
  | Breadcrumb links | 19px |
  | Footer phone and email, social links | 17 to 18px |
  | Legal links | 20px |
  | Consent checkboxes | 13 to 15px |
  | "Put the example back" link on the 11 tax-calculator pages | 17px |

  Fix: give them at least 24px of tap height with padding.
- **L8. Wide tables at 375 scroll sideways with no cue.** Comparison tables on about 30 pages (the relocating from-state pages, `/invest/where-to-buy/`, `/invest/str-vs-ltr/`, `/submarkets/` and others) sit in `overflow-x:auto` wrappers. Columns past 375px are hidden until swiped. They are reachable, so this is not broken, but there is no visual cue. Fix: add a right-edge fade or a "swipe" hint.

---

## Calculators: cases run

All were driven in the browser by setting the real inputs and reading the rendered output.

| Tool | Hand-computed cases | Result |
|---|---|---|
| `/sell/net-proceeds/` | (A) 350,000 / payoff 175,000 / 6% / fees 1,500 gives commission $21,000, stamps 700 x 1.85 = $1,295, net $151,205. (B) 512,345 / 5.5% / HOA 300 / fees 2,000 / credit 4,000 gives stamps ceil(1024.69) x 1.85 = $1,896, costs $36,375, net $475,970. Typed 0 price, 0% commission, HOA untick | all match; L1, L2 |
| `/sell/capital-gains/` | (A) single, rental, 400,000, 7%, basis 250,000, income 90,000, nonresident with affidavit gives realized $372,000, gain $122,000, NIIT $456, SC 122,000 x .56 x .0521 = $3,559, withheld $6,356, refund $2,797, total $22,315 (so federal = 18,300), net $349,685. (B) MFJ primary 600,000 / 6% / basis 200,000 + 50,000 improvements - 20,000 depreciation / income 150,000 / payoff 100,000 gives exclusion -$314,000, SC $584, total $5,584 (federal 5,000 recapture), net $458,416. The page's worked example ($376,000 / $190,000 / $186,000 / about $33,900 / about $5,400 / about $9,700 / about $4,300) reproduces | all match; L2 |
| `/buyers/closing-costs/` | (A) cash 300,000 gives buyer $4,150, cash to close $304,150, seller $19,635. (B) conventional 400,000, 10% down, 6% gives the buyer total to the dollar. Typed 0 price | match; M3 |
| `/buyers/property-taxes/` | 300,000 at the 4% and 6% ratios for Myrtle Beach (with TDF credit), North Myrtle Beach and Surfside; typed 0 | all 6 match |
| `/buyers/cost-to-own/` | 240,000 at 6% over 30 years gives P&I $1,439 and total $1,938; 0% gives $667; 0% down over 15 years matches | match; L2, M3 |
| `/invest/strategies/dscr-loans/` | 2400 / (1650 + 400) = 1.17; 1500 / 2000 = 0.75; typed 0 rent and 0 payment show a dash and a prompt | match |
| `/invest/strategies/fix-and-flip/` | default profit $25,000 and 82%; loss case -$25,000 "loses money"; ARV 0 | match |
| `/invest/section-8-rentals/` | repo `verify-s8calc.js` against live: 3 cases, all pass. Typed 0 income and 0 rent: no NaN | pass |
| `/invest/rental-returns/` | repo `verify-returns-calc.js` against live: 6 cases plus the map, all pass. Typed 0 price and 0 rent: no NaN | pass; H4 is the chart |
| Tax comparison (`/buyers/relocating/cost-of-living/` and 10 from-state pages, `taxcalc.js`) | (A) NC single 100,000 wages, homes 300k/300k: NC (100,000 - 12,750) x .0399 = $3,481; SC 30,000 x .0199 + 55,000 x .0521 = $3,463; property $1,980 vs $1,103; "$896 less a year". (B) FL MFJ 65+, pension 60k, SS 40k, homes 400k/350k gives SC $0, property $3,120 vs $1,103, "$2,017 less a year", ten-year $70,172. All zero | match on cost-of-living, from-north-carolina and from-florida |
| `/invest/long-term-rental/` analyzer | one real run with 0% rate: mortgage 225,000 / 360 handled ($7,500 a year) | tiles correct; H2 |

---

## Not tested, or limited by the sandbox

- **Popup video.** Headless Chromium has no H.264 decoder. `popup-green.mp4` never played (readyState 0), so the form appeared via the 2.5 s fallback, and the key/green-screen look was not seen. The fallback path works.
- **3D map on real phones.** It failed without a GPU and rendered with SwiftShader. Real-phone behaviour depends on the device's GPU.
- **Real CRM submission and the success path end to end.** This was deliberately not done. The payloads above were captured from the page's own `c3SendForm`.
- **Google Analytics.** `google-analytics.com/g/collect` requests abort on navigation (`net::ERR_ABORTED`) on every page. This is normal beacon cancellation in the harness, not a site defect. No proxy certificate errors remained once the proxy CA key was trusted in Chromium.
- **iOS Safari specifics.** Not tested: `100vh`, sticky inside `overflow`, and tel/sms handling.
- **Hover-only states, keyboard-only navigation and screen-reader output.** Only partly covered: focus trap and Escape exist in the popup code.
- **Calculator law and rates.** Rates, brackets and SC withholding percentages were taken from the page code, not re-verified against law. Only the arithmetic and wiring were checked.
- **Pages outside the sitemap.** Only `/map/` was tested: `/privacy/`, `/terms/`, `/accessibility/`, `/fair-housing/`, `/team/` and the like are linked but not in `sitemap.xml`. They return 200.

## Harness scripts

In the session scratchpad, not committed:
- `crawl.js`: per-page measurement.
- `summ.js`: aggregation.
- `forms.js`: forms with the fetch recorder.
- `calcs.js`: calculator cases.
- `charts.js`: chart label size, clipping and overlap.
- `interact.js`: popup, IDX, LTR gate, nav, map.
- `sticky.js`, `stickyall.js`: sticky overlap.
- `vt/*.js`: the repo's verifiers pointed at live.
