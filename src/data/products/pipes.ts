import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Pipes Division — Sample / Placeholder Entries
// ─────────────────────────────────────────────────────────────────────────────

export const pipes: Product[] = [
  {
    id: "pip-001",
    slug: "seamless-stainless-steel-pipe-ss316l",
    division: "pipes",
    name: "Seamless Stainless Steel Pipe — SS 316L",
    shortDescription:
      "Seamless SS 316L pipes with superior corrosion resistance. Bright annealed, pickled & passivated finish available.",
    description:
      "Seamless stainless steel pipes in Grade SS 316L (low-carbon) offer excellent corrosion resistance in chloride-bearing environments and elevated-temperature service. Manufactured without a weld seam, they are preferred for critical applications in chemical processing, pharmaceuticals, and nuclear industries. Available in bright annealed (BA), pickled & passivated (P&P), and polished finishes.",
    materials: ["SS 316L"],
    sizeRange: "6mm – 168mm OD",
    pressureRating: "Sch 5S – Sch 80S (ASME B36.19M)",
    standards: ["ASTM A312", "ASTM A213", "ASME B36.19M", "EN 10216-5"],
    specs: [
      { label: "OD Range", value: "6mm – 168mm" },
      { label: "Wall Thickness", value: "0.5mm – 12mm" },
      { label: "Length", value: "Up to 12 meters" },
      { label: "Grade", value: "SS 316L (UNS S31603)" },
      { label: "Finish", value: "BA / Pickled & Passivated / Polished / Mirror" },
      { label: "Standard", value: "ASTM A312 / A213" },
    ],
    image: "products/pipes/seamless-stainless-steel-pipe-ss316l.webp",
    metaTitle: "Seamless SS 316L Stainless Steel Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless SS 316L stainless steel pipes, 6mm–168mm OD. BA, P&P, polished & mirror finish. ASTM A312/A213 compliant. Chemical, pharma, nuclear grade. Prayag Steel.",
  },
  {
    id: "pip-002",
    slug: "seamless-inconel-625-pipe",
    division: "pipes",
    name: "Seamless Inconel 625 Pipe",
    shortDescription:
      "High-strength Inconel 625 seamless pipes for extreme corrosion and temperature service.",
    description:
      "Inconel 625 (UNS N06625) seamless pipes offer exceptional strength and resistance to corrosion and oxidation in severe environments including seawater, acids, and high-temperature applications. Widely used in defence, aerospace, nuclear, and offshore oil & gas industries. Supplied with mill test certificates (MTCs) to EN 10204 3.1 / 3.2 as required.",
    materials: ["Inconel 625 (UNS N06625)"],
    sizeRange: "6mm – 114mm OD",
    pressureRating: "Sch 40 – Sch 160",
    standards: ["ASTM B444", "ASME SB444", "AMS 5581"],
    specs: [
      { label: "OD Range", value: "6mm – 114mm" },
      { label: "Grade", value: "Inconel 625 / UNS N06625" },
      { label: "Standard", value: "ASTM B444 / AMS 5581" },
      { label: "MTC", value: "EN 10204 3.1 / 3.2" },
      { label: "Applications", value: "Defence, Nuclear, Aerospace, Offshore" },
    ],
    image: "products/pipes/seamless-inconel-625-pipe.webp",
    metaTitle: "Seamless Inconel 625 Pipes | Prayag Steel & Engineering",
    metaDescription:
      "Seamless Inconel 625 (UNS N06625) pipes for extreme corrosion & high-temperature service. Defence, nuclear, aerospace & offshore. ASTM B444. Prayag Steel India.",
  },
  {
    id: "pip-003",
    slug: "welded-duplex-stainless-steel-pipe-2205",
    division: "pipes",
    name: "Welded Duplex Stainless Steel Pipe — 2205",
    shortDescription:
      "Welded Duplex 2205 pipes offering 2× the strength of standard austenitic SS with superior pitting resistance.",
    description:
      "Duplex 2205 (UNS S32205) welded stainless steel pipes combine the beneficial properties of ferritic and austenitic stainless steels — roughly twice the yield strength of standard 304/316 grades with superior resistance to pitting, crevice corrosion, and stress-corrosion cracking. Preferred for chemical tankers, desalination plants, and heat exchangers.",
    materials: ["Duplex 2205 (UNS S32205)"],
    sizeRange: '1/2" – 24" NB',
    pressureRating: "Sch 10 – Sch 80",
    standards: ["ASTM A790", "ASME B36.19M"],
    specs: [
      { label: "NB Range", value: '1/2" – 24"' },
      { label: "Grade", value: "Duplex 2205 / UNS S32205" },
      { label: "Type", value: "Welded (ERW / EFW)" },
      { label: "Standard", value: "ASTM A790" },
      { label: "Yield Strength", value: "≥ 450 MPa (2× standard SS)" },
    ],
    image: "products/pipes/welded-duplex-stainless-steel-pipe-2205.webp",
    metaTitle: "Welded Duplex 2205 Stainless Steel Pipes | Prayag Steel",
    metaDescription:
      "Welded Duplex 2205 (UNS S32205) pipes, 1/2\"–24\" NB. 2× strength of standard SS, superior pitting resistance. ASTM A790. Chemical, desalination. Prayag Steel.",
  },
];
