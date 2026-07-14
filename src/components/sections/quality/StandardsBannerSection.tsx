import React, { useState } from "react";
import { motion } from "framer-motion";
import { qualityStandards } from "../../../data/quality";

export const StandardsBannerSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      className="bg-prayag-black py-24 lg:py-32 relative overflow-hidden"
      aria-label="International Quality Standards"
    >
      {/* Background dot grid */}
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
              Globally Recognised
            </span>
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white mb-5">
            International{" "}
            <span className="text-prayag-red">Standards</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Quality is integrated at every stage of production. Our in-house testing
            facilities comply with international standards and customer-specific requirements.
          </p>
        </motion.div>

        {/* Standards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {qualityStandards.map((std, i) => {
            const isActive = activeCard === std.code;
            return (
              <motion.div
                key={std.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setActiveCard(isActive ? null : std.code)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer min-h-[140px] ${isActive ? 'border-prayag-red' : 'border-white/10 lg:hover:border-prayag-red'
                  }`}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 bg-white bg-cover bg-center bg-no-repeat transition-transform duration-500 ${isActive ? 'scale-110' : 'lg:group-hover:scale-110'
                    }`}
                  style={{ backgroundImage: `url('/assets/images/standards/${std.code}.webp')` }}
                />
                {/* Dark Red Overlay (Default) -> Transparent (Hover/Tap) */}
                <div className={`absolute inset-0 bg-[#4a090b]/96 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'lg:group-hover:opacity-0'
                  }`} />

                {/* Content (Text) */}
                <div className={`relative z-10 p-5 text-center flex flex-col justify-center items-center h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'lg:group-hover:opacity-0'
                  }`}>
                  <p className="font-heading font-black text-2xl text-white mb-2 tracking-wider">
                    {std.code}
                  </p>
                  <p className="font-body text-red-100 text-[10px] leading-tight">
                    {std.full}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-prayag-red/10 border border-prayag-red/20 rounded-2xl px-6 sm:px-10 py-6 max-w-2xl">
            <p className="text-white font-body text-base sm:text-lg leading-relaxed">
              Every product ships with full mill test reports, heat numbers, and
              third-party inspection certificates —{" "}
              <span className="text-prayag-red font-semibold">
                delivering right products, right documents, right time.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
