#!/usr/bin/env node
/*
 * illustrations.js: flat spot illustrations for feature cards, drawn as inline SVG.
 *
 * Usage, in a spec or a tool:
 *
 *   const { illustration, ILLUSTRATION_NAMES } = require("<blog-brain>/tools/illustrations.js");
 *   illustration("indoor-pool")                  // <svg viewBox="0 0 240 180" role="img" aria-label="...">...</svg>
 *   illustration("beach", { decorative: true })  // aria-hidden, for a card whose label says the same
 *   illustration("dock", { width: 320 })         // sets width and height (4:3)
 *
 *   node tools/illustrations.js                  // prints every name, its alt text and its size
 *   node tools/illustrations.js --write <dir>    // writes <name>.svg files, for review or for an <img>
 *
 * Rules the drawings keep:
 *   - Made by Chapter3 for Chapter3 pages. No traced photo, no logo, no brand, no face.
 *     No person at all: a leash runs out of the frame, a chair is empty.
 *   - The hospital sign is a navy "H", never a red cross. The red cross emblem is
 *     protected by federal law (18 U.S.C. 706).
 *   - The site palette only: navy, brass, brass ink, ivory, a soft water blue and a soft green.
 *   - 240 by 180 (4:3). Flat fills, one line weight (2), round caps. No gradients and no
 *     ids, so any number of drawings can sit on one page without a clash.
 *   - Each one is under 8 KB.
 *   - An unknown name throws.
 */
"use strict";

const C = {
  navy: "#1c2028", navy2: "#2a3040", brass: "#c4783a", brass2: "#d4894a", ink: "#91592b", tan: "#d9b48a",
  ivory: "#f4efe8", ivory2: "#ede5d8", cream: "#fbf8f2", sand: "#eedcbd", sand2: "#e2c69b",
  sky: "#e2ebe9", sun: "#f3d6b1", water: "#9fc6ce", water2: "#80b1bc", water3: "#c6e0e3",
  green: "#adc391", green2: "#87a570", green3: "#cddcb3", green4: "#6f8f5f", slate: "#5c6b78",
};

/* Small builders. Numbers are kept short so every drawing stays small. */
const n = (v) => +(+v).toFixed(1);
const R = (x, y, w, h, f, rx) => `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}"${rx ? ` rx="${rx}"` : ""} fill="${f}"/>`;
const P = (d, f) => `<path d="${d}" fill="${f}"/>`;
const O = (cx, cy, r, f) => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="${f}"/>`;
const E = (cx, cy, rx, ry, f) => `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${f}"/>`;
const L = (d, c = C.navy, w = 2) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const G = (t, body) => `<g transform="${t}">${body}</g>`;

const sky = (f = C.sky) => R(0, 0, 240, 180, f);
const sun = (cx = 186, cy = 46, r = 20) => O(cx, cy, r, C.sun);
const bird = (x, y, s = 1) => L(`M${n(x - 5 * s)} ${n(y - 2 * s)}q${n(2.5 * s)} ${n(-2 * s)} ${n(5 * s)} ${n(2 * s)}q${n(2.5 * s)} ${n(-4 * s)} ${n(5 * s)} ${n(-2 * s)}`, C.slate, 1.6);

/* A band of water or land across the frame, its top edge a gentle wave. */
function band(y, amp, waves, f, x0 = 0, x1 = 240, bottom = 180) {
  const step = (x1 - x0) / waves;
  let d = `M${x0} ${y}`;
  for (let i = 0; i < waves; i++) d += `q${n(step / 2)} ${n(i % 2 ? amp : -amp)} ${n(step)} 0`;
  return P(`${d}V${bottom}H${x0}Z`, f);
}
/* Short white ripple strokes on water. */
const ripples = (pts, c = C.cream, w = 2) => pts.map(([x, y, l]) => L(`M${x} ${y}h${l}`, c, w)).join("");

