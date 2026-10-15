#!/usr/bin/env node
/*
 * glass.js: the "liquid glass" theme for batch 2026-10-b's pages, and the three blocks that came
 * with it: a price chart with each place's best feature, a per-place offer pill, and the theme's
 * own stylesheet. Opt-in: a page without theme: "glass" builds exactly as before.
 *
 * Why: the owner, 2026-10-14 (third read): "for all 5 of these pages all icons and graphs need to
 * look very modern such as liquid glass try making the slight brown background liquid glass as well
 * along with all illustrative and graphs." On the affordable page: "the graph could be a bit sleeker
 * ... the benefits could also be listed in the graph at the beginning." CRAFT 4, "Look modern".
 *
 * Usage, in a spec (BB is the Blog-Brain folder the spec already finds):
 *
 *   const G = require(path.join(BB, "tools", "glass.js"));     // or PK.glass from page-kit.js
 *   module.exports = G.page({ theme: "glass", url: ..., sections: [...], ... });
 *
 *   G.page(spec)        theme: "glass" puts the theme's stylesheet at the top of the page (in
 *                       heroMedia, else the first section) and draws the glass icon set
 *                       (icons.js ICONS_GLASS). Any other spec is returned unchanged.
 *   G.bars(rows, o)     the price chart: one rounded bar a place, its best feature beside its
 *                       name, its price at the end of the bar. Clean and flat, no gridlines, no
 *                       legend, one accent color, a glass frame.
 *   G.offer(place, o)   the small pill at the end of a place's entry: "Book a showing in Parkview",
 *                       linked to /contact/?place=Parkview.
 *   G.css()             the theme stylesheet alone; G.offerCss() the pill's rules alone, for a page
 *                       without the theme.
 *
 * What the theme does (all scoped to main#main, so the header and footer are untouched):
 *   - The ivory sections become one soft field: a warm gradient with large, faint blobs.
 *   - Cards, icon chips, the selection guide, the offer boxes, the tables, the figures (maps,
 *     photos, charts) and their captions get a translucent fill, a 1 px light edge, a soft shadow,
 *     round corners and a light top highlight.
 *   - backdrop-filter blur (with the -webkit- prefix) only on a few large surfaces, never nested:
 *     the offer boxes and bands, the selection guide, the table containers and the chart. Small
 *     cards sit on a smooth gradient, where blur shows nothing and costs paint time.
 *   - With no backdrop-filter, or with prefers-reduced-transparency, every surface is a solid,
 *     slightly lighter panel. With prefers-reduced-motion, nothing moves.
 *   - Brass text is a darker brass on glass (--g-ink, --g-ink-lg), so every word keeps WCAG AA
 *     contrast on the field; the bars and accents keep the site's brass.
 *
 *   node tools/glass.js        prints the theme's size and the selectors it styles
 */
"use strict";
const { icon, iconInner, ICONS_GLASS, esc } = require("./icons.js");
const { fairHousing, cardsBelow } = require("./compare.js");

/* ---------------------------------------------------------------------------- */
/* Tokens                                                                         */

/* The site's tokens (website assets/app.*.css :root): navy #1c2028, navy-2 #2a3040, brass #c4783a,
   brass-2 #d4894a, brass-ink #91592b, ivory #f4efe8, ivory-2 #ede5d8, slate #5c6b78. On the field's
   darkest point brass-ink text measures 4.2:1, under AA, so brass words on glass use --g-ink
   (#8a5226, 4.7:1 there, 5.6:1 on glass) and the large H1 line uses --g-ink-lg (#a8612c, 3.5:1 at
   the darkest point, 4.2:1 on glass; large text needs 3:1). */
const T = {
  navy: "#1c2028", navy2: "#2a3040", brass: "#c4783a", brass2: "#d4894a", brassInk: "#91592b",
  ink: "#8a5226", inkLg: "#a8612c", ivory: "#f4efe8", slate: "#5c6b78", base: "#f8f4ee", solid: "#fbf8f3",
};
const S = "main#main";

