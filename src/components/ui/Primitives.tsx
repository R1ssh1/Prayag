import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

/**
 * Card — generic container with subtle hover lift animation.
 * Used for product cards, division cards, certificate cards, etc.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 20px 40px rgba(227, 30, 36, 0.12)" } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// ── Badge ─────────────────────────────────────────────────────────────────────

interface BadgeProps {
  label: string;
  variant?: "red" | "dark" | "outline" | "gray";
  className?: string;
}

/**
 * Badge — pill tag for standards, materials, pressure ratings, etc.
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "outline",
  className = "",
}) => {
  const variants = {
    red: "bg-prayag-red text-white",
    dark: "bg-prayag-black text-white",
    outline: "border border-gray-300 text-gray-600",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-block px-3 py-0.5 rounded-full text-xs font-body font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

// ── Button ────────────────────────────────────────────────────────────────────

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  id?: string;
}

/**
 * Button — primary/secondary/ghost/outline variants with hover animations.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  id,
}) => {
  const variantClasses = {
    primary: "bg-prayag-red hover:bg-red-700 text-white shadow-lg shadow-prayag-red/30",
    secondary: "bg-prayag-black hover:bg-gray-900 text-white shadow-lg shadow-black/20",
    ghost: "bg-transparent hover:bg-gray-100 text-prayag-black",
    outline: "bg-transparent border-2 border-prayag-red text-prayag-red hover:bg-prayag-red hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-lg font-heading font-bold
    uppercase tracking-wider transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-prayag-red focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        id={id}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      id={id}
    >
      {children}
    </motion.button>
  );
};
