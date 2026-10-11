#!/usr/bin/env node
/*
 * score.js - grade a Chapter3 page against STANDARD.md.
 *
 * The website's `node build.js audit` is a list of things a page must NOT do
 * (banned phrases, compliance, broken chrome). This scorer measures what a page
 * MUST HAVE to win: a direct answer, extractable sections, a table, a visual,
 * firsthand experience, a Person author, its own share image, links in and out.
 * Run both. A page ships when `preflight` exits 0 AND this scores 90+ with no
 * blockers.
 *
 *   node tools/score.js <file.html | https://url>        one page, full report
 *   node tools/score.js --site <dir>                      every page, leaderboard
 *   node tools/score.js --site <dir> --only /invest/llc/  site context, one page
 *   add --json for machine output
 *
 * Site mode adds the checks that need other pages: inbound body links,
 * duplicate titles and descriptions, shared share images, and near-duplicate
 * text between pages.
 *
 * Every rule has a passing and a failing control in score.test.js. A rule that
 * cannot fire looks exactly like a rule that passed (website MISTAKES.md rule 4).
 */
"use strict";
const fs = require("fs"), path = require("path");
const cheerio = require("cheerio");

const TODAY = process.env.SCORE_TODAY ? new Date(process.env.SCORE_TODAY) : new Date();
const DEFAULT_OG = /\/og-image\.jpg$/;

/* Places on the Grand Strand. Mirrors the LOCAL list in the website's
   tools/mkpage.js so the two tools agree on what counts as local. */
const PLACES = ["Myrtle Beach", "North Myrtle Beach", "Horry County", "Horry", "Grand Strand", "South Carolina", "Conway", "Surfside Beach", "Surfside",
  "Murrells Inlet", "Pawleys Island", "Pawleys", "Georgetown", "Carolina Forest", "Little River", "Longs", "Garden City", "Litchfield", "Socastee",
  "Loris", "Aynor", "Cherry Grove", "Coastal Carolina", "Market Common", "Waccamaw", "Grande Dunes", "Barefoot", "Intracoastal", "Briarcliffe",
  "Burgess", "Forestbrook", "Myrtlewood", "Atlantic Beach", "Socastee"];
const PLACE_RE = new RegExp(`\\b(?:${PLACES.map(p => p.replace(/ /g, "\\s+")).join("|")})\\b`, "gi");

/* Words that do not identify a topic: every page on this site is about homes in Myrtle Beach. */
const GENERIC = new Set(("myrtle beach grand strand south carolina sc horry county home homes house houses guide real estate realty chapter3 " +
  "the a an and or of for in on to your you how what when why is are do does can should with from by at it its buy buying sell selling 2026 2025").split(" "));

/* First-hand experience: sentences where the brokerage or a named agent did or saw something.
   Shapes allowed by the owner's attribution rules (PLAYBOOK A11e, A20, A20a). */
