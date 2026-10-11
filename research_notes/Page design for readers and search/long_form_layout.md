# Layout and content design for long informational pages (1,000 to 2,500 words)

Researched 2026-10-11. Every source below was fetched and read unless the line says "secondary". Evidence grades used on each finding:

- **[T]** tested study with numbers (controlled test, or measured log or eyetracking data with a stated sample).
- **[Q]** qualitative usability or eyetracking observation (examples and patterns, no reported statistics).
- **[E]** expert guidance or style rule (no study reported on the page).
- **[V]** vendor or marketing test, reported second-hand. Treat as anecdote.

Note on house style: this repo bans em dashes, so sources follow each finding in parentheses instead of after a dash.

## 1. How people scan and read a long web page (F-pattern, layer-cake, spotted, commitment, bypassing, inverted pyramid, Morkes and Nielsen 1997)

### Takeaway
Most readers scan before they read, and they read a small share of the words: about 20% on an average 593-word page. Clear subheadings change how people scan. They move readers from the F-pattern, which misses most content, to the layer-cake pattern, which NN/g calls the most effective way to scan. Pages that were concise, scannable and objective together were 124% more usable in a controlled test.

### Cited Findings
- **[T] Morkes and Nielsen 1997, Study 3.** 51 experienced web users saw one of five versions of the same site, a promotional control and four rewrites, and were measured on task time, errors, memory, sitemap time and satisfaction. Usability gain over the control was 58% for concise text (about half the words), 47% for scannable text, 27% for objective text (no marketing language) and 124% for all three combined. In the combined version, task time fell from 359 s to 149 s and errors fell from 0.82 to 0.10 (p < .01). ([NN/g, Morkes and Nielsen, "Concise, SCANNABLE, and Objective"](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/))
- **[T] The "79% scan" figure.** It comes from Study 2 of the same paper: 15 of 19 participants (79%) always tried to scan unfamiliar text before reading it. It is a small sample. Quote it as "15 of 19 users in a 1997 study", not as a population figure. (same source)
- **[T] How little users read.** Nielsen's 2008 reanalysis of Weinreich et al., "Not Quite the Average" (ACM Transactions on the Web, 2008), covered 25 users whose browsers were logged in 2005, giving 45,237 page views after cleaning. Each extra 100 words added about 4.4 seconds to a visit. On an average 593-word page, users had time to read at most 28% of the words, and about 20% is more likely. Users read half of a page only when it had 111 words or fewer. Caveats: there was no eyetracking, so reading time is inferred; participants had above-average literacy; the formula holds only for pages of 30 to 1,250 words. ([NN/g, Nielsen 2008, "How Little Do Users Read?"](https://www.nngroup.com/articles/how-little-do-users-read/))
- **[Q] F-pattern.** Readers take in a horizontal line at the top, then a shorter line lower down, then scan down the left edge. The first lines and the first words of each line get the most fixations. It appears when three things are true: the text is unformatted, the user wants to be efficient, and the user is not committed to reading every word. NN/g says it is "bad for users and businesses" because content on the right and lower down is skipped. It was first reported in 2006, with heatmaps of 45 to 47 users per page, and it also appears on mobile. Arabic readers show it mirrored. Fixes: put the most important points in the first two paragraphs; use visually distinct headings that start with the information-carrying words; bold key phrases; use descriptive link text; use bullets and numbered lists; cut content. ([NN/g, Pernice 2017, "F-Shaped Pattern of Reading on the Web"](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/))
- **[Q] Four scanning patterns compared.** The source ranks them:
  - The **layer-cake** pattern (eyes fix on headings, then read the body under the heading that interests them) is "by far the most effective way in which users can scan pages". It depends on meaningful subheadings.
  - The **spotted** pattern (eyes jump to bold words, links, digits and capitalized words) works when key words are styled to stand out.
  - The **commitment** pattern (reading every word) "usually leads to the best comprehension", but even committed readers should get chunked content. Quote: "most users will read very little from a wall of text."
  - The **F-pattern** ranks lowest.

  ([NN/g, Pernice 2019, "Text Scanning Patterns: Eyetracking Evidence"](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/))
