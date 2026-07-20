import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Tubes Division (Proficient Tubes Pvt. Ltd.) — Material-First Model
// subcategory = alloy family name (mirrors pipes.ts structure)
//
// UNCONFIRMED DIMENSIONS: The source document (seamless tubes section) states:
//   "Outside Diameter: 6mm to 168.3mm (or your actual range)"
//   "Wall Thickness: 0.5mm to 20mm (or your actual range)"
// The bracketed text is the document author's own placeholder note, NOT
// a confirmed figure from the client. These values are used below but are
// STRONGLY UNCONFIRMED and must be verified and replaced with client-confirmed
// ranges before this page ships to production.
//
// INCOLOY / NICKEL ALLOYS NOTE: The source document for tubes merges Incoloy
// grades into the Nickel Alloys family (Alloy 800, 800H, 800HT, 825 listed
// under Nickel Alloys). This DEVIATES from pipes.ts where Incoloy is a
// separate subcategory. Both decisions mirror their respective source documents
// — do not silently reconcile. Flag for client to decide on a consistent
// taxonomy before the division landing page merges the two data sets.
//
// STANDARDS GAPS (flagged, not silently filled):
//   Monel tubes: only one standard reference found in source (ASTM B165
//     under Condenser Tubes row) — may be incomplete. Confirm with client.
//   Hastelloy tubes: ASTM B622 inferred from general Product Standards list;
//     no dedicated standard row in source for Hastelloy tubes. Confirm with client.
//   Nickel 200/201: No standard given anywhere in source. Empty array — confirm.
//   Alloy 20: No standard given in source. Empty array — confirm.
//
// OMISSIONS (confirmed):
//   No Copper Nickel, Zirconium, or Tantalum — not in this document.
//   No "Mechanical Tubes" in any applications list (ASTM A554 is a welded-tube
//   spec not applicable to Prayag's seamless manufacturing).
// ─────────────────────────────────────────────────────────────────────────────

// ── Category-level spec template ─────────────────────────────────────────────
// UNCONFIRMED: see file-level comment above.
function makeSpecs(grade: string, standards: string[], applications?: string) {
  const s = [
    { label: "OD Range", value: "6mm – 168.3mm" }, // UNCONFIRMED — source doc placeholder
    { label: "Wall Thickness", value: "0.5mm – 20mm" }, // UNCONFIRMED — source doc placeholder
    { label: "Length", value: "Up to 12 meters" },
    { label: "Grade", value: grade },
    {
      label: "Finish",
      value:
        "Pickled / Passivated / Bright Annealed / Electropolished / Mirror Polish",
    },
    { label: "End Finish", value: "Plain End / Bevel End / Deburred End" },
    {
      label: "Standard",
      value: standards.length > 0 ? standards.join(" / ") : "To be confirmed — see code comment",
    },
  ];
  if (applications) {
    s.push({ label: "Applications", value: applications });
  }
  return s;
}

// ─────────────────────────────────────────────────────────────────────────────
// STAINLESS STEEL — ASTM A213 / SA213, ASTM A269 / SA269 (14 grades)
// ─────────────────────────────────────────────────────────────────────────────
const SS_STANDARDS = ["ASTM A213 / SA213", "ASTM A269 / SA269"];
const SS_SUBCATEGORY = "Stainless Steel";

// ─────────────────────────────────────────────────────────────────────────────
// DUPLEX — ASTM A789 / SA789 (3 grades)
// ─────────────────────────────────────────────────────────────────────────────
const DUPLEX_STANDARDS = ["ASTM A789 / SA789"];
const DUPLEX_SUBCATEGORY = "Duplex Stainless Steel";

// ─────────────────────────────────────────────────────────────────────────────
// SUPER DUPLEX — ASTM A789 / SA789 (2 grades)
// ─────────────────────────────────────────────────────────────────────────────
const SUPER_DUPLEX_SUBCATEGORY = "Super Duplex Stainless Steel";

// ─────────────────────────────────────────────────────────────────────────────
// NICKEL ALLOYS (incl. Incoloy — merged per source doc) — ASTM B163, B167, B444, B622 (8 grades)
// See file-level comment on the Incoloy deviation from pipes.ts
// ─────────────────────────────────────────────────────────────────────────────
const NICKEL_ALLOY_STANDARDS = ["ASTM B163", "ASTM B167", "ASTM B444", "ASTM B622"];
const NICKEL_ALLOY_SUBCATEGORY = "Nickel Alloys";

// ─────────────────────────────────────────────────────────────────────────────
// MONEL — ASTM B165 (FLAGGED: only one reference found, may be incomplete)
// ─────────────────────────────────────────────────────────────────────────────
// FLAGGED: Only one mention of ASTM B165 found in source (under Condenser
// Tubes row). Confirm with client before launch whether this is the complete
// standard for all Monel tube grades.
const MONEL_STANDARDS = ["ASTM B165"];
const MONEL_SUBCATEGORY = "Monel";

// ─────────────────────────────────────────────────────────────────────────────
// HASTELLOY — ASTM B622 (FLAGGED: inferred, not explicit)
// ─────────────────────────────────────────────────────────────────────────────
// FLAGGED: No dedicated standard row in source document for Hastelloy tubes
// specifically. ASTM B622 inferred from the general Product Standards list.
// Confirm with client before launch.
const HASTELLOY_STANDARDS = ["ASTM B622"];
const HASTELLOY_SUBCATEGORY = "Hastelloy";

// ─────────────────────────────────────────────────────────────────────────────
// TITANIUM — ASTM B338 (4 grades — no Grade 1, unlike pipes.ts)
// ─────────────────────────────────────────────────────────────────────────────
const TITANIUM_STANDARDS = ["ASTM B338"];
const TITANIUM_SUBCATEGORY = "Titanium";

// ─────────────────────────────────────────────────────────────────────────────
// NICKEL — no standard given in source (2 grades)
// ─────────────────────────────────────────────────────────────────────────────
// FLAGGED: No standard given anywhere in source document for plain Nickel
// 200/201 tubes. Empty array below — confirm with client before launch.
const NICKEL_STANDARDS: string[] = [];
const NICKEL_SUBCATEGORY = "Nickel";

// ─────────────────────────────────────────────────────────────────────────────
// ALLOY 20 — no standard given in source (1 grade)
// ─────────────────────────────────────────────────────────────────────────────
// FLAGGED: No standard given anywhere in source document for Alloy 20 tubes.
// Empty array below — confirm with client before launch.
const ALLOY20_STANDARDS: string[] = [];
const ALLOY20_SUBCATEGORY = "Alloy 20";

