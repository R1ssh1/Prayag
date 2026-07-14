import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import pdfIcon from "../../assets/pdf-svgrepo-com.svg";

interface CatalogueDownloadButtonProps {
  /** Path to the PDF in public/ directory */
  pdfPath?: string;
  className?: string;
  id?: string;
  variant?: "primary" | "white";
}

export const CatalogueDownloadButton: React.FC<CatalogueDownloadButtonProps> = ({
  pdfPath = "/catalogue/prayag-steel-catalogue.pdf",
  className = "",
  id = "catalogue-download-btn",
  variant = "primary",
}) => {
  const isWhite = variant === "white";

  return (
    <motion.a
      id={id}
      href={pdfPath}
      download="Prayag-Steel-Catalogue.pdf"
      whileHover={{ scale: 1.05, boxShadow: isWhite ? "0 12px 30px rgba(0, 0, 0, 0.15)" : "0 12px 30px rgba(227, 30, 36, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center px-4 py-2.5 rounded-xl border no-underline select-none group ${isWhite ? "bg-white text-prayag-red border-white shadow-xl shadow-black/10" : "bg-prayag-red text-white border-red-500/50 shadow-lg"} ${className}`}
      aria-label="Download Prayag Steel Catalogue PDF"
      title="Download Our Catalogue — Prayag Steel & Engineering Co."
    >
      <img src={pdfIcon} alt="PDF" className="w-5 h-5 object-contain scale-300 ml-2" />

      <div className={`flex flex-col items-start leading-none ml-6 mr-3 ${isWhite ? "text-prayag-black" : "text-white"}`}>
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.15em] opacity-90 mb-0.5">
          Download
        </span>
        <span className="text-[13px] font-body font-black uppercase tracking-wider">
          Catalogue
        </span>
      </div>

      <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors flex-shrink-0 ${isWhite ? "bg-prayag-red/10 group-hover:bg-prayag-red/20" : "bg-white/20 group-hover:bg-white/30"}`}>
        <Download className={`w-4 h-4 group-hover: transition-transform duration-300 ${isWhite ? "text-prayag-red" : "text-white"}`} strokeWidth={2.5} aria-hidden="true" />
      </div>
    </motion.a>
  );
};