/* A glass surface: fill, edge, highlight and shadow. BLUR is added only on the large surfaces. */
const SURF = "background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(255,255,255,.52));border:1px solid var(--g-edge);box-shadow:var(--g-hi),var(--g-sh)";
const BLUR = "-webkit-backdrop-filter:var(--g-blur);backdrop-filter:var(--g-blur)";
const DARK = "background:linear-gradient(160deg,rgba(42,48,64,.95),rgba(28,32,40,.97));border:1px solid rgba(255,255,255,.14);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 26px 60px -30px rgba(28,32,40,.6)";

/* The large surfaces that blur, and the small ones that do not. One list each, so the fallbacks
   below reach exactly the same elements. */
const BIG = [
  `${S} div[style^="border-left:3px solid var(--brass)"]`,          // h.cta, the offer box inside a section
  `${S} .c3-want`,                                                  // the selection guide
  `${S} div[style^="overflow-x:auto;margin:1.2rem 0"]`,             // h.table's container
  `${S} .c3-cc`,                                                    // compareCards on a wide screen
  `${S} .c3-gchart`,                                                // the price chart
];
const CARDS = [
  `${S} .c3-glance li`,                                             // the icon row in the hero
  `${S} ul[role=list]>li[style*="border-top:3px solid var(--brass)"]`, // atAGlance cards
  `${S} .c3-pc>div`,                                                // pros and cons
  `${S} .c3-story`,                                                 // the example
  `${S} .c3ph-card`,                                                // photo and drawing cards
  `${S} .c3-want>li`,                                               // a want inside the guide
  `${S} nav[aria-label="On this page"]`,                            // the contents list
  `${S} figure:not(.c3-gchart)`,                                    // maps, photos, drawings, charts
];

/* ---------------------------------------------------------------------------- */
/* The stylesheet                                                                 */

