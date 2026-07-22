// ─────────────────────────────────────────────────────────────────────────────
// Division Rich Content (Tier 1 Landing Page Data)
//
// This file provides the structured content for the rich Division landing
// pages beyond what lives in company.ts (description, highlights, tagline).
//
// Architecture:
//   DivisionContent defines the full set of optional sections.
//   DivisionPage.tsx reads from this file and renders only sections where
//   data exists — no hardcoded "coming soon" placeholders.
//
// HOW TO ADD CONTENT:
//   1. Fill in the relevant DivisionContent fields below.
//   2. DivisionPage.tsx will automatically render them on next build.
//   No component changes required unless a new section type is added.
// ─────────────────────────────────────────────────────────────────────────────

import type { MaterialFamily } from "../products/types";
import type { Division } from "../products/types";
import { FLANGES_MATERIALS } from "../products/flanges";
import { FITTINGS_MATERIALS } from "../products/fittings";

// ─────────────────────────────────────────────────────────────────────────────
// Interface Definitions
// ─────────────────────────────────────────────────────────────────────────────

export interface ManufacturingCapability {
  title: string;
  description: string;
  icon?: string; // Lucide icon name, e.g. "Settings", "Layers"
}

export interface StandardsBody {
  body: string; // e.g. "ASME", "EN", "DIN"
  standards: string[];
}

export interface TestingMethod {
  name: string;
  description?: string;
}

export interface WhyChooseUsCard {
  title: string;
  description: string;
  icon?: string;
}

export interface TechnicalSpecRow {
  label: string;
  value: string;
}

