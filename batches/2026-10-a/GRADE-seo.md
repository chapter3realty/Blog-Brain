# SEO and answer-engine grade: four 55+ community pages and the hub

Graded 2026-10-11 by an independent auditor. Built HTML from the draft site (scratchpad `draft/chapter3realty`). Pages:

- /buyers/55-plus-communities/del-webb-north-myrtle-beach/
- /buyers/55-plus-communities/del-webb-grande-dunes/
- /buyers/55-plus-communities/myrtle-trace/
- /buyers/55-plus-communities/seasons-at-prince-creek-west/
- the hub /buyers/55-plus-communities/, sitemap.xml, robots.txt, llms.txt, llms-full.txt

Standards: STANDARD.md, `reports/Page design for readers and search.md`, `research_notes/Page design for readers and search/search_and_answer_engines.md`.

## The verdict

The four pages are well built and badly aimed. The structure is close to textbook: question headings, a short answer up top, open FAQ text that matches the schema word for word, primary sources, our own maps, low duplication. `tools/score.js` gives all four 100/100. That score does not measure search demand or whether the cluster agrees with itself, and those are the two places these pages fail.

1. **They do not answer what people type.** Google autocomplete for all four names offers "HOA fees". Three of the four pages give no HOA fee. The fourth rounds a verified $95 to "about $100". In this audit, a search engine answered "Del Webb North Myrtle Beach HOA fees" with "$285 to $315 a month" from agent listing sites, and "Seasons at Prince Creek West HOA fees" with "$324 to $361". Our page will not be the cited source for the most common question about each community.
2. **The cluster contradicts itself.** The hub, the spokes, llms.txt, llms-full.txt and two older pages give different numbers and different gate claims for the same communities. An answer engine that reads more than one of them can quote any of the versions.

Overall grade: **C+**. Fix the first five items in the top ten and this becomes a B+ to A- cluster.

## Grades

| Area | Grade | Why, in one line |
|---|---|---|
| Search intent and keyword targeting | C | Built around "what is it like to live in", which nobody types. Real modifiers are HOA fees, reviews, HOA rules, amenity center, rentals, resales, photos. 3 of 4 pages have no fee. |
| Title tags and meta descriptions | B- | Right length, unique, place in every title. Formulaic ("Living in X", "What life is like in X:"), no fee or rules hook, Grande Dunes title has no "55+". |
| Question headings and self-contained answers | A- | Every H2 is a question with the name in it; answers open with a plain sentence. Two weak answers (golf, a "It is" opener). |
| Internal linking and anchor text | C+ | Spokes reach the hub only through the breadcrumb. The hub and siblings link only from table cells. Four older pages mention these communities with no link. |
| Structured data | B- | Valid JSON, FAQ matches the page, excellent image license data. `reviewedBy` is on the wrong type, `about` points at the brokerage, no Place entity, author anchors do not exist. |
| E-E-A-T | C+ | Strong primary sources. Weak person signals: author is an operations officer, names not linked, no author note, no licence number, no photo taken by us, four look-alike invented examples. |
| Freshness | B | Spokes are dated and say when sources were read. The hub is not: schema and sitemap say 2026-09-07, the eyebrow says "verified July 2026", the table says "October 2026". |
| Crawlability | B | robots, canonical, `index, follow`, sitemap entries with images are all right. llms.txt describes the pages wrongly, llms-full.txt lacks them and carries a stale hub. |
| Page speed signals | B | 157 to 187 KB of HTML (40 to 48 KB gzipped), about double a normal article, mostly inline map SVG. Hero WebP is about 200 KB and most phones get it. Fonts and scripts are fine. |
| Duplicate content | A- | 2 to 3 percent by the site measure; about 10 to 12 percent of 6-word runs after masking names. The shared table and a repeated story shape are the only patterns. |
| Answer-engine quotability and accuracy | B- | Short answers are quotable and mostly right. Three quotable errors or gaps (Grande Dunes golf, two Grande Dunes prices, rounded Myrtle Trace numbers) and no fee answer on three pages. |

Per page:

| Page | Grade | Main problem |
|---|---|---|
| Del Webb North Myrtle Beach | B- | No HOA fee, no rental rule, "amenity center" never said, one "It is" section opener. |
| Del Webb at Grande Dunes | C+ | Golf FAQ is incomplete; two resale prices on one page; no lease rule though the ledger has it; no "55+" in the title. |
| Myrtle Trace | B+ | Best of the four. Rounds a verified $95 fee and 518 homes into weaker "about" numbers. |
| Seasons at Prince Creek West | B- | No HOA fee; silent on the gate (the hub calls it "verified gated"); the lead photo is Pawleys Island. |
| Hub | C | Stale dates, numbers that disagree with the spokes, 55places.com as the source, sitewide share image, Cypress Village still listed as 55+ (PLAN holds it out). |

