# Fix: /sell/inherited-house/

The page has no spec (no file in `specs/` builds it). Make the change in `chapter3realty/sell/inherited-house/index.html` the way the round 1 light fixes did, and touch nothing else. Do not type a date. Leave the byline date to `node build.js dates`.

## 1. The broken eyebrow (no fact needed)

Now, in the section after the tax list:

> `<p style="...uppercase...">The decision The full state and federal math, including the withholding that hits out-of-state heirs at closing, is in our <a href="/sell/capital-gains/" ...>capital gains guide</a>.</p>`

New: the eyebrow holds only the label.

> `<p style="...uppercase...">The decision</p>`

## 2. The capital gains sentence, moved (no fact needed)

Add it as a plain paragraph after the tax list, inside the "Taxes on an inherited house" section, right after `If you keep the house, budget for the new number.</span></li></ul>` and before `</div></section>`. Use the page's normal body paragraph style, not the eyebrow style, and a normal body link:

> The full state and federal math, including the withholding that hits out-of-state heirs at closing, is in our capital gains guide.

("capital gains guide" links to /sell/capital-gains/, as now.)

## 3. New paragraphs on the Horry County Probate Court (rows 1 to 6)

Place them at the end of the "How probate works in South Carolina" section, after the list that ends `paid by the estate.</span></li></ul>` and before `</div></section>`. Body paragraph style. Two short paragraphs, each with a bold lead-in like the list items.

> **Where to file.** An estate is opened in the probate court of the county where the person lived when they died. If they did not live in South Carolina, it can be opened in any county where they owned property. (row 1) In Horry County that is the Probate Court at 1301 Second Avenue in Conway, (843) 915-5370, open Monday to Friday, 8 to 5. You need an appointment to open an estate in person. (row 2) If there is a will, it must be filed with the court within 30 days of the death. (row 3)

> **Small estates.** South Carolina has a faster route when the estate is worth $45,000 or less after liens. (rows 4, 5) Thirty days after the death, an affidavit signed by the probate judge lets an heir collect money owed to the person who died, their belongings and their stock, without opening an estate. It covers personal property only, so it cannot transfer the house. (row 4) If the whole estate, house included, is under the limit, a personal representative is still appointed. After the notice to creditors is published, the representative can distribute the estate right away and close it with a sworn statement. (row 5) The same quick route is open at any value when the personal representative is the only heir, or the only person named in the will. (row 6) Your probate attorney can tell you whether either one fits.

Links: "probate court of the county" and "$45,000" link to the S.C. Code Title 62, Chapter 3 page (https://www.scstatehouse.gov/code/statmast.php?title=62&chapter=3). "Probate Court at 1301 Second Avenue" links to https://www.horrycountysc.gov/departments/probate-court/. Do not link the county's estate page for the limit: it still prints the old $25,000 (facts.md, "Conflict noted").

Check after the edit: the paragraph names no interest rate, no payment amount and no fee. It quotes no one. The phone number is the court's, not Chapter3's, so the CTA phone stays the only Chapter3 number in the section.

## Nothing else changes

The triage says "Leave the rest." Keep the title, the eight-month line, the six-year story (it is in the story bank as the page's own sale), the three-ways list and the FAQ as they are.
