# Batch 2026-11-e: the 23 community and resort pages

Owner, 2026-11-14: "i like the community pages lets make the other 23." The pilots are /submarkets/myrtle-beach/plantation-point/ and /invest/condo-buildings/palace-resort/ (batch 2026-11-d, live in v1.40, round 2 in).

Chosen from the competitors' ranked keywords (research/data/dataforseo-competitor-keywords-2026-11-13.json, US monthly volume of the name search), keeping those with homes for sale in our search on 2026-11-14 (count in brackets).

Resorts, under /invest/condo-buildings/<slug>/: Bay View 18,100 (11), Grande Shores 14,800 (10), Prince Resort 12,100 (7), Landmark 8,100, Caravelle 8,100 (47), Holiday Sands South 6,600 (15), Paradise 5,400 (17), Carolinian 5,400 (12), Beach Cove 3,600 (28), Patricia Grand 2,900 (10), Sea Mist 2,900 (34), Mar Vista Grande 2,900 (6), Grand Atlantic 2,900 (9), Ocean Forest Villas 1,900 (17), Grande Dunes Ocean Club 1,900 (6), Maisons sur Mer 1,600 (13).

Neighborhoods, under /submarkets/<town>/<slug>/: Kingston Plantation 6,600 (63), Riverwalk 3,600 (13), Willbrook Plantation 3,600 (4), Wild Wing Plantation 2,900 (40), Oak Forest 2,900 (3), River Oaks 1,300 (51), Briarcliffe Acres 1,300 (10).

Counts by subdivision word are rough (a word can match two places); each page confirms its MLS name first.

Line: research, independent verify, build, review, fix (workflow batch-e). Lead after: links in (6+ each), sitemap, llms.txt, condo-buildings hub rows link to each resort page, dates, patch.

## Status (2026-11-14)

- Workflow run wf_553dd20e-139 (script workflows/scripts/batch-e-community-pages-wf_553dd20e-139.js). If it stops, resume with resumeFromRunId so finished steps replay from cache.
- In parallel: the lookup tool goes on top of the GIS, deeds and tax pages, county links point to our tool, and a "Last sale" line if a per-parcel source exists (batch 2026-11-d/property-records/). Tax amounts are in: functions/api/tax.js reads the Treasurer's public bills (no names), tested in data/2026-11-d/property-records/tax-test.mjs.
- A frosted glass prototype for the blog pages, for the owner to choose (scratchpad glass-proto/compare.html), not on any live page.
