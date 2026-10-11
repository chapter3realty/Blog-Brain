# Page design and structure for Google, rich results and answer engines (as of 2026-10-11)

Labels used on every finding:
- **[Official]**: a statement by Google, Microsoft, OpenAI, Perplexity, W3C or schema.org about its own system or standard.
- **[Study]**: a peer-reviewed or arXiv paper with a stated method.
- **[Industry study]**: a vendor's data study (Ahrefs, WebAIM). Secondary evidence. Method is stated, but not peer reviewed.
- **[Opinion]**: SEO commentary with no data. Kept to a minimum and marked.

All Google pages below were read on 2026-10-11 directly from developers.google.com (robots.txt allows them). "Last updated" dates are the dates printed on each page.

## 1. Google Search Central: page experience, Core Web Vitals, mobile, helpful content, AI features, headings, images, video, maps, structured data, tables, lists and jump links

### Takeaway
Google's 2026 position is that AI Overviews and AI Mode use the same index, ranking systems and snippet eligibility as classic Search. Nothing special is needed: no AI markup, no llms.txt, and no "chunking". The levers are non-commodity content, crawlable text, good page experience, and structured data that matches visible text. Core Web Vitals are a confirmed but modest ranking input: relevance wins over speed, and speed helps when many pages are equally relevant. The big structured-data change is that **FAQ rich results were removed from Google Search on 2026-05-07, and the documentation was deleted in June 2026.** Breadcrumb rich results show on desktop only, and HowTo was retired in 2023.

### Cited Findings