- **[Q, secondary] Bypassing.** When many list items start with the same words, readers skip those words and fixate further into the line. In FAQ lists, people skip "Why" and "How". I could not reach the NN/g primary page; this comes from a summary of NN/g's work. ([UX Planet summary of NN/g eyetracking patterns](https://uxplanet.org/people-dont-read-online-they-scan-this-is-how-to-write-for-them-80a75069c14e))
- **[E] Inverted pyramid.** Put the conclusion first, then supporting detail, then background. The benefits claimed: readers form a mental model early, can stop at any point and keep the main point, and are more likely to scroll after a strong start. The article presents no new study data and rests on NN/g's reading-behavior research. It recommends front-loading headings, paragraphs and sentences, and adding a summary or key-points list. ([NN/g, Schade 2018, "Inverted Pyramid: Writing for Comprehension"](https://www.nngroup.com/articles/inverted-pyramid/))

### Inferences
- For a 1,500 to 2,500-word guide, assume most visitors read about a fifth of it. The answer to the main question must sit in the first screen, and every section must be findable from its heading alone.
- Headings are the scanning layer. A heading that names the answer ("Flood insurance costs more east of US-17") serves a layer-cake reader. A label-style heading ("Insurance") does not.
- Start list items with different, meaningful words so bypassing readers do not skip the part that differs. In an FAQ, put the topic noun early in each question instead of "How do I...".
- The Morkes and Nielsen 27% gain for objective text means promotional language is a usability cost, not only a compliance risk.

### Gaps
- I could not fetch NN/g's primary write-up of the "bypassing" and "marking" patterns. The bypassing description above is secondary.
- The 2017 and 2019 F-pattern and layer-cake articles do not report full methods or sample sizes for every example. They are pattern observations, not controlled tests.

## 2. Mobile reading, page length, scrolling and "the fold"

### Takeaway
People scroll long pages, but attention falls off steeply. In 2018, 57% of viewing time was above the fold, and 74% was in the first two screens. Content just above the fold gets roughly twice the viewing of content just below it. Difficult text is harder to understand on a phone, so mobile pages need shorter sections, not hidden ones.

