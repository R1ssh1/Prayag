import React from "react";
import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Shield, Plane, Factory, Beaker, Zap, Activity, Droplets, Ship } from "lucide-react";

const industries = [
  { name: "Nuclear Power", icon: Zap, desc: "Critical application pipes & flanges" },
  { name: "Aerospace", icon: Plane, desc: "High-temperature exotic alloys" },
  { name: "Defence", icon: Shield, desc: "Mil-spec structural components" },
  { name: "Petrochemicals", icon: Factory, desc: "High-pressure fittings & tubes" },
  { name: "Pharmaceuticals", icon: Beaker, desc: "Ultra-high purity (UHP) tubing" },
  { name: "Oil & Gas", icon: Droplets, desc: "Corrosion-resistant offshore pipes" },
  { name: "Power Generation", icon: Activity, desc: "Thermal and hydro plant tubes" },
  { name: "Marine", icon: Ship, desc: "Cupro-nickel sea water systems" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-white py-24 lg:py-36 relative" aria-label="Industries We Serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <SectionHeading
            text="Industries We Serve"
            highlightWords={["Industries"]}
            as="h2"
            className="mb-6"
          />
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            From the depths of the ocean to the vacuum of space, Prayag Steel delivers mission-critical components where failure is not an option.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={item}
              className="group bg-off-white rounded-2xl p-6 border border-gray-100 hover:border-prayag-red/30 hover:bg-white hover:shadow-xl hover:shadow-prayag-red/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-prayag-red/10 text-prayag-red flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-prayag-red group-hover:text-white transition-all duration-300">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase text-prayag-black mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-500 text-sm font-body line-clamp-2">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
