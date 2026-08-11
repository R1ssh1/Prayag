import type { Product } from "./types";

/**
 * Generates an authoritative, 8-question SEO FAQ set for any product.
 * If the product has explicit custom FAQs defined in its data object, those are returned.
 * Otherwise, synthesizes keyword-rich questions and answers based on the product's
 * name, division, subcategory, specifications, standards, and materials.
 */
export function getProductFaqs(product: Product): { question: string; answer: string }[] {
  // If product explicitly overrides faqs, return them directly
  if (product.faqs && product.faqs.length > 0) {
    return product.faqs;
  }

  // 1. Division display string
  const divisionMap: Record<string, string> = {
    flanges: "flange component",
    fittings: "pipe fitting",
    pipes: "piping product",
    tubes: "tubing product",
  };
  const divisionName = divisionMap[product.division] || "piping component";

  // 2. Manufacturing type string
  const typeStr = product.type ? `produced as a precision ${product.type.toLowerCase()} component, ` : "";

  // 3. Standards string
  let standardsStr = "internationally recognized specifications";
  if (product.standards && product.standards.length > 0) {
    standardsStr = product.standards.slice(0, 4).join(", ");
  } else {
    if (product.division === "flanges") standardsStr = "ASME B16.5, ASME B16.47, EN 1092-1, and DIN standards";
    else if (product.division === "fittings") standardsStr = "ASME B16.9, ASME B16.11, MSS SP-43, and EN 10253";
    else if (product.division === "pipes") standardsStr = "ASTM A312, ASTM A213, ASTM A269, and ASTM A358";
    else if (product.division === "tubes") standardsStr = "ASTM A213, ASTM A269, ASTM B163, and ASTM B338";
  }

  // 4. Size range string
  let sizeStr = "standard industrial dimensions";
  const sizeSpec = product.specs.find((s) => /size|od|diameter|range/i.test(s.label));
  if (sizeSpec) {
    sizeStr = sizeSpec.value;
  } else if (product.sizeRange) {
    sizeStr = product.sizeRange;
  } else {
    if (product.division === "flanges" || product.division === "fittings") {
      sizeStr = "½\" to 48\" NPS (with custom large-diameter sizes up to 60\" available upon request)";
    } else {
      sizeStr = "6mm to 355.6mm OD across standard wall thicknesses (SCH 5S through SCH XXS)";
    }
  }

  // 5. Pressure rating string
  let pressureStr = "standard operational pressure classes";
  const pressureSpec = product.specs.find((s) => /pressure|rating|class|schedule/i.test(s.label));
  if (pressureSpec) {
    pressureStr = pressureSpec.value;
  } else if (product.pressureRating) {
    pressureStr = product.pressureRating;
  } else {
    if (product.division === "flanges") {
      pressureStr = "Class 150#, 300#, 400#, 600#, 900#, 1500#, and 2500# (PN6 through PN160)";
    } else {
      pressureStr = "all standard pressure ratings in accordance with ASME B31.1 and B31.3 piping codes";
    }
  }

  // 6. Materials string
  let materialsStr = "a wide spectrum of corrosion-resistant alloys";
  if (product.materials && product.materials.length > 0) {
    materialsStr = product.materials.slice(0, 6).join(", ");
  } else if (product.materialsTable && product.materialsTable.length > 0) {
    const families = product.materialsTable.map((f) => {
      const topGrades = f.grades.slice(0, 2).join("/");
      return `${f.family} (${topGrades})`;
    });
    materialsStr = families.slice(0, 6).join(", ");
  } else if (product.subcategory) {
    materialsStr = `${product.subcategory} alloys and equivalent international grades`;
  } else {
    materialsStr =
      "Stainless Steel (304/304L, 316/316L, 321, 347), Duplex & Super Duplex (2205, 2507), Nickel Alloys (Inconel 600, 625, 718, 800H), Monel, Hastelloy, Titanium, and Cupro Nickel";
  }

  return [
    {
      question: `What is ${product.name} and how is it manufactured by Prayag Steel?`,
      answer: `${product.name} is a high-performance industrial ${divisionName} manufactured to stringent dimensional and metallurgical tolerances. ${typeStr}it is engineered to withstand demanding operational conditions in process piping systems. Every unit undergoes controlled heat treatment, precision machining, surface passivation, and rigorous quality verification at our manufacturing facility in India to ensure maximum structural integrity and long-term reliability.`,
    },
    {
      question: `Where is ${product.name} commonly used?`,
      answer: `${product.name} is widely utilized across critical industrial sectors characterized by high pressures, corrosive fluid streams, or extreme thermal cycling. Major end-use industries include offshore oil and gas exploration, chemical and petrochemical processing, nuclear and thermal power generation, refinery processing units, pharmaceuticals, LNG storage, and aerospace engineering.`,
    },
    {
      question: `What size ranges and pressure classes are available for ${product.name}?`,
      answer: `We supply ${product.name} in a comprehensive range of dimensions to fit diverse piping layouts. Standard sizes cover ${sizeStr}. Pressure ratings and wall thicknesses are available in ${pressureStr}, ensuring leak-tight containment across both standard utility and high-pressure severe service lines.`,
    },
    {
      question: `What international manufacturing standards govern ${product.name}?`,
      answer: `Our ${product.name} is manufactured, tested, and certified in strict compliance with governing international standards, including ${standardsStr}. This ensures exact dimensional interchangeability, verified mechanical properties, and full compliance with global piping design codes.`,
    },
    {
      question: `Which material grades and alloy families can ${product.name} be supplied in?`,
      answer: `To meet specific chemical resistance and temperature requirements, we supply ${product.name} in a broad spectrum of premium materials, including ${materialsStr}. Specialized exotic alloys and custom heat treatments (such as solution annealing or stress relieving) are also available upon project request.`,
    },
    {
      question: `What non-destructive testing (NDT) and quality inspections does ${product.name} undergo?`,
      answer: `Quality assurance is paramount at Prayag Steel. Every ${product.name} is subjected to a comprehensive inspection protocol that includes 100% Positive Material Identification (PMI), hydrostatic pressure testing, ultrasonic testing (UT) or radiographic testing (RT) where applicable, liquid penetrant inspection (LPI), precision optical/tactile dimensional verification, and hardness testing.`,
    },
    {
      question: `What documentation and Material Test Certificates (MTCs) are provided with ${product.name}?`,
      answer: `We provide complete traceability and comprehensive project documentation with every shipment of ${product.name}. Standard deliverables include EN 10204 3.1 Material Test Certificates (MTCs), raw material chemical analysis reports, mechanical test charts, heat treatment records, and NDT inspection reports. Third-party inspection (TPI) per EN 10204 3.2 is readily arranged through Lloyds, DNV, Bureau Veritas, or customer-appointed agencies.`,
    },
    {
      question: `Why choose Prayag Steel as your manufacturer and supplier for ${product.name} in India?`,
      answer: `With over three decades of manufacturing excellence since 1994, Prayag Steel & Engineering Co. combines state-of-the-art CNC machining capabilities, extensive raw material inventory, and strict ISO-certified quality management. We offer competitive factory-direct pricing, rapid manufacturing turnaround times, custom engineering support, and robust export packaging for global deliveries.`,
    },
  ];
}
