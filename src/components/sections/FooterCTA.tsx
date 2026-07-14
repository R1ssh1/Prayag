import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { CatalogueDownloadButton } from "../ui/CatalogueDownloadButton";

export const FooterCTA: React.FC = () => {
  return (
    <section className="bg-prayag-red py-24 relative overflow-hidden" aria-label="Call to Action">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none" aria-hidden="true">
        <span className="font-heading font-black text-[20vw] leading-none whitespace-nowrap text-white">
          PRAYAG
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white mb-6">
            Ready to Build with the Best?
          </h2>
          <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Contact our engineering team today for technical consultation, material specifications, and competitive quotes.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-prayag-red font-body font-bold uppercase tracking-wider text-[15px] rounded-xl transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:prayagsteelindia@yahoo.co.in"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black/20 text-white font-body font-semibold uppercase tracking-wider text-[15px] rounded-xl border border-white/20 hover:bg-black/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us directly
            </a>
            
            <div className="w-full sm:w-auto mt-4 sm:mt-0 flex justify-center">
               <CatalogueDownloadButton variant="white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
