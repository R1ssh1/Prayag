import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { divisions } from "../../data/company";

export const DivisionsSection: React.FC = () => {
  return (
    <section className="bg-prayag-black py-24 lg:py-36 relative overflow-hidden" aria-labelledby="divisions-heading">
      {/* Background Red Arc Divider from top */}
      <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden leading-none rotate-180" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: "72px" }}>
          <path d="M0,72 C480,4 960,4 1440,72 L1440,72 L0,72 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <SectionHeading
            text="Our Products"
            highlightWords={["Products"]}
            as="h2"
            light
            className="mb-6"
            id="divisions-heading"
          />
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Manufacturing excellence across four dedicated verticals. High-performance steel for critical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${div.slug}`}
                className="group block relative rounded-2xl overflow-hidden bg-prayag-charcoal border border-white/10 hover:border-prayag-red/50 transition-colors duration-300 h-full flex flex-col"
              >
                {/* Image slot */}
                <div className="relative aspect-[16/9] overflow-hidden bg-prayag-black/50">
                  <img
                    src={`/assets/images/divisions/${div.slug}-hero.webp`}
                    alt={`${div.name} Division`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-prayag-black via-prayag-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative flex-1 p-8 -mt-16 z-10 flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-prayag-red flex items-center justify-center shadow-lg shadow-prayag-red/20 mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                     <span className="text-white font-heading font-black text-2xl">
                       {div.name[0]}
                     </span>
                  </div>
                  <h3 className="font-heading font-black text-3xl uppercase text-white mb-2 group-hover:text-prayag-red transition-colors">
                    {div.name}
                  </h3>
                  <p className="text-prayag-red  font-body font-semibold uppercase tracking-wider mb-4">
                    {div.tagline}
                  </p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed mb-8 flex-1">
                    {div.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-white font-body font-semibold uppercase tracking-wider text-[15px] transition-colors group-hover:text-prayag-red">
                    Explore Product <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/products#divisions-grid"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-body font-semibold uppercase tracking-wider text-[15px] hover:bg-white hover:text-prayag-black transition-all duration-300"
          >
            View Full Catalogue Directory
          </Link>
        </div>
      </div>
      
      {/* Bottom Red Arc Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: "72px" }}>
          <path d="M0,72 C480,4 960,4 1440,72 L1440,72 L0,72 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};
