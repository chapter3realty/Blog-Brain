# chapter3realty.com: performance and accessibility evidence

Measured 2026-10-01 and 2026-10-02 (UTC) against the live site, https://chapter3realty.com. Every number below is a measured value. Where a tool could not measure something, this file says so.

## 0. Method and limits

- **Lighthouse 13.5.0**, Chromium 141 (`/opt/pw-browsers/chromium-1194`), headless. Three sets of runs on the 13 URLs in the brief:
  - Set A: mobile and desktop, default simulated throttling, one URL at a time (`lh2`). These are the headline numbers.
  - Set B: mobile with applied throttling (`--throttling-method=devtools`: 150 ms RTT, 1.6 Mbps, 4x CPU), one URL at a time (`lh3`). Used as a cross-check because of the artifact below.
  - An earlier set run three at a time was discarded: the machine has 4 cores and the load average reached 8, so its TBT values were not trustworthy.
- **axe-core 4.13.0** through Playwright, tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa and best-practice. Each page was scrolled top to bottom in 70% steps, then back to the top, before axe ran, so the `.sr` reveals fired. After scrolling, `.sr` elements still at opacity below 1: 0 pages, except `/sell/` (5 of 18 not revealed). The particle canvas was hidden. The timed popup was suppressed (sessionStorage `c3PopSeen`) for the axe pass and tested on its own. Requests to `/api/forms/`, Google Analytics and Google Tag Manager were blocked. No form was submitted.
- **Pages**: the live sitemap lists 127 URLs. The 5 pages that exist but are not in the sitemap (`/accessibility/`, `/fair-housing/`, `/map/`, `/privacy/`, `/terms/`) were added: **132 pages at 1280x800**, **15 pages at 375x812**.
- **The clone is not identical to production.** Every live page loads `/assets/app.650a027cfa.css`. The clone references `/assets/app.19a7095691.css`, which adds one block not yet deployed (owner, 2026-09-16: `body:not(.home){--ivory:#fafafa;--ivory-2:#f1f1f2;--muted:#1c2028}`). Apart from that hash and the Cloudflare challenge script that Cloudflare injects at the edge, the HTML of all 132 pages matches. All findings are from the live site. A second axe pass was run on the clone (served locally) to show what that pending CSS changes; see 2.3.
- **Test environment artifacts.**
  1. Lighthouse reports "modern HTTP" savings because traffic goes through a TLS-intercepting proxy that speaks HTTP/1.1. Production serves HTTP/2 and advertises HTTP/3 (`alt-svc: h3`). That audit is ignored here.
  2. In every Set A mobile run the *observed* first paint was about 2.3 s (2,313 to 2,402 ms) while the page had finished loading at about 0.6 to 1.0 s. The trace shows no main-thread task over 15 ms in that window and 60 dropped compositor frames. The same browser binary driven by Playwright with the same mobile emulation painted at 364 to 508 ms, and blocking fonts, all JS, or the Cloudflare scripts did not change that. Desktop observed first paint was 433 to 600 ms. Lighthouse's simulated FCP is built from the observed run, so Set A mobile FCP/LCP (2.7 to 3.2 s / 3.1 to 3.8 s) are probably inflated by this container. Set B measures the paint under real throttling and gives FCP 1.5 to 1.9 s. Both sets are reported. The owner's own PageSpeed test (June 24, 2026) showed FCP 3.2 s and LCP 3.2 s on the homepage, which is closer to Set A, so the real figure is likely between the two.
  3. This Chromium build cannot decode H.264, so the popup video never played in any test. Video byte counts below come from the files, the headers and the code, not from a playback.

## 1. Lighthouse

### 1.1 Mobile (Moto G Power emulation)

Set A = simulated throttling. Set B = applied throttling. Times in ms. KB = total transfer.

| URL | A score | A FCP | A LCP | A TBT | A CLS | A SI | KB | Requests | B score | B FCP | B LCP | B TBT | B CLS | B SI |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| / | 87 | 2660 | 3110 | 94 | 0 | 4381 | 457 | 17 | 75 | 1821 | 1821 | 545 | 0.036 | 11820 |
| /about/ | 78 | 2827 | 3802 | 205 | 0 | 4630 | 588 | 22 | 87 | 1813 | 1813 | 460 | 0.041 | 2236 |
| /buyers/ | 87 | 2674 | 3124 | 80 | 0 | 4314 | 456 | 18 | 70 | 1936 | 1936 | 760 | 0.003 | 11589 |
| /invest/ | 83 | 2936 | 3536 | 89 | 0 | 4473 | 543 | 19 | 78 | 1792 | 1792 | 440 | 0.030 | 11274 |
| /invest/llc/ | 79 | 3177 | 3777 | 121 | 0 | 4796 | 540 | 19 | 87 | 1612 | 1612 | 490 | 0.045 | 2148 |
| /invest/rental-returns/ | 75 | 3151 | 3751 | 282 | 0 | 4724 | 552 | 19 | 63 | 1649 | 1649 | 807 | **0.334** | 2167 |
| /hoa/special-assessments/ | 76 | 2979 | 3579 | 289 | 0 | 4692 | 537 | 19 | 82 | 1771 | 1771 | 590 | 0.091 | 2295 |
| /buyers/relocating/from-new-jersey/ | 81 | 2967 | 3717 | 97 | 0 | 4593 | 547 | 20 | 81 | 1724 | 1724 | 704 | 0.044 | 2160 |
| /submarkets/myrtle-beach/ | 86 | 2715 | 3110 | 104 | 0 | 4442 | 450 | 17 | 72 | 1668 | 1668 | 655 | 0.078 | 11403 |
| /sell/ | 84 | 2793 | 3543 | 64 | 0 | 4427 | 553 | 19 | 71 | 1803 | 1803 | 728 | 0.008 | 11260 |
| /map/ | **31** | 4799 | 5572 | **48051** | 0 | 17206 | **6579** | **289** | 68 | 1506 | 4469 | 657 | 0 | 1704 |
| /contact/ | 81 | 3045 | 3795 | 65 | 0 | 4635 | 537 | 19 | 87 | 1643 | 1643 | 397 | 0.099 | 2011 |
| /market-reports/july-2026/ | 65 | 3017 | 3619 | 645 | 0 | 4767 | 538 | 19 | 70 | 1599 | 1599 | 433 | **0.379** | 2155 |

