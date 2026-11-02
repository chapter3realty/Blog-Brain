# Needs: /buyers/va-loans/

No shared helper change needed. The map uses area-map.js regionMap({ name, places }) as documented; the charts use glass.js as other pages do.

## tools/checkpoint.sh: a missing pathspec empties web.patch

At the research stage `specs/va-loans.js` and the images folder do not exist yet. `git add -N -- <all pathspecs>` then fails ("pathspec 'specs/va-loans.js' did not match any files"), nothing is marked intent-to-add, and web.patch comes out empty with no error. Workaround used here: the checkpoint was run with only the paths that exist (`data/2026-11-a/buyers-va-loans`). Suggested fix: add only the pathspecs that exist, for example filter with `[ -e "$WEB/$p" ]` before `git add -N`, and warn when web.patch is empty.

## Build stage, 2026-11-02

- **exiftool is not installed in this container,** so `tools/image-meta.js` fails S13 on "embedded metadata cannot be read" for every image on the page (and `photos.js embed` cannot run). The page's ImageObject JSON-LD is in (`photos.js imageSchema`), so the schema half passes. The Warbird Park files in `images/2026-11-a/buyers-va-loans/` need `node tools/photos.js embed data/2026-11-a/buyers-va-loans/photos.json chapter3realty` on a machine with exiftool before upload. apt could not find `libimage-exiftool-perl` here.
- **The page CSS repeats /buyers/programs/'s three fixes** (its NEEDS.md 8 to 10): the end band drawn as the slim bar when the feed's MLS notice follows it, the feed's search box running past a 320 px screen, and the header gap between 1000 and 1100 px. They belong in glass.js and the shared CSS.
- **The site footer** says "The Myrtle Beach investor-focused brokerage. DSCR analysis, STR analysis ..." on a page for veterans buying a home to live in (CRAFT 4, "The page's surroundings are part of the page"). A site fix, not this page's.
- **Wikimedia Commons answered 429** (rate limit) for every search from this container, so no new Commons photo could be looked at. The two photos are public domain: the USGS aerial already on /hoa/reserves/, and the Library of Congress Warbird Park photo (its batch 2026-10-b record never reached the site; this page carries its own files).

## Fix round 1, 2026-11-02

- **photos.js cuts a credit at its first ". " before a capital** (`tools/photos.js` line 528, `split(/\.\s+(?=[A-Z])/)[0]`). "Photo: Carol M. Highsmith, public domain, ..." became creditText "Carol M"; "U.S. Geological Survey" became "U.S". Every page with a credited initial or "U.S." has a cut creditText in its ImageObject. Workaround in this spec: `fixImg` and `fullCredit` put "Carol M. Highsmith" back. Suggested fix: cut at ", " or at ". " only after a word of 3 or more letters, or take `rec.author` when the credit starts with it.
- **photos.js creditsList** says "Chapter3 Realty resized these photos and cropped some of them" when the page has one photo. A plural only when there are two or more.
- **The homes strip** (`idx-lib/feeds.js` VA_FEED) showed the fallback title "Homes with 3 or more bedrooms under $400,000" and no homes in the preview. On the first phone screen it pushes "The short answer" to screen 2. Both reviewers flagged it. Check on the live edge that VA_FEED fills, and consider placing the strip after the short answer on question pages.
- **The byline date and the feed's date differ** (byline "Updated June 12, 2026", feed box "Updated October 26, 2026"). `node build.js dates` (the lead's step) sets the byline; the audit also flags schema dateModified and the sitemap.
- **The headline in data/headlines.json** ("VA loans in Myrtle Beach: what the VA appraisal checks here") differs from this page's H1 and title ("which condos and homes qualify"). The page now names the VA-listed communities with condos for sale, so it proves its H1. The lead's stitch should keep the spec's H1.
- **Map labels at 320 px** (area-map.js regionMap) are about 9 px high. Legible, small. A shared helper.
- **The CRM map API's `subdivision=` match is a substring match** (for example "spinnaker" also returns Spinnaker Cove, and "@" in a name returns every condo). `check-communities.py` checks each community by street before it reaches the page; any other page that names communities from this API needs the same check.
