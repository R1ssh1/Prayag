import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Globe, MapPin, Anchor, Award } from "lucide-react";

export const GlobalReachSection: React.FC = () => {
  return (
    <section className="bg-prayag-charcoal py-24 lg:py-36 relative overflow-hidden text-white" aria-label="Global Reach">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(#E31E24 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                Global Footprint
              </span>
            </div>
            
            <SectionHeading
              text="Exporting Quality Worldwide"
              highlightWords={["Worldwide"]}
              as="h2"
              light
              className="mb-8"
            />
            
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">
              While our roots are firmly planted in India, our reach extends across the globe. We are a recognized export house, delivering premium steel products to the Middle East, Europe, Southeast Asia, and the Americas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-sm">25+ Countries</h4>
                <p className="text-gray-500 text-xs font-body">Exporting to key industrial hubs globally.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-sm">Port Proximity</h4>
                <p className="text-gray-500 text-xs font-body">Strategic manufacturing location near major ports.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-sm">Recognized Export House</h4>
                <p className="text-gray-500 text-xs font-body">Government-certified export operations.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-sm">Domestic Network</h4>
                <p className="text-gray-500 text-xs font-body">Pan-India distribution and supply chain.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl bg-prayag-black/50 border border-white/10 flex items-center justify-center overflow-hidden"
          >
            {/* Simple abstract globe visualization */}
            <Globe className="w-64 h-64 text-white/5" strokeWidth={0.5} />
            <div className="absolute inset-0 bg-gradient-to-tr from-prayag-red/20 to-transparent mix-blend-overlay" />
            
            {/* Pulsing dots representing global locations */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-prayag-red shadow-[0_0_15px_rgba(227,30,36,0.8)] animate-pulse" />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-prayag-red shadow-[0_0_10px_rgba(227,30,36,0.8)] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-prayag-red shadow-[0_0_20px_rgba(227,30,36,0.8)] animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-prayag-red shadow-[0_0_12px_rgba(227,30,36,0.8)] animate-pulse" style={{ animationDelay: "1.5s" }} />
            
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-xs font-body uppercase tracking-[0.2em] text-gray-500">Delivering Excellence Worldwide</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
