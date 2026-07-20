import type { Product, MaterialFamily } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Flanges Division — Type-First Model
// subcategory = flange type (e.g. "Weld Neck Flange")
// materialsTable is shared across ALL 10 products — reference FLANGES_MATERIALS,
// never duplicate by value.
//
// NOTE: Incoloy is merged into Nickel Alloys — confirmed intentional.
//       This deviates from pipes.ts where Incoloy is a separate subcategory.
//
// NOTE: Plate flange material standards are intentionally omitted per client
//       decision. Only forged flange data is included here. Do not add plate
//       flange specs back in without corresponding confirmed plate material
//       standards.
//
// NOTE: Facing types (RF, FF, RTJ, Serrated, Tongue, Groove) are NOT enumerated
//       here. The source document (flange_website.docx Section 12) lists
//       "Facing Types" as a heading but provides no values. Flagged for client
//       confirmation before adding as a spec row.
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared materials table (define ONCE, reference from every product) ───────
export const FLANGES_MATERIALS: MaterialFamily[] = [
  {
    family: "Stainless Steel (Austenitic)",
    standard: "ASTM A182",
    grades: [
      "F304 (S30400)", "F304L (S30403)", "F304H (S30409)",
      "F310 (S31000)", "F310S (S31008)",
      "F316 (S31600)", "F316L (S31603)", "F316Ti (S31635)",
      "F317 (S31700)", "F317L (S31703)",
      "F321 (S32100)", "F321H (S32109)",
      "F347 (S34700)", "F347H (S34709)",
      "F904L (N08904)",
    ],
  },
  {
    family: "Duplex Stainless Steel",
    standard: "ASTM A182",
    grades: [
      "F51 — Duplex 2205 (S31803/S32205)",
      "F68 — Duplex 2304 (S32304)",
    ],
  },
  {
    family: "Super Duplex Stainless Steel",
    standard: "ASTM A182",
    grades: [
      "F53 — Super Duplex 2507 (S32750)",
      "F55 — Super Duplex (S32760)",
    ],
  },
  {
    // Incoloy merged into Nickel Alloys — confirmed intentional.
    // See file-level comment for context.
    family: "Nickel Alloys",
    standard: "ASTM B564",
    grades: [
      "Inconel 600 (N06600)", "Inconel 601 (N06601)",
      "Inconel 617 (N06617)", "Inconel 625 (N06625)",
      "Inconel 718 (N07718, also ASTM B637)",
      "Incoloy 800 (N08800)", "Incoloy 800H (N08810)",
      "Incoloy 800HT (N08811)", "Incoloy 825 (N08825)",
    ],
  },
  {
    family: "Monel",
    standard: "ASTM B564",
    grades: ["Monel 400 (N04400)", "Monel K500 (N05500)"],
  },
  {
    family: "Hastelloy",
    standard: "ASTM B564",
    grades: ["C22 (N06022)", "C276 (N10276)", "B2 (N10665)", "B3 (N10675)", "X (N06002)"],
  },
  {
    family: "Titanium",
    standard: "ASTM B381",
    grades: [
      "Grade 1 (F1, R50250)", "Grade 2 (F2, R50400)",
      "Grade 5 / Ti-6Al-4V (F5, R56400)",
      "Grade 7 (F7, R52400)", "Grade 12 (F12, R53400)",
    ],
  },
  {
    family: "Nickel",
    standard: "ASTM B564",
    grades: ["Nickel 200 (N02200)", "Nickel 201 (N02201)"],
  },
  {
    family: "Copper Nickel",
    standard: "ASTM B151",
    grades: ["90/10 Cu-Ni (C70600)", "70/30 Cu-Ni (C71500)"],
  },
  {
    family: "Alloy 20",
    standard: "ASTM B462",
    grades: ["Alloy 20 (N08020)"],
  },
];

