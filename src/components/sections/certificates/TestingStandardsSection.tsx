import React from "react";
import { motion } from "framer-motion";

const testingStandards = [
  {
    division: "Flanges",
    icon: "🔩",
    material: "ASTM A182 / A105",
    dimensional: "ASME B16.5 / B16.47 / B16.36",
    additional: "MSS-SP-44, DIN 2501, EN 1092",
    testingStd: "ASTM / ASME / PED",
  },
  {
    division: "Fittings",
    icon: "⚙️",
    material: "ASTM A403 / A234 / A815",
    dimensional: "ASME B16.9 / B16.11 / B16.28",
    additional: "MSS-SP-43, DIN 2605–2617, EN 10253",
    testingStd: "ASTM / ASME / PED",
  },
  {
    division: "Pipes",
    icon: "🔧",
    material: "ASTM A312 / A358 / A790",
    dimensional: "ASME SA312 / SA358",
    additional: "DIN EN 10216 / EN 10217, NACE MR0175",
    testingStd: "ASTM / ASME / DIN / NACE",
  },
  {
    division: "Tubes",
    icon: "🏗️",
    material: "ASTM A213 / A269 / A511 / A790",
    dimensional: "ASME SA213 / SA269",
    additional: "DIN EN 10216 / EN 10217, NACE MR0103",
    testingStd: "ASTM / ASME / DIN / NACE",
  },
];

export const TestingStandardsSection: React.FC = () => (
  <section
    className="bg-prayag-black py-24 lg:py-32 relative overflow-hidden"
    aria-label="Product Testing Standards by Division"
  >
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#E31E24 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Per-Division Compliance
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white mb-5">
          Product <span className="text-prayag-red">Testing Standards</span>
        </h2>
        <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed">
          Every Prayag product is manufactured and tested to the most current
          revision of internationally recognised codes and standards.
        </p>
      </motion.div>

      {/* Standards table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {testingStandards.map((div, i) => (
          <motion.div
            key={div.division}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-prayag-red/50 rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(227,30,36,0.15)]"
          >
            {/* Division header */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-prayag-red/20 flex items-center justify-center text-xl flex-shrink-0">
                {div.icon}
              </div>
              <div>
                <h3 className="font-body font-bold text-base uppercase tracking-wider text-white">
                  {div.division} Division
                </h3>
                <span className="text-prayag-red font-body text-[10px] uppercase tracking-widest">
                  {div.testingStd}
                </span>
              </div>
            </div>

            {/* Standards rows */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 font-body text-[10px] uppercase tracking-[0.18em] mb-1">
                  Material Standards
                </p>
                <p className="text-white font-body text-sm">{div.material}</p>
              </div>
              <div>
                <p className="text-gray-500 font-body text-[10px] uppercase tracking-[0.18em] mb-1">
                  Dimensional Standards
                </p>
                <p className="text-white font-body text-sm">{div.dimensional}</p>
              </div>
              <div>
                <p className="text-gray-500 font-body text-[10px] uppercase tracking-[0.18em] mb-1">
                  Additional Compliance
                </p>
                <p className="text-gray-300 font-body text-sm">{div.additional}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
