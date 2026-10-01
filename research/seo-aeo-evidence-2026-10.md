# SEO and AEO evidence, as of 2026-10-01

What the evidence says about pages that rank in Google and get cited by AI answer
engines (Google AI Overviews and AI Mode, ChatGPT search, Perplexity, Copilot,
Claude, Gemini). Every rule in `STANDARD.md` points back to a line here.

**Evidence labels**

- **[OFFICIAL]**: platform documentation.
- **[EXPERIMENT]**: a controlled or peer-reviewed study.
- **[STUDY-L]**: a large-sample correlational study.
- **[STUDY-S]**: a small-sample, vendor or survey study.
- **[SPEC]**: industry convention or speculation.

Two claims were re-opened by hand on 2026-10-01 because they change the rules:

- The Google AI optimization guide.
- The FAQ rich result removal.

Both are confirmed below.

## Google, official

### AI optimization guide, last updated 2026-07-10 [OFFICIAL, re-opened]

Source: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Verbatim:

- "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search." llms.txt does nothing for Google.
- "There's no requirement to break your content into tiny pieces for AI to better understand it."
- "A first-hand review provides a unique perspective based on personal experience, whereas a summary of existing content simply restates information already available elsewhere." This is the non-commodity content ask.
- "Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add."
- "There's no ideal page length, and in the end, make pages for your audience, not just for generative AI search."

### AI features page [OFFICIAL]

Source: https://developers.google.com/search/docs/appearance/ai-features

The requirements for AI Overviews and AI Mode are Search Essentials, nothing more:

- Indexable, crawlable pages.
- Helpful, people-first content.
- Important content in text.
- Good images and video.

AI traffic is reported in Search Console under "Web".

### Helpful content [OFFICIAL]

Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

- Asks for "original information, reporting, research, or analysis" and clear sourcing.
- Asks for bylines where a reader expects one.
- Warns against "changing the date of pages to make them seem fresh when the content has not substantially changed".
- Warns against writing to a word count.

### YMYL [OFFICIAL]

Source: Quality Rater Guidelines, Sept 2025.

Home buying, taxes, HOA law and financing are "Your Money or Your Life" topics. They are held to the highest quality standard.

### FAQ rich results are gone [OFFICIAL, re-opened]

Source: https://developers.google.com/search/docs/appearance/structured-data/faqpage

"This feature will no longer appear in Google Search starting May 7, 2026."

- FAQPage markup is still valid vocabulary.
- It produces no Google rich result.
- Microsoft still names FAQ markup as useful to Copilot.

Keep the visible FAQ for readers and Bing. Do not expect anything from Google for the schema.

### Images [OFFICIAL]

Source: https://developers.google.com/search/docs/appearance/google-images

- Set the preferred page image with og:image or primaryImageOfPage.
- "Avoid using a generic image (for example, your site logo)."
- Use descriptive alt text and filenames.
- Place images near the text they illustrate.

### Dates [OFFICIAL]

Source: https://developers.google.com/search/docs/appearance/publication-dates

- A visible "Updated" date.
- The Article datePublished and dateModified must agree with the visible date.
- No fake freshness.

### Titles and descriptions [OFFICIAL, plus SPEC]

Sources: https://developers.google.com/search/docs/appearance/title-link and https://developers.google.com/search/docs/appearance/snippet

- Google sets no character limit. 50 to 60 characters is convention [SPEC].
- Google may rewrite a title from the H1. Keep the H1 and the title aligned.

### Schema still producing rich results relevant here [OFFICIAL]

Article, Breadcrumb, Organization and LocalBusiness (RealEstateAgent), ProfilePage, Review snippet, Video, Image metadata, Event.

Schema does not lift AI citations: Ahrefs found no significant effect across 1,885 pages that added it [STUDY-L]. https://ahrefs.com/blog/schema-ai-citations/

## AI answer engines

### GEO paper: Aggarwal et al., KDD 2024 [EXPERIMENT]

Source: https://arxiv.org/abs/2311.09735

| Change to the page | Lift in visibility |
|---|---|
| Add quotations | +42.6% |
| Add statistics | +32.8% |
| Cite sources | +27.7% |
| Easier to understand | +13.8% |
| Keyword stuffing | -8.7% |

- On live Perplexity: quotations +20.7%, statistics +8.7%.
- Lower-ranked pages gained the most. That describes most of chapter3realty.com.

### Microsoft, Bing and Copilot, Oct 2025 [OFFICIAL]

Source: https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers

- The engine splits a page into sections and scores each one.
- Wants question-shaped H2s and H3s, concise sections, tables and FAQ.
- Avoid walls of text, and avoid content hidden in tabs or in images without alt text.

### Where on the page citations come from [STUDY-L]

Kevin Indig, 1.2M ChatGPT answers. Source: https://searchengineland.com/chatgpt-citations-content-study-469483