Notes:
- No article page reaches 90 on mobile in either set. Range excluding /map/: 65 to 87 (A), 63 to 87 (B).
- Set B TBT is 397 to 807 ms on every page. Under real 4x CPU throttling the main thread is busy. Set A TBT is 64 to 645 ms.
- Set B Speed Index of 11.3 to 11.8 s on five pages: the filmstrip on `/` changes at 13.35 s, when the timed popup is open (its HEAD and video requests appear at 7.9 to 8.2 s and 8.5 to 8.8 s in every Set B run except /contact/ and /map/). The popup is counted as a visual change in the first load.
- LCP element is text on every page (for example `<h1 class="detail-h1">` on /invest/llc/ and the hero `<p>` on `/`). Set A LCP breakdown on /invest/llc/: TTFB 186 ms, element render delay 2,197 ms. There is no LCP image.

### 1.2 Desktop

| URL | Score | FCP | LCP | TBT | CLS | SI | KB | Requests | A11y | BP | SEO |
|---|---|---|---|---|---|---|---|---|---|---|---|
| / | 100 | 582 | 603 | 11 | 0.020 | 603 | 334 | 18 | 96 | 81 | 100 |
| /about/ | 100 | 593 | 640 | 28 | 0.004 | 695 | 414 | 20 | 96 | 81 | 100 |
| /buyers/ | 100 | 349 | 549 | 0 | 0.012 | 601 | 280 | 16 | 95 | 81 | 100 |
| /invest/ | 100 | 622 | 627 | 0 | 0.013 | 622 | 367 | 17 | 96 | 81 | 100 |
| /invest/llc/ | 99 | 569 | 614 | 66 | 0.011 | 752 | 365 | 17 | 95 | 81 | 100 |
| /invest/rental-returns/ | 100 | 609 | 637 | 58 | 0.014 | 793 | 377 | 17 | 97 | 81 | 100 |
| /hoa/special-assessments/ | 100 | 530 | 607 | 11 | 0.008 | 669 | 362 | 17 | 91 | 81 | 100 |
| /buyers/relocating/from-new-jersey/ | 100 | 359 | 559 | 11 | 0.012 | 704 | 372 | 18 | 97 | 81 | 100 |
| /submarkets/myrtle-beach/ | 100 | 546 | 591 | 0 | 0.016 | 569 | 274 | 15 | 96 | 81 | 100 |
| /sell/ | 100 | 398 | 598 | 6 | 0.008 | 616 | 378 | 17 | 96 | 81 | 100 |
| /map/ | **58** | 518 | 1164 | **30076** | 0 | 6446 | **8100** | **418** | 98 | 81 | 66 |
| /contact/ | 100 | 367 | 567 | 0 | 0.033 | 649 | 361 | 17 | 90 | 81 | 100 |
| /market-reports/july-2026/ | 99 | 569 | 610 | 21 | 0.010 | 893 | 363 | 17 | 91 | 81 | 100 |

Desktop is fine everywhere except /map/.

### 1.3 Where the bytes and the time go (mobile, Set A, /invest/llc/ unless stated)

