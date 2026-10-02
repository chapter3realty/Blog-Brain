# Speed and contrast: what to change, and what it measured

Measured 2026-10-02 on a clean clone of the live branch (`claude/github-account-check-wutg8b`, commit 04fb120). Two tested patches are in `website-patches/`. Both apply cleanly to that commit, alone or together, and pass `node build.js check` and `node build.js audit`.

| Patch | What it fixes | Result |
|---|---|---|
| `contrast.patch` | Text too faint to read on 130 of 131 pages | 1,817 failing text nodes → 6 decorative letters on 1 page |
| `speed.patch` | Analytics on a timer, a popup image on every view, fonts found late, a layout jump on 105 pages | See "Speed: measured result" |

## How to apply both

In the website repo, on the live branch, with a clean working tree:

```
git apply <blog-brain>/website-patches/speed.patch
git apply <blog-brain>/website-patches/contrast.patch
node build.js stitch      # copies the changed footer and GA snippet into every page
node build.js rehash      # gives the changed stylesheet and script new cache names on every page
node build.js check
node build.js audit
```

Both checks must print OK. Then look at three pages in a browser before deploying: `/`, `/invest/llc/` and `/sell/out-of-state-buyers/`. The owner deploys.

Both patches edit the stylesheet in the repo, `app.19a7095691.css`. That stylesheet already holds the owner's change of 2026-09-16 (lighter page backgrounds), which is not yet live. Deploying either patch deploys that change too. The contrast numbers below were measured with it. `speed.patch` also edits one script, `s.35fe572371.js`.

---

## Contrast

### What is wrong

axe-core, the standard accessibility checker, tested every page at 1280 and 375 pixels wide against WCAG 2.2 AA. Body text needs a contrast of 4.5 to 1. Large text needs 3 to 1.

| Measured | Before |
|---|---|
| Pages with at least one failure | 130 of 131 |
| Failing text nodes, desktop | 1,817 |
| Failing text nodes, phone | 1,808 |

What fails, most to least:

1. **Copper text on light backgrounds.** `#c4783a` on `#f1f1f2`, `#fafafa` and white: 1,735 nodes, 2.8 to 3.5 to 1. These are the small capital labels above headings, inline links, table labels and breadcrumbs.
2. **Faded ivory text on navy.** Text at 30 to 50 percent opacity in dark sections and the footer.
3. **Ivory text on copper buttons.** 3.0 to 3.3 to 1.
4. **The green "pass" text,** `#2e7d4f`, on light grey: 4.0 to 4.5 to 1.

Screenshot: `audit/evidence/shots/contrast-before.png`.

### What the patch does

It adds rules at the end of the stylesheet, and `aria-hidden` on six decorative letters on one page. It changes no copy and no layout.

| Where | Before | After | Ratio after |
|---|---|---|---|
| Copper text on light backgrounds | `--brass` `#c4783a` | `--brass-ink` `#91592b`, already in the stylesheet | 4.6 to 5.7 |
| Copper text inside navy sections and the footer | `--brass` | `--brass-2` `#d4894a`, already in the stylesheet | 5.8 on navy, 4.7 on navy-2 |
| Faded ivory text on navy | 30 to 50% opacity | 72% opacity | 6.8 or more |
| Text on copper buttons and bars | ivory | navy | 4.7 |
| Green "pass" text | `#2e7d4f` | `#276a43` | 5.2 or more |
| Italic copper words in headlines | `--brass` | unchanged | Large text, passes 3 to 1 |
| The NC, NY, NJ, PA, OH, VA letters behind the cards on /sell/out-of-state-buyers/ | read by screen readers | `aria-hidden="true"` | Decorative, not text |

The copper look stays. The text copper is one shade darker. Decorative copper (rules, icons, large headline words, button backgrounds) is unchanged.

### Measured result

| Measured | Before | After |
|---|---|---|
| Pages with a failure, desktop | 130 | 1 |
| Failing nodes, desktop | 1,817 | 6 |
| Failing nodes, phone | 1,808 | 6 |

The 6 left are the faint NC, NY, NJ, PA, OH and VA letters behind the cards on /sell/out-of-state-buyers/, at 6 percent opacity. They are decoration, which WCAG exempts, and the patch hides them from screen readers. axe still counts them because they are text. To clear them from the report as well, draw the letters with CSS (`content:attr(data-l)`) instead of text, or remove them.

