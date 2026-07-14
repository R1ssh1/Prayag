import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ExternalLink } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import { certificates } from "../../../data/certificates";

const getStandardKey = (standard: string) => {
  if (standard.includes("ISO")) return "ISO";
  if (standard.includes("PED")) return "PED";
  if (standard.includes("NACE")) return "NACE";
  if (standard.includes("ASME")) return "ASME";
  return "ISO";
};

export const CertificateCardsSection: React.FC = () => (
  <section
    id="certifications"
    className="bg-white py-24 lg:py-36"
    aria-label="Certifications & Compliance"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Standards We Are Certified To
          </span>
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
        </div>
        <SectionHeading
          text="Our Certifications"
          highlightWords={["Certifications"]}
          as="h2"
          centered
        />
        <p className="mt-5 text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
          Prayag Steel holds certifications and compliance approvals from internationally
          recognised bodies. Certificate scans are available on request.
        </p>
      </motion.div>

      {/* Certificate cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="group flex flex-col bg-gray-50 hover:bg-white border border-gray-100 hover:border-prayag-red/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(227,30,36,0.15)]"
          >
            {/* Top accent */}
            <div className="h-1 bg-prayag-red w-full flex-shrink-0" aria-hidden="true" />

            {/* Image area */}
            <div className="relative bg-white group-hover:bg-gray-50 transition-colors duration-300 mx-5 mt-5 rounded-xl border border-gray-100 flex flex-col items-center justify-center py-6 gap-2">
              <img
                src={`/assets/images/standards/${getStandardKey(cert.standard)}.webp`}
                alt={cert.title}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex items-center gap-1.5 mt-2">
                <Lock className="w-3 h-3 text-gray-400" aria-hidden="true" />
                <span className="text-gray-400 font-body text-[10px] uppercase tracking-widest">
                  Available on Request
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              {/* Standard badge */}
              <span className="inline-block px-2.5 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 text-prayag-red font-body font-extrabold text-[9px] uppercase tracking-widest mb-3 self-start">
                {cert.standard}
              </span>

              <h3 className="font-body font-bold text-lg text-prayag-black mb-1 leading-tight group-hover:text-prayag-red transition-colors duration-200">
                {cert.title}
              </h3>
              <p className="text-gray-400 font-body text-xs mb-3">
                Issued by: <span className="text-gray-600">{cert.issuingBody}</span>
              </p>
              <p className="text-gray-500 font-body text-sm leading-relaxed flex-1">
                {cert.description}
              </p>

              {/* Request CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 mt-5 text-prayag-red font-body font-bold  uppercase tracking-wider hover:gap-2.5 transition-all duration-200"
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Request Certificate
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
