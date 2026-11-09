# /buyers/act-388-changes/: design pass

Reader: a Myrtle Beach homeowner or second-home owner who typed "Act 388". They want to know what the law is, why a second home pays more, how the 15% cap works, and which bills would change it. The question of what Wilson's plan would do to a rental's bill now belongs to /invest/rental-property-tax-cut/.

Screenshots: `before/` (first-1440, first-390, slice-00 to slice-20 at 1440 x 900, phone-00 to phone-05 at 390 x 844).

## What makes the page good (keep all of it)

- The short answer: no rate cut without two-thirds of each house, no bill that lowers the 6% rate, and nothing pending that raises the 4% rate.
- What Act 388 did in three plain parts, and the year-by-year list from 2006 to the 2029 reassessment.
- One house, four owners: the chart and the worked table. The new second-home buyer pays about three times the long-time owner. This is the page's own finding.
- The bills table: six bills, what each does, where each stands.
- The next reassessment, who pays more or less under each change, the share table, the Lincoln chart, the evidence on both sides, and the short and long run for each kind of owner.
- The FAQ, the sources, the photo credit and the three offers.

## What looks ugly, cluttered or hard to read

1. **The headline is four lines of giant type, and the answer is not on the first screen** (`first-1440.png`). The italic line is set near the H1's size. On a phone (`first-390.png`) the four facts are squeezed into a 2 x 2 grid of centred cards, and "Two-thirds of each house" breaks onto three lines. The homes strip sits between the hero and the short answer, so the answer starts on the third phone screen (`phone-02`).
2. **The contents list is a white card** (`slice-02`, `phone-03`).
3. **Cards all the way down.** What Act 388 did is three cards (`slice-02`, `slice-03`). Each year of the timeline is a card (`slice-03`, `slice-04`). The seats are four tiles (`slice-10`). The short and long run are four tall cards with sub-labels inside (`slice-16`, `slice-17`). Every table is a glass card, and on a phone the 5-column "Each change" table becomes five stacked cards. The photo sits in a white frame (`slice-04`, `slice-05`). With this many boxes, the two charts and the offers do not stand out.
4. **Ragged right edges.** Text ends at 820 px, the offers and the photo at 874 to 914, the bills table at 914, the Lincoln chart at 974, the other tables and the cards at 1114 (`slice-06`, `slice-09`, `slice-12`, `slice-14`). The photo sits under its paragraph with the right half of the screen empty.
5. **The two charts take effort to read.** The four-owner chart has no title; its message sits in small print under it, and the bars use only half the card (`slice-06`). The Lincoln chart has six long labels, each repeating "share of market value" or "share of taxable value", and its title does not say what it found (`slice-14`).

## One change per problem

1. The new H1 runs two lines; the italic line drops to about half the H1's size. The four facts become one quiet line on a wide screen and four flat rows under thin rules on a phone. The dek under the byline is not shown, as on the approved pages: the facts right above it say the same 4% and 6%. The short answer is moved above the homes strip on the screen (the strip follows right after it), so the answer is on the first screen on a desktop and on a phone.
2. The contents list loses its card: three columns on a desktop, two on a phone, between two thin rules.
3. One card style, kept for the two charts and the offers. What Act 388 did becomes three plain columns under a rule. The timeline keeps its years and line, without a box around each year's text. The short and long run become two plain columns under rules. The tables become plain tables under thin rules; on a phone, plain rows split by a rule. The photo loses its frame. (The seat tiles go with the overlap fix.)
4. One block width of 720 px for the tables, lists, charts and the photo below 1,180 px, the same as the offers. On screens 1,180 px and wider, the photo sits beside the two paragraphs it explains.
5. The four-owner chart gets a title on top, and its note is split into short sentences. The Lincoln chart is drawn as three groups, one per kind of property, each with two bars, "Share of market value" and "Share of taxable value", under a title that says the finding.

Also, from the gates: the closing offer band kept dark (its words were ivory on a light card, unreadable, before and after; the fix is copied from /hoa/documents/), and the header phone hidden at 1,000 to 1,100 px (it made the page 5 px wider than a 1,024 px window; same copy).

Not changed: the order of sections, the FAQ, the sources, the offers, the byline.

## Word changes

(a) Charts
- Four-owner chart: title added from the caption's first sentence, "One $350,000 house inside Myrtle Beach, four owners, the 2026 bill" -> "One $350,000 Myrtle Beach house, four owners: the 2026 tax bill". Note: "Dark bars are taxed at 4%, brass bars at 6%. Our example, before credits, fees and any special district." (unchanged).
- Lincoln chart title: "Horry County, 2018: who owns the value, and who is taxed on it" -> "Horry County, 2018: rentals were taxed on more than their share of the value".
- Lincoln chart labels: "Homes their owners live in, share of market value" (and the five like it) -> a group label ("Homes their owners live in", "Other homes, mostly rentals", "Commercial property") with two bars, "Share of market value" and "Share of taxable value".
- Lincoln chart note: "Gray bars: share of market value. Brass bars: share of taxable value. Real property the county assessor values only; property the state values and vehicles are not in it. Taxable value is the assessed value, after the 4% or 6% rate. Other homes are, in the study's words, typically rental property at the 6% rate." -> "Gray bars: share of market value. Brass bars: share of taxable value. Taxable value is the assessed value, after the 4% or 6% rate. Only real property the county assessor values is counted. Property the state values and vehicles are not in it. Other homes are, in the study's words, typically rental property at the 6% rate."