## 1. Search intent and keyword targeting

We never did keyword volume research. This audit used Google autocomplete (suggestqueries endpoint, US English, 2026-10-11) and live web results. Autocomplete shows what people type, not how many.

What autocomplete offers for each name:

| Typed | Suggestions, in Google's order |
|---|---|
| del webb north myrtle beach | reviews, homes for sale, resales, for sale, amenity center, **hoa fees**, hoa, community, rentals |
| del webb grande dunes | homes for sale, myrtle beach, reviews, login, **hoa fees**, amenity center, for sale |
| del webb myrtle beach | sc, homes for sale, reviews, **hoa fees**, rentals, amenity center, resales |
| myrtle trace | homes for sale, conway sc, **hoa**, **hoa rules**, **myrtle trace cmc**, **myrtle trace venice fl**, hoa fees |
| myrtle trace conway | sc reviews, **reviews complaints**, south homes for sale |
| seasons at prince creek | west, homes for sale, reviews, **photos**, murrells inlet sc, **hoa fees** |
| how much are hoa fees at del webb | what is included in del webb hoa fees, does del webb have hoa fees |

What this means:

- **HOA fees** is the one informational modifier on every community. Only Myrtle Trace states a fee.
- **Reviews** is the second. The pages' "what is life like" angle serves it in part, but there is no section on drawbacks or what owners dislike. B1 already allows "good news first, then the drawbacks".
- **Amenity center** is the builder's and the searchers' word. The pages say "clubhouse" only.
- **Rentals** and **HOA rules**: Myrtle Trace and Seasons answer the lease rule. Grande Dunes does not, though its ledger has a 12-month minimum lease. Del Webb North Myrtle Beach does not.
- **Myrtle Trace CMC** (Conway Medical Center) matches the Myrtle Trace angle exactly. Good call.
- **Myrtle Trace Venice FL** exists. Entity markup with a place and coordinates helps engines keep the two apart.
- **Photos**: none of our photos show the communities. Every caption says so.
- **Homes for sale / resales** is transactional. Listing sites own it. The pages do not try, which is right, but a link to the site's own listing search for each neighborhood would catch some of that traffic.
- Live results for the bare names are mostly agent IDX listing pages, delwebb.com and 55places.com. These pages compete for the informational half, where few sources are primary. That is winnable.

## 2. Title tags and meta descriptions

| Page | Title (chars) | Description (chars) |
|---|---|---|
| Del Webb NMB | Living in Del Webb North Myrtle Beach (55+) \| Chapter3 (54) | What life is like in Del Webb North Myrtle Beach: new homes a mile from the beach, lawn care, the clubhouse and pools, the 55+ rule and the costs. (146) |
| Grande Dunes | Living in Del Webb at Grande Dunes, Myrtle Beach \| Chapter3 (59) | What life is like in Del Webb at Grande Dunes, Myrtle Beach: the Ocean Club and its clubs, the houses and villas, the 55+ rule and the costs. (141) |
| Myrtle Trace | Living in Myrtle Trace, a 55+ Community in Conway \| Chapter3 (60) | What life is like in Myrtle Trace near Conway: a hospital minutes away, the pool, ponds and clubs, the homes, the 55+ rule and the costs. (137) |
| Seasons | Seasons at Prince Creek West, Murrells Inlet 55+ \| Chapter3 (59) | What life is like in Seasons at Prince Creek West near Murrells Inlet: two pools, visits from grandchildren, the homes, the 55+ rule and the costs. (147) |

All pass S1, S2 and S9. The problems:

- Four titles and four descriptions share one template. Fine for Google, but nothing in them matches the top modifier (HOA fees) or gives a reason to click over a listing site.
- "the costs" promises a cost answer that three pages do not fully give.
- The Grande Dunes title has no "55+". The Ocean Club, its real advantage, is not in the title.
- og:title and Article.headline are a third wording ("Living in Myrtle Trace, Conway: close to the hospital, with a pool, ponds and clubs"). Not wrong, but the H1, title and headline say the same thing three ways.

New titles are in fix 8, to use only after fix 1 puts a fee on the page.

## 3. Headings and self-contained answers

Strong. Every H2 is a question, every section opens with a plain answer, the FAQ is open text, and the FAQPage schema matches the visible FAQ word for word on all five pages (checked by script). "On this page" labels match the H2s and every anchor resolves.

Weak spots:

