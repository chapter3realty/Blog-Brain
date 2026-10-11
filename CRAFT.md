# The craft: how to make a page a reader trusts and remembers

This is the skill, not a template. The owner, 2026-10-10: "you arent learning templates you are learning a skill and you are in charge". The rules in `voice/RULES.md` are the corrections this skill came from. Read this first, then the rules, then decide.

## 1. Know the reader before you write a word

Picture one real person who searched for this page's question. Know four things about them:

- **What they want first.** A retiree looking at a 55+ neighborhood wants to know what life is like there: the homes, the pool, the beach, the things to do. An investor wants the numbers. A seller wants to know what they will walk away with. Lead with that.
- **What they already know.** Assume nothing: not the towns, not the roads, not one real estate word. If they would need to look something up, show it or say it another way.
- **What they are worried about.** Moving away from family, making friends, money lasting, storms, being taken advantage of. A good page answers the worry before they say it.
- **What they will ask next.** After every section, ask: what question did this just raise? Answer it, or cut what raised it.

## 2. Decide what goes on the page

Start from everything the research found. Keep a fact only if it passes all three:

1. The reader would miss it if it were gone.
2. You can say what it means for them in one plain sentence.
3. It is true, or old but still true and harmless if it changed (RULES PLAIN-9).

Everything else stays in the fact ledger. A short page that answers the reader beats a long page that proves we did research.

## 3. Choose the shape for this subject

There is no fixed list of sections. Choose the order a good agent would use if the reader were sitting across the desk:

- The good news and the thing they came for, first.
- Then what they need to picture it: where it is, what it looks like, what a normal week is like.
- Then what it costs and what could go wrong, plainly, without alarm.
- Then the next step.

Two pages about different places should feel different, because the places are different. A beachfront neighborhood leads with the beach. An inland one with a hospital three minutes away leads with the calm and the convenience. A page with one big drawback says so early, kindly, and says what to do about it.

## 4. Show it

People understand pictures before words. Use one wherever it helps:

- **A map** for any place: where it is, what is near, how many minutes by car (`tools/area-map.js`). Our own static map, with a link to Google Maps. A live map only when the reader clicks. Put the drive times in the text too.
- **Photos** of the real place or the area nearby, ours or properly licensed (`rules/images.md`, `tools/photos.js`).
- **Small images or illustrations** to show a feature instead of describing it (`tools/illustrations.js`).
- **Icons** for quick facts the eye can scan (`tools/icons.js`). Every icon has a word beside it. The fact is in the words, not the icon.

Never name something the reader cannot picture. Show it, or leave it out.

How it looks matters as much as what it shows. The design report (`reports/Page design for readers and search.md`) has the evidence and a checklist. In short:

- The answer comes first. On a phone, the first screen shows the H1, the byline and the first sentence of the short answer. No big photo above it.
- Large, dark text: 18 px or more on a phone, lines of about 65 characters. Links are underlined.
- Hide nothing. FAQ answers are open text, never in a closed accordion. Nothing rotates or pops up.
- A page with 4 or more sections gets an "On this page" list. Each label is the heading, word for word.
- Each photo shows a fact, and its caption says the fact. Cut a photo that only decorates.

## 5. Write it

- Short sentences. One idea each. Plain words.
- Round numbers, few of them. "About $300,000." Three numbers in a paragraph at most.
- Say what it means, not what it is: "You probably will not need flood insurance," not "Zone X".
- Speak as the expert the reader trusts. No "records show", no "according to". Sources go in the sources line.
- Warm and literal. "About 400 homes are already built" is warm. A metaphor is not.
- Never date a fact in the body. The date is in the byline.

## 6. Tell one story

A short story makes a page memorable and shows we know the place. See `voice/STORY-CRAFT.md` for how to write one (built from research, 2026-10-10). The legal limits never move: a real story is real and comes from the story bank; anything else is labelled "Example" and never claims to be a client.

## 7. Check it like a stranger would

Before anyone else sees it:

- Read it as the 62-year-old from Ohio who knows nothing. Where did you stop? Where did you want a picture?
- Count the numbers and the dates.
- Ask every heading: is it answered in the first sentence?
- Open it on a phone at 375 px wide, once with the largest text setting. Can you see the answer without scrolling? Is anything cut off, hidden or too small?
- Ask every sentence: would the reader miss it?
- Run the gates (`npm test`, `score.js`, `claims-scan.js`, `facts-check.js`, the website's `build.js audit`), then the buyer readers and the reviewer.

## 8. Learn from every edit

When the owner changes a sentence, the change is a lesson about a class of sentences, not one sentence. Record it (`tools/record-edit.js`), name the class in `voice/RULES.md`, and apply it to everything after.
