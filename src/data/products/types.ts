// ─────────────────────────────────────────────────────────────────────────────
// Product Data Architecture — types.ts
// Single source of truth for the Product interface.
// Every division file (flanges.ts, fittings.ts, pipes.ts, tubes.ts) must be
// typed against this interface — a malformed entry is a compile error, not a
// silent blank page.
// ─────────────────────────────────────────────────────────────────────────────

export type Division = "flanges" | "fittings" | "pipes" | "tubes";

export interface ProductSpec {
  label: string;
  value: string;
}

/**
 * A single row in the shared cross-cutting materials table used by
 * type-first divisions (fittings, flanges). Each entry represents one
 * alloy family with its governing standard and available grades.
 */
export interface MaterialFamily {
  family: string;
  standard: string;
  grades: string[];
}

export interface Product {
  /** Stable unique ID — never reused even if the product is renamed */
  id: string;
  /** URL segment — kebab-case, matches the /products/:division/:slug route.
   *  Must be lowercase, hyphenated, no special characters.
   *  Human-readable and keyword-carrying: e.g. "weld-neck-raised-face-wnrf"
   *  not just "wnrf". */
  slug: string;
  division: Division;
  /** Alloy family / product family grouping used for same-category sidebar
   *  navigation and future filtering. Alloy family name ONLY — e.g. "Inconel",
   *  never "Inconel Seamless Pipes". Optional so other division files are
   *  unaffected until they adopt it. */
  subcategory?: string;
  /** Product type classification (e.g. "Seamless", "Welded", "Forged") */
  type?: string;
  name: string;
  /** Short copy for card/grid views */
  shortDescription: string;
  /** Full copy for the product detail page */
  description: string;
  materials: string[];
  sizeRange?: string;
  pressureRating?: string;
  standards: string[];
  /** Free-form spec table rendered on the detail page */
  specs: ProductSpec[];
  /** Shared cross-cutting materials table for type-first divisions
   *  (fittings, flanges). Reference the same exported constant array
   *  across every product in that division — do not duplicate by value.
   *  Leave undefined for material-first divisions (pipes, tubes). */
  materialsTable?: MaterialFamily[];
  /** Path string only — e.g. "products/flanges/weld-neck-raised-face-wnrf.webp"
   *  Never a static import. Resolved at render time via getProductImage(). */
  image: string;
  // ── SEO fields ────────────────────────────────────────────────────────────
  metaTitle: string;
  metaDescription: string;
}
