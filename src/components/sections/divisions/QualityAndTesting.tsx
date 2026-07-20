import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { TestingMethod } from "../../../data/divisions/content";

interface QualityAndTestingProps {
  testingMethods?: TestingMethod[];
  thirdPartyInspections?: string[];
}

const getIconForTest = (name: string) => {
  if (name.includes("PMI") || name.includes("Positive Material")) return LucideIcons.ScanSearch;
  if (name.includes("Hydrostatic")) return LucideIcons.Droplets;
  if (name.includes("Pneumatic")) return LucideIcons.Wind;
  if (name.includes("Dimensional")) return LucideIcons.Ruler;
  if (name.includes("Hardness")) return LucideIcons.Hammer;
  if (name.includes("Ferrite")) return LucideIcons.Magnet;
  if (name.includes("IGC")) return LucideIcons.FlaskConical;
  if (name.includes("Mechanical")) return LucideIcons.Wrench;
  if (name.includes("Ultrasonic")) return LucideIcons.Activity;
  if (name.includes("Dye Penetrant") || name.includes("DP")) return LucideIcons.Eye;
  if (name.includes("Radiography")) return LucideIcons.Radiation;
  return LucideIcons.CheckCircle2; // Fallback
};

export function QualityAndTesting({ testingMethods, thirdPartyInspections }: QualityAndTestingProps) {
  if (!testingMethods || testingMethods.length === 0) return null;

  return (
    <section className="bg-prayag-black py-16 lg:py-24 relative overflow-hidden" aria-label="Testing and Inspection">
      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-prayag-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Quality Assurance
          </span>
        </div>

        <SectionHeading text="Testing & Inspection" as="h2" light className="mb-12" />

        {/* Testing Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {testingMethods.map((method, i) => {
            const Icon = getIconForTest(method.name);
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-prayag-red/40 transition-all duration-300 relative overflow-hidden text-left"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-prayag-red/0 to-prayag-red/0 group-hover:from-prayag-red/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center flex-shrink-0 group-hover:bg-prayag-red/20 border border-white/5 group-hover:border-prayag-red/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-prayag-red transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-body font-black text-sm uppercase tracking-wide text-white leading-snug group-hover:text-prayag-red transition-colors">
                      {method.name}
                    </p>
                    {method.description && (
                      <p className="font-body text-xs text-gray-400 mt-1.5 leading-relaxed">
                        {method.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Third Party Inspection Trust Bar */}
        {thirdPartyInspections && thirdPartyInspections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-10 border-t border-white/10"
          >
            <h3 className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 text-center">
              Third-Party Inspection & Certification
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6">
              {thirdPartyInspections.map((agency) => (
                <div
                  key={agency}
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg border border-white/5 bg-black/20 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  <span className="font-body font-black text-sm md:text-base text-gray-300 tracking-wider">
                    {agency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