/* A round tree: trunk and a three-lobed canopy with a light side. */
function tree(x, base, s = 1, f = C.green2, hi = C.green) {
  const t = R(x - 2.5 * s, base - 18 * s, 5 * s, 18 * s, C.ink, 1);
  return t + O(x - 9 * s, base - 26 * s, 11 * s, f) + O(x + 9 * s, base - 26 * s, 11 * s, f) + O(x, base - 38 * s, 14 * s, f)
    + O(x - 4 * s, base - 41 * s, 7 * s, hi);
}
/* A pine: a trunk and three stacked triangles. */
function pine(x, base, s = 1, f = C.green4) {
  const tri = (y, w, h) => P(`M${n(x)} ${n(y - h)}L${n(x + w)} ${n(y)}H${n(x - w)}Z`, f);
  return R(x - 2 * s, base - 10 * s, 4 * s, 10 * s, C.ink) + tri(base - 8 * s, 14 * s, 22 * s) + tri(base - 20 * s, 11 * s, 20 * s) + tri(base - 31 * s, 8 * s, 17 * s);
}
/* A palmetto: a gently curved trunk and fronds fanned from the crown. */
function palm(x, base, s = 1, lean = 4) {
  const top = [x + lean * s, base - 60 * s];
  const trunk = P(`M${n(x - 3 * s)} ${n(base)}Q${n(x + lean * 0.2 * s - 2 * s)} ${n(base - 30 * s)} ${n(top[0] - 2 * s)} ${n(top[1])}h${n(4 * s)}Q${n(x + lean * 0.2 * s + 2 * s)} ${n(base - 30 * s)} ${n(x + 3 * s)} ${n(base)}Z`, C.ink);
  const fr = [[-34, 8], [-26, -10], [-10, -20], [10, -20], [26, -10], [34, 8]].map(([dx, dy], i) => {
    const ex = top[0] + dx * s, ey = top[1] + dy * s, mx = top[0] + dx * 0.55 * s, my = top[1] + (dy - 10) * s;
    return P(`M${n(top[0])} ${n(top[1])}Q${n(mx)} ${n(my - 4 * s)} ${n(ex)} ${n(ey)}Q${n(mx)} ${n(my + 6 * s)} ${n(top[0])} ${n(top[1])}Z`, i % 2 ? C.green2 : C.green4);
  }).join("");
  return trunk + fr + O(top[0], top[1], 3 * s, C.ink);
}
/* A bush: two overlapping circles. */
const bush = (x, y, s = 1, f = C.green2) => O(x - 6 * s, y, 8 * s, f) + O(x + 5 * s, y - 2 * s, 9 * s, f) + O(x + 1 * s, y - 6 * s, 4 * s, C.green);

/* ---------------------------------------------------------------------------- */

const DRAW = {};
const ALT = {};

ALT["indoor-pool"] = "Drawing of an indoor pool under a high roof with tall windows";
DRAW["indoor-pool"] = () => {
  let s = R(0, 0, 240, 180, C.ivory2);
  s += P("M0 0H240V30L120 6L0 30Z", C.cream);                              // ceiling
  s += L("M0 30L120 6L240 30", C.ink, 2) + L("M60 18V30M120 6V30M180 18V30", C.ink, 2) + L("M0 30H240", C.ink, 2);
  for (const x of [22, 72, 122, 172]) {                                     // tall windows
    s += R(x, 42, 46, 62, C.cream, 3) + R(x + 4, 46, 38, 54, C.water3, 2);
    s += O(x + 14, 92, 10, C.green) + O(x + 30, 94, 9, C.green2) + R(x + 4, 96, 38, 4, C.green2);
    s += L(`M${x + 23} 46V100M${x + 4} 70H${x + 42}`, C.cream, 2);
  }
  s += R(0, 108, 240, 72, C.sand);                                          // deck
  s += P("M14 122H226L234 170H6Z", C.water2);                               // pool
  s += P("M20 126H220L226 166H14Z", C.water);
  s += ripples([[34, 138, 18], [92, 150, 22], [150, 136, 16], [178, 156, 20], [60, 160, 14]]);
  s += L("M80 126L76 166M160 126L164 166", C.brass2, 2.4) + L("M80 126L76 166M160 126L164 166", C.cream, 2.4).replace('stroke-linecap="round"', 'stroke-dasharray="3 5"');
  s += L("M206 110V132M220 110V132M206 116H220M206 124H220", C.navy, 2.2);   // ladder
  return s;
};

