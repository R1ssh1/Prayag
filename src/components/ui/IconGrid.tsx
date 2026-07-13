import React from "react";
import { motion } from "framer-motion";

interface IconGridItem {
  name: string;
  icon: string;
  description?: string;
}

interface IconGridProps {
  items: IconGridItem[];
  columns?: 2 | 3 | 4 | 5 | 6 | 7;
  light?: boolean;
  compact?: boolean;
  className?: string;
}

/**
 * IconGrid — responsive grid of icon + label pairs.
 * Used for Industries Served, Why Choose Us, Core Values, etc.
 */
export const IconGrid: React.FC<IconGridProps> = ({
  items,
  columns = 4,
  light = false,
  compact = false,
  className = "",
}) => {
  const colClass: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    7: "grid-cols-2 sm:grid-cols-4 lg:grid-cols-7",
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`grid ${colClass[columns] ?? colClass[4]} ${compact ? "gap-4" : "gap-6"} ${className}`}
    >
      {items.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          className={`flex flex-col items-center text-center ${compact ? "gap-2" : "gap-3"}`}
        >
          {/* Icon */}
          <div
            className={`rounded-xl flex items-center justify-center text-2xl
              ${compact ? "w-12 h-12" : "w-16 h-16"}
              ${light
                ? "bg-white/10 border border-white/20"
                : "bg-prayag-red/10 border border-prayag-red/20"
              }`}
          >
            {item.icon}
          </div>

          {/* Label */}
          <span
            className={`font-heading font-black uppercase tracking-wide ${
              compact ? "text-xs" : "text-sm"
            } ${light ? "text-white" : "text-prayag-black"}`}
          >
            {item.name}
          </span>

          {/* Optional description */}
          {item.description && !compact && (
            <p
              className={`text-xs font-body leading-snug ${
                light ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {item.description}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
