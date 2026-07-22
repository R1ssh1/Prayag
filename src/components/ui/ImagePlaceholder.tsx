import React, { useState } from "react";

interface ImagePlaceholderProps {
  /** Expected file path relative to assets/images/ — shown as caption */
  path: string;
  /** Human-readable description of what goes here */
  label?: string;
  /** Aspect ratio class: "square" | "video" | "portrait" | "banner" | "wide" | "hero" */
  aspectRatio?: "square" | "video" | "portrait" | "banner" | "wide" | "hero";
  className?: string;
  /** If true, the image is loaded immediately with high priority (use for above-the-fold heroes) */
  priority?: boolean;
}

const aspectClasses: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  banner: "aspect-[4/1]",
  wide: "aspect-[16/5]",
  hero: "aspect-[21/9]",
};

/**
 * ImagePlaceholder — renders a clearly labeled gray box wherever a real photo
 * belongs. Shows the exact expected filename so dropping in the real image
 * (at that path in assets/images/) requires zero code changes.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  path,
  label,
  aspectRatio = "video",
  className = "",
  priority = false,
}) => {
  const ar = aspectClasses[aspectRatio] ?? "aspect-video";
  const [error, setError] = useState(false);

  // Attempt to load the real image first. If it fails, fallback to the placeholder UI.
  if (!error) {
    return (
      <img
        src={`/assets/images/${path}`}
        alt={label || "Product image"}
        className={`${ar} ${className}`}
        onError={() => setError(true)}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    );
  }

  return (
    <div
      className={`relative ${ar} bg-gray-200 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center overflow-hidden ${className}`}
      aria-label={`Image placeholder: ${path}`}
      role="img"
    >
      {/* Grid lines for visual reference */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-gray-500" />
          ))}
        </div>
      </div>

      {/* Camera icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-gray-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      {/* Label */}
      {label && (
        <p className="text-gray-500 text-xs font-medium text-center px-4 mb-1">
          {label}
        </p>
      )}

      {/* File path caption */}
      <code className="text-gray-400 text-[10px] text-center px-4 break-all leading-tight">
        assets/images/{path}
      </code>
    </div>
  );
};
