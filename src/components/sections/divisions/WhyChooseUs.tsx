import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { WhyChooseUsCard } from "../../../data/divisions/content";

interface WhyChooseUsProps {
  cards?: WhyChooseUsCard[];
}

export function WhyChooseUs({ cards }: WhyChooseUsProps) {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="bg-prayag-black py-16 lg:py-24 relative overflow-hidden" aria-label="Why Choose Prayag Steel">
      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Why Us
          </span>
        </div>
        
        <SectionHeading text="Why Choose Prayag Steel" as="h2" light className="mb-12" />
        
        {/* Balanced 2x2 Grid for standard 4 items */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 ${cards.length === 3 ? "lg:grid-cols-3" : ""}`}>
          {cards.map((card, i) => {
            // Dynamically grab the icon from Lucide, default to CheckCircle2 if not found
            const IconComponent = card.icon && (LucideIcons as any)[card.icon] 
              ? (LucideIcons as any)[card.icon] 
              : LucideIcons.CheckCircle2;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 hover:border-prayag-red/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle background icon */}
                <IconComponent className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 group-hover:text-prayag-red/10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-black/50 flex items-center justify-center mb-6 group-hover:bg-prayag-red/20 transition-colors duration-300 border border-white/5 group-hover:border-prayag-red/30">
                    <IconComponent className="w-7 h-7 text-gray-400 group-hover:text-prayag-red transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-heading font-black text-xl uppercase tracking-wide text-white mb-4 group-hover:text-prayag-red transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="font-body text-gray-400 leading-relaxed">
                    {card.description}
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
