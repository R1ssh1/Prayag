import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Fittings Division — Sample / Placeholder Entries
// ─────────────────────────────────────────────────────────────────────────────

export const fittings: Product[] = [
  {
    id: "fit-001",
    slug: "seamless-butt-weld-elbow-90deg",
    division: "fittings",
    name: "Seamless Butt Weld Elbow 90°",
    shortDescription:
      "Short and long radius 90° butt-weld elbows in seamless construction for high-pressure piping.",
    description:
      "Seamless butt-weld 90° elbows are used to change the direction of flow in piping systems. Available in short radius (SR: 1D) and long radius (LR: 1.5D) configurations. Manufactured to ASME B16.9 from hot-induction bending or seamless tube stock in a wide range of materials.",
    materials: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 347",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625",
      "Hastelloy C276",
    ],
    sizeRange: '1/2" – 16" NB',
    pressureRating: "Schedule 10 – XXS",
    standards: ["ASME B16.9", "ASTM A403", "ASTM A815"],
    specs: [
      { label: "Size Range", value: '1/2" – 16" NB' },
      { label: "Wall Thickness", value: "Sch 10 / 40 / 80 / 160 / XXS" },
      { label: "Radius", value: "LR (1.5D) / SR (1D)" },
      { label: "Type", value: "Seamless / Welded" },
      { label: "Standard", value: "ASME B16.9" },
    ],
    image: "products/fittings/seamless-butt-weld-elbow-90deg.webp",
    metaTitle: "Seamless Butt Weld Elbow 90° | Prayag Steel & Engineering",
    metaDescription:
      "LR & SR seamless butt-weld 90° elbows in SS, Duplex, Inconel, Hastelloy. 1/2\"–16\" NB, ASME B16.9. High-pressure piping. Prayag Steel & Engineering Co.",
  },
  {
    id: "fit-002",
    slug: "seamless-butt-weld-equal-tee",
    division: "fittings",
    name: "Seamless Butt Weld Equal Tee",
    shortDescription:
      "Equal tees for splitting or combining flow in seamless piping systems. Available in all major exotic alloys.",
    description:
      "Seamless butt-weld equal tees branch off at 90° from the run pipe with all three openings of the same size. Manufactured from seamless tube or forged and machined billets to ASME B16.9. Suited for high-pressure, corrosion-critical services such as chemical process, pharmaceutical, and nuclear piping.",
    materials: [
      "SS 304/304L",
      "SS 316/316L",
      "Duplex 2205",
      "Super Duplex 2507",
      "Monel 400",
      "Inconel 600",
    ],
    sizeRange: '1/2" – 16" NB',
    pressureRating: "Schedule 10 – XXS",
    standards: ["ASME B16.9", "ASTM A403"],
    specs: [
      { label: "Size Range", value: '1/2" – 16" NB' },
      { label: "Type", value: "Equal / Reducing" },
      { label: "End", value: "Butt Weld (BW)" },
      { label: "Standard", value: "ASME B16.9" },
    ],
    image: "products/fittings/seamless-butt-weld-equal-tee.webp",
    metaTitle: "Seamless Butt Weld Equal Tee | Prayag Steel & Engineering",
    metaDescription:
      "Seamless BW equal tees in SS, Duplex, Monel, Inconel. 1/2\"–16\" NB, Sch 10–XXS. ASME B16.9 compliant. Chemical, pharmaceutical & nuclear piping. Prayag Steel.",
  },
  {
    id: "fit-003",
    slug: "forged-socket-weld-elbow-90deg",
    division: "fittings",
    name: "Forged Socket Weld Elbow 90°",
    shortDescription:
      "Forged SW 90° elbows in 3000# and 6000# ratings. Compact design for small-bore high-pressure piping.",
    description:
      "Forged socket weld 90° elbows connect small-bore pipes by inserting the pipe into a socket recess and fillet-welding around the outside. Available in 3000# and 6000# pressure ratings per ASME B16.11. Compact, leak-resistant, and suited for instrumentation, hydraulic, and process lines.",
    materials: ["SS 304/304L", "SS 316/316L", "Carbon Steel A105", "Alloy Steel F11"],
    sizeRange: '1/8" – 3" NB',
    pressureRating: "3000# / 6000#",
    standards: ["ASME B16.11", "ASTM A182", "ASTM A105"],
    specs: [
      { label: "Size Range", value: '1/8" – 3" NB' },
      { label: "Pressure Rating", value: "3000# / 6000#" },
      { label: "End", value: "Socket Weld (SW)" },
      { label: "Standard", value: "ASME B16.11" },
      { label: "Manufacturing", value: "Forged" },
    ],
    image: "products/fittings/forged-socket-weld-elbow-90deg.webp",
    metaTitle: "Forged Socket Weld Elbow 90° | Prayag Steel & Engineering",
    metaDescription:
      "Forged SW 90° elbows in SS, CS, Alloy Steel. 1/8\"–3\" NB, 3000# & 6000#. ASME B16.11. Compact high-pressure small-bore piping. Prayag Steel & Engineering.",
  },
];
