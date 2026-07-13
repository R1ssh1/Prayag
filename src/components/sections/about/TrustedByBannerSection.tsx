import React from "react";
import { motion } from "framer-motion";

// Extended list with more context
const institutions = [
  { name: "BARC", full: "Bhabha Atomic Research Centre" },
  { name: "ISRO", full: "Indian Space Research Organisation" },
  { name: "NPCIL", full: "Nuclear Power Corporation of India Ltd." },
  { name: "IGCAR", full: "Indira Gandhi Centre for Atomic Research" },
  { name: "Zirconium Complex", full: "Zirconium Complex, Pazhayakayal" },
  { name: "DRDO", full: "Defence Research & Development Organisation" },
  { name: "NFC", full: "Nuclear Fuel Complex, Hyderabad" },
  { name: "ECIL", full: "Electronics Corporation of India Ltd." },
  { name: "MTAR Technologies", full: "MTAR Technologies Ltd." },
];

export const TrustedByBannerSection: React.FC = () => (
  <section className="bg-prayag-red py-20 relative overflow-hidden" aria-label="Trusted by India's Premier Institutions">
    {/* Background watermark */}
    <div
      className="absolute inset-0 flex items-center justify-end pr-10 opacity-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <span className="font-heading font-black text-[18vw] leading-none whitespace-nowrap text-white">
        TRUSTED
      </span>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-white/70 font-body text-[10px] uppercase tracking-[0.3em] mb-3">
          Serving India's Most Critical Sectors Since 1994
        </p>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white leading-none">
          Trusted by India's{" "}
          <span className="text-white/60">Premier Institutions</span>
        </h2>
      </motion.div>

      {/* Institution cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3"
        role="list"
        aria-label="Trusted institutions"
      >
        {institutions.map((inst) => (
          <motion.div
            key={inst.name}
            role="listitem"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
            }}
            className="group bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl p-4 text-center transition-all duration-200 cursor-default"
            title={inst.full}
          >
            <div className="font-heading font-black text-white text-xs sm:text-sm uppercase tracking-wide leading-tight">
              {inst.name}
            </div>
            <div className="text-white/50 text-[9px] font-body mt-1 leading-tight hidden sm:block">
              {inst.full}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
