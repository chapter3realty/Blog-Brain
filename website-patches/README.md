# Patches for the website repo

This session can read `chapter3realty/Chapter3-Website` but cannot push to it. The changes it needs are kept here as patches, each tested against a clean copy of branch `claude/github-account-check-wutg8b`.

## `mkpage.patch`: generator upgrades

```
cd <website-repo>
git apply <blog-brain>/website-patches/mkpage.patch
```

It changes three things in `tools/mkpage.js`.

**1. Per-page share image (S5).**

- If `chapter3realty/og/<slug>.jpg` exists, the page uses it in:
  - og:image
  - twitter:image
  - their alt text, which is set from the H1
  - Article.image
  - WebPage.primaryImageOfPage
- Make the card first with `node <blog-brain>/tools/ogcard.js chapter3realty /<url>/`.
- A spec can also set `ogImage` and `ogImageAlt` directly.
- The chrome-identity self-check now treats the image metas as page identity.

**2. Person author (S6).**

- The Article `author` is the byline person, as a Person with `@id`, `name`, `jobTitle`, `url` and `worksFor`. `reviewedBy` is the other person.
- Tim's schema name is "Timothy Nash", with `alternateName` "Tim Nash", per the owner's 2026-09-03 instruction.
- Devin's job title is "Operations Officer" and nothing else, per the 2026-09-07 rule.

**3. `h.figure(media, caption)` (H4).**

- Wraps an `<img>` with alt text, or an `<svg role="img" aria-label="...">`, in a `<figure>` with a visible caption.
- It throws if the alt or label is missing or shorter than 12 characters.

## `mkpage-hero-media.patch`: a picture in the first screen

Apply it after `mkpage.patch`:

```
cd <website-repo>
git apply <blog-brain>/website-patches/mkpage.patch
git apply <blog-brain>/website-patches/mkpage-hero-media.patch
```

- A spec may set `heroMedia`: plain HTML placed in the hero, right under the H1 and above the byline.
- It sits under the H1, not under the sub line. On a 390 x 844 phone screen, a row under the sub line started 787 to 885 pixels down, so on two of the four 55+ pages it was below the first screen. Under the H1 it ends by 774 pixels on all four.
- Pages without it are unchanged.
- The 55+ pages of batch 2026-10-a use it for a small icon row (beach, hospital, groceries), so a phone's first screen shows a picture (STANDARD P7, review 4).
- Tested with `git apply --check` on a copy of the live branch after `mkpage.patch` (2026-10-10). With both applied, `tools/mkpage.js` matches the draft that built the batch.

## `mkpage-page-images.patch`: the hero photo in Article.image

Apply it after the two patches above:

```
cd <website-repo>
git apply <blog-brain>/website-patches/mkpage.patch
git apply <blog-brain>/website-patches/mkpage-hero-media.patch
git apply <blog-brain>/website-patches/mkpage-page-images.patch
```

