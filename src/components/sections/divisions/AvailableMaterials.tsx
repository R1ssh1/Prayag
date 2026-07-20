
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { MaterialFamily } from "../../../data/products/types";

interface AvailableMaterialsProps {
  materials: MaterialFamily[];
}

export function AvailableMaterials({ materials }: AvailableMaterialsProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 border-y border-gray-200" aria-label="Available Materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Materials
          </span>
        </div>
        
        <SectionHeading text="Available Materials" as="h2" className="mb-4" />
        
        <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed mb-12 max-w-2xl">
          Engineered from high-grade alloys, our components are available in the following metallurgical families and specifications. Contact us for precise stock availability and custom metallurgical requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((family, i) => (
            <motion.div
              key={family.family}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white border border-gray-200 hover:border-prayag-red/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Header (Family + Standard) */}
              <div className="px-5 py-4 border-b border-gray-100 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-prayag-red/0 group-hover:bg-prayag-red/5 transition-colors duration-500" />
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="font-heading font-black text-sm uppercase tracking-[0.15em] text-prayag-black leading-snug group-hover:text-prayag-red transition-colors duration-300">
                      {family.family}
                    </h3>
                    {family.standard && (
                      <p className="font-body text-xs text-prayag-red font-semibold mt-1 uppercase tracking-wider">
                        {family.standard}
                      </p>
                    )}
                  </div>
                  <LucideIcons.ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-prayag-red group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Grades (Sharp technical tags) */}
              <div className="px-5 py-5 flex flex-wrap gap-2 bg-white">
                {family.grades.map((grade, j) => (
                  <motion.span
                    key={grade}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i * 0.1) + (j * 0.04) + 0.2 }}
                    className="inline-block px-2.5 py-1 bg-gray-50 border-l-2 border-l-gray-300 hover:border-l-prayag-red text-gray-700 font-body font-medium text-xs tracking-wide transition-all hover:scale-105 hover:text-prayag-red cursor-default shadow-sm hover:shadow"
                  >
                    {grade}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
