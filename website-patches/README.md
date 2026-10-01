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

## How it was tested

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