- A spec may set `pageImages`: a list of ImageObjects, or a function that returns one. mkpage calls the function after the sections are built.
- They go in `Article.image`. The 4x3 one goes in `WebPage.primaryImageOfPage`. `og:image` and `twitter:image` keep the share card.
- Why: Google says to avoid "an image with text in the schema.org markup", and the share card is text. Google's Article guide asks for images in 16x9, 4x3 and 1x1. See `rules/image-metadata.md`.
- mkpage refuses an entry that is not an ImageObject on chapter3realty.com of 50,000 pixels or more.
- The 55+ pages of batch 2026-10-a set `pageImages: () => ph.pageImages()` (the kit's hero crops).
- Pages without it are unchanged.

**Tested 2026-10-11** on a clean clone of the live branch at 54703db: `mkpage.patch`, then `mkpage-hero-media.patch`, then this one, each passes `git apply --check`. The result matches the draft that built the batch, apart from the live branch's own datePublished rule.

`mkpage.patch` was refreshed the same day: the live branch had changed the line that sets the page date (a spec's datePublished, else the page on disk, else today), and the old patch no longer applied. The refreshed patch makes the same three changes.

## Order

Apply in this order, on a clean copy of the live branch:

```
cd <website-repo>
git apply <blog-brain>/website-patches/mkpage.patch
git apply <blog-brain>/website-patches/mkpage-hero-media.patch
git apply <blog-brain>/website-patches/mkpage-page-images.patch
git apply <blog-brain>/website-patches/readability.patch
git apply <blog-brain>/website-patches/mkpage-reading.patch
node tools/mkpage.js specs/<slug>.js     # once for every spec page
node build.js rehash                     # new cache names for the two changed stylesheets
node build.js dates
node build.js check
node build.js audit
```

- `readability.patch` touches only the stylesheets and eight hand-built pages. It applies alone, before or after the mkpage patches.
- `mkpage-reading.patch` touches only `tools/mkpage.js`. It applies after `mkpage.patch` and `mkpage-hero-media.patch`, with or without `mkpage-page-images.patch`.
- `speed.patch` and `contrast.patch` are not in the list. Both are already on the live branch (deployed 2026-10-05, in its own revised form), and neither applies to it any more.

**Tested 2026-10-11** on a clean clone of the live branch at commit 54703db. All five patches pass `git apply --check` in the order above. After them, three spec pages were regenerated, then `rehash`, `check` and `audit` all passed. (`dates --check` cannot be tested on a one-commit clone: it flags every page there, with or without these patches.)

## `readability.patch`: reading size, links, open FAQ answers, tap targets, fonts

This puts the page design report (`reports/Page design for readers and search.md`) into the stylesheet. Every rule is in one commented block at the end of `assets/app.8e7fe83324.css`, after the contrast rules. Type and link rules are scoped to `body:not(.home)`, so the homepage keeps its own type.

| What | Before (live, measured) | After |
|---|---|---|
| Article text on phones | 17px, line height 1.75 | 18px, line height 1.6 |
| Article text from 900px wide | 17px | 19.5px |
| Characters per line in article text, 1280 wide | median 62 to 78, longest 87 to 117 | median 55 to 65, longest 63 to 75 |
| Text colour | #1c2028, 15.4:1 on #fbf8f2, 14.2:1 on #f4efe5 | unchanged (the owner made it the ink on 2026-10-02) |
| Question headings (H3) from 900px | 21px, line height 1 | 23px, line height 1.3 |
| Tables | 15.6px | 17px |
| Photo captions | 14.5px | 16px |
| Links in text on hand-built pages | brass ink, 5.0 to 5.4:1, no underline | the same colour, underlined |
| FAQ answers on 8 hand-built pages | 79 answers in closed `<details>` | open text under H3 question headings |
| Tap targets under 44px on a phone, 390 wide | 43 to 55 per page | 1 on article pages; 10 to 13 on the 55+ pages and tool pages (see below) |
| Font swap | `font-display: swap` | `font-display: optional` |

How it works:

- **Text size.** `html` is now `106.25%`, so rem follows the reader's own browser text size. At the default it is still 17px. The size rules match the inline styles that `tools/mkpage.js` and the hand-built pages use for prose (`color:var(--muted);line-height:1.7...`). Cards, labels, tables and small print set their own font-size and keep it.
- **Line length.** The column is 34em, not 65ch. In DM Sans 1ch is the width of a zero, about 0.66em, so 65ch measured 92 characters a line. 34em measures about 65.
- **Links.** Links in paragraphs, list items and table cells are underlined. Their colours do not change: brass ink on light grounds, brass-2 on navy, navy where the page sets it.
- **FAQ.** The eight pages are /buyers/buying-in-myrtle-beach/, /buyers/common-mistakes/, /buyers/relocating/, /buyers/retirees/, /buyers/second-home/, /buyers/va-loans/, /sell/ and /sell/out-of-state-buyers/. Only tags change, so `build.js dates` does not move their dates. The calculator rows on /buyers/relocating/cost-of-living/ are not an FAQ and keep their `<details>`.
- **FAQPage JSON-LD stays.** Google stopped showing FAQ rich results on 7 May 2026, so it earns nothing there. It does no harm, Bing and other engines can still read it, and the website's PLAYBOOK (A25) and `tools/mkpage.js` already check that it matches the visible answers word for word. Removing it would mean changing that rule for no gain.
- **Tap targets.** Buttons are at least 44px tall. On phones and touch screens, the header's phone icon and menu button are 44 by 44, the call bar under the header is 44px tall, footer links are 44px rows, and breadcrumb links get a 45px hit area that does not move the line. Footer links sit in two columns below 600px wide, so the footer does not get longer.
- **Fonts.** The 21 faces in `assets/fonts.5be9fb17b5.css` change from `swap` to `optional`. The three fonts every page uses are already preloaded by the `Link` header in `_headers`, so in the normal case the web font is ready before the first paint and nothing changes. When a font is late, the page keeps the size-matched fallback (from the speed work) instead of swapping, so the text cannot move.

Layout shift (CLS), measured with Playwright on a cold load, 390 wide, slow 4G (150 ms, 1.6 Mbps) and a 4x slower CPU, three runs each:

| Page | Fonts preloaded, `swap` | Fonts preloaded, `optional` | Fonts not preloaded, `swap` | Fonts not preloaded, `optional` |
|---|---|---|---|---|
| /invest/llc/ | 0 | 0 | 0.0002 | 0 |
| /buyers/55-plus-communities/myrtle-trace/ | 0 | 0 | 0.039 to 0.047 | 0 |

The trade-off: on a first visit where the font arrives late, that page shows the fallback font (Georgia or Arial, sized to match). The next page uses the web font from the cache.

What is still under 44px on a phone, and why it is not in this patch:

- The photo credits on the 55+ pages ("Photo: name", 14px tall). They come from the batch kit's own CSS (`specs/_55-plus-kit.js`), so the fix belongs there.
- Calculator inputs (40 to 41px), the consent checkboxes (15px) on forms, the persona tabs on /sell/ (36px) and the review dots on the homepage (24px). Each changes a tool or the homepage layout, so each needs its own look.
- Links inside a sentence (WCAG exempts them).

Found and not changed:

- The "/" separators in the breadcrumb on the navy heroes (/buyers/retirees/, /buyers/va-loans/) are `--muted`, which is now the ink, on navy: 1.82:1.
- Small print with its own font-size (sources lines, legal notices, a few intro paragraphs on /sell/) still runs past 75 characters a line on a desktop.
- On a phone the short answer still starts below the first screen (1,012 to 1,286 pixels down at 390 x 844). Moving the button gains 78 pixels. The rest is the hero: 85px of top padding, the breadcrumb, the eyebrow, a 4 to 7 line H1 and a 30-word sub.

## `mkpage-reading.patch`: the button under the short answer, and "On this page"

It changes `tools/mkpage.js` only.

**1. The hero's call-to-action button moves under the short answer.** In the hero it came between the sub line and the answer and pushed the answer down. The short answer now starts 78 pixels higher on a phone and on a desktop. A spec may add `heroCta.text`, one sentence shown before the button.

**2. "On this page".**

- A plain list of links to every H2 section, the FAQ included, under the short answer and its button.
- Each label is the H2's own text. The closing call-to-action band is not a section and is not listed.
- It is not sticky. Each link is a 44px row.
- It appears on a page with 5 or more H2s. `toc: false` in a spec leaves it out; `toc: true` keeps it on a shorter page.
- Every H2 section gets an id: the spec's own `id`, else one made from the H2 text, cut at a word near 60 characters, that no other element on the page uses.
- A section reached from the list lands below the sticky header (the stylesheet in `readability.patch` sets the margin). Measured at 390 and 1280: the H2 sits 88 and 82 pixels below the header's bottom edge.

**3. FAQ.** Nothing changes. mkpage already writes each question as an H3 and each answer as an open paragraph.

Rebuilt and checked on 2026-10-11, with all five patches applied to 54703db: the four 55+ pages (Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Myrtle Trace, Seasons at Prince Creek West), /invest/llc/ (topic guide), /invest/what-is-being-built/ (data page with charts) and /sell/rental-property/ (seller guide). On each, every list label equals its H2, every link resolves, no id repeats, and `build.js audit` passes. No page scrolls sideways at 320, 390 or 1280.

## `logo-chapter-iii.patch`: on hold

The owner will supply the logo (2026-10-05). This text-only version, "Chapter" plus a copper "III", is kept for reference and should not be applied.

## `speed.patch` and `contrast.patch`

See `audit/SPEED-AND-CONTRAST.md`.

## How `mkpage.patch` was tested

**Regenerating `specs/llc.js` unchanged:**

- The only head and schema differences are the image fields, the alt text and the Person author.
- `<main>` differs only by the generation date, plus one hand-added link the live page has and the spec lacks. That drift predates the patch; see STUDY finding 1.

**The pilot spec:**

- It generates with the patch applied.
- `build.js audit` passes.

**`git apply --check` passes on a clean clone.**

## The sitewide head fixes do not need a patch

For pages that are not generated, run the tools from this repo against the website folder. See WORKFLOW Lane U, step U1:

```
node <blog-brain>/tools/ogcard.js chapter3realty --all
node <blog-brain>/tools/site-upgrade.js chapter3realty            # dry run
node <blog-brain>/tools/site-upgrade.js chapter3realty --write
node build.js preflight
```
