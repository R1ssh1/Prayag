import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon?: string;
  isLast?: boolean;
  /** "left" | "right" for alternating layout on desktop */
  side?: "left" | "right";
  index?: number;
}

/**
 * TimelineItem — a single entry in the company history or legacy timeline.
 * Used in both the Journey timeline and the Steel Legacy timeline.
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  icon = "📌",
  isLast = false,
  side = "left",
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex gap-6 pb-10 ${isLast ? "pb-0" : ""}`}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gradient-to-b from-prayag-red/40 to-transparent" />
      )}

      {/* Year + Icon marker */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-prayag-black border-2 border-prayag-red flex items-center justify-center text-xl shadow-lg shadow-prayag-red/20">
          {icon}
        </div>
        <span className="font-body font-bold  text-prayag-red tracking-wider">
          {year}
        </span>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3 className="font-body font-bold text-lg uppercase text-prayag-black leading-tight">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 font-body leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
