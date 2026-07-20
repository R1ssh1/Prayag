import type { Product, MaterialFamily } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Fittings Division — Type-First Model
// subcategory = fitting type (e.g. "90° Long Radius Elbow")
// materialsTable is shared across ALL 22 products — reference FITTINGS_MATERIALS,
// never duplicate by value.
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared materials table (define ONCE, reference from every product) ───────
// NOTE: Copper Nickel standard not given in source document — flagged for
// client confirmation before launch. "Standard not specified in source document"
// is the exact text used below rather than a silent omission or a guess.
export const FITTINGS_MATERIALS: MaterialFamily[] = [
  {
    family: "Stainless Steel",
    standard: "ASTM A403 / ASME SA403",
    grades: [
      "WP304", "WP304L", "WP304H", "WP310", "WP310S",
      "WP316", "WP316L", "WP316Ti", "WP317", "WP317L",
      "WP321", "WP321H", "WP347", "WP347H",
    ],
  },
  {
    family: "Duplex Stainless Steel",
    standard: "ASTM A815 / ASME SA815",
    grades: ["WPS31803 (2205)", "WPS32205 (2205)", "WPS32304 (2304)"],
  },
  {
    family: "Super Duplex Stainless Steel",
    standard: "ASTM A815 / ASME SA815",
    grades: ["WPS32750 (2507)", "WPS32760"],
  },
  {
    family: "Nickel Alloys",
    standard: "ASTM B366 / ASME SB366",
    grades: [
      "Inconel 600", "Inconel 601", "Inconel 625", "Inconel 718",
      "Incoloy 800", "Incoloy 800H", "Incoloy 800HT", "Incoloy 825",
    ],
  },
  {
    family: "Monel",
    standard: "ASTM B366 / ASME SB366",
    grades: ["Monel 400", "Monel K500"],
  },
  {
    family: "Hastelloy",
    standard: "ASTM B366 / ASME SB366",
    grades: ["C22", "C276", "B2", "B3", "X"],
  },
  {
    family: "Titanium",
    standard: "ASTM B363 / ASME SB363",
    grades: ["Grade 2", "Grade 5", "Grade 7", "Grade 12"],
  },
  {
    family: "Nickel",
    standard: "ASTM B366 / ASME SB366",
    grades: ["Nickel 200", "Nickel 201"],
  },
  {
    family: "Alloy 20",
    standard: "ASTM B366 / ASME SB366",
    grades: ["Alloy 20"],
  },
  {
    family: "Copper Nickel",
    // FLAGGED: Standard not confirmed in source document — needs client confirmation before launch.
    standard: "Standard not specified in source document — flag for client confirmation",
    grades: ["90/10 (C70600)", "70/30 (C71500)"],
  },
];

// ── Shared standards (dimensional/manufacturing) for all 22 products ─────────
// Exception: Product #4 (Short Radius Elbow) — uses only ASME B16.28 per
// instruction document.
const FITTINGS_STANDARDS = [
  "ASME B16.9", "ASME B16.28", "MSS SP-43",
  "EN 10253-3", "EN 10253-4",
  "DIN 2605", "DIN 2615", "DIN 2616", "DIN 2617",
  "JIS B2311", "JIS B2312", "JIS B2313",
];

// ── Shared fallback specs (used when product description gives no override) ───
const FALLBACK_SPECS = [
  { label: "Manufacturing Process", value: "Seamless, Welded & Fabricated" },
  { label: "Size Range", value: "1/2\" to 48\" (Larger Sizes on Request)" },
  { label: "Wall Thickness", value: "SCH 5S to SCH XXS" },
  { label: "Pressure Rating", value: "As Per ASME B16.9 / Project Requirements" },
  { label: "Surface Finish", value: "Pickled, Passivated, Machined, Shot Blasted, Mirror Polish, Electropolished" },
  { label: "End Preparation", value: "Beveled, Plain End, Square Cut" },
  { label: "Testing", value: "PMI, Hydro Test, UT, RT, PT, Mechanical Testing, Hardness, IGC, Ferrite" },
];

