import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants, animate, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CatalogueDownloadButton } from "../ui/CatalogueDownloadButton";

const WATERMARK_TEXT = "WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS FLANGES WNRF SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES ELBOW TEE REDUCER STAINLESS STEEL PIERCING REDUCER PICKLING INCONEL MONEL HASTELLOY DUPLEX FORGED FITTINGS SORF BLRF WNST WNSG BLLT BLSG PIPES TUBES TUBES ELBOW TEE REDUCER STAINLESS STEEL ";

const heroStats = [
  { end: 30, suffix: "+", label: "Years of Excellence" },
  { end: 7, suffix: "+", label: "Industries Served" },
  { end: 100, suffix: "+", label: "Trusted Clients" },
  { end: 98, suffix: "K", label: "Sq. Ft. Factory" },
];

const AnimatedNumber = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, end, {
        duration: 3.5,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const HeroSection: React.FC = () => (
  <section
    className="relative min-h-screen flex flex-col bg-prayag-black overflow-hidden overflow-x-hidden"
    aria-label="Hero — Prayag Steel & Engineering Co."
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
    <div className="relative z-10 flex-1 flex flex-col justify-start max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-full lg:max-w-2xl xl:max-w-3xl relative z-30"
      >
        {/* Eyebrow tag */}
        <motion.div variants={fadeIn} className="mb-8">
          <span
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-prayag-red/30 bg-prayag-red/10"
            role="text"
          >
            <span className="w-2 h-2 rounded-full bg-prayag-red animate-pulse" aria-hidden="true" />
            <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]">
              Est. 1994 · Mumbai & Umergaon, India
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={slideUp}
          className="font-heading font-black uppercase leading-[0.88] tracking-tighter text-white mb-8"
        >
          <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Steel Is Strong,
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 text-gray-400 font-black">
            But Our Commitment Is
          </span>
          <span
            className="block text-6xl sm:text-8xl lg:text-[7.5rem] mt-2 text-prayag-red"
            style={{ WebkitTextStroke: "0px transparent" }}
          >
            Stronger.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={fadeIn}
          className="text-gray-300 font-body text-lg sm:text-xl lg:text-2xl mb-10 max-w-xl leading-relaxed"
        >
          Forging trust, strength, and precision since 1994.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
        >
          <Link
            to="/products"
            id="hero-explore-products-btn"
            className="inline-flex justify-center items-center gap-3 px-7 py-4 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:bg-red-700 hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 8px 30px rgba(227,30,36,0.35)" }}
          >
            Explore Products
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <CatalogueDownloadButton id="hero-catalogue-btn" />

          <Link
            to="/contact"
            id="hero-contact-btn"
            className="inline-flex justify-center items-center gap-2 px-6 py-4 border border-white/20 text-white font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-all duration-200 hover:border-prayag-red/60 hover:text-prayag-red"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Staggered Images (Desktop absolute, Mobile static) ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-32 sm:mt-32 lg:mt-0 lg:absolute lg:right-8 xl:right-16 lg:top-[15%] z-20 flex relative w-full sm:w-[450px] lg:w-[450px] xl:w-[550px] self-center pointer-events-none"
      >
        {/* Main image */}
        <div className="w-[75%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 relative z-10 pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
          <img src="/assets/images/pages/hero-big.webp" alt="Manufacturing Flanges" className="w-full h-auto object-cover aspect-[4/3]" />
        </div>
        {/* Overlapping smaller image */}
        <div className="w-[45%] absolute -top-28 -right-4 lg:-right-8 xl:-right-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-prayag-red/40 z-20 pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
          <img src="/assets/images/pages/hero-small.webp" alt="Steel Pipes" className="w-full h-auto object-cover object-top aspect-square" />
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-20 lg:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10 max-w-2xl"
        aria-label="Company highlights"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-start">
            <span className="font-heading font-black text-white text-4xl sm:text-5xl leading-none tabular-nums">
              <AnimatedNumber end={stat.end} suffix={stat.suffix} />
            </span>
            <span className="text-gray-500 text-[10px] font-body uppercase tracking-[0.18em] mt-2 leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Arc transition to next section */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: "72px" }}>
        <path d="M0,72 C480,4 960,4 1440,72 L1440,72 L0,72 Z" fill="#F5F5F5" />
      </svg>
    </div>
  </section>
);