| Item | Measured | Notes |
|---|---|---|
| Google Analytics `gtag/js?id=G-681MKM6TCB` | 174 KB transfer, 74 KB of it unused, 350 ms CPU (266 ms script) | Largest single request on 12 of 13 pages. Loaded by a `setTimeout(g,4000)` even with no interaction, so it always lands inside the test window. 30 to 38% of each page's bytes. |
| Cloudflare challenge script `/cdn-cgi/challenge-platform/scripts/jsd/main.js` | 421 ms CPU (347 ms script), one 206 ms long task | Injected at the edge into every page. Also the only Best Practices failure: it calls the deprecated `StorageType.persistent`. The owner's June PSI report scored Best Practices 100; Cloudflare script time (155 ms) was already listed then, so the deprecated call is newer. |
| Cloudflare Web Analytics `beacon.min.js` | 10 KB, 60 ms CPU, 11 KB legacy JS, 1-day cache | Second analytics product next to GA. |
| `/popup-poster.jpg` | 82 KB (1050x787 JPEG), requested at 0.2 to 0.9 s on every page view, cache `max-age=14400, must-revalidate` | Poster of a dialog that is hidden. It loads even when the popup will not show again this session. |
| Fonts | `fraunces.b58654dd4f.woff2` 81 KB, `fraunces.48642176d9.woff2` 67 KB, `dmsans.c57593e0ad.woff2` 37 KB | 104 to 185 KB per page, the largest first-party bytes. `fonts.*.css` is loaded with the `media="print"` swap trick, so the fonts are discovered late (requested at about 700 ms observed) and there is no `<link rel="preload">` for any font. |
| `app.650a027cfa.css` (render-blocking) | 83.5 KB raw, 19 KB transfer, est. 300 to 385 ms FCP saving, 16 KB of 18 KB unused on /invest/llc/ | The only render-blocking resource. Removing it in a test cut first paint from 468 to 212 ms (/invest/llc/, Playwright mobile). |
| `s.089a979d4e.js` | 53 KB raw, 15 KB transfer, on 123 pages | Old single-page-app bundle: submarket data, analyzer and DSCR functions. Most pages call none of it. |
| `s.35fe572371.js` (effects) | 14 KB, on 124 pages | Custom cursor, particle canvas, scramble text, tilt, counters, reveal. |
| Main-thread work | 2.0 s total; 811 ms script evaluation; 10 long tasks | Set A. |
| DOM | 603 elements on /invest/llc/; the header mega menu holds 80 links on every page | Not flagged by Lighthouse. |

### 1.4 /map/ (linked from the header of all 131 other pages)

- Loads Google Maps 3D on page load: `map3d.wasm` 2,415 KB, `map3d_lite.wasm` 829 KB, plus 196 KB legend data and 64 KB Google Fonts.
- Google Maps entity: 3,673 KB and 4,306 ms main thread (mobile A); 3,706 KB and 5,468 ms (desktop).
- Desktop bootup: `map3d_wasm.js` 36,226 ms, `map3d_lite_wasm.js` 5,585 ms (simulated).
- Mobile A: score 31, TBT 48,051 ms, total 6,579 KB, 289 requests, main-thread work 79.3 s. Mobile B: score 68, LCP 4,469 ms.
- The page is `noindex` (SEO 66 for `is-crawlable`, intended), has no `<main>` and no skip link.

### 1.5 Layout shift (Set B)

Every top shift is a web font swap:
- /market-reports/july-2026/: 0.326 from `dmsans.c57593e0ad.woff2` loading, on `div.detail-hero::before`; 0.052 from the Fraunces files. Total 0.379.
- /invest/rental-returns/: 0.327 from `dmsans.c57593e0ad.woff2`; total 0.334.
- /contact/ 0.099, /hoa/special-assessments/ 0.091, /submarkets/myrtle-beach/ 0.078: same cause.
- The owner's June PSI report also named the font file (`...v38/6NU78FyLN....woff2`) as the shift culprit (0.042).

### 1.6 Best Practices and SEO

- Best Practices 81 on all 26 runs. The single failing audit is `deprecations` (1 warning), source `/cdn-cgi/challenge-platform/scripts/jsd/main.js`. No console errors, no other failures.
- SEO 100 on all URLs except /map/ (66, `is-crawlable`, because of its intended `noindex`).
- Lighthouse Accessibility 90 to 98. Failing audits: `color-contrast` on 12 of 13 URLs; `link-in-text-block` on /hoa/special-assessments/ and /market-reports/july-2026/; `td-has-header` on /buyers/relocating/from-new-jersey/ and /market-reports/july-2026/; `label` on /contact/; `landmark-one-main` on /map/.

### 1.7 Idle CPU on desktop (particle canvas)

Playwright, /invest/llc/, 1280x800, page left idle for 10 s after load:

| Condition | Script time in 10 s | Total task time in 10 s |
|---|---|---|
| As served | 341 ms | 1,717 ms |
| `prefers-reduced-motion: reduce` | 395 ms (canvas hidden by CSS, loop still runs) | 1,032 ms |
| `s.35fe572371.js` blocked | 2 ms | 436 ms |

The particle loop draws 80 particles and checks 3,160 pairs every animation frame, forever, on every non-touch page view. The CSS hides the canvas for reduced motion but the JavaScript keeps running.

## 2. Accessibility: axe-core, all pages

### 2.1 Live site, 1280x800, 132 pages

All 132 pages have at least one violation. 1,990 violation nodes in total.

