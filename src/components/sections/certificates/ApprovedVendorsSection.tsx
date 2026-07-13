import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";

const approvedVendors = [
  {
    id: "barc",
    name: "BARC",
    full: "Bhabha Atomic Research Centre",
    sector: "Nuclear Research",
    icon: "⚛️",
  },
  {
    id: "isro",
    name: "ISRO",
    full: "Indian Space Research Organisation",
    sector: "Space",
    icon: "🚀",
  },
  {
    id: "npcil",
    name: "NPCIL",
    full: "Nuclear Power Corporation of India Ltd.",
    sector: "Nuclear Energy",
    icon: "☢️",
  },
  {
    id: "igcar",
    name: "IGCAR",
    full: "Indira Gandhi Centre for Atomic Research",
    sector: "Nuclear Research",
    icon: "🔬",
  },
  {
    id: "drdo",
    name: "DRDO",
    full: "Defence Research & Development Organisation",
    sector: "Defence",
    icon: "🛡️",
  },
  {
    id: "nfc",
    name: "NFC",
    full: "Nuclear Fuel Complex",
    sector: "Nuclear Fuel",
    icon: "⚡",
  },
  {
    id: "ecil",
    name: "ECIL",
    full: "Electronics Corporation of India Ltd.",
    sector: "Defence Electronics",
    icon: "📡",
  },
  {
    id: "mtar",
    name: "MTAR Technologies",
    full: "MTAR Technologies Ltd.",
    sector: "Space / Defence",
    icon: "🛸",
  },
  {
    id: "zirconium",
    name: "Zirconium Complex",
    full: "Zirconium Complex, Pazhayakayal",
    sector: "Nuclear Materials",
    icon: "🧪",
  },
  {
    id: "bhel",
    name: "BHEL",
    full: "Bharat Heavy Electricals Ltd.",
    sector: "Power & Heavy Engineering",
    icon: "🏭",
  },
];

const sectorColors: Record<string, string> = {
  Nuclear: "bg-blue-50 text-blue-700 border-blue-200",
  Space: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Defence: "bg-amber-50 text-amber-700 border-amber-200",
  Power: "bg-green-50 text-green-700 border-green-200",
};

const getSectorColor = (sector: string) => {
  const key = Object.keys(sectorColors).find((k) => sector.includes(k));
  return key ? sectorColors[key] : "bg-gray-50 text-gray-600 border-gray-200";
};

export const ApprovedVendorsSection: React.FC = () => (
  <section
    className="bg-gray-50 py-24 lg:py-36"
    aria-label="Approved Vendor Status"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Approved & Empanelled With
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <SectionHeading
          text="Trusted by India's Premier Institutions"
          highlightWords={["Premier", "Institutions"]}
          as="h2"
          centered
        />
        <p className="mt-5 text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
          Being an approved vendor to BARC, ISRO, NPCIL, and DRDO is the highest
          endorsement of quality. These approvals are earned through years of
          delivering zero-defect products under the most stringent inspection regimes.
        </p>
      </motion.div>

      {/* Vendor grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {approvedVendors.map((vendor, i) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group bg-white hover:bg-prayag-black border border-gray-100 hover:border-prayag-red/30 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl cursor-default"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
              {vendor.icon}
            </div>
            <p className="font-heading font-black text-lg uppercase text-prayag-black group-hover:!text-white transition-colors duration-300 mb-1 leading-tight">
              {vendor.name}
            </p>
            <p className="font-body text-gray-400 group-hover:text-gray-400 text-xs leading-snug mb-3">
              {vendor.full}
            </p>
            <span
              className={`inline-block px-2.5 py-1 rounded-full border text-[9px] font-body font-semibold uppercase tracking-widest ${getSectorColor(vendor.sector)} group-hover:bg-prayag-red/20 group-hover:border-prayag-red/40 group-hover:text-prayag-red transition-all duration-300`}
            >
              {vendor.sector}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
