import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

export const SnapshotSection: React.FC = () => (
  <section className="bg-off-white py-24 lg:py-36" aria-label="About Prayag Steel & Engineering">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* ── Text column ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              Our Story
            </span>
          </div>

          <SectionHeading
            text="Three Decades of Steel Excellence"
            highlightWords={["Steel", "Excellence"]}
            as="h2"
            className="mb-8"
          />

          <div className="space-y-5 mb-8">
            <p className="text-gray-600 font-body leading-relaxed text-[17px]">
              Founded in 1994, Prayag Steel &amp; Engineering Company has grown from a trading firm
              in Mumbai into a trusted manufacturer and supplier of high-performance pipes, tubes,
              and fittings for critical industries across India and overseas.
            </p>
            <p className="text-gray-600 font-body leading-relaxed text-[17px]">
              With over three decades of experience, we have built a reputation for quality,
              reliability, and innovation. Our manufacturing excellence is driven by two dedicated
              facilities:{" "}
              <strong className="text-prayag-black font-semibold">Proficient Tubes Pvt. Ltd.</strong>{" "}
              (est.&nbsp;2019), specializing in seamless and welded tubes &amp; pipes, and a
              state-of-the-art{" "}
              <strong className="text-prayag-black font-semibold">Fittings Unit</strong>{" "}
              producing a complete range of butt-weld, forged, and customized fittings.
            </p>
          </div>

          {/* Inline quick facts */}
          <dl className="grid grid-cols-2 gap-4 mb-10">
            {[
              { dt: "Founded", dd: "1994, Mumbai" },
              { dt: "Facilities", dd: "Umbergaon & Vasai" },
              { dt: "Certifications", dd: "ISO 9001:2015, PED" },
              { dt: "Coverage", dd: "India & International" },
            ].map(({ dt, dd }) => (
              <div key={dt} className="bg-white rounded-xl border border-gray-100 p-4">
                <dt className="text-[10px] font-body font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                  {dt}
                </dt>
                <dd className="font-heading font-black text-sm text-prayag-black">
                  {dd}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-prayag-red font-heading font-bold uppercase tracking-wider text-sm group"
          >
            Read Our Full Story
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* ── Image column ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Red decorative corner */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 bg-prayag-red/15 rounded-2xl z-0"
            aria-hidden="true"
          />

          {/* Main facility image */}
          <div className="relative z-10">
            <ImagePlaceholder
              path="about/facility-umergaon.webp"
              label="Prayag Steel — Umergaon manufacturing facility"
              aspectRatio="video"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Floating "30+" badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
            <div className="font-heading font-black text-5xl text-prayag-black leading-none">
              30+
            </div>
            <div className="text-gray-400 text-[10px] font-body uppercase tracking-[0.18em] mt-1.5">
              Years of Excellence
            </div>
          </div>

          {/* Second image (offset below) */}
          <div className="mt-8 ml-12">
            <ImagePlaceholder
              path="about/facility-mumbai.webp"
              label="Mumbai registered office"
              aspectRatio="video"
              className="rounded-xl shadow-md"
            />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
