import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Tubes Division (Proficient Tubes Pvt. Ltd.) — Sample / Placeholder Entries
// ─────────────────────────────────────────────────────────────────────────────

export const tubes: Product[] = [
  {
    id: "tub-001",
    slug: "seamless-stainless-steel-tube-ss304",
    division: "tubes",
    name: "Seamless Stainless Steel Tube — SS 304",
    shortDescription:
      "Precision seamless SS 304 tubes for instrumentation, heat exchangers, and boiler applications.",
    description:
      "Seamless stainless steel tubes in Grade SS 304 manufactured by Proficient Tubes Pvt. Ltd. These tubes are produced with tight OD and wall-thickness tolerances for instrumentation, heat exchanger, and general process service. Available in bright annealed and pickled & passivated finishes. Each tube is hydrostatically tested and eddy-current tested before dispatch.",
    materials: ["SS 304 (UNS S30400)"],
    sizeRange: "6mm – 219mm OD",
    pressureRating: "0.5mm – 12mm WT",
    standards: ["ASTM A213", "ASTM A269", "EN 10216-5", "ASME SA213"],
    specs: [
      { label: "OD Range", value: "6mm – 219mm" },
      { label: "Wall Thickness", value: "0.5mm – 12mm" },
      { label: "Length", value: "Random (4–8m) / Fixed (up to 12m)" },
      { label: "Grade", value: "SS 304 / UNS S30400" },
      { label: "Finish", value: "Bright Annealed (BA) / Pickled & Passivated" },
      { label: "Testing", value: "Hydrostatic + Eddy Current" },
    ],
    image: "products/tubes/seamless-stainless-steel-tube-ss304.webp",
    metaTitle: "Seamless SS 304 Stainless Steel Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless SS 304 tubes, 6mm–219mm OD, 0.5mm–12mm WT, up to 12m. Hydro + eddy-current tested. Instrumentation, heat exchangers. ASTM A213/A269. Prayag Steel.",
  },
  {
    id: "tub-002",
    slug: "seamless-hastelloy-c276-tube",
    division: "tubes",
    name: "Seamless Hastelloy C-276 Tube",
    shortDescription:
      "Ultra-corrosion-resistant Hastelloy C-276 tubes for aggressive chemical and acid-gas service.",
    description:
      "Hastelloy C-276 (UNS N10276) seamless tubes offer outstanding resistance to a wide range of aggressive chemical environments including strong oxidizing acids, ferric and cupric chlorides, formic and acetic acids, wet chlorine, and mixed acids. Used in chemical reactors, flue-gas desulphurization, and pollution-control equipment.",
    materials: ["Hastelloy C-276 (UNS N10276)"],
    sizeRange: "6mm – 76mm OD",
    pressureRating: "0.5mm – 6mm WT",
    standards: ["ASTM B622", "ASME SB622", "AMS 5530"],
    specs: [
      { label: "OD Range", value: "6mm – 76mm" },
      { label: "Wall Thickness", value: "0.5mm – 6mm" },
      { label: "Grade", value: "Hastelloy C-276 / UNS N10276" },
      { label: "Standard", value: "ASTM B622" },
      { label: "Applications", value: "Chemical reactors, FGD, acid-gas service" },
    ],
    image: "products/tubes/seamless-hastelloy-c276-tube.webp",
    metaTitle: "Seamless Hastelloy C-276 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Seamless Hastelloy C-276 (N10276) tubes for aggressive chemical & acid-gas service. 6mm–76mm OD. ASTM B622. Chemical reactors, FGD. Proficient Tubes / Prayag Steel.",
  },
  {
    id: "tub-003",
    slug: "welded-titanium-tube-grade-2",
    division: "tubes",
    name: "Welded Titanium Tube — Grade 2",
    shortDescription:
      "Lightweight, corrosion-proof Titanium Grade 2 welded tubes for marine, aerospace, and medical applications.",
    description:
      "Titanium Grade 2 (commercially pure titanium, UNS R50400) welded tubes offer exceptional corrosion resistance in seawater, chlorine, and oxidizing acids combined with a low density (60% lighter than steel). Widely specified for marine heat exchangers, desalination plants, aerospace hydraulic lines, and medical implant manufacturing.",
    materials: ["Titanium Grade 2 (UNS R50400)"],
    sizeRange: "9.5mm – 76mm OD",
    pressureRating: "0.5mm – 3mm WT",
    standards: ["ASTM B338", "ASME SB338", "AMS 4944"],
    specs: [
      { label: "OD Range", value: "9.5mm – 76mm" },
      { label: "Wall Thickness", value: "0.5mm – 3mm" },
      { label: "Grade", value: "Titanium Gr. 2 / UNS R50400" },
      { label: "Type", value: "Welded (W) / Seamless (S)" },
      { label: "Standard", value: "ASTM B338" },
      { label: "Applications", value: "Marine, Desalination, Aerospace, Medical" },
    ],
    image: "products/tubes/welded-titanium-tube-grade-2.webp",
    metaTitle: "Welded Titanium Grade 2 Tubes | Proficient Tubes — Prayag Steel",
    metaDescription:
      "Welded Titanium Grade 2 (R50400) tubes, 9.5mm–76mm OD. Marine, desalination, aerospace, medical. ASTM B338. Lightweight & corrosion-proof. Prayag Steel India.",
  },
];
