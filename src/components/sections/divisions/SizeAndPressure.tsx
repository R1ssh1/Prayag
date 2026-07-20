import { motion } from "framer-motion";
import { Gauge, Ruler } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { SizeRangeItem } from "../../../data/divisions/content";

interface SizeAndPressureProps {
  sizeRange?: string | SizeRangeItem[];
  pressureClasses?: string[];
}

export function SizeAndPressure({ sizeRange, pressureClasses }: SizeAndPressureProps) {
  if (!sizeRange && (!pressureClasses || pressureClasses.length === 0)) return null;

  const hasBoth = !!sizeRange && !!(pressureClasses && pressureClasses.length > 0);

  // Group pressure classes for a structured layout
  const ansiClasses = pressureClasses?.filter((c) => !c.startsWith("PN")) || [];
  const pnClasses = pressureClasses?.filter((c) => c.startsWith("PN")) || [];

  return (
    <section className="bg-gray-50 py-16 lg:py-24 border-y border-gray-200" aria-label="Size Range and Pressure Classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${hasBoth ? "lg:grid-cols-2 gap-16" : ""}`}>
          
          {/* ── Size Range Column ────────────────────────────────────────── */}
          {sizeRange && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Dimensions
                </span>
              </div>
              <SectionHeading text="Available Sizes" as="h2" className="mb-10" />

              {Array.isArray(sizeRange) ? (
                <div className="flex flex-col gap-6">
                  {sizeRange.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-prayag-red/30 transition-all duration-300 group overflow-hidden"
                    >
                      {/* Subtle background ruler icon */}
                      <Ruler className="absolute -right-4 -bottom-4 w-32 h-32 text-gray-50/50 group-hover:text-prayag-red/5 group-hover:rotate-12 transition-all duration-500" />
                      
                      <div className="relative z-10">
                        <p className="font-heading font-black text-sm uppercase tracking-widest text-gray-500 mb-2">
                          {item.label}
                        </p>
                        <p className="font-body text-4xl sm:text-5xl font-black text-prayag-black tracking-tight group-hover:text-prayag-red transition-colors duration-300">
                          {item.value}
                        </p>
                        {item.customNote && (
                          <div className="mt-4 inline-block px-3 py-1 bg-prayag-red/10 border border-prayag-red/20 rounded-full">
                            <p className="font-body text-xs font-bold text-prayag-red uppercase tracking-wider">
                              (Custom Sizes Available)
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <p className="font-body text-2xl font-bold text-gray-700 leading-relaxed">{sizeRange}</p>
                </div>
              )}
            </div>
          )}

          {/* ── Pressure Classes Column ──────────────────────────────────── */}
          {pressureClasses && pressureClasses.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Ratings
                </span>
              </div>
              <SectionHeading text="Pressure Class" as="h2" className="mb-10" />

              <div className="space-y-10">
                {/* ANSI Classes */}
                {ansiClasses.length > 0 && (
                  <div>
                    <h3 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
                      ANSI Class
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                      {ansiClasses.map((pc, i) => (
                        <motion.div
                          key={pc}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-prayag-red shadow-sm hover:shadow-md transition-all group cursor-default"
                        >
                          <Gauge className="w-6 h-6 text-gray-300 mb-2 group-hover:text-prayag-red group-hover:rotate-[30deg] transition-all duration-300" />
                          <span className="text-prayag-black font-heading font-black text-lg tracking-wider group-hover:text-prayag-red transition-colors">
                            {pc}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PN Classes */}
                {pnClasses.length > 0 && (
                  <div>
                    <h3 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
                      PN Nominal Pressure
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                      {pnClasses.map((pc, i) => (
                        <motion.div
                          key={pc}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 bg-white hover:border-prayag-red shadow-sm hover:shadow-md transition-all group cursor-default"
                        >
                          <Gauge className="w-6 h-6 text-gray-300 mb-2 group-hover:text-prayag-red group-hover:rotate-[30deg] transition-all duration-300" />
                          <span className="text-prayag-black font-heading font-black text-lg tracking-wider group-hover:text-prayag-red transition-colors">
                            {pc}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