(b) The overlap fix
- H1: "Will the Next Governor Cut the Tax on Your Myrtle Beach Rental?" -> "What is Act 388 in South Carolina, and which bills would change it?" (mkpage refuses an H1 that names no place, owner rule 2026-09-07, so "in South Carolina" is added to the given H1, as in the given title).
- Title: "Act 388 After the 2026 Election: Who Would Pay More or Less" -> "Act 388 in South Carolina: the 15% Cap, 6% Rate and Bills" (the given title is 65 characters; mkpage allows 62, so "the" before "6% Rate" goes).
- Share title (ogTitle): "Will the next governor cut the tax on your Myrtle Beach rental? What Act 388 changes would mean" -> "What is Act 388 in South Carolina, and which bills would change it?"
- Description: "What Act 388 did, the bills filed to change it, and who in Myrtle Beach and Horry County would pay more or less: homeowners, second homes, rentals." -> "What Act 388 is, how the 15% cap and the 4% and 6% rates work, and which bills in the legislature would change them, for Myrtle Beach and Horry County owners."
- The H2 "What did Alan Wilson and Jermaine Johnson say about Act 388?" now holds two sentences: "Alan Wilson plans to look at reforming Act 388 so rentals are not taxed at a higher rate, and neither he nor Jermaine Johnson named a rate, a bill or a cost. What Wilson's plan would do to a Myrtle Beach rental's tax bill is on our rental tax cut page." (link /invest/rental-property-tax-cut/). The given wording was 32 words; the audit allows 28, so it reads "Alan Wilson plans to look at reforming Act 388 for rentals, and neither he nor Jermaine Johnson named a rate, a bill or a cost."
- H2 "What would it take to lower the 6% rate on second homes and rentals?" -> "Which bills would change the 6% rate?" (contents label "What it would take" -> "Bills that would change it"). It now covers what a bill needs and S. 815's text; the vote count is the rental tax cut page's.
- Keywords: "Act 388 second home tax" and "25 percent exemption" dropped. "Act 388 school operating tax" added first: without a keyword the dek shares, build.js audit fails the page ("hero sub-header carries none of the page's keywords").

## Cut sentences (overlap fix only)

From "What did Alan Wilson and Jermaine Johnson say about Act 388?":
- "Alan Wilson plans to look at reforming Act 388 so rentals are not taxed at a higher rate. Jermaine Johnson's platform, as WMBF summed it up, called for lower property taxes. Neither named a rate, a bill or a cost." (merged into the first of the two sentences above)
- The table "The same tests for both candidates for governor" (In their words: "Reform how rentals are assessed" / "Lower property taxes"; A bill filed: none named / none named; A rate or dollar amount: none named / none named; Who pays the difference: not named / not named; Other property tax plans: "Homestead exemption changes" / "None in the summary").
- H3 "What Wilson said" and: "In a WIS interview, Wilson said he is "looking at Act 388 and reforming how we assess property taxes on those types of properties," meaning rentals. Owner-occupied homes "are taxed at a much lower rate," he said. "Second, third, and fourth homes, which are usually rental properties, are taxed at a higher rate," he added."
- H3 "What his agenda lists" and: "His agenda lists "Reforming Act 388 to remove higher property taxes for rental properties," as Fox Carolina reported it. The agenda also lists automatic sign-up for the senior exemption, a larger exemption for disabled veterans, and lower personal property taxes for businesses."
- H3 "What Johnson's platform lists" and: "WMBF's summary also lists income tax relief for lower-income families and more affordable housing. Johnson conceded on election night."
- "The U.S. Senate race, won by Annie Andrews, does not change this tax. The rates are in the state constitution. Our guide to what the 2026 election means for Myrtle Beach buyers and sellers shows which office can change what." (The FAQ "Did Annie Andrews' win change property taxes in Horry County?" keeps the answer.)

From "Which bills would change the 6% rate?" (the vote count, which the rental tax cut page answers):
- The four seat tiles: "83 House votes needed, of 124", "79 House seats Republicans won, unofficial", "31 Senate votes needed, of 46", "34 Senate seats Republicans have".
- "The Senate was not on the ballot this year, except one special race. In the House, Republicans would need at least four Democratic votes. Two close House races go to a recount by law. Whichever way they go, Republicans would have 78 to 80 seats."
- "The House districts on Horry County ballots elected eight Republicans and three Democrats."

The WIS, Fox Carolina and WMBF links stay in the sources box. The short answer keeps "Republicans won 79 of the 124 state House seats in the unofficial count, four short of two-thirds."
