// ─────────────────────────────────────────────────────────────────────────────
// Product Data Index
// Re-exports a combined lookup by slug and by division.
// This is the ONLY file that aggregates division data — it does nothing else.
// Division pages dynamically import their specific file (not this index) to
// keep initial bundle size small.
// ─────────────────────────────────────────────────────────────────────────────

import { flanges } from "./flanges";
import { fittings } from "./fittings";
import { pipes } from "./pipes";
import { tubes } from "./tubes";
import type { Division, Product } from "./types";

export type { Division, Product };
export { flanges, fittings, pipes, tubes };

/** All products across all divisions */
export const allProducts: Product[] = [...flanges, ...fittings, ...pipes, ...tubes];

/** Lookup a product by division + slug */
export function getProductBySlug(division: Division, slug: string): Product | undefined {
  return allProducts.find((p) => p.division === division && p.slug === slug);
}

/** Get all products for a specific division */
export function getProductsByDivision(division: Division): Product[] {
  return allProducts.filter((p) => p.division === division);
}

/** All unique slugs for static prerendering route generation */
export function getAllProductRoutes(): Array<{ division: Division; slug: string }> {
  return allProducts.map((p) => ({ division: p.division, slug: p.slug }));
}