// ── Shared standards (dimensional/manufacturing) for all 10 products ─────────
const FLANGES_STANDARDS = [
  "ASME B16.5",
  "ASME B16.47 Series A",
  "ASME B16.47 Series B",
  "ASME B16.48",
  "MSS SP-44",
  "EN 1092-1",
  "DIN Series",
  "JIS Series",
  "BS 10",
];

// ── Shared fallback specs (forged only — per client decision) ─────────────────
// NOTE: Facing types (RF, FF, RTJ, Serrated, Tongue, Groove) not yet enumerated
// in source document — Section 12 of flange_website.docx lists "Facing Types"
// as a heading but doesn't provide values. Flag for client confirmation before
// adding as a spec row.
const FLANGES_SPECS = [
  { label: "Manufacturing Type", value: "Forged" },
  { label: "Size Range", value: "1/2\" to 60\" (Custom Sizes Available)" },
  {
    label: "Pressure Class",
    value:
      "150#, 300#, 400#, 600#, 900#, 1500#, 2500# | PN6, PN10, PN16, PN25, PN40, PN64, PN100, PN160",
  },
  {
    label: "Surface Finish",
    value: "Machined, Pickled, Passivated, Glass Bead, Mirror Polish, Electropolished",
  },
  {
    label: "Heat Treatment",
    value: "Solution Annealing, Stress Relieving (as required)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// The 10 Products
// materials: [] — for type-first divisions the authoritative material list is
//   materialsTable (FLANGES_MATERIALS). The materials array is kept empty to
//   avoid contradicting the table or creating duplicated maintenance burden.
// ─────────────────────────────────────────────────────────────────────────────
export const flanges: Product[] = [
  // ── 1. Weld Neck Flange ───────────────────────────────────────────────────
  {
    id: "flg-001",
    slug: "weld-neck-flange",
    division: "flanges",
    subcategory: "Weld Neck Flange",
    type: "Forged",
    name: "Weld Neck Flange",
    shortDescription:
      "Designed for high pressure and cyclic service. Suitable for severe operating conditions where strength and fatigue resistance are essential.",
    description:
      "Weld Neck Flanges are designed for high pressure and cyclic service, suitable for severe operating conditions where strength and fatigue resistance are essential. The tapered hub transitions smoothly from flange thickness to pipe wall thickness, minimising stress concentration at the junction. This makes weld neck flanges the preferred choice for high-pressure, high-temperature, and vibrating service applications across oil & gas, petrochemical, power, and nuclear industries.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/weld-neck-flange.webp",
    metaTitle: "Weld Neck Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Weld Neck Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. High pressure & cyclic service. Prayag Steel India.",
  },

  // ── 2. Slip-On Flange ─────────────────────────────────────────────────────
  {
    id: "flg-002",
    slug: "slip-on-flange",
    division: "flanges",
    subcategory: "Slip-On Flange",
    type: "Forged",
    name: "Slip-On Flange",
    shortDescription:
      "Economical solution for low to medium pressure applications. Easy alignment and faster installation.",
    description:
      "Slip-On Flanges provide an economical solution for low to medium pressure applications, offering easy alignment and faster installation compared to weld neck flanges. The flange slips over the pipe outer diameter and is fillet-welded both inside and outside, providing adequate strength for moderate service conditions. Widely used in utility piping, water treatment, and general process piping where the operating conditions do not demand the reinforcement of a weld neck flange.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/slip-on-flange.webp",
    metaTitle: "Slip-On Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Slip-On Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. Low to medium pressure service. Prayag Steel India.",
  },

  // ── 3. Blind Flange ───────────────────────────────────────────────────────
  {
    id: "flg-003",
    slug: "blind-flange",
    division: "flanges",
    subcategory: "Blind Flange",
    type: "Forged",
    name: "Blind Flange",
    shortDescription:
      "Used for positive pipeline isolation and pressure testing. Provides complete sealing of pipe ends.",
    description:
      "Blind Flanges are used for positive pipeline isolation and pressure testing, providing complete sealing of pipe ends. As solid disc flanges, they must withstand the full pipeline pressure and are available across all pressure classes. They are used to close off the end of a pipeline or pressure vessel, to allow access for future branch connections, or as isolation blanks during maintenance and hydrostatic testing operations.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/blind-flange.webp",
    metaTitle: "Blind Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Blind Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. Pipeline isolation & pressure testing. Prayag Steel India.",
  },

  // ── 4. Socket Weld Flange ─────────────────────────────────────────────────
  {
    id: "flg-004",
    slug: "socket-weld-flange",
    division: "flanges",
    subcategory: "Socket Weld Flange",
    type: "Forged",
    name: "Socket Weld Flange",
    shortDescription:
      "Ideal for small bore high pressure piping systems. Excellent for process and hydraulic applications.",
    description:
      "Socket Weld Flanges are ideal for small bore high pressure piping systems and are particularly well suited to process and hydraulic applications. The pipe is inserted into the socket bore and fillet-welded on the outside, providing a strong and leak-resistant joint without requiring pipe end bevelling. Their compact design and high pressure rating make them preferred in instrumentation, hydraulic, and chemical process piping of small nominal diameter.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/socket-weld-flange.webp",
    metaTitle: "Socket Weld Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Socket Weld Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. Small bore high pressure service. Prayag Steel India.",
  },

  // ── 5. Threaded Flange ────────────────────────────────────────────────────
  {
    id: "flg-005",
    slug: "threaded-flange",
    division: "flanges",
    subcategory: "Threaded Flange",
    type: "Forged",
    name: "Threaded Flange",
    shortDescription:
      "Designed for piping systems where welding is not possible. Suitable for hazardous environments.",
    description:
      "Threaded Flanges are designed for piping systems where welding is not possible or desirable, and are particularly suitable for hazardous environments where field welding carries safety risks. The flange is screwed onto the pipe using a tapered or parallel thread, eliminating the need for hot work. They are used in small bore piping for low to moderate pressure services in areas with explosive atmospheres, high fire risk, or other environments where welding is prohibited.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/threaded-flange.webp",
    metaTitle: "Threaded Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Threaded Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. No-weld installation for hazardous environments. Prayag Steel.",
  },

  // ── 6. Lap Joint Flange ───────────────────────────────────────────────────
  {
    id: "flg-006",
    slug: "lap-joint-flange",
    division: "flanges",
    subcategory: "Lap Joint Flange",
    type: "Forged",
    name: "Lap Joint Flange",
    shortDescription:
      "Used together with Stub Ends. Excellent for systems requiring frequent dismantling.",
    description:
      "Lap Joint Flanges are used together with Stub Ends (also called lap joint stub ends) and are particularly well suited to systems requiring frequent dismantling for inspection, cleaning, or component replacement. Because the flange slides freely on the pipe, it can be rotated to align bolt holes without disturbing the pipe or gasket, saving time during maintenance operations. The backing flange is typically made from a less expensive material than the stub end, reducing overall cost when high-alloy materials are required in the process stream.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/lap-joint-flange.webp",
    metaTitle: "Lap Joint Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Lap Joint Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. ASME B16.5. Used with Stub Ends for frequent-dismantle systems. Prayag Steel.",
  },

  // ── 7. Orifice Flange ─────────────────────────────────────────────────────
  {
    id: "flg-007",
    slug: "orifice-flange",
    division: "flanges",
    subcategory: "Orifice Flange",
    type: "Forged",
    name: "Orifice Flange",
    shortDescription:
      "Designed for flow measurement systems. Available with pressure tap holes.",
    description:
      "Orifice Flanges are specifically designed for flow measurement systems. They are supplied as matched pairs with precisely machined pressure tap holes drilled radially through the flange body, allowing differential pressure measurement across an orifice plate. Available in weld neck and slip-on configurations with either 1\" NPT or 1/2\" NPT tappings, they are used in conjunction with orifice plates, flow nozzles, and venturi tubes for accurate process flow measurement.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: [
      ...FLANGES_SPECS,
      { label: "Tappings", value: "1\" NPT or 1/2\" NPT Pressure Tap Holes" },
      { label: "Supply", value: "Matched Pairs" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/orifice-flange.webp",
    metaTitle: "Orifice Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Orifice Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. Pressure tap holes for flow measurement. ASME B16.5. Prayag Steel India.",
  },

  // ── 8. Spectacle Blind ────────────────────────────────────────────────────
  {
    id: "flg-008",
    slug: "spectacle-blind",
    division: "flanges",
    subcategory: "Spectacle Blind",
    type: "Forged / Fabricated",
    name: "Spectacle Blind",
    shortDescription:
      "Used for positive isolation in process pipelines. Ideal for maintenance and shutdown operations.",
    description:
      "Spectacle Blinds are used for positive isolation in process pipelines and are ideal for maintenance and shutdown operations. Consisting of two discs connected by a central bar — one solid (blind) and one ring (open) — they can be rotated within the bolted flange assembly to either isolate or allow flow without disturbing the pipeline. This allows rapid, positive, and visible confirmation of the isolation status, making spectacle blinds widely used in refineries, chemical plants, and process facilities where regular isolation is required.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/spectacle-blind.webp",
    metaTitle: "Spectacle Blind | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Spectacle Blinds in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. Positive pipeline isolation for maintenance & shutdown. Prayag Steel India.",
  },

  // ── 9. Reducing Flange ────────────────────────────────────────────────────
  {
    id: "flg-009",
    slug: "reducing-flange",
    division: "flanges",
    subcategory: "Reducing Flange",
    type: "Forged",
    name: "Reducing Flange",
    shortDescription:
      "Provides size transition while maintaining flange connection.",
    description:
      "Reducing Flanges provide a size transition between two different pipe diameters while maintaining a bolted flange connection. They combine the function of a reducer and a flange in a single component, eliminating the need for a separate reducing fitting upstream of the flange. This simplifies the piping layout, reduces the number of weld joints, and saves space in congested areas. Available in weld neck, slip-on, and socket-weld configurations across a comprehensive range of corrosion-resistant alloys.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: FLANGES_SPECS,
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/reducing-flange.webp",
    metaTitle: "Reducing Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged Reducing Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. Size transition with flange connection. ASME B16.5. Prayag Steel India.",
  },

  // ── 10. Ring Type Joint (RTJ) ─────────────────────────────────────────────
  {
    id: "flg-010",
    slug: "ring-type-joint-rtj-flange",
    division: "flanges",
    subcategory: "Ring Type Joint (RTJ) Flange",
    type: "Forged",
    name: "Ring Type Joint (RTJ) Flange",
    shortDescription:
      "Designed for extremely high pressure and high temperature applications.",
    description:
      "Ring Type Joint (RTJ) Flanges are designed for extremely high pressure and high temperature applications where conventional gasket-and-raised-face designs cannot maintain a reliable seal. A machined groove in the flange face accepts an oval or octagonal metallic ring gasket which is compressed to form a highly reliable metal-to-metal seal. RTJ flanges are used extensively in subsea, wellhead, high-pressure gas, and critical process service where leakage prevention is paramount.",
    materials: [],
    standards: FLANGES_STANDARDS,
    specs: [
      ...FLANGES_SPECS,
      { label: "Gasket Type", value: "Oval or Octagonal Metallic Ring Gasket" },
      { label: "Sealing", value: "Metal-to-Metal" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/ring-type-joint-rtj-flange.webp",
    metaTitle: "Ring Type Joint (RTJ) Flange | Forged Flanges | Prayag Steel & Engineering",
    metaDescription:
      "Forged RTJ Flanges in SS, Duplex, Inconel, Hastelloy, Titanium. 1/2\"–60\", Class 150#–2500#. Metal-to-metal seal for extreme pressure & temperature. Prayag Steel India.",
  },
];
