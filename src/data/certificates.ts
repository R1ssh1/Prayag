// ─────────────────────────────────────────────────────────────────────────────
// certificates.ts — Placeholder certificate data.
// Real certificate scans will be dropped into assets/images/certificates/
// and this array will be updated with actual data.
// ─────────────────────────────────────────────────────────────────────────────

export interface Certificate {
  id: string;
  title: string;
  issuingBody: string;
  description: string;
  /** Path string resolved via getProductImage helper */
  image: string;
  validity?: string;
  certificateNumber?: string;
  standard: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-iso-9001",
    title: "ISO 9001:2015",
    issuingBody: "Bureau Veritas / TÜV",
    description: "Quality Management System certification confirming our manufacturing and supply processes meet ISO 9001:2015 requirements.",
    image: "certificates/iso-9001-2015.webp",
    standard: "ISO 9001:2015",
    validity: "Placeholder — add real validity date when scan is available",
  },
  {
    id: "cert-ped",
    title: "Pressure Equipment Directive (PED)",
    issuingBody: "European Notified Body",
    description: "Compliance with the EU Pressure Equipment Directive for design, manufacture, and testing of pressure equipment.",
    image: "certificates/ped-directive.webp",
    standard: "PED 2014/68/EU",
    validity: "Placeholder — add real validity date when scan is available",
  },
  {
    id: "cert-nace",
    title: "NACE MR0175 / MR0103",
    issuingBody: "NACE International",
    description: "Compliance with NACE MR0175 (H₂S service — oilfield equipment) and MR0103 (H₂S service — general industry).",
    image: "certificates/nace-mr0175-mr0103.webp",
    standard: "NACE MR0175 / MR0103",
  },
  {
    id: "cert-asme",
    title: "ASME Compliance",
    issuingBody: "ASME International",
    description: "Products manufactured to ASME B16.5, B16.9, B16.11, B36.10M, and B36.19M standards.",
    image: "certificates/asme-compliance.webp",
    standard: "ASME B16 / B36 Series",
  },
];
