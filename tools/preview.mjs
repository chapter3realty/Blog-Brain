#!/usr/bin/env node
/*
 * preview.mjs - show the website as it will look live, on this machine, with sample homes.
 *
 *   node tools/preview.mjs <website-repo> [--port 8767] [--slow 0]
 *
 * Runs the site's own middleware (functions/_middleware.js) and listing search
 * (functions/homes/[[path]].js) against a stand-in CRM: sample homes only, no key, no
 * real visitor data. The filter list is the live list of 2026-10-31 (fixtures/preview/
 * filters.json). --slow N holds every listings answer N ms, to see loading states.
 * Signed in: send the cookie c3_idx=<DEV> (printed at start). Photos point at
 * https://photos.test/<n>.jpg; route them in Playwright (see fixtures/preview/README.md).
 *
 * It replaced a scratch copy that a container restart deleted (2026-11-01); keep it here.
 */
import http from "node:http"; import zlib from "node:zlib"; import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const WEB = path.resolve(argv.find((a) => !a.startsWith("--") && !/^\d+$/.test(a)) || ".");
const opt = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const PORT = +opt("--port", 8767), SLOW = +opt("--slow", 0);
const ROOT = path.join(WEB, "chapter3realty");
const HERE = path.dirname(new URL(import.meta.url).pathname);
const FILTERS = JSON.parse(fs.readFileSync(path.join(HERE, "fixtures", "preview", "filters.json"), "utf8"));
const DEV = "eyJ2aXNpdG9ySWQiOiJ2MSIsInRlcm1zVmVyc2lvbiI6InYxLWRyYWZ0LTEiLCJleHBpcmVzQXQiOjk5OTk5OTk5OTl9.c2ln";
const META = { source: "Coastal Carolinas Association of REALTORS® Multiple Listing Service (CCMLS)", disclaimer: "Information is deemed reliable but not guaranteed.", refreshedAt: "2026-10-26T14:05:00Z", fresh: true };
const STREETS = ["Palm Frond Dr.", "Portsmith Dr.", "Eastport Landing Dr.", "Seabrook Ln.", "Heron Cove Ct.", "Live Oak Rd.", "Marsh Hen Way", "Dunes Pkwy", "Pelican Pt.", "Tidewater Cir."];
const TOWNS = ["Myrtle Beach", "Conway", "North Myrtle Beach", "Surfside Beach", "Little River", "Murrells Inlet"];
const SUBS = ["SingleFamilyResidence", "SingleFamilyResidence", "Townhouse", "Condominium", "SingleFamilyResidence"];

const home = (i, q) => {
  const beds = q.get("beds") ? +q.get("beds") + (i % 2) : 2 + (i % 4);
  const max = +q.get("max") || 900000, min = +q.get("min") || 150000;
  const price = Math.round((min + ((i * 37) % 23) / 23 * (max - min)) / 1000) * 1000;
  const type = q.get("type") === "condo" ? "Condominium" : q.get("type") === "townhouse" ? "Townhouse" : q.get("type") === "land" ? "Land" : SUBS[i % 5];
  const land = type === "Land";
  const [la, ln] = (q.get("near") || "").split(",").map(Number);
  return {
    mlsNumber: String(2626000 + i), status: "Active", listPrice: price, beds: land ? null : beds, baths: land ? null : Math.max(1, beds - 1) + (i % 2 ? 0.5 : 0),
    sqft: land ? null : 900 + beds * 380 + i * 7, lotAcres: land ? 0.3 + i / 10 : null, yearBuilt: land ? null : 1978 + ((i * 5) % 48),
    propertyType: land ? "Land" : "Residential", propertySubType: type, address: `${110 + i * 17} ${STREETS[i % 10]}`, city: q.get("city") || TOWNS[i % TOWNS.length],
    state: "SC", postalCode: "29577", subdivision: "Sample", waterfront: q.get("waterfront") === "1" ? true : i % 7 === 0,
    photo: `https://photos.test/${i % 9}.jpg`, photoCount: 24, listingFirm: ["Coastal Sample Realty", "Strand Sample Homes", "Sample Brokers of SC"][i % 3],
    point: { lat: (la || 33.70) + ((i * 13) % 29 - 14) / 300, lng: (ln || -78.92) + ((i * 7) % 31 - 15) / 300 },
    ...(q.get("near") ? { miles: Math.round((0.2 + i * 0.27) * 10) / 10 } : {}),
  };
};

