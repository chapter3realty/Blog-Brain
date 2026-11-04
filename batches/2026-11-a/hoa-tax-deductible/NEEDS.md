# Needs from shared files: /hoa/tax-deductible/

1. **IDX strip title (idx-lib/feeds.js, CONDOS feed).** The strip on this page reads "Condos for sale on the Grand Strand". The owner reviewer (round 1) asked for a title that fits this page's reader, for example "Condos that allow nightly rentals". The feed file is shared, so the spec does not change it. If the feed can take a per-page title or a short-term-rental filter, this page would use it.
2. **Empty strip in the preview.** In the preview the strip shows only the "See all homes" tile. The critic thinks this is the preview's sample data. The lead should confirm the strip fills on the live site.
3. **Hero glance tiles on a wide screen (page-kit.js glance).** At 1280 px and up the three tiles fill only the left two thirds of the hero. This is the site-wide hero layout. The spec now aligns the tile text to the top (min-width 700 px) and stacks the tiles in one column below 380 px, inside its own CSS.