- Del Webb NMB, "Where is Del Webb North Myrtle Beach, and what is the town like?" opens "It is inside the city of North Myrtle Beach". Quoted alone, "It" has no subject. The scorer flags it too.
- Grande Dunes FAQ "Is there a golf course at Grande Dunes?" answers "Yes. Grande Dunes has a private 18-hole golf course." Grande Dunes has two courses: the private Members Club and the Resort Course, which takes daily-fee public play. An engine will quote our sentence as complete. It is not.
- The community name is in every heading (31 to 43 mentions a page). Right for passage retrieval, since each section stands alone. Do not add more.
- The "Example:" stories are paragraphs inside a section. A chunker that lifts one paragraph can drop the label and quote "Ruth bought a house in Myrtle Trace" as fact.

## 4. Internal linking and anchor text

Body links found:

- Each spoke links to /buyers/property-taxes/ and /buyers/coastal-insurance/ in sentences with good anchors, and to the three siblings from the comparison table's name cells. Everything else is /contact/ with "Speak to an expert", "Talk to a specialized agent", "Let us make it simple", "We help get insurance quotes if you need them."
- No spoke links to the hub in the body. The breadcrumb is the only link up.
- The hub links to the four only from table cells. Its FAQ "Is there a Del Webb community in Myrtle Beach?" names both Del Webbs and links neither.
- No other page on the site links to the four. These pages already name them, in plain text:
  - /buyers/retirees/: "Del Webb at Grande Dunes is the most established active adult community..."
  - /submarkets/conway/: "active-adult communities such as Lakeside Crossing and Myrtle Trace"
  - /buyers/golf-communities/: "sold and bought in Seasons at Prince Creek West" (twice)
  - /submarkets/murrells-inlet/: "Prince Creek is the large master-planned choice"
- The spokes do not link to guides a 55+ buyer needs next: /buyers/retirees/ (the homestead exemption at 65 changes every tax figure on these pages), the town's submarket page, /hoa/estoppel-and-transfer-fees/ (every page mentions a one-time fee at closing), /buyers/new-construction/ (Del Webb NMB), /buyers/golf-communities/ (Grande Dunes, Myrtle Trace).
- The spoke breadcrumb is Home / 55+ communities / X. The hub's is Home / Buyers / 55+ Communities, and the URL has /buyers/. The spoke BreadcrumbList skips a level.

`score.js` passes S7 and S8 because it counts /contact/ and the templated sibling table. A reader or a crawler gets far less than "6 pages".

## 5. Structured data

What each spoke carries: RealEstateAgent (sitewide), WebSite, BreadcrumbList, WebPage, Article, FAQPage, a Person for the author, and an @graph of ImageObjects with full licence fields. All blocks parse.

Defects, in order of weight:

1. **`reviewedBy` is on the Article.** In schema.org, `reviewedBy` belongs to WebPage, not Article or CreativeWork. Validators flag it, and Google ignores it there. Move it to the WebPage block.
2. **`WebPage.about` is the brokerage** (`#org`). The page is about the neighborhood. Point it at a Place.
3. **`Article.about` is a bare Thing** with a long sentence for a name. Use a Place with an @id, address, coordinates (already in the "Open in Google Maps" links), the county it sits in, and the HOA's site. No rich result comes from this. It tells engines which Myrtle Trace this is.
4. **Author anchors do not exist.** `https://chapter3realty.com/about/#devin-day` and `#timmy-nash` are used as @id and implied anchors, but /about/ has no element with those ids. All three Person objects share url /about/.
5. **The author Person says "Operations Officer and front-end product lead" and knowsAbout "Mortgage financing", "DSCR loans".** On a 55+ page that is the wrong expertise, and "Mortgage financing" sits badly with C1 (Chapter3 does no financing work). The sitewide RealEstateAgent also lists "DSCR loans" and "condotel financing" in knowsAbout. Flag for the owner; it is on every page, not just these.
6. **Images are not of the subject.** Article.image, primaryImageOfPage and og:image are a North Myrtle Beach beach, a Myrtle Beach beach, a Waccamaw River scene and a Pawleys Island walkway. Google's image guidance asks for relevant images. The Seasons share card shows a different town.
7. BreadcrumbList skips "Buyers" (see section 4).
8. `speakable` on the H1 does nothing. Harmless.

Types to add or not:

- **Place** for each community: yes, as the `about` of both WebPage and Article. Example for Myrtle Trace in fix 6.
- **Residence / GatedResidenceCommunity**: no. Residence fits a dwelling, and "gated" is unverified for Seasons and false for two others.
- **RealEstateAgent**: already present sitewide. Do not add review or rating markup.
- **FAQPage**: keep, since it matches, but it earns no rich result after 2026-05-07.

## 6. E-E-A-T

Strong:

