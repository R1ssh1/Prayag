
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import type { Product } from "../../data/products/types";

interface ProductCardProps {
  product: Product;
  div: string;
  index: number;
  groupId?: string;
}

export function ProductCard({ product, div, index, groupId }: ProductCardProps) {
  // Extract only manufacturing type/process and size range for the card
  const keySpecs = product.specs.filter((spec) =>
    spec.label.toLowerCase().includes("manufacturing") ||
    spec.label.toLowerCase().includes("size range")
  ).slice(0, 2);

  // Use a simple transition here to avoid importing cardTransition from DivisionPage
  const transition = { duration: 0.5, delay: index * 0.1, ease: "easeOut" as const };

  return (
    <motion.div
      id={groupId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: true, margin: "-60px" }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-prayag-red/10 hover:border-prayag-red/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col scroll-mt-28 group h-full"
    >
      <Link to={`/products/${div}/${product.slug}`} className="flex flex-col flex-1 h-full focus:outline-none">
      {/* Top Image */}
      <div className="relative aspect-[4/3] bg-gray-50 border-b border-gray-100 overflow-hidden">
        <ImagePlaceholder
          path={product.image}
          label={product.name}
          aspectRatio="square"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading font-black text-lg uppercase text-prayag-black mb-3 group-hover:text-prayag-red transition-colors leading-tight">
          {product.name}
        </h3>

        <p className="font-body text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Specs list */}
        <ul className="mt-auto mb-6 space-y-2" aria-label="Key Specifications">
          {keySpecs.map((spec) => (
            <li key={spec.label} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-prayag-red/40 mt-1.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-xs text-gray-600">
                <span className="font-semibold text-gray-700 capitalize">{spec.label}:</span> {Array.isArray(spec.value) ? spec.value.join(", ") : spec.value}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="w-full mt-auto flex items-center justify-center gap-2 py-3 rounded-xl bg-prayag-red/5 text-prayag-red border border-prayag-red/20 font-body font-bold text-sm uppercase tracking-widest group-hover:bg-prayag-red group-hover:!text-white transition-all duration-300"
        >
          <span className="group-hover:!text-white">View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:!text-white" aria-hidden="true" />
        </div>
      </div>
      </Link>
    </motion.div>
  );
}
