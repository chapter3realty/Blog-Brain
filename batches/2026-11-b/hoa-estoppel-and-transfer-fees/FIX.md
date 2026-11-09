# Fix: /hoa/estoppel-and-transfer-fees/ (and the matching line on /sell/)

Neither page has a spec in `specs/`. Edit `chapter3realty/hoa/estoppel-and-transfer-fees/index.html` and `chapter3realty/sell/index.html` the way the round 1 light fixes did. Do not type a date.

Row 1 (a verified Grand Strand range) is NOT FOUND. So the estoppel page prints no range, and the /sell/ page loses its unsourced range. Both pages then give the same answer: the fee varies by community, no state law caps it, and the contract says who pays (rows 2, 3).

## /hoa/estoppel-and-transfer-fees/

### 1. "Nobody has to hurry, so ask early", second paragraph (no fact needed)

Now: "HOAs and their managers tend to take about three days to release documents, and some take longer. That is what we see. We do not control that timing. We control our end. Your documents go into our analysis tool the moment they arrive, and a person reads the result within minutes."

New: "HOAs and their managers tend to take about three days to release documents, and some take longer. That is what we see. We do not control that timing."

(The service claim goes. Nothing on the page supports "within minutes".)

### 2. "What the HOA charges you at closing", first paragraph (rows 1, 2)

Now: "... The amounts vary from one community to the next and nothing caps them. Ask for the figures early so nothing on the settlement statement is a surprise."

New: "... The amounts vary from one community to the next, and no South Carolina law caps them. Ask the HOA or its manager for its own figures in writing, early, so nothing on the settlement statement is a surprise."

(Only the second sentence changes, and slightly: "no South Carolina law caps them" is what row 2 supports. "Nothing caps them" could be read as "the HOA's own documents cannot cap them", which no source says.)

### 3. Title (no fact needed)

The triage asks for "HOA Estoppel Letter in South Carolina: Cost, Who Pays, How Long". The page cannot give a cost figure yet (row 1), so a title that promises "Cost" repeats the complaint in the triage. Use:

> `<title>`: HOA Estoppel Letter in South Carolina: Fees, Who Pays, How Long

The page answers all three: fees (no cap, the HOA's own figure), who pays (the contract), how long (no deadline; about three days in practice). If the owner later supplies the range from Chapter3's closing files (facts.md, "Questions only the brokerage can answer"), add the range to section 2 and change "Fees" to "Cost". Leave the H1 as it is.

### 4. Nothing else changes

Keep the law sections, the approval and first-refusal section, the FAQ and every offer.

## /sell/ (the matching line)

The FAQ "What closing costs do sellers pay in South Carolina?" appears twice in `chapter3realty/sell/index.html`: in the FAQPage JSON-LD (line 55) and in the visible FAQ (line 688). Change the same sentence in both places.

Now: "Any HOA estoppel or transfer fees, $100 to $400 at most Grand Strand HOAs."

New: "Any HOA estoppel or transfer fees, which vary by community and have no state cap."

(rows 1, 2; it matches the estoppel page. If the page links anywhere on that line, link "HOA estoppel or transfer fees" to /hoa/estoppel-and-transfer-fees/.)

Also check `chapter3realty/llms-full.txt`: it repeats the /sell/ text and is generated, so rebuild it with the site's normal build step rather than editing it by hand.

## Owner question (optional, not blocking)

Add to `templates/owner-questions.md` only if the owner wants a range on the page: "From your last 20 or so Grand Strand condo and HOA closings, what did the HOA estoppel or statement fee line show, lowest and highest?" The page ships without it.