- Primary sources inside the body: recorded covenants, HOA rules and budgets, the city's agreement with the builder, FEMA flood maps by address, 42 USC 4012a, county tax levies, Medicare Care Compare. 55places and listing sites have none of this. This is the "non-commodity" content Google's 2026 AI guide asks for.
- A sources line with the date read, and plain caveats (drive times without traffic, flood cost is a ZIP median).
- A broker as reviewer.
- One real story: the Blackmoor clients who moved to Seasons.

Weak:

- **Author.** Devin Day, Operations Officer. Fine under the owner's rule, but nothing on the page says why he knows 55+ neighborhoods. The byline names are plain text, not links. There is no author note with a photo, which STANDARD's page diagram calls for.
- **Reviewer.** "Reviewed by Tim Nash, Broker-in-Charge" is the strongest trust line on the page, and it carries no link and no licence number. /about/ has "license 43182" and company licence 28849. Use them. Ship only if Tim has in fact reviewed each page; a reviewer line that is not true is worse than none.
- **No first-hand photos.** Every caption says the photos are of the town, not the community. A buyer searching "seasons at prince creek photos" gets nothing from us, and nothing on the page shows we have been there.
- **Experience is invented.** Each page's experience is an "Example:" story: Gary from Dayton, Margaret from Rochester, Ruth from Erie, Ken and Mary from Akron. Same arc each time: decades of a habit up north, one problem, one rule for the search, a closing image on the first Saturday or Tuesday. It meets T2, but it is not experience in Google's sense, and side by side the template shows.
- `score.js` counts "An agent at Chapter3 can read the HOA documents with you" as first-hand experience. It is a service offer.

## 7. Freshness

- Spokes: byline "Updated October 5, 2026", datePublished and dateModified 2026-10-05, sitemap lastmod 2026-10-05, sources "Read October 5, 2026". Consistent. On first publish `node build.js dates` sets the real date; a brand-new page should not say "Updated".
- Hub: schema dateModified 2026-09-07, sitemap lastmod 2026-09-07, byline "Published July 20, 2026", eyebrow "Community directory · verified July 2026", sources "Verified July 2026". The table cites "Pulte, October 2026", and this batch changed the hub (links, corrections). The hub looks four months old while holding October numbers. Run `build.js dates` once the hub prose is final.
- HOA fees, prices and builder status change yearly. Put each in `facts/registry.json` with a `staleBy` date, and review on the 90-day cycle T4 sets for volatile pages.

## 8. Crawlability

- robots.txt allows Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and the rest. Good.
- Each page: `index, follow, max-image-preview:large, max-snippet:-1`, absolute lowercase canonical with trailing slash. Good.
- sitemap.xml lists all four with lastmod and image entries. The image entries list the same photo four times (1200w and three crops). Harmless. The hub entry's lastmod is stale (section 7).
- **llms.txt describes the pages wrongly.** Its lines promise "Pulte's October 2026 prices" and "the 2025 tax" (Del Webb NMB), "the 12-month lease rule" and "the resale working capital charge" (Grande Dunes, not on the page), "$95 monthly HOA dues" and "the $1,450 capital contribution" (Myrtle Trace, the page says "about $100" and "a little over $1,500"). The hub line still says "HOA fees $43-$384/mo", which the hub corrections removed.
- **llms-full.txt does not contain the four pages, and holds an older hub.** That hub text says Del Webb at Grande Dunes is "Sold out; resale only ... gated" at "$317/mo houses, $384/mo villas", Del Webb NMB "from about $475,000 ... $315/mo", Myrtle Trace "About $90/mo ... 1980-2005", and "Verified gated: Seasons ... and Del Webb at Grande Dunes". The Grande Dunes ledger marks the $317 and $384 figures unverifiable and lists "not gated" from two sources.
- Google ignores llms.txt, per its 2026 guide. Other agents may read it, and STANDARD section C lists llms.txt as a surface the claims rules cover. Wrong text there is a defect even if it ranks nothing.

## 9. Page speed signals in the HTML

| Page | HTML | gzip | Inline SVG | JSON-LD | Inline CSS |
|---|---|---|---|---|---|
| Del Webb NMB | 157 KB | 39 KB | 52 KB | 15 KB | 20 KB |
| Grande Dunes | 180 KB | 46 KB | 72 KB | 15 KB | 20 KB |
| Myrtle Trace | 187 KB | 48 KB | 77 KB | 16 KB | 19 KB |
| Seasons | 186 KB | 48 KB | 76 KB | 16 KB | 20 KB |
| Hub (for scale) | 92 KB | | 1 KB | 10 KB | 8 KB |

