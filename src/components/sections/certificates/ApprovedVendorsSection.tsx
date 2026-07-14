import React, { useState } from "react";
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

export const ApprovedVendorsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
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
      <div className="flex flex-wrap justify-center gap-4">
        {approvedVendors.map((vendor, i) => {
          const isActive = activeCard === vendor.id;
          return (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setActiveCard(isActive ? null : vendor.id)}
              className={`w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(20%-0.8rem)] aspect-square group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${isActive ? 'border-prayag-red' : 'border-gray-100 lg:hover:border-prayag-red'
                }`}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-white bg-cover bg-center bg-no-repeat transition-transform duration-500 ${isActive ? 'scale-110' : 'lg:group-hover:scale-110'
                  }`}
                style={{ backgroundImage: `url('/assets/images/vendors/${vendor.name}.webp')` }}
              />
              {/* Dark Red Overlay (Default) -> Transparent (Hover/Tap) */}
              <div className={`absolute inset-0 bg-[#4a090b]/90 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'lg:group-hover:opacity-0'
                }`} />

              {/* Content (Text) */}
              <div className={`relative z-10 p-5 text-center flex flex-col justify-center items-center h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'lg:group-hover:opacity-0'
                }`}>
                <p className="font-heading font-black text-xl text-white mb-2 tracking-wider">
                  {vendor.name}
                </p>
                <p className="font-body text-red-100 text-[10px] leading-tight">
                  {vendor.full}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
  );
};
