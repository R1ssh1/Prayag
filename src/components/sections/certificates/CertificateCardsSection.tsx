import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ExternalLink } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import { certificates } from "../../../data/certificates";

// Icon map by standard keyword
const certIcons: Record<string, string> = {
  ISO: "🏅",
  PED: "🇪🇺",
  NACE: "⚗️",
  ASME: "⚙️",
};

const getIcon = (standard: string) => {
  const key = Object.keys(certIcons).find((k) => standard.includes(k));
  return key ? certIcons[key] : "📋";
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
            className="group flex flex-col bg-gray-50 hover:bg-white border border-gray-100 hover:border-prayag-red/30 hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Top accent */}
            <div className="h-1 bg-prayag-red w-full flex-shrink-0" aria-hidden="true" />

            {/* Icon area — placeholder for future certificate scan */}
            <div className="relative bg-gray-100 group-hover:bg-gray-50 transition-colors duration-300 mx-5 mt-5 rounded-xl flex flex-col items-center justify-center py-8 gap-2">
              <span className="text-4xl leading-none" role="img" aria-label={cert.title}>
                {getIcon(cert.standard)}
              </span>
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
              <span className="inline-block px-2.5 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 text-prayag-red font-heading font-black text-[9px] uppercase tracking-widest mb-3 self-start">
                {cert.standard}
              </span>

              <h3 className="font-heading font-black text-base uppercase text-prayag-black mb-1 leading-tight group-hover:text-prayag-red transition-colors duration-200">
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
                className="inline-flex items-center gap-1.5 mt-5 text-prayag-red font-heading font-black text-xs uppercase tracking-wider hover:gap-2.5 transition-all duration-200"
              >
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Request Certificate
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Notice banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-prayag-red/5 border border-prayag-red/15 rounded-2xl px-6 sm:px-10 py-6 text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-700 font-body text-sm leading-relaxed">
          <strong className="text-prayag-black font-semibold">Certificate copies are provided with every order.</strong>{" "}
          For pre-qualification or vendor approval purposes, contact our team and we will dispatch
          the relevant documentation within 24 hours.
        </p>
      </motion.div>

    </div>
  </section>
);
