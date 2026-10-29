/**
 * One MLS record as the deal finder reads it. The CRM's replica (mls_listings)
 * holds the typed columns; the rest comes from its `raw` Trestle record
 * (src/source/replica.ts). Every field may be missing in the feed, so every
 * field that can be missing is null, never a guess.
 */
export type Group = "detached" | "condo" | "manufactured" | "multi" | "other";

export interface Listing {
  key: string;
  mlsNumber: string | null;
  /** RESO StandardStatus: Active, Pending, Closed and so on. */
  status: string;
  propertyType: string | null;
  subType: string | null;
  listPrice: number | null;
  originalListPrice: number | null;
  closePrice: number | null;
  /** YYYY-MM-DD */
  closeDate: string | null;
  listedOn: string | null;
  daysOnMarket: number | null;
  address: string | null;
  city: string | null;
  zip: string | null;
  subdivision: string | null;
  lat: number | null;
  lon: number | null;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  lotAcres: number | null;
  yearBuilt: number | null;
  waterfront: boolean | null;
  pool: boolean | null;
  garageSpaces: number | null;
  stories: number | null;
  hoaMonthly: number | null;
  taxAnnual: number | null;
  /** RESO SpecialListingConditions, as words: Foreclosure, Short Sale, Auction... */
  specialConditions: string[];
  /** Public and private remarks together. Private remarks are agent-only: never in the public view. */
  remarks: string;
  listOfficeName: string | null;
  listAgentName: string | null;
  photo: string | null;
  photosCount: number | null;
  /** InternetEntireListingDisplayYN: false means the seller kept it off the internet. */
  displayOnline: boolean;
  /** InternetAddressDisplayYN: false means show the town, not the street. */
  addressOnline: boolean;
}

/** What the data source hands the engine: every active listing and every sale in the window. */
export interface Market {
  active: Listing[];
  sold: Listing[];
  /** YYYY-MM-DD. The day the copy was read; all ages and months count from here. */
  asOf: string;
  /** Where the rows came from, for the report: "replica" or "synthetic". */
  source: string;
}
