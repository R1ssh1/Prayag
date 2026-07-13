import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { qualityPolicy } from "../../../data/quality";

export const QualityPolicySection: React.FC = () => (
  <section
    id="policy-statements"
    className="bg-white py-24 lg:py-36"
    aria-label="Quality Policy Statements"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 lg:mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Official Quality Policy
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <SectionHeading
          text="Our Commitment to Quality"
          highlightWords={["Commitment", "Quality"]}
          as="h2"
          centered
        />
      </motion.div>

      {/* Three policy statement cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        {qualityPolicy.statements.map((stmt, i) => (
          <motion.div
            key={stmt.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group relative bg-gray-50 hover:bg-prayag-black border border-gray-100 hover:border-prayag-red/40 rounded-2xl p-8 transition-all duration-400 overflow-hidden"
          >
            {/* Red accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-prayag-red rounded-t-2xl" aria-hidden="true" />

            {/* Number */}
            <div className="text-[72px] font-heading font-black leading-none text-prayag-red/10 group-hover:text-prayag-red transition-colors duration-300 select-none mb-4">
              {stmt.number}
            </div>

            {/* Content */}
            <h3 className="font-heading font-black text-lg uppercase text-prayag-black group-hover:!text-white transition-colors duration-300 mb-4">
              {stmt.heading}
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
              {stmt.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Philosophy pull-quote (verbatim from fittings section of PDF) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
        className="relative bg-prayag-black rounded-3xl p-10 lg:p-14 overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(227,30,36,0.15) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-6xl text-prayag-red font-heading font-black leading-none mb-6 select-none" aria-hidden="true">
            "
          </div>
          <p className="font-body text-xl sm:text-2xl text-white leading-relaxed mb-6">
            {qualityPolicy.philosophy}
          </p>
          <div className="inline-block px-5 py-2 rounded-full bg-prayag-red/20 border border-prayag-red/30">
            <span className="text-prayag-red font-heading font-black text-xs uppercase tracking-[0.2em]">
              Prayag Steel — Quality Commitment
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
