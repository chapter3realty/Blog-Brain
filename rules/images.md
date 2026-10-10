# Image rules

What pictures a Chapter3 page may use, how to credit them, and what to do if someone objects. `tools/photos.js` refuses a photo that breaks the license rules. The rest is checked by the person who picks the photo and by the reviewer.

The owner asked on 2026-10-10: "Are we making sure we cant get trademarked or sued for the images though?" These rules are the answer. They are not legal advice. When a case is not covered here, ask the owner before the page ships.

## What we may use

1. **Our own photos.** Taken by Chapter3 staff for Chapter3. Record them in `photos.json` with `"license": "own"`, the photographer as author, and where and when it was taken as source. See `templates/photo-shot-list.md`.
2. **Public domain and CC0 photos.** No permission is needed. We credit them anyway.
3. **CC BY and CC BY-SA photos.** Any version (2.0, 2.5, 3.0, 4.0). We must credit them as the license says (below).
4. **Our drawings.** The spot drawings in `tools/illustrations.js` were made for Chapter3. They show a kind of place, never a real one.

Where a photo may come from: Wikimedia Commons, and only when the person who uploaded it took it ("Own work"), or the source is a government agency or an institution that holds the rights. A photo copied to Commons from Flickr or Panoramio passed a license check, but the uploader is not the author. Do not add more of those. Never take a photo from a website, a search result or a social post.

Every photo is at least 1200 pixels wide, so it stays sharp on a phone.

## What we never use

