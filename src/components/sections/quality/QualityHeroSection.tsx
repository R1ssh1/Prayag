import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { qualityPolicy } from "../../../data/quality";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const QualityHeroSection: React.FC = () => (
  <section
    className="relative bg-prayag-black overflow-hidden overflow-x-hidden"
    aria-label="Quality Policy — Prayag Steel"
    style={{ minHeight: "60vh" }}
  >
    {/* Dot-grid background */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#E31E24 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />

    {/* Decorative ring */}
    <div
      className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/10" />
        <div className="absolute inset-12 rounded-full border border-prayag-red/15" />
        <div className="absolute inset-24 rounded-full border border-prayag-red/20" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 flex flex-col lg:flex-row lg:items-center justify-between min-h-[60vh]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-2xl xl:max-w-3xl lg:w-1/2"
      >
        {/* Eyebrow */}
        <motion.div variants={slideUp} className="mb-7">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-prayag-red/30 bg-prayag-red/10">
            <span className="w-2 h-2 rounded-full bg-prayag-red animate-pulse" aria-hidden="true" />
            <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
              {qualityPolicy.eyebrow}
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className="font-heading font-black uppercase leading-[0.92] tracking-tight text-white mb-6"
        >
          {qualityPolicy.tagline.split("\n").map((line, i) => (
            <span
              key={i}
              className={`block ${
                i === 0
                  ? "text-3xl sm:text-4xl lg:text-6xl text-gray-400"
                  : "text-4xl sm:text-5xl lg:text-7xl text-prayag-red mt-2"
              }`}
            >
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={slideUp}
          className="text-gray-300 font-body text-lg mb-10 max-w-xl leading-relaxed"
        >
          Three decades of precision engineering, rigorous testing, and an
          unwavering commitment — so every component we ship is one you can
          stake your project on.
        </motion.p>

        {/* CTA */}
        <motion.div variants={slideUp} className="flex flex-wrap gap-4">
          <a
            href="#policy-statements"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:bg-red-700"
            style={{ boxShadow: "0 6px 24px rgba(227,30,36,0.3)" }}
          >
            Our Policy
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-semibold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:border-prayag-red/60 hover:text-prayag-red"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end relative z-20"
      >
        <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 relative">
          <img src="/assets/images/pages/quality-hero.webp" alt="Prayag Steel Quality Assurance" className="w-full h-auto object-cover aspect-[4/3] hover:-translate-y-2 transition-transform duration-500" />
        </div>
      </motion.div>
    </div>

    {/* Arc divider */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full block" style={{ height: "64px" }}>
        <path d="M0,64 C480,4 960,4 1440,64 L1440,64 L0,64 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
);
