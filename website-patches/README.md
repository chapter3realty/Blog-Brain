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
