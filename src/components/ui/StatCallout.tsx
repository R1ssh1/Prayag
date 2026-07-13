import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCalloutProps {
  value: string | number;
  label: string;
  suffix?: string;
  light?: boolean;
}

/**
 * StatCallout — animated counter stat for the stats row.
 * Value animates up when it enters the viewport.
 */
export const StatCallout: React.FC<StatCalloutProps> = ({
  value,
  label,
  suffix = "",
  light = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <div className="flex items-end gap-1">
        <span
          className={`font-heading font-black text-5xl sm:text-6xl leading-none ${
            light ? "text-white" : "text-prayag-black"
          }`}
        >
          {value}
        </span>
        {suffix && (
          <span className="font-heading font-black text-3xl text-prayag-red leading-none mb-1">
            {suffix}
          </span>
        )}
      </div>
      <span
        className={`mt-2 text-sm font-body uppercase tracking-widest font-medium ${
          light ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};