- The two maps per page are 28 to 60 KB of inline SVG. The close-up map alone is 17 to 37 KB. That is the cost of P8 and it is acceptable: the maps are content and parse fast. If weight matters later, move the close-up map to an external `.svg` in an `<img loading="lazy">`. Every map fact is already in the text.
- Feature-card icons are 4 to 5 KB inline SVG each and repeat across pages. A shared sprite would save 15 to 25 KB a page.
- The hero is a 1200x900 WebP of about 200 KB with `srcset` 600w and 1200w only, `sizes="(max-width: 1200px) 100vw"`. Phones at 2x or 3x take the 1200w file. Add a 900w size and compress the 1200w to about 120 KB.
- The hero sits below the short answer, has `fetchpriority="high"`, no `loading="lazy"`, width and height set. Correct. Below-fold images are lazy with sizes. Correct.
- Fonts use `font-display: optional`, loaded async with a noscript fallback. Scripts sit at the end of the body. No third-party scripts were added.

## 10. Duplicate and near-duplicate content

- Site measure (S10): 2 to 3 percent shared with the nearest sibling.
- My measure: 10 to 12.6 percent of 6-word runs shared between any two pages after masking the community and town names. Well under the 25 percent line.
- Shared verbatim: the four-row comparison table (all four pages), the byline, the office hours line, the map data credit, the CTA sentence "We help get insurance quotes if you need them."
- Shared in shape: the title and description templates, and the story arc in section 6. Not a duplicate-content risk at four pages. It becomes one at fifteen. Vary the story shape before the next batch.

## 11. What an answer engine would quote

| Page | Likely quote | Correct? | Attributable? |
|---|---|---|---|
| Del Webb NMB | "Del Webb North Myrtle Beach has about 400 homes built so far, and its builder is still selling new ones. At least one person in each household must be 55 or older." | Yes, per the ledger. | Yes. Names the subject; Chapter3 is the domain. |
| Del Webb NMB | "Every lot here is outside the high-risk flood zone on the government's flood map." | Yes. "here" needs the heading for context. | Yes. |
| Del Webb NMB, "HOA fees" | Nothing. Engines quote MLS listing sites ($285 to $315). | n/a | n/a |
| Grande Dunes | "Each owner also pays, through the homeowners association (HOA) bill, for the Grande Dunes Ocean Club, a beach club." | Yes. | Yes. |
| Grande Dunes | "Grande Dunes has a private 18-hole golf course." | **Incomplete.** The Resort Course is public daily-fee golf. | Yes, which makes it worse. |
| Grande Dunes | "A house in Del Webb at Grande Dunes usually sells for about $665,000" and, in the table, "Resale homes usually sell for About $630,000". | **Both may be right, but they read as a contradiction.** The table figure seems to mix houses and villas. | Either one may be quoted. |
| Myrtle Trace | "Myrtle Trace is a neighborhood of about 500 homes just outside Conway." | **Weaker than the verified 518**, and the hub says 518. | Yes. |
| Myrtle Trace | "HOA fee: About $100 a month" | **Rounded from a verified $95 (2026).** The hub and listings say $95. We look less exact than our sources. | Yes. |
| Myrtle Trace | "Only in part. The back entrance has gates, and the front entrance is always open." | Yes. Best answer in the set. | Yes. |
| Seasons | "At least one person in each home must be 55 or older and live there six months of the year or more. Grandchildren under 18 can come to stay for up to 60 days a year." | Yes, per the charter. | Yes. |
| Seasons, "is it gated" | Nothing on the page. The hub says "Verified gated: Seasons at Prince Creek West". | **The hub overstates it.** The ledger: builder called it gated in 2013, the charter allows gates, 2026 status not verified. Listings say gated. | Hub sentence would be quoted. |
| Any page, "reviews" | Possibly an Example story ("Ruth bought a house in Myrtle Trace, inside the circle."). | **Risk: lifted without its "Example:" label, it reads as a real client.** | Yes, as Chapter3's. |

## Top ten fixes, ranked by impact

### 1. Put the HOA fee on every page, as a dated number, and stop rounding verified figures

The most typed question about each community has no answer from us.

- Get the fee from a primary or first-hand source, in this order: the HOA or its manager in writing; a resale certificate or closing file in Chapter3's records; the HOA fee field on MLS closings in the last 12 months (Chapter3 is an MLS member; cite it as recent sales, not as the HOA). Add each to the page's fact ledger, have a second agent verify it, and add it to `facts/registry.json` with a `staleBy` date.
- In each cost section, add one line: "HOA fee: $X a month in 2026. It includes ..." (lawn care, TV package, Ocean Club, as each ledger supports).
- Add one FAQ entry per page, same wording in the FAQPage schema: "How much is the HOA fee in [name]? $X a month in 2026, and it includes ...".
- If a primary number cannot be had before launch, say so with the range: "The HOA does not publish its fee. Homes sold in 2026 listed it at $X to $Y a month." Silence hands the answer to listing sites.
- Myrtle Trace: change "About $100 a month" to "$95 a month in 2026" and "about 500 homes" to "518 homes". Both are verified (ledger rows 30, 31 and 23). P1 is about amounts of $10,000 or more; exact small numbers are what engines quote.

