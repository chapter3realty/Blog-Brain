/* Two drawings for /buyers/no-hoa-homes/, in the style and palette of Blog-Brain tools/illustrations.js
   (240 x 180, flat fills, no text, no ids, no people, no brand). Writes SVG files to the folder given (default: this folder).
   node batches/2026-10-b/images/no-hoa/draw.js */
"use strict";
const fs = require("fs"), path = require("path");
const { PALETTE: C } = require(path.join(__dirname, "..", "..", "..", "..", "tools", "illustrations.js"));
const n = (v) => +(+v).toFixed(1);
const R = (x, y, w, h, f, rx) => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}"${rx ? ` rx="${rx}"` : ""} fill="${f}"/>`;
const P = (d, f) => `<path d="${d}" fill="${f}"/>`;
const O = (cx, cy, r, f) => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="${f}"/>`;
const E = (cx, cy, rx, ry, f) => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${f}"/>`;
const L = (d, c = C.navy, w = 2) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const sky = () => R(0, 0, 240, 180, C.sky);
const sun = (cx, cy, r) => O(cx, cy, r, C.sun);
const cloud = (x, y, s = 1) => R(x, y - 6 * s, 40 * s, 12 * s, C.cream, 6 * s) + O(x + 15 * s, y - 7 * s, 9 * s, C.cream) + O(x + 26 * s, y - 5 * s, 7 * s, C.cream);
function tree(x, base, s = 1, f = C.green2, hi = C.green) {
  return R(x - 2.5 * s, base - 18 * s, 5 * s, 18 * s, C.ink, 1) + O(x - 9 * s, base - 26 * s, 11 * s, f) + O(x + 9 * s, base - 26 * s, 11 * s, f)
    + O(x, base - 38 * s, 14 * s, f) + O(x - 4 * s, base - 41 * s, 7 * s, hi);
}
const bush = (x, y, s = 1, f = C.green2) => O(x - 6 * s, y, 8 * s, f) + O(x + 5 * s, y - 2 * s, 9 * s, f) + O(x + 1 * s, y - 6 * s, 4 * s, C.green);

const DRAW = {}, ALT = {};

/* A one-story house on its own lot: a wooden fence around the back yard, a shed in the yard,
   and a small boat on a trailer in the driveway. No pool anywhere. */
ALT["house-own-yard"] = "Drawing of a one-story house with a wooden fence around its back yard, a shed in the yard and a small boat on a trailer in the driveway";
DRAW["house-own-yard"] = () => {
  let s = sky() + sun(204, 36, 16) + cloud(34, 30, 0.9) + cloud(122, 22, 0.7);
  s += R(0, 112, 240, 68, C.green3) + R(0, 150, 240, 30, C.green);
  /* The street and the sidewalk along the front. */
  s += R(0, 160, 240, 20, C.ivory2) + R(0, 158, 240, 3, C.sand2);
  /* A tree behind the yard. */
  s += tree(222, 100, 0.95);
  /* The house: walls, a gable roof, a door and two windows. */
  s += R(64, 80, 92, 44, C.cream) + P("M56 82L110 50L164 82Z", C.navy2) + R(56, 80, 108, 4, C.ink);
  s += R(102, 96, 16, 28, C.brass, 1.5) + O(114, 111, 1.4, C.cream);
  for (const x of [74, 130]) s += R(x, 92, 18, 16, C.water2, 1.5) + L(`M${x + 9} 92v16M${x} 100h18`, C.cream, 1.6) + R(x - 2, 108, 22, 3, C.ivory2);
  s += R(60, 122, 100, 4, C.ivory2);
  /* The fenced back yard at the right; the shed inside stands taller than the fence. */
  s += R(178, 78, 32, 40, C.ivory2) + P("M173 80L194 64L215 80Z", C.ink) + R(189, 86, 10, 12, C.water3, 1);
  for (let x = 164; x <= 232; x += 7) s += P(`M${x} 126V106l3 -4l3 4V126Z`, C.tan);
  s += R(162, 110, 74, 3, C.ink) + R(162, 120, 74, 3, C.ink);
  /* The driveway at the left, with a small boat on its trailer. */
  s += P("M10 160L24 126H62L66 160Z", C.sand);
  s += L("M20 146H60l6 3", C.navy, 2.2) + O(38, 149, 4.5, C.navy) + O(38, 149, 1.6, C.slate);
  s += P("M18 128H52Q60 128 64 132L58 142H24Q18 140 18 134Z", C.cream) + R(18, 128, 44, 3, C.brass);
  s += P("M30 128L36 119H42L40 128Z", C.water3) + R(13, 129, 6, 11, C.navy2, 1.5);
  /* Bushes and a mailbox by the street. */
  s += bush(80, 126, 0.8) + bush(144, 126, 0.8);
  s += L("M74 158V140", C.ink, 2.2) + R(68, 134, 14, 8, C.navy2, 3) + R(80, 132, 2, 6, C.brass);
  return s;
};

/* Two roll carts at the curb, trash and recycling, in front of a house and a lawn. */
ALT["trash-carts"] = "Drawing of a trash cart and a recycling cart with wheels and lids, set out at the curb in front of a house";
DRAW["trash-carts"] = () => {
  let s = sky() + sun(38, 34, 15) + cloud(150, 28, 0.9);
  s += R(0, 108, 240, 72, C.green3);
  /* A house behind, and a tree. */
  s += R(120, 66, 100, 44, C.cream) + P("M112 68L170 40L228 68Z", C.navy2) + R(112, 66, 116, 4, C.ink);
  s += R(160, 80, 16, 30, C.brass, 1.5);
  for (const x of [130, 188]) s += R(x, 78, 18, 16, C.water2, 1.5) + L(`M${x + 9} 78v16M${x} 86h18`, C.cream, 1.6);
  s += tree(30, 110, 1.1) + bush(108, 112, 0.9) + bush(232, 112, 0.8);
  /* The lawn edge, the curb and the street. */
  s += R(0, 148, 240, 6, C.sand2) + R(0, 154, 240, 26, C.ivory2) + L("M0 168H240", C.cream, 2);
  /* The trash cart (navy) and the recycling cart (water blue), each with a lid, a handle and wheels. */
  const cart = (x, body, lid) => P(`M${x} 104H${x + 34}L${x + 31} 146H${x + 3}Z`, body)
    + R(x - 2, 99, 38, 7, lid, 2) + L(`M${x + 1} 98h32`, C.navy, 2.2)
    + L(`M${x + 6} 112V138M${x + 28} 112V138`, C.cream, 1.4)
    + O(x + 6, 148, 5, C.navy) + O(x + 6, 148, 2, C.slate) + O(x + 28, 148, 5, C.navy) + O(x + 28, 148, 2, C.slate);
  s += E(102, 151, 46, 3, C.sand);
  s += cart(62, C.navy2, C.navy) + cart(106, C.water2, C.water);
  return s;
};

const out = process.argv[2] || __dirname;
fs.mkdirSync(out, { recursive: true });
for (const k of Object.keys(DRAW)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" role="img" aria-label="${ALT[k]}">${DRAW[k]()}</svg>`;
  fs.writeFileSync(path.join(out, `${k}.svg`), svg);
  console.log(k, Buffer.byteLength(svg), "bytes");
}
