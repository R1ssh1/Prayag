import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import type { StandardsBody } from "../../../data/divisions/content";

interface ManufacturingStandardsProps {
  standards: StandardsBody[];
}

export function ManufacturingStandards({ standards }: ManufacturingStandardsProps) {
  const [activeTab, setActiveTab] = useState(standards?.[0]?.body || "");

  if (!standards || standards.length === 0) return null;

  const activeContent = standards.find((s) => s.body === activeTab);

  return (
    <section className="bg-white py-16 lg:py-24" aria-label="Manufacturing Standards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Standards
          </span>
        </div>
        
        <SectionHeading text="Manufacturing Standards" as="h2" className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* ── Left Sidebar (Tabs) ────────────────────────────────── */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar items-start">
            {standards.map((group) => {
              const isActive = activeTab === group.body;
              return (
                <button
                  key={group.body}
                  onClick={() => setActiveTab(group.body)}
                  className={`relative flex-shrink-0 w-full text-left px-6 py-4 rounded-xl font-body font-black text-sm uppercase transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? "bg-prayag-red text-white shadow-lg shadow-prayag-red/30 border border-prayag-red"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-prayag-black border border-gray-100"
                  }`}
                >
                  <span className="relative z-10">{group.body}</span>
                  
                  {/* Hover/Active overlay for premium feel */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Right Content Area (Standard Cards) ────────────────── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.body}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.4, staggerChildren: 0.05 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                >
                  {activeContent.standards.map((std) => (
                    <motion.div
                      key={std}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-prayag-red/40 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-prayag-red/10 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-prayag-red" strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm font-semibold text-gray-700 leading-snug mt-1.5 group-hover:text-prayag-black transition-colors duration-300">
                        {std}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