### 2. Make the cluster say one thing

Put each of these in `facts/registry.json` with one wording, then fix every page that disagrees:

| Fact | Spoke says | Hub, llms or other page says | Fix |
|---|---|---|---|
| Myrtle Trace dues | about $100 | $95 (hub), $90 (llms-full) | $95 a month in 2026 everywhere |
| Myrtle Trace size | about 500 | 518 (hub, llms-full) | 518 homes everywhere |
| Myrtle Trace built | 1984 to 1994 | 1980-2005 (llms-full) | 1984 to 1994 |
| Seasons gate | silent | "Verified gated" (hub FAQ), "gated" (golf page) | Verify the 2026 gate on a visit or with the HOA. Then the same sentence on the spoke, hub and golf page. Until then, the hub says "The builder sold Seasons as gated, and its rules allow gates" and drops "Verified". |
| Grande Dunes gate | silent | "gated" (llms-full), "gated access" (/buyers/retirees/) | Ledger lists "not gated" from two sources. Remove "gated" from both, and say it on the spoke. |
| Grande Dunes resale | $665,000 house, $430,000 villa, table $630,000 | $439,900 to $659,000 (hub) | Label the table column "All resales, houses and villas" or show the house figure; make the hub range agree. |
| Del Webb NMB price | about $635,000 new, $535,000 resale | from $585,990 (hub), from about $475,000 (llms-full) | One registry entry for new prices with its date; regenerate llms-full. |
| Cypress Village | (held out, PLAN) | listed as 55+ on the hub and in "Nine" | Remove from the hub table, title copy and description until a recorded age rule is found, as PLAN says. |

Edit the specs, not the built pages.

### 3. Regenerate llms.txt and llms-full.txt from the built pages

- Rebuild llms-full.txt so it contains the four pages and the current hub. If `build.js` writes it, run the build; the draft holds an old copy.
- Replace the four llms.txt lines with lines that describe what each page says:
  - Del Webb North Myrtle Beach: "New Pulte homes about a mile from the beach: about 400 built so far, lawn care and a TV package in the HOA fee, indoor and outdoor pools, the city's 55+ rule, typical new and resale prices, flood zone and drive times."
  - Del Webb at Grande Dunes: "Houses and villas on the Intracoastal Waterway with the Grande Dunes Ocean Club paid through the HOA bill: the recorded 55+ and under-19 rules, the day dock, villa upkeep, typical prices, the one-time fee at purchase, flood zone and drive times."
  - Myrtle Trace: "518 homes outside Conway, about 3 minutes from Conway Medical Center: $95 monthly HOA dues in 2026, about 70 club events a month, the 55+ and one-year lease rules, fences and sheds, taxes and flood zone."
  - Seasons at Prince Creek West: "A 55+ neighborhood near Murrells Inlet with indoor and outdoor pools: the six-month residency rule, 60-day stays for grandchildren, one-year leases, pets and fences, closing fees, the flood-zone corners on 45 lots and the tax."
- Hub line: replace "HOA fees $43-$384/mo" with "HOA fees from $43 a month", matching the corrected hub meta description.
- Run `node tools/claims-scan.js` and `node tools/facts-check.js` on the site after the rebuild, since both read llms.txt.

### 4. Correct the two quotable errors on Grande Dunes

- FAQ and schema, "Is there a golf course at Grande Dunes?": replace the answer with "Yes, two. The Grande Dunes Resort Course takes public tee times for a daily fee. The Members Club is private, with its own membership and price. Neither is paid for by Del Webb's HOA bill." Add a verified ledger row for the Resort Course first (its own site, grandedunesgolf.com).
- Cost section: either drop the table's "About $630,000" for Grande Dunes in favor of the house figure, or rename the column on all four pages to "Resale homes usually sell for (houses and villas together)". One number per meaning.
- Del Webb NMB, section "Where is...": change "It is inside the city of North Myrtle Beach, about a mile from the ocean." to "Del Webb North Myrtle Beach is inside the city of North Myrtle Beach, about a mile from the ocean."

### 5. Link the cluster in sentences, in both directions

Generated pages: edit the specs.

