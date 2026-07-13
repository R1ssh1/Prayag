// ── Quality Policy Data ────────────────────────────────────────────────────────
// Source: Prayag Steel & Engineering Co. — Product Catalogue (PDF p.2 + product sections)

export const qualityPolicy = {
  eyebrow: "ISO 9001:2015 Certified",
  tagline: "We don't follow industry standards.\nWe set them.",
  // Three verbatim statements from PDF page 2
  statements: [
    {
      id: "knowledge",
      number: "01",
      heading: "Continuous Improvement",
      body: "We are committed to continuously upgrade our knowledge and skills to improve the efficiency of our organisation and strive for outstanding quality of our products.",
    },
    {
      id: "customer",
      number: "02",
      heading: "Customer Satisfaction",
      body: "We assure quality of our products by satisfying the customer's requirement and by perfecting our systems and procedures through involvement of our employees.",
    },
    {
      id: "promise",
      number: "03",
      heading: "Our Promise",
      body: "We promise to deliver: Quality service at the most reasonable price, at the right time, at the right place and with right documents.",
    },
  ],
  // Verbatim from fittings section
  philosophy:
    "At Prayag Steel & Engineering Company, we believe quality is engineered — not inspected. Every fitting that leaves our facility is a reflection of our promise: Precision. Strength. Reliability. Because when it comes to performance, Prayag delivers beyond expectations.",
  qcNote:
    "All testing is carried out under the supervision of qualified QA/QC personnel as per ISO 9001:2015 and PED requirements.",
};

// Per-division testing procedures (verbatim from PDF product sections)
export const divisionTesting = [
  {
    id: "flanges",
    division: "Flanges",
    icon: "🔩",
    intro:
      "All flanges undergo comprehensive inspection and testing procedures to ensure conformance with dimensional and metallurgical requirements. Testing is performed in accordance with ASTM, ASME, and PED standards.",
    tests: [
      "Visual & Dimensional Inspection",
      "Hydrostatic Testing",
      "Dye Penetrant Examination",
      "Magnetic Particle Examination",
      "Hardness Testing",
      "PMI (Positive Material Identification)",
    ],
    standards: "ASTM / ASME / DIN / EN / BS / MSS-SP / ISO",
  },
  {
    id: "fittings",
    division: "Fittings",
    icon: "⚙️",
    intro:
      "Every fitting undergoes multi-stage inspection to ensure conformance with international codes and client specifications. Testing is carried out by qualified QA/QC personnel as per ISO 9001:2015 and PED requirements.",
    tests: [
      "Visual & Dimensional Inspection",
      "Hydrostatic & Pneumatic Testing",
      "Dye Penetrant & Magnetic Particle Examination",
      "Mechanical Testing (Tensile, Hardness, Flattening)",
      "Micro & Macro Examination",
      "Intergranular Corrosion (IGC) Test",
      "PMI (Positive Material Identification)",
    ],
    standards: "ASTM / ASME / MSS-SP / DIN / EN / BS / ISO",
  },
  {
    id: "pipes",
    division: "Pipes",
    icon: "🔧",
    intro:
      "Each pipe undergoes stringent dimensional and metallurgical checks to ensure leak-proof integrity, uniform wall thickness, and high mechanical strength.",
    tests: [
      "Hydrostatic Test (100% of pipes)",
      "Eddy Current Test",
      "Ultrasonic / Pneumatic Leak Test",
      "PMI (Positive Material Identification)",
      "Intergranular Corrosion (IGC) Test",
      "Dimensional & Visual Inspection (per MSS SP-55)",
    ],
    standards: "ASTM / ASME / DIN / EN / NACE / ISO",
  },
  {
    id: "tubes",
    division: "Tubes",
    icon: "🏗️",
    intro:
      "Quality is integrated at every stage of production. Our in-house testing facilities comply with international standards and customer-specific requirements.",
    tests: [
      "Hydrostatic & Pneumatic Testing",
      "Eddy Current Testing",
      "Ultrasonic Examination",
      "Visual & Dimensional Inspection",
      "Mechanical Testing (Tensile, Hardness, Flattening, Flaring)",
      "Intergranular Corrosion (IGC) Test",
      "Micro & Macro Examination",
    ],
    standards: "ASTM / ASME / DIN / EN / NACE / ISO",
  },
];

export const qualityStandards = [
  { code: "ASTM", full: "American Society for Testing and Materials" },
  { code: "ASME", full: "American Society of Mechanical Engineers" },
  { code: "ISO", full: "International Organization for Standardization" },
  { code: "DIN", full: "Deutsches Institut für Normung" },
  { code: "EN", full: "European Norm" },
  { code: "BS", full: "British Standards" },
  { code: "MSS-SP", full: "Manufacturers Standardization Society" },
  { code: "JIS", full: "Japanese Industrial Standards" },
  { code: "NACE", full: "National Association of Corrosion Engineers" },
  { code: "PED", full: "Pressure Equipment Directive" },
];
