import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { legacyTimeline } from "../../../data/company";

const StarryBackground = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const bgY = useTransform(scrollYProgress, [0, 1], ["-30%", "60%"]);

  const stars = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200 - 50}%`,
      size: Math.random() * 5 + 1 + "px",
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: `${Math.random() * 7 + 2}s`,
      animationDelay: `${Math.random() * 0.5}s`
    }));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ y: bgY }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white/80 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </motion.div>
  );
};

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const earthY = useTransform(smoothProgress, [0, 1], ["-10%", "30%"]);
  const earthRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  const moonY = useTransform(smoothProgress, [0, 1], ["10%", "-20%"]);
  const moonRotate = useTransform(smoothProgress, [0, 1], [-10, 40]);

  const rocketTop = useTransform(smoothProgress, [0, 1], ["3%", "90%"]);
  const rocketLeft = useTransform(smoothProgress, [0, 1], ["1%", "85%"]);

  return (
    <section
      id="legacy"
      ref={containerRef}
      className="bg-prayag-black py-24 lg:py-36 relative overflow-hidden overflow-x-hidden"
      aria-label="The Steel Legacy — Company Timeline"
    >
      {/* Background Starfield */}
      <StarryBackground scrollYProgress={smoothProgress} />

      {/* Earth Parallax */}
      <motion.div
        className="absolute top-[0%] -left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] md:-left-[10%] opacity-40 z-0 pointer-events-none"
        style={{ y: earthY, rotate: earthRotate }}
      >
        <img src="/assets/images/about/earth.webp" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Moon Parallax */}
      <motion.div
        className="absolute bottom-[5%] -right-[15%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] md:-right-[5%] opacity-50 z-0 pointer-events-none"
        style={{ y: moonY, rotate: moonRotate }}
      >
        <img src="/assets/images/about/moon.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Rocket Parallax */}
      <motion.div
        className="absolute w-[120px] md:w-[350px] opacity-80 z-0 pointer-events-none"
        style={{ top: rocketTop, left: rocketLeft }}
      >
        <img src="/assets/images/about/rocket.png" alt="" className="w-full h-auto object-contain rotate-[157deg] md:rotate-[140deg] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              1994 – Present
            </span>
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          </div>
          <SectionHeading
            text="The Steel Legacy of Prayag"
            highlightWords={["Steel", "Legacy"]}
            as="h2"
            centered
            light
            subtitle="Three decades of forging trust — from a single Mumbai office to the Moon and beyond."
          />
        </motion.div>

        {/* ── Timeline ───────────────────────────────────────────────── */}
        <div className="relative">

          {/*
          Mobile spine: left-aligned at 16px from left edge (center of the 32px dot)
          Desktop spine: centered
        */}
          <div
            className="absolute top-0 bottom-0 w-0.5 left-4 lg:left-1/2 lg:-translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(227,30,36,0.5) 10%, rgba(227,30,36,0.5) 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <ol className="space-y-0" role="list">
            {legacyTimeline.map((item, index) => {
              const isLeft = index % 2 === 0; // even → desktop left slot
              return (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.04 }}
                  className="relative"
                >

                  {/* ── MOBILE layout (< lg) ───────────────────────── */}
                  <div className="lg:hidden flex items-start gap-5 pb-10">
                    {/* Dot on the spine */}
                    <div className="flex-shrink-0 z-10 mt-4">
                      <div className="w-8 h-8 rounded-full border-2 border-prayag-red/60 bg-prayag-black flex items-center justify-center hover:border-prayag-red transition-colors duration-200">
                        <span className="text-sm leading-none" role="img" aria-label={item.title}>
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-prayag-red/20 border border-prayag-red/30 text-prayag-red font-body font-bold text-[10px] uppercase tracking-widest mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-body font-bold text-base uppercase text-white mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 font-body text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* ── DESKTOP layout (≥ lg) ──────────────────────── */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] lg:mb-2">

                    {/* Left column */}
                    <div className="pr-8 pb-14 flex justify-end">
                      {isLeft && <DesktopCard item={item} align="right" />}
                    </div>

                    {/* Center dot */}
                    <div className="flex justify-center items-start pt-5">
                      <div className="w-12 h-12 rounded-full border-2 border-prayag-red/50 bg-prayag-black flex items-center justify-center hover:border-prayag-red hover:scale-110 transition-all duration-200 z-10">
                        <span className="text-xl leading-none" role="img" aria-label={item.title}>
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="pl-8 pb-14 flex justify-start">
                      {!isLeft && <DesktopCard item={item} align="left" />}
                    </div>
                  </div>

                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-4 lg:mt-8 text-center"
        >
          <div className="inline-block bg-prayag-red/10 border border-prayag-red/20 rounded-2xl px-6 sm:px-10 py-6 max-w-2xl">
            <p className="text-white font-body text-base sm:text-lg leading-relaxed">
              ⚡ From Earth to the Moon, from reactors to rockets —{" "}
              <span className="text-prayag-red font-semibold">
                Prayag has been the steel spine of India's boldest scientific dreams.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// ── Desktop card sub-component ─────────────────────────────────────────────────
const DesktopCard: React.FC<{
  item: (typeof legacyTimeline)[0];
  align: "left" | "right";
}> = ({ item, align }) => (
  <div
    className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-prayag-red/40 rounded-2xl p-6 w-full max-w-md transition-all duration-300 ${align === "right" ? "text-right" : "text-left"
      }`}
  >
    <span className="inline-block px-3 py-1 rounded-full bg-prayag-red/20 border border-prayag-red/30 text-prayag-red font-body font-bold text-[10px] uppercase tracking-widest mb-3">
      {item.year}
    </span>
    <h3 className="font-body font-bold text-xl uppercase text-white mb-2 group-hover:text-prayag-red transition-colors duration-200">
      {item.title}
    </h3>
    <p className="text-gray-400 font-body text-sm leading-relaxed">
      {item.description}
    </p>
  </div>
);
