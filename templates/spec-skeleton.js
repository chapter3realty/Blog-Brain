/* /<hub>/<slug>/ - <one line on what the page answers>.
 *
 * Brief:   <blog-brain>/briefs/<slug>.md
 * Facts:   research/<cluster>/<slug>-facts.md (verified rows only)
 * Owner:   research/<cluster>/owner-answers-batch<N>.md, answers <n>-<m>
 *
 * Copy to specs/<slug>.js in the website repo. Needs website-patches/mkpage.patch
 * applied (h.figure, the per-page share image and the Person author).
 * Build: node tools/mkpage.js specs/<slug>.js
 * Score: node <blog-brain>/tools/score.js --site chapter3realty --only /<hub>/<slug>/
 *
 * Every string below is visible on the page or in its schema. Every number
 * comes from a verified fact row. "TODO" left anywhere fails score.js (H9).
 */
const { h } = require("../tools/mkpage.js");

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const SRC1 = "https://TODO";
const SRC2 = "https://TODO";

/* A figure built from facts on this page (or from a data file, never typed values).
   Draw it narrow and stacked: a phone scales it to about 340 pixels wide. */
const figure = () => `<svg role="img" aria-label="TODO one sentence that states what the figure shows" viewBox="0 0 440 300" style="display:block;width:100%;height:auto;max-width:520px;background:#ede5d8">
</svg>`;

module.exports = {
  url: "/TODO-hub/TODO-slug/",
  datePublished: "2026-TODO",                 // pin it: a rebuild must never restamp the page
  title: "TODO Topic in Myrtle Beach | Chapter3",   // S1: 30-62 chars, topic + place
  description: "TODO 110-165 chars: what the reader learns, with the topic word.",  // S2
  ogTitle: "TODO the full headline for social cards",
  crumb: "TODO short crumb",
  eyebrow: "TODO two to four words",
  h1: "TODO the reader's question, with a place in it?",   // S3, A3
  h1em: "TODO the answer in five words.",                  // A3: "Yes, at 90 days."
  sub: "TODO 8-30 words with the keyword and a number or a place. Not a question. No we.",
  heroCta: { label: "Talk to a specialized agent", href: "/contact/" },
  author: "devin",                                         // "devin" or "tim"; the other reviews
  shortAnswer: [                                           // A2: 40-120 words, verdict first
    "TODO Yes, for most ... The number.",
    "TODO the second fact the reader needs.",
    "TODO the reason to read on.",
  ],
  sections: [
    /* A4: questions. The first one defines the subject: what it is and who it applies to. */
    { h2: "TODO What is X, and who does it apply to?", html:
      h.p("TODO A5: the first sentence answers the heading in 30 words or fewer, with no link in it.") +
      h.p(`TODO the detail, with ${h.ext(SRC1, "a primary source")} supporting a specific claim.`) },

    { h2: "TODO How does X compare across Y?", html:
      h.p("TODO the one-sentence answer to this heading.") +
      h.table(["", "TODO column", "TODO column"], [          // A6
        ["TODO row", "TODO", "TODO"],
      ]) },

    { h2: "TODO What does X cost here?", html: (bg) =>
      h.p("TODO the answer first.") +
      h.p("TODO In Chapter3's files, ... (T2: real, anonymous, from the owner answers).") +
      h.cta("TODO title", "TODO one line on what we do for them.", "TODO label", "/contact/", bg) },  // H5: CTA 1

    { h2: "TODO Which option fits which buyer?", html:
      h.p("TODO the answer first.") +
      h.figure(figure(), "TODO caption: what to take from the figure.") },  // H4

    { h2: "TODO What goes wrong if you skip Z?", html: (bg) =>
      h.p("TODO the answer first.") +
      h.ul(["TODO item", "TODO item", "TODO item"]) +       // H3: a visual break every 350 words
      h.p(`TODO a sentence with a link that says what the target answers: read ${h.a("/TODO/", "how the TODO works")}.`) +  // A8, S7
      h.cta("TODO title", "TODO line.", "TODO label", "tel:+18543332135", bg) },  // H5: CTA 2
  ],
  faqTitle: "TODO topic FAQ",
  faq: [                                                   // A7: 4-8, each 15-90 words, the answer first
    { q: "TODO as a reader types it?", a: "TODO Yes. The answer, then the one fact that supports it." },
    { q: "TODO?", a: "TODO" },
    { q: "TODO?", a: "TODO" },
    { q: "TODO?", a: "TODO" },
  ],
  sources: [                                               // T3: 3-5, short names, links only
    { name: "TODO Short name", href: SRC1 },
    { name: "TODO Short name", href: SRC2 },
  ],
  sourcesNote: "Educational only, not legal or tax advice.",
  bottomCta: { h2: "TODO a statement ending in a period.", p: "TODO one line.", label: "Call a specialized agent", href: "tel:+18543332135" },
  keywords: "TODO primary query first, then variants",
  about: "TODO the subject, in one phrase",
};
