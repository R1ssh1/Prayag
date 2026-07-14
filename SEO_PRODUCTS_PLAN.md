# Products Pages — SEO URL & Meta Strategy
> **Status: Approved, pending implementation. Build the product UI pages first, apply SEO changes after.**

---

## Decisions Made

| # | Question | Decision |
|---|---|---|
| 1 | URL pattern for product slugs | **Option B** — geo/intent suffix appended to product slug |
| 2 | Division landing page URLs | **Both** — use geo-rich division slugs in the route AND enrich meta content |
| 3 | Keyword suffix style | **Recommendation** — `-manufacturer-india` for flanges/fittings/pipes; `-manufacturer-mumbai-india` for tubes (Proficient Tubes entity) |

---

## URL Architecture (Final)

### Division Landing Pages
Division routes will change from the current clean slugs to geo-rich ones. Both the route **and** the meta content will carry geo/intent keywords.

| Division | Old URL | New URL |
|---|---|---|
| Flanges | `/products/flanges` | `/products/flange-manufacturer-india` |
| Fittings | `/products/fittings` | `/products/pipe-fittings-manufacturer-india` |
| Pipes | `/products/pipes` | `/products/stainless-steel-pipe-manufacturer-india` |
| Tubes | `/products/tubes` | `/products/stainless-steel-tube-manufacturer-mumbai-india` |

> **Note on routing:** The route parameter is currently `/:division` which maps to `"flanges"`, `"fittings"`, `"pipes"`, `"tubes"`. With geo-rich slugs, the division param becomes the full geo slug. The `divisionMeta` lookup object in `DivisionPage.tsx` must be updated to key on the new slug strings, and `getProductsByDivision()` must still resolve to the correct `Division` type (`"flanges"` etc.). A mapping layer will bridge the two.

### Product Detail Pages
Product slugs get a geo/intent suffix appended. Pattern: `/products/:division-slug/:product-slug-manufacturer-india`

#### Flanges

| Old slug | New slug |
|---|---|
| `weld-neck-raised-face-wnrf` | `weld-neck-raised-face-flange-manufacturer-india` |
| `blind-raised-face-blrf` | `blind-raised-face-flange-manufacturer-india` |
| `slip-on-raised-face-sorf` | `slip-on-raised-face-flange-manufacturer-india` |

#### Fittings

| Old slug | New slug |
|---|---|
| `seamless-butt-weld-elbow-90deg` | `seamless-butt-weld-elbow-90-degree-manufacturer-india` |
| `seamless-butt-weld-equal-tee` | `seamless-butt-weld-equal-tee-manufacturer-india` |
| `forged-socket-weld-elbow-90deg` | `forged-socket-weld-elbow-90-degree-manufacturer-india` |

#### Pipes

| Old slug | New slug |
|---|---|
| `seamless-stainless-steel-pipe-ss316l` | `seamless-ss316l-stainless-steel-pipe-manufacturer-india` |
| `seamless-inconel-625-pipe` | `seamless-inconel-625-pipe-manufacturer-india` |
| `welded-duplex-stainless-steel-pipe-2205` | `welded-duplex-2205-stainless-steel-pipe-manufacturer-india` |

#### Tubes (Proficient Tubes — Mumbai entity)

| Old slug | New slug |
|---|---|
| `seamless-stainless-steel-tube-ss304` | `seamless-ss304-stainless-steel-tube-manufacturer-mumbai-india` |
| `seamless-hastelloy-c276-tube` | `seamless-hastelloy-c276-tube-manufacturer-mumbai-india` |
| `welded-titanium-tube-grade-2` | `welded-titanium-grade-2-tube-manufacturer-mumbai-india` |

---

## Files to Change (Implementation Checklist)

### Routing
- [ ] **`src/App.tsx`** — No route string changes needed (`:division` and `:slug` params are flexible). The division param values will simply be the new geo slugs.

### Data Files
- [ ] **`src/data/products/types.ts`** — Add optional `keywords?: string[]` field to `Product` interface (forward-compatible hook for `<meta name="keywords">`).
- [ ] **`src/data/products/flanges.ts`** — Update all 3 slugs, image paths, metaTitle, metaDescription.
- [ ] **`src/data/products/fittings.ts`** — Update all 3 slugs, image paths, metaTitle, metaDescription.
- [ ] **`src/data/products/pipes.ts`** — Update all 3 slugs, image paths, metaTitle, metaDescription.
- [ ] **`src/data/products/tubes.ts`** — Update all 3 slugs, image paths, metaTitle, metaDescription.
- [ ] **`src/data/company.ts`** — Update `divisions` array `slug` field for all 4 divisions to new geo slugs (used by `DivisionsSection` on Home page for links).

