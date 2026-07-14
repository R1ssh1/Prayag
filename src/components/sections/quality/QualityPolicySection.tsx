import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { qualityPolicy } from "../../../data/quality";

const PolicyCard = ({ stmt, i, isMobile }: { stmt: any; i: number; isMobile: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <motion.div
      ref={ref}
      data-active={isMobile && isInView}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="group relative bg-gray-50 hover:bg-prayag-black data-[active=true]:bg-prayag-black border border-gray-100 hover:border-prayag-red/40 data-[active=true]:border-prayag-red/40 hover:-translate-y-2 data-[active=true]:-translate-y-2 hover:shadow-[0_12px_40px_rgba(227,30,36,0.15)] data-[active=true]:shadow-[0_12px_40px_rgba(227,30,36,0.15)] rounded-2xl p-8 transition-all duration-400 overflow-hidden"
    >
      {/* Red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-prayag-red rounded-t-2xl" aria-hidden="true" />

      {/* Number */}
      <div className="text-[72px] font-heading font-black leading-none text-prayag-red/10 group-hover:text-prayag-red group-data-[active=true]:text-prayag-red transition-colors duration-300 select-none mb-4">
        {stmt.number}
      </div>

      {/* Content */}
      <h3 className="font-body font-bold text-[17px] uppercase tracking-wider text-prayag-black group-hover:!text-white group-data-[active=true]:!text-white transition-colors duration-300 mb-4">
        {stmt.heading}
      </h3>
      <p className="font-body text-[15px] leading-relaxed text-gray-600 group-hover:text-gray-300 group-data-[active=true]:text-gray-300 transition-colors duration-300">
        {stmt.body}
      </p>
    </motion.div>
  );
};

export const QualityPolicySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
  <section
    id="policy-statements"
    className="bg-white py-24 lg:py-36"
    aria-label="Quality Policy Statements"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 lg:mb-20"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Official Quality Policy
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <SectionHeading
          text="Our Commitment to Quality"
          highlightWords={["Commitment", "Quality"]}
          as="h2"
          centered
        />
      </motion.div>

      {/* Three policy statement cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
        {qualityPolicy.statements.map((stmt, i) => (
          <PolicyCard key={stmt.id} stmt={stmt} i={i} isMobile={isMobile} />
        ))}
      </div>

      {/* Philosophy pull-quote (verbatim from fittings section of PDF) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
        className="relative bg-prayag-black rounded-3xl p-10 lg:p-14 overflow-hidden"
      >
        {/* Background glows */}
        <div
          className="absolute -top-64 -right-64 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(227,30,36,0.15) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-5 -left-2 w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(227,30,36,0.15) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-6xl text-prayag-red font-heading font-black leading-none mb-6 select-none" aria-hidden="true">
            "
          </div>
          <p className="font-body text-xl sm:text-2xl text-white leading-relaxed mb-6">
            {qualityPolicy.philosophy}
          </p>
          <div className="inline-block px-5 py-2 rounded-full bg-prayag-red/20 border border-prayag-red/30">
            <span className="text-prayag-red font-body font-bold  uppercase tracking-[0.2em]">
              Prayag Steel — Quality Commitment
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};
