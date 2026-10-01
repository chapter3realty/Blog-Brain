# Technical audit evidence

Date: 2026-10-01.

**Source.** A clean clone of branch `claude/github-account-check-wutg8b`, commit `511a2a5`. It has the same 127 sitemap URLs as the live site.

**Live.** https://chapter3realty.com, fetched the same day.

**Tools.**

- `tools/site-audit.js`, written for this audit. It has controls in `tools/site-audit.test.js`.
- The website's own `node build.js check` and `node build.js audit`.
- curl.

**Scanner sanity check.** A planted link to a missing page and a planted href to a missing `#id` both fired. An earlier plant silently did not land, because the page had no `#lead-form` link. The scanner was not trusted until a plant that did land was caught.

## What is clean

These were all tested. None of them is a problem today.

- **Sitemap URLs.** All 127 return 200.
- **Redirects.** http, www, no trailing slash and `index.html` each reach the canonical URL in one permanent hop (301 or 308).
- **Missing pages.** A missing page returns a real 404. The 404 page is `noindex`.
- **Private files.** Repo files (`.git/config`, `build.js`, `HANDOFF.md`) are not served.
- **Redirect rules.** All 5 `_redirects` rules return 301 to a page that exists. There are no chains.
- **Internal links.** No broken internal links. No broken `#anchor` links on any page or across pages.
- **Canonicals.** Every canonical equals the page URL. The sitemap equals the set of indexable pages.
- **llms.txt** lists every sitemap URL.
- **JSON-LD** parses on every page. The Organization block is identical on all 127 pages.
- **Robots.txt** allows all major search and AI crawlers. Spoofed GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Googlebot and Bingbot user agents all receive the full page.
- **Caching.** Shared JS, CSS and fonts are cached for a year and served compressed with Brotli.
- **Security headers.** HSTS, nosniff, referrer policy and permissions policy are set.
- **Email.** Google Workspace MX, SPF and DMARC records exist.

## Problems found

