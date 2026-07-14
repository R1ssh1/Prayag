import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { Factory, ShieldCheck, Award, Rocket } from "lucide-react";
import { qualityStandards, qualityPolicy } from "../../../data/company";

const trustCards = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Forged, machined, and CNC-finished under one roof — Mumbai & Umbergaon",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Testing",
    description: "Hydrostatic, eddy-current, PMI, IGC, and dimensional inspection on every batch",
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Internationally certified quality management system since 2015",
  },
  {
    icon: Rocket,
    title: "Mission-Critical Supply",
    description: "Trusted by BARC, ISRO, NPCIL, DRDO since 1994",
  },
];

export const ProductsTrustBand: React.FC = () => {
  return (
    <section className="bg-off-white py-20 lg:py-28 overflow-x-hidden" aria-label="Why Prayag Steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Why Prayag */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                Why Prayag?
              </span>
            </div>

            <SectionHeading
              text="Built to Standard. Tested Beyond It."
              highlightWords={["Standard.", "Beyond", "It."]}
              as="h2"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-prayag-red/10 text-prayag-red flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-lg uppercase text-prayag-black mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Standards & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full justify-center"
          >
             <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-xl mb-8">
               <h3 className="font-heading font-black text-2xl uppercase text-prayag-black mb-6">
                 International Standards
               </h3>
               <div className="flex flex-wrap gap-2">
                 {qualityStandards.map((std, idx) => (
                   <span 
                     key={idx}
                     className="inline-block px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-prayag-black font-body font-bold text-sm"
                   >
                     {std}
                   </span>
                 ))}
               </div>
             </div>

             <div className="relative bg-prayag-charcoal rounded-2xl p-8 lg:p-10 border border-prayag-black overflow-hidden">
               {/* Red accent bar */}
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-prayag-red" aria-hidden="true" />
               <blockquote className="relative z-10">
                 <p className="text-white/90 font-heading font-medium text-2xl lg:text-3xl uppercase leading-snug">
                   "{qualityPolicy.closingLines[0]}"
                 </p>
               </blockquote>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
