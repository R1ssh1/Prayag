import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../ui/SectionHeading";
import { trustedBy, vision, mission, coreValues } from "../../../data/company";

const quickStats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "2", label: "Manufacturing Facilities" },
  { value: "7+", label: "Industries Served" },
  { value: "98K sq.ft.", label: "Expansion Underway" },
];

export const AboutOverviewSection: React.FC = () => (
  <section className="snap-start bg-off-white py-24 lg:py-36" aria-label="About Prayag Steel">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">

      {/* ── Company paragraph + quick stats ───────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              Who We Are
            </span>
          </div>
          <SectionHeading
            text="Built on Trust. Forged in Steel."
            highlightWords={["Trust", "Steel"]}
            as="h2"
            className="mb-8"
          />
          <div className="space-y-5 text-gray-600 font-body leading-relaxed text-[15px]">
            <p>
              Founded in 1994, Prayag Steel & Engineering Company has grown from a trading firm 
              in Mumbai into a trusted manufacturer and supplier of high-performance pipes, tubes, 
              and fittings for critical industries across India and overseas. With over three decades of 
              experience, we have built a reputation for quality, reliability, and innovation.
            </p>
            
            <p>Our manufacturing excellence is driven by two dedicated facilities:</p>
            
            <ul className="space-y-3 ml-1">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-prayag-red flex-shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-prayag-black font-semibold">Proficient Tubes Pvt. Ltd.</strong> (est. 2019) – specializing in seamless and welded tubes & pipes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-prayag-red flex-shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-prayag-black font-semibold">State-of-the-art Fittings Unit</strong> – producing a complete range of butt-weld, forged, and customized fittings.
                </span>
              </li>
            </ul>

            <p>
              With continuous investments in <strong className="text-prayag-black font-semibold">Advanced Machinery, Stringent Quality Systems, And Skilled Manpower</strong>, 
              Prayag is committed to delivering products that meet international standards (ASTM, ASME, DIN, JIS, EN, ISO) 
              and exceed customer expectations.
            </p>

            <p>
              Today, we proudly supply to industries such as <strong className="text-prayag-black font-semibold">Nuclear, Petrochemical, Defence, 
              Aerospace, Oil & Gas, Pharmaceuticals, Chemicals And Engineering</strong>, serving 
              prestigious clients like <strong className="text-prayag-black font-semibold">BARC, ISRO, NPCIL, IGCAR, ZIRCONIUM COMPLEX, DRDO AND MANY MORE</strong>.
            </p>

            <p>
              Our journey has always been guided by our belief:<br />
              <strong className="text-prayag-red font-heading tracking-wide uppercase text-lg">“STEEL. STRENGTH. PRAYAG.”</strong> – a promise of strength, precision, and trust in every product we manufacture.
            </p>

            <p>
              With a strong foundation and a vision for expansion, Prayag continues to innovate, 
              upgrade, and deliver world-class piping solutions, making us a partner of choice for 
              mission-critical projects worldwide.
            </p>
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-start gap-4 mt-4 lg:mt-16"
        >
          <div className="grid grid-cols-2 gap-4">
            {quickStats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="font-heading font-black text-4xl text-prayag-black leading-none">
                  {s.value}
                </div>
                <div className="text-gray-400 text-[10px] font-body uppercase tracking-[0.18em] mt-2 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          {/* Clients strip */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-[10px] font-body uppercase tracking-[0.22em] text-gray-400 mb-4">
              Trusted by India's Premier Institutions
            </p>
            <div className="flex flex-wrap gap-2">
              {trustedBy.map((c) => (
                <span
                  key={c.name}
                  className="inline-block px-3 py-1.5 rounded-full border border-prayag-red/20 bg-prayag-red/5 text-prayag-black font-body font-bold text-xs uppercase tracking-wider"
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Vision & Mission ───────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-prayag-black rounded-2xl p-8 lg:p-10"
        >
          <div className="w-12 h-12 rounded-xl bg-prayag-red/20 flex items-center justify-center mb-6">
            <span className="text-prayag-red font-heading font-black text-xl">V</span>
          </div>
          <h3 className="font-heading font-black text-2xl uppercase text-white mb-4">
            {vision.heading}
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">{vision.body}</p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="bg-prayag-red rounded-2xl p-8 lg:p-10"
        >
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <span className="text-white font-heading font-black text-xl">M</span>
          </div>
          <h3 className="font-heading font-black text-2xl uppercase text-white mb-5">
            {mission.heading}
          </h3>
          <ul className="space-y-3">
            {mission.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3 text-white/85 font-body text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0 mt-2" aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── Core Values ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              What We Stand For
            </span>
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          </div>
          <SectionHeading
            text="Our Core Values"
            highlightWords={["Core", "Values"]}
            as="h2"
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group bg-white rounded-2xl border border-gray-100 p-7 hover:border-prayag-red/30 hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: "0 0 0 0 transparent" }}
            >
              {/* Number accent */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-prayag-red/10 group-hover:bg-prayag-red group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <span className="font-heading font-black text-lg text-prayag-red group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="h-px flex-1 ml-4 bg-gray-100 group-hover:bg-prayag-red/20 transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase text-prayag-black mb-2 group-hover:text-prayag-red transition-colors duration-200">
                {value.title}
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);
