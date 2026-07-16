import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { journeyTimeline } from "../../../data/company";

export const JourneySection: React.FC = () => (
  <section id="journey" className="bg-white py-24 lg:py-36 relative" aria-label="Our Journey">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 lg:mb-24 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Our Journey
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <SectionHeading
          text="A Journey Built on Trust"
          highlightWords={["Journey", "Trust"]}
          as="h2"
          centered
        />
      </motion.div>

      {/* Sticky Scroll Container */}
      <div className="flex flex-col">
        {journeyTimeline.map((item) => (
          <div key={item.year} className="lg:snap-start lg:snap-always relative flex flex-col lg:flex-row items-start min-h-[50vh] lg:min-h-[90vh] border-b border-gray-100 last:border-0">

            {/* Left: Sticky Year */}
            <div className="w-full lg:w-1/2 sticky top-[80px] lg:top-0 lg:h-[90vh] flex items-center justify-start lg:justify-center py-6 lg:py-0 z-20 bg-white/95 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start lg:items-center relative w-full lg:w-auto"
              >
                {/* Giant watermark year (desktop only) */}
                <span className="hidden lg:block text-[15rem] font-heading font-black text-gray-100 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                  {item.year}
                </span>

                <span className="text-6xl lg:text-8xl font-heading font-black text-prayag-red leading-none drop-shadow-sm z-10">
                  {item.year}
                </span>
                <span className="mt-2 lg:mt-6 text-prayag-black font-heading font-bold text-lg lg:text-3xl uppercase tracking-widest lg:text-center max-w-md z-10 leading-tight">
                  {item.title}
                </span>
              </motion.div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="w-full lg:w-1/2 flex items-center lg:min-h-[90vh] pb-16 pt-4 lg:py-32 z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7 }}
                className="w-full bg-off-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-prayag-red to-prayag-red/30" />

                <div className="space-y-6 text-gray-600 font-body text-[15px] lg:text-lg leading-relaxed mt-4">
                  {Array.isArray(item.description) ? (
                    item.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);
