# Preview fixtures

`filters.json` is the live filter list of 2026-10-31 (https://chapter3realty.com/homes/api/filters), in the CRM shape, for `tools/preview.mjs`.

Sample photos are at `https://photos.test/<n>.jpg`. In Playwright, answer them with a plain colour:

```js
const svg = (i) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300"><rect width="480" height="300" fill="hsl(${30 + i * 37},30%,72%)"/></svg>`;
await page.route("https://photos.test/**", (r) => r.fulfill({ contentType: "image/svg+xml", body: svg(+((r.request().url().match(/(\d+)\.jpg/) || [0, 1])[1])) }));
await page.route(/googletagmanager|google-analytics|challenges\.cloudflare|api-proxy/, (r) => r.abort());
```

Google Maps loads with no key in the preview and shows its own error; the list beside the map still works.
