/* /buyers/55-plus-communities/myrtle-trace/ - what it is like to live in Myrtle Trace,
 * a 55+ neighborhood just outside Conway.
 *
 * Version 10, 2026-10-11: the owner's-eye review of version 9
 * (batches/2026-10-a/OWNER-EYE-myrtle-trace.md) and the coordinator's decisions.
 * Shape: what is close (one map, one link), a normal month, the homes (one-story first, the
 * overview aerial beside the layout sentence, a close aerial of a street of houses, the golf
 * course view before the golf balls, a homes-for-sale offer), Conway in three sentences with
 * its two photos beside them, the money (the $95 fee, no city tax, flood in two sentences),
 * who can live there and the rules (no fence card: the agent finds the fence rule in the
 * story), the comparison led by the good, then the fence example as the last section before
 * the FAQ, under the buyer's question. No dates in captions; the photo year is in the credits.
 *
 * Facts:  batches/2026-10-a/facts/myrtle-trace-facts.md, verified rows only.
 *   Place:   rows 15, 72, 85 to 89; rush hour: stories.json "traffic-timing".
 *   Life:    rows 25, 43 to 46, 78 to 80.
 *   Homes:   row 92 (about 1,000 to 2,900 sq ft; mostly 3 bedrooms, some 2; built mostly 1984 to
 *            1998, "in the 1980s and 1990s"; every home for sale on one level), rows 26, 47 (golf
 *            easement), 48, 59. Row 22 (laid out 1984 to 1994) is cut (owner).
 *   Rules:   rows 1, 6 (no minimum age for the others in the home; OCR copy), 8 and 51, 53
 *            (trucks in the garage; campers and boats at the clubhouse lot with a permit), 54 and
 *            47 (b) (fences: found by the agent in the story), 55, 56, 16, 38.
 *   Money:   rows 81, 30 (exactly $95, the SEO audit), 34, 35, 72, v4 tax plus row 73.
 *   Flood:   rows 60 and 61, 75.
 *   Gates:   row 16 is the HOA's own 2025 gates policy, a primary source, so the gate FAQ stays.
 * Photos: the overview and street aerials (USDA NAIP 2023); Conway riverwalk and Main Street,
 *         each beside its sentence. The cypress photo is cut. The overview is the share image.
 * Story:  an Example (Pat and Max): the agent reads the HOA's design rules for that lot with her,
 *         finds no fence is allowed on a golf course or pond lot and that an approved dog run is
 *         (stories.json "hoa-rental-bans-filtered", "ny-buyer-rules-fit").
 */
const { h, maps, story, glance, photoSet, compareTable, atAGlance } = require("./_55-plus-kit.js");

const HUB = "/buyers/55-plus-communities/";
const SELF = "/buyers/55-plus-communities/myrtle-trace/";
const TEL = "tel:+18543332135";

/* Primary sources, opened by the researcher and re-opened by the verifier. */
const HOA = "https://myrtletracesc.org/";
const COV = "https://myrtletracesc.org/wp-content/uploads/Guidelines/MyrtleTraceCovenant.pdf";
const CAL = "https://myrtletracesc.org/2026-calendars/";
const FEMA = "https://msc.fema.gov/portal/search?AddressQuery=101%20Myrtle%20Trace%20Drive%2C%20Conway%2C%20SC%2029526";
const LAW = "https://www.law.cornell.edu/uscode/text/42/4012a";
const DEEDS = "https://acclaimweb.horrycounty.org/AcclaimWeb/";

const ph = photoSet();
const OVER = ph.aerial("myrtle-trace-from-above", "Myrtle Trace from above, with the golf course next door. The orange line is the edge of the neighborhood.");
const STREET = ph.aerial("myrtle-trace-homes-from-above", "Houses along two streets and a pond in Myrtle Trace, from above.", { closeUp: true });
const RIVER = ph.aerial("conway-riverwalk-boardwalk", "The riverwalk in downtown Conway.", { closeUp: true, alt: "A wooden boardwalk with a black railing, shaded by trees, beside old wooden buildings in Conway" });
const MAIN = ph.aerial("conway-main-street", "Main Street in downtown Conway.", { closeUp: true, alt: "Main Street in downtown Conway, South Carolina, lined with old brick shop buildings" });
const M = maps("myrtle-trace", [
  { id: "hosp_cmc", name: "Conway Medical Center", short: "Hospital", kind: "hospital" },
  { id: "groc_mt", name: "Walmart Supercenter", short: "Walmart", kind: "grocery" },
  { id: "beach_mt", name: "the beach by the Myrtle Beach Boardwalk", short: "Beach", kind: "beach" },
  { id: "airport", name: "Myrtle Beach International Airport", short: "Myrtle Beach airport", kind: "airport" },
], {
  amenity: "Clubhouse",
  regionCaption: "Map of where Myrtle Trace is, inland from Myrtle Beach, with drive times by car.",
  closeCaption: "Map of the streets, ponds and clubhouse inside Myrtle Trace.",
});

