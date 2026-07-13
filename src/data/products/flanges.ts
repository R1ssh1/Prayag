import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Flanges Division — Sample / Placeholder Entries
// Real catalog data will be typed up from handwritten notes and added here.
// Do NOT hardcode these entries in any component — the component reads from
// this array, so adding or editing products is purely a data edit here.
// ─────────────────────────────────────────────────────────────────────────────

export const flanges: Product[] = [
  {
    id: "flg-001",
    slug: "weld-neck-raised-face-wnrf",
    division: "flanges",
    name: "Weld Neck Raised Face Flange (WNRF)",
    shortDescription:
      "High-pressure WNRF flanges in SS, CS, Alloy Steel, and exotic alloys. Forged, machined, and CNC finished.",
    description:
      "Weld Neck Raised Face (WNRF) flanges are designed for high-pressure, high-temperature applications where stress concentration must be minimized. The tapered hub provides reinforcement and ensures smooth stress distribution from flange to pipe. Available in a wide range of materials and pressure classes as per ASME B16.5 and B16.47 standards.",
    materials: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel A105",
      "Alloy Steel F11/F22",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276",
      "Titanium Gr. 2",
    ],
    sizeRange: '1/2" – 36" NB',
    pressureRating: "150# – 2500#",
    standards: ["ASME B16.5", "ASME B16.47", "ASTM A182", "ASTM A105"],
    specs: [
      { label: "Size Range", value: '1/2" – 36" NB' },
      { label: "Pressure Class", value: "150# / 300# / 600# / 900# / 1500# / 2500#" },
      { label: "Facing", value: "Raised Face (RF)" },
      { label: "End", value: "Butt Weld (BW)" },
      { label: "Manufacturing", value: "Forged, Machined, CNC Finished" },
      { label: "Standards", value: "ASME B16.5, ASME B16.47" },
    ],
    image: "products/flanges/weld-neck-raised-face-wnrf.webp",
    metaTitle: "Weld Neck Raised Face Flanges (WNRF) | Prayag Steel & Engineering",
    metaDescription:
      "High-pressure WNRF flanges in SS, CS, Alloy Steel, Duplex, Inconel, Monel & Hastelloy. Size 1/2\"–36\", Class 150#–2500#. ASME B16.5 compliant. Prayag Steel.",
  },
  {
    id: "flg-002",
    slug: "blind-raised-face-blrf",
    division: "flanges",
    name: "Blind Raised Face Flange (BLRF)",
    shortDescription:
      "BLRF flanges to seal pipe ends in high-pressure systems. Available in all major grades and pressure classes.",
    description:
      "Blind Raised Face (BLRF) flanges are solid discs used to seal pipe ends in pipeline systems requiring future access or maintenance. They must withstand full pipeline pressure and are available in all pressure classes from 150# to 2500# per ASME B16.5.",
    materials: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel A105",
      "Alloy Steel F11/F22",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625",
    ],
    sizeRange: '1/2" – 36" NB',
    pressureRating: "150# – 2500#",
    standards: ["ASME B16.5", "ASME B16.47", "ASTM A182"],
    specs: [
      { label: "Size Range", value: '1/2" – 36" NB' },
      { label: "Pressure Class", value: "150# / 300# / 600# / 900# / 1500# / 2500#" },
      { label: "Facing", value: "Raised Face (RF)" },
      { label: "Type", value: "Blind / Full Face Disc" },
      { label: "Manufacturing", value: "Forged, Machined" },
    ],
    image: "products/flanges/blind-raised-face-blrf.webp",
    metaTitle: "Blind Raised Face Flanges (BLRF) | Prayag Steel & Engineering",
    metaDescription:
      "BLRF flanges for sealing pipe ends in high-pressure systems. SS, CS, Duplex, Inconel. Size 1/2\"–36\", Class 150#–2500#. ASME B16.5. Prayag Steel India.",
  },
  {
    id: "flg-003",
    slug: "slip-on-raised-face-sorf",
    division: "flanges",
    name: "Slip-On Raised Face Flange (SORF)",
    shortDescription:
      "Easy-to-align SORF flanges for moderate-pressure service. Slips over pipe OD and double-welded in place.",
    description:
      "Slip-On Raised Face (SORF) flanges slip over the pipe OD and are welded both inside and outside to prevent leakage and provide sufficient strength. Preferred for moderate-pressure applications where precise alignment is critical during assembly.",
    materials: [
      "SS 304/304L",
      "SS 316/316L",
      "Carbon Steel A105",
      "Alloy Steel F11/F22",
    ],
    sizeRange: '1/2" – 24" NB',
    pressureRating: "150# – 900#",
    standards: ["ASME B16.5", "ASTM A182", "ASTM A105"],
    specs: [
      { label: "Size Range", value: '1/2" – 24" NB' },
      { label: "Pressure Class", value: "150# / 300# / 600# / 900#" },
      { label: "Facing", value: "Raised Face (RF)" },
      { label: "End", value: "Slip Over Pipe OD, Double Fillet Welded" },
    ],
    image: "products/flanges/slip-on-raised-face-sorf.webp",
    metaTitle: "Slip-On Raised Face Flanges (SORF) | Prayag Steel & Engineering",
    metaDescription:
      "Slip-On RF flanges in SS, CS, Alloy Steel. Size 1/2\"–24\", Class 150#–900#. ASME B16.5 compliant. Easy alignment for moderate-pressure service. Prayag Steel.",
  },
];
