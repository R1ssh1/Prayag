import React from "react";

interface SectionHeadingProps {
  /** Full headline text */
  text: string;
  /** Words to highlight in red (matched case-insensitively) */
  highlightWords?: string[];
  /** "h1" | "h2" | "h3" — defaults to h2 */
  as?: "h1" | "h2" | "h3";
  /** Optional subtitle below the heading */
  subtitle?: string;
  /** Center-align the heading */
  centered?: boolean;
  /** Light variant — for use on dark backgrounds */
  light?: boolean;
  className?: string;
  id?: string;
}

/**
 * SectionHeading — all-caps condensed headline with optional red word highlights.
 * Used across every section to maintain typographic consistency.
 *
 * Example:
 *   <SectionHeading
 *     text="BORN IN FIRE, BUILT TO LAST"
 *     highlightWords={["FIRE", "LAST"]}
 *   />
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  text,
  highlightWords = [],
  as: Tag = "h2",
  subtitle,
  centered = false,
  light = false,
  className = "",
  id,
}) => {
  const baseTextColor = light ? "text-white" : "text-prayag-black";
  const subtitleColor = light ? "text-gray-300" : "text-gray-500";

  // Split text into words, highlight matching ones
  const words = text.split(" ");
  const normalizedHighlights = highlightWords.map((w) => w.toUpperCase());

  return (
    <div id={id} className={`${centered ? "text-center" : ""} ${className}`}>
      <Tag
        className={`font-heading font-black uppercase tracking-tight leading-none
          text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
          ${baseTextColor}`}
      >
        {words.map((word, i) => {
          const clean = word.replace(/[^A-Z0-9]/gi, "").toUpperCase();
          const isHighlighted = normalizedHighlights.includes(clean);
          return (
            <React.Fragment key={i}>
              {isHighlighted ? (
                <span className="text-prayag-red">{word}</span>
              ) : (
                word
              )}
              {i < words.length - 1 && " "}
            </React.Fragment>
          );
        })}
      </Tag>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${subtitleColor} font-body max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