module.exports = {
  url: SELF,
  hub: { name: "55+ communities", url: HUB },
  datePublished: "2026-10-05",
  /* The overview aerial's 1x1, 4x3 and 16x9 crops: Article.image and the share image. */
  pageImages: () => ph.pageImages(),
  title: "Living in Myrtle Trace, a 55+ Community in Conway | Chapter3",
  description: "What life is like in Myrtle Trace near Conway: a hospital minutes away, the pool, ponds and clubs, one-story homes, the $95 HOA fee and the 55+ rule.",
  ogTitle: "Living in Myrtle Trace, Conway: close to the hospital, with a pool, ponds and clubs",
  crumb: "Myrtle Trace",
  eyebrow: "Conway, 55+",
  h1: "What is it like to live in Myrtle Trace in Conway?",
  h1em: "A 55+ neighborhood close to the hospital.",
  sub: "Myrtle Trace is a 55+ neighborhood of mostly one-story houses just outside Conway, with a pool, ponds and a busy club calendar.",
  heroMedia: glance([
    { icon: "hospital", label: "Hospital", text: "About 3 minutes" },
    { icon: "grocery", label: "Groceries", text: "About 3 minutes" },
    { icon: "beach", label: "Beach", text: "About 15 minutes" },
    { icon: "airport", label: "Airport", text: "About 20 minutes" },
  ]),
  heroCta: { label: "Talk to an agent", href: "/contact/" },
  author: "devin",
  shortAnswer: [
    "Myrtle Trace is a neighborhood of about 500 homes just outside Conway. At least one person in each home must be 55 or older. The homeowners association (HOA) fee is $95 a month.",
    "Conway Medical Center and a Walmart Supercenter are each about 3 minutes away by car. Owners share a clubhouse, a pool and ponds for fishing. The neighborhood calendar lists about 70 events and club meetings a month.",
  ],
  sections: [
    { h2: "What is close to Myrtle Trace?", html:
      ph.css() +
      h.p("The beach by the Myrtle Beach Boardwalk is about 15 minutes away by car without traffic, and the airport is about 20. In our experience, rush hour adds 5 to 10 minutes.") +
      M.where },

    { h2: "What does a month here look like?", html:
      h.p(`In a normal month you can play bingo, swim, fish and join a league, all on the ${h.ext(CAL, "neighborhood's calendar")}.`) +
      ph.cards([
        { illustration: "card-table", label: "Bingo and game nights", text: "Bingo two Friday nights a month, and a game night on Sundays" },
        { illustration: "outdoor-pool", label: "The pool", text: "Open every day from 8 a.m. to 9 p.m., in season" },
        { illustration: "bocce", label: "Bocce and shuffleboard", text: "Leagues, each with its own schedule" },
        { illustration: "fishing-pond", label: "Fishing", text: "Ponds where you fish and let the fish go" },
      ], { cols: 4 }) +
      h.p("There is also line dancing, a coffee group and a craft fair, and wide walkways run between the houses.") +
      h.p("Your house guests can fish too. The ponds collect rainwater, so swimming and boating are not allowed in them. The pool closes for the season at the start of October.") },

    { h2: "What are the homes like?", html: (bg) =>
      h.p("Most homes in Myrtle Trace are one-story houses with their own yards, and a few are townhouses. Most were built in the 1980s and 1990s, with about 1,000 to 2,900 square feet and 3 bedrooms, some with 2.") +
      h.p("The houses are on curving streets among tall pines and ponds, with Burning Ridge Golf Club next door.") +
      OVER +
      STREET +
      h.p("Some homes look out on the golf course, which is privately owned. Golf balls from the course can land in those yards.") +
      h.p("Each owner takes care of the house and the yard, including the roof and the grass.") +
      h.cta("Get the list of Myrtle Trace homes for sale.", "Tell us what you are looking for, and one of our agents will send you the homes for sale now.", "Get the list", "/contact/", bg) },

    { h2: "What is Conway like?", html:
      h.p("Conway is the town next to Myrtle Trace, on the Waccamaw River. Its riverwalk is a wooden boardwalk along the water, shaded by trees.") +
      RIVER +
      h.p("Downtown, Main Street is lined with old brick buildings with shops and places to eat.") +
      MAIN },

    { h2: "What does it cost to live here?", html: (bg) =>
      h.p("Homes in Myrtle Trace usually sell for about $300,000. On a home at that price that you live in, plan for these costs:") +
      atAGlance([
        { icon: "dollar", label: "HOA fee", text: "$95 a month" },
        { icon: "tax", label: "Property tax", text: "About $1,200 a year" },
        { icon: "key", label: "When you buy", text: "A one-time fee to the HOA of a little over $1,500" },
      ], { bg, min: "13rem" }) +
      h.p("The HOA fee pays to keep up the pool, the clubhouse, the gates, the roads the HOA owns, the ponds and the shared land. Myrtle Trace has a Conway address but is outside the city limits, so you pay no Conway city tax.") +
      h.p(`You probably will not need flood insurance, because no home here is in a high-risk flood zone on ${h.ext(FEMA, "the government's flood map")}. If you want it, a policy here usually costs about $550 a year. Read ${h.a("/buyers/coastal-insurance/", "what home and flood insurance cost near Myrtle Beach")}.`) +
      h.cta("Get an insurance quote before you offer.", "Pick the Myrtle Trace home you like. An agent at Chapter3 gets you a homeowners insurance quote before you write the offer.", "Get a quote", "/contact/", bg) },

    { h2: "Who can live here, and what are the house rules?", html: (bg) =>
      h.p(`At least one person in every home must be 55 or older, under the ${h.ext(COV, "HOA's rules")}. The others in the home can be any age, and grandchildren can visit.`) +
      atAGlance([
        { icon: "pets", label: "Pets", text: "Yes. Keep them on a leash outside your yard, and out of the clubhouse and pool area." },
        { icon: "key", label: "Renting it out", text: "Yes, for a year or longer. One tenant must be 55 or older and live there." },
        { icon: "home", label: "Sheds and pools", text: "No free-standing sheds, gazebos or private swimming pools." },
        { icon: "dock", label: "Trucks and boats", text: "Trucks go in the garage. Campers, boats and RVs can park at the clubhouse lot with a permit." },
      ], { bg }) +
      h.p("In Chapter3's experience, many HOAs here do not allow renting at all. Myrtle Trace does.") },

    { h2: "How does Myrtle Trace compare with other 55+ neighborhoods near Myrtle Beach?", html: () =>
      h.p("Myrtle Trace has the lowest HOA fee of these four, $95 a month, and its homes usually sell for the least. The beach is about 15 minutes away.") +
      compareTable(SELF) },

    { h2: "Can you fence a yard for a dog in Myrtle Trace?", html: (bg) =>
      h.p("Not with a fence between yards or across the front. A dog run is allowed once the HOA approves it.") +
      story([
        "<strong>Example:</strong> Pat is moving from Erie with her dog, Max, and she plans to fence the back yard for him. She likes a house in Myrtle Trace whose back yard looks out on the golf course next door.",
        "Before she makes an offer, her Chapter3 agent reads the HOA's design rules for that lot with her. The agent finds that no fence around the yard is allowed on a lot that backs onto the golf course or a pond.",
        "The agent also finds that a dog run is allowed once the HOA approves where it goes and how it is built. Pat makes her offer with a sketch of a dog run beside the patio, ready to send to the HOA.",
      ], "If you have a dog, ask what you can build in the yard before you choose a house.", bg,
      `An agent at Chapter3 can ${h.a("/contact/", "read the HOA's rules with you")} before you make an offer.`) },
  ],
  faqTitle: "Myrtle Trace FAQ",
  faq: [
    { q: "Is Myrtle Trace a gated community?", a: "Only in part. The back entrance has gates, and the front entrance is always open. The HOA says the back gates stop drivers from using the neighborhood as a shortcut." },
    { q: "How much is the HOA fee in Myrtle Trace?", a: "The HOA fee is $95 a month. It pays to keep up the pool, the clubhouse, the roads the HOA owns, the ponds and the shared land." },
    { q: "Who runs the Myrtle Trace HOA?", a: "The owners run it themselves with volunteers, and the HOA says it has no management company." },
    { q: "Is the golf course part of Myrtle Trace?", a: "No. Burning Ridge Golf Club, next door, is privately owned and is not part of the HOA. Some Myrtle Trace homes back onto it." },
    { q: "Can you fish in the Myrtle Trace ponds?", a: "Yes. Residents and their house guests can fish from the shared land around the 15 ponds. Every fish goes back in the water." },
    { q: "Do you need flood insurance in Myrtle Trace?", a: "Probably not. No Myrtle Trace home is in a high-risk flood zone, though a lender may still ask for a policy." },
    { q: "Is Myrtle Trace inside Conway city limits?", a: "No. Myrtle Trace has a Conway mailing address but is outside the city, so owners there pay no Conway city tax." },
  ],
  sources: [
    { name: "Myrtle Trace HOA", href: HOA },
    { name: "HOA rules", href: COV },
    { name: "Horry County deed records", href: DEEDS },
    { name: "FEMA flood map", href: FEMA },
  ],
  sourcesNote: "Not legal or tax advice. The home sizes are from recent MLS listings. Drive times are OpenStreetMap estimates with no traffic. The flood cost is FEMA's middle policy price for this ZIP code.",
  /* The photo credits sit with the sources line, after the FAQ (website mkpage-photos.patch). */
  afterSources: () => ph.credits(),
  bottomCta: { h2: "Talk to us about a home in Myrtle Trace.", p: "Call about the home you like. One of our agents will go over the HOA's rules and rental policy with you. Office hours are Monday to Friday 9 to 6 and Saturday 10 to 4.", label: "Call an agent", href: TEL },
  keywords: "Myrtle Trace Conway, Myrtle Trace 55 community, living in Myrtle Trace, Myrtle Trace HOA fee, Myrtle Trace homes, Myrtle Trace activities",
  about: "Myrtle Trace, a 55+ community in unincorporated Horry County near Conway, South Carolina",
};