- 44.2% of citations come from the first 30% of the page.
- Cited passages use definitive language, question headings and many named entities.
- Cited passages read at a lower grade level.

### Answer capsules [STUDY-S]

Search Engine Land, 15 domains. Source: https://searchengineland.com/how-to-get-cited-by-chatgpt-the-content-traits-llms-quote-most-464868

- 72% of ChatGPT-cited posts had a 20 to 25 word answer directly under a question H2.
- 52% had original data.

### Freshness [STUDY-L]

Ahrefs, about 17M URLs. Source: https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content

AI-cited pages are 25.7% fresher than organic results.

### Fan-out [STUDY-L]

Ahrefs, 863k keywords. Source: https://ahrefs.com/blog/ai-overview-citations-top-10

- Only 37.9% of AI Overview citations rank in the top 10 for the query.
- Engines run related sub-queries and cite pages that answer those.
- Practical rule: answer the sub-questions, not only the head term.

### Length [STUDY-L]

Ahrefs, 174k pages. Source: https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/

- Word count vs AI Overview citation correlates at about 0.04, which is no relationship.
- 53% of cited pages are under 1,000 words.

### llms.txt [STUDY-L and STUDY-S]

- Google says it does not use it.
- Log studies show near-zero bot requests.
- No correlation with citations.
- Harmless, and near-zero value.

### Crawlers [OFFICIAL]

- ChatGPT search only shows sites that allow OAI-SearchBot. GPTBot (training) is separate. https://developers.openai.com/api/docs/bots
- Check robots.txt allows Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and ClaudeBot.

## Readability

### Nielsen Norman Group [EXPERIMENT]

Sources: https://www.nngroup.com/articles/how-users-read-on-the-web/ and https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/

- 79% of users scan; 16% read word by word.
- Usability rose by these amounts:

| Text change | Usability gain |
|---|---|
| Concise | +58% |
| Scannable | +47% |
| Objective | +27% |
| All three | +124% |

- Front-load headings and first words.
- The inverted pyramid suits the web.

### Plain language [OFFICIAL, US government]

- Average sentence under 20 words.
- Write in the second person ("you"), in active voice.
- Aim for grade 6 to 8 for the public.

## Local real estate

- **Google Business Profile** and local markup feed AI responses [OFFICIAL, AI guide]. The name, address and phone must match exactly across the site, Business Profile and schema.
- **Whitespark 2026** [STUDY-S, expert survey]. Source: https://whitespark.ca/local-search-ranking-factors/
  - Three of the top five AI-visibility factors are mentions: "best of" lists, news and blog mentions, mention volume.
  - "Mentions are the new link."
- **Off-site work.** The website's HANDOFF lists the gaps: Business Profile, reviews, Yelp, Foursquare and `sameAs`. That work lives outside page production but limits how far pages alone can go.

## SERP check, 2026-10-01

For five head terms, a research agent read the top results.

### Overall

- Chapter3 was not in the top results for any of the five.
- One related success:
  - For "myrtle beach short term rental vs long term rental", /invest/str-vs-ltr/ ranks about #3.
  - The search engine's AI summary lifted its first sentence verbatim: "Short-term rentals in Myrtle Beach gross two to three times more than a long-term lease but cost more to run and finance."
  - That page has a byline, a visible date, a comparison table and a short FAQ.
  - This is direct evidence that the answer-first format works for this site.

### Each query

**"moving to myrtle beach from new jersey"**

- Moving aggregators win.
- moveBuddha has three tables, question H2s and a named author.
- **Gap:** no local page does New Jersey vs South Carolina property-tax math or the 4 percent application.

**"myrtle beach short term rental rules"**

- Rules aggregators (strcityregs) win. They lead with a TL;DR, a tax table, and an "Official Sources" block with verified dates.
- **Gap:** competitors disagree on the total tax (10% vs 13%). A primary-sourced number wins.

**"condo special assessment south carolina"**

- **The weakest SERP of the five.**
- Results are national explainers and a 2019 North Carolina law-firm post.
- No page is Grand Strand-specific and statute-cited.
- **This is the best opening found.**

**"myrtle beach property taxes second home"**

- Local agents rank, with named bylines and worked 4% vs 6% examples.
- **Gap:** none uses a real table, most have no FAQ, several cite no sources, and openings are narrative, not answer-first.

**"is myrtle beach a good place to invest in rental property"**

- Agent blogs rank with no data, tables or citations.
- **Gap:** a sourced, dated data page wins here.

### Shape of the winners

- About 1,800 to 2,800 words.
- Question H2s and a TL;DR.
- A 2025 or 2026 date.
- An FAQ.
- A table where the topic is numeric.
- A named author.

### Main local competitor

Carolina Crafted Homes (Hereda Team): TL;DR, ordinance citations, a dated data table and an FAQ, but no author byline.