Screenshot: `audit/evidence/shots/contrast-after.png`. The method is at the end of this file.

### Keeping it fixed on future pages

- In a new spec, never write `color:var(--brass)` for text on a light background. Write `color:var(--brass-ink)`.
- Keep `--brass` for large headline words, rules, icons and button backgrounds.
- On navy, write `color:var(--brass-2)`.
- Never set text below 72 percent opacity.

The patch's rules catch the old inline style, so a page that slips will still pass. The spec should still be right.

---

## Speed

### What is slow

From `audit/evidence/perf-a11y.md` (Lighthouse 13, live site, 2026-10-01):

- Desktop scores 99 to 100 on every page except /map/. Desktop is fine.
- **Phone scores 63 to 87.** No article page reaches 90.
- The page itself is light. What costs time on a phone is what loads around it.

| Cost | Measured on the live site | Cause |
|---|---|---|
| Google Analytics | 174 KB and 350 ms of phone CPU on every page view | A timer loads it at 4 seconds, even when the visitor does nothing |
| Cloudflare "JavaScript Detections" script | 421 ms of CPU; the only reason Best Practices is 81, not 100 | Cloudflare adds it to every page at the edge |
| Popup image | 82 KB on every page view | The `poster` on the hidden popup video downloads at once, even when the popup will not open |
| Layout jump on load | Up to 0.38 CLS ("poor" is above 0.25) on 105 pages | Two decorations behind the hero are placed by the hero's height: a large glow (`.bg-grid::before`) and three blurred circles (`.hero-orb`). When the web font arrives, the hero grows a few pixels and they all move. Lighthouse counts each one's whole area as shifted. The text itself barely moves. |
| Fonts | 104 to 185 KB, requested late | No preload; the font stylesheet loads after the page |
| Second analytics product | 10 KB and 60 ms | Cloudflare Web Analytics runs next to Google Analytics |
| Particle animation | 341 ms of script every 10 seconds on desktop, forever | Runs even when the visitor has asked for reduced motion |
| /map/ | 6.6 MB and a phone score of 31 | The 3D map loads at once |

### What `speed.patch` changes

| File | Change | Why |
|---|---|---|
| `partials/ga.html` | Removes `setTimeout(g,4000)` | GA now loads on the first scroll, tap, mouse move or key press. |
| `partials/footer.html` | The popup video's `poster` becomes `data-poster` | The 82 KB image loads only when the popup is about to open. It still shows: on slow or data-saver connections and when the green video is missing. |
| `assets/app.19a7095691.css` | `.bg-grid::before` keeps a fixed top edge (`top:-40rem` instead of `inset:-100%`) | The glow no longer moves when the hero changes height. It looks the same. |
| `assets/s.35fe572371.js` | Each `.hero-orb` gets its top in pixels, worked out once from the hero's height, instead of a percentage | The circles stay where they first appear. Measured: same positions, within 11 pixels. |
| `assets/app.19a7095691.css` | Fallback fonts sized to match DM Sans and Fraunces (`size-adjust`, `ascent-override`) | Text takes the same space before and after the web font arrives. |
| `_headers` | A `Link: rel=preload` header for the three fonts every page uses | The browser starts the fonts as soon as the page's headers arrive, not after the font stylesheet. With Early Hints on in Cloudflare (Speed, Optimization), they start before the HTML arrives. |
| `_headers` | One-week cache for the three popup files, instead of 4 hours | A returning visitor does not download the 676 KB video again. |

**One trade-off, the owner's call:** without the timer, a visitor who opens a page and leaves without scrolling, tapping, moving the mouse or pressing a key is not counted in Google Analytics. On a phone, almost every visitor scrolls. If the owner wants those visits counted, keep the GA hunk out: delete the `partials/ga.html` section from the patch before applying it. The rest still applies. Nothing else on the site calls `gtag`.

### Speed: measured result

Lighthouse, mobile, applied throttling. Median of three runs per page. "Before" is the live branch; "after" has `speed.patch` applied, stitched and rehashed.

