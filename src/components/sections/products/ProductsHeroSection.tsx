import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CatalogueDownloadButton } from "../../ui/CatalogueDownloadButton";

const WATERMARK_TEXT = "WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS FLANGES WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING REDUCER PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL ";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ProductsHeroSection: React.FC = () => (
  <section
    className="relative min-h-[60vh] flex flex-col bg-prayag-black overflow-hidden overflow-x-hidden"
    aria-label="Products — Prayag Steel & Engineering Co."
  >
    {/* ── Watermark keyword texture ───────────────────────────────── */}
    <div
      className="absolute inset-0 p-4 sm:p-8 select-none pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <p
        className="text-sm sm:text-lg lg:text-xl font-body font-bold uppercase tracking-[0.25em] text-justify text-white break-words"
        style={{ opacity: 0.035, lineHeight: 2.2 }}
      >
        {WATERMARK_TEXT.repeat(10)}
      </p>
    </div>

    {/* ── Red geometric ring decoration ──────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
      className="absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none z-10"
      aria-hidden="true"
    >
      <div className="relative w-[560px] h-[560px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/20" />
        <div className="absolute inset-16 rounded-full border border-prayag-red/15" />
        <div className="absolute inset-32 rounded-full border border-prayag-red/25" />
        <div className="absolute inset-48 rounded-full bg-prayag-red/5 rounded-full" />
      </div>
    </motion.div>

    {/* ── Right vertical accent stripe ───────────────────────────── */}
    <div
      className="absolute right-0 top-0 bottom-0 w-px pointer-events-none z-10"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(227,30,36,0.5), transparent)" }}
      aria-hidden="true"
    />

    {/* ── Main content ───────────────────────────────────────────── */}
    <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Side: Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 relative z-30 -mt-8 lg:-mt-16"
        >
          {/* Eyebrow tag */}
          <motion.div variants={fadeIn} className="mb-8">
            <span
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-prayag-red/30 bg-prayag-red/10"
              role="text"
            >
              <span className="w-2 h-2 rounded-full bg-prayag-red animate-pulse" aria-hidden="true" />
              <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
                MANUFACTURER & SUPPLIER IN INDIA · EST. 1994
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={slideUp}
            className="font-heading font-black uppercase leading-[0.9] tracking-tighter text-white mb-8"
          >
            <span className="block text-4xl sm:text-5xl lg:text-7xl text-gray-400">
              Four Divisions.
            </span>
            <span className="block text-3xl sm:text-6xl lg:text-6xl mt-2">
              One Standard
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-[6rem] xl:text-[6.5rem] mt-1 text-prayag-red whitespace-nowrap">
              Of Excellence.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeIn}
            className="text-gray-300 font-body text-lg sm:text-2xl lg:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Pipes. Tubes. Flanges. Fittings. Precision-manufactured in Mumbai & Umbergaon for the world's most critical industries.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
          >
            <a
              href="#divisions-grid"
              className="inline-flex justify-center items-center gap-3 px-7 py-4 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:bg-red-700 hover:scale-105 active:scale-95"
              style={{ boxShadow: "0 8px 30px rgba(227,30,36,0.35)" }}
            >
              Explore Divisions
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <CatalogueDownloadButton id="products-hero-catalogue-btn" />

            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-6 py-4 border border-white/20 text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:border-prayag-red/60 hover:text-prayag-red"
            >
              Contact Sales
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hidden lg:block lg:col-span-5 relative z-30 translate-x-8 xl:translate-x-16 -mt-16 xl:-mt-24"
        >
          <div className="relative w-full max-w-[320px] xl:max-w-[380px] ml-auto aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-prayag-red/20 group">
            <img
              src="/assets/images/pages/products-hero.webp"
              alt="Prayag Steel Products"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1587845214041-f7daee97a59a?q=80&w=1000&auto=format&fit=crop';
              }}
            />
            {/* Elegant dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-prayag-black/80 via-prayag-black/20 to-transparent" />
            <div className="absolute inset-0 bg-prayag-red/10 mix-blend-overlay" />

            {/* Decorative frame elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-prayag-red/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-prayag-red/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

      </div>
    </div>

    {/* Arc transition to next section */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: "72px" }}>
        <path d="M0,72 C480,4 960,4 1440,72 L1440,72 L0,72 Z" fill="#ffffff" />
      </svg>
    </div>
  </section>
);
