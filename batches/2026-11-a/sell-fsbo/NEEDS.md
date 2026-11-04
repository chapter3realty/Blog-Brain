# Needs: /sell/fsbo/

Not for this page's spec; for the lead.

1. **/sell/ hub** carries the same conflicting ad spend and "3 million" views as the old FSBO page, names Devin in copy, and calls the Section 121 exclusion a South Carolina rule (judge's notes for /sell/). Hubs are a later group; flag it there. Facts that can carry over from this ledger: rows 14 to 18, 20, 26.
2. **Raw deeds with names** for rows 23 and 24 are read from `scratchpad/wf2/submarkets-little-river/raw/` (a sibling's re-pull of the 53 weekly AcclaimWeb searches). A container restart deletes them. The rerun line is in `<web2>/data/2026-11-a/sell-fsbo/README.md`.
3. **Commons API** returned HTTP 429 during research; the three FSBO sign candidates in PLAN.md were not opened. The builder checks them at full size or uses the partner's photo.
4. **Checkpoint not pushed (2026-11-04).** The root filesystem has 56 MB free. `checkpoint.sh` cannot clone Blog-Brain (about 550 MB) into the scratchpad, so `git clone` fails with "No space left on device". About 20 old `scratchpad/checkpoint-batches-*` clones (550 to 750 MB each) and `scratchpad/wf2` (7.6 GB) fill the disk. They belong to other helpers, so this helper did not delete them. `web.patch` and `web.base` are written in this folder (17 files: the data folder). Rerun the checkpoint command once space is freed. The pathspecs `specs/fsbo.js` and `chapter3realty/images/2026-11-a/sell-fsbo` do not exist yet. If they are passed, `git add -N` fails and the patch comes out empty, so leave them out until the builder creates them.

## Builder, 2026-11-04 (spec `specs/fsbo.js`, version 1)

5. **The coaching fee (owner question Q1) is still open.** The page says "a flat fee, credited back in full if you list with us", as the live page did, and prints no amount. The judge called the fee "the one number this reader needs". When the owner gives it, add it to the three-ways table (`PATHS`, the coaching row), the coaching section and the end band, and add the registry row in PROPOSED.md item 3.
6. **Q4 (an MLS entry for a coached seller) and Q7 (who holds earnest money) are left off the page.** Nothing on the page depends on them.
7. **Share image.** `photos.js crops` needs a source 1200 px on its short side; the Surfside Beach frame here is 1200 x 675, so the page has no 1x1 or 4x3 crop. The spec passes the 16x9 file itself as `pageImages` (og:image and Article.image). The partner's FSBO sign photo (shot list 1) should replace it, with crops.
8. **Preview port.** Port 8784 was already held by another helper's preview of `scratchpad/web2` (started 06:00). This page's preview and critic ran on port 8794 against `pkg2`. Nothing was stopped.
9. **Dates.** `build.js audit` fails only on this page's dates (schema 2026-07-25 and visible "Updated July 25, 2026" against sitemap 2026-09-05), as expected before the lead runs `node build.js dates`.
