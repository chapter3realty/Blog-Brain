# Off-site and search presence: evidence

Checked 2026-10-01 and 2026-10-02 (UTC). Subject: chapter3realty.com, Chapter3 Realty Corp, 573 Vista Drive, Murrells Inlet, SC 29576, 854.333.2135, Broker-in-Charge Tim Nash.

## How this was checked, and what blocked it

| Source | Result |
|---|---|
| WebSearch tool (US results, engine not named by the tool) | Worked. Main source for rankings and AI-summary checks. Positions below are the order in this tool's list of about 10 links. They are not Google positions. |
| Google web search (curl) | Blocked. Returns a JavaScript-only page. |
| Google Maps (curl, `/maps/search` preload payload) | Worked. Control queries for known businesses (Salt Realty, BrickWood Mortgage) returned those businesses, so the method is valid. |
| Bing web search (curl and WebFetch) | Unusable. A `site:chapter3realty.com` query returned unrelated pages (Pennsylvania voting pages, Google stock pages, the number 3). This is Bing bot handling, not a real result. |
| DuckDuckGo lite (Bing-backed) | Worked once for page 1 of `site:chapter3realty.com`, then returned an "anomaly" challenge on every later request. Page 2 and section queries were blocked. |
| DuckDuckGo html, Startpage, Mojeek, Ecosia, Brave | Blocked (challenge, 403 or 429). |
| Bing Maps (overlay endpoint) | Partly worked. Control query for Salt Realty returned Salt Realty. Brand queries returned nothing. |
| Perplexity | Blocked (Cloudflare challenge, 403). |
| Bing Copilot Search | Page loads but the answer is rendered by JavaScript. No answer text retrievable. |
| Facebook, Instagram | Blocked by login wall and 429. A Facebook page that does not exist returns the same login redirect, so existence cannot be confirmed. |
| Yelp, Zillow, Homes.com, Realtor.com | Blocked (403 or 429) for direct fetch. Search-result snippets used instead. |
| SC LLR licence lookup (verify.llronline.com) | Reached the Real Estate Commission search form. It requires a reCAPTCHA, so licence 28849 and 43182 were not verified. |
| CCAR member directory (members.ccarsc.org) | Worked. |
| BBB search | Worked. |
| Wayback Machine | Blocked (connection reset; WebFetch refuses the host). |

## 1. Indexing

The live sitemap lists 127 URLs. All 127 returned HTTP 200 on 2026-10-01. `robots.txt` allows all crawlers, including AI crawlers. 83 of the 127 URLs share one `lastmod` (2026-09-07).

### URLs seen in any index

| URL | WebSearch tool | DuckDuckGo lite (Bing-backed) |
|---|---|---|
| / | yes | yes |
| /about/ | no | yes |
| /why-chapter-3/ | no | yes |
| /contact/ | no | yes |
| /market-reports/ | no | yes |
| /guides/ | no | yes |
| /invest/ | no | yes |
| /invest/strategies/ | no | yes |
| /invest/str-vs-ltr/ | yes | not seen |
| /buyers/ | no | yes |
| /buyers/va-loans/ | yes | not seen |
| /sell/capital-gains/ | yes | not seen |
| /submarkets/ | no | yes |
| /submarkets/myrtle-beach/ | yes | yes |
| /submarkets/north-myrtle-beach/ | yes | not seen |
| /submarkets/garden-city/ | yes | not seen |
| /submarkets/conway/ | yes | not seen |
| /submarkets/carolina-forest/ | no | yes |

- WebSearch tool: the same 8 URLs came back across 12 different `site:` and keyword queries. Estimate: 8 of 127 (6 percent).
- DuckDuckGo lite: 10 URLs on page 1. Page 2 was blocked, so this is a floor, not a count.
- Union of both: 18 of 127 (14 percent). Google's own count could not be checked.

### Important pages not found in any index

Exact-title searches returned other sites, not Chapter3, for each of these:

| Page | Title searched |
|---|---|
| /invest/str-rules/ | "Myrtle Beach Short-Term Rental Rules by City" |
| /buyers/property-taxes/ | "Horry County Property Taxes: The 4% vs 6% Rule" |
| /hoa/special-assessments/ | "Condo Special Assessments in Myrtle Beach" |
| /invest/airbnb-income/ | "How Much Do Myrtle Beach Airbnbs Make" |
| /buyers/relocating/hurricanes/ | "Hurricanes in Myrtle Beach: Every Storm Since Hugo" |
| /submarkets/murrells-inlet/ | "Murrells Inlet, SC Real Estate" (the home-town page) |