ALT["outdoor-pool"] = "Drawing of an outdoor pool with lounge chairs and a beach umbrella";
DRAW["outdoor-pool"] = () => {
  let s = sky() + sun(196, 38, 18);
  s += band(96, 3, 4, C.green3) + palm(30, 112, 1.05, 5) + bush(206, 98, 1.1) + bush(186, 101, 0.8);
  s += R(0, 104, 240, 76, C.ivory);                                         // deck
  s += R(12, 116, 136, 52, C.cream, 10) + R(17, 121, 126, 42, C.water, 6);   // pool
  s += P("M17 141h126v16a6 6 0 0 1-6 6H23a6 6 0 0 1-6-6Z", C.water2);
  s += ripples([[30, 132, 18], [74, 128, 22], [100, 150, 18], [44, 154, 14]]);
  s += L("M126 112V128M134 112V128M126 117H134", C.navy, 2);                // ladder
  // umbrella
  s += L("M190 78V150", C.navy, 2.2);
  s += P("M160 86Q190 58 220 86Z", C.brass) + P("M180 86Q190 58 200 86Z", C.cream) + R(160, 85, 60, 3, C.ink, 1.5);
  // two lounge chairs, side view
  for (const x of [158, 186]) {
    s += P(`M${x} 150h26l-2 4h-24Z`, C.ink) + P(`M${x} 151l-8 -14l4 -2l8 15Z`, C.brass2);
    s += R(x - 1, 146, 28, 5, C.brass2, 2) + L(`M${x + 2} 154v10M${x + 22} 154v10`, C.navy, 2);
  }
  s += R(160, 141, 22, 5, C.cream, 2);                                      // folded towel
  return s;
};

ALT["clubhouse"] = "Drawing of a clubhouse with a porch, palm trees and a path to the door";
DRAW["clubhouse"] = () => {
  let s = sky() + sun(46, 40, 18);
  s += band(110, 3, 3, C.green3) + R(0, 120, 240, 60, C.green);
  s += palm(22, 128, 0.9, 4) + palm(220, 128, 0.95, -4);
  s += R(44, 70, 152, 54, C.cream) + P("M36 72L76 46H164L204 72Z", C.ink);    // body and roof
  s += P("M96 64L120 38L144 64Z", C.brass) + R(96, 64, 48, 60, C.cream);     // center gable
  s += O(120, 54, 6, C.water3) + L("M120 48v12M114 54h12", C.cream, 1.6);
  s += R(110, 92, 20, 32, C.navy2, 2) + R(112, 94, 7, 28, C.water2, 1) + R(121, 94, 7, 28, C.water2, 1);
  for (const x of [54, 76, 152, 174]) s += R(x, 82, 14, 20, C.water2, 1.5) + L(`M${x + 7} 82v20M${x} 92h14`, C.cream, 1.6);
  s += R(40, 120, 160, 6, C.ivory2) + R(96, 64, 48, 4, C.ink);
  for (const x of [98, 140]) s += R(x, 68, 3, 52, C.ivory2);                  // porch posts
  s += P("M108 126H132L150 180H90Z", C.sand);                              // path
  s += bush(64, 128, 1) + bush(88, 130, 0.8) + bush(156, 130, 0.8) + bush(180, 128, 1);
  return s;
};

ALT["golf-cart"] = "Drawing of a golf cart on a cart path, with a flag on the green behind";
DRAW["golf-cart"] = () => {
  let s = sky() + sun(52, 36, 16);
  s += band(92, 6, 2, C.green3) + band(108, 5, 3, C.green) + E(176, 104, 30, 6, C.green3);
  s += L("M180 104V64", C.navy, 2) + P("M180 64l16 5l-16 5Z", C.brass);        // flag on the green
  s += tree(26, 104, 0.8, C.green2) + pine(214, 100, 0.8);
  s += P("M0 150Q120 128 240 146V180H0Z", C.sand);                          // cart path
  s += R(0, 160, 240, 20, C.green2);
  // the cart, side view
  s += P("M70 74H162L166 79H66Z", C.brass) + L("M76 79V118M156 79V108", C.navy, 2.4);
  s += P("M62 118H170Q176 118 176 126V140H60V124Q60 118 66 118Z", C.cream);   // body
  s += P("M150 108H172Q178 108 178 116V122H146Z", C.cream);                   // front cowl
  s += R(86, 106, 46, 8, C.navy2, 3) + R(84, 112, 50, 6, C.navy, 2);           // seat
  s += R(126, 100, 6, 16, C.navy, 2) + L("M150 104L142 112", C.navy, 2.4);      // seat back post, wheel
  s += R(58, 96, 14, 38, C.ink, 3) + R(56, 92, 18, 6, C.brass2, 2) + L("M62 92V82M66 92V80M70 92V84", C.slate, 2); // golf bag
  s += R(60, 136, 116, 4, C.ivory2);
  for (const x of [82, 156]) s += O(x, 142, 12, C.navy) + O(x, 142, 5, C.ivory2);
  return s;
};