- A builder's, developer's or HOA's photo, even if it is on their public website.
- A listing photo, an MLS photo, or a photo from Zillow, Realtor.com or any listing site.
- A news photo.
- Google Maps, Street View or Google Earth images, or any screenshot of them.
- A stock photo with a person in it, unless the license page shows a model release.
- A photo whose subject is a logo, a brand sign, a storefront name or a product.
- A photo whose subject is a person who could be recognized.
- A photo whose subject is a statue, a mural or other artwork (see "Buildings and art" below).
- An AI image that looks like a real place or a real person. A made-up picture is never shown as the real place (PLAIN-4).
- Anything licensed NC (non-commercial) or ND (no derivatives). A real estate page is commercial. NC is never allowed.
- Anything with no clear license.
- The red cross emblem. Federal law reserves it for the Red Cross and the military medical services ([18 U.S.C. 706](https://www.law.cornell.edu/uscode/text/18/706)). The hospital drawing uses an "H".

## How to credit

Every photo has a full record in `photos.json`: source page, author, license, license link, credit line, and the title of the photo. `photos.js` throws if any of these is missing.

On the page, each photo gets two credits:

1. A tiny line on the photo itself: "Photo: Author, CC BY-SA 4.0", with the license linked.
2. A line in the "Photo credits" block at the end of the page: the photo's title linked to its source page, the author, the license linked to its deed, and "via Wikimedia Commons".

The credits block ends with: "Chapter3 Realty resized these photos, and some are shown cropped." The 4.0 licenses require us to say when we change a photo ([CC BY 4.0, section 3(a)](https://creativecommons.org/licenses/by/4.0/legalcode.en#s3a)). The Creative Commons FAQ names cropping as a change to note ([FAQ: how to attribute](https://creativecommons.org/faq/#how-do-i-properly-attribute-material-offered-under-a-creative-commons-license)). The same section allows the credit "in any reasonable manner based on the medium", so a credits block at the end of the page is enough.

CC0 and public domain photos need no credit. We give one anyway. It shows the reader where the photo came from.

## Cropping a CC BY-SA photo

- Resizing a photo or saving it as WebP is a change of format. The license allows it, and it does not make a new work ([CC BY-SA 4.0, section 2(a)(4)](https://creativecommons.org/licenses/by-sa/4.0/legalcode.en#s2a4)).
- A crop may make a new work, called adapted material. If it does, the cropped version must be shared under the same license, BY-SA ([CC BY-SA 4.0, section 3(b)](https://creativecommons.org/licenses/by-sa/4.0/legalcode.en#s3b)).
- Our pages crop with the browser (the file is not cut). We still say so in the credits block, and the credits block says a cropped BY-SA photo is shared under the same license.
- If a photo file is ever cut, painted on or combined with other images, that file is BY-SA. Note it in the record.
- BY-SA covers only the photo. It does not cover the page around it.

## Buildings and art

US copyright law lets anyone photograph a building and publish the photo, if the building can be seen from a public place ([17 U.S.C. 120(a)](https://www.law.cornell.edu/uscode/text/17/120)). So a photo of a clubhouse, a church or a city hall taken from a public road is fine.

This covers buildings only. It does not cover a statue, a mural, a sculpture or other art, even outdoors. A photo whose subject is that art copies the art. Leave it out, or make sure it is small and in the background.

Inside a gated or private community is not a public place. Our own team asks permission before shooting there (see the shot list).

## Trademarks in photos

A trademark is a word, logo or sign that tells buyers who makes a product or service ([USPTO: trademark basics](https://www.uspto.gov/trademarks/basics)). Federal law forbids using one in a way that makes people think a company sponsors or approves us ([15 U.S.C. 1125(a)](https://www.law.cornell.edu/uscode/text/15/1125)).

- A sign or logo that happens to be in a street photo is fine. It is not the subject, and it does not suggest the company endorses Chapter3.
- Never pick a photo because of a brand, never crop to a logo, and never place a logo next to our name or a call to action.
- Name a business in the words only to say where it is ("a grocery store about 5 minutes away"). Never suggest a business works with us or approves of us.
- No logos in our drawings. A golf cart, a paddle and a grocery bag are drawn plain.

## People and fair housing

The Fair Housing Act forbids any ad that shows a preference based on race, color, religion, sex, disability, familial status or national origin ([42 U.S.C. 3604(c)](https://www.law.cornell.edu/uscode/text/42/3604)). HUD's rule says this includes "photographs, illustrations, symbols" ([24 CFR 100.75(c)(1)](https://www.law.cornell.edu/cfr/text/24/100.75)). A page that shows only one kind of person can signal who is welcome.

So we show places, not people.

- No person is the subject of a photo. People far away and too small to recognize are fine.
- Our drawings show no people and no faces. A leash runs out of the frame. A chair is empty.
- No photo of a church or other place of worship as a selling point.
- A 55+ community may say it is for people 55 and older. That is allowed for qualified housing for older persons ([24 CFR 100.304](https://www.law.cornell.edu/cfr/text/24/100.304)). It still may not signal any other preference.

A person who can be recognized also has rights in their own image. One more reason to leave people out.

## If someone asks us to take a photo down

1. **Take it down the same day.** Swap in a drawing or remove the photo, rebuild the page, and tell the owner. Do this before checking who is right. The notice process in [17 U.S.C. 512](https://www.law.cornell.edu/uscode/text/17/512) protects hosts of other people's posts. Our pages are our own, so speed is our protection.
2. **Keep the record.** Save the request and the photo's `photos.json` entry. Add a `"hold"` note to the entry with the date and the reason. `photos.js` then refuses the photo on every page.
3. **Check the record.** Open the source page. Is the license still there? Is the author the person asking?
4. **Reply in plain words.** Say what we removed and when. If the license was valid and the person only wants a better credit, offer to fix the credit.
5. **Never pay, sign or admit anything.** A letter that asks for money goes to the owner, who decides with a lawyer. Some companies send these letters in bulk.

## Where the rules live

- `tools/photos.js`: the guard (license, source, author, credit, alt text), and the markup.
- `tools/illustrations.js`: the drawings, with the rules they keep.
- `batches/<batch>/data/photos.json`: one record per photo.
- `templates/photo-shot-list.md`: what our team photographs, and how.