function themeRules() {
  const r = [];
  /* Tokens and the field. The blobs repeat every 2,400 px, so a long page keeps its texture. */
  r.push(`${S}{--g-ink:${T.ink};--g-ink-lg:${T.inkLg};--g-edge:rgba(255,255,255,.8);--g-hi:inset 0 1px 0 rgba(255,255,255,.95);`
    + `--g-sh:0 1px 2px rgba(28,32,40,.05),0 14px 36px -20px rgba(28,32,40,.3);--g-r:20px;--g-blur:saturate(150%) blur(16px);`
    + `background-color:${T.base};background-image:`
    + `radial-gradient(44rem 26rem at 4% 460px,rgba(232,201,154,.30),rgba(232,201,154,0) 70%),`
    + `radial-gradient(40rem 26rem at 98% 1000px,rgba(196,120,58,.08),rgba(196,120,58,0) 70%),`
    + `radial-gradient(46rem 26rem at 16% 1500px,rgba(232,201,154,.22),rgba(232,201,154,0) 70%),`
    + `radial-gradient(40rem 24rem at 94% 1960px,rgba(42,48,64,.045),rgba(42,48,64,0) 70%);`
    /* Each blob fades out (70% of its 26rem, about 290 px) inside its 2,400 px tile, so the tiles meet with no seam. */
    + `background-size:100% 2400px;background-repeat:repeat-y}`);
  /* The ivory bands give way to the field; a hairline keeps the sections apart. */
  r.push(`${S}>section[style*="background:var(--ivory"],${S} .detail-hero{background:transparent!important}`);
  r.push(`${S} .detail-hero{border-bottom:0}${S} .detail-hero.bg-grid{background-image:none}`);
  r.push(`${S}>section[style*="background:var(--ivory"]+section[style*="background:var(--ivory"]{border-top:1px solid rgba(255,255,255,.7)}`);
  /* Brass words, darker on glass (contrast, see T). */
  r.push(`${S} .eyebrow,${S} p[style*="color:var(--brass)"]{color:var(--g-ink)!important}`);
  r.push(`${S} .detail-h1 em{color:var(--g-ink-lg)!important}`);
  /* Surfaces. */
  r.push(`${BIG.join(",")}{${SURF};${BLUR};border-radius:var(--g-r)!important}`);
  r.push(`${CARDS.join(",")}{${SURF};border-radius:16px!important}`);
  /* Remove the old fills and rules the inline styles set on those surfaces. */
  r.push(`${S} ul[role=list]>li[style*="border-top:3px solid var(--brass)"],${S} .c3-pc>div,${S} .c3-story,${S} .c3-want>li{border-top:1px solid var(--g-edge)!important}`);
  r.push(`${S} div[style^="border-left:3px solid var(--brass)"]{border-left:1px solid var(--g-edge)!important;padding:1.4rem 1.5rem!important}`);
  r.push(`${S} ul[role=list]>li[style*="border-top:3px solid var(--brass)"],${S} .c3-pc>div,${S} .c3-story{background-color:transparent!important}`);
  /* Icon chips: a small glass lens with a warm tint, the icon in brass ink, a lighter stroke. */
  const CHIP = "background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(232,201,154,.55))!important;border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff,0 3px 10px -4px rgba(145,89,43,.45);color:var(--brass-ink)";
  r.push(`${S} .c3-glance .i,${S} ul[role=list]>li>span[style*="border-radius:50%"],${S} .c3-want .i,${S} .c3-cc .i{${CHIP}}`);
  r.push(`${S} .c3-cc .i{display:inline-flex;width:1.9rem;height:1.9rem;border-radius:50%;align-items:center;justify-content:center}`);
  r.push(`${S} svg[viewBox="0 0 24 24"][aria-hidden="true"]{stroke-width:1.6}`);
  /* The selection guide: a panel with its wants as light cards. */
  r.push(`${S} nav[aria-label="On this page"]{padding:1.1rem 1.4rem .5rem;box-sizing:border-box}`);
  r.push(`${S} .c3-want{padding:1rem;gap:.8rem}${S} .c3-want>li{box-shadow:var(--g-hi),0 6px 18px -14px rgba(28,32,40,.35)}`);
  /* Tables: a light head rule, no heavy navy line. compareCards becomes cards on a phone (its own
     breakpoint, compare.js cardsBelow): there the panel goes and each row is a glass card. */
  r.push(`${S} div[style^="overflow-x:auto;margin:1.2rem 0"]{padding:.4rem 1rem .6rem}`);
  r.push(`${S} div[style^="overflow-x:auto;margin:1.2rem 0"] th{border-bottom:1px solid rgba(28,32,40,.22)!important}`);
  r.push(`${S} .c3-cc{padding:.4rem 1rem .6rem}${S} .c3-cc thead th{border-bottom:1px solid rgba(28,32,40,.22)}${S} .c3-cc tr.c3-self>*{background:rgba(255,255,255,.7)}`);
  for (const n of [4, 5, 6]) {
    const sel = n === 4 ? `${S} .c3-cc` : `${S} .c3-cc:has(thead th:nth-child(${n}))`;
    r.push(`@media (max-width:${Math.round(cardsBelow(n) / 16 * 1000) / 1000 - 0.001}em){`
      + `${sel}{background:none;border:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;padding:0}`
      + `${sel} tbody tr{${SURF};border-radius:16px;border-top:1px solid var(--g-edge)!important}`
      + `${sel} tr.c3-self{border:2px solid var(--brass)!important}}`);
  }
  /* Figures: a glass frame, the picture with round corners, the caption inside the frame. */
  r.push(`${S} figure:not(.c3-gchart){padding:.55rem .55rem .15rem}`);
  r.push(`${S} figure:not(.c3-gchart)>svg[role=img],${S} figure:not(.c3-gchart)>img,${S} figure .c3ph-f{border-radius:12px!important;border:0!important;overflow:hidden}`);
  r.push(`${S} figure:not(.c3-gchart)>figcaption{padding:.55rem .45rem .5rem;margin-top:0!important}`);
  r.push(`${S} .c3ph-card figure,${S} .c3ph-gal>figure .c3ph-f{box-shadow:none}${S} .c3ph-card{overflow:hidden}`);
  r.push(`${S} .c3ph-card figure{background:none;border:0;padding:0}`);
  /* The offer bands: a dark glass panel floating on the field, not a full-width band. */
  r.push(`${S}>section[style^="background:var(--navy)"]{background:transparent!important;padding:2.4rem 0!important}`);
  r.push(`${S}>section[style^="background:var(--navy)"]>.wrap{${DARK};${BLUR};border-radius:28px;padding:2.6rem 1.6rem;width:calc(100% - 32px);box-sizing:border-box}`);
  /* Buttons: a brass pill with a light top edge. Navy on brass is 4.7:1 at the bar's darkest. */
  r.push(`${S} .btn{border-radius:999px}`);
  r.push(`${S} .btn-brass{background:linear-gradient(180deg,${T.brass2},${T.brass});border-color:rgba(255,255,255,.35);box-shadow:inset 0 1px 0 rgba(255,255,255,.4),0 8px 18px -10px rgba(145,89,43,.7);color:${T.navy}}`);
  /* Fallbacks: no backdrop-filter, or a reader who asks for less transparency: solid panels. */
  const solid = `${BIG.join(",")}{background:${T.solid}!important;-webkit-backdrop-filter:none;backdrop-filter:none}`
    + `${S}>section[style^="background:var(--navy)"]>.wrap{background:${T.navy2}!important;-webkit-backdrop-filter:none;backdrop-filter:none}`;
  r.push(`@supports not ((-webkit-backdrop-filter:blur(1px)) or (backdrop-filter:blur(1px))){${solid}}`);
  r.push(`@media (prefers-reduced-transparency:reduce){${solid}${CARDS.join(",")}{background:${T.solid}!important}}`);
  /* Nothing new moves; with reduced motion, nothing moves at all. */
  r.push(`@media (prefers-reduced-motion:reduce){${S} *{transition:none!important;animation:none!important}}`);
  return r.join("");
}

