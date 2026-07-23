import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const BlogHeroSection: React.FC = () => (
  <section
    className="relative bg-prayag-black overflow-hidden"
    aria-label="Prayag Steel — Industry Blog"
    style={{ minHeight: "58vh" }}
  >
    {/* Decorative rings */}
    <div
      className="absolute -left-32 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-[500px] h-[500px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/10" />
        <div className="absolute inset-16 rounded-full border border-prayag-red/15" />
        <div className="absolute inset-32 rounded-full border border-prayag-red/20" />
      </div>
    </div>

    {/* Decorative rings — right side */}
    <div
      className="absolute -right-48 top-1/3 pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-white/5" />
        <div className="absolute inset-12 rounded-full border border-white/8" />
      </div>
    </div>

    {/* Background image with dark overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/assets/images/hero/hero-banner.webp"
        alt="Prayag Steel Blog Hero Banner"
        className="w-full h-full object-cover object-center opacity-40"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-prayag-black via-prayag-black/80 to-prayag-black/40" />
      
      {/* Subtle background gradient (fallback if no image) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-prayag-black via-prayag-black to-[#2a1a1b] -z-10"
        aria-hidden="true"
      />
    </div>

    {/* Watermark typographic background */}
    <div
      className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <span
        className="font-heading font-black leading-none text-white/[0.03] pr-4 lg:pr-8"
        style={{ fontSize: "clamp(120px, 18vw, 240px)", whiteSpace: "nowrap" }}
      >
        BLOGS
      </span>
    </div>


    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-21 lg:py-20 flex flex-col justify-center min-h-[58vh]">
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
              Industry Insights · Prayag Steel
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className="font-heading font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
        >
          <span className="block text-4xl sm:text-5xl lg:text-7xl">
            Steel Insights.
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-6xl mt-2 text-gray-400">
            Industry
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-8xl mt-1 text-prayag-red">
            Knowledge.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={slideUp}
          className="text-gray-300 font-body text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
        >
          Expert articles on stainless steel grades, fabrication standards,
          industry certifications, and the insights that power India's
          most critical infrastructure.
        </motion.p>

        {/* CTA */}
        <motion.div variants={slideUp}>
          <Link
            to="#blog-posts"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("blog-posts")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:bg-red-700"
            style={{ boxShadow: "0 6px 24px rgba(227,30,36,0.3)" }}
          >
            Read Articles
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </div>

    {/* Arc divider to white */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full block" style={{ height: "64px" }}>
        <path d="M0,64 C480,4 960,4 1440,64 L1440,64 L0,64 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
);
