# Competitor page patterns: community pages and guide pages

Research date: 2026-10-11. Reader in mind: age 55 to 75, on a phone. Pages were read with a phone user agent where robots.txt allowed it. Every claim has a link. Where a page could not be read, it says so.

Robots.txt status checked on 2026-10-11 (files saved from each site's /robots.txt):

| Site | What robots.txt says for this work | What I did |
|---|---|---|
| 55places.com | `User-agent: *` allows `/communities/` pages. `/blog*` is disallowed for AdsBot only. | Read one community page. |
| delwebb.com | Only `/search`, account and CMS paths are disallowed. | Read the Myrtle Beach metro page. The community page URL I tried redirected to a corporate page. |
| niche.com | Disallows `ClaudeBot`, `anthropic-ai` and `Claude-Web` from `/`. | Not read. |
| investopedia.com | Disallows `Claude-User`, `Claude-Web`, `ClaudeBot`, `Claude-SearchBot`, `anthropic-ai` from `/`. Header says scraping is not allowed. | Not read. |
| zillow.com | Disallows `/homes/`, `/advice/`, `/research/monthly-reports/`. | Not read. Used Zillow's own press release and a Zillow designer's case study. |
| redfin.com | Listing and neighborhood pages: not read, per the brief. `/blog/` is allowed. | Read one blog guide only. |
| realtor.com | `/advice/` is allowed for `*`, but the file opens with "scraping data from this website is unauthorized without the express written permission". | Not read. |
| nerdwallet.com | Article pages allowed. | Read one guide. |
| bankrate.com | Article pages allowed. | Read one guide. |

## (a) Community and neighborhood pages: first screen, key facts, maps, photos, amenities, HOA and price, reviews, FAQs, calls to action, section order

### Takeaway
The two community pages I could read put a phone number, a lead form and a block of facts (price range, HOA range, age rule, home count, builder) in or near the first screen, then long amenity text, homes for sale, reviews, FAQs and an agent pitch. 55places gives the most useful fact block for a 55+ buyer, but it shows raw database labels, contradicts itself on "Gated", and leans on a one-review 5.0 rating. Zillow's own redesign moved from one long scroll to a short summary with tap-through sections for Neighborhood and Schools, and a Zillow designer reports scroll-through rose from 12% to 33%.

### Cited Findings

**55places.com community page (Del Webb at Grande Dunes Myrtle Beach), read 2026-10-11**
- First screen, in order: H1 "Del Webb at Grande Dunes Myrtle Beach - Myrtle Beach, SC", a "Get More Info" button, a photo gallery labeled "All 19 photos | 1 of 19", a "5.0 Rating (1 review)", "View map" and "View photos" links, "Save community and get alerts", and "Call Us: (854) 600-4295". ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- Section tabs below the header: "Overview | Homes For Sale | Models | Amenities | Lifestyle | Reviews". ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- Key facts block, as labeled pairs: "Price range: High $300ks - Low $1Ms", "HOA dues: $312 - $437/mo", "Total homes: 524 (27 for sale)", "Home types: Single-Family, Attached", "New or resale: New And Resale Homes", "Builders: Del Webb, Pulte Homes", "Years built: 2017 - Present", "Age restrictions: 55+", "Gated: No", "Activity director: Yes", "Pets allowed: Yes". ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- The HOA figure carries a note: "Approximate range from current listings. Dues vary by home and neighborhood section. Reach out to an agent to confirm." ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- The HOA "Typically includes" list prints raw field names and contradicts the fact block. It lists "Gated", "Security", "OwnerAllowedGolfCart", "TenantAllowedGolfCart" and "Pet Restrictions", while the fact block says "Gated: No". ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- Section order (H2s): Request a tour; About; Amenities & Lifestyle; Homes & Real Estate; Surrounding Area; Models; Amenities; Clubs, Groups, Activities & Classes; Homes for Sale (with filters); Models; Amenities; Lifestyle; Reviews; FAQs; Real Estate Agent; Similar communities nearby; "I would like to request more info". Several headings repeat. ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- The "Request a tour" block sits right after the facts: "Select your preferred date and time below. An agent will reach out to confirm your request." It repeats the phone number. ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- FAQ block has four questions: average price ("around $640,834"), home types, amenities, and "Is ... suitable for people who want an active lifestyle?" ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- The agent block reads "Here is the community real estate expert who can answer your questions, take you on a tour, and help you find the perfect home", with empty "Homes Sold", "Sold with 55places" and "Avg. Response Time" fields in the served HTML. ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))
- 55places states its data is aggregated from third-party sources, not verified by the developer or HOA, and that it is not affiliated with the builder, developer or HOA. ([55places floor plan page, via search snippet](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach/floorplans/dunwoody-way))
- The page has a full "Review Guidelines" set: "Share Personal Experiences Only", "No Conflicts of Interest", "One Community Review Per Person", "Internal Review". ([55places page](https://www.55places.com/south-carolina/communities/del-webb-at-grande-dunes-myrtle-beach))

**Del Webb (builder) Myrtle Beach metro page, read 2026-10-11**
- H1 "55+ Active Adult Communities in Myrtle Beach", then one intro paragraph on golf, weather and beach access, then an interactive map with a brand legend (Del Webb, Centex, DiVosta, Pulte and others). ([Del Webb Myrtle Beach page](https://www.delwebb.com/homes/south-carolina/myrtle-beach))
- The contact block names three sales staff by first name, gives "Available to Talk or Text at (910) 782-4991", and lists hours "Mon - Sat 9:00am - 5:00pm, Sun 12:00pm - 5:00pm". Buttons: "Request an Appointment" and "Request Info". ([Del Webb Myrtle Beach page](https://www.delwebb.com/homes/south-carolina/myrtle-beach))
- Every phone field carries a long consent notice for automated calls and texts. ([Del Webb Myrtle Beach page](https://www.delwebb.com/homes/south-carolina/myrtle-beach))
- Lower sections: "FAQs about 55+ Communities in Myrtle Beach" (three questions, including "Do Myrtle Beach home builders offer a home warranty?"), "Explore Activities Near Del Webb's Active Adult Communities", "Experience an Active Lifestyle at Our 55+ Communities", "Cost of Living for Retirement Communities in Myrtle Beach, SC", then partner brands and a long list of state links. ([Del Webb Myrtle Beach page](https://www.delwebb.com/homes/south-carolina/myrtle-beach))
- Note: the community page URL I used (`/del-webb-at-grande-dunes-210648`) redirected to a corporate page, so the single-community layout was not read.

**Zillow (official sources only; neighborhood and listing pages not read per robots.txt)**
- Zillow's October 2023 redesign grouped iOS listing details into sections "What's Special", "Market Value", "Monthly Cost" and "Neighborhood", with tap-through for detail "to reduce excessive scrolling". On the web, it moved to a wider single-scroll layout with photos and 3D tours at the top and a full-page gallery on tap. ([Zillow press release, 2023-10-23](https://zillow.mediaroom.com/2023-10-23-Zillow-unveils-a-new-look-for-property-pages,-their-biggest-redesign-in-5-years))
- Zillow's chief design officer: "We introduced a wider layout for images, larger fonts for the most important facts". The release cites no test results. ([Zillow press release](https://zillow.mediaroom.com/2023-10-23-Zillow-unveils-a-new-look-for-property-pages,-their-biggest-redesign-in-5-years))
- Zillow's lead product designer for the Home Detail Page (2022 to 2023, iOS and Android) describes the old page as "built by committee", with information overload, poor grouping and competing calls to action. The fix was a "Hub & Spoke" model: short summary hubs, plus dedicated spoke pages for Schools, Climate and the Neighborhood. ([Mike Knecht case study](https://www.mpknecht.com/zillow-home-detail-page-redesign))
- Reported results: full-page scroll-through "12% to 33%"; "approximately $4M in additional annual Zillow Home Loans revenue on iOS"; fixed text truncation for the "approximately 30% of users" who use larger accessibility text sizes. These are the designer's own figures, with no method described. ([Mike Knecht case study](https://www.mpknecht.com/zillow-home-detail-page-redesign))

**Redfin, Realtor.com, Niche**
- Not read. Redfin and Realtor.com neighborhood pages fall under the brief's listing-page exclusion. Niche disallows Claude agents in robots.txt. I found no official Redfin or Realtor.com design blog post on neighborhood pages in this pass. Student and portfolio case studies exist but are not primary. One independent Redfin study reports buyers ranked "location", "price" and "neighborhoods" (schools, supermarkets, parks) as top concerns and wanted more reviews from people who know the area. ([Zhuoyu Li portfolio](https://www.zhuoyuli.art/work/redfin-redesign)). This is a student or portfolio project, so treat it as weak evidence.

### Inferences
- A 55+ buyer's first questions (price, HOA, age rule, gated or not, pets, new or resale) can be answered in one labeled fact block. 55places shows this works as a format. Chapter3 can copy the format and beat it on accuracy: one source per fact, no raw field names, no contradictions, and a date.
- Both sites put the phone number in the first screen and repeat it. For a 55 to 75 reader on a phone, a tap-to-call number with hours (as Del Webb shows) is likely more useful than a form.
- A single 5.0 rating from one review signals little. A small brokerage should not show star ratings unless it has many real reviews.
- Repeated headings (55places shows "Amenities" three times and "Models" twice) make a long page harder to scan. One heading per topic, in a fixed order, is better.
- Zillow's move to short summaries with tap-through detail, and its note that about 30% of users run larger text sizes, both point the same way for older readers: short blocks, large key facts, and layouts that do not break when text is enlarged.

### Gaps
- Del Webb single-community page layout: not read (redirect). Niche place pages: not read (robots.txt). Redfin, Realtor.com and Zillow neighborhood pages: not read (brief and robots.txt).
- I did not confirm whether 55places' section tabs are sticky on a phone, or whether its map is embedded or behind the "View map" link only. The HTML shows a link.
- No first-party Redfin or Realtor.com design write-up on neighborhood pages turned up.

## (b) Topic guide pages: bylines, reviewers, key takeaways, tables of contents, summary tables, calculators, bios, dates, sources, FAQs, related links

### Takeaway
NerdWallet and Bankrate both show a named writer and a named editor with titles near the top, an explicit date, and a disclosure about how they make money. Bankrate adds a three-bullet "Key takeaways" box, a short table of contents and an FAQ block. NerdWallet adds a "Fact Checked" label that opens an explanation. Neither page I read has a sources list; sources are inline links only. Redfin's blog guide has a comparison table and FAQs but no takeaways box, no table of contents, no reviewer, and several lender promo boxes and listing cards inside the article. Google says bylines with author background help readers trust a page, and warns against changing dates to look fresh.

### Cited Findings

**Bankrate, "How to buy a house in 2026", read 2026-10-11**
- Order: breadcrumb; H1; "Written by" two writers with job titles; "Edited by" an editor with title; "Published on May 26, 2026 | 6 min read"; "Advertiser Disclosure" link and an "editorially independent" note with a "how we make money" link; hero image with credit; a three-link table of contents; a "Key takeaways" box with three bullets; intro; one H2 with 11 numbered H3 steps; "Affordability issues to consider"; three FAQs; "Did you find this page helpful?"; "Cite us" and share tools; full author bios; "You may also like" (three cards). ([Bankrate guide](https://www.bankrate.com/real-estate/how-to-buy-a-house/))
- No "Reviewed by" label. No "Updated" label. No sources section; sources are inline links (for example, Experian in an FAQ answer). ([Bankrate guide](https://www.bankrate.com/real-estate/how-to-buy-a-house/))
- The table of contents label "Affordability considerations" does not match the section heading "Affordability issues to consider". ([Bankrate guide](https://www.bankrate.com/real-estate/how-to-buy-a-house/))
- Each step ends with a "Get started:" paragraph. ([Bankrate guide](https://www.bankrate.com/real-estate/how-to-buy-a-house/))

**NerdWallet, "How to Budget for a New Home So You Don't End Up House Poor", read 2026-10-11**
- Order: partner disclosure ("Here is a list of our partners"); H1; one-sentence summary under the title; "Written by" with name, title ("Senior Writer/Spokesperson"), "6 years of experience" and expertise tags; "Edited by" with name, title ("Managing Editor"), years of experience and expertise; "Updated Jul 14, 2025"; "Fact Checked" with "How is this page expert verified?" explaining a writer and editor review process and linking "More on our editorial rigor". ([NerdWallet guide](https://www.nerdwallet.com/mortgages/learn/how-to-keep-from-being-house-poor))
- Body: three H2 question-style headings ("What does it mean to be house poor?", "How do people become house poor?", "How to avoid becoming house poor") with three H3s. A named outside expert is quoted with firm name. ([NerdWallet guide](https://www.nerdwallet.com/mortgages/learn/how-to-keep-from-being-house-poor))
- End: "Back to top", "About the authors" bios, "Related articles" (two). No key takeaways box, table of contents, FAQ block or sources list on this page. ([NerdWallet guide](https://www.nerdwallet.com/mortgages/learn/how-to-keep-from-being-house-poor))
- NerdWallet keeps calculators as separate pages, such as the affordability calculator, which starts with a ZIP code and uses the 28/36 rule. ([NerdWallet calculator, via search](https://www.nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford))

**Redfin blog, "How to Buy a House Contingent on Selling Yours", read 2026-10-11**
- Byline and date on one line ("April 28, 2026 by Holly Hooper"). No reviewer, key takeaways box, table of contents or sources section. ([Redfin guide](https://www.redfin.com/blog/how-to-buy-a-house/))
- Has a five-bullet "Here's how it works:" list near the top, which works like a takeaways box. ([Redfin guide](https://www.redfin.com/blog/how-to-buy-a-house/))
- Has a comparison table ("Buying with a home sale contingency" vs "without") with rows for financial risk, offer strength, timing, financing and "Best for". ([Redfin guide](https://www.redfin.com/blog/how-to-buy-a-house/))
- Has a five-question FAQ block and a "The bottom line" closing section. ([Redfin guide](https://www.redfin.com/blog/how-to-buy-a-house/))
- Inside the article: two lender promo boxes ("Get prequalified", "See today's rates", "See if you qualify") with an affiliate disclosure, plus "Popular homes for sale" listing cards and a Reddit promo. The author bio lists the writer as an "SEO Content Specialist". ([Redfin guide](https://www.redfin.com/blog/how-to-buy-a-house/))

**Investopedia, Zillow guides, Realtor.com advice**
- Not read. Investopedia blocks Claude agents in robots.txt. Zillow disallows `/advice/`. Realtor.com's robots.txt header forbids scraping without written permission.

**Google's guidance on bylines and dates**
- "We strongly encourage adding accurate authorship information, such as bylines to content where readers might expect it." Google asks whether "bylines lead to further information about the author or authors involved, giving background about them and the areas they write about." ([Google Search Central, updated 2026-10-05](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))
- Google lists as a warning sign: "Are you changing the date of pages to make them seem fresh when the content has not substantially changed?" ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))
- "E-E-A-T itself isn't a specific ranking factor." Google calls fabricated creator profiles "a form of deception". ([Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

### Inferences
- The shared trust pattern is: named writer with role and experience, named editor, explicit date, and a plain note on how the site makes money. Chapter3 can match this with a real byline (Devin Day may be the visible author per CLAUDE.md), the date from `build.js dates`, and its BrickWood affiliate disclosure.
- A visible sources list is a gap at all three sites I read. A short "Sources" list at the end would be a real point of difference for a small brokerage, and fits the fact-ledger rule.
- Bankrate's takeaways box and short table of contents cost little and help a phone reader decide fast. Its mislabeled table-of-contents entry shows the labels must match the headings exactly. A tool can check this.
- Redfin mixes promo boxes and listing cards into the guide body. For a 55 to 75 reader this breaks the reading line and blurs advice and advertising.
- Question-style H2s (NerdWallet) and an FAQ block (Bankrate, Redfin) match how people search by question.

### Gaps
- No "Reviewed by" label appeared on any page I read, so I cannot describe the reviewer pattern from first-hand reading in this pass.
- Calculators embedded inside guides were not seen on the three pages read.
- Investopedia, Zillow and Realtor.com guide layouts were not read (robots.txt or terms).

## Published A/B tests and case studies on layout changes (takeaways boxes, TOCs, galleries, sticky CTAs, map placement)

### Takeaway
Hard published evidence is thin. The best real estate figure found is the Zillow designer's report that a hub-and-spoke layout raised full-page scroll-through from 12% to 33%. Baymard's testing argues against auto-rotating carousels. I found no published A/B test that isolates a key takeaways box, and no first-party source for a table of contents test.

### Cited Findings
- Zillow Home Detail Page, hub-and-spoke redesign: scroll-through "12% to 33%"; about $4M more annual Zillow Home Loans revenue on iOS; text truncation fixed for the "approximately 30% of users" with larger accessibility text sizes. No test method is given. ([Mike Knecht case study](https://www.mpknecht.com/zillow-home-detail-page-redesign))
- Zillow's 2023 public redesign: larger fonts for key facts, photos and 3D tours at the top, full-page gallery on tap, and sectioned app details to cut scrolling. No metrics published. ([Zillow press release](https://zillow.mediaroom.com/2023-10-23-Zillow-unveils-a-new-look-for-property-pages,-their-biggest-redesign-in-5-years))
- Baymard (e-commerce, mobile testing): lack of hover to pause a carousel caused usability issues; participants opened wrong slides, were disrupted mid-slide, and some ignored animated carousel content as "ads". Baymard's first carousel requirement is to turn off auto-rotation, and its alternative is static content. 52% of mobile sites have an auto-rotating homepage carousel. ([Baymard, 10 UX Requirements for Homepage Carousels](https://baymard.com/blog/homepage-carousel); [Baymard mobile guidelines](https://baymard.com/mcommerce-usability))
- Baymard on sticky buttons: give a sticky main button enough white space and avoid a full-width button. A sticky "Add to Basket" bar at one retailer crowded the autocomplete list so users could not read suggestions. ([Baymard best practices](https://baymard.com/blog/ecommerce-ux-best-practices); [Baymard autocomplete](https://baymard.com/blog/autocomplete-design)). These points come from search summaries of Baymard pages; the full findings are paywalled.

### Inferences
- The Zillow result supports a summary-first page with deep sections reached by link or tap, not one long scroll of every fact.
- For a phone reader aged 55 to 75, a sticky call button should be small, not cover text, and not compete with other floating bars.

### Gaps
- A search summary claimed HubSpot tested a blog table of contents module and saw no conversion lift, and that a variant with a CTA in the module did 7% worse than control. I could not find the original HubSpot source, so this is unverified and should not be cited.
- No published A/B test isolating a key takeaways box, map placement on a neighborhood page, or a photo gallery format on a community page was found.
- No web.dev case study specific to real estate or content-guide layout was found in this pass.

## Patterns that hurt older readers (carousels, auto-play, small gray text, pop-ups)

### Takeaway
NN/g's long-running research with users 65 and older finds small text, faint low-contrast text, small tap targets, rigid forms and unclear errors are the main problems, and older users block ads that pop up or play sound. Baymard finds auto-rotating carousels cause errors on phones and get ignored as ads. Zillow reports about 30% of its app users run larger text sizes.

### Cited Findings
- NN/g ran three rounds of studies with 123 participants aged 65+ (2001 to 2019); the latest round mainly recruited people 70+. Readability "remained an issue for seniors throughout all our studies". Participants said "the internet is unfriendly to people with bad eyesight." ([NN/g, Usability for Older Adults: Challenges and Changes, 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/)). This is older than the 2022 to 2026 window but is NN/g's current article on the topic.
- Mobile app text was often faint and too light for comfortable reading. Buttons, dropdowns and links were often too small to tap accurately. ([NN/g 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/))
- Participants installed ad blockers to avoid pop-up ads, including "the ads that play sound music". "Startling sounds" are listed as unfriendly to older users. ([NN/g 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/))
- Forms that accept only one input format (for example, rejecting hyphens in phone numbers) and vague error messages caused failures; older users tend to blame themselves. ([NN/g 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/))
- Older users avoid services that collect too much personal data, and some deleted accounts for that reason. ([NN/g 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/))
- Ability to use websites declines by about 0.8% per year between ages 25 and 60, and people in their 40s already need larger fonts. ([NN/g 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/))
- An earlier NN/g article reports users 65+ were 43% slower at using websites than users 21 to 55, and recommends large links with space between them. ([NN/g, Usability for Senior Citizens: Improved, But Still Lacking](https://www.nngroup.com/articles/usability-seniors-improvements/)). Figure taken from a search summary; the article predates 2022.
- A 2022 systematic review on font size on mobile devices found older adults preferred larger sizes, with a point past which readability drops. ([Frontiers in Psychology review, PMC9376262](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9376262/)). From a search summary; not read in full.
- Auto-rotating carousels: wrong slides opened, focus disrupted, content ignored as ads. ([Baymard](https://baymard.com/blog/homepage-carousel))
- About 30% of Zillow app users had larger accessibility text sizes on, and the old design truncated text for them. ([Mike Knecht case study](https://www.mpknecht.com/zillow-home-detail-page-redesign))

### Inferences
- Patterns to avoid on Chapter3 pages: auto-rotating photo carousels (55places opens with a "1 of 19" gallery), sound or auto-play video, light gray small text, small text links packed together, pop-up lead forms, and long consent blocks next to every phone field.
- Patterns to use: large type for key facts, a single tap-to-call number with hours, static photos with captions, short forms that accept any phone format, and layouts tested at large text sizes.

### Gaps
- NN/g's 2019 article does not cover carousels, gestures or auto-play as separate topics; the full 87 guidelines are in a paid report.
- No 2022 to 2026 study specific to adults 55 to 75 reading real estate pages on a phone was found.
