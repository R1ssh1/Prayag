import React from "react";
import { motion } from "framer-motion";

const ALL_STANDARDS = [
  "ASTM", "ASME", "DIN", "JIS", "EN", "ISO",
  "BS", "MSS-SP", "PED", "NACE MR0175", "ISO 9001:2015",
];

export const StandardsBadgeRow: React.FC = () => (
  <section
    className="bg-white py-16 border-y border-gray-100"
    aria-label="Standards we follow"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Label + heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-gray-400 font-body text-[10px] uppercase tracking-[0.28em] mb-2">
          Manufactured to
        </p>
        <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-prayag-black">
          Global Standards.{" "}
          <span className="text-prayag-red">Uncompromised</span> Quality.
        </h2>
      </motion.div>

      {/* Staggered badge row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.055 } },
        }}
        className="flex flex-wrap justify-center gap-3"
        role="list"
        aria-label="International standards"
      >
        {ALL_STANDARDS.map((std) => (
          <motion.span
            key={std}
            role="listitem"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 10 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
            }}
            className="inline-block px-5 py-2.5 rounded-full border-2 border-gray-200 text-prayag-black font-heading font-black text-sm uppercase tracking-wider hover:border-prayag-red hover:text-prayag-red transition-colors duration-200 cursor-default"
          >
            {std}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);