const realFetch = globalThis.fetch;
globalThis.fetch = async (input, init = {}) => {
  const u = new URL(typeof input === "string" ? input : input.url);
  const J = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json" } });
  if (u.hostname === "geocoding.geo.census.gov") return J({ result: { addressMatches: [] } });
  if (u.hostname !== "app.chapter3realty.com") return realFetch(input, init);
  const auth = init.headers && (init.headers.authorization || init.headers.Authorization);
  if (SLOW && u.pathname.startsWith("/api/idx/listings")) await new Promise((r) => setTimeout(r, SLOW));
  if (u.pathname === "/api/idx/filters") return J({ ...FILTERS, meta: META, forSale: 9000 });
  if (u.pathname === "/api/idx/claim") { const b = JSON.parse(init.body); if (!/^[A-Za-z0-9]{12}$/.test(b.k || "")) return J({ ok: false, error: "link_expired" }); return b.termsAccepted ? J({ ok: true, token: DEV, firstName: "Test", dryRun: true }) : J({ ok: true, needsTerms: true, firstName: "Test" }); }
  if (u.pathname === "/api/idx/returning") { const b = JSON.parse(init.body); return b.firstName === "Nobody" ? J({ ok: false, error: "not_found" }) : J({ ok: true, token: DEV, dryRun: true }); }
  if (u.pathname === "/api/idx/register") return J({ ok: true, token: DEV, dryRun: true });
  if (u.pathname === "/api/idx/views") return J({ ok: true, updated: 0 });
  if (u.pathname === "/api/idx/hearts") return (init.method || "GET") === "GET" ? J({ ok: true, visitor: "valid", hearts: [] }) : J({ ok: true, loved: JSON.parse(init.body).loved, saved: false });
  if (u.pathname === "/api/idx/listings") {
    const n = 34, size = Math.min(+u.searchParams.get("size") || 24, n);
    const ls = Array.from({ length: size }, (_, i) => home(i, u.searchParams));
    return J({ ok: true, tier: auth ? "registered" : "public", visitor: auth ? "valid" : "none", meta: META, listings: ls, total: n, page: 1, pageSize: ls.length });
  }
  const one = /^\/api\/idx\/listings\/(\w+)$/.exec(u.pathname);
  if (one) {
    const i = Math.abs(+one[1] - 2626000) % 34, l = { ...home(i, new URLSearchParams()), mlsNumber: one[1] };
    const full = auth ? { ...l, photos: Array.from({ length: 12 }, (_, k) => ({ url: `https://photos.test/${(i + k) % 9}.jpg`, caption: "" })), remarks: "A sample home for the preview. Fenced yard, new roof, two-car garage, screened porch.", details: { Appliances: ["Dishwasher", "Range"], AssociationFee: 120 }, openHouses: [] } : l;
    return J({ ok: true, tier: auth ? "registered" : "public", visitor: auth ? "valid" : "none", meta: META, listing: full, viewId: null });
  }
  if (u.pathname === "/api/idx/sitemap") return J({ ok: true, meta: META, total: 0, listings: [] });
  return J({ ok: false, error: "not_found" }, 404);
};

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain", ".ico": "image/x-icon" };
const ASSETS = { fetch: async (req) => {
  const p = decodeURIComponent(new URL(req.url).pathname);
  let f = p.endsWith("/") ? path.join(ROOT, p, "index.html") : path.join(ROOT, p);
  if (!fs.existsSync(f) && fs.existsSync(path.join(f, "index.html"))) f = path.join(f, "index.html");
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || !fs.statSync(f).isFile()) return new Response("not found", { status: 404, headers: { "content-type": "text/html" } });
  return new Response(fs.readFileSync(f), { headers: { "content-type": TYPES[path.extname(f)] || "application/octet-stream" } });
} };
const ENV = { IDX_LIVE: "1", IDX_DEV_KEY: "devkey", DEALS_KEY: "preview-only", ASSETS };
const { onRequest: mw } = await import(pathToFileURL(path.join(WEB, "functions", "_middleware.js")).href);
const { onRequest: homes } = await import(pathToFileURL(path.join(WEB, "functions", "homes", "[[path]].js")).href);

http.createServer(async (rq, rs) => {
  try {
    const chunks = []; for await (const c of rq) chunks.push(c);
    const req = new Request(`https://chapter3realty.com${rq.url}`, { method: rq.method, headers: { ...rq.headers, origin: "https://chapter3realty.com" }, body: ["GET", "HEAD"].includes(rq.method) ? undefined : Buffer.concat(chunks) });
    const ctx = { request: req, env: ENV, waitUntil() {} };
    const res = new URL(req.url).pathname.startsWith("/homes") ? await homes(ctx) : await mw({ ...ctx, next: async () => ASSETS.fetch(req) });
    const h = {}; res.headers.forEach((v, k) => { if (k !== "content-length" && k !== "content-encoding") h[k] = k === "location" ? v.replace("https://chapter3realty.com", `http://localhost:${PORT}`) : v; });
    let body = Buffer.from(await res.arrayBuffer());
    if (/text|javascript|json|svg|xml/.test(h["content-type"] || "") && /gzip/.test(rq.headers["accept-encoding"] || "")) { body = zlib.gzipSync(body); h["content-encoding"] = "gzip"; }
    rs.writeHead(res.status, h); rs.end(body);
  } catch (e) { rs.writeHead(500); rs.end(String(e && e.stack)); }
}).listen(PORT, () => console.log(`preview of ${WEB} on http://localhost:${PORT} (signed-in cookie c3_idx=${DEV})`));
