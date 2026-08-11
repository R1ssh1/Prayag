import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { MaterialFamily } from "../../data/products/types";

interface MaterialCardProps {
  family: MaterialFamily;
  index?: number;
}

export function MaterialCard({ family, index = 0 }: MaterialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white border border-gray-200 hover:border-prayag-red/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden"
    >
      {/* Header (Family + Standard) */}
      <div className="px-5 py-4 border-b border-gray-100 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-prayag-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        <div className="absolute inset-0 bg-prayag-red/0 group-hover:bg-prayag-red/5 transition-colors duration-500" />
        <div className="relative z-10 flex justify-between items-start">
          <div>
            <h3 className="font-heading font-black text-sm uppercase tracking-[0.15em] text-prayag-black leading-snug group-hover:text-prayag-red transition-colors duration-300">
              {family.family}
            </h3>
            {family.standard && (
              <p className="font-body text-xs text-prayag-red font-semibold mt-1 uppercase tracking-wider transition-colors duration-300">
                {family.standard}
              </p>
            )}
          </div>
          <LucideIcons.ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-prayag-red group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
      
      {/* Grades (Tags) */}
      <div className="px-5 py-5 flex flex-wrap gap-2 bg-white">
        {family.grades.map((grade, j) => (
          <motion.span
            key={grade}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (j * 0.04) + 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 hover:border-prayag-red/40 hover:bg-prayag-red/5 text-gray-700 font-body font-medium text-xs tracking-wide transition-all duration-300 hover:scale-[1.03] hover:text-prayag-red cursor-default shadow-sm hover:shadow"
          >
            {grade}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