| Page | Score | Total blocking time | Layout shift (CLS) | First paint | Bytes | Requests |
|---|---|---|---|---|---|---|
| /invest/rental-returns/ | 66 → **90** | 501 → 259 ms | 0.352 → **0.041** | 2.20 → 2.24 s | 827 → 572 KB | 19 → 15 |
| /market-reports/july-2026/ | 70 → **91** | 279 → 23 ms | 0.381 → **0.139** | 2.47 → 2.17 s | 750 → 495 KB | 19 → 15 |
| /invest/llc/ | 92 → **97** | 179 → 32 ms | 0.064 → 0.041 | 2.33 → 2.11 s | 760 → 503 KB | 19 → 15 |

What moved the numbers:

- **Blocking time and bytes:** Google Analytics (174 KB) no longer loads during the test, and the popup image (82 KB) no longer loads at all.
- **Layout shift:** the glow and circles behind the hero stay put. The remaining 0.139 on the market report is one italic paragraph that wraps one line longer in the test machine's fallback serif (Liberation Serif). Visitors' phones use Georgia or Noto Serif, which the fallback rules are sized for.
- **Requests:** 19 to 15. The GA script, its two data requests, and the poster.

These scores are higher than the live site's because the local copies carry no Cloudflare scripts. The live gain should be about the same in points. Turning off JavaScript Detections (below) adds to it.

### Changes outside the patch, in order

These need the Cloudflare dashboard, a decision, or more code than a patch should carry.

1. **Turn off Cloudflare's JavaScript Detections** (Cloudflare dashboard, Security, Bots). It costs 421 ms of CPU on every page, and it is the only Best Practices failure. A static site with no login does not need bot scoring in the browser. Expected: Best Practices 81 to 100, about 0.4 s less CPU on a phone.
2. **Use one analytics product.** Turn off Cloudflare Web Analytics (Analytics, Web Analytics) or Google Analytics. Google Analytics is the one the owner reads.
3. **Delete or shrink `popup.mp4` (3.79 MB).** The popup plays `popup-green.mp4` (676 KB). The 3.79 MB file is the fallback when the green file is missing, and it carries an audio track the muted player never plays. Re-encode it without audio, or delete it and let the fallback show the still image.
4. **Stop the particle animation** when the visitor has asked for reduced motion, when the tab is hidden, and on phones. It is in `assets/s.35fe572371.js`.
5. **Do not open the popup at 10 seconds on a phone article page.** It covers the whole screen. Open it on exit intent, or after the reader scrolls past half the page.
6. **Split `s.089a979d4e.js` (53 KB, on 123 pages).** Every page needs only `showPage` and `toggleMobile` from it. Move those two into a small file and load the rest only on the pages that use it. Website MISTAKES 36 explains why this file cannot simply be removed.
7. **Inline the CSS the first screen needs** and load the rest without blocking. The stylesheet is 83.5 KB and 88 percent unused on an article page. Removing it in a test cut first paint from 468 ms to 212 ms. This is the largest remaining gain and the largest job.
8. **/map/: load the 3D map on a click.** Show a still image and a "Load 3D map" button.

### Keeping it fast on future pages

- No new script on every page. A tool a page needs loads on that page.
- No image, video or poster in shared markup that loads before it is shown.
- No decorative element placed by a percentage of its parent's height. Give its top edge a fixed value in px or rem.
- Check one new page with Lighthouse, mobile, before it ships. It should score 90 or more.

---

## Method

**Contrast.** axe-core 4.13 through Playwright and Chromium, rule `color-contrast` only, on 131 pages: every page on the site except /map/. Each page was loaded from a local copy of the site, scrolled to the bottom and back so every reveal ran, with animations and transitions frozen so text was measured at full opacity. The popup and the particle canvas were hidden. Run at 1280 and 375 pixels wide.

**Speed.** Lighthouse 13, mobile, applied throttling (`--throttling-method=devtools`: 150 ms round trip, 1.6 Mbps, 4x CPU slowdown), performance only. Before and after were served from two local copies of the site, built from the clone with and without the patch. Three runs per page and version; the table gives the median.

What a local test cannot show:

- `_headers` is a Cloudflare file. A local server ignores it, so the font preload and the cache rules are not in these numbers. They can only make the live result better.
- The Cloudflare scripts are added at the edge. They are not in the local copies, before or after, so the local scores are higher than the live ones. The difference between before and after is the measure.
- Turning off JavaScript Detections was not measured, because it is a dashboard setting. Its cost (421 ms CPU) was measured on the live site.
