import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { directorMessage } from "../../../data/company";

export const DirectorDeskSection: React.FC = () => (
  <section className="snap-start bg-white py-24 lg:py-36 overflow-x-hidden" aria-label="Director's Desk">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

        {/* ── Message column ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              Director's Desk
            </span>
          </div>

          {/* Opening pull-quote */}
          <blockquote className="mb-8">
            <div
              className="text-5xl text-prayag-red font-heading font-black leading-none mb-3 select-none"
              aria-hidden="true"
            >
              "
            </div>
            <p className="font-body text-lg sm:text-xl text-prayag-black leading-relaxed font-medium italic">
              For us, steel is not just business — it is our identity, our promise, and our strength.
              Every product we create carries a piece of our family's story, our team's dedication,
              and our client's trust.
            </p>
          </blockquote>

          {/* Full message paragraphs */}
          <div className="space-y-5 text-gray-600 font-body leading-relaxed text-[15px] mb-10">
            <p>
              In 1994, my father, <strong className="text-prayag-black font-semibold">Shri P. J. Patel</strong>, began <strong className="text-prayag-black font-semibold">Prayag Steel & Engineering Company</strong> from a small office in Mumbai. With nothing but determination, integrity, and the courage to dream, he built relationships with some of India's most prestigious institutions—<strong className="text-prayag-black font-semibold">BARC, ISRO, IGCAR, NFC, NPCIL</strong>. His vision and commitment laid the foundation of a company rooted in trust and strength.
            </p>
            <p>
              As the second generation, I feel a deep sense of pride and gratitude. Pride in the path he created, and gratitude for the trust our clients continue to place in us. Carrying forward his legacy is both an honor and a responsibility—one that inspires me every single day.
            </p>
            <p>
              From a modest trading firm, we have grown into a manufacturing group with facilities in <strong className="text-prayag-black font-semibold">Umbergaon and Vasai</strong>. This growth reflects more than capacity—it reflects a generational shift, a renewed vision, and our commitment to building for the future.
            </p>
            <p>
              But our journey does not stop here. With strong foundations in pipes, tubes, and fittings, we are also preparing to diversify into <strong className="text-prayag-black font-semibold">equipment manufacturing</strong>—a step that will transform us from a trusted supplier into a complete solutions partner for industries that demand reliability at every level.
            </p>
            <p>
              For us, steel is not just business—it is our identity, our promise, and our strength. Every product we create carries a piece of our family's story, our team's dedication, and our client's trust.
            </p>
            <p>
              As we look ahead, I invite you to join us on this journey of growth and innovation. Together, we can build partnerships that are as strong and enduring as the steel we shape.
            </p>
            <p>
              <strong className="text-prayag-red font-heading tracking-wide uppercase text-lg">STEEL. STRENGTH. PRAYAG.</strong>
            </p>
          </div>

          {/* Signature */}
          <div className="border-t border-gray-100 pt-7">
            <p className="text-gray-400 font-body text-sm">With gratitude and regards,</p>
            <p className="font-body font-bold text-prayag-black text-base uppercase">
              {directorMessage.name}
            </p>
            <p className="text-gray-400 font-body text-sm">{directorMessage.designation}</p>
          </div>
        </motion.div>

        {/* ── Portrait column ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            {/* Red corner accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 bg-prayag-red/15 rounded-2xl z-0"
              aria-hidden="true"
            />
            {/* Portrait placeholder */}
            <div className="relative z-10 bg-prayag-charcoal/5 rounded-2xl aspect-[3/4] flex items-center justify-center border border-gray-100 shadow-xl overflow-hidden">
              <User className="w-1/3 h-1/3 text-gray-300" strokeWidth={1} />
            </div>
            {/* Floating name card */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-prayag-black rounded-2xl shadow-2xl p-5 max-w-[200px]">
              <p className="text-white font-body font-bold  uppercase leading-tight">
                Jayesh Patel
              </p>
              <p className="text-prayag-red text-[10px] font-body uppercase tracking-[0.18em] mt-1">
                Director, 2023–Present
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
