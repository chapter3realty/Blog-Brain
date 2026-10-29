import pg from "pg";
import type { Listing, Market } from "../types.ts";

/**
 * READS THE CRM'S COPY OF THE MLS (chapter3-crm, table mls_listings, written
 * only by its src/jobs/mls-sync.ts from the CCMLS feed through Trestle).
 *
 * Read only. Connect with a role that can SELECT mls_listings and nothing
 * else (docs/DATA-ACCESS.md has the SQL). The connection string is in the
 * environment as DEALS_DATABASE_URL, never in this repo.
 *
 * What it reads: every active Residential listing, and every Residential
 * sale with a close price, closed in the last `soldMonths` (the CRM keeps 24)
 * and not after today. Leases and land have their own PropertyType and are
 * left out by the Residential filter.
 */

const COLUMNS = `
  listing_key, listing_id, standard_status, property_type, property_sub_type,
  list_price, original_list_price, close_price, close_date::text as close_date, listed_on::text as listed_on,
  days_on_market, address, city, postal_code, subdivision, latitude, longitude,
  beds, baths_total, living_area, lot_acres, year_built, waterfront,
  list_office_name, list_agent_name, primary_photo_url, photos_count,
  raw->>'PublicRemarks' as public_remarks,
  raw->>'PrivateRemarks' as private_remarks,
  raw->'SpecialListingConditions' as special,
  raw->>'PoolPrivateYN' as pool,
  raw->>'GarageSpaces' as garage,
  coalesce(raw->>'StoriesTotal', raw->>'Stories') as stories,
  raw->>'AssociationFee' as hoa,
  raw->>'AssociationFeeFrequency' as hoa_freq,
  raw->>'TaxAnnualAmount' as tax,
  raw->>'InternetEntireListingDisplayYN' as display_online,
  raw->>'InternetAddressDisplayYN' as address_online
`;

type Row = Record<string, unknown>;

const n = (v: unknown): number | null => {
  if (v == null || v === "") return null;
  const x = typeof v === "number" ? v : Number(v);
  return Number.isFinite(x) ? x : null;
};
const yes = (v: unknown): boolean | null => (v == null || v === "" ? null : v === true || /^(true|y|yes|1)$/i.test(String(v)));

const PER_MONTH: Record<string, number> = { monthly: 1, quarterly: 1 / 3, semiannually: 1 / 6, annually: 1 / 12, yearly: 1 / 12 };

export function listingOf(r: Row): Listing {
  const special = r.special;
  const conditions = Array.isArray(special)
    ? special.map(String)
    : typeof special === "string"
      ? special.split(",").map((x) => x.trim()).filter(Boolean)
      : [];
  const hoa = n(r.hoa);
  const freq = String(r.hoa_freq ?? "Monthly").toLowerCase().replace(/[^a-z]/g, "");
  return {
    key: String(r.listing_key),
    mlsNumber: r.listing_id == null ? null : String(r.listing_id),
    status: String(r.standard_status ?? ""),
    propertyType: (r.property_type as string) ?? null,
    subType: (r.property_sub_type as string) ?? null,
    listPrice: n(r.list_price),
    originalListPrice: n(r.original_list_price),
    closePrice: n(r.close_price),
    closeDate: (r.close_date as string) ?? null,
    listedOn: (r.listed_on as string) ?? null,
    daysOnMarket: n(r.days_on_market),
    address: (r.address as string) ?? null,
    city: (r.city as string) ?? null,
    zip: (r.postal_code as string) ?? null,
    subdivision: (r.subdivision as string) ?? null,
    lat: n(r.latitude),
    lon: n(r.longitude),
    beds: n(r.beds),
    baths: n(r.baths_total),
    sqft: n(r.living_area),
    lotAcres: n(r.lot_acres),
    yearBuilt: n(r.year_built),
    waterfront: yes(r.waterfront),
    pool: yes(r.pool),
    garageSpaces: n(r.garage),
    stories: n(r.stories),
    hoaMonthly: hoa == null ? null : hoa * (PER_MONTH[freq] ?? 1),
    taxAnnual: n(r.tax),
    specialConditions: conditions,
    remarks: [r.public_remarks, r.private_remarks].filter(Boolean).join("\n"),
    listOfficeName: (r.list_office_name as string) ?? null,
    listAgentName: (r.list_agent_name as string) ?? null,
    photo: (r.primary_photo_url as string) ?? null,
    photosCount: n(r.photos_count),
    displayOnline: yes(r.display_online) !== false,
    addressOnline: yes(r.address_online) !== false,
  };
}

export async function readReplica(url: string, opts: { soldMonths?: number } = {}): Promise<Market> {
  const client = new pg.Client({ connectionString: url, ssl: url.includes("localhost") ? undefined : { rejectUnauthorized: false } });
  await client.connect();
  try {
    await client.query("begin transaction read only");
    const today = (await client.query("select (now() at time zone 'America/New_York')::date::text as d")).rows[0].d as string;
    const active = await client.query(`select ${COLUMNS} from mls_listings where property_type = 'Residential' and standard_status = 'Active'`);
    const sold = await client.query(
      `select ${COLUMNS} from mls_listings
        where property_type = 'Residential' and standard_status = 'Closed' and close_price > 0
          and close_date >= ($1::date - make_interval(months => $2)) and close_date <= $1::date`,
      [today, opts.soldMonths ?? 24],
    );
    await client.query("commit");
    return { active: active.rows.map(listingOf), sold: sold.rows.map(listingOf), asOf: today, source: "replica" };
  } finally {
    await client.end();
  }
}