Never seen in any query: all 16 /hoa/ pages, all 25 /buyers/relocating/ pages, /invest/strategies/dscr-loans/, /invest/strategies/1031-exchange/, /invest/rental-returns/, /invest/condos/, /invest/llc/, /sell/sell-my-condo/ and /sell/.

### Stale titles and snippets still showing

| Where | Shown in results | Live page now |
|---|---|---|
| WebSearch, /submarkets/north-myrtle-beach/ | "Investing in North Myrtle Beach, SC" | "North Myrtle Beach, SC Real Estate \| Chapter3 Realty" |
| WebSearch, /submarkets/garden-city/ | "Investing in Garden City, SC" (some queries) | "Garden City, SC Real Estate & Investing \| Chapter3" |
| WebSearch, /invest/str-vs-ltr/ | "STR vs LTR in Myrtle Beach" (some queries) | "Short-Term vs Long-Term Rentals in Myrtle Beach \| Chapter3" |
| DuckDuckGo lite, /buyers/ | "Buy a home in Myrtle Beach with a brokerage that has its own lender and 18 years of local loan data." | "Buying near Myrtle Beach? Chapter3 Realty is a local brokerage with guides, tools, and agents who know the Grand Strand. Start here." |

No maintenance-page or 503 text was seen in any result. The August outage could not be checked in the Wayback Machine (blocked).

## 2. Rankings (WebSearch tool, 2026-10-01)

"Pos" is the order in the tool's link list. "No" means chapter3realty.com was not in the roughly 10 links returned.

| # | Query | Chapter3 | Top 3 in the list |
|---|---|---|---|
| 1 | myrtle beach real estate agent | No | serhant.com (Mitchell Adkins), zillow.com agent reviews, homeguidemyrtlebeach.com (Jerry Pinkas) |
| 2 | murrells inlet real estate | No | coldwellbanker.com, zillow.com, redfin.com |
| 3 | myrtle beach investment property | No | zillow.com, homeguidemyrtlebeach.com, mashvisor.com |
| 4 | myrtle beach short term rental rules | No | avalara.com, bnbcalc.com, cityofmyrtlebeach.com |
| 5 | myrtle beach property taxes | No | cityofmyrtlebeach.com, myhorrynews.com, cityofmyrtlebeach.com |
| 6 | south carolina 4 percent property tax | No | rocketmortgage.com, lincolninst.edu, hamptoncountysc.org (thedowninggroup.com is 4th) |
| 7 | condo special assessment south carolina | No | scstatehouse.gov, clarendoncountysc.gov, nationwide.com |
| 8 | myrtle beach hoa fees | No | homeguidemyrtlebeach.com, myrtlebeachhomesblog.com, dreamlifemyrtlebeach.com |
| 9 | moving to myrtle beach | No | allied.com, mungo.com, myrtlebeachareachamber.com |
| 10 | cost of living myrtle beach | No | rentcafe.com, pulte.com, apartments.com |
| 11 | myrtle beach airbnb income | No | theshorttermshop.com, airbtics.com, airdna.co |
| 12 | dscr loan myrtle beach | No | easystreetcap.com, lendingone.com, lendmire.com |
| 13 | 1031 exchange myrtle beach | No | lawinfo.com, realestatebees.com, beachproteam.com |
| 14 | sell my house myrtle beach | No | opendoor.com, homelight.com, myrtlebeachhomebuyers.com |
| 15 | myrtle beach condo investment | No | homeguidemyrtlebeach.com (2 results), grandstrandmag.com |
| 16 | carolina forest homes | No | homes.com (2 results), c21theharrelsongroup.com |
| 17 | north myrtle beach real estate | No | redfin.com, zillow.com, coldwellbanker.com |
| 18 | hurricane risk myrtle beach | No | firststreet.org, cityofmyrtlebeach.com, yahoo.com |
| 19 | myrtle beach rental returns | Pos 8 (/invest/str-vs-ltr/) | avalara.com, myrtlebeachvacationrentals.com, myrtlebeachprivaterentals.com |
| 20 | best real estate brokerage myrtle beach for investors | No | homeguidemyrtlebeach.com, yelp.com (2 results) |

Result: 1 of 20 queries shows the site, at position 8, and with a page that is not the one built for the query (/invest/rental-returns/ exists but is not indexed).

These rankings come from one engine. Google rankings were not checked because Google blocked automated access.

## 3. AI answers

Perplexity and Bing Copilot could not be read (see method table). The WebSearch tool writes an AI summary for each query. What those summaries said:

