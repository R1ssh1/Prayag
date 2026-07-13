import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ProductImageProps {
  /** Path string from Product.image — relative to assets/images/ */
  path: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "banner" | "wide" | "hero";
}

/**
 * getProductImage helper — resolves a product image path.
 * Uses a dynamic import via Vite's import.meta.glob to check if the real
 * image exists. Falls back to <ImagePlaceholder /> if it doesn't.
 *
 * This means: adding a real image = drop the file in the right folder.
 * Zero code changes required.
 */

// Pre-load all images under assets/images/ at build time (paths only, eager=false)
const imageModules = import.meta.glob("/src/assets/images/**/*.{webp,jpg,jpeg,png,svg}", {
  eager: false,
  query: "?url",
  import: "default",
});

export function useProductImage(path: string): string | null {
  const [src, setSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const key = `/src/assets/images/${path}`;
    const loader = imageModules[key];
    if (loader) {
      loader().then((url) => setSrc(url as string));
    } else {
      setSrc(null);
    }
  }, [path]);

  return src;
}

/**
 * ProductImage — renders either a real <img> or <ImagePlaceholder />.
 * Usage: <ProductImage path="products/flanges/wnrf.webp" alt="WNRF Flange" />
 */
export const ProductImage: React.FC<ProductImageProps> = ({
  path,
  alt,
  className = "",
  aspectRatio = "video",
}) => {
  const src = useProductImage(path);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <ImagePlaceholder
      path={path}
      label={alt}
      aspectRatio={aspectRatio}
      className={className}
    />
  );
};