**AI Overviews and AI Mode (generative AI features)**
- [Official] "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." To be a supporting link, a page must be indexed and "eligible to be shown in Google Search with a snippet". Page last updated 2025-12-10. ([Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features))
- [Official] AI Overviews and AI Mode may run several related searches across subtopics and sources (query fan-out), so they can show a wider and more varied set of supporting links than classic Search. ([Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features))
- [Official] On 2026-05-15 Google published a new guide, "Optimizing your website for generative AI features on Google Search" (last updated 2026-07-10). It says the features are "rooted in our core Search ranking and quality systems" and use retrieval-augmented generation ("grounding") and query fan-out. ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Google: documentation updates log](https://developers.google.com/search/updates))
- [Official] The same guide says that, for Google, "optimizing for generative AI search is optimizing for the search experience, and thus still SEO". It calls "AEO" and "GEO" advice something to evaluate against Google's guidance on third-party SEO advice. ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] The guide uses a real estate example. It names "7 Tips for First-Time Homebuyers" as **commodity content**, "based on common knowledge, which could originate from anyone". It names "Why We Waived the Inspection & Saved Money: A Look Inside the Sewer Line" as **non-commodity content** that "provides unique expert or experienced takes". It says unique, useful content "will likely influence your website's presence in generative AI search in the long run more than any of the other suggestions in this guide." ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] The guide's list of things to ignore for Google Search:
  - llms.txt and other "special" markup. Google Search ignores them, and they "will neither harm nor help".
  - "Chunking" content: "There's no requirement to break your content into tiny pieces for AI ... There's no ideal page length."
  - Rewriting content just for AI systems.
  - Seeking inauthentic "mentions".
  - Overfocusing on structured data: it "isn't required for generative AI search, and there's no special schema.org markup you need to add", but it still helps rich-result eligibility.

  ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] The guide warns that writing separate pages for fan-out query variations "primarily to manipulate rankings or generative AI responses ... violates Google's scaled content abuse spam policy." ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] On semantic HTML, the guide says to focus on human readability "and don't worry about perfect code". Semantic HTML is still "a good idea" because it helps screen readers. It also says browser agents read "visual renderings (like screenshots), ... the DOM structure, and ... the accessibility tree." ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] A Search Console setting (Settings > Search generative AI) lets a site be included (the default) or excluded from AI Overviews, AI Mode and Discover generative features. Excluding does not affect ranking or indexing. As of 2026-08-31 it had rolled out to all websites. ([Google Search Console Help: Search generative AI control](https://support.google.com/webmasters/answer/16908024))
- [Official] Measurement: AI feature traffic counts in the Search Console Performance report under "Web", and a "Generative AI performance report" now exists. ([Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features); [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official] John Mueller's post of 2025-05-21 ("Top ways to ensure your content performs well in Google's AI experiences on Search") recommends:
  - unique, non-commodity content
  - a good page experience: "whether your page displays well across devices, latency ... and whether visitors can easily distinguish main content from other content"
  - Googlebot not blocked, HTTP 200 and indexable content
  - preview controls (nosnippet, data-nosnippet, max-snippet, noindex)
  - structured data that matches visible content
  - "high-quality images and videos" for multimodal search
  - an up-to-date Business Profile

  It also says clicks from AI Overviews "are higher quality". ([Google Search Central Blog, 2025-05-21](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search))
- [Official] Spam policies apply to generative AI responses (changelog, 2026-05-15). Preferred sources expanded to AI Mode and AI Overviews (2026-05-27). ([Google: documentation updates log](https://developers.google.com/search/updates))

**Page experience and Core Web Vitals**
- [Official] Thresholds:
  - LCP within 2.5 seconds
  - INP under 200 ms
  - CLS below 0.1

  "We highly recommend site owners achieve good Core Web Vitals for success with Search." Page last updated 2025-12-10. ([Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals))
- [Official] "Core Web Vitals are used by our ranking systems." "There is no single signal." "Beyond Core Web Vitals, other page experience aspects don't directly help your website rank higher," though they make a site "more satisfying to use". "Trying to get a perfect score just for SEO reasons may not be the best use of your time." Page last updated 2026-09-22. ([Google: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience))
- [Official] On how much it matters: "Google Search always seeks to show the most relevant content, even if the page experience is sub-par. But for many queries, there is lots of helpful content available. Having a great page experience can contribute to success in Search, in such cases." ([Google: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience))
- [Official] Evaluation is "generally ... on a page-specific basis", but "we do have some site-wide assessments." ([Google: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience))
- [Official] The page experience self-check asks about:
  - good Core Web Vitals
  - HTTPS
  - display on mobile
  - no excessive ads that interfere with the main content
  - no intrusive interstitials
  - a main content that is easy to tell apart from other content

  ([Google: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience))
- [Official] Core Web Vitals are measured at the **75th percentile** of page loads, split by mobile and desktop. A page passes only if all three metrics meet the target. ([web.dev: Web Vitals](https://web.dev/articles/vitals), updated 2024-10-31)
- [Official] Thresholds for "poor": LCP over 4000 ms, INP over 500 ms, CLS over 0.25. ([web.dev: Defining the Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds), updated 2025-05-07)

**Intrusive interstitials and dialogs**
- [Official] Intrusive dialogs "make it hard for Google and other search engines to understand your content, which may lead to poor search performance." Google's advice:
  - Use banners that take "only a small fraction of the screen" instead of full-page interstitials.
  - "Don't obscure the entire page with interstitials."
  - "Don't redirect the user to a separate page for their consent or input."

  Page last updated 2025-12-10. ([Google: Avoid intrusive interstitials and dialogs](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials))

**Mobile-first indexing**
- [Official] Google uses the mobile version for indexing and ranking. The mobile page should have:
  - the same primary content as desktop
  - the same headings
  - the same structured data
  - the same alt text
  - the same robots meta tags

  "Don't lazy-load primary content upon user interaction. Google won't load content that requires user interactions (for example, swiping, clicking, or typing)." Accordions or tabs on mobile are acceptable if the content is equivalent. Page last updated 2025-12-10. ([Google: Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing))
- [Official] Lazy-loading must load content "whenever it is visible in the viewport" without relying on scrolling or clicking, "as Google Search does not interact with your page." ([Google: Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading))

**Helpful, people-first content and the rater guidelines**
- [Official] The self-assessment asks:
  - Does the content give original information, reporting, research or analysis?
  - Does it give a substantial, complete description of the topic?
  - Does it show "first-hand expertise"?
  - Does it have "easily-verified factual errors"?
  - Is it "mainly summarizing what others have to say"?
  - Are you "changing the date of pages to make them seem fresh when the content has not substantially changed?"
  - Are you writing to a word count? Google says it has no preferred word count: "No, we don't."

  Page last updated 2026-10-05. ([Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))
- [Official] "Of these aspects, trust is most important." E-E-A-T "isn't a specific ranking factor", but systems "give even more weight" to strong E-E-A-T on YMYL topics. Raters' data "is not used directly in our ranking algorithms." ([Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))
- [Official] New in October 2026 (synced from the rater guidelines): "main content" explicitly includes:
  - "Tabbed or expanded sections"
  - "Interactive features" such as calculators
  - "Page titles and headings"

  Raters judge main content on effort, originality, talent or skill, and accuracy. "Attribution or giving credit to other sources doesn't replace the need for original effort." For YMYL, content "must be highly accurate and consistent with established expert consensus." ([Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content); [Google: documentation updates log, 2026-10-01](https://developers.google.com/search/updates))
- [Official] "Who, How, and Why": make clear who created the content, for example through bylines and links to an author page or About page. ([Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

**Headings, snippets, passages and jump links**
- [Official] "Having your headings in semantic order is fantastic for screen readers, but from Google Search perspective, it doesn't matter if you're using them out of order." There is "no magical, ideal amount of headings". Google also advises: "Break up long content into paragraphs and sections, and provide headings to help users navigate." ([Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide))
- [Official] Passage ranking "is an AI system we use to identify individual sections or 'passages' of a web page to better understand how relevant a page is to a search." ([Google: Ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide))
- [Official] "Snippets are primarily created from the page content itself." The meta description is used when it describes the page better. Snippets differ by query. Page last updated 2026-04-20. ([Google: Control your snippets](https://developers.google.com/search/docs/appearance/snippet))
- [Official] **"Read more" deep links** (Google's jump-to-section links inside a snippet) need three things:
  - content "immediately visible on the page to a human (and not hidden behind an expandable section or tabbed interface)"
  - no JavaScript that forces the scroll position on load
  - no removal of the URL hash fragment

  ([Google: Control your snippets, "Read more" deep links](https://developers.google.com/search/docs/appearance/snippet))
- [Official] Featured snippets reverse the result format, and can appear inside "People Also Ask". Google documents only opt-out controls (nosnippet, data-nosnippet, max-snippet), not how to win one. ([Google: Featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets))
- [Official] Sitelinks are automated. Best practices: page titles and headings that are "informative, relevant, and compact", and internal anchor text that is "concise and relevant". ([Google: Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks))

**Images**
- [Official] Google's image guidance (last updated 2026-03-02):
  - Use `<img>` with alt. "Google doesn't index CSS images."
  - Place images "near relevant text".
  - Supported formats: BMP, GIF, JPEG, PNG, WebP, SVG and AVIF.
  - srcset and `<picture>` are supported. Give a fallback `src`.
  - Alt text is "the most important attribute", is used "along with computer vision algorithms", and serves as anchor text when an image is a link.
  - Avoid keyword stuffing.

  ([Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images))
- [Official] The preferred preview image can be set with `primaryImageOfPage`, an `image` on the main entity, or `og:image`. Avoid "a generic image (for example, your site logo) or an image with text". ([Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images))
- [Official] Article markup: Google recommends "multiple high-resolution images (minimum of 50K pixels when multiplying width and height)" in 16x9, 4x3 and 1x1 ratios. ([Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article))
- [Official] Image license metadata (structured data or IPTC: creator, creditText, copyrightNotice, license, acquireLicensePage) can earn the "Licensable" badge in Google Images. ([Google: Image license metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata))

**Video**
- [Official] Video features (video results, Key Moments and others) require:
  - an indexed "watch page" whose "main purpose is to show users a single video"
  - a stable thumbnail URL

  A page where "the video is complementary to the rest of the content" is not a watch page. Also: "Don't rely on user actions (such as swiping, clicking, or typing) to load the video." Page last updated 2025-12-18. ([Google: Video SEO best practices](https://developers.google.com/search/docs/appearance/video))

**Maps embeds**
- [Official] Google Search Central has no guidance on map embeds for ranking. The performance guidance is on web.dev (see question 2). The AI guidance points local businesses to Google Business Profile instead. ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))

**Structured data**
- [Official] General policies (last updated 2026-07-10):
  - Rich results are not guaranteed.
  - "Don't mark up content that is not visible to readers of the page."
  - Use "the most specific applicable type".
  - Images in markup must be relevant.

  ([Google: General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies))
- [Official] **FAQPage:**
  - **2023-08-08:** FAQ rich results limited to "well-known, authoritative government and health websites". "There's no need to proactively remove" the markup. ([Google Search Central Blog, 2023-08-08](https://developers.google.com/search/blog/2023/08/howto-faq-changes))
  - **2026-05-08:** changelog entry "Deprecating the FAQ rich result feature ... will no longer appear in Google Search starting May 7, 2026."
  - **June 2026:** "Removed documentation for the FAQ rich result feature." The old faqpage URL now 301-redirects to the updates log.

  ([Google: documentation updates log](https://developers.google.com/search/updates))
- [Official] HowTo rich results were removed from mobile in August 2023 and from desktop on 2023-09-13, and HowTo is "now deprecated". ([Google Search Central Blog, 2023-08-08 with 2023-09-14 update](https://developers.google.com/search/blog/2023/08/howto-faq-changes))
- [Official] Article / BlogPosting:
  - There are no required properties.
  - Recommended: headline, image, datePublished and dateModified with time zone, and author.
  - Each author goes in a separate object with `@type` Person and a `url` or `sameAs`.
  - Every author shown on the page goes in the markup.

  Page last updated 2026-09-08. ([Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article))
- [Official] BreadcrumbList: "This feature is available on desktop in all regions and languages." It was removed from mobile results on 2025-01-22 "because of how breadcrumbs get truncated on smaller screens". ([Google: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb); [Google: documentation updates log](https://developers.google.com/search/updates))
- [Official] LocalBusiness:
  - Required: `name` and `address`.
  - Recommended: `geo`, hours, `telephone`, `url` and others.
  - "Use the most specific LocalBusiness sub-type possible."
  - aggregateRating is "only recommended for sites that capture reviews about other local businesses". Self-serving reviews are not eligible.

  ([Google: Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business); [Google: Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet))
- [Official] schema.org defines RealEstateAgent as a subtype of LocalBusiness. ([schema.org: RealEstateAgent](https://schema.org/RealEstateAgent))
- [Official] Google has retired several other types: course info, estimated salary, learning video, special announcement and vehicle listing (2025), and practice problem and dataset in Search (Nov 2025). The stated reason: "ongoing efforts to simplify the search results page". ([Google: documentation updates log](https://developers.google.com/search/updates))

**Tables, lists and table of contents**
- [Official] Google Search Central has no page that says tables or lists help ranking. The only related guidance is the "Read more" deep-link rules (content visible, hash kept) and the headings advice above. ([Google: Control your snippets](https://developers.google.com/search/docs/appearance/snippet); [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide))

### Inferences
- For a real estate guide page, the markup worth keeping is:
  - `Article` or `BlogPosting` with a Person author, url or sameAs, and dates
  - `BreadcrumbList` (it shows on desktop only, but it is cheap)
  - `RealEstateAgent` for the business, on the home or contact page, without self-reviews
  - a `primaryImageOfPage` or `og:image` that is a real photo, not the logo
- FAQPage markup gives no rich result anywhere as of 2026-05-07. A visible Q&A section can still serve readers and answer engines (see question 3). The JSON-LD alone earns nothing on Google.
- A guide page with an embedded video will not get video rich results, because it is not a watch page. Embed a video only for readers.
- Google says accordions are fine for indexing, and the rater guidelines count tabbed sections as main content. But "Read more" deep links need content visible without a click, and Microsoft says Copilot may skip hidden content. Keep key answers visible.
- Core Web Vitals work is mainly a tie-breaker. A slow page with the best answer can still rank. "Good" at the 75th percentile on mobile is the bar. A perfect Lighthouse score is not.
- Google's own commodity example is a homebuyer tips list. That is a direct warning for a real estate site. First-hand local facts (recorded sales, specific deals, local rules) are what Google says to add.

### Gaps
- Google publishes no weight or effect size for Core Web Vitals in ranking.
- Google publishes no rule for when tables or lists are chosen for featured snippets or AI Overviews.
- I did not read the Search Quality Rater Guidelines PDF directly. The October 2026 helpful-content page now includes its main-content criteria. The PDF may hold more on page layout and ads.
- No Google statement on Place or GeoCoordinates markup on article pages, beyond the LocalBusiness doc.

## 2. web.dev performance: images, fonts, iframes and map embeds

### Takeaway
Most LCP time is spent in two places: server response (TTFB) and the download of the LCP resource. So the hero image must be in the HTML, not lazy-loaded, sized with srcset, given `fetchpriority="high"`, and served as AVIF or WebP with a fallback. Images below the fold and iframes should use `loading="lazy"`. A map that readers rarely use should be a static image or a click-to-load facade. I found no published measurement of a Google Maps iframe's cost on phones.

### Cited Findings
- [Official] LCP has four parts, with typical shares for a well-optimized page:
  - TTFB about 40%
  - resource load delay under 10%
  - resource load duration about 40%
  - element render delay under 10%

  The LCP resource "should be discoverable from the HTML source". If it is referenced only from CSS or JS, preload it with high fetch priority. Updated 2025-03-31. ([web.dev: Optimize LCP](https://web.dev/articles/optimize-lcp))
- [Official] `fetchpriority="high"` on the LCP image raises its priority. "Images start at 'Low' priority by default." In-viewport images are boosted only at layout time. ([web.dev: Fetch Priority](https://web.dev/articles/fetch-priority))
- [Official] "Don't lazy-load images that are likely to be in-viewport when the page loads." Use `loading="lazy"` with width and height for images below the fold. ([web.dev: Browser-level image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading), updated 2024-08-13)
- [Official/measured] HTTP Archive and CrUX data: the median page with lazy loading had a 75th percentile LCP of 3,546 ms, against 2,922 ms without it. That result is correlational. A WordPress A/B lab test then showed lazy loading delayed LCP on archive pages. A fix that skips above-the-fold images restored LCP while keeping the byte savings. ([web.dev: The performance effects of too much lazy loading](https://web.dev/articles/lcp-lazy-loading))
- [Official] Formats: "WebP and AVIF will generally provide better compression than older formats". Use them "along with a JPEG or PNG image as a fallback". For photos, use JPEG, lossy WebP or AVIF. ([web.dev: Choose the right image format](https://web.dev/articles/choose-the-right-image-format), updated 2024-08-13; [web.dev Learn Images: AVIF](https://web.dev/learn/images/avif))
- [Official] Responsive images: serve "3-5 different sizes of an image" with `srcset` and `sizes`. ([web.dev: Serve responsive images](https://web.dev/articles/serve-responsive-images))
- [Official] Fonts:
  - `font-display: optional` is the most "performant" choice: at most 100 ms block and "no font-swap related layout shifts".
  - `font-display: swap` shows text at once, but deliver the font early to avoid layout shift.
  - Use WOFF2, which "compresses 30% better than WOFF".
  - Self-hosting helps only with a CDN and HTTP/2.
  - Be cautious with font preload.

  Updated 2022-10-04. ([web.dev: Best practices for fonts](https://web.dev/articles/font-best-practices))
- [Official] Embeds: "Many popular embeds include over 100 KB of JavaScript, sometimes even going up to 2 MB." Embeds can block rendering, compete for bandwidth and cause layout shifts. First-party content should load first. ([web.dev: Best practices for embeds](https://web.dev/articles/embed-best-practices), updated 2021-10-05)
- [Official] Map embeds: add `loading="lazy"` to the Google Maps iframe. Better, replace it with a **facade**:
  - a static screenshot, converted to WebP, or a Maps Static API `<img>`, wrapped in a link to the full map
  - or click-to-load: preconnect on mouseover, load the iframe on click

  "Not every user browsing a restaurant page will click, expand, scroll, and navigate the map embed." ([web.dev: Best practices for embeds](https://web.dev/articles/embed-best-practices))
- [Official/measured] Chrome's research on lazy-loading offscreen iframes found "2-3% median data savings, 1-2% First Contentful Paint reductions at the median". Lazy-loading a YouTube embed saves about 500 KB on first load. ([web.dev: Iframe lazy loading](https://web.dev/articles/iframe-lazy-loading), updated 2024-09-23)
- [Official] Lighthouse flags third-party embeds that "can be deferred" with a facade. Its list comes from the third-party-web dataset. ([Chrome for Developers: Lazy load third-party resources with facades](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades))

### Inferences
- On a guide page, a neighborhood map is supporting content. A static image of our own map (licensed, per `rules/images.md`), linked to the live map, gives readers the picture at near-zero cost.
- A click-to-load video facade is fine for readers. Google's video doc says not to rely on clicks to load a video, so a facade may stop Google from seeing the video. On a non-watch page that costs nothing in Search.
- The hero image is the likely LCP element on a guide page. It must never carry `loading="lazy"`.

### Gaps
- **I found no primary-source measurement of a Google Maps iframe's cost (KB, main-thread time, INP or LCP effect) on phones.** web.dev gives only the general 100 KB to 2 MB range for embeds. A local test with Lighthouse or WebPageTest on our own page would close this.
- The web.dev font and embed articles are dated 2021 and 2022. Browser support has moved since then, but the advice has not been withdrawn.

## 3. How answer engines choose passages to quote

### Takeaway
Officially, Google says to do nothing special: AI features ground on its normal index, and there is no chunking requirement. Microsoft (Bing and Copilot) says the opposite in practice. Copilot "parses" pages into pieces, and clear headings, one- or two-sentence answers, Q&A blocks, lists, tables and self-contained sentences make a piece easier to "lift". Content hidden in tabs, walls of text, PDFs and text inside images make it harder. OpenAI and Perplexity publish only crawler rules: allow OAI-SearchBot and PerplexityBot. One academic paper (GEO, KDD 2024) found that adding cited sources, quotations and statistics raised visibility in generated answers by up to 40% in a lab setup. Industry studies say AI Overview citations mostly come from pages that already rank, and that ChatGPT cites fresher pages than Google does.

### Cited Findings

**Official statements**
- [Official, Microsoft] Krishna Madhavan, Principal Product Manager, Microsoft Bing, 2025-10-08, "Optimizing Your Content for Inclusion in AI Search Answers":
  - On selection: "Assistants like Copilot break content down, a process called parsing, into smaller, structured pieces that can be evaluated for authority and relevance. Those pieces are then assembled into answers, often drawing from multiple sources."
  - Titles, descriptions and H1: they are "important signals". The H1 "should match (or closely reflect) the page title".
  - Headings: H2 and H3 "act like chapter titles that define clear content slices". Use a question heading, not "Learn More".
  - Q&A: "Assistants can often lift these pairs word for word into AI-generated responses."
  - Lists and tables: "Bulleted lists, numbered steps, and comparison tables break complex details into clean, reusable segments." It also says to avoid overusing bullets.
  - Snippable content: "Concise answers: One- to two-sentence responses", "Strong headings", "Self-contained phrasing: Sentences that make sense even when pulled out of context."
  - Mistakes: "Avoid long walls of text"; "Don't hide important answers in tabs or expandable menus: AI systems may not render hidden content"; "Avoid relying on PDFs for core information"; "Avoid putting key information only in images".
  - Writing: "anchor claims in measurable facts"; avoid decorative symbols; "Be cautious with em dashes: Overuse can confuse sentence structure for machines."
  - Schema is recommended in general terms. Traditional SEO (crawlability, metadata, internal links, backlinks) "remain essential".

  ([Microsoft Advertising Blog, 2025-10-08](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers))
- [Official, Google] For contrast, Google says "There's no requirement to break your content into tiny pieces for AI ... Google systems are able to understand the nuance of multiple topics on a page and show the relevant piece to users." It also says people "appreciate it when web pages are organized by paragraphs and sections, along with headings". ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official, Google] AI features retrieve pages from the Search index through grounding (RAG) and fan-out queries. Passage ranking already scores sections of a page. ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Google: Ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide))
- [Official, OpenAI] "OAI-SearchBot is used to surface websites in search results in ChatGPT's search features. Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links." GPTBot (training) is a separate setting. OpenAI publishes no content-structure guidance on this page. ([OpenAI: Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots))
- [Official, Perplexity] "PerplexityBot is designed to surface and link websites in search results on Perplexity. It is not used to crawl content for AI foundation models." Perplexity-User handles user-triggered fetches and "generally ignores robots.txt rules." No content-structure guidance is published there. ([Perplexity: Perplexity crawlers](https://docs.perplexity.ai/guides/bots))

**Academic studies**
- [Study] Aggarwal et al., "GEO: Generative Engine Optimization", arXiv 2311.09735, KDD 2024. The setup:
  - GEO-bench: 10,000 queries
  - the top 5 Google results as sources
  - answers generated by GPT-3.5-turbo
  - 5 seeds

  Results:
  - "including citations, quotations from relevant sources, and statistics can significantly boost source visibility, with an increase of over 40%".
  - Fluency and easy-to-understand rewrites gave "15-30%".
  - Keyword stuffing did not perform well.
  - On Perplexity.ai, gains reached up to 37%.
  - Cite Sources raised visibility of the 5th-ranked source by 115.1%, while the top-ranked source fell 30.3% on average.
  - Effects vary by domain: Statistics Addition did best for "Law & Government" and "Opinion"; Quotation Addition for "People & Society", "Explanation" and "History".
  - Stated limitation: methods "may need to adapt over time as GEs evolve".

  ([arXiv 2311.09735](https://arxiv.org/abs/2311.09735); [HTML full text v3](https://arxiv.org/html/2311.09735v3))
- [Study] Chen et al., "Generative Engine Optimization: How to Dominate AI Search", arXiv 2509.08919, 2025-09-10, not peer reviewed. The abstract says AI search "exhibit[s] a systematic and overwhelming bias towards Earned media (third-party, authoritative sources) over Brand-owned and Social content". It says engines "differ significantly from each other in their domain diversity, freshness, cross-language stability, and sensitivity to phrasing". It advises engineering content "for machine scannability and justification" and overcoming "big brand bias" for niche players. ([arXiv 2509.08919](https://arxiv.org/abs/2509.08919))

**Industry studies (secondary evidence)**
- [Industry study] Ahrefs (Louise Linehan, 2025) looked at 1.9M citations from 1M AI Overviews, top 3 citations each:
  - 76.10% of cited pages rank in the Google top 10
  - 9.50% rank in positions 11 to 100
  - 14.40% are not in the top 100

  ([Ahrefs: 76% of AI Overview citations pull from the top 10](https://ahrefs.com/blog/search-rankings-ai-citations/))
- [Industry study, unverified] A later Ahrefs study (863K keywords, 4M AI Overview URLs) reportedly found only 38% of cited pages in the top 10. I saw it only through secondary coverage and did not find the primary page. It conflicts with the 76% figure, and the methods differ. ([DesignRush News summary](https://news.designrush.com/ai-overview-citations-drop-ahrefs); [Search Engine Journal](https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/))
- [Industry study] Ahrefs (Ryan Law, 2025) looked at 16.975M cited URLs:
  - Pages cited by AI assistants average 1,064 days old, against 1,432 for organic results ("25.7% fresher").
  - ChatGPT has the strongest freshness preference.
  - Google AI Overviews cite content about 16 days *older* than organic results.
  - ChatGPT and Perplexity in-text references seem ordered newest to oldest.
  - Caveat from Ahrefs: "Low-quality, irrelevant content that's updated every day will not have a magic positive effect."

  ([Ahrefs: AI assistants prefer to cite fresher content](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/))
- [Industry study] Muck Rack's "Generative Pulse" (December 2025) reports that about 94% of AI citations come from non-paid sources and that earned media accounts for 82%. I saw this only through search summaries and did not open the PDF. Muck Rack is a PR vendor. ([Muck Rack Generative Pulse 2025 PDF](https://media.muckrack.com/static/reports/2025/MuckRack-GenerativePulse2025-1.pdf))
- [Official, Google, contrary to freshness tricks] Google lists "changing the date of pages to make them seem fresh when the content has not substantially changed" as a sign of search-engine-first content. ([Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

### Inferences
- The structure Microsoft asks for is what a well-written guide has anyway:
  - a question as the H2
  - the answer in the first one or two sentences, self-contained (it names the place and the subject, with no "this" or "it" pointing back)
  - then the detail, a table for comparisons, and a cited source

  This does not conflict with Google's "don't chunk for AI". It means writing sections that stand alone, not splitting pages.
- Sourced numbers and cited statements are the one lever with experimental support (GEO). They also match Google's trust and accuracy criteria. For this site that means statistics from the fact ledger with a visible source link. It does not mean invented quotes. The repo rule still holds: never write a quote for Tim Nash.
- Being cited by Google AI Overviews mostly tracks normal ranking (76% from the top 10 in the 2025 Ahrefs data). Classic SEO is the main route there.
- Earned-media bias (Chen et al.) means a local brokerage's own pages compete poorly for generic questions. They do better on local, first-hand questions where few third-party sources exist. This matches Google's non-commodity advice.
- Freshness: update dates only when the content changes. `node build.js dates` already sets dates. ChatGPT may favor recently updated pages, but faked dates breach Google's guidance.
- Allow OAI-SearchBot, PerplexityBot and Bingbot in robots.txt. Leave the Search Console generative AI setting at "Include".

### Gaps
- OpenAI and Perplexity publish no guidance on page structure. I found only crawler docs. ChatGPT search is reported to use Bing's index (Microsoft cites a third-party blog for this). I found no OpenAI primary source confirming it.
- I found no peer-reviewed study that isolates the effect of question headings, tables or lists on citation rates in live engines. Microsoft's guidance is a vendor statement, not measured data.
- The 76% vs 38% conflict on AI Overview citations and top-10 rankings is unresolved. Only the 76% study was read at its primary source.
- I found no study specific to real estate content.

## 4. Accessibility where it overlaps with SEO: alt text, heading order and link text

### Takeaway
Alt text, descriptive link text and clear headings serve screen readers, Google and AI agents together. Google uses alt text and anchor text as signals, and it says agents read the accessibility tree. Heading *order* does not matter to Google ranking, but it matters to screen-reader users. WCAG treats both headings and link purpose as Level A or AA requirements, and the web still fails them widely.

### Cited Findings
- [Official, Google] Alt text "improves accessibility for people who can't see images" and is used by Google "along with computer vision algorithms and the contents of the page to understand the subject matter of the image". It acts as anchor text when an image is a link. ([Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images))
- [Official, Google] Good anchor text is "descriptive, reasonably concise, and relevant to the page that it's on and to the page it links to." Google only reliably crawls `<a href>` links. ([Google: Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable))
- [Official, Google] Heading order "doesn't matter" for Google Search, but semantic order is "fantastic for screen readers". ([Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide))
- [Official, Google] Browser agents may interpret "the accessibility tree", and semantic HTML "helps other types of users, such as screen readers". ([Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide))
- [Official, Microsoft] Microsoft says to provide alt text, or put critical details in HTML text, and not to put key information only in images. ([Microsoft Advertising Blog, 2025-10-08](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers))
- [Official, W3C] WCAG 2.2 SC 2.4.4 Link Purpose (In Context), Level A: "The purpose of each link can be determined from the link text alone or from the link text together with its" programmatically determined context. ([W3C: Understanding SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)) SC 2.4.6 Headings and Labels (Level AA) requires headings that describe topic or purpose. ([W3C: Understanding SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html))
- [Industry study] WebAIM Million 2026 (top 1M home pages, February 2026):
  - 95.9% had detected WCAG failures, up from 94.8% in 2025.
  - Low contrast text appeared on 83.9% of pages.
  - Missing alt text on 53.1%.
  - Empty links on 46.3%.
  - 15.2% had ambiguous link text such as "click here" or "more".
  - 18.1% had more than one `<h1>`.
  - There were 1.2M instances of skipped heading levels.

  ([WebAIM: The WebAIM Million 2026](https://webaim.org/projects/million/))

### Inferences
- One rule set serves all three audiences:
  - one H1 that matches the title
  - H2 and H3 in order, phrased as the reader's question
  - link text that names the destination ("Horry County property tax rates", not "here")
  - alt text that says what the photo shows and why it is on the page
  - no key fact only inside an image or a map
- Contrast and alt text are the two most common failures on the web. They are cheap to check in `tools/site-audit.js` or `tools/score.js`, if those tools do not already check them.

### Gaps
- I found no Google statement that WCAG conformance itself is a ranking signal. The overlap is through shared signals (alt text, anchor text, readable structure), not through accessibility scoring.
- WebAIM measures home pages only, not article pages.