- **Non-brand queries (20 above):** no summary cited or named Chapter3.
- **"which Myrtle Beach brokerage runs DSCR and building permit analysis for investors":** the summary names Chapter3 as the answer. It cites the anonymous homepage testimonials as evidence ("noted by investors for running real DSCR and rental income numbers").
- **"is Chapter3 Realty Myrtle Beach legit reviews":** the summary says the only reviews are the brokerage's own testimonials and that no independent reviews (BBB, Yelp, Google) were found.
- **Brand and name queries:** summaries repeat these claims, taken from the site:
  - "Chapter3 is a Myrtle Beach investor-focused brokerage **offering DSCR financing**, STR analysis, and condo-by-condo ROI data." This comes from the footer of all 131 pages ("The Myrtle Beach investor-focused brokerage. DSCR financing, STR analysis, ..."). Chapter3 is not a lender.
  - "Because the agent and the VA loan team work at the same company..." This comes from /buyers/va-loans/ and /buyers/relocating/.
  - "Chapter3 Realty is located in Myrtle Beach, SC." This comes from the homepage header line "Chapter3 Realty · Myrtle Beach, SC". The schema and footer say Murrells Inlet.
  - "Timmy has over 30 years selling real estate on the Grand Strand." Third-party bios say otherwise (see section 5).
- **"Chapter III Realty Myrtle Beach":** the summary maps the name to chapter3realty.com without any source using "Chapter III". The plain query "Chapter III Realty" returns only textbook pages.
- **"what is the 4% vs 6% property tax rule Horry County second home Chapter3":** Chapter3 is not cited, even with the brand in the query. /buyers/property-taxes/ is not indexed.

## 4. Google Business Profile

No Google Business Profile was found.

| Google Maps query | Result |
|---|---|
| Chapter3 Realty Murrells Inlet SC | List of other agencies (Garden City Realty, Salt Realty, Coastal Key Group, Realty ONE Group Dockside South, ...). No Chapter3. |
| Chapter3 Realty | Empty result |
| Chapter 3 Realty Myrtle Beach | List of other agencies (RE/MAX Southern Shores, Keller Williams, ...). No Chapter3. |
| Chapter III Realty | One result: "Three Real Estate", Charleston. No Chapter3. |
| 854-333-2135 | No business |
| 573 Vista Drive Murrells Inlet SC 29576 | A place typed "Building" at 33.5928, -78.9987. No business. |
| Controls: Salt Realty Murrells Inlet; BrickWood Mortgage Surfside Beach | Both found, with name, address and website. Salt Realty shows 82 reviews. |

A profile could exist but be unverified, suspended or not published. A published, verified profile would appear for its exact name. The site has no link to a Google profile or a review page.

Bing Maps: "Chapter 3 Realty Corp" and "Chapter3 Realty Murrells Inlet SC" returned no listing. The Salt Realty control returned Salt Realty. No Bing Places listing was found.

Apple Maps: not checkable (JavaScript app).

## 5. Citations and NAP consistency

The site itself (127 pages, JSON-LD) is consistent: "Chapter3 Realty", legalName "Chapter3 Realty Corp", 573 Vista Drive, Murrells Inlet, SC 29576, +1-854-333-2135.

Off-site:

