import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Pipes Division — Full Catalogue (54 Products)
// ─────────────────────────────────────────────────────────────────────────────

export const pipes: Product[] = [

  // ── Stainless Steel ─────────────────────────────────────────────────────────
  {
    id: "pip-001",
    slug: "seamless-stainless-steel-pipe-tp304",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP304",
    shortDescription:
      "Seamless TP304 pipes offering excellent corrosion resistance in a wide range of environments. Bright annealed, pickled & passivated finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP304 (UNS S30400) are the most widely used austenitic grade, offering good corrosion resistance in atmospheric and mild chemical environments. Manufactured without a weld seam, they are suited to chemical processing, food & beverage, architecture, and general engineering. Available in bright annealed (BA), pickled & passivated (P&P), and polished finishes. Supplied per ASTM A312, A213, A269, A511, and A358 as applicable.",
    materials: ["TP304 (UNS S30400)"],
    // Dimensional spec is a general-catalogue placeholder applied uniformly — not yet confirmed per alloy family by client.
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP304 (UNS S30400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp304.webp",
    metaTitle: "Seamless TP304 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP304 stainless steel pipes, 6mm–168mm OD. BA, P&P, polished finish. ASTM A312/A213 compliant. Chemical, food & beverage, general engineering. Prayag Steel.",
  },
  {
    id: "pip-002",
    slug: "seamless-stainless-steel-pipe-tp304l",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP304L",
    shortDescription:
      "Seamless TP304L low-carbon pipes with reduced sensitisation risk for welded assemblies. Bright annealed, pickled & passivated finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP304L (UNS S30403) are the low-carbon variant of TP304, minimising carbide precipitation during welding and thus reducing sensitisation risk in as-welded structures. The grade retains excellent corrosion resistance in atmospheric and mildly corrosive environments. Widely used in chemical processing, pharmaceuticals, dairy, and cryogenic service. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP304L (UNS S30403)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP304L (UNS S30403)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp304l.webp",
    metaTitle: "Seamless TP304L Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP304L low-carbon stainless steel pipes, 6mm–168mm OD. Reduced sensitisation risk, ideal for welded assemblies. ASTM A312/A213. Prayag Steel India.",
  },
  {
    id: "pip-003",
    slug: "seamless-stainless-steel-pipe-tp304h",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP304H",
    shortDescription:
      "Seamless TP304H high-carbon pipes with enhanced creep strength for elevated-temperature service. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP304H (UNS S30409) are the high-carbon variant of TP304, providing improved creep and stress-rupture strength at elevated temperatures compared to standard TP304. The grade is selected for high-temperature pressure vessels, superheater tubing, and heat exchangers operating above 425°C. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP304H (UNS S30409)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP304H (UNS S30409)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp304h.webp",
    metaTitle: "Seamless TP304H Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP304H high-carbon stainless steel pipes for elevated-temperature service. Enhanced creep strength. ASTM A312/A213. Heat exchangers, superheaters. Prayag Steel.",
  },
  {
    id: "pip-004",
    slug: "seamless-stainless-steel-pipe-tp310",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP310",
    shortDescription:
      "Seamless TP310 pipes with high chromium and nickel content for outstanding high-temperature oxidation resistance. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP310 (UNS S31000) contain approximately 25% chromium and 20% nickel, making them highly resistant to oxidation and sulfidation at temperatures up to 1040°C. Commonly used in furnace components, kiln liners, radiant tubes, and heat treatment equipment. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP310 (UNS S31000)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP310 (UNS S31000)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp310.webp",
    metaTitle: "Seamless TP310 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP310 stainless steel pipes for high-temperature oxidation resistance up to 1040°C. ASTM A312/A213. Furnace, kiln, heat treatment applications. Prayag Steel.",
  },
  {
    id: "pip-005",
    slug: "seamless-stainless-steel-pipe-tp310s",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP310S",
    shortDescription:
      "Seamless TP310S low-carbon pipes combining high-temperature oxidation resistance with improved weldability. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP310S (UNS S31008) are the low-carbon variant of TP310, offering the same excellent high-temperature oxidation resistance while being more weldable due to the reduced carbon content. Used extensively in chemical and petrochemical processing, thermal processing equipment, and power generation. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP310S (UNS S31008)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP310S (UNS S31008)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp310s.webp",
    metaTitle: "Seamless TP310S Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP310S low-carbon stainless steel pipes with excellent high-temperature resistance and improved weldability. ASTM A312/A213. Prayag Steel India.",
  },
  {
    id: "pip-006",
    slug: "seamless-stainless-steel-pipe-tp316",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP316",
    shortDescription:
      "Seamless TP316 molybdenum-bearing pipes with superior corrosion resistance in chloride and marine environments. Bright annealed, pickled & passivated finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP316 (UNS S31600) contain 2–3% molybdenum, which significantly improves resistance to pitting and crevice corrosion in chloride-containing environments compared to TP304. The grade is preferred for chemical processing, marine applications, pharmaceutical manufacturing, and food service equipment. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP316 (UNS S31600)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP316 (UNS S31600)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp316.webp",
    metaTitle: "Seamless TP316 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP316 molybdenum-bearing stainless steel pipes for superior chloride resistance. 6mm–168mm OD. ASTM A312/A213. Chemical, marine, pharma. Prayag Steel.",
  },
  {
    id: "pip-007",
    slug: "seamless-stainless-steel-pipe-tp316l",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP316L",
    shortDescription:
      "Seamless TP316L low-carbon pipes with superior chloride resistance and excellent weldability for critical applications. Bright annealed, pickled & passivated finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP316L (UNS S31603) are the low-carbon, fully austenitic variant of TP316, offering excellent corrosion resistance in chloride-bearing and mildly acidic environments while eliminating sensitisation risk in welded constructions. Preferred for chemical processing, pharmaceuticals, nuclear, and offshore oil & gas. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP316L (UNS S31603)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP316L (UNS S31603)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp316l.webp",
    metaTitle: "Seamless TP316L Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP316L low-carbon stainless steel pipes, 6mm–168mm OD. Superior chloride resistance, ideal for welded assemblies. ASTM A312/A213. Chemical, pharma, nuclear. Prayag Steel.",
  },
  {
    id: "pip-008",
    slug: "seamless-stainless-steel-pipe-tp316ti",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP316Ti",
    shortDescription:
      "Seamless TP316Ti titanium-stabilised pipes with enhanced intergranular corrosion resistance at elevated temperatures. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP316Ti (UNS S31635) are the titanium-stabilised variant of TP316, providing improved resistance to intergranular corrosion after welding or prolonged exposure to sensitising temperatures (450–850°C). The grade is well-suited to chemical plant, heat exchangers, and refinery components operating in corrosive high-temperature environments. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP316Ti (UNS S31635)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP316Ti (UNS S31635)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp316ti.webp",
    metaTitle: "Seamless TP316Ti Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP316Ti titanium-stabilised stainless steel pipes with enhanced intergranular corrosion resistance. ASTM A312/A213. Chemical, refinery, heat exchangers. Prayag Steel.",
  },
  {
    id: "pip-009",
    slug: "seamless-stainless-steel-pipe-tp317",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP317",
    shortDescription:
      "Seamless TP317 high-molybdenum pipes with superior pitting resistance in aggressive chemical environments. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP317 (UNS S31700) contain higher molybdenum (3–4%) than TP316, providing superior pitting and crevice corrosion resistance in aggressive chloride, organic acid, and bleach environments. Commonly used in pulp and paper, textile dyeing, and chemical processing industries. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP317 (UNS S31700)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP317 (UNS S31700)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp317.webp",
    metaTitle: "Seamless TP317 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP317 high-molybdenum stainless steel pipes for superior pitting resistance. ASTM A312/A213. Pulp & paper, textile, chemical processing. Prayag Steel India.",
  },
  {
    id: "pip-010",
    slug: "seamless-stainless-steel-pipe-tp317l",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP317L",
    shortDescription:
      "Seamless TP317L low-carbon, high-molybdenum pipes with excellent corrosion resistance and improved weldability. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP317L (UNS S31703) combine the high molybdenum content of TP317 with a low carbon level, offering excellent resistance to pitting and crevice corrosion while minimising sensitisation in welded joints. Particularly suited to chemical processing, desalination, and pulp & paper applications where both corrosion resistance and weldability are critical. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP317L (UNS S31703)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP317L (UNS S31703)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp317l.webp",
    metaTitle: "Seamless TP317L Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP317L low-carbon, high-molybdenum stainless steel pipes. Superior pitting resistance and excellent weldability. ASTM A312/A213. Prayag Steel India.",
  },
  {
    id: "pip-011",
    slug: "seamless-stainless-steel-pipe-tp321",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP321",
    shortDescription:
      "Seamless TP321 titanium-stabilised pipes immune to sensitisation for elevated-temperature service. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP321 (UNS S32100) are stabilised with titanium additions that prevent sensitisation by preferentially forming titanium carbides rather than chromium carbides at grain boundaries. The grade maintains excellent corrosion resistance after prolonged exposure to 425–900°C, making it well-suited to jet engine components, chemical plant, and aircraft exhaust systems. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP321 (UNS S32100)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP321 (UNS S32100)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp321.webp",
    metaTitle: "Seamless TP321 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP321 titanium-stabilised stainless steel pipes immune to sensitisation. Elevated-temperature service. ASTM A312/A213. Aerospace, chemical, exhaust. Prayag Steel.",
  },
  {
    id: "pip-012",
    slug: "seamless-stainless-steel-pipe-tp321h",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP321H",
    shortDescription:
      "Seamless TP321H high-carbon, titanium-stabilised pipes with superior creep strength for high-temperature pressure service. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP321H (UNS S32109) are the high-carbon variant of TP321, providing improved creep and stress-rupture strength at elevated temperatures. Titanium stabilisation prevents sensitisation, making the grade suitable for superheater tubing, high-temperature pressure vessels, and long-term elevated-temperature service above 550°C. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP321H (UNS S32109)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP321H (UNS S32109)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp321h.webp",
    metaTitle: "Seamless TP321H Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP321H high-carbon titanium-stabilised stainless steel pipes for superior creep strength. ASTM A312/A213. Superheaters, high-temperature pressure vessels. Prayag Steel.",
  },
  {
    id: "pip-013",
    slug: "seamless-stainless-steel-pipe-tp347",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP347",
    shortDescription:
      "Seamless TP347 niobium-stabilised pipes with high resistance to intergranular corrosion for elevated-temperature service. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP347 (UNS S34700) are stabilised with niobium (columbium), preventing sensitisation and intergranular corrosion after welding or prolonged high-temperature exposure. The grade provides good mechanical properties at elevated temperatures and is used in chemical plant, oil refining, heat exchangers, and aircraft exhaust stacks. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP347 (UNS S34700)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP347 (UNS S34700)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp347.webp",
    metaTitle: "Seamless TP347 Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP347 niobium-stabilised stainless steel pipes. High intergranular corrosion resistance for elevated-temperature service. ASTM A312/A213. Prayag Steel India.",
  },
  {
    id: "pip-014",
    slug: "seamless-stainless-steel-pipe-tp347h",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP347H",
    shortDescription:
      "Seamless TP347H high-carbon, niobium-stabilised pipes with superior creep resistance for high-temperature pressure service. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP347H (UNS S34709) are the high-carbon variant of TP347, providing enhanced creep and stress-rupture properties at temperatures above 550°C while retaining niobium stabilisation against intergranular corrosion. The grade is favoured for power generation superheaters, reheater tubing, and high-temperature pressure vessels. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP347H (UNS S34709)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP347H (UNS S34709)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp347h.webp",
    metaTitle: "Seamless TP347H Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP347H high-carbon niobium-stabilised stainless steel pipes for superior creep resistance. ASTM A312/A213. Power generation, superheaters. Prayag Steel.",
  },
  {
    id: "pip-015",
    slug: "seamless-stainless-steel-pipe-tp904l",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — TP904L",
    shortDescription:
      "Seamless TP904L high-alloy austenitic pipes with outstanding resistance to sulphuric acid and chloride pitting. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade TP904L (UNS N08904) are a high-alloy austenitic grade containing 25% nickel, 4.5% molybdenum, and copper additions, providing outstanding resistance to sulphuric acid, phosphoric acid, and chloride-induced pitting and crevice corrosion. Used in chemical processing, pickling equipment, offshore platforms, and oil refining. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["TP904L (UNS N08904)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "TP904L (UNS N08904)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-tp904l.webp",
    metaTitle: "Seamless TP904L Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless TP904L high-alloy austenitic stainless steel pipes for outstanding sulphuric acid and chloride resistance. ASTM A312/A213. Chemical, offshore. Prayag Steel.",
  },
  {
    id: "pip-016",
    slug: "seamless-stainless-steel-pipe-uns-s31254",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — UNS S31254 (254 SMO)",
    shortDescription:
      "Seamless 254 SMO pipes, a 6% molybdenum superaustenitic grade with exceptional resistance to chloride pitting and crevice corrosion. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade UNS S31254 (254 SMO) are a superaustenitic 6% molybdenum grade with very high chromium, nickel, and nitrogen content, providing exceptional resistance to chloride-induced pitting, crevice corrosion, and stress-corrosion cracking. Suitable for seawater handling, desalination, flue-gas desulphurisation, and pulp bleaching systems. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["UNS S31254 (254 SMO)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS S31254 (254 SMO)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-uns-s31254.webp",
    metaTitle: "Seamless 254 SMO (UNS S31254) Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless 254 SMO (UNS S31254) superaustenitic 6Mo stainless steel pipes. Exceptional chloride pitting resistance. ASTM A312/A213. Seawater, desalination. Prayag Steel.",
  },
  {
    id: "pip-017",
    slug: "seamless-stainless-steel-pipe-uns-n08367",
    division: "pipes",
    subcategory: "Stainless Steel",
    type: "Seamless",
    name: "Stainless Steel Pipe — UNS N08367 (6Mo)",
    shortDescription:
      "Seamless UNS N08367 6% molybdenum austenitic pipes with very high pitting resistance for severe chloride and acid environments. Bright annealed finish available.",
    description:
      "Seamless stainless steel pipes in Grade UNS N08367 (AL-6XN / 6Mo) are a nitrogen-strengthened superaustenitic grade containing 6% molybdenum, 24% nickel, and 20% chromium, providing a very high pitting resistance equivalent (PRE > 46) and outstanding resistance to chloride-induced stress-corrosion cracking. Widely used in seawater piping, offshore platforms, chemical processing, and flue-gas scrubbing systems. Supplied per ASTM A312, A213, A269, A511, and A358.",
    materials: ["UNS N08367 (AL-6XN / 6Mo)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS N08367 (AL-6XN / 6Mo)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / ASTM A213 / ASTM A269 / ASTM A511 / ASTM A358" },
    ],
    standards: ["ASTM A312", "ASTM A213", "ASTM A269", "ASTM A511", "ASTM A358"],
    image: "products/pipes/seamless-stainless-steel-pipe-uns-n08367.webp",
    metaTitle: "Seamless UNS N08367 6Mo Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless UNS N08367 (6Mo / AL-6XN) superaustenitic stainless steel pipes with very high pitting resistance. ASTM A312/A213. Seawater, offshore, chemical. Prayag Steel.",
  },

  // ── Duplex ──────────────────────────────────────────────────────────────────
  {
    id: "pip-018",
    slug: "seamless-duplex-pipe-uns-s31803",
    division: "pipes",
    subcategory: "Duplex",
    type: "Seamless",
    name: "Duplex Pipe — UNS S31803",
    shortDescription:
      "Seamless UNS S31803 duplex pipes combining ferritic and austenitic microstructure for high strength and pitting resistance. Bright annealed finish available.",
    description:
      "Seamless duplex stainless steel pipes in Grade UNS S31803 feature a balanced ferritic-austenitic two-phase microstructure, providing approximately twice the yield strength of standard austenitic grades and excellent resistance to pitting, crevice corrosion, and stress-corrosion cracking in chloride environments. Widely used in oil & gas processing, chemical tankers, desalination, and heat exchangers. Supplied per ASTM A790 and ASTM A928.",
    materials: ["UNS S31803"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS S31803" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A790 / ASTM A928" },
    ],
    standards: ["ASTM A790", "ASTM A928"],
    image: "products/pipes/seamless-duplex-pipe-uns-s31803.webp",
    metaTitle: "Seamless UNS S31803 Duplex Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless UNS S31803 duplex stainless steel pipes — high strength, excellent pitting and SCC resistance. ASTM A790. Oil & gas, chemical, desalination. Prayag Steel.",
  },
  {
    id: "pip-019",
    slug: "seamless-duplex-pipe-uns-s32205",
    division: "pipes",
    subcategory: "Duplex",
    type: "Seamless",
    name: "Duplex Pipe — UNS S32205 (2205)",
    shortDescription:
      "Seamless 2205 duplex pipes offering approximately twice the strength of standard austenitic SS with superior pitting resistance. Bright annealed finish available.",
    description:
      "Seamless duplex 2205 (UNS S32205) pipes are the most widely used duplex grade, with enhanced nitrogen content compared to S31803 that provides better pitting resistance. The ferritic-austenitic microstructure delivers high yield strength, excellent resistance to pitting and stress-corrosion cracking, and good weldability. Preferred for chemical tankers, desalination plants, oil & gas platforms, and subsea equipment. Supplied per ASTM A790 and ASTM A928.",
    materials: ["UNS S32205 (2205)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS S32205 (2205)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A790 / ASTM A928" },
    ],
    standards: ["ASTM A790", "ASTM A928"],
    image: "products/pipes/seamless-duplex-pipe-uns-s32205.webp",
    metaTitle: "Seamless 2205 Duplex (UNS S32205) Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless 2205 duplex (UNS S32205) stainless steel pipes — 2× strength of standard SS, superior pitting resistance. ASTM A790. Chemical, desalination, oil & gas. Prayag Steel.",
  },

  // ── Super Duplex ─────────────────────────────────────────────────────────────
  {
    id: "pip-020",
    slug: "seamless-super-duplex-pipe-uns-s32750",
    division: "pipes",
    subcategory: "Super Duplex",
    type: "Seamless",
    name: "Super Duplex Pipe — UNS S32750 (2507)",
    shortDescription:
      "Seamless 2507 super duplex pipes with very high pitting resistance and excellent mechanical strength for aggressive offshore environments. Bright annealed finish available.",
    description:
      "Seamless super duplex 2507 (UNS S32750) pipes contain 25% chromium, 7% nickel, and 4% molybdenum, providing a pitting resistance equivalent (PRE) above 40 and outstanding resistance to pitting, crevice corrosion, and stress-corrosion cracking in chloride-rich and acidic environments. The grade also has high tensile and yield strength. Used in offshore oil & gas piping, desalination, subsea umbilicals, and chemical process vessels. Supplied per ASTM A790 and ASTM A928.",
    materials: ["UNS S32750 (2507)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS S32750 (2507)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A790 / ASTM A928" },
    ],
    standards: ["ASTM A790", "ASTM A928"],
    image: "products/pipes/seamless-super-duplex-pipe-uns-s32750.webp",
    metaTitle: "Seamless 2507 Super Duplex (UNS S32750) Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless 2507 super duplex (UNS S32750) pipes — very high PRE, outstanding pitting resistance. ASTM A790. Offshore, desalination, chemical processing. Prayag Steel.",
  },
  {
    id: "pip-021",
    slug: "seamless-super-duplex-pipe-uns-s32760",
    division: "pipes",
    subcategory: "Super Duplex",
    type: "Seamless",
    name: "Super Duplex Pipe — UNS S32760",
    shortDescription:
      "Seamless UNS S32760 super duplex pipes with tungsten addition for superior corrosion resistance in aggressive marine and chemical environments. Bright annealed finish available.",
    description:
      "Seamless super duplex pipes in Grade UNS S32760 (Zeron 100) are alloyed with copper and tungsten in addition to high chromium, nickel, and molybdenum, achieving a PRE above 40 and excellent resistance to pitting, crevice corrosion, and erosion corrosion in seawater, acids, and mixed acid-chloride environments. Tungsten additions further enhance localised corrosion resistance. Used in offshore topside piping, marine pumps, and chemical process equipment. Supplied per ASTM A790 and ASTM A928.",
    materials: ["UNS S32760 (Zeron 100)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "UNS S32760 (Zeron 100)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A790 / ASTM A928" },
    ],
    standards: ["ASTM A790", "ASTM A928"],
    image: "products/pipes/seamless-super-duplex-pipe-uns-s32760.webp",
    metaTitle: "Seamless UNS S32760 Super Duplex Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless UNS S32760 (Zeron 100) super duplex pipes — PRE >40, excellent corrosion resistance in seawater and acids. ASTM A790. Offshore, marine. Prayag Steel India.",
  },

  // ── Inconel ──────────────────────────────────────────────────────────────────
  {
    id: "pip-022",
    slug: "seamless-inconel-pipe-600",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 600",
    shortDescription:
      "Seamless Inconel 600 pipes with excellent resistance to oxidation, carburisation, and chloride-ion stress-corrosion cracking at elevated temperatures.",
    description:
      "Seamless Inconel 600 (UNS N06600) pipes are a nickel-chromium alloy providing excellent resistance to high-temperature oxidation, carburisation, and chloride-ion stress-corrosion cracking up to 1150°C. The alloy is non-magnetic and retains strength across a broad temperature range, making it suitable for heat treating equipment, chemical and food processing, and nuclear applications. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 600 (UNS N06600)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 600 (UNS N06600)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-600.webp",
    metaTitle: "Seamless Inconel 600 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 600 (UNS N06600) pipes — excellent oxidation and carburisation resistance up to 1150°C. ASTM B622/B444. Heat treatment, nuclear, chemical. Prayag Steel.",
  },
  {
    id: "pip-023",
    slug: "seamless-inconel-pipe-601",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 601",
    shortDescription:
      "Seamless Inconel 601 pipes with exceptional high-temperature oxidation resistance and good mechanical strength up to 1200°C.",
    description:
      "Seamless Inconel 601 (UNS N06601) pipes are a nickel-chromium-aluminium alloy offering outstanding resistance to high-temperature oxidation and spalling of the oxide scale up to 1200°C. Aluminium additions form a tight, adherent alumina scale that provides exceptional protection in oxidising and carburising atmospheres. Used in industrial heating equipment, thermal processing, gas turbines, and combustion chambers. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 601 (UNS N06601)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 601 (UNS N06601)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-601.webp",
    metaTitle: "Seamless Inconel 601 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 601 (UNS N06601) pipes — exceptional oxidation resistance to 1200°C with aluminium-enhanced protective scale. ASTM B622/B444. Industrial heating. Prayag Steel.",
  },
  {
    id: "pip-024",
    slug: "seamless-inconel-pipe-617",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 617",
    shortDescription:
      "Seamless Inconel 617 pipes combining high-temperature strength with oxidation resistance for gas turbine and power generation service.",
    description:
      "Seamless Inconel 617 (UNS N06617) pipes are a nickel-chromium-cobalt-molybdenum alloy with an outstanding combination of high-temperature strength and oxidation resistance. Cobalt and molybdenum additions provide solid-solution strengthening, making the alloy suitable for gas turbine hot-section components, steam reforming, and high-temperature pressure vessels. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 617 (UNS N06617)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 617 (UNS N06617)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-617.webp",
    metaTitle: "Seamless Inconel 617 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 617 (UNS N06617) pipes — high-temperature strength and oxidation resistance for gas turbines and steam reforming. ASTM B622/B444. Prayag Steel.",
  },
  {
    id: "pip-025",
    slug: "seamless-inconel-pipe-625",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 625",
    shortDescription:
      "Seamless Inconel 625 pipes with exceptional strength and corrosion resistance in seawater, acids, and high-temperature environments.",
    description:
      "Seamless Inconel 625 (UNS N06625) pipes offer exceptional strength and resistance to corrosion and oxidation in severe environments including seawater, acids, and high-temperature applications. The niobium and molybdenum additions provide solid-solution strengthening without requiring heat treatment. Widely used in defence, aerospace, nuclear, and offshore oil & gas industries. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 625 (UNS N06625)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 625 (UNS N06625)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-625.webp",
    metaTitle: "Seamless Inconel 625 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 625 (UNS N06625) pipes for extreme corrosion and high-temperature service. Defence, nuclear, aerospace, offshore. ASTM B622/B444. Prayag Steel India.",
  },
  {
    id: "pip-026",
    slug: "seamless-inconel-pipe-686",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 686",
    shortDescription:
      "Seamless Inconel 686 pipes with extremely high corrosion resistance in the most aggressive oxidising and reducing acid environments.",
    description:
      "Seamless Inconel 686 (UNS N06686) pipes are a nickel-chromium-molybdenum-tungsten alloy with one of the highest corrosion resistance levels in the Inconel family, excelling in both oxidising and reducing acid environments including mixed acids, wet chlorine, and hypochlorite. The high molybdenum and tungsten content provides outstanding pitting and crevice corrosion resistance. Used in chemical processing, flue gas desulphurisation, and pollution control equipment. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 686 (UNS N06686)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 686 (UNS N06686)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-686.webp",
    metaTitle: "Seamless Inconel 686 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 686 (UNS N06686) pipes — extremely high corrosion resistance in mixed acids, wet chlorine, and hypochlorite. ASTM B622/B444. Prayag Steel India.",
  },
  {
    id: "pip-027",
    slug: "seamless-inconel-pipe-690",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 690",
    shortDescription:
      "Seamless Inconel 690 high-chromium pipes with superior resistance to intergranular corrosion and stress-corrosion cracking in nuclear steam generators.",
    description:
      "Seamless Inconel 690 (UNS N06690) pipes contain approximately 30% chromium, providing exceptional resistance to intergranular corrosion, oxidising acids, and high-temperature corrosion. The grade is specifically developed for nuclear steam generator tubing where resistance to primary-water stress-corrosion cracking is paramount. Also used in chemical processing, high-temperature oxidation, and sulphur-containing gas environments. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 690 (UNS N06690)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 690 (UNS N06690)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-690.webp",
    metaTitle: "Seamless Inconel 690 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 690 (UNS N06690) high-chromium pipes — superior SCC resistance for nuclear steam generators and chemical processing. ASTM B622/B444. Prayag Steel.",
  },
  {
    id: "pip-028",
    slug: "seamless-inconel-pipe-718",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — 718",
    shortDescription:
      "Seamless Inconel 718 precipitation-hardened pipes with very high strength and excellent corrosion resistance for aerospace and oil & gas service.",
    description:
      "Seamless Inconel 718 (UNS N07718) pipes are a precipitation-hardened nickel-chromium alloy strengthened by niobium, molybdenum, and aluminium/titanium additions, providing very high tensile and yield strength across a wide temperature range from cryogenic to 700°C. The alloy has excellent weldability compared to other high-strength nickel alloys. Widely used in aerospace, turbine discs, oil & gas down-hole tools, and nuclear reactors. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel 718 (UNS N07718)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel 718 (UNS N07718)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-718.webp",
    metaTitle: "Seamless Inconel 718 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 718 (UNS N07718) precipitation-hardened pipes — very high strength, cryogenic to 700°C. ASTM B622/B444. Aerospace, oil & gas, nuclear. Prayag Steel.",
  },
  {
    id: "pip-029",
    slug: "seamless-inconel-pipe-x-750",
    division: "pipes",
    subcategory: "Inconel",
    type: "Seamless",
    name: "Inconel Pipe — X-750",
    shortDescription:
      "Seamless Inconel X-750 age-hardenable pipes with high strength and oxidation resistance for gas turbine and nuclear reactor spring applications.",
    description:
      "Seamless Inconel X-750 (UNS N07750) pipes are an age-hardenable nickel-chromium alloy with aluminium and titanium additions that provide high tensile strength, good oxidation resistance to 980°C, and resistance to relaxation in spring applications at elevated temperatures. Used in gas turbine blades and vanes, nuclear reactor springs, bolts and fasteners, and high-temperature structural components. Supplied per ASTM B622 and ASTM B444.",
    materials: ["Inconel X-750 (UNS N07750)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Inconel X-750 (UNS N07750)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B444" },
    ],
    standards: ["ASTM B622", "ASTM B444"],
    image: "products/pipes/seamless-inconel-pipe-x-750.webp",
    metaTitle: "Seamless Inconel X-750 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel X-750 (UNS N07750) age-hardenable pipes — high strength, oxidation resistance to 980°C. ASTM B622/B444. Gas turbines, nuclear, aerospace. Prayag Steel.",
  },

  // ── Incoloy ──────────────────────────────────────────────────────────────────
  {
    id: "pip-030",
    slug: "seamless-incoloy-pipe-800",
    division: "pipes",
    subcategory: "Incoloy",
    type: "Seamless",
    name: "Incoloy Pipe — 800",
    shortDescription:
      "Seamless Incoloy 800 iron-nickel-chromium pipes with good resistance to carburisation, oxidation, and nitridation at elevated temperatures.",
    description:
      "Seamless Incoloy 800 (UNS N08800) pipes are an iron-nickel-chromium alloy with good resistance to carburisation, oxidation, and nitridation at elevated temperatures up to 816°C. The alloy maintains adequate strength and resists embrittlement in long-term service. Widely used in chemical processing equipment, heat exchangers, furnace components, and steam generation. Supplied per ASTM B407, ASTM B423, and ASTM B163.",
    materials: ["Incoloy 800 (UNS N08800)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Incoloy 800 (UNS N08800)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B407 / ASTM B423 / ASTM B163" },
    ],
    standards: ["ASTM B407", "ASTM B423", "ASTM B163"],
    image: "products/pipes/seamless-incoloy-pipe-800.webp",
    metaTitle: "Seamless Incoloy 800 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Incoloy 800 (UNS N08800) pipes — carburisation, oxidation, and nitridation resistance to 816°C. ASTM B407/B423. Chemical processing, heat exchangers. Prayag Steel.",
  },
  {
    id: "pip-031",
    slug: "seamless-incoloy-pipe-800h",
    division: "pipes",
    subcategory: "Incoloy",
    type: "Seamless",
    name: "Incoloy Pipe — 800H",
    shortDescription:
      "Seamless Incoloy 800H high-creep-strength pipes for high-temperature petrochemical and steam reforming applications.",
    description:
      "Seamless Incoloy 800H (UNS N08810) pipes are a higher-carbon, coarser-grained variant of Incoloy 800 specifically optimised for superior creep and stress-rupture properties at temperatures above 600°C. The grade maintains its strength over extended high-temperature service, making it suitable for steam reformer tubes, ammonia cracker tubes, pyrolysis furnace components, and steam generation equipment. Supplied per ASTM B407, ASTM B423, and ASTM B163.",
    materials: ["Incoloy 800H (UNS N08810)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Incoloy 800H (UNS N08810)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B407 / ASTM B423 / ASTM B163" },
    ],
    standards: ["ASTM B407", "ASTM B423", "ASTM B163"],
    image: "products/pipes/seamless-incoloy-pipe-800h.webp",
    metaTitle: "Seamless Incoloy 800H Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Incoloy 800H (UNS N08810) pipes — superior creep strength above 600°C. ASTM B407/B423. Steam reformers, ammonia crackers, pyrolysis furnaces. Prayag Steel.",
  },
  {
    id: "pip-032",
    slug: "seamless-incoloy-pipe-800ht",
    division: "pipes",
    subcategory: "Incoloy",
    type: "Seamless",
    name: "Incoloy Pipe — 800HT",
    shortDescription:
      "Seamless Incoloy 800HT pipes with the highest creep strength in the 800 series for severe elevated-temperature service.",
    description:
      "Seamless Incoloy 800HT (UNS N08811) pipes are a fully stabilised, fine-grained variant of the 800 series with controlled carbon, aluminium, and titanium content, providing the highest level of creep and stress-rupture strength among 800-series alloys at temperatures above 700°C. The grade is specified for the most demanding high-temperature applications, including steam cracking furnaces, ethylene production, and power plant superheaters. Supplied per ASTM B407, ASTM B423, and ASTM B163.",
    materials: ["Incoloy 800HT (UNS N08811)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Incoloy 800HT (UNS N08811)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B407 / ASTM B423 / ASTM B163" },
    ],
    standards: ["ASTM B407", "ASTM B423", "ASTM B163"],
    image: "products/pipes/seamless-incoloy-pipe-800ht.webp",
    metaTitle: "Seamless Incoloy 800HT Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Incoloy 800HT (UNS N08811) pipes — highest creep strength in the 800 series for steam cracking and ethylene production. ASTM B407/B423. Prayag Steel.",
  },
  {
    id: "pip-033",
    slug: "seamless-incoloy-pipe-825",
    division: "pipes",
    subcategory: "Incoloy",
    type: "Seamless",
    name: "Incoloy Pipe — 825",
    shortDescription:
      "Seamless Incoloy 825 pipes with outstanding corrosion resistance in sulphuric and phosphoric acids and chloride-containing environments.",
    description:
      "Seamless Incoloy 825 (UNS N08825) pipes are a nickel-iron-chromium alloy with molybdenum, copper, and titanium stabilisation, providing outstanding resistance to both reducing and oxidising acids (sulphuric, phosphoric, nitric), pitting, crevice corrosion, and stress-corrosion cracking in chloride environments. Used extensively in oil & gas downhole tubing, chemical processing, acid pickling, and seawater service. Supplied per ASTM B407, ASTM B423, and ASTM B163.",
    materials: ["Incoloy 825 (UNS N08825)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Incoloy 825 (UNS N08825)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B407 / ASTM B423 / ASTM B163" },
    ],
    standards: ["ASTM B407", "ASTM B423", "ASTM B163"],
    image: "products/pipes/seamless-incoloy-pipe-825.webp",
    metaTitle: "Seamless Incoloy 825 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Incoloy 825 (UNS N08825) pipes — outstanding sulphuric and phosphoric acid corrosion resistance. ASTM B407/B423. Oil & gas, chemical, seawater. Prayag Steel.",
  },

  // ── Monel ────────────────────────────────────────────────────────────────────
  {
    id: "pip-034",
    slug: "seamless-monel-pipe-400",
    division: "pipes",
    subcategory: "Monel",
    type: "Seamless",
    name: "Monel Pipe — 400",
    shortDescription:
      "Seamless Monel 400 nickel-copper alloy pipes with excellent corrosion resistance in seawater, hydrofluoric acid, and reducing acids.",
    description:
      "Seamless Monel 400 (UNS N04400) pipes are a nickel-copper alloy with good resistance to sea and salt water, hydrofluoric acid, sulphuric acid, alkaline solutions, and many reducing acids. The alloy is virtually immune to chloride-induced stress-corrosion cracking. Used in marine hardware, chemical processing, valves, pump shafts, and hydrocarbon processing. Supplied per ASTM B165 and ASTM B725.",
    materials: ["Monel 400 (UNS N04400)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Monel 400 (UNS N04400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B165 / ASTM B725" },
    ],
    standards: ["ASTM B165", "ASTM B725"],
    image: "products/pipes/seamless-monel-pipe-400.webp",
    metaTitle: "Seamless Monel 400 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Monel 400 (UNS N04400) pipes — excellent resistance to seawater, HF acid, and reducing acids. ASTM B165/B725. Marine, chemical, hydrocarbon processing. Prayag Steel.",
  },
  {
    id: "pip-035",
    slug: "seamless-monel-pipe-k-500",
    division: "pipes",
    subcategory: "Monel",
    type: "Seamless",
    name: "Monel Pipe — K-500",
    shortDescription:
      "Seamless Monel K-500 age-hardenable nickel-copper pipes with approximately three times the yield strength of Monel 400 for marine and oil & gas service.",
    description:
      "Seamless Monel K-500 (UNS N05500) pipes are an age-hardenable nickel-copper alloy with aluminium and titanium additions that provide approximately three times the yield strength and twice the tensile strength of Monel 400 while retaining similar corrosion resistance. The alloy is non-magnetic and retains its properties in cryogenic environments. Used in marine propeller shafts, pump shafts, oil & gas downhole tools, and valve stems. Supplied per ASTM B165 and ASTM B725.",
    materials: ["Monel K-500 (UNS N05500)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Monel K-500 (UNS N05500)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B165 / ASTM B725" },
    ],
    standards: ["ASTM B165", "ASTM B725"],
    image: "products/pipes/seamless-monel-pipe-k-500.webp",
    metaTitle: "Seamless Monel K-500 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Monel K-500 (UNS N05500) age-hardenable pipes — 3× yield strength of Monel 400, non-magnetic. ASTM B165/B725. Marine, oil & gas, cryogenic. Prayag Steel.",
  },

  // ── Hastelloy ────────────────────────────────────────────────────────────────
  {
    id: "pip-036",
    slug: "seamless-hastelloy-pipe-c-22",
    division: "pipes",
    subcategory: "Hastelloy",
    type: "Seamless",
    name: "Hastelloy Pipe — C-22",
    shortDescription:
      "Seamless Hastelloy C-22 pipes with outstanding resistance to pitting, crevice corrosion, and oxidising acids across a wide range of aggressive environments.",
    description:
      "Seamless Hastelloy C-22 (UNS N06022) pipes are a nickel-chromium-molybdenum-tungsten alloy providing outstanding versatile corrosion resistance in both oxidising and reducing environments, including wet chlorine, hypochlorite, chlorine dioxide, and mixed acid solutions. The balanced composition achieves excellent resistance to pitting, crevice corrosion, and stress-corrosion cracking. Used in chemical processing, flue-gas scrubbing, pharmaceutical manufacturing, and waste treatment. Supplied per ASTM B622 and ASTM B619.",
    materials: ["Hastelloy C-22 (UNS N06022)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Hastelloy C-22 (UNS N06022)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B619" },
    ],
    standards: ["ASTM B622", "ASTM B619"],
    image: "products/pipes/seamless-hastelloy-pipe-c-22.webp",
    metaTitle: "Seamless Hastelloy C-22 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Hastelloy C-22 (UNS N06022) pipes — outstanding versatile corrosion resistance in oxidising and reducing environments. ASTM B622/B619. Chemical, pharma. Prayag Steel.",
  },
  {
    id: "pip-037",
    slug: "seamless-hastelloy-pipe-c-276",
    division: "pipes",
    subcategory: "Hastelloy",
    type: "Seamless",
    name: "Hastelloy Pipe — C-276",
    shortDescription:
      "Seamless Hastelloy C-276 pipes with one of the highest corrosion resistance levels in nickel alloys for aggressive chemical and reducing acid service.",
    description:
      "Seamless Hastelloy C-276 (UNS N10276) pipes are a nickel-molybdenum-chromium alloy widely regarded as one of the most corrosion-resistant alloys available, with exceptional resistance to strong reducing acids (hydrochloric, sulphuric, and phosphoric), seawater, wet chlorine gas, and chloride-induced pitting and crevice corrosion. The low carbon and silicon content minimises grain-boundary precipitation during welding. Widely used in chemical processing, oil & gas, pulp and paper, and waste treatment. Supplied per ASTM B622 and ASTM B619.",
    materials: ["Hastelloy C-276 (UNS N10276)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Hastelloy C-276 (UNS N10276)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B619" },
    ],
    standards: ["ASTM B622", "ASTM B619"],
    image: "products/pipes/seamless-hastelloy-pipe-c-276.webp",
    metaTitle: "Seamless Hastelloy C-276 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Hastelloy C-276 (UNS N10276) pipes — outstanding resistance to reducing acids, chlorine, and seawater. ASTM B622/B619. Chemical, oil & gas, waste treatment. Prayag Steel.",
  },
  {
    id: "pip-038",
    slug: "seamless-hastelloy-pipe-b-2",
    division: "pipes",
    subcategory: "Hastelloy",
    type: "Seamless",
    name: "Hastelloy Pipe — B-2",
    shortDescription:
      "Seamless Hastelloy B-2 nickel-molybdenum pipes with exceptional resistance to hydrochloric acid at all concentrations and temperatures.",
    description:
      "Seamless Hastelloy B-2 (UNS N10665) pipes are a nickel-molybdenum alloy specifically designed for resistance to reducing environments and hydrochloric acid at all concentrations and temperatures, including the boiling point. The alloy also performs well in acetic and phosphoric acids. Low iron and chromium content minimises the risk of corrosion in reducing environments. Used in chemical process equipment, acid handling, and pharmaceutical synthesis. Supplied per ASTM B622 and ASTM B619.",
    materials: ["Hastelloy B-2 (UNS N10665)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Hastelloy B-2 (UNS N10665)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B619" },
    ],
    standards: ["ASTM B622", "ASTM B619"],
    image: "products/pipes/seamless-hastelloy-pipe-b-2.webp",
    metaTitle: "Seamless Hastelloy B-2 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Hastelloy B-2 (UNS N10665) pipes — exceptional HCl resistance at all concentrations and temperatures. ASTM B622/B619. Chemical processing, acid handling. Prayag Steel.",
  },
  {
    id: "pip-039",
    slug: "seamless-hastelloy-pipe-b-3",
    division: "pipes",
    subcategory: "Hastelloy",
    type: "Seamless",
    name: "Hastelloy Pipe — B-3",
    shortDescription:
      "Seamless Hastelloy B-3 pipes with improved thermal stability and enhanced resistance to hydrochloric and sulphuric acids over B-2.",
    description:
      "Seamless Hastelloy B-3 (UNS N10675) pipes are an improved successor to Hastelloy B-2, with enhanced thermal stability that significantly reduces the risk of stress-corrosion cracking in the heat-affected zone of welds. The alloy provides similar outstanding resistance to hydrochloric acid at all concentrations and temperatures while also resisting sulphuric, acetic, and phosphoric acids. Used in chemical reactors, distillation columns, and process piping in reducing acid service. Supplied per ASTM B622 and ASTM B619.",
    materials: ["Hastelloy B-3 (UNS N10675)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Hastelloy B-3 (UNS N10675)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B619" },
    ],
    standards: ["ASTM B622", "ASTM B619"],
    image: "products/pipes/seamless-hastelloy-pipe-b-3.webp",
    metaTitle: "Seamless Hastelloy B-3 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Hastelloy B-3 (UNS N10675) pipes — improved thermal stability over B-2, outstanding HCl and H2SO4 resistance. ASTM B622/B619. Chemical reactors. Prayag Steel.",
  },
  {
    id: "pip-040",
    slug: "seamless-hastelloy-pipe-x",
    division: "pipes",
    subcategory: "Hastelloy",
    type: "Seamless",
    name: "Hastelloy Pipe — X",
    shortDescription:
      "Seamless Hastelloy X nickel-chromium-iron-molybdenum pipes with excellent high-temperature strength and oxidation resistance for gas turbine applications.",
    description:
      "Seamless Hastelloy X (UNS N06002) pipes are a nickel-chromium-iron-molybdenum alloy with an exceptional combination of high-temperature strength, oxidation resistance to 1200°C, and resistance to stress-corrosion cracking. The alloy is designed for gas turbine combustion chambers, ducting, and transition sections, as well as industrial furnace components and petrochemical processing equipment operating at elevated temperatures. Supplied per ASTM B622 and ASTM B619.",
    materials: ["Hastelloy X (UNS N06002)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Hastelloy X (UNS N06002)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B622 / ASTM B619" },
    ],
    standards: ["ASTM B622", "ASTM B619"],
    image: "products/pipes/seamless-hastelloy-pipe-x.webp",
    metaTitle: "Seamless Hastelloy X Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Hastelloy X (UNS N06002) pipes — high-temperature strength and oxidation resistance to 1200°C. ASTM B622/B619. Gas turbines, industrial furnaces. Prayag Steel.",
  },

  // ── Nickel ───────────────────────────────────────────────────────────────────
  {
    id: "pip-041",
    slug: "seamless-nickel-pipe-200",
    division: "pipes",
    subcategory: "Nickel",
    type: "Seamless",
    name: "Nickel Pipe — Nickel 200",
    shortDescription:
      "Seamless Nickel 200 commercially pure nickel pipes with excellent resistance to caustic alkalis and reducing environments.",
    description:
      "Seamless Nickel 200 (UNS N02200) pipes are commercially pure wrought nickel providing excellent corrosion resistance in caustic alkalis (including molten caustic soda and potash), reducing environments, and certain acids. The alloy has good mechanical properties and is highly resistant to corrosion by hot concentrated sodium and potassium hydroxide. Used in the manufacture of caustic soda, sodium hydroxide, food processing, and electronic components. Supplied per ASTM B161 and ASTM B163.",
    materials: ["Nickel 200 (UNS N02200)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Nickel 200 (UNS N02200)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B161 / ASTM B163" },
    ],
    standards: ["ASTM B161", "ASTM B163"],
    image: "products/pipes/seamless-nickel-pipe-200.webp",
    metaTitle: "Seamless Nickel 200 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Nickel 200 (UNS N02200) commercially pure nickel pipes — excellent caustic alkali and reducing environment resistance. ASTM B161/B163. Prayag Steel India.",
  },
  {
    id: "pip-042",
    slug: "seamless-nickel-pipe-201",
    division: "pipes",
    subcategory: "Nickel",
    type: "Seamless",
    name: "Nickel Pipe — Nickel 201",
    shortDescription:
      "Seamless Nickel 201 low-carbon pure nickel pipes designed for elevated-temperature service where Nickel 200 would suffer from graphitisation.",
    description:
      "Seamless Nickel 201 (UNS N02201) pipes are a low-carbon variant of Nickel 200 specifically designed for service above 315°C, where the higher-carbon Nickel 200 would suffer from grain-boundary graphitisation (embrittlement). The alloy retains the same excellent corrosion resistance to caustic alkalis and reducing environments as Nickel 200 while remaining suitable for high-temperature applications including caustic evaporators, food processing at elevated temperatures, and electronics. Supplied per ASTM B161 and ASTM B163.",
    materials: ["Nickel 201 (UNS N02201)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Nickel 201 (UNS N02201)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B161 / ASTM B163" },
    ],
    standards: ["ASTM B161", "ASTM B163"],
    image: "products/pipes/seamless-nickel-pipe-201.webp",
    metaTitle: "Seamless Nickel 201 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Nickel 201 (UNS N02201) low-carbon nickel pipes for elevated-temperature service — avoids graphitisation above 315°C. ASTM B161/B163. Prayag Steel India.",
  },

  // ── Titanium ─────────────────────────────────────────────────────────────────
  {
    id: "pip-043",
    slug: "seamless-titanium-pipe-grade-1",
    division: "pipes",
    subcategory: "Titanium",
    type: "Seamless",
    name: "Titanium Pipe — Grade 1",
    shortDescription:
      "Seamless Titanium Grade 1 commercially pure pipes with maximum ductility and excellent corrosion resistance in oxidising and mildly reducing environments.",
    description:
      "Seamless Titanium Grade 1 (UNS R50250) pipes are the purest commercially available titanium grade, offering the highest ductility, excellent cold formability, and outstanding corrosion resistance to oxidising and mildly reducing environments including seawater, nitric acid, and most organic acids. Used in chemical processing, desalination, marine equipment, and medical implants. Supplied per ASTM B861 and ASTM B338.",
    materials: ["Titanium Grade 1 (UNS R50250)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Titanium Grade 1 (UNS R50250)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B861 / ASTM B338" },
    ],
    standards: ["ASTM B861", "ASTM B338"],
    image: "products/pipes/seamless-titanium-pipe-grade-1.webp",
    metaTitle: "Seamless Titanium Grade 1 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Titanium Grade 1 (UNS R50250) commercially pure pipes — maximum ductility, excellent corrosion resistance. ASTM B861/B338. Chemical, desalination, marine. Prayag Steel.",
  },
  {
    id: "pip-044",
    slug: "seamless-titanium-pipe-grade-2",
    division: "pipes",
    subcategory: "Titanium",
    type: "Seamless",
    name: "Titanium Pipe — Grade 2",
    shortDescription:
      "Seamless Titanium Grade 2 standard commercially pure pipes balancing strength and ductility with excellent corrosion resistance for industrial applications.",
    description:
      "Seamless Titanium Grade 2 (UNS R50400) pipes are the most widely used commercially pure titanium grade, offering a balanced combination of moderate strength, excellent ductility, and outstanding corrosion resistance in oxidising and mildly reducing environments. The grade is widely specified for heat exchangers, pressure vessels, marine hardware, chemical processing, and aerospace applications. Supplied per ASTM B861 and ASTM B338.",
    materials: ["Titanium Grade 2 (UNS R50400)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Titanium Grade 2 (UNS R50400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B861 / ASTM B338" },
    ],
    standards: ["ASTM B861", "ASTM B338"],
    image: "products/pipes/seamless-titanium-pipe-grade-2.webp",
    metaTitle: "Seamless Titanium Grade 2 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Titanium Grade 2 (UNS R50400) standard CP titanium pipes — moderate strength, outstanding corrosion resistance. ASTM B861/B338. Chemical, marine, aerospace. Prayag Steel.",
  },
  {
    id: "pip-045",
    slug: "seamless-titanium-pipe-grade-5",
    division: "pipes",
    subcategory: "Titanium",
    type: "Seamless",
    name: "Titanium Pipe — Grade 5",
    shortDescription:
      "Seamless Titanium Grade 5 (Ti-6Al-4V) high-strength aerospace pipes with an excellent strength-to-weight ratio and good corrosion resistance.",
    description:
      "Seamless Titanium Grade 5 (UNS R56400, Ti-6Al-4V) pipes are the most widely used titanium alloy, combining high tensile strength (approximately 950 MPa), excellent fatigue resistance, and good corrosion resistance with a very high strength-to-weight ratio. The alpha-beta alloy is heat-treatable to further increase strength. Used extensively in aerospace structures, marine applications, offshore oil & gas riser systems, and orthopaedic implants. Supplied per ASTM B861 and ASTM B338.",
    materials: ["Titanium Grade 5 / Ti-6Al-4V (UNS R56400)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Titanium Grade 5 / Ti-6Al-4V (UNS R56400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B861 / ASTM B338" },
    ],
    standards: ["ASTM B861", "ASTM B338"],
    image: "products/pipes/seamless-titanium-pipe-grade-5.webp",
    metaTitle: "Seamless Titanium Grade 5 (Ti-6Al-4V) Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Titanium Grade 5 Ti-6Al-4V (UNS R56400) pipes — high strength, excellent strength-to-weight ratio. ASTM B861/B338. Aerospace, offshore, medical. Prayag Steel.",
  },
  {
    id: "pip-046",
    slug: "seamless-titanium-pipe-grade-7",
    division: "pipes",
    subcategory: "Titanium",
    type: "Seamless",
    name: "Titanium Pipe — Grade 7",
    shortDescription:
      "Seamless Titanium Grade 7 palladium-alloyed pipes with the best corrosion resistance of all titanium grades in reducing acid environments.",
    description:
      "Seamless Titanium Grade 7 (UNS R52400) pipes are palladium-alloyed commercially pure titanium providing the best corrosion resistance in reducing and mildly oxidising acids among all commercially pure titanium grades. The palladium addition significantly extends the passive range and reduces the critical anodic current in dilute sulphuric, hydrochloric, and phosphoric acid environments. Used in chemical processing equipment, bleaching circuits, and waste treatment. Supplied per ASTM B861 and ASTM B338.",
    materials: ["Titanium Grade 7 (UNS R52400)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Titanium Grade 7 (UNS R52400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B861 / ASTM B338" },
    ],
    standards: ["ASTM B861", "ASTM B338"],
    image: "products/pipes/seamless-titanium-pipe-grade-7.webp",
    metaTitle: "Seamless Titanium Grade 7 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Titanium Grade 7 (UNS R52400) palladium-alloyed pipes — superior corrosion resistance in reducing acids. ASTM B861/B338. Chemical processing. Prayag Steel India.",
  },
  {
    id: "pip-047",
    slug: "seamless-titanium-pipe-grade-12",
    division: "pipes",
    subcategory: "Titanium",
    type: "Seamless",
    name: "Titanium Pipe — Grade 12",
    shortDescription:
      "Seamless Titanium Grade 12 nickel-molybdenum alloyed pipes with enhanced corrosion resistance and elevated-temperature strength over commercially pure grades.",
    description:
      "Seamless Titanium Grade 12 (UNS R53400) pipes contain nickel and molybdenum additions to commercially pure titanium, improving resistance to reducing acids and enhancing elevated-temperature strength. The grade performs better than Grade 2 in hot reducing acid service and is less expensive than palladium-alloyed grades (Grade 7/11). Used in chemical processing, particularly in service involving high-temperature reducing acids or reducing environments. Supplied per ASTM B861 and ASTM B338.",
    materials: ["Titanium Grade 12 (UNS R53400)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Titanium Grade 12 (UNS R53400)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B861 / ASTM B338" },
    ],
    standards: ["ASTM B861", "ASTM B338"],
    image: "products/pipes/seamless-titanium-pipe-grade-12.webp",
    metaTitle: "Seamless Titanium Grade 12 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Titanium Grade 12 (UNS R53400) Ni-Mo alloyed pipes — enhanced reducing acid resistance and elevated-temperature strength. ASTM B861/B338. Prayag Steel India.",
  },

  // ── Alloy 20 ─────────────────────────────────────────────────────────────────
  {
    id: "pip-048",
    slug: "seamless-alloy-20-pipe-uns-n08020",
    division: "pipes",
    subcategory: "Alloy 20",
    type: "Seamless",
    name: "Alloy 20 Pipe — Alloy 20 (UNS N08020)",
    shortDescription:
      "Seamless Alloy 20 nickel-iron-chromium pipes specifically engineered for maximum resistance to hot sulphuric acid and associated corrosive environments.",
    description:
      "Seamless Alloy 20 (UNS N08020, Carpenter 20) pipes are a nickel-iron-chromium alloy with copper and molybdenum additions, specifically engineered for maximum resistance to hot sulphuric acid at all concentrations, phosphoric acid, and nitric acid, as well as chloride-induced stress-corrosion cracking. Niobium stabilisation prevents sensitisation during welding. Used extensively in sulphuric acid pickling, chemical processing, pharmaceutical manufacturing, and food processing equipment. Supplied per ASTM B729 and ASTM B464.",
    materials: ["Alloy 20 (UNS N08020)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Alloy 20 (UNS N08020)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B729 / ASTM B464" },
    ],
    standards: ["ASTM B729", "ASTM B464"],
    image: "products/pipes/seamless-alloy-20-pipe-uns-n08020.webp",
    metaTitle: "Seamless Alloy 20 (UNS N08020) Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Alloy 20 (UNS N08020) pipes — maximum resistance to hot sulphuric acid and chloride environments. ASTM B729/B464. Chemical, pharma, acid pickling. Prayag Steel.",
  },

  // ── Copper Nickel ─────────────────────────────────────────────────────────────
  {
    id: "pip-049",
    slug: "seamless-copper-nickel-pipe-90-10",
    division: "pipes",
    subcategory: "Copper Nickel",
    type: "Seamless",
    name: "Copper Nickel Pipe — 90/10",
    shortDescription:
      "Seamless 90/10 copper-nickel pipes with excellent resistance to seawater corrosion and biofouling resistance for marine and desalination applications.",
    description:
      "Seamless 90/10 copper-nickel (Cu-10Ni, UNS C70600) pipes contain 90% copper and 10% nickel with iron and manganese additions, providing excellent resistance to seawater corrosion, biofouling, and erosion-corrosion in high-velocity seawater service. The alloy resists sulphide attack and has good thermal conductivity. Widely used in marine piping, offshore platforms, naval vessels, desalination condensers, and heat exchangers. Supplied per ASTM B466, ASTM B111, and ASTM B467.",
    materials: ["Cu-Ni 90/10 (UNS C70600)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Cu-Ni 90/10 (UNS C70600)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B466 / ASTM B111 / ASTM B467" },
    ],
    standards: ["ASTM B466", "ASTM B111", "ASTM B467"],
    image: "products/pipes/seamless-copper-nickel-pipe-90-10.webp",
    metaTitle: "Seamless 90/10 Copper Nickel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless 90/10 copper-nickel (UNS C70600) pipes — excellent seawater corrosion and biofouling resistance. ASTM B466/B111. Marine, desalination, naval. Prayag Steel.",
  },
  {
    id: "pip-050",
    slug: "seamless-copper-nickel-pipe-70-30",
    division: "pipes",
    subcategory: "Copper Nickel",
    type: "Seamless",
    name: "Copper Nickel Pipe — 70/30",
    shortDescription:
      "Seamless 70/30 copper-nickel pipes with higher strength and superior corrosion resistance compared to 90/10 for more demanding marine and chemical service.",
    description:
      "Seamless 70/30 copper-nickel (Cu-30Ni, UNS C71500) pipes contain 70% copper and 30% nickel, providing higher strength, superior corrosion resistance in aggressive seawater and saline environments, and better resistance to sulphide attack and biofouling compared to the 90/10 alloy. Preferred for condensers, distillation columns, desalination plant tubing, and high-velocity marine pipework where maximum resistance is required. Supplied per ASTM B466, ASTM B111, and ASTM B467.",
    materials: ["Cu-Ni 70/30 (UNS C71500)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Cu-Ni 70/30 (UNS C71500)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B466 / ASTM B111 / ASTM B467" },
    ],
    standards: ["ASTM B466", "ASTM B111", "ASTM B467"],
    image: "products/pipes/seamless-copper-nickel-pipe-70-30.webp",
    metaTitle: "Seamless 70/30 Copper Nickel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless 70/30 copper-nickel (UNS C71500) pipes — higher strength and superior seawater resistance vs 90/10. ASTM B466/B111. Desalination, marine, condensers. Prayag Steel.",
  },

  // ── Zirconium ─────────────────────────────────────────────────────────────────
  {
    id: "pip-051",
    slug: "seamless-zirconium-pipe-grade-702",
    division: "pipes",
    subcategory: "Zirconium",
    type: "Seamless",
    name: "Zirconium Pipe — Grade 702",
    shortDescription:
      "Seamless Zirconium Grade 702 commercially pure pipes with exceptional corrosion resistance in hydrochloric, sulphuric, and nitric acids for the chemical process industry.",
    description:
      "Seamless Zirconium Grade 702 (UNS R60702) pipes are commercially pure zirconium with exceptional resistance to a wide variety of corrosive media including hydrochloric acid at all concentrations, sulphuric acid up to 70%, nitric acid, and many organic acids. The grade forms a stable, adherent oxide layer that provides excellent passivity. Used in chemical reactor vessels, distillation columns, heat exchangers for corrosive acid service, and nuclear fuel cladding. Supplied per ASTM B523.",
    materials: ["Zirconium Grade 702 (UNS R60702)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Zirconium Grade 702 (UNS R60702)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B523" },
    ],
    standards: ["ASTM B523"],
    image: "products/pipes/seamless-zirconium-pipe-grade-702.webp",
    metaTitle: "Seamless Zirconium Grade 702 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Zirconium Grade 702 (UNS R60702) pipes — exceptional HCl, H2SO4, and HNO3 resistance. ASTM B523. Chemical processing, nuclear, distillation. Prayag Steel India.",
  },
  {
    id: "pip-052",
    slug: "seamless-zirconium-pipe-grade-705",
    division: "pipes",
    subcategory: "Zirconium",
    type: "Seamless",
    name: "Zirconium Pipe — Grade 705",
    shortDescription:
      "Seamless Zirconium Grade 705 niobium-alloyed pipes with higher strength and similar outstanding corrosion resistance to Grade 702.",
    description:
      "Seamless Zirconium Grade 705 (UNS R60705) pipes contain approximately 2–3% niobium, providing approximately 50% higher yield and tensile strength compared to Grade 702 while maintaining the same outstanding corrosion resistance to hydrochloric acid, sulphuric acid, and most other corrosive media where zirconium is specified. The higher strength permits the use of reduced wall thicknesses in structural and pressure applications. Supplied per ASTM B523.",
    materials: ["Zirconium Grade 705 (UNS R60705)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Zirconium Grade 705 (UNS R60705)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B523" },
    ],
    standards: ["ASTM B523"],
    image: "products/pipes/seamless-zirconium-pipe-grade-705.webp",
    metaTitle: "Seamless Zirconium Grade 705 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Zirconium Grade 705 (UNS R60705) Nb-alloyed pipes — 50% higher strength than Grade 702 with equal corrosion resistance. ASTM B523. Prayag Steel India.",
  },

  // ── Tantalum ─────────────────────────────────────────────────────────────────
  {
    id: "pip-053",
    slug: "seamless-tantalum-pipe-r05200",
    division: "pipes",
    subcategory: "Tantalum",
    type: "Seamless",
    name: "Tantalum Pipe — Commercially Pure (R05200)",
    shortDescription:
      "Seamless commercially pure tantalum pipes with extraordinary corrosion resistance superior to glass, making them suitable for the most aggressive acid environments.",
    description:
      "Seamless commercially pure tantalum pipes (UNS R05200) provide extraordinary corrosion resistance in virtually all acids including hydrochloric, sulphuric, nitric, and phosphoric acid at all concentrations and temperatures up to 150°C — performance superior to glass in many environments. Tantalum forms an extremely stable, self-repairing oxide film. Used in chemical reactors, heat exchangers for concentrated acid service, pharmaceutical manufacturing, and defence electronics. Supplied per ASTM B521.",
    materials: ["Commercially Pure Tantalum (UNS R05200)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Commercially Pure Tantalum (UNS R05200)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B521" },
    ],
    standards: ["ASTM B521"],
    image: "products/pipes/seamless-tantalum-pipe-r05200.webp",
    metaTitle: "Seamless Commercially Pure Tantalum Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless commercially pure tantalum (UNS R05200) pipes — extraordinary acid corrosion resistance superior to glass. ASTM B521. Chemical reactors, pharma. Prayag Steel.",
  },
  {
    id: "pip-054",
    slug: "seamless-tantalum-pipe-r05252",
    division: "pipes",
    subcategory: "Tantalum",
    type: "Seamless",
    name: "Tantalum Pipe — Ta-2.5W (R05252)",
    shortDescription:
      "Seamless Ta-2.5W tantalum-tungsten alloy pipes with significantly higher strength than commercially pure tantalum while retaining outstanding acid corrosion resistance.",
    description:
      "Seamless Ta-2.5W tantalum-tungsten alloy pipes (UNS R05252) contain 2.5% tungsten as a solid-solution strengthening addition, providing approximately 50% higher tensile and yield strength compared to commercially pure tantalum while retaining the same extraordinary corrosion resistance to virtually all acids at all concentrations and temperatures. Used in high-pressure chemical reactors, acid piping systems, and structural components requiring both extreme corrosion resistance and higher mechanical strength. Supplied per ASTM B521.",
    materials: ["Ta-2.5W Tantalum-Tungsten Alloy (UNS R05252)"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm (¼\" – 6\")" },
      { label: "Wall Thickness", value: "0.5mm – 10mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Grade", value: "Ta-2.5W Tantalum-Tungsten Alloy (UNS R05252)" },
      { label: "Finish", value: "Bright Annealed / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM B521" },
    ],
    standards: ["ASTM B521"],
    image: "products/pipes/seamless-tantalum-pipe-r05252.webp",
    metaTitle: "Seamless Ta-2.5W Tantalum-Tungsten Alloy Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Ta-2.5W (UNS R05252) tantalum-tungsten pipes — 50% higher strength than CP tantalum with equal acid corrosion resistance. ASTM B521. Prayag Steel India.",
  },
];
