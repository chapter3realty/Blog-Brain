# Image metadata

What search engines and answer engines read from a picture, and what Chapter3 does about it. Read on 2026-10-11, from primary sources only. The check is STANDARD S13 (`tools/image-meta.js`). The tools are in `tools/photos.js`.

## What the sources say

Google, on images in search:

1. Put a picture in an `<img>` element with a `src`. "Google doesn't index CSS images." With `srcset`, always keep a `src` as the fallback. [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
2. Alt text should be "useful, information-rich content" that fits the page. Do not fill it with keywords. Google's best example is "Dalmatian puppy playing fetch". [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
3. File names should be "short, but descriptive". They give Google "very light clues". Avoid names like `image1.jpg`. [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
4. Google learns what a picture shows from the page, "including captions and image titles". Put the picture near the text it belongs to. [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
5. The page's preferred image is set with `primaryImageOfPage` or `og:image`. It should be relevant and high resolution. Avoid "a generic image (for example, your site logo)" and "an image with text in the schema.org markup or og:image meta tag", and avoid extreme aspect ratios. [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
6. WebP is a supported format. The file extension must match the file type. For an inline `<svg>`, accessible text goes in a `<title>` element. [Google: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)

Google, on license and credit:

7. An `ImageObject` needs `contentUrl` and at least one of `creator`, `creditText`, `copyrightNotice` or `license`. `license` must be a URL and is required for the "Licensable" badge. `acquireLicensePage` is recommended. [Google: Image license metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)
8. Inside the file, Google reads these IPTC fields: Creator, Credit Line, Copyright Notice, Web Statement of Rights (the license URL), Licensor URL and Digital Source Type. Embed them "once per image". When you strip metadata, keep the creator, credit line and copyright notice. If the file and the page disagree, "Google will use the structured data information". [Google: Image license metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)
9. Digital Source Type tells Google how a picture was made. Google lists the AI terms it reads, such as `trainedAlgorithmicMedia` ("created algorithmically using a model"). Google can also show signed C2PA records in "About this image". [Google: Image license metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)
10. Article `image`: images that represent the article, crawlable and indexable, each at least 50,000 pixels (width times height). "For best results", give several images in the ratios 16x9, 4x3 and 1x1. [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
11. Discover shows a large image when the image is "at least 1200 px wide" and the page allows `max-image-preview:large`. Name it with schema.org markup or `og:image`. [Google: Discover](https://developers.google.com/search/docs/appearance/google-discover)
12. An image sitemap helps Google find images "that we might not otherwise find". Only `image:loc` is used; the caption, title, license and location tags were dropped from the documentation. A page may list up to 1,000 images. [Google: Image sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)

The standards:

13. The IPTC Photo Metadata Standard names each field in XMP: Creator `dc:creator`, Credit Line `photoshop:Credit`, Copyright Notice `dc:rights`, Web Statement of Rights `xmpRights:WebStatement`, Licensor `plus:Licensor` with its Licensor URL, Description `dc:description`, Alt Text (Accessibility) `Iptc4xmpCore:AltTextAccessibility` ("should not exceed 250 characters"), Location Shown `Iptc4xmpExt:LocationShown` and Digital Source Type `Iptc4xmpExt:DigitalSourceType`. [IPTC Photo Metadata Standard 2025.1](https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata)
14. The IPTC terms we use: `digitalCapture` ("captured from a real-life source using a digital camera"), `dataDrivenMedia` ("representation of data via human programming"), `digitalCreation` ("created by a human using non-generative tools") and `trainedAlgorithmicMedia` ("Created using Generative AI"). [IPTC Digital Source Type](https://cv.iptc.org/newscodes/digitalsourcetype/)
15. schema.org `ImageObject` has `caption` and `representativeOfPage`, and takes `contentUrl`, `width`, `height`, `encodingFormat`, `creator`, `creditText`, `copyrightNotice`, `license`, `acquireLicensePage`, `isBasedOn` and `contentLocation` from its parents. [schema.org: ImageObject](https://schema.org/ImageObject)

Bing and Copilot:

16. "Images and video should reinforce the primary text on the page and should not be the sole source of information." Give them "Descriptive file names", "Alt text" and "Captions, transcripts, or structured data". The guidelines cover Bing search and Copilot. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
17. "Structured data must accurately represent visible content." Misleading structured data can be ignored or cost rankings. [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)

Answer engines:

18. Google's AI Overviews and AI Mode need no special markup. Google asks for "high-quality images and videos" that support the text, and structured data that "matches the visible text on the page". [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
19. OpenAI says only that OAI-SearchBot finds pages for ChatGPT search, and that a site that blocks it will not be shown in its answers. We found no official OpenAI word on images or alt text. Its publisher FAQ refused our request (HTTP 403). [OpenAI: crawlers](https://developers.openai.com/api/docs/bots)

## What Chapter3 does

Every photo a page shows:

- Is a WebP `<img>` with a `src`, a `srcset`, width and height (rules 1, 6).
- Has alt text of 3 or more words and at most 250 characters. It says what the photo shows and names the place. It never starts "Photo of" and is never a file name (rules 2, 13, 16). `photos.json` holds a default alt for each photo; a spec may pass its own.
- Has a file name that says what it shows, such as `conway-main-street-1200w.webp` (rule 3).
- Has a visible caption, or a card label, next to the text it belongs to (rules 4, 16).
- Carries, inside each file (the 600w, the 1200w and the crops): Creator, Credit Line, Copyright Notice, Web Statement of Rights, Licensor URL, Description, Title, Alt Text (Accessibility), Digital Source Type, Location Shown, Date Created and Source, plus the Creative Commons fields. A JPG also gets the old IPTC block (rules 8, 13). `node tools/photos.js embed` writes them; `makeVariants` and `makeCrops` take `{ rec }` and write them too, since ImageMagick's `-strip` removes everything.
- Has an `ImageObject` in the page's JSON-LD: the `src` as `contentUrl`, its size, the visible caption, the alt as `description`, `creator`, `creditText`, `copyrightNotice`, `license`, `acquireLicensePage` (the photo's source page, where its license is shown), `isBasedOn` and the place. The hero is `representativeOfPage` (rules 7, 15, 17). The kit adds this after the photo credits.

The page's own image:

- `Article.image` is the hero photo in 1x1, 4x3 and 16x9, each 1200 px wide, with the same license fields. `primaryImageOfPage` is the 4x3 one. The share card, which has text on it, is no longer in the schema (rules 5, 10, 11). `website-patches/mkpage-page-images.patch` adds the spec field `pageImages`.
- A crop is cut from the photo, so a CC BY-SA crop is shared under CC BY-SA (rules/images.md). Its record says so, and so does its embedded Instructions field.

Digital Source Type, by kind (rule 14):

- Photos: `digitalCapture`.
- Maps from `tools/area-map.js`: `dataDrivenMedia`. They are drawn from map data by code.
- Drawings from `tools/illustrations.js`: `trainedAlgorithmicMedia`. Claude, a generative AI model, wrote them as SVG code, so "Created using Generative AI" is the honest label. A drawing a person makes would be `digitalCreation`. This applies only when a drawing is saved as a file; on the page the drawings are inline SVG and carry no file metadata.

Maps and drawings on the page:

- They are inline `<svg>`, not image files, so they do not appear in Google Images and carry no IPTC fields. What they show reaches readers and engines through the `aria-label` and the visible caption (rules 6, 16). A map's label states the fact: where the community is and how many minutes by car to each place it shows.
- A drawing in a feature card is `aria-hidden`, because the card's label beside it says the same thing.

## Left open

- `og:image` and `twitter:image` are still the text card from `tools/ogcard.js`. Rule 5 says to avoid an image with text there too. Switching them to the 16x9 hero crop also means changing `og:image:width` and `og:image:height`, which mkpage copies from the donor page. The owner should decide, because the card is what Facebook and LinkedIn show.
- No C2PA records. Google shows them only when they are signed with a certificate on the C2PA Trust List (rule 9).
- The image sitemap entries are in `batches/2026-10-a/image-sitemap.diff`, not applied. The photos are already found through their `<img>` tags; the crops appear only in the schema, which is the case rule 12 describes.
- A map over 60 KB becomes an `<img>` of an `.svg` file. exiftool cannot write into SVG, so such a map would carry its alt text but no file metadata. None of the four 55+ maps is over 60 KB.
- The older pages have no licensed photos yet. `node tools/image-meta.js <site>/chapter3realty --all` lists them: the team photos have no metadata or schema, and several pages have decorative icons that are not `aria-hidden`.

- **Aerial photo with our labels:** digital source type "composite" (IPTC: a mix of a capture and other elements). Not "compositeCapture" (all elements captured) and not any generative AI type.
