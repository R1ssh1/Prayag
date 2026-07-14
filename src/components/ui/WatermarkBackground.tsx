import React from "react";

interface WatermarkBackgroundProps {
  /** Keywords to repeat as watermark text */
  keywords?: string[];
  className?: string;
  children: React.ReactNode;
}

const defaultKeywords = [
  "ASTM", "ASME", "PIPES", "TUBES", "FITTINGS", "FLANGES",
  "SS316L", "INCONEL", "DUPLEX", "HASTELLOY", "MONEL", "TITANIUM",
  "NUCLEAR", "DEFENCE", "AEROSPACE", "ISO9001", "PRECISION",
  "FORGED", "SEAMLESS", "WELDED", "STRENGTH", "INTEGRITY",
];

/**
 * WatermarkBackground — wraps content in a section with a repeating
 * low-opacity keyword texture behind it (the industrial signature motif
 * from the Prayag brochure).
 */
export const WatermarkBackground: React.FC<WatermarkBackgroundProps> = ({
  keywords = defaultKeywords,
  className = "",
  children,
}) => {
  // Repeat keywords enough times to fill any screen width
  const repeatedKeywords = Array.from({ length: 5 }, () => keywords).flat();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Watermark text layer */}
      <div
        className="absolute inset-0 flex flex-wrap content-start gap-x-6 gap-y-3 p-8 select-none pointer-events-none"
        aria-hidden="true"
      >
        {repeatedKeywords.map((kw, i) => (
          <span
            key={i}
            className="text-[11px] font-body font-extrabold uppercase tracking-[0.2em] text-gray-400 opacity-20 whitespace-nowrap"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Content on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