ALT["pickleball"] = "Drawing of a pickleball court with a net, a paddle and a ball";
DRAW["pickleball"] = () => {
  let s = sky() + R(0, 58, 240, 122, C.green);
  s += tree(30, 62, 0.75) + tree(68, 60, 0.6, C.green4, C.green2) + tree(200, 62, 0.8) + pine(170, 60, 0.7);
  s += L("M0 50H240", C.slate, 1.4) + L("M20 50V62M70 50V62M120 50V62M170 50V62M220 50V62", C.slate, 1.4);   // fence
  s += P("M60 66H180L222 172H18Z", C.water2);                               // court surround
  s += P("M70 72H170L206 164H34Z", C.water);                                // court
  s += L("M70 72H170L206 164H34ZM120 72V96M120 128V164M58 112H182", C.cream, 2);
  s += L("M60 96H180", C.cream, 2) + L("M52 128H188", C.cream, 2);           // kitchen lines
  s += P("M48 104H192V114H48Z", C.navy2) + L("M48 104H192", C.cream, 2);      // net
  s += L("M56 106V114M70 106V114M84 106V114M98 106V114M112 106V114M126 106V114M140 106V114M154 106V114M168 106V114M182 106V114", C.slate, 1);
  s += R(44, 98, 4, 18, C.navy) + R(192, 98, 4, 18, C.navy);
  // paddle and ball in front
  s += G("rotate(-28 186 150)", R(170, 124, 32, 36, C.brass, 12) + R(172, 126, 28, 32, C.brass2, 10) + R(182, 158, 8, 20, C.navy, 3));
  s += O(148, 160, 7, "#e9d36a") + O(146, 158, 1.3, C.ink) + O(151, 161, 1.3, C.ink) + O(146, 163, 1.3, C.ink);
  return s;
};

ALT["bocce"] = "Drawing of a bocce court with balls on the sand and trees behind";
DRAW["bocce"] = () => {
  let s = sky() + sun(198, 36, 15);
  s += band(70, 4, 3, C.green3) + tree(30, 80, 0.85) + tree(62, 76, 0.65, C.green4, C.green2) + pine(196, 78, 0.75) + tree(222, 80, 0.7);
  s += R(0, 78, 240, 102, C.green);
  s += P("M84 78H156L214 176H26Z", C.ink);                                 // wood border
  s += P("M90 82H150L202 170H38Z", C.sand);                                // court
  s += L("M60 140H180M80 104H160", C.sand2, 2);
  s += O(118, 104, 3.2, C.cream);                                         // the small target ball
  s += O(98, 118, 8, C.brass) + O(95, 115, 2.5, C.brass2) + O(140, 126, 8, C.navy2) + O(137, 123, 2.5, C.slate);
  s += O(110, 146, 9.5, C.brass) + O(106, 142, 3, C.brass2) + O(160, 154, 9.5, C.navy2) + O(156, 150, 3, C.slate);
  s += E(118, 107, 5, 1.4, C.sand2);
  return s;
};

