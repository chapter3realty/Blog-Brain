# The listing search: what to give away, how many buttons, how to beat Zillow (2026-10-25)

The owner asked for three things: the best search we can build, how much to show before asking for a name and phone, and whether the pages have too many calls to action.

## What the research says

The evidence is weak. There is no controlled, independent study. These are the best sources found:

- **Photos are what buyers want most.** In NAR summaries, 83% of buyers who searched online rated listing photos very useful, and 79% rated detailed property information very useful ([webtonic summary of NAR 2025](https://www.webtonic.io/blog/real-estate-native-advertising-statistics); [MarketingCharts on NAR](https://www.marketingcharts.com/industries/real-estate-industries-66423)).
- **Let people look before you ask.** IDX, Inc. reported that quality leads rose more than 70% when visitors could view at least 5 homes before being asked for contact details. IDX Broker's "Balanced" setting asks early and requires sign-up after 5 detail pages; "Aggressive" requires it after 3 ([GeekEstate](https://geekestateblog.com/forced-registration-pros-and-cons/), [IDX Broker](https://support.idxbroker.com/hc/en-us/articles/34490113252891-Request-or-Force-Registration)).
- **A hard wall brings more names but fewer buyers.** In one agent's 12-month test, the site with forced sign-up got far more leads and no closings; the open site got fewer leads and two closings ([GeekEstate](https://geekestateblog.com/should-you-required-registration-or-not/)). A vendor reports better conversion when the ask comes after signs of interest, such as 5 or more listings viewed ([Pillar](https://usepillar.com/blog/idx-integration-mls-connectivity-real-estate/), vendor claim).
- **One clear main button wins.** In Unbounce's study of 18,639 landing pages, pages with one call to action converted at 13.5% on average, against 10.5% with three. This is a correlation, not a test ([MarketingProfs](https://www.marketingprofs.com/charts/2018/33935/what-converts-web-landing-page-benchmarks-and-trends-infographic)).
- **Plain-words search is now normal.** Zillow has offered it since 2023. Redfin added a back-and-forth version in November 2025 and reports 47% more tour requests, which is the company's own figure ([Zillow](https://zillow.mediaroom.com/2024-09-04-Zillows-AI-powered-home-search-gets-smarter-with-new-natural-language-features), [Redfin](https://nationalmortgageprofessional.com/news/redfin-unveils-conversational-ai-driven-home-search-tool)).
- **Filters must stay visible and easy to undo.** If people cannot see which filters are on and remove them quickly, they take longer to narrow the results ([Baymard](https://baymard.com/guidelines/2572-applied-filters-on-mobile)). Auto-applying is fine for single choices; a long multi-choice list needs an Apply button ([Baymard](https://baymard.com/guidelines/1125-apply-buttons-in-mobile-filtering-interfaces)).

## Decisions

**How much to give away.** Today a visitor gets one photo and the basic facts, and is asked to sign up on the very first home. That is the hardest wall there is, and it withholds the thing buyers want most. Claude's call:

- Free on every home: the first 8 photos, the description, and the basic facts.
- Behind the free sign-up: every other photo, the HOA fee and taxes, the full details, the price history and days on market, recent sales, and saving homes.
- After 3 homes viewed in 30 days, the next home asks for the sign-up before it shows more than one photo. It is a box on the page, never a pop-up.

This needs the CRM to send the first 8 photos and the description without a token (request 1 below). Until then, the site keeps the one-photo view.

**How many calls to action.** Before this round, a listing page had 10: two photo buttons, a tour tile, a heart, tour, ask and save in the side card, the sign-up box, and the two buttons in the 5-second pop-up. Now it has:

- one main button, **Tour this home**;
- one second button, **Ask a question**;
- one sign-up offer: the photo count, the blurred photo tile and the "everything else" box all open the same form;
- the heart.

There is no pop-up anywhere. The guide pages carry the strips and nothing else. This is the right amount.

**The search.** Built this round:

- a search box that reads plain words ("3 bed house under 400k in Conway", "waterfront condo NMB", "Market Common");
- quick filters that apply at once;
- the filters in force shown as chips that remove themselves;
- the count and a sort menu;
- the owner's card template on every card.

We cannot match Zillow's two biggest features without the CRM: a map, and alerts for new listings (requests 2 and 3).

## Requests for the CRM

```
REQUEST FOR THE CRM (listing API v1)
What:    on GET /api/idx/listings/<MLS#> without a token, add the first 8 photos (photos[], same shape as the full listing) and remarks to the public listing answer
Why:     buyers want photos most; a wall on the first home loses them. The site will ask for the sign-up after 3 homes, and keep everything else (all photos, HOA, taxes, details, history, sold) behind it
Example: GET /api/idx/listings/2625767  ->  listing.photos (8), listing.remarks
Used by: /homes/<MLS#>-<street>/ for visitors who are not signed up
```

```
REQUEST FOR THE CRM (listing API v1)
What:    a map point (lat, lng) on the public card, only when the address is shown
Why:     a map of results is the first thing buyers use on Zillow and Redfin; we cannot draw one without points
Example: GET /api/idx/listings?city=Conway  ->  each card: "point": {"lat": 33.83, "lng": -79.05} or null when the address is withheld
Used by: a map view on /homes/ and the place pages; everyone
```

```
REQUEST FOR THE CRM (listing API v1)
What:    saved searches for a signed-up visitor, with an email when a new home matches (POST /api/idx/searches with the search's params; GET to list; DELETE to stop)
Why:     new-listing alerts bring buyers back and are Zillow's main reason to sign up
Example: POST /api/idx/searches {"params":"city=Conway&beds=3&max=400000"}  ->  {"ok":true,"id":"..."}
Used by: a "Get new homes by email" button on /homes/ for signed-up visitors
```