Spokes, add:
- In each comparison section, after the opening sentence: "See every 55+ community near Myrtle Beach compared by price and HOA fee." Anchor "every 55+ community near Myrtle Beach compared by price and HOA fee" to /buyers/55-plus-communities/.
- In each cost section, after the property tax sentence: "At 65, South Carolina takes the first $50,000 of a main home's value off the tax. See how South Carolina taxes retirees." Anchor "how South Carolina taxes retirees" to /buyers/retirees/. The figure is on the hub, sourced to SCDOR.
- Next to the one-time HOA fee at purchase: anchor "what the one-time HOA fees at closing are" to /hoa/estoppel-and-transfer-fees/.
- In the town section: "the North Myrtle Beach market" to /submarkets/north-myrtle-beach/; "the Myrtle Beach market" to /submarkets/myrtle-beach/; "what Conway is like to live in" to /submarkets/conway/; "the Murrells Inlet market" to /submarkets/murrells-inlet/.
- Del Webb NMB, new homes section: anchor "what to check before you buy a new home from a builder" to /buyers/new-construction/.
- Grande Dunes (golf FAQ) and Myrtle Trace (Burning Ridge): anchor "golf communities near Myrtle Beach" to /buyers/golf-communities/.
- Replace the CTA anchors "Let us make it simple" and "Speak to an expert" with what the click does: "Ask an agent to read the HOA rules with you".
- Spoke BreadcrumbList and visible breadcrumb: Home / Buyers / 55+ communities / [name].

Into the spokes, add:
- Hub FAQ "Is there a Del Webb community in Myrtle Beach?": link both names. Hub FAQ on gates: link Myrtle Trace and Seasons.
- /buyers/retirees/: link "Del Webb at Grande Dunes" in the sentence that names it, and remove "gated access".
- /submarkets/conway/: link "Myrtle Trace".
- /buyers/golf-communities/: link "Seasons at Prince Creek West" both times.
- /submarkets/murrells-inlet/: add "Seasons at Prince Creek West is the 55+ neighborhood inside Prince Creek West." with the link.
- /submarkets/north-myrtle-beach/ and /submarkets/myrtle-beach/: one sentence each linking the Del Webb page in that city.

### 6. Fix the structured data

In the spoke template (`specs/_55-plus-kit.js` or mkpage):

- Move `reviewedBy` from the Article block to the WebPage block.
- Add a Place block and point both `WebPage.about` and `Article.about` at its @id. Myrtle Trace example:

```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": "https://chapter3realty.com/buyers/55-plus-communities/myrtle-trace/#place",
  "name": "Myrtle Trace",
  "description": "A 55+ neighborhood of 518 homes in unincorporated Horry County, with a Conway mailing address.",
  "address": {"@type": "PostalAddress", "addressLocality": "Conway", "addressRegion": "SC", "postalCode": "29526", "addressCountry": "US"},
  "geo": {"@type": "GeoCoordinates", "latitude": 33.778502, "longitude": -78.996618},
  "containedInPlace": {"@type": "AdministrativeArea", "name": "Horry County, South Carolina"},
  "hasMap": "https://www.google.com/maps/search/?api=1&query=33.778502,-78.996618",
  "url": "https://myrtletracesc.org/"
}
```

  Use the coordinates already in each page's map links, and the HOA's own site as `url`.
- Add `id="devin-day"` and `id="timmy-nash"` to the matching blocks on /about/ (or give each a profile page) so the Person @ids resolve, and give each Person its own `url` with that fragment.
- Change the author Person's description to his role on these pages and drop "Mortgage financing" and "DSCR loans" from his knowsAbout. Ask the owner about "DSCR loans" and "condotel financing" in the sitewide RealEstateAgent knowsAbout, under C1.
- Add "Buyers" to the BreadcrumbList.
- Drop `speakable`.

### 7. Answer the rest of what people type

Each needs a verified ledger row first.

- **Rentals.** Grande Dunes: add the 12-month minimum lease, once a year, from the ledger, as a house-rules bullet and an FAQ ("Can you rent out a home in Del Webb at Grande Dunes?"). Del Webb NMB: research the recorded rule (ledger item is open) and add it.
- **Gate.** Grande Dunes: "No. Del Webb at Grande Dunes has no gate" once verified. Seasons: per fix 2.
- **Amenity center.** Use the searchers' word once in each clubhouse section: "The clubhouse, which the builder calls the amenity center, has ...". B2 bans industry terms the buyer does not use; this one the buyer types.
- **Reviews.** Add a short "What do owners find hard about [name]?" section after the costs on each page, from facts already in the ledgers: Del Webb NMB is still under construction; Grande Dunes pays a city tax and golf costs extra; Myrtle Trace homes back onto a golf course and owners keep up their own roofs; Seasons limits under-18 visits to 60 days. B1 allows drawbacks after the good news. This is the section an engine quotes for "pros and cons".
- **Is Del Webb at Grande Dunes still building?** The ledger says Pulte has sold out. One sentence on the spoke and one FAQ.