// ─────────────────────────────────────────────────────────────────────────────
// The 22 Products
// materials: [] — for type-first divisions the authoritative material list is
//   materialsTable (FITTINGS_MATERIALS). The materials array is kept empty to
//   avoid contradicting the table or creating duplicated maintenance burden.
// ─────────────────────────────────────────────────────────────────────────────
export const fittings: Product[] = [
  // ── 1. 90 Degree Long Radius Elbow ───────────────────────────────────────
  {
    id: "fit-001",
    slug: "buttweld-fitting-90deg-long-radius-elbow",
    division: "fittings",
    subcategory: "90 Degree Long Radius Elbow",
    type: "Seamless / Welded / Fabricated",
    name: "90 Degree Long Radius Elbow",
    shortDescription: "Flow Redirection with Minimal Pressure Loss. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction.",
    description:
      "90 Degree Long Radius Elbows are designed for flow redirection with minimal pressure loss. Manufactured to ASME B16.9, they are available in seamless, welded, and fabricated construction across a size range of 1/2\" to 48\". The long radius (1.5D) configuration allows for smooth directional change with lower turbulence and pressure drop compared to short radius alternatives, making them the preferred choice in high-pressure and high-velocity piping systems across oil & gas, chemical, and power generation industries.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      { label: "Manufacturing Process", value: "Seamless, Welded & Fabricated" },
      { label: "Size Range", value: "1/2\" to 48\"" },
      { label: "Wall Thickness", value: "SCH 5S to SCH XXS" },
      { label: "Radius", value: "Long Radius (1.5D)" },
      { label: "Pressure Rating", value: "As Per ASME B16.9 / Project Requirements" },
      { label: "Surface Finish", value: "Pickled, Passivated, Machined, Shot Blasted, Mirror Polish, Electropolished" },
      { label: "End Preparation", value: "Beveled, Plain End, Square Cut" },
      { label: "Testing", value: "PMI, Hydro Test, UT, RT, PT, Mechanical Testing, Hardness, IGC, Ferrite" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-90deg-long-radius-elbow.webp",
    metaTitle: "90 Degree Long Radius Elbow | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "90 Degree LR Elbows in SS, Duplex, Super Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", SCH 5S–XXS. ASME B16.9. Seamless, welded & fabricated. Prayag Steel India.",
  },

  // ── 2. 45 Degree Long Radius Elbow ───────────────────────────────────────
  {
    id: "fit-002",
    slug: "buttweld-fitting-45deg-long-radius-elbow",
    division: "fittings",
    subcategory: "45 Degree Long Radius Elbow",
    type: "Seamless / Welded",
    name: "45 Degree Long Radius Elbow",
    shortDescription: "Efficient Direction Change with Reduced Flow Resistance. Available in seamless and welded construction, 1/2\" to 48\".",
    description:
      "45 Degree Long Radius Elbows provide an efficient direction change with reduced flow resistance compared to 90 degree elbows. Available in seamless and welded construction across a size range of 1/2\" to 48\", they are widely used in process piping where a gradual directional change is required to minimise pressure drop and erosion. Manufactured to ASME B16.9 in a comprehensive range of corrosion-resistant alloys for demanding industrial environments.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      { label: "Manufacturing Process", value: "Seamless, Welded" },
      { label: "Size Range", value: "1/2\" to 48\"" },
      { label: "Wall Thickness", value: "SCH 5S to SCH XXS" },
      { label: "Radius", value: "Long Radius (1.5D)" },
      { label: "Pressure Rating", value: "As Per ASME B16.9 / Project Requirements" },
      { label: "Surface Finish", value: "Pickled, Passivated, Machined, Shot Blasted, Mirror Polish, Electropolished" },
      { label: "End Preparation", value: "Beveled, Plain End, Square Cut" },
      { label: "Testing", value: "PMI, Hydro Test, UT, RT, PT, Mechanical Testing, Hardness, IGC, Ferrite" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-45deg-long-radius-elbow.webp",
    metaTitle: "45 Degree Long Radius Elbow | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "45 Degree LR Elbows in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", SCH 5S–XXS. ASME B16.9. Seamless & welded construction. Prayag Steel India.",
  },

  // ── 3. 180 Degree Return Bend ─────────────────────────────────────────────
  {
    id: "fit-003",
    slug: "buttweld-fitting-180deg-return-bend",
    division: "fittings",
    subcategory: "180 Degree Return Bend",
    type: "Long Radius / Short Radius",
    name: "180 Degree Return Bend",
    shortDescription: "Complete Flow Reversal. Available in Long Radius and Short Radius configurations, 1/2\" to 24\".",
    description:
      "180 Degree Return Bends provide complete flow reversal in piping systems. Available in Long Radius and Short Radius configurations, they are used in heat exchangers, coil assemblies, and process piping where space constraints require a 180 degree turn in the flow direction. Supplied in a size range of 1/2\" to 24\" and manufactured to ASME B16.9 across a full range of corrosion-resistant alloy families.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      { label: "Manufacturing Process", value: "Seamless, Welded & Fabricated" },
      { label: "Size Range", value: "1/2\" to 24\"" },
      { label: "Wall Thickness", value: "SCH 5S to SCH XXS" },
      { label: "Available In", value: "Long Radius, Short Radius" },
      { label: "Pressure Rating", value: "As Per ASME B16.9 / Project Requirements" },
      { label: "Surface Finish", value: "Pickled, Passivated, Machined, Shot Blasted, Mirror Polish, Electropolished" },
      { label: "End Preparation", value: "Beveled, Plain End, Square Cut" },
      { label: "Testing", value: "PMI, Hydro Test, UT, RT, PT, Mechanical Testing, Hardness, IGC, Ferrite" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-180deg-return-bend.webp",
    metaTitle: "180 Degree Return Bend | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "180 Degree Return Bends in SS, Duplex, Inconel, Hastelloy. LR & SR configurations. 1/2\"–24\", ASME B16.9. Heat exchangers, coil assemblies. Prayag Steel India.",
  },

  // ── 4. Short Radius Elbow ─────────────────────────────────────────────────
  // Standard is ASME B16.28 only (per instruction document — replaces the
  // general dimensional standards list for this product only).
  {
    id: "fit-004",
    slug: "buttweld-fitting-short-radius-elbow",
    division: "fittings",
    subcategory: "Short Radius Elbow",
    type: "Seamless / Welded / Fabricated",
    name: "Short Radius Elbow",
    shortDescription: "Compact Piping Solution. Short Radius (1D) configuration for tight-clearance piping layouts.",
    description:
      "Short Radius Elbows (1D radius) offer a compact piping solution for applications where space is limited and a tighter bend is required. Manufactured to ASME B16.28, they are used in congested piping layouts across process, petrochemical, and power industries where long radius elbows cannot be accommodated. Available in both 90 degree and 45 degree configurations in the full range of corrosion-resistant alloys.",
    materials: [],
    // Short Radius Elbow: ASME B16.28 only — per instruction document.
    standards: ["ASME B16.28"],
    specs: [
      ...FALLBACK_SPECS,
      { label: "Radius", value: "Short Radius (1D)" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-short-radius-elbow.webp",
    metaTitle: "Short Radius Elbow | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Short Radius Elbows in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", SCH 5S–XXS. ASME B16.28. Compact piping layouts. Prayag Steel India.",
  },

  // ── 5. Equal Tee ──────────────────────────────────────────────────────────
  {
    id: "fit-005",
    slug: "buttweld-fitting-equal-tee",
    division: "fittings",
    subcategory: "Equal Tee",
    type: "Seamless / Welded / Fabricated",
    name: "Equal Tee",
    shortDescription: "Balanced Fluid Distribution. All three outlets equal in size for uniform flow splitting or combining.",
    description:
      "Equal Tees provide balanced fluid distribution across chemical plants, power plants, oil & gas installations, and water treatment facilities. All three openings are of the same nominal size, allowing flow to be split or combined uniformly. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction across a comprehensive range of corrosion-resistant alloy families.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Applications", value: "Chemical Plants, Power Plants, Oil & Gas, Water Treatment" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-equal-tee.webp",
    metaTitle: "Equal Tee | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Equal Tees in SS, Duplex, Super Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Chemical, power, oil & gas, water treatment. Prayag Steel India.",
  },

  // ── 6. Reducing Tee ───────────────────────────────────────────────────────
  {
    id: "fit-006",
    slug: "buttweld-fitting-reducing-tee",
    division: "fittings",
    subcategory: "Reducing Tee",
    type: "Seamless / Welded / Fabricated",
    name: "Reducing Tee",
    shortDescription: "Efficient Pipeline Branching. Branch outlet smaller than the run pipe for reduced-bore take-offs.",
    description:
      "Reducing Tees provide efficient pipeline branching where the branch outlet is a smaller bore than the run pipe. They eliminate the need for a separate reducer and tee combination, saving space and reducing potential leak points. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction, they are widely used across chemical processing, oil & gas, and power generation piping systems.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-reducing-tee.webp",
    metaTitle: "Reducing Tee | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Reducing Tees in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Seamless, welded & fabricated. Pipeline branch connections. Prayag Steel India.",
  },

  // ── 7. Concentric Reducer ─────────────────────────────────────────────────
  {
    id: "fit-007",
    slug: "buttweld-fitting-concentric-reducer",
    division: "fittings",
    subcategory: "Concentric Reducer",
    type: "Seamless / Welded / Fabricated",
    name: "Concentric Reducer",
    shortDescription: "Smooth Diameter Transition. Centreline maintained for vertical piping and gas/steam lines.",
    description:
      "Concentric Reducers provide a smooth diameter transition between two different pipe sizes while maintaining the same centreline axis. They are the preferred choice for vertical piping and for gas or steam service where keeping flow centred is important. Manufactured to ASME B16.9 in seamless, welded, and fabricated forms across a comprehensive alloy range.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-concentric-reducer.webp",
    metaTitle: "Concentric Reducer | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Concentric Reducers in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Seamless, welded & fabricated. Centreline-maintained transitions. Prayag Steel.",
  },

  // ── 8. Eccentric Reducer ──────────────────────────────────────────────────
  {
    id: "fit-008",
    slug: "buttweld-fitting-eccentric-reducer",
    division: "fittings",
    subcategory: "Eccentric Reducer",
    type: "Seamless / Welded / Fabricated",
    name: "Eccentric Reducer",
    shortDescription: "Prevents Air Entrapment. Flat bottom maintains a consistent invert for liquid-carrying horizontal lines.",
    description:
      "Eccentric Reducers provide a diameter transition with one side flat, preventing air pockets or liquid accumulation in horizontal piping. They are essential in pump suction lines, liquid-service horizontal piping, and any application where air entrapment would cause cavitation or measurement errors. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction across a full range of corrosion-resistant alloys.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-eccentric-reducer.webp",
    metaTitle: "Eccentric Reducer | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Eccentric Reducers in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Prevents air entrapment. Horizontal pump suction lines. Prayag Steel.",
  },

  // ── 9. Pipe Cap (End Cap) ─────────────────────────────────────────────────
  {
    id: "fit-009",
    slug: "buttweld-fitting-pipe-cap-end-cap",
    division: "fittings",
    subcategory: "Pipe Cap (End Cap)",
    type: "Seamless / Welded / Fabricated",
    name: "Pipe Cap (End Cap)",
    shortDescription: "Reliable Line Termination. Closes the open end of a pipe or fitting in permanent or temporary service.",
    description:
      "Pipe Caps (End Caps) provide reliable line termination by closing the open end of a pipe or fitting. Used for permanent pipe end sealing as well as temporary isolation during construction and commissioning. Manufactured to ASME B16.9 with a dished or hemispherical end profile in seamless, welded, and fabricated forms across a comprehensive range of corrosion-resistant alloy families.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-pipe-cap-end-cap.webp",
    metaTitle: "Pipe Cap (End Cap) | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Pipe Caps in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Permanent and temporary pipe end sealing. Seamless & welded. Prayag Steel India.",
  },

  // ── 10. Stub End (Short Pattern) ──────────────────────────────────────────
  {
    id: "fit-010",
    slug: "buttweld-fitting-stub-end-short-pattern",
    division: "fittings",
    subcategory: "Stub End (Short Pattern)",
    type: "Seamless / Welded",
    name: "Stub End (Short Pattern)",
    shortDescription: "Designed for Lap Joint Flange Assemblies. Precision-machined sealing face for leak-proof connections requiring frequent dismantling.",
    description:
      "Short Pattern Stub Ends are designed for use with Lap Joint Flanges in applications requiring frequent dismantling without disturbing the gasket or pipeline alignment. The precision-machined sealing face provides a reliable, leak-proof flange connection while allowing the backing flange to be rotated for bolt-hole alignment. Short pattern stub ends are more economical in material cost and are suitable for the majority of lap joint service applications. Manufactured to MSS SP-43 in seamless and welded construction.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Pattern", value: "Short Pattern" },
      { label: "Face Type", value: "Precision-Machined Sealing Face" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-stub-end-short-pattern.webp",
    metaTitle: "Stub End Short Pattern | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Stub Ends (Short Pattern) for Lap Joint Flanges in SS, Duplex, Inconel, Hastelloy. 1/2\"–48\", MSS SP-43. Precision-machined face. Frequent-dismantle service. Prayag Steel.",
  },

  // ── 11. Stub End (Long Pattern) ───────────────────────────────────────────
  {
    id: "fit-011",
    slug: "buttweld-fitting-stub-end-long-pattern",
    division: "fittings",
    subcategory: "Stub End (Long Pattern)",
    type: "Seamless / Welded",
    name: "Stub End (Long Pattern)",
    shortDescription: "Designed for Lap Joint Flange Assemblies. Extended body length for greater mechanical strength at the flange connection.",
    description:
      "Long Pattern Stub Ends are designed for use with Lap Joint Flanges in applications requiring frequent dismantling without disturbing the gasket or pipeline alignment. The extended body length provides additional support and alignment, making long pattern stub ends preferable where greater mechanical strength or rigidity at the flange connection is required. The precision-machined sealing face ensures a reliable, leak-proof flange joint. Manufactured to MSS SP-43 in seamless and welded construction.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Pattern", value: "Long Pattern" },
      { label: "Face Type", value: "Precision-Machined Sealing Face" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-stub-end-long-pattern.webp",
    metaTitle: "Stub End Long Pattern | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Stub Ends (Long Pattern) for Lap Joint Flanges in SS, Duplex, Inconel, Hastelloy. 1/2\"–48\", MSS SP-43. Extended body for greater rigidity. Frequent-dismantle service. Prayag Steel.",
  },

  // ── 12. Cross ─────────────────────────────────────────────────────────────
  {
    id: "fit-012",
    slug: "buttweld-fitting-cross",
    division: "fittings",
    subcategory: "Cross",
    type: "Seamless / Welded / Fabricated",
    name: "Cross",
    shortDescription: "Four-Way Pipeline Connection. Provides a four-outlet junction for complex distribution or collection piping.",
    description:
      "Cross fittings provide a four-way pipeline connection, allowing flow to be distributed to or collected from three branch directions at a single junction point. They are used in complex piping manifolds, distribution headers, and collection systems across chemical processing, petrochemical, and power industries. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction across a full range of corrosion-resistant alloys.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-cross.webp",
    metaTitle: "Cross Fitting | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Cross Fittings in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Four-way pipeline junction. Seamless, welded & fabricated. Prayag Steel India.",
  },

  // ── 13. Lateral Tee (45 Degree) ───────────────────────────────────────────
  {
    id: "fit-013",
    slug: "buttweld-fitting-lateral-tee-45deg",
    division: "fittings",
    subcategory: "Lateral Tee (45 Degree)",
    type: "Seamless / Welded / Fabricated",
    name: "Lateral Tee (45 Degree)",
    shortDescription: "Efficient Flow Diversion. 45 degree branch angle minimises turbulence and pressure loss at the branch take-off.",
    description:
      "Lateral Tees with a 45 degree branch angle provide efficient flow diversion with significantly less turbulence and pressure loss than a standard 90 degree tee. The angled branch allows flow to merge or diverge with less disruption to the main flow stream, making lateral tees well-suited to high-velocity services, slurry lines, and applications where minimising pressure drop at branch points is important. Manufactured to ASME B16.9 in seamless, welded, and fabricated construction.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Branch Angle", value: "45 Degrees" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-lateral-tee-45deg.webp",
    metaTitle: "Lateral Tee 45 Degree | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Lateral Tees (45 Degree) in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\", ASME B16.9. Reduced turbulence at branch. Seamless, welded & fabricated. Prayag Steel.",
  },

  // ── 14. Pipe Bend ─────────────────────────────────────────────────────────
  {
    id: "fit-014",
    slug: "buttweld-fitting-pipe-bend",
    division: "fittings",
    subcategory: "Pipe Bend",
    type: "Induction / Cold Formed",
    name: "Pipe Bend",
    shortDescription: "Large Radius Flow Control. Available in 3D, 5D, 8D, and 10D radius configurations for ultra-low pressure-drop piping.",
    description:
      "Pipe Bends are manufactured in large radius configurations — 3D, 5D, 8D, and 10D — to provide ultra-low pressure-drop directional changes in piping systems. Their longer radius compared to standard elbows results in lower turbulence, erosion, and noise, making them preferred in high-velocity, abrasive, or pulsating flow services. Produced by induction bending or cold forming from seamless pipe stock in a full range of corrosion-resistant alloys.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Available In", value: "3D, 5D, 8D, 10D Radius Configurations" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-pipe-bend.webp",
    metaTitle: "Pipe Bend | Buttweld Fittings | Prayag Steel",
    metaDescription:
      "Pipe Bends (3D, 5D, 8D, 10D) in SS, Duplex, Inconel, Hastelloy. 1/2\"–48\", ASME B16.9. Ultra-low pressure drop. Induction & cold-formed. Prayag Steel India.",
  },

  // ── 15. Miter Bend ────────────────────────────────────────────────────────
  {
    id: "fit-015",
    slug: "buttweld-fitting-miter-bend",
    division: "fittings",
    subcategory: "Miter Bend",
    type: "Fabricated",
    name: "Miter Bend",
    shortDescription: "Engineered for Project-Specific Requirements. Custom-fabricated to customer drawings and international standards.",
    description:
      "Miter Bends are custom-fabricated fittings manufactured according to customer drawings and international standards for specialised industrial applications. Produced by cutting and welding pipe segments at precise angles, they are used where large diameter directional changes are required and standard elbow fittings are unavailable or uneconomical. Each miter bend is engineered for the specific project requirements including pressure class, material, and geometry.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-miter-bend.webp",
    metaTitle: "Miter Bend | Custom Fabricated Fittings | Prayag Steel",
    metaDescription:
      "Miter Bends fabricated to customer drawings in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–48\". Project-specific engineering. Prayag Steel India.",
  },

  // ── 16. Barred Tee ────────────────────────────────────────────────────────
  {
    id: "fit-016",
    slug: "buttweld-fitting-barred-tee",
    division: "fittings",
    subcategory: "Barred Tee",
    type: "Fabricated",
    name: "Barred Tee",
    shortDescription: "Engineered for Project-Specific Requirements. Tee fitting with internal bars to guide and retain pipeline pigs.",
    description:
      "Barred Tees are custom-fabricated fittings designed for use in piggable pipeline systems. Internal bars or gratings at the branch connection prevent pipeline pigs from entering the branch during pig-run operations, ensuring the pig continues along the main run. Manufactured according to customer drawings and international standards for specialised pipeline applications including oil & gas transmission, water pipelines, and piggable process systems.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-barred-tee.webp",
    metaTitle: "Barred Tee | Custom Fabricated Fittings | Prayag Steel",
    metaDescription:
      "Barred Tees for piggable pipelines in SS, Duplex, Inconel, Hastelloy. 1/2\"–48\". Customer drawing-based fabrication. Oil & gas, water, process pipelines. Prayag Steel.",
  },

  // ── 17. Swage Nipple ──────────────────────────────────────────────────────
  {
    id: "fit-017",
    slug: "buttweld-fitting-swage-nipple",
    division: "fittings",
    subcategory: "Swage Nipple",
    type: "Concentric / Eccentric",
    name: "Swage Nipple",
    shortDescription: "Compact Diameter Transition for Small Bore Piping. Combines the function of a nipple and reducer in one component.",
    description:
      "Swage nipples provide a compact, integral solution for connecting pipes of two different diameters, combining the function of a nipple and reducer in a single component. Manufactured in concentric and eccentric configurations, they are widely used in instrumentation lines, small-bore branch connections, and tight-clearance piping layouts where a full reducing fitting is impractical. Available in threaded, plain-end, or socket-weld end configurations across the full range of corrosion-resistant alloys.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Available In", value: "Concentric, Eccentric" },
      { label: "Size Range", value: "Available on Request" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-swage-nipple.webp",
    metaTitle: "Swage Nipple | Fittings | Prayag Steel",
    metaDescription:
      "Swage Nipples (concentric & eccentric) in SS, Duplex, Inconel, Hastelloy, Titanium. Small-bore diameter transitions. Instrumentation, branch connections. Prayag Steel.",
  },

  // ── 18. Pipe Nipple ───────────────────────────────────────────────────────
  {
    id: "fit-018",
    slug: "buttweld-fitting-pipe-nipple",
    division: "fittings",
    subcategory: "Pipe Nipple",
    type: "Threaded / Plain End / Welded",
    name: "Pipe Nipple",
    shortDescription: "Short-Length Connector for Fittings & Valves. Threaded, plain end, or welded at both ends.",
    description:
      "Pipe nipples are short lengths of pipe, threaded, plain, or welded at both ends, used to connect two fittings, a fitting and a valve, or two components positioned close together. They provide a reliable, standardised method of joining piping components in compact assemblies. Manufactured in threaded, plain end, and welded configurations across the full range of corrosion-resistant alloy families for process, instrumentation, and utility piping.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Available In", value: "Threaded, Plain End, Welded" },
      { label: "Size Range", value: "Available on Request" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-pipe-nipple.webp",
    metaTitle: "Pipe Nipple | Fittings | Prayag Steel",
    metaDescription:
      "Pipe Nipples (threaded, plain end, welded) in SS, Duplex, Inconel, Hastelloy, Titanium. Compact assembly connectors. Instrumentation & process piping. Prayag Steel.",
  },

  // ── 19. Reducer Insert ────────────────────────────────────────────────────
  {
    id: "fit-019",
    slug: "buttweld-fitting-reducer-insert",
    division: "fittings",
    subcategory: "Reducer Insert",
    type: "Socket Weld / Threaded",
    name: "Reducer Insert",
    shortDescription: "In-Fitting Bore Reduction. Steps down the bore within an existing socket-weld or threaded fitting.",
    description:
      "Reducer inserts are used to step down the bore size within an existing socket-weld or threaded fitting, allowing a size transition without introducing a separate reducer fitting into the line. They are a space-efficient solution for small-bore piping systems requiring a diameter change at a single connection point. Available in socket-weld and threaded end configurations across the full range of corrosion-resistant alloys.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Available In", value: "Socket Weld, Threaded" },
      { label: "Size Range", value: "Available on Request" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-reducer-insert.webp",
    metaTitle: "Reducer Insert | Fittings | Prayag Steel",
    metaDescription:
      "Reducer Inserts (SW & threaded) in SS, Duplex, Inconel, Hastelloy. In-fitting bore reduction for small-bore piping. Space-efficient diameter transitions. Prayag Steel.",
  },

  // ── 20. Header Assembly ───────────────────────────────────────────────────
  {
    id: "fit-020",
    slug: "buttweld-fitting-header-assembly",
    division: "fittings",
    subcategory: "Header Assembly",
    type: "Fabricated",
    name: "Header Assembly",
    shortDescription: "Engineered for Project-Specific Requirements. Custom-fabricated flow distribution headers manufactured to customer drawings.",
    description:
      "Header Assemblies are custom-fabricated flow distribution or collection manifolds manufactured according to customer drawings and international standards for specialised industrial applications. Engineered to handle multiple branch connections from a single run pipe, they are used in chemical process plants, power stations, oil & gas facilities, and heat exchanger installations where centralised flow distribution is required.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-header-assembly.webp",
    metaTitle: "Header Assembly | Custom Fabricated Fittings | Prayag Steel",
    metaDescription:
      "Header Assemblies fabricated to customer drawings in SS, Duplex, Inconel, Hastelloy, Titanium. Flow distribution manifolds. Chemical, power, oil & gas. Prayag Steel.",
  },

  // ── 21. Transition Piece ──────────────────────────────────────────────────
  {
    id: "fit-021",
    slug: "buttweld-fitting-transition-piece",
    division: "fittings",
    subcategory: "Transition Piece",
    type: "Fabricated",
    name: "Transition Piece",
    shortDescription: "Engineered for Project-Specific Requirements. Custom-fabricated shape transitions for specialised piping geometry.",
    description:
      "Transition Pieces are custom-fabricated fittings manufactured according to customer drawings and international standards for specialised industrial applications. They provide geometry changes between different cross-sections — circular to rectangular, oval to round, or other bespoke shapes — that cannot be accommodated by standard catalogue fittings. Used in ductwork, pressure vessels, and process piping where non-standard transitions are required.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: FALLBACK_SPECS,
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-transition-piece.webp",
    metaTitle: "Transition Piece | Custom Fabricated Fittings | Prayag Steel",
    metaDescription:
      "Transition Pieces fabricated to customer drawings in SS, Duplex, Inconel, Hastelloy, Titanium. Custom geometry changes. Ductwork, pressure vessels, process piping. Prayag Steel.",
  },

  // ── 22. Fabricated Fittings (Catch-all) ───────────────────────────────────
  // Also covers Piggable Tee, Spools, and Special Fabrications mentioned in
  // the source as available on request but not given individual product entries.
  {
    id: "fit-022",
    slug: "buttweld-fitting-fabricated-fittings",
    division: "fittings",
    subcategory: "Fabricated Fittings",
    type: "Fabricated",
    name: "Fabricated Fittings",
    shortDescription: "Engineered for Project-Specific Requirements. Custom fabrications including Piggable Tees, Spools, and Special Fabrications.",
    description:
      "Fabricated Fittings encompass the full range of custom-engineered piping components manufactured according to customer drawings and international standards for specialised industrial applications. This category includes Piggable Tees, Pipe Spools, Special Fabrications, and any bespoke fitting geometry not covered by standard catalogue products. All fabrications are manufactured from the same comprehensive range of corrosion-resistant alloys and are subject to the same rigorous testing and inspection procedures as standard products.",
    materials: [],
    standards: FITTINGS_STANDARDS,
    specs: [
      ...FALLBACK_SPECS,
      { label: "Includes", value: "Piggable Tee, Spools, Special Fabrications (Available on Request)" },
    ],
    materialsTable: FITTINGS_MATERIALS,
    image: "products/fittings/buttweld-fitting-fabricated-fittings.webp",
    metaTitle: "Fabricated Fittings | Custom Fittings | Prayag Steel",
    metaDescription:
      "Custom Fabricated Fittings in SS, Duplex, Inconel, Hastelloy, Titanium. Piggable Tees, Spools, Special Fabrications. Drawing-based manufacturing. Prayag Steel India.",
  },
];