const EXPERIENCE_RE = /\b(?:in Chapter ?(?:3|III)(?:'|&#39;|’)s (?:files|experience|closings|sales|tracking)|Chapter ?(?:3|III)(?:'|’)s (?:investor )?clients|(?:every|most|many|some) (?:investor )?clients? (?:Chapter ?(?:3|III)|we) work|an agent at Chapter ?(?:3|III)|one of our agents|our agents (?:have|see|own|walk|check|read)|our (?:investor |own )?clients|our broker (?:checks|reads|walks|asks|has seen|sees)|we have seen|we(?:'|’)ve seen|we see|we saw|in our experience|our (?:own )?(?:sales )?tracking|in our files|we (?:closed|walked|read|checked|tracked|sold|listed) )/i;

/* Template residue. Any of these in rendered text means a substitution failed. */
const RESIDUE_RE = /(?:(?<![0-9])%[sd]\b|\{\{|\}\}|\$\{|\bundefined\b|\bNaN\b|\[object Object\]|lorem ipsum|\bTODO\b|\bTKTK\b|\bXXX\b)/;

/* Enough finite verbs to tell a sentence from a noun phrase. Used only on link anchors. */
const VERB_RE = /\b(?:is|are|was|were|be|been|has|have|had|can|could|will|would|must|may|should|does|do|did|pays?|costs?|owes?|gets?|takes?|makes?|needs?|requires?|allows?|applies|counts?|means|says|keeps?|goes|comes|closes|sells?|buys?|rents?|files?|holds?|qualif(?:y|ies)|changes?|works?|runs?|depends?|lists?|names?)\b/i;
/* Calibrated on the 153 anchor-only sentences on the live site (2026-10-01):
   wh-clauses ("How the tax bill is calculated"), "X, explained" labels, and short
   verbless noun phrases ("The 14-day rule") are fragments. Imperatives ("Send us a
   property") and full sentences that are links ("Two exceptions restore the full
   rate") are not. */
const isFragment = (a) => /^(?:how|what|why|when|where|which|who)\b/i.test(a)
  || /,\s*(?:explained|compared|the guide|in order|step by step)$/i.test(a)
  || (wc(a) <= 5 && !VERB_RE.test(a) && !/^(?:send|call|see|read|compare|use|try|ask|book|get|run|start|talk|check)\b/i.test(a));
const CONDITIONAL_ANSWER = /^if\b[^.]{3,80},\s*(?:the|it|you|they|an?|your)\b[^.]*\b(?:is|are|can|cannot|can't|does|doesn't|do|don't|will|must|qualif(?:y|ies))\b/i;
const YESNO_Q = /^\s*(?:should|is|are|can|do|does|will|must|could|would|has|have)\b[^?]*\?/i;
const VERDICT = /^\s*(?:yes|no|usually|mostly|most|for most|on average|in most cases|only|not|rarely|sometimes|almost|never|always|it depends on)\b/i;

/* --- Plain language (voice/RULES.md class PLAIN, owner 2026-10-07) ---------- */
/* Terms a buyer does not know, each with a plain replacement. */
const PLAIN_WORDS = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "rules", "plain-words.json"), "utf8")).terms
  .map(t => ({ ...t, re: new RegExp(t.pattern, `g${t.flags || ""}`) }));
/* A line that credits a source or an image, not prose a reader reads. */
const CREDIT_LINE = /^(?:(?:data |image |photo |map )?sources?|imagery|photo|credit|data)\s*:/i;
/* A number a reader has to process. Not the 3 in "Chapter3", the 6 in "HO-6" or the 95 in "I-95",
   and not a phone number or the "55+" that names a kind of community. */
const PHONE_RE = /\(?\b\d{3}\)?[-.\s]\d{3}[-.]\d{4}\b/g;
const NUMBER_RE = /(?<![A-Za-z0-9.,$\-])\$?\d(?:[\d,]*\d)?(?:\.\d+)?/g;
const FIFTY_FIVE = /\b55(?:\s?\+|-plus\b|\s+and\s+(?:over|older)\b)/gi;
/* A dollar amount of $10,000 or more that is not round to the thousand: "$534,900". */
const EXACT_AMOUNT_RE = /\$\s?(\d{1,3}(?:,\d{3})+|\d{5,})(?:\.\d+)?(?![\d,]*\d)/g;
/* Dates in body copy: a month with a year, or "in 2026"-style year mentions. */
const MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept?|Oct|Nov|Dec";
const MONTH_YEAR_RE = new RegExp(`\\b(?:${MONTHS})\\.?(?:\\s+\\d{1,2},?)?\\s+((?:19|20)\\d\\d)\\b`, "g");
const PREP_YEAR_RE = /\b(?:in|during|since|through|until|by|for|of|from|as of)\s+(?:early\s+|late\s+|mid-)?((?:19|20)\d\d)\b/gi;
/* An answer that sends the reader somewhere else (PLAIN-5). */
const DEFLECT_RE = /^(?:ask|check|read|call|contact|request|see)\b|\bask the\b|\bcheck with\b/i;
const HOW_TO_Q = /^(?:how|where) (?:do|can|should|would|could) (?:i|you|we|buyers?|owners?|sellers?)\b/i;
const CTA_SEL = 'a.btn, a[href^="tel:"], form';
/* Pages that must show a map: a 55+ community, a submarket, a neighborhood. */
const PLACE_PAGE = /^\/(?:buyers\/55-plus-communities\/[^/]+|submarkets(?:\/[^/]+)?|neighborhoods(?:\/[^/]+)?)\/$/;
/* A heading over the FAQ: "Special assessment FAQ", "Frequently asked questions", "Every question sellers ask us." */
const FAQ_HEAD = /\bFAQs?\b|common questions|frequently asked|^every question\b/i;
/* A card that holds an icon: the live "why-stat" tiles, and the cards tools/icons.js builds (in an li). */
const ICON_BOX = /(?:^|[\s_-])(?:card|stat|tile|glance|fact|feature)s?(?:$|[\s_-])/i;

/* ----------------------------------------------------------------- parsing */

const norm = (s) => String(s || "").replace(/&#39;|&#x27;|’/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
const wc = (s) => (norm(s).match(/[A-Za-z0-9$][^\s]*/g) || []).length;

function sentences(text) {
  return norm(text)
    .replace(/\b(?:e\.g|i\.e|vs|etc|Dr|Mr|Mrs|Ms|St|No|U\.S|S\.C)\./g, (m) => m.replace(/\./g, "§"))
    .split(/(?<=[.!?])\s+(?=["'(]?[A-Z0-9$])/)
    .map(s => s.replace(/§/g, ".").trim())
    .filter(s => wc(s) > 0);
}

function parse(html, where) {
  const $ = cheerio.load(html);
  const ld = [];
  $('script[type="application/ld+json"]').each((_, e) => {
    try { const j = JSON.parse($(e).text()); for (const x of (j["@graph"] || [].concat(j))) ld.push(x); }
    catch { ld.push({ "@type": "__PARSE_ERROR__" }); }
  });
  const types = (x) => [].concat(x["@type"] || []);
  const byId = new Map(ld.filter(x => x["@id"]).map(x => [x["@id"], x]));
  const article = ld.find(x => types(x).some(t => /^(?:Article|BlogPosting|NewsArticle)$/.test(t)));
  const faqLd = ld.find(x => types(x).includes("FAQPage"));

  const main = $("main").first().clone();
  main.find("script,style,noscript,template").remove();
  const canonical = $('link[rel="canonical"]').attr("href") || "";
  const url = canonical ? canonical.replace(/^https?:\/\/[^/]+/, "") : (where || "");

  /* Body copy: paragraphs and list items in <main>, minus the locked legal
     strings and the sources line, which are not prose a reader reads. */
  const bodyBlocks = [];
  main.find("p, li").each((_, e) => {
    const el = $(e);
    if (el.find("p, li").length) return;                          // count the innermost block only
    if (el.closest("form, .breadcrumb, footer").length) return;
    const t = norm(el.text());
    if (!t) return;
    if (/^(?:sources?\b|legal notice|i consent to receive)/i.test(t)) return;
    bodyBlocks.push({ el, text: t });
  });

  /* The H1 is often two lines (<br/> then an italic line). Keep the break as a space. */
  const h1s = $("h1").map((_, e) => norm(cheerio.load($(e).html().replace(/<br\s*\/?>/gi, " ")).text())).get();
  const h1First = $("h1").first().length ? norm(cheerio.load($("h1").first().html().split(/<br\s*\/?>/i)[0]).text()) : "";
  const h2s = main.find("h2").map((_, e) => ({ el: $(e), text: norm($(e).text()) })).get();

  /* The short answer: the section headed by a "short answer" / "direct answer" eyebrow,
     or failing that the first substantial paragraph after the hero. */
  let shortAnswer = [];
  main.find("p").each((_, e) => {
    if (shortAnswer.length) return;
    if (/^(?:the (?:short|direct|quick) answer|short answer|in short|key takeaways?)$/i.test(norm($(e).text()))) {
      const sec = $(e).closest("section, div.wrap").first();
      shortAnswer = sec.find("p").map((_, p) => norm($(p).text())).get().filter(t => t && !/^(?:the (?:short|direct|quick) answer|short answer|in short|key takeaways?)$/i.test(t));
      const h2 = sec.find("h2").first();
      if (h2.length) shortAnswer = sec.find("p").filter((_, p) => !$(p).prevAll("h2").length || true).map((_, p) => norm($(p).text())).get()
        .filter(t => t && !/^(?:the (?:short|direct|quick) answer|short answer|in short|key takeaways?)$/i.test(t));
    }
  });
  if (!shortAnswer.length) {
    const first = bodyBlocks.find(b => wc(b.text) >= 25 && !/^by\s/i.test(b.text) && !b.el.closest(".detail-hero").length);
    if (first) shortAnswer = [first.text];
  }

  const heroSub = norm($(".detail-sub").first().text()) || "";
  const byline = bodyBlocks.map(b => b.text).find(t => /^By\s+[A-Z]/.test(t)) || norm(main.find('p:contains("By ")').first().text());

  return { $, html, main, ld, byId, types, article, faqLd, canonical, url, bodyBlocks, h1s, h1First, h2s, shortAnswer, heroSub, byline,
    title: norm($("head > title").first().text()),
    description: $('meta[name="description"]').attr("content") || "",
    ogImage: $('meta[property="og:image"]').attr("content") || "",
    robots: $('meta[name="robots"]').attr("content") || "",
    /* A space between elements, so "%s" followed by a link is not read as "%sa". */
    mainText: norm(cheerio.load((main.html() || "").replace(/</g, " <")).text()) };
}

/* ------------------------------------------------------------- page facts */

function facts(p) {
  const { $, main } = p;
  const kw = p.article && p.article.keywords ? String([].concat(p.article.keywords)[0]).split(",")[0] : "";
  const topicTokens = (kw || p.h1s[0] || p.title).toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(t => t.length > 2 && !GENERIC.has(t));
  const hasTopic = (s) => topicTokens.some(t => new RegExp(`\\b${t.replace(/s$/, "")}`, "i").test(s));

  const prose = p.bodyBlocks.filter(b => !b.el.closest(".detail-hero").length).map(b => b.text);
  const sents = prose.flatMap(sentences);
  const sentLens = sents.map(wc);
  const words = wc(prose.join(" "));

  /* FAQ section: the H2 whose section holds the FAQ questions, so section-level rules can skip it. */
  const faqQs = p.faqLd ? [].concat(p.faqLd.mainEntity || []) : [];
  const isFaqH2 = (h) => /\bFAQ\b|common questions|frequently asked/i.test(h.text) || /common questions/i.test(norm(h.el.prev("p").text()));
  const isCtaH2 = (h) => /\.\s*$/.test(h.text) || /navy/.test(h.el.closest("section").attr("style") || "");
  const contentH2 = p.h2s.filter(h => !isFaqH2(h) && !isCtaH2(h) && !/^sources?$/i.test(h.text));

  /* The first sentence of each content section: the passage an answer engine lifts. */
  const leads = contentH2.map(h => {
    const firstP = h.el.nextAll("p").first();
    const t = firstP.length ? norm(firstP.text()) : "";
    return { h2: h.text, lead: sentences(t)[0] || "" };
  });

  /* Link anchors standing alone as a sentence fragment: "How the two rates are calculated."
     or "The gain and withholding calculator." A linked sentence that is a real sentence
     ("A deed is an assessable transfer of interest.") is fine. A fragment opens with a
     wh-word or a navigation verb, or has no verb at all. */
  const fragments = [];
  main.find("p").each((_, e) => {
    const pt = norm($(e).text());
    $(e).find("a").each((_, a) => {
      const at = norm($(a).text()).replace(/[.]$/, "");
      if (wc(at) < 2) return;
      const esc = at.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`(?:^|[.!?]\\s+)${esc}\\.(?:\\s|$)`).test(pt)) return;
      if (isFragment(at)) fragments.push(at);
    });
  });

  const internal = new Set(), external = [];
  main.find("a[href]").each((_, a) => {
    const el = $(a), href = el.attr("href");
    if (el.closest(".breadcrumb, nav, header, footer").length) return;
    if (/^\/(?!\/)/.test(href)) { const u = href.split("#")[0]; if (u && u !== p.url) internal.add(u); }
    else if (/^https?:\/\//.test(href) && !/chapter3realty\.com/.test(href)) external.push(href);
  });
  const primary = external.filter(h => /\.gov\b|\.us\b|\.edu\b|scstatehouse|sccourts|law\.cornell|consumerfinance|fanniemae|freddiemac|hud\.gov|census|bls\.gov|fred\.stlouisfed|irs\.gov|noaa|fema/i.test(h));

  const ctas = main.find('a.btn, a[href="#lead-form"], a[href^="tel:"]').filter((_, a) => !$(a).closest(".detail-hero").length).length;
  const visuals = {
    tables: main.find("table").length,
    images: main.find("img").filter((_, i) => wc($(i).attr("alt") || "") >= 3).length,
    charts: main.find('svg[role="img"]').filter((_, s) => !!($(s).attr("aria-label") || $(s).find("title").text())).length,
    figures: main.find("figure").length,
    lists: main.find("ul, ol").filter((_, l) => $(l).children("li").length >= 3 && !$(l).closest("nav, .breadcrumb, footer").length).length,
    callouts: main.find('div[style*="border-left:3px"], aside, blockquote').length,
  };
  const visualCount = visuals.tables + visuals.images + visuals.charts + visuals.lists + visuals.callouts;

  const places = new Set((prose.join(" ").match(PLACE_RE) || []).map(s => s.toLowerCase().replace(/\s+/g, " ")));
  const experience = sents.filter(s => EXPERIENCE_RE.test(s));

  /* The author is the byline person or the company (owner 2026-10-05: Devin Day may be the visible author). */
  const author = p.article && p.article.author ? [].concat(p.article.author)[0] : null;
  const authorNode = author && author["@id"] ? (p.byId.get(author["@id"]) || author) : author;
  const authorNamed = !!author && (author["@id"] === "https://chapter3realty.com/#org" || (!!authorNode && p.types(authorNode).some(t => /Organization|RealEstateAgent|LocalBusiness|Person/.test(t))));

  /* Plain-language facts (PLAIN). Body copy only: the prose blocks, the hero sub included,
     without tables, the byline, credit lines and the sources line. A list number is not counted. */
  const plainProse = p.bodyBlocks.filter(b => !b.el.closest("table").length && !/^By\s+[A-Z]/.test(b.text) && !CREDIT_LINE.test(b.text))
    .map(b => b.text.replace(/^\d{1,2}[.)]\s+/, ""));
  const plainText = plainProse.join(" ");
  const plainWords = wc(plainText);
  const numbers = (plainText.replace(PHONE_RE, " ").replace(FIFTY_FIVE, " ").match(NUMBER_RE) || []);
  const exactAmounts = [];
  for (const t of plainProse) for (const m of t.matchAll(EXACT_AMOUNT_RE)) {
    const v = Number(m[1].replace(/,/g, ""));
    if (v >= 10000 && v % 1000 !== 0 && !exactAmounts.includes(m[0].trim())) exactAmounts.push(m[0].trim());
  }
  const year = (process.env.SCORE_TODAY ? new Date(process.env.SCORE_TODAY) : new Date()).getFullYear();
  /* This year and last year: the "as of" date. An older year is history, and a later one is a deadline the reader acts on. */
  const recent = (y) => +y >= year - 1 && +y <= year;
  const dateMentions = [];
  for (const t of plainProse) {
    let rest = t;
    for (const m of t.matchAll(MONTH_YEAR_RE)) if (recent(m[1])) { dateMentions.push(m[0]); rest = rest.replace(m[0], " "); }
    for (const m of rest.matchAll(PREP_YEAR_RE)) if (recent(m[1])) dateMentions.push(m[0]);
  }
  const plainHits = [];
  const about = `${p.title} ${p.h1s.join(" ")}`;
  for (const w of PLAIN_WORDS) {
    if ((w.skip || []).some(pre => p.url.startsWith(pre))) continue;
    w.re.lastIndex = 0; if (w.re.test(about)) continue;
    for (const t of plainProse) for (const m of t.matchAll(w.re)) plainHits.push({ term: w.term, plain: w.plain, text: m[0] });
  }
  /* A question heading whose answer sends the reader elsewhere. Two shapes are not deflections:
     a "how do I find out" question, which an instruction answers, and a call-to-action block
     ("Questions? Call us.") with a phone link, button or form under the heading. */
  const deflections = [];
  main.find("h2, h3").each((_, e) => {
    const q = norm($(e).text());
    if (!/\?$/.test(q) || HOW_TO_Q.test(q)) return;
    if ($(e).nextAll().filter((_, n) => $(n).is(CTA_SEL) || $(n).find(CTA_SEL).length > 0).length) return;
    const next = $(e).nextAll().filter((_, n) => !!norm($(n).text())).first();
    const first = next.length && !next.is("h2, h3, table") ? (sentences(norm(next.text()))[0] || "") : "";
    if (first && DEFLECT_RE.test(first)) deflections.push({ q, a: first });
  });
  /* Pictures: a figure, or an image or labelled chart outside one. A map is an embedded Google map,
     or a picture whose caption, label or alt text says map, satellite or aerial. */
  const pics = main.find("figure").toArray().concat(main.find('img, svg[role="img"]').filter((_, e) => !$(e).closest("figure").length).toArray());
  const picLabel = (e) => norm([$(e).find("figcaption").text(), $(e).attr("aria-label"), $(e).attr("alt"),
    $(e).find("[aria-label]").map((_, x) => $(x).attr("aria-label")).get().join(" "), $(e).find("img[alt]").map((_, x) => $(x).attr("alt")).get().join(" ")].join(" "));
  const maps = pics.filter(e => /\bmaps?\b|\bsatellite\b|\baerial\b/i.test(picLabel(e))).length
    + main.find("iframe").filter((_, e) => /google\.[a-z.]+\/maps|maps\.google\./i.test($(e).attr("src") || "")).length;
  /* A Google map iframe in the HTML loads on arrival. A map behind a click sits in a <template>
     (tools/area-map.js), which parse() removes, so only an on-arrival map is counted here (P8). */
  const liveMaps = main.find("iframe").filter((_, e) => /google\.[a-z.]+\/maps|maps\.google\./i.test($(e).attr("src") || "")).length;
  const plain = { prose: plainProse, words: plainWords, numbers, exactAmounts, dateMentions, plainHits, deflections, pictures: pics.length, maps, liveMaps };

  /* --- Page design (reports/Page design for readers and search.md, 2026-10-11) --- */
  const headText = (el) => norm(cheerio.load((el.html() || "").replace(/<br\s*\/?>/gi, " ")).text());

  /* The FAQ as a reader sees it: the questions under each FAQ heading, in an h3, h4, <summary> or <dt>.
     Calibrated on the live site (2026-10-11): it finds the same entries as the FAQPage schema on 117
     of 122 articles; on the other 5 the schema also holds questions that sit in other sections. */
  const faqHeads = p.h2s.filter(h => FAQ_HEAD.test(h.text) || /^(?:common questions|.*\bFAQs?)$/i.test(norm(h.el.prevAll("p").first().text())));
  const faqSeen = new Map();
  for (const h of faqHeads) {
    const region = h.el.closest("section").length ? h.el.closest("section") : h.el.parent();
    region.find("h3, h4, summary, dt").each((_, e) => {
      const q = norm($(e).text());
      if (!/\?$/.test(q) || faqSeen.has(q)) return;
      let a = "";
      if (e.tagName === "summary") a = norm($(e).parent().clone().children("summary").remove().end().text());
      else if (e.tagName === "dt") a = norm($(e).next("dd").text());
      else a = $(e).nextUntil("h2, h3, h4").filter("p, ul, ol").map((_, x) => norm($(x).text())).get().filter(t => !/^sources?\s*:/i.test(t)).join(" ");
      faqSeen.set(q, a);
    });
  }
  const visibleFaq = [...faqSeen].map(([name, text]) => ({ name, text }));

  /* Closed accordions in the body (A13): a <details> without `open` that holds text beyond its summary. */
  const closed = main.find("details").filter((_, e) => $(e).attr("open") === undefined && !$(e).closest("form, nav, header, footer").length
    && wc($(e).clone().children("summary").remove().end().text()) >= 3)
    .map((_, e) => norm($(e).children("summary").text()) || "(no summary)").get();

  /* "On this page" lists (H14): a nav or list of in-page links, named "On this page" (or "Contents",
     "In this guide", "Jump to"), or whose every link points at a heading. Each label must be the
     heading text exactly. The live site has none (2026-10-11). */
  const ids = new Map();
  main.find("[id]").each((_, e) => { if (!ids.has($(e).attr("id"))) ids.set($(e).attr("id"), $(e)); });
  const targetHead = (href) => {
    let id = href.slice(1); try { id = decodeURIComponent(id); } catch { /* keep raw */ }
    const t = ids.get(id); if (!t) return null;
    const h = t.is("h2, h3") ? t : t.find("h2, h3").first();
    return h.length ? h : null;
  };
  const TOC_NAME = /^(?:on this page|in this (?:guide|article|page)|contents|table of contents|jump to(?: a section)?)\s*:?$/i;
  const tocs = [];
  main.find("nav, ul, ol").each((_, e) => {
    const el = $(e);
    if (el.is("ul, ol") && el.parents("nav").length) return;
    if (el.closest("header, footer, form, .breadcrumb").length) return;
    const links = el.find('a[href^="#"]').filter((_, a) => ($(a).attr("href") || "").length > 1).toArray().map(a => $(a));
    if (links.length < 2) return;
    const near = [el.attr("aria-label"), el.find("h2, h3, h4, p, strong").first().text(), el.prev().text()].map(norm).filter(t => t && wc(t) <= 5);
    const named = near.some(t => TOC_NAME.test(t));
    const toHead = links.filter(a => targetHead(a.attr("href")));
    if (!named && toHead.length < links.length) return;
    tocs.push(links.map(a => { const h = targetHead(a.attr("href")); return { label: norm(a.text()), href: a.attr("href"), head: h ? headText(h) : null, el: h }; }));
  });

  /* Icons with no word beside them (H15): a decorative svg (aria-hidden) in a list item or card
     whose visible text, the icon removed, is empty. */
  const bareIcons = [];
  let iconCount = 0;
  main.find('svg[aria-hidden="true"]').each((_, e) => {
    const s = $(e);
    if (s.closest("nav, header, footer, form, button, .breadcrumb, figure").length) return;
    let box = s.closest("li");
    if (!box.length) box = s.parents().filter((_, x) => ICON_BOX.test($(x).attr("class") || "")).first();
    if (!box.length) return;
    iconCount++;
    const c = box.clone(); c.find("svg, [aria-hidden='true'], .sr-only, .visually-hidden").remove();
    if (!norm(c.text())) bareIcons.push((box.attr("class") || box.get(0).tagName).slice(0, 40));
  });
  const design = { visibleFaq, closed, tocs, iconCount, bareIcons };

  const modified = p.article && p.article.dateModified ? new Date(p.article.dateModified) : null;
  const ageDays = modified ? Math.round((TODAY - modified) / 864e5) : null;

  return { kw, topicTokens, hasTopic, prose, sents, sentLens, words, faqQs, contentH2, leads, fragments, internal, external, primary,
    ctas, visuals, visualCount, places, experience, authorNode, authorNamed, ageDays, plain, design };
}

/* ------------------------------------------------------------------ rules */
/* Each rule returns { credit: 0..1 | null (not applicable), detail }.
   blocker: true means the page cannot ship while it fails, whatever the score. */

const R = [];
const rule = (id, group, weight, label, fn, opts = {}) => R.push({ id, group, weight, label, fn, ...opts });
const pass = (detail) => ({ credit: 1, detail });
const part = (credit, detail) => ({ credit, detail });
const fail = (detail) => ({ credit: 0, detail });
const na = (detail) => ({ credit: null, detail });
const isArticle = (p) => !!p.article;

/* --- integrity ---------------------------------------------------------- */
rule("residue", "Human", 5, "No template residue (%s, {{, undefined, NaN)", (p) => {
  const m = p.mainText.match(RESIDUE_RE);
  return m ? fail(`"${m[0]}" in rendered text: ...${p.mainText.slice(Math.max(0, m.index - 50), m.index + 30)}...`) : pass("clean");
}, { blocker: true });

rule("faq-match", "SEO", 2, "FAQ schema matches the visible page word for word", (p, f) => {
  if (!f.faqQs.length) return na("no FAQPage schema");
  const vis = norm(p.mainText).replace(/'/g, "'");
  const miss = f.faqQs.filter(q => !vis.includes(norm(q.name)) || !vis.includes(norm(q.acceptedAnswer && q.acceptedAnswer.text).replace(/<[^>]+>/g, "")));
  return miss.length ? fail(`${miss.length} FAQ entr${miss.length > 1 ? "ies" : "y"} not visible verbatim: "${miss[0].name}"`) : pass(`${f.faqQs.length} entries match`);
}, { blocker: true });

/* --- SEO ---------------------------------------------------------------- */
rule("title", "SEO", 3, "Title 30-62 chars, names the topic and a place", (p, f) => {
  const t = p.title, n = t.length, topic = f.hasTopic(t), place = PLACE_RE.test(t); PLACE_RE.lastIndex = 0;
  const ok = [n >= 30 && n <= 62, topic, place];
  const d = `${n} chars${topic ? "" : ", no topic word"}${place ? "" : ", no place"}`;
  return part(ok.filter(Boolean).length / 3, d);
});

rule("description", "SEO", 2, "Meta description 110-165 chars and names the topic", (p, f) => {
  const n = p.description.length, ok = [n >= 110 && n <= 165, f.hasTopic(p.description)];
  return part(ok.filter(Boolean).length / 2, `${n} chars${ok[1] ? "" : ", no topic word"}`);
});

rule("h1", "SEO", 2, "Exactly one H1, and it names a place", (p) => {
  const one = p.h1s.length === 1, place = new RegExp(PLACE_RE.source, "i").test(p.h1s[0] || "");
  return part((one ? .5 : 0) + (place ? .5 : 0), `${p.h1s.length} H1${place ? "" : ", no place in H1"}`);
});

rule("canonical", "SEO", 1, "Absolute https canonical", (p) => /^https:\/\//.test(p.canonical) ? pass(p.canonical) : fail(p.canonical || "missing"));

rule("topic-early", "SEO", 2, "Topic word in the short answer (first 100 words)", (p, f) => {
  const first = p.shortAnswer.join(" ").split(/\s+/).slice(0, 100).join(" ");
  if (!f.topicTokens.length) return na("no keyword declared");
  return f.hasTopic(first) ? pass(`"${f.topicTokens.join(", ")}" found`) : fail(`none of "${f.topicTokens.join(", ")}" in the first 100 words`);
});

rule("links-out", "SEO", 2, "5+ contextual internal links to other pages", (p, f) => {
  const n = f.internal.size;
  return n >= 5 ? pass(`${n} pages`) : part(n / 5, `${n} pages linked from the body`);
}, { applies: isArticle });

rule("og-image", "SEO", 2, "Its own share image (not the sitewide default)", (p) => {
  if (!p.ogImage) return fail("no og:image");
  return DEFAULT_OG.test(p.ogImage) ? fail("uses the sitewide /og-image.jpg") : pass(p.ogImage);
}, { applies: isArticle });

rule("article-schema", "SEO", 2, "Article schema: a named author (person or company), both dates, image", (p, f) => {
  const a = p.article; if (!a) return fail("no Article schema");
  const checks = { "named author": f.authorNamed, datePublished: !!a.datePublished, dateModified: !!a.dateModified, image: !!a.image };
  const bad = Object.keys(checks).filter(k => !checks[k]);
  return part(1 - bad.length / 4, bad.length ? `missing: ${bad.join(", ")}${!f.authorNamed && f.authorNode ? ` (author is ${f.authorNode.name || [].concat(f.authorNode["@type"]).join("/")})` : ""}` : "complete");
}, { applies: isArticle });

/* No word-count rule. Google: "There's no ideal page length" (AI optimization guide,
   2026-07-10). Ahrefs, 174k pages: word count vs AI Overview citation r = 0.04.
   Cover the reader's sub-questions instead; that is a human check in STANDARD.md. */

/* --- AEO ---------------------------------------------------------------- */
rule("short-answer", "AEO", 3, "Short answer: 40-120 words, first sentence 30 words or fewer", (p) => {
  if (!p.shortAnswer.length) return fail("no short answer block");
  const all = p.shortAnswer.join(" "), n = wc(all), first = wc(sentences(all)[0] || "");
  let c = 0; if (n >= 40 && n <= 120) c += .6; else if (n >= 30 && n <= 160) c += .3;
  if (first <= 30) c += .4;
  return part(c, `${n} words, first sentence ${first} words`);
});

rule("verdict", "AEO", 3, "A yes/no question is answered yes/no in the first words", (p) => {
  const q = [p.h1First, p.title].find(t => t && YESNO_Q.test(t));
  if (!q) return na("headline is not a yes/no question");
  const first = sentences(p.shortAnswer.join(" "))[0] || "";
  /* Three accepted shapes: the short answer opens with the verdict ("Yes, for most..."),
     the H1's second line is the verdict ("Yes, at 90 days."), or the first sentence is a
     direct conditional ("If the property is your home, the fee is not deductible."). */
  const h1Second = norm(p.h1s[0] || "").slice(norm(p.h1First).length).trim();
  if (VERDICT.test(first)) return pass(`"${first.slice(0, 60)}"`);
  if (VERDICT.test(h1Second)) return pass(`H1 answers: "${h1Second.slice(0, 60)}"`);
  if (CONDITIONAL_ANSWER.test(first)) return pass(`conditional answer: "${first.slice(0, 60)}"`);
  return fail(`asks "${q.replace(/\s*\|.*$/, "")}" but the short answer opens "${first.slice(0, 70)}"`);
});

rule("question-h2", "AEO", 2, "60%+ of section headings are questions", (p, f) => {
  if (!f.contentH2.length) return na("no content sections");
  const q = f.contentH2.filter(h => /\?$/.test(h.text)).length, r = q / f.contentH2.length;
  return part(r >= .6 ? 1 : r / .6, `${q} of ${f.contentH2.length}`);
}, { applies: isArticle });

rule("section-leads", "AEO", 3, "Each section opens with a quotable sentence (30 words or fewer, no 'this/it/they' opener)", (p, f) => {
  if (!f.leads.length) return na("no content sections");
  const bad = f.leads.filter(l => !l.lead || wc(l.lead) > 30 || /^(?:this|that|these|those|it|they|he|she|the former|the latter|as (?:mentioned|noted))\b/i.test(l.lead));
  const r = 1 - bad.length / f.leads.length;
  return part(r >= .85 ? 1 : r, bad.length ? `${bad.length} of ${f.leads.length} weak, e.g. under "${bad[0].h2}": "${(bad[0].lead || "(no paragraph)").slice(0, 70)}"` : `${f.leads.length} sections`);
}, { applies: isArticle });

rule("table", "AEO", 2, "At least one data table", (p, f) => f.visuals.tables ? pass(`${f.visuals.tables} table(s)`) : fail("no table"), { applies: (p) => isArticle(p) });

/* The FAQ is for readers and Bing. Google stopped showing FAQ rich results on 2026-05-07, so the
   visible FAQ is what counts here and FAQPage schema is optional. The schema is read only when no
   visible FAQ is found; S12 (faq-match) still blocks a schema that differs from the page. */
rule("faq", "AEO", 2, "4-8 FAQ entries, answers 15-90 words, each stands alone", (p, f) => {
  const vis = f.design.visibleFaq, from = vis.length ? "visible" : "FAQPage schema";
  const ans = vis.length ? vis.map(q => q.text) : f.faqQs.map(q => norm(q.acceptedAnswer && q.acceptedAnswer.text));
  const n = ans.length; if (!n) return fail("no FAQ");
  const badLen = ans.filter(a => wc(a) < 15 || wc(a) > 90).length;
  const badOpen = ans.filter(a => /^(?:this|that|these|it|they|see above|as above)\b/i.test(a)).length;
  let c = (n >= 4 && n <= 8 ? .4 : n >= 3 ? .2 : 0) + .3 * (1 - badLen / n) + .3 * (1 - badOpen / n);
  return part(c, `${n} entries (${from})${badLen ? `, ${badLen} outside 15-90 words` : ""}${badOpen ? `, ${badOpen} open with a pronoun` : ""}`);
}, { applies: isArticle });

rule("open-answers", "AEO", 2, "FAQ answers and main content are open, not in a closed accordion", (p, f) => {
  const x = f.design.closed;
  if (!p.main.find("details").length) return na("no accordion");
  return x.length ? fail(`${x.length} closed <details>, e.g. "${x[0].slice(0, 70)}"`) : pass("every <details> is open");
});

rule("primary-sources", "AEO", 2, "2+ primary sources linked inside the body", (p, f) => {
  const n = new Set(f.primary).size;
  return n >= 2 ? pass(`${n} primary, ${new Set(f.external).size} external`) : part(n / 2, `${n} primary, ${new Set(f.external).size} external`);
}, { applies: isArticle });

rule("local-entities", "AEO", 2, "Names 3+ distinct Grand Strand places", (p, f) => {
  const n = f.places.size;
  return n >= 3 ? pass([...f.places].slice(0, 6).join(", ")) : part(n / 3, [...f.places].join(", ") || "none");
}, { applies: isArticle });

rule("fragments", "AEO", 2, "No link anchor standing alone as a sentence", (p, f) =>
  f.fragments.length ? part(Math.max(0, 1 - f.fragments.length / 4), `${f.fragments.length}: "${f.fragments.slice(0, 3).join('", "')}"`) : pass("none"));

/* --- Human -------------------------------------------------------------- */
rule("sentence-length", "Human", 3, "Mean sentence 20 words or fewer, none over 40", (p, f) => {
  if (!f.sentLens.length) return na("no prose");
  const mean = f.sentLens.reduce((a, b) => a + b, 0) / f.sentLens.length, over = f.sentLens.filter(n => n > 40).length;
  return part((mean <= 20 ? .6 : mean <= 24 ? .3 : 0) + (over === 0 ? .4 : over <= 2 ? .2 : 0), `mean ${mean.toFixed(1)}, ${over} over 40`);
});

rule("paragraphs", "Human", 2, "No paragraph over 80 words", (p, f) => {
  const long = p.bodyBlocks.filter(b => b.el.is("p") && wc(b.text) > 80);
  return long.length ? part(Math.max(0, 1 - long.length / 4), `${long.length} over 80 words, longest ${Math.max(...long.map(b => wc(b.text)))}`) : pass("none over 80");
});

rule("visual-rhythm", "Human", 3, "A visual element (table, list, chart, image, callout) every 350 words", (p, f) => {
  const per = f.words / Math.max(1, f.visualCount);
  const v = f.visuals;
  const d = `${f.visualCount} visuals for ${f.words} words (1 per ${Math.round(per)}): ${v.tables} tables, ${v.lists} lists, ${v.charts} charts, ${v.images} images, ${v.callouts} callouts`;
  return per <= 350 ? pass(d) : part(Math.max(0, 350 / per), d);
}, { applies: isArticle });

rule("image", "Human", 2, "At least one image or chart with real alt text", (p, f) =>
  f.visuals.images + f.visuals.charts ? pass(`${f.visuals.images} images, ${f.visuals.charts} charts`) : fail("no image or labelled chart in the body"), { applies: isArticle });

rule("ctas", "Human", 2, "2+ calls to action inside the article", (p, f) => f.ctas >= 2 ? pass(`${f.ctas}`) : part(f.ctas / 2, `${f.ctas}`), { applies: isArticle });

/* --- Plain language (voice/RULES.md class PLAIN, owner 2026-10-07) -------- */
/* "it is a very hard read because numbers are exact and there's too many numbers you also are
   mentioning the date so much". Counted on body copy: no tables, byline, credit or sources line. */
const NUMBER_DENSITY_MAX = 3.5;

rule("exact-amounts", "Human", 2, "Round dollar amounts: at most one exact amount of $10,000+ in prose", (p, f) => {
  const x = f.plain.exactAmounts;
  return x.length <= 1 ? pass(x.length ? `1: ${x[0]}` : "none") : part(Math.max(0, 1 - (x.length - 1) / 4), `${x.length}: ${x.slice(0, 4).join(", ")}`);
});

rule("number-density", "Human", 2, `Few numbers: ${NUMBER_DENSITY_MAX} or fewer per 100 words of prose`, (p, f) => {
  if (f.plain.words < 100) return na("under 100 words of prose");
  const d = 100 * f.plain.numbers.length / f.plain.words;
  const detail = `${d.toFixed(1)} per 100 words (${f.plain.numbers.length} numbers in ${f.plain.words} words)`;
  return d <= NUMBER_DENSITY_MAX ? pass(detail) : part(Math.max(0, 1 - (d - NUMBER_DENSITY_MAX) / NUMBER_DENSITY_MAX), detail);
});

rule("date-mentions", "Human", 2, "Date said once: 2 or fewer month-and-year or \"in 2026\" mentions in body copy", (p, f) => {
  const x = f.plain.dateMentions;
  return x.length <= 2 ? pass(`${x.length}`) : part(Math.max(0, 1 - (x.length - 2) / 6), `${x.length}: "${x.slice(0, 4).join('", "')}"`);
});

rule("price-headline", "Human", 3, "No price in the headline (pages outside /invest/)", (p) => {
  if (/^\/invest\//.test(p.url)) return na("investor page");
  const h = p.h1s.join(" "), m = h.match(/\$\s?\d[\d,.]*(?:\s?(?:k|K|million|M)\b)?/);
  return m ? fail(`H1 shows ${m[0]}: "${h.slice(0, 90)}"`) : pass("no price");
}, { blocker: true });

rule("deflection", "Human", 2, "Every question heading is answered, not sent elsewhere (\"Ask the manager\")", (p, f) => {
  const x = f.plain.deflections;
  return x.length ? part(Math.max(0, 1 - x.length / 3), `${x.length}: "${x[0].q}" answered "${x[0].a.slice(0, 70)}"`) : pass("none");
});

rule("plain-words", "Human", 2, "No industry terms from rules/plain-words.json in prose", (p, f) => {
  const x = f.plain.plainHits;
  if (!x.length) return pass("none");
  const terms = [...new Set(x.map(h => h.term))];
  return part(Math.max(0, 1 - terms.length / 4), `${x.length} uses of ${terms.length} terms: ${terms.slice(0, 5).map(t => `"${t}" (say: ${x.find(h => h.term === t).plain})`).join("; ")}`);
});

rule("pictures", "Human", 2, "800+ words of prose have 2+ pictures (figure, image or labelled chart)", (p, f) => {
  if (f.words < 800) return na(`${f.words} words`);
  const n = f.plain.pictures;
  return n >= 2 ? pass(`${n}`) : part(n / 2, `${n} for ${f.words} words`);
}, { applies: isArticle });

rule("place-map", "Human", 3, "A community, submarket or neighborhood page shows a map (our static map; a live map only on a click)", (p, f) => {
  if (!PLACE_PAGE.test(p.url)) return na("not a place page");
  const { maps, liveMaps } = f.plain;
  if (liveMaps) return part(maps > liveMaps ? .5 : .25, `${liveMaps} Google map${liveMaps > 1 ? "s" : ""} load on arrival: use the static map from tools/area-map.js and load a live map only on a click`);
  return maps ? pass(`${maps} map(s)`) : fail("no map: no figure labelled map (tools/area-map.js)");
}, { blocker: true });

/* --- Page design (reports/Page design for readers and search.md, 2026-10-11) --- */
rule("toc", "Human", 2, "\"On this page\" labels match the headings they point to, and every section is listed", (p, f) => {
  const tocs = f.design.tocs;
  if (!tocs.length) return na("no \"On this page\" list");
  const links = tocs.flat(), bad = links.filter(l => l.head === null || l.label !== l.head);
  const listed = new Set(links.filter(l => l.el).map(l => l.el.get(0)));
  const sections = p.h2s.filter(h => !/\.\s*$/.test(h.text) && !/navy/.test(h.el.closest("section").attr("style") || "") && !/^sources?$/i.test(h.text) && !h.el.closest("form").length);
  const missing = sections.filter(h => !listed.has(h.el.get(0)));
  const c = Math.min(1 - bad.length / links.length, sections.length ? 1 - missing.length / sections.length : 1);
  const d = [bad.length ? `${bad.length} of ${links.length} labels differ, e.g. "${bad[0].label}" ${bad[0].head === null ? `points at no heading (${bad[0].href})` : `for "${bad[0].head}"`}` : `${links.length} labels match`,
    missing.length ? `${missing.length} section${missing.length > 1 ? "s" : ""} not listed, e.g. "${missing[0].text}"` : ""].filter(Boolean).join("; ");
  return part(c, d);
});

rule("icon-labels", "Human", 2, "Every icon in a card or list has a visible word beside it", (p, f) => {
  const { iconCount, bareIcons } = f.design;
  if (!iconCount) return na("no icons in cards or lists");
  return bareIcons.length ? part(Math.max(0, 1 - bareIcons.length / iconCount), `${bareIcons.length} of ${iconCount} icons have no visible word, e.g. in "${bareIcons[0]}"`) : pass(`${iconCount} icons, each with a word`);
});

/* --- Trust (E-E-A-T) ----------------------------------------------------- */
rule("byline", "Trust", 2, "Visible byline naming the author, with an Updated date", (p) => {
  const b = p.byline || "", named = /^By\s+(?:the\s+)?(?:Chapter ?(?:3|III)\b|[A-Z][a-z]+\s+[A-Z])/.test(b) && !/\bPaul\b/.test(b), dated = /Updated\s+[A-Z][a-z]+\s+\d{1,2},\s+\d{4}/.test(b);
  return part((named ? .5 : 0) + (dated ? .5 : 0), b ? b.slice(0, 90) : "no byline");
}, { applies: isArticle });

rule("experience", "Trust", 3, "2+ sentences of first-hand experience", (p, f) => {
  const n = f.experience.length;
  return n >= 2 ? pass(`${n}: "${f.experience[0].slice(0, 70)}"`) : part(n / 2, n ? `1: "${f.experience[0].slice(0, 70)}"` : "none: no sentence where Chapter3 or a named agent saw or did something");
}, { applies: isArticle });

rule("sources-line", "Trust", 1, "Sources line present", (p) => {
  const heading = p.main.find("h2, h3, h4, p, strong").filter((_, e) => /^(?:data )?sources?(?: for this page)?\.?:?$/i.test(norm(p.$(e).text()))).length;
  return /\bSources?\s*[:.]/.test(p.mainText) || heading ? pass("present") : fail("missing");
}, { applies: isArticle });

rule("fresh", "Trust", 1, "Modified in the last 365 days", (p, f) => {
  if (f.ageDays === null) return fail("no dateModified");
  return f.ageDays <= 180 ? pass(`${f.ageDays} days`) : f.ageDays <= 365 ? part(.5, `${f.ageDays} days`) : fail(`${f.ageDays} days`);
}, { applies: isArticle });

/* --- Site-wide rules (need every page) ------------------------------------ */
const SITE_RULES = [];
const siteRule = (id, group, weight, label, fn, opts = {}) => SITE_RULES.push({ id, group, weight, label, fn, ...opts });

siteRule("inbound", "SEO", 2, "2+ other pages link here from body copy", (p, f, s) => {
  const n = (s.inbound.get(p.url) || new Set()).size;
  return n >= 2 ? pass(`${n} pages`) : part(n / 2, `${n} page${n === 1 ? "" : "s"}`);
}, { applies: isArticle });

siteRule("unique-meta", "SEO", 2, "Title and description unique sitewide", (p, f, s) => {
  const dt = (s.titles.get(p.title) || []).filter(u => u !== p.url), dd = (s.descs.get(p.description) || []).filter(u => u !== p.url);
  return dt.length || dd.length ? fail(`${dt.length ? `title shared with ${dt[0]}` : ""}${dd.length ? ` description shared with ${dd[0]}` : ""}`.trim()) : pass("unique");
});

siteRule("near-duplicate", "SEO", 2, "Shares under 25% of its text with any other page", (p, f, s) => {
  const d = s.dupes.get(p.url);
  if (!d) return pass("no close sibling");
  return d.j < .25 ? pass(`closest ${d.other} at ${(d.j * 100).toFixed(0)}%`) : d.j < .35 ? part(.5, `${(d.j * 100).toFixed(0)}% shared with ${d.other}`) : fail(`${(d.j * 100).toFixed(0)}% shared with ${d.other}`);
}, { applies: isArticle });

/* Rule id -> STANDARD.md id, so every line of a report points at the rule that explains it. */
const STD = {
  title: "S1", description: "S2", h1: "S3", canonical: "S4", "og-image": "S5", "article-schema": "S6", "links-out": "S7", inbound: "S8",
  "unique-meta": "S9", "near-duplicate": "S10", "topic-early": "S11", "faq-match": "S12",
  "short-answer": "A2", verdict: "A3", "question-h2": "A4", "section-leads": "A5", table: "A6", faq: "A7", fragments: "A8",
  "primary-sources": "A9", "local-entities": "A10",
  "sentence-length": "H1", paragraphs: "H2", "visual-rhythm": "H3", image: "H4", ctas: "H5", residue: "H9",
  byline: "T1", experience: "T2", "sources-line": "T3", fresh: "T4",
  "exact-amounts": "P1", "number-density": "P2", "date-mentions": "P3", "price-headline": "P4", deflection: "P5", "plain-words": "P6",
  pictures: "P7", "place-map": "P8",
  "open-answers": "A13", toc: "H14", "icon-labels": "H15",
};

/* ---------------------------------------------------------------- scoring */

function grade(p, site) {
  const f = facts(p);
  const rules = site ? R.concat(SITE_RULES) : R;
  const results = rules.map(r => {
    if (r.applies && !r.applies(p)) return { ...r, std: STD[r.id], credit: null, detail: "not an article" };
    const out = r.fn(p, f, site);
    return { ...r, std: STD[r.id], credit: out.credit === null ? null : Math.max(0, Math.min(1, out.credit)), detail: out.detail };
  });
  const scored = results.filter(r => r.credit !== null);
  const total = scored.reduce((a, r) => a + r.weight, 0);
  const score = Math.round(100 * scored.reduce((a, r) => a + r.weight * r.credit, 0) / Math.max(1, total));
  const groups = {};
  for (const g of ["SEO", "AEO", "Human", "Trust"]) {
    const gs = scored.filter(r => r.group === g), gt = gs.reduce((a, r) => a + r.weight, 0);
    groups[g] = gt ? Math.round(100 * gs.reduce((a, r) => a + r.weight * r.credit, 0) / gt) : null;
  }
  const blockers = results.filter(r => r.blocker && r.credit !== null && r.credit < 1);
  return { url: p.url, title: p.title, score, groups, blockers: blockers.map(b => b.id), results, words: f.words, article: !!p.article };
}

/* ------------------------------------------------------------- site mode */

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (f === "index.html") out.push(p);
  }
  return out;
}

function shingles(text) {
  const w = text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean), s = new Set();
  for (let i = 0; i + 6 <= w.length; i++) s.add(w.slice(i, i + 6).join(" "));
  return s;
}

function siteContext(pages) {
  const inbound = new Map(), titles = new Map(), descs = new Map(), dupes = new Map();
  for (const p of pages) {
    (titles.get(p.title) || titles.set(p.title, []).get(p.title)).push(p.url);
    (descs.get(p.description) || descs.set(p.description, []).get(p.description)).push(p.url);
    p.main.find("a[href^='/']").each((_, a) => {
      const el = p.$(a);
      if (el.closest(".breadcrumb, nav, header, footer").length) return;
      const u = el.attr("href").split("#")[0];
      if (u === p.url) return;
      (inbound.get(u) || inbound.set(u, new Set()).get(u)).add(p.url);
    });
  }
  const arts = pages.filter(p => p.article).map(p => ({ url: p.url, s: shingles(p.bodyBlocks.map(b => b.text).join(" ")) }));
  for (let i = 0; i < arts.length; i++) for (let j = i + 1; j < arts.length; j++) {
    const a = arts[i], b = arts[j]; let c = 0;
    const [small, big] = a.s.size < b.s.size ? [a.s, b.s] : [b.s, a.s];
    for (const x of small) if (big.has(x)) c++;
    const jac = c / Math.max(1, a.s.size + b.s.size - c);
    for (const [x, y] of [[a, b], [b, a]]) if (!dupes.has(x.url) || dupes.get(x.url).j < jac) dupes.set(x.url, { j: jac, other: y.url });
  }
  return { inbound, titles, descs, dupes };
}

/* -------------------------------------------------------------------- CLI */

const C = process.stdout.isTTY ? { r: "\x1b[31m", g: "\x1b[32m", y: "\x1b[33m", d: "\x1b[2m", b: "\x1b[1m", x: "\x1b[0m" } : { r: "", g: "", y: "", d: "", b: "", x: "" };

function report(g) {
  const lines = [`${C.b}${g.url}${C.x}  ${g.title}`, `${C.b}Score ${g.score}/100${C.x}   SEO ${g.groups.SEO}  AEO ${g.groups.AEO}  Human ${g.groups.Human}  Trust ${g.groups.Trust}   (${g.words} words)`];
  if (g.blockers.length) lines.push(`${C.r}BLOCKERS: ${g.blockers.join(", ")}${C.x}`);
  for (const grp of ["SEO", "AEO", "Human", "Trust"]) {
    lines.push(`\n${C.b}${grp}${C.x}`);
    for (const r of g.results.filter(r => r.group === grp)) {
      const mark = r.credit === null ? `${C.d} -- ` : r.credit >= 1 ? `${C.g} ok ` : r.credit > 0 ? `${C.y}${String(Math.round(r.credit * 100)).padStart(3)}%` : `${C.r}FAIL`;
      lines.push(`  ${mark}${C.x} ${(r.std || "").padEnd(4)}${r.label}${C.d}  ${r.detail}${C.x}`);
    }
  }
  return lines.join("\n");
}

async function load(target) {
  if (/^https?:\/\//.test(target)) { const res = await fetch(target); if (!res.ok) throw new Error(`${target} returned ${res.status}`); return parse(await res.text(), new URL(target).pathname); }
  return parse(fs.readFileSync(target, "utf8"), target);
}

async function main() {
  const args = process.argv.slice(2), json = args.includes("--json");
  const siteIdx = args.indexOf("--site"), onlyIdx = args.indexOf("--only");
  if (siteIdx >= 0) {
    const dir = args[siteIdx + 1];
    const pages = walk(dir).map(f => parse(fs.readFileSync(f, "utf8"), f)).filter(p => !/noindex/i.test(p.robots));
    const site = siteContext(pages);
    let graded = pages.map(p => grade(p, site));
    if (onlyIdx >= 0) graded = graded.filter(g => g.url === args[onlyIdx + 1]);
    if (json) return console.log(JSON.stringify(graded.map(({ results, ...g }) => ({ ...g, results: results.map(({ fn, applies, ...r }) => r) })), null, 1));
    if (onlyIdx >= 0) return graded.forEach(g => console.log(report(g)));
    const arts = graded.filter(g => g.article).sort((a, b) => a.score - b.score);
    console.log(`${C.b}${arts.length} article pages${C.x}  mean ${Math.round(arts.reduce((a, g) => a + g.score, 0) / arts.length)}  (hubs and legal pages skipped)\n`);
    for (const g of arts) console.log(`${String(g.score).padStart(3)}  S${String(g.groups.SEO).padStart(3)} A${String(g.groups.AEO).padStart(3)} H${String(g.groups.Human).padStart(3)} T${String(g.groups.Trust).padStart(3)}  ${g.url}${g.blockers.length ? `  ${C.r}BLOCKER ${g.blockers.join(",")}${C.x}` : ""}`);
    const fails = {};
    for (const g of arts) for (const r of g.results) if (r.credit !== null && r.credit < 1) { const k = `${(r.std || "").padEnd(4)}${r.label}`; fails[k] = (fails[k] || 0) + 1; }
    console.log(`\n${C.b}Rules missed, by number of pages${C.x}`);
    for (const [k, v] of Object.entries(fails).sort((a, b) => b[1] - a[1])) console.log(`${String(v).padStart(4)}  ${k}`);
    return;
  }
  const targets = args.filter(a => !a.startsWith("--"));
  if (!targets.length) { console.error("usage: node tools/score.js <file.html|url> ... | --site <dir> [--only /path/] [--json]"); process.exit(2); }
  let worst = 100;
  for (const t of targets) {
    const g = grade(await load(t));
    worst = Math.min(worst, g.blockers.length ? 0 : g.score);
    console.log(json ? JSON.stringify({ ...g, results: g.results.map(({ fn, applies, ...r }) => r) }, null, 1) : report(g) + "\n");
  }
  process.exitCode = worst >= 90 ? 0 : 1;
}

module.exports = { parse, grade, facts, siteContext, sentences, RULES: R, SITE_RULES, STD };
if (require.main === module) main().catch(e => { console.error(e.message); process.exit(2); });