### Cited Findings
- **[T] Scrolling and attention, 2018.** 120 participants produced more than 130,000 fixations on a 1920×1080 screen. About 57% of viewing time was above the fold and 74% was in the first two screens. The second screen got about 17%. The share above the fold fell from 80% in 2010 to 57% in 2018, which the author ties to longer pages. In 2018, 81% of time was in the first three screens. The sharp drop at the fold persisted in both studies. Recommendations: keep high-priority content and major calls to action near the top, use consistent and distinct headers and bold text, and avoid "false floors". ([NN/g, Fessenden 2018, "Scrolling and Attention"](https://www.nngroup.com/articles/scrolling-and-attention/))
- **[T] The fold still matters.**
  - In an eyetracking set of 57,453 fixations, the 100 pixels just above the fold were viewed 102% more than the 100 pixels just below it.
  - In a Google study of display ads, viewability was 73% above the fold and 44% below.
  - NN/g's midpoint estimate of the difference is 84%. This is a range estimate, not a measured "84% more attention". Secondary sites misquote it.
  - Users scroll "when there is reason to". A false floor, such as a full-width band that looks like a page end, stops scrolling. A lone arrow is a weak fix. Signposts or anchor links at the top work better.

  ([NN/g, Schade 2015, "The Fold Manifesto"](https://www.nngroup.com/articles/page-fold-manifesto/))
- **[T] Mobile comprehension of difficult text.** Singh et al. (University of Alberta) gave 50 participants cloze tests on 10 privacy policies, read on a desktop-sized or an iPhone-sized screen. Scores were 39.18% on desktop and 18.93% on mobile, so mobile comprehension was 48% of the desktop level. 60% is the threshold for "easy to understand". The article's 2016 update says NN/g later found that readers understand short, simple text as well on mobile as on desktop, but slow down on difficult text. Recommendations: rewrite complex content to be shorter and move secondary detail to subsidiary pages. ([NN/g, Nielsen 2011, "Mobile Content Is Twice as Difficult"](https://www.nngroup.com/articles/mobile-content-is-twice-as-difficult-2011/))
- **[Q] Long-form study on laptop and mobile.** NN/g usability-tested content over 1,000 words on laptops and phones. It recommends editing before formatting (remove non-essential content, condense, simplify), then a table of contents, chunks, progressive disclosure and in-page links. Decorative images "lengthen pages, especially on mobile". ([NN/g, Wang and Chan 2023, "5 Formatting Techniques for Long-Form Content"](https://www.nngroup.com/articles/formatting-long-form-content/))

### Inferences
- A 2,500-word page is several screens on desktop and 15 or more on a phone. Treat the first screen as the page for most visitors. It needs the direct answer, the "who this is for" line, and a visible start of the table of contents.
- Avoid full-width colored bands, large hero images or ad-like boxes right at the fold on mobile. They act as false floors.
- Hard material (tax, insurance, flood zones, HOA rules) costs more effort on a phone. Use short sentences, one idea per paragraph, and tables for comparisons, rather than long prose.

### Gaps
- I did not find a public NN/g page with the methods and numbers of the 2016 mobile comprehension study. Only the summary sentence in the 2011 article's update was available.
- No primary study fixes an "ideal" word count for a guide. NN/g says to test page length with users.

## 3. Summaries, key-facts boxes, tables of contents, headings, chunking, lists, tables and bold text

### Takeaway
Put a short, labeled summary at the top. Follow it with a visible "On this page" list of links whose labels match the section headings exactly. Then write short sections under descriptive, front-loaded headings, with bullets for parallel items and bold used sparingly. The evidence for each element is qualitative usability testing plus expert guidance. It is consistent across NN/g and GOV.UK.

### Cited Findings
- **[Q] Summaries.** In NN/g's long-form study, summaries let readers judge relevance quickly:
  - Top placement works best for deciding whether the page is relevant.
  - Mid-page summaries help tired readers.
  - End summaries are rarely found.
  - Use a descriptive label such as "Key Takeaways", a distinct visual treatment, and keep summaries concise.

  ([NN/g, Wang and Chan 2023](https://www.nngroup.com/articles/formatting-long-form-content/))
- **[Q] Callouts.** Callouts (a stat, a definition, an example) are more likely to be noticed than the same content in body text. (same source)
- **[Q] Bold.** Use bold sparingly: highlighted text should be no more than 30% of the article. Reserve it for the most important points, not for tone. When bullets run long, bold the lead words. (same source)
- **[Q] Table of contents.**
  - Placement and labels: put it near the top of the main body, where it is "the safe choice" and works on mobile. Label it "On this page" or "In this article". Make link labels identical to the section headings. List every section, including those above the fold. Leave out external links.
  - Link style and stickiness: links must look clickable (colored and underlined). In testing, users ignored a table of contents with uncolored links. A table of contents in the main body should not be sticky, because sticky versions get confused with site navigation. On mobile, "many users failed to notice the sticky table of contents".
  - Navigation: add back-to-top links on long pages that have a non-sticky table of contents. Smooth-scroll to the section.
  - Benefits named: an overview, direct access, better discovery of content lower on the page, shareable section URLs, and possible sitelinks in search results.

  ([NN/g, Wang and Brown 2023, "Table of Contents: The Ultimate Design Guide"](https://www.nngroup.com/articles/table-of-contents/))
- **[Q] Headings.** Keep headings short, put the strong keywords first (eyetracking shows readers focus on the first few words of list items and headings), and make them descriptive, not clever. Headings show up out of context in search results and feeds, so they must make sense alone. Avoid hype and idioms, which reduce credibility. ([NN/g, Loranger 2015, "Headings Are Pick-Up Lines"](https://www.nngroup.com/articles/headings-pickup-lines/))
- **[Q] Chunking and lists.** Chunk content into sections and bulleted lists, use meaningful subheadings, and style key words. "Most users will read very little from a wall of text." ([NN/g, Pernice 2019](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)) Use bullets and numbered lists for items and processes, and group related content visually. ([NN/g, Pernice 2017](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/))
- **[E] Sentence and paragraph length.** GOV.UK: "Try to split up sentences that are over 25 words long." "Paragraphs should have no more than 5 sentences each." ([GOV.UK, "Use clear language"](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/))

### Inferences
- Recommended order for the top of a guide:
  1. The H1.
  2. A two-to-four-sentence direct answer, or a "Key facts" box, labeled.
  3. An "On this page" list of links, non-sticky, in the body.
  4. The first section.
- Keep the table of contents labels and the H2 text identical. A scorer can check this mechanically.
- Use a table, not prose, when the reader compares the same attributes across options (towns, flood zones, fees). I found no primary study comparing tables with prose (see Gaps). This rests on the general chunking and scannability evidence.
- If bold makes up more than about 30% of a section, the bold stops working. A scorer could flag heavy bold density.

### Gaps
- I found no primary, public study that measures tables against prose for comprehension on web pages.
- I found no study that sets an ideal subheading frequency, such as words per H2. Common advice of "every 200 to 300 words" is expert convention; I found no tested source for it.
- The research-based HHS guidelines (usability.gov) rate the evidence behind each guideline, but the page I tried did not load. It is worth a manual check.

## 4. Images, captions, illustrations and maps next to text

### Takeaway
Readers look at images that carry information and ignore decorative ones. Photos of real staff draw strong attention. Stock photos are treated as filler. Captions are well read in news eyetracking studies, but that evidence comes from news layouts and is older.

### Cited Findings
- **[Q] Photos as content.** In a 2010 eyetracking study, users ignored large decorative "feel-good" images and stock photos ("pure filler") and studied images that carried information. On a staff page, users spent about 10% more time on the real portrait photos than on the biographies, even though the bios took up 316% more space. Advice: use real photos of staff and authors, not stock models, and remove images that do not help the task. ([NN/g, Nielsen 2010, "Photos as Web Content"](https://www.nngroup.com/articles/photos-as-web-content/))
- **[Q] Decorative images on long pages.** Informational visuals (infographics, product photos) aid comprehension. Decorative images are skipped and make the page longer, especially on mobile. ([NN/g, Wang and Chan 2023](https://www.nngroup.com/articles/formatting-long-form-content/))
- **[Q] Big images look like ads.** On mobile, large images or graphics that stand out are mistaken for ads and skipped ("faux ads"). Text set inside an image is also an ad-like trait. ([NN/g, Pernice 2018, "Banner Blindness Revisited"](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/))
- **[T, secondary] Captions.**
  - The Stanford-Poynter online news eyetracking study found readers looked at text first: headlines, briefs and cutlines (captions). Articles and briefs were viewed 92% and 82% of the time, against 64% for photos and 22% for graphics.
  - The Poynter EyeTrack07 study found captions were well read, and longer, better-developed captions drew more attention to the photo itself.

  These are summaries in trade press; I could not open the primary Poynter reports. ([Editor and Publisher, "Online news readers prefer text over graphics"](https://www.editorandpublisher.com/stories/online-news-readers-prefer-text-over-graphics,19526); [Canadian Journalism Foundation, Stead, "Just a few words: photo cutlines have enormous impact"](https://cjf-fjc.ca/globe-public-editor-just-few-words-photo-cutlines-have-enormous-impact/))
- **[E] Image-heavy design.** Large images capture attention but can make other elements harder to see. Give images less visual weight when they support secondary goals. The article reports no data on captions. ([NN/g, Whitenton 2014, "Image-Focused Design"](https://www.nngroup.com/articles/image-focused-design/))

### Inferences
- Each image on a guide should answer something: what the place looks like, where it is, how two options differ. A caption should state the fact the image shows, because captions are read when photos are looked at.
- A labeled map or diagram showing where something is counts as an informational image. A generic beach shot near the top does not, and it pushes the answer below the fold.
- Our own photo of the agent or author, with a name, is likely to draw attention, based on the real-people finding. This fits the site's image rules (only our own photos, no person as the subject of a stock image).

### Gaps
- I found no primary eyetracking study on maps embedded in articles.
- I found no recent (post-2015) primary data on caption reading on web pages. The "captions are read more than body text" claim often credited to print-era advertising research is not supported by any primary source I could reach. Do not repeat it as fact.
- I found no public test on icons with labels against icons alone inside article content.

## 5. Accordions, tabs, carousels, sticky elements, pop-ups and interstitials

### Takeaway
Do not hide the main content of a guide. Accordions fit FAQs and long content on small screens, but they cost clicks and printing and they hide answers. Carousels are mostly scrolled past, and only the first slide is reliably seen. Sticky headers should be small. Google says full-page interstitials hurt search performance.

### Cited Findings
- **[Q/E] Accordions.**
  - Costs: on desktop they "diminish content visibility and increase interaction cost". "Valuable content that is hidden under an accordion may be missed altogether." Printing becomes hard.
  - Good fits: FAQs, step-by-step flows, and "the content is long and the window size is small" (mobile).
  - Avoid them when users need most of the content or want uninterrupted reading.
  - Design rules: use a caret or plus icon, which work best in NN/g research. Allow several panels open at once. "Avoid hiding any crucial information within the collapsed panels."

  ([NN/g, Wang 2023, "Accordions on Desktop: When and How to Use"](https://www.nngroup.com/articles/accordions-on-desktop/))
- **[Q] Carousels.** "People often immediately scroll past these large images." Content in frames after the first may be missed. Users who see one frame may form the wrong impression. Animated ads were looked at 27% of the time in eyetracking. Do not auto-forward on mobile. Keep five frames or fewer, and put important carousel content elsewhere too. A static image may work better. ([NN/g, Pernice 2013, "Carousel Usability"](https://www.nngroup.com/articles/designing-effective-carousels/))
- **[E/Q] Sticky headers.** "Sticky headers inherently take up space on the screen that could be used for content." The cost is highest on mobile. Keep them small, opaque and high-contrast, with little motion. On mobile, a header that hides on scroll-down and returns on scroll-up suits reading. ([NN/g, Laubheimer 2021, "Sticky Headers: 5 Ways to Make Them Better"](https://www.nngroup.com/articles/sticky-headers/))
- **[E] Sticky tables of contents.** In the main body they should not be sticky. On mobile, users failed to notice some sticky versions. ([NN/g, Wang and Brown 2023](https://www.nngroup.com/articles/table-of-contents/))
- **[E, search-engine policy] Interstitials.** "Don't obscure the entire page with interstitials." "Don't redirect the user to a separate page for their consent or input." Use "banners that take up only a small fraction of the screen" instead. Legally required interstitials are exempt. Intrusive dialogs "make it hard for Google and other search engines to understand your content, which may lead to poor search performance". ([Google Search Central, "Avoid intrusive interstitials and dialogs"](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials))

### Inferences
- In a guide, keep the body of every H2 section open. Use an accordion only for the FAQ block, and only if the questions are written as real questions with the answer's key words up front. Even there, open text is safer for search snippets and printing.
- No carousels in articles. Show three photos as three captioned images.
- No pop-up or full-screen lead form on article pages. A small inline form or a small banner is acceptable.

### Gaps
- I found no NN/g article on in-page tabs specific to long content pages. The accordion costs (hidden content, extra clicks) likely apply.
- Google's page does not say how much ranking weight interstitials carry.

## 6. Calls to action: placement, frequency and banner blindness

### Takeaway
Primary research on CTA placement inside articles is thin. The solid evidence is indirect. Attention is highest near the top. Anything that looks like an ad (boxed, colored, animated, text in an image, or near ads) is ignored, and users then avoid the whole area. Restraint with promotion is also a credibility guideline. Claims such as "CTA at the bottom converts 220% better" are vendor anecdotes.

### Cited Findings
- **[T] Banner blindness, 2018 revisit.** Eyetracking with 26 participants on desktop and mobile; first documented in 1997 and replicated in 2007.
  - What users ignored: the top banner and right rail, and also inline promotions inside content, such as "a blue rectangle placed between blocks of text".
  - What triggers it: elements that look unlike the surrounding page (a colored background, fancy formatting, text in an image, animation), and anything placed near ads.
  - The right rail got 1 of 132 content-area fixations (0.8%) in one example.
  - Advice: "Do not make content look like ads". Making something "stand out" often has the opposite effect.

  ([NN/g, Pernice 2018, "Banner Blindness Revisited"](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/))
- **[T] Top-of-page attention.** Keep major CTAs above the fold. ([NN/g, Fessenden 2018](https://www.nngroup.com/articles/scrolling-and-attention/))
- **[E] Restraint.** "Use restraint with any promotional content (e.g., ads, offers)." This is Stanford guideline 9. ([Stanford Guidelines for Web Credibility, Fogg 2002](https://credibility.stanford.edu/guidelines/index.html))
- **[T] Promotional language lowers usability.** Objective text without hype scored 27% better than promotional text, and satisfaction rose from 5.7 to 6.9. ([Morkes and Nielsen 1997](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/))
- **[V] Vendor claims about bottom placement.**
  - A MECLABS test reported by a WordPress vendor blog: a longer page with the CTA at the bottom converted 220% better than the control.
  - A MarketingSherpa test: moving the CTA below the fold raised conversion 20%.
  - The secondary sources also say "It's all about motivation", meaning a long, complex offer needs explanation before the ask.

  These are single tests with unpublished methods. ([WPMU DEV blog](https://wpmudev.com/blog/?p=163473); [MarketingSherpa blog](https://sherpablog.marketingsherpa.com/?p=25071))

### Inferences
- A pattern consistent with the evidence:
  - One plain-text line near the top that says what the reader can get from us (no box, no image text).
  - One contextual line inside the section where the need arises (for example after a flood-zone table, "We can pull the flood zone for a specific address").
  - One clear end-of-article CTA after the reader has the full answer.
- Style CTAs like content, with a heading, a sentence and a normal link or button. Do not style them as colored banners, which trigger banner blindness.
- Do not repeat the same boxed CTA several times. Repeated promotional blocks risk the "hot-potato" avoidance NN/g describes, and they break Stanford's restraint guideline.

### Gaps
- I found no peer-reviewed or NN/g study that measures the number or position of CTAs inside long informational articles. The above is inference from banner-blindness and attention data.
- The vendor tests above are not reproducible from the public write-ups.

## 7. Trust and credibility signals (Stanford/Fogg, NN/g, bylines, dates, sources, real people)

### Takeaway
People judge credibility first by how a site looks and how its information is organized. In the large 2002 Stanford study, "design look" came up in 46.1% of comments. Durable signals: a real organization and real people, visible expertise, easy ways to check sources and to make contact, signs the content was recently updated, restraint with promotion, and no errors, including typos and broken links.

### Cited Findings
- **[E, based on studies of 4,500+ people] Stanford Guidelines for Web Credibility, 2002.**
  1. Make it easy to verify the accuracy of the information.
  2. Show there is a real organization behind the site.
  3. Highlight expertise.
  4. Show that honest and trustworthy people stand behind it.
  5. Make it easy to contact you.
  6. Look professional.
  7. Be easy to use and useful.
  8. Update often, or at least show the content was reviewed recently.
  9. Use restraint with promotion.
  10. Avoid errors of all types.

  The page notes that one supporting study is a lab report that is "not peer reviewed". ([Stanford Persuasive Technology Lab, Fogg 2002](https://credibility.stanford.edu/guidelines/index.html))
- **[T] What people notice when judging credibility.** 2,684 people evaluated live sites. "Design look" appeared in 46.1% of comments, the most of any factor, followed by information structure and information focus. ([Consumer Reports/Consumer WebWatch summary, "How Do People Evaluate a Web Site's Credibility?", 2002](https://advocacy.consumerreports.org/research/how-do-people-evaluate-a-web-sites-credibility/)) The rates by site type, which I did not see on the primary page, were 54.6% for finance sites and 41.8% for health sites. ([Wikipedia, "Stanford Web Credibility Project"](https://en.wikipedia.org/wiki/Stanford_Web_Credibility_Project), secondary)
- **[Q] NN/g's four trust factors** (2016 study in Singapore, building on Nielsen's 1999 list):
  1. Design quality. Typos and broken links reduce credibility.
  2. Upfront disclosure of contact details and costs.
  3. Comprehensive, correct and current content. Show the process, not only the result, and the full range of services, not only high-end examples.
  4. Connection to the rest of the web. Third-party reviews are trusted more than testimonials on the company's own site.

  ([NN/g, Harley 2016, "Trustworthiness in Web Design: 4 Credibility Factors"](https://www.nngroup.com/articles/trustworthy-design/))
- **[Q] Real people.** Real staff photos drew more attention than the much larger bios. Stock photos were ignored. ([NN/g, Nielsen 2010](https://www.nngroup.com/articles/photos-as-web-content/))
- **[Q] Hype in headings.** Hype, idioms and slang in headings reduce credibility. ([NN/g, Loranger 2015](https://www.nngroup.com/articles/headings-pickup-lines/))

### Inferences
- Signals for a guide page that map onto these sources:
  - A named author with a real photo and a one-line credential.
  - A visible "Updated" date, set by the build, never typed.
  - A sources list with links.
  - Business contact details.
  - No typos or broken links.
  - Examples that cover ordinary buyers, not only high-end homes.
- Fogg's "make it easy to verify" supports inline source links next to the numbers they back, not only a list at the end.

### Gaps
- I found no controlled study that isolates the effect of a byline or an "updated on" date on trust in an article. These rest on Fogg's guidelines 3, 4 and 8, which are expert synthesis of the 2002-era studies.
- I could not open the full 2002 Fogg et al. report to get percentages for the other credibility factors.

## 8. White space, line length, readability and plain language

### Takeaway
Keep body lines to about 50 to 75 characters (WCAG 1.4.8 sets 80 as the limit). Keep sentences to about 25 words or fewer and paragraphs to five sentences or fewer. Plain English is preferred by 80% of readers, and more strongly by experts and on complex topics. Hard text is about twice as hard to understand on a phone.

### Cited Findings
- **[Q/E] Line length.** Use 50 to 75 characters per line, or 80 at most (WCAG 1.4.8). In Baymard's testing, long lines were "intimidating", some users backed out at once, and users tired on lines over 100 characters. Very short lines break reading rhythm. Implementation: CSS `max-width` of about `70ch`. ([Baymard Institute, Scott 2022, "Readability: The Optimal Line Length"](https://baymard.com/blog/line-length-readability))
- **[E] Sentence and paragraph length, plain English.** "Plain English is mandatory for all of GOV.UK." Split sentences over 25 words. Paragraphs should have no more than five sentences. "1 in 6 adults in England have very poor literacy skills" (Literacy Trust). "Research shows that people with higher levels of literacy prefer plain English." ([GOV.UK, "Use clear language"](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/))
- **[T] Plain English preference.** Trudeau (2012, Thomas M. Cooley Law School) found that, given a choice, 80% of people preferred sentences in clear English. The preference grew with the complexity of the issue, and with the reader's education and specialist knowledge. 97% preferred "among other things" to "inter alia". The post does not give the sample size. ([GDS blog, Morris 2014, "Clarity is king"](https://gds.blog.gov.uk/2014/02/17/guest-post-clarity-is-king-the-evidence-that-reveals-the-desperate-need-to-re-think-the-way-we-write/))
- **[T] Concise text.** Cutting word count by about half improved measured usability by 58% in Morkes and Nielsen's test. ([NN/g](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/))
- **[T] Mobile comprehension.** Difficult text was understood at 48% of the desktop level on a phone-sized screen. ([NN/g, Nielsen 2011](https://www.nngroup.com/articles/mobile-content-is-twice-as-difficult-2011/))
- **[Q] White space.** In NN/g's 2016 trust study, four of five participants chose the site with high-quality images and effective use of white space. The sample is tiny. ([NN/g, Harley 2016](https://www.nngroup.com/articles/trustworthy-design/))

### Inferences
- The site's current register (literal, short sentences) matches this evidence. A sentence-length check of 25 words or fewer and a paragraph check of five sentences or fewer are defensible, sourced thresholds for a scorer.
- Set the article column to about 65 to 70 characters on desktop.
- Plain language is not "dumbing down". The 80% preference rose with expertise, which matters for retirees and investors who know real estate.

### Gaps
- The widely quoted claim that "white space between paragraphs and in the margins increases comprehension by almost 20%" (often credited to Lin 2004 or Human Factors International) did not appear in any primary source I could reach. Do not cite it.
- I did not collect a primary study on readability formulas (Flesch-Kincaid and similar) as predictors of web comprehension. GOV.UK's reading-age guidance was not on the pages I could open.
- plainlanguage.gov and digital.gov were not fetched in this pass. Their guidance is federal expert guidance and should agree with GOV.UK.