export const tubes: Product[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // STAINLESS STEEL (14 grades)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-001",
    slug: "seamless-stainless-steel-tube-tp304",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP304",
    shortDescription:
      "Precision seamless TP304 tubes for heat exchangers, condensers, and instrumentation. Bright annealed and pickled & passivated finishes available.",
    description:
      "Seamless stainless steel tubes in Grade TP304 (UNS S30400) offer good corrosion resistance in a wide range of environments and are the most widely specified austenitic grade. Produced to ASTM A213 and A269, they are used in heat exchangers, condensers, boiler applications, and instrumentation tubing. Available in bright annealed, pickled & passivated, electropolished, and mirror polish finishes.",
    materials: ["TP304 (UNS S30400)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP304 (UNS S30400)", SS_STANDARDS, "Heat Exchanger, Boiler, Condenser, Instrumentation, BA, EP"),
    image: "products/tubes/seamless-stainless-steel-tube-tp304.webp",
    metaTitle: "Seamless TP304 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP304 tubes, 6mm–168.3mm OD. Heat exchangers, condensers, instrumentation. ASTM A213/A269. BA, P&P, EP finish. Proficient Tubes / Prayag Steel India.",
  },
  {
    id: "tub-002",
    slug: "seamless-stainless-steel-tube-tp304l",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP304L",
    shortDescription:
      "Low-carbon TP304L tubes with reduced sensitisation risk. Ideal for welded assemblies and high-purity applications.",
    description:
      "Seamless stainless steel tubes in Grade TP304L (UNS S30403) are the low-carbon variant of TP304, minimising carbide precipitation and sensitisation risk in welded assemblies. They are widely used in heat exchangers, high-purity, and electropolished (EP) tube applications in pharmaceutical, semiconductor, and food processing industries.",
    materials: ["TP304L (UNS S30403)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP304L (UNS S30403)", SS_STANDARDS, "Heat Exchanger, Condenser, High Purity, EP, BA, Instrumentation"),
    image: "products/tubes/seamless-stainless-steel-tube-tp304l.webp",
    metaTitle: "Seamless TP304L Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP304L low-carbon tubes, 6mm–168.3mm OD. Heat exchangers, high purity, EP. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-003",
    slug: "seamless-stainless-steel-tube-tp304h",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP304H",
    shortDescription:
      "High-carbon TP304H tubes with enhanced creep strength for elevated-temperature boiler and heat exchanger service.",
    description:
      "Seamless stainless steel tubes in Grade TP304H (UNS S30409) are the high-carbon variant of TP304 with improved creep and stress-rupture strength at elevated temperatures. They are used in boiler superheater tubing, heat exchangers operating above 425 degrees C, and high-temperature pressure vessels.",
    materials: ["TP304H (UNS S30409)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP304H (UNS S30409)", SS_STANDARDS, "Boiler, Heat Exchanger"),
    image: "products/tubes/seamless-stainless-steel-tube-tp304h.webp",
    metaTitle: "Seamless TP304H Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP304H high-carbon tubes, 6mm–168.3mm OD. Boiler & high-temperature heat exchanger service. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-004",
    slug: "seamless-stainless-steel-tube-tp310s",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP310S",
    shortDescription:
      "TP310S tubes for high-temperature and oxidation-resistant service. Used in furnaces, heat treatment, and boiler applications.",
    description:
      "Seamless stainless steel tubes in Grade TP310S (UNS S31008) offer excellent high-temperature oxidation resistance and are suitable for continuous service up to approximately 1040 degrees C. They are used in furnace components, heat treatment equipment, boiler applications, and other high-temperature environments where the higher chromium content provides superior oxidation resistance.",
    materials: ["TP310S (UNS S31008)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP310S (UNS S31008)", SS_STANDARDS, "Boiler, Heat Exchanger"),
    image: "products/tubes/seamless-stainless-steel-tube-tp310s.webp",
    metaTitle: "Seamless TP310S Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP310S tubes, 6mm–168.3mm OD. High-temperature oxidation resistance. Furnaces, boilers, heat treatment. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-005",
    slug: "seamless-stainless-steel-tube-tp316",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP316",
    shortDescription:
      "TP316 tubes with molybdenum addition for superior chloride and pitting resistance in chemical, marine, and pharmaceutical service.",
    description:
      "Seamless stainless steel tubes in Grade TP316 (UNS S31600) contain a molybdenum addition that significantly improves resistance to pitting and crevice corrosion in chloride environments. Widely used in chemical processing, pharmaceutical, marine, desalination, and food processing equipment where TP304 does not provide adequate corrosion resistance.",
    materials: ["TP316 (UNS S31600)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP316 (UNS S31600)", SS_STANDARDS, "Heat Exchanger, Condenser, BA, EP, High Purity, Instrumentation"),
    image: "products/tubes/seamless-stainless-steel-tube-tp316.webp",
    metaTitle: "Seamless TP316 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP316 tubes, 6mm–168.3mm OD. Chloride & pitting resistance. Chemical, marine, pharma. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-006",
    slug: "seamless-stainless-steel-tube-tp316l",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP316L",
    shortDescription:
      "Low-carbon TP316L for welded assemblies in chemical, pharmaceutical, and high-purity environments.",
    description:
      "Seamless stainless steel tubes in Grade TP316L (UNS S31603) are the low-carbon variant of TP316, providing the same molybdenum-enhanced corrosion resistance while minimising sensitisation risk in welded structures. They are extensively used in chemical processing, pharmaceutical, electropolished tube (EP), and high-purity applications.",
    materials: ["TP316L (UNS S31603)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP316L (UNS S31603)", SS_STANDARDS, "Heat Exchanger, Condenser, EP, BA, High Purity, Instrumentation"),
    image: "products/tubes/seamless-stainless-steel-tube-tp316l.webp",
    metaTitle: "Seamless TP316L Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP316L low-carbon tubes, 6mm–168.3mm OD. Chemical, pharma, high purity, EP. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-007",
    slug: "seamless-stainless-steel-tube-tp316ti",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP316Ti",
    shortDescription:
      "Titanium-stabilised TP316Ti for sensitisation-free service at elevated temperatures.",
    description:
      "Seamless stainless steel tubes in Grade TP316Ti (UNS S31635) are titanium-stabilised to prevent sensitisation and intergranular corrosion in heat-affected zones after welding. The titanium addition ties up carbon as titanium carbide rather than chromium carbide, maintaining corrosion resistance even after high-temperature exposure. Used in heat exchangers and process equipment where both corrosion resistance and elevated-temperature stability are required.",
    materials: ["TP316Ti (UNS S31635)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP316Ti (UNS S31635)", SS_STANDARDS, "Heat Exchanger"),
    image: "products/tubes/seamless-stainless-steel-tube-tp316ti.webp",
    metaTitle: "Seamless TP316Ti Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP316Ti Ti-stabilised tubes, 6mm–168.3mm OD. Heat exchangers, elevated-temperature service. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-008",
    slug: "seamless-stainless-steel-tube-tp317",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP317",
    shortDescription:
      "TP317 with higher molybdenum for enhanced corrosion resistance in aggressive chemical environments.",
    description:
      "Seamless stainless steel tubes in Grade TP317 (UNS S31700) contain a higher molybdenum content than TP316, providing superior resistance to pitting, crevice corrosion, and general corrosion in more aggressive chemical environments including dilute sulfuric acid, organic acids, and chloride-bearing streams.",
    materials: ["TP317 (UNS S31700)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP317 (UNS S31700)", SS_STANDARDS),
    image: "products/tubes/seamless-stainless-steel-tube-tp317.webp",
    metaTitle: "Seamless TP317 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP317 high-Mo tubes, 6mm–168.3mm OD. Aggressive chemical environments. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-009",
    slug: "seamless-stainless-steel-tube-tp317l",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP317L",
    shortDescription:
      "Low-carbon TP317L with higher molybdenum for welded assemblies in aggressive chemical service.",
    description:
      "Seamless stainless steel tubes in Grade TP317L (UNS S31703) are the low-carbon variant of TP317, retaining the enhanced corrosion resistance from the higher molybdenum content while eliminating sensitisation risk in welded structures. Used in aggressive chemical processing environments where both weldability and superior pitting resistance are required.",
    materials: ["TP317L (UNS S31703)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP317L (UNS S31703)", SS_STANDARDS),
    image: "products/tubes/seamless-stainless-steel-tube-tp317l.webp",
    metaTitle: "Seamless TP317L Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP317L low-carbon high-Mo tubes, 6mm–168.3mm OD. Chemical processing. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-010",
    slug: "seamless-stainless-steel-tube-tp321",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP321",
    shortDescription:
      "Titanium-stabilised TP321 for elevated-temperature service where sensitisation resistance is critical.",
    description:
      "Seamless stainless steel tubes in Grade TP321 (UNS S32100) are titanium-stabilised for sensitisation resistance at elevated temperatures. The titanium stabilisation makes them suitable for elevated-temperature service up to approximately 870 degrees C and for applications where the tubes are exposed to the sensitisation temperature range and corrosive environments. Used in heat exchangers, boiler tubing, and chemical process equipment.",
    materials: ["TP321 (UNS S32100)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP321 (UNS S32100)", SS_STANDARDS, "Heat Exchanger, Boiler"),
    image: "products/tubes/seamless-stainless-steel-tube-tp321.webp",
    metaTitle: "Seamless TP321 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP321 Ti-stabilised tubes, 6mm–168.3mm OD. Heat exchangers, boilers, elevated temperature. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-011",
    slug: "seamless-stainless-steel-tube-tp321h",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP321H",
    shortDescription:
      "High-carbon TP321H for maximum creep resistance at elevated temperatures in boiler and superheater service.",
    description:
      "Seamless stainless steel tubes in Grade TP321H (UNS S32109) are the high-carbon, titanium-stabilised variant with enhanced creep and stress-rupture strength at elevated temperatures. The higher carbon content improves elevated-temperature mechanical properties, making TP321H the preferred choice for boiler superheater tubing and high-temperature heat exchanger service.",
    materials: ["TP321H (UNS S32109)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP321H (UNS S32109)", SS_STANDARDS, "Boiler, Heat Exchanger"),
    image: "products/tubes/seamless-stainless-steel-tube-tp321h.webp",
    metaTitle: "Seamless TP321H Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP321H high-carbon Ti-stabilised tubes, 6mm–168.3mm OD. Boiler superheater, heat exchangers. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-012",
    slug: "seamless-stainless-steel-tube-tp347",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP347",
    shortDescription:
      "Niobium-stabilised TP347 for sensitisation-free elevated-temperature service.",
    description:
      "Seamless stainless steel tubes in Grade TP347 (UNS S34700) are niobium (columbium) stabilised to prevent sensitisation and intergranular corrosion. The niobium stabilisation provides excellent performance in the sensitisation temperature range and at elevated temperatures up to approximately 870 degrees C. Used in heat exchangers, boiler applications, and chemical process equipment where titanium stabilisation may interfere with the process.",
    materials: ["TP347 (UNS S34700)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP347 (UNS S34700)", SS_STANDARDS, "Heat Exchanger, Boiler"),
    image: "products/tubes/seamless-stainless-steel-tube-tp347.webp",
    metaTitle: "Seamless TP347 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP347 Nb-stabilised tubes, 6mm–168.3mm OD. Heat exchangers, boilers, elevated temperature. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-013",
    slug: "seamless-stainless-steel-tube-tp347h",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP347H",
    shortDescription:
      "High-carbon TP347H for maximum creep resistance at elevated temperatures.",
    description:
      "Seamless stainless steel tubes in Grade TP347H (UNS S34709) are the high-carbon, niobium-stabilised variant with enhanced creep and stress-rupture strength at elevated temperatures. The higher carbon content provides improved mechanical properties at elevated operating temperatures, making TP347H suitable for boiler superheater tubing and critical high-temperature process equipment.",
    materials: ["TP347H (UNS S34709)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP347H (UNS S34709)", SS_STANDARDS, "Boiler, Heat Exchanger"),
    image: "products/tubes/seamless-stainless-steel-tube-tp347h.webp",
    metaTitle: "Seamless TP347H Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP347H high-carbon Nb-stabilised tubes, 6mm–168.3mm OD. Boiler superheater, high-temperature service. ASTM A213/A269. Prayag Steel India.",
  },
  {
    id: "tub-014",
    slug: "seamless-stainless-steel-tube-tp904l",
    division: "tubes",
    subcategory: SS_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Stainless Steel Tube — TP904L",
    shortDescription:
      "TP904L super-austenitic tubes for highly corrosive acid and chloride environments.",
    description:
      "Seamless stainless steel tubes in Grade TP904L (UNS N08904) are a super-austenitic alloy with high molybdenum, copper, and nitrogen content, providing exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking in highly aggressive environments including dilute sulfuric acid, phosphoric acid, and seawater. Used in heat exchangers, condensers, and chemical processing equipment where standard 316L is inadequate.",
    materials: ["TP904L (UNS N08904)"],
    standards: SS_STANDARDS,
    specs: makeSpecs("TP904L (UNS N08904)", SS_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-stainless-steel-tube-tp904l.webp",
    metaTitle: "Seamless TP904L Super-Austenitic Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless TP904L tubes, 6mm–168.3mm OD. Sulfuric acid, phosphoric acid, seawater. Heat exchangers, condensers. ASTM A213/A269. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DUPLEX STAINLESS STEEL (3 grades)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-015",
    slug: "seamless-duplex-stainless-steel-tube-uns-s31803",
    division: "tubes",
    subcategory: DUPLEX_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Duplex Stainless Steel Tube — UNS S31803",
    shortDescription:
      "Duplex 2205 (UNS S31803) tubes combining high strength with excellent corrosion resistance for demanding process service.",
    description:
      "Seamless Duplex 2205 tubes in Grade UNS S31803 offer a two-phase austenitic-ferritic microstructure combining roughly twice the yield strength of standard austenitic grades with excellent resistance to pitting, crevice corrosion, and stress corrosion cracking. Used in heat exchangers, desalination, offshore, chemical processing, and other demanding environments where standard austenitic stainless steels are insufficient.",
    materials: ["UNS S31803 (Duplex 2205)"],
    standards: DUPLEX_STANDARDS,
    specs: makeSpecs("UNS S31803 (Duplex 2205)", DUPLEX_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-duplex-stainless-steel-tube-uns-s31803.webp",
    metaTitle: "Seamless Duplex 2205 Tubes UNS S31803 | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Duplex 2205 (S31803) tubes, 6mm–168.3mm OD. Heat exchangers, desalination, offshore. ASTM A789. Prayag Steel India.",
  },
  {
    id: "tub-016",
    slug: "seamless-duplex-stainless-steel-tube-uns-s32205",
    division: "tubes",
    subcategory: DUPLEX_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Duplex Stainless Steel Tube — UNS S32205",
    shortDescription:
      "Duplex 2205 (UNS S32205) with enhanced PREN for improved corrosion resistance over S31803.",
    description:
      "Seamless Duplex 2205 tubes in Grade UNS S32205 represent the revised composition of Duplex 2205 with tighter nitrogen and molybdenum minimums, resulting in a higher Pitting Resistance Equivalent Number (PREN) and improved chloride corrosion resistance compared to S31803. The preferred designation for new projects specifying Duplex 2205, particularly in seawater, offshore, and chemical processing service.",
    materials: ["UNS S32205 (Duplex 2205)"],
    standards: DUPLEX_STANDARDS,
    specs: makeSpecs("UNS S32205 (Duplex 2205)", DUPLEX_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-duplex-stainless-steel-tube-uns-s32205.webp",
    metaTitle: "Seamless Duplex 2205 Tubes UNS S32205 | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Duplex 2205 (S32205) tubes, 6mm–168.3mm OD. Enhanced PREN, seawater & offshore service. ASTM A789. Prayag Steel India.",
  },
  {
    id: "tub-017",
    slug: "seamless-duplex-stainless-steel-tube-uns-s32304",
    division: "tubes",
    subcategory: DUPLEX_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Duplex Stainless Steel Tube — UNS S32304",
    shortDescription:
      "Lean Duplex 2304 (UNS S32304) with good corrosion resistance at lower alloy cost.",
    description:
      "Seamless Lean Duplex 2304 tubes in Grade UNS S32304 offer a cost-effective duplex solution with good corrosion resistance and high strength. The 2304 grade contains no intentional molybdenum addition, resulting in a lower material cost than 2205 while still providing better corrosion resistance and nearly twice the yield strength of standard austenitic grades. Suitable for structural applications, heat exchangers, and moderate chloride environments.",
    materials: ["UNS S32304 (Lean Duplex 2304)"],
    standards: DUPLEX_STANDARDS,
    specs: makeSpecs("UNS S32304 (Lean Duplex 2304)", DUPLEX_STANDARDS),
    image: "products/tubes/seamless-duplex-stainless-steel-tube-uns-s32304.webp",
    metaTitle: "Seamless Duplex 2304 Tubes UNS S32304 | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Lean Duplex 2304 (S32304) tubes, 6mm–168.3mm OD. Cost-effective duplex solution. ASTM A789. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SUPER DUPLEX STAINLESS STEEL (2 grades)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-018",
    slug: "seamless-super-duplex-stainless-steel-tube-uns-s32750",
    division: "tubes",
    subcategory: SUPER_DUPLEX_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Super Duplex Stainless Steel Tube — UNS S32750",
    shortDescription:
      "Super Duplex 2507 (UNS S32750) tubes for seawater, offshore, and highly corrosive chemical environments.",
    description:
      "Seamless Super Duplex 2507 tubes in Grade UNS S32750 offer outstanding resistance to pitting, crevice corrosion, and stress corrosion cracking with a PREN exceeding 42. The high chromium (25%), molybdenum (4%), and nitrogen (0.3%) content makes 2507 the preferred choice for seawater heat exchangers, subsea pipelines, desalination, and aggressive chemical process environments where 2205 Duplex is insufficient.",
    materials: ["UNS S32750 (Super Duplex 2507)"],
    standards: DUPLEX_STANDARDS,
    specs: makeSpecs("UNS S32750 (Super Duplex 2507)", DUPLEX_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-super-duplex-stainless-steel-tube-uns-s32750.webp",
    metaTitle: "Seamless Super Duplex 2507 Tubes UNS S32750 | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Super Duplex 2507 (S32750) tubes, 6mm–168.3mm OD. PREN 42+. Seawater, offshore, desalination. ASTM A789. Prayag Steel India.",
  },
  {
    id: "tub-019",
    slug: "seamless-super-duplex-stainless-steel-tube-uns-s32760",
    division: "tubes",
    subcategory: SUPER_DUPLEX_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Super Duplex Stainless Steel Tube — UNS S32760",
    shortDescription:
      "Zeron 100 Super Duplex (UNS S32760) tubes with tungsten addition for enhanced corrosion resistance.",
    description:
      "Seamless Super Duplex tubes in Grade UNS S32760 (Zeron 100) contain a tungsten addition that provides enhanced pitting and crevice corrosion resistance compared to standard 2507. With a PREN exceeding 40, UNS S32760 is used in the most aggressive seawater, offshore, and chemical process applications where maximum corrosion resistance is required from a cost-effective duplex alloy.",
    materials: ["UNS S32760 (Super Duplex Zeron 100)"],
    standards: DUPLEX_STANDARDS,
    specs: makeSpecs("UNS S32760 (Super Duplex Zeron 100)", DUPLEX_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-super-duplex-stainless-steel-tube-uns-s32760.webp",
    metaTitle: "Seamless Super Duplex Tubes UNS S32760 | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Super Duplex S32760 (Zeron 100) tubes, 6mm–168.3mm OD. Offshore, seawater, chemical processing. ASTM A789. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NICKEL ALLOYS (incl. Incoloy — 8 grades)
  // See file-level comment on Incoloy deviation from pipes.ts
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-020",
    slug: "seamless-nickel-alloy-tube-alloy-600",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 600",
    shortDescription:
      "Inconel 600 (UNS N06600) tubes for high-temperature and corrosion-resistant service in chemical and nuclear applications.",
    description:
      "Seamless Alloy 600 (Inconel 600, UNS N06600) tubes offer excellent resistance to oxidising and reducing atmospheres at elevated temperatures and good resistance to chloride stress corrosion cracking. Used in heat exchangers for chemical processing, nuclear reactor steam generators, furnace components, and high-temperature industrial equipment.",
    materials: ["Alloy 600 / Inconel 600 (UNS N06600)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 600 / Inconel 600 (UNS N06600)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Boiler, Condenser, U-Bend"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-600.webp",
    metaTitle: "Seamless Inconel 600 Alloy 600 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 600 (N06600) tubes, 6mm–168.3mm OD. Chemical, nuclear, heat exchangers. ASTM B163/B167. Prayag Steel India.",
  },
  {
    id: "tub-021",
    slug: "seamless-nickel-alloy-tube-alloy-601",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 601",
    shortDescription:
      "Inconel 601 (UNS N06601) tubes for oxidation resistance at extreme temperatures.",
    description:
      "Seamless Alloy 601 (Inconel 601, UNS N06601) tubes offer excellent resistance to oxidation and scaling at temperatures up to approximately 1200 degrees C, combined with good strength and resistance to sulphidation. They are used in high-temperature furnace components, industrial heat treatment equipment, and chemical process applications requiring resistance to extremely high temperatures.",
    materials: ["Alloy 601 / Inconel 601 (UNS N06601)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 601 / Inconel 601 (UNS N06601)", NICKEL_ALLOY_STANDARDS),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-601.webp",
    metaTitle: "Seamless Inconel 601 Alloy 601 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 601 (N06601) tubes, 6mm–168.3mm OD. Extreme high-temperature oxidation resistance. ASTM B163/B167. Prayag Steel India.",
  },
  {
    id: "tub-022",
    slug: "seamless-nickel-alloy-tube-alloy-625",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 625",
    shortDescription:
      "Inconel 625 (UNS N06625) tubes for seawater, aerospace, and chemical process service with exceptional corrosion resistance.",
    description:
      "Seamless Alloy 625 (Inconel 625, UNS N06625) tubes offer exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking across a wide range of corrosive environments including seawater, acidic process streams, and high-temperature oxidising atmospheres. Their high molybdenum and niobium content provides outstanding performance in chemical processing, offshore, marine, and aerospace applications.",
    materials: ["Alloy 625 / Inconel 625 (UNS N06625)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 625 / Inconel 625 (UNS N06625)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Condenser, U-Bend"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-625.webp",
    metaTitle: "Seamless Inconel 625 Alloy 625 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 625 (N06625) tubes, 6mm–168.3mm OD. Seawater, offshore, chemical process. ASTM B444. Prayag Steel India.",
  },
  {
    id: "tub-023",
    slug: "seamless-nickel-alloy-tube-alloy-718",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 718",
    shortDescription:
      "Inconel 718 (UNS N07718) tubes for high-strength aerospace and gas turbine applications.",
    description:
      "Seamless Alloy 718 (Inconel 718, UNS N07718) tubes are a precipitation-hardened nickel-chromium alloy offering exceptional high-temperature strength, good weldability, and corrosion resistance. Used in gas turbine components, aerospace structures, cryogenic applications, and high-strength tooling where both elevated mechanical properties and corrosion resistance are required.",
    materials: ["Alloy 718 / Inconel 718 (UNS N07718)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 718 / Inconel 718 (UNS N07718)", NICKEL_ALLOY_STANDARDS),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-718.webp",
    metaTitle: "Seamless Inconel 718 Alloy 718 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 718 (N07718) tubes, 6mm–168.3mm OD. Aerospace, gas turbine, high-strength service. ASTM B622. Prayag Steel India.",
  },
  {
    id: "tub-024",
    slug: "seamless-nickel-alloy-tube-alloy-800",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 800",
    shortDescription:
      "Incoloy 800 (UNS N08800) tubes for heat exchangers, boilers, and chemical process equipment at elevated temperatures.",
    description:
      "Seamless Alloy 800 (Incoloy 800, UNS N08800) tubes — merged into the Nickel Alloys family per this source document — offer good strength and resistance to oxidation and carburisation at elevated temperatures. They are widely used in heat exchangers, boiler tubing, chemical process equipment, and petrochemical applications where resistance to high-temperature environments is required alongside resistance to sensitisation.",
    materials: ["Alloy 800 / Incoloy 800 (UNS N08800)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 800 / Incoloy 800 (UNS N08800)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Boiler, Condenser, U-Bend"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-800.webp",
    metaTitle: "Seamless Incoloy 800 Alloy 800 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 800 (N08800) Incoloy tubes, 6mm–168.3mm OD. Heat exchangers, boilers, chemical process. ASTM B163. Prayag Steel India.",
  },
  {
    id: "tub-025",
    slug: "seamless-nickel-alloy-tube-alloy-800h",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 800H",
    shortDescription:
      "Incoloy 800H (UNS N08810) tubes with improved creep rupture strength for elevated-temperature service.",
    description:
      "Seamless Alloy 800H (Incoloy 800H, UNS N08810) tubes — merged into the Nickel Alloys family per this source document — are a higher-carbon variant of Alloy 800 with improved creep and stress-rupture strength at elevated temperatures above 600 degrees C. Used in chemical process heaters, steam reformers, heat exchangers, and other high-temperature applications where long-term creep resistance is critical.",
    materials: ["Alloy 800H / Incoloy 800H (UNS N08810)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 800H / Incoloy 800H (UNS N08810)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Boiler"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-800h.webp",
    metaTitle: "Seamless Incoloy 800H Alloy 800H Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 800H (N08810) Incoloy tubes, 6mm–168.3mm OD. Elevated-temperature creep resistance. ASTM B163. Prayag Steel India.",
  },
  {
    id: "tub-026",
    slug: "seamless-nickel-alloy-tube-alloy-800ht",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 800HT",
    shortDescription:
      "Incoloy 800HT (UNS N08811) tubes with controlled chemistry for maximum high-temperature creep resistance.",
    description:
      "Seamless Alloy 800HT (Incoloy 800HT, UNS N08811) tubes — merged into the Nickel Alloys family per this source document — are a premium variant of Alloy 800H with controlled carbon, aluminium, and titanium content to maximise creep and stress-rupture strength at temperatures above 700 degrees C. They are used in the most demanding elevated-temperature applications including ethylene cracker furnaces, steam reformers, and nuclear plant heat exchangers.",
    materials: ["Alloy 800HT / Incoloy 800HT (UNS N08811)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 800HT / Incoloy 800HT (UNS N08811)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Boiler"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-800ht.webp",
    metaTitle: "Seamless Incoloy 800HT Alloy 800HT Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 800HT (N08811) Incoloy tubes, 6mm–168.3mm OD. Maximum elevated-temperature creep resistance. ASTM B163. Prayag Steel India.",
  },
  {
    id: "tub-027",
    slug: "seamless-nickel-alloy-tube-alloy-825",
    division: "tubes",
    subcategory: NICKEL_ALLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Alloy Tube — Alloy 825",
    shortDescription:
      "Incoloy 825 (UNS N08825) tubes for highly corrosive acid and seawater environments.",
    description:
      "Seamless Alloy 825 (Incoloy 825, UNS N08825) tubes — merged into the Nickel Alloys family per this source document — offer outstanding resistance to both oxidising and reducing acids, including sulfuric acid, phosphoric acid, and organic acids, as well as resistance to pitting, crevice corrosion, and stress corrosion cracking in chloride environments. Used in chemical process heat exchangers, seawater cooling, pickling equipment, and pollution control applications.",
    materials: ["Alloy 825 / Incoloy 825 (UNS N08825)"],
    standards: NICKEL_ALLOY_STANDARDS,
    specs: makeSpecs("Alloy 825 / Incoloy 825 (UNS N08825)", NICKEL_ALLOY_STANDARDS, "Heat Exchanger, Condenser, U-Bend"),
    image: "products/tubes/seamless-nickel-alloy-tube-alloy-825.webp",
    metaTitle: "Seamless Incoloy 825 Alloy 825 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 825 (N08825) Incoloy tubes, 6mm–168.3mm OD. Sulfuric acid, seawater, chemical process. ASTM B163. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MONEL (2 grades)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-028",
    slug: "seamless-monel-tube-alloy-400",
    division: "tubes",
    subcategory: MONEL_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Monel Tube — Alloy 400",
    shortDescription:
      "Monel 400 (UNS N04400) tubes for seawater, brine, and acid service with excellent corrosion resistance.",
    description:
      "Seamless Monel 400 tubes (UNS N04400) offer excellent resistance to seawater, brine, hydrofluoric acid, and alkaline solutions. The nickel-copper alloy provides good resistance to stress corrosion cracking and pitting in chloride environments and maintains good mechanical properties over a wide temperature range. Used in marine heat exchangers, chemical processing, oil refinery and petrochemical applications, and desalination condensers.",
    materials: ["Alloy 400 / Monel 400 (UNS N04400)"],
    standards: MONEL_STANDARDS,
    specs: makeSpecs("Alloy 400 / Monel 400 (UNS N04400)", MONEL_STANDARDS, "Condenser, Heat Exchanger"),
    image: "products/tubes/seamless-monel-tube-alloy-400.webp",
    metaTitle: "Seamless Monel 400 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Monel 400 (N04400) tubes, 6mm–168.3mm OD. Seawater, HF acid, brine, condensers. ASTM B165. Prayag Steel India.",
  },
  {
    id: "tub-029",
    slug: "seamless-monel-tube-alloy-k500",
    division: "tubes",
    subcategory: MONEL_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Monel Tube — Alloy K500",
    shortDescription:
      "Precipitation-hardened Monel K500 (UNS N05500) tubes for high-strength marine and chemical applications.",
    description:
      "Seamless Monel K500 tubes (UNS N05500) are a precipitation-hardenable variant of Monel 400, offering approximately three times the yield strength while retaining the same excellent corrosion resistance in seawater, brine, and corrosive chemical environments. Used in marine shafting, pump components, high-strength fasteners, and applications requiring both corrosion resistance and superior mechanical properties.",
    materials: ["Alloy K500 / Monel K500 (UNS N05500)"],
    standards: MONEL_STANDARDS,
    specs: makeSpecs("Alloy K500 / Monel K500 (UNS N05500)", MONEL_STANDARDS),
    image: "products/tubes/seamless-monel-tube-alloy-k500.webp",
    metaTitle: "Seamless Monel K500 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Monel K500 (N05500) tubes, 6mm–168.3mm OD. High-strength marine & chemical applications. ASTM B165. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HASTELLOY (5 grades)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-030",
    slug: "seamless-hastelloy-tube-c22",
    division: "tubes",
    subcategory: HASTELLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Hastelloy Tube — C22",
    shortDescription:
      "Hastelloy C-22 (UNS N06022) tubes for resistance to both oxidising and reducing corrosive environments.",
    description:
      "Seamless Hastelloy C-22 tubes (UNS N06022) offer outstanding resistance to a wide range of corrosive media, including both oxidising and reducing acids, wet chlorine, ferric and cupric chlorides, and hypochlorite solutions. The higher chromium content of C-22 provides superior resistance to oxidising media compared to C-276, while retaining the excellent pitting and crevice corrosion resistance characteristic of the C-alloy family. Used in chemical process equipment, flue-gas desulfurization, and pollution control systems.",
    materials: ["Hastelloy C-22 (UNS N06022)"],
    standards: HASTELLOY_STANDARDS,
    specs: makeSpecs("Hastelloy C-22 (UNS N06022)", HASTELLOY_STANDARDS),
    image: "products/tubes/seamless-hastelloy-tube-c22.webp",
    metaTitle: "Seamless Hastelloy C-22 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy C-22 (N06022) tubes, 6mm–168.3mm OD. Oxidising & reducing acids, FGD, chlorine. ASTM B622. Prayag Steel India.",
  },
  {
    id: "tub-031",
    slug: "seamless-hastelloy-tube-c276",
    division: "tubes",
    subcategory: HASTELLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Hastelloy Tube — C276",
    shortDescription:
      "Hastelloy C-276 (UNS N10276) tubes with outstanding resistance to aggressive chemical and acid-gas service.",
    description:
      "Seamless Hastelloy C-276 tubes (UNS N10276) offer outstanding resistance to aggressive chemical environments including strong oxidising acids, ferric and cupric chlorides, formic and acetic acids, wet chlorine, and mixed acids. They are widely used in chemical reactors, flue-gas desulfurization, pollution-control equipment, pharmaceutical manufacturing, and any corrosive service where most other alloys are inadequate.",
    materials: ["Hastelloy C-276 (UNS N10276)"],
    standards: HASTELLOY_STANDARDS,
    specs: makeSpecs("Hastelloy C-276 (UNS N10276)", HASTELLOY_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-hastelloy-tube-c276.webp",
    metaTitle: "Seamless Hastelloy C-276 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy C-276 (N10276) tubes, 6mm–168.3mm OD. Chemical reactors, FGD, acid-gas service. ASTM B622. Prayag Steel India.",
  },
  {
    id: "tub-032",
    slug: "seamless-hastelloy-tube-b2",
    division: "tubes",
    subcategory: HASTELLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Hastelloy Tube — B2",
    shortDescription:
      "Hastelloy B-2 (UNS N10665) tubes for hydrochloric acid and reducing chemical service.",
    description:
      "Seamless Hastelloy B-2 tubes (UNS N10665) are a nickel-molybdenum alloy specifically designed for resistance to reducing environments, particularly hydrochloric acid at all concentrations and temperatures, and other reducing chemicals including sulfuric, acetic, and formic acids. Used in chemical processing vessels, heat exchangers, and piping systems handling hydrochloric acid and other reducing chemical streams.",
    materials: ["Hastelloy B-2 (UNS N10665)"],
    standards: HASTELLOY_STANDARDS,
    specs: makeSpecs("Hastelloy B-2 (UNS N10665)", HASTELLOY_STANDARDS),
    image: "products/tubes/seamless-hastelloy-tube-b2.webp",
    metaTitle: "Seamless Hastelloy B-2 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy B-2 (N10665) tubes, 6mm–168.3mm OD. HCl acid, reducing chemical service. ASTM B622. Prayag Steel India.",
  },
  {
    id: "tub-033",
    slug: "seamless-hastelloy-tube-b3",
    division: "tubes",
    subcategory: HASTELLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Hastelloy Tube — B3",
    shortDescription:
      "Hastelloy B-3 (UNS N10675) — improved thermal stability over B-2 for reducing chemical environments.",
    description:
      "Seamless Hastelloy B-3 tubes (UNS N10675) are an improved successor to Hastelloy B-2 with better thermal stability and resistance to spontaneous stress corrosion cracking in the as-welded condition. They provide the same excellent resistance to hydrochloric acid and other reducing chemicals as B-2 while eliminating some of the limitations of the predecessor alloy related to heat-affected zone sensitisation.",
    materials: ["Hastelloy B-3 (UNS N10675)"],
    standards: HASTELLOY_STANDARDS,
    specs: makeSpecs("Hastelloy B-3 (UNS N10675)", HASTELLOY_STANDARDS),
    image: "products/tubes/seamless-hastelloy-tube-b3.webp",
    metaTitle: "Seamless Hastelloy B-3 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy B-3 (N10675) tubes, 6mm–168.3mm OD. HCl acid resistance, improved thermal stability over B-2. ASTM B622. Prayag Steel India.",
  },
  {
    id: "tub-034",
    slug: "seamless-hastelloy-tube-x",
    division: "tubes",
    subcategory: HASTELLOY_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Hastelloy Tube — X",
    shortDescription:
      "Hastelloy X (UNS N06002) tubes for extreme high-temperature oxidation resistance in gas turbine and aerospace applications.",
    description:
      "Seamless Hastelloy X tubes (UNS N06002) are a nickel-chromium-iron-molybdenum alloy with outstanding oxidation resistance at temperatures up to approximately 1200 degrees C combined with good high-temperature strength. They are used in gas turbine combustion zone components, industrial furnace equipment, and petrochemical heat-treating applications where extreme high-temperature performance is required.",
    materials: ["Hastelloy X (UNS N06002)"],
    standards: HASTELLOY_STANDARDS,
    specs: makeSpecs("Hastelloy X (UNS N06002)", HASTELLOY_STANDARDS),
    image: "products/tubes/seamless-hastelloy-tube-x.webp",
    metaTitle: "Seamless Hastelloy X Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy X (N06002) tubes, 6mm–168.3mm OD. Gas turbine, aerospace, extreme high-temperature service. ASTM B622. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TITANIUM (4 grades — no Grade 1, unlike pipes.ts)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-035",
    slug: "seamless-titanium-tube-grade-2",
    division: "tubes",
    subcategory: TITANIUM_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Titanium Tube — Grade 2",
    shortDescription:
      "Commercially pure Titanium Grade 2 (UNS R50400) tubes for seawater, marine, and chemical process heat exchangers.",
    description:
      "Seamless Titanium Grade 2 tubes (UNS R50400, commercially pure titanium) offer exceptional corrosion resistance in seawater, chlorine, and oxidising acids combined with a density approximately 56% that of steel. They are the most widely used titanium grade for heat exchangers, condensers, desalination plants, and marine applications where extreme corrosion resistance at low weight is required.",
    materials: ["Titanium Grade 2 (UNS R50400)"],
    standards: TITANIUM_STANDARDS,
    specs: makeSpecs("Titanium Grade 2 (UNS R50400)", TITANIUM_STANDARDS, "Heat Exchanger, Condenser, U-Bend"),
    image: "products/tubes/seamless-titanium-tube-grade-2.webp",
    metaTitle: "Seamless Titanium Grade 2 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Titanium Grade 2 (R50400) tubes, 6mm–168.3mm OD. Seawater, marine, desalination heat exchangers. ASTM B338. Prayag Steel India.",
  },
  {
    id: "tub-036",
    slug: "seamless-titanium-tube-grade-5",
    division: "tubes",
    subcategory: TITANIUM_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Titanium Tube — Grade 5",
    shortDescription:
      "Ti-6Al-4V (UNS R56400) Titanium Grade 5 tubes — the highest strength titanium alloy for aerospace and structural applications.",
    description:
      "Seamless Titanium Grade 5 tubes (Ti-6Al-4V, UNS R56400) are the most widely used titanium alloy, offering an excellent combination of high strength (approximately twice that of Grade 2), low density, and good corrosion resistance. They are used in aerospace structural components, marine applications, medical implants, and high-performance industrial equipment where maximum strength-to-weight ratio is essential.",
    materials: ["Titanium Grade 5 / Ti-6Al-4V (UNS R56400)"],
    standards: TITANIUM_STANDARDS,
    specs: makeSpecs("Titanium Grade 5 / Ti-6Al-4V (UNS R56400)", TITANIUM_STANDARDS),
    image: "products/tubes/seamless-titanium-tube-grade-5.webp",
    metaTitle: "Seamless Titanium Grade 5 Ti-6Al-4V Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Titanium Grade 5 (Ti-6Al-4V, R56400) tubes, 6mm–168.3mm OD. Aerospace, marine, medical. ASTM B338. Prayag Steel India.",
  },
  {
    id: "tub-037",
    slug: "seamless-titanium-tube-grade-7",
    division: "tubes",
    subcategory: TITANIUM_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Titanium Tube — Grade 7",
    shortDescription:
      "Palladium-stabilised Titanium Grade 7 (UNS R52400) tubes for crevice and reducing acid environments.",
    description:
      "Seamless Titanium Grade 7 tubes (UNS R52400) are palladium-stabilised, providing enhanced resistance to crevice corrosion in reducing acid environments including mildly reducing hydrochloric, sulfuric, and phosphoric acids, as well as in high-temperature brines. Grade 7 retains all the excellent corrosion properties of commercially pure titanium while extending serviceability into reducing environments where Grade 2 may be inadequate.",
    materials: ["Titanium Grade 7 (UNS R52400)"],
    standards: TITANIUM_STANDARDS,
    specs: makeSpecs("Titanium Grade 7 (UNS R52400)", TITANIUM_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-titanium-tube-grade-7.webp",
    metaTitle: "Seamless Titanium Grade 7 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Titanium Grade 7 (R52400) Pd-stabilised tubes, 6mm–168.3mm OD. Reducing acids, crevice corrosion resistance. ASTM B338. Prayag Steel India.",
  },
  {
    id: "tub-038",
    slug: "seamless-titanium-tube-grade-12",
    division: "tubes",
    subcategory: TITANIUM_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Titanium Tube — Grade 12",
    shortDescription:
      "Molybdenum-nickel alloyed Titanium Grade 12 (UNS R53400) tubes for elevated-temperature and reducing acid service.",
    description:
      "Seamless Titanium Grade 12 tubes (UNS R53400) contain small additions of molybdenum and nickel to provide enhanced performance in hot reducing acids, high-temperature brine, and mildly reducing service conditions where Grade 2 has limited applicability. Grade 12 offers higher strength than Grade 2 at elevated temperatures while retaining excellent corrosion resistance in seawater and oxidising environments.",
    materials: ["Titanium Grade 12 (UNS R53400)"],
    standards: TITANIUM_STANDARDS,
    specs: makeSpecs("Titanium Grade 12 (UNS R53400)", TITANIUM_STANDARDS, "Heat Exchanger, Condenser"),
    image: "products/tubes/seamless-titanium-tube-grade-12.webp",
    metaTitle: "Seamless Titanium Grade 12 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Titanium Grade 12 (R53400) Mo-Ni alloyed tubes, 6mm–168.3mm OD. Reducing acids, elevated-temperature brine. ASTM B338. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NICKEL (2 grades — NO STANDARD CONFIRMED, see file-level comment)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-039",
    slug: "seamless-nickel-tube-nickel-200",
    division: "tubes",
    subcategory: NICKEL_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Tube — Nickel 200",
    shortDescription:
      "Commercially pure Nickel 200 (UNS N02200) tubes for caustic soda, food processing, and electronic applications.",
    description:
      "Seamless Nickel 200 tubes (UNS N02200, commercially pure nickel) offer excellent resistance to caustic soda (sodium hydroxide), other strong alkalis, and many food acids, combined with good electrical conductivity and magnetic properties. Used in chemical processing of caustic soda and chlorine, food processing equipment, electronic components, and aerospace applications. NOTE: Standard not confirmed in source document — see code comment.",
    materials: ["Nickel 200 (UNS N02200)"],
    // FLAGGED: No standard given in source document for Nickel 200/201 tubes.
    // Do not guess or infer. Confirm with client before launch.
    standards: NICKEL_STANDARDS,
    specs: makeSpecs("Nickel 200 (UNS N02200)", NICKEL_STANDARDS),
    image: "products/tubes/seamless-nickel-tube-nickel-200.webp",
    metaTitle: "Seamless Nickel 200 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Nickel 200 (N02200) tubes, 6mm–168.3mm OD. Caustic soda, food processing, electronic applications. Standard TBC — confirm with client. Prayag Steel India.",
  },
  {
    id: "tub-040",
    slug: "seamless-nickel-tube-nickel-201",
    division: "tubes",
    subcategory: NICKEL_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Nickel Tube — Nickel 201",
    shortDescription:
      "Low-carbon Nickel 201 (UNS N02201) tubes for caustic and elevated-temperature alkaline service.",
    description:
      "Seamless Nickel 201 tubes (UNS N02201) are the low-carbon variant of Nickel 200, suitable for use at temperatures above 315 degrees C where standard Nickel 200 may be susceptible to graphitisation. They retain the same excellent caustic resistance while providing improved performance in elevated-temperature alkaline service. Used in caustic evaporators, food processing, and elevated-temperature chemical processing equipment. NOTE: Standard not confirmed in source document — see code comment.",
    materials: ["Nickel 201 (UNS N02201)"],
    // FLAGGED: No standard given in source document for Nickel 200/201 tubes.
    // Do not guess or infer. Confirm with client before launch.
    standards: NICKEL_STANDARDS,
    specs: makeSpecs("Nickel 201 (UNS N02201)", NICKEL_STANDARDS),
    image: "products/tubes/seamless-nickel-tube-nickel-201.webp",
    metaTitle: "Seamless Nickel 201 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Nickel 201 (N02201) low-carbon tubes, 6mm–168.3mm OD. Elevated-temperature caustic service. Standard TBC — confirm with client. Prayag Steel India.",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ALLOY 20 (1 grade — NO STANDARD CONFIRMED, see file-level comment)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "tub-041",
    slug: "seamless-alloy-20-tube-uns-n08020",
    division: "tubes",
    subcategory: ALLOY20_SUBCATEGORY,
    type: "Seamless",
    name: "Seamless Alloy 20 Tube — UNS N08020",
    shortDescription:
      "Alloy 20 (UNS N08020) tubes for resistance to sulfuric acid and highly corrosive chemical environments.",
    description:
      "Seamless Alloy 20 tubes (UNS N08020, also known as Carpenter 20) are a nickel-iron-chromium-molybdenum-copper alloy specifically developed for maximum resistance to sulfuric acid and other highly corrosive chemical environments. The copper addition in particular provides excellent resistance to hot concentrated sulfuric acid, making Alloy 20 widely used in sulfuric acid handling, chemical process equipment, food processing, and pharmaceutical applications. NOTE: Standard not confirmed in source document — see code comment.",
    materials: ["Alloy 20 (UNS N08020)"],
    // FLAGGED: No standard given in source document for Alloy 20 tubes.
    // Do not guess or infer. Confirm with client before launch.
    standards: ALLOY20_STANDARDS,
    specs: makeSpecs("Alloy 20 (UNS N08020)", ALLOY20_STANDARDS),
    image: "products/tubes/seamless-alloy-20-tube-uns-n08020.webp",
    metaTitle: "Seamless Alloy 20 UNS N08020 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Alloy 20 (N08020) tubes, 6mm–168.3mm OD. Sulfuric acid, chemical process, pharma. Standard TBC — confirm with client. Prayag Steel India.",
  },
];