ALT["beach"] = "Drawing of a beach with a striped umbrella, a chair and small waves";
DRAW["beach"] = () => {
  let s = sky() + sun(186, 44, 20) + bird(70, 34) + bird(86, 42, 0.8);
  s += R(0, 82, 240, 40, C.water2) + band(92, 2, 6, C.water) + band(112, 3, 5, C.water3);
  s += band(118, 3, 4, C.sand);
  s += L("M14 104h16M150 98h22M196 108h16M64 112h18", C.cream, 2);
  // umbrella
  s += L("M96 74L104 162", C.navy, 2.4);
  const apex = [96, 52], bot = [[50, 92], [73, 88], [96, 86], [119, 88], [142, 92]];
  for (let i = 0; i < 4; i++) {
    const [a, b] = [bot[i], bot[i + 1]];
    const ca = [apex[0] + (a[0] - apex[0]) * 1.08, apex[1] + (a[1] - apex[1]) * 0.35];
    const cb = [apex[0] + (b[0] - apex[0]) * 1.08, apex[1] + (b[1] - apex[1]) * 0.35];
    s += P(`M${apex[0]} ${apex[1]}Q${n(ca[0])} ${n(ca[1])} ${a[0]} ${a[1]}Q${n((a[0] + b[0]) / 2)} ${n(Math.max(a[1], b[1]) - 7)} ${b[0]} ${b[1]}Q${n(cb[0])} ${n(cb[1])} ${apex[0]} ${apex[1]}Z`, i % 2 ? C.cream : C.brass);
  }
  s += O(96, 51, 3, C.ink);
  // chair and towel
  s += P("M128 146l26 -2l4 16l-26 2Z", C.brass2) + L("M131 160l-5 10M157 158l4 10M130 147l-6 -18", C.navy, 2) + P("M124 129l8 -1l6 18l-8 1Z", C.brass2);
  s += G("rotate(-6 54 150)", R(30, 142, 48, 18, C.water2, 2) + R(30, 147, 48, 3, C.cream) + R(30, 153, 48, 3, C.cream));
  s += P("M198 168q4 -16 2 -30M206 168q0 -12 6 -24M190 168q-2 -10 -8 -20", C.none) + L("M198 168q4 -16 2 -30M206 168q0 -12 6 -24M190 168q-2 -10 -8 -20", C.green4, 2);
  s += E(200, 140, 2.5, 5, C.tan) + E(213, 145, 2.5, 5, C.tan) + E(182, 149, 2.5, 5, C.tan);
  return s;
};

ALT["fishing-pond"] = "Drawing of a pond with a small wooden dock, reeds and a fishing rod";
DRAW["fishing-pond"] = () => {
  let s = sky() + sun(60, 40, 16);
  s += tree(150, 82, 0.7) + tree(176, 84, 0.85) + pine(204, 82, 0.8) + tree(226, 84, 0.6, C.green4, C.green2) + tree(18, 84, 0.6);
  s += band(80, 3, 3, C.green3) + R(0, 86, 240, 94, C.green);
  s += E(128, 128, 112, 36, C.water2) + E(128, 126, 106, 32, C.water);
  s += ripples([[150, 112, 20], [186, 130, 16], [120, 144, 22], [168, 150, 14]]);
  s += P("M0 136L96 118H106L22 160H0Z", C.ink);                            // dock deck
  s += L("M14 140L102 120", C.brass2, 2) + L("M10 150L60 138M30 154L84 132", C.tan, 1.4);
  s += R(92, 118, 4, 16, C.navy2) + R(40, 136, 4, 18, C.navy2) + R(70, 128, 4, 18, C.navy2);
  s += L("M46 134L130 66", C.navy, 2) + L("M130 66Q150 92 152 126", C.slate, 1.2);   // rod and line
  s += O(152, 126, 3.5, C.brass) + P("M148.5 126a3.5 3.5 0 0 0 7 0Z", C.cream);
  s += L("M206 150V112M214 152V104M222 150V116M198 152V120", C.green4, 2);   // reeds
  s += E(214, 104, 2.6, 7, C.ink) + E(206, 112, 2.4, 6, C.ink) + E(222, 116, 2.4, 6, C.ink);
  s += L("M196 152q8 -22 2 -40M228 154q-6 -18 0 -34", C.green2, 2);
  return s;
};

ALT["dog-walk"] = "Drawing of a dog on a leash on a path between trees, with a bench";
DRAW["dog-walk"] = () => {
  let s = sky() + sun(194, 40, 16);
  s += band(84, 4, 3, C.green3) + tree(24, 96, 0.9) + pine(58, 92, 0.7) + tree(212, 96, 1) + R(0, 94, 240, 86, C.green);
  s += P("M100 94H140Q150 130 190 180H40Q80 130 100 94Z", C.sand);           // path
  // bench
  s += R(150, 100, 44, 5, C.ink, 2) + R(150, 108, 44, 5, C.ink, 2) + L("M154 113V124M190 113V124M152 98v-2M192 98v-2", C.navy, 2) + R(150, 92, 44, 5, C.brass, 2);
  // dog: body, head, ears, legs and tail, side view, facing right
  const d = [];
  d.push(P("M84 128Q84 118 96 118H122Q134 118 134 128V132Q134 138 128 138H90Q84 138 84 132Z", C.brass));
  d.push(P("M124 120Q124 104 136 102Q150 100 152 110L158 114Q160 120 152 121L146 122Q140 128 128 126Z", C.brass));
  d.push(P("M134 104Q128 100 128 112Q132 116 138 110Z", C.ink));
  d.push(O(146, 110, 1.8, C.navy) + O(158, 115, 2.2, C.navy));
  d.push(R(90, 134, 6, 22, C.brass, 3) + R(100, 134, 6, 20, C.ink, 3) + R(116, 134, 6, 20, C.ink, 3) + R(124, 134, 6, 22, C.brass, 3));
  d.push(L("M85 124Q72 118 74 104", C.brass, 5));
  d.push(R(126, 116, 12, 4, C.navy, 2));                                   // collar
  s += d.join("");
  s += L("M136 118Q150 70 172 0", C.navy, 2);                               // leash, held out of frame
  s += bush(28, 140, 1.1) + bush(214, 146, 1.2);
  return s;
};

