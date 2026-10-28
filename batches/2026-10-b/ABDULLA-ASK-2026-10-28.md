# For Abdulla's Claude: sign-in with Google, new filters, our own filters

Paste everything below the line into Abdulla's Claude. It asks for work on a branch, never on `main`.

---

This is the Chapter3 website team. The website reads the CRM through the IDX contract in `docs/website-listing-api.md` (contract v1, Ticket 471 filters). Please do this work on a new branch and open a pull request. Do not merge to `main`; the owner and Abdulla decide that.

## 0. For your information: photo copies

The owners decided the website keeps its own copy of each listing photo (`/homes/p/card`, `/homes/p/big`), resized and kept 30 days, because the Trestle media limit (240 a minute) made photos fail. Contract rule 7 ("photos are hotlinked only") no longer applies; please update `docs/website-listing-api.md` to say so. Nothing else is needed from the CRM.

## 1. Sign in with Google (the owner wants this)

The owner wants a visitor to sign in with Google, with no text code. The website will show Google's own button and send you the ID token Google gives the browser.

Please add `POST /api/idx/google`, the same shape as `/api/idx/claim`:

- Request: `{ "credential": "<Google ID token>", "termsAccepted": true, "termsVersion": "<current>", "page": "/homes/map/" }`
- Verify the token on the server with Google's public keys (for example `google-auth-library`, `verifyIdToken`):
  - `aud` equals our Google client ID (an environment variable, `GOOGLE_CLIENT_ID`; the owner creates it in Google Cloud);
  - `iss` is `accounts.google.com` or `https://accounts.google.com`;
  - the token has not expired;
  - `email_verified` is true.
- Find the lead by that email, or create one (source "Website, Google sign-in"). Record the terms acceptance as `/claim` does.
- Answer: `{ "ok": true, "token": "<visitor token>", "firstName": "..." }`, the same visitor token as `/claim`. Errors: `bad_token`, `terms_required`, `rate_limited`.
- Rate limit by IP, as `/returning` is.
- Never store the Google token itself. A Google sign-in carries no phone number and no text consent; the lead has none until the visitor gives them.

## 2. Signing back in with a phone number

The owner asked whether a phone number alone could sign a visitor back in, with no code. Please keep `/api/idx/returning` as it is (phone and first name). A phone number alone lets anyone who knows a number open that person's saved homes and act as that lead in the CRM. If you see a safe way to make it shorter, tell us and we will change the website to match.

## 3. New filters the website needs

The website's search box now reads sentences ("fixer upper in Conway", "rental homes near the beach"). These words have no filter yet. Please add them to `/api/idx/filters` and to the search, as `has` and `not` keys, counted like the others:

| Key | Label | How to read it |
|---|---|---|
| `fixer_upper` | Needs work | Remarks say "as is", "as-is", "TLC", "handyman", "investor special", "needs work", "fixer", "bring your tools"; or a distressed sale built before 1990 |
| `renovated` | Renovated or updated | Remarks say "renovated", "remodeled", "updated kitchen", "new kitchen", "new baths" |
| `move_in_ready` | Move-in ready | Remarks say "move-in ready", "turnkey" (not new construction) |
| `new_roof` | New roof | Remarks say "new roof" or a roof year within 5 years |
| `new_hvac` | New heating and air | Remarks say "new HVAC", "new AC", "new heat pump" |
| `flood_zone_x` | Flood zone X | `FloodZone` is X (or X500, shaded X) |
| `cul_de_sac` | On a cul-de-sac | `LotFeatures` or remarks |
| `corner_lot` | Corner lot | `LotFeatures` |
| `first_floor_unit` | First-floor condo | Condos whose unit is on the ground or first floor |
| `end_unit` | End unit | Townhouses and condos |
| `pets_allowed` | Pets allowed | `PetsAllowed` is not "No" |
| `elevator` | Elevator | Building or home has one |

Landmarks for the jobs guide ("homes near major employers"), each with `_1mi`, `_2mi`, `_5mi`, `_10mi` like the others:

- `coastal_carolina_university` (Conway)
- `horry_georgetown_tech_conway` (Horry-Georgetown Technical College, Conway campus)
- `horry_county_government_center` (Conway)
- `myrtle_beach_convention_center`

## 4. Our own filters

The owner asked whether we can make our own filters and add them to your list ("single story", for example; that one is `one_level` today). Please let the website team define filters as rules in one file in the CRM, for example `config/custom-filters.json`:

```json
[
  { "key": "fixer_upper", "label": "Needs work", "group": "market",
    "anyRemarks": ["as is", "as-is", "tlc", "handyman", "investor special", "needs work", "fixer"] },
  { "key": "single_story_pool", "label": "One level with a pool", "group": "outside",
    "allOf": ["one_level", "pool"] }
]
```

Your counter would read the file every 6 hours with the rest, list each rule in `/api/idx/filters` and apply it in the search like any other key. We would send changes to that file as pull requests on a branch, for Abdulla to review.

## 5. Saved searches (later)

When a visitor is signed in, the map page will offer "Save this search". Please add, when you have time:

- `POST /api/idx/searches` `{ "params": "<the search's query string>", "name": "..." }` → `{ ok, id }`
- `GET /api/idx/searches` → `{ ok, searches: [{ id, name, params, createdAt }] }`
- `DELETE /api/idx/searches/:id`

New-listing emails for a saved search would be the CRM's, with the owner's approval of the wording.