| Source | Name | Address | Phone | Website | Notes |
|---|---|---|---|---|---|
| CCAR office directory, members.ccarsc.org/officedirectory/Details/chapter-3-realty-corp-4967203 | **Chapter 3 Realty Corp** (with a space) | none shown (map pin 33.5928, -78.9987, which is 573 Vista Dr) | **843-455-9959** | http://Chapter3realty.com | Only third-party listing of the company found. Phone differs from the site. |
| CCAR realtor directory, members.ccarsc.org/realtor-directory/Details/fredrick-nash-4597688 | **Fredrick Nash** (no "Tim" or "Timmy"), no office name | **5237 Berkeley Court, Murrells Inlet** (map link) | 843-455-9959 | http://Chapter3realty.com | Name, address and phone all differ from the site. The map link exposes what may be a home address. |
| Homes.com agent profile, homes.com/real-estate-agents/timmy-nash/bmxq62b/ (via search snippet; direct fetch 403) | Timmy Nash, **Seaside Realty** | **314 79th Ave N, Myrtle Beach, SC 29572** | (843) 455-9959 | not known | Shows licence #43182, "15 years of experience", 19 sales in 5 years. Still tied to the old brokerage. |
| land.com member 699694 (search snippet) | "Properties of Timmy Nash with Seaside Realty" | Myrtle Beach | not known | not known | Old brokerage. |
| Seaside Realty company info (search snippet) | lists "Timmy Nash" as one of its agents | 314 79th Ave N | not known | not known | Old brokerage. |
| LinkedIn, linkedin.com/in/timmy-nash-8b0a651a/ (title from search; fetch blocked) | "Timmy Nash - executive - Seaside Realty Company" | not known | not known | not known | No Chapter3. |
| BrickWood Mortgage, brickwoodmortgage.com/loan-officers/timmy-nash/ | Timmy Nash, Sr Loan Officer, NMLS 252563 | 1601 Glenns Bay Rd, Surfside Beach | 843-314-4103 | none | Bio: "top producing South Carolina Realtor for nearly 10 years before joining BrickWood Mortgage in 2008." No mention of or link to Chapter3. |
| BrickWood, brickwoodmortgage.com/client_biographies/timmy-nash/ | Timmy Nash, Loan Officer | none | (843) 314-4101 | none | Same bio. No Chapter3. |
| YouTube, youtube.com/@Chapter3Realty | Chapter3 Realty | none | none | **none** | Exists. 10 subscribers, about 18 Shorts (top views 3K). Channel description is empty and has no link to the website. |
| Facebook, facebook.com/chapter3realty | not verifiable | | | | Login wall. A made-up page name gives the same redirect. |
| Instagram, instagram.com/chapter3realty | not verifiable | | | | 429 and login wall. |
| LinkedIn company page | none found | | | | Searches return other companies (C3 Real Estate Solutions, 3C Realty). Staff profiles (Abdulla Hijazi: OutGrow Digital, Blue Emerald Landscaping; Devin Day: MortgageFounder) do not list Chapter3. |
| BBB | none | | | | BBB search for "Chapter3 Realty" near Murrells Inlet returned 7 unrelated results. |
| Yelp | none found | | | | Search for a yelp.com/biz page returned other Murrells Inlet agencies only. |
| Zillow, Realtor.com | not verifiable | | | | Blocked. No Chapter3 or Tim Nash profile appeared in searches. |
| Myrtle Beach Area Chamber | none found | | | | Not in search results for the chamber's real estate directory. |
| Nextdoor, Foursquare, Apple Maps | not verifiable | | | | JavaScript apps. |
| OpenStreetMap (Nominatim) | none | | | | No place for "Chapter3 Realty" or for 573 Vista Drive. |
| SC LLR licence 28849 (company) and 43182 (Tim Nash) | not verified | | | | reCAPTCHA. Homes.com shows 43182 under Seaside Realty. |

Bio conflict: the site says Tim Nash has "over 30 years" selling real estate. Homes.com says 15 years. BrickWood says nearly 10 years as a Realtor before 2008, then a loan officer since 2008. AI engines read all three.

Geo coordinates: the site's schema `geo` is 33.5510, -79.0359, which is the Murrells Inlet town centre. Google places 573 Vista Dr at 33.5928, -78.9987, about 5.5 km away. The CCAR pin agrees with Google.

## 6. sameAs in the site's JSON-LD

From `index.html` (same on all 127 pages): `"sameAs": ["https://facebook.com/chapter3realty", "https://instagram.com/chapter3realty", "https://youtube.com/@chapter3realty"]`

| sameAs URL | Resolves | Belongs to the business |
|---|---|---|
| https://facebook.com/chapter3realty | Redirects to Facebook login | Not verifiable |
| https://instagram.com/chapter3realty | 429, login redirect | Not verifiable |
| https://youtube.com/@chapter3realty | 200. Canonical handle is @Chapter3Realty, channel UCqdrHwaRToMnh3qUYiiJE-w | Yes, by name. The channel does not link back to the site, so the link only goes one way. |

Missing from sameAs (profiles that exist):
- CCAR office listing: https://members.ccarsc.org/officedirectory/Details/chapter-3-realty-corp-4967203
- YouTube channel URL in canonical form: https://www.youtube.com/@Chapter3Realty
- No Google Business Profile, LinkedIn company page, Zillow, Realtor.com or Yelp profile exists to add.
- The Person entries for Tim Nash have no `sameAs`. Candidates: the BrickWood profile, the CCAR realtor record, the LinkedIn profile once it is updated.

## 7. Backlinks, mentions and brand search