| Rule | WCAG | Impact | Pages | Nodes | Example |
|---|---|---|---|---|---|
| color-contrast | 1.4.3 AA | serious | **130** | **1,830** | `/about/ #main > section:nth-child(2) > .wrap > p` "eyebrow" text, `#c4783a` on `#ede5d8`, 2.75:1, 11.9px |
| link-in-text-block | 1.4.1 A | serious | 39 | 103 | `/buyers/condo-in-litigation/ p > a[href$="why-chapter-3/"]`, `style="color:var(--brass);text-decoration:none"`, 2.41:1 against the body text |
| region | best practice | moderate | 17 | 18 | `body > section` outside `<main>` on 7 /buyers/ pages, 9 /submarkets/ pages, /map/ |
| empty-table-header | best practice | minor | 14 | 14 | `<th></th>` first cell of the comparison table on 11 /buyers/relocating/ pages, /invest/canadian-buyers/, /invest/new-construction-rentals/, /market-reports/july-2026/ |
| label | 4.1.2 A | critical | 3 | 16 | /buyers/cost-to-own/ (7) `#coPrice`, `#coDown`...; /sell/net-proceeds/ (5) `#nsPrice`, `#nsPayoff`...; /contact/ (4) `input[name="name"]`, `input[name="email"]`... |
| select-name | 4.1.2 A | critical | 2 | 3 | /buyers/cost-to-own/ `#coLoc`, `#coStatus`; /invest/long-term-rental/ `#ltr-term` |
| scrollable-region-focusable | 2.1.1 A | serious | 1 | 1 | `/ #c3-reviews` (review carousel) |
| nested-interactive | 4.1.2 A | serious | 1 | 1 | /invest/rental-returns/ `#rrmapsvg` is `role="img"` but holds 8 focusable `<g>` areas |
| landmark-one-main | best practice | moderate | 1 | 1 | /map/ |

Rules with zero violations on all 132 pages: image-alt, button-name, link-name, document-title, html-has-lang, heading-order, page-has-heading-one, duplicate-id-aria, aria-* validity, target-size, meta-viewport, bypass. Every page except /map/ has a skip link (`<a class="skip-link" href="#main">`) as the first focusable element, one `<h1>`, one `<main>`, `lang="en"`, and no skipped heading levels (measured on visible headings).

axe also returned 2,847 colour-contrast nodes as "needs review" (could not compute: pseudo-content 1,326, image nodes 455, non-BMP characters 622, gradients 197, overlap 189, in a sample of up to 6 per page). These were not counted as failures.

### 2.2 Colour contrast in detail (live, 1280)

1,698 of the 1,830 failing nodes (93%) declare `color:var(--brass)` (`#c4783a`) inline.

