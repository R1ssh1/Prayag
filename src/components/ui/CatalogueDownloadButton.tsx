import React from "react";
import { motion } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";

interface CatalogueDownloadButtonProps {
  /** Path to the PDF in public/ directory */
  pdfPath?: string;
  className?: string;
  id?: string;
}

/**
 * CatalogueDownloadButton — styled PDF download pill.
 *
 * Visual anatomy (left → right):
 *   [ Red PDF icon zone ]  [ "DOWNLOAD" / "CATALOG" text ]  [ ↓ arrow circle ]
 *
 * The PDF should be placed at: public/catalogue/prayag-steel-catalogue.pdf
 * Drop the file there — zero code changes needed after that.
 *
 * Listed in DOCS_MANIFEST.md:
 *   Expected file: public/catalogue/prayag-steel-catalogue.pdf
 */
export const CatalogueDownloadButton: React.FC<CatalogueDownloadButtonProps> = ({
  pdfPath = "/catalogue/prayag-steel-catalogue.pdf",
  className = "",
  id = "catalogue-download-btn",
}) => {
  return (
    <motion.a
      id={id}
      href={pdfPath}
      download="Prayag-Steel-Catalogue.pdf"
      whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(227, 30, 36, 0.25)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex items-center gap-0 rounded-full bg-gray-100 overflow-hidden
        border border-gray-200 shadow-md no-underline select-none ${className}`}
      aria-label="Download Prayag Steel Catalogue PDF"
      title="Download Our Catalogue — Prayag Steel & Engineering Co."
    >
      {/* Left zone — PDF PNG icon */}
      <div className="flex items-center justify-center w-10 h-10 m-2 flex-shrink-0 overflow-hidden">
        <img
          src="/assets/images/pages/pdf.png"
          alt="PDF"
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Center text */}
      <div className="flex flex-col items-start leading-tight px-3">
        <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-gray-500">
          Download
        </span>
        <span className="text-sm font-heading font-black uppercase tracking-wide text-prayag-red">
          Catalogue
        </span>
      </div>

      {/* Right zone — down arrow circle */}
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 mr-1.5 flex-shrink-0">
        <ChevronDown className="w-4 h-4 text-gray-600" strokeWidth={2.5} aria-hidden="true" />
      </div>
    </motion.a>
  );
};