Third-party pages that link to chapter3realty.com:
- CCAR office directory (http://Chapter3realty.com)
- CCAR realtor directory record for Fredrick Nash (http://Chapter3realty.com)

Third-party mentions without a link: none found. No news, press release or local press coverage was found. BrickWood Mortgage (preferred lender, Tim Nash's employer) does not mention or link to Chapter3 on its homepage, its sitemap or either Tim Nash page.

Public GitHub repositories: github.com/chapter3realty/Chapter3-Website and github.com/chapter3realty/Blog-Brain are public. Both rank for "chapter3realty.com" and for "chapter3realty" ahead of most of the site's own pages. They hold the full site HTML, CLAUDE.md, PLAYBOOK.md, HANDOFF.md and this audit. The WebSearch AI summary quotes the README ("built to rank in Google and get quoted by AI answer engines").

What a person sees in a brand search:

| Query | What appears |
|---|---|
| Chapter3 Realty | Quizlet and Brainscape "Real Estate Chapter 3" flashcards in the top 5. chapter3realty.com is 6th. |
| Chapter3 Realty Murrells Inlet | innovateonline.com first, chapter3realty.com second |
| "Chapter 3 Realty" Myrtle Beach | chapter3realty.com first |
| "Chapter III Realty" | Textbooks only. No Chapter3. |
| Chapter III Realty Myrtle Beach | chapter3realty.com first (matched loosely) |
| chapter3realty.com | GitHub repos 1st and 2nd, Wikipedia "Chapter Three" 3rd, the site 4th |

Brand collision: no other brokerage named Chapter 3 Realty or Chapter III Realty was found in the US. The collision is with generic "Chapter 3" textbook and flashcard pages, plus C-III Capital Partners and "Chapter Three" on Wikipedia. The USPTO trademark search was not checked (it needs JavaScript).

Domains: chapter3realty.com was registered on 2026-02-15 and runs on Cloudflare; www redirects to the apex. chapteriiirealty.com, chapterthreerealty.com, chapter3realty.net, chapter3realty.org and chapter3realtysc.com return NXDOMAIN in DNS, which suggests they are unregistered.

## 8. Reviews

| Platform | Reviews |
|---|---|
| Google | 0 (no profile found) |
| Yelp, BBB, Facebook, Zillow, Realtor.com | 0 found (Facebook and Zillow could not be checked) |
| Homes.com (Tim Nash, under Seaside Realty) | not readable |
| The website | 5 five-star testimonials on the homepage carousel, signed only "Out-of-state buyer", "First-time buyer", "Relocated from Ohio", "Investor, North Myrtle Beach" and "Seller, Myrtle Beach". No names, dates, source or platform. |

Review schema: none. Zero pages carry `Review` or `AggregateRating`. This is correct, because self-hosted reviews of your own business are not eligible for review stars.

Risk: the brokerage launched in May 2026. Testimonials with no source cannot be verified. AI engines already quote them as evidence. The FTC rule on consumer reviews and testimonials (16 CFR Part 465, in force since October 2024) bars reviews that misrepresent the reviewer's experience. The owner should confirm each testimonial is a real client and keep the record.

## 9. Competitors

Google review counts are from Google Maps payloads where shown. Some profiles show a star rating but no count was readable.

| Query | Competitor that outranks | What they have that Chapter3 lacks |
|---|---|---|
| myrtle beach real estate agent | Jerry Pinkas Real Estate Experts (homeguidemyrtlebeach.com) | Google profile rated 4.9. 20 years and a WSJ team ranking cited by AI summaries. Video embeds. Also listed on Zillow, FastExpert and U.S. News agent pages, which rank themselves. |
| murrells inlet real estate | Century 21 The Harrelson Group (c21theharrelsongroup.com) | Google profile rated 4.6. Crawlable listing pages per town and subdivision (Chapter3's listing search is a JavaScript modal with no crawlable pages). National franchise domain authority. |
| myrtle beach short term rental rules | Hereda Team at Carolina Crafted Homes (carolinacraftedhomes.com) | 2 indexed STR pages ranking. Google profile with 42 reviews. Article and FAQ schema with a dateModified. Chapter3's /invest/str-rules/ is not indexed. |
| south carolina 4 percent property tax | The Downing Group, Keller Williams (thedowninggroup.com) | Google profile with 1,376 reviews. A named author on the article. Chapter3's /buyers/property-taxes/ is not indexed. |
| myrtle beach hoa fees | Jerry Pinkas (homeguidemyrtlebeach.com); Greg Harrelson (gregharrelson.com, 2 results) | Old domains with many indexed blog posts. Google profiles. Chapter3's 16 /hoa/ pages are not indexed. |

Other review counts seen: Sloan Realty Group 1,119; The Boyd Team 126; Salt Realty 82. Abe Safa (abesafa.com, rated 4.9) ranks for relocation, investment and 1031 queries.

Common pattern: every local competitor that outranks Chapter3 has a verified Google profile with reviews, older indexed content and citations on Zillow, Yelp, U.S. News and FastExpert. On-page schema is not the gap: Chapter3's pages carry more structured data than most competitor pages checked.