### 8. Rewrite titles and descriptions to match the top searches

After fix 1 is live. All under 62 characters, all end "| Chapter3":

| Page | Title | Description |
|---|---|---|
| Del Webb NMB | Del Webb North Myrtle Beach: HOA Fee, Homes, Rules \| Chapter3 (61) | The HOA fee and what it covers, new and resale prices, the clubhouse and pools, and the 55+ rule in Del Webb North Myrtle Beach, a mile from the beach. |
| Grande Dunes | Del Webb Grande Dunes 55+: HOA Fees, Beach Club \| Chapter3 (58) | What Del Webb at Grande Dunes owners pay each month, the Ocean Club beach club in the HOA bill, the day dock, villas and houses, and the 55+ and visitor rules. |
| Myrtle Trace | Myrtle Trace, Conway SC 55+: HOA Fees and Rules \| Chapter3 (58) | Myrtle Trace in Conway: $95 monthly HOA dues, 518 homes 3 minutes from Conway Medical Center, the pool and ponds, the 55+, lease and fence rules. |
| Seasons | Seasons at Prince Creek West 55+: HOA Fees, Rules \| Chapter3 (60) | Seasons at Prince Creek West near Murrells Inlet: the HOA fee, indoor and outdoor pools, the six-month rule, 60-day stays for grandchildren, and home prices. |

Check each description against S2 (110 to 165 characters) after the fee is filled in. Keep the question H1s; they match the "what is it like" reader and the title now carries the search terms.

### 9. Show first-hand experience and make the people checkable

- One agent visit to each neighborhood with a phone camera: the amenity center from the street or with permission, a street of homes, the pool, the dock or ponds. Our own photos meet `rules/images.md`. Make one the hero, the share image and Article.image. This answers "photos" queries and is the clearest experience signal a page can carry.
- Add a one-line visit note in the short answer area, in the company's voice, only once it has happened: "A Chapter3 agent walked the amenity center on [date]."
- Byline: link "Devin Day" and "Tim Nash" to their /about/ anchors. Add Tim's licence: "Reviewed by Tim Nash, Broker-in-Charge, SC licence 43182" (check the number against the LLR lookup first).
- Add the author note with photo at the foot, as STANDARD's page diagram shows.
- Put each Example story under its own H3, "An example", so the label stays with the text when an engine lifts the passage. Vary the shape for the next batch: not every example needs a northern city, a decades-long habit and a first-weekend ending.
- Ship the "Reviewed by" line only when the broker has reviewed that page.

### 10. Refresh the hub

- Run `node build.js dates` after the hub corrections, so dateModified, sitemap lastmod and the byline move together. Change the byline to "Updated" and drop "verified July 2026" from the eyebrow; the sources line carries the date.
- Replace 55places.com in "Where these numbers come from" with the primary sources the four ledgers already hold (recorded covenants, HOA budgets, the city agreement, county records). Citing a directory as our source invites engines to cite the directory.
- Give the hub its own share image (S5); it uses the sitewide og-image.jpg.
- In the hub's opening paragraph, name and link the four guides in a sentence: "We have full guides to Del Webb North Myrtle Beach, Del Webb at Grande Dunes, Myrtle Trace and Seasons at Prince Creek West."
- Apply fix 2's corrections (Cypress Village, gate wording, Myrtle Trace numbers).

## Also worth doing, below the top ten

- Add a 900w hero size and compress the 1200w hero to about 120 KB.
- Move the close-up map to an external lazy-loaded SVG if HTML weight becomes a concern.
- A link from each spoke to the site's listing search filtered to that neighborhood, if the search supports it, to serve "homes for sale" visitors without a separate page.
- Once live, pull Search Console queries for the four URLs after 60 days. That is the keyword research this batch skipped, with real numbers.

## Method and limits

- Pages parsed with cheerio from the repo's node_modules. FAQ schema compared to the visible FAQ by script. Text overlap measured on visible text with names masked. `tools/score.js` run on all four with SCORE_TODAY=2026-10-11.
- Search demand: Google autocomplete (suggestqueries, client=firefox, hl=en, gl=us) on 2026-10-11, and live web results. People Also Ask boxes were not visible to this audit. No search volumes.
- Facts were checked against the batch's ledgers in `batches/2026-10-a/facts/`, not re-researched, except Grande Dunes golf, where live results show a public Resort Course and a private Members Club.
- No file other than this one was changed.
