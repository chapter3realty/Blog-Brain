# After the deploy: batch 2026-10-b

Look at each item on the live site, https://chapter3realty.com. Tick it when it is right.

## The five new pages

### Best Neighborhoods in Myrtle Beach

https://chapter3realty.com/buyers/best-neighborhoods/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The links in the page open, including the links to the other pages in this batch.
- [ ] One photo opens on its own: https://chapter3realty.com/images/buyers/best-neighborhoods/pine-lakes-from-above-1200w.webp

### Gated Communities in Myrtle Beach

https://chapter3realty.com/buyers/gated-communities/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The links in the page open, including the links to the other pages in this batch.
- [ ] One photo opens on its own: https://chapter3realty.com/images/buyers/gated-communities/prestwick-gate-from-above-2026-1200w.webp

### Homes With No HOA in Myrtle Beach

https://chapter3realty.com/buyers/no-hoa-homes/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The links in the page open, including the links to the other pages in this batch.
- [ ] One photo opens on its own: https://chapter3realty.com/images/buyers/no-hoa/aynor-country-lot-1200w.webp

### Most Affordable Places to Live Near Myrtle Beach

https://chapter3realty.com/buyers/affordable-places-to-live/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The links in the page open, including the links to the other pages in this batch.
- [ ] One photo opens on its own: https://chapter3realty.com/images/buyers/affordable/georgetown-harbor-1200w.webp

### The Farm at Carolina Forest

https://chapter3realty.com/submarkets/carolina-forest/the-farm/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The links in the page open, including the links to the other pages in this batch.
- [ ] One photo opens on its own: https://chapter3realty.com/images/buyers/the-farm/the-farm-from-above-1200w.webp

## Pages that changed

- [ ] https://chapter3realty.com/buyers/first-time-home-buyer-myrtle-beach/ and https://chapter3realty.com/buyers/relocating/which-town/: the link to the affordable places page opens.
- [ ] https://chapter3realty.com/buyers/55-plus-communities/ and https://chapter3realty.com/buyers/golf-communities/: the link to the gated communities page opens.
- [ ] https://chapter3realty.com/buyers/golf-communities/: the FAQ answer on gated communities does not say "24/7 staffed gate".
- [ ] https://chapter3realty.com/submarkets/carolina-forest/: the link to The Farm at Carolina Forest opens.

## Files for search engines and AI

- [ ] https://chapter3realty.com/sitemap.xml lists the five pages, each with image entries, and opens without an error.
- [ ] https://chapter3realty.com/llms.txt lists the five pages under their hubs.
- [ ] https://chapter3realty.com/llms-full.txt has a section for each of the five pages.
- [ ] Share one page link in a private message (or the Facebook Sharing Debugger): the preview shows the page's hero photo, not the text card.
- [ ] Google's Rich Results Test on one page: Article and FAQ are valid, with no errors.

## Tell search engines

- [ ] Run `indexnow.ps1`.
- [ ] Search Console: request indexing for the five pages and their hubs, and resubmit sitemap.xml.

## Later

- [ ] Day 7: the five URLs are indexed in Search Console.
- [ ] Day 30: look at the searches each page shows for; add any missing question as a section or an FAQ entry.
- [ ] Every 90 days: `node <Blog-Brain>/tools/facts-check.js --stale`. The HOA fees on these pages come from listings and go stale first.
- [ ] Blog-Brain: `node tools/site-audit.js <website> --live` finds no error on these pages.
