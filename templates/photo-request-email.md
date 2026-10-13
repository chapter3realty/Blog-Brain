# Photo request email to the photo partner

The owner, 2026-10-13: a partner who drives the area for deliveries takes photos for the site. "Every time you want photos of a specific place or thing at a place for the website, email him. You can ask him for as much as you'd like to make the best website possible."

His email address is with the owner. It is not stored in this repo, because the repo may be public (CLAUDE.md: no private person's name or address in the repo). Send from the owner's Gmail through the Gmail connector. If the connector is not connected, give the owner the text to send.

## How to write a request

- Say who is writing: Claude, the AI assistant that builds Chapter3's pages, for the owner.
- Group the shots by place, in the order he could drive them. Give each place a map link (Google Maps search link of the address or the intersection) so he can find the spot.
- Say what each photo is for in a few words ("for the gated communities page, to show what the gate looks like"). He takes better photos when he knows why.
- Mark the most wanted shots first. Ask for as much as the pages need, but say which ones matter most.
- Repeat the safety and privacy rules in every request (below). They protect him and us.
- Ask him to reply once, in writing, that he took the photos and gives Chapter3 Realty permission to use them on its website and marketing. Keep that reply. It is the license record (`rules/images.md`, item 1).
- Ask how he wants to be credited: by name, or as "Chapter3 Realty". Default to "Chapter3 Realty".

## Rules to repeat in every request

- Never take a photo while driving. Park first, somewhere legal and safe.
- Only from public roads, public sidewalks and public parking, or a place he is allowed to be for this purpose. Never use a delivery to get inside a gate for photos. A gated community is photographed from outside its gate unless the HOA or the sales office says yes first.
- No people's faces, no readable license plates, no house numbers. Wait for people to leave the frame.
- No logo or sign as the whole subject. A sign may be in the shot, small.
- Phone sideways (landscape), normal camera, no filters, no portrait mode, no zoom past 2x. Morning or the hour before sunset is best; keep the sun behind him.
- Three of each shot.
- Send the original files (full size), in a shared Google Drive folder or as email attachments, one folder per place. One line per photo: what it shows and where he stood.

## After the photos arrive

1. Look at every photo full size. Drop any with a face, a readable plate or a house number.
2. Add each one to the batch's `photos.json` with `"license": "own"`, the author as he chose (default "Chapter3 Realty"), the place and date as the source, and alt text.
3. Run `tools/photos.js check` and `tools/image-meta.js`.
4. Put each photo beside the sentence it shows (CRAFT 4). Thank him.