/* The offer pill (G.offer), also usable on a page without the theme (G.offerCss()). */
const OFFER_RULES = "main#main .c3-offer{margin:1.2rem 0 2rem;max-width:720px}"
  /* main#main, so it outranks the site's underline on links in a paragraph (a pill is a button shape). */
  + "main#main .c3-offer a.c3-offer-pill{display:inline-flex;align-items:center;gap:.7rem;min-height:44px;box-sizing:border-box;padding:.55rem .6rem .55rem 1.2rem;border-radius:999px;"
  + "font-family:var(--sans);font-size:var(--read,1.0625rem);font-weight:600;line-height:1.3;color:var(--navy);text-decoration-line:none!important;"
  + "background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.62));border:1px solid rgba(145,89,43,.35);"
  + "box-shadow:inset 0 1px 0 #fff,0 8px 20px -14px rgba(28,32,40,.45);transition:background-color .15s,border-color .15s}"
  + "main#main .c3-offer a.c3-offer-pill:hover{border-color:var(--brass);background:linear-gradient(180deg,#fff,rgba(232,201,154,.35))}"
  + "main#main .c3-offer a.c3-offer-pill:focus-visible{outline:3px solid var(--navy);outline-offset:3px}"
  + "main#main .c3-offer-ar{flex:none;display:inline-flex;width:2rem;height:2rem;border-radius:50%;align-items:center;justify-content:center;"
  + `background:linear-gradient(180deg,${T.brass2},${T.brass});color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.4)}`
  + "@media (prefers-reduced-motion:reduce){main#main .c3-offer a.c3-offer-pill{transition:none}}";

/* The chart (G.bars). ARIA table roles (table, row, rowheader, cell), so a screen reader reads it as
   a table while the rows are laid out as a grid. On a phone the name and feature sit on one line and the bar under it; from
   700 px the label is on the left and the bar on the right. */
