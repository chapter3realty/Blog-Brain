# v1.40: eleven new pages, with the property lookup tool (batch 2026-11-d)

Three patches, applied in order on the live branch at 4e9fd466 or newer. Parts 1 and 2 are only the source data the pages are built from (the county answers, the scripts). Part 3 is the pages, the menu, the links, the sitemap and the dates. Split in three so each file stays under GitHub's 100 MB limit.

This replaces `v1.40-wip`, which was a backup and is now deleted.

## What goes live

| Page | The search it is built for (monthly, DataForSEO) |
|---|---|
| /buyers/property-records/ (the lookup tool) | horry county property records, property search, property lookup (2,400 each) |
| /buyers/property-records/deeds/ | horry county land records (18,100), register of deeds (3,600) |
| /buyers/property-records/gis-map/ | horry county gis (8,100) |
| /buyers/property-records/tax-bill/ | horry county tax payments (6,600), taxes (4,400), tax records (2,400) |
| /buyers/flood-zone-check/ | is my house in a flood zone (1,300), horry county flood map |
| /buyers/land/ | land for sale horry county |
| /buyers/senior-living/ | assisted living myrtle beach (590) |
| /hoa/fees-by-neighborhood/ | HOA fees by neighborhood, 382 communities |
| /buyers/relocating/myrtle-beach-vs-charleston/ | myrtle beach vs charleston (170) |
| /submarkets/myrtle-beach/plantation-point/ | pilot community page |
| /invest/condo-buildings/palace-resort/ | pilot resort page |

Also: three menu links (Property records lookup, Is it in a flood zone?, HOA fees by neighborhood); links in from 50 existing pages, so each new page has 6 or more; sitemap, llms.txt, llms-full, share images, dates.

Round 2 (owner, 2026-11-14, on the preview): a homes feed at the top of every new page; live homes strips inside the pages instead of "send me homes" offers (one per row of the land chart, per town, per community, and the homes within a mile in the lookup card); every community on the HOA fee table links to our search for it; the HOA page answers why townhome fees are higher; the owner's Longs land story; Myrtle Beach vs Charleston ends with what Myrtle Beach does better. `/homes/api/strip` keeps a lot-size ceiling (lotMax), so the land strips match their rows once this is live.

Owner item: open a Register of Deeds escrow account ($25 check by mail) so the deed pages' "we get the deed for you" offer costs Chapter3 $0.50 a page.

## Tested

On a clean copy of 4e9fd466: `git am -3` applies all three, and the result is byte for byte the build. `build.js check`, `audit` and `preflight` pass. The date check passes in Eastern time. idx-test passes. The lookup tool's tests pass (65 controls), and `--live` asks the county and FEMA services again (70 controls). Blog-Brain scores: 96 to 100 on every new page.

## Deploy (PowerShell)

```powershell
cd C:\Blog-Brain
git pull
Remove-Item -Recurse -Force website-patches\v1.40
git checkout -- website-patches/v1.40
Get-ChildItem website-patches\v1.40\*.patch | ForEach-Object { $r = "website-patches/v1.40/" + $_.Name; if ((git hash-object --no-filters $_.FullName) -eq (git rev-parse "HEAD:$r")) { "ok  $r" } else { "BAD $r" } }
```

Every line must say `ok`. Then:

```powershell
cd C:\c3-v138
git am --abort 2>$null
git fetch https://github.com/chapter3realty/chapter3-website.git claude/github-account-check-wutg8b
git reset --hard FETCH_HEAD
git am -3 --keep-cr (Get-ChildItem C:\Blog-Brain\website-patches\v1.40\*.patch | Sort-Object Name).FullName
node build.js preflight
```

If preflight says dates are wrong (another chat pushed pages after 4e9fd466), run this once, then preflight again:

```powershell
node build.js dates; node build.js llmsfull; git add -A; git commit -m "Dates after v1.40"
```

Then push and deploy:

```powershell
git push https://chapter3realty@github.com/chapter3realty/chapter3-website.git HEAD:claude/github-account-check-wutg8b
powershell -ExecutionPolicy Bypass -File .\deploy.ps1 -ClonePath C:\c3-v138
```

After it is live: in Search Console, request indexing for /buyers/property-records/ and the three task pages first.
