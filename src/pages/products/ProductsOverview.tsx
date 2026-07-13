import React, { Suspense, lazy } from "react";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema } from "../../seo/StructuredData";
import { divisions } from "../../data/company";

// Dynamic import — only loads the four division files when the overview is visited
const ProductsOverviewContent = lazy(() =>
  import("../../data/products/index").then(() => ({
    default: function ProductsOverviewContent() {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 mb-6">
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">
              Phase 5 — Skeleton
            </span>
          </div>
          <h1 className="font-heading font-black text-5xl uppercase text-prayag-black mb-3">
            Our Products
          </h1>
          <p className="text-gray-500 font-body mb-12 max-w-2xl">
            Four divisions, one standard of excellence. Browse by division or explore the full catalog.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div: { id: string; name: string; tagline: string; description: string; slug: string }) => (
              <a
                key={div.id}
                href={`/products/${div.slug}`}
                className="group block rounded-xl border-2 border-gray-100 hover:border-prayag-red/30 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:shadow-prayag-red/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center mb-4 group-hover:bg-prayag-red/20 transition-colors">
                  <span className="text-prayag-red font-heading font-black text-xl">
                    {div.name[0]}
                  </span>
                </div>
                <h2 className="font-heading font-black text-xl uppercase text-prayag-black mb-2">
                  {div.name}
                </h2>
                <p className="text-prayag-red text-xs font-heading font-bold uppercase tracking-wider mb-3">
                  {div.tagline}
                </p>
                <p className="text-gray-500 text-sm font-body line-clamp-3">
                  {div.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      );
    },
  }))
);

export const ProductsOverview: React.FC = () => (
  <>
    <PageMeta
      title="Products — Pipes, Tubes, Fittings & Flanges | Prayag Steel"
      description="Explore Prayag Steel's complete product range: stainless steel flanges, fittings, pipes, and tubes in exotic alloys for nuclear, defence, aerospace, and industrial applications."
      canonical="https://www.prayagsteel.in/products"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
      ]}
    />
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-prayag-red border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsOverviewContent />
    </Suspense>
  </>
);
