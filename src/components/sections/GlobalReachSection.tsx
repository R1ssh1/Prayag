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
                <h4 className="font-body font-semibold uppercase tracking-wider text-[15px]">25+ Countries</h4>
                <p className="text-gray-500 text-xs font-body">Exporting to key industrial hubs globally.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <Anchor className="w-5 h-5" />
                </div>
                <h4 className="font-body font-semibold uppercase tracking-wider text-[15px]">Port Proximity</h4>
                <p className="text-gray-500 text-xs font-body">Strategic manufacturing location near major ports.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-body font-semibold uppercase tracking-wider text-[15px]">Recognized Export House</h4>
                <p className="text-gray-500 text-xs font-body">Government-certified export operations.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-prayag-red/20 text-prayag-red flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-body font-semibold uppercase tracking-wider text-[15px]">Domestic Network</h4>
                <p className="text-gray-500 text-xs font-body">Pan-India distribution and supply chain.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-2xl border border-white/20 shadow-2xl overflow-hidden bg-prayag-black/20"
          >
            <img 
              src="/assets/images/pages/footprint.webp" 
              alt="Prayag Steel Global Footprint" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
