import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import { divisions } from "../../../data/company";
import { getProductsByDivision } from "../../../data/products";
import type { Division } from "../../../data/products/types";

export const DivisionsGridSection: React.FC = () => {
  return (
    <section id="divisions-grid" className="bg-white py-24 lg:py-36" aria-labelledby="divisions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <SectionHeading
            text="Our Four Divisions"
            highlightWords={["Four", "Divisions"]}
            as="h2"
            className="mb-6"
            id="divisions-heading"
          />
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            Manufactured in India. Trusted globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {divisions.map((div, index) => {
            // We use the division's id to fetch its products for the subcategory links.
            // Currently, div.id matches the Division type ("flanges", "fittings", etc.).
            const divisionProducts = getProductsByDivision(div.id as Division).slice(0, 4);

            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-prayag-red/30 hover:shadow-2xl hover:shadow-prayag-red/10 transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
                  {/* Image slot */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <Link to={`/products/${div.slug}`} className="block w-full h-full">
                      <img
                        src={`/assets/images/divisions/${div.slug}-hero.webp`}
                        alt={`${div.name} Division`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-prayag-black/80 via-prayag-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 p-8 -mt-12 z-10 flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-prayag-red flex items-center justify-center shadow-lg shadow-prayag-red/20 mb-6 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="text-white font-heading font-black text-2xl">
                        {div.name[0]}
                      </span>
                    </div>

                    <Link to={`/products/${div.slug}`}>
                      <h3 className="font-heading font-black text-3xl uppercase text-prayag-black mb-2 group-hover:text-prayag-red transition-colors">
                        {div.name}
                      </h3>
                    </Link>
                    
                    <p className="text-prayag-red font-body font-semibold uppercase tracking-wider mb-4">
                      {div.tagline}
                    </p>
                    
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-6 flex-1">
                      {div.description}
                    </p>

                    {/* Subcategory Links */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-4">
                        Key Products
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {divisionProducts.map((product) => (
                          <Link
                            key={product.id}
                            to={`/products/${div.slug}/${product.slug}`}
                            className="flex items-start gap-2 text-sm font-body text-prayag-black hover:text-prayag-red transition-colors group/link"
                          >
                            <ArrowRight className="w-4 h-4 mt-0.5 text-gray-300 group-hover/link:text-prayag-red transition-colors shrink-0" aria-hidden="true" />
                            <span className="line-clamp-2 leading-snug">{product.name}</span>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to={`/products/${div.slug}`}
                        className="inline-flex items-center gap-2 text-prayag-black font-body font-semibold uppercase tracking-wider text-[15px] transition-colors group-hover:text-prayag-red"
                      >
                        Explore Full Catalog <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
