import type { Product, MaterialFamily } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Flanges Division — Type-First Model
// subcategory = flange type (e.g. "Weld Neck Flange")
// materialsTable is shared across ALL 12 products — reference FLANGES_MATERIALS,
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
// NOTE: Per-product standards arrays are used (not a single shared constant)
//       because applicable standards differ significantly by flange type.
//       See inline comments per product for the rationale.
//
// NOTE: RTJ — "Compatible with API Ring Joint Gaskets (R, RX & BX types)" is
//       intentionally omitted. This is a product-capability claim requiring
//       client confirmation that RTJ groove profiles are machined to API spec.
//       Do not add without explicit client sign-off.
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared materials table (define ONCE, reference from every product) ───────
export const FLANGES_MATERIALS: MaterialFamily[] = [
  {
    family: "Stainless Steel",
    standard: "ASTM A182",
    grades: ["304", "304L", "304H", "316", "316L", "316Ti", "317L", "321", "347", "904L"],
  },
  {
    family: "Duplex",
    standard: "ASTM A182",
    grades: ["2205", "2304"],
  },
  {
    family: "Super Duplex",
    standard: "ASTM A182",
    grades: ["2507", "Zeron 100"],
  },
  {
    family: "Nickel Alloys",
    standard: "ASTM A182 / ASTM B564",
    grades: ["Inconel 600", "625", "718", "800H", "825"],
  },
  {
    family: "Monel",
    standard: "ASTM B564",
    grades: ["400", "K500"],
  },
  {
    family: "Hastelloy",
    standard: "ASTM B564",
    grades: ["C22", "C276", "B2", "B3", "X"],
  },
  {
    family: "Titanium",
    standard: "ASTM B381",
    grades: ["Grade 2", "Grade 5", "Grade 7"],
  },
  {
    family: "Copper Nickel",
    standard: "ASTM B151",
    grades: ["90/10", "70/30"],
  },
  {
    family: "Alloy 20",
    standard: "ASTM B462",
    grades: ["Alloy 20"],
  },
  {
    family: "Nickel",
    standard: "ASTM B160",
    grades: ["Nickel 200", "Nickel 201"],
  },
  {
    family: "Custom & Exotic Alloys",
    standard: "",
    grades: ["Available on Request"],
  },
];

// ── Per-product standards sets ────────────────────────────────────────────────
// FULL: used by Weld Neck, Slip-On, Blind, Lap Joint, Reducing, RTJ,
//       Male-Female, Tongue & Groove — all large-diameter capable flanges.
const STD_FULL = [
  "ASME B16.5",
  "ASME B16.47 Series A",
  "ASME B16.47 Series B",
  "MSS SP-44",
  "EN 1092-1",
  "DIN Series",
  "JIS Series",
  "BS 10",
];

// SOCKET WELD: B16.47 does not apply (covers NPS 26–60 only; SW is small bore).
const STD_SOCKET_WELD = [
  "ASME B16.5",
  "MSS SP-44",
  "EN 1092-1",
  "DIN Series",
  "JIS Series",
  "BS 10",
];

// THREADED & ORIFICE: not manufactured in large-diameter ranges covered by
// B16.47 or MSS SP-44; B16.48 not applicable.
const STD_THREADED_ORIFICE = [
  "ASME B16.5",
  "EN 1092-1",
  "DIN Series",
  "JIS Series",
  "BS 10",
];

// SPECTACLE BLIND: B16.48 is the governing spec — listed first.
const STD_SPECTACLE = [
  "ASME B16.48",
  "ASME B16.5",
  "ASME B16.47 Series A",
  "ASME B16.47 Series B",
  "MSS SP-44",
  "EN 1092-1",
  "DIN Series",
  "JIS Series",
  "BS 10",
];