const CHART_RULES = ".c3-gchart{margin:1.6rem 0 2rem;max-width:820px;padding:1.2rem 1.25rem 1rem;box-sizing:border-box}"
  + ".c3-gchart [role=table]{display:block;width:100%}"
  + ".c3-gchart .cap{display:block;color:var(--navy);font-weight:600;font-size:1.1em;line-height:1.35;margin:0 0 1rem}"
  + ".c3-gchart .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}"
  + ".c3-gchart [role=rowgroup]{display:grid;gap:1rem}"
  + ".c3-gchart [role=row]{display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem;align-items:center}"
  + "@media (min-width:700px){.c3-gchart [role=row]{grid-template-columns:minmax(0,22rem) minmax(0,1fr);column-gap:1.4rem}}"
  + ".c3-gchart [role=rowheader]{display:block;color:var(--muted);font-size:var(--read,1.0625rem);line-height:1.4}"
  + ".c3-gchart .n,.c3-gchart .n a{color:var(--navy);font-weight:600}"
  + ".c3-gchart .n a{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:.18em}"
  + ".c3-gchart .dot{color:var(--g-ink,#8a5226);padding:0 .35rem}"
  + ".c3-gchart [role=cell]{display:flex;align-items:center;gap:.6rem;min-width:0}"
  + ".c3-gchart .b{flex:none;height:.85rem;min-width:.85rem;width:calc((100% - 7rem) * var(--f));border-radius:999px;"
  + `background:linear-gradient(90deg,${T.brass},${T.brass2});box-shadow:inset 0 1px 0 rgba(255,255,255,.35)}`
  + `.c3-gchart .ref .b{background:${T.slate}}`
  + ".c3-gchart .v{color:var(--navy);font-weight:600;font-size:var(--read,1.0625rem);font-variant-numeric:tabular-nums;white-space:nowrap}"
  + ".c3-gchart .ref .n{font-weight:500}"
  + ".c3-gchart figcaption{color:var(--muted);font-size:.95rem;line-height:1.55;margin:1.1rem 0 0;padding:0}"
  + "@media (max-width:699px){.c3-gchart{padding:1rem .95rem .9rem}.c3-gchart .b{width:calc((100% - 6.2rem) * var(--f))}}";

const css = () => `<style id="c3-glass">${themeRules()}${OFFER_RULES}${CHART_RULES}</style>`;
const offerCss = () => `<style>${OFFER_RULES}</style>`;

/* ---------------------------------------------------------------------------- */
/* page(spec): switch the theme on                                                */

/* Swap each icon that has a glass drawing for it, wherever the page draws it (icon chips, map
   symbols). The default drawings are exact strings, so the swap touches nothing else. */
function glassIcons(html) {
  if (typeof html !== "string") return html;
  for (const k of Object.keys(ICONS_GLASS)) html = html.split(iconInner(k)).join(iconInner(k, "glass"));
  return html;
}

function page(spec) {
  if (!spec || typeof spec !== "object") throw new Error("glass.js: page() takes a spec");
  if (spec.theme === undefined || spec.theme === "plain") return spec;
  if (spec.theme !== "glass") throw new Error(`glass.js: no theme named "${spec.theme}" (use "glass")`);
  if (!Array.isArray(spec.sections) || !spec.sections.length) throw new Error("glass.js: page() needs the spec's sections");
  const wrap = (v) => (typeof v === "function" ? (...a) => glassIcons(v(...a)) : glassIcons(v));
  const out = Object.assign({}, spec, { sections: spec.sections.map((s) => Object.assign({}, s, { html: wrap(s.html) })) });
  const sheet = css();
  const has = (v) => typeof v === "string" && v.includes('<style id="c3-glass">');
  if (has(spec.heroMedia) || spec.sections.some((s) => has(s.html))) throw new Error("glass.js: the theme is on this page twice");
  /* As early in <main> as a spec can reach: the hero's media row, else the first section. */
  if (typeof spec.heroMedia === "string" && spec.heroMedia) out.heroMedia = sheet + glassIcons(spec.heroMedia);
  else {
    const first = out.sections[0], h = first.html;
    out.sections[0] = Object.assign({}, first, { html: typeof h === "function" ? (...a) => sheet + h(...a) : sheet + h });
  }
  return out;
}

