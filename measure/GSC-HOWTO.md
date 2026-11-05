# Search Console: what to export, once a month

Our scorer checks our own rules. Search Console shows what Google does with the pages. A page is done when Google shows it and people click it, not when it scores 97.

## Once a month, on the 1st (about 5 minutes)

1. Go to search.google.com/search-console and pick chapter3realty.com.
2. **Performance.** Open "Search results". Set the date to "Last 28 days". Click the "Pages" tab. Click "Export", then "Download CSV". Unzip it.
3. **Indexing.** Open "Indexing", then "Pages". Under "Why pages aren't indexed", click each row (for example "Crawled - currently not indexed"). Click "Export", then "Download CSV". Unzip each one.
4. Put the folders in the chat, or upload them to Google Drive and say where.

## What Claude runs with them

```
node tools/gsc.js import <Performance folder> --date 2026-12-01
node tools/gsc.js import <each Indexing folder> --date 2026-12-01 --kind not-indexed
node tools/changes.js <website-repo>          # when each page's title, H1 or length changed
node tools/gsc.js report <website-repo>       # every page: clicks, impressions, position, last change
node tools/gsc.js compare 2026-11-01 2026-12-01
```

The report lists every sitemap page that Google showed to nobody in 28 days. Those pages are not indexed, or rank past page 10. Fixing that comes before any redesign.

## The first export matters most

The first export is the baseline for the pages already redesigned. Without it, no one can say if a redesign helped or hurt. If you can, export "Last 3 months" once too, so we can see the weeks before the October and November redesigns.
