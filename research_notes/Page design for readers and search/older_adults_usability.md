# Web and phone usability for older adults (55 to 75+) on long informational pages

Research date: 2026-10-11. Evidence strength tags used below:
- **[Tested]**: measured in a usability test, experiment or survey with a stated sample.
- **[Standard]**: a W3C normative requirement. Consensus rule, not an age-specific experiment.
- **[Expert]**: expert opinion or practitioner guidance, not directly tested on older adults.
- **[Mixed]**: studies disagree.

Note on the age band: almost all senior usability data uses 65+ (NN/g) or 50+ (AARP). Little data isolates 55 to 64. Treat 55 to 64 as close to the general adult population on most measures (see Pew below), and 70+ as the group that most needs the rules.

## 1. Nielsen Norman Group senior usability research

### Takeaway
NN/g's tests show adults 65+ succeed less often and work more slowly than younger adults: in 2013, 55.3% task success vs 74.5% for ages 21 to 55, and 43% slower. The main barriers named in the 2019 update are small type, small click targets, light-colored text, inflexible inputs and errors that are hard to notice. NN/g gives few pixel numbers; its one type number is "at least 12-point" (2013).

### Cited Findings
- **[Tested]** 2013 round: 31 users 65+ on 29 sites, plus a control group of 20 users aged 21 to 55. 2002 round: 44 users 65+ on 17 sites. Oldest participant 89. — [Nielsen, "Usability for Senior Citizens: Improved, But Still Lacking" (2013)](https://www.nngroup.com/articles/usability-seniors-improvements/)
- **[Tested]** Results averaged across tasks — [same source](https://www.nngroup.com/articles/usability-seniors-improvements/):

  | Metric | Seniors 2002 | Seniors 2013 | Ages 21 to 55 (2013) |
  |---|---|---|---|
  | Success rate | 52.5% | 55.3% | 74.5% |
  | Time on task | 9:58 | 7:49 | 5:28 |
  | Errors per task | 4.6 | 2.4 | 1.1 |
  | Satisfaction (1 to 7) | 3.7 | 4.1 | 4.6 |

- **[Tested]** Seniors were 43% slower than users aged 21 to 55 (2013). — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/)
- **[Tested]** Seniors used search engines 51% more than younger users. Unforgiving search and forms (typos, hyphens and parentheses in phone and card numbers) caused failures. — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/)
- **[Expert, drawn from tests]** Recommendations in the 2013 article: at least 12-point type as the default on sites aimed at seniors, and all sites should let users enlarge text; large link text; white space between links because tightly grouped links cause wrong clicks; reasonably large buttons; avoid pull-down menus, hierarchical "walking" menus and other moving elements; clearly different colors for visited and unvisited links; error messages that name the error, explain it and are placed where they are seen; avoid drastic redesigns and keep key task steps consistent. — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/)
- **[Tested, qualitative]** 2019 update: 123 participants 65+ across all rounds (2001, 2013, 2018 to 2019). The 2018 to 2019 round tested 12 websites and 6 apps with 18 older adults, plus focus groups (20) and contextual inquiry (10), mostly recruiting people 70+. Barriers named: small type, small clickable elements, lightly colored interface text, inflexible inputs (a date and time picker), more mistakes, and error messages that were hard to notice or understand. Users said they felt online content was not made with them in mind. No success rates or pixel sizes are published in the free article. — [Kane, "Usability for Older Adults: Challenges and Changes" (2019)](https://www.nngroup.com/articles/usability-for-senior-citizens/)
- **[Tested]** NN/g's middle-aged research found that ability to use websites declines about 0.8% per year between ages 25 and 60. — [Kane 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/)
- **[Expert]** NN/g's 2019 video summary says there are three major shifts in how users 65+ use computers compared with 20 years earlier, and tells designers to design for today's older users, not the stereotype. The three shifts were not retrievable as text. — [NN/g video, "Changes in How Older Adults Use Computers"](https://www.nngroup.com/videos/changes-seniors-computers/)
- **[Tested, all ages]** Auto-rotating carousels: in a UK test, a user missed a £100 offer that was the largest element on the page because the panel rotated every 5 seconds and the offer was visible about 20% of the time. She said "I didn't have time to read it. It keeps flashing too quickly." NN/g recommends that carousels and accordions change panels only when the user asks. The article names users with motor-skill problems and slow readers, not older users. — [Nielsen, "Auto-Forwarding Carousels and Accordions Annoy Users" (2013)](https://www.nngroup.com/articles/auto-forwarding/)
- **[Tested, all ages]** Hidden navigation (hamburger): 179 participants on 6 live sites. Navigation was used in 27% of desktop cases when hidden vs 48% visible and 50% combo; on mobile, 57% hidden vs 86% combo. Content discoverability dropped more than 20% with hidden navigation. Desktop tasks were at least 39% slower with hidden navigation; mobile tasks 15% slower than combo. Self-rated difficulty was 21% higher than visible navigation. Results are not broken out by age. — [Pernice and Budiu, "Hamburger Menus and Hidden Navigation Hurt UX Metrics" (2016)](https://www.nngroup.com/articles/hamburger-menus/)
- **[Expert]** Low-contrast light gray text reduces legibility, causes eye strain, lowers trust, reduces discoverability when scanning, is worse on phones in sunlight, and can make options look disabled. NN/g names presbyopia, macular degeneration, glaucoma and cataracts as age-related causes. No measured data in the article. — [Sherwin, "Low-Contrast Text Is Not the Answer" (2015)](https://www.nngroup.com/articles/low-contrast/)

### Inferences
- 12 point equals 16 CSS px (1 pt = 1.333 px at the CSS reference of 96 px per inch). NN/g's 2013 minimum is therefore 16 px. That is a floor set in the desktop era, not an optimum.
- For a real estate page, the 43% slower figure means a reader 65+ needs more time per section. Anything that moves on a timer works against them.
- The search and form findings apply to any contact form or search box on the site: accept phone numbers with or without dashes and parentheses.

### Gaps
- The paid NN/g report ("Senior Citizens (Ages 65 and older) on the Web", described as 87 or more guidelines) was not read. Its specific pixel numbers for type and targets could not be confirmed.
- No NN/g success-rate data from the 2018 to 2019 round was found in free articles.
- No NN/g study found that isolates ages 55 to 64.

## 2. W3C WAI and WCAG 2.2 criteria that matter most for older readers

### Takeaway
W3C says older users' needs (vision, dexterity, hearing, memory and attention) are mostly covered by WCAG at levels A and AA. The numbers that apply directly to a long article are: contrast 4.5:1 (AA) or 7:1 (AAA); text resizable to 200%; reflow at 320 CSS px wide; content still works with line height 1.5x and paragraph spacing 2x; target size at least 24 by 24 CSS px (AA) and 44 by 44 for important controls (AAA); lines no longer than 80 characters and not justified (AAA).

### Cited Findings
- **[Standard]** W3C lists four age-related changes: reduced contrast sensitivity, color perception changes and near-focus trouble; reduced dexterity and fine motor control, making small targets hard to click; hearing loss for high pitches and separating sounds; and reduced short-term memory, trouble concentrating and easy distraction. It concludes WCAG covers most of these needs. Page last updated 20 November 2025; based on the EU-funded WAI-AGE project and its literature review. — [W3C WAI, "Older Users and Web Accessibility"](https://www.w3.org/WAI/older-users/)
- **[Standard]** W3C's mapping of older users' needs to WCAG 2.0 criteria (reviewed 1 January 2018): vision → 1.4.4 Resize Text, 1.4.8 Visual Presentation, 1.4.3 and 1.4.6 Contrast, 1.4.1 Use of Color; mouse difficulty → 2.4.7 Focus Visible, 3.3.2 Labels, "larger text is easy to click"; cognition → 2.4.4 Link Purpose, 2.4.5 Multiple Ways, 2.4.8 Location, 2.4.2 Page Titled, 2.2.2 Pause Stop Hide, 2.2.4 Interruptions, 2.4.6 Headings and Labels, 2.4.10 Section Headings, 3.1.3 to 3.1.5 (unusual words, abbreviations, reading level), 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.2.1 On Focus and 3.2.5 Change on Request (pop-ups and new windows), 3.3.1 to 3.3.4 errors. It notes that many older people read whole pages and lack advanced browsing habits. — [W3C WAI, "Developing Websites for Older People: How WCAG 2.0 Applies"](https://www.w3.org/WAI/older-users/developing/)
- **[Standard]** WCAG 2.2 (W3C Recommendation, current edition dated 12 December 2024) — [WCAG 2.2](https://www.w3.org/TR/WCAG22/):
  - 1.4.3 Contrast (Minimum), AA: text at least 4.5:1; large text at least 3:1.
  - 1.4.6 Contrast (Enhanced), AAA: text at least 7:1; large text at least 4.5:1.
  - 1.4.4 Resize Text, AA: text can be resized up to 200% without loss of content or function.
  - 1.4.10 Reflow, AA: content works at a width equal to 320 CSS px without two-way scrolling.
  - 1.4.11 Non-text Contrast, AA: interface parts and meaningful graphics at least 3:1.
  - 1.4.12 Text Spacing, AA: no loss of content when users set line height to 1.5x font size, paragraph spacing to 2x, letter spacing to 0.12x, word spacing to 0.16x.
  - 1.4.13 Content on Hover or Focus, AA: hover content must be dismissible without moving the pointer, and must stay while the pointer moves onto it.
  - 2.2.2 Pause, Stop, Hide, A: anything that moves, blinks or scrolls on its own for more than 5 seconds alongside other content needs a pause, stop or hide control.
  - 2.4.6 Headings and Labels, AA: headings and labels describe topic or purpose.
  - 2.4.11 Focus Not Obscured (Minimum), AA: a focused item must not be fully hidden by author content (this is the rule sticky headers and cookie bars break).
- **[Standard]** 2.5.8 Target Size (Minimum), AA: pointer targets at least 24 by 24 CSS px, with exceptions for spacing (a 24 px circle around each small target does not overlap another), an equivalent control, links inside a sentence, browser-controlled targets, and essential presentation. Links inside paragraphs do not need to meet 24 by 24. The Understanding page names hand tremor among the conditions it helps and says to aim for the stricter 2.5.5 for important controls. — [W3C, Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- **[Standard]** 2.5.5 Target Size (Enhanced), AAA: 44 by 44 CSS px. (Normative text was truncated in the fetch; the 44 px figure is the well-known value of this criterion and appears in the WCAG 2.2 text.) — [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- **[Standard]** 1.4.8 Visual Presentation, AAA: a way to get text no wider than 80 characters, not justified, line spacing at least 1.5 within paragraphs, paragraph spacing at least 1.5 times the line spacing, and 200% resize without horizontal scrolling. The rationale cites people with cognitive disabilities and low vision; justified text creates "rivers of white" that make reading hard. It does not cite an older-adult study. — [W3C, Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)

### Inferences
- WCAG thresholds are consensus minimums for disability access. For an audience of 55 to 75+, meeting AA is the floor. Meeting AAA contrast (7:1) for body text costs nothing on a white page with near-black text and covers age-related contrast loss.
- A sticky header, a chat bubble or a cookie bar that covers focused links can fail 2.4.11. On a phone, a sticky header also takes reading height.

### Gaps
- W3C has not published an older-user mapping for WCAG 2.2 specifically; the mapping found is for WCAG 2.0 (reviewed 2018).
- W3C gives no body font size in px. WCAG has no minimum font size requirement.

## 3. AARP research on adults 50+ and technology

### Takeaway
90% of adults 50+ own a smartphone (2025), up from 55% in 2016, and 3 in 5 say technology is not designed with their age in mind. AARP's public pages give ownership and attitudes, not design rules with numbers.

### Cited Findings
- **[Tested, survey]** Smartphone ownership among adults 50+ rose from 55% in 2016 to 90% in 2025. Texting is the leading communication method. Nine in 10 use social media; eight in 10 stream video weekly. Sample: 3,838 U.S. adults, online, English and Spanish, fielded September 9 to October 6, 2025, AARP Research. — [AARP, "2026 Tech Trends and Adults 50-Plus"](https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/)
- **[Tested, survey]** "Three in 5 adults 50-plus say technology is not designed with their age in mind." The report also says "For many, tech design keeps it out of reach" and "Others lack confidence in their digital skills." — [AARP 2026 Tech Trends](https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/)
- **[Tested, survey]** Adults 70 to 79 own tablets at higher rates than adults 50 to 69. — [AARP 2026 Tech Trends](https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/)
- Secondary reports give 98% daily use among smartphone owners 50+ for the 2025 report; not confirmed on the AARP page itself. — [Senior Housing News summary (2025)](https://seniorhousingnews.com/2025/12/19/older-adults-embracing-tech-using-ai-new-aarp-report-shows/)

### Inferences
- A page for 55 to 75 readers will be read on phones by most of them, and on tablets more often by readers in their 70s. Test on a phone and a tablet, not only desktop.
- Readers who arrive from a text message or social link land mid-site on a phone. The page must make sense without the home page.

### Gaps
- No AARP public design guideline with numbers (type size, target size) was found in this pass. AARP's older "Designing Web Sites for Older Adults" heuristics (Chisnell and Redish, mid-2000s) were not retrieved and are outside the 2015 to 2026 window.
- No AARP data found on reading articles or browsing on phones by age band (50 to 59, 60 to 69, 70+).

## 4. Pew Research on smartphone use by age

### Takeaway
In 2025, 90% of adults 50 to 64 and 78% of adults 65+ own a smartphone, and 17% of adults 65+ are smartphone-only internet users (no home broadband). For those readers, the phone is the only screen.

### Cited Findings
- **[Tested, survey]** Smartphone ownership, 2025: 18 to 29, 97%; 30 to 49, 96%; 50 to 64, 90%; 65+, 78%. Cellphone but not smartphone: 50 to 64, 7%; 65+, 16%. Survey of 5,022 U.S. adults, Feb. 5 to June 18, 2025, by SSRS for Pew's National Public Opinion Reference Survey. — [Pew Research Center, Mobile Fact Sheet](https://www.pewresearch.org/internet/fact-sheet/mobile/)
- **[Tested, survey]** Smartphone-only internet users (smartphone, no home broadband), 2025: 50 to 64, 15%; 65+, 17% (16% in 2023, 17% in 2024). — [Pew Mobile Fact Sheet](https://www.pewresearch.org/internet/fact-sheet/mobile/)
- **[Tested]** NN/g cites Pew: 73% of people over 65 were online in 2019, and smartphone ownership among people over 65 quadrupled from 2011 to 2016. — [Kane 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/)

### Inferences
- About 1 in 6 readers 65+ reads only on a phone. A long page must work fully at phone width.

### Gaps
- No Pew figure was found for the share of 65+ who read articles or news on a phone versus a computer. That question was not answered.

## 5. Typography, layout and interaction patterns: what the evidence says

### Takeaway
Bigger body text helps, with a ceiling: an eye-tracking study found 18 pt and larger improved reading and comprehension (but its sample was 14 to 54), and a 2022 review found older adults prefer larger sizes but readability drops past a critical size. Dark text on a light background tested better for both younger and older adults. Serif vs sans makes little difference to speed. Line length and line height rules for older readers rest on standards and expert advice more than on age-specific tests. Hidden navigation, auto-moving content and small swipe targets have test evidence against them, mostly from all-age studies.

### Cited Findings

**Body font size**
- **[Tested, not older adults]** Rello, Pielot and Marcos, CHI 2016, "Make It Big!": 104 participants, eye tracking, Wikipedia articles, six font sizes 10 to 26 pt and four line spacings. Readability (fixation duration) improved with size; comprehension was higher at 18 and 26 pt. Authors recommend 18 pt or larger for text-heavy sites with default line spacing. Line spacing effects were marginal; the extremes hurt. Participants were aged 14 to 54, so this is not an older-adult study. — [BYU Editing Research summary](https://editingresearch.byu.edu/?p=10398); [DBLP record (CHI 2016, pp. 3637 to 3648)](https://dblp.uni-trier.de/pid/60/4144.html)
- **[Tested, review]** Hou, Anicetus and He (2022), systematic review of 12 studies on font size for older adults on mobile devices (Frontiers in Psychology 13:931646). Older adults preferred larger sizes, but "bigger may not always mean better": there is a critical size below which reading speed falls sharply (about 0.15 to 0.3 degrees of visual angle) and very large print above about 1 degree also slows reading. Study-level recommendations ranged from 8 pt (feature phone) to 22 pt (tablet). Chatrangsan and Petrie (2019) recommended 18 pt on iPad; Hou et al. (2020) gave 14 px for search, 17 px for intensive reading and 17 to 20 px for news and long text on an iPhone 6 (Chinese text). The authors flag inconsistent methods across studies. — [Hou et al. 2022, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9376262/)
- **[Expert, from tests]** NN/g: at least 12 point (16 px) default for senior-targeted sites, and let users enlarge text. — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/)

**Line height and spacing**
- **[Tested]** Wang et al. (2009, mean age 66, Chinese text): more line and character spacing improved reading for older adults. Hou et al. (2020): usability improved as line spacing rose; word spacing increases hurt. — [Hou et al. 2022 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9376262/)
- **[Standard]** Content must survive 1.5x line height (1.4.12, AA); 1.4.8 (AAA) asks for at least 1.5 line spacing. — [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- **[Tested, not older adults]** Rello et al. 2016: line spacing effects were marginal; 0.8x and 1.8x of default hurt. — [BYU summary](https://editingresearch.byu.edu/?p=10398)

**Line length**
- **[Standard]** No more than 80 characters per line (1.4.8, AAA); no justified text. — [W3C Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- No older-adult study on line length was found in this pass. Treat the 80-character cap as a standard, not a tested optimum for this age group.

**Serif vs sans serif**
- **[Tested, Mixed]** Chatrangsan and Petrie (2019, older adults, iPad): reading time depended on size, not typeface; comprehension was better with larger and serif type; UK participants found sans serif easier and less tiring, Thai participants found serif easier. — [Hou et al. 2022 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9376262/)

**Light vs dark text (polarity) and contrast**
- **[Tested]** Piepenbrock et al. (2013, Ergonomics): younger (18 to 33) and older (60 to 85) adults both did better on acuity and proofreading with dark text on a light background; the advantage was smaller for older adults on the acuity task. A companion study found the light-background advantage grows as text gets smaller. NN/g recommends light mode as the default and offering dark mode as an option. — [Budiu, "Dark Mode vs. Light Mode" (NN/g, 2020)](https://www.nngroup.com/articles/dark-mode/)
- **[Mixed]** A 2024 review (GerontoVis) says older vision-science work tended to favor light-on-dark for older adults; a 2024 visualization study of 134 people (66 aged 60+) found the better polarity varied by person in both age groups. Both concern data visualization more than text. — [GerontoVis, arXiv 2403.13173](https://arxiv.org/pdf/2403.13173); [While and Sarvghad, arXiv 2409.10841](https://www.arxiv.org/pdf/2409.10841)
- **[Tested]** Legge et al. (1985): 7 readers with cloudy ocular media (as with cataract) read faster with light text on dark. — [NN/g dark mode article](https://www.nngroup.com/articles/dark-mode/)
- **[Tested]** Fujikake et al. (2007): readability higher on higher-contrast displays. — [Hou et al. 2022 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9376262/)
- **[Tested, qualitative]** Light-colored interface text was a named barrier in NN/g's 2018 to 2019 senior tests. — [Kane 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/)

**Tap targets**
- **[Tested, all ages]** NN/g: touch targets at least 1 cm by 1 cm physical size, from Parhi, Karlson and Bederson (2006); MIT Touch Lab measured average fingertips at 1.6 to 2 cm wide. About 2 mm between targets is the often-cited minimum gap. Older users with declining dexterity benefit from larger, more forgiving controls. — [Harley, "Touch Targets on Touchscreens" (NN/g, 2019)](https://www.nngroup.com/articles/touch-target-size/)
- **[Tested, older adults]** A smartphone gesture study reports that swipe performance by older users was best for targets larger than 17.5 mm square; another found older adults could learn tap and swipe after a tutorial. Retrieved via search snippets only; full text not read. — [Usability Evaluation of Smartphone Gestures in Supporting Elderly Users (ResearchGate)](https://www.researchgate.net/publication/337188255_Usability_Evaluation_of_Smartphone_Gestures_in_Supporting_Elderly_Users)
- **[Standard]** 24 by 24 CSS px minimum (AA), 44 by 44 for enhanced (AAA). — [W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

**Hidden content, menus, carousels, hover, pop-ups**
- **[Tested, all ages]** Hidden navigation cut navigation use and discoverability by more than 20% and slowed tasks. — [NN/g hamburger study](https://www.nngroup.com/articles/hamburger-menus/)
- **[Tested, all ages]** Auto-rotating carousels hide content most of the time; change panels only on request. — [NN/g auto-forwarding](https://www.nngroup.com/articles/auto-forwarding/)
- **[Expert, from senior tests]** Avoid pull-down and walking menus and moving elements for seniors. — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/)
- **[Standard]** Hover content must be dismissible and stable (1.4.13); moving content over 5 seconds needs a pause (2.2.2); no context change on focus (3.2.1), which W3C ties to pop-ups and new windows for older users. — [WCAG 2.2](https://www.w3.org/TR/WCAG22/); [W3C older-user mapping](https://www.w3.org/WAI/older-users/developing/)
- **[Tested, review]** Common smartphone problems for older users include reduced accuracy, slower performance, hidden functions and complex menus; even tap, swipe, scroll and flip gestures were very difficult for some older adults. Snippet-level only. — [Older adults' use of mobile device: usability challenges (ResearchGate)](https://www.researchgate.net/publication/333588206_Older_adults%27_use_of_mobile_device_usability_challenges_while_navigating_various_interfaces)

### Inferences
- Body text of 18 to 20 px on desktop and at least 17 to 18 px on phones is supported by the combined evidence (Rello's 18 pt finding, Hou's 17 to 20 px for long reading, NN/g's 16 px floor). The exact optimum for 55 to 75 is not settled. Do not go above roughly 24 px for body, since the review reports a ceiling.
- Use near-black text on white or off-white. Do not use light gray for body text, captions or labels. Aim for 7:1 for body text.
- Line height about 1.5 for body text is the safe value; it meets 1.4.8 and sits within the tested range.
- Keep body column at or under about 70 to 80 characters on desktop.
- Typeface choice matters less than size and contrast. Pick one readable face and do not argue serif vs sans.
- On a long article: no carousels that auto-advance, no hover-only menus, no content that only appears on swipe. Accordions that hide key answers make content less findable (inferred from the hidden-navigation data, not tested on accordions for seniors).
- Pop-ups that cover the article on arrival and sticky elements that cover text work against WCAG 2.4.11 and 3.2.1. No older-adult test of interstitials was found, so this is standard plus expert inference.

### Gaps
- No study found on icons without labels for older adults in this pass. NN/g's general position that icons need labels was not fetched; treat "label every icon" as expert opinion here.
- No older-adult study found on infinite scroll, sticky headers, or table-of-contents ("jump links") on long pages.
- No older-adult accordion study found. The NN/g evidence covers carousels and hidden navigation, all ages.
- The Rello 2016 study did not include anyone over 54.
- Several font-size studies in the 2022 review used Chinese or Japanese text, which does not convert directly to English letter sizes.

## 6. Cognitive aging, reading, and plain language

### Takeaway
W3C and NN/g both name reduced short-term memory, slower processing and easy distraction as age-related. The practical answers in the sources are: one main message stated early, chunks under clear headings, bulleted lists, common words, active voice, consistent navigation and no moving distractions. These are standards and validated checklists, not experiments on older adults.

### Cited Findings
- **[Standard]** Older users can have reduced short-term memory, trouble concentrating and easy distraction, which make navigation and tasks harder. — [W3C WAI, Older Users](https://www.w3.org/WAI/older-users/)
- **[Standard]** Cognitive needs map to: descriptive headings (2.4.6), section headings (2.4.10), link text that says where it goes (2.4.4, 2.4.9), consistent navigation and naming (3.2.3, 3.2.4), unusual words and abbreviations explained (3.1.3, 3.1.4), and a version readable at lower secondary education level (3.1.5). — [W3C, How WCAG 2.0 Applies](https://www.w3.org/WAI/older-users/developing/)
- **[Tested, all ages]** NN/g: users 65+ made 2.4 errors per task vs 1.1 for ages 21 to 55 (2013), and error messages were often missed or not understood (2019). — [Nielsen 2013](https://www.nngroup.com/articles/usability-seniors-improvements/); [Kane 2019](https://www.nngroup.com/articles/usability-for-senior-citizens/)
- **[Expert, research-based checklist]** CDC Clear Communication Index: 4 intro questions and 20 scored items. Part A (11 items) covers one main message, its placement at the top with a visual cue, a call to action, active voice, common words, bulleted or numbered lists, chunks with headings, a summary of key points, and stating what is and is not known. Part C covers numbers: use familiar numbers, explain what they mean, and do not make readers do math. Last reviewed 29 May 2025. — [CDC Clear Communication Index](https://www.cdc.gov/ccindex/index.html)
- **[Standard, legal]** Federal plain-language guidance has moved from PlainLanguage.gov to digital.gov, which says the content is adapted from PlainLanguage.gov and grounded in the Plain Writing Act of 2010. — [digital.gov, Plain language guides](https://digital.gov/guides/plain-language)

### Inferences
- The CDC rule "do not make the reader do math" fits real estate pages: give the result, then show the worked steps.
- Consistent page structure across articles (same order of sections, same CTA placement) reduces the memory load W3C describes. This rests on 3.2.3 and NN/g's advice against drastic redesigns.
- Readers 65+ make more errors and are slower, so each section should stand alone and repeat the key term instead of relying on a pronoun from three paragraphs back. This is expert inference, not tested.

### Gaps
- The CDC page did not state the scoring threshold. The commonly cited pass mark of 90 could not be confirmed on the page fetched.
- No peer-reviewed study on working memory and web reading in adults 55 to 75 was retrieved in this pass. The cognitive claims rest on W3C's WAI-AGE literature review summary, not on a primary study read here.
- No sentence-length number (for example, 20 words) was confirmed from digital.gov or CDC in this pass.