/* ---------------------------------------------------------------------------- */
/* bars(rows, o): the price chart                                                 */

/*
 * rows  [{ name, value, href?, feature?, valueText?, reference? }], 2 to 20, in the order shown.
 *         name       the place (plain text).
 *         value      a number, the bar's length; bars start at 0, so lengths compare honestly.
 *         feature    the place's best feature, short (48 letters or fewer): "walk to Whispering
 *                    Pines golf". Shown after the name with a dot between. Fair housing checked:
 *                    a feature names what the place has, never who lives there.
 *         valueText  the words at the end of the bar; default o.format(value).
 *         reference  true draws a neutral bar (a comparison, such as a home in the city).
 * o     { caption (required: what the chart shows), note? (the line under it), max? (the value of
 *         a full bar; default the largest), format? (value => text, default "$190,000"),
 *         nameLabel? ("Place"), featureLabel? ("Best feature"), valueLabel? ("Typical price") }
 * Returns a <figure class="c3-gchart">. Its styles come with the theme (G.css()); a page without the
 * theme adds G.chartCss() once.
 */
const plainText = (where, v, max) => {
  if (typeof v !== "string" || !v.trim()) throw new Error(`glass.js: ${where} is empty`);
  if (/[<>]/.test(v)) throw new Error(`glass.js: ${where} is plain text, no tags: ${v}`);
  if (max && v.trim().length > max) throw new Error(`glass.js: ${where} is ${v.trim().length} letters; keep it to ${max} or fewer: ${v}`);
  return v.trim();
};
const fair = (where, text, label) => {
  const p = fairHousing(text, { label });
  if (p.length) throw new Error(`glass.js: ${where}: ${p.join("; ")}. Name what the place has.`);
};
const okHref = (where, u) => {
  if (typeof u !== "string" || !/^(?:\/[^\s"<>]*|#[A-Za-z][\w-]*|https:\/\/[^\s"<>]+)$/.test(u)) throw new Error(`glass.js: ${where} must be a site path, an anchor or an https link: ${u}`);
  return u;
};
const money = (v) => "$" + Math.round(v).toLocaleString("en-US");

function bars(rows, o = {}) {
  if (!Array.isArray(rows) || rows.length < 2 || rows.length > 20) throw new Error("glass.js: bars takes 2 to 20 rows");
  const caption = plainText("the chart caption", o.caption, 140);
  fair("the chart caption", caption);
  const format = typeof o.format === "function" ? o.format : money;
  const vals = rows.map((r, i) => {
    if (!r || !Number.isFinite(r.value) || r.value < 0) throw new Error(`glass.js: bar ${i + 1} needs a value of 0 or more`);
    return r.value;
  });
  const max = o.max === undefined ? Math.max(...vals) : o.max;
  if (!(max > 0) || vals.some((v) => v > max)) throw new Error("glass.js: max must be at least the largest value");
  const names = new Set();
  const anyFeature = rows.some((r) => r.feature);
  const body = rows.map((r, i) => {
    const name = plainText(`bar ${i + 1} name`, r.name, 60);
    if (names.has(name)) throw new Error(`glass.js: ${name} is in the chart twice`);
    names.add(name);
    let feat = "";
    if (r.feature !== undefined) {
      const f = plainText(`${name} feature`, r.feature, 48);
      fair(`${name} feature`, f, true);
      feat = `<span class="dot" aria-hidden="true">&middot;</span><span class="f">${esc(f)}</span>`;
    }
    const vt = r.valueText === undefined ? format(r.value) : plainText(`${name} valueText`, r.valueText, 40);
    const nm = r.href ? `<a href="${esc(okHref(`${name} href`, r.href))}">${esc(name)}</a>` : esc(name);
    const f = Math.round(r.value / max * 1000) / 1000;
    return `<div role="row"${r.reference ? ' class="ref"' : ""}><span role="rowheader"><span class="n">${nm}</span>${feat}</span>`
      + `<span role="cell"><span class="b" style="--f:${f}" aria-hidden="true"></span><span class="v">${esc(vt)}</span></span></div>`;
  }).join("");
  const head = `<div role="rowgroup" class="sr"><div role="row"><span role="columnheader">${esc(o.nameLabel || "Place")}${anyFeature ? `, ${esc(o.featureLabel || "best feature")}` : ""}</span><span role="columnheader">${esc(o.valueLabel || "Typical price")}</span></div></div>`;
  const note = o.note ? `<figcaption>${esc(plainText("the chart note", o.note, 400))}</figcaption>` : "";
  return `<figure class="c3-gchart"><div role="table" aria-label="${esc(caption)}"><span class="cap" aria-hidden="true">${esc(caption)}</span>${head}<div role="rowgroup">${body}</div></div>${note}</figure>`;
}
const chartCss = () => `<style>${CHART_RULES}</style>`;

