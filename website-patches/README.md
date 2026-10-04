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

**2. Company author (S6, T1; owner rule 2026-10-04).**

- The byline reads "By Chapter3 Realty · Updated <date>". No person is named.
- The Article and WebPage `author` is the company, `{"@id": "https://chapter3realty.com/#org"}`.
- `spec.author` is no longer needed. An old spec that says "tim" or "devin" still builds, with a warning, and gets the company byline.
- The generator refuses any page that names Devin anywhere, in the copy or the schema.
- Run `node <blog-brain>/tools/site-upgrade.js chapter3realty --write` first. The generator copies the live page's head, and until that runs the head still lists Devin in its schema.

**3. `h.figure(media, caption)` (H4).**

- Wraps an `<img>` with alt text, or an `<svg role="img" aria-label="...">`, in a `<figure>` with a visible caption.
- It throws if the alt or label is missing or shorter than 12 characters.

## `logo-chapter-iii.patch`: the logo reads "Chapter III"

```
git apply <blog-brain>/website-patches/logo-chapter-iii.patch
node build.js stitch
node build.js check
```

- Changes the logo in `partials/header.html` and `partials/footer.html` from "Chapter3" to "Chapter III", with "III" in copper as the "3" was.
- Adds `aria-label="Chapter III Realty, home"`, so a screen reader says the name instead of "I I I".
- `stitch` copies it to every page. Screenshots: `audit/evidence/shots/logo-before-1280.png`, `logo-after-1280.png`, and the 390-pixel phone versions.
- It changes only the logo. Page titles, schema, the footer's legal line ("Chapter3 Realty Corp") and the copy still say Chapter3.

## `speed.patch` and `contrast.patch`

See `audit/SPEED-AND-CONTRAST.md`.

## How `mkpage.patch` was tested

**Regenerating `specs/llc.js` after `site-upgrade.js --write` (2026-10-04):**

- The byline is "By Chapter3 Realty · Updated <date>", the page names Devin nowhere, and `build.js check` and `audit` pass after `node build.js dates`.
- The scorer passes the byline rule (T1).
- `<main>` differs by the byline, the generation date, and one hand-added link the live page has and the spec lacks. That link drift predates the patch; see STUDY finding 1.

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
