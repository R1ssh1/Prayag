import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { divisionTesting, qualityPolicy } from "../../../data/quality";

export const TestingProceduresSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("fittings");

  return (
    <section
      className="bg-gray-50 py-24 lg:py-36"
      aria-label="Testing & Quality Control Procedures"
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
              Per-Division Testing
            </span>
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          </div>
          <SectionHeading
            text="Testing & Quality Control"
            highlightWords={["Testing", "Quality"]}
            as="h2"
            centered
          />
          <p className="mt-5 text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Every product that leaves our facility has passed a rigorous,
            multi-stage inspection protocol — specific to each division.
          </p>
        </motion.div>

        {/* Desktop: 2×2 cards */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mb-12">
          {divisionTesting.map((div, i) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-prayag-red/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {div.icon}
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg uppercase text-prayag-black">
                    {div.division} Division
                  </h3>
                  <p className="text-gray-400 font-body text-xs mt-0.5">
                    {div.standards}
                  </p>
                </div>
              </div>

              {/* Intro */}
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-5 border-l-2 border-prayag-red/30 pl-4">
                {div.intro}
              </p>

              {/* Test list */}
              <ul className="space-y-2" role="list">
                {div.tests.map((test) => (
                  <li key={test} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-prayag-red flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-body text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden space-y-3 mb-12">
          {divisionTesting.map((div, i) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === div.id ? null : div.id)}
                className={`w-full flex items-center justify-between gap-3 p-5 text-left transition-colors duration-300 ${
                  openId === div.id ? "bg-prayag-red/5" : "bg-transparent hover:bg-gray-50"
                }`}
                aria-expanded={openId === div.id}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{div.icon}</span>
                  <span className="font-heading font-black text-base uppercase text-prayag-black">
                    {div.division} Division
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-prayag-red transition-transform duration-200 flex-shrink-0 ${
                    openId === div.id ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {openId === div.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                      <p className="text-gray-400 font-body text-xs mb-3">{div.standards}</p>
                      <p className="text-gray-500 font-body text-sm leading-relaxed mb-4 border-l-2 border-prayag-red/30 pl-3">
                        {div.intro}
                      </p>
                      <ul className="space-y-2.5" role="list">
                        {div.tests.map((test) => (
                          <li key={test} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="w-4 h-4 text-prayag-red flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700 font-body text-sm">{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* QC note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 font-body text-sm italic"
        >
          ✓ {qualityPolicy.qcNote}
        </motion.p>

      </div>
    </section>
  );
};