/* ---------------------------------------------------------------------------- */
/* offer(place, o): the per-place offer pill                                      */

/* The website's build refuses a button whose label promises an action the click does not do,
   when it points at a form (build.js CTA_PROMISE, owner 2026-08-25): "See", "Check", "View" ... on
   a link to /contact/. The pill is not a .btn, so the build would not catch it; this does. */
const CTA_PROMISE = /^\s*(check|open|map|see|view|browse|explore|watch|look|run|compare|calculate|estimate)\b/i;

/*
 * place  the place's name as the entry says it ("Parkview").
 * o      { label? (default "Book a showing in <place>"; it must name the place and read as a
 *          request: "Book a showing in X", "Get the homes for sale in X", "Ask about homes in X"),
 *          href? (default /contact/?place=<place>; /contact/... or tel: only) }
 * Returns <p class="c3-offer"><a class="c3-offer-pill" href="/contact/?place=Parkview">...</a></p>.
 */
function offer(place, o = {}) {
  const name = plainText("the offer's place", place, 60);
  const label = o.label === undefined ? `Book a showing in ${name}` : plainText(`the offer for ${name}`, o.label, 60);
  if (!label.toLowerCase().includes(name.toLowerCase())) throw new Error(`glass.js: the offer "${label}" must name the place (${name})`);
  if (CTA_PROMISE.test(label)) throw new Error(`glass.js: the offer "${label}" promises what a form cannot do (website build.js CTA_PROMISE); say "Book a showing in ${name}" or "Get the homes for sale in ${name}"`);
  fair(`the offer for ${name}`, label);
  const href = o.href === undefined ? `/contact/?place=${encodeURIComponent(name)}` : o.href;
  if (!/^(?:\/contact\/(?:[?#][^\s"<>]*)?|tel:\+?[0-9.\-]+)$/.test(href)) throw new Error(`glass.js: the offer for ${name} goes to /contact/ or a tel: link, not ${href}`);
  const arrow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  return `<p class="c3-offer"><a class="c3-offer-pill" href="${esc(href)}">${esc(label)}<span class="c3-offer-ar" aria-hidden="true">${arrow}</span></a></p>`;
}

module.exports = { page, css, offerCss, chartCss, bars, offer, glassIcons, TOKENS: T, BIG, CARDS, CTA_PROMISE };

if (require.main === module) {
  const c = css();
  console.log(`glass theme: ${Buffer.byteLength(c)} bytes; blurred surfaces:\n  ${BIG.join("\n  ")}\nglass cards:\n  ${CARDS.join("\n  ")}`);
  console.log(`glass icons: ${Object.keys(ICONS_GLASS).join(", ")}; a chip: ${icon("golf", { set: "glass" }).length} bytes`);
}
