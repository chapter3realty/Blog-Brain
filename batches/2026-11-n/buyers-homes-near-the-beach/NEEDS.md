# Needs outside this page: /buyers/homes-near-the-beach/

For the lead. Nothing here blocks the build.

1. **Hub links.** /buyers/ should link the new page in a sentence ("houses you can walk to the beach from"). /buyers/waterfront-homes/ could link it where it says most oceanfront buyers search "on the beach": "For a house a few streets back, see houses near the beach." /buyers/relocating/beaches/ "What this means when you own here" could link it once.
2. **Homes feed.** `idx-lib/feeds.js` already has `WALK_BEACH` ("Walk to the beach from these homes") and `BEACH_DRY` ("Houses within a mile of the beach, no flood zone listed"). The page should map to `BEACH_DRY` or a houses-only version of `WALK_BEACH` (`type=house`). The feeds file is shared; the lead decides.
3. **The search link.** /homes/map/?q=house%20near%20the%20beach resolves through idx-lib/query.js line 36 to `has=near_beach`. Our measure (ledger row 15): "near the beach" houses are about 0.7 mile from the ocean at the middle, and 1 in 10 is over 2 miles. "Walk to the beach" is tighter (about a quarter mile). If the owner wants the link to mean "a walk", point it at `has=walk_to_beach&type=house` instead. A few listings carry a wrong map point (one "east of 17" house measured 107 miles out); not this page's job to fix.
4. **Registry.** See PROPOSED.md for two facts that will sit on more than one page.