| # | Severity | What | Evidence | Fix |
|---|---|---|---|---|
| T1 | High | **The Google Maps API key is unrestricted.** Key `AIzaSyAFTN...` is in the source of every page. | The server-side Geocoding and Places APIs answered `INVALID_REQUEST`, not `REQUEST_DENIED`, so no referrer restriction applies. The Static Maps API returned an image with no referrer. Anyone who copies the key from page source can bill Geocoding, Places and Static Maps calls to the owner's Google Cloud account. One 1x1 static map was requested to confirm this. | In Google Cloud Console, restrict the key by HTTP referrer to `chapter3realty.com/*` and `*.chapter3realty.com/*`. Restrict it to the Maps JavaScript API and any other API the pages actually call. Set a daily quota cap and a billing alert. |
| T2 | High | **The website repo is public on GitHub, and it holds private material.** | `research/*/owner-answers*.md` holds the owner's verbatim answers, including notes marked "Do NOT publish (about people)". It holds confidentiality-hold notes and attorney and AfBA arrangement notes. `HANDOFF.md` mentions the "South Carolina licensing review". The repo also holds `Mobile Speed test Failed.pdf` and the full gate logic. | Make `chapter3realty/Chapter3-Website` private. Cloudflare Pages deploys by wrangler upload, so it does not need a public repo. Make `chapter3realty/Blog-Brain` private too: it summarizes the same documents. |
| T3 | High | **11 pages have unbalanced markup inside `<main>`.** The browser re-parents what follows. | The 8 submarket pages have one extra `</div>`. It sits near the end of the sidebar ("1031 exchange guide"), so the next block lands outside its wrapper. `/invest/` (93 opening tags vs 92 closing) and `/buyers/coastal-insurance/` (20 vs 19, plus 8 `<section>` vs 7) each have an unclosed `<div>`. `/buyers/relocating/cost-of-living/` has one extra `</div>` at the very end. The site's own `build.js` only *warns* on this. MISTAKES 63 records the same defect class rendering paragraphs invisible. | Balance the tags. Make `build.js` error on it, not warn. The rendered effect is measured in `render-qa.md`. |
| T4 | High | **`%s` template residue** on `/hoa/special-assessments/` and `/hoa/reserves/`. | The rendered text reads "Our AI document analysis%s%sAnalyze my HOA documents". The headline and paragraph were never filled in. | Write the two strings, or delete the two empty paragraphs. |
| T5 | Medium | **3 broken source links**, on YMYL pages, where a source link is part of the trust signal. | `/market-reports/july-2026/` links `https://www.coastalcarolinas.org/market-statistics/`, a domain that does not resolve (DNS ENOTFOUND, confirmed by two separate network paths). The association's real site is `https://www.ccarsc.org/pages/marketstats/`. `/sell/inherited-house/` links `https://www.scstatehouse.gov/code/t62.php` (404); the Title 62 index is `https://www.scstatehouse.gov/code/title62.php`. `/buyers/relocating/why-myrtle-beach/` links a census.gov press-kit URL that returns 404. | Fix the three URLs. Run `tools/site-audit.js --live` before each deploy. |
| T6 | Low | **45 external links return 401, 403, 405, 429 or 503 to a script.** | Census QuickFacts (9 pages), Zillow, BLS, eCFR, FRED, Fannie Mae, Redfin, AirDNA, Facebook and Instagram. These sites block bots; they are very likely fine in a browser. The `myrtlebeach-sc.elaws.us` ordinance links time out (`/invest/j1-rentals/`). | Check the eCFR, elaws and city PDF links once in a browser. Prefer the primary agency page over an aggregator where both exist. |
| T7 | Medium | **The repo branch is ahead of production.** | Live pages load `/assets/app.650a027cfa.css`. The branch references `/assets/app.19a7095691.css`, which is a 404 on the live site. The latest commit, "Homepage redesign v2", changed the shared stylesheet and is undeployed. Deploying this branch for any fix also ships the homepage redesign. | Decide on the redesign before the next deploy, or fix on a branch cut from what is live. Record the deployed commit (PLAYBOOK A39a). |
| T8 | Medium | **`main` on GitHub is stale.** | `main` is the July "Initial push". It lacks 45 live pages, `tools/mkpage.js` and every spec. | Merge `claude/github-account-check-wutg8b` into `main`, or make it the default branch. |
| T9 | Medium | **83 of 127 sitemap `lastmod` values are the same day**, 2026-09-07. | That day's licence sweep changed visible prose on 90 pages, so the dates are honest. But MISTAKES 19 records that a sitemap where most dates match reads as bulk-stamped. | Nothing to fake. Real updates (STANDARD T4) will spread the dates. Do not sweep many pages on one day without a prose reason. |
| T10 | Low | **Cloudflare injects a bot-challenge script** into every HTML page (`/cdn-cgi/challenge-platform/.../main.js` in a hidden iframe). Cloudflare Email Obfuscation is on. | The challenge script is extra JavaScript on every page view, counted in `perf-a11y.md`. Bot Fight Mode can block or challenge some verified crawlers. Email Obfuscation turned a third-party address on `/invest/j1-rentals/` into "[email protected]" for clients without JavaScript. | In the Cloudflare dashboard, check Security > Bots: confirm "Block AI bots" is off, and check what Bot Fight Mode does to verified bots. Turn off Email Obfuscation, or accept it. |
| T11 | Low | **No Content-Security-Policy and no `frame-ancestors`.** | The headers have HSTS, nosniff, referrer and permissions policies only. Pages with lead forms can be framed by another site (clickjacking). | Add `Content-Security-Policy: frame-ancestors 'self'` in `_headers`. A full CSP needs a list of the Maps, GA and Cloudflare origins. |
| T12 | Low | **Some media cache for only 4 hours.** | `popup.mp4` (3.8 MB) and the `team/*.webp` photos send `max-age=14400`, so return visitors re-validate them. | Fingerprint them, or add `_headers` rules with long caching. |
| T13 | Low | **DMARC is `p=none`.** | Spoofed mail from @chapter3realty.com is reported but not rejected. | Move to `p=quarantine` after a few weeks of clean reports. |
| T14 | Low | **4 pages have only one body link pointing in.** | `/buyers/waterfront-homes/`, `/hoa/benefits/`, `/hoa/hoa-vs-poa/`, `/hoa/who-pays-for-damage/`. | Add a second contextual inbound link to each (STANDARD S8). |
| T15 | Low | **Two `tel:` links lack the +1 country code.** | `tel:8543332135` on `/invest/long-term-rental/` and `/sell/`. | Use `tel:+18543332135`, the form on every other page. |
| T16 | Low | **`/invest/strategies/dst/` has no Article `image`** and no Chapter3 byline person. It is a guest post by a CFP from Michigan. | JSON-LD. | Add an image. Decide whether a non-local guest post fits a page set built on local authority. |
| T17 | Medium | **llms.txt overstates and contradicts owner rules.** | It lists "DSCR loan qualification" as a specialty. The owner's rule (PLAYBOOK A14a, A17b) is that Chapter3 never presents as doing lending work. It also says "We provide more property-level intelligence ... than is typical for the market", an unsupported comparative claim. | Rewrite those lines. Generate llms.txt from the same claims surface the `build.js` gates scan. |

## The website's own gate

`node build.js audit` on the clean clone: **0 blocking errors, 487 warnings.**

| Warnings | What |
|---|---|
| 111 | No attributed sentence from a named licensed person (A20). |
| 88 | Fewer than half the section headings are questions. |
| 65 | Pages with several sentences over 22 words. |
| 57 | Banned register words still live on older pages: "sets" or "set by" 44, "carry" or "carrying costs" 13. The owner asked for these "hard coded away". New pages error on them; old pages only warn. |
| 54 | Near-duplicate pairs at 25 to 38 percent: 44 of the 45 pairs among the ten "moving from [state]" pages, plus each of the ten against `/buyers/relocating/cost-of-living/`. |
| 31 | Article pages with fewer than 2 primary-source links in the body. |
| 25 | Reading level over grade 8. |
| 18 | H1 names no place. 12 of them are content pages: condo-in-litigation, undisclosed-flooding, relocating/beaches, hoa/documents, hoa/master-insurance-ho6, hoa/rental-restrictions, hoa/reserves, hoa/tax-deductible, invest/accommodations-tax, invest/long-term-rental, invest/str-tax-treatment, invest/strategies/dst. |
| 12 | Unbalanced markup on 11 pages (T3). |
| 10 | More than 2 explicit dates in body copy. |
| 3 | Bylines on heroes the script cannot classify. These need the browser contrast check. |
| 7 | "may" or "might" more than four times on a page. |
| 4 | `.grid-2/3/4` classes that set columns but not `display:grid`. They are inert. |