export interface TechnicalSpecSection {
  title: string;
  rows: TechnicalSpecRow[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SizeRangeItem {
  label: string;
  value: string;
  customNote?: boolean;
}

export interface DownloadItem {
  label: string;
  description?: string;
  href: string;
  fileType?: string; // "PDF", "XLSX", etc.
}

export interface DivisionHero {
  subheading?: string;
  bullets?: string[];
}

export interface IntroSection {
  heading: string;
  highlightWords?: string[];
  description: string | string[];
  imagePath: string;
}

export interface DivisionContent {
  // -- Hero augmentation (merged with company.ts divisionData) ---------------
  hero?: DivisionHero;
  // -- Intro Overview Section ------------------------------------------------
  introSection?: IntroSection;
  // -- Materials cross-reference table ---------------------------------------
  materialsTable?: MaterialFamily[];
  // -- Manufacturing capability cards ----------------------------------------
  manufacturingCapability?: ManufacturingCapability[];
  // -- Standards by body (tabbed or grouped) ---------------------------------
  standardsByBody?: StandardsBody[];
  // -- Size and pressure summary ---------------------------------------------
  sizeRange?: string | SizeRangeItem[];
  pressureClasses?: string[];
  // -- Testing and inspection ------------------------------------------------
  testingMethods?: TestingMethod[];
  thirdPartyInspections?: string[];
  // -- Why choose us ---------------------------------------------------------
  whyChooseUs?: WhyChooseUsCard[];
  // -- Industries served -----------------------------------------------------
  industriesServed?: string[];
  // -- Technical specifications accordion ------------------------------------
  technicalSpecAccordion?: TechnicalSpecSection[];
  // -- Downloads -------------------------------------------------------------
  downloads?: DownloadItem[];
  // -- FAQs ------------------------------------------------------------------
  faqs?: FaqItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Flanges Division Content
// ─────────────────────────────────────────────────────────────────────────────
export const flangesContent: DivisionContent = {
  hero: {
    subheading: "Premium Forged & Plate Flanges for Critical Industrial Applications",
    bullets: [
      "ASME, EN & Custom Standards",
      "Forged & Plate Manufactured",
      "Nuclear • Chemical • Oil & Gas • Pharma • Semiconductor",
    ],
  },

  introSection: {
    heading: "Built for the World's Most Demanding Industries",
    highlightWords: ["Demanding", "Industries"],
    description: [
      "Every flange leaving our facility is manufactured with **precision machining**, **dimensional accuracy** and **complete material traceability**.",
      "From standard ANSI flanges to highly engineered custom solutions, we deliver components designed for **leak-free performance**, **long service life** and **reliable operation** under the harshest conditions."
    ],
    imagePath: "products/division_flanges.webp"
  },

  materialsTable: FLANGES_MATERIALS,

  manufacturingCapability: [
    {
      title: "Closed Die Forging",
      description: "High integrity forged components",
      icon: "Hammer",
    },
    {
      title: "CNC Machining",
      description: "Precision machining on advanced CNC equipment",
      icon: "Settings",
    },
    {
      title: "Plate Flange Manufacturing",
      description: "Laser / Plasma Cut, CNC Finished",
      icon: "Layers",
    },
    {
      title: "Custom Manufacturing",
      description: "Drawing Based Components, OEM Manufacturing",
      icon: "PenTool",
    },
    {
      title: "Heat Treatment",
      description: "Solution Annealing, Stress Relieving, As Required",
      icon: "Flame",
    },
    {
      title: "Surface Finishing",
      description: "Machined, Pickled, Passivated, Glass Bead, Mirror Polish, Electropolished",
      icon: "Sparkles",
    }
  ],

  standardsByBody: [
    {
      body: "ASME",
      standards: ["ASME B16.5", "ASME B16.47 Series A", "ASME B16.47 Series B", "ASME B16.48", "MSS SP-44"],
    },
    {
      body: "EN",
      standards: ["EN 1092-1"],
    },
    {
      body: "DIN",
      standards: ["DIN Series"],
    },
    {
      body: "JIS",
      standards: ["JIS Series"],
    },
    {
      body: "BS",
      standards: ["British Standard"],
    },
    {
      body: "Custom Drawings",
      standards: ["Project Specific"],
    }
  ],

  sizeRange: [
    { label: "Forged Flanges", value: "½\" to 60\"" },
    { label: "Plate Flanges", value: "Up to 120\"", customNote: true }
  ],

  pressureClasses: [
    "150", "300", "400", "600", "900", "1500", "2500",
    "PN6", "PN10", "PN16", "PN25", "PN40", "PN64", "PN100", "PN160",
  ],

  testingMethods: [
    { name: "Positive Material Identification (PMI)" },
    { name: "Hydrostatic Test" },
    { name: "Pneumatic Test" },
    { name: "Dimensional Inspection" },
    { name: "Hardness Test" },
    { name: "Ferrite Test" },
    { name: "IGC Test" },
    { name: "Mechanical Testing" },
    { name: "Ultrasonic Testing" },
    { name: "Dye Penetrant Test" },
    { name: "Radiography (If Applicable)" }
  ],

  thirdPartyInspections: [
    "BV", "TUV", "Lloyd's", "DNV", "SGS", "IRS", "EIL", "PDIL", "NPCIL", "BARC", "Customer Representatives"
  ],

  whyChooseUs: [
    {
      title: "Complete Material Traceability",
      description: "Every flange is fully traceable from raw material to finished product through heat number identification and documented inspection records.",
      icon: "FileSearch"
    },
    {
      title: "Precision Manufacturing",
      description: "Advanced CNC machining ensures dimensional accuracy, superior surface finish, and perfect fit-up for reliable installation.",
      icon: "Crosshair"
    },
    {
      title: "Global Material Expertise",
      description: "We manufacture flanges in stainless steel, duplex, super duplex, titanium, nickel alloys, and other corrosion-resistant materials for demanding industrial environments.",
      icon: "Globe"
    },
    {
      title: "Quality Without Compromise",
      description: "Every product undergoes stringent inspection, testing, and quality assurance procedures to comply with international standards and customer specifications.",
      icon: "ShieldCheck"
    }
  ],

  industriesServed: [
    "Oil & Gas",
    "Petrochemical",
    "Chemical Processing",
    "Fertilizer",
    "Pharmaceutical",
    "Semiconductor",
    "LNG",
    "Hydrogen",
    "Power",
    "Nuclear",
    "Desalination",
    "Marine",
    "Food Processing",
    "Water Treatment"
  ],

  technicalSpecAccordion: [
    {
      title: "Technical Specifications",
      rows: [
        { label: "Dimensions", value: "Standard & Custom sizes" },
        { label: "Facing Types", value: "Flat Face, Raised Face, Ring Type Joint, etc." },
        { label: "Surface Finish", value: "Stock Finish, Spiral Serrated, Concentric Serrated, Smooth Finish" },
        { label: "Pressure Ratings", value: "Class 150 to 2500, PN6 to PN160" },
        { label: "Marking", value: "Logo, Standard, Size, Class, Material, Heat No." },
        { label: "Packaging", value: "Wooden cases/pallets, protected with end caps" },
        { label: "Tolerance", value: "As per relevant dimensional standard" },
        { label: "Documentation", value: "EN 10204 3.1 / 3.2, Inspection Reports, QAP" }
      ],
    }
  ],

  downloads: [
    { label: "Technical Datasheet", href: "#" },
    { label: "Material Specifications", href: "#" },
    { label: "Inspection Plan", href: "#" },
    { label: "Quality Manual", href: "#" },
    { label: "Product Catalogue", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "MTC Sample", href: "#" }
  ],

  faqs: [
    { question: "What is the difference between Weld Neck and Slip-On flanges?", answer: "Weld Neck flanges have a long tapered hub and are bored to match the inside diameter of the pipe, reducing turbulence and erosion. Slip-On flanges slide over the pipe and are welded inside and out. Weld Neck is better for severe conditions." },
    { question: "Which flange is suitable for high-pressure service?", answer: "Weld Neck, Ring Type Joint (RTJ), and Blind flanges are typically used for high-pressure and high-temperature services." },
    { question: "What pressure classes are available?", answer: "We supply flanges from Class 150# to 2500# (ASME) and PN6 to PN160 (EN/DIN)." },
    { question: "Can you manufacture custom flanges from customer drawings?", answer: "Yes, we specialize in manufacturing custom-designed flanges according to client drawings and specifications." },
    { question: "Do you provide third-party inspection?", answer: "Yes, we offer third-party inspection from major agencies like TUV, BV, DNV, Lloyd's, SGS, and others." },
    { question: "What materials are available?", answer: "We manufacture flanges in Stainless Steel, Duplex, Super Duplex, Inconel, Hastelloy, Monel, Titanium, Cu-Ni, and other exotic alloys." },
    { question: "What surface finishes can be supplied?", answer: "Finishes include Machined, Pickled, Passivated, Glass Bead, Mirror Polish, and Electropolished." },
    { question: "Do you provide NACE-compliant flanges?", answer: "Yes, we supply flanges strictly conforming to NACE MR0175 and MR0103 for sour service." },
    { question: "Can flanges be supplied with matching studs and gaskets?", answer: "Yes, we can provide full assembly kits including flanges, studs, nuts, and gaskets." },
    { question: "What documentation is provided with each shipment?", answer: "Shipments include Mill Test Certificates (MTC 3.1), dimensional reports, NDE reports, PMI, and raw material traceability." }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// Fittings Division Content
// ─────────────────────────────────────────────────────────────────────────────
export const fittingsContent: DivisionContent = {
  hero: {
    subheading: "Seamless. Welded. Fabricated.",
    bullets: [
      "22 fitting types, 1/2\" to 48\"",
      "10 material families including Duplex, Inconel & Titanium",
      "ASME B16.9, B16.28, MSS SP-43, EN 10253",
      "Custom fabrications to customer drawings",
    ],
  },

  introSection: {
    heading: "Engineered for Seamless Connectivity",
    highlightWords: ["Seamless", "Connectivity"],
    description: [
      "Our comprehensive range of fittings is engineered to ensure **secure, leak-proof connections** across complex piping systems.",
      "From standard elbows and tees to complex custom fabrications, we deliver fittings that guarantee **structural integrity** and **flow efficiency** in high-pressure and corrosive environments."
    ],
    imagePath: "products/division_fittings.webp"
  },

  materialsTable: FITTINGS_MATERIALS,

  manufacturingCapability: [
    {
      title: "Hot & Cold Forming",
      description: "Seamless and welded forming processes",
      icon: "Flame",
    },
    {
      title: "Machining & Beveling",
      description: "Precision end preparation for welding",
      icon: "Settings",
    },
    {
      title: "Custom Fabrication",
      description: "Specialized fittings to client drawings",
      icon: "PenTool",
    },
    {
      title: "Heat Treatment",
      description: "Solution Annealing, Normalizing, Quenching & Tempering",
      icon: "Thermometer",
    }
  ],

  standardsByBody: [
    {
      body: "ASME",
      standards: ["ASME B16.9", "ASME B16.28", "ASME B16.11", "MSS SP-43"],
    },
    {
      body: "EN",
      standards: ["EN 10253-3", "EN 10253-4"],
    },
    {
      body: "DIN",
      standards: ["DIN 2605", "DIN 2615", "DIN 2616", "DIN 2617"],
    },
    {
      body: "JIS",
      standards: ["JIS B2311", "JIS B2312", "JIS B2313"],
    }
  ],

  sizeRange: [
    { label: "Seamless Fittings", value: "1/2\" to 24\"" },
    { label: "Welded Fittings", value: "1/2\" to 48\" (Larger sizes on request)" }
  ],

  pressureClasses: [
    "SCH 5S", "SCH 10S", "SCH 40S", "SCH 80S", "SCH 160", "SCH XXS"
  ],

  technicalSpecAccordion: [
    {
      title: "Dimensional Standards",
      rows: [
        { label: "Butt Weld Fittings", value: "ASME B16.9" },
        { label: "Short Radius Elbows", value: "ASME B16.28" },
        { label: "Stub Ends", value: "MSS SP-43" },
        { label: "European Standard", value: "EN 10253-3, EN 10253-4" },
        { label: "DIN Series", value: "DIN 2605, DIN 2615, DIN 2616, DIN 2617" },
        { label: "JIS Series", value: "JIS B2311, JIS B2312, JIS B2313" },
        { label: "Size Range", value: "1/2\" to 48\" (Larger on Request)" },
        { label: "Wall Thickness", value: "SCH 5S to SCH XXS" },
      ],
    },
    {
      title: "Manufacturing & Testing",
      rows: [
        { label: "Manufacturing", value: "Seamless, Welded, Fabricated" },
        { label: "Surface Finish", value: "Pickled, Passivated, Machined, Shot Blasted, Mirror Polish, Electropolished" },
        { label: "End Preparation", value: "Beveled, Plain End, Square Cut" },
        { label: "PMI", value: "XRF on every heat" },
        { label: "Hydrostatic Test", value: "Per applicable standard / project spec" },
        { label: "NDE", value: "UT, RT, PT, MT as required" },
        { label: "Other Testing", value: "Hardness, Mechanical, IGC, Ferrite Content" },
      ],
    },
  ],

  testingMethods: [
    { name: "Positive Material Identification (PMI)", description: "XRF analysis on every heat of material." },
    { name: "Hydrostatic Testing", description: "Per applicable standard or project specification." },
    { name: "Ultrasonic Testing (UT)" },
    { name: "Radiographic Testing (RT)" },
    { name: "Dye Penetrant Testing (PT)" },
    { name: "Magnetic Particle Testing (MT)" },
    { name: "Hardness Testing" },
    { name: "Intergranular Corrosion Test (IGC)", description: "ASTM A262 for sensitisation check." },
    { name: "Ferrite Content", description: "For duplex and super duplex grades." },
    { name: "Mechanical Testing", description: "Tensile, yield, and impact (Charpy)." },
  ],

  thirdPartyInspections: [
    "BV", "TUV", "Lloyd's", "DNV", "SGS", "IRS", "EIL"
  ],

  whyChooseUs: [
    {
      title: "Dimensional Accuracy",
      description: "Stringent quality control ensures precise dimensions and bevels for flawless welding and installation.",
      icon: "Crosshair"
    },
    {
      title: "Wide Material Range",
      description: "Extensive inventory of raw materials allowing rapid production in specialized alloys.",
      icon: "Globe"
    },
    {
      title: "Stringent NDE Testing",
      description: "Comprehensive non-destructive evaluation guarantees the structural integrity of every fitting.",
      icon: "ShieldCheck"
    }
  ],

  industriesServed: [
    "Oil & Gas",
    "Petrochemical",
    "Chemical Processing",
    "Power Generation",
    "Shipbuilding",
    "Water Treatment"
  ],

  faqs: [
    { question: "Do you supply both seamless and welded fittings?", answer: "Yes, we offer both seamless fittings for high-pressure applications and welded fittings for larger diameters." },
    { question: "What end preparations are available?", answer: "We provide beveled ends according to ASME B16.25, as well as plain and square cut ends." },
    { question: "Are your welded fittings radiographed?", answer: "Yes, 100% radiography can be performed on weld seams as per customer requirements." }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// Pipes Division Content
// ─────────────────────────────────────────────────────────────────────────────
export const pipesContent: DivisionContent = {
  hero: {
    subheading: "Seamless. Welded. Every Alloy.",
    bullets: [
      "54 grades across 9 alloy families",
      "6mm to 168mm OD, up to 6 meters",
      "ASTM A312, A213, A269 & more",
      "BA, P&P, Mirror, Electropolished finishes",
    ],
  },

  introSection: {
    heading: "High-Performance Piping Solutions",
    highlightWords: ["High-Performance", "Solutions"],
    description: [
      "Our premium piping products form the backbone of critical industrial infrastructure worldwide. We supply **seamless and welded pipes** manufactured to exact tolerances.",
      "With a focus on **corrosion resistance** and **durability**, our pipes are trusted in the most demanding applications across the energy, chemical, and marine sectors."
    ],
    imagePath: "products/division_pipes.webp"
  },

  manufacturingCapability: [
    {
      title: "Cold Drawing & Pilgering",
      description: "Precision sizing and tolerance control",
      icon: "Maximize"
    },
    {
      title: "Continuous Welding",
      description: "Automated TIG/Plasma welding for longitudinal seams",
      icon: "Zap"
    },
    {
      title: "Heat Treatment",
      description: "Bright annealing and continuous roller hearth furnace",
      icon: "Flame"
    },
    {
      title: "Surface Finishing",
      description: "Pickling, Passivation, Mechanical Polishing",
      icon: "Sparkles"
    }
  ],

  standardsByBody: [
    {
      body: "ASTM / ASME",
      standards: ["ASTM A312", "ASTM A358", "ASTM A790", "ASTM B423"],
    },
    {
      body: "EN",
      standards: ["EN 10217-7", "EN 10216-5"],
    },
    {
      body: "DIN",
      standards: ["DIN 17456", "DIN 17458"],
    }
  ],

  sizeRange: [
    { label: "Seamless Pipes", value: "1/8\" NB to 24\" NB" },
    { label: "Welded Pipes", value: "1/8\" NB to 48\" NB" }
  ],

  pressureClasses: [
    "SCH 5", "SCH 10", "SCH 40", "SCH 80", "SCH 160", "SCH XXS"
  ],

  testingMethods: [
    { name: "Hydrostatic Testing" },
    { name: "Eddy Current Testing" },
    { name: "Ultrasonic Testing" },
    { name: "Positive Material Identification (PMI)" },
    { name: "Tensile & Yield Testing" },
    { name: "Flattening & Flaring Test" },
    { name: "Intergranular Corrosion (IGC) Test" }
  ],

  thirdPartyInspections: [
    "TUV", "Lloyd's", "DNV", "SGS", "BV"
  ],

  whyChooseUs: [
    {
      title: "Extensive Grade Availability",
      description: "We stock and supply pipes in standard austenitic grades to complex super alloys.",
      icon: "Layers"
    },
    {
      title: "Precision Tolerances",
      description: "State-of-the-art cold drawing ensures excellent dimensional accuracy and concentricity.",
      icon: "Crosshair"
    },
    {
      title: "Superior Surface Finish",
      description: "Advanced pickling and polishing techniques provide superior corrosion resistance.",
      icon: "Sparkles"
    }
  ],

  industriesServed: [
    "Oil & Gas",
    "Petrochemical",
    "Power Generation",
    "Desalination",
    "Marine",
    "Construction"
  ],

  technicalSpecAccordion: [
    {
      title: "Technical Specifications",
      rows: [
        { label: "Execution", value: "Seamless, Welded, ERW, EFW, Fabricated" },
        { label: "Length", value: "Single Random, Double Random & Required Length" },
        { label: "Ends", value: "Plain End, Beveled End, Treaded" },
        { label: "Testing", value: "Hydrostatic, Eddy Current, UT, X-Ray" },
        { label: "Documentation", value: "MTC to EN 10204 3.1, Third Party Inspection Reports" }
      ],
    }
  ],

  faqs: [
    { question: "What is the difference between seamless and welded pipes?", answer: "Seamless pipes are extruded from a solid billet and have no weld seam, offering higher pressure capacity. Welded pipes are formed from plate or coil and welded, making them more cost-effective for large diameters." },
    { question: "What lengths do you supply?", answer: "We supply standard Single Random (5-7 meters) and Double Random (11-13 meters) lengths, as well as custom cut-to-length pipes." },
    { question: "Are your pipes certified?", answer: "Yes, all pipes are supplied with EN 10204 3.1 Mill Test Certificates. 3.2 certification via third-party is also available." }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// Tubes Division Content
// ─────────────────────────────────────────────────────────────────────────────
export const tubesContent: DivisionContent = {
  hero: {
    subheading: "Precision Seamless & Welded Tubes.",
    bullets: [
      "41 grades across 9 alloy families",
      "6mm to 168.3mm OD, up to 12 meters",
      "ASTM A213, A269, A789, B163, B338",
      "Hydrostatic + eddy-current tested",
    ],
  },

  introSection: {
    heading: "Precision Tubes for Critical Heat Transfer",
    highlightWords: ["Precision", "Heat Transfer"],
    description: [
      "Specializing in precision instrumentation and heat exchanger tubing, we deliver products characterized by **tight dimensional tolerances** and **immaculate surface finishes**.",
      "Our tubing solutions are critical components in heat exchangers, condensers, and instrumentation panels where **reliability** and **purity** are non-negotiable."
    ],
    imagePath: "products/division_tubes.webp"
  },

  manufacturingCapability: [
    {
      title: "Precision Cold Drawing",
      description: "Achieving exacting OD/ID tolerances",
      icon: "Crosshair"
    },
    {
      title: "Bright Annealing",
      description: "Controlled atmosphere heat treatment for clean surfaces",
      icon: "Sun"
    },
    {
      title: "U-Bending",
      description: "In-house U-bending for heat exchanger bundles",
      icon: "RefreshCw"
    },
    {
      title: "Electropolishing",
      description: "Ultra-high purity surface finishes for pharma/semiconductor",
      icon: "Sparkles"
    }
  ],

  standardsByBody: [
    {
      body: "ASTM / ASME",
      standards: ["ASTM A213", "ASTM A269", "ASTM A249", "ASTM A789"],
    },
    {
      body: "EN",
      standards: ["EN 10216-5 (Seamless)", "EN 10217-7 (Welded)"],
    },
    {
      body: "DIN",
      standards: ["DIN 17456", "DIN 17458"],
    }
  ],

  sizeRange: [
    { label: "Outside Diameter (OD)", value: "3mm to 219.1mm" },
    { label: "Wall Thickness (WT)", value: "0.5mm to 20mm" }
  ],

  pressureClasses: [
    "SWG", "BWG", "Custom Wall Thickness"
  ],

  testingMethods: [
    { name: "100% Eddy Current Testing", description: "For surface defects and wall thickness variations." },
    { name: "Hydrostatic Testing", description: "High-pressure leak testing." },
    { name: "Air Under Water Testing", description: "Pneumatic testing for fine leaks." },
    { name: "Hardness Testing" },
    { name: "Flaring & Flattening Test", description: "To ensure ductility." },
    { name: "Surface Roughness Test", description: "Profilometer checks for Ra values." }
  ],

  thirdPartyInspections: [
    "TUV", "BV", "SGS", "Lloyd's"
  ],

  whyChooseUs: [
    {
      title: "Cleanliness & Purity",
      description: "Specialized cleaning processes ensure tubes meet the stringent requirements of high-purity industries.",
      icon: "Droplet"
    },
    {
      title: "Tight Tolerances",
      description: "Our precision drawing process ensures exacting concentricity and uniform wall thickness.",
      icon: "Maximize"
    },
    {
      title: "Complete Traceability",
      description: "Full lifecycle tracking from raw material melt to finished tube.",
      icon: "FileSearch"
    }
  ],

  industriesServed: [
    "Heat Exchangers & Condensers",
    "Pharmaceuticals",
    "Food & Beverage",
    "Semiconductor",
    "Instrumentation & Control",
    "Automotive"
  ],

  technicalSpecAccordion: [
    {
      title: "Technical Specifications",
      rows: [
        { label: "Conditions", value: "Bright Annealed (BA), Annealed & Pickled (AP), Polished" },
        { label: "Length", value: "Straight lengths up to 12 meters, U-Tubes as per drawings" },
        { label: "Tolerance", value: "As per ASTM A450 / A1016 or tighter customer specs" },
        { label: "Packaging", value: "Wooden boxes, bundled with plastic wrapping, plastic end caps" }
      ],
    }
  ],

  faqs: [
    { question: "Do you manufacture U-tubes for heat exchangers?", answer: "Yes, we have in-house U-bending facilities and supply ready-to-install U-tubes as per TEMA standards." },
    { question: "What surface roughness (Ra) can you achieve?", answer: "Through mechanical and electropolishing, we can achieve internal surface roughness (Ra) of <0.4 µm for sanitary and high-purity applications." },
    { question: "Are your tubes tested for leaks?", answer: "Yes, 100% of our tubes undergo either Eddy Current Testing, Hydrostatic Testing, or both, depending on the specification." }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// Registry — single lookup map for DivisionPage.tsx
// ─────────────────────────────────────────────────────────────────────────────
export const divisionContent: Record<Division, DivisionContent> = {
  flanges: flangesContent,
  fittings: fittingsContent,
  pipes: pipesContent,
  tubes: tubesContent,
};