### Pages
- [ ] **`src/pages/products/DivisionPage.tsx`** — 
  - Update `divisionMeta` keys to new geo division slugs.
  - Add a `divisionSlugToKey` map: `{ "flange-manufacturer-india": "flanges", ... }` to resolve the `Division` type for `getProductsByDivision()`.
  - Update all 4 metaTitle / metaDescription values with geo/intent keywords.
- [ ] **`src/pages/products/ProductsOverview.tsx`** — Update `<PageMeta>` title and description with geo + intent keywords.
- [ ] **`src/pages/products/ProductDetailPage.tsx`** — Update canonical URL construction to use new division slug (already dynamic via params, so minimal change).

### SEO / Structured Data
- [ ] **`src/seo/StructuredData.tsx`** — Add `countryOfOrigin` and `additionalProperty` (manufacturer location) to `ProductSchema`.

### Navigation
- [ ] **`src/components/layout/Navbar.tsx`** — Update `children` links for Products dropdown to use new division geo slugs.

---

## Meta Title/Description Pattern

### Division Landing Pages

**Format:** `[Product Type] Manufacturer & Supplier in [Geo] | [Brand]`

| Division | Meta Title | Meta Description |
|---|---|---|
| Flanges | `Flange Manufacturer in India \| SS, CS, Alloy, Inconel, Duplex Flanges \| Prayag Steel` | `Prayag Steel — flange manufacturer & supplier in Mumbai, India. WNRF, BLRF, SORF, SWTF flanges in SS, CS, Duplex, Inconel, Hastelloy. ASME B16.5 / B16.47. Est. 1994.` |
| Fittings | `Pipe Fittings Manufacturer in India \| Butt Weld & Forged Fittings \| Prayag Steel` | `Prayag Steel — pipe fittings manufacturer & supplier in India. Seamless & welded butt-weld, forged fittings — elbows, tees, reducers, caps. ASME B16.9 / B16.11.` |
| Pipes | `Stainless Steel Pipe Manufacturer in India \| Seamless & Welded Pipes \| Prayag Steel` | `Prayag Steel — stainless steel pipe manufacturer & supplier in India. SS304, SS316, Duplex, Inconel, Hastelloy, Titanium. Seamless & welded. ASTM A312 / A213.` |
| Tubes | `Stainless Steel Tube Manufacturer Mumbai, India \| Proficient Tubes \| Prayag Steel` | `Proficient Tubes (Prayag Steel) — precision seamless & welded tube manufacturer in Mumbai. SS, Inconel, Hastelloy, Titanium. 6mm–219mm OD. Hydro + eddy-current tested.` |

### Product Detail Pages

**Format:** `[Product Name] Manufacturer & Supplier in [Geo] | [Brand]`

Each product's `metaDescription` must include:
- Product name + commercial intent keyword ("manufacturer", "supplier")
- Geo keyword ("Mumbai", "India" — or both)
- Key specifications (size range, pressure rating)
- Standards compliance
- Industry callout if applicable (nuclear, defence, aerospace, chemical)
- Brand name at the end

---

## What is NOT Changing

- Route param names in `App.tsx` (`:division`, `:slug`)
- The `Division` type (`"flanges" | "fittings" | "pipes" | "tubes"`) — used internally only
- Image file names in `public/assets/images/` (not yet placed, so the new path strings just need to match when images arrive)
- Canonical URL base (`https://www.prayagsteel.in`)
- `PageMeta.tsx` and `StructuredData.tsx` component interfaces (only the data passed in changes)

---

## Verification Plan (Post-Implementation)

1. `tsc --noEmit` — zero TypeScript errors
2. Navigate all 12 product URLs in browser → confirm 200 (no 404)
3. Navigate all 4 division URLs → confirm correct products listed
4. Inspect `<title>` + `<meta name="description">` in DevTools for each page
5. Inspect `ProductSchema` JSON-LD in DevTools → Application → confirm `countryOfOrigin` present
6. Check Navbar dropdown links resolve correctly to new division slugs
7. Check Home page `DivisionsSection` "Explore Product →" links resolve to new division slugs

---

*Last updated: 2026-07-14. Approved by: [user]. Implementation: pending product UI build.*