ALT["card-table"] = "Drawing of a card table seen from above, with playing cards, chips and two cups of coffee";
DRAW["card-table"] = () => {
  let s = R(0, 0, 240, 180, C.ivory2) + L("M0 30H240M0 150H240", C.sand2, 1) ;
  s += E(120, 92, 104, 76, C.ink) + E(120, 90, 96, 70, C.green2) + E(120, 90, 88, 63, C.green);
  const card = (x, y, r, suit, col) => G(`rotate(${r} ${x + 13} ${y + 18})`, R(x, y, 26, 36, C.cream, 3) + R(x, y, 26, 36, "none", 3).replace('fill="none"', 'fill="none" stroke="#e2c69b"') + suit(x + 13, y + 18, col));
  const heart = (x, y, c) => P(`M${x} ${y + 6}l-6 -6a3.4 3.4 0 0 1 6 -4a3.4 3.4 0 0 1 6 4Z`, c);
  const diamond = (x, y, c) => P(`M${x} ${y - 7}l5 7l-5 7l-5 -7Z`, c);
  const spade = (x, y, c) => P(`M${x} ${y - 7}l6 7a3.4 3.4 0 0 1 -6 3a3.4 3.4 0 0 1 -6 -3ZM${x} ${y + 1}l2.5 6h-5Z`, c);
  const club = (x, y, c) => O(x, y - 4, 3.2, c) + O(x - 3.6, y + 1.5, 3.2, c) + O(x + 3.6, y + 1.5, 3.2, c) + P(`M${x} ${y}l2.5 7h-5Z`, c);
  s += card(78, 66, -18, heart, C.brass) + card(96, 62, -6, spade, C.navy) + card(114, 62, 6, diamond, C.brass) + card(132, 66, 18, club, C.navy);
  s += card(150, 112, 70, heart, C.brass) + card(56, 108, -64, club, C.navy);
  for (const [x, y, c] of [[100, 128, C.navy2], [108, 132, C.brass], [116, 128, C.cream], [132, 130, C.navy2], [140, 126, C.brass]]) s += O(x, y, 6, c) + O(x, y, 3, "none").replace('fill="none"', `fill="none" stroke="${c === C.cream ? C.sand2 : C.cream}" stroke-width="1.2"`);
  for (const [x, y] of [[34, 40], [206, 142]]) s += O(x, y, 14, C.cream) + O(x, y, 10, C.ink) + O(x, y, 8, "#6b4a2e") + P(`M${x + 12} ${y - 4}h6a4 4 0 0 1 0 8h-6`, "none").replace('fill="none"', `fill="none" stroke="${C.cream}" stroke-width="3"`);
  s += G("rotate(8 196 40)", R(180, 22, 32, 40, C.cream, 2) + L("M186 32h20M186 40h20M186 48h14", C.slate, 1.2)) + L("M218 30L204 62", C.brass, 2.4);
  return s;
};

ALT["walking-path"] = "Drawing of a walking path winding between trees";
DRAW["walking-path"] = () => {
  let s = sky() + sun(122, 46, 18) + bird(60, 32) + bird(178, 30, 0.8);
  s += band(84, 5, 3, C.green3) + R(0, 92, 240, 88, C.green);
  s += pine(20, 92, 0.9) + tree(56, 94, 0.75, C.green4, C.green2) + tree(186, 92, 0.8) + pine(222, 94, 1);
  s += P("M116 90H126Q140 104 120 118Q92 138 128 158Q150 170 156 180H72Q60 160 92 140Q118 122 112 108Q106 98 116 90Z", C.sand);
  s += tree(34, 156, 1.2) + tree(212, 160, 1.3, C.green4, C.green2) + pine(176, 140, 0.9) + bush(70, 120, 0.8) + bush(160, 116, 0.7);
  s += L("M54 168l-4 -8M60 170l2 -9M198 172l-3 -8", C.green4, 2);
  return s;
};

