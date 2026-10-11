# After the deploy: batch 2026-10-a

Look at each item on the live site, https://chapter3realty.com. Tick it when it is right.

## The four new pages

### Del Webb North Myrtle Beach

https://chapter3realty.com/buyers/55-plus-communities/del-webb-north-myrtle-beach/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The comparison table links to the other three pages, and each link opens.
- [ ] One photo opens on its own: https://chapter3realty.com/images/55-plus/del-webb-north-myrtle-beach/del-webb-north-myrtle-beach-homes-from-above-2026-1200w.webp

### Del Webb at Grande Dunes

https://chapter3realty.com/buyers/55-plus-communities/del-webb-grande-dunes/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The comparison table links to the other three pages, and each link opens.
- [ ] One photo opens on its own: https://chapter3realty.com/images/55-plus/del-webb-grande-dunes/del-webb-grande-dunes-clubhouse-from-above-1200w.webp

### Myrtle Trace

https://chapter3realty.com/buyers/55-plus-communities/myrtle-trace/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The comparison table links to the other three pages, and each link opens.
- [ ] One photo opens on its own: https://chapter3realty.com/images/55-plus/myrtle-trace/myrtle-trace-from-above-1200w.webp

### Seasons at Prince Creek West

https://chapter3realty.com/buyers/55-plus-communities/seasons-at-prince-creek-west/

- [ ] The page opens, with the hero photo, the icon row under the title and the short answer.
- [ ] On a phone (about 390 wide), the first screen shows the title, the icon row and the start of the short answer, and nothing scrolls sideways.
- [ ] The maps, the photos and their credits show; "On this page" links jump to their sections.
- [ ] The comparison table links to the other three pages, and each link opens.
- [ ] One photo opens on its own: https://chapter3realty.com/images/55-plus/seasons-at-prince-creek-west/seasons-at-prince-creek-west-clubhouse-from-above-1200w.webp

## Pages that changed

- [ ] https://chapter3realty.com/buyers/55-plus-communities/: the table links to the four pages, and its figures for them match the pages (Del Webb at Grande Dunes about $665,000 for a house and about $400 a month; Del Webb North Myrtle Beach about $535,000 resale and about $315 a month; Myrtle Trace about $300,000 and $95 a month; Seasons about $500,000 and about $340 a month). No sentence says Seasons or Del Webb at Grande Dunes is gated.
- [ ] https://chapter3realty.com/buyers/retirees/: the first FAQ answer says Del Webb at Grande Dunes has indoor and outdoor pools, a lifestyle director and a beach club in the HOA dues, and does not say "gated".
- [ ] https://chapter3realty.com/buyers/golf-communities/: no sentence says Seasons is gated.

## Files for search engines and AI

- [ ] https://chapter3realty.com/sitemap.xml lists the four pages, each with image entries, and opens without an error.
- [ ] https://chapter3realty.com/llms.txt lists the four pages under the hub.
- [ ] https://chapter3realty.com/llms-full.txt has a section for each of the four pages.
- [ ] Share one page link in a private message (or the Facebook Sharing Debugger): the preview shows the page's hero photo, not the text card.
- [ ] Google's Rich Results Test on one page: Article and FAQ are valid, with no errors.

## Tell search engines

- [ ] Run `indexnow.ps1`.
- [ ] Search Console: request indexing for the four pages and the hub, and resubmit sitemap.xml.

## Later

- [ ] Day 7: the four URLs are indexed in Search Console.
- [ ] Day 30: look at the searches each page shows for; add any missing question as a section or an FAQ entry.
- [ ] Every 90 days: `node <Blog-Brain>/tools/facts-check.js --stale`. The HOA fees on these pages come from listings and go stale first.
- [ ] Blog-Brain: `node tools/site-audit.js <website> --live` finds no error on these pages.
