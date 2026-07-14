import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const AboutHeroSection: React.FC = () => (
  <section
    className="relative bg-prayag-black overflow-hidden min-h-[50vh] lg:min-h-[65vh]"
    aria-label="About Prayag Steel — Our Story"
  >
    {/* Background image with dark overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/assets/images/about/hero-banner.webp"
        alt="Prayag Steel manufacturing facility"
        className="w-full h-full object-cover object-center lg:object-left opacity-70"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-prayag-black via-prayag-black/70 to-transparent" />
    </div>

    {/* Decorative rings */}
    <div
      className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/10" />
        <div className="absolute inset-12 rounded-full border border-prayag-red/15" />
        <div className="absolute inset-24 rounded-full border border-prayag-red/20" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 lg:py-24 flex flex-col justify-center min-h-[50vh] lg:min-h-[65vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <motion.div variants={slideUp} className="mb-7">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-prayag-red/30 bg-prayag-red/10">
            <span className="w-2 h-2 rounded-full bg-prayag-red animate-pulse" aria-hidden="true" />
            <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
              Est. 1994 · Mumbai & Umbergaon, India
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
        >
          <span className="block text-4xl sm:text-5xl lg:text-7xl">
            Steel Is Strong —
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-6xl mt-2 text-gray-400">
            But Our Commitment Is
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-8xl mt-1 text-prayag-red">
            Stronger.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={slideUp}
          className="text-gray-300 font-body text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
        >
          Three decades of forging trust, precision, and partnerships that power
          India's most critical industries.
        </motion.p>

        {/* CTA */}
        <motion.div variants={slideUp} className="flex flex-wrap gap-4">
          <Link
            to="/products#divisions-grid"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:bg-red-700"
            style={{ boxShadow: "0 6px 24px rgba(227,30,36,0.3)" }}
          >
            Our Products
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-semibold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:border-prayag-red/60 hover:text-prayag-red"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </div>

    {/* Arc to white section */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full block" style={{ height: "64px" }}>
        <path d="M0,64 C480,4 960,4 1440,64 L1440,64 L0,64 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
);
