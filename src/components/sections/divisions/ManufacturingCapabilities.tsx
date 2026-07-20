import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { ManufacturingCapability } from "../../../data/divisions/content";

interface ManufacturingCapabilitiesProps {
  capabilities: ManufacturingCapability[];
}

const WATERMARK_TEXT = "WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS FLANGES WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING REDUCER PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL ";

export function ManufacturingCapabilities({ capabilities }: ManufacturingCapabilitiesProps) {
  return (
    <section className="bg-prayag-black py-16 lg:py-24 relative overflow-hidden" aria-label="Manufacturing Capabilities">
      {/* Background subtle radial gradient for depth */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-prayag-black to-prayag-black" />
      
      {/* ── Watermark keyword texture ───────────────────────────────── */}
      <div
        className="absolute inset-0 p-4 sm:p-8 select-none pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <p
          className="text-sm sm:text-lg lg:text-xl font-body font-bold uppercase tracking-[0.25em] text-justify text-white break-words"
          style={{ opacity: 0.035, lineHeight: 2.2 }}
        >
          {WATERMARK_TEXT.repeat(10)}
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Capabilities
          </span>
        </div>
        
        <SectionHeading 
          text="Advanced Manufacturing" 
          highlightWords={["Manufacturing"]}
          as="h2" 
          light 
          className="mb-4"
        />
        
        <p className="font-body text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-14">
          From precision closed-die forging to multi-axis CNC machining, our state-of-the-art facilities are equipped to manufacture high-integrity components tailored exactly to your stringent specifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            // Dynamically resolve icon from Lucide (fallback to Settings)
            const IconName = cap.icon as keyof typeof LucideIcons;
            const Icon = IconName && LucideIcons[IconName] ? LucideIcons[IconName] as React.ElementType : LucideIcons.Settings;

            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#111111] border border-white/5 rounded-2xl p-8 overflow-hidden hover:bg-prayag-red transition-all duration-500 hover:shadow-2xl hover:shadow-prayag-red/20"
              >
                {/* Watermark Number */}
                <div 
                  className="absolute -right-4 -bottom-6 font-heading font-black text-[120px] text-white/[0.02] group-hover:text-white/20 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="font-heading font-black text-xl uppercase text-white mb-3 tracking-wide transition-colors duration-500">
                    {cap.title}
                  </h3>
                  
                  <p className="font-body text-sm text-gray-400 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
