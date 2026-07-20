import React, { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { legacyTimeline } from "../../../data/company";

const StarryBackground = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const bgY = useTransform(scrollYProgress, [0, 1], ["-30%", "60%"]);

  const { movingStars, staticStars } = useMemo(() => {
    const generateStars = (count: number, topRange: [number, number]) =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * (topRange[1] - topRange[0]) + topRange[0]}%`,
        size: Math.random() * 4 + 1 + "px",
        opacity: Math.random() * 0.5 + 0.2,
        animationDuration: `${Math.random() * 7 + 2}s`,
        animationDelay: `${Math.random() * 0.5}s`
      }));

    return {
      movingStars: generateStars(300, [-50, 150]),
      staticStars: generateStars(200, [0, 100])
    };
  }, []);

  return (
    <>
      {/* Static Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {staticStars.map((star) => (
          <div
            key={`static-${star.id}`}
            className="absolute rounded-full bg-white/60 animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity * 0.6,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Moving Stars */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {movingStars.map((star) => (
          <div
            key={`moving-${star.id}`}
            className="absolute rounded-full bg-white/90 animate-pulse"
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
    </>
  );
};

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const earthRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  const moonRotate = useTransform(smoothProgress, [0, 1], [-10, 40]);

  const rocketTop = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ["85%", "55%", "25%", "5%"]);
  const rocketLeft = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ["5%", "35%", "65%", "85%"]);
  const rocketScale = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.8, 1.5]);

  const rocketRotateDesktop = useTransform(smoothProgress, [0, 1], [40, 85]);
  const rocketRotateMobile = useTransform(smoothProgress, [0, 1], [-10, 65]); // Mobile-specific rotation

  const rocketRotate = isMobile ? rocketRotateMobile : rocketRotateDesktop;

  return (
    <section
      id="legacy"
      ref={containerRef}
      className="bg-prayag-black py-24 lg:py-36 relative overflow-clip overflow-x-clip"
      aria-label="The Steel Legacy — Company Timeline"
    >
      {/* Sticky Background Container */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Starfield */}
          <StarryBackground scrollYProgress={smoothProgress} />

          {/* Earth Parallax */}
          <motion.div
            className="absolute -bottom-[12%] -left-[25%] lg:-bottom-[35%] lg:-left-[15%] w-[380px] h-[380px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-40 md:opacity-50 z-0 pointer-events-none"
            style={{ rotate: earthRotate }}
          >
            <img src="/assets/images/about/earth.webp" alt="" className="w-full h-full object-contain" />
          </motion.div>

          {/* Moon Parallax */}
          <motion.div
            className="absolute top-[-4%] -right-[25%] lg:-top-[15%] lg:-right-[12%] w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] opacity-50 md:opacity-60 z-0 pointer-events-none"
            style={{ rotate: moonRotate }}
          >
            <img src="/assets/images/about/moon.png" alt="" className="w-full h-full object-contain" />
          </motion.div>

          {/* Rocket Parallax */}
          <motion.div
            className="absolute w-[180px] md:w-[180px] lg:w-[250px] opacity-90 z-0 pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            style={{ top: rocketTop, left: rocketLeft, scale: rocketScale, rotate: rocketRotate }}
          >
            <img src="/assets/images/about/rocket.png" alt="" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </div>

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