// ── Shared base spec rows (most products) ─────────────────────────────────────
// Size Range reflects the ASME B16.5 / B16.47 split accurately.
// Products that differ (Socket Weld, Threaded, Spectacle Blind, RTJ) build
// their own specs array inline.
const FLANGES_SPECS = [
  { label: "Manufacturing Type", value: "Forged" },
  {
    label: "Size Range",
    value: "½\" to 24\" NPS (ASME B16.5), 26\" to 60\" NPS (ASME B16.47)",
  },
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
// The 12 Products
// materials: [] — for type-first divisions the authoritative material list is
//   materialsTable (FLANGES_MATERIALS). The materials array is kept empty to
//   avoid contradicting the table or creating duplicated maintenance burden.
// ─────────────────────────────────────────────────────────────────────────────
export const flanges: Product[] = [
  // ── 1. Weld Neck Flange ───────────────────────────────────────────────────
  {
    id: "flg-001",
    slug: "weld-neck-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Weld Neck Flange",
    type: "Forged",
    name: "Weld Neck Flange",
    shortDescription:
      "Engineered for high-pressure, high-temperature, and cyclic service, Weld Neck Flanges provide superior structural integrity, fatigue resistance, and reliable long-term performance in critical piping systems.",
    description:
      "Weld Neck Flanges are forged flanges featuring a long tapered hub that is butt-welded directly to the pipe, providing a smooth transition between the flange and piping system. This design minimizes stress concentration at the weld joint and ensures uniform load distribution, making Weld Neck Flanges the preferred choice for high-pressure, high-temperature, and cyclic service conditions.\n\nWidely used in critical process industries such as oil & gas, petrochemicals, power generation, offshore, chemical processing, pharmaceuticals, and nuclear facilities, Weld Neck Flanges offer excellent mechanical strength, superior fatigue resistance, and long service life. Manufactured to international standards, they are available in a wide range of stainless steels, duplex steels, nickel alloys, titanium, and other corrosion-resistant materials to suit demanding industrial applications.",
    materials: [],
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Connection Type", value: "Butt Weld" },
      { label: "Hub Design", value: "Long Tapered Hub" },
      { label: "Bore Type", value: "Standard Bore / Schedule Bore" },
      { label: "Facing Types", value: "RF, RTJ, FF, T&G, M&F" },
    ],
    keyFeatures: [
      "Long tapered hub minimizes stress concentration",
      "Excellent fatigue resistance",
      "High structural strength",
      "Suitable for high-pressure and high-temperature service",
      "Full-penetration butt weld connection",
      "Excellent resistance to thermal cycling",
      "Precision machined sealing faces",
      "Long service life in critical applications",
    ],
    applications: [
      "Oil & Gas",
      "Petrochemical Plants",
      "Refineries",
      "Chemical Processing",
      "Power Generation",
      "Offshore Platforms",
      "LNG Facilities",
      "Nuclear Power Plants",
      "Fertilizer Plants",
      "Pharmaceutical Industry",
      "Marine & Shipbuilding",
    ],
    inspectionTesting: [
      "PMI",
      "Dimensional Inspection",
      "Visual Inspection",
      "Ultrasonic Testing (UT)",
      "Liquid Penetrant Testing (PT)",
      "Hardness Test",
      "Ferrite Test (on request)",
      "IGC Test (on request)",
      "Third Party Inspection (TPI)",
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/weld-neck-flange.webp",
    metaTitle: "Weld Neck Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Weld Neck Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. ASME B16.5, Class 150#–2500#. Long tapered hub for superior fatigue resistance and high-pressure, high-temperature cyclic service. Manufacturer in India.",
  },

  // ── 2. Slip-On Flange ─────────────────────────────────────────────────────
  {
    id: "flg-002",
    slug: "slip-on-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Slip-On Flange",
    type: "Forged",
    name: "Slip-On Flange",
    shortDescription:
      "Cost-effective forged flanges designed for easy installation, accurate alignment, and reliable sealing in low to medium pressure piping systems.",
    description:
      "Slip-On Flanges are forged flanges designed to slide over the outside diameter of the pipe before being secured with fillet welds on both the inside and outside. Their simple design allows for easy alignment during installation, making them a cost-effective solution for low to medium pressure and moderate temperature applications.\n\nManufactured to international standards, they are available in a wide range of stainless steels, duplex steels, nickel alloys, titanium, and other corrosion-resistant materials for dependable service across diverse industries.",
    materials: [],
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Connection Type", value: "Slip-On with Double Fillet Weld" },
      { label: "Bore Type", value: "Oversized Bore for Easy Pipe Alignment" },
      { label: "Facing Types", value: "RF, RTJ, FF, T&G, M&F" },
    ],
    keyFeatures: [
      "Easy pipe alignment and installation",
      "Double fillet weld connection",
      "Cost-effective alternative to Weld Neck Flanges",
      "Suitable for low to medium pressure service",
      "Reduced fabrication and installation time",
      "Precision machined sealing faces",
      "Available in multiple facing types",
      "Manufactured from corrosion-resistant alloys",
    ],
    applications: [
      "Water Treatment Plants",
      "Chemical Processing",
      "Petrochemical Plants",
      "Utility Piping",
      "Fire Protection Systems",
      "HVAC Systems",
      "Marine & Shipbuilding",
      "Food & Beverage Industry",
      "Pharmaceutical Utilities",
      "General Industrial Piping",
    ],
    inspectionTesting: [
      "PMI",
      "Dimensional Inspection",
      "Visual Inspection",
      "Hardness Test",
      "Ultrasonic Testing (UT)",
      "Liquid Penetrant Testing (PT)",
      "Ferrite Test (on request)",
      "IGC Test (on request)",
      "Third Party Inspection (TPI)",
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/slip-on-flange.webp",
    metaTitle: "Slip-On Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Stainless Steel Slip-On Flanges — ASTM A182, ASME B16.5, Class 150#–2500#. SS, Duplex, Inconel, Hastelloy & Titanium. Easy alignment, double fillet weld, cost-effective for low to medium pressure service. Manufacturer in India.",
  },

  // ── 3. Blind Flange ───────────────────────────────────────────────────────
  {
    id: "flg-003",
    slug: "blind-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Blind Flange",
    type: "Forged",
    name: "Blind Flange",
    shortDescription:
      "Solid disc flanges used for positive pipeline isolation and pressure testing, providing complete sealing of pipe ends across all pressure classes.",
    description:
      "Blind Flanges are used for positive pipeline isolation and pressure testing, providing complete sealing of pipe ends. As solid disc flanges, they must withstand the full pipeline pressure and are available across all pressure classes. They are used to close off the end of a pipeline or pressure vessel, to allow access for future branch connections, or as isolation blanks during maintenance and hydrostatic testing operations.",
    materials: [],
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Construction Type", value: "Solid Disc (Without Bore)" },
      { label: "Primary Function", value: "Pipeline Isolation & Pressure Containment" },
      { label: "Facing Types", value: "RF, FF, RTJ, T&G, M&F" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/blind-flange.webp",
    metaTitle: "Blind Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Blind Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Solid disc construction for positive pipeline isolation and pressure containment. ASME B16.5 / B16.47, Class 150#–2500#. Manufacturer and supplier in India.",
  },

  // ── 4. Socket Weld Flange ─────────────────────────────────────────────────
  // NOTE: B16.47 (covers NPS 26–60) does not apply — Socket Weld flanges are
  //       standardised in small bore sizes only (1/2" to 24" per ASME B16.5).
  {
    id: "flg-004",
    slug: "socket-weld-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Socket Weld Flange",
    type: "Forged",
    name: "Socket Weld Flange",
    shortDescription:
      "Ideal for small bore high pressure piping systems. Excellent for process and hydraulic applications.",
    description:
      "Socket Weld Flanges are ideal for small bore high pressure piping systems and are particularly well suited to process and hydraulic applications. The pipe is inserted into the socket bore and fillet-welded on the outside, providing a strong and leak-resistant joint without requiring pipe end bevelling. Their compact design and high pressure rating make them preferred in instrumentation, hydraulic, and chemical process piping of small nominal diameter.",
    materials: [],
    standards: STD_SOCKET_WELD,
    specs: [
      { label: "Manufacturing Type", value: "Forged" },
      { label: "Size Range", value: "1/2\" to 24\" NPS (ASME B16.5)" },
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
      { label: "Connection Type", value: "Socket Weld" },
      { label: "Socket Design", value: "Precision Machined Socket Bore" },
      { label: "Weld Type", value: "External Fillet Weld" },
      {
        label: "Pipe Fitment",
        value: "Recessed Socket with Expansion Gap as per ASME B16.5",
      },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/socket-weld-flange.webp",
    metaTitle: "Socket Weld Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Socket Weld Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. 1/2\"–24\" NPS, ASME B16.5, Class 150#–2500#. Precision machined socket bore with external fillet weld for small bore high-pressure piping. Manufacturer in India.",
  },

  // ── 5. Threaded Flange ────────────────────────────────────────────────────
  // NOTE: B16.47, B16.48, and MSS SP-44 are not applicable — Threaded flanges
  //       are not manufactured in the large-diameter ranges those standards cover.
  {
    id: "flg-005",
    slug: "threaded-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Threaded Flange",
    type: "Forged",
    name: "Threaded Flange",
    shortDescription:
      "Suitable for applications where field welding is restricted or impractical, including hazardous areas where minimizing hot work is preferred.",
    description:
      "Threaded Flanges are designed for piping systems where welding is not possible or desirable, and are suitable for applications where field welding is restricted or impractical, including hazardous areas where minimizing hot work is preferred. The flange is screwed onto the pipe using a tapered or parallel thread, eliminating the need for hot work. They are used in small bore piping for low to moderate pressure services in areas with explosive atmospheres, high fire risk, or other environments where welding is prohibited.",
    materials: [],
    standards: STD_THREADED_ORIFICE,
    specs: [
      { label: "Manufacturing Type", value: "Forged" },
      { label: "Size Range", value: "1/2\" to 24\" NPS" },
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
      { label: "Connection Type", value: "Threaded (Screwed Connection)" },
      { label: "Thread Type", value: "NPT, BSPP, BSPT or Custom Threads" },
      { label: "Installation", value: "No Welding Required" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/threaded-flange.webp",
    metaTitle: "Threaded Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Threaded Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. NPT, BSPP & BSPT threads. ASME B16.5, Class 150#–2500#. No-weld screwed connection — ideal for hazardous environments where hot work is restricted. Manufacturer in India.",
  },

  // ── 6. Lap Joint Flange ───────────────────────────────────────────────────
  {
    id: "flg-006",
    slug: "lap-joint-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Lap Joint Flange",
    type: "Forged",
    name: "Lap Joint Flange",
    shortDescription:
      "Used together with Stub Ends. Excellent for systems requiring frequent dismantling.",
    description:
      "Lap Joint Flanges are used together with Stub Ends (also called lap joint stub ends) and are particularly well suited to systems requiring frequent dismantling for inspection, cleaning, or component replacement. Because the flange slides freely on the pipe, it can be rotated to align bolt holes without disturbing the pipe or gasket, saving time during maintenance operations. Where process conditions permit, the backing flange may be manufactured from a different material than the stub end, providing greater material flexibility and potential cost optimization.",
    materials: [],
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Connection Type", value: "Used with Lap Joint Stub End" },
      { label: "Flange Design", value: "Rotating Backing Flange" },
      { label: "Bolt Alignment", value: "Free Rotational Alignment" },
      { label: "Facing Type", value: "Flat Face (Used with Lap Joint Stub End)" },
    ],
    relatedProducts: [
      { name: "Stub End (Short Pattern)", slug: "buttweld-fitting-stub-end-short-pattern-manufacturer-india", division: "fittings" },
      { name: "Stub End (Long Pattern)", slug: "buttweld-fitting-stub-end-long-pattern-manufacturer-india", division: "fittings" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/lap-joint-flange.webp",
    metaTitle: "Lap Joint Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Lap Joint Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Rotating backing flange with free bolt alignment — ideal for frequent-dismantle systems. Used with Lap Joint Stub Ends. ASME B16.5 / B16.47. Manufacturer in India.",
  },

  // ── 7. Orifice Flange ─────────────────────────────────────────────────────
  // NOTE: B16.47 and B16.48 do not apply to Orifice Flanges in standard practice.
  {
    id: "flg-007",
    slug: "orifice-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Orifice Flange",
    type: "Forged",
    name: "Orifice Flange",
    shortDescription:
      "Designed for flow measurement systems. Available with pressure tap holes.",
    description:
      "Orifice Flanges are specifically designed for flow measurement systems. They are supplied as matched pairs with precisely machined pressure tap holes drilled radially through the flange body, allowing differential pressure transmitters or gauges to accurately measure the pressure drop across the orifice plate for flow rate calculation. Available in weld neck and slip-on configurations with either 1\" NPT or 1/2\" NPT tappings, they are used in conjunction with orifice plates, flow nozzles, and venturi meters for accurate process flow measurement.",
    materials: [],
    standards: STD_THREADED_ORIFICE,
    specs: [
      ...FLANGES_SPECS,
      { label: "Configuration", value: "Weld Neck or Slip-On" },
      { label: "Supply", value: "Matched Pair" },
      { label: "Pressure Tappings", value: "1/2\" NPT or 1\" NPT Threaded Tap Connections" },
      { label: "Application", value: "Differential Pressure Flow Measurement" },
      { label: "Compatible Devices", value: "Orifice Plates, Flow Nozzles & Venturi Meters" },
      { label: "Facing Types", value: "Raised Face (RF), Ring Type Joint (RTJ), Flat Face (FF)" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/orifice-flange.webp",
    metaTitle: "Orifice Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Orifice Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Matched pairs with 1/2\" or 1\" NPT pressure tappings for differential pressure flow measurement. Compatible with orifice plates, flow nozzles & venturi meters. ASME B16.5. Manufacturer in India.",
  },

  // ── 8. Spectacle Blind ────────────────────────────────────────────────────
  // NOTE: ASME B16.48 is the governing specification for Spectacle Blinds —
  //       listed first. Pressure Class uses ASME classes only (PN range not
  //       applicable unless manufactured to EN standards).
  {
    id: "flg-008",
    slug: "spectacle-blind-manufacturer-india",
    division: "flanges",
    subcategory: "Spectacle Blind",
    type: "Forged / Fabricated",
    name: "Spectacle Blind",
    shortDescription:
      "Used for positive isolation in process pipelines. Ideal for maintenance and shutdown operations.",
    description:
      "Spectacle Blinds are used for positive isolation in process pipelines and are ideal for maintenance and shutdown operations. Consisting of two discs connected by a web — one solid (blind) and one open (spacer) — they can be rotated within the bolted flange assembly to either isolate or allow flow without disturbing the pipeline. This allows rapid, positive, and visible confirmation of the isolation status, making spectacle blinds widely used in refineries, chemical plants, and process facilities where regular isolation is required.",
    materials: [],
    standards: STD_SPECTACLE,
    specs: [
      // Standalone array — does not spread FLANGES_SPECS to keep Pressure Class
      // ASME-only and Manufacturing Type accurate for Forged / Fabricated.
      { label: "Manufacturing Type", value: "Forged / Fabricated" },
      {
        label: "Size Range",
        value: "½\" to 24\" NPS (ASME B16.5), 26\" to 60\" NPS (ASME B16.47)",
      },
      {
        label: "Pressure Class",
        value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500#",
      },
      {
        label: "Surface Finish",
        value: "Machined, Pickled, Passivated, Glass Bead, Mirror Polish, Electropolished",
      },
      {
        label: "Heat Treatment",
        value: "Solution Annealing, Stress Relieving (as required)",
      },
      { label: "Design", value: "Figure-Eight, Blind & Spacer Connected by Web" },
      { label: "Configuration", value: "Spectacle Blind (Blind + Spacer)" },
    ],
    relatedProducts: [
      { name: "Spacer Ring" },
      { name: "Paddle Blank" },
      { name: "Paddle Spacer" },
      {
        name: "Blind Flanges",
        slug: "blind-flange-manufacturer-india",
        division: "flanges",
      },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/spectacle-blind.webp",
    metaTitle: "Spectacle Blind Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Spectacle Blinds in SS, Duplex, Inconel, Hastelloy & Titanium. Figure-eight design — blind and spacer connected by web. ASME B16.48, Class 150#–2500#. Positive pipeline isolation for maintenance and shutdown. Manufacturer in India.",
  },

  // ── 9. Reducing Flange ────────────────────────────────────────────────────
  {
    id: "flg-009",
    slug: "reducing-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Reducing Flange",
    type: "Forged",
    name: "Reducing Flange",
    shortDescription:
      "Provides size transition while maintaining flange connection.",
    description:
      "Reducing Flanges provide a size transition between two different pipe diameters while maintaining a bolted flange connection. They combine the function of a reducer and a flange in a single component, eliminating the need for a separate reducing fitting upstream of the flange. This simplifies the piping layout, reduces the number of weld joints, and saves space in congested areas. Available in weld neck, slip-on, and socket-weld configurations across a comprehensive range of corrosion-resistant alloys.",
    materials: [],
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Configuration", value: "One Standard Flange OD with Reduced Bore" },
      { label: "Connection Type", value: "Butt Weld" },
      { label: "Bore Design", value: "Concentric Reduced Bore" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/reducing-flange.webp",
    metaTitle: "Reducing Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Reducing Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Standard OD with concentric reduced bore — combines reducer and flange function in a single component. ASME B16.5 / B16.47, Class 150#–2500#. Manufacturer in India.",
  },

  // ── 10. Ring Type Joint (RTJ) Flange ──────────────────────────────────────
  // NOTE: RTJ Pressure Class is ASME only — PN range not listed in brief spec table.
  // NOTE: API R/RX/BX ring groove compatibility is NOT claimed here. This requires
  //       client confirmation that groove profiles are machined to API specification.
  // NOTE: Sealing Method row receives the updated wording (replaces old "Metal-to-Metal"
  //       value per brief §12 correction, Interpretation A). Ring Groove row is separate.
  {
    id: "flg-010",
    slug: "ring-type-joint-rtj-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Ring Type Joint (RTJ) Flange",
    type: "Forged",
    name: "Ring Type Joint (RTJ) Flange",
    shortDescription:
      "Designed for extremely high pressure and high temperature applications.",
    description:
      "Ring Type Joint (RTJ) Flanges are designed for extremely high pressure and high temperature applications where conventional gasket-and-raised-face designs cannot maintain a reliable seal. A precision-machined ring groove in the flange face accommodates an oval or octagonal metallic ring gasket which is compressed to form a highly reliable seal under high bolt loads. RTJ flanges are used extensively in subsea, wellhead, high-pressure gas, and critical process service where leakage prevention is paramount.",
    materials: [],
    standards: STD_FULL,
    specs: [
      // Standalone array — ASME Pressure Class only (no PN range) per brief.
      { label: "Manufacturing Type", value: "Forged" },
      {
        label: "Size Range",
        value: "½\" to 24\" NPS (ASME B16.5), 26\" to 60\" NPS (ASME B16.47)",
      },
      {
        label: "Pressure Class",
        value: "150#, 300#, 400#, 600#, 900#, 1500#, 2500#",
      },
      {
        label: "Surface Finish",
        value: "Machined, Pickled, Passivated, Glass Bead, Mirror Polish, Electropolished",
      },
      {
        label: "Heat Treatment",
        value: "Solution Annealing, Stress Relieving (as required)",
      },
      { label: "Facing Type", value: "Ring Type Joint (RTJ)" },
      { label: "Gasket Type", value: "Oval or Octagonal Metallic Ring Gasket" },
      {
        label: "Sealing Method",
        value:
          "Precision-machined ring groove designed to accommodate standard metallic ring joint gaskets for leak-tight sealing under high bolt loads",
      },
      {
        label: "Ring Groove",
        value: "Precision Machined as per ASME B16.5 / API Requirements",
      },
      { label: "Available Configurations", value: "Weld Neck, Blind & Custom RTJ Flanges" },
    ],
    materialsTable: FLANGES_MATERIALS,
    faqs: [
      {
        question: "What is an RTJ Flange?",
        answer:
          "A Ring Type Joint (RTJ) Flange is a high-performance flange manufactured with a precision-machined groove cut into its face. Instead of using a standard flat or raised gasket, an oval or octagonal solid metallic ring gasket is inserted into the groove. Under high bolt tension, the metal gasket is coined into the groove, forming a robust, metal-to-metal seal that prevents leakage in extreme operating conditions.",
      },
      {
        question: "Where is an RTJ Flange used?",
        answer:
          "RTJ Flanges are primarily used in severe-service environments characterized by high pressures and elevated or fluctuating temperatures. Typical applications include offshore oil and gas platforms, subsea wellhead manifolds, high-pressure gas transmission pipelines, refinery hydrogen units, petrochemical cracking plants, and chemical processing facilities where zero leakage is mandatory.",
      },
      {
        question: "What pressure classes and size ranges are available for RTJ Flanges?",
        answer:
          "Prayag Steel manufactures RTJ Flanges across standard ASME pressure classes from Class 150# through Class 2500#, with Class 600#, 900#, 1500#, and 2500# being the most frequently demanded for high-pressure service. Size ranges cover ½\" to 24\" NPS under ASME B16.5 and 26\" to 60\" NPS under ASME B16.47 Series A and B.",
      },
      {
        question: "What is the difference between a Raised Face (RF) and a Ring Type Joint (RTJ) Flange?",
        answer:
          "A Raised Face (RF) flange uses a flat, elevated surface that compresses a non-metallic, semi-metallic, or spiral wound gasket between mating faces, suitable for standard to moderate pressure applications. In contrast, an RTJ flange features a precision-machined groove designed exclusively for metallic ring gaskets. RTJ connections can withstand significantly higher pressure surges and thermal shock than RF connections without gasket blowout.",
      },
      {
        question: "What material grades are supplied for RTJ Flanges?",
        answer:
          "We supply forged RTJ Flanges in a wide spectrum of corrosion-resistant and high-strength alloys, including Stainless Steel (304/304L, 316/316L, 321, 347, 904L), Duplex & Super Duplex (2205, 2507, Zeron 100), Nickel Alloys (Inconel 600, 625, 718, 800H, 825), Monel (400, K500), Hastelloy (C22, C276, B2, B3), Titanium (Grades 2, 5, 7), Cupro Nickel, and Alloy 20.",
      },
      {
        question: "What testing and quality inspections do RTJ Flanges undergo?",
        answer:
          "All RTJ Flanges undergo rigorous non-destructive and mechanical testing in compliance with ASME B16.5 / B16.47 and ASTM standards. Inspections include precision optical and tactile dimensional checks of the ring groove (pitch diameter, groove depth, angle, and surface finish), Positive Material Identification (PMI), ultrasonic testing (UT), intergranular corrosion (IGC) testing, and hardness testing. Material Test Certificates (EN 10204 3.1) and third-party inspection reports are provided on request.",
      },
      {
        question: "Why is the ring groove surface finish critical on an RTJ Flange?",
        answer:
          "The ring groove is the primary sealing interface. Its side walls must be machined to a smooth, precise surface finish (typically 63 µin / 1.6 µm Ra or finer) and exact 23° angular tolerances. Any roughness, scratches, or dimensional variance can prevent the metallic ring gasket from seating properly, leading to micro-leaks under high pressure.",
      },
      {
        question: "What types of metallic ring gaskets are used with RTJ Flanges?",
        answer:
          "RTJ Flanges are designed to accommodate standard oval or octagonal cross-section ring joint gaskets (such as R-type, RX-type, and BX-type metallic gaskets, depending on flange configuration and pressure rating). The gasket material is selected to be slightly softer than the flange material so that the gasket plastically deforms into the groove without damaging the flange face during bolt tightening.",
      },
    ],
    image: "products/flanges/ring-type-joint-rtj-flange.webp",
    metaTitle: "Ring Type Joint (RTJ) Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged RTJ Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Precision-machined ring groove for oval or octagonal metallic ring gaskets. ASME B16.5 / B16.47, Class 150#–2500#. Weld Neck, Blind & Custom configurations. Manufacturer in India.",
  },

  // ── 11. Male-Female Flange ────────────────────────────────────────────────
  {
    id: "flg-011",
    slug: "male-female-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Male-Female Flange",
    type: "Forged",
    name: "Male-Female Flange",
    shortDescription:
      "Matched-pair flanges where one face is raised (male) and the other is recessed (female), fully confining the gasket for leak-proof sealing.",
    description:
      "Male-Female Flanges are specialised facing flanges supplied as matched pairs: one flange is machined with a precision raised central face (male) and the mating flange carries a matching precision recessed depression (female). The gasket seats entirely within the female recess and is held under uniform compression across its full width, which helps minimize the risk of gasket displacement and blowout under specified operating conditions. This facing style is widely used in high-pressure steam lines, refineries, petrochemical plants, and cryogenic services where gasket containment and leak prevention are paramount.",
    materials: [],
    // NOTE: ASME B16.48 and the duplicate trailing "ASME B16.47" removed.
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      { label: "Male Face", value: "Precision Machined Raised Face" },
      { label: "Female Face", value: "Precision Machined Recessed Face" },
      { label: "Gasket Location", value: "Fully Confined Within Female Recess" },
      { label: "Supply", value: "Matched Pairs (Male + Female)" },
      {
        label: "Gasket Confinement",
        value:
          "Helps minimize the risk of gasket displacement and blowout under specified operating conditions",
      },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/male-female-flange.webp",
    metaTitle: "Male-Female Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Male-Female Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Precision machined raised and recessed faces — matched pairs with fully confined gasket for high-pressure steam, cryogenic & petrochemical service. ASME B16.5 / B16.47. Manufacturer in India.",
  },

  // ── 12. Tongue & Groove Flange ────────────────────────────────────────────
  {
    id: "flg-012",
    slug: "tongue-and-groove-flange-manufacturer-india",
    division: "flanges",
    subcategory: "Tongue & Groove Flange",
    type: "Forged",
    name: "Tongue & Groove Flange",
    shortDescription:
      "Matched-pair flanges with a precision tongue and groove that fully enclose the gasket, ideal for volatile, hazardous, or high-pressure process fluids.",
    description:
      "Tongue & Groove Flanges are precision-machined matched pairs: one flange carries a precision raised tongue and its partner carries a matching machined groove. The gasket is completely enclosed within the groove on both its inner and outer diameters, preventing lateral movement, gasket blow-out, and direct contact with the process fluid. This makes Tongue & Groove flanges the preferred choice for volatile hydrocarbons, toxic process streams, high-pressure steam, and other applications where any gasket exposure or leakage is unacceptable.",
    materials: [],
    // NOTE: ASME B16.48 and the duplicate trailing "ASME B16.47" removed.
    standards: STD_FULL,
    specs: [
      ...FLANGES_SPECS,
      {
        label: "Tongue Design",
        value: "Precision machined raised tongue for positive gasket alignment",
      },
      {
        label: "Groove Design",
        value: "Matching machined groove for gasket confinement and leak-tight sealing",
      },
      { label: "Supply", value: "Matched Pairs (Tongue + Groove)" },
      { label: "Gasket Confinement", value: "Fully Enclosed — ID and OD Contained Within Groove" },
    ],
    materialsTable: FLANGES_MATERIALS,
    image: "products/flanges/tongue-groove-flange.webp",
    metaTitle: "Tongue & Groove Flange Manufacturer & Supplier in India | Prayag Steel",
    metaDescription:
      "Forged Tongue & Groove Flanges in SS, Duplex, Inconel, Hastelloy & Titanium. Precision matched pairs — tongue and groove design for full gasket confinement in volatile, hazardous & high-pressure service. ASME B16.5 / B16.47, Class 150#–2500#. Manufacturer in India.",
  },
];