| Foreground on background | Ratio | Nodes | Pages | Used for |
|---|---|---|---|---|
| `#c4783a` brass on `#ede5d8` ivory-2 | 2.75:1 | 870 | 106 | eyebrows, inline links, "Read more" spans |
| `#c4783a` brass on `#f4efe8` ivory | 3.01:1 | 796 | 129 | same |
| `#c4783a` brass on `#ffffff` | 3.44:1 | 72 | 25 | card eyebrows, calculator totals (`#coTotal`) |
| `rgba(244,239,232,.4)` on navy `#2a3040` / `#1c2028` | 3.16 to 3.43:1 | 29 | 3 | small uppercase labels on /buyers/buying-in-myrtle-beach/ |
| brass at `opacity:.6` on navy | 2.54:1 | 8 | 1 | "01, 02, 03" numerals, 42.5px |
| `#c4783a` on `#f0e5da` | 2.77:1 | 7 | 6 | /invest/strategies/* eyebrows |
| `#2e7d4f` green on ivory | 4.41:1 | 7 | 2 | "+6.7%" figures on /market-reports/july-2026/ |
| ivory text on brass bar | 3.01:1 | 6 | 6 | `.path-cta-bar` heading on /buyers/common-mistakes/, /buyers/relocating/, /buyers/retirees/ ... |
| brass at `opacity:.3` on ivory | 1.35:1 | 6 | 1 | /sell/ step numerals "01" to "07", 44px |
| `rgba(244,239,232,.06)` on navy | 1.17:1 | 6 | 1 | /sell/out-of-state-buyers/ large decorative numerals |
| `rgba(244,239,232,.7)` on brass | 2.22:1 | 5 | 5 | `.path-cta-bar` eyebrow |
| `rgba(244,239,232,.3)` on navy | 2.52:1 | 1 | 1 | /sell/ "No obligation." note, 12.2px |

Pages with the most failures: /invest/ 66, /buyers/relocating/ 41, /invest/airbnb-income/ 40, /buyers/relocating/from-massachusetts/ 39, /buyers/buying-in-myrtle-beach/ 38. Median 11 per page. Only /invest/long-term-rental/ and /map/ have none.

Computed ratios for the theme colours (WCAG formula):

| Pair | Ratio | Passes 4.5:1? |
|---|---|---|
| brass `#c4783a` on ivory `#f4efe8` | 3.01 | no |
| brass on ivory-2 `#ede5d8` | 2.76 | no |
| brass on white | 3.45 | no |
| white on brass (`.btn-brass` buttons) | 3.45 | no, unless text is 18.66px bold or 24px |
| brass-2 `#d4894a` on navy | 5.81 | yes |
| ivory at 0.4 alpha on navy | 3.44 | no |
| ivory at 0.5 alpha on navy | 4.60 | yes |
| candidate `#965420` on ivory / ivory-2 / white | 5.12 / 4.69 / 5.86 | yes |

### 2.3 What the pending (undeployed) CSS changes

axe on the clone, served locally, 132 pages at 1280:
- color-contrast: 130 pages, 1,817 nodes (live: 1,830). Brass now measures 3.05:1 on `#f1f1f2` and 3.30:1 on `#fafafa`. It still fails.
- link-in-text-block: 1 page, 2 nodes (live: 39 pages, 103 nodes). The full-ink body text makes the brass links stand apart by contrast.
- All other rules: unchanged.

### 2.4 Mobile, 375x812, 15 pages

| Rule | Pages | Nodes |
|---|---|---|
| color-contrast | 14 | 228 (same brass pairs; one 8.5px label `#727375` on navy, 3.43:1) |
| scrollable-region-focusable | 6 | 8: `#c3-reviews` on `/`; `overflow-x:auto` table wrappers on /invest/rental-returns/ (3), /buyers/relocating/from-new-jersey/, /market-reports/july-2026/, /buyers/relocating/cost-of-living/ (`.colx-tw`), /buyers/property-taxes/ |
| link-in-text-block | 3 | 8 |
| empty-table-header | 3 | 3 |
| label | 1 | 4 (/contact/) |
| select-name | 1 | 1 (/invest/long-term-rental/) |
| nested-interactive | 1 | 1 |
| region | 1 | 1 |

Sample: /, /about/, /buyers/, /invest/, /invest/llc/, /invest/rental-returns/, /hoa/special-assessments/, /buyers/relocating/from-new-jersey/, /submarkets/myrtle-beach/, /sell/, /contact/, /market-reports/july-2026/, /invest/long-term-rental/, /buyers/relocating/cost-of-living/, /buyers/property-taxes/.

## 3. Keyboard and focus (Playwright, 1280x800, live)

### 3.1 Focus visibility

Tabbed through the first 63 to 70 focusable elements on /, /invest/llc/, /buyers/, /contact/, /invest/rental-returns/, /sell/, with CSS transitions disabled on the second pass (with transitions on, `getComputedStyle` reads mid-transition values and gave false "no indicator" results on /sell/; that first pass was discarded).
- Links and buttons: the browser's default focus ring (`outline: auto`) shows on 51 to 66 of each page's tab stops. No custom `:focus-visible` style for links exists, but the default ring is not removed.
- **No visible change on focus**: /contact/ name, email, phone and message fields (4). The CSS sets `outline:none` on `.form-input`, and on this page the `:focus` border colour equals the resting colour.
- **No visible change on focus**: /invest/rental-returns/ calculator `#rrArea`, `#rrPrice`, `#rrRent`, `#rrIns`, `#rrHoa`, `#rrPay`, `#rrAllow` (7) and the 8 focusable map areas `<g>` "Little River", "North Myrtle Beach", ... "Conway".
- **Weak indicator**: /sell/ `#final-name`, `#final-phone`, `#final-email` change only border colour (rule grey to navy), no outline. The homepage `#sbh-street`, `#sbh-city`, `#sbh-zip` change border and background only.
- 6 rules in `app.css` set `outline:none` on inputs and selects.

### 3.2 Header navigation

- The "Guides" mega menu opens on `:focus-within` and holds 80 links. A keyboard user tabbing through the header passes all 80 before reaching page content (the skip link avoids this).
- The menu opens with a `visibility` transition. Tabbing at 60 ms intervals moved from "Buying in Myrtle Beach" (first link) straight to "About" and skipped the other 79 links. At 400 ms intervals every link was reached.
- `.nav-dd-trigger` links have no `aria-expanded` or `aria-haspopup`. The mobile `#burgerBtn` has `aria-label="Menu"` but no `aria-expanded` and no `aria-controls` (measured null after opening).

### 3.3 Review carousel on `/`

- Auto-advances every 5,000 ms (`setInterval(function(){go(i+1);},5000)`). It pauses only on `mouseenter`. It does not pause on keyboard focus or touch, and there is no pause button. WCAG 2.2.2.
- Arrow buttons are `display:none` below 861px. The dots are `<span class="c3-dot">` with click handlers: not focusable, no role, no name.
- `#c3-reviews` is a scroll container with no `tabindex` (axe scrollable-region-focusable).

### 3.4 Other click targets that are not controls

- 5 pages (/buyers/va-loans/, /buyers/second-home/, /buyers/relocating/, /buyers/common-mistakes/, /buyers/retirees/) have a fake search bar: `<div ... cursor:pointer" onclick="openIdx()">Search homes for sale in Myrtle Beach...`. It cannot be reached or used by keyboard. Its placeholder text is `rgba(244,239,232,.4)` on navy, 3.44:1.
- The idx modal backdrop is `<div class="idx-backdrop" onclick="closeIdx()">` on 131 pages (acceptable: Escape also closes it).

## 4. Modals

### 4.1 Timed lead popup `#c3-pop` (131 pages, all but /contact/)

Code (inline on every page): opens 10,000 ms after DOMContentLoaded on the first page view of each browser session (`sessionStorage c3PopSeen`), unless the visitor has already submitted (`localStorage c3PopDone`). It starts fetching the video 6,000 ms after DOMContentLoaded.

Measured with Playwright on live pages:

| Check | /about/ 375x812 | /invest/llc/ 375x667 | /invest/llc/ 320x568 | / 1280x800 | /about/ 375x812, reduced motion |
|---|---|---|---|---|---|
| Covers viewport | yes (by design: fixed, inset 0, backdrop `rgba(6,18,32,.96)`) | yes | yes | 1280x800 | 375x812 |
| Panel | | | | 1052x592 at (114,104) | 353x633 at (11,89) |
| Send button bottom vs viewport height | 704 / 812 | 582 / 667 | 526 / 568 | 673 / 800 | 704 / 812 |
| Close button | | | | 37x37 px, inside viewport | 37x37 at (314,100) |
| Focus at open (10.6 s) | | | | `BODY`, outside dialog | `BODY`, outside dialog |
| 4 x Tab right after open | | | | Skip link, logo, Buy, Sell: **all outside the dialog** | Skip link, logo, phone, burger: **all outside** |
| Focus when form appears | `#c3-pop-name` | `#c3-pop-name` | `#c3-pop-name` | `#c3-pop-name` | `#c3-pop-name` |
| 9 x Tab after form appears | stays inside (name, phone, email, consent, send, close, name ...) | same | same | same | same |
| Escape | closes | closes | closes | closes | closes |
| Background `inert` or `aria-hidden` | no | no | no | no | no |
| Page scroll locked | no (`body` overflow visible) | no | no | no | no |
| Consent text size | 10.2 px | 9.52 px | 9.52 px | 10.2 px | 10.2 px |
| axe on the open dialog | 0 violations | 0 | 0 | 0 | 0 |

(Blank cells: the popup had not opened at the 10.6 s sample in those three runs; the later checks ran after it opened.)

Screen reader view (accessibility tree of the open dialog): `dialog "Speak to an agent"` containing `button "Close"`, `textbox "Name"`, `textbox "Phone"`, `textbox "Email"`, `checkbox` named with the full TCPA text, `button "Speak to an agent"`. The names come from `aria-label` and placeholders; there are no visible labels.

Findings:
- Focus is not moved into the dialog when it opens. For about 2.5 s (until the form fades in) keyboard focus and Tab stay on the page behind a 96% opaque cover.
- Nothing behind the dialog is inert. Screen reader users can read and reach the page behind, except where `aria-modal` is honoured.
- The page behind still scrolls.
- The TCPA consent text renders at 9.5 to 10.2 px (`font-size:.6rem`) in `rgba(255,255,255,.72)`.
- It opens with `prefers-reduced-motion: reduce` too. There is no reduced-motion check in the popup script; the video would play.
- On mobile it covers the whole screen 10 s into the first page a visitor reads, including article pages arrived at from search.

### 4.2 Popup video

| File | Size | Encoding | Duration | Audio | Cache |
|---|---|---|---|---|---|
| `/popup.mp4` | 3,792,527 B | H.264 1920x1080, 17.6 Mbps, 30 fps | 1.70 s | AAC 195 kbps track present | `max-age=14400, must-revalidate` |
| `/popup-green.mp4` | 691,851 B | H.264 1280x720, 1.6 Mbps | 3.43 s | none | same |
| `/popup-poster.jpg` | 83,129 B | 1050x787 | | | same |

- The script sends a HEAD to `/popup-green.mp4`; it returns 200 on the live site, so the green file is the one used. In a Chrome that decodes H.264, `preload` is set to `auto` and `load()` is called at 6 s, so a first visit downloads about 676 KB of video plus the 81 KB poster. In this test build (no H.264) only 31 to 33 KB of video was fetched before it gave up, and `/popup.mp4` was also requested and cancelled.
- The comment in the code says "never fetch 3.6MB of video" on 2G or Save-Data. It does not check `prefers-reduced-motion`.
- Video element: no `controls`, no `<track>`, `muted`, `playsinline`, `aria-label="Chapter3 Realty, Myrtle Beach"`, played at 1.33x (2.58 s). Under 5 s and silent, so captions (1.2.2) and pause (2.2.2) do not strictly apply. It is decorative and has an accessible name, so a screen reader announces it.
- Could not verify: actual playback, keyed-canvas painting, and real video bytes, because the test Chromium has no H.264 decoder.

### 4.3 Listing search modal `#idxModal` (131 pages)

Opened from the mobile menu "Search Listings" button on /invest/llc/ at 375x667:
- The modal container keeps `aria-hidden="true"` while open (`openIdx()` adds `.open` but never changes the attribute). The accessibility snapshot of the open modal is **empty**: a screen reader user gets nothing.
- The panel has `role="dialog"` and `aria-label` but no `aria-modal`.
- Focus stays on the trigger (`btn btn-outline`). 6 x Tab all landed outside the modal (`btn btn-primary`, three links, `btn btn-brass btn-lg`, a link).
- Escape closes it (global keydown handler). Focus is not returned to the trigger; it was on a page link afterwards.
- 10 controls have no accessible name: `#idxCity`, `#idxMin`, `#idxMax`, `#idxBeds`, `#idxBaths`, `#idxLot`, `#idxSqft`, `#idxName`, `#idxPhone`, `#idxEmail`. 9 `<label>` elements have no `for` and do not wrap the control.
- Type pills are `<button>`s that toggle `.on` with no `aria-pressed`.
- `openIdx()` sets `body` overflow to hidden (from the code; not measured). The panel fits: 353x614 at (11,27) in a 667px viewport.
- Not tested: opening it by keyboard at 1280 (the trigger is in the header and is reachable), because the test reached the 40-Tab limit first. The markup and script are the same on desktop.

### 4.4 Other dialogs

`#ltr-gate` on /invest/long-term-rental/ has `role="dialog"`, `aria-modal="true"`, `aria-labelledby`. Not opened in testing (it gates a form).

## 5. Page weight

### 5.1 HTML (clone, 132 pages, uncompressed; brotli level 11 in brackets)

| Page | HTML | Inline JS (excl. JSON-LD) | JSON-LD | Inline `<style>` | `style=""` attributes | Inline SVG | Elements |
|---|---|---|---|---|---|---|---|
| /sell/ | 164.3 KB (31.3) | 23.7 KB | 17.0 KB | 8.7 KB | 39.9 KB | 5.8 KB (19) | 1,247 |
| /invest/rental-returns/ | 159.5 KB (30.9) | 37.9 KB | 8.9 KB | 13.5 KB | 32.5 KB | 19.4 KB (7) | 1,313 |
| /buyers/relocating/cost-of-living/ | 123.7 KB (29.6) | 39.6 KB | 9.2 KB | 21.4 KB | 9.3 KB | 2.4 KB | 835 |
| /buyers/buying-in-myrtle-beach/ | 123.7 KB (25.6) | 23.1 KB | 12.0 KB | 8.8 KB | 22.8 KB | 12.4 KB | 948 |
| /invest/long-term-rental/ | 123.6 KB (27.1) | 38.4 KB | 13.0 KB | 8.1 KB | 21.8 KB | 0.7 KB | 799 |
| Median of 132 | 87.0 KB | mean 22.9 KB | | mean 8.9 KB | | | |

- Inline JS (excluding JSON-LD) is 22.1 KB on the median page, 12.3 KB minimum, 40.5 KB maximum. Most of it is the same on every page: the popup script with its WebGL keyer, the `c3SendForm` CRM sender, the analytics wrapper, the IDX modal.
- Every page carries the IDX modal form and the popup form markup, used by few visitors.
- No page has more than one `<img>`. There are no heavy images. Inline SVG maps are at most 19.4 KB.
- HTML transfer as measured by Lighthouse: 23 to 29 KB per page. HTML is not the problem.

### 5.2 Requests per page (Lighthouse mobile Set A)

15 to 22 requests and 450 to 588 KB on article pages; /map/ 289 requests and 6,579 KB. The four largest on a typical page: GA 174 KB, poster 82 KB, Fraunces 81 KB, Fraunces 67 KB.

### 5.3 Caching (live headers)

- `/assets/*`: `max-age=31536000, immutable`. Good.
- `/popup.mp4`, `/popup-green.mp4`, `/popup-poster.jpg`: `max-age=14400, must-revalidate` (4 hours). Not covered by the `_headers` rules.
- HTML: `max-age=0, must-revalidate`. Intended.
- Security headers present: HSTS, nosniff, Referrer-Policy, Permissions-Policy. No CSP and no X-Frame-Options (not scored by Lighthouse 13 here).

## 6. Motion

- `prefers-reduced-motion` handling exists only in CSS: it shortens animations and transitions and hides the particle canvas. JavaScript ignores it: the particle loop keeps running (1.7), the carousel keeps advancing, the eyebrow "scramble" keeps replacing letters with random characters for 500 to 800 ms, and the popup video plays.
- The scramble effect writes random characters into `.eyebrow` and `.hero-eyebrow` text for up to 800 ms; a screen reader reading during that window reads noise.

## 7. Owner's own test (repo file "Mobile Speed test Failed.pdf")

PageSpeed Insights, https://chapter3realty.com/, mobile, June 24, 2026, Lighthouse 13.4.0: Performance 64, Accessibility 95, Best Practices 100, SEO 100. FCP 3.2 s, LCP 3.2 s, TBT 1,120 ms, CLS 0.042, SI 3.2 s. GTM 156 KB and 904 ms main thread; main-thread work 4.8 s; JS execution 1.6 s; 20 long tasks; unused JS 65 KB; unused CSS 18 KB. Contrast failures listed: `.btn-brass` buttons "MEET THE TEAM" and the phone button, "COMMON QUESTIONS" eyebrow, `--muted` FAQ text, footer text. The site has changed since: GA is now deferred, and today's homepage mobile score is 87 (A) / 75 (B), TBT 94 ms (A) / 545 ms (B).

## 8. Raw data

Session scratchpad, not committed (may be removed when the session ends):
`/tmp/claude-0/-home-user-Blog-Brain/8900fb2a-1006-5ba7-88a3-019838e5433c/scratchpad/perf/lh2/` (Set A JSON), `perf/lh3/` (Set B), `perf/trace/` (trace of the mobile paint artifact), `a11y/axeFull1280.json`, `a11y/axeLocal1280.json`, `a11y/axe375.json`, `a11y/popup.json`, `a11y/idx.json`, `a11y/focus2.json`.

## 9. Findings ranked, with the fix

| # | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| 1 | Critical | Listing search modal is hidden from screen readers while open, and focus never enters it | 2.4/4.3: `aria-hidden="true"` stays on the open modal, empty accessibility tree; 6 of 6 Tabs outside; 10 unnamed controls; 131 pages | In `openIdx()` set `aria-hidden="false"`, add `aria-modal="true"`, focus the first field, trap Tab, restore focus in `closeIdx()`; add `for`/`id` to the 9 labels; `aria-pressed` on pills |
| 2 | High | Brass text fails contrast sitewide | 1,830 nodes on 130 of 132 pages; 93% are `var(--brass)` at 2.75 to 3.44:1 | Add a text token for brass on light grounds, e.g. `#965420` (5.12:1 on ivory, 4.69:1 on ivory-2); keep `#c4783a` for decoration and large display type only; put navy text on `.btn-brass` or darken the button |
| 3 | High | Timed popup: focus stays behind it, background not inert, covers the full mobile screen at 10 s | 4.1: 4 Tabs after open all outside; no inert; full-viewport cover on 131 pages | Focus the close button on open; set `inert` on `header`, `main`, `footer` while open; do not auto-open on mobile article pages, or open on exit intent or after a scroll depth instead |
| 4 | High | Unlabelled inputs and selects on calculators and the contact form | 16 `label` + 3 `select-name` nodes on /buyers/cost-to-own/, /sell/net-proceeds/, /contact/, /invest/long-term-rental/ | Give each `<label>` a `for` matching the control `id` |
| 5 | High | Mobile performance 63 to 87 on every article page | 1.1 | Items 6 to 10 |
| 6 | Medium | Web font swap causes layout shift up to 0.379 under throttling | 1.5 | Preload the two or three woff2 files used above the fold; add metric-matched fallback faces (`size-adjust`, `ascent-override`) for Fraunces and DM Sans; load `fonts.css` normally or inline its `@font-face` rules |
| 7 | Medium | GA adds 174 KB and about 350 ms CPU to every page 4 s after load | 1.3 | Load gtag only on first interaction (drop the 4 s timer), or move GA to a server-side or Zaraz integration |
| 8 | Medium | Cloudflare JS Detections script costs 421 ms CPU and drops Best Practices to 81 | 1.3, 1.6 | Turn off "JavaScript detections" / Bot Fight Mode for the static site if bot scoring is not needed; also drop one of the two analytics products |
| 9 | Medium | Popup media loads on every page view | 82 KB poster on 131 pages; 676 KB video at 6 s on the first page of each session; 3.79 MB fallback file with an unused audio track | Remove the `poster` attribute and set it when the dialog opens; strip the audio track and re-encode `popup.mp4` (or delete it, since the green file is used); add a long cache rule for the three files; skip the video under `prefers-reduced-motion` |
| 10 | Medium | Render-blocking 83.5 KB CSS, 88% unused on an article page | 1.3 | Inline the critical CSS for the hero and header; load the rest without blocking; remove dead rules from the old single-page app |
| 11 | Medium | /map/ loads Google Maps 3D immediately: 6.6 to 8.1 MB, 48 s TBT simulated on mobile | 1.4 | Show a static image and a "Load 3D map" button; load the Maps library on click; add a `<main>` and the skip link |
| 12 | Medium | Review carousel auto-advances with no pause, no keyboard access to dots | 3.3 | Stop auto-advance on focus and touch and add a pause button, or remove auto-advance; make dots `<button>`s with names; `tabindex="0"` on the scroller |
| 13 | Medium | Inputs with no visible focus indicator | 3.1: /contact/ 4 fields, /invest/rental-returns/ 7 controls and 8 map areas | Add `:focus-visible { outline: 2px solid var(--navy); outline-offset: 2px }` for inputs, selects and focusable SVG areas |
| 14 | Medium | Links distinguished by colour alone | 39 pages, 103 nodes; fixed on 38 of them by the pending CSS | Deploy the pending CSS; underline inline body links |
| 15 | Low | Particle canvas runs forever on desktop, also under reduced motion | 1.7: 341 ms script per 10 s idle | Stop the loop when the canvas is hidden, when the tab is hidden, and under reduced motion; or remove it |
| 16 | Low | Fake search bar `div onclick` on 5 pages | 3.4 | Make it a `<button>` |
| 17 | Low | Scrollable tables not keyboard reachable | 6 of 15 pages at 375 | `tabindex="0"`, `role="region"` and an `aria-label` on each `overflow-x:auto` wrapper |
| 18 | Low | Empty first `<th>` in comparison tables (14 pages); `td-has-header` on 2 | 2.1 | Put text in the corner cell or use `<td>`; add `scope` |
| 19 | Low | Content outside landmarks (17 pages) | 2.1 | Move the trailing `body > section` inside `<main>` |
| 20 | Low | Header menus lack `aria-expanded`; 80-link mega menu skips links when tabbed fast | 3.2 | Add `aria-expanded` and `aria-controls` to triggers and the burger; drop the `visibility` transition delay |
| 21 | Low | TCPA consent text at 9.5 to 10.2 px in the popup | 4.1 | Raise to at least 12 px |
| 22 | Low | Accessibility statement claims "readable text and contrast, keyboard navigation" | /accessibility/ | Update after fixes 1 to 4 |
