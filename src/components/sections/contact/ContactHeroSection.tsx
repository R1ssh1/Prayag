import React from "react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export const ContactHeroSection: React.FC = () => (
  <section
    className="relative bg-prayag-black overflow-hidden"
    aria-label="Contact Us — Prayag Steel"
    style={{ minHeight: "50vh" }}
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
    <div className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/10" />
        <div className="absolute inset-12 rounded-full border border-prayag-red/15" />
        <div className="absolute inset-24 rounded-full border border-prayag-red/20" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 flex flex-col justify-center min-h-[50vh]">
      <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
        {/* Eyebrow */}
        <motion.div variants={slideUp} className="mb-7">
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-prayag-red/30 bg-prayag-red/10">
            <span className="w-2 h-2 rounded-full bg-prayag-red animate-pulse" aria-hidden="true" />
            <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
              Get In Touch
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className="font-heading font-black uppercase leading-[0.92] tracking-tight text-white mb-6"
        >
          <span className="block text-3xl sm:text-4xl lg:text-6xl text-gray-400">Let's Build</span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl text-prayag-red mt-2">Something Strong.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p variants={slideUp} className="text-gray-300 font-body text-lg mb-10 max-w-xl leading-relaxed">
          Whether you need a quote, technical support, or want to discuss a custom requirement, our team is ready to assist.
        </motion.p>
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
