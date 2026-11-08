# Needs outside this page: /buyers/homes-near-the-beach/

For the lead. Nothing here blocks the build.

1. **Hub links.** /buyers/ should link the new page in a sentence ("houses you can walk to the beach from"). /buyers/waterfront-homes/ could link it where it says most oceanfront buyers search "on the beach": "For a house a few streets back, see houses near the beach." /buyers/relocating/beaches/ "What this means when you own here" could link it once.
2. **Homes feed.** `idx-lib/feeds.js` already has `WALK_BEACH` ("Walk to the beach from these homes") and `BEACH_DRY` ("Houses within a mile of the beach, no flood zone listed"). The page should map to `BEACH_DRY` or a houses-only version of `WALK_BEACH` (`type=house`). The feeds file is shared; the lead decides.
3. **The search link.** /homes/map/?q=house%20near%20the%20beach resolves through idx-lib/query.js line 36 to `has=near_beach`. Our measure (ledger row 15): "near the beach" houses are about 0.7 mile from the ocean at the middle, and 1 in 10 is over 2 miles. "Walk to the beach" is tighter (about a quarter mile). If the owner wants the link to mean "a walk", point it at `has=walk_to_beach&type=house` instead. A few listings carry a wrong map point (one "east of 17" house measured 107 miles out); not this page's job to fix.
4. **Registry.** See PROPOSED.md for two facts that will sit on more than one page.

Added by the writer after the build, 2026-11-08:

5. **Sitemap, llms.txt and inbound links.** `build.js audit` reports the page missing from sitemap.xml and llms.txt, and an orphan (no body link from another page). Item 1 fixes the orphan.
6. **The Myrtle Beach walk link.** `/homes/map/?type=house&has=walk_to_beach&city=Myrtle%20Beach` returns 196 houses, and the campground homes on leased sites at 6001 S Kings Hwy and 9700 Kings Rd are among them (VERIFY.md, the campground fault). The page links only the North Myrtle Beach walk search and the county-wide under-$400,000 walk search, not the Myrtle Beach one. The feed or the search could leave out county land use 118, 119 and 122.
7. **Photo metadata on a shared file.** `tools/image-meta.js` fails this page on one photo owned by /submarkets/myrtle-beach/: `images/2026-11-a/submarkets-myrtle-beach/oceanfront-houses-from-the-ocean-1200w.webp` and `-600w.webp` carry no embedded credit fields. Fix once for both pages: `node tools/photos.js embed data/2026-11-a/submarkets-myrtle-beach/photos.json chapter3realty`. The three other photos and this page's three crops pass.
8. **Footer.** `build.js check` reports the footer differs on every page, this one included (the partial changed in 509e45b7). `node build.js stitch` fixes all of them; writers do not run it.
9. **exiftool** was installed in this container (`apt-get install libimage-exiftool-perl`) to embed the share-image metadata. A new container needs it again for `photos.js` crops.
10. **Checkpoint script.** `tools/checkpoint.sh` skips every new file when one pathspec does not exist yet (`git add -N` fails for all of them), so the first checkpoint wrote a patch without the page. Running `git add -N` on the existing paths first fixed it.

Added in fix round 1, 2026-11-08:

11. **Campground homes in the walk search, under $400,000.** `/homes/map/?type=house&has=walk_to_beach&max=400000` returns 50 houses; 17 are campground homes on leased sites (6001 S Kings Hwy, 9700 Kings Rd). The page no longer links it. It links the North Myrtle Beach version (`&city=North%20Myrtle%20Beach&max=400000`), which returned 19 and none at a campground on 2026-11-08 (`data/2026-11-n/buyers-homes-near-the-beach/fix1-walk-budget.json`). Same fix as item 6: leave county land use 118, 119 and 122 out of `type=house`.
12. **Photo metadata.** Item 7 still stands for the Myrtle Beach photo. The Cherry Grove photo is now the channels aerial from /submarkets/north-myrtle-beach/; it passes `image-meta.js`.