ALT["dock"] = "Drawing of a boat tied to a dock on the Intracoastal Waterway, with marsh grass across the water";
DRAW["dock"] = () => {
  let s = sky() + sun(56, 42, 16) + bird(150, 30) + bird(166, 38, 0.8);
  s += tree(140, 82, 0.6, C.green4, C.green2) + tree(164, 82, 0.7, C.green4, C.green2) + tree(222, 82, 0.6, C.green4, C.green2);
  s += band(78, 2, 4, C.green2) + band(84, 2, 6, C.green3, 0, 240, 92);
  s += R(0, 90, 240, 90, C.water) + band(124, 3, 5, C.water2);
  s += ripples([[20, 102, 22], [120, 98, 18], [196, 108, 24], [60, 150, 18], [170, 168, 24]]);
  // dock running in from the right, pilings
  s += P("M240 112H150L138 126H240Z", C.ink) + L("M150 112H240", C.brass2, 2) + L("M160 118H240M150 123H240", C.tan, 1.2);
  for (const x of [152, 186, 222]) s += R(x, 104, 6, 34, C.navy2, 2) + R(x, 104, 6, 3, C.slate, 1);
  s += L("M155 112q-12 6 -24 18", C.ivory2, 1.6);                           // rope
  // boat
  s += P("M30 124H134L126 146Q120 150 110 150H52Q40 150 34 140Z", C.cream);
  s += P("M33 130H133L131 136H36Z", C.brass);
  s += R(80, 108, 22, 16, C.navy2, 2) + R(84, 111, 14, 6, C.water3, 1) + L("M76 104H110M90 104V96", C.navy, 2);
  s += R(52, 116, 16, 8, C.ivory2, 2) + R(114, 118, 12, 6, C.ivory2, 2);
  s += L("M40 156h30M90 158h40", C.water3, 2);
  s += R(14, 64, 4, 36, C.navy2) + R(8, 56, 16, 12, C.green4, 1);            // channel marker
  return s;
};

ALT["grocery"] = "Drawing of a paper grocery bag with bread, greens and fruit";
DRAW["grocery"] = () => {
  let s = R(0, 0, 240, 180, C.ivory2) + O(120, 92, 70, C.sky);
  s += R(0, 150, 240, 30, C.sand) + L("M0 150H240", C.sand2, 2);
  s += G("rotate(14 128 60)", R(116, 20, 18, 74, C.brass2, 9) + L("M121 34l8 -4M121 46l8 -4M121 58l8 -4", C.ink, 2));   // bread
  s += P("M86 60Q80 30 96 36Q100 22 108 40Q118 30 112 64Z", C.green2) + P("M94 62Q92 42 100 44Q104 50 102 64Z", C.green4);   // greens
  s += P("M140 62Q150 36 164 42Q156 52 150 64Z", C.green4) + R(146, 56, 10, 14, C.brass, 3);                                // carrot top
  s += P("M78 62H162L168 158H72Z", C.tan) + P("M78 62H162L163 74H77Z", C.sand2);                                          // bag
  s += L("M98 92q22 14 44 0", C.ink, 2);
  s += O(180, 144, 13, C.brass) + O(176, 139, 4, C.brass2) + L("M180 131q2 -6 6 -7", C.green4, 2);   // orange
  s += O(56, 146, 12, "#b5523a") + O(52, 141, 3.5, "#cf7055") + L("M56 134q-1 -5 3 -7", C.ink, 2) + P("M58 131q6 -6 10 -2q-6 4 -10 2Z", C.green2); // apple
  return s;
};

ALT["hospital"] = "Drawing of a hospital building with an entrance canopy and an H sign";
DRAW["hospital"] = () => {
  let s = sky() + sun(208, 36, 14);
  s += band(126, 3, 3, C.green3) + R(0, 134, 240, 46, C.green);
  s += R(34, 50, 92, 90, C.cream) + R(126, 30, 80, 110, C.ivory2) + R(34, 46, 92, 6, C.slate) + R(126, 26, 80, 6, C.slate);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) s += R(42 + c * 21, 60 + r * 16, 14, 9, C.water2, 1.5);
  for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) s += R(136 + c * 22, 40 + r * 15, 16, 9, C.water2, 1.5);
  s += R(132, 108, 68, 32, C.ivory2) + R(150, 112, 32, 28, C.water2, 1) + L("M166 112V140", C.cream, 2);   // entrance doors
  s += R(138, 102, 56, 7, C.navy2, 2) + L("M142 109V128M190 109V128", C.navy, 2);                          // canopy
  s += R(50, 22, 30, 30, C.navy2, 4) + L("M58 30V44M72 30V44M58 37H72", C.cream, 3) + R(63, 52, 4, 0, C.navy);  // H sign
  s += R(64, 40, 0, 0, C.navy);
  s += L("M65 52V50", C.navy, 2);
  s += P("M150 140H182L196 180H136Z", C.sand) + bush(24, 140, 1) + bush(104, 142, 0.9) + bush(218, 142, 1) + tree(12, 136, 0.7);
  return s;
};

/* ---------------------------------------------------------------------------- */

const ALIASES = {
  "indoor": "indoor-pool", "pool": "outdoor-pool", "swimming-pool": "outdoor-pool", "lounge": "outdoor-pool",
  "club": "clubhouse", "golf": "golf-cart", "cart": "golf-cart", "golf-carts": "golf-cart",
  "tennis": "pickleball", "court": "pickleball", "pickleball-court": "pickleball", "bocce-court": "bocce",
  "ocean": "beach", "pond": "fishing-pond", "fishing": "fishing-pond", "ponds": "fishing-pond",
  "dog": "dog-walk", "dogs": "dog-walk", "pets": "dog-walk", "dog-park": "dog-walk",
  "cards": "card-table", "games": "card-table", "game-table": "card-table", "card-games": "card-table",
  "trail": "walking-path", "walking": "walking-path", "walking-trail": "walking-path", "paths": "walking-path",
  "boat": "dock", "boat-dock": "dock", "marina": "dock", "waterway": "dock",
  "groceries": "grocery", "grocery-bag": "grocery", "shopping": "grocery",
  "doctor": "hospital", "medical": "hospital",
};

const ILLUSTRATION_NAMES = Object.keys(DRAW);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function resolve(name) {
  const k = String(name || "").trim().toLowerCase().replace(/[\s_/]+/g, "-");
  const key = DRAW[k] ? k : ALIASES[k];
  if (!key) throw new Error(`illustrations.js: no illustration named "${name}". Names: ${ILLUSTRATION_NAMES.join(", ")}`);
  return key;
}

/*
 * The inline SVG. Options:
 *   alt         replaces the built-in alt text (role="img" with this aria-label)
 *   decorative  true: aria-hidden, no label (use when the words next to it say the same)
 *   width       sets width and height attributes (height = width * 3/4)
 *   style       extra inline CSS on the <svg>
 */
function illustration(name, opts = {}) {
  const key = resolve(name);
  const body = DRAW[key]();
  const a11y = opts.decorative ? 'aria-hidden="true" focusable="false"' : `role="img" aria-label="${esc(opts.alt || ALT[key])}"`;
  const size = opts.width ? ` width="${+opts.width}" height="${Math.round(+opts.width * 0.75)}"` : "";
  const style = opts.style ? ` style="${esc(opts.style)}"` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180"${size} ${a11y}${style}>${body}</svg>`;
}

const illustrationAlt = (name) => ALT[resolve(name)];

module.exports = { illustration, illustrationAlt, ILLUSTRATION_NAMES, ALIASES, resolveIllustration: resolve, PALETTE: C };

if (require.main === module) {
  const i = process.argv.indexOf("--write");
  if (i > 0) {
    const fs = require("fs"), path = require("path");
    const dir = process.argv[i + 1];
    if (!dir) throw new Error("--write needs a folder");
    fs.mkdirSync(dir, { recursive: true });
    for (const k of ILLUSTRATION_NAMES) fs.writeFileSync(path.join(dir, `${k}.svg`), illustration(k));
    console.log(`wrote ${ILLUSTRATION_NAMES.length} files to ${dir}`);
  } else {
    for (const k of ILLUSTRATION_NAMES) {
      const al = Object.keys(ALIASES).filter((a) => ALIASES[a] === k);
      console.log(`${k.padEnd(14)} ${String(Buffer.byteLength(illustration(k))).padStart(5)} bytes  ${ALT[k]}${al.length ? `  (also: ${al.join(", ")})` : ""}`);
    }
  }
}
